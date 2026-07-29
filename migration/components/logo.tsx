import { cn } from "@/lib/utils";

/**
 * Logo — the NarTalk mark: a pomegranate that is also a speech bubble.
 *
 * The mark is the brand's whole personality, so it is never boxed, cropped or
 * recoloured. Use `variant="white"` only on Ink or Nar backgrounds, where the
 * seeds are knocked out; everywhere else the full-colour mark carries its own
 * red and must not sit on a red plate.
 *
 * Plain <img>, not next/image: this deployment runs on workerd, where the
 * /_vinext/image optimiser returns 400. The mark is a small transparent PNG
 * served straight from /public, so optimisation buys nothing here anyway.
 */
export function Logo({
  size = 24,
  variant = "color",
  withWordmark = false,
  className,
}: {
  size?: number;
  variant?: "color" | "white";
  withWordmark?: boolean;
  className?: string;
}) {
  const mark = (
    <img
      src={variant === "white" ? "/logo-mark-white.png" : "/logo-mark-512.png"}
      alt={withWordmark ? "" : "NarTalk"}
      width={size}
      height={size}
      className="block shrink-0"
      style={{ width: size, height: size }}
    />
  );

  if (!withWordmark) return <span className={className}>{mark}</span>;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {mark}
      {/* Geist 600 at -0.035em — the lockup has no drawn wordmark file. */}
      <span className="font-semibold tracking-[-0.035em]">NarTalk</span>
    </span>
  );
}
