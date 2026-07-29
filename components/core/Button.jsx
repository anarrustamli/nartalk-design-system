import React from "react";
import { Icon } from "./Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");

/**
 * Button — the single affirmative control. One primary per view.
 * Destructive is Brick, never Nar, so it can never be mistaken for "confirm".
 */
export function Button({
  variant = "secondary", size = "md", icon, iconAfter, loading = false, disabled = false,
  block = false, as, href, children, className, style, ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const iconSize = size === "lg" ? 18 : size === "xs" ? 12 : 14;
  return (
    <Tag
      href={href}
      className={cx("nt-btn", `nt-btn--${variant}`, size !== "md" && `nt-btn--${size}`,
        loading && "nt-btn--loading", block && "nt-btn--block", className)}
      disabled={Tag === "button" ? disabled || loading : undefined}
      aria-disabled={Tag !== "button" && (disabled || loading) ? true : undefined}
      aria-busy={loading || undefined}
      style={style}
      {...rest}
    >
      {icon ? <Icon name={icon} size={iconSize} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={iconSize} /> : null}
      {loading ? (
        <span className="nt-btn__spin">
          <Spinner size={size === "lg" ? 16 : 13} color="var(--color-action-primary-fg)" />
        </span>
      ) : null}
    </Tag>
  );
}

/** IconButton — square, icon-only. `label` is required for screen readers. */
export function IconButton({ icon, label, size = "md", variant = "ghost", active = false, disabled = false, className, ...rest }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      className={cx("nt-iconbtn", size !== "md" && `nt-iconbtn--${size}`,
        variant === "bordered" && "nt-iconbtn--bordered", active && "nt-iconbtn--active", className)}
      {...rest}
    >
      <Icon name={icon} size={size === "lg" ? 18 : size === "xs" ? 12 : 15} />
    </button>
  );
}

/** SplitButton — a primary action plus a menu of adjacent variants (Publish / Publish & copy link). */
export function SplitButton({ children, variant = "primary", size = "md", onMenu, icon, menuLabel = "More actions", ...rest }) {
  return (
    <span className="nt-split">
      <Button variant={variant} size={size} icon={icon} {...rest}>{children}</Button>
      <Button variant={variant} size={size} onClick={onMenu} aria-label={menuLabel} title={menuLabel}>
        <Icon name="ChevronDown" size={14} />
      </Button>
    </span>
  );
}

/** ButtonGroup — a run of related buttons on the 8px inline gap. */
export function ButtonGroup({ children, gap = "var(--gap-inline)", justify = "flex-start", style }) {
  return <div style={{ display: "flex", alignItems: "center", gap, justifyContent: justify, ...style }}>{children}</div>;
}

function Spinner({ size = 14, color = "currentColor" }) {
  return <span className="nt-spinner" style={{ width: size, height: size, color }} />;
}
