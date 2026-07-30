/**
 * Billing — Stripe and Paddle, behind one interface.
 *
 * No processor SDK is imported. Both are driven over their REST APIs with
 * plain fetch, because this app runs on workerd (Cloudflare Workers), where
 * the Node-oriented `stripe` and `@paddle/paddle-node-sdk` packages pull in
 * APIs the runtime does not have. fetch + Web Crypto is edge-native and works
 * unchanged in Node too.
 *
 * Which processor is used is a per-request choice, so the platform can route
 * (for example) card payments to Stripe and merchant-of-record billing to
 * Paddle. The plan → price mapping for each lives in env, so switching a
 * price never touches code.
 */

export type Plan = "free" | "pro" | "business";
export type Provider = "stripe" | "paddle";

/** A processor is "configured" only when its secret and the plan prices exist. */
export function providerConfigured(provider: Provider): boolean {
  if (provider === "stripe") {
    return Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_PRO);
  }
  return Boolean(process.env.PADDLE_API_KEY && process.env.PADDLE_PRICE_PRO);
}

/** The processor price id for a paid plan, or null if unset. Free has none. */
export function priceId(provider: Provider, plan: Plan): string | null {
  if (plan === "free") return null;
  const key = `${provider === "stripe" ? "STRIPE" : "PADDLE"}_PRICE_${plan.toUpperCase()}`;
  return process.env[key] ?? null;
}

const PADDLE_API_BASE =
  process.env.PADDLE_ENV === "sandbox"
    ? "https://sandbox-api.paddle.com"
    : "https://api.paddle.com";

/**
 * Start a checkout and return the URL to redirect the user to.
 *
 * The workspace id is threaded through as client_reference_id / custom_data so
 * the webhook can attribute the resulting subscription to the right tenant —
 * never trust a workspace id that comes back in the browser's redirect.
 */
export async function createCheckout(opts: {
  provider: Provider;
  plan: Exclude<Plan, "free">;
  workspaceId: string;
  customerEmail: string;
  successUrl: string;
  cancelUrl: string;
}): Promise<{ url: string }> {
  const price = priceId(opts.provider, opts.plan);
  if (!price) {
    throw new Error(`No price configured for ${opts.provider}/${opts.plan}`);
  }

  if (opts.provider === "stripe") {
    const secret = process.env.STRIPE_SECRET_KEY!;
    const body = new URLSearchParams({
      mode: "subscription",
      "line_items[0][price]": price,
      "line_items[0][quantity]": "1",
      success_url: opts.successUrl,
      cancel_url: opts.cancelUrl,
      client_reference_id: opts.workspaceId,
      customer_email: opts.customerEmail,
      "metadata[workspace_id]": opts.workspaceId,
      "subscription_data[metadata][workspace_id]": opts.workspaceId,
    });
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    if (!res.ok) throw new Error(`Stripe checkout failed: ${res.status} ${await res.text()}`);
    const json = (await res.json()) as { url: string };
    return { url: json.url };
  }

  // Paddle: create a transaction, then hand its id to Paddle.js on the client.
  // Here we return the hosted-checkout URL form for parity with Stripe.
  const secret = process.env.PADDLE_API_KEY!;
  const res = await fetch(`${PADDLE_API_BASE}/transactions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [{ price_id: price, quantity: 1 }],
      custom_data: { workspace_id: opts.workspaceId },
      checkout: { url: opts.successUrl },
    }),
  });
  if (!res.ok) throw new Error(`Paddle checkout failed: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { data: { checkout?: { url?: string } } };
  const url = json.data.checkout?.url;
  if (!url) throw new Error("Paddle returned no checkout url");
  return { url };
}

/**
 * Verify a Stripe webhook signature (scheme t=…,v1=…) with Web Crypto.
 *
 * Implemented by hand rather than with stripe.webhooks.constructEvent because
 * that helper needs Node crypto. The constant-time compare and the timestamp
 * tolerance are the parts that actually matter for security, and both are here.
 */
export async function verifyStripeSignature(
  payload: string,
  header: string,
  secret: string,
  toleranceSec = 300,
): Promise<boolean> {
  const parts = Object.fromEntries(header.split(",").map((kv) => kv.split("=")));
  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;

  if (Math.abs(Date.now() / 1000 - Number(t)) > toleranceSec) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${t}.${payload}`));
  const expected = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return timingSafeEqual(expected, v1);
}

/** Verify a Paddle webhook signature (ts=…;h1=…). */
export async function verifyPaddleSignature(
  payload: string,
  header: string,
  secret: string,
  toleranceSec = 300,
): Promise<boolean> {
  const parts = Object.fromEntries(header.split(";").map((kv) => kv.split("=")));
  const ts = parts.ts;
  const h1 = parts.h1;
  if (!ts || !h1) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > toleranceSec) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${ts}:${payload}`));
  const expected = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return timingSafeEqual(expected, h1);
}

/** Length-independent constant-time string compare. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
