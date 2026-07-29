import React from "react";
import { Icon } from "./Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

/** Card — the default container. Hairline border, no shadow, 10px radius. */
export function Card({ variant = "default", interactive = false, selected = false, as = "div", children, className, style, ...rest }) {
  const Tag = as;
  return (
    <Tag className={cx("nt-card", variant !== "default" && `nt-card--${variant}`,
      interactive && "nt-card--interactive", selected && "nt-card--selected", className)} style={style} {...rest}>
      {children}
    </Tag>
  );
}

export function CardHeader({ title, description, actions, icon, plain = false, className, children }) {
  return (
    <div className={cx("nt-card__head", plain && "nt-card__head--plain", className)}>
      <div style={{ display: "flex", gap: "var(--space-2-5)", minWidth: 0 }}>
        {icon ? <span style={{ display: "grid", placeItems: "center", width: 28, height: 28, flex: "0 0 auto", borderRadius: "var(--radius-sm)", background: "var(--color-bg-inset)", color: "var(--color-text-secondary)" }}><Icon name={icon} size={15} /></span> : null}
        <div style={{ minWidth: 0 }}>
          {title ? <div className="nt-card__title">{title}</div> : null}
          {description ? <div className="nt-card__desc">{description}</div> : null}
          {children}
        </div>
      </div>
      {actions ? <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", flex: "0 0 auto" }}>{actions}</div> : null}
    </div>
  );
}

export function CardBody({ flush = false, gap, children, className, style }) {
  return <div className={cx("nt-card__body", flush && "nt-card__body--flush", className)} style={{ ...(gap ? { gap } : null), ...style }}>{children}</div>;
}

export function CardFooter({ children, className, style }) {
  return <div className={cx("nt-card__foot", className)} style={style}>{children}</div>;
}

/** StatCard — one metric, one delta. Numbers are tabular so columns line up. */
export function StatCard({ label, value, delta, deltaTone, hint, icon, chart, onClick }) {
  const tone = deltaTone || (delta && String(delta).trim().startsWith("-") ? "error" : "success");
  return (
    <Card interactive={!!onClick} onClick={onClick}>
      <div style={{ padding: "var(--pad-card)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-2)" }}>
          <span style={{ font: "var(--fw-medium) var(--type-label-sm-size)/var(--type-label-sm-lh) var(--font-sans)", color: "var(--color-text-tertiary)" }}>{label}</span>
          {icon ? <Icon name={icon} size={14} color="var(--color-text-muted)" /> : null}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)" }}>
          <span style={{ font: "var(--fw-semibold) var(--type-h3-size)/1 var(--font-sans)", letterSpacing: "var(--type-h3-ls)", fontVariantNumeric: "tabular-nums", color: "var(--color-text-primary)" }}>{value}</span>
          {delta ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 2, font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)", color: `var(--color-status-${tone}-fg)` }}>
              <Icon name={tone === "error" ? "TrendingDown" : "TrendingUp"} size={12} />{delta}
            </span>
          ) : null}
        </div>
        {chart ? <div style={{ height: 34, marginTop: "var(--space-1)" }}>{chart}</div> : null}
        {hint ? <span style={{ font: "var(--type-caption-weight) var(--type-caption-size)/var(--type-caption-lh) var(--font-sans)", color: "var(--color-text-muted)" }}>{hint}</span> : null}
      </div>
    </Card>
  );
}

/** Panel — a titled section inside a page, one step quieter than Card. */
export function Panel({ title, description, actions, children, style }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", ...style }}>
      {(title || actions) ? (
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-3)" }}>
          <div>
            {title ? <h3 style={{ font: "var(--fw-semibold) var(--type-h4-size)/var(--type-h4-lh) var(--font-sans)", letterSpacing: "var(--type-h4-ls)" }}>{title}</h3> : null}
            {description ? <p style={{ marginTop: "var(--space-1)", font: "var(--type-body-sm-weight) var(--type-body-sm-size)/var(--type-body-sm-lh) var(--font-sans)", color: "var(--color-text-secondary)" }}>{description}</p> : null}
          </div>
          {actions ? <div style={{ display: "flex", gap: "var(--space-2)" }}>{actions}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
