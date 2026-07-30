import {
  verifyPaddleSignature, verifyStripeSignature, type Plan, type Provider,
} from "@/lib/billing";
import { getServiceDb, schema, sql } from "@/db";

export const dynamic = "force-dynamic";

/**
 * POST /api/billing/webhook/stripe  |  /api/billing/webhook/paddle
 *
 * The only writer of subscription state. The browser never updates a plan —
 * an upgrade is real only once the processor confirms payment here.
 *
 * Three guarantees this route must keep:
 *  1. Authenticity — reject anything whose signature does not verify.
 *  2. Idempotency — webhooks are delivered at-least-once; a repeat is a no-op,
 *     enforced by the unique (provider, event_id) on billing_events.
 *  3. Attribution — the workspace comes from custom_data/metadata we set at
 *     checkout, never from anything a caller could forge.
 */
export async function POST(req: Request, { params }: { params: Promise<{ provider: string }> }) {
  const { provider } = await params;
  if (provider !== "stripe" && provider !== "paddle") {
    return new Response("Unknown provider", { status: 404 });
  }

  const raw = await req.text();
  const ok = await verify(provider as Provider, raw, req);
  if (!ok) return new Response("Invalid signature", { status: 400 });

  let event: StripeEvent | PaddleEvent;
  try {
    event = JSON.parse(raw);
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  const eventId = provider === "stripe" ? (event as StripeEvent).id : (event as PaddleEvent).event_id;
  const eventType = provider === "stripe" ? (event as StripeEvent).type : (event as PaddleEvent).event_type;
  const db = getServiceDb();

  // Idempotency gate: if we've seen this id, acknowledge and stop.
  const seen = await db
    .select({ id: schema.billingEvents.id })
    .from(schema.billingEvents)
    .where(sql`${schema.billingEvents.provider} = ${provider} and ${schema.billingEvents.eventId} = ${eventId}`)
    .limit(1);
  if (seen.length) return new Response("Already processed", { status: 200 });

  const change = provider === "stripe"
    ? mapStripe(event as StripeEvent)
    : mapPaddle(event as PaddleEvent);

  if (change) {
    await db
      .update(schema.subscriptions)
      .set({
        plan: change.plan,
        status: change.status,
        provider,
        providerCustomerId: change.customerId ?? null,
        providerSubscriptionId: change.subscriptionId ?? null,
        currentPeriodEnd: change.periodEnd ?? null,
        updatedAt: new Date(),
      })
      .where(sql`${schema.subscriptions.workspaceId} = ${change.workspaceId}`);
  }

  // Record last, so a crash before this leaves the event unprocessed (and thus
  // safely retried) rather than marked done with no state change applied.
  await db.insert(schema.billingEvents).values({
    provider,
    eventId,
    eventType,
    workspaceId: change?.workspaceId ?? null,
    payload: event as unknown as Record<string, unknown>,
  });

  return new Response("ok", { status: 200 });
}

async function verify(provider: Provider, raw: string, req: Request): Promise<boolean> {
  if (provider === "stripe") {
    const sig = req.headers.get("stripe-signature");
    const secret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!sig || !secret) return false;
    return verifyStripeSignature(raw, sig, secret);
  }
  const sig = req.headers.get("paddle-signature");
  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!sig || !secret) return false;
  return verifyPaddleSignature(raw, sig, secret);
}

type Change = {
  workspaceId: string;
  plan: Plan;
  status: string;
  customerId?: string;
  subscriptionId?: string;
  periodEnd?: Date;
};

function mapStripe(e: StripeEvent): Change | null {
  const obj = e.data?.object ?? {};
  const workspaceId = obj.metadata?.workspace_id ?? obj.client_reference_id;
  if (!workspaceId) return null;

  switch (e.type) {
    case "checkout.session.completed":
    case "customer.subscription.updated":
      return {
        workspaceId, plan: "pro", status: "active",
        customerId: obj.customer, subscriptionId: obj.subscription ?? obj.id,
        periodEnd: obj.current_period_end ? new Date(obj.current_period_end * 1000) : undefined,
      };
    case "customer.subscription.deleted":
      return { workspaceId, plan: "free", status: "canceled", customerId: obj.customer };
    default:
      return null;
  }
}

function mapPaddle(e: PaddleEvent): Change | null {
  const obj = e.data ?? {};
  const workspaceId = obj.custom_data?.workspace_id;
  if (!workspaceId) return null;

  switch (e.event_type) {
    case "subscription.created":
    case "subscription.updated":
    case "transaction.completed":
      return {
        workspaceId, plan: "pro", status: "active",
        customerId: obj.customer_id, subscriptionId: obj.id,
        periodEnd: obj.current_billing_period?.ends_at
          ? new Date(obj.current_billing_period.ends_at) : undefined,
      };
    case "subscription.canceled":
      return { workspaceId, plan: "free", status: "canceled", customerId: obj.customer_id };
    default:
      return null;
  }
}

type StripeEvent = {
  id: string;
  type: string;
  data?: {
    object?: {
      metadata?: { workspace_id?: string };
      client_reference_id?: string;
      customer?: string;
      subscription?: string;
      id?: string;
      current_period_end?: number;
    };
  };
};

type PaddleEvent = {
  event_id: string;
  event_type: string;
  data?: {
    custom_data?: { workspace_id?: string };
    customer_id?: string;
    id?: string;
    current_billing_period?: { ends_at?: string };
  };
};
