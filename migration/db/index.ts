import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/**
 * Two ways into Postgres, and the difference is the tenant boundary.
 *
 * `getServiceDb()` — bypasses RLS. Only for work with no user session:
 *      Telegram ingest, public form submission, delivery retries, usage
 *      counters, billing webhooks. Every query MUST filter workspaceId by
 *      hand, because Postgres will not do it for you here.
 *
 * `withUser(userId, fn)` — runs as that user with RLS enforced. Use for
 *      everything reached from a session. A forgotten workspace filter then
 *      returns zero rows instead of another tenant's rows.
 *
 * Default to withUser. Reach for getServiceDb only when there is no user.
 */

const connectionString = process.env.DATABASE_URL;

declare global {
  // Reused across hot reloads and warm invocations so we don't exhaust
  // Postgres connections.
  var __ntSql: ReturnType<typeof postgres> | undefined;
}

function client() {
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Add the Supabase Postgres URI " +
        "(Project settings → Database → Connection string → URI, pooler port 6543) " +
        "to .env.production.",
    );
  }
  if (!globalThis.__ntSql) {
    globalThis.__ntSql = postgres(connectionString, {
      // Supabase's pooler runs in transaction mode, where prepared statements
      // cannot survive a connection checkout.
      prepare: false,
      max: 8,
      idle_timeout: 20,
    });
  }
  return globalThis.__ntSql;
}

/** Service-role handle. RLS does NOT apply — filter workspaceId yourself. */
export function getServiceDb() {
  return drizzle(client(), { schema });
}

/**
 * Run `fn` as `userId`, with RLS enforced.
 *
 * `userId` must come from a VERIFIED token — call
 * `supabase.auth.getUser(accessToken)` first and pass `data.user.id`. Never
 * pass an id straight from a cookie, header or request body: this function
 * trusts it completely and hands it to auth.uid().
 *
 * The claims and role are set with `set_config(..., true)` / `set local`,
 * which are transaction-scoped. That scoping is what stops one request's
 * identity from leaking into the next user of a pooled connection.
 */
export async function withUser<T>(
  userId: string,
  fn: (tx: Parameters<Parameters<ReturnType<typeof getServiceDb>["transaction"]>[0]>[0]) => Promise<T>,
): Promise<T> {
  const db = drizzle(client(), { schema });
  const claims = JSON.stringify({ sub: userId, role: "authenticated" });

  return db.transaction(async (tx) => {
    await tx.execute(sql`select set_config('request.jwt.claims', ${claims}, true)`);
    await tx.execute(sql`set local role authenticated`);
    return fn(tx);
  });
}

export { schema, sql };
