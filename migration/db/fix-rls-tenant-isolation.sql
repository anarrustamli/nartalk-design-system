-- ============================================================
-- SECURITY FIX — tenant isolation was not enforced
--
-- Nine policies contained `m.workspace_id = m.workspace_id`: the membership
-- column compared to itself, which is always true. The EXISTS therefore only
-- asked "is this user a member of ANY workspace", never "of THIS row's
-- workspace". Any authenticated user could read — and for bots/forms write —
-- every other tenant's rows.
--
-- Root cause is the correlated subquery: the outer column had to be named
-- explicitly and a typo silently produced a tautology. The fix removes the
-- subquery from the policies entirely and passes the row's workspace_id into
-- a helper, so the comparison cannot be omitted by accident again.
--
-- Only one workspace exists today, so no cross-tenant read has occurred yet.
-- This must land before a second customer signs up.
--
-- Effect is strictly restrictive: it can only remove access, never grant it.
-- ============================================================

begin;

-- ── helpers, in the existing private.* style ─────────────────
-- SECURITY DEFINER with an empty search_path, matching
-- private.is_super_admin(): needed so reading workspace_members from inside
-- its own RLS does not recurse.

create or replace function private.is_workspace_member(ws uuid)
returns boolean
language sql
stable
security definer
set search_path to ''
as $$
  select exists (
    select 1 from public.workspace_members m
    where m.workspace_id = ws
      and m.user_id = (select auth.uid())
  );
$$;

/** Editor and above: may create and modify workspace content. */
create or replace function private.can_edit_workspace(ws uuid)
returns boolean
language sql
stable
security definer
set search_path to ''
as $$
  select exists (
    select 1 from public.workspace_members m
    where m.workspace_id = ws
      and m.user_id = (select auth.uid())
      and m.role = any (array['owner', 'admin', 'editor'])
  );
$$;

revoke all on function private.is_workspace_member(uuid) from public;
revoke all on function private.can_edit_workspace(uuid) from public;
grant execute on function private.is_workspace_member(uuid) to authenticated;
grant execute on function private.can_edit_workspace(uuid) to authenticated;

-- ── read policies: any member of THAT workspace ──────────────

drop policy if exists bots_member_read on public.bots;
create policy bots_member_read on public.bots
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

drop policy if exists forms_member_read on public.forms;
create policy forms_member_read on public.forms
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

drop policy if exists submissions_member_read on public.submissions;
create policy submissions_member_read on public.submissions
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

drop policy if exists api_usage_member_read on public.api_usage;
create policy api_usage_member_read on public.api_usage
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

drop policy if exists audit_member_read on public.audit_logs;
create policy audit_member_read on public.audit_logs
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

-- Billing stays readable to any member, as before — only the workspace
-- scoping is corrected here. Tightening it to owners is a product decision,
-- not part of a security fix.
drop policy if exists subscriptions_member_read on public.subscriptions;
create policy subscriptions_member_read on public.subscriptions
  for select
  using (private.is_super_admin() or private.is_workspace_member(workspace_id));

-- ── write policies: editor and above, same workspace ─────────

drop policy if exists bots_member_all on public.bots;
create policy bots_member_all on public.bots
  for all
  using (private.is_super_admin() or private.can_edit_workspace(workspace_id))
  with check (private.is_super_admin() or private.can_edit_workspace(workspace_id));

drop policy if exists forms_member_all on public.forms;
create policy forms_member_all on public.forms
  for all
  using (private.is_super_admin() or private.can_edit_workspace(workspace_id))
  with check (private.is_super_admin() or private.can_edit_workspace(workspace_id));

drop policy if exists submissions_member_update on public.submissions;
create policy submissions_member_update on public.submissions
  for update
  using (private.is_super_admin() or private.can_edit_workspace(workspace_id))
  with check (private.is_super_admin() or private.can_edit_workspace(workspace_id));

commit;
