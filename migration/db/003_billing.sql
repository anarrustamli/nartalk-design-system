-- ============================================================
-- 003 — billing foundation for Stripe + Paddle
--
-- The subscriptions table already carries provider / provider_customer_id /
-- provider_subscription_id, so it supports either processor without change.
-- This migration adds only what dual-provider billing additionally needs:
-- an idempotency ledger for webhooks, and a server-side limit check.
--
-- No processor keys are required to apply this.
-- ============================================================

begin;

-- ── billing_events ──────────────────────────────────────────
-- Webhooks arrive at-least-once and out of order. Recording each processed
-- event id makes handlers idempotent: a redelivered event is a no-op instead
-- of a double upgrade or a double cancel. (provider, event_id) is the key
-- because Stripe and Paddle id spaces are independent.
create table if not exists public.billing_events (
  id bigint generated always as identity primary key,
  provider text not null check (provider in ('stripe', 'paddle')),
  event_id text not null,
  event_type text not null,
  workspace_id uuid references public.workspaces(id) on delete set null,
  payload jsonb not null default '{}'::jsonb,
  processed_at timestamptz not null default now(),
  unique (provider, event_id)
);
create index if not exists billing_events_ws_idx on public.billing_events(workspace_id);

alter table public.billing_events enable row level security;
-- Written only by the webhook route (service role). Owners may read their own
-- billing history; nobody writes through a user session.
drop policy if exists billing_events_read on public.billing_events;
create policy billing_events_read on public.billing_events
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

-- ── plan on subscriptions: allow the three known plans ───────
-- Guard against a webhook writing an unknown plan string that the app's
-- limit table would silently treat as unlimited.
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'subscriptions_plan_check') then
    alter table public.subscriptions
      add constraint subscriptions_plan_check
      check (plan in ('free', 'pro', 'business'));
  end if;
end $$;

-- ── nt_plan_limit — the ceilings, in one place ──────────────
-- Kept in the database (not only in TS) so the limit check below and any SQL
-- report agree. NULL means "no limit".
create or replace function public.nt_plan_limit(plan_name text, resource text)
returns integer
language sql
immutable
as $$
  select case plan_name
    when 'free' then case resource
      when 'bots' then 1
      when 'responses_per_month' then 100
      when 'members' then 1
      else null end
    when 'pro' then case resource
      when 'bots' then 10
      when 'members' then 5
      else null end          -- responses unlimited on pro
    when 'business' then null -- everything unlimited
    else 0                    -- unknown plan: allow nothing
  end;
$$;

-- ── nt_within_limit — the paywall gate ──────────────────────
-- Called from server routes before creating a bot or accepting a response.
-- Returns true when the workspace is under its plan ceiling for `resource`.
-- SECURITY DEFINER so it can read subscriptions and usage_counters regardless
-- of the caller's RLS view — the answer must not depend on who is asking.
create or replace function public.nt_within_limit(ws uuid, resource text)
returns boolean
language plpgsql
stable
security definer
set search_path to ''
as $$
declare
  plan_name text;
  lim integer;
  used integer;
begin
  select plan into plan_name from public.subscriptions where workspace_id = ws;
  plan_name := coalesce(plan_name, 'free');
  lim := public.nt_plan_limit(plan_name, resource);

  if lim is null then
    return true;  -- unlimited
  end if;

  if resource = 'bots' then
    select count(*) into used from public.bots
      where workspace_id = ws and coalesce(status, '') <> 'archived';
  elsif resource = 'responses_per_month' then
    select coalesce(responses_count, 0) into used from public.usage_counters
      where workspace_id = ws and period = to_char(now(), 'YYYY-MM');
  elsif resource = 'members' then
    select count(*) into used from public.workspace_members where workspace_id = ws;
  else
    used := 0;
  end if;

  return coalesce(used, 0) < lim;
end $$;

revoke all on function public.nt_within_limit(uuid, text) from public;
grant execute on function public.nt_within_limit(uuid, text) to authenticated;

commit;
