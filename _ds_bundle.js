/* @ds-bundle: {"format":4,"namespace":"NarTalkDesignSystem_3e1107","components":[{"name":"BuilderCanvas","sourcePath":"components/builder/BuilderCanvas.jsx"},{"name":"CanvasToolbar","sourcePath":"components/builder/BuilderCanvas.jsx"},{"name":"ToolbarDivider","sourcePath":"components/builder/BuilderCanvas.jsx"},{"name":"ZoomControls","sourcePath":"components/builder/BuilderCanvas.jsx"},{"name":"MiniMap","sourcePath":"components/builder/BuilderCanvas.jsx"},{"name":"NodeInspector","sourcePath":"components/builder/BuilderCanvas.jsx"},{"name":"PublishBar","sourcePath":"components/builder/BuilderCanvas.jsx"},{"name":"NT_NODES","sourcePath":"components/builder/FlowNode.jsx"},{"name":"FlowNode","sourcePath":"components/builder/FlowNode.jsx"},{"name":"NodePalette","sourcePath":"components/builder/FlowNode.jsx"},{"name":"Edge","sourcePath":"components/builder/FlowNode.jsx"},{"name":"EdgeDefs","sourcePath":"components/builder/FlowNode.jsx"},{"name":"NodeStatusBadge","sourcePath":"components/builder/FlowNode.jsx"},{"name":"LogicKeyword","sourcePath":"components/builder/LogicBuilder.jsx"},{"name":"NT_OPERATORS","sourcePath":"components/builder/LogicBuilder.jsx"},{"name":"ConditionRow","sourcePath":"components/builder/LogicBuilder.jsx"},{"name":"LogicGroup","sourcePath":"components/builder/LogicBuilder.jsx"},{"name":"ActionRow","sourcePath":"components/builder/LogicBuilder.jsx"},{"name":"NT_LOGIC_ACTIONS","sourcePath":"components/builder/LogicBuilder.jsx"},{"name":"LogicBuilder","sourcePath":"components/builder/LogicBuilder.jsx"},{"name":"NT_QUESTION_TYPES","sourcePath":"components/builder/QuestionBlock.jsx"},{"name":"QuestionBlock","sourcePath":"components/builder/QuestionBlock.jsx"},{"name":"QuestionTypePicker","sourcePath":"components/builder/QuestionBlock.jsx"},{"name":"OptionsEditor","sourcePath":"components/builder/QuestionBlock.jsx"},{"name":"SectionDivider","sourcePath":"components/builder/QuestionBlock.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"NT_STATUS","sourcePath":"components/core/Badge.jsx"},{"name":"StatusBadge","sourcePath":"components/core/Badge.jsx"},{"name":"StatusDot","sourcePath":"components/core/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Badge.jsx"},{"name":"MethodBadge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/Button.jsx"},{"name":"SplitButton","sourcePath":"components/core/Button.jsx"},{"name":"ButtonGroup","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"StatCard","sourcePath":"components/core/Card.jsx"},{"name":"Panel","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"NT_ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Spinner","sourcePath":"components/core/Skeleton.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"SkeletonText","sourcePath":"components/core/Skeleton.jsx"},{"name":"SkeletonTable","sourcePath":"components/core/Skeleton.jsx"},{"name":"SkeletonCard","sourcePath":"components/core/Skeleton.jsx"},{"name":"ChartContainer","sourcePath":"components/data/ChartContainer.jsx"},{"name":"ChartLegend","sourcePath":"components/data/ChartContainer.jsx"},{"name":"BarChart","sourcePath":"components/data/ChartContainer.jsx"},{"name":"Sparkline","sourcePath":"components/data/ChartContainer.jsx"},{"name":"DonutChart","sourcePath":"components/data/ChartContainer.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"NT_EMPTY","sourcePath":"components/data/EmptyState.jsx"},{"name":"ErrorState","sourcePath":"components/data/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"CircularProgress","sourcePath":"components/data/ProgressBar.jsx"},{"name":"UsageMeter","sourcePath":"components/data/ProgressBar.jsx"},{"name":"RateLimitIndicator","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"TableToolbar","sourcePath":"components/data/Table.jsx"},{"name":"TableFooter","sourcePath":"components/data/Table.jsx"},{"name":"StatusCell","sourcePath":"components/data/Table.jsx"},{"name":"IdentityCell","sourcePath":"components/data/Table.jsx"},{"name":"Timeline","sourcePath":"components/data/Timeline.jsx"},{"name":"ActivityFeed","sourcePath":"components/data/Timeline.jsx"},{"name":"KeyValueList","sourcePath":"components/data/Timeline.jsx"},{"name":"SecretField","sourcePath":"components/developer/ApiKeyCard.jsx"},{"name":"ApiKeyCard","sourcePath":"components/developer/ApiKeyCard.jsx"},{"name":"EnvironmentSelector","sourcePath":"components/developer/ApiKeyCard.jsx"},{"name":"TestModeBanner","sourcePath":"components/developer/ApiKeyCard.jsx"},{"name":"OtpConfigCard","sourcePath":"components/developer/ApiKeyCard.jsx"},{"name":"CopyButton","sourcePath":"components/developer/CodeBlock.jsx"},{"name":"CodeBlock","sourcePath":"components/developer/CodeBlock.jsx"},{"name":"CodeTabs","sourcePath":"components/developer/CodeBlock.jsx"},{"name":"EndpointBlock","sourcePath":"components/developer/CodeBlock.jsx"},{"name":"InlineCode","sourcePath":"components/developer/CodeBlock.jsx"},{"name":"SignatureInfo","sourcePath":"components/developer/CodeBlock.jsx"},{"name":"FilterChip","sourcePath":"components/developer/FilterBuilder.jsx"},{"name":"FilterBuilder","sourcePath":"components/developer/FilterBuilder.jsx"},{"name":"SavedFilters","sourcePath":"components/developer/FilterBuilder.jsx"},{"name":"ColumnManager","sourcePath":"components/developer/FilterBuilder.jsx"},{"name":"ExportProgress","sourcePath":"components/developer/FilterBuilder.jsx"},{"name":"NT_ROLES","sourcePath":"components/developer/PermissionMatrix.jsx"},{"name":"PermissionMatrix","sourcePath":"components/developer/PermissionMatrix.jsx"},{"name":"RoleSelector","sourcePath":"components/developer/PermissionMatrix.jsx"},{"name":"MemberRow","sourcePath":"components/developer/PermissionMatrix.jsx"},{"name":"AccessDenied","sourcePath":"components/developer/PermissionMatrix.jsx"},{"name":"DeliveryRow","sourcePath":"components/developer/WebhookLog.jsx"},{"name":"WebhookLog","sourcePath":"components/developer/WebhookLog.jsx"},{"name":"EventTypeList","sourcePath":"components/developer/WebhookLog.jsx"},{"name":"RequestExample","sourcePath":"components/developer/WebhookLog.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Banner","sourcePath":"components/feedback/Alert.jsx"},{"name":"Toast","sourcePath":"components/feedback/Alert.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Alert.jsx"},{"name":"AiProgress","sourcePath":"components/feedback/Alert.jsx"},{"name":"NT_AI_STEPS","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/forms/Checkbox.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FieldRow","sourcePath":"components/forms/Field.jsx"},{"name":"FileUpload","sourcePath":"components/forms/FileUpload.jsx"},{"name":"FileRow","sourcePath":"components/forms/FileUpload.jsx"},{"name":"TagInput","sourcePath":"components/forms/FileUpload.jsx"},{"name":"KeyValueInput","sourcePath":"components/forms/FileUpload.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchInput","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"NumberInput","sourcePath":"components/forms/Input.jsx"},{"name":"PasswordInput","sourcePath":"components/forms/Input.jsx"},{"name":"UrlInput","sourcePath":"components/forms/Input.jsx"},{"name":"PhoneInput","sourcePath":"components/forms/Input.jsx"},{"name":"OtpInput","sourcePath":"components/forms/OtpInput.jsx"},{"name":"CodeInput","sourcePath":"components/forms/OtpInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Combobox","sourcePath":"components/forms/Select.jsx"},{"name":"MultiSelect","sourcePath":"components/forms/Select.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"SidebarSection","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"SidebarItem","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"WorkspaceSwitcher","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"AccountMenu","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"MobileTabBar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Topbar.jsx"},{"name":"VerticalTabs","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Menu","sourcePath":"components/overlays/Menu.jsx"},{"name":"DropdownMenu","sourcePath":"components/overlays/Menu.jsx"},{"name":"Popover","sourcePath":"components/overlays/Menu.jsx"},{"name":"CommandPalette","sourcePath":"components/overlays/Menu.jsx"},{"name":"Modal","sourcePath":"components/overlays/Modal.jsx"},{"name":"ConfirmDialog","sourcePath":"components/overlays/Modal.jsx"},{"name":"Drawer","sourcePath":"components/overlays/Modal.jsx"},{"name":"BottomSheet","sourcePath":"components/overlays/Modal.jsx"}],"sourceHashes":{"components/builder/BuilderCanvas.jsx":"5356ee9cc5c7","components/builder/FlowNode.jsx":"3abf5db9cbe3","components/builder/LogicBuilder.jsx":"1db996ec3a70","components/builder/QuestionBlock.jsx":"31e4b561e7db","components/core/Avatar.jsx":"48515de33f1a","components/core/Badge.jsx":"8fa6c3d26ef9","components/core/Button.jsx":"695d00be4a24","components/core/Card.jsx":"1eb4b2978efe","components/core/Icon.jsx":"242868dfc7b3","components/core/Skeleton.jsx":"58202e7200e1","components/data/ChartContainer.jsx":"9d91eacbe6f7","components/data/EmptyState.jsx":"7541e8d38979","components/data/ProgressBar.jsx":"223cd06217a3","components/data/Table.jsx":"80907c8273b9","components/data/Timeline.jsx":"7886e0b8df77","components/developer/ApiKeyCard.jsx":"be557ef4b757","components/developer/CodeBlock.jsx":"51a6fd5fc7a2","components/developer/FilterBuilder.jsx":"6e8be6519cbf","components/developer/PermissionMatrix.jsx":"b3a8d18905bc","components/developer/WebhookLog.jsx":"8517bac4fda4","components/feedback/Alert.jsx":"a2aa270e7b3c","components/forms/Checkbox.jsx":"92f9e1f2d038","components/forms/Field.jsx":"486fbf12d416","components/forms/FileUpload.jsx":"2ccbf7c0710b","components/forms/Input.jsx":"2469adf72266","components/forms/OtpInput.jsx":"41758d563a81","components/forms/Select.jsx":"3c6ce27e8d25","components/navigation/Sidebar.jsx":"849150d98379","components/navigation/Topbar.jsx":"03682f5d9e80","components/overlays/Menu.jsx":"1834d36edec8","components/overlays/Modal.jsx":"657d4adb17a5","ui_kits/builder/BotBuilder.jsx":"e69460452150","ui_kits/builder/FormBuilder.jsx":"86d61b5fe4e4","ui_kits/dashboard/BotsList.jsx":"f0d9f064cf02","ui_kits/dashboard/Overview.jsx":"f5be0ee8f2b3","ui_kits/dashboard/Responses.jsx":"14c7e27a5e1f","ui_kits/dashboard/Shell.jsx":"9475887435ca","ui_kits/developer/DevScreens.jsx":"cda601c99e0b","ui_kits/website/Landing.jsx":"999f30a7c0ee"},"inlinedExternals":[],"unexposedExports":[{"name":"ntIcon","sourcePath":"components/core/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.NarTalkDesignSystem_3e1107 = window.NarTalkDesignSystem_3e1107 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PASCAL = s => String(s).replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());

/**
 * Icon — thin React wrapper over the Lucide UMD glyph set.
 * Lucide is loaded from CDN by the host page; this component reads the raw
 * icon geometry off window.lucide.icons so no SVG is ever hand-drawn.
 */
function Icon({
  name,
  size = 16,
  strokeWidth,
  color = "currentColor",
  label,
  style,
  className,
  ...rest
}) {
  const lib = typeof window !== "undefined" ? window.lucide : null;
  const set = lib && lib.icons ? lib.icons : null;
  const node = set ? set[name] || set[PASCAL(name)] : null;
  // Optical stroke compensation: small sizes need a lighter stroke to stay legible.
  const sw = strokeWidth != null ? strokeWidth : size <= 14 ? 1.6 : size <= 20 ? 1.75 : 1.9;
  const children = Array.isArray(node) ? node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })) : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? "img" : undefined,
    "aria-label": label || undefined,
    "aria-hidden": label ? undefined : true,
    className: className,
    style: {
      display: "block",
      flex: "0 0 auto",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("title", null, label) : null, children);
}

/** The canonical NarTalk domain → Lucide glyph map. Never improvise a glyph; add it here. */
const NT_ICONS = {
  bots: "Bot",
  forms: "ClipboardList",
  responses: "Inbox",
  analytics: "ChartNoAxesColumn",
  integrations: "Blocks",
  api: "Code2",
  webhook: "Webhook",
  otp: "ShieldCheck",
  notifications: "Bell",
  team: "Users",
  settings: "Settings2",
  billing: "CreditCard",
  security: "Lock",
  logs: "ScrollText",
  templates: "LayoutTemplate",
  automation: "Zap",
  logic: "GitBranch",
  publish: "Rocket",
  preview: "Eye",
  duplicate: "Copy",
  archive: "Archive",
  delete: "Trash2",
  search: "Search",
  filter: "ListFilter",
  export: "Download",
  add: "Plus",
  more: "Ellipsis",
  drag: "GripVertical",
  chevronDown: "ChevronDown",
  chevronRight: "ChevronRight",
  check: "Check",
  close: "X",
  copy: "Copy",
  external: "ArrowUpRight",
  refresh: "RefreshCw",
  retry: "RotateCcw",
  telegram: "Send",
  workspace: "Boxes",
  user: "User",
  help: "CircleHelp",
  warning: "TriangleAlert",
  error: "CircleAlert",
  success: "CircleCheck",
  info: "Info",
  clock: "Clock",
  calendar: "Calendar",
  link: "Link",
  key: "KeyRound",
  message: "MessageSquare",
  question: "CircleQuestionMark",
  condition: "Split",
  delay: "Timer",
  start: "Play",
  end: "CircleStop",
  phone: "Phone",
  location: "MapPin",
  file: "Paperclip",
  image: "Image",
  text: "Type",
  choice: "CircleDot",
  number: "Hash",
  email: "AtSign",
  toggleOn: "ToggleRight",
  collapse: "PanelLeftClose",
  expand: "PanelLeft",
  zoomIn: "ZoomIn",
  zoomOut: "ZoomOut",
  fit: "Maximize2",
  undo: "Undo2",
  redo: "Redo2",
  save: "Save",
  eyeOff: "EyeOff",
  sortAsc: "ArrowUp",
  sortDesc: "ArrowDown",
  columns: "Columns3",
  play: "Play",
  pause: "Pause",
  sparkles: "Sparkles",
  terminal: "SquareTerminal"
};

/** Resolve a NarTalk domain name (e.g. "webhook") to its Lucide glyph name. */
function ntIcon(domainName) {
  return NT_ICONS[domainName] || PASCAL(domainName);
}
Object.assign(__ds_scope, { Icon, NT_ICONS, ntIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
const HUES = ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5", "--chart-6", "--chart-8"];
const initials = n => String(n || "").trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
const hueOf = n => {
  let h = 0;
  for (const c of String(n || "")) h = h * 31 + c.charCodeAt(0) >>> 0;
  return HUES[h % HUES.length];
};

/** Avatar — a person, a bot or a workspace. Falls back initials → glyph. */
function Avatar({
  name,
  src,
  size = "md",
  shape = "circle",
  tinted = true,
  status,
  icon,
  className,
  style,
  ...rest
}) {
  const hue = tinted && name ? hueOf(name) : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx("nt-avatar", size !== "md" && `nt-avatar--${size}`, shape === "square" && "nt-avatar--square", className),
    style: hue ? {
      background: `color-mix(in srgb, var(${hue}) 16%, transparent)`,
      color: `var(${hue})`,
      ...style
    } : style,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || ""
  }) : name ? initials(name) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || "User",
    size: size === "xl" ? 22 : size === "lg" ? 17 : 13
  }), status ? /*#__PURE__*/React.createElement("span", {
    className: "nt-avatar__badge",
    style: {
      background: `var(--color-status-${status}-solid)`
    }
  }) : null);
}

/** AvatarGroup — overlapped stack with a +N overflow chip. */
function AvatarGroup({
  people = [],
  max = 4,
  size = "sm"
}) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    className: "nt-avatargroup"
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    name: typeof p === "string" ? p : p.name,
    src: typeof p === "object" ? p.src : undefined,
    size: size
  })), rest > 0 ? /*#__PURE__*/React.createElement("span", {
    className: cx("nt-avatar", size !== "md" && `nt-avatar--${size}`),
    style: {
      background: "var(--color-bg-inset)",
      color: "var(--color-text-tertiary)"
    }
  }, "+", rest) : null);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
const TONES = {
  neutral: ["--color-status-neutral-fg", "--color-status-neutral-bg", "--color-status-neutral-border", "--color-status-neutral-solid"],
  brand: ["--color-status-brand-fg", "--color-status-brand-bg", "--color-status-brand-border", "--color-status-brand-solid"],
  success: ["--color-status-success-fg", "--color-status-success-bg", "--color-status-success-border", "--color-status-success-solid"],
  warning: ["--color-status-warning-fg", "--color-status-warning-bg", "--color-status-warning-border", "--color-status-warning-solid"],
  error: ["--color-status-error-fg", "--color-status-error-bg", "--color-status-error-border", "--color-status-error-solid"],
  info: ["--color-status-info-fg", "--color-status-info-bg", "--color-status-info-border", "--color-status-info-solid"]
};

/** Badge — a compact label. Tone carries meaning; the text always carries it too. */
function Badge({
  tone = "neutral",
  variant = "soft",
  size = "md",
  icon,
  dot = false,
  mono = false,
  children,
  className,
  style,
  ...rest
}) {
  const [fg, bg, bd, solid] = TONES[tone] || TONES.neutral;
  const skin = variant === "solid" ? {
    background: `var(${solid})`,
    color: "#fff",
    borderColor: "transparent"
  } : variant === "outline" ? {
    background: "transparent",
    color: `var(${fg})`,
    borderColor: `var(${bd})`
  } : {
    background: `var(${bg})`,
    color: `var(${fg})`,
    borderColor: `var(${bd})`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx("nt-badge", size !== "md" && `nt-badge--${size}`, mono && "nt-badge--mono", className),
    style: {
      ...skin,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "nt-dot",
    style: {
      background: variant === "solid" ? "#fff" : `var(${solid})`
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 11
  }) : null, children);
}

/** The platform-wide status vocabulary. Colour is never the only signal — label and glyph travel with it. */
const NT_STATUS = {
  "form.draft": {
    label: "Draft",
    tone: "neutral",
    icon: "PencilLine"
  },
  "form.published": {
    label: "Published",
    tone: "success",
    icon: "CircleCheck"
  },
  "form.paused": {
    label: "Paused",
    tone: "warning",
    icon: "Pause"
  },
  "form.archived": {
    label: "Archived",
    tone: "neutral",
    icon: "Archive"
  },
  "bot.draft": {
    label: "Draft",
    tone: "neutral",
    icon: "PencilLine"
  },
  "bot.active": {
    label: "Active",
    tone: "success",
    icon: "CircleCheck"
  },
  "bot.paused": {
    label: "Paused",
    tone: "warning",
    icon: "Pause"
  },
  "bot.error": {
    label: "Error",
    tone: "error",
    icon: "TriangleAlert"
  },
  "submission.new": {
    label: "New",
    tone: "info",
    icon: "CircleDot"
  },
  "submission.reviewed": {
    label: "Reviewed",
    tone: "neutral",
    icon: "Eye"
  },
  "submission.in_progress": {
    label: "In progress",
    tone: "warning",
    icon: "LoaderCircle"
  },
  "submission.completed": {
    label: "Completed",
    tone: "success",
    icon: "CheckCheck"
  },
  "submission.rejected": {
    label: "Rejected",
    tone: "error",
    icon: "CircleX"
  },
  "webhook.delivered": {
    label: "Delivered",
    tone: "success",
    icon: "CircleCheck"
  },
  "webhook.pending": {
    label: "Pending",
    tone: "neutral",
    icon: "Clock"
  },
  "webhook.failed": {
    label: "Failed",
    tone: "error",
    icon: "CircleAlert"
  },
  "webhook.retrying": {
    label: "Retrying",
    tone: "warning",
    icon: "RotateCcw"
  },
  "otp.sent": {
    label: "Sent",
    tone: "info",
    icon: "Send"
  },
  "otp.verified": {
    label: "Verified",
    tone: "success",
    icon: "ShieldCheck"
  },
  "otp.expired": {
    label: "Expired",
    tone: "neutral",
    icon: "TimerOff"
  },
  "otp.failed": {
    label: "Failed",
    tone: "error",
    icon: "ShieldX"
  },
  "key.active": {
    label: "Active",
    tone: "success",
    icon: "CircleCheck"
  },
  "key.revoked": {
    label: "Revoked",
    tone: "error",
    icon: "CircleX"
  },
  "invite.pending": {
    label: "Pending",
    tone: "warning",
    icon: "Clock"
  }
};

/**
 * StatusBadge — the only way to render a platform status.
 * `status` is a "<domain>.<state>" key from NT_STATUS.
 */
function StatusBadge({
  status,
  variant = "soft",
  size = "md",
  showIcon = true,
  ...rest
}) {
  const s = NT_STATUS[status] || {
    label: String(status),
    tone: "neutral"
  };
  return /*#__PURE__*/React.createElement(Badge, _extends({
    tone: s.tone,
    variant: variant,
    size: size,
    icon: showIcon ? s.icon : undefined
  }, rest), s.label);
}

/** StatusDot — the compact indicator for tables and sidebars. Always paired with text. */
function StatusDot({
  status,
  tone,
  pulse = false,
  size = "md",
  label,
  style
}) {
  const t = tone || (NT_STATUS[status] || {}).tone || "neutral";
  const solid = (TONES[t] || TONES.neutral)[3];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: cx("nt-dot", size === "lg" && "nt-dot--lg", pulse && "nt-pulse"),
    style: {
      color: `var(${solid})`,
      background: `var(${solid})`
    }
  }), label !== false ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, label || (NT_STATUS[status] || {}).label) : null);
}

/** Tag — user-authored, removable. Never used for system status. */
function Tag({
  children,
  onRemove,
  icon,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx("nt-tag", className)
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-tag__x",
    onClick: onRemove,
    "aria-label": "Sil"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 11
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: "var(--space-1)"
    }
  }));
}

/** MethodBadge — HTTP verb chip for endpoint rows. */
function MethodBadge({
  method = "GET"
}) {
  const tone = {
    GET: "info",
    POST: "success",
    PUT: "warning",
    PATCH: "warning",
    DELETE: "error"
  }[method.toUpperCase()] || "neutral";
  const [fg, bg, bd] = TONES[tone];
  return /*#__PURE__*/React.createElement("span", {
    className: "nt-method",
    style: {
      background: `var(${bg})`,
      color: `var(${fg})`,
      boxShadow: `inset 0 0 0 1px var(${bd})`
    }
  }, method.toUpperCase());
}
Object.assign(__ds_scope, { Badge, NT_STATUS, StatusBadge, StatusDot, Tag, MethodBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/builder/FlowNode.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** The bot-builder node vocabulary: colour token, glyph and label per kind. */
const NT_NODES = {
  start: {
    label: "Başlanğıc",
    token: "--node-start",
    icon: "Play"
  },
  message: {
    label: "Mesaj",
    token: "--node-message",
    icon: "MessageSquare"
  },
  question: {
    label: "Sual",
    token: "--node-question",
    icon: "CircleQuestionMark"
  },
  condition: {
    label: "Şərt",
    token: "--node-condition",
    icon: "Split"
  },
  api: {
    label: "API",
    token: "--node-api",
    icon: "Code2"
  },
  webhook: {
    label: "Webhook",
    token: "--node-webhook",
    icon: "Webhook"
  },
  otp: {
    label: "OTP",
    token: "--node-otp",
    icon: "ShieldCheck"
  },
  notification: {
    label: "Bildiriş",
    token: "--node-notification",
    icon: "Bell"
  },
  delay: {
    label: "Gözləmə",
    token: "--node-delay",
    icon: "Timer"
  },
  end: {
    label: "Son",
    token: "--node-end",
    icon: "CircleStop"
  }
};

/**
 * FlowNode — one step on the builder canvas. The kind is carried by glyph,
 * uppercase label and a small colour chip; the card itself stays neutral so a
 * canvas of forty nodes never turns into confetti.
 */
function FlowNode({
  kind = "message",
  title,
  summary,
  selected = false,
  invalid = false,
  dragging = false,
  handles = ["t", "b"],
  badge,
  fields,
  width,
  onClick,
  style
}) {
  const n = NT_NODES[kind] || NT_NODES.message;
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-node", selected && "nt-node--on", invalid && "nt-node--invalid", dragging && "nt-node--dragging"),
    style: {
      width,
      ...style
    },
    onClick: onClick,
    tabIndex: 0,
    "data-kind": kind
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-node__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-node__chip",
    style: {
      background: `color-mix(in srgb, var(${n.token}) 16%, transparent)`,
      color: `var(${n.token})`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: n.icon,
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-node__kind",
    style: {
      color: `var(${n.token})`
    }
  }, n.label), /*#__PURE__*/React.createElement("span", {
    className: "nt-node__title",
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title)), invalid ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "TriangleAlert",
    size: 14,
    color: "var(--color-status-error-solid)"
  }) : null), summary || fields ? /*#__PURE__*/React.createElement("div", {
    className: "nt-node__body"
  }, summary ? /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical"
    }
  }, summary) : null, fields ? fields.map((fl, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1-5)",
      font: "400 var(--type-caption-size)/1.4 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: fl.icon || "CircleDot",
    size: 11
  }), fl.label)) : null) : null, badge ? /*#__PURE__*/React.createElement("div", {
    className: "nt-node__foot"
  }, badge) : null, handles.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    className: `nt-handle nt-handle--${h}`
  })));
}

/** NodePalette — the draggable source list of node kinds. */
function NodePalette({
  kinds = Object.keys(NT_NODES),
  onPick,
  title = "Bloklar"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "nt-sidebar__section",
    style: {
      padding: "0 0 var(--space-1)"
    }
  }, title) : null, kinds.map(k => {
    const n = NT_NODES[k];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      className: "nt-navitem",
      onClick: () => onPick && onPick(k),
      style: {
        cursor: "grab"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nt-node__chip",
      style: {
        width: 20,
        height: 20,
        background: `color-mix(in srgb, var(${n.token}) 16%, transparent)`,
        color: `var(${n.token})`
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: n.icon,
      size: 12
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "GripVertical",
      size: 13,
      color: "var(--color-text-muted)"
    }));
  }));
}

/** Edge — an SVG connector between two node handles. */
function Edge({
  from,
  to,
  active = false,
  animated = false,
  label
}) {
  const midY = (from.y + to.y) / 2;
  const d = `M${from.x},${from.y} C${from.x},${midY} ${to.x},${midY} ${to.x},${to.y}`;
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: d,
    className: cx("nt-edge", active && "nt-edge--on", animated && "nt-edge--flow"),
    markerEnd: "url(#nt-arrow)"
  }), label ? /*#__PURE__*/React.createElement("foreignObject", {
    x: (from.x + to.x) / 2 - 30,
    y: midY - 10,
    width: "60",
    height: "20"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      height: 20,
      background: "var(--color-surface-default)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-xs)",
      font: "var(--fw-medium) 10px/1 var(--font-sans)",
      color: "var(--color-text-secondary)"
    }
  }, label)) : null);
}

/** EdgeDefs — drop once inside the canvas <svg> so Edge arrowheads resolve. */
function EdgeDefs() {
  return /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "nt-arrow",
    viewBox: "0 0 8 8",
    refX: "6",
    refY: "4",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1,1 L6,4 L1,7",
    fill: "none",
    stroke: "var(--canvas-edge)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/** NodeStatusBadge — draft / published / disconnected indicators on a node foot. */
function NodeStatusBadge({
  state = "draft"
}) {
  const map = {
    draft: {
      tone: "neutral",
      icon: "PencilLine",
      label: "Qaralama"
    },
    published: {
      tone: "success",
      icon: "CircleCheck",
      label: "Dərc edilmiş"
    },
    disconnected: {
      tone: "warning",
      icon: "Unlink",
      label: "Bağlı deyil"
    },
    invalid: {
      tone: "error",
      icon: "TriangleAlert",
      label: "Tamamlanmayıb"
    }
  }[state] || {};
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: map.tone,
    size: "sm",
    icon: map.icon === "Unlink" ? "GitFork" : map.icon
  }, map.label);
}
Object.assign(__ds_scope, { NT_NODES, FlowNode, NodePalette, Edge, EdgeDefs, NodeStatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/builder/FlowNode.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");

/**
 * Button — the single affirmative control. One primary per view.
 * Destructive is Brick, never Nar, so it can never be mistaken for "confirm".
 */
function Button({
  variant = "secondary",
  size = "md",
  icon,
  iconAfter,
  loading = false,
  disabled = false,
  block = false,
  as,
  href,
  children,
  className,
  style,
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const iconSize = size === "lg" ? 18 : size === "xs" ? 12 : 14;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: cx("nt-btn", `nt-btn--${variant}`, size !== "md" && `nt-btn--${size}`, loading && "nt-btn--loading", block && "nt-btn--block", className),
    disabled: Tag === "button" ? disabled || loading : undefined,
    "aria-disabled": Tag !== "button" && (disabled || loading) ? true : undefined,
    "aria-busy": loading || undefined,
    style: style
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: iconSize
  }) : null, loading ? /*#__PURE__*/React.createElement("span", {
    className: "nt-btn__spin"
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: size === "lg" ? 16 : 13,
    color: "var(--color-action-primary-fg)"
  })) : null);
}

/** IconButton — square, icon-only. `label` is required for screen readers. */
function IconButton({
  icon,
  label,
  size = "md",
  variant = "ghost",
  active = false,
  disabled = false,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: cx("nt-iconbtn", size !== "md" && `nt-iconbtn--${size}`, variant === "bordered" && "nt-iconbtn--bordered", active && "nt-iconbtn--active", className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "lg" ? 18 : size === "xs" ? 12 : 15
  }));
}

/** SplitButton — a primary action plus a menu of adjacent variants (Publish / Publish & copy link). */
function SplitButton({
  children,
  variant = "primary",
  size = "md",
  onMenu,
  icon,
  menuLabel = "More actions",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "nt-split"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    variant: variant,
    size: size,
    icon: icon
  }, rest), children), /*#__PURE__*/React.createElement(Button, {
    variant: variant,
    size: size,
    onClick: onMenu,
    "aria-label": menuLabel,
    title: menuLabel
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronDown",
    size: 14
  })));
}

/** ButtonGroup — a run of related buttons on the 8px inline gap. */
function ButtonGroup({
  children,
  gap = "var(--gap-inline)",
  justify = "flex-start",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap,
      justifyContent: justify,
      ...style
    }
  }, children);
}
function Spinner({
  size = 14,
  color = "currentColor"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "nt-spinner",
    style: {
      width: size,
      height: size,
      color
    }
  });
}
Object.assign(__ds_scope, { Button, IconButton, SplitButton, ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");

/** Card — the default container. Hairline border, no shadow, 10px radius. */
function Card({
  variant = "default",
  interactive = false,
  selected = false,
  as = "div",
  children,
  className,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cx("nt-card", variant !== "default" && `nt-card--${variant}`, interactive && "nt-card--interactive", selected && "nt-card--selected", className),
    style: style
  }, rest), children);
}
function CardHeader({
  title,
  description,
  actions,
  icon,
  plain = false,
  className,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-card__head", plain && "nt-card__head--plain", className)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2-5)",
      minWidth: 0
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 28,
      height: 28,
      flex: "0 0 auto",
      borderRadius: "var(--radius-sm)",
      background: "var(--color-bg-inset)",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "nt-card__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    className: "nt-card__desc"
  }, description) : null, children)), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      flex: "0 0 auto"
    }
  }, actions) : null);
}
function CardBody({
  flush = false,
  gap,
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-card__body", flush && "nt-card__body--flush", className),
    style: {
      ...(gap ? {
        gap
      } : null),
      ...style
    }
  }, children);
}
function CardFooter({
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-card__foot", className),
    style: style
  }, children);
}

/** StatCard — one metric, one delta. Numbers are tabular so columns line up. */
function StatCard({
  label,
  value,
  delta,
  deltaTone,
  hint,
  icon,
  chart,
  onClick
}) {
  const tone = deltaTone || (delta && String(delta).trim().startsWith("-") ? "error" : "success");
  return /*#__PURE__*/React.createElement(Card, {
    interactive: !!onClick,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--type-label-sm-size)/var(--type-label-sm-lh) var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, label), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--color-text-muted)"
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--type-h3-size)/1 var(--font-sans)",
      letterSpacing: "var(--type-h3-ls)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--color-text-primary)"
    }
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)",
      color: `var(--color-status-${tone}-fg)`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === "error" ? "TrendingDown" : "TrendingUp",
    size: 12
  }), delta) : null), chart ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      marginTop: "var(--space-1)"
    }
  }, chart) : null, hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-weight) var(--type-caption-size)/var(--type-caption-lh) var(--font-sans)",
      color: "var(--color-text-muted)"
    }
  }, hint) : null));
}

/** Panel — a titled section inside a page, one step quieter than Card. */
function Panel({
  title,
  description,
  actions,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, title || actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-semibold) var(--type-h4-size)/var(--type-h4-lh) var(--font-sans)",
      letterSpacing: "var(--type-h4-ls)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-1)",
      font: "var(--type-body-sm-weight) var(--type-body-sm-size)/var(--type-body-sm-lh) var(--font-sans)",
      color: "var(--color-text-secondary)"
    }
  }, description) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, actions) : null) : null, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardBody, CardFooter, StatCard, Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** Spinner — inline indeterminate progress. */
function Spinner({
  size = 14,
  color = "currentColor",
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: label ? "status" : undefined,
    "aria-label": label,
    style: {
      display: "inline-flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-spinner",
    style: {
      width: size,
      height: size,
      color
    }
  }));
}

/** Skeleton — a shimmering placeholder box that matches the real element's geometry. */
function Skeleton({
  width = "100%",
  height = 12,
  radius = "var(--radius-sm)",
  circle = false,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: cx("nt-skeleton", className),
    style: {
      display: "block",
      width,
      height: circle ? width : height,
      borderRadius: circle ? "var(--radius-full)" : radius,
      ...style
    }
  });
}

/** SkeletonText — n lines, last one short, matching body-md rhythm. */
function SkeletonText({
  lines = 3,
  width = "100%",
  gap = "var(--space-2)"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap,
      width
    }
  }, Array.from({
    length: lines
  }).map((_, i) => /*#__PURE__*/React.createElement(Skeleton, {
    key: i,
    height: 10,
    width: i === lines - 1 ? "58%" : "100%"
  })));
}

/** SkeletonTable — loading rows that keep the real column rhythm so nothing jumps. */
function SkeletonTable({
  rows = 5,
  cols = [220, 90, 70, 110, 40],
  density = "default"
}) {
  const pad = density === "compact" ? "var(--pad-cell-y-compact)" : density === "comfortable" ? "var(--pad-cell-y-comfortable)" : "var(--pad-cell-y-default)";
  return /*#__PURE__*/React.createElement("div", null, Array.from({
    length: rows
  }).map((_, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: `${pad} var(--pad-cell-x)`,
      borderBottom: "1px solid var(--color-border-subtle)"
    }
  }, cols.map((w, c) => /*#__PURE__*/React.createElement(Skeleton, {
    key: c,
    width: w,
    height: 9,
    style: {
      opacity: 1 - r * 0.13
    }
  })))));
}

/** SkeletonCard — a card-shaped placeholder for grids. */
function SkeletonCard({
  lines = 2,
  height
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-card",
    style: {
      padding: "var(--pad-card)",
      gap: "var(--space-3)",
      height
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: 28,
    height: 28,
    radius: "var(--radius-sm)"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "62%",
    height: 11
  }), /*#__PURE__*/React.createElement(SkeletonText, {
    lines: lines
  }));
}
Object.assign(__ds_scope, { Spinner, Skeleton, SkeletonText, SkeletonTable, SkeletonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/data/ChartContainer.jsx
try { (() => {
/** ChartContainer — the frame every chart sits in: title, controls, legend, body. */
function ChartContainer({
  title,
  description,
  controls,
  legend,
  height = 200,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-chart",
    style: style
  }, title || controls ? /*#__PURE__*/React.createElement("div", {
    className: "nt-chart__head"
  }, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) var(--type-label-md-size)/var(--type-label-md-lh) var(--font-sans)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: "var(--type-caption-weight) var(--type-caption-size)/var(--type-caption-lh) var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, description) : null), controls ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flex: "0 0 auto"
    }
  }, controls) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      position: "relative"
    }
  }, children), legend ? /*#__PURE__*/React.createElement(ChartLegend, {
    items: legend
  }) : null);
}
function ChartLegend({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-chart__legend"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-dot",
    style: {
      background: it.color || `var(--chart-${i % 8 + 1})`
    }
  }), it.label)));
}

/** BarChart — the dashboard volume chart. Deliberately axis-light. */
function BarChart({
  data = [],
  color = "var(--chart-2)",
  labels,
  gridLines = 3,
  valueFormat = v => v
}) {
  const max = Math.max(1, ...data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1
    }
  }, Array.from({
    length: gridLines
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: `${i / gridLines * 100}%`,
      height: 1,
      background: "var(--chart-grid)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "nt-bars",
    style: {
      position: "relative"
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "nt-bars__b",
    title: String(valueFormat(v)),
    style: {
      height: `${Math.max(2, v / max * 100)}%`,
      background: color
    }
  })))), labels ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "400 10px/1 var(--font-sans)",
      color: "var(--color-text-muted)"
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))) : null);
}

/** Sparkline — an inline trend for StatCards. No axes, no labels. */
function Sparkline({
  data = [],
  color = "var(--chart-1)",
  height = 34,
  fill = true
}) {
  if (!data.length) return null;
  const max = Math.max(...data),
    min = Math.min(...data),
    span = max - min || 1;
  const pts = data.map((v, i) => [i / (data.length - 1) * 100, 100 - (v - min) / span * 100]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height,
      display: "block",
      overflow: "visible"
    }
  }, fill ? /*#__PURE__*/React.createElement("path", {
    d: `${line} L100,100 L0,100 Z`,
    fill: color,
    opacity: ".1"
  }) : null, /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }));
}

/** DonutChart — share-of-total for source and status breakdowns. */
function DonutChart({
  data = [],
  size = 140,
  thickness = 16,
  centerLabel,
  centerValue
}) {
  const total = data.reduce((a, d) => a + d.value, 0) || 1;
  const r = (size - thickness) / 2,
    c = 2 * Math.PI * r;
  let acc = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, data.map((d, i) => {
    const frac = d.value / total,
      off = acc;
    acc += frac;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      strokeWidth: thickness,
      stroke: d.color || `var(--chart-${i % 8 + 1})`,
      strokeDasharray: `${c * frac - 2} ${c}`,
      strokeDashoffset: -c * off
    });
  })), centerValue || centerLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) var(--type-h4-size)/1 var(--font-sans)",
      fontVariantNumeric: "tabular-nums"
    }
  }, centerValue), centerLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      font: "400 10px/1 var(--font-sans)",
      color: "var(--color-text-muted)"
    }
  }, centerLabel) : null)) : null);
}
Object.assign(__ds_scope, { ChartContainer, ChartLegend, BarChart, Sparkline, DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChartContainer.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
/**
 * EmptyState — one glyph, one title, one sentence, one primary action.
 * `preset` covers the eleven canonical NarTalk empties.
 */
function EmptyState({
  preset,
  icon,
  domain,
  title,
  description,
  action,
  secondaryAction,
  inline = false,
  style
}) {
  const p = preset ? NT_EMPTY[preset] : null;
  const glyph = icon || (domain ? __ds_scope.ntIcon(domain) : null) || p && p.icon || "Inbox";
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? "nt-empty nt-empty--inline" : "nt-empty",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__title"
  }, title || p && p.title), /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__desc"
  }, description || p && p.description)), action || secondaryAction || p && p.cta ? /*#__PURE__*/React.createElement("div", {
    className: "nt-empty__actions"
  }, action || (p && p.cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    icon: p.ctaIcon
  }, p.cta) : null), secondaryAction) : null);
}

/** The canonical empty states. Every one names the object and offers the next step. */
const NT_EMPTY = {
  bots: {
    icon: "Bot",
    title: "Hələ bot yoxdur",
    description: "İlk botunuzu qurun və Telegram-da data toplamağa başlayın.",
    cta: "Bot yarat",
    ctaIcon: "Plus"
  },
  forms: {
    icon: "ClipboardList",
    title: "Hələ forma yoxdur",
    description: "Forma qurun və ya AI-a bir cümlə yazın — qalanını o etsin.",
    cta: "Forma yarat",
    ctaIcon: "Plus"
  },
  responses: {
    icon: "Inbox",
    title: "Cavab gözlənilir",
    description: "Botunuzu paylaşın — ilk cavablar burada real vaxtda görünəcək.",
    cta: "Linki paylaş",
    ctaIcon: "Share2"
  },
  integrations: {
    icon: "Blocks",
    title: "İnteqrasiya qurulmayıb",
    description: "NarTalk-u mövcud alətlərinizə qoşun və datanı avtomatik ötürün.",
    cta: "İnteqrasiya əlavə et",
    ctaIcon: "Plus"
  },
  apiKeys: {
    icon: "KeyRound",
    title: "API açarı yoxdur",
    description: "Açar yaradın və NarTalk-u öz backend-inizdən çağırın.",
    cta: "Açar yarat",
    ctaIcon: "Plus"
  },
  webhooks: {
    icon: "Webhook",
    title: "Hadisə qeydə alınmayıb",
    description: "Endpoint əlavə edin — göndərilən hər hadisə burada görünəcək.",
    cta: "Endpoint əlavə et",
    ctaIcon: "Plus"
  },
  team: {
    icon: "Users",
    title: "Komandada tək sizsiniz",
    description: "Həmkarlarınızı dəvət edin və birlikdə idarə edin.",
    cta: "Üzv dəvət et",
    ctaIcon: "UserPlus"
  },
  templates: {
    icon: "LayoutTemplate",
    title: "Şablon yoxdur",
    description: "Hazır şablonlardan başlayın və ya öz formanızı şablon kimi saxlayın.",
    cta: "Şablonlara bax",
    ctaIcon: "ArrowRight"
  },
  notifications: {
    icon: "Bell",
    title: "Bildiriş yoxdur",
    description: "Yeni cavablar və sistem hadisələri burada toplanacaq."
  },
  search: {
    icon: "Search",
    title: "Nəticə tapılmadı",
    description: "Axtarış sözünü qısaldın və ya süzgəcləri sıfırlayın."
  },
  analytics: {
    icon: "ChartNoAxesColumn",
    title: "Kifayət qədər data yoxdur",
    description: "İlk cavablar toplandıqdan sonra statistika burada görünəcək."
  },
  logs: {
    icon: "ScrollText",
    title: "Qeyd yoxdur",
    description: "Workspace-də edilən dəyişikliklər burada saxlanılacaq."
  }
};

/** ErrorState — a failure, not an absence. Always offers a retry. */
function ErrorState({
  title = "Məlumat yüklənmədi",
  description = "Bağlantını yoxlayın və yenidən cəhd edin.",
  onRetry,
  inline = true,
  code
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? "nt-empty nt-empty--inline" : "nt-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__icon",
    style: {
      background: "var(--color-status-error-bg)",
      borderColor: "var(--color-status-error-border)",
      color: "var(--color-status-error-fg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "CloudOff",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__desc"
  }, description), code ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-code-inline-weight) 11px/1 var(--font-mono)",
      color: "var(--color-text-muted)"
    }
  }, code) : null), onRetry ? /*#__PURE__*/React.createElement("div", {
    className: "nt-empty__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    icon: "RotateCcw",
    onClick: onRetry
  }, "Yenid\u0259n c\u0259hd et")) : null);
}
Object.assign(__ds_scope, { EmptyState, NT_EMPTY, ErrorState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** ProgressBar — determinate or indeterminate. Tone shifts as a usage meter fills. */
function ProgressBar({
  value = 0,
  max = 100,
  size = "md",
  tone,
  indeterminate = false,
  label,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const auto = pct >= 100 ? "error" : pct >= 85 ? "warning" : null;
  const t = tone || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-progress", size !== "md" && `nt-progress--${size}`, indeterminate && "nt-progress--indeterminate"),
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : Math.round(pct),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": label,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-progress__fill",
    style: {
      width: indeterminate ? undefined : `${pct}%`,
      background: t ? `var(--color-status-${t}-solid)` : undefined
    }
  }));
}

/** CircularProgress — compact ring for quotas and upload/publish state. */
function CircularProgress({
  value = 0,
  size = 36,
  thickness = 3,
  tone,
  showValue = true,
  label
}) {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const t = tone || (pct >= 100 ? "success" : null);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-grid",
      placeItems: "center",
      width: size,
      height: size
    },
    role: "progressbar",
    "aria-valuenow": Math.round(pct),
    "aria-label": label
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--chart-track)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    strokeLinecap: "round",
    stroke: t ? `var(--color-status-${t}-solid)` : "var(--color-action-primary)",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct / 100),
    style: {
      transition: "stroke-dashoffset var(--duration-slow) var(--ease-standard)"
    }
  })), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      font: `var(--fw-medium) ${Math.round(size / 3.6)}px/1 var(--font-sans)`,
      fontVariantNumeric: "tabular-nums",
      color: "var(--color-text-primary)"
    }
  }, Math.round(pct)) : null);
}

/** UsageMeter — a plan limit: label, used/limit, bar, and the warning language at 85%. */
function UsageMeter({
  label,
  used = 0,
  limit = 100,
  unit,
  hint,
  icon
}) {
  const pct = limit ? used / limit * 100 : 0;
  const tone = pct >= 100 ? "error" : pct >= 85 ? "warning" : null;
  const fmt = n => n.toLocaleString("az-AZ");
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-meter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-meter__row"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1-5)",
      color: "var(--color-text-secondary)",
      fontWeight: "var(--fw-medium)"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13,
    color: "var(--color-text-muted)"
  }) : null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums",
      color: tone ? `var(--color-status-${tone}-fg)` : "var(--color-text-secondary)"
    }
  }, fmt(used), " / ", limit === Infinity ? "∞" : fmt(limit), unit ? ` ${unit}` : "")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: used,
    max: limit,
    size: "sm"
  }), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-weight) var(--type-caption-size)/var(--type-caption-lh) var(--font-sans)",
      color: tone ? `var(--color-status-${tone}-fg)` : "var(--color-text-muted)"
    }
  }, hint) : null);
}

/** RateLimitIndicator — remaining requests in the current window. */
function RateLimitIndicator({
  remaining = 0,
  limit = 100,
  resetIn
}) {
  const pct = remaining / limit * 100;
  const tone = pct <= 10 ? "error" : pct <= 30 ? "warning" : "neutral";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "var(--type-caption-weight) var(--type-caption-size)/1 var(--font-sans)",
      color: `var(--color-status-${tone}-fg)`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Gauge",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, remaining, "/", limit), resetIn ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-muted)"
    }
  }, "\xB7 ", resetIn, " sonra s\u0131f\u0131rlan\u0131r") : null);
}
Object.assign(__ds_scope, { ProgressBar, CircularProgress, UsageMeter, RateLimitIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Timeline.jsx
try { (() => {
const TONE_ICON = {
  success: "CircleCheck",
  error: "CircleAlert",
  warning: "TriangleAlert",
  info: "Info",
  neutral: "CircleDot"
};

/** Timeline — an ordered vertical trace: response events, webhook attempts, audit history. */
function Timeline({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-timeline",
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "nt-tl",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-tl__rail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-tl__node",
    style: it.tone ? {
      background: `var(--color-status-${it.tone}-bg)`,
      borderColor: `var(--color-status-${it.tone}-border)`,
      color: `var(--color-status-${it.tone}-fg)`
    } : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon || TONE_ICON[it.tone] || "CircleDot",
    size: 11
  })), i < items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "nt-tl__line"
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "nt-tl__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      color: "var(--color-text-primary)"
    }
  }, it.title), it.time ? /*#__PURE__*/React.createElement("span", {
    className: "nt-tl__time"
  }, it.time) : null), it.description ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      color: "var(--color-text-secondary)"
    }
  }, it.description) : null, it.meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-1-5)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-1-5)"
    }
  }, it.meta) : null))));
}

/** ActivityFeed — who did what, when. The audit-log row. */
function ActivityFeed({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-2-5)",
      padding: "var(--space-2-5) 0",
      borderBottom: i < items.length - 1 ? "1px solid var(--color-border-subtle)" : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: it.actor,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-lh)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)"
    }
  }, it.actor), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, " ", it.action, " "), it.target ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)"
    }
  }, it.target) : null, it.detail ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      color: "var(--color-text-tertiary)",
      fontSize: "var(--type-caption-size)"
    }
  }, it.detail) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flex: "0 0 auto"
    }
  }, it.tag ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    size: "sm",
    mono: true
  }, it.tag) : null, /*#__PURE__*/React.createElement("span", {
    className: "nt-tl__time"
  }, it.time)))));
}

/** KeyValueList — the description list used in detail drawers. */
function KeyValueList({
  items = [],
  layout = "columns",
  style
}) {
  if (layout === "rows") {
    return /*#__PURE__*/React.createElement("div", {
      className: "nt-kvlist nt-kvlist--rows",
      style: style
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      className: "nt-kvrow",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-text-tertiary)",
        flex: "0 0 auto"
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-text-primary)",
        textAlign: "right",
        minWidth: 0,
        fontFamily: it.mono ? "var(--font-mono)" : undefined,
        fontSize: it.mono ? "var(--type-code-inline-size)" : undefined,
        overflowWrap: "anywhere"
      }
    }, it.value))));
  }
  return /*#__PURE__*/React.createElement("dl", {
    className: "nt-kvlist",
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("dt", null, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: it.mono ? "var(--font-mono)" : undefined,
      fontSize: it.mono ? "var(--type-code-inline-size)" : undefined
    }
  }, it.value))));
}
Object.assign(__ds_scope, { Timeline, ActivityFeed, KeyValueList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/developer/CodeBlock.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** A deliberately small highlighter: comments, strings, numbers, keywords, keys, verbs. */
function highlight(code, lang) {
  let out = esc(code);
  const wrap = (t, v) => `<span style="color:var(--code-${t})">${v}</span>`;
  out = out.replace(/(^|\n)(\s*)(#[^\n]*|\/\/[^\n]*)/g, (m, a, b, c) => a + b + wrap("comment", c));
  out = out.replace(/(&quot;|")([^"&]*)(&quot;|")(\s*:)/g, (m, q1, k, q2, colon) => wrap("property", q1 + k + q2) + wrap("punctuation", colon));
  out = out.replace(/(&quot;|')((?:[^&'\n]|&(?!quot;))*)(&quot;|')/g, m => wrap("string", m));
  out = out.replace(/\b(\d+(?:\.\d+)?)\b/g, m => wrap("number", m));
  out = out.replace(/\b(true|false|null|const|let|await|async|function|return|import|from|export|if|else|new)\b/g, m => wrap("keyword", m));
  if (lang === "bash" || lang === "curl") out = out.replace(/\b(curl|POST|GET|PUT|DELETE|PATCH|-X|-H|-d)\b/g, m => wrap("function", m));
  if (lang === "http") out = out.replace(/^(GET|POST|PUT|PATCH|DELETE)\b/gm, m => wrap("function", m));
  return out;
}

/** CopyButton — the one-click copy affordance. Confirms in place for 1.4s. */
function CopyButton({
  value,
  label = "Kopyala",
  size = "sm"
}) {
  const [done, setDone] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText(String(value));
    } catch (e) {/* clipboard unavailable */}
    setDone(true);
    setTimeout(() => setDone(false), 1400);
  };
  return /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: done ? "Check" : "Copy",
    label: done ? "Kopyalandı" : label,
    size: size,
    onClick: copy,
    style: done ? {
      color: "var(--color-status-success-fg)"
    } : undefined
  });
}

/** CodeBlock — a syntax-coloured, copyable snippet with optional line numbers. */
function CodeBlock({
  code = "",
  lang = "json",
  filename,
  lineNumbers = false,
  maxHeight = 280,
  actions,
  style
}) {
  const lines = String(code).replace(/\n$/, "").split("\n");
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-code",
    style: style
  }, filename || actions !== null ? /*#__PURE__*/React.createElement("div", {
    className: "nt-code__head"
  }, filename ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-code-inline-weight) 11px/1 var(--font-mono)",
      color: "var(--color-text-tertiary)"
    }
  }, filename) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) 10px/1 var(--font-mono)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--color-text-muted)"
    }
  }, lang), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), actions, /*#__PURE__*/React.createElement(CopyButton, {
    value: code
  })) : null, /*#__PURE__*/React.createElement("pre", {
    className: "nt-code__pre",
    style: {
      maxHeight
    },
    "data-nt-scroll": true
  }, /*#__PURE__*/React.createElement("code", null, lines.map((ln, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, lineNumbers ? /*#__PURE__*/React.createElement("span", {
    className: "nt-code__ln"
  }, i + 1) : null, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: highlight(ln, lang) || "&nbsp;"
    }
  }))))));
}

/** CodeTabs — the same request in several languages. */
function CodeTabs({
  tabs = [],
  value,
  onChange,
  lineNumbers = false,
  maxHeight = 280
}) {
  const [local, setLocal] = React.useState(tabs[0] && tabs[0].value);
  const active = value || local;
  const cur = tabs.find(t => t.value === active) || tabs[0] || {};
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-code"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-code__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-code__tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    type: "button",
    className: cx("nt-code__tab", t.value === active && "nt-code__tab--on"),
    onClick: () => {
      setLocal(t.value);
      onChange && onChange(t.value);
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(CopyButton, {
    value: cur.code
  })), /*#__PURE__*/React.createElement("pre", {
    className: "nt-code__pre",
    style: {
      maxHeight
    },
    "data-nt-scroll": true
  }, /*#__PURE__*/React.createElement("code", null, String(cur.code || "").split("\n").map((ln, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, lineNumbers ? /*#__PURE__*/React.createElement("span", {
    className: "nt-code__ln"
  }, i + 1) : null, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: highlight(ln, cur.lang || "bash") || "&nbsp;"
    }
  }))))));
}

/** EndpointBlock — method + path, copyable. */
function EndpointBlock({
  method = "POST",
  path,
  description,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-endpoint"
  }, /*#__PURE__*/React.createElement(__ds_scope.MethodBadge, {
    method: method
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "var(--color-text-primary)"
    }
  }, path), actions, /*#__PURE__*/React.createElement(CopyButton, {
    value: path,
    label: "Yolu kopyala"
  })), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--type-caption-size)/var(--type-caption-lh) var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, description) : null);
}

/** InlineCode — a token inside prose. */
function InlineCode({
  children
}) {
  return /*#__PURE__*/React.createElement("code", {
    className: "nt-inlinecode"
  }, children);
}

/** SignatureInfo — how to verify a NarTalk webhook signature. */
function SignatureInfo({
  header = "X-NarTalk-Signature",
  algorithm = "HMAC-SHA256",
  secretHint = "Webhook secret",
  sample
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-2)",
      font: "400 var(--type-body-sm-size)/var(--type-body-sm-lh) var(--font-sans)",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Fingerprint",
    size: 15,
    color: "var(--color-text-tertiary)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, "H\u0259r hadis\u0259 ", /*#__PURE__*/React.createElement(InlineCode, null, header), " ba\u015Fl\u0131\u011F\u0131 il\u0259 g\u0259lir. D\u0259y\u0259r ", /*#__PURE__*/React.createElement(InlineCode, null, algorithm), " il\u0259 imzalan\u0131r \u2014 ", secretHint, " a\xE7ar\u0131n\u0131zla yoxlay\u0131n.")), sample ? /*#__PURE__*/React.createElement(CodeBlock, {
    code: sample,
    lang: "bash",
    filename: "verify.sh"
  }) : null);
}
Object.assign(__ds_scope, { CopyButton, CodeBlock, CodeTabs, EndpointBlock, InlineCode, SignatureInfo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/developer/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/developer/ApiKeyCard.jsx
try { (() => {
/** SecretField — masked by default. Revealing is an explicit, logged action. */
function SecretField({
  value = "",
  prefix = "nar_live_",
  revealed = false,
  onReveal,
  canCopy = true
}) {
  const [show, setShow] = React.useState(revealed);
  const masked = prefix + "•".repeat(24);
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-secret"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "KeyRound",
    size: 14,
    color: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nt-secret__val"
  }, show ? value : masked), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: show ? "EyeOff" : "Eye",
    label: show ? "Gizlət" : "Göstər",
    size: "xs",
    onClick: () => {
      setShow(!show);
      if (!show && onReveal) onReveal();
    }
  }), canCopy ? /*#__PURE__*/React.createElement(__ds_scope.CopyButton, {
    value: value,
    size: "xs"
  }) : null);
}

/** ApiKeyCard — one key: name, environment, secret, scopes, last use, revoke. */
function ApiKeyCard({
  name,
  env = "live",
  secret,
  status = "key.active",
  createdAt,
  lastUsedAt,
  scopes = [],
  onRevoke,
  onReveal
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-2-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--type-label-md-size)/1.3 var(--font-sans)"
    }
  }, name), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: env === "live" ? "brand" : "neutral",
    size: "sm",
    mono: true
  }, env === "live" ? "LIVE" : "TEST"), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      font: "400 var(--type-caption-size)/1.4 var(--font-sans)",
      color: "var(--color-text-muted)"
    }
  }, createdAt ? `${createdAt} yaradıldı` : null, lastUsedAt ? ` · son istifadə ${lastUsedAt}` : " · heç istifadə edilməyib")), onRevoke ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "destructive-outline",
    icon: "Trash2",
    onClick: onRevoke
  }, "L\u0259\u011Fv et") : null), /*#__PURE__*/React.createElement(SecretField, {
    value: secret,
    prefix: env === "live" ? "nar_live_" : "nar_test_",
    onReveal: onReveal
  }), scopes.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-1-5)"
    }
  }, scopes.map(s => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: s,
    tone: "neutral",
    size: "sm",
    mono: true
  }, s))) : null));
}

/** EnvironmentSelector — test vs live. Live is the only place brand red appears here. */
function EnvironmentSelector({
  value = "test",
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-seg"
  }, [{
    v: "test",
    l: "Test",
    i: "Bug"
  }, {
    v: "live",
    l: "Live",
    i: "Radio"
  }].map(o => /*#__PURE__*/React.createElement("button", {
    key: o.v,
    type: "button",
    onClick: () => onChange && onChange(o.v),
    className: `nt-seg__item${value === o.v ? " nt-seg__item--on" : ""}`,
    style: value === o.v && o.v === "live" ? {
      color: "var(--color-text-brand)"
    } : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: o.i,
    size: 12
  }), o.l)));
}

/** TestModeBanner — the persistent reminder that data written here is not real. */
function TestModeBanner({
  onSwitch
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-banner",
    style: {
      background: "var(--color-status-warning-bg)",
      borderColor: "var(--color-status-warning-border)",
      color: "var(--color-status-warning-fg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Bug",
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: "var(--color-text-primary)"
    }
  }, "Test rejimi aktivdir. Bu m\xFChitd\u0259 g\xF6nd\u0259ril\u0259n mesajlar real istifad\u0259\xE7il\u0259r\u0259 \xE7atm\u0131r."), onSwitch ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    onClick: onSwitch
  }, "Live rejim\u0259 ke\xE7") : null);
}

/** OtpConfigCard — expiry, retry limit and the Telegram message template. */
function OtpConfigCard({
  expiry = "5 dəqiqə",
  retries = 3,
  template,
  children,
  onEdit
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nt-card__title"
  }, "OTP konfiqurasiyas\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "nt-card__desc"
  }, "Kod m\xFCdd\u0259ti, c\u0259hd limiti v\u0259 mesaj \u015Fablonu")), onEdit ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "Pencil",
    onClick: onEdit
  }, "Redakt\u0259 et") : null), /*#__PURE__*/React.createElement("div", {
    className: "nt-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-kvlist nt-kvlist--rows"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-kvrow"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-tertiary)"
    }
  }, "Kodun m\xFCdd\u0259ti"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, expiry)), /*#__PURE__*/React.createElement("div", {
    className: "nt-kvrow"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-tertiary)"
    }
  }, "Maksimum c\u0259hd"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, retries))), template ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)",
      color: "var(--color-text-secondary)"
    }
  }, "Mesaj \u015Fablonu"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-2-5)",
      background: "var(--color-bg-inset)",
      borderRadius: "var(--radius-md)",
      font: "400 var(--type-body-sm-size)/var(--type-body-sm-lh) var(--font-sans)",
      color: "var(--color-text-primary)"
    }
  }, template)) : null, children));
}
Object.assign(__ds_scope, { SecretField, ApiKeyCard, EnvironmentSelector, TestModeBanner, OtpConfigCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/developer/ApiKeyCard.jsx", error: String((e && e.message) || e) }); }

// components/developer/WebhookLog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** DeliveryRow — one webhook attempt: status, event, endpoint, code, latency, retry. */
function DeliveryRow({
  status = "webhook.delivered",
  event,
  endpoint,
  code,
  latency,
  attempt,
  at,
  onRetry,
  onOpen,
  selected
}) {
  const tone = status === "webhook.failed" ? "error" : status === "webhook.retrying" ? "warning" : status === "webhook.pending" ? "neutral" : "success";
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-2-5) var(--pad-cell-x)",
      borderBottom: "1px solid var(--color-border-subtle)",
      background: selected ? "var(--color-surface-selected)" : undefined,
      cursor: onOpen ? "pointer" : undefined,
      fontSize: "var(--type-body-sm-size)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-code-inline-size)",
      fontWeight: "var(--fw-medium)"
    }
  }, event), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--type-caption-size)/1.3 var(--font-sans)",
      color: "var(--color-text-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, endpoint)), code != null ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone,
    size: "sm",
    mono: true
  }, code) : null, latency ? /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 52,
      textAlign: "right",
      fontVariantNumeric: "tabular-nums",
      color: "var(--color-text-tertiary)",
      fontSize: "var(--type-caption-size)"
    }
  }, latency) : null, attempt ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-caption-size)",
      color: "var(--color-text-muted)"
    }
  }, "c\u0259hd ", attempt) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 82,
      textAlign: "right",
      fontVariantNumeric: "tabular-nums",
      color: "var(--color-text-muted)",
      fontSize: "var(--type-caption-size)"
    }
  }, at), onRetry ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "RotateCcw",
    label: "Yenid\u0259n g\xF6nd\u0259r",
    size: "sm",
    onClick: e => {
      e.stopPropagation();
      onRetry();
    }
  }) : null);
}

/** WebhookLog — the delivery list with a header and an empty state slot. */
function WebhookLog({
  deliveries = [],
  onRetry,
  onOpen,
  empty,
  header = true
}) {
  return /*#__PURE__*/React.createElement("div", null, header ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-2) var(--pad-cell-x)",
      borderBottom: "1px solid var(--color-border-default)",
      background: "var(--color-surface-subtle)",
      font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 104
    }
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Hadis\u0259 / endpoint"), /*#__PURE__*/React.createElement("span", null, "Kod"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 52,
      textAlign: "right"
    }
  }, "Gecikm\u0259"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 82,
      textAlign: "right"
    }
  }, "Vaxt"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28
    }
  })) : null, deliveries.length ? deliveries.map((d, i) => /*#__PURE__*/React.createElement(DeliveryRow, _extends({
    key: i
  }, d, {
    onRetry: onRetry ? () => onRetry(d) : undefined,
    onOpen: onOpen ? () => onOpen(d) : undefined
  }))) : empty);
}

/** EventTypeList — subscribable webhook events with per-event switches. */
function EventTypeList({
  events = [],
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.value,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-2-5) 0",
      borderBottom: i < events.length - 1 ? "1px solid var(--color-border-subtle)" : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("code", {
    className: "nt-inlinecode"
  }, e.value), e.description ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      font: "400 var(--type-caption-size)/1.4 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, e.description) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!e.enabled,
    "aria-label": e.value,
    className: `nt-switch${e.enabled ? " nt-switch--on" : ""}`,
    onClick: () => onToggle && onToggle(e.value)
  }))));
}

/** RequestExample — a paired request/response spec block. */
function RequestExample({
  method = "POST",
  path,
  request,
  response,
  status = 200
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-endpoint"
  }, /*#__PURE__*/React.createElement(__ds_scope.MethodBadge, {
    method: method
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, path)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, "Sor\u011Fu"), request), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, "Cavab ", /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status < 300 ? "success" : "error",
    size: "sm",
    mono: true
  }, status)), response)));
}
Object.assign(__ds_scope, { DeliveryRow, WebhookLog, EventTypeList, RequestExample });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/developer/WebhookLog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");
const GLYPH = {
  info: "Info",
  success: "CircleCheck",
  warning: "TriangleAlert",
  error: "CircleAlert",
  neutral: "Info",
  brand: "Sparkles"
};

/** Alert — inline, in-flow feedback tied to the section it appears in. */
function Alert({
  tone = "info",
  title,
  children,
  icon,
  actions,
  onDismiss,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-alert",
    role: tone === "error" ? "alert" : "status",
    style: {
      background: `var(--color-status-${tone}-bg)`,
      borderColor: `var(--color-status-${tone}-border)`,
      color: `var(--color-status-${tone}-fg)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || GLYPH[tone],
    size: 15,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-alert__body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "nt-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, children) : null, actions ? /*#__PURE__*/React.createElement("div", {
    className: "nt-alert__actions"
  }, actions) : null), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Ba\u011Fla",
    size: "xs",
    onClick: onDismiss
  }) : null);
}

/** Banner — full-bleed, page- or app-level. Sits directly under the topbar. */
function Banner({
  tone = "warning",
  children,
  icon,
  actions,
  onDismiss,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-banner",
    style: {
      background: `var(--color-status-${tone}-bg)`,
      borderColor: `var(--color-status-${tone}-border)`,
      color: `var(--color-status-${tone}-fg)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || GLYPH[tone],
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      color: "var(--color-text-primary)"
    }
  }, children), actions, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Ba\u011Fla",
    size: "xs",
    onClick: onDismiss
  }) : null);
}

/** Toast — transient confirmation, bottom-right, auto-dismissing. */
function Toast({
  tone = "neutral",
  title,
  children,
  action,
  onDismiss,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-toast",
    role: "status"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || GLYPH[tone],
    size: 15,
    color: tone === "neutral" ? "var(--color-text-tertiary)" : `var(--color-status-${tone}-solid)`,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) var(--type-label-md-size)/var(--type-label-md-lh) var(--font-sans)"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      color: "var(--color-text-secondary)"
    }
  }, children) : null), action, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Ba\u011Fla",
    size: "xs",
    onClick: onDismiss
  }) : null);
}

/** ToastStack — fixed bottom-right region. Never more than three at once. */
function ToastStack({
  children,
  position = "bottom-right"
}) {
  const pos = position === "top-right" ? {
    top: "var(--space-4)",
    bottom: "auto"
  } : position === "bottom-center" ? {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  } : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-toaststack",
    style: pos || undefined
  }, children);
}

/** Tooltip — hover/focus label. Never the only source of critical information. */
function Tooltip({
  label,
  shortcut,
  side = "top",
  children,
  style
}) {
  const [on, setOn] = React.useState(false);
  const place = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, children, on ? /*#__PURE__*/React.createElement("span", {
    className: "nt-tooltip",
    role: "tooltip",
    style: {
      ...place,
      whiteSpace: "nowrap"
    }
  }, label, shortcut ? /*#__PURE__*/React.createElement("span", {
    className: "nt-tooltip__kbd"
  }, shortcut) : null) : null);
}

/** AiProgress — the narrated wait for AI form generation. */
function AiProgress({
  steps = NT_AI_STEPS,
  active = 0,
  title = "Forma hazırlanır",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "WandSparkles",
    size: 15,
    color: "var(--color-action-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--type-label-md-size)/1 var(--font-sans)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", null, steps.map((s, i) => {
    const state = i < active ? "done" : i === active ? "on" : "todo";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cx("nt-aistep", state === "on" && "nt-aistep--on", state === "done" && "nt-aistep--done")
    }, /*#__PURE__*/React.createElement("span", {
      className: "nt-aistep__dot",
      style: state === "done" ? {
        background: "var(--color-status-success-bg)",
        borderColor: "var(--color-status-success-border)",
        color: "var(--color-status-success-fg)"
      } : state === "on" ? {
        borderColor: "var(--color-border-focus)",
        color: "var(--color-text-link)"
      } : undefined
    }, state === "done" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Check",
      size: 10,
      strokeWidth: 3
    }) : state === "on" ? /*#__PURE__*/React.createElement("span", {
      className: "nt-spinner",
      style: {
        width: 10,
        height: 10,
        color: "var(--color-text-link)"
      }
    }) : null), s);
  })));
}

/** The canonical AI-generation narrative. Five steps, present continuous. */
const NT_AI_STEPS = ["Sorğunuz analiz edilir", "Formanın strukturu qurulur", "Suallar əlavə edilir", "Məntiq tətbiq edilir", "Ön baxış hazırlanır"];
Object.assign(__ds_scope, { Alert, Banner, Toast, ToastStack, Tooltip, AiProgress, NT_AI_STEPS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/builder/BuilderCanvas.jsx
try { (() => {
/** BuilderCanvas — the dotted work surface plus floating toolbar, minimap and zoom. */
function BuilderCanvas({
  children,
  toolbar,
  minimap,
  zoom = 100,
  onZoom,
  onFit,
  overlay,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-canvas",
    style: {
      flex: 1,
      minHeight: 0,
      ...style
    }
  }, children, toolbar ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--space-3)",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 3
    }
  }, toolbar) : null, overlay, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "var(--space-3)",
      bottom: "var(--space-3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "var(--space-2)",
      zIndex: 3
    }
  }, minimap, /*#__PURE__*/React.createElement(ZoomControls, {
    zoom: zoom,
    onZoom: onZoom,
    onFit: onFit
  })));
}

/** CanvasToolbar — the floating builder toolbar. */
function CanvasToolbar({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-canvasbar",
    style: style
  }, children);
}
function ToolbarDivider() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 20,
      background: "var(--color-border-default)",
      margin: "0 var(--space-1)"
    }
  });
}

/** ZoomControls — −, percentage, +, fit. */
function ZoomControls({
  zoom = 100,
  onZoom,
  onFit
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-canvasbar",
    style: {
      height: 32,
      gap: 0,
      padding: "0 2px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Minus",
    label: "Ki\xE7ilt",
    size: "sm",
    onClick: () => onZoom && onZoom(Math.max(25, zoom - 10))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 42,
      textAlign: "center",
      font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--color-text-secondary)"
    }
  }, zoom, "%"), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Plus",
    label: "B\xF6y\xFCt",
    size: "sm",
    onClick: () => onZoom && onZoom(Math.min(200, zoom + 10))
  }), /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    label: "Ekrana s\u0131\u011Fd\u0131r",
    shortcut: "\u21E71"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Maximize2",
    label: "Ekrana s\u0131\u011Fd\u0131r",
    size: "sm",
    onClick: onFit
  })));
}

/** MiniMap — a schematic of the whole flow with the current viewport framed. */
function MiniMap({
  nodes = [],
  viewport,
  scale = 0.12
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-minimap"
  }, nodes.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: n.x * scale,
      top: n.y * scale,
      width: Math.max(6, 220 * scale),
      height: Math.max(4, 70 * scale),
      borderRadius: 2,
      background: `var(${n.token || "--node-message"})`,
      opacity: .65
    }
  })), viewport ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: viewport.x * scale,
      top: viewport.y * scale,
      width: viewport.w * scale,
      height: viewport.h * scale,
      border: "1.5px solid var(--canvas-edge-active)",
      borderRadius: 3,
      background: "color-mix(in srgb, var(--canvas-edge-active) 8%, transparent)"
    }
  }) : null);
}

/** NodeInspector — the right-hand configuration panel for the selected node. */
function NodeInspector({
  kind,
  title,
  subtitle,
  tabs,
  activeTab,
  onTab,
  children,
  footer,
  onClose,
  errors = [],
  width = "var(--layout-inspector-w)"
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width,
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      background: "var(--color-surface-default)",
      borderLeft: "1px solid var(--color-border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) var(--type-label-md-size)/1.3 var(--font-sans)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: "400 var(--type-caption-size)/1.3 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, subtitle) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Ba\u011Fla",
    size: "sm",
    onClick: onClose
  }) : null), tabs ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-4)",
      borderBottom: "1px solid var(--color-border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-tabs",
    style: {
      border: 0,
      gap: "var(--space-4)"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    type: "button",
    className: `nt-tab${t.value === activeTab ? " nt-tab--on" : ""}`,
    style: {
      height: 38
    },
    onClick: () => onTab && onTab(t.value)
  }, t.label)))) : null, errors.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-3) var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-alert",
    style: {
      background: "var(--color-status-error-bg)",
      borderColor: "var(--color-status-error-border)",
      color: "var(--color-status-error-fg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "CircleAlert",
    size: 14,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-alert__body"
  }, errors.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, e))))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: "auto",
      padding: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    },
    "data-nt-scroll": true
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "nt-drawer__foot"
  }, footer) : null);
}

/** PublishBar — the draft/published state strip above a builder. */
function PublishBar({
  state = "draft",
  savedAt,
  onPreview,
  onPublish,
  publishing,
  changes = 0
}) {
  const draft = state !== "published" || changes > 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: "var(--layout-subnav-h)",
      padding: "0 var(--layout-page-pad-x)",
      borderBottom: "1px solid var(--color-border-default)",
      background: "var(--color-surface-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "400 var(--type-caption-size)/1 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: draft ? "PencilLine" : "CircleCheck",
    size: 13,
    color: draft ? "var(--color-text-muted)" : "var(--color-status-success-solid)"
  }), draft ? changes ? `${changes} dərc edilməmiş dəyişiklik` : "Qaralama" : "Dərc edilmiş", savedAt ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-muted)"
    }
  }, "\xB7 ", savedAt, " avtomatik saxlan\u0131ld\u0131") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "Eye",
    onClick: onPreview
  }, "\xD6n bax\u0131\u015F"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    icon: "Rocket",
    onClick: onPublish,
    loading: publishing
  }, "D\u0259rc et"));
}
Object.assign(__ds_scope, { BuilderCanvas, CanvasToolbar, ToolbarDivider, ZoomControls, MiniMap, NodeInspector, PublishBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/builder/BuilderCanvas.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");

/** Checkbox — supports indeterminate for "some rows selected". */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  description,
  disabled,
  invalid,
  id,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    className: cx("nt-choice", disabled && "nt-choice--disabled"),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    "aria-invalid": invalid || undefined,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: cx("nt-choice__box", on && "nt-choice__box--checked", invalid && "nt-choice__box--error", disabled && "nt-choice__box--disabled"),
    "aria-hidden": "true"
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Minus",
    size: 11,
    strokeWidth: 3
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 11,
    strokeWidth: 3
  }) : null), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__desc"
  }, description) : null) : null);
}

/** Radio — one of a set. Always inside a RadioGroup with a legend. */
function Radio({
  checked = false,
  onChange,
  label,
  description,
  disabled,
  name,
  value,
  id,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx("nt-choice", disabled && "nt-choice--disabled"),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: cx("nt-choice__box", "nt-choice__box--radio", checked && "nt-choice__box--checked", disabled && "nt-choice__box--disabled"),
    "aria-hidden": "true"
  }, checked ? /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__dot"
  }) : null), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__desc"
  }, description) : null) : null);
}

/** RadioGroup — a fieldset with a real legend, vertical by default. */
function RadioGroup({
  legend,
  value,
  onChange,
  options = [],
  name,
  direction = "vertical",
  disabled
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, legend ? /*#__PURE__*/React.createElement("legend", {
    className: "nt-field__label",
    style: {
      padding: 0,
      marginBottom: "var(--space-1)"
    }
  }, legend) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: direction === "horizontal" ? "row" : "column",
      gap: direction === "horizontal" ? "var(--space-5)" : "var(--space-2-5)",
      flexWrap: "wrap"
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    id: `${name}-${o.value}`,
    checked: value === o.value,
    disabled: disabled || o.disabled,
    label: o.label,
    description: o.description,
    onChange: () => onChange && onChange(o.value)
  }))));
}

/** Switch — an immediate setting. If it needs Save, use a Checkbox instead. */
function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled,
  size = "md",
  id
}) {
  const control = /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    className: cx("nt-switch", size === "sm" && "nt-switch--sm", checked && "nt-switch--on", disabled && "nt-switch--disabled"),
    onClick: () => onChange && onChange(!checked)
  });
  if (!label && !description) return control;
  return /*#__PURE__*/React.createElement("label", {
    className: cx("nt-choice", disabled && "nt-choice--disabled"),
    htmlFor: id,
    style: {
      alignItems: "center",
      gap: "var(--space-2-5)",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__text"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__desc"
  }, description) : null), control);
}

/** SegmentedControl — 2–5 mutually exclusive views. Instant, no Save. */
function SegmentedControl({
  value,
  onChange,
  options = [],
  size = "md",
  fill = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-seg", size === "lg" && "nt-seg--lg"),
    role: "tablist",
    style: fill ? {
      display: "flex",
      width: "100%"
    } : undefined
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "tab",
    "aria-selected": value === o.value,
    className: cx("nt-seg__item", value === o.value && "nt-seg__item--on"),
    style: fill ? {
      flex: 1,
      justifyContent: "center"
    } : undefined,
    onClick: () => onChange && onChange(o.value)
  }, o.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: o.icon,
    size: 13
  }) : null, o.label)));
}
Object.assign(__ds_scope, { Checkbox, Radio, RadioGroup, Switch, SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/builder/QuestionBlock.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** The form-builder question-type vocabulary — matches the site's data blocks. */
const NT_QUESTION_TYPES = {
  text: {
    label: "Mətn",
    icon: "Type"
  },
  longtext: {
    label: "Uzun mətn",
    icon: "AlignLeft"
  },
  choice: {
    label: "Seçim",
    icon: "CircleDot"
  },
  multi: {
    label: "Çox seçim",
    icon: "ListChecks"
  },
  number: {
    label: "Rəqəm",
    icon: "Hash"
  },
  phone: {
    label: "Telefon",
    icon: "Phone"
  },
  email: {
    label: "E-poçt",
    icon: "AtSign"
  },
  date: {
    label: "Tarix",
    icon: "Calendar"
  },
  file: {
    label: "Fayl",
    icon: "Paperclip"
  },
  photo: {
    label: "Foto",
    icon: "Image"
  },
  location: {
    label: "Lokasiya",
    icon: "MapPin"
  },
  rating: {
    label: "Qiymət",
    icon: "Star"
  },
  hidden: {
    label: "Gizli",
    icon: "EyeOff"
  },
  computed: {
    label: "Hesablanan",
    icon: "Percent"
  }
};

/** QuestionBlock — one row in the form builder: grip, index, title, type, actions. */
function QuestionBlock({
  index,
  title,
  type = "text",
  required = false,
  selected = false,
  dragging = false,
  hasLogic = false,
  hidden = false,
  summary,
  onSelect,
  onDuplicate,
  onDelete,
  onRequiredChange,
  children
}) {
  const t = NT_QUESTION_TYPES[type] || NT_QUESTION_TYPES.text;
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-qblock", selected && "nt-qblock--on", dragging && "nt-qblock--dragging"),
    onClick: onSelect
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-grip",
    "aria-label": "S\u0131rala"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "GripVertical",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "nt-qbadge"
  }, index), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--type-body-md-size)/1.35 var(--font-sans)",
      color: "var(--color-text-primary)"
    }
  }, title), required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-status-error-fg)",
      font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)"
    }
  }, "m\u0259cburi") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1-5)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    size: "sm",
    icon: t.icon
  }, t.label), hasLogic ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "info",
    size: "sm",
    icon: "GitBranch"
  }, "M\u0259ntiq") : null, hidden ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    size: "sm",
    icon: "EyeOff"
  }, "Gizli") : null, summary ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--type-caption-size)/1 var(--font-sans)",
      color: "var(--color-text-muted)"
    }
  }, summary) : null), children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      flex: "0 0 auto"
    }
  }, onRequiredChange ? /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    size: "sm",
    checked: required,
    onChange: onRequiredChange
  }) : null, onDuplicate ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Copy",
    label: "Dublikat",
    size: "sm",
    onClick: onDuplicate
  }) : null, onDelete ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Trash2",
    label: "Sil",
    size: "sm",
    onClick: onDelete
  }) : null));
}

/** QuestionTypePicker — the grid of data blocks used when adding a question. */
function QuestionTypePicker({
  value,
  onChange,
  types = Object.keys(NT_QUESTION_TYPES),
  columns = 4
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap: "var(--space-2)"
    }
  }, types.map(k => {
    const t = NT_QUESTION_TYPES[k];
    const on = value === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      onClick: () => onChange && onChange(k),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--space-2)",
        padding: "var(--space-2-5)",
        background: on ? "var(--color-surface-selected)" : "var(--color-surface-default)",
        border: `1px solid ${on ? "var(--color-border-focus)" : "var(--color-border-default)"}`,
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        textAlign: "left",
        transition: "var(--transition-control)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16,
      color: on ? "var(--color-text-link)" : "var(--color-text-secondary)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--fw-medium) var(--type-label-sm-size)/1.2 var(--font-sans)",
        color: "var(--color-text-primary)"
      }
    }, t.label));
  }));
}

/** OptionsEditor — the answer-option list for choice questions. */
function OptionsEditor({
  options = [],
  onChange,
  addLabel = "Variant əlavə et"
}) {
  const set = (i, v) => onChange && onChange(options.map((o, x) => x === i ? v : o));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-grip"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "GripVertical",
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    className: "nt-choice__box nt-choice__box--radio",
    style: {
      marginTop: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-inputwrap nt-inputwrap--sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "nt-input",
    value: o,
    onChange: e => set(i, e.target.value),
    placeholder: `Variant ${i + 1}`
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Variant\u0131 sil",
    size: "sm",
    onClick: () => onChange && onChange(options.filter((_, x) => x !== i))
  }))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "Plus",
    style: {
      alignSelf: "flex-start"
    },
    onClick: () => onChange && onChange([...options, ""])
  }, addLabel));
}

/** SectionDivider — a form section or page break in the builder list. */
function SectionDivider({
  label,
  kind = "section",
  onEdit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-2) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-divider",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: kind === "page" ? "Frame" : "Layers",
    size: 12
  }), label || (kind === "page" ? "Səhifə sonu" : "Bölmə")), onEdit ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Pencil",
    label: "Redakt\u0259 et",
    size: "xs",
    onClick: onEdit
  }) : null);
}
Object.assign(__ds_scope, { NT_QUESTION_TYPES, QuestionBlock, QuestionTypePicker, OptionsEditor, SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/builder/QuestionBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/**
 * Table — NarTalk's data surface. Sticky header, three densities, row selection.
 * Columns are declarative so density, alignment and skeletons stay in sync.
 */
function Table({
  columns = [],
  rows = [],
  density = "default",
  selectable = false,
  selected = [],
  onSelect,
  sort,
  onSort,
  rowActions,
  onRowClick,
  getRowId = (r, i) => r.id ?? i,
  empty,
  style
}) {
  const ids = rows.map(getRowId);
  const allOn = ids.length > 0 && ids.every(id => selected.includes(id));
  const someOn = !allOn && ids.some(id => selected.includes(id));
  const toggleAll = () => onSelect && onSelect(allOn ? [] : ids);
  const toggleOne = id => onSelect && onSelect(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-tablewrap",
    "data-nt-scroll": true,
    style: style
  }, /*#__PURE__*/React.createElement("table", {
    className: cx("nt-table", density !== "default" && `nt-table--${density}`)
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    style: {
      width: 36
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: allOn,
    indeterminate: someOn,
    onChange: toggleAll
  })) : null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      width: c.width,
      textAlign: c.align
    },
    className: cx(c.sortable && "nt-th--sortable", c.align === "right" && "nt-th--num"),
    onClick: c.sortable && onSort ? () => onSort(c.key) : undefined,
    "aria-sort": sort && sort.key === c.key ? sort.dir === "asc" ? "ascending" : "descending" : undefined
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, c.label, c.sortable ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sort && sort.key === c.key ? sort.dir === "asc" ? "ArrowUp" : "ArrowDown" : "ArrowUpDown",
    size: 11,
    color: sort && sort.key === c.key ? "var(--color-text-primary)" : "var(--color-text-muted)"
  }) : null))), rowActions ? /*#__PURE__*/React.createElement("th", {
    style: {
      width: 44
    }
  }) : null)), /*#__PURE__*/React.createElement("tbody", null, rows.length ? rows.map((r, i) => {
    const id = getRowId(r, i);
    const on = selected.includes(id);
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      className: cx(on && "nt-tr--on"),
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      style: onRowClick ? {
        cursor: "pointer"
      } : undefined
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: on,
      onChange: () => toggleOne(id)
    })) : null, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        textAlign: c.align
      },
      className: cx(c.align === "right" && "nt-td--num", c.mono && "nt-td--mono", c.muted && "nt-td--muted")
    }, c.render ? c.render(r) : r[c.key])), rowActions ? /*#__PURE__*/React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "nt-table__actions"
    }, rowActions(r))) : null);
  }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0),
    style: {
      padding: 0,
      borderBottom: 0
    }
  }, empty)))));
}

/** TableToolbar — search, filters, density and column controls above a table. */
function TableToolbar({
  children,
  right,
  bulk,
  selectedCount = 0,
  style
}) {
  if (bulk && selectedCount > 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "nt-toolbar nt-toolbar--bulk",
      style: style
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--fw-medium) var(--type-body-sm-size)/1 var(--font-sans)",
        color: "var(--color-text-link)"
      }
    }, selectedCount, " se\xE7ildi"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), bulk);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-toolbar",
    style: style
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), right);
}

/** TableFooter — row count left, pagination right. */
function TableFooter({
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-tablefoot"
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, right));
}

/** StatusCell — the sanctioned status cell renderer. */
function StatusCell({
  status,
  size = "sm"
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    size: size
  });
}

/** IdentityCell — avatar + name + secondary line, for respondents and members. */
function IdentityCell({
  name,
  secondary,
  src,
  icon,
  anonymous = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2-5)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: anonymous ? undefined : name,
    src: src,
    size: "sm",
    icon: icon || "User",
    tinted: !anonymous
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: anonymous ? "var(--color-text-tertiary)" : "var(--color-text-primary)",
      fontStyle: anonymous ? "italic" : undefined
    }
  }, anonymous ? "Anonim" : name), secondary ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/1.4 var(--font-sans)",
      color: "var(--color-text-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, secondary) : null));
}
Object.assign(__ds_scope, { Table, TableToolbar, TableFooter, StatusCell, IdentityCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/**
 * Field — the label / hint / message scaffold every input sits in.
 * Error text replaces hint text; it never stacks below it.
 */
function Field({
  label,
  htmlFor,
  required = false,
  optional = false,
  hint,
  error,
  success,
  counter,
  children,
  className,
  style
}) {
  const msg = error || success;
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-field", className),
    style: style
  }, label || counter ? /*#__PURE__*/React.createElement("div", {
    className: "nt-field__row"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "nt-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "nt-field__req",
    "aria-hidden": "true"
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-muted)",
      fontWeight: "var(--fw-regular)"
    }
  }, "(k\xF6n\xFCll\xFC)") : null) : /*#__PURE__*/React.createElement("span", null), counter ? /*#__PURE__*/React.createElement("span", {
    className: "nt-field__hint",
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, counter) : null) : null, children, msg ? /*#__PURE__*/React.createElement("p", {
    className: cx("nt-field__msg", error ? "nt-field__msg--error" : "nt-field__msg--success"),
    role: error ? "alert" : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: error ? "CircleAlert" : "CircleCheck",
    size: 13,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, msg)) : hint ? /*#__PURE__*/React.createElement("p", {
    className: "nt-field__hint"
  }, hint) : null);
}

/** FieldRow — two or three fields sharing a row on the 12px gutter. */
function FieldRow({
  children,
  cols,
  gap = "var(--space-3)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: cols || `repeat(${React.Children.count(children)}, minmax(0,1fr))`,
      gap,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Field, FieldRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileUpload.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");

/** FileUpload — drop zone plus an uploaded-file list with per-file progress. */
function FileUpload({
  label = "Faylı buraya atın",
  hint = "PNG, JPG, PDF · maksimum 10 MB",
  files = [],
  onRemove,
  state = "default",
  accept,
  multiple = true,
  onPick,
  icon = "Upload"
}) {
  const [drag, setDrag] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2-5)"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: cx("nt-drop", (drag || state === "active") && "nt-drop--active", state === "error" && "nt-drop--error"),
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: accept,
    multiple: multiple,
    onChange: onPick,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: "var(--color-surface-default)",
      border: "1px solid var(--color-border-default)",
      color: "var(--color-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--type-label-md-size)/var(--type-label-md-lh) var(--font-sans)",
      color: "var(--color-text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-weight) var(--type-caption-size)/var(--type-caption-lh) var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, hint)), files.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, files.map((fl, i) => /*#__PURE__*/React.createElement(FileRow, _extends({
    key: i
  }, fl, {
    onRemove: onRemove ? () => onRemove(i) : undefined
  })))) : null);
}

/** FileRow — one uploaded file: name, size, progress or error. */
function FileRow({
  name,
  size,
  progress,
  error,
  onRemove
}) {
  const done = progress == null || progress >= 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2-5)",
      padding: "var(--space-2) var(--space-2-5)",
      background: "var(--color-surface-default)",
      border: "1px solid " + (error ? "var(--color-status-error-border)" : "var(--color-border-default)"),
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: error ? "CircleAlert" : done ? "FileText" : "LoaderCircle",
    size: 15,
    color: error ? "var(--color-status-error-solid)" : "var(--color-text-tertiary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--type-body-sm-size)/1.3 var(--font-sans)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-weight) var(--type-caption-size)/1 var(--font-sans)",
      color: error ? "var(--color-status-error-fg)" : "var(--color-text-muted)",
      fontVariantNumeric: "tabular-nums",
      flex: "0 0 auto"
    }
  }, error || size)), !done && !error ? /*#__PURE__*/React.createElement("span", {
    className: "nt-progress nt-progress--sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-progress__fill",
    style: {
      width: `${progress}%`
    }
  })) : null), onRemove ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Sil",
    size: "xs",
    onClick: onRemove
  }) : null);
}

/** TagInput — free-text chips. Enter or comma commits, Backspace removes the last. */
function TagInput({
  values = [],
  onChange,
  placeholder = "Əlavə et…",
  max
}) {
  const [draft, setDraft] = React.useState("");
  const commit = () => {
    const v = draft.trim().replace(/,$/, "");
    if (!v || values.includes(v) || max && values.length >= max) return setDraft("");
    onChange && onChange([...values, v]);
    setDraft("");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-taginput"
  }, values.map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    className: "nt-tag"
  }, v, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-tag__x",
    onClick: () => onChange && onChange(values.filter(x => x !== v)),
    "aria-label": `${v} sil`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 11
  })))), /*#__PURE__*/React.createElement("input", {
    value: draft,
    placeholder: values.length ? "" : placeholder,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        commit();
      }
      if (e.key === "Backspace" && !draft && values.length) onChange && onChange(values.slice(0, -1));
    },
    onBlur: commit,
    style: {
      flex: 1,
      minWidth: 80,
      border: 0,
      outline: "none",
      background: "transparent",
      fontSize: "var(--type-body-md-size)",
      color: "var(--color-text-primary)",
      padding: "0 var(--space-1)"
    }
  }));
}

/** KeyValueInput — header/variable pairs for webhooks and API requests. */
function KeyValueInput({
  rows = [],
  onChange,
  keyPlaceholder = "Açar",
  valuePlaceholder = "Dəyər",
  addLabel = "Sətir əlavə et",
  mono = true
}) {
  const set = (i, patch) => onChange && onChange(rows.map((r, x) => x === i ? {
    ...r,
    ...patch
  } : r));
  const inputStyle = {
    flex: 1,
    minWidth: 0,
    height: "var(--control-h-md)",
    padding: "0 var(--pad-input-x)",
    background: "var(--color-surface-default)",
    border: "1px solid var(--color-border-default)",
    borderRadius: "var(--radius-input)",
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontSize: mono ? "var(--type-code-inline-size)" : "var(--type-body-md-size)",
    color: "var(--color-text-primary)",
    outline: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "nt-kv"
  }, /*#__PURE__*/React.createElement("input", {
    value: r.key || "",
    placeholder: keyPlaceholder,
    onChange: e => set(i, {
      key: e.target.value
    }),
    style: inputStyle
  }), /*#__PURE__*/React.createElement("input", {
    value: r.value || "",
    placeholder: valuePlaceholder,
    onChange: e => set(i, {
      value: e.target.value
    }),
    style: inputStyle
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Trash2",
    label: "S\u0259tri sil",
    size: "sm",
    onClick: () => onChange && onChange(rows.filter((_, x) => x !== i))
  }))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "Plus",
    onClick: () => onChange && onChange([...rows, {
      key: "",
      value: ""
    }]),
    style: {
      alignSelf: "flex-start"
    }
  }, addLabel));
}
Object.assign(__ds_scope, { FileUpload, FileRow, TagInput, KeyValueInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileUpload.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Wrap({
  size,
  invalid,
  valid,
  disabled,
  readOnly,
  mono,
  textarea,
  className,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-inputwrap", size && size !== "md" && `nt-inputwrap--${size}`, textarea && "nt-inputwrap--textarea", invalid && "nt-inputwrap--error", valid && !invalid && "nt-inputwrap--success", disabled && "nt-inputwrap--disabled", readOnly && !disabled && "nt-inputwrap--readonly", mono && "nt-inputwrap--mono", className),
    style: style
  }, children);
}

/** Input — the text field. Prefix/suffix can be glyphs, plain text, or boxed (mono) affixes. */
function Input({
  size = "md",
  invalid,
  valid,
  disabled,
  readOnly,
  mono,
  icon,
  iconAfter,
  prefixText,
  suffixText,
  boxedAffix = true,
  clearable,
  onClear,
  wrapClassName,
  wrapStyle,
  ...rest
}) {
  const gs = size === "sm" ? 13 : 14;
  return /*#__PURE__*/React.createElement(Wrap, {
    size: size,
    invalid: invalid,
    valid: valid,
    disabled: disabled,
    readOnly: readOnly,
    mono: mono,
    className: wrapClassName,
    style: wrapStyle
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: gs,
    color: "var(--color-text-muted)"
  }) : null, prefixText ? /*#__PURE__*/React.createElement("span", {
    className: cx("nt-affix", boxedAffix && "nt-affix--boxed")
  }, prefixText) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "nt-input",
    disabled: disabled,
    readOnly: readOnly,
    "aria-invalid": invalid || undefined
  }, rest)), clearable && rest.value ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-tag__x",
    onClick: onClear,
    "aria-label": "T\u0259mizl\u0259"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 12
  })) : null, suffixText ? /*#__PURE__*/React.createElement("span", {
    className: cx("nt-affix", boxedAffix && "nt-affix--boxed nt-affix--boxed-end")
  }, suffixText) : null, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: gs,
    color: "var(--color-text-muted)"
  }) : null, invalid ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "CircleAlert",
    size: gs,
    color: "var(--color-status-error-solid)"
  }) : valid ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "CircleCheck",
    size: gs,
    color: "var(--color-status-success-solid)"
  }) : null);
}

/** SearchInput — search glyph, clear affordance, and a ⌘K hint when it opens the palette. */
function SearchInput({
  shortcut,
  size = "md",
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Input, _extends({
    icon: "Search",
    size: size,
    clearable: true,
    placeholder: "Axtar\u2026"
  }, rest, {
    suffixText: undefined,
    boxedAffix: false,
    iconAfter: undefined
  }));
}

/** Textarea — vertical resize only, autosize-friendly. */
function Textarea({
  rows = 4,
  invalid,
  valid,
  disabled,
  readOnly,
  mono,
  wrapStyle,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Wrap, {
    textarea: true,
    invalid: invalid,
    valid: valid,
    disabled: disabled,
    readOnly: readOnly,
    mono: mono,
    style: wrapStyle
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    className: "nt-input",
    rows: rows,
    disabled: disabled,
    readOnly: readOnly,
    "aria-invalid": invalid || undefined
  }, rest)));
}

/** NumberInput — tabular figures plus a stepper. */
function NumberInput({
  value,
  onValueChange,
  min,
  max,
  step = 1,
  suffixText,
  size = "md",
  ...rest
}) {
  const bump = d => {
    const n = Number(value || 0) + d * step;
    if (min != null && n < min) return;
    if (max != null && n > max) return;
    onValueChange && onValueChange(n);
  };
  return /*#__PURE__*/React.createElement(Wrap, {
    size: size
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "nt-input",
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onValueChange && onValueChange(e.target.value === "" ? "" : Number(e.target.value))
  }, rest)), suffixText ? /*#__PURE__*/React.createElement("span", {
    className: "nt-affix"
  }, suffixText) : null, /*#__PURE__*/React.createElement("span", {
    className: "nt-stepper"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => bump(1),
    "aria-label": "Art\u0131r"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronUp",
    size: 11
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => bump(-1),
    "aria-label": "Azalt"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronDown",
    size: 11
  }))));
}

/** PasswordInput / secret field with a reveal toggle. */
function PasswordInput({
  size = "md",
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement(Wrap, {
    size: size
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "nt-input",
    type: show ? "text" : "password"
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-tag__x",
    onClick: () => setShow(!show),
    "aria-label": show ? "Gizlət" : "Göstər",
    style: {
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: show ? "EyeOff" : "Eye",
    size: 14
  })));
}

/** UrlInput — boxed https:// prefix so the user never types a scheme. */
function UrlInput(props) {
  return /*#__PURE__*/React.createElement(Input, _extends({
    prefixText: "https://",
    mono: true,
    icon: undefined,
    placeholder: "api.example.com/webhooks/nartalk"
  }, props));
}

/** PhoneInput — dial-code prefix, tabular figures. Defaults to +994. */
function PhoneInput({
  dialCode = "+994",
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Input, _extends({
    prefixText: dialCode,
    mono: true,
    inputMode: "tel",
    placeholder: "50 123 45 67"
  }, rest));
}
Object.assign(__ds_scope, { Input, SearchInput, Textarea, NumberInput, PasswordInput, UrlInput, PhoneInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/OtpInput.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** OtpInput — a fixed-length code, one cell per character. Paste fills every cell. */
function OtpInput({
  length = 6,
  value = "",
  onChange,
  state = "default",
  groupAfter,
  autoFocus
}) {
  const chars = String(value).slice(0, length).split("");
  const activeIdx = Math.min(chars.length, length - 1);
  const ref = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-otp",
    onClick: () => ref.current && ref.current.focus(),
    style: {
      position: "relative",
      cursor: "text"
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    autoFocus: autoFocus,
    value: value,
    inputMode: "numeric",
    autoComplete: "one-time-code",
    "aria-label": `${length} rəqəmli kod`,
    onChange: e => onChange && onChange(e.target.value.replace(/\D/g, "").slice(0, length)),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      width: "100%",
      border: 0
    }
  }), Array.from({
    length
  }).map((_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, groupAfter && i === groupAfter ? /*#__PURE__*/React.createElement("span", {
    className: "nt-otp__sep"
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: cx("nt-otp__cell", state === "error" && "nt-otp__cell--error", state === "success" && "nt-otp__cell--success", state === "default" && chars[i] && "nt-otp__cell--filled", state === "default" && i === activeIdx && chars.length < length && "nt-otp__cell--active")
  }, chars[i] || ""))));
}

/** CodeInput — a monospace single-line field for access codes and invite tokens. */
function CodeInput({
  value,
  onChange,
  placeholder = "XXXX-XXXX",
  invalid,
  onCopy
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx("nt-inputwrap", "nt-inputwrap--mono", invalid && "nt-inputwrap--error")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "KeyRound",
    size: 14,
    color: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    className: "nt-input",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    spellCheck: false,
    style: {
      letterSpacing: ".08em",
      textTransform: "uppercase"
    }
  }), onCopy ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-tag__x",
    onClick: onCopy,
    "aria-label": "Kopyala",
    style: {
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Copy",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { OtpInput, CodeInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OtpInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** Select — the closed trigger plus a token-styled menu. Uncontrolled open state. */
function Select({
  value,
  onChange,
  options = [],
  placeholder = "Seçin…",
  size = "md",
  disabled,
  invalid,
  icon,
  width,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const sel = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: width || "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    className: cx("nt-select", size === "sm" && "nt-select--sm", !sel && "nt-select--placeholder", open && "nt-select--open", disabled && "nt-select--disabled", invalid && "nt-select--error"),
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, sel && sel.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sel.icon,
    size: 14,
    color: "var(--color-text-tertiary)"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--color-text-muted)"
  }) : null, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronsUpDown",
    size: 13,
    color: "var(--color-text-muted)"
  })), open ? /*#__PURE__*/React.createElement("div", {
    className: "nt-menu",
    role: "listbox",
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 40,
      maxHeight: 260,
      overflow: "auto"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "option",
    "aria-selected": o.value === value,
    className: cx("nt-menu__item", o.disabled && "nt-menu__item--disabled"),
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, o.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: o.icon,
    size: 14,
    color: "var(--color-text-tertiary)"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, o.label), o.value === value ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 14,
    color: "var(--color-text-link)"
  }) : null))) : null);
}

/** Combobox — a Select with a filter field. Use above ~8 options. */
function Combobox({
  value,
  onChange,
  options = [],
  placeholder = "Seçin…",
  searchPlaceholder = "Axtar…",
  size = "md",
  width,
  emptyText = "Nəticə yoxdur"
}) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setQ("");
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const sel = options.find(o => o.value === value);
  const list = options.filter(o => String(o.label).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: width || "100%"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cx("nt-select", size === "sm" && "nt-select--sm", !sel && "nt-select--placeholder", open && "nt-select--open"),
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronsUpDown",
    size: 13,
    color: "var(--color-text-muted)"
  })), open ? /*#__PURE__*/React.createElement("div", {
    className: "nt-menu",
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 40,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "var(--space-2) var(--space-2-5)",
      borderBottom: "1px solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Search",
    size: 13,
    color: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: searchPlaceholder,
    style: {
      flex: 1,
      border: 0,
      outline: "none",
      background: "transparent",
      fontSize: "var(--type-body-sm-size)",
      color: "var(--color-text-primary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 220,
      overflow: "auto",
      padding: "var(--space-1)"
    }
  }, list.length ? list.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    className: "nt-menu__item",
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
      setQ("");
    }
  }, o.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: o.icon,
    size: 14,
    color: "var(--color-text-tertiary)"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, o.label), o.value === value ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 14,
    color: "var(--color-text-link)"
  }) : null)) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-3)",
      textAlign: "center",
      fontSize: "var(--type-body-sm-size)",
      color: "var(--color-text-muted)"
    }
  }, emptyText))) : null);
}

/** MultiSelect — selected values become removable tags inside the trigger. */
function MultiSelect({
  values = [],
  onChange,
  options = [],
  placeholder = "Seçin…",
  width
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const toggle = v => onChange && onChange(values.includes(v) ? values.filter(x => x !== v) : [...values, v]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: width || "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-taginput",
    onClick: () => setOpen(true),
    style: {
      cursor: "pointer"
    }
  }, values.length ? values.map(v => {
    const o = options.find(x => x.value === v) || {
      label: v
    };
    return /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      key: v,
      onRemove: e => {
        e.stopPropagation();
        toggle(v);
      }
    }, o.label);
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-placeholder)",
      fontSize: "var(--type-body-md-size)",
      padding: "0 var(--space-1)"
    }
  }, placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronsUpDown",
    size: 13,
    color: "var(--color-text-muted)",
    style: {
      marginLeft: "auto"
    }
  })), open ? /*#__PURE__*/React.createElement("div", {
    className: "nt-menu",
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 40,
      maxHeight: 240,
      overflow: "auto"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    className: "nt-menu__item",
    onClick: () => toggle(o.value)
  }, /*#__PURE__*/React.createElement("span", {
    className: cx("nt-choice__box", values.includes(o.value) && "nt-choice__box--checked"),
    style: {
      marginTop: 0
    }
  }, values.includes(o.value) ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 11,
    strokeWidth: 3
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, o.label)))) : null);
}
Object.assign(__ds_scope, { Select, Combobox, MultiSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/builder/LogicBuilder.jsx
try { (() => {
/** Keyword chips: IF / AND / OR / THEN / ELSE. Mono, uppercase, tinted by role. */
function LogicKeyword({
  word = "IF"
}) {
  const map = {
    IF: ["--color-status-info-bg", "--color-status-info-fg"],
    AND: ["--color-status-neutral-bg", "--color-status-neutral-fg"],
    OR: ["--color-status-neutral-bg", "--color-status-neutral-fg"],
    THEN: ["--color-status-brand-bg", "--color-status-brand-fg"],
    ELSE: ["--color-status-warning-bg", "--color-status-warning-fg"]
  }[word] || ["--color-status-neutral-bg", "--color-status-neutral-fg"];
  return /*#__PURE__*/React.createElement("span", {
    className: "nt-logic__kw",
    style: {
      background: `var(${map[0]})`,
      color: `var(${map[1]})`
    }
  }, word);
}

/** The operator vocabulary, in plain language rather than code. */
const NT_OPERATORS = [{
  value: "eq",
  label: "bərabərdir"
}, {
  value: "neq",
  label: "bərabər deyil"
}, {
  value: "contains",
  label: "daxilindədir"
}, {
  value: "not_contains",
  label: "daxilində deyil"
}, {
  value: "gt",
  label: "böyükdür"
}, {
  value: "lt",
  label: "kiçikdir"
}, {
  value: "empty",
  label: "boşdur"
}, {
  value: "not_empty",
  label: "boş deyil"
}, {
  value: "answered",
  label: "cavablandırılıb"
}];

/** ConditionRow — one "field / operator / value" line. */
function ConditionRow({
  word,
  field,
  operator,
  value,
  fields = [],
  onChange,
  onRemove,
  invalid
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-logic__row"
  }, word ? /*#__PURE__*/React.createElement(LogicKeyword, {
    word: word
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 44
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    width: 180,
    value: field,
    options: fields,
    placeholder: "Sual se\xE7in",
    onChange: v => onChange && onChange({
      field: v
    }),
    invalid: invalid && !field
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    width: 150,
    value: operator,
    options: NT_OPERATORS,
    placeholder: "\u015E\u0259rt",
    onChange: v => onChange && onChange({
      operator: v
    })
  }), operator !== "empty" && operator !== "not_empty" && operator !== "answered" ? /*#__PURE__*/React.createElement("div", {
    className: "nt-inputwrap nt-inputwrap--sm",
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "nt-input",
    value: value || "",
    placeholder: "D\u0259y\u0259r",
    onChange: e => onChange && onChange({
      value: e.target.value
    })
  })) : null, onRemove ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "\u015E\u0259rti sil",
    size: "sm",
    onClick: onRemove
  }) : null);
}

/** LogicGroup — an AND/OR set of conditions, nestable one level. */
function LogicGroup({
  join = "AND",
  conditions = [],
  fields = [],
  onJoinChange,
  onChange,
  onAdd,
  onRemove,
  nested = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: nested ? "nt-logic__group" : undefined,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, conditions.map((c, i) => /*#__PURE__*/React.createElement(ConditionRow, {
    key: i,
    word: i === 0 ? "IF" : join,
    field: c.field,
    operator: c.operator,
    value: c.value,
    fields: fields,
    onChange: patch => onChange && onChange(i, patch),
    onRemove: onRemove ? () => onRemove(i) : undefined,
    invalid: c.invalid
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "Plus",
    onClick: onAdd
  }, "\u015E\u0259rt \u0259lav\u0259 et"), conditions.length > 1 && onJoinChange ? /*#__PURE__*/React.createElement("div", {
    className: "nt-seg"
  }, ["AND", "OR"].map(w => /*#__PURE__*/React.createElement("button", {
    key: w,
    type: "button",
    className: `nt-seg__item${join === w ? " nt-seg__item--on" : ""}`,
    onClick: () => onJoinChange(w),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11
    }
  }, w))) : null));
}

/** ActionRow — the THEN / ELSE half of a rule. */
function ActionRow({
  word = "THEN",
  action,
  target,
  actions = [],
  targets = [],
  onChange,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-logic__row"
  }, /*#__PURE__*/React.createElement(LogicKeyword, {
    word: word
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    width: 180,
    value: action,
    options: actions,
    placeholder: "\u018Fm\u0259liyyat",
    onChange: v => onChange && onChange({
      action: v
    })
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    width: 200,
    value: target,
    options: targets,
    placeholder: "H\u0259d\u0259f",
    onChange: v => onChange && onChange({
      target: v
    })
  }), onRemove ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Sil",
    size: "sm",
    onClick: onRemove
  }) : null);
}

/** The canonical logic actions. */
const NT_LOGIC_ACTIONS = [{
  value: "goto",
  label: "Bölməyə keç",
  icon: "CornerDownRight"
}, {
  value: "show",
  label: "Sualı göstər",
  icon: "Eye"
}, {
  value: "hide",
  label: "Sualı gizlət",
  icon: "EyeOff"
}, {
  value: "require",
  label: "Məcburi et",
  icon: "Asterisk"
}, {
  value: "set",
  label: "Dəyişəni təyin et",
  icon: "Braces"
}, {
  value: "finish",
  label: "Formanı bitir",
  icon: "CircleStop"
}, {
  value: "notify",
  label: "Bildiriş göndər",
  icon: "Bell"
}, {
  value: "webhook",
  label: "Webhook çağır",
  icon: "Webhook"
}];

/**
 * LogicBuilder — the whole rule: IF conditions THEN action, optional ELSE,
 * closed by a plain-language summary so non-technical users can verify it.
 */
function LogicBuilder({
  title = "Şərt",
  conditions = [],
  join = "AND",
  then: thenRow,
  otherwise,
  fields = [],
  targets = [],
  summary,
  error,
  onAdd,
  onChange,
  onRemove,
  onJoinChange,
  onThenChange,
  onElseAdd,
  onDelete
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-logic"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "GitBranch",
    size: 14,
    color: "var(--color-text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--type-label-md-size)/1 var(--font-sans)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), onDelete ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "Trash2",
    label: "Qaydan\u0131 sil",
    size: "sm",
    onClick: onDelete
  }) : null), /*#__PURE__*/React.createElement(LogicGroup, {
    join: join,
    conditions: conditions,
    fields: fields,
    onJoinChange: onJoinChange,
    onChange: onChange,
    onAdd: onAdd,
    onRemove: onRemove
  }), /*#__PURE__*/React.createElement(ActionRow, {
    word: "THEN",
    action: thenRow && thenRow.action,
    target: thenRow && thenRow.target,
    actions: NT_LOGIC_ACTIONS,
    targets: targets,
    onChange: onThenChange
  }), otherwise ? /*#__PURE__*/React.createElement(ActionRow, {
    word: "ELSE",
    action: otherwise.action,
    target: otherwise.target,
    actions: NT_LOGIC_ACTIONS,
    targets: targets
  }) : onElseAdd ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "Plus",
    onClick: onElseAdd,
    style: {
      alignSelf: "flex-start"
    }
  }, "ELSE \u0259lav\u0259 et") : null, error ? /*#__PURE__*/React.createElement("div", {
    className: "nt-alert",
    style: {
      background: "var(--color-status-error-bg)",
      borderColor: "var(--color-status-error-border)",
      color: "var(--color-status-error-fg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "CircleAlert",
    size: 14,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-alert__body"
  }, error)) : summary ? /*#__PURE__*/React.createElement("div", {
    className: "nt-logic__summary"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Info",
    size: 12,
    style: {
      display: "inline",
      verticalAlign: -2,
      marginRight: 6
    }
  }), summary) : null);
}
Object.assign(__ds_scope, { LogicKeyword, NT_OPERATORS, ConditionRow, LogicGroup, ActionRow, NT_LOGIC_ACTIONS, LogicBuilder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/builder/LogicBuilder.jsx", error: String((e && e.message) || e) }); }

// components/developer/FilterBuilder.jsx
try { (() => {
/** FilterChip — one applied filter, removable, shown above the table. */
function FilterChip({
  field,
  operator,
  value,
  onRemove,
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1-5)",
      height: 26,
      padding: "0 var(--space-1) 0 var(--space-2)",
      background: "var(--color-surface-selected)",
      border: "1px solid var(--color-border-focus)",
      borderRadius: "var(--radius-sm)",
      font: "400 var(--type-label-sm-size)/1 var(--font-sans)",
      cursor: onClick ? "pointer" : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-tertiary)"
    }
  }, field), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-tertiary)"
    }
  }, operator), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      color: "var(--color-text-primary)"
    }
  }, value), onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-tag__x",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    "aria-label": "S\xFCzg\u0259ci sil"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 11
  })) : null);
}

/** FilterBuilder — the popover body for composing a filter set. */
function FilterBuilder({
  rows = [],
  fields = [],
  onChange,
  onAdd,
  onRemove,
  onApply,
  onClear
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2-5)"
    }
  }, rows.length ? rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 34,
      font: "var(--fw-medium) 11px/1 var(--font-mono)",
      textTransform: "uppercase",
      color: "var(--color-text-muted)"
    }
  }, i === 0 ? "harada" : "və"), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    width: 140,
    value: r.field,
    options: fields,
    placeholder: "Sah\u0259",
    onChange: v => onChange && onChange(i, {
      field: v
    })
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    width: 130,
    value: r.operator,
    options: __ds_scope.NT_OPERATORS,
    placeholder: "\u015E\u0259rt",
    onChange: v => onChange && onChange(i, {
      operator: v
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-inputwrap nt-inputwrap--sm",
    style: {
      width: 130
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "nt-input",
    value: r.value || "",
    placeholder: "D\u0259y\u0259r",
    onChange: e => onChange && onChange(i, {
      value: e.target.value
    })
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Sil",
    size: "sm",
    onClick: () => onRemove && onRemove(i)
  }))) : /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 var(--type-body-sm-size)/var(--type-body-sm-lh) var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, "S\xFCzg\u0259c yoxdur. Sah\u0259 se\xE7ib \u015F\u0259rt \u0259lav\u0259 edin."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      paddingTop: "var(--space-1)",
      borderTop: "1px solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "Plus",
    onClick: onAdd
  }, "S\xFCzg\u0259c \u0259lav\u0259 et"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), onClear ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onClear
  }, "S\u0131f\u0131rla") : null, onApply ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onApply
  }, "T\u0259tbiq et") : null));
}

/** SavedFilters — named, reusable filter sets. */
function SavedFilters({
  items = [],
  value,
  onSelect,
  onSave
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1-5)",
      flexWrap: "wrap"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    type: "button",
    onClick: () => onSelect && onSelect(it.value),
    className: `nt-seg__item${value === it.value ? " nt-seg__item--on" : ""}`,
    style: {
      height: 26,
      border: `1px solid ${value === it.value ? "var(--color-border-default)" : "transparent"}`
    }
  }, it.label, it.count != null ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    size: "sm",
    mono: true
  }, it.count) : null)), onSave ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "Star",
    onClick: onSave
  }, "S\xFCzg\u0259ci saxla") : null);
}

/** ColumnManager — the popover body for column visibility and order. */
function ColumnManager({
  columns = [],
  onToggle,
  onReset
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-grip"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "GripVertical",
    size: 13
  })), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: c.visible !== false,
    onChange: () => onToggle && onToggle(c.key),
    label: c.label
  }))), onReset ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-1)",
      borderTop: "1px solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "RotateCcw",
    onClick: onReset
  }, "Standarta qaytar")) : null);
}

/** ExportProgress — a running export with a real percentage and a cancel. */
function ExportProgress({
  label = "CSV hazırlanır",
  percent = 0,
  rows,
  onCancel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-3)",
      background: "var(--color-surface-default)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Download",
    size: 15,
    color: "var(--color-text-tertiary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-2)",
      font: "var(--fw-medium) var(--type-body-sm-size)/1 var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums",
      color: "var(--color-text-tertiary)"
    }
  }, rows ? `${rows} sətir · ` : "", Math.round(percent), "%")), /*#__PURE__*/React.createElement("span", {
    className: "nt-progress nt-progress--sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-progress__fill",
    style: {
      width: `${percent}%`
    }
  }))), onCancel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onCancel
  }, "Dayand\u0131r") : null);
}
Object.assign(__ds_scope, { FilterChip, FilterBuilder, SavedFilters, ColumnManager, ExportProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/developer/FilterBuilder.jsx", error: String((e && e.message) || e) }); }

// components/developer/PermissionMatrix.jsx
try { (() => {
/** The canonical NarTalk roles. */
const NT_ROLES = [{
  value: "owner",
  label: "Owner",
  description: "Tam nəzarət, billing və workspace silmə"
}, {
  value: "admin",
  label: "Admin",
  description: "Bot və forma idarəsi, üzv dəvəti"
}, {
  value: "editor",
  label: "Editor",
  description: "Bot və forma qurur, dərc edir"
}, {
  value: "analyst",
  label: "Analyst",
  description: "Cavabları görür və ixrac edir"
}, {
  value: "viewer",
  label: "Viewer",
  description: "Yalnız oxuma"
}];

/** PermissionMatrix — capabilities × roles. A cell is allowed, partial, or denied. */
function PermissionMatrix({
  roles = NT_ROLES,
  groups = [],
  editable = false,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: "nt-matrix"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 200
    }
  }, "\u0130caz\u0259"), roles.map(r => /*#__PURE__*/React.createElement("th", {
    key: r.value
  }, r.label)))), /*#__PURE__*/React.createElement("tbody", null, groups.map((g, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: gi
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: roles.length + 1,
    style: {
      textAlign: "left",
      background: "var(--color-surface-subtle)",
      font: "var(--fw-semibold) var(--type-label-sm-size)/1 var(--font-sans)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--color-text-tertiary)"
    }
  }, g.label)), g.rows.map(row => /*#__PURE__*/React.createElement("tr", {
    key: row.key
  }, /*#__PURE__*/React.createElement("td", null, row.label), roles.map(r => {
    const v = (row.values || {})[r.value];
    return /*#__PURE__*/React.createElement("td", {
      key: r.value
    }, editable ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onToggle && onToggle(row.key, r.value),
      "aria-label": `${row.label} · ${r.label}`,
      style: {
        display: "grid",
        placeItems: "center",
        width: 20,
        height: 20,
        margin: "0 auto",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        borderRadius: "var(--radius-xs)"
      }
    }, /*#__PURE__*/React.createElement(Cell, {
      v: v
    })) : /*#__PURE__*/React.createElement(Cell, {
      v: v
    }));
  })))))));
}
function Cell({
  v
}) {
  if (v === true || v === "allow") return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 15,
    color: "var(--color-status-success-solid)",
    strokeWidth: 2.4,
    label: "\u0130caz\u0259 var"
  });
  if (v === "partial") return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Minus",
    size: 15,
    color: "var(--color-status-warning-solid)",
    strokeWidth: 2.4,
    label: "Qism\u0259n"
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 14,
    color: "var(--color-text-disabled)",
    strokeWidth: 2.2,
    label: "\u0130caz\u0259 yoxdur"
  });
}

/** RoleSelector — a role picker that explains each role inline. */
function RoleSelector({
  value,
  onChange,
  roles = NT_ROLES,
  size = "sm",
  width = 150
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: size,
    width: width,
    value: value,
    onChange: onChange,
    options: roles.map(r => ({
      value: r.value,
      label: r.label
    }))
  });
}

/** MemberRow — one team member: identity, role, status, actions. */
function MemberRow({
  name,
  email,
  role,
  status,
  lastActive,
  onRoleChange,
  actions,
  pending
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-2-5) 0",
      borderBottom: "1px solid var(--color-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: pending ? undefined : name,
    size: "sm",
    icon: "User",
    tinted: !pending
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "var(--fw-medium) var(--type-body-sm-size)/1.35 var(--font-sans)"
    }
  }, pending ? email : name, pending ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning",
    size: "sm",
    icon: "Clock"
  }, "D\u0259v\u0259t g\xF6zl\u0259yir") : null), !pending ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--type-caption-size)/1.4 var(--font-sans)",
      color: "var(--color-text-muted)"
    }
  }, email) : null), lastActive ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 var(--type-caption-size)/1 var(--font-sans)",
      color: "var(--color-text-muted)",
      minWidth: 96,
      textAlign: "right"
    }
  }, lastActive) : null, onRoleChange ? /*#__PURE__*/React.createElement(RoleSelector, {
    value: role,
    onChange: onRoleChange
  }) : /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    size: "sm"
  }, role), actions);
}

/** AccessDenied — a permission wall, not an error. Says who can grant access. */
function AccessDenied({
  title = "Bu bölməyə girişiniz yoxdur",
  description = "Bu səhifə yalnız Admin və Owner rollarına açıqdır.",
  contact = "Workspace sahibi ilə əlaqə saxlayın.",
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__icon",
    style: {
      background: "var(--color-status-warning-bg)",
      borderColor: "var(--color-status-warning-border)",
      color: "var(--color-status-warning-fg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Lock",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "nt-empty__desc"
  }, description, " ", contact)), onBack ? /*#__PURE__*/React.createElement("div", {
    className: "nt-empty__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    icon: "ArrowLeft",
    onClick: onBack
  }, "Geri qay\u0131t")) : null);
}
Object.assign(__ds_scope, { NT_ROLES, PermissionMatrix, RoleSelector, MemberRow, AccessDenied });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/developer/PermissionMatrix.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** Sidebar — the primary app rail. 248px expanded, 56px collapsed. */
function Sidebar({
  collapsed = false,
  top,
  children,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "nt-sidebar",
    style: style,
    "data-collapsed": collapsed || undefined
  }, top ? /*#__PURE__*/React.createElement("div", {
    className: "nt-sidebar__top"
  }, top) : null, /*#__PURE__*/React.createElement("nav", {
    className: "nt-sidebar__nav",
    "data-nt-scroll": true
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "nt-sidebar__foot"
  }, footer) : null);
}
function SidebarSection({
  label,
  children,
  collapsed
}) {
  return /*#__PURE__*/React.createElement("div", null, label && !collapsed ? /*#__PURE__*/React.createElement("div", {
    className: "nt-sidebar__section"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, children));
}

/** SidebarItem — one destination. `domain` resolves the canonical NarTalk glyph. */
function SidebarItem({
  label,
  icon,
  domain,
  active = false,
  count,
  collapsed = false,
  badge,
  onClick,
  href,
  children
}) {
  const Tag = href ? "a" : "button";
  const glyph = icon || (domain ? __ds_scope.ntIcon(domain) : null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : "button",
    onClick: onClick,
    className: cx("nt-navitem", active && "nt-navitem--on", collapsed && "nt-navitem--collapsed"),
    "aria-current": active ? "page" : undefined,
    title: collapsed ? label : undefined
  }, glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 15
  }) : null, !collapsed ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, label) : null, !collapsed && count != null ? /*#__PURE__*/React.createElement("span", {
    className: "nt-navitem__count"
  }, count) : null, !collapsed && badge ? badge : null), children && !collapsed ? /*#__PURE__*/React.createElement("div", {
    className: "nt-navsub"
  }, children) : null);
}

/** WorkspaceSwitcher — the top-left identity control. */
function WorkspaceSwitcher({
  name,
  plan,
  collapsed = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-wswitch",
    onClick: onClick,
    style: collapsed ? {
      justifyContent: "center",
      padding: 0
    } : undefined,
    title: name
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    shape: "square",
    size: "sm",
    icon: "Boxes"
  }), !collapsed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--type-label-md-size)/1.2 var(--font-sans)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), plan ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-weight) 11px/1.3 var(--font-sans)",
      color: "var(--color-text-muted)"
    }
  }, plan) : null), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronsUpDown",
    size: 13,
    color: "var(--color-text-muted)"
  })) : null);
}

/** AccountMenu — the bottom-left user control. */
function AccountMenu({
  name,
  email,
  collapsed = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-wswitch",
    onClick: onClick,
    style: collapsed ? {
      justifyContent: "center",
      padding: 0
    } : undefined,
    title: name
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    size: "sm"
  }), !collapsed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.2,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) var(--type-label-sm-size)/1.3 var(--font-sans)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), email ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/1.3 var(--font-sans)",
      color: "var(--color-text-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, email) : null), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Ellipsis",
    size: 14,
    color: "var(--color-text-muted)"
  })) : null);
}

/** MobileTabBar — the ≤767px replacement for the sidebar. 56px, four or five destinations. */
function MobileTabBar({
  items = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "stretch",
      height: "var(--layout-mobile-tabbar-h)",
      borderTop: "1px solid var(--color-border-default)",
      background: "var(--color-surface-default)"
    }
  }, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => onChange && onChange(it.value),
      "aria-current": on ? "page" : undefined,
      style: {
        flex: 1,
        minHeight: "var(--touch-min)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        border: 0,
        background: "transparent",
        color: on ? "var(--color-text-primary)" : "var(--color-text-tertiary)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || __ds_scope.ntIcon(it.domain || ""),
      size: 19
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${on ? "var(--fw-medium)" : "400"} 10px/1 var(--font-sans)`
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { Sidebar, SidebarSection, SidebarItem, WorkspaceSwitcher, AccountMenu, MobileTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** Topbar — sticky, 52px, hairline bottom border. Breadcrumb left, actions right. */
function Topbar({
  left,
  children,
  right,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "nt-topbar",
    style: style
  }, left, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, children), right ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flex: "0 0 auto"
    }
  }, right) : null);
}

/** Breadcrumb — Workspace › Bot › Section. Truncates the middle, never the last. */
function Breadcrumb({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nt-crumbs",
    "aria-label": "Breadcrumb"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronRight",
    size: 13,
    color: "var(--color-text-muted)"
  }) : null, i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "nt-crumbs__cur",
    "aria-current": "page"
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: it.href || "#",
    onClick: it.onClick
  }, it.label))));
}

/** Tabs — horizontal section switch under a page title. */
function Tabs({
  value,
  onChange,
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-tabs",
    role: "tablist",
    style: style
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    type: "button",
    role: "tab",
    "aria-selected": it.value === value,
    className: cx("nt-tab", it.value === value && "nt-tab--on"),
    onClick: () => onChange && onChange(it.value)
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 14
  }) : null, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 2,
      padding: "0 5px",
      height: 16,
      display: "inline-grid",
      placeItems: "center",
      borderRadius: "var(--radius-xs)",
      background: "var(--color-bg-inset)",
      font: "var(--fw-medium) 11px/1 var(--font-sans)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--color-text-tertiary)"
    }
  }, it.count) : null)));
}

/** VerticalTabs — settings-style navigation inside a page. */
function VerticalTabs({
  value,
  onChange,
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-vtabs",
    role: "tablist",
    style: style
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    type: "button",
    role: "tab",
    "aria-selected": it.value === value,
    className: cx("nt-vtab", it.value === value && "nt-vtab--on"),
    onClick: () => onChange && onChange(it.value)
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 14
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, it.label))));
}

/** Pagination — page numbers with tabular figures, plus a page-size control slot. */
function Pagination({
  page = 1,
  pages = 1,
  onChange,
  siblings = 1
}) {
  const nums = [];
  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || Math.abs(i - page) <= siblings) nums.push(i);else if (nums[nums.length - 1] !== "…") nums.push("…");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-pager"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-pager__n",
    disabled: page <= 1,
    onClick: () => onChange && onChange(page - 1),
    "aria-label": "\u018Fvv\u0259lki"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronLeft",
    size: 14
  })), nums.map((n, i) => n === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      padding: "0 var(--space-1)",
      color: "var(--color-text-muted)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    className: cx("nt-pager__n", n === page && "nt-pager__n--on"),
    "aria-current": n === page ? "page" : undefined,
    onClick: () => onChange && onChange(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nt-pager__n",
    disabled: page >= pages,
    onClick: () => onChange && onChange(page + 1),
    "aria-label": "N\xF6vb\u0259ti"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronRight",
    size: 14
  })));
}

/** Stepper — linear multi-step progress (bot creation, onboarding). */
function Stepper({
  step = 0,
  steps = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-steps",
    style: style
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "nt-step__line"
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: cx("nt-step", i === step && "nt-step--on", i < step && "nt-step--done")
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-step__n"
  }, i < step ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 12,
    strokeWidth: 2.6
  }) : i + 1), /*#__PURE__*/React.createElement("span", null, typeof s === "string" ? s : s.label)))));
}
Object.assign(__ds_scope, { Topbar, Breadcrumb, Tabs, VerticalTabs, Pagination, Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Menu.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(" ");

/** Menu — the shared surface for dropdowns and context menus. */
function Menu({
  items = [],
  onSelect,
  width,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-menu",
    role: "menu",
    style: {
      width,
      ...style
    }
  }, items.map((it, i) => {
    if (it.type === "separator") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "nt-menu__sep"
    });
    if (it.type === "label") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "nt-menu__label"
    }, it.label);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      role: "menuitem",
      disabled: it.disabled,
      className: cx("nt-menu__item", it.danger && "nt-menu__item--danger", it.disabled && "nt-menu__item--disabled"),
      onClick: () => {
        it.onClick && it.onClick();
        onSelect && onSelect(it);
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 14
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, it.label), it.shortcut ? /*#__PURE__*/React.createElement("span", {
      className: "nt-menu__kbd"
    }, it.shortcut) : null, it.checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Check",
      size: 14,
      color: "var(--color-text-link)"
    }) : null);
  }));
}

/** DropdownMenu — a trigger plus Menu, with outside-click and Escape handling. */
function DropdownMenu({
  trigger,
  items = [],
  align = "end",
  width = 200,
  onSelect
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const md = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const kd = e => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", md);
    document.addEventListener("keydown", kd);
    return () => {
      document.removeEventListener("mousedown", md);
      document.removeEventListener("keydown", kd);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(!open),
    style: {
      display: "inline-flex"
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      [align === "end" ? "right" : "left"]: 0,
      zIndex: 45
    }
  }, /*#__PURE__*/React.createElement(Menu, {
    items: items,
    width: width,
    onSelect: it => {
      setOpen(false);
      onSelect && onSelect(it);
    }
  })) : null);
}

/** Popover — a small anchored panel for filters and settings. */
function Popover({
  trigger,
  children,
  align = "start",
  width = 280,
  title
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(!open),
    style: {
      display: "inline-flex"
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    className: "nt-popover",
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      [align === "end" ? "right" : "left"]: 0,
      width,
      zIndex: 45
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-2-5)",
      font: "var(--fw-semibold) var(--type-label-sm-size)/1 var(--font-sans)",
      color: "var(--color-text-secondary)"
    }
  }, title) : null, children) : null);
}

/** CommandPalette — ⌘K. Verbs first, then objects. */
function CommandPalette({
  open = true,
  query = "",
  onQueryChange,
  groups = [],
  activeIndex = 0,
  onClose,
  footer,
  placeholder = "Əmr yazın və ya axtarın…"
}) {
  if (!open) return null;
  let flat = -1;
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-scrim",
    style: {
      display: "grid",
      placeItems: "start center",
      paddingTop: "12vh"
    },
    onMouseDown: e => e.target === e.currentTarget && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-palette",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-palette__input"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Search",
    size: 17,
    color: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: query,
    onChange: e => onQueryChange && onQueryChange(e.target.value),
    placeholder: placeholder,
    "aria-label": placeholder
  }), /*#__PURE__*/React.createElement("kbd", {
    className: "nt-kbd"
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "nt-palette__list",
    "data-nt-scroll": true
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-menu__label"
  }, g.label), g.items.map((it, ii) => {
    flat += 1;
    return /*#__PURE__*/React.createElement("div", {
      key: ii,
      className: cx("nt-palette__item", flat === activeIndex && "nt-palette__item--on"),
      onClick: it.onClick
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || "CornerDownRight",
      size: 15,
      color: "var(--color-text-tertiary)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, it.label), it.hint ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 var(--type-caption-size)/1 var(--font-sans)",
        color: "var(--color-text-muted)"
      }
    }, it.hint) : null, it.shortcut ? /*#__PURE__*/React.createElement("kbd", {
      className: "nt-kbd"
    }, it.shortcut) : null);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "nt-palette__foot"
  }, footer || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", {
    className: "nt-kbd"
  }, "\u2191"), " ", /*#__PURE__*/React.createElement("kbd", {
    className: "nt-kbd"
  }, "\u2193"), " h\u0259r\u0259k\u0259t"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", {
    className: "nt-kbd"
  }, "\u21B5"), " se\xE7"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", {
    className: "nt-kbd"
  }, "esc"), " ba\u011Fla")))));
}
Object.assign(__ds_scope, { Menu, DropdownMenu, Popover, CommandPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Modal.jsx
try { (() => {
/** Modal — a focused, blocking task. Escape and scrim both close it. */
function Modal({
  open = true,
  title,
  description,
  icon,
  iconTone,
  size = "md",
  children,
  footer,
  onClose,
  closeLabel = "Bağla"
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const h = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  const max = {
    sm: 400,
    md: 480,
    lg: 640,
    xl: 800
  }[size] || 480;
  return /*#__PURE__*/React.createElement("div", {
    className: "nt-scrim",
    style: {
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)"
    },
    onMouseDown: e => e.target === e.currentTarget && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      maxWidth: max
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-modal__head"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "nt-modal__icon",
    style: {
      background: `var(--color-status-${iconTone || "info"}-bg)`,
      borderColor: `var(--color-status-${iconTone || "info"}-border)`,
      color: `var(--color-status-${iconTone || "info"}-fg)`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "nt-modal__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "nt-modal__desc"
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: closeLabel,
    size: "sm",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    className: "nt-modal__body",
    "data-nt-scroll": true
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--space-2)"
    }
  }), footer ? /*#__PURE__*/React.createElement("div", {
    className: "nt-modal__foot"
  }, footer) : null));
}

/**
 * ConfirmDialog — the only place a filled destructive button appears.
 * `requireText` forces the user to type the object's name for irreversible deletes.
 */
function ConfirmDialog({
  open = true,
  tone = "error",
  title,
  description,
  confirmLabel = "Sil",
  cancelLabel = "Ləğv et",
  onConfirm,
  onCancel,
  requireText,
  consequence,
  loading
}) {
  const [typed, setTyped] = React.useState("");
  const blocked = requireText ? typed.trim() !== requireText : false;
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    size: "sm",
    onClose: onCancel,
    icon: tone === "error" ? "TriangleAlert" : "CircleHelp",
    iconTone: tone,
    title: title,
    description: description,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      onClick: onCancel
    }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: tone === "error" ? "destructive" : "primary",
      onClick: onConfirm,
      disabled: blocked,
      loading: loading
    }, confirmLabel))
  }, consequence ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-2-5)",
      background: "var(--color-status-error-bg)",
      border: "1px solid var(--color-status-error-border)",
      borderRadius: "var(--radius-md)",
      font: "var(--type-body-sm-weight) var(--type-body-sm-size)/var(--type-body-sm-lh) var(--font-sans)",
      color: "var(--color-status-error-fg)"
    }
  }, consequence) : null, requireText ? /*#__PURE__*/React.createElement("div", {
    className: "nt-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "nt-field__label"
  }, "T\u0259sdiq \xFC\xE7\xFCn ", /*#__PURE__*/React.createElement("code", {
    className: "nt-inlinecode"
  }, requireText), " yaz\u0131n"), /*#__PURE__*/React.createElement("div", {
    className: "nt-inputwrap nt-inputwrap--mono"
  }, /*#__PURE__*/React.createElement("input", {
    className: "nt-input",
    value: typed,
    onChange: e => setTyped(e.target.value),
    placeholder: requireText,
    autoFocus: true
  }))) : null);
}

/** Drawer — a side panel for detail without losing the list behind it. */
function Drawer({
  open = true,
  title,
  subtitle,
  width,
  children,
  footer,
  onClose,
  actions
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const h = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "nt-scrim",
    onMouseDown: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: "nt-drawer",
    role: "dialog",
    "aria-modal": "true",
    style: width ? {
      width
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "nt-drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) var(--type-label-md-size)/1.3 var(--font-sans)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: "400 var(--type-caption-size)/1.3 var(--font-sans)",
      color: "var(--color-text-tertiary)"
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      flex: "0 0 auto"
    }
  }, actions, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "X",
    label: "Ba\u011Fla",
    size: "sm",
    onClick: onClose
  }) : null)), /*#__PURE__*/React.createElement("div", {
    className: "nt-drawer__body",
    "data-nt-scroll": true
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "nt-drawer__foot"
  }, footer) : null));
}

/** BottomSheet — the ≤767px substitute for Drawer and larger Modals. */
function BottomSheet({
  open = true,
  title,
  children,
  footer,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "nt-scrim",
    onMouseDown: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "nt-sheet",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nt-sheet__grip"
  }), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-4) var(--space-3)",
      font: "var(--fw-semibold) var(--type-h4-size)/1.3 var(--font-sans)",
      letterSpacing: "var(--type-h4-ls)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "0 var(--space-4) var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    },
    "data-nt-scroll": true
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-3) var(--space-4)",
      paddingBottom: "calc(var(--space-4) + env(safe-area-inset-bottom))",
      borderTop: "1px solid var(--color-border-subtle)",
      display: "flex",
      gap: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal, ConfirmDialog, Drawer, BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Modal.jsx", error: String((e && e.message) || e) }); }

Object.assign(__ds_ns, __ds_scope);

})();
