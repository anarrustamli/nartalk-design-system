# UI kit — Developer tools & workspace

The four screens that make NarTalk credible to a developer, plus team administration. Same `AppShell` as the dashboard kit.

## Screens (all in `DevScreens.jsx`)

| Export | Screen |
| --- | --- |
| `ApiKeys` | Environment switch, test-mode banner, three key cards (live / test / revoked) with masked secrets and scopes, the endpoint list, a three-language quick start, usage meters with the 95% warning, and a request/response example |
| `Webhooks` | The "endpoint auto-disabled" error alert, the delivery log across all four webhook states with retry actions, endpoint config with a signature secret, per-event switches, and the HMAC verification snippet |
| `Otp` | Four OTP metrics, the config card with the Telegram message template, the user-facing OTP entry preview with a live expiry caption, volume chart, and the failed-verification log |
| `Team` | Members with inline role selectors and a pending invitation, the full four-group permission matrix across five roles, the audit-log feed, and the invite modal |

## What is interactive

- Sidebar routes between API açarları / Webhook-lar / OTP / Komanda; any other nav item jumps to the dashboard kit
- **API keys:** test ↔ live switch (the test banner appears and disappears), reveal/hide and copy on every secret, language tabs on the quick start, and "Ləğv et" opens the type-to-confirm destructive dialog
- **Webhooks:** retry buttons on failing deliveries, per-event switches
- **Team:** tab switch between members / matrix / audit log, inline role selectors, and "Üzv dəvət et" opens the invite modal
- Light / dark toggle and sidebar collapse

## Notes

Endpoint paths, scope names and event names (`response.created`, `otp.verified`, `bot.error`) are plausible extrapolations of the brief — they are not documented on the public site. Treat them as a naming *proposal* to confirm with the NarTalk team, not as an existing contract.
