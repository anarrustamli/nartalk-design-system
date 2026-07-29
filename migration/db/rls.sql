-- ============================================================
-- NarTalk — Row Level Security
--
-- Tenant isolation lives HERE, not in application code. Application checks
-- are a convenience; RLS is the guarantee. If a query forgets its
-- `where workspace_id = …`, Postgres still refuses the rows.
--
-- Run once after `drizzle-kit migrate`. Idempotent.
-- ============================================================

-- ── link our user columns to Supabase auth ───────────────────
-- Drizzle cannot express cross-schema FKs, so they are added here.
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'workspaces_owner_fk') then
    alter table public.workspaces
      add constraint workspaces_owner_fk
      foreign key (owner_id) references auth.users(id) on delete restrict;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'workspace_members_user_fk') then
    alter table public.workspace_members
      add constraint workspace_members_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
end $$;

-- ── helper functions ─────────────────────────────────────────
-- SECURITY DEFINER + a stable search_path: these read workspace_members
-- while RLS is active on it, which would otherwise recurse.

create or replace function public.nt_is_member(ws uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.workspace_members m
    where m.workspace_id = ws and m.user_id = auth.uid()
  );
$$;

/**
 * True when the caller's role in `ws` is at least `min_role`.
 * Ranking mirrors the role enum: owner > admin > editor > analyst > viewer.
 */
create or replace function public.nt_has_role(ws uuid, min_role nt_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  with rank as (
    select unnest(array['viewer','analyst','editor','admin','owner']::nt_role[]) as r,
           generate_series(1, 5) as lvl
  )
  select coalesce(
    (select mr.lvl from public.workspace_members m
       join rank mr on mr.r = m.role
      where m.workspace_id = ws and m.user_id = auth.uid())
    >= (select lvl from rank where r = min_role),
    false
  );
$$;

revoke all on function public.nt_is_member(uuid) from public;
revoke all on function public.nt_has_role(uuid, nt_role) from public;
grant execute on function public.nt_is_member(uuid) to authenticated;
grant execute on function public.nt_has_role(uuid, nt_role) to authenticated;

-- ── enable RLS everywhere ────────────────────────────────────
-- Default-deny: enabling RLS with no policy blocks all access, so every
-- table below must then be granted explicitly.
do $$
declare t text;
begin
  foreach t in array array[
    'workspaces','workspace_members','invitations','bots','forms','questions',
    'responses','response_answers','api_keys','webhook_endpoints',
    'webhook_deliveries','otp_codes','subscriptions','usage_counters',
    'workspace_modules','audit_logs'
  ] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('alter table public.%I force row level security', t);
  end loop;
end $$;

-- ── workspaces ───────────────────────────────────────────────
drop policy if exists ws_select on public.workspaces;
create policy ws_select on public.workspaces
  for select to authenticated
  using (public.nt_is_member(id));

-- Anyone signed in may create a workspace, but only as their own owner.
drop policy if exists ws_insert on public.workspaces;
create policy ws_insert on public.workspaces
  for insert to authenticated
  with check (owner_id = auth.uid());

drop policy if exists ws_update on public.workspaces;
create policy ws_update on public.workspaces
  for update to authenticated
  using (public.nt_has_role(id, 'admin'))
  with check (public.nt_has_role(id, 'admin'));

-- Deleting a workspace is owner-only: it cascades to every domain row.
drop policy if exists ws_delete on public.workspaces;
create policy ws_delete on public.workspaces
  for delete to authenticated
  using (public.nt_has_role(id, 'owner'));

-- ── workspace_members ────────────────────────────────────────
drop policy if exists wm_select on public.workspace_members;
create policy wm_select on public.workspace_members
  for select to authenticated
  using (public.nt_is_member(workspace_id));

drop policy if exists wm_write on public.workspace_members;
create policy wm_write on public.workspace_members
  for all to authenticated
  using (public.nt_has_role(workspace_id, 'admin'))
  with check (public.nt_has_role(workspace_id, 'admin'));

-- ── read for any member, write for editor+ ───────────────────
-- Applied to the tables where the split is exactly that.
do $$
declare t text;
begin
  foreach t in array array[
    'bots','forms','questions','webhook_endpoints','otp_codes','workspace_modules'
  ] loop
    execute format('drop policy if exists %I on public.%I', t || '_select', t);
    execute format(
      'create policy %I on public.%I for select to authenticated using (public.nt_is_member(workspace_id))',
      t || '_select', t);
    execute format('drop policy if exists %I on public.%I', t || '_write', t);
    execute format(
      'create policy %I on public.%I for all to authenticated using (public.nt_has_role(workspace_id, ''editor'')) with check (public.nt_has_role(workspace_id, ''editor''))',
      t || '_write', t);
  end loop;
end $$;

-- ── responses: readable by every role, deletable by admin+ ───
-- Analysts and viewers must see responses (that is their whole job), but
-- destroying collected data is an administrative act.
drop policy if exists responses_select on public.responses;
create policy responses_select on public.responses
  for select to authenticated
  using (public.nt_is_member(workspace_id));

drop policy if exists responses_update on public.responses;
create policy responses_update on public.responses
  for update to authenticated
  using (public.nt_has_role(workspace_id, 'editor'))
  with check (public.nt_has_role(workspace_id, 'editor'));

drop policy if exists responses_delete on public.responses;
create policy responses_delete on public.responses
  for delete to authenticated
  using (public.nt_has_role(workspace_id, 'admin'));

drop policy if exists ra_select on public.response_answers;
create policy ra_select on public.response_answers
  for select to authenticated
  using (public.nt_is_member(workspace_id));

drop policy if exists ra_delete on public.response_answers;
create policy ra_delete on public.response_answers
  for delete to authenticated
  using (public.nt_has_role(workspace_id, 'admin'));

-- NOTE: responses and response_answers are INSERTED by public respondents
-- who are not authenticated. Those writes go through the service role in a
-- server route (which bypasses RLS), never from the browser — so there is
-- deliberately no insert policy for `authenticated` here.

-- ── secrets: admin+ only, and never readable in full ─────────
-- api_keys.key_hash and webhook secrets must not reach a browser at all;
-- the app selects only id/name/prefix/scopes columns.
drop policy if exists keys_select on public.api_keys;
create policy keys_select on public.api_keys
  for select to authenticated
  using (public.nt_has_role(workspace_id, 'admin'));

drop policy if exists keys_write on public.api_keys;
create policy keys_write on public.api_keys
  for all to authenticated
  using (public.nt_has_role(workspace_id, 'admin'))
  with check (public.nt_has_role(workspace_id, 'admin'));

-- ── invitations: admin+ ──────────────────────────────────────
drop policy if exists inv_all on public.invitations;
create policy inv_all on public.invitations
  for all to authenticated
  using (public.nt_has_role(workspace_id, 'admin'))
  with check (public.nt_has_role(workspace_id, 'admin'));

-- ── read-only surfaces: deliveries, usage, audit, billing ────
-- These are written by the system (service role), never by a user session.
do $$
declare t text;
begin
  foreach t in array array['webhook_deliveries','usage_counters','audit_logs'] loop
    execute format('drop policy if exists %I on public.%I', t || '_select', t);
    execute format(
      'create policy %I on public.%I for select to authenticated using (public.nt_is_member(workspace_id))',
      t || '_select', t);
  end loop;
end $$;

-- Billing is owner-only: it exposes plan, provider ids and period dates.
drop policy if exists sub_select on public.subscriptions;
create policy sub_select on public.subscriptions
  for select to authenticated
  using (public.nt_has_role(workspace_id, 'owner'));

-- ── bootstrap: first membership on workspace creation ────────
-- Without this, a freshly created workspace has no members, so nt_is_member
-- is false and the creator instantly loses access to their own workspace.
create or replace function public.nt_add_owner_membership()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.workspace_members (workspace_id, user_id, role)
  values (new.id, new.owner_id, 'owner')
  on conflict (workspace_id, user_id) do nothing;

  insert into public.subscriptions (workspace_id, plan, status)
  values (new.id, 'free', 'active')
  on conflict (workspace_id) do nothing;

  return new;
end $$;

drop trigger if exists nt_workspace_bootstrap on public.workspaces;
create trigger nt_workspace_bootstrap
  after insert on public.workspaces
  for each row execute function public.nt_add_owner_membership();

-- ── grants ───────────────────────────────────────────────────
-- RLS decides the rows; these grants decide the verbs.
grant usage on schema public to authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;
-- anon gets nothing: public form submission goes through a server route.
revoke all on all tables in schema public from anon;
