import { relations, sql } from "drizzle-orm";
import {
  boolean, index, integer, jsonb, pgEnum, pgTable, text, timestamp,
  uniqueIndex, uuid,
} from "drizzle-orm/pg-core";

/**
 * NarTalk data model — Supabase Postgres, multi-tenant.
 *
 * Tenancy rule: the workspace is the tenant boundary, and EVERY domain row
 * carries `workspaceId` even when it could be derived through a parent. That
 * denormalisation is deliberate — it lets one RLS policy per table decide
 * access from the row alone, with no joins, which is both faster and much
 * harder to get wrong than policy chains through parents.
 *
 * Users live in Supabase `auth.users`. We store `userId` as a plain uuid;
 * the real foreign key to `auth.users` is added in `rls.sql`, because Drizzle
 * cannot express a cross-schema reference.
 */

/* ── enums ──────────────────────────────────────────────────────────── */

/** Roles, ordered most→least privileged. Mirrors NT_ROLES in the design system. */
export const roleEnum = pgEnum("nt_role", ["owner", "admin", "editor", "analyst", "viewer"]);
export const planEnum = pgEnum("nt_plan", ["free", "pro", "business"]);
export const botStatusEnum = pgEnum("nt_bot_status", ["draft", "active", "paused", "error"]);
export const formStatusEnum = pgEnum("nt_form_status", ["draft", "published", "paused", "archived"]);
/** Who may answer a form. Drives the "Giriş nəzarəti" feature. */
export const accessModeEnum = pgEnum("nt_access_mode", ["public", "code", "telegram_only", "allowlist"]);
export const questionTypeEnum = pgEnum("nt_question_type", [
  "text", "choice", "phone", "photo", "file", "location", "date", "number", "hidden",
]);
export const responseStatusEnum = pgEnum("nt_response_status", [
  "new", "in_progress", "reviewed", "completed", "rejected",
]);
export const responseSourceEnum = pgEnum("nt_response_source", ["telegram", "web"]);
export const apiEnvEnum = pgEnum("nt_api_env", ["test", "live"]);
export const deliveryStatusEnum = pgEnum("nt_delivery_status", [
  "pending", "delivered", "failed", "retrying",
]);
export const otpStatusEnum = pgEnum("nt_otp_status", ["sent", "verified", "expired", "failed"]);
export const subStatusEnum = pgEnum("nt_sub_status", [
  "trialing", "active", "past_due", "canceled",
]);

/* ── tenancy ────────────────────────────────────────────────────────── */

export const workspaces = pgTable(
  "workspaces",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    /** Used in URLs and invite links; lowercase, unique. */
    slug: text("slug").notNull(),
    ownerId: uuid("owner_id").notNull(),
    plan: planEnum("plan").notNull().default("free"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (t) => [uniqueIndex("workspaces_slug_key").on(t.slug), index("workspaces_owner_idx").on(t.ownerId)],
);

export const workspaceMembers = pgTable(
  "workspace_members",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    userId: uuid("user_id").notNull(),
    role: roleEnum("role").notNull().default("viewer"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // One membership per user per workspace — the uniqueness RLS depends on.
    uniqueIndex("workspace_members_unique").on(t.workspaceId, t.userId),
    index("workspace_members_user_idx").on(t.userId),
  ],
);

export const invitations = pgTable(
  "invitations",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    role: roleEnum("role").notNull().default("editor"),
    /** SHA-256 of the emailed token; the raw token is never stored. */
    tokenHash: text("token_hash").notNull(),
    invitedBy: uuid("invited_by").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    acceptedAt: timestamp("accepted_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("invitations_token_key").on(t.tokenHash),
    index("invitations_ws_email_idx").on(t.workspaceId, t.email),
  ],
);

/* ── domain: bots, forms, questions ─────────────────────────────────── */

export const bots = pgTable(
  "bots",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    /** Telegram @handle, without the @. Null while still a draft. */
    handle: text("handle"),
    /**
     * Telegram bot token, encrypted at rest — never select this into a client
     * payload. Decryption happens only in the worker that calls Telegram.
     */
    tokenEncrypted: text("token_encrypted"),
    status: botStatusEnum("status").notNull().default("draft"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (t) => [
    index("bots_ws_idx").on(t.workspaceId),
    uniqueIndex("bots_handle_key").on(t.handle),
  ],
);

export const forms = pgTable(
  "forms",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    botId: uuid("bot_id").references(() => bots.id, { onDelete: "set null" }),
    title: text("title").notNull(),
    description: text("description"),
    /** Public URL segment: nartalk.com/f/<slug>. */
    slug: text("slug").notNull(),
    status: formStatusEnum("status").notNull().default("draft"),
    accessMode: accessModeEnum("access_mode").notNull().default("public"),
    /** Hash of the access code when accessMode = 'code'. */
    accessCodeHash: text("access_code_hash"),
    /** Branching rules; shape matches the design system's LogicBuilder. */
    logic: jsonb("logic").notNull().default(sql`'[]'::jsonb`),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (t) => [
    uniqueIndex("forms_slug_key").on(t.slug),
    index("forms_ws_idx").on(t.workspaceId),
  ],
);

export const questions = pgTable(
  "questions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    formId: uuid("form_id").notNull().references(() => forms.id, { onDelete: "cascade" }),
    /** Display order. Gapped (10, 20, 30…) so reordering rarely rewrites rows. */
    position: integer("position").notNull(),
    type: questionTypeEnum("type").notNull().default("text"),
    title: text("title").notNull(),
    hint: text("hint"),
    required: boolean("required").notNull().default(false),
    /** Choice options, validation bounds, and per-question logic. */
    options: jsonb("options").notNull().default(sql`'[]'::jsonb`),
    validation: jsonb("validation").notNull().default(sql`'{}'::jsonb`),
    hidden: boolean("hidden").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("questions_form_pos_idx").on(t.formId, t.position)],
);

/* ── domain: responses ──────────────────────────────────────────────── */

export const responses = pgTable(
  "responses",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    formId: uuid("form_id").notNull().references(() => forms.id, { onDelete: "cascade" }),
    botId: uuid("bot_id").references(() => bots.id, { onDelete: "set null" }),
    source: responseSourceEnum("source").notNull().default("telegram"),
    status: responseStatusEnum("status").notNull().default("new"),
    /** Telegram identity when source = 'telegram'; null for anonymous web. */
    telegramUserId: text("telegram_user_id"),
    telegramUsername: text("telegram_username"),
    respondentName: text("respondent_name"),
    /** Set once the phone behind this response passed OTP. */
    phoneVerifiedAt: timestamp("phone_verified_at", { withTimezone: true }),
    submittedAt: timestamp("submitted_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // The dashboard's default view: newest first within a workspace.
    index("responses_ws_created_idx").on(t.workspaceId, t.createdAt),
    index("responses_form_idx").on(t.formId),
    index("responses_status_idx").on(t.workspaceId, t.status),
  ],
);

export const responseAnswers = pgTable(
  "response_answers",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    responseId: uuid("response_id").notNull().references(() => responses.id, { onDelete: "cascade" }),
    questionId: uuid("question_id").notNull().references(() => questions.id, { onDelete: "cascade" }),
    /** Typed payload: {text}|{choice}|{lat,lng}|{fileUrl,mime,size}… */
    value: jsonb("value").notNull().default(sql`'{}'::jsonb`),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("response_answers_unique").on(t.responseId, t.questionId),
    index("response_answers_ws_idx").on(t.workspaceId),
  ],
);

/* ── developer surface ──────────────────────────────────────────────── */

export const apiKeys = pgTable(
  "api_keys",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    env: apiEnvEnum("env").notNull().default("test"),
    /** Shown in the UI (nar_live_8fK2…); enough to identify, not to use. */
    prefix: text("prefix").notNull(),
    /** SHA-256 of the full key. The raw key is shown exactly once, at creation. */
    keyHash: text("key_hash").notNull(),
    scopes: jsonb("scopes").notNull().default(sql`'[]'::jsonb`),
    createdBy: uuid("created_by").notNull(),
    lastUsedAt: timestamp("last_used_at", { withTimezone: true }),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("api_keys_hash_key").on(t.keyHash),
    index("api_keys_ws_idx").on(t.workspaceId),
  ],
);

export const webhookEndpoints = pgTable(
  "webhook_endpoints",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    url: text("url").notNull(),
    /** HMAC-SHA256 signing secret (whsec_…), encrypted at rest. */
    secretEncrypted: text("secret_encrypted").notNull(),
    events: jsonb("events").notNull().default(sql`'[]'::jsonb`),
    enabled: boolean("enabled").notNull().default(true),
    /** Auto-disable after 20 consecutive failures, per the design system. */
    consecutiveFailures: integer("consecutive_failures").notNull().default(0),
    disabledAt: timestamp("disabled_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("webhook_endpoints_ws_idx").on(t.workspaceId)],
);

export const webhookDeliveries = pgTable(
  "webhook_deliveries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    endpointId: uuid("endpoint_id").notNull().references(() => webhookEndpoints.id, { onDelete: "cascade" }),
    event: text("event").notNull(),
    url: text("url").notNull(),
    payload: jsonb("payload").notNull(),
    status: deliveryStatusEnum("status").notNull().default("pending"),
    responseCode: integer("response_code"),
    latencyMs: integer("latency_ms"),
    attempts: integer("attempts").notNull().default(0),
    error: text("error"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    deliveredAt: timestamp("delivered_at", { withTimezone: true }),
  },
  (t) => [
    index("webhook_deliveries_ws_created_idx").on(t.workspaceId, t.createdAt),
    index("webhook_deliveries_endpoint_idx").on(t.endpointId),
  ],
);

export const otpCodes = pgTable(
  "otp_codes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    /** Telegram chat the code was sent to. */
    chatId: text("chat_id").notNull(),
    phone: text("phone"),
    /** HMAC of the code with OTP_PEPPER — never the plaintext code. */
    codeHash: text("code_hash").notNull(),
    status: otpStatusEnum("status").notNull().default("sent"),
    attempts: integer("attempts").notNull().default(0),
    maxAttempts: integer("max_attempts").notNull().default(3),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    verifiedAt: timestamp("verified_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("otp_ws_chat_idx").on(t.workspaceId, t.chatId),
    index("otp_expires_idx").on(t.expiresAt),
  ],
);

/* ── billing & usage ────────────────────────────────────────────────── */

export const subscriptions = pgTable(
  "subscriptions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    plan: planEnum("plan").notNull().default("free"),
    status: subStatusEnum("status").notNull().default("active"),
    /** "stripe" | "kapital" | … — set when a paid plan is first purchased. */
    provider: text("provider"),
    providerCustomerId: text("provider_customer_id"),
    providerSubscriptionId: text("provider_subscription_id"),
    currentPeriodStart: timestamp("current_period_start", { withTimezone: true }),
    currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
    cancelAtPeriodEnd: boolean("cancel_at_period_end").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("subscriptions_ws_key").on(t.workspaceId)],
);

/**
 * usageCounters — the paywall's meter.
 *
 * The free plan's real limit is 100 responses per month, so usage is counted
 * per calendar period rather than derived by COUNT(*) over responses: counting
 * rows would get slower exactly as a workspace becomes valuable, and would
 * break as soon as responses are archived or deleted.
 */
export const usageCounters = pgTable(
  "usage_counters",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    /** Billing period as 'YYYY-MM'. */
    period: text("period").notNull(),
    responsesCount: integer("responses_count").notNull().default(0),
    apiCalls: integer("api_calls").notNull().default(0),
    otpSent: integer("otp_sent").notNull().default(0),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("usage_counters_unique").on(t.workspaceId, t.period)],
);

/* ── workspace config & audit ───────────────────────────────────────── */

export const workspaceModules = pgTable(
  "workspace_modules",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    module: text("module").notNull(),
    configuration: jsonb("configuration").notNull().default(sql`'{}'::jsonb`),
    enabled: boolean("enabled").notNull().default(false),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("workspace_modules_unique").on(t.workspaceId, t.module)],
);

export const auditLogs = pgTable(
  "audit_logs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    /** The acting user; null for system/API actors. */
    actorId: uuid("actor_id"),
    actorLabel: text("actor_label").notNull(),
    action: text("action").notNull(),
    entity: text("entity").notNull(),
    metadata: jsonb("metadata").notNull().default(sql`'{}'::jsonb`),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("audit_logs_ws_created_idx").on(t.workspaceId, t.createdAt)],
);

/* ── relations ──────────────────────────────────────────────────────── */

export const workspacesRelations = relations(workspaces, ({ many, one }) => ({
  members: many(workspaceMembers),
  bots: many(bots),
  forms: many(forms),
  subscription: one(subscriptions),
}));

export const formsRelations = relations(forms, ({ many, one }) => ({
  workspace: one(workspaces, { fields: [forms.workspaceId], references: [workspaces.id] }),
  bot: one(bots, { fields: [forms.botId], references: [bots.id] }),
  questions: many(questions),
  responses: many(responses),
}));

export const responsesRelations = relations(responses, ({ many, one }) => ({
  form: one(forms, { fields: [responses.formId], references: [forms.id] }),
  answers: many(responseAnswers),
}));

/** Plan ceilings, enforced in application code against usageCounters. */
export const PLAN_LIMITS = {
  free: { bots: 1, responsesPerMonth: 100, fileUpload: false, csvExport: false, members: 1 },
  pro: { bots: 10, responsesPerMonth: null, fileUpload: true, csvExport: true, members: 5 },
  business: { bots: null, responsesPerMonth: null, fileUpload: true, csvExport: true, members: null },
} as const;
