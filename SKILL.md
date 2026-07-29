---
name: nartalk-design
description: Use this skill to generate well-branded interfaces and assets for NarTalk, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **`readme.md`** — the design guide: product context, content fundamentals (Azerbaijani, formal *siz*, no emoji), visual foundations, iconography, and the full component index. Start here.
- **`styles.css`** — the single stylesheet to link. It pulls `tokens/*` (colours, type, spacing, radius, shadows, layout, motion) and `styles/*` (the `.nt-*` class layer with real hover/focus/disabled states).
- **`guidelines/*.md`** — status system, validation & error copy, empty/loading states, responsive rules, accessibility, naming & handoff.
- **`components/*/`** — React primitives, each with a `.d.ts` props contract and a `.prompt.md` usage note.
- **`ui_kits/*/`** — full clickable recreations: `website`, `dashboard`, `builder`, `developer`.
- **`assets/`** — the pomegranate mark (full, 512px, and monochrome white).

## Non-negotiables

- Brand red `#EF2E4C` is the identity colour; **interactive primary is `--color-action-primary` (`#DE1E3E`)** so white labels pass WCAG AA.
- **Destructive is Brick, never Nar.** Never place a filled primary and a filled destructive button side by side.
- Copy is Azerbaijani, formal *siz*, short declarative sentences ending in a full stop. **No emoji.**
- Status is always `StatusBadge` / `StatusCell` with a glyph and a word — never colour alone.
- Icons come from Lucide via the `Icon` component and the `NT_ICONS` map. Never hand-draw an SVG icon.
- Tabular numerals in every table column, metric and timestamp.
- Cards get a hairline border, not a shadow. Shadow means "floating".
- Never hard-code a hex; use a semantic token.
