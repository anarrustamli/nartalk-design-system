const { StatCard, Sparkline, Card, CardHeader, CardBody, ChartContainer, BarChart, DonutChart, ChartLegend,
        UsageMeter, Table, StatusCell, IdentityCell, Button, IconButton, Badge, StatusBadge, EmptyState,
        Timeline, Panel, AvatarGroup, ActivityFeed } = window.NarTalkDesignSystem_3e1107;

const VOL = [6,9,7,12,10,15,13,18,14,21,17,24,20,26,22,28,25,31,27,34,29,37,32,40,35,43,38,46,41,48];

function Overview({ onOpenResponse }) {
  return (
    <>
      <PageHead title="Ümumi baxış" subtitle="Acme Workspace · İyul 2026">
        <Button size="sm" variant="secondary" icon="Download">İxrac</Button>
        <Button size="sm" variant="primary" icon="Plus">Bot yarat</Button>
      </PageHead>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "var(--layout-card-gap)" }}>
        <StatCard label="Cavablar" value="1,284" delta="+12.4%" hint="Son 30 gün" icon="Inbox" chart={<Sparkline data={VOL} color="var(--chart-1)" />} />
        <StatCard label="Aktiv bot" value="4" hint="10 limitdən" icon="Bot" />
        <StatCard label="Unikal istifadəçi" value="326" delta="+8.1%" hint="Son 30 gün" icon="Users" chart={<Sparkline data={VOL.map(v=>v*0.7)} color="var(--chart-2)" />} />
        <StatCard label="OTP təsdiqi" value="94.2%" delta="-1.3%" hint="Uğur nisbəti" icon="ShieldCheck" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--layout-card-gap)", alignItems: "start" }}>
        <Card>
          <CardBody>
            <ChartContainer title="Cavab həcmi" description="Son 30 gün · bütün botlar" height={190}
              legend={[{ label: "Telegram" }, { label: "Web link" }]}
              controls={<Button size="xs" variant="ghost" icon="Calendar">30 gün</Button>}>
              <BarChart data={VOL} labels={["1 İyul", "10 İyul", "20 İyul", "29 İyul"]} color="var(--chart-2)" />
            </ChartContainer>
          </CardBody>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-card-gap)" }}>
          <Card>
            <CardHeader title="Mənbələr" description="Cavabların paylanması" plain />
            <CardBody>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <DonutChart size={112} thickness={14} centerValue="1,284" centerLabel="cavab"
                  data={[{ value: 812 }, { value: 472 }]} />
                <ChartLegend items={[{ label: "Telegram · 812" }, { label: "Web link · 472" }]} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Plan limitləri" description="Pro plan · avqust 1-də sıfırlanır" plain />
            <CardBody>
              <UsageMeter label="Aylıq cavablar" used={874} limit={1000} icon="Inbox" hint="Limitin 87%-i istifadə olunub." />
              <UsageMeter label="Aktiv bot" used={4} limit={10} icon="Bot" />
              <UsageMeter label="API sorğusu" used={12406} limit={50000} icon="Code2" />
            </CardBody>
          </Card>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--layout-card-gap)", alignItems: "start" }}>
        <Card>
          <CardHeader title="Son cavablar" actions={<Button size="sm" variant="ghost" iconAfter="ArrowRight">Hamısı</Button>} />
          <Table density="compact" onRowClick={onOpenResponse}
            columns={[
              { key: "who", label: "Respondent", render: (r) => <IdentityCell name={r.name || undefined} secondary={r.u} anonymous={!r.name} /> },
              { key: "bot", label: "Bot", width: 150, mono: true, muted: true },
              { key: "s", label: "Status", width: 130, render: (r) => <StatusCell status={r.s} /> },
              { key: "at", label: "Vaxt", width: 84, align: "right", mono: true, muted: true },
            ]}
            rows={[
              { id: 1, name: "Aysel Məmmədova", u: "@aysel_m", bot: "@muraciet_bot", s: "submission.new", at: "14:02" },
              { id: 2, name: "Rəşad Quliyev", u: "@rashadq", bot: "@muraciet_bot", s: "submission.in_progress", at: "13:48" },
              { id: 3, name: null, u: "Web link", bot: "@sifaris_bot", s: "submission.completed", at: "13:31" },
              { id: 4, name: "Nigar Əliyeva", u: "@nigar_a", bot: "@muraciet_bot", s: "submission.completed", at: "12:57" },
              { id: 5, name: "Tural Həsənov", u: "@turalh", bot: "@sifaris_bot", s: "submission.rejected", at: "11:20" },
            ]} />
        </Card>
        <Card>
          <CardHeader title="Sistem hadisələri" plain />
          <CardBody>
            <Timeline items={[
              { title: "Bot dərc edildi", description: "@sifaris_bot v4", time: "13:12", tone: "success" },
              { title: "Webhook uğursuz oldu", description: "502 · crm.acme.az", time: "12:44", tone: "error", meta: <Badge tone="neutral" size="sm" mono>cəhd 3/3</Badge> },
              { title: "API açarı yaradıldı", description: "Production backend", time: "11:02", tone: "info", icon: "KeyRound" },
              { title: "Üzv dəvət edildi", description: "rashad@acme.az", time: "09:31", tone: "neutral", icon: "UserPlus" },
            ]} />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

Object.assign(window, { Overview });
