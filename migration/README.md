# nartalk.com → NarTalk Design System miqrasiyası

Bu qovluq canlı platformanı dizayn sisteminə keçirmək üçündür.
Serverə giriş olmadığı üçün hazırda **hazırlıq mərhələsindədir** — kod
yazılıb, tətbiq edilməyib.

## Canlı platformada nə var (nartalk.com-dan ölçülüb)

| | |
| --- | --- |
| Build | **Vite** — `@vite/client` və HMR aktivdir |
| CSS | **Tailwind CSS v4.2.1** |
| Komponentlər | **shadcn/ui** (`--primary`, `--card`, `--sidebar`, `--popover`, `--ring`, `--radius`) |
| Rəng formatı | `oklch()` |
| Şrift | **Geist** (`--default-font-family: var(--font-geist)`) |
| Radius | `--radius: 0.625rem` (10px) |
| Stylesheet | `app/globals.css` |

## Nəticə: miqrasiya gözləniləndən qat-qat kiçikdir

Dizayn sistemi ilə platforma **eyni təməldədir** — hər ikisi Geist
işlədir, hər ikisində radius 10px-dir, hər ikisi semantik token
məntiqi ilə qurulub. Komponentləri yenidən yazmağa ehtiyac yoxdur.

Yeganə real boşluq: **brend rəngi token sistemində yoxdur.**

```
İndi:  --primary: oklch(0.205 0 0)   ← chroma 0 = tam neytral qara
Olmalı: --primary: oklch(0.5792 0.2192 20.47)  ← Nar #DE1E3E
```

Yəni sayt shadcn-in default neytral temasında işləyir; qırmızı yalnız
ayrı-ayrı yerlərdə əl ilə verilib. `--primary` düzələn kimi bütün
shadcn komponentləri (Button, Badge, Input fokusu, Sidebar, Tabs,
Switch, Checkbox) avtomatik brendə keçir.

## Tətbiq (2 addım)

1. `brand.css` faylını `app/` qovluğuna kopyala.
2. `app/globals.css`-in **sonuna** əlavə et:

```css
@import "./brand.css";
```

Vahid komponent belə dəyişmir. Geri qaytarmaq üçün bir sətri silmək
kifayətdir.

## Nəyi qəsdən dəyişmirik

- **`--radius`** — onsuz da 10px, uyğundur.
- **Şrift** — onsuz da Geist.
- **Neytral rampalar** — shadcn-in zinc/neutral dəyərləri işlək və
  təmizdir; dəyişmək lazımsız risk olardı.

## Nəyi qəsdən fərqli edirik

- **`--primary` = nar-600, nar-500 deyil.** Identity qırmızısı
  `#EF2E4C` ağ üzərində 4.07:1 verir — 14px düymə etiketi üçün WCAG
  AA-dan keçmir. `#DE1E3E` 4.8:1 verir. Logo və böyük başlıqlar
  identity qırmızısını saxlayır.
- **`--destructive` = Brick, Nar deyil.** Qırmızı brenddə qırmızı
  "Sil" düyməsi real təhlükədir — istifadəçi təsdiq düyməsi ilə
  qarışdırır. Brick (`#C22C1D`) narıncıya çalır və gözlə seçilir.
- **`--ring` = Azure, qırmızı deyil.** Qırmızı fokus həlqəsi xəta
  kimi oxunur.

## Növbəti addımlar (server girişi olandan sonra)

1. Repo strukturunu və komponent inventarını çıxarmaq.
2. `brand.css`-i staging-də tətbiq edib vizual diff götürmək.
3. Əl ilə yazılmış hex dəyərləri tapmaq (`grep -rE '#[0-9a-fA-F]{6}'`)
   və tokenlərə bağlamaq — `_adherence.oxlintrc.json` bunu lint
   qaydası kimi tutur.
4. Dark rejimi yoxlamaq — sayt hazırda dark-da açılır.

## ⚠️ Ayrıca tapıntı: production-da Vite dev server işləyir

`nartalk.com`-un cavabında `@vite/client` və HMR importları var —
yəni sayt **dev server** üzərindən verilir, `vite build` çıxışından
yox. Bu:

- səhifəni əhəmiyyətli dərəcədə yavaşladır (modullar ayrı-ayrı
  yüklənir, minify yoxdur),
- mənbə kodunu və qovluq strukturunu açıq göstərir,
- HMR websocket-ini xaricə açır,
- dev server uzunmüddətli işləməyə hazırlanmayıb.

Bu, dizayn sistemindən ayrı məsələdir, amma brend patch-indən daha
təcilidir. Server girişi olan kimi baxa bilərəm.
