"use client";

import { useEffect, useState } from "react";
import { Bot, Download, Inbox, Plus, ShieldCheck, Users } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, ChartLegend, DonutChart, Sparkline, StatCard, UsageMeter,
} from "@/components/nartalk/charts";
import { StatusCell } from "@/components/nartalk/status-badge";
import { EmptyState } from "@/components/nartalk/empty-state";

/**
 * Dashboard overview.
 *
 * Real data is not wired yet, so the page runs in one of two modes, toggled
 * by a switch and remembered in localStorage:
 *   demo ON  → the sample figures below, so the layout can be judged full.
 *   demo OFF → zeros and empty states, i.e. exactly what a brand-new
 *              workspace sees. When queries land, OFF becomes the real path
 *              and the toggle can go.
 */
const VOLUME = [
  6, 9, 7, 12, 10, 15, 13, 18, 14, 21, 17, 24, 20, 26, 22,
  28, 25, 31, 27, 34, 29, 37, 32, 40, 35, 43, 38, 46, 41, 48,
];

const RECENT = [
  { name: "Aysel Məmmədova", handle: "@aysel_m", bot: "@muraciet_bot", status: "submission.new" as const, at: "14:02" },
  { name: "Rəşad Quliyev", handle: "@rashadq", bot: "@muraciet_bot", status: "submission.in_progress" as const, at: "13:48" },
  { name: null, handle: "Web link", bot: "@sifaris_bot", status: "submission.completed" as const, at: "13:31" },
  { name: "Nigar Əliyeva", handle: "@nigar_a", bot: "@muraciet_bot", status: "submission.completed" as const, at: "12:57" },
  { name: "Tural Həsənov", handle: "@turalh", bot: "@sifaris_bot", status: "submission.rejected" as const, at: "11:20" },
];

const EVENTS = [
  { title: "Bot dərc edildi", detail: "@sifaris_bot v4", at: "13:12", tone: "bg-emerald-500" },
  { title: "Webhook uğursuz oldu", detail: "502 · crm.acme.az", at: "12:44", tone: "bg-destructive" },
  { title: "API açarı yaradıldı", detail: "Production backend", at: "11:02", tone: "bg-blue-500" },
  { title: "Üzv dəvət edildi", detail: "rashad@acme.az", at: "09:31", tone: "bg-muted-foreground" },
];

const initials = (n: string) =>
  n.trim().split(/\s+/).slice(0, 2).map((w) => w[0] ?? "").join("").toUpperCase();

export default function Page() {
  // Default to demo ON so the dashboard is never blank on first load, but let
  // the choice persist so someone reviewing the real (empty) state can keep it.
  const [demo, setDemo] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nartalk-demo-data");
    if (saved !== null) setDemo(saved === "1");
    setReady(true);
  }, []);

  const toggle = () => {
    setDemo((d) => {
      const next = !d;
      localStorage.setItem("nartalk-demo-data", next ? "1" : "0");
      return next;
    });
  };

  // Avoid a hydration flash: render nothing until the stored choice is read.
  if (!ready) return null;

  return (
    <DashboardShell
      active="İcmal"
      title="Ümumi baxış"
      description="Botlarınızın son vəziyyəti və əsas göstəricilər."
      action={
        <>
          <DemoToggle on={demo} onToggle={toggle} />
          <Button variant="outline" size="sm">
            <Download className="size-4" />
            İxrac
          </Button>
          <Button size="sm">
            <Plus className="size-4" />
            Bot yarat
          </Button>
        </>
      }
    >
      {/* Four metrics, tabular numerals, trend where a trend exists. */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Cavablar" value={demo ? "1,284" : "0"} delta={demo ? "+12.4%" : undefined}
          hint="Son 30 gün" icon={Inbox}
          chart={demo ? <Sparkline data={VOLUME} height={30} /> : undefined}
        />
        <StatCard label="Aktiv bot" value={demo ? "4" : "0"} hint="10 limitdən" icon={Bot} />
        <StatCard
          label="Unikal istifadəçi" value={demo ? "326" : "0"} delta={demo ? "+8.1%" : undefined}
          hint="Son 30 gün" icon={Users}
          chart={demo ? (
            <Sparkline data={VOLUME.map((v) => v * 0.7)} color="var(--chart-2, oklch(0.5753 0.2043 261.99))" height={30} />
          ) : undefined}
        />
        <StatCard label="OTP təsdiqi" value={demo ? "94.2%" : "—"} delta={demo ? "-1.3%" : undefined} hint="Uğur nisbəti" icon={ShieldCheck} />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Card className="shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Cavab həcmi</CardTitle>
            <p className="text-xs text-muted-foreground">Son 30 gün · bütün botlar</p>
          </CardHeader>
          <CardContent>
            {demo ? (
              <>
                <BarChart data={VOLUME} labels={["1 İyul", "10 İyul", "20 İyul", "29 İyul"]} height={180} />
                <ChartLegend className="mt-3" items={[{ label: "Telegram" }, { label: "Web link" }]} />
              </>
            ) : (
              <EmptyState preset="responses" inline />
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-5">
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Mənbələr</CardTitle>
              <p className="text-xs text-muted-foreground">Cavabların paylanması</p>
            </CardHeader>
            <CardContent>
              {demo ? (
                <div className="flex items-center gap-4">
                  <DonutChart data={[{ value: 812 }, { value: 472 }]} centerValue="1,284" centerLabel="cavab" />
                  <ChartLegend items={[{ label: "Telegram · 812" }, { label: "Web link · 472" }]} />
                </div>
              ) : (
                <p className="py-6 text-center text-sm text-muted-foreground">Hələ məlumat yoxdur.</p>
              )}
            </CardContent>
          </Card>

          {/* The paywall surface: tone escalates as the limit approaches. */}
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Plan limitləri</CardTitle>
              <p className="text-xs text-muted-foreground">
                {demo ? "Pro plan · avqust 1-də sıfırlanır" : "Pulsuz plan"}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {demo ? (
                <>
                  <UsageMeter label="Aylıq cavablar" used={874} limit={1000} hint="Limitin 87%-i istifadə olunub." />
                  <UsageMeter label="Aktiv bot" used={4} limit={10} />
                  <UsageMeter label="API sorğusu" used={12406} limit={50000} />
                </>
              ) : (
                <>
                  <UsageMeter label="Aylıq cavablar" used={0} limit={100} />
                  <UsageMeter label="Aktiv bot" used={0} limit={1} />
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Card className="shadow-none">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-base">Son cavablar</CardTitle>
              <a
                href="/dashboard/cavablar"
                className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                Hamısı
              </a>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {demo ? (
              RECENT.map((r) => (
                <div key={r.handle + r.at} className="flex items-center gap-3 border-t px-5 py-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-[11px] font-medium text-muted-foreground">
                    {r.name ? initials(r.name) : "—"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{r.name ?? "Anonim"}</p>
                    <p className="truncate font-mono text-xs text-muted-foreground">{r.handle}</p>
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:block">{r.bot}</span>
                  <StatusCell status={r.status} />
                  <span className="w-10 text-right font-mono text-xs tabular-nums text-muted-foreground">{r.at}</span>
                </div>
              ))
            ) : (
              <div className="border-t">
                <EmptyState preset="responses" inline />
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Sistem hadisələri</CardTitle>
          </CardHeader>
          <CardContent>
            {demo ? (
              <ol className="relative space-y-4 before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-px before:bg-border">
                {EVENTS.map((e) => (
                  <li key={e.title} className="relative pl-5">
                    <span className={`absolute left-0 top-1.5 size-[7px] rounded-full ${e.tone}`} />
                    <p className="text-sm font-medium leading-tight">{e.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{e.detail}</p>
                    <p className="mt-0.5 font-mono text-xs tabular-nums text-muted-foreground/70">{e.at}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="py-6 text-center text-sm text-muted-foreground">Hadisə yoxdur.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}

/** A small labelled switch for the demo/real data mode. */
function DemoToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      className="inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60"
      title="Nümunə məlumatları göstər / gizlət"
    >
      <span className={`relative h-4 w-7 shrink-0 rounded-full transition-colors ${on ? "bg-primary" : "bg-muted-foreground/30"}`}>
        <span className={`absolute top-0.5 size-3 rounded-full bg-white transition-all ${on ? "left-[14px]" : "left-0.5"}`} />
      </span>
      Demo
    </button>
  );
}
