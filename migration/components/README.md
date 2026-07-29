# Platforma üçün komponentlər

Bu fayllar dizayn sistemindəki funksionallığı **platformanın öz
stack-ində** yenidən yazır: React 19 + TypeScript + Tailwind v4 +
shadcn konvensiyaları + `lucide-react`.

Dizayn sistemindəki orijinal versiyalar vanilla React + `.nt-*` CSS
sinifləri ilə yazılıb — o forma platformaya uyğun gəlmir. Buradakılar
`cn()` util-ini, shadcn token adlarını (`bg-card`, `text-muted-foreground`,
`ring-ring`, `border-destructive`) və Tailwind siniflərini işlədir, ona
görə mövcud kod bazasına təbii oturur.

## Fayllar

| Fayl | Hara qoyulur | Nə verir |
| --- | --- | --- |
| `lib/status.ts` | `lib/status.ts` | `NT_STATUS` — 24 status açarı (label + ton + glif) və ton→Tailwind xəritəsi |
| `nartalk/status-badge.tsx` | `components/nartalk/` | `StatusBadge`, `StatusDot`, `StatusCell` |
| `nartalk/charts.tsx` | `components/nartalk/` | `Sparkline`, `BarChart`, `DonutChart`, `ChartLegend`, `UsageMeter`, `StatCard` |
| `nartalk/flow-node.tsx` | `components/nartalk/` | `NT_NODES` (10 blok tipi), `FlowNode`, `Edge`, `EdgeDefs`, `NodePalette` |
| `nartalk/flow-canvas.tsx` | `components/nartalk/` | `FlowCanvas` (pan/zoom/drop), `CanvasToolbar` |
| `nartalk/otp-input.tsx` | `components/nartalk/` | `OtpInput` |
| `nartalk/empty-state.tsx` | `components/nartalk/` | `NT_EMPTY` (12 hazır boş vəziyyət), `EmptyState` |

Şərt: `@/lib/utils`-dən `cn()` (shadcn ilə birlikdə gəlir) və
`brand.css` (`migration/brand.css`) tətbiq olunmuş olmalıdır.

## Nə üçün məhz bunlar

`package.json`-da bu funksiyalar üçün lazım olan kitabxanalar yoxdur —
yəni bu səthlərin qurulmadığı yüksək ehtimallıdır (bax `AUDIT.md`,
bölmə 5):

- **flow canvas** — `@xyflow/react` yox → bot qurucusu
- **drag & drop** — `@dnd-kit` yox → sual sıralaması
- **qrafiklər** — `recharts` yox → dashboard analitikası
- **status lüğəti** — heç bir kitabxana ilə gəlmir, məhsula xasdır

## Qəsdən verilmiş qərarlar

**Sıfır yeni asılılıq.** Qrafiklər və canvas əl ilə SVG/transform-dur.
`@xyflow/react` (≈50kb) edge yenidən marşrutlaşdırma, marquee seçim və
nested subflow lazım olanda düzgün seçimdir — o vaxta qədər dotted div
üçün böyük runtime-dır. `FlowCanvas` node mövqelərini saxlamır, çağıran
tərəf saxlayır: yəni sonra `@xyflow`-a keçid props səviyyəsində qalır.

**Rəng heç vaxt yeganə siqnal deyil.** Hər status sözlə və glifle
gəlir. `StatusDot`-da label məcburidir — çılpaq nöqtə kifayət deyil.

**`OtpInput`-da bir gizli input var, altı ayrı input yox.** Altı ayrı
input paste, autofill (`one-time-code`), IME və mobil klaviaturanı
sındırır.

**Canvas-da seçim ring-dir, fill deyil.** Fill dəyişməsi kateqoriya
çipi ilə toqquşur və "seçilmiş" node başqa tipli node kimi görünür.

**Boş vəziyyət mətnləri `NT_EMPTY`-dədir.** Çağıran yerdə yeni mətn
yazmaq yerine preset işlədilir — eyni vəziyyət hər yerdə eyni oxunur.
`search` və `filter` ayrıdır, çünki bərpa yolları fərqlidir.

**`UsageMeter`-in tonu istifadə ilə artır** (75% → amber, 90% →
destructive). Bu bar monetizasiya səthidir: limit yaxınlaşdığını
istifadəçi görməlidir, rəqəm həmişə yazılır.

## Yoxlanılmayıb

Bu fayllar TypeScript üçün tiplənib və shadcn konvensiyalarına uyğun
yazılıb, amma **real kod bazasında kompilyasiya edilməyib** — çünki
repo mənə görünmür. `@/lib/utils` yolu və `tailwind` konfiqi
fərqlidirsə, importlar düzəliş istəyə bilər. Serverə giriş olan kimi
`tsc --noEmit` ilə yoxlayıb düzəldəcəm.
