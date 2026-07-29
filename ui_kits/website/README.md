# UI kit — nartalk.com marketing site

A recreation of the live marketing page, section for section, using **the real copy** taken from nartalk.com.

## Section order (as on the live site)

1. **Nav** — logo lockup, five links (İmkanlar · Necə işləyir · Qiymətlər · Təhlükəsizlik · Blog), "Daxil ol" + "Pulsuz başla"
2. **Hero** — pill eyebrow *"Kod yazmadan Telegram bot yaradın"*, the H1 *"Telegram-da data toplamağın ən sadə yolu."*, the sub-paragraph, two CTAs, and the reassurance line *"Kredit kartı tələb olunmur · 5 dəqiqəyə hazırdır"*
3. **HeroApp** — the product rendering under the hero. The live site shows a dashboard mock here; this rebuilds it from **real design-system components** (`SidebarItem`, `Card`, `StatusBadge`, `Sparkline`, `QuestionBlock`) at the same information density: Botlarım / Cavablar / İstifadəçilər / Tənzimləmələr, the @muraciet_bot card with 1,284 / 148 / 326, and the bot-builder panel with *"5 sual · Avtomatik saxlanılır"*
4. **HowItWorks** — *"Sadə qur. Dərhal paylaş."* with steps 01 / 02 / 03
5. **Features** — *"Bot üçün lazım olan hər şey bir yerdə."*, the six feature cards in a hairline-divided grid
6. **Pricing** — Pulsuz ₼0 / Pro ₼29 (marked *Ən populyar*) / Biznes Fərdi, with the exact feature lists
7. **Cta** — *"İlk botunuzu bu gün yaradın."* on Ink, with the monochrome mark
8. **Footer** — the four real link columns and the copyright line

## What is faithful, and what is not

**Faithful:** every heading, every sub-paragraph, every feature title and description, every plan name, price and feature bullet, the step wording, and all footer links — copied verbatim from the live page. Section order and hierarchy match.

**Interpreted:** the visual treatment. The site's compiled stylesheet could not be read, so type sizes, spacing, borders and the hero composition are rendered in this design system's language rather than measured from the original. This is a **brand-consistent recreation, not a pixel match** — see the note at the top of the root `readme.md`. Given the site's CSS, this file should be reconciled against it.

The page is static — links do not navigate. It exists to prove the system covers the marketing surface as well as the product.
