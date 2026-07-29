# NarTalk Design System

**NarTalk** (nartalk.com) is an Azerbaijani no-code SaaS platform for collecting data through Telegram. Users build a Telegram bot or a web form visually — no code — choose who is allowed to answer, share a link, and manage every response from one dashboard.

The tagline on the live site is *"Telegram-da data toplamağın ən sadə yolu."* — the simplest way to collect data in Telegram. Everything in this system serves that promise: get a non-technical person from zero to a working bot in five minutes, and give a developer real API, webhook and OTP infrastructure underneath.

## What the product does

| Surface | Purpose |
| --- | --- |
| **Marketing site** | Hero, how-it-works, feature grid, pricing (₼0 / ₼29 / custom), security & legal pages, blog |
| **Dashboard** | Bots list, forms list, responses table, response detail, analytics |
| **Bot builder** | Drag-and-drop flow canvas — message, question, condition, API, webhook, OTP, notification, delay nodes |
| **Form builder** | Question blocks, data-block types, sections & page breaks, AI generation from a prompt, share/embed |
| **Logic builder** | IF / AND / OR / THEN / ELSE branching, readable by non-technical users |
| **Developer tools** | API keys, endpoint reference, webhook deliveries & signature verification, OTP send/verify, rate limits, test/live environments |
| **Workspace** | Team members, roles & permissions, audit log, billing, usage limits, settings |

## Sources used to build this system

- **https://nartalk.com** — the live marketing site. All product copy, the information architecture, the pricing tiers, the dashboard nav labels and the data-block vocabulary in this system are taken verbatim from it.
- **`uploads/NarTalk-logo-minimal-4096.png`** — the supplied logo (4096², transparent PNG). Brand red sampled directly from it: **`#EF2E4C`**. Seed colour `#F3F3F3`.
- **The NarTalk Design System Master Brief** (supplied in Azerbaijani) — the full component, token, status, accessibility and page-template inventory this system is built against.

> **Not available to this build:** the site's compiled CSS and the product's source code. The site renders as a Next.js-style bundle whose stylesheet could not be read, so **only the brand red is measured from a real artefact** — the neutral, accent and semantic ramps are derived from it and from the brief's stated direction (modern, minimal, technological, enterprise SaaS). Nothing in the marketing layout has been redesigned. **If you can share the repo, the Figma file, or the compiled `styles.css`, the palette and type stack should be reconciled against them.** See *Open questions* at the bottom.

---

# CONTENT FUNDAMENTALS

## Language

Azerbaijani is the primary language. English appears only where it is genuinely technical vocabulary the audience already reads in English: `API`, `webhook`, `OTP`, `workspace`, `Pro`, `LIVE`, `JSON`, HTTP verbs, and the logic keywords `IF / AND / OR / THEN / ELSE`. Never translate those — a developer scanning for `webhook` should find `webhook`.

Address the user as **siz** (formal plural), consistently. The site does this without exception: *"Botunuzu vizual olaraq qurun"*, *"Sizə uyğun planı seçin"*. Never **sən**.

Interface labels use the imperative or a bare noun, never a sentence: `Bot yarat`, `Dərc et`, `Ön baxış`, `Cavablar`, `Tənzimləmələr`.

## Voice

**Short. Declarative. Ends with a full stop.** The site's headlines are complete sentences with periods, and they are never longer than eight words:

- *Telegram-da data toplamağın ən sadə yolu.*
- *Sadə qur. Dərhal paylaş.*
- *Bot üçün lazım olan hər şey bir yerdə.*
- *Sizə uyğun planı seçin.*
- *İlk botunuzu bu gün yaradın.*

Notice the two-clause imperative pair (*Sadə qur. Dərhal paylaş.*) — that rhythm is the house style for section headings. Use it.

Sub-copy is one sentence that says what the user gets, not what the software has:

- *Botunuzu vizual olaraq qurun, giriş icazələrini seçin və paylaşın.*
- *İlk botunuz üçün proqramçıya və texniki biliyə ehtiyac yoxdur.*
- *Cavabları paneldə izlə, axtar, filtrlə və istənilən vaxt ixrac et.*

Feature titles are two or three words, noun-led: *Vizual bot qurucu · Giriş nəzarəti · Canlı data paneli · Bütün data tipləri · Bir neçə bot · Tam nəzarət.*

## Punctuation and formatting conventions

| Convention | Example |
| --- | --- |
| Middot separates reassurance facts | `Kredit kartı tələb olunmur · 5 dəqiqəyə hazırdır` |
| Middot separates metadata | `Aysel Məmmədova · 2 dəqiqə əvvəl`, `5 sual · Avtomatik saxlanılır` |
| Steps are zero-padded | `01` `02` `03` |
| Currency is manat, spaced slash | `₼29 / ay` |
| Thousands use a comma | `1,284` |
| Times are 24-hour | `14:02`, `14:02:11` |
| Sentence case everywhere | `Bot yarat`, not `Bot Yarat` |
| ALL CAPS only for machine tokens | `LIVE`, `TEST`, `POST`, `IF`, `THEN` |
| **No emoji, ever** | The brand is an instrument, not a chat sticker pack |

## Error and empty-state copy

Two sentences maximum. **Name the problem, then the fix.** Never blame the user, never surface a stack trace as the message.

- ✅ *Bu URL cavab vermir. https:// ilə başlayan ünvan yazın.*
- ✅ *Kod yanlışdır. Yenidən yoxlayın və ya yeni kod istəyin.*
- ✅ *Limitə çatdınız. Pro plana keçin və ya növbəti ayı gözləyin.*
- ❌ *Xəta baş verdi.* — says nothing
- ❌ *ERR_INVALID_WEBHOOK_URL* — that goes in the mono trace id, not the message

Empty states name the object and offer the first step: *"Cavab gözlənilir — Botunuzu paylaşın, ilk cavablar burada real vaxtda görünəcək."* The approved copy for all twelve canonical empties lives in `NT_EMPTY` (`components/data/EmptyState.jsx`) — use the preset rather than writing new wording.

Destructive confirmations state the consequence with real numbers: *"1,284 cavab və bütün webhook tarixçəsi silinəcək."*

## The AI generation narrative

When AI builds a form from a prompt, the wait is narrated in five present-continuous steps (`NT_AI_STEPS`): *Sorğunuz analiz edilir → Formanın strukturu qurulur → Suallar əlavə edilir → Məntiq tətbiq edilir → Ön baxış hazırlanır.* This is the one place where the product talks about itself working, and it earns that because the wait is real.

---

# VISUAL FOUNDATIONS

## The mark

A pomegranate that is also a speech bubble. **Nar** means pomegranate in Azerbaijani, and the fruit is a national symbol; the mark folds it into a message bubble whose three seeds read as the Telegram typing ellipsis. The tail at the bottom-left is what makes it a bubble rather than fruit — never crop or straighten it.

The whole brand idea sits in that one mark: *Azerbaijani + conversation + data*. Everything else in this system is deliberately quiet so the mark carries the personality alone.

- `assets/logo-mark.png` — full-resolution transparent mark
- `assets/logo-mark-512.png` — UI use
- `assets/logo-mark-white.png` — monochrome white (seeds knocked out), for Ink and Nar backgrounds
- No supplied wordmark file: the lockup is the mark plus **NarTalk** set in Geist 600 at `-0.035em`, mark height ≈ 1.6× cap height, gap ≈ 0.5× mark width.

## Colour

**Nar red `#EF2E4C`** is the only loud thing in the system. It is the identity colour — logo, primary buttons, the brand chart series, the focus glow — and it appears **once or twice per screen**, never as a field of colour. Fill a dashboard with red and the product stops looking like an instrument.

A deliberate split, because AA contrast requires it: `--nar-500 #EF2E4C` is the *identity* red (4.07:1 with white — fine for the mark and large text, not for a 14px button label), while `--color-action-primary` resolves to `--nar-600 #DE1E3E` (4.8:1) so button labels pass AA. Brand text on white uses `--nar-700`.

**Destructive is a different hue on purpose.** With a red brand, a red delete button is a real hazard. Destructive uses **Brick** (`#C22C1D` — orange-shifted, visibly darker), and the system additionally forbids a filled Nar and a filled Brick button from appearing side by side: in toolbars destructive is `destructive-outline` or a red menu item, and filled Brick exists only inside a `ConfirmDialog` where no primary red is present.

**Azure `#2E6FEF`** carries everything informational — links, selection, focus rings, the second chart series, the `IF` keyword. Making focus azure rather than red means a focus ring can never be misread as an error.

Neutrals are **Graphite**, faintly cool, so Nar reads warm against them. Surfaces are white-on-`#FAFAFA`: the page canvas is subtle grey, cards are pure white with a `#E4E4E8` hairline. **Cards carry a border, not a shadow.** Shadow means "floating" — dropdowns, modals, the builder toolbar — and it is never spent on a static grid tile.

Everything is consumed through semantic tokens (`--color-surface-default`, `--color-text-secondary`, `--color-action-primary`). Reach for a ramp step directly only when you are defining a new semantic token.

## Dark mode

Re-authored, not inverted. Canvas `#0B0B0D`, surfaces climb `#131316 → #17171B → #1C1C21` with elevation, and **borders do the hierarchy work** because shadows are nearly invisible at that value; each dark surface also gets a `rgba(255,255,255,.06)` top hairline. Hover and active states become white overlays (`4.5%`, `7.5%`) rather than lighter greys, so they compose over any surface. Nar lifts to `--nar-550 #E9284A` for AA, chart series lift one step each, and the builder canvas drops to `#08080A` so nodes float clearly. It is tuned for someone reading tables for eight hours, not for a screenshot.

## Type

**Geist** for everything, **Geist Mono** for anything a developer copies. No display face — marketing headlines are Geist 600 at `-0.028em`, which is enough voice for a technical product. Geist's tall x-height and narrow apertures are what make 13px table rows legible at density.

The scale runs `display-xl 60` → `caption 12`, and product UI lives almost entirely in `body-md 14/22`, `label-md 14/500`, `body-sm 13/20` and `caption 12/16`. Nothing in the dashboard goes below 12px. Negative tracking scales with size (−0.03em at display, −0.003em at body, +0.09em on overline).

**Tabular numerals are mandatory** in every table column, metric, timestamp, latency and quota. Misaligned digits are the fastest way to make a data product feel amateur.

## Shape, depth, texture

Radii are restrained: controls and inputs **8px**, cards **10px**, panels and modals **14px**, badges **6px**, pills and avatars only for genuinely pill-shaped things. Nothing in product UI is rounder than 10px — NarTalk should read as an instrument.

**No gradients. No textures. No background images. No glassmorphism.** The only translucency in the system is functional: the modal scrim (`rgba(11,11,13,.44)`), dark-mode hover overlays, and 16%-opacity tints behind node chips and status badges. Blur exists as one token (`--color-scrim-blur`) and is used on the mobile sheet backdrop only.

Elevation is five levels — `0 flat · 1 card · 2 toolbar · 3 dropdown/popover · 4 modal/palette` — and each level is a specific combination of a hairline ring and a soft cast shadow, not a blur radius chosen by eye.

## Interaction

| State | Treatment |
| --- | --- |
| Hover, filled button | One ramp step darker (600 → 700) |
| Hover, quiet control | Neutral wash — `--color-surface-hover`; dark mode, a white overlay |
| Hover, card | Border strengthens and picks up level-2. Never lifts or scales |
| Active / press | One further step darker. **No scale transforms anywhere** — a dashboard that bounces feels flimsy |
| Focus | 2px azure ring at 2px offset (`--shadow-focus`), on every interactive element, always visible. Errors get a Brick ring |
| Selected row | `--color-surface-selected` azure tint plus a checkbox — never colour alone |
| Selected node | 2px azure ring, never a fill change |
| Disabled | Flat grey fill, grey label, `cursor: not-allowed`. Never opacity alone — opacity makes text fail contrast |
| Loading, button | Label swaps for a spinner, width held |
| Row actions | Appear on hover **and** on keyboard focus |

## Motion

Purposeful only: state change, feedback, hierarchy, navigation, loading, builder connections, drag. Five durations (`80 / 120 / 180 / 260 / 400ms`) and five curves (`standard`, `enter`, `exit`, `emphasis`, `spring`). Modals scale in from `.97` over 180ms `emphasis`; drawers slide 260ms `emphasis`; dropdowns fade-rise 120ms `enter`; toasts arrive on `spring`; edge connections use marching dashes only while actually connecting. `prefers-reduced-motion` collapses every duration to zero. Nothing animates for delight.

## Layout

A fixed left rail (248px, 56px collapsed) with `bg-subtle` and a hairline right border; a sticky 52px topbar; an optional 44px subnav; content capped at 1200px with 32×24 padding; a 320px right inspector in the builders. Cards sit on a 16px gap in a 12-column grid that drops to 8 at 1024px and 4 at 768px. Tables scroll inside their card with a sticky header — the page itself never scrolls horizontally.

## Imagery

There is none, and that is a decision. NarTalk shows the product: the marketing site's hero is a rendering of the actual dashboard, and the feature grid uses icons, not photography. If imagery is ever added, it should be product UI on `--color-bg-subtle`, never stock photography of people at laptops.

---

# ICONOGRAPHY

Icons are **line-based, uniform-stroke, 24px-grid, single-colour**. They label and they never decorate.

**Set: [Lucide](https://lucide.dev), loaded from CDN** — `https://unpkg.com/lucide/dist/umd/lucide.min.js`. ⚠️ **This is a substitution.** No icon assets were supplied and the site's icons could not be extracted, so Lucide was chosen as the closest match to the brief (simple, line-based, consistent stroke, dashboard-appropriate, 2000+ glyphs). If NarTalk already uses a different set, swap the CDN link and the `NT_ICONS` map — everything else is name-driven and will follow.

The `Icon` component reads geometry straight off `window.lucide.icons`, so **no SVG in this system is hand-drawn**. Do not hand-roll an SVG icon; add the Lucide name to `NT_ICONS` instead.

**Sizes:** 12 · 14 · 16 · 20 · 24 · 32. **Stroke compensates optically** — 1.6px at ≤14px, 1.75px at 16–20px, 1.9px above — because a constant 2px stroke turns to mush at 12px.

**Never used as icons:** emoji, unicode dingbats, coloured/filled illustrative glyphs, two-tone icons. Colour on an icon only ever comes from its parent's `currentColor` or a status token.

**The domain map** (`NT_ICONS` in `components/core/Icon.jsx`) is the contract — one glyph per concept, product-wide:

`bots → Bot` · `forms → ClipboardList` · `responses → Inbox` · `analytics → ChartNoAxesColumn` · `integrations → Blocks` · `api → Code2` · `webhook → Webhook` · `otp → ShieldCheck` · `notifications → Bell` · `team → Users` · `settings → Settings2` · `billing → CreditCard` · `security → Lock` · `logs → ScrollText` · `templates → LayoutTemplate` · `automation → Zap` · `logic → GitBranch` · `publish → Rocket` · `preview → Eye` · `duplicate → Copy` · `archive → Archive` · `delete → Trash2`

Data-block types have their own fixed glyphs (`NT_QUESTION_TYPES`): Mətn `Type`, Seçim `CircleDot`, Telefon `Phone`, Foto `Image`, Fayl `Paperclip`, Lokasiya `MapPin`, Tarix `Calendar`, Rəqəm `Hash`. So do the ten builder node kinds (`NT_NODES`).

**Rules.** Pass `domain` rather than `icon` to navigation components so glyphs stay canonical. Every icon-only control needs a `label` (it becomes `aria-label` + `title`). Decorative icons get `aria-hidden`. A status glyph always travels with its word — an icon alone is never the only signal.

---

# Files in this project

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/` | `fonts · colors · dark · typography · spacing · radius · shadows · layout · motion · base` |
| `styles/` | The CSS class layer: `controls · surfaces · patterns` — base classes + interaction states for every primitive |
| `components/` | React primitives, grouped by concern (below) |
| `ui_kits/` | Full-screen product recreations |
| `guidelines/` | Foundation specimen cards + the deep-dive docs below |
| `assets/` | Logo files |
| `thumbnail.html` | The homepage tile |
| `SKILL.md` | Agent-Skills wrapper so this folder works inside Claude Code |

### Deep-dive guidelines

- `guidelines/status-system.md` — the platform status vocabulary and how badges/dots/cells are built from it
- `guidelines/validation-and-errors.md` — the thirteen error scenarios, their UI and their exact copy
- `guidelines/states.md` — empty, loading, error and permission states
- `guidelines/responsive.md` — behaviour at 1440 / 1280 / 1024 / 768 / 390
- `guidelines/accessibility.md` — contrast, focus, keyboard, screen-reader and reduced-motion rules
- `guidelines/naming-and-handoff.md` — naming convention, Figma structure & variant matrices, token → CSS mapping

## Components

Each directory has a `<Name>.jsx`, a `<Name>.d.ts` props contract, a `<Name>.prompt.md` usage note, and one `@dsCard` preview page. Related exports live in the same file (e.g. `Badge.jsx` also exports `StatusBadge`, `StatusDot`, `Tag`, `MethodBadge`).

**`components/core/`** — `Icon` · `Button` · `Badge` · `Avatar` · `Card` · `Skeleton`
Also exported: `IconButton`, `SplitButton`, `ButtonGroup`, `StatusBadge`, `StatusDot`, `Tag`, `MethodBadge`, `AvatarGroup`, `CardHeader`, `CardBody`, `CardFooter`, `StatCard`, `Panel`, `Spinner`, `SkeletonText`, `SkeletonTable`, `SkeletonCard`, `NT_ICONS`, `NT_STATUS`.

**`components/forms/`** — `Field` · `Input` · `Checkbox` · `Select` · `OtpInput` · `FileUpload`
Also exported: `FieldRow`, `Textarea`, `NumberInput`, `PasswordInput`, `SearchInput`, `UrlInput`, `PhoneInput`, `Radio`, `RadioGroup`, `Switch`, `SegmentedControl`, `Combobox`, `MultiSelect`, `CodeInput`, `FileRow`, `TagInput`, `KeyValueInput`.

**`components/navigation/`** — `Sidebar` · `Topbar`
Also exported: `SidebarSection`, `SidebarItem`, `WorkspaceSwitcher`, `AccountMenu`, `MobileTabBar`, `Breadcrumb`, `Tabs`, `VerticalTabs`, `Pagination`, `Stepper`.

**`components/data/`** — `Table` · `ProgressBar` · `EmptyState` · `Timeline` · `ChartContainer`
Also exported: `TableToolbar`, `TableFooter`, `StatusCell`, `IdentityCell`, `CircularProgress`, `UsageMeter`, `RateLimitIndicator`, `NT_EMPTY`, `ErrorState`, `ActivityFeed`, `KeyValueList`, `ChartLegend`, `BarChart`, `Sparkline`, `DonutChart`.

**`components/feedback/`** — `Alert`
Also exported: `Banner`, `Toast`, `ToastStack`, `Tooltip`, `AiProgress`, `NT_AI_STEPS`.

**`components/overlays/`** — `Modal` · `Menu`
Also exported: `ConfirmDialog`, `Drawer`, `BottomSheet`, `DropdownMenu`, `Popover`, `CommandPalette`.

**`components/builder/`** — `FlowNode` · `BuilderCanvas` · `QuestionBlock` · `LogicBuilder`
Also exported: `NT_NODES`, `NodePalette`, `Edge`, `EdgeDefs`, `NodeStatusBadge`, `CanvasToolbar`, `ToolbarDivider`, `ZoomControls`, `MiniMap`, `NodeInspector`, `PublishBar`, `NT_QUESTION_TYPES`, `QuestionTypePicker`, `OptionsEditor`, `SectionDivider`, `LogicKeyword`, `NT_OPERATORS`, `NT_LOGIC_ACTIONS`, `ConditionRow`, `LogicGroup`, `ActionRow`.

**`components/developer/`** — `CodeBlock` · `ApiKeyCard` · `WebhookLog` · `PermissionMatrix` · `FilterBuilder`
Also exported: `CodeTabs`, `EndpointBlock`, `CopyButton`, `InlineCode`, `SignatureInfo`, `SecretField`, `EnvironmentSelector`, `TestModeBanner`, `OtpConfigCard`, `DeliveryRow`, `EventTypeList`, `RequestExample`, `NT_ROLES`, `RoleSelector`, `MemberRow`, `AccessDenied`, `FilterChip`, `SavedFilters`, `ColumnManager`, `ExportProgress`.

### Intentional additions

The brief specifies the inventory; a few pieces were added because the system needs them to be self-consistent:

- **`Icon`** — a wrapper over the Lucide glyph set, so no SVG is ever hand-drawn and the domain→glyph map has one home.
- **`Panel`** and **`FieldRow`** — layout scaffolding the page templates needed repeatedly.
- **`NT_*` constant maps** (`NT_ICONS`, `NT_STATUS`, `NT_EMPTY`, `NT_NODES`, `NT_QUESTION_TYPES`, `NT_OPERATORS`, `NT_LOGIC_ACTIONS`, `NT_ROLES`, `NT_AI_STEPS`) — the brief asks for a unified status/copy language; these make it code rather than documentation.

## UI kits

- `ui_kits/website/` — recreation of the nartalk.com marketing page, from the live copy
- `ui_kits/dashboard/` — Overview, Bots list, Responses table + response drawer
- `ui_kits/builder/` — Bot builder canvas, Form builder, Logic builder
- `ui_kits/developer/` — API keys, Webhooks, OTP, Team & permissions

---

# Open questions for the NarTalk team

1. **The real palette.** Only `#EF2E4C` is measured. Please share the compiled `styles.css`, the Tailwind config, or the Figma file so the neutral, azure and semantic ramps can be reconciled against what already ships.
2. **The real type stack.** Geist / Geist Mono is an informed choice, not a confirmed one, and it is loaded from Google Fonts rather than self-hosted — no font binaries were available to copy in. If the site uses something else (Inter is the other likely candidate), say so and this system will follow.
3. **The real icon set.** Lucide is a substitution (see Iconography). Swap the CDN and `NT_ICONS` if you already standardised on something else.
4. **A wordmark file.** The lockup currently sets "NarTalk" in Geist 600. If a drawn wordmark exists, it should replace that.
5. **English/Russian localisation.** All copy here is Azerbaijani. If the product ships other locales, the status vocabulary and empty-state copy need parallel tables.
