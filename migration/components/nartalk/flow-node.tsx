import type { LucideIcon } from "lucide-react";
import {
  Bell, CircleStop, Code2, MessageSquare, Play, ShieldCheck, Split, Timer, Webhook,
  CircleQuestionMark, TriangleAlert, GripVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The ten bot-flow block kinds.
 *
 * Colour is a *category* cue on the chip only — never the node body, which
 * stays on the card surface. A canvas of ten saturated cards is unreadable;
 * a canvas of white cards with coloured chips scans instantly.
 */
export type NodeKind =
  | "start" | "message" | "question" | "condition" | "api"
  | "webhook" | "otp" | "notification" | "delay" | "end";

export const NT_NODES: Record<NodeKind, { label: string; icon: LucideIcon; color: string }> = {
  start:        { label: "Başlanğıc", icon: Play,               color: "oklch(0.6486 0.1484 158.12)" },
  message:      { label: "Mesaj",     icon: MessageSquare,      color: "oklch(0.5753 0.2043 261.99)" },
  question:     { label: "Sual",      icon: CircleQuestionMark, color: "oklch(0.6208 0.2241 19.37)" },
  condition:    { label: "Şərt",      icon: Split,              color: "oklch(0.7633 0.1652 68.46)" },
  api:          { label: "API",       icon: Code2,              color: "oklch(0.6056 0.2189 292.72)" },
  webhook:      { label: "Webhook",   icon: Webhook,            color: "oklch(0.7189 0.1210 205.04)" },
  otp:          { label: "OTP",       icon: ShieldCheck,        color: "oklch(0.5916 0.2180 0.58)" },
  notification: { label: "Bildiriş",  icon: Bell,               color: "oklch(0.6802 0.1852 261.50)" },
  delay:        { label: "Gözləmə",   icon: Timer,              color: "oklch(0.7050 0.0150 286.07)" },
  end:          { label: "Son",       icon: CircleStop,         color: "oklch(0.4422 0.0162 285.72)" },
};

export type Handle = "t" | "b" | "l" | "r";

const HANDLE_POS: Record<Handle, string> = {
  t: "-top-[5px] left-1/2 -translate-x-1/2",
  b: "-bottom-[5px] left-1/2 -translate-x-1/2",
  l: "-left-[5px] top-1/2 -translate-y-1/2",
  r: "-right-[5px] top-1/2 -translate-y-1/2",
};

/**
 * FlowNode — one block on the bot canvas.
 *
 * Selection is a ring, never a fill change: a fill change would collide with
 * the category chip and make "selected" look like a different kind of node.
 * Invalid nodes get a destructive ring plus a glyph, because a canvas is often
 * scanned at a zoom where colour alone is not legible.
 */
export function FlowNode({
  kind,
  title,
  summary,
  selected = false,
  invalid = false,
  dragging = false,
  handles = ["t", "b"],
  badge,
  width = 220,
  onClick,
  className,
}: {
  kind: NodeKind;
  title: string;
  summary?: string;
  selected?: boolean;
  invalid?: boolean;
  dragging?: boolean;
  handles?: Handle[];
  badge?: React.ReactNode;
  width?: number;
  onClick?: () => void;
  className?: string;
}) {
  const meta = NT_NODES[kind];
  const Icon = meta.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-current={selected || undefined}
      aria-invalid={invalid || undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      style={{ width }}
      className={cn(
        "relative cursor-grab rounded-[10px] border bg-card text-left shadow-sm transition-[box-shadow,border-color]",
        "hover:border-muted-foreground/40 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected && "border-transparent ring-2 ring-ring",
        invalid && "border-destructive",
        dragging && "cursor-grabbing rotate-[0.4deg] shadow-xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b px-2.5 py-2">
        <span
          className="grid size-[22px] shrink-0 place-items-center rounded-md"
          style={{ backgroundColor: `color-mix(in oklch, ${meta.color} 16%, transparent)`, color: meta.color }}
        >
          <Icon size={13} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: meta.color }}>
            {meta.label}
          </div>
          <div className="truncate text-sm font-medium">{title}</div>
        </div>
        {invalid ? <TriangleAlert size={14} className="shrink-0 text-destructive" aria-hidden /> : null}
        <GripVertical size={13} className="shrink-0 text-muted-foreground/50" aria-hidden />
      </div>

      {summary ? (
        <div className="px-2.5 py-2.5 text-[13px] leading-5 text-muted-foreground">{summary}</div>
      ) : null}

      {badge ? <div className="border-t bg-muted/40 px-2.5 py-1.5">{badge}</div> : null}

      {handles.map((h) => (
        <span
          key={h}
          aria-hidden
          className={cn(
            "absolute size-2.5 rounded-full border-[1.5px] border-muted-foreground/40 bg-card transition-colors hover:border-ring hover:bg-ring",
            HANDLE_POS[h],
          )}
        />
      ))}
    </div>
  );
}

/**
 * Edge — a cubic bezier between two handles.
 *
 * `animated` marching dashes are reserved for a connection being drawn or a
 * branch actively executing. A canvas where every edge animates is noise.
 */
export function Edge({
  from,
  to,
  label,
  active = false,
  animated = false,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  label?: string;
  active?: boolean;
  animated?: boolean;
}) {
  const horizontal = Math.abs(to.x - from.x) > Math.abs(to.y - from.y);
  const d = horizontal
    ? `M${from.x},${from.y} C${(from.x + to.x) / 2},${from.y} ${(from.x + to.x) / 2},${to.y} ${to.x},${to.y}`
    : `M${from.x},${from.y} C${from.x},${(from.y + to.y) / 2} ${to.x},${(from.y + to.y) / 2} ${to.x},${to.y}`;
  const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };

  return (
    <g>
      <path
        d={d}
        fill="none"
        strokeWidth={active ? 2 : 1.5}
        markerEnd="url(#nt-arrow)"
        className={cn(active ? "stroke-ring" : "stroke-border", animated && "motion-safe:[stroke-dasharray:4_4] motion-safe:animate-[nt-dash_1s_linear_infinite]")}
      />
      {label ? (
        <foreignObject x={mid.x - 26} y={mid.y - 11} width={52} height={22}>
          <div className="flex h-full items-center justify-center">
            <span className="rounded border bg-card px-1.5 text-[11px] font-medium leading-[18px]">{label}</span>
          </div>
        </foreignObject>
      ) : null}
    </g>
  );
}

/** EdgeDefs — the shared arrowhead. Render once inside the canvas <svg>. */
export function EdgeDefs() {
  return (
    <defs>
      <marker id="nt-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M1,1 L6,4 L1,7" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="stroke-border" />
      </marker>
    </defs>
  );
}

/** NodePalette — the draggable source list of block kinds. */
export function NodePalette({ onPick, className }: { onPick?: (k: NodeKind) => void; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Bloklar
      </div>
      {(Object.keys(NT_NODES) as NodeKind[]).map((k) => {
        const meta = NT_NODES[k];
        const Icon = meta.icon;
        return (
          <button
            key={k}
            type="button"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("application/nartalk-node", k)}
            onClick={() => onPick?.(k)}
            className="flex cursor-grab items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              className="grid size-[22px] shrink-0 place-items-center rounded-md"
              style={{ backgroundColor: `color-mix(in oklch, ${meta.color} 16%, transparent)`, color: meta.color }}
            >
              <Icon size={13} aria-hidden />
            </span>
            {meta.label}
            <GripVertical size={12} className="ml-auto text-muted-foreground/40" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
