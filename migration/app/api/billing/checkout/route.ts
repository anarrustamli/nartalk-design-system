import { createClient } from "@supabase/supabase-js";
import { createCheckout, providerConfigured, type Plan, type Provider } from "@/lib/billing";
import { getServiceDb, schema, sql } from "@/db";

export const dynamic = "force-dynamic";

/**
 * POST /api/billing/checkout — start an upgrade.
 *
 * Body: { plan: "pro" | "business", provider: "stripe" | "paddle" }
 *
 * The workspace is resolved from the caller's own membership, never from the
 * request body, so a user cannot start a checkout that upgrades someone else's
 * workspace. The returned URL is where the client redirects.
 */
export async function POST(req: Request) {
  const auth = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!auth) return json({ error: "Unauthorized" }, 401);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: `Bearer ${auth}` } },
  });

  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) return json({ error: "Unauthorized" }, 401);

  let body: { plan?: Plan; provider?: Provider; workspaceId?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid body" }, 400);
  }

  const plan = body.plan;
  const provider = body.provider ?? "stripe";
  if (plan !== "pro" && plan !== "business") return json({ error: "Invalid plan" }, 400);
  if (provider !== "stripe" && provider !== "paddle") return json({ error: "Invalid provider" }, 400);
  if (!providerConfigured(provider)) return json({ error: `${provider} is not configured` }, 503);

  // Resolve the workspace the user actually owns/administers.
  const db = getServiceDb();
  const membership = await db
    .select({ workspaceId: schema.workspaceMembers.workspaceId, role: schema.workspaceMembers.role })
    .from(schema.workspaceMembers)
    .where(sql`${schema.workspaceMembers.userId} = ${user.id}`)
    .limit(1);

  const ws = membership[0];
  if (!ws) return json({ error: "No workspace" }, 403);
  if (!["owner", "admin"].includes(ws.role)) return json({ error: "Forbidden" }, 403);

  const origin = new URL(req.url).origin;
  try {
    const { url } = await createCheckout({
      provider,
      plan,
      workspaceId: ws.workspaceId,
      customerEmail: user.email ?? "",
      successUrl: `${origin}/dashboard/qiymetler?upgraded=1`,
      cancelUrl: `${origin}/dashboard/qiymetler`,
    });
    return json({ url });
  } catch (e) {
    return json({ error: (e as Error).message }, 502);
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}
