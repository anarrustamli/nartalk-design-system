# nartalk.com — platforma auditi

**Tarix:** 30 İyul 2026 · **Metod:** açıq səthin müşahidəsi (marketing
səhifələri, `/login`, `/blog`, `/dashboard`, `package.json`,
`app/globals.css`, route yoxlaması)

> **Auditin sərhədi.** Məhsulun özü — dashboard, qurucular, developer
> alətləri — Supabase auth arxasındadır və mənə görünmür. Aşağıdakı
> **"nə edir"** və **"biznes məntiqi"** bölmələri açıq səthdən
> oxunub: bunlar yüksək əminliklidir. **"Nə qurulub, nə qurulmayıb"**
> bölməsi isə asılılıq manifestindən çıxarılan **nəticədir, sübut
> deyil** — hər bənddə əminlik dərəcəsi göstərilib. Serverə giriş
> olan kimi bu bölmə bir neçə dəqiqədə təsdiqlənə/düzələ bilər.

---

## 1. Məhsul nə edir

NarTalk **Telegram üzərindən strukturlaşdırılmış data toplama**
platformasıdır. Öz sözləri ilə: *"Telegram-da data toplamağın ən sadə
yolu."*

Əsas iş axını üç addımdır (saytın özü belə təsvir edir):

1. **Botunu qur** — hazır data bloklarından vizual olaraq sual axını
   yaratmaq, kod yazmadan.
2. **Girişi təyin et** — bot hamı üçün açıqdır, yoxsa yalnız icazəli
   istifadəçilər cavab verə bilər.
3. **Datanı idarə et** — cavabları paneldə izləmək, axtarmaq,
   filtrləmək, ixrac etmək.

Toplanan data tipləri: mətn, seçim, telefon, foto, fayl, lokasiya.
Yəni məhsul sadəcə "chatbot qurucusu" deyil — **Telegram-ı forma
interfeysinə çevirən data toplama alətidir**. Google Forms-un
Telegram-daxili ekvivalenti, üstəgəl giriş nəzarəti.

## 2. Kim üçündür

İki ayrı auditoriya, bir məhsulda:

| Auditoriya | Nə istəyir | Məhsulda hansı hissə |
| --- | --- | --- |
| **Qeyri-texniki sahibkar** | 5 dəqiqəyə işlək bot, proqramçısız | Vizual qurucu, şablonlar, hazır data blokları |
| **Developer / komanda** | API, webhook, OTP, icazələr | API açarları, webhook imzası, OTP, rol matrisi |

Bu ikilik məhsulun mövqeləndirməsinin özəyidir: *"İlk botunuz üçün
proqramçıya ehtiyac yoxdur"* — amma altda real infrastruktur var.
Dizayn sistemi bu ikiliyi tanıyır (sadə qurucu səthi + `developer/`
komponent qrupu) və bu düzgün qərardır.

## 3. Biznes məntiqi

**Model:** freemium SaaS, aylıq abunə, manatla.

| Plan | Qiymət | Limitlər | Rolu |
| --- | --- | --- | --- |
| **Pulsuz** | ₼0 / ay | 1 aktiv bot, ayda **100 cavab**, əsas data blokları | Cəlbetmə |
| **Pro** | ₼29 / ay | 10 aktiv bot, **limitsiz cavab**, fayl və lokasiya, CSV ixracı | Əsas gəlir |
| **Biznes** | Fərdi | Limitsiz bot, komanda üzvləri, prioritet dəstək | Enterprise |

**Monetizasiya mühərriki — cavab sayı.** Pulsuz planın əsas həddi
aylıq 100 cavabdır. Yəni gəlir *istifadədən* asılıdır, yerdən deyil:
botu quran adam onu paylaşdıqca limitə yaxınlaşır. Bu sağlam modeldir,
çünki ödəniş anı dəyərin real hiss edildiyi anla üst-üstə düşür.

**İkinci qapı — data tipləri.** Fayl və lokasiya Pro-dadır. Bunlar
məhz "ciddi" istifadə hallarıdır (sənəd qəbulu, çatdırılma ünvanı),
yəni biznes istifadəçisi təbii olaraq Pro-ya keçir.

**Üçüncü qapı — CSV ixracı.** Datanı çıxarmaq Pro funksiyasıdır.
Diqqətli olmaq lazımdır: istifadəçinin öz datasını çıxarmasını
bağlamaq bəzi bazarlarda mənfi qarşılanır və GDPR-tipli tənzimləmə ilə
toqquşa bilər. Alternativ: ixracı açıq saxlayıb limiti bota/cavaba
bağlamaq.

**Biznes planında komanda üzvləri** — bu, seat-based genişlənmə
qapısıdır və rol/icazə matrisinin nə üçün lazım olduğunu izah edir.

## 4. Texniki vəziyyət (ölçülmüş)

| | |
| --- | --- |
| Framework | **Next.js 16.2.6**, **React 19.2.6** |
| Build/runtime | **vinext 0.0.50** + **Vite 8** + **Cloudflare Workers** (wrangler 4.92) |
| CSS | **Tailwind v4.2.1** |
| Komponent kitabxanası | **shadcn/ui v4** + **@base-ui/react** |
| İkonlar | **lucide-react** |
| Şrift | **Geist** |
| Auth | **Supabase** — Google OAuth + e-poçt/şifrə |
| DB / ORM | **Supabase** + **Drizzle ORM** (`db:generate` skripti var) |
| Repo adı | `site-creator-vinext-starter` |

**Mövcud route-lar:** `/` · `/login` · `/dashboard` (auth guard) ·
`/blog`. Yoxdur: `/signup`, `/pricing`, `/bots`, `/forms`,
`/responses`, `/settings`, `/app`.

### Dizayn sistemi ilə üst-üstə düşən yerlər

Dizayn sistemi qurulanda üç şey **təxmin** edilmişdi. İkisi düz çıxdı:

- ✅ **Geist** — təsdiqləndi (`--default-font-family: var(--font-geist)`)
- ✅ **Lucide** — təsdiqləndi (`lucide-react` asılılıqdadır)
- ✅ **Radius 10px** — təsdiqləndi (`--radius: 0.625rem`)

Bu, `readme.md`-dəki "açıq suallar"ın üçünü bağlayır. Dizayn sistemi
platforma ilə **eyni təməldədir** — bu, miqrasiyanı kiçildir.

### Əsas boşluq: brend token qatında yoxdur

```
--primary: oklch(0.205 0 0)   ← chroma 0 = tamamilə neytral qara
--sidebar: oklch(0.205 0.014 265)
```

Sayt shadcn-in **default neytral temasındadır**. Brend qırmızısı
`#EF2E4C` token sistemində ümumiyyətlə yoxdur — deməli qırmızı hara
düşürsə, əl ilə düşür. Bu, `brand.css` ilə həll olunur (aşağıda).

## 5. Nə qurulub, nə qurulmayıb (NƏTİCƏ — təsdiq lazımdır)

`package.json`-da **olmayan** paketlər güclü siqnaldır. Aşağıdakılar
məhsulun elan etdiyi funksiyalar üçün praktik olaraq məcburi olan
kitabxanalardır:

| Elan edilən funksiya | Lazım olan tipik paket | Manifestdə | Nəticə |
| --- | --- | --- | --- |
| **Vizual bot qurucu** (flow canvas, node-lar) | `@xyflow/react` / `reactflow` | ❌ yox | Yüksək əminliklə **qurulmayıb** |
| Sual sıralaması (drag & drop) | `@dnd-kit/*` | ❌ yox | Yüksək əminliklə **qurulmayıb** |
| Analitika qrafikləri | `recharts` / `visx` | ❌ yox | Orta-yüksək: qurulmayıb *(əl ilə SVG mümkündür)* |
| Cavablar cədvəli (sort/filter/pagination) | `@tanstack/react-table` | ❌ yox | Orta: sadə cədvəl ola bilər |
| **Telegram bot runtime** | `telegraf` / `grammy` | ❌ yox | Ya ayrı servisdədir, ya **qurulmayıb** |
| Forma validasiyası | `react-hook-form` + `zod` | ❌ yox | Orta: validasiya nazikdir |
| Tarix formatlanması | `date-fns` / `dayjs` | ❌ yox | Aşağı risk, əl ilə mümkündür |

**Ən mühüm nəticə:** məhsulun *baş səhifədə birinci vəd etdiyi*
funksiya — vizual bot qurucusu — çox güman hələ qurulmayıb. Repo adı
(`site-creator-vinext-starter`) və mövcud route-ların azlığı da bunu
dəstəkləyir: platforma **marketing + auth mərhələsindədir**, məhsul
nüvəsi hələ qarşıdadır.

Bu, dizayn sisteminin nə üçün dəyərli olduğunu dəyişir: bu, mövcud
UI-ı yenidən rəngləmək məsələsi deyil — **qurulacaq ekranların hazır
spesifikasiyasıdır.**

## 6. ⚠️ Production-da dev server işləyir

`nartalk.com` cavabında `@vite/client`, `@react-refresh` və HMR
importları var — sayt `vinext build` çıxışı yox, **dev server**
üzərindən verilir.

Nəticələri:
- Modullar ayrı-ayrı, minify olunmadan gedir → səhifə əhəmiyyətli
  dərəcədə yavaşdır
- Mənbə strukturu və HMR websocket-i xaricə açıqdır
- Dev server uzunmüddətli/yüklü işə hazırlanmayıb
- SEO və Core Web Vitals zərər görür

Bu, brend patch-indən **daha təcilidir**. `npm run build` + `npm start`
(və ya Cloudflare-ə `wrangler deploy`) ilə həll olunur.

## 7. Tövsiyə olunan sıra

1. **Build məsələsi** — production-a build çıxışı vermək. (Ən təcili,
   ən kiçik iş.)
2. **`brand.css`** — brendi token qatına bağlamaq. Bir import,
   komponentlərə toxunmadan bütün shadcn səthini brendə keçirir.
3. **Status lüğəti** — `lib/status.ts` + `StatusBadge`. Hər ekranda
   lazım olur, ona görə birinci komponent bu olmalıdır.
4. **Qrafiklər və metrik kartları** — dashboard üçün, sıfır asılılıqla.
5. **Bot qurucusu (flow canvas)** — ən böyük iş, ən böyük dəyər.
6. **Forma qurucusu + məntiq qurucusu.**
7. **Developer alətləri** — API açarları, webhook log, OTP, rollar.

Addım 2–4 üçün kod artıq yazılıb (`migration/`). Qalanları serverdəki
mövcud strukturu görəndən sonra dəqiq yazmaq daha düzgündür — indi
yazsam, mövcud route/komponent adlarını təxmin etməli olaram.
