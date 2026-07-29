# UI kit — NarTalk dashboard

A clickable recreation of the NarTalk product dashboard, composed entirely from the design-system primitives. Nothing here re-implements a component.

## Screens

| File | Screen |
| --- | --- |
| `Shell.jsx` | `AppShell` — the rail, sticky topbar, breadcrumb, dark-mode and collapse controls, plus `PageHead` |
| `Overview.jsx` | Dashboard overview: four stat cards with sparklines, volume bar chart, source donut, plan usage meters, recent responses, system timeline |
| `BotsList.jsx` | Bots list as metric cards (status, counts, trend, last response) plus the templates strip |
| `Responses.jsx` | The responses table — saved views, filter popover + chips, column manager, three densities, bulk actions, pagination — and the 640px response drawer with Answers / Respondent / Timeline / Payload tabs |

## What is interactive

- Sidebar navigation between Overview, Botlarım, Formalar, Cavablar, Billing
- Sidebar collapse (248 ↔ 56px)
- Light / dark toggle in the topbar — flips `class="dark"` on `<html>`
- **⌘K / Ctrl-K** opens the command palette; its navigation entries actually route
- Responses: row selection (toolbar switches to the azure bulk bar), density switch, filter popover, column manager, pagination, and clicking any row opens the detail drawer with working tabs
- Billing renders `AccessDenied` to show the permission state in situ
- Bots list "Qur" / card click jumps to the builder kit

## Notes

Data is fabricated but shaped like the real thing — the names, bot handles, counts (1,284 responses, 148 this week, 326 users, 5 questions) and the "Aysel Məmmədova · 2 dəqiqə əvvəl" line are lifted from the dashboard preview on nartalk.com so the density is honest.
