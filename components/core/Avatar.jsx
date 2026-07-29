import React from "react";
import { Icon } from "./Icon.jsx";

const cx = (...a) => a.filter(Boolean).join(" ");
const HUES = ["--chart-1","--chart-2","--chart-3","--chart-4","--chart-5","--chart-6","--chart-8"];
const initials = (n) => String(n||"").trim().split(/\s+/).slice(0,2).map(w=>w[0]||"").join("").toUpperCase();
const hueOf = (n) => { let h=0; for (const c of String(n||"")) h=(h*31+c.charCodeAt(0))>>>0; return HUES[h%HUES.length]; };

/** Avatar — a person, a bot or a workspace. Falls back initials → glyph. */
export function Avatar({ name, src, size = "md", shape = "circle", tinted = true, status, icon, className, style, ...rest }) {
  const hue = tinted && name ? hueOf(name) : null;
  return (
    <span className={cx("nt-avatar", size !== "md" && `nt-avatar--${size}`, shape === "square" && "nt-avatar--square", className)}
      style={hue ? { background: `color-mix(in srgb, var(${hue}) 16%, transparent)`, color: `var(${hue})`, ...style } : style}
      title={name} {...rest}>
      {src ? <img src={src} alt={name || ""} /> : name ? initials(name) : <Icon name={icon || "User"} size={size==="xl"?22:size==="lg"?17:13} />}
      {status ? <span className="nt-avatar__badge" style={{ background: `var(--color-status-${status}-solid)` }} /> : null}
    </span>
  );
}

/** AvatarGroup — overlapped stack with a +N overflow chip. */
export function AvatarGroup({ people = [], max = 4, size = "sm" }) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  return (
    <span className="nt-avatargroup">
      {shown.map((p, i) => <Avatar key={i} name={typeof p === "string" ? p : p.name} src={typeof p === "object" ? p.src : undefined} size={size} />)}
      {rest > 0 ? (
        <span className={cx("nt-avatar", size !== "md" && `nt-avatar--${size}`)} style={{ background: "var(--color-bg-inset)", color: "var(--color-text-tertiary)" }}>+{rest}</span>
      ) : null}
    </span>
  );
}
