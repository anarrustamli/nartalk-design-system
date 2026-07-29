const { QuestionBlock, QuestionTypePicker, OptionsEditor, SectionDivider, LogicBuilder, PublishBar,
        NodeInspector, Card, CardHeader, CardBody, Field, Input, Textarea, Switch, Select, SegmentedControl,
        Button, IconButton, Badge, Alert, AiProgress, Panel, Tabs, EmptyState, CodeBlock, Tooltip } = window.NarTalkDesignSystem_3e1107;

const QS = [
  { i: 1, title: "Ad və soyad", type: "text", required: true },
  { i: 2, title: "Əlaqə nömrəsi", type: "phone", required: true },
  { i: 3, title: "Şəhər", type: "choice", required: true, summary: "4 variant" },
  { i: 4, title: "Ünvan", type: "location", hasLogic: true, summary: "1 şərt" },
  { i: 5, title: "Sənəd", type: "file" },
  { i: 6, title: "Mənbə", type: "hidden", hidden: true, summary: "utm_source" },
];

function FormPreview({ device }) {
  const w = device === "mobile" ? 300 : 460;
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-4)" }}>
      <div style={{ width: w, background: "var(--color-surface-default)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-panel)", boxShadow: "var(--shadow-level-2)", overflow: "hidden" }}>
        <div style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border-subtle)", background: "var(--color-surface-subtle)" }}>
          <div style={{ font: "var(--fw-semibold) var(--type-h4-size)/1.3 var(--font-sans)", letterSpacing: "var(--type-h4-ls)" }}>Müştəri müraciəti</div>
          <div style={{ marginTop: "var(--space-1)", font: "400 var(--type-body-sm-size)/1.5 var(--font-sans)", color: "var(--color-text-secondary)" }}>Müraciətinizi qeyd edin — 24 saat içində cavab verəcəyik.</div>
        </div>
        <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <Field label="Ad və soyad" required><Input placeholder="Aysel Məmmədova" /></Field>
          <Field label="Əlaqə nömrəsi" required hint="Təsdiq kodu bu nömrəyə göndəriləcək"><Input prefixText="+994" mono placeholder="50 123 45 67" /></Field>
          <Field label="Şəhər" required><Select placeholder="Seçin" options={[{ value: "baku", label: "Bakı" }, { value: "ganja", label: "Gəncə" }]} /></Field>
          <Button variant="primary" block>Göndər</Button>
          <div style={{ textAlign: "center", font: "400 var(--type-caption-size)/1 var(--font-sans)", color: "var(--color-text-muted)" }}>NarTalk ilə hazırlanıb</div>
        </div>
      </div>
    </div>
  );
}

function FormBuilder() {
  const [sel, setSel] = React.useState(3);
  const [pane, setPane] = React.useState("build");
  const [device, setDevice] = React.useState("desktop");
  const [tab, setTab] = React.useState("content");
  const [opts, setOpts] = React.useState(["Bakı", "Gəncə", "Sumqayıt", "Digər"]);
  const [ai, setAi] = React.useState(false);
  const q = QS.find((x) => x.i === sel) || QS[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
      <PublishBar state="draft" changes={2} savedAt="14:06" />
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "var(--space-2) var(--layout-page-pad-x)", borderBottom: "1px solid var(--color-border-default)", background: "var(--color-surface-default)" }}>
        <SegmentedControl value={pane} onChange={setPane} options={[{ value: "build", label: "Qur", icon: "Layers" }, { value: "preview", label: "Ön baxış", icon: "Eye" }, { value: "logic", label: "Məntiq", icon: "GitBranch" }, { value: "share", label: "Paylaş", icon: "Share2" }]} />
        <div style={{ flex: 1 }} />
        {pane === "preview" ? <SegmentedControl value={device} onChange={setDevice} options={[{ value: "desktop", icon: "Monitor" }, { value: "mobile", icon: "Smartphone" }]} /> : null}
        <Button size="sm" variant="secondary" icon="WandSparkles" onClick={() => setAi(!ai)}>AI ilə qur</Button>
      </div>

      <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
        <div style={{ flex: 1, minWidth: 0, overflow: "auto", background: "var(--color-bg-canvas)" }} data-nt-scroll>
          {pane === "preview" ? <FormPreview device={device} /> : pane === "share" ? (
            <div style={{ maxWidth: 620, margin: "0 auto", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
              <Card><CardHeader title="Paylaşma linki" description="Bu linki olan hər kəs formaya cavab verə bilər." plain /><CardBody>
                <Input mono readOnly defaultValue="https://nartalk.com/f/muraciet-2026" iconAfter="Copy" />
                <div style={{ display: "flex", gap: "var(--space-2)" }}><Button size="sm" variant="secondary" icon="Send">Telegram-da paylaş</Button><Button size="sm" variant="secondary" icon="QrCode">QR kod</Button></div>
              </CardBody></Card>
              <Card><CardHeader title="Saytınıza yerləşdirin" description="iframe kodu — istənilən səhifəyə əlavə edin." plain /><CardBody>
                <CodeBlock lang="html" filename="embed.html" code={'<iframe src="https://nartalk.com/f/muraciet-2026"\n  width="100%" height="640" frameborder="0"></iframe>'} />
              </CardBody></Card>
              <Card><CardHeader title="Giriş" description="Formaya kim cavab verə bilər." plain /><CardBody>
                <Switch checked label="Hamı üçün açıq" description="Linki olan hər kəs" />
                <Switch label="Giriş kodu tələb et" description="Yalnız kodu bilənlər" />
                <Switch label="Yalnız Telegram istifadəçiləri" />
              </CardBody></Card>
            </div>
          ) : pane === "logic" ? (
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
              <LogicBuilder title="Şərt 1" conditions={[{ field: "q3", operator: "eq", value: "Bakı" }]} then={{ action: "show", target: "q4" }}
                fields={QS.map((x) => ({ value: "q" + x.i, label: x.i + ". " + x.title }))}
                targets={QS.map((x) => ({ value: "q" + x.i, label: x.i + ". " + x.title }))}
                summary="Əgər “Şəhər” = Bakı, onda “4. Ünvan” sualını göstər." onAdd={() => {}} onElseAdd={() => {}} onDelete={() => {}} />
              <LogicBuilder title="Şərt 2" join="OR" conditions={[{ field: "q3", operator: "eq", value: "Digər" }, { field: "q2", operator: "empty" }]} then={{ action: "goto", target: "q6" }}
                fields={QS.map((x) => ({ value: "q" + x.i, label: x.i + ". " + x.title }))}
                targets={QS.map((x) => ({ value: "q" + x.i, label: x.i + ". " + x.title }))}
                error="Bu qayda dövr yaradır: 6. Mənbə → 3. Şəhər → 6. Mənbə." onJoinChange={() => {}} onAdd={() => {}} />
              <Button variant="secondary" icon="Plus" style={{ alignSelf: "flex-start" }}>Qayda əlavə et</Button>
            </div>
          ) : (
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {ai ? <Card><CardBody><AiProgress active={2} /></CardBody></Card> : null}
              <Card><CardBody>
                <Field label="Forma başlığı"><Input defaultValue="Müştəri müraciəti" /></Field>
                <Field label="Təsvir" optional><Textarea rows={2} defaultValue="Müraciətinizi qeyd edin — 24 saat içində cavab verəcəyik." /></Field>
              </CardBody></Card>
              {QS.slice(0, 3).map((x) => (
                <QuestionBlock key={x.i} index={x.i} title={x.title} type={x.type} required={x.required} summary={x.summary}
                  hasLogic={x.hasLogic} hidden={x.hidden} selected={sel === x.i} onSelect={() => setSel(x.i)}
                  onRequiredChange={() => {}} onDuplicate={() => {}} onDelete={() => {}} />
              ))}
              <SectionDivider label="Ünvan məlumatları" onEdit={() => {}} />
              {QS.slice(3, 5).map((x) => (
                <QuestionBlock key={x.i} index={x.i} title={x.title} type={x.type} required={x.required} summary={x.summary}
                  hasLogic={x.hasLogic} hidden={x.hidden} selected={sel === x.i} onSelect={() => setSel(x.i)}
                  onRequiredChange={() => {}} onDuplicate={() => {}} onDelete={() => {}} />
              ))}
              <SectionDivider kind="page" label="Səhifə sonu" />
              <QuestionBlock index={6} title="Mənbə" type="hidden" hidden summary="utm_source" selected={sel === 6} onSelect={() => setSel(6)} onDelete={() => {}} />
              <Button variant="secondary" icon="Plus" style={{ alignSelf: "center", marginTop: "var(--space-2)" }}>Sual əlavə et</Button>
            </div>
          )}
        </div>

        <NodeInspector title={q.title} subtitle={"Sual " + q.i}
          tabs={[{ value: "content", label: "Məzmun" }, { value: "validation", label: "Yoxlama" }, { value: "logic", label: "Məntiq" }]}
          activeTab={tab} onTab={setTab}
          footer={<><Button size="sm" variant="secondary" icon="Copy">Dublikat</Button><Button size="sm" variant="primary">Tətbiq et</Button></>}>
          {tab === "content" ? (
            <>
              <Field label="Sual mətni" required><Input defaultValue={q.title} /></Field>
              <Field label="Sual tipi"><QuestionTypePicker value={q.type} columns={3} types={["text", "choice", "phone", "location", "file", "hidden"]} onChange={() => {}} /></Field>
              {q.type === "choice" ? <Field label="Variantlar"><OptionsEditor options={opts} onChange={setOpts} /></Field> : null}
              <Field label="Köməkçi mətn" optional><Input placeholder="İstifadəçiyə göstərilən izah" /></Field>
            </>
          ) : tab === "validation" ? (
            <>
              <Switch checked={!!q.required} label="Məcburi sual" />
              <Field label="Minimum simvol" optional><Input defaultValue="0" /></Field>
              <Field label="Maksimum simvol" optional><Input defaultValue="280" /></Field>
              <Field label="Xəta mesajı" hint="Boş buraxsanız standart mesaj göstərilir"><Input placeholder="Bu sahə boş qala bilməz." /></Field>
            </>
          ) : (
            <LogicBuilder title="Bu sualın şərti" conditions={[{ field: "q3", operator: "eq", value: "Bakı" }]} then={{ action: "show", target: "q" + q.i }}
              fields={QS.map((x) => ({ value: "q" + x.i, label: x.i + ". " + x.title }))} targets={[{ value: "q" + q.i, label: q.i + ". " + q.title }]}
              summary={"Əgər “Şəhər” = Bakı, onda bu sualı göstər."} />
          )}
        </NodeInspector>
      </div>
    </div>
  );
}

Object.assign(window, { FormBuilder, FormPreview });
