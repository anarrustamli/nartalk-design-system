import { cn } from "@/lib/utils";
import { NT_STATUS, TONE_CLASS, type StatusKey } from "@/lib/status";

/**
 * StatusBadge — the only sanctioned way to render a platform status.
 *
 * Never hand-roll a coloured pill for a status: pass the `<domain>.<state>`
 * key and the label, tone and glyph come from NT_STATUS, so the same state
 * looks identical in the bots list, the responses table and the webhook log.
 */
export function StatusBadge({
  status,
  variant = "soft",
  size = "md",
  showIcon = true,
  className,
}: {
  status: StatusKey;
  variant?: "soft" | "solid";
  size?: "sm" | "md";
  showIcon?: boolean;
  className?: string;
}) {
  const s = NT_STATUS[status];
  if (!s) return null;
  const Icon = s.icon;
  const tone = TONE_CLASS[s.tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-md border font-medium",
        size === "sm" ? "h-[18px] px-[5px] text-[11px]" : "h-5 px-1.5 text-xs",
        variant === "solid" ? tone.solid : tone.soft,
        className,
      )}
    >
      {showIcon ? <Icon aria-hidden size={size === "sm" ? 10 : 11} /> : null}
      {s.label}
    </span>
  );
}

/**
 * StatusDot — the compact form for dense tables and sidebars.
 * The label is not optional by accident: a bare dot is never a sufficient signal.
 */
export function StatusDot({
  status,
  pulse = false,
  className,
}: {
  status: StatusKey;
  pulse?: boolean;
  className?: string;
}) {
  const s = NT_STATUS[status];
  if (!s) return null;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          TONE_CLASS[s.tone].dot,
          pulse && "motion-safe:animate-pulse",
        )}
      />
      <span className="text-muted-foreground">{s.label}</span>
    </span>
  );
}

/** StatusCell — table-cell wrapper. Keeps every status column on one rhythm. */
export function StatusCell({ status }: { status: StatusKey }) {
  return <StatusBadge status={status} size="sm" />;
}
