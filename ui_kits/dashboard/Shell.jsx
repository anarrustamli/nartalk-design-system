const { Sidebar, SidebarSection, SidebarItem, WorkspaceSwitcher, AccountMenu, Topbar, Breadcrumb,
        Button, IconButton, Badge, Input, Tooltip } = window.NarTalkDesignSystem_3e1107;

const NAV = [
  { section: null, items: [
    { key: "overview", domain: "analytics", label: "Ümumi baxış" },
    { key: "bots", domain: "bots", label: "Botlarım", count: 4 },
    { key: "forms", domain: "forms", label: "Formalar", count: 7 },
    { key: "responses", domain: "responses", label: "Cavablar", count: "1,284" },
  ]},
  { section: "Developer", items: [
    { key: "apikeys", domain: "api", label: "API açarları" },
    { key: "webhooks", domain: "webhook", label: "Webhook-lar", badge: <Badge tone="error" size="sm">2</Badge> },
    { key: "otp", domain: "otp", label: "OTP" },
    { key: "logs", domain: "logs", label: "Audit log" },
  ]},
  { section: "Workspace", items: [
    { key: "team", domain: "team", label: "Komanda", count: 5 },
    { key: "billing", domain: "billing", label: "Billing" },
    { key: "settings", domain: "settings", label: "Tənzimləmələr" },
  ]},
];

/** The NarTalk app shell: rail, sticky topbar, scrolling page. */
function AppShell({ route, onRoute, crumbs, actions, dark, onDark, onPalette, collapsed, onCollapse, children, padded = true }) {
  return (
    <div className={"nt-app" + (collapsed ? " nt-app--collapsed" : "")} style={{ height: "100%" }}>
      <Sidebar collapsed={collapsed}
        top={<WorkspaceSwitcher name="Acme Workspace" plan="Pro plan" collapsed={collapsed} />}
        footer={<AccountMenu name="Aysel Məmmədova" email="aysel@acme.az" collapsed={collapsed} />}>
        {NAV.map((g, i) => (
          <SidebarSection key={i} label={g.section} collapsed={collapsed}>
            {g.items.map((it) => (
              <SidebarItem key={it.key} domain={it.domain} label={it.label} count={it.count} badge={it.badge}
                collapsed={collapsed} active={route === it.key} onClick={() => onRoute(it.key)} />
            ))}
          </SidebarSection>
        ))}
      </Sidebar>
      <div className="nt-main">
        <Topbar left={<IconButton icon={collapsed ? "PanelLeft" : "PanelLeftClose"} label="Yan paneli aç/bağla" size="sm" onClick={onCollapse} />}
          right={<>
            <Tooltip label="Əmr paneli" shortcut="⌘K"><IconButton icon="Search" label="Axtar" size="sm" onClick={onPalette} /></Tooltip>
            <IconButton icon={dark ? "Sun" : "Moon"} label="Rejimi dəyiş" size="sm" onClick={onDark} />
            <IconButton icon="Bell" label="Bildirişlər" size="sm" />
            <IconButton icon="CircleHelp" label="Kömək" size="sm" />
            {actions}
          </>}>
          <Breadcrumb items={crumbs} />
        </Topbar>
        {padded ? <div className="nt-page" data-nt-scroll><div className="nt-page__inner">{children}</div></div> : children}
      </div>
    </div>
  );
}

/** PageHead — title, subtitle and the page's primary actions. */
function PageHead({ title, subtitle, children }) {
  return (
    <div className="nt-page__head">
      <div>
        <h1 className="nt-page__title">{title}</h1>
        {subtitle ? <p className="nt-page__sub">{subtitle}</p> : null}
      </div>
      {children ? <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flex: "0 0 auto" }}>{children}</div> : null}
    </div>
  );
}

Object.assign(window, { AppShell, PageHead, NAV });
