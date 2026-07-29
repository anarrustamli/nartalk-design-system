import React from "react";
import { Icon } from "./Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

const TONES = {
  neutral: ["--color-status-neutral-fg", "--color-status-neutral-bg", "--color-status-neutral-border", "--color-status-neutral-solid"],
  brand: ["--color-status-brand-fg", "--color-status-brand-bg", "--color-status-brand-border", "--color-status-brand-solid"],
  success: ["--color-status-success-fg", "--color-status-success-bg", "--color-status-success-border", "--color-status-success-solid"],
  warning: ["--color-status-warning-fg", "--color-status-warning-bg", "--color-status-warning-border", "--color-status-warning-solid"],
  error: ["--color-status-error-fg", "--color-status-error-bg", "--color-status-error-border", "--color-status-error-solid"],
  info: ["--color-status-info-fg", "--color-status-info-bg", "--color-status-info-border", "--color-status-info-solid"],
};

/** Badge — a compact label. Tone carries meaning; the text always carries it too. */
export function Badge({ tone = "neutral", variant = "soft", size = "md", icon, dot = false, mono = false, children, className, style, ...rest }) {
  const [fg, bg, bd, solid] = TONES[tone] || TONES.neutral;
  const skin =
    variant === "solid" ? { background: `var(${solid})`, color: "#fff", borderColor: "transparent" }
    : variant === "outline" ? { background: "transparent", color: `var(${fg})`, borderColor: `var(${bd})` }
    : { background: `var(${bg})`, color: `var(${fg})`, borderColor: `var(${bd})` };
  return (
    <span className={cx("nt-badge", size !== "md" && `nt-badge--${size}`, mono && "nt-badge--mono", className)}
      style={{ ...skin, ...style }} {...rest}>
      {dot ? <span className="nt-dot" style={{ background: variant === "solid" ? "#fff" : `var(${solid})` }} /> : null}
      {icon ? <Icon name={icon} size={11} /> : null}
      {children}
    </span>
  );
}

/** The platform-wide status vocabulary. Colour is never the only signal — label and glyph travel with it. */
export const NT_STATUS = {
  "form.draft":         { label: "Draft",       tone: "neutral", icon: "PencilLine" },
  "form.published":     { label: "Published",   tone: "success", icon: "CircleCheck" },
  "form.paused":        { label: "Paused",      tone: "warning", icon: "Pause" },
  "form.archived":      { label: "Archived",    tone: "neutral", icon: "Archive" },
  "bot.draft":          { label: "Draft",       tone: "neutral", icon: "PencilLine" },
  "bot.active":         { label: "Active",      tone: "success", icon: "CircleCheck" },
  "bot.paused":         { label: "Paused",      tone: "warning", icon: "Pause" },
  "bot.error":          { label: "Error",       tone: "error",   icon: "TriangleAlert" },
  "submission.new":         { label: "New",         tone: "info",    icon: "CircleDot" },
  "submission.reviewed":    { label: "Reviewed",    tone: "neutral", icon: "Eye" },
  "submission.in_progress": { label: "In progress", tone: "warning", icon: "LoaderCircle" },
  "submission.completed":   { label: "Completed",   tone: "success", icon: "CheckCheck" },
  "submission.rejected":    { label: "Rejected",    tone: "error",   icon: "CircleX" },
  "webhook.delivered":  { label: "Delivered",   tone: "success", icon: "CircleCheck" },
  "webhook.pending":    { label: "Pending",     tone: "neutral", icon: "Clock" },
  "webhook.failed":     { label: "Failed",      tone: "error",   icon: "CircleAlert" },
  "webhook.retrying":   { label: "Retrying",    tone: "warning", icon: "RotateCcw" },
  "otp.sent":           { label: "Sent",        tone: "info",    icon: "Send" },
  "otp.verified":       { label: "Verified",    tone: "success", icon: "ShieldCheck" },
  "otp.expired":        { label: "Expired",     tone: "neutral", icon: "TimerOff" },
  "otp.failed":         { label: "Failed",      tone: "error",   icon: "ShieldX" },
  "key.active":         { label: "Active",      tone: "success", icon: "CircleCheck" },
  "key.revoked":        { label: "Revoked",     tone: "error",   icon: "CircleX" },
  "invite.pending":     { label: "Pending",     tone: "warning", icon: "Clock" },
};

/**
 * StatusBadge — the only way to render a platform status.
 * `status` is a "<domain>.<state>" key from NT_STATUS.
 */
export function StatusBadge({ status, variant = "soft", size = "md", showIcon = true, ...rest }) {
  const s = NT_STATUS[status] || { label: String(status), tone: "neutral" };
  return <Badge tone={s.tone} variant={variant} size={size} icon={showIcon ? s.icon : undefined} {...rest}>{s.label}</Badge>;
}

/** StatusDot — the compact indicator for tables and sidebars. Always paired with text. */
export function StatusDot({ status, tone, pulse = false, size = "md", label, style }) {
  const t = tone || (NT_STATUS[status] || {}).tone || "neutral";
  const solid = (TONES[t] || TONES.neutral)[3];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", ...style }}>
      <span className={cx("nt-dot", size === "lg" && "nt-dot--lg", pulse && "nt-pulse")} style={{ color: `var(${solid})`, background: `var(${solid})` }} />
      {label !== false ? <span style={{ color: "var(--color-text-secondary)" }}>{label || (NT_STATUS[status] || {}).label}</span> : null}
    </span>
  );
}

/** Tag — user-authored, removable. Never used for system status. */
export function Tag({ children, onRemove, icon, className, ...rest }) {
  return (
    <span className={cx("nt-tag", className)} {...rest}>
      {icon ? <Icon name={icon} size={12} /> : null}
      {children}
      {onRemove ? (
        <button type="button" className="nt-tag__x" onClick={onRemove} aria-label="Sil">
          <Icon name="X" size={11} />
        </button>
      ) : <span style={{ width: "var(--space-1)" }} />}
    </span>
  );
}

/** MethodBadge — HTTP verb chip for endpoint rows. */
export function MethodBadge({ method = "GET" }) {
  const tone = { GET: "info", POST: "success", PUT: "warning", PATCH: "warning", DELETE: "error" }[method.toUpperCase()] || "neutral";
  const [fg, bg, bd] = TONES[tone];
  return <span className="nt-method" style={{ background: `var(${bg})`, color: `var(${fg})`, boxShadow: `inset 0 0 0 1px var(${bd})` }}>{method.toUpperCase()}</span>;
}
