import { Bot, ChartNoAxesColumn, Download, Inbox, Plus, ShieldCheck, Users } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, ChartLegend, DonutChart, Sparkline, StatCard, UsageMeter,
} from "@/components/nartalk/charts";
import { StatusCell } from "@/components/nartalk/status-badge";

/**
 * Dashboard overview, rebuilt against the design system's dashboard kit.
 *
 * Numbers are still literals — the data layer is not wired yet. They are
 * collected here at the top rather than scattered through the JSX so that
 * swapping them for queries is a single, obvious edit.
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
  return (
    <DashboardShell
      active="İcmal"
      title="Ümumi baxış"
      description="Botlarınızın son vəziyyəti və əsas göstəricilər."
      action={
        <>
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
          label="Cavablar" value="1,284" delta="+12.4%" hint="Son 30 gün" icon={Inbox}
          chart={<Sparkline data={VOLUME} height={30} />}
        />
        <StatCard label="Aktiv bot" value="4" hint="10 limitdən" icon={Bot} />
        <StatCard
          label="Unikal istifadəçi" value="326" delta="+8.1%" hint="Son 30 gün" icon={Users}
          chart={
            <Sparkline
              data={VOLUME.map((v) => v * 0.7)}
              color="var(--chart-2, oklch(0.5753 0.2043 261.99))"
              height={30}
            />
          }
        />
        <StatCard label="OTP təsdiqi" value="94.2%" delta="-1.3%" hint="Uğur nisbəti" icon={ShieldCheck} />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Card className="shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Cavab həcmi</CardTitle>
            <p className="text-xs text-muted-foreground">Son 30 gün · bütün botlar</p>
          </CardHeader>
          <CardContent>
            <BarChart data={VOLUME} labels={["1 İyul", "10 İyul", "20 İyul", "29 İyul"]} height={180} />
            <ChartLegend className="mt-3" items={[{ label: "Telegram" }, { label: "Web link" }]} />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-5">
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Mənbələr</CardTitle>
              <p className="text-xs text-muted-foreground">Cavabların paylanması</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <DonutChart data={[{ value: 812 }, { value: 472 }]} centerValue="1,284" centerLabel="cavab" />
                <ChartLegend items={[{ label: "Telegram · 812" }, { label: "Web link · 472" }]} />
              </div>
            </CardContent>
          </Card>

          {/* The paywall surface: tone escalates as the limit approaches. */}
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Plan limitləri</CardTitle>
              <p className="text-xs text-muted-foreground">Pro plan · avqust 1-də sıfırlanır</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <UsageMeter label="Aylıq cavablar" used={874} limit={1000} hint="Limitin 87%-i istifadə olunub." />
              <UsageMeter label="Aktiv bot" used={4} limit={10} />
              <UsageMeter label="API sorğusu" used={12406} limit={50000} />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Card className="shadow-none">
          <CardHeader className="pb-3">
            {/* shadcn's CardHeader is a grid, so the row is built here rather
                than by overriding its layout with flex-row. */}
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
            {RECENT.map((r) => (
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
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Sistem hadisələri</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
