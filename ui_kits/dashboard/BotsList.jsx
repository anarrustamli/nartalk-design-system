const { Card, CardHeader, CardBody, Button, IconButton, Badge, StatusBadge, StatusDot, Avatar, Sparkline,
        DropdownMenu, Input, SegmentedControl, EmptyState, KeyValueList, Panel } = window.NarTalkDesignSystem_3e1107;

const BOTS = [
  { name: "Müştəri müraciətləri", handle: "@muraciet_bot", status: "bot.active", responses: "1,284", week: 148, users: 326, questions: 5, last: "Aysel Məmmədova · 2 dəqiqə əvvəl", trend: [4,7,5,9,8,12,10,14,13,18,16,21] },
  { name: "Sifariş qəbulu", handle: "@sifaris_bot", status: "bot.active", responses: "472", week: 63, users: 118, questions: 7, last: "Web link · 31 dəqiqə əvvəl", trend: [2,3,3,5,4,6,7,6,9,8,11,10] },
  { name: "Vakansiya müraciəti", handle: "@karyera_bot", status: "bot.paused", responses: "96", week: 0, users: 41, questions: 9, last: "12 İyul · 3 gün əvvəl", trend: [3,4,2,5,3,4,2,1,0,0,0,0] },
  { name: "Daxili sorğu", handle: "—", status: "bot.draft", responses: "0", week: 0, users: 0, questions: 3, last: "Heç vaxt", trend: [] },
];

const MENU = [
  { label: "Ön baxış", icon: "Eye" },
  { label: "Linki kopyala", icon: "Link" },
  { label: "Dublikat", icon: "Copy", shortcut: "⌘D" },
  { type: "separator" },
  { label: "Arxivə göndər", icon: "Archive" },
  { label: "Sil", icon: "Trash2", danger: true },
];

function BotCard({ bot, onOpen }) {
  const draft = bot.status === "bot.draft";
  return (
    <Card interactive onClick={onOpen}>
      <div style={{ padding: "var(--pad-card)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2-5)" }}>
          <Avatar name={bot.name} shape="square" size="lg" icon="Bot" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: "var(--fw-semibold) var(--type-label-md-size)/1.35 var(--font-sans)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{bot.name}</div>
            <div style={{ marginTop: 2, font: "var(--type-code-inline-weight) var(--type-code-inline-size)/1.3 var(--font-mono)", color: "var(--color-text-muted)" }}>{bot.handle}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", flex: "0 0 auto" }} onClick={(e) => e.stopPropagation()}>
            <StatusBadge status={bot.status} size="sm" />
            <DropdownMenu trigger={<IconButton icon="Ellipsis" label="Menyu" size="sm" />} items={MENU} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-2)", padding: "var(--space-2-5) 0", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}>
          {[["Cavablar", bot.responses], ["Bu həftə", bot.week], ["İstifadəçi", bot.users]].map(([l, v]) => (
            <div key={l}>
              <div style={{ font: "400 var(--type-caption-size)/1 var(--font-sans)", color: "var(--color-text-muted)" }}>{l}</div>
              <div style={{ marginTop: 3, font: "var(--fw-semibold) var(--type-body-lg-size)/1 var(--font-sans)", fontVariantNumeric: "tabular-nums" }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ height: 26 }}>
          {bot.trend.length ? <Sparkline data={bot.trend} color={draft ? "var(--chart-7)" : "var(--chart-1)"} height={26} /> : null}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-2)" }}>
          <span style={{ font: "400 var(--type-caption-size)/1.3 var(--font-sans)", color: "var(--color-text-tertiary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {bot.questions} sual · {bot.last}
          </span>
          <span onClick={(e) => e.stopPropagation()}>
            <Button size="xs" variant="secondary" icon="Pencil">Qur</Button>
          </span>
        </div>
      </div>
    </Card>
  );
}

function BotsList({ onOpenBuilder }) {
  const [view, setView] = React.useState("grid");
  return (
    <>
      <PageHead title="Botlarım" subtitle="Telegram botlarınızı yaradın və idarə edin.">
        <Input size="sm" icon="Search" placeholder="Botlarda axtar…" wrapStyle={{ width: 200 }} />
        <SegmentedControl value={view} onChange={setView} options={[{ value: "grid", icon: "Grid2x2" }, { value: "list", icon: "Rows3" }]} />
        <Button size="sm" variant="primary" icon="Plus">Bot yarat</Button>
      </PageHead>
      <div style={{ display: "grid", gridTemplateColumns: view === "grid" ? "repeat(2, minmax(0,1fr))" : "1fr", gap: "var(--layout-card-gap)" }}>
        {BOTS.map((b) => <BotCard key={b.handle + b.name} bot={b} onOpen={onOpenBuilder} />)}
      </div>
      <Panel title="Şablonlar" description="Hazır axınlardan başlayın — sonra hər şeyi dəyişə bilərsiniz.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "var(--layout-card-gap)" }}>
          {[["Müraciət qəbulu", "ClipboardList", "5 sual"], ["Sifariş formu", "Receipt", "7 sual"], ["OTP təsdiqi", "ShieldCheck", "2 blok"], ["Rəy sorğusu", "Star", "4 sual"]].map(([t, i, s]) => (
            <Card key={t} interactive>
              <div style={{ padding: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2-5)" }}>
                <Avatar icon={i} shape="square" size="md" tinted={false} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ font: "var(--fw-medium) var(--type-body-sm-size)/1.3 var(--font-sans)" }}>{t}</div>
                  <div style={{ font: "400 var(--type-caption-size)/1.3 var(--font-sans)", color: "var(--color-text-muted)" }}>{s}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Panel>
    </>
  );
}

Object.assign(window, { BotsList, BOTS });
