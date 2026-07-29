const { Card, Table, TableToolbar, TableFooter, StatusCell, IdentityCell, Input, Button, IconButton, Badge,
        SegmentedControl, Pagination, Popover, FilterBuilder, FilterChip, SavedFilters, ColumnManager,
        DropdownMenu, Drawer, KeyValueList, StatusBadge, Timeline, EmptyState, CodeBlock, Tabs, Avatar } = window.NarTalkDesignSystem_3e1107;

const ROWS = [
  { id: 1284, name: "Aysel Məmmədova", u: "@aysel_m", bot: "@muraciet_bot", src: "Telegram", s: "submission.new", at: "29 İyul 14:02" },
  { id: 1283, name: "Rəşad Quliyev", u: "@rashadq", bot: "@muraciet_bot", src: "Telegram", s: "submission.in_progress", at: "29 İyul 13:48" },
  { id: 1282, name: null, u: "Web link", bot: "@sifaris_bot", src: "Web link", s: "submission.completed", at: "29 İyul 13:31" },
  { id: 1281, name: "Nigar Əliyeva", u: "@nigar_a", bot: "@muraciet_bot", src: "Telegram", s: "submission.completed", at: "29 İyul 12:57" },
  { id: 1280, name: "Tural Həsənov", u: "@turalh", bot: "@sifaris_bot", src: "Telegram", s: "submission.rejected", at: "29 İyul 11:20" },
  { id: 1279, name: "Leyla Səfərova", u: "@leylas", bot: "@muraciet_bot", src: "Telegram", s: "submission.reviewed", at: "29 İyul 10:04" },
  { id: 1278, name: null, u: "Web link", bot: "@sifaris_bot", src: "Web link", s: "submission.completed", at: "28 İyul 18:42" },
  { id: 1277, name: "Kamran Abbasov", u: "@kamrana", bot: "@muraciet_bot", src: "Telegram", s: "submission.completed", at: "28 İyul 17:11" },
];

const PAYLOAD = `{
  "id": "resp_9f21c8",
  "bot": "@muraciet_bot",
  "source": "telegram",
  "telegram_user_id": 482913,
  "answers": {
    "ad_soyad": "Aysel Məmmədova",
    "telefon": "+994 50 123 45 67",
    "unvan": "Bakı, Nizami küç. 12",
    "sened": "sened.pdf"
  },
  "created_at": "2026-07-29T14:02:11Z"
}`;

function ResponseDrawer({ row, onClose }) {
  const [tab, setTab] = React.useState("answers");
  if (!row) return null;
  return (
    <Drawer width={640} title={"Cavab #" + row.id} subtitle={(row.name || "Anonim") + " · " + row.at} onClose={onClose}
      actions={<><IconButton icon="ArrowUp" label="Əvvəlki" size="sm" /><IconButton icon="ArrowDown" label="Növbəti" size="sm" /><IconButton icon="Download" label="İxrac" size="sm" /></>}
      footer={<>
        <Button size="sm" variant="secondary" icon="Eye">Baxıldı kimi işarələ</Button>
        <Button size="sm" variant="primary" icon="Check">Tamamlandı</Button>
        <div style={{ flex: 1 }} />
        <Button size="sm" variant="destructive-outline" icon="Trash2">Sil</Button>
      </>}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
        <StatusBadge status={row.s} />
        <Badge tone="neutral" size="md" icon={row.src === "Telegram" ? "Send" : "Link"}>{row.src}</Badge>
        <Badge tone="neutral" size="md" mono>{row.bot}</Badge>
      </div>
      <Tabs value={tab} onChange={setTab} items={[{ value: "answers", label: "Cavablar" }, { value: "identity", label: "Respondent" }, { value: "timeline", label: "Tarixçə" }, { value: "payload", label: "Payload" }]} />
      {tab === "answers" ? (
        <KeyValueList layout="rows" items={[
          { label: "1. Ad və soyad", value: row.name || "—" },
          { label: "2. Əlaqə nömrəsi", value: "+994 50 123 45 67", mono: true },
          { label: "3. Ünvan", value: "Bakı, Nizami küç. 12" },
          { label: "4. Sənəd", value: <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-text-link)" }}>sened.pdf</span> },
          { label: "5. Əlavə qeyd", value: "Zəhmət olmasa səhər saatlarında zəng edin." },
        ]} />
      ) : tab === "identity" ? (
        <KeyValueList layout="rows" items={[
          { label: "Telegram istifadəçi", value: row.u, mono: true },
          { label: "Telegram ID", value: "482913", mono: true },
          { label: "Dil", value: "az-AZ" },
          { label: "İlk əlaqə", value: "12 May 2026" },
          { label: "Ümumi cavab", value: "3" },
        ]} />
      ) : tab === "timeline" ? (
        <Timeline items={[
          { title: "Forma açıldı", time: "14:01:38", tone: "neutral", icon: "Eye" },
          { title: "Cavab göndərildi", time: "14:02:11", tone: "success" },
          { title: "Webhook çatdırıldı", description: "200 · crm.acme.az/hooks/nartalk", time: "14:02:11", tone: "success", meta: <Badge tone="neutral" size="sm" mono>142ms</Badge> },
          { title: "Bildiriş göndərildi", description: "Telegram · @aysel_m", time: "14:02:12", tone: "info", icon: "Bell" },
        ]} />
      ) : (
        <CodeBlock code={PAYLOAD} lang="json" filename="resp_9f21c8.json" lineNumbers maxHeight={320} />
      )}
    </Drawer>
  );
}

function Responses({ open, onOpen, onClose }) {
  const [sel, setSel] = React.useState([]);
  const [density, setDensity] = React.useState("default");
  const [view, setView] = React.useState("all");
  const [filters, setFilters] = React.useState([{ field: "status", operator: "eq", value: "Yeni" }]);
  const [page, setPage] = React.useState(1);
  const fields = [{ value: "status", label: "Status" }, { value: "bot", label: "Bot" }, { value: "src", label: "Mənbə" }, { value: "at", label: "Tarix" }];
  return (
    <>
      <PageHead title="Cavablar" subtitle="Bütün botlardan toplanan cavablar.">
        <Button size="sm" variant="secondary" icon="Download">CSV ixrac</Button>
        <Button size="sm" variant="primary" icon="Share2">Formu paylaş</Button>
      </PageHead>

      <SavedFilters value={view} onSelect={setView} onSave={() => {}}
        items={[{ value: "all", label: "Hamısı", count: "1,284" }, { value: "new", label: "Yeni", count: 42 }, { value: "todo", label: "Baxılmalı", count: 17 }, { value: "rejected", label: "Rədd edilən", count: 8 }]} />

      <Card>
        <TableToolbar selectedCount={sel.length}
          bulk={<>
            <Button size="sm" variant="secondary" icon="Eye">Baxıldı</Button>
            <Button size="sm" variant="secondary" icon="Download">İxrac</Button>
            <Button size="sm" variant="destructive-outline" icon="Trash2">Sil</Button>
          </>}
          right={<>
            <Popover align="end" width={520} title="Süzgəclər" trigger={<Button size="sm" variant="secondary" icon="ListFilter">Süzgəc{filters.length ? " · " + filters.length : ""}</Button>}>
              <FilterBuilder rows={filters} fields={fields}
                onChange={(i, patch) => setFilters(filters.map((r, x) => x === i ? { ...r, ...patch } : r))}
                onAdd={() => setFilters([...filters, {}])}
                onRemove={(i) => setFilters(filters.filter((_, x) => x !== i))}
                onApply={() => {}} onClear={() => setFilters([])} />
            </Popover>
            <Popover align="end" width={240} title="Sütunlar" trigger={<IconButton icon="Columns3" label="Sütunlar" size="sm" variant="bordered" />}>
              <ColumnManager onReset={() => {}} columns={[{ key: "who", label: "Respondent" }, { key: "bot", label: "Bot" }, { key: "src", label: "Mənbə" }, { key: "s", label: "Status" }, { key: "at", label: "Tarix" }, { key: "id", label: "ID", visible: false }]} />
            </Popover>
            <SegmentedControl value={density} onChange={setDensity}
              options={[{ value: "compact", icon: "Rows3" }, { value: "default", icon: "Table" }, { value: "comfortable", icon: "Layers" }]} />
          </>}>
          <Input size="sm" icon="Search" clearable placeholder="Cavablarda axtar…" wrapStyle={{ width: 230 }} />
          {filters.filter(f => f.field).map((f, i) => (
            <FilterChip key={i} field={(fields.find(x => x.value === f.field) || {}).label} operator="bərabərdir" value={f.value}
              onRemove={() => setFilters(filters.filter((_, x) => x !== i))} />
          ))}
        </TableToolbar>

        <Table density={density} selectable selected={sel} onSelect={setSel} sort={{ key: "at", dir: "desc" }}
          onRowClick={onOpen} getRowId={(r) => r.id}
          columns={[
            { key: "who", label: "Respondent", render: (r) => <IdentityCell name={r.name || undefined} secondary={r.u} anonymous={!r.name} /> },
            { key: "bot", label: "Bot", width: 160, mono: true, muted: true },
            { key: "src", label: "Mənbə", width: 110, render: (r) => <Badge tone="neutral" size="sm" icon={r.src === "Telegram" ? "Send" : "Link"}>{r.src}</Badge> },
            { key: "s", label: "Status", width: 150, render: (r) => <StatusCell status={r.s} /> },
            { key: "at", label: "Tarix", width: 140, align: "right", mono: true, muted: true, sortable: true },
          ]}
          rows={ROWS}
          rowActions={(r) => <>
            <IconButton icon="Eye" label="Bax" size="sm" onClick={() => onOpen(r)} />
            <DropdownMenu trigger={<IconButton icon="Ellipsis" label="Menyu" size="sm" />}
              items={[{ label: "Baxıldı kimi işarələ", icon: "Eye" }, { label: "Payload kopyala", icon: "Braces" }, { type: "separator" }, { label: "Sil", icon: "Trash2", danger: true }]} />
          </>} />

        <TableFooter right={<Pagination page={page} pages={52} onChange={setPage} />}>
          {sel.length ? sel.length + " seçildi · " : ""}1–8 / 1,284 cavab
        </TableFooter>
      </Card>

      <ResponseDrawer row={open} onClose={onClose} />
    </>
  );
}

Object.assign(window, { Responses, ResponseDrawer, ROWS });
