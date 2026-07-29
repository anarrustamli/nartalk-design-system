const { BuilderCanvas, CanvasToolbar, ToolbarDivider, MiniMap, ZoomControls, FlowNode, Edge, EdgeDefs,
        NodeStatusBadge, NodePalette, PublishBar, NodeInspector, Field, Input, Textarea, Select, Switch,
        SegmentedControl, Button, IconButton, Badge, Alert, OptionsEditor, Tooltip, NT_NODES } = window.NarTalkDesignSystem_3e1107;

const NODES = [
  { id: "n1", kind: "start", title: "Bot başlayır", x: 260, y: 40, handles: ["b"], badge: "published" },
  { id: "n2", kind: "message", title: "Xoş gəldiniz mesajı", x: 260, y: 168, summary: "Salam! Müraciətinizi qeyd etmək üçün bir neçə sual verəcəyəm.", handles: ["t", "b"] },
  { id: "n3", kind: "question", title: "Ad və soyad", x: 260, y: 320, summary: "Mətn · məcburi", handles: ["t", "b"] },
  { id: "n4", kind: "otp", title: "Nömrəni təsdiqlə", x: 260, y: 452, summary: "6 rəqəm · 5 dəqiqə", handles: ["t", "b"] },
  { id: "n5", kind: "condition", title: "Şəhər = Bakı", x: 260, y: 584, handles: ["t", "b", "r"] },
  { id: "n6", kind: "webhook", title: "CRM-ə göndər", x: 560, y: 584, summary: "POST crm.acme.az/hooks", handles: ["l", "b"], invalid: true, badge: "invalid" },
  { id: "n7", kind: "end", title: "Təşəkkür edirik", x: 260, y: 716, handles: ["t"] },
];

const EDGES = [
  ["n1", "n2"], ["n2", "n3"], ["n3", "n4"], ["n4", "n5"], ["n5", "n7"],
];

const NW = 220, NH = 64;
const center = (n) => ({ x: n.x + NW / 2 });
const byId = (id) => NODES.find((n) => n.id === id);

function BotBuilder() {
  const [sel, setSel] = React.useState("n4");
  const [zoom, setZoom] = React.useState(90);
  const [tab, setTab] = React.useState("content");
  const [tool, setTool] = React.useState("select");
  const node = byId(sel) || NODES[0];
  const meta = NT_NODES[node.kind];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
      <PublishBar state="published" changes={3} savedAt="14:02" onPreview={() => {}} onPublish={() => {}} />
      <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
        <div style={{ width: 168, flex: "0 0 auto", padding: "var(--space-3)", borderRight: "1px solid var(--color-border-default)", background: "var(--color-bg-subtle)", overflow: "auto" }} data-nt-scroll>
          <NodePalette />
        </div>

        <BuilderCanvas zoom={zoom} onZoom={setZoom} onFit={() => setZoom(100)}
          minimap={<MiniMap scale={.13} nodes={NODES.map((n) => ({ x: n.x - 200, y: n.y, token: NT_NODES[n.kind].token }))} viewport={{ x: 20, y: 0, w: 700, h: 620 }} />}
          toolbar={<CanvasToolbar>
            <Tooltip label="Seç" shortcut="V"><IconButton icon="MousePointer2" label="Seç" size="sm" active={tool === "select"} onClick={() => setTool("select")} /></Tooltip>
            <Tooltip label="Sürüşdür" shortcut="H"><IconButton icon="Move" label="Sürüşdür" size="sm" active={tool === "pan"} onClick={() => setTool("pan")} /></Tooltip>
            <Tooltip label="Bağlantı çək" shortcut="C"><IconButton icon="GitFork" label="Bağlantı" size="sm" active={tool === "link"} onClick={() => setTool("link")} /></Tooltip>
            <ToolbarDivider />
            <IconButton icon="Undo2" label="Geri" size="sm" />
            <IconButton icon="Redo2" label="İrəli" size="sm" />
            <ToolbarDivider />
            <IconButton icon="Grid2x2" label="Tora bağla" size="sm" active />
            <IconButton icon="Maximize2" label="Ekrana sığdır" size="sm" onClick={() => setZoom(100)} />
          </CanvasToolbar>}>
          <div style={{ position: "absolute", inset: 0, transform: "scale(" + zoom / 100 + ")", transformOrigin: "top left" }}>
            <svg style={{ position: "absolute", inset: 0, width: 1200, height: 900, pointerEvents: "none", overflow: "visible" }}>
              <EdgeDefs />
              {EDGES.map(([a, b], i) => {
                const A = byId(a), B = byId(b);
                return <Edge key={i} from={{ x: center(A).x, y: A.y + NH }} to={{ x: center(B).x, y: B.y - 6 }} />;
              })}
              <Edge from={{ x: byId("n5").x + NW, y: byId("n5").y + 34 }} to={{ x: byId("n6").x - 6, y: byId("n6").y + 34 }} label="Bəli" active animated />
            </svg>
            {NODES.map((n) => (
              <div key={n.id} style={{ position: "absolute", left: n.x, top: n.y }} onClick={() => setSel(n.id)}>
                <FlowNode kind={n.kind} title={n.title} summary={n.summary} handles={n.handles} width={NW}
                  selected={sel === n.id} invalid={n.invalid}
                  badge={n.badge ? <NodeStatusBadge state={n.badge} /> : null} />
              </div>
            ))}
          </div>
        </BuilderCanvas>

        <NodeInspector title={node.title} subtitle={meta.label + " bloku"} onClose={() => {}}
          tabs={[{ value: "content", label: "Məzmun" }, { value: "logic", label: "Məntiq" }, { value: "advanced", label: "Ətraflı" }]}
          activeTab={tab} onTab={setTab}
          errors={node.invalid ? ["Endpoint URL boşdur. Webhook ünvanını əlavə edin.", "İmza açarı seçilməyib."] : []}
          footer={<><Button size="sm" variant="secondary">Sıfırla</Button><Button size="sm" variant="primary">Tətbiq et</Button></>}>
          {tab === "content" ? (
            node.kind === "otp" ? (
              <>
                <Field label="Mesaj şablonu" hint="{{code}} avtomatik əvəzlənir">
                  <Textarea rows={3} defaultValue="NarTalk təsdiq kodunuz: {{code}}. Kod 5 dəqiqə etibarlıdır." />
                </Field>
                <Field label="Kod uzunluğu"><Select value="6" options={[{ value: "4", label: "4 rəqəm" }, { value: "6", label: "6 rəqəm" }]} /></Field>
                <Field label="Kodun müddəti"><Select value="5" options={[{ value: "3", label: "3 dəqiqə" }, { value: "5", label: "5 dəqiqə" }, { value: "10", label: "10 dəqiqə" }]} /></Field>
                <Field label="Maksimum cəhd"><Select value="3" options={[{ value: "1", label: "1" }, { value: "3", label: "3" }, { value: "5", label: "5" }]} /></Field>
                <Switch checked label="Uğursuz cəhdi qeyd et" description="Hər səhv kod audit log-a yazılır" />
              </>
            ) : node.kind === "question" ? (
              <>
                <Field label="Sual mətni" required><Input defaultValue={node.title} /></Field>
                <Field label="Sual tipi"><Select value="text" options={[{ value: "text", label: "Mətn", icon: "Type" }, { value: "phone", label: "Telefon", icon: "Phone" }, { value: "choice", label: "Seçim", icon: "CircleDot" }]} /></Field>
                <Field label="Köməkçi mətn" optional><Input placeholder="Pasportdakı kimi yazın" /></Field>
                <Switch checked label="Məcburi sual" />
                <Switch label="Cavabı dəyişənə yaz" description="Sonrakı bloklarda istifadə etmək üçün" />
              </>
            ) : node.kind === "webhook" ? (
              <>
                <Field label="Endpoint URL" required error="Endpoint URL boşdur. Webhook ünvanını əlavə edin."><Input mono invalid prefixText="https://" placeholder="crm.acme.az/hooks/nartalk" /></Field>
                <Field label="Metod"><Select value="POST" options={[{ value: "POST", label: "POST" }, { value: "PUT", label: "PUT" }]} /></Field>
                <Field label="İmza açarı" required error="İmza açarı seçilməyib."><Select invalid placeholder="Açar seçin" options={[{ value: "k1", label: "Production backend" }]} /></Field>
                <Switch checked label="Uğursuzluqda yenidən cəhd et" description="3 dəfə, artan intervalla" />
              </>
            ) : (
              <>
                <Field label="Mətn" required><Textarea rows={4} defaultValue={node.summary || node.title} /></Field>
                <Switch checked label="Markdown formatı" />
              </>
            )
          ) : tab === "logic" ? (
            <Alert tone="info" title="Bu blokda şərt yoxdur">Şərt əlavə etmək üçün Məntiq qurucusundan istifadə edin.</Alert>
          ) : (
            <>
              <Field label="Blok ID" hint="API və webhook payload-larında istifadə olunur"><Input mono readOnly defaultValue={node.id} /></Field>
              <Field label="Gözləmə müddəti" optional><Input suffixText="san" defaultValue="0" /></Field>
            </>
          )}
        </NodeInspector>
      </div>
    </div>
  );
}

Object.assign(window, { BotBuilder });
