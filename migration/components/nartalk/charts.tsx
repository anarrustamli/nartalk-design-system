import { cn } from "@/lib/utils";

/**
 * Zero-dependency SVG charts.
 *
 * The platform has no charting library installed, and for the shapes the
 * dashboard actually needs — a sparkline, a volume bar chart, a source donut,
 * a usage meter — a library is 40kb+ of runtime to draw four primitives.
 * These use the chart tokens so light/dark and brand changes flow through.
 *
 * If NarTalk later needs brushing, zoom or stacked/nested series, swap these
 * for Recharts; the props here are deliberately close to its data shape.
 */

const CHART_COLORS = [
  "var(--chart-1, var(--primary))",
  "var(--chart-2, oklch(0.5753 0.2043 261.99))",
  "var(--chart-3, oklch(0.6486 0.1484 158.12))",
  "var(--chart-4, oklch(0.7633 0.1652 68.46))",
] as const;

/** Sparkline — trend shape only. No axes, no labels: it lives inside a StatCard. */
export function Sparkline({
  data,
  color = CHART_COLORS[0],
  height = 34,
  fill = true,
  className,
}: {
  data: number[];
  color?: string;
  height?: number;
  fill?: boolean;
  className?: string;
}) {
  if (data.length < 2) return null;

  const W = 100;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  // 2% top/bottom inset so the stroke never clips at the extremes.
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = 96 - ((v - min) / span) * 92;
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
  const area = `${line} L${W},100 L0,100 Z`;
  const gid = `nt-spark-${Math.abs(data.reduce((a, b) => a * 31 + b, 7)) % 100000}`;

  return (
    <svg
      viewBox={`0 0 ${W} 100`}
      preserveAspectRatio="none"
      height={height}
      className={cn("w-full overflow-visible", className)}
      aria-hidden
    >
      {fill ? (
        <>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.18" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gid})`} />
        </>
      ) : null}
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** BarChart — the response-volume shape. Labels are sparse by design. */
export function BarChart({
  data,
  labels,
  color = CHART_COLORS[1],
  height = 190,
  valueFormat = (n: number) => n.toLocaleString("az-AZ"),
  className,
}: {
  data: number[];
  labels?: string[];
  color?: string;
  height?: number;
  valueFormat?: (n: number) => string;
  className?: string;
}) {
  const max = Math.max(...data, 1);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-end gap-[3px]" style={{ height }}>
        {data.map((v, i) => (
          <div
            key={i}
            className="group relative min-w-0.5 flex-1 rounded-t-sm transition-[height,background-color] duration-200"
            style={{ height: `${Math.max((v / max) * 100, 1.5)}%`, backgroundColor: color }}
          >
            {/* Tooltip: title is enough here — no portal, no listener per bar. */}
            <span className="sr-only">{valueFormat(v)}</span>
            <span
              aria-hidden
              className="pointer-events-none absolute -top-7 left-1/2 z-10 -translate-x-1/2 rounded-md bg-foreground px-1.5 py-0.5 text-[11px] font-medium tabular-nums text-background opacity-0 transition-opacity group-hover:opacity-100"
            >
              {valueFormat(v)}
            </span>
          </div>
        ))}
      </div>
      {labels?.length ? (
        <div className="flex justify-between text-xs text-muted-foreground">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** DonutChart — source split. Centre carries the total so the ring needs no labels. */
export function DonutChart({
  data,
  size = 112,
  thickness = 14,
  centerValue,
  centerLabel,
  className,
}: {
  data: { value: number; color?: string; label?: string }[];
  size?: number;
  thickness?: number;
  centerValue?: string;
  centerLabel?: string;
  className?: string;
}) {
  const total = data.reduce((a, d) => a + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className={cn("relative shrink-0", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={thickness} className="stroke-muted" />
        {data.map((d, i) => {
          const len = (d.value / total) * c;
          const el = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              strokeWidth={thickness}
              stroke={d.color ?? CHART_COLORS[i % CHART_COLORS.length]}
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      {centerValue ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold tabular-nums leading-none">{centerValue}</span>
          {centerLabel ? <span className="mt-0.5 text-xs text-muted-foreground">{centerLabel}</span> : null}
        </div>
      ) : null}
    </div>
  );
}

/** ChartLegend — pairs a swatch with a word. Never rely on the swatch alone. */
export function ChartLegend({ items, className }: { items: { label: string; color?: string }[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 text-xs text-muted-foreground", className)}>
      {items.map((it, i) => (
        <span key={it.label} className="inline-flex items-center gap-1.5">
          <span
            className="size-1.5 rounded-full"
            style={{ backgroundColor: it.color ?? CHART_COLORS[i % CHART_COLORS.length] }}
          />
          {it.label}
        </span>
      ))}
    </div>
  );
}

/**
 * UsageMeter — plan limits, the monetisation surface.
 *
 * Tone escalates with consumption because this bar is where upgrade happens:
 * neutral under 75%, amber at 75%, destructive at 90%. The number is always
 * spelled out — a bar alone never tells a user how close they are.
 */
export function UsageMeter({
  label,
  used,
  limit,
  hint,
  className,
}: {
  label: string;
  used: number;
  limit: number;
  hint?: string;
  className?: string;
}) {
  const pct = limit > 0 ? Math.min((used / limit) * 100, 100) : 0;
  const tone = pct >= 90 ? "bg-destructive" : pct >= 75 ? "bg-amber-500" : "bg-primary";
  const fmt = (n: number) => n.toLocaleString("az-AZ");

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-baseline justify-between gap-2 text-xs">
        <span className="font-medium">{label}</span>
        <span className="tabular-nums text-muted-foreground">
          {fmt(used)} / {fmt(limit)}
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={used}
        aria-valuemin={0}
        aria-valuemax={limit}
        aria-label={label}
        className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
      >
        <div className={cn("h-full rounded-full transition-[width] duration-300", tone)} style={{ width: `${pct}%` }} />
      </div>
      {hint ? (
        <span className={cn("text-xs", pct >= 90 ? "text-destructive" : "text-muted-foreground")}>{hint}</span>
      ) : null}
    </div>
  );
}

/** StatCard — one metric, one delta, optional trend. Tabular numerals mandatory. */
export function StatCard({
  label,
  value,
  delta,
  hint,
  icon: Icon,
  chart,
  className,
}: {
  label: string;
  value: string | number;
  delta?: string;
  hint?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  chart?: React.ReactNode;
  className?: string;
}) {
  const negative = typeof delta === "string" && delta.trim().startsWith("-");

  return (
    <div className={cn("flex flex-col gap-2 rounded-xl border bg-card p-4", className)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        {Icon ? <Icon size={14} className="text-muted-foreground/70" /> : null}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold tabular-nums leading-none tracking-tight">{value}</span>
        {delta ? (
          <span
            className={cn(
              "text-xs font-medium tabular-nums",
              negative ? "text-destructive" : "text-emerald-700 dark:text-emerald-400",
            )}
          >
            {delta}
          </span>
        ) : null}
      </div>
      {chart ? <div className="mt-1">{chart}</div> : null}
      {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
    </div>
  );
}
