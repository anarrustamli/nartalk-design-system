# UI kit — Bot builder, form builder, logic builder

The three authoring surfaces, inside the real app shell (rail collapsed by default, because a builder wants the width).

## Screens

| File | Screen |
| --- | --- |
| `BotBuilder.jsx` | The flow canvas: node palette, dotted work surface, seven connected nodes across six kinds, a labelled condition branch with an animated edge, floating toolbar, minimap, zoom, and a 320px `NodeInspector` whose fields change per node kind |
| `FormBuilder.jsx` | Four panes behind one segmented control — **Qur** (question blocks, sections, page break, hidden field), **Ön baxış** (desktop/mobile form render), **Məntiq** (two logic rules, one valid with a plain-language summary, one showing the circular-rule error), **Paylaş** (link, Telegram, QR, iframe embed, access switches) |

The shell comes from `../dashboard/Shell.jsx` — the same `AppShell`, not a copy.

## What is interactive

- Bot / form builder toggle in the topbar
- **Bot builder:** click any node to select it; the inspector retitles and swaps its fields (OTP node → template/length/expiry/retries; question node → type/required/variable; webhook node → URL/method/signature with two live validation errors). Zoom −/+/fit actually scales the canvas. Toolbar tools toggle
- The webhook node is deliberately left `invalid` so the Brick ring, the header warning glyph and the inspector's error block are all visible in one screen
- **Form builder:** pane switch, question selection drives the inspector, desktop/mobile preview toggle, choice options are editable, "AI ilə qur" reveals the narrated `AiProgress`
- **Məntiq** pane shows both logic states side by side — a valid rule with its summary and an invalid rule with the circular-dependency error
- Light / dark toggle and sidebar collapse

## Notes

Node positions and edges are static data — this is a visual recreation, not a graph engine. Dragging, connecting and node creation are intentionally not wired; the point is that every state a real canvas needs (selected, invalid, animated branch, draft/published badge) is rendered from system components.
