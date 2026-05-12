# Daily UI 010 — Social Share

## Editorial direction (locked)

**A. 明信片郵戳 / Postcard Stamp** — 把「分享」做成寄出明信片的儀式，反 viral / 反 SaaS share-sheet。

## Figma source

- File: <https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100>
- fileKey: `bDA9MWzNRM9My6grhlE8fj`
- Frame 1440: `Daily 010 — Social Share - 1440` (node 181:2)
- Frame 375: `Daily 010 — Social Share - 375` (node 189:26)
- Stamp component set: node 178:22 (4 state variants: default / hover / focused / disabled)

## Purpose Triad

| Axis | Value |
|---|---|
| Intent | `feel-atmosphere` — 寄信儀式感，不是 viral 分享 |
| Observable success | 點選郵戳 → 看到「壓印 → 印漬擴散 → POSTED 戳記」回饋；關掉頁面 30 秒後仍記得「明信片」隱喻 |
| Density | `medium` — 一張明信片 + 寄/收件欄 + 6 枚郵戳 + posted 區 |

## Commit Before Code (7 items)

### (a) Tone (X but not Y)
- vellum（米色羊皮紙）— but **not** antique-yellowed filter
- ink-deep — but **not** gothic / horror
- typographic-postal — but **not** stamp-collector kitsch
- ritualistic — but **not** solemn

### (b) Star (一句畫面)
一張米色明信片正中央，右上角壓著一枚深墨郵戳；紅色 cancellation 印痕從郵戳壓下，延伸到卡片紙面上。

### (c) Motifs (2–3)
1. **Postal stamp** — perforated edge + hand-stamped ink
2. **Registered-letter ledger** — monospace 編號、收件欄底線
3. **Ink bleed** — 印漬擴散非整齊圓形

### (d) Anchor references
1. **Japan Post Aerogramme** — 淡色印刷格紙 + 細邊條 piping
2. **Royal Mail Penny Black (1840)** — 單色雕版 + 細密齒孔
3. **Aesop receipt card** — 冷峻 typographic minimalism

### (e) Anti-goals
- **not** Mailchimp 友善 mascot 卡通郵戳
- **not** Etsy 手繪 craft 貼紙
- **not** Notion emoji button row
- **not** Twitter / X 漸層 share sheet

### (f) Color strategy — Restrained
- bg / bg-alt: 米白 vellum（minimal-ds Light `color/bg` / `color/bg-alt`）
- fg: 深墨 ink（`color/fg`）
- accent: cancellation 印泥色（`color/accent` — 朱紅）
- fg-muted / border: 淡墨 / 細齒孔線

### (g) Scene sentence
> A quiet desk at a postal counter — natural daylight on cream paper, a single ink-stamp pressed firmly into the corner of a card, the perforated edge of one stamp visible at the lip.

→ Light mode（與 collectionModes `['Light','Dark']` 對齊）

## Archetype

**Layered Overlap** — 明信片是 layered artifact：
- Hero stamp 壓在卡片右上角（tilted -3°，rotation-jitter on press）
- Cancellation chop 紅圓印壓在 stamp 左下，bleeds onto 卡片身
- Manuscript labels `01 寄件人 / 02 收件人` 分區帶讀者
- (`03 STAMP` 索引試過後拿掉 — wallpaper)

## Interaction model

- **Press toggleable** — 點任一枚郵戳即切換至該 channel，沒有「用過就鎖」
- **Press 動畫**：cell scale-down → 設置 active state（深色 invert）→ chop drops in (scale 0.4 → 1.12 → 1, rotation jitter ±4°)
- **Keyboard**: Tab 切換，Enter 壓印
- **Reduced motion**: 全部過場壓到 0.001ms，動畫塞給 snap

## Edit Pass findings (resolved)

| ID | Severity | Issue | Resolution |
|---|---|---|---|
| EP-01 | P1 | Footer 日期/時間 wallpaper (14:22 × 3, 05.12 × 3) | Footer left 改為 `STUDIO DIANYI · 典億工作室`，日期/時間只留在 postcard chop + posted line |
| EP-02 | P1 | `03 / 郵戳 ── STAMP` margin label 沒讀通（位置脫離 hero stamp） | 移除整個 label，01/02 二段配對就足夠 |
| EP-03 | P0 | Hover variant 黑底黑字看不見 | inner bg 從 `color/bg` 改為 `color/fg`（整個 stamp 沉入印泥） |
| EP-04 | P2 | Hero stamp 原本 bleed out card boundary | 收進 card 邊界內（與 chop 形成內部疊壓，視覺更內斂） |
| EP-05 | P2 | Press 觸發橘色擴散圓圈與 chop 重複 | 移除 ink-bleed，chop 動畫自己夠表達 |
| EP-06 | P2 | Stamp denom 在 web wrap 成兩行 | `white-space: nowrap` + letter-spacing 微調 |

## Token discipline

- 36 minimal-ds tokens 全綁定（38 種 paint / stroke / spacing 經 query 確認 0 unbound — see Edit Pass sweep）
- Component containers（Card / Composition / StampsSection / Footer）皆 fresh auto-layout，沒有 import community Card / Hero / Section template
- Stamp 是 NEW editorial primitive — 不在 minimal-ds 內，編成新 component set with 4 state variants

## Files

- `notes.md` — this file
- `takeaway.md` — distilled mechanism card
- `screenshots/` — Figma 1440 / 375 / Stamp variants + Web 1440 / 375
- `web/` — vanilla HTML + CSS + JS implementation
  - `index.html` — semantic markup
  - `styles.css` — 36 tokens at `:root` + responsive 1024/768/480
  - `script.js` — toggleable press + chop animation + a11y
