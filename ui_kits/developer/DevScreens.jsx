const { Card, CardHeader, CardBody, CardFooter, Panel, Button, IconButton, Badge, StatusBadge, Input, Field,
        Select, Switch, Tabs, VerticalTabs, SegmentedControl, Table, TableToolbar, TableFooter, StatusCell,
        IdentityCell, EmptyState, ErrorState, Alert, Banner, KeyValueList, Timeline, ActivityFeed, UsageMeter,
        ProgressBar, CircularProgress, RateLimitIndicator, ChartContainer, BarChart, DonutChart,
        ApiKeyCard, SecretField, EnvironmentSelector, TestModeBanner, OtpConfigCard, CodeBlock, CodeTabs,
        EndpointBlock, SignatureInfo, CopyButton, InlineCode, WebhookLog, EventTypeList, RequestExample,
        PermissionMatrix, RoleSelector, MemberRow, AccessDenied, ExportProgress, Modal, ConfirmDialog,
        DropdownMenu, Avatar, AvatarGroup, OtpInput, StatusDot } = window.NarTalkDesignSystem_3e1107;

const CURL = 'curl -X POST https://api.nartalk.com/v1/otp/send \\\n  -H "Authorization: Bearer nar_live_8fK2xQ9mVb3TzLp7RwYd" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "chat_id": 482913,\n    "template": "verify",\n    "expires_in": 300\n  }\'';
const NODE = 'import { NarTalk } from "@nartalk/sdk";\n\nconst nartalk = new NarTalk(process.env.NARTALK_KEY);\n\nconst { id } = await nartalk.otp.send({\n  chatId: 482913,\n  template: "verify",\n  expiresIn: 300\n});';
const PY = '# NarTalk Python SDK\nimport nartalk\n\nclient = nartalk.Client(api_key="nar_live_8fK2xQ")\n\nresult = client.otp.send(\n    chat_id=482913,\n    template="verify",\n    expires_in=300\n)';
const REQ = '{\n  "chat_id": 482913,\n  "code": "482913",\n  "template": "verify"\n}';
const RES = '{\n  "id": "otp_7Ka91",\n  "status": "verified",\n  "verified_at": "2026-07-29T14:02:11Z",\n  "attempts": 1\n}';
const VERIFY = '# NarTalk imzasını yoxla\nexpected=$(printf "%s" "$BODY" \\\n  | openssl dgst -sha256 -hmac "$WEBHOOK_SECRET" -hex)\n\n[ "$expected" = "$SIGNATURE" ] && echo "ok"';

function ApiKeys() {
  const [env, setEnv] = React.useState("test");
  const [confirm, setConfirm] = React.useState(false);
  return (
    <>
      <PageHead title="API açarları" subtitle="NarTalk-u öz backend-inizdən çağırın.">
        <EnvironmentSelector value={env} onChange={setEnv} />
        <Button size="sm" variant="primary" icon="Plus">Açar yarat</Button>
      </PageHead>
      {env === "test" ? <TestModeBanner onSwitch={() => setEnv("live")} /> : null}
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "var(--layout-card-gap)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
          <ApiKeyCard name="Production backend" env="live" secret="nar_live_8fK2xQ9mVb3TzLp7RwYd"
            createdAt="12 May 2026" lastUsedAt="2 dəqiqə əvvəl"
            scopes={["otp:send", "otp:verify", "forms:read", "responses:read"]} onRevoke={() => setConfirm(true)} />
          <ApiKeyCard name="Staging" env="test" secret="nar_test_2mQ8vR4xNc7BdKp1TzWy"
            createdAt="3 İyun 2026" lastUsedAt="4 gün əvvəl" scopes={["otp:send", "forms:read"]} onRevoke={() => setConfirm(true)} />
          <ApiKeyCard name="Köhnə integrasiya" env="live" status="key.revoked" secret="nar_live_9zX1cV5bNm2QwErT"
            createdAt="8 Yanvar 2026" lastUsedAt="21 İyun 2026" scopes={["forms:read"]} />
          <Panel title="Endpoint-lər" description="Bütün sorğular Bearer açarla imzalanır.">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2-5)" }}>
              <EndpointBlock method="POST" path="/v1/otp/send" description="Telegram üzərindən OTP göndərir." />
              <EndpointBlock method="POST" path="/v1/otp/verify" description="Göndərilmiş kodu yoxlayır." />
              <EndpointBlock method="GET" path="/v1/forms/{id}/responses" description="Formanın cavablarını qaytarır." />
              <EndpointBlock method="POST" path="/v1/notifications/send" description="Telegram bildirişi göndərir." />
              <EndpointBlock method="DELETE" path="/v1/responses/{id}" description="Cavabı silir." />
            </div>
          </Panel>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
          <Card><CardHeader title="Sürətli başlanğıc" description="OTP göndər — üç dildə" plain /><CardBody>
            <CodeTabs tabs={[{ value: "curl", label: "cURL", lang: "bash", code: CURL }, { value: "node", label: "Node", lang: "js", code: NODE }, { value: "py", label: "Python", lang: "text", code: PY }]} maxHeight={230} />
          </CardBody></Card>
          <Card><CardHeader title="İstifadə" description="Cari billing dövrü" plain /><CardBody>
            <UsageMeter label="API sorğusu" used={12406} limit={50000} icon="Code2" />
            <UsageMeter label="OTP göndərilib" used={3812} limit={4000} icon="ShieldCheck" hint="Limitin 95%-i istifadə olunub. Pro+ plana keçin." />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "var(--space-1)" }}>
              <span style={{ font: "400 var(--type-caption-size)/1 var(--font-sans)", color: "var(--color-text-tertiary)" }}>Sorğu limiti</span>
              <RateLimitIndicator remaining={18} limit={100} resetIn="42 san" />
            </div>
          </CardBody></Card>
          <Card><CardHeader title="Nümunə sorğu" plain /><CardBody>
            <RequestExample method="POST" path="/v1/otp/verify" status={200}
              request={<CodeBlock code={REQ} lang="json" actions={null} maxHeight={140} />}
              response={<CodeBlock code={RES} lang="json" actions={null} maxHeight={140} />} />
          </CardBody></Card>
        </div>
      </div>
      <ConfirmDialog open={confirm} title="Açarı ləğv etmək istəyirsiniz?"
        description="Bu açarla edilən bütün sorğular dərhal 401 qaytaracaq."
        consequence="3 aktiv integrasiya bu açardan istifadə edir."
        requireText="Production backend" confirmLabel="Açarı ləğv et"
        onCancel={() => setConfirm(false)} onConfirm={() => setConfirm(false)} />
    </>
  );
}

function Webhooks() {
  const [sel, setSel] = React.useState(null);
  return (
    <>
      <PageHead title="Webhook-lar" subtitle="NarTalk hadisələrini öz sisteminizə göndərin.">
        <Button size="sm" variant="secondary" icon="RotateCcw">Uğursuzları yenidən göndər</Button>
        <Button size="sm" variant="primary" icon="Plus">Endpoint əlavə et</Button>
      </PageHead>
      <Alert tone="error" title="1 endpoint dayandırıldı" actions={<><Button size="sm" variant="secondary" icon="RotateCcw">Yenidən aktiv et</Button><Button size="sm" variant="ghost">Loga bax</Button></>}>
        <InlineCode>crm.acme.az/hooks/nartalk</InlineCode> son 24 saatda 47 dəfə uğursuz oldu. Ardıcıl 20 xətadan sonra göndərmə avtomatik dayandırılır.
      </Alert>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--layout-card-gap)", alignItems: "start" }}>
        <Card>
          <CardHeader title="Çatdırılma tarixçəsi" description="Son 24 saat"
            actions={<><Badge tone="success" size="sm">412 uğurlu</Badge><Badge tone="error" size="sm">47 uğursuz</Badge></>} />
          <WebhookLog onRetry={() => {}} onOpen={setSel} deliveries={[
            { status: "webhook.delivered", event: "response.created", endpoint: "https://crm.acme.az/hooks/nartalk", code: 200, latency: "142ms", at: "14:02:11" },
            { status: "webhook.delivered", event: "otp.verified", endpoint: "https://crm.acme.az/hooks/nartalk", code: 200, latency: "98ms", at: "14:01:44" },
            { status: "webhook.retrying", event: "response.created", endpoint: "https://crm.acme.az/hooks/nartalk", code: 429, latency: "1.2s", attempt: "2/3", at: "14:01:03", onRetry: () => {} },
            { status: "webhook.failed", event: "response.created", endpoint: "https://crm.acme.az/hooks/nartalk", code: 502, latency: "30.0s", attempt: "3/3", at: "13:58:04", onRetry: () => {} },
            { status: "webhook.pending", event: "form.published", endpoint: "https://hooks.zapier.com/nartalk", at: "13:57:50" },
            { status: "webhook.delivered", event: "response.created", endpoint: "https://hooks.zapier.com/nartalk", code: 200, latency: "211ms", at: "13:51:22" },
            { status: "webhook.failed", event: "otp.failed", endpoint: "https://crm.acme.az/hooks/nartalk", code: 401, latency: "88ms", attempt: "1/3", at: "13:44:09", onRetry: () => {} },
          ]} />
          <TableFooter right={<Button size="sm" variant="ghost" iconAfter="ArrowRight">Bütün log</Button>}>1–7 / 459 çatdırılma</TableFooter>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
          <Card><CardHeader title="Endpoint" plain /><CardBody>
            <Field label="URL"><Input mono prefixText="https://" defaultValue="crm.acme.az/hooks/nartalk" /></Field>
            <Field label="İmza açarı"><SecretField value="whsec_4Kx9mQ2vBn7TzLp" prefix="whsec_" /></Field>
            <Switch checked label="Aktiv" description="Söndürsəniz hadisələr növbəyə düşür" />
          </CardBody></Card>
          <Card><CardHeader title="Hadisələr" description="Hansı hadisələr göndərilsin" plain /><CardBody>
            <EventTypeList onToggle={() => {}} events={[
              { value: "response.created", description: "Yeni cavab göndərildikdə", enabled: true },
              { value: "response.updated", description: "Cavabın statusu dəyişdikdə", enabled: true },
              { value: "otp.verified", description: "Kod təsdiqləndikdə", enabled: true },
              { value: "otp.failed", description: "Kod yanlış daxil edildikdə", enabled: false },
              { value: "form.published", description: "Forma dərc edildikdə", enabled: false },
              { value: "bot.error", description: "Bot xəta verdikdə", enabled: true },
            ]} />
          </CardBody></Card>
          <Card><CardHeader title="İmzanın yoxlanılması" plain /><CardBody>
            <SignatureInfo sample={VERIFY} />
          </CardBody></Card>
        </div>
      </div>
    </>
  );
}

function Otp() {
  return (
    <>
      <PageHead title="OTP idarəetməsi" subtitle="Telegram üzərindən kod göndərin və təsdiqləyin.">
        <Button size="sm" variant="secondary" icon="Download">Log ixracı</Button>
        <Button size="sm" variant="primary" icon="Pencil">Şablonu redaktə et</Button>
      </PageHead>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "var(--layout-card-gap)" }}>
        {[["Göndərilib", "3,812", "+6.2%", "Send"], ["Təsdiqlənib", "3,591", "+5.8%", "ShieldCheck"], ["Uğur nisbəti", "94.2%", "-1.3%", "Percent"], ["Orta müddət", "18 san", null, "Timer"]].map(([l, v, d, i]) => (
          <Card key={l}><div style={{ padding: "var(--pad-card)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)", color: "var(--color-text-tertiary)" }}>{l}</span>
            </div>
            <div style={{ marginTop: "var(--space-2)", font: "var(--fw-semibold) var(--type-h3-size)/1 var(--font-sans)", letterSpacing: "var(--type-h3-ls)", fontVariantNumeric: "tabular-nums" }}>{v}</div>
            {d ? <div style={{ marginTop: "var(--space-1)", font: "var(--fw-medium) var(--type-label-sm-size)/1 var(--font-sans)", color: d.startsWith("-") ? "var(--color-status-error-fg)" : "var(--color-status-success-fg)" }}>{d}</div> : null}
          </div></Card>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--layout-card-gap)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
          <OtpConfigCard expiry="5 dəqiqə" retries={3} template="NarTalk təsdiq kodunuz: {{code}}. Kod 5 dəqiqə etibarlıdır." onEdit={() => {}} />
          <Card><CardHeader title="İstifadəçi görünüşü" description="Kodun daxil edilməsi ekranı" plain /><CardBody>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "center", padding: "var(--space-2) 0" }}>
              <OtpInput length={6} value="4821" groupAfter={3} />
              <span style={{ font: "400 var(--type-caption-size)/1 var(--font-sans)", color: "var(--color-text-tertiary)" }}>Kod 04:12-dən sonra bitir</span>
              <Button size="sm" variant="ghost" icon="RotateCcw" disabled>Yeni kod göndər</Button>
            </div>
          </CardBody></Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
          <Card><CardBody><ChartContainer title="OTP həcmi" description="Son 14 gün" height={140} legend={[{ label: "Təsdiqlənib" }, { label: "Uğursuz" }]}>
            <BarChart data={[210, 248, 232, 271, 254, 296, 281, 312, 288, 334, 301, 356, 322, 371]} color="var(--chart-3)" labels={["16 İyul", "23 İyul", "29 İyul"]} />
          </ChartContainer></CardBody></Card>
          <Card>
            <CardHeader title="Uğursuz təsdiqlər" description="Son 24 saat" actions={<Badge tone="error" size="sm">221</Badge>} />
            <Table density="compact" columns={[
              { key: "u", label: "İstifadəçi", render: (r) => <IdentityCell name={r.name} secondary={r.u} /> },
              { key: "reason", label: "Səbəb", width: 170, render: (r) => <StatusCell status={r.s} /> },
              { key: "att", label: "Cəhd", width: 70, align: "right", mono: true, muted: true },
              { key: "at", label: "Vaxt", width: 90, align: "right", mono: true, muted: true },
            ]} rows={[
              { id: 1, name: "Tural Həsənov", u: "@turalh", s: "otp.failed", att: "3/3", at: "13:44" },
              { id: 2, name: "Leyla Səfərova", u: "@leylas", s: "otp.expired", att: "1/3", at: "12:19" },
              { id: 3, name: "Kamran Abbasov", u: "@kamrana", s: "otp.failed", att: "2/3", at: "11:53" },
              { id: 4, name: "Nigar Əliyeva", u: "@nigar_a", s: "otp.expired", att: "1/3", at: "10:07" },
            ]} />
          </Card>
        </div>
      </div>
    </>
  );
}

function Team() {
  const [invite, setInvite] = React.useState(false);
  const [tab, setTab] = React.useState("members");
  return (
    <>
      <PageHead title="Komanda və icazələr" subtitle="Acme Workspace · 5 üzv, 1 dəvət gözləyir">
        <AvatarGroup people={["Aysel Məmmədova", "Rəşad Quliyev", "Nigar Əliyeva", "Tural Həsənov", "Leyla Səfərova"]} max={4} size="sm" />
        <Button size="sm" variant="primary" icon="UserPlus" onClick={() => setInvite(true)}>Üzv dəvət et</Button>
      </PageHead>
      <Tabs value={tab} onChange={setTab} items={[{ value: "members", label: "Üzvlər", count: 5 }, { value: "roles", label: "Rollar və icazələr" }, { value: "audit", label: "Audit log" }]} />
      {tab === "members" ? (
        <Card><CardBody>
          <MemberRow name="Aysel Məmmədova" email="aysel@acme.az" role="owner" lastActive="Onlayn" onRoleChange={() => {}} actions={<IconButton icon="Ellipsis" label="Menyu" size="sm" />} />
          <MemberRow name="Rəşad Quliyev" email="rashad@acme.az" role="admin" lastActive="12 dəq əvvəl" onRoleChange={() => {}} actions={<IconButton icon="Ellipsis" label="Menyu" size="sm" />} />
          <MemberRow name="Nigar Əliyeva" email="nigar@acme.az" role="editor" lastActive="2 saat əvvəl" onRoleChange={() => {}} actions={<IconButton icon="Ellipsis" label="Menyu" size="sm" />} />
          <MemberRow name="Tural Həsənov" email="tural@acme.az" role="analyst" lastActive="Dünən" onRoleChange={() => {}} actions={<IconButton icon="Ellipsis" label="Menyu" size="sm" />} />
          <MemberRow name="Leyla Səfərova" email="leyla@acme.az" role="viewer" lastActive="4 gün əvvəl" onRoleChange={() => {}} actions={<IconButton icon="Ellipsis" label="Menyu" size="sm" />} />
          <MemberRow email="kamran@acme.az" role="Editor" pending actions={<><Button size="xs" variant="ghost" icon="Send">Yenidən göndər</Button><IconButton icon="X" label="Dəvəti ləğv et" size="sm" /></>} />
        </CardBody></Card>
      ) : tab === "roles" ? (
        <Card>
          <CardHeader title="İcazə matrisi" description="Hər rolun nə edə biləcəyi" actions={<Button size="sm" variant="secondary" icon="Plus">Fərdi rol</Button>} />
          <div style={{ padding: "0 var(--space-4) var(--space-4)" }}>
            <PermissionMatrix groups={[
              { label: "Botlar və formalar", rows: [
                { key: "b.create", label: "Yaratmaq", values: { owner: true, admin: true, editor: true, analyst: false, viewer: false } },
                { key: "b.edit", label: "Redaktə etmək", values: { owner: true, admin: true, editor: true, analyst: false, viewer: false } },
                { key: "b.publish", label: "Dərc etmək", values: { owner: true, admin: true, editor: "partial", analyst: false, viewer: false } },
                { key: "b.delete", label: "Silmək", values: { owner: true, admin: true, editor: false, analyst: false, viewer: false } },
              ]},
              { label: "Cavablar", rows: [
                { key: "r.read", label: "Görmək", values: { owner: true, admin: true, editor: true, analyst: true, viewer: true } },
                { key: "r.export", label: "İxrac etmək", values: { owner: true, admin: true, editor: true, analyst: true, viewer: false } },
                { key: "r.delete", label: "Silmək", values: { owner: true, admin: true, editor: false, analyst: false, viewer: false } },
              ]},
              { label: "Developer", rows: [
                { key: "d.keys", label: "API açarları", values: { owner: true, admin: true, editor: false, analyst: false, viewer: false } },
                { key: "d.hooks", label: "Webhook-lar", values: { owner: true, admin: true, editor: "partial", analyst: false, viewer: false } },
              ]},
              { label: "Workspace", rows: [
                { key: "w.members", label: "Üzv dəvət etmək", values: { owner: true, admin: true, editor: false, analyst: false, viewer: false } },
                { key: "w.billing", label: "Billing", values: { owner: true, admin: false, editor: false, analyst: false, viewer: false } },
                { key: "w.delete", label: "Workspace silmək", values: { owner: true, admin: false, editor: false, analyst: false, viewer: false } },
              ]},
            ]} />
          </div>
        </Card>
      ) : (
        <Card><CardBody>
          <ActivityFeed items={[
            { actor: "Aysel Məmmədova", action: "API açarı yaratdı", target: "Production backend", time: "14:02", tag: "key.create" },
            { actor: "Rəşad Quliyev", action: "botu dərc etdi", target: "@sifaris_bot", detail: "v4 · 7 blok", time: "13:12", tag: "bot.publish" },
            { actor: "Aysel Məmmədova", action: "açarı göstərdi", target: "Production backend", time: "11:48", tag: "key.reveal" },
            { actor: "Nigar Əliyeva", action: "cavabları ixrac etdi", target: "1,284 sətir", time: "10:31", tag: "response.export" },
            { actor: "Aysel Məmmədova", action: "üzv dəvət etdi", target: "kamran@acme.az", detail: "Editor rolu ilə", time: "09:31", tag: "member.invite" },
            { actor: "Rəşad Quliyev", action: "webhook endpoint-i dəyişdi", target: "crm.acme.az", time: "Dünən 17:22", tag: "webhook.update" },
          ]} />
        </CardBody></Card>
      )}
      <Modal open={invite} title="Üzv dəvət et" description="Dəvət linki e-poçtla göndəriləcək və 7 gün etibarlıdır."
        onClose={() => setInvite(false)}
        footer={<><Button variant="secondary" onClick={() => setInvite(false)}>Ləğv et</Button><Button variant="primary" icon="Send" onClick={() => setInvite(false)}>Dəvət göndər</Button></>}>
        <Field label="E-poçt" required><Input placeholder="ad@sirket.az" icon="AtSign" /></Field>
        <Field label="Rol" hint="Rolu sonra dəyişə bilərsiniz"><Select value="editor" options={[{ value: "admin", label: "Admin" }, { value: "editor", label: "Editor" }, { value: "analyst", label: "Analyst" }, { value: "viewer", label: "Viewer" }]} /></Field>
        <Switch checked label="Bütün botlara giriş" description="Söndürsəniz layihə səviyyəsində icazə verə bilərsiniz" />
      </Modal>
    </>
  );
}

Object.assign(window, { ApiKeys, Webhooks, Otp, Team });
