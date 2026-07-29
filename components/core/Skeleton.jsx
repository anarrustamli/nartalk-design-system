import React from "react";

const cx = (...a) => a.filter(Boolean).join(" ");

/** Spinner — inline indeterminate progress. */
export function Spinner({ size = 14, color = "currentColor", label, style }) {
  return (
    <span role={label ? "status" : undefined} aria-label={label} style={{ display: "inline-flex", ...style }}>
      <span className="nt-spinner" style={{ width: size, height: size, color }} />
    </span>
  );
}

/** Skeleton — a shimmering placeholder box that matches the real element's geometry. */
export function Skeleton({ width = "100%", height = 12, radius = "var(--radius-sm)", circle = false, style, className }) {
  return <span className={cx("nt-skeleton", className)} style={{ display: "block", width, height: circle ? width : height, borderRadius: circle ? "var(--radius-full)" : radius, ...style }} />;
}

/** SkeletonText — n lines, last one short, matching body-md rhythm. */
export function SkeletonText({ lines = 3, width = "100%", gap = "var(--space-2)" }) {
  return (
    <span style={{ display: "flex", flexDirection: "column", gap, width }}>
      {Array.from({ length: lines }).map((_, i) => <Skeleton key={i} height={10} width={i === lines - 1 ? "58%" : "100%"} />)}
    </span>
  );
}

/** SkeletonTable — loading rows that keep the real column rhythm so nothing jumps. */
export function SkeletonTable({ rows = 5, cols = [220, 90, 70, 110, 40], density = "default" }) {
  const pad = density === "compact" ? "var(--pad-cell-y-compact)" : density === "comfortable" ? "var(--pad-cell-y-comfortable)" : "var(--pad-cell-y-default)";
  return (
    <div>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", padding: `${pad} var(--pad-cell-x)`, borderBottom: "1px solid var(--color-border-subtle)" }}>
          {cols.map((w, c) => <Skeleton key={c} width={w} height={9} style={{ opacity: 1 - r * 0.13 }} />)}
        </div>
      ))}
    </div>
  );
}

/** SkeletonCard — a card-shaped placeholder for grids. */
export function SkeletonCard({ lines = 2, height }) {
  return (
    <div className="nt-card" style={{ padding: "var(--pad-card)", gap: "var(--space-3)", height }}>
      <Skeleton width={28} height={28} radius="var(--radius-sm)" />
      <Skeleton width="62%" height={11} />
      <SkeletonText lines={lines} />
    </div>
  );
}
