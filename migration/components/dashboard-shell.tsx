"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  Bot,
  ChevronDown,
  CreditCard,
  FileText,
  KeyRound,
  Layers3,
  LogOut,
  Menu,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Settings2,
  ShieldCheck,
  Sun,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase-browser";
import { Logo } from "@/components/logo";

/**
 * Sectioned navigation, matching the design system's dashboard shell.
 *
 * A flat list of nine items gives the eye no anchor; grouping separates the
 * everyday surfaces from the developer and workspace ones, which is also the
 * order people learn the product in. Counts sit right-aligned so a glance
 * answers "is there anything new" without opening the page.
 */
const navGroups: {
  section: string | null;
  items: { href: string; label: string; icon: typeof BarChart3; count?: string }[];
}[] = [
  {
    section: null,
    items: [
      { href: "/dashboard", label: "İcmal", icon: BarChart3 },
      { href: "/dashboard/botlar", label: "Botlar və formalar", icon: Bot },
      { href: "/dashboard/cavablar", label: "Cavablar", icon: FileText },
      { href: "/dashboard/automations", label: "Avtomatlaşdırma", icon: Workflow },
    ],
  },
  {
    section: "Developer",
    items: [
      { href: "/dashboard/api", label: "API və inteqrasiya", icon: KeyRound },
      { href: "/dashboard/modullar", label: "Məhsul modulları", icon: Layers3 },
    ],
  },
  {
    section: "Workspace",
    items: [
      { href: "/dashboard/istifadeciler", label: "İstifadəçilər", icon: Users },
      { href: "/dashboard/qiymetler", label: "Plan və ödəniş", icon: CreditCard },
      { href: "/dashboard/tenzimlemeler", label: "Tənzimləmələr", icon: Settings2 },
    ],
  },
];

export function DashboardShell({
  title,
  description,
  active,
  children,
  action,
}: {
  title: string;
  description: string;
  active: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [profile, setProfile] = useState<{ display_name: string | null; email: string; role: string } | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setCollapsed(localStorage.getItem("databot-sidebar") === "1");
    supabase.auth.getSession().then(async ({ data: sessionData }) => {
      if (!sessionData.session?.user) {
        window.location.replace(`/login?next=${encodeURIComponent(window.location.pathname)}`);
        return;
      }
      // The cached session is enough to render immediately. RLS still protects
      // every data request while the authoritative user check runs below.
      setAuthLoading(false);
      const userId = sessionData.session.user.id;
      const [{ data: verified }, { data: row }] = await Promise.all([
        supabase.auth.getUser(),
        supabase.from("profiles").select("display_name,email,role").eq("id", userId).single(),
      ]);
      if (!verified.user) {
        await supabase.auth.signOut();
        window.location.replace("/login");
        return;
      }
      setProfile(row);
    });
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("databot-theme", next ? "dark" : "light");
  };
  const toggleCollapsed = () =>
    setCollapsed((value) => {
      localStorage.setItem("databot-sidebar", value ? "0" : "1");
      return !value;
    });

  if (authLoading) return <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">Hesab yoxlanılır...</div>;

  return (
    <div className="min-h-screen bg-background lg:flex">
      <header className="sticky top-0 z-30 flex h-14 items-center border-b bg-background/90 px-4 backdrop-blur lg:hidden">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </Button>
        <a
          href="/dashboard"
          className="ml-2 flex items-center gap-2 font-semibold"
        >
          <Logo size={26} />
          NarTalk
        </a>
        <Button
          className="ml-auto"
          onClick={toggleTheme}
          variant="ghost"
          size="icon-sm"
        >
          {dark ? <Sun /> : <Moon />}
        </Button>
      </header>

      {mobileOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Menyunu bağla"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r bg-background transition-all duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} ${collapsed ? "lg:w-[68px]" : "lg:w-60"}`}
      >
        <div
          className={`flex h-14 items-center border-b px-3 ${collapsed ? "lg:justify-center" : ""}`}
        >
          <a
            href="/dashboard"
            className="flex min-w-0 items-center gap-2 font-semibold"
          >
            <Logo size={30} />
            <span className={collapsed ? "lg:hidden" : ""}>NarTalk</span>
          </a>
          <Button
            className="ml-auto lg:hidden"
            variant="ghost"
            size="icon-sm"
            onClick={() => setMobileOpen(false)}
          >
            <X />
          </Button>
          {!collapsed && (
            <Button
              className="ml-auto hidden lg:inline-flex"
              variant="ghost"
              size="icon-sm"
              onClick={toggleCollapsed}
            >
              <PanelLeftClose />
            </Button>
          )}
        </div>
        {collapsed && (
          <Button
            className="mx-auto mt-3 hidden lg:inline-flex"
            variant="ghost"
            size="icon-sm"
            onClick={toggleCollapsed}
          >
            <PanelLeftOpen />
          </Button>
        )}
        <div
          className={`mx-3 mt-3 flex items-center gap-3 rounded-lg border p-2 ${collapsed ? "lg:justify-center" : ""}`}
        >
          <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold">
            AR
          </div>
          <div className={`min-w-0 flex-1 ${collapsed ? "lg:hidden" : ""}`}>
            <p className="truncate text-sm font-medium">{profile?.display_name || profile?.email || "NarTalk user"}</p>
            <p className="truncate text-xs text-muted-foreground">
              Pro workspace
            </p>
          </div>
          {!collapsed && (
            <ChevronDown className="size-4 text-muted-foreground" />
          )}
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navGroups.map((group, gi) => (
            <div key={group.section ?? gi} className={gi > 0 ? "pt-4" : undefined}>
              {group.section && !collapsed && (
                <div className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.07em] text-muted-foreground/70">
                  {group.section}
                </div>
              )}
              {/* Collapsed rail: a hairline stands in for the section label. */}
              {group.section && collapsed && gi > 0 && (
                <div className="mx-auto mb-2 hidden h-px w-6 bg-border lg:block" />
              )}
              <div className="space-y-1">
                {group.items.map(({ href, label, icon: Icon, count }) => {
                  const isActive =
                    active === label ||
                    (active === "Botlar" && label === "Botlar və formalar");
                  return (
                    <a
                      key={href}
                      href={href}
                      title={collapsed ? label : undefined}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${collapsed ? "lg:justify-center lg:px-0" : ""} ${isActive ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`}
                    >
                      <Icon className="size-4 shrink-0" />
                      <span className={collapsed ? "lg:hidden" : ""}>{label}</span>
                      {count && (
                        <span className={`ml-auto text-xs tabular-nums text-muted-foreground/70 ${collapsed ? "lg:hidden" : ""}`}>
                          {count}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div
          className={`flex items-center gap-2 border-t p-3 ${collapsed ? "lg:flex-col" : ""}`}
        >
          <Button onClick={toggleTheme} variant="ghost" size="icon-sm">
            {dark ? <Sun /> : <Moon />}
          </Button>
          <button
            type="button"
            onClick={async () => { await supabase.auth.signOut(); window.location.replace("/login"); }}
            className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground ${collapsed ? "lg:px-2" : "ml-auto"}`}
          >
            <LogOut className="size-4" />
            <span className={collapsed ? "lg:hidden" : ""}>Çıxış</span>
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
            {action}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
