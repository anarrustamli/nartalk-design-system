import React from "react";

const PASCAL = (s) => String(s).replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());

/**
 * Icon — thin React wrapper over the Lucide UMD glyph set.
 * Lucide is loaded from CDN by the host page; this component reads the raw
 * icon geometry off window.lucide.icons so no SVG is ever hand-drawn.
 */
export function Icon({ name, size = 16, strokeWidth, color = "currentColor", label, style, className, ...rest }) {
  const lib = typeof window !== "undefined" ? window.lucide : null;
  const set = lib && lib.icons ? lib.icons : null;
  const node = set ? set[name] || set[PASCAL(name)] : null;
  // Optical stroke compensation: small sizes need a lighter stroke to stay legible.
  const sw = strokeWidth != null ? strokeWidth : size <= 14 ? 1.6 : size <= 20 ? 1.75 : 1.9;
  const children = Array.isArray(node)
    ? node.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))
    : null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={className}
      style={{ display: "block", flex: "0 0 auto", ...style }}
      {...rest}
    >
      {label ? <title>{label}</title> : null}
      {children}
    </svg>
  );
}

/** The canonical NarTalk domain → Lucide glyph map. Never improvise a glyph; add it here. */
export const NT_ICONS = {
  bots: "Bot", forms: "ClipboardList", responses: "Inbox", analytics: "ChartNoAxesColumn",
  integrations: "Blocks", api: "Code2", webhook: "Webhook", otp: "ShieldCheck",
  notifications: "Bell", team: "Users", settings: "Settings2", billing: "CreditCard",
  security: "Lock", logs: "ScrollText", templates: "LayoutTemplate", automation: "Zap",
  logic: "GitBranch", publish: "Rocket", preview: "Eye", duplicate: "Copy",
  archive: "Archive", delete: "Trash2", search: "Search", filter: "ListFilter",
  export: "Download", add: "Plus", more: "Ellipsis", drag: "GripVertical",
  chevronDown: "ChevronDown", chevronRight: "ChevronRight", check: "Check", close: "X",
  copy: "Copy", external: "ArrowUpRight", refresh: "RefreshCw", retry: "RotateCcw",
  telegram: "Send", workspace: "Boxes", user: "User", help: "CircleHelp",
  warning: "TriangleAlert", error: "CircleAlert", success: "CircleCheck", info: "Info",
  clock: "Clock", calendar: "Calendar", link: "Link", key: "KeyRound",
  message: "MessageSquare", question: "CircleQuestionMark", condition: "Split",
  delay: "Timer", start: "Play", end: "CircleStop", phone: "Phone",
  location: "MapPin", file: "Paperclip", image: "Image", text: "Type",
  choice: "CircleDot", number: "Hash", email: "AtSign", toggleOn: "ToggleRight",
  collapse: "PanelLeftClose", expand: "PanelLeft", zoomIn: "ZoomIn", zoomOut: "ZoomOut",
  fit: "Maximize2", undo: "Undo2", redo: "Redo2", save: "Save",
  eyeOff: "EyeOff", sortAsc: "ArrowUp", sortDesc: "ArrowDown", columns: "Columns3",
  play: "Play", pause: "Pause", sparkles: "Sparkles", terminal: "SquareTerminal",
};

/** Resolve a NarTalk domain name (e.g. "webhook") to its Lucide glyph name. */
export function ntIcon(domainName) {
  return NT_ICONS[domainName] || PASCAL(domainName);
}
