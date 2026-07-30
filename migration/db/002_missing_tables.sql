-- ============================================================
-- 002 — the six tables the advertised features need
--
-- Additive only. The nine existing tables are not touched: their design
-- (questions inside forms.schema, answers inside submissions.answers) is
-- sound and already carries data.
--
-- Conventions deliberately match what is already here rather than what a
-- greenfield schema would prefer: text status columns instead of enums,
-- gen_random_uuid() primary keys, bigint identity for append-only logs, and
-- RLS through private.is_workspace_member / private.can_edit_workspace.
--
-- Idempotent: safe to re-run.
-- ============================================================

begin;

-- ── api_keys ────────────────────────────────────────────────
-- The raw key is shown once, at creation. Only its hash is stored, so a
-- database leak cannot be replayed against the API.
create table if not exists public.api_keys (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null,
  env text not null default 'test' check (env in ('test', 'live')),
  -- Shown in the UI (nar_live_8fK2…): enough to identify, not to use.
  prefix text not null,
  key_hash text not null unique,
  scopes jsonb not null default '[]'::jsonb,
  created_by uuid references public.profiles(id) on delete set null,
  last_used_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists api_keys_ws_idx on public.api_keys(workspace_id);

-- ── webhook_endpoints ───────────────────────────────────────
create table if not exists public.webhook_endpoints (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  url text not null,
  -- HMAC-SHA256 signing secret (whsec_…).
  secret text not null,
  events jsonb not null default '[]'::jsonb,
  enabled boolean not null default true,
  -- Auto-disable after 20 consecutive failures so a dead endpoint stops
  -- consuming retry budget; disabled_at records when that happened.
  consecutive_failures integer not null default 0,
  disabled_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists webhook_endpoints_ws_idx on public.webhook_endpoints(workspace_id);

-- ── webhook_deliveries ──────────────────────────────────────
-- Append-only log, so bigint identity rather than a uuid: it is written far
-- more often than it is referenced, and never by external id.
create table if not exists public.webhook_deliveries (
  id bigint generated always as identity primary key,
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  endpoint_id uuid references public.webhook_endpoints(id) on delete cascade,
  event text not null,
  url text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending'
    check (status in ('pending', 'delivered', 'failed', 'retrying')),
  response_code integer,
  latency_ms integer,
  attempts integer not null default 0,
  error text,
  created_at timestamptz not null default now(),
  delivered_at timestamptz
);
create index if not exists webhook_deliveries_ws_created_idx
  on public.webhook_deliveries(workspace_id, created_at desc);
create index if not exists webhook_deliveries_endpoint_idx
  on public.webhook_deliveries(endpoint_id);

-- ── otp_codes ───────────────────────────────────────────────
-- Stores an HMAC of the code (peppered with OTP_PEPPER), never the digits.
create table if not exists public.otp_codes (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  chat_id text not null,
  phone text,
  code_hash text not null,
  status text not null default 'sent'
    check (status in ('sent', 'verified', 'expired', 'failed')),
  attempts integer not null default 0,
  max_attempts integer not null default 3,
  expires_at timestamptz not null,
  verified_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists otp_ws_chat_idx on public.otp_codes(workspace_id, chat_id);
-- Supports the expiry sweep without scanning the table.
create index if not exists otp_expires_idx on public.otp_codes(expires_at)
  where status = 'sent';

-- ── invitations ─────────────────────────────────────────────
create table if not exists public.invitations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  email text not null,
  role text not null default 'editor'
    check (role in ('owner', 'admin', 'editor', 'analyst', 'viewer')),
  -- SHA-256 of the emailed token; the raw token exists only in the email.
  token_hash text not null unique,
  invited_by uuid references public.profiles(id) on delete set null,
  expires_at timestamptz not null default (now() + interval '7 days'),
  accepted_at timestamptz,
  created_at timestamptz not null default now()
);
-- One live invitation per email per workspace; re-inviting replaces it.
create unique index if not exists invitations_ws_email_pending_idx
  on public.invitations(workspace_id, lower(email))
  where accepted_at is null;

-- ── usage_counters ──────────────────────────────────────────
-- The paywall's meter. Counted per period rather than derived with COUNT(*)
-- over submissions: counting rows would slow down exactly as a workspace
-- becomes valuable, and would under-report once rows are archived or deleted.
create table if not exists public.usage_counters (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  -- Billing period as 'YYYY-MM'.
  period text not null,
  responses_count integer not null default 0,
  api_calls integer not null default 0,
  otp_sent integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (workspace_id, period)
);

-- ── atomic increment ────────────────────────────────────────
-- Called from server routes on every counted event. SECURITY DEFINER because
-- respondents are anonymous and must never be granted table writes; the
-- upsert makes concurrent submissions safe without a read-modify-write race.
create or replace function public.nt_bump_usage(
  ws uuid,
  responses integer default 0,
  api integer default 0,
  otp integer default 0
)
returns void
language sql
security definer
set search_path to ''
as $$
  insert into public.usage_counters (workspace_id, period, responses_count, api_calls, otp_sent, updated_at)
  values (ws, to_char(now(), 'YYYY-MM'), responses, api, otp, now())
  on conflict (workspace_id, period) do update
    set responses_count = public.usage_counters.responses_count + excluded.responses_count,
        api_calls       = public.usage_counters.api_calls       + excluded.api_calls,
        otp_sent        = public.usage_counters.otp_sent        + excluded.otp_sent,
        updated_at      = now();
$$;

revoke all on function public.nt_bump_usage(uuid, integer, integer, integer) from public;

-- ── RLS ─────────────────────────────────────────────────────
do $$
declare t text;
begin
  foreach t in array array[
    'api_keys','webhook_endpoints','webhook_deliveries','otp_codes',
    'invitations','usage_counters'
  ] loop
    execute format('alter table public.%I enable row level security', t);
  end loop;
end $$;

-- Secrets: admin and above. The app must select only id/name/prefix/scopes —
-- key_hash and webhook secrets should never reach a browser payload.
drop policy if exists api_keys_admin on public.api_keys;
create policy api_keys_admin on public.api_keys
  for all
  using (private.is_super_admin() or private.can_edit_workspace(workspace_id))
  with check (private.is_super_admin() or private.can_edit_workspace(workspace_id));

drop policy if exists webhook_endpoints_admin on public.webhook_endpoints;
create policy webhook_endpoints_admin on public.webhook_endpoints
  for all
  using (private.is_super_admin() or private.can_edit_workspace(workspace_id))
  with check (private.is_super_admin() or private.can_edit_workspace(workspace_id));

drop policy if exists invitations_admin on public.invitations;
create policy invitations_admin on public.invitations
  for all
  using (private.is_super_admin() or private.can_edit_workspace(workspace_id))
  with check (private.is_super_admin() or private.can_edit_workspace(workspace_id));

-- Read-only for members: these are written by the system (service role),
-- never from a user session, so no insert/update policy is granted.
drop policy if exists webhook_deliveries_read on public.webhook_deliveries;
create policy webhook_deliveries_read on public.webhook_deliveries
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

drop policy if exists usage_counters_read on public.usage_counters;
create policy usage_counters_read on public.usage_counters
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

-- OTP rows carry a code hash and a phone number: members may see that a
-- verification happened, and only editors may act on the configuration.
drop policy if exists otp_codes_read on public.otp_codes;
create policy otp_codes_read on public.otp_codes
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

commit;
