const { Button, Badge, Card, CardHeader, CardBody, Icon, StatusBadge, Avatar, Sidebar, SidebarSection,
        SidebarItem, StatCard, Sparkline, QuestionBlock, IconButton, Tag } = window.NarTalkDesignSystem_3e1107;

const MAX = { maxWidth: "var(--layout-marketing-max)", margin: "0 auto", padding: "0 24px" };

function Nav() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "color-mix(in srgb, var(--color-bg-default) 88%, transparent)", backdropFilter: "saturate(140%) blur(10px)", borderBottom: "1px solid var(--color-border-subtle)" }}>
      <div style={{ ...MAX, height: 60, display: "flex", alignItems: "center", gap: 28 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <img src="../../assets/logo-mark-512.png" alt="" style={{ width: 24, height: 24, display: "block" }} />
          <span style={{ font: "600 17px/1 var(--font-sans)", letterSpacing: "-.03em", color: "var(--color-text-primary)" }}>NarTalk</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 22, font: "500 13.5px/1 var(--font-sans)" }}>
          {["İmkanlar", "Necə işləyir", "Qiymətlər", "Təhlükəsizlik", "Blog"].map((t) => (
            <a key={t} href="#" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}>{t}</a>
          ))}
        </nav>
        <div style={{ flex: 1 }} />
        <Button size="sm" variant="ghost">Daxil ol</Button>
        <Button size="sm" variant="primary">Pulsuz başla</Button>
      </div>
    </header>
  );
}

function Eyebrow({ children }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "0 10px", height: 26, borderRadius: "var(--radius-full)", background: "var(--color-surface-brand-subtle)", border: "1px solid var(--color-status-brand-border)", font: "500 12px/1 var(--font-sans)", color: "var(--color-text-brand)" }}>
      <span className="nt-dot" style={{ background: "var(--nar-500)" }} />{children}
    </span>
  );
}

function SectionLabel({ children }) {
  return <div className="nt-overline" style={{ color: "var(--color-text-brand)", marginBottom: 12 }}>{children}</div>;
}

/** The dashboard rendering used as the hero image — real components, not a screenshot. */
function HeroApp() {
  return (
    <div style={{ borderRadius: "var(--radius-2xl)", border: "1px solid var(--color-border-default)", background: "var(--color-surface-default)", boxShadow: "var(--shadow-level-4)", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, height: 40, padding: "0 14px", borderBottom: "1px solid var(--color-border-subtle)", background: "var(--color-surface-subtle)" }}>
        <img src="../../assets/logo-mark-512.png" alt="" style={{ width: 16, height: 16 }} />
        <span style={{ font: "600 12px/1 var(--font-sans)", letterSpacing: "-.02em" }}>NarTalk</span>
        <span style={{ font: "400 11px/1 var(--font-sans)", color: "var(--color-text-muted)" }}>Workspace</span>
        <div style={{ flex: 1 }} />
        <Button size="xs" variant="secondary" icon="Eye">Ön baxış</Button>
        <Button size="xs" variant="primary" icon="Plus">Yeni bot</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "168px 1fr 244px", minHeight: 388 }}>
        <div style={{ borderRight: "1px solid var(--color-border-subtle)", background: "var(--color-bg-subtle)", padding: "10px 8px" }}>
          <div className="nt-sidebar__section" style={{ padding: "2px 8px 6px" }}>İdarəetmə</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <SidebarItem domain="bots" label="Botlarım" active />
            <SidebarItem domain="responses" label="Cavablar" count="1,284" />
            <SidebarItem domain="team" label="İstifadəçilər" count={326} />
            <SidebarItem domain="settings" label="Tənzimləmələr" />
          </div>
        </div>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
          <div>
            <div style={{ font: "600 17px/1.3 var(--font-sans)", letterSpacing: "-.02em" }}>Botlarım</div>
            <div style={{ marginTop: 3, font: "400 12.5px/1.4 var(--font-sans)", color: "var(--color-text-secondary)" }}>Telegram botlarınızı yaradın və idarə edin.</div>
          </div>
          <Card>
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar name="Müştəri müraciətləri" shape="square" size="md" icon="Bot" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: "500 13px/1.3 var(--font-sans)" }}>Müştəri müraciətləri</div>
                  <div style={{ font: "400 11px/1.3 var(--font-mono)", color: "var(--color-text-muted)" }}>@muraciet_bot</div>
                </div>
                <StatusBadge status="bot.active" size="sm" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, paddingTop: 10, borderTop: "1px solid var(--color-border-subtle)" }}>
                {[["Cavablar", "1,284"], ["Bu həftə", "148"], ["İstifadəçi", "326"]].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ font: "400 10.5px/1 var(--font-sans)", color: "var(--color-text-muted)" }}>{l}</div>
                    <div style={{ marginTop: 3, font: "600 15px/1 var(--font-sans)", fontVariantNumeric: "tabular-nums" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: 26 }}><Sparkline data={[4,7,5,9,8,12,10,14,13,18,16,21]} /></div>
              <div style={{ font: "400 11px/1.4 var(--font-sans)", color: "var(--color-text-tertiary)" }}>Son cavab · Aysel Məmmədova · 2 dəqiqə əvvəl</div>
            </div>
          </Card>
        </div>
        <div style={{ borderLeft: "1px solid var(--color-border-subtle)", padding: 14, display: "flex", flexDirection: "column", gap: 8, background: "var(--color-surface-default)" }}>
          <div style={{ font: "500 12px/1.3 var(--font-sans)" }}>Bot qurucusu</div>
          <div style={{ font: "400 11px/1.3 var(--font-sans)", color: "var(--color-text-muted)", marginBottom: 4 }}>5 sual · Avtomatik saxlanılır</div>
          {[[1, "Ad və soyad", "text"], [2, "Əlaqə nömrəsi", "phone"], [3, "Ünvan", "location"], [4, "Sənəd", "file"]].map(([i, t, ty]) => (
            <QuestionBlock key={i} index={i} title={t} type={ty} selected={i === 2} />
          ))}
          <Button size="xs" variant="ghost" icon="Plus" style={{ alignSelf: "flex-start", marginTop: 2 }}>Sual əlavə et</Button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ padding: "72px 0 56px", background: "var(--color-bg-default)" }}>
      <div style={{ ...MAX, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <Eyebrow>Kod yazmadan Telegram bot yaradın</Eyebrow>
        <h1 style={{ font: "600 58px/62px var(--font-sans)", letterSpacing: "-.032em", maxWidth: 760, textWrap: "balance" }}>
          Telegram-da data toplamağın ən sadə yolu.
        </h1>
        <p style={{ maxWidth: 620, font: "400 17px/28px var(--font-sans)", color: "var(--color-text-secondary)", textWrap: "pretty" }}>
          Botunuzu vizual olaraq qurun, giriş icazələrini seçin və paylaşın. Bütün cavablar real vaxtda şəxsi panelinizdə toplansın.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
          <Button size="lg" variant="primary">Botunu pulsuz yarat</Button>
          <Button size="lg" variant="secondary" iconAfter="ArrowRight">Məhsula bax</Button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, font: "400 13px/1 var(--font-sans)", color: "var(--color-text-tertiary)" }}>
          Kredit kartı tələb olunmur <span style={{ color: "var(--color-text-muted)" }}>·</span> 5 dəqiqəyə hazırdır
        </div>
      </div>
      <div style={{ ...MAX, marginTop: 48 }}><HeroApp /></div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["01", "Botunu qur", "Hazır data bloklarından istifadə et, sualları əlavə et və sıralamasını dəyiş.", "Layers"],
    ["02", "Girişi təyin et", "Hamı üçün açıq və ya yalnız xüsusi icazəli istifadəçilər üçün bot yarat.", "Lock"],
    ["03", "Datanı idarə et", "Cavabları paneldə izlə, axtar, filtrlə və istənilən vaxt ixrac et.", "Inbox"],
  ];
  return (
    <section style={{ padding: "72px 0", background: "var(--color-bg-subtle)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}>
      <div style={MAX}>
        <SectionLabel>Necə işləyir</SectionLabel>
        <h2 style={{ font: "600 38px/44px var(--font-sans)", letterSpacing: "-.025em", maxWidth: 560 }}>Sadə qur. Dərhal paylaş.</h2>
        <p style={{ marginTop: 12, maxWidth: 520, font: "400 16px/26px var(--font-sans)", color: "var(--color-text-secondary)" }}>
          İlk botunuz üçün proqramçıya və texniki biliyə ehtiyac yoxdur.
        </p>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}>
          {steps.map(([n, t, d, ic]) => (
            <div key={n} style={{ padding: 24, background: "var(--color-surface-default)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ font: "600 13px/1 var(--font-mono)", color: "var(--color-text-brand)", letterSpacing: ".04em" }}>{n}</span>
                <Icon name={ic} size={18} color="var(--color-text-muted)" />
              </div>
              <div style={{ marginTop: 18, font: "600 19px/1.3 var(--font-sans)", letterSpacing: "-.015em" }}>{t}</div>
              <p style={{ marginTop: 8, font: "400 14.5px/23px var(--font-sans)", color: "var(--color-text-secondary)", textWrap: "pretty" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    ["Vizual bot qurucu", "Sualları əlavə edin, sıralayın və şərti keçidləri kod yazmadan qurun.", "Layers"],
    ["Giriş nəzarəti", "Botu hamı üçün açıq saxlayın və ya yalnız seçilmiş istifadəçilərə icazə verin.", "Lock"],
    ["Canlı data paneli", "Bütün cavabları bir yerdə görün, axtarın, süzgəcdən keçirin və ixrac edin.", "ChartNoAxesColumn"],
    ["Bütün data tipləri", "Mətn, seçim, telefon, foto, fayl və lokasiyanı eyni axında toplayın.", "Blocks"],
    ["Bir neçə bot", "Fərqli komandalar və proseslər üçün bir hesabdan ayrıca botlar yaradın.", "Boxes"],
    ["Tam nəzarət", "Botun görünüşünü, cavablarını və bildirişlərini istədiyiniz vaxt dəyişin.", "Settings2"],
  ];
  return (
    <section style={{ padding: "72px 0" }}>
      <div style={MAX}>
        <SectionLabel>Platforma</SectionLabel>
        <h2 style={{ font: "600 38px/44px var(--font-sans)", letterSpacing: "-.025em", maxWidth: 620 }}>Bot üçün lazım olan hər şey bir yerdə.</h2>
        <p style={{ marginTop: 12, maxWidth: 520, font: "400 16px/26px var(--font-sans)", color: "var(--color-text-secondary)" }}>
          Qurmaq, paylaşmaq və toplanan datanı idarə etmək üçün sadə alətlər.
        </p>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 1, background: "var(--color-border-default)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
          {items.map(([t, d, ic]) => (
            <div key={t} style={{ padding: 24, background: "var(--color-surface-default)" }}>
              <span style={{ display: "grid", placeItems: "center", width: 34, height: 34, borderRadius: "var(--radius-md)", background: "var(--color-bg-inset)", color: "var(--color-text-secondary)" }}>
                <Icon name={ic} size={17} />
              </span>
              <div style={{ marginTop: 16, font: "600 16px/1.35 var(--font-sans)", letterSpacing: "-.012em" }}>{t}</div>
              <p style={{ marginTop: 7, font: "400 14px/22px var(--font-sans)", color: "var(--color-text-secondary)", textWrap: "pretty" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Pulsuz", tag: "İlk botunuzu qurmaq üçün.", price: "₼0", per: "/ ay", feats: ["1 aktiv bot", "Ayda 100 cavab", "Əsas data blokları"], cta: "Planı seç", variant: "secondary" },
    { name: "Pro", tag: "Aktiv komandalar və bizneslər üçün.", price: "₼29", per: "/ ay", feats: ["10 aktiv bot", "Limitsiz cavab", "Fayl və lokasiya", "CSV ixracı"], cta: "Planı seç", variant: "primary", popular: true },
    { name: "Biznes", tag: "Daha böyük həcm və dəstək üçün.", price: "Fərdi", per: "", feats: ["Limitsiz bot", "Komanda üzvləri", "Prioritet dəstək", "Fərdi limitlər"], cta: "Planı seç", variant: "secondary" },
  ];
  return (
    <section style={{ padding: "72px 0", background: "var(--color-bg-subtle)", borderTop: "1px solid var(--color-border-subtle)" }}>
      <div style={MAX}>
        <SectionLabel>Qiymətlər</SectionLabel>
        <h2 style={{ font: "600 38px/44px var(--font-sans)", letterSpacing: "-.025em" }}>Sizə uyğun planı seçin.</h2>
        <p style={{ marginTop: 12, maxWidth: 520, font: "400 16px/26px var(--font-sans)", color: "var(--color-text-secondary)" }}>
          Pulsuz başlayın və ehtiyacınız artdıqca planınızı dəyişin.
        </p>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20, alignItems: "start" }}>
          {plans.map((p) => (
            <div key={p.name} style={{ position: "relative", padding: 24, background: "var(--color-surface-default)", border: "1px solid " + (p.popular ? "var(--color-border-brand)" : "var(--color-border-default)"), borderRadius: "var(--radius-xl)", boxShadow: p.popular ? "var(--shadow-level-2)" : "none" }}>
              {p.popular ? <span style={{ position: "absolute", top: -11, left: 24 }}><Badge tone="brand" variant="solid" size="md">Ən populyar</Badge></span> : null}
              <div style={{ font: "600 17px/1.3 var(--font-sans)", letterSpacing: "-.015em" }}>{p.name}</div>
              <div style={{ marginTop: 5, font: "400 13.5px/20px var(--font-sans)", color: "var(--color-text-tertiary)" }}>{p.tag}</div>
              <div style={{ marginTop: 20, display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ font: "600 38px/1 var(--font-sans)", letterSpacing: "-.03em", fontVariantNumeric: "tabular-nums" }}>{p.price}</span>
                {p.per ? <span style={{ font: "400 14px/1 var(--font-sans)", color: "var(--color-text-tertiary)" }}>{p.per}</span> : null}
              </div>
              <div style={{ margin: "22px 0", height: 1, background: "var(--color-border-subtle)" }} />
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {p.feats.map((ft) => (
                  <li key={ft} style={{ display: "flex", alignItems: "center", gap: 9, font: "400 14px/20px var(--font-sans)", color: "var(--color-text-secondary)" }}>
                    <Icon name="Check" size={14} color="var(--color-status-success-solid)" strokeWidth={2.4} />{ft}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 24 }}><Button variant={p.variant} block>{p.cta}</Button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section style={{ padding: "80px 0", background: "var(--ink-950)" }}>
      <div style={{ ...MAX, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <img src="../../assets/logo-mark-white.png" alt="" style={{ width: 40, height: 40 }} />
        <h2 style={{ font: "600 40px/46px var(--font-sans)", letterSpacing: "-.028em", color: "#fff", maxWidth: 620 }}>İlk botunuzu bu gün yaradın.</h2>
        <p style={{ maxWidth: 480, font: "400 16px/26px var(--font-sans)", color: "rgba(255,255,255,.7)" }}>
          Hesab açın və bir neçə dəqiqəyə ilk cavabları toplamağa başlayın.
        </p>
        <div style={{ marginTop: 6 }}><Button size="lg" variant="primary">Pulsuz hesab yarat</Button></div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["Məhsul", ["İmkanlar", "Necə işləyir", "Qiymətlər", "Təhlükəsizlik"]],
    ["Resurslar", ["Blog", "Telegram bot bələdçisi", "Data toplama", "Giriş icazələri"]],
    ["Şirkət", ["Haqqımızda", "Əlaqə", "Yeniliklər", "Dəstək"]],
    ["Hüquqi", ["Məxfilik", "İstifadə şərtləri", "Məlumat təhlükəsizliyi"]],
  ];
  return (
    <footer style={{ padding: "56px 0 32px", background: "var(--color-bg-default)", borderTop: "1px solid var(--color-border-subtle)" }}>
      <div style={{ ...MAX, display: "grid", gridTemplateColumns: "1.4fr repeat(4, 1fr)", gap: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <img src="../../assets/logo-mark-512.png" alt="" style={{ width: 22, height: 22 }} />
            <span style={{ font: "600 16px/1 var(--font-sans)", letterSpacing: "-.03em" }}>NarTalk</span>
          </div>
          <p style={{ marginTop: 12, maxWidth: 240, font: "400 13px/21px var(--font-sans)", color: "var(--color-text-tertiary)" }}>
            Kod yazmadan Telegram bot yaradın, paylaşın və bütün cavabları bir paneldən idarə edin.
          </p>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <div style={{ font: "600 12.5px/1 var(--font-sans)", color: "var(--color-text-primary)" }}>{h}</div>
            <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {links.map((l) => <li key={l}><a href="#" style={{ font: "400 13px/1.4 var(--font-sans)", color: "var(--color-text-tertiary)", textDecoration: "none" }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ ...MAX, marginTop: 44, paddingTop: 20, borderTop: "1px solid var(--color-border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, font: "400 12.5px/1 var(--font-sans)", color: "var(--color-text-muted)" }}>
        <span>© 2026 NarTalk. Bütün hüquqlar qorunur.</span>
        <span>Telegram üçün sadə data toplama platforması.</span>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div style={{ background: "var(--color-bg-default)" }}>
      <Nav /><Hero /><HowItWorks /><Features /><Pricing /><Cta /><Footer />
    </div>
  );
}

Object.assign(window, { Landing, Nav, Hero, HeroApp, HowItWorks, Features, Pricing, Cta, Footer });
