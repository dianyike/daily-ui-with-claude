# Daily UI 007 — Settings

**Date**: 2026-05-12
**Figma**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=107-2
**Hero node ID** (Plugin API form): `107:2`
**Direction chosen**: Ledger 偏好帳本(雙欄記帳本 — dot-leader 串連 label→value,italic 邊註)
**Scenario**: 長篇閱讀 / 雜誌訂閱 app 的 settings 頁 — 訂閱者的「account ledger」,3 章 12 項偏好設定 + 「reviewed」audit 紀錄

---

## Purpose Triad

| Axis | Value |
|---|---|
| **Intent** | `make-decision` — 確認/微調個人偏好設定 |
| **Success** | 「30 秒掃完 3 章節 → 確認 12 項設定值正確 → Apply 或返回」 |
| **Density** | `medium` — 3 sections × 4 rows + italic 邊註 × 3 + footer audit row + 雙 CTA |

---

## Commit Before Code

**(a) Tone — contrastive rules**
- bookkeeping-ledger 古典記帳本, **not** iOS-settings-list(圓角 row + 右側 chevron + toggle)
- typeset-print 印刷排版質地, **not** material-card(陰影 + 浮起 + 大量 padding)
- restrained-mono-serif 黑白序列字體, **not** colorful-chip-grid(彩色 toggle + icon)
- chapter-as-section 書本分章邏輯, **not** sidebar-tabs(左欄分頁 + 主面板)
- italic-margin-as-context 邊註解釋, **not** tooltip-popover(滑鼠 hover 才出來的氣泡)

**(b) Star** — **Double-Entry Settings Ledger**:像會計總帳的單欄對開頁,每行 left = label(Inter Medium) · dot-leader 點線 ·  right = value(tabular numerals);三節 ACCOUNT / READING / DELIVERY 用 Roman 章節編號 + serif eyebrow;每節下方一行 EB Garamond Italic 邊註解釋範疇;底部 audit footer + 兩個 CTA。

**(c) Motifs**(每項都有 narrative 功能)
- **Dot leader 點線連接** label → value(古典會計表慣用,印刷術技法)
- **Roman 章節編號** I / II / III(書本分章邏輯,給訂閱頁一種「合約」氣質)
- **Italic margin note** 每節下方一句解釋「這節為什麼存在」— EB Garamond Italic
- **Hairline rule** 區隔章節(極細,印刷術 rule line 慣用)
- **Tabular numerals** 給數字 / enum 值(GMT+8, v.07, 14:08)— Inter `font-variant-numeric: tabular-nums`
- **Audit footer** "Last reviewed 2026.05.12 · 3 entries changed" — 真實 metadata,不裝高級

**(d) Anchor refs**
- 老式雙欄會計總帳(double-entry bookkeeping ledger)
- 書本目錄頁(table of contents)+ dot-leader 章節編碼
- 印刷術 specimen book — type-specimen 頁面節奏
- Quaker / Shaker 文件設計(極致克制 + 表格紀律)
- 法律合約 / 公司章程內頁

**(e) Anti-goals**
- not iOS Settings(圓角列 + 右側 chevron + 大量 toggle + 灰底 group)
- not macOS System Preferences(左 sidebar + 圖標格子 grid)
- not Android Material Settings(彩色 icon + 圓角 chip + ripple)
- not Notion / Linear Preferences modal(modal + tabs + form fields + Save button 右上)
- not SaaS dashboard preferences(toggle row + 灰底 hover + Save bar 黏底)
- not Discord / Slack settings(深色 sidebar + 大量 emoji label + 漸層 button)

**(f) Color strategy** — **Restrained**
- bg = `color/bg`(Light → 米白報紙感)
- text = `color/fg`(深炭墨水)
- labels / margin notes / dot-leader / audit footer = `color/fg-muted`
- hairlines / section rules = `color/border`
- **accent = `color/accent`** **page-level 鎖在 1 個概念位置(Apply CTA)**;atomic uses = 1(button bg)。Restore defaults = ghost outline,fg muted。所有 setting values 0 accent — accent 只在「動作」上,不在「狀態」上。

**(g) Scene sentence** — 「翻開一本訂閱會員的薄帳冊,內頁是清晰的雙欄記帳,每行的左邊寫著項目名,中間有一排細點通到右邊的設定值;三個章節之間有極細的橫線分隔,每節下方有一行斜體小字解釋這節是什麼;最下面寫了上次審查日期,旁邊有一個橙色的『Apply』印章。」→ Light mode

---

## Archetype + sanity gate

- 主:**Editorial Spread**(`archetype-cheatsheet.md` § 1) — 單欄對開頁,印刷質地
- 內嵌:**App-Shell: form**(設定值是 interactive — mixed-brief 顯式例外 per § 5 boundary 2,與 daily-002 / daily-004 同模式)
- 無 Marquee / Kinetic — 設定頁靜態紀律

**Sanity verdict**: PASS — 米白 + dot-leader + Roman 章節 + EB Garamond italic 邊註 + 唯一 Apply accent 讀起來像會計總帳 / 訂閱合約內頁,不是 iOS Settings / macOS System Preferences / Notion 設定 modal。

---

## Mode reconciliation

- Publisher `collectionModes` = `['Light', 'Dark']`
- Scene 鎖 Light(米白報紙感);root frame `setExplicitVariableModeForCollection(_, Light.modeId='2:0')`
- PASS

---

## Type pair

- Latin chrome / labels / values: bound `typography/family/latin` (Inter)
- CJK values(語言 = 繁體中文 等)+ italic 邊註若有 zh: bound `typography/family/cjk` (Noto Sans TC)
- **Serif moments**(direct fontName,延續慣例):
  - `Noto Serif TC Light` 72px → "ACCOUNT LEDGER" hero title(zh 字義 = 帳冊 / 帳本,但實際 hero 使用英文 + zh subtitle)
  - `EB Garamond Italic` 18px → 每節下方 margin note(編輯式 italic 註腳,印刷術)
  - `Inter Regular tabular-nums` → 所有 value(會計表 tabular 必要)

Hand-off swap target(未來 Figma desktop UI):
- Display: Gambarino Regular 取代 Noto Serif TC Light
- Body / chrome: Switzer 或留 Inter
- CJK: Noto Sans TC 留

---

## Edit Pass summary

1 visible iteration(v01 直接成立,免 v02)。

| Pass | What changed | Why |
|---|---|---|
| v01 | Initial 5-call compose | 全套 root + hero title + 3 sections × (Roman eyebrow + hairline + 4 ledger rows + italic note)+ audit footer + Apply/Restore CTA pair 一次到位 |

最終 token-drift scan:**0 違反**(text fills + dot-leader strokes + hairlines + Apply bg + Restore stroke 全 bound;容器 fills 在 compose 時就清空 — 延續 daily-006 v02 的學習)
Accent atomic uses:1(Apply CTA bg + Apply CTA text fg。Restore = ghost outline,page chrome 0 accent — 此版 accent uniqueness 最強)
Out-of-band sizes(非 minimal-ds token 覆蓋):title display 96px、Roman 32px、row body 16px、CTA padding 14/24/32 — 非 token 字級與間距

---

## Compose call log

| Call | Created |
|---|---|
| 1/6 | root `107:2`(1440 × auto-hug)+ Light mode + plate row + hairline + hero title block(`107:7` "Account Ledger." 96px serif + italic intro) |
| 2/6 | Section I — ACCOUNT `108:2`(Roman + section name + hairline + 4 ledger rows:Display name / Email / Subscription / Member since + italic margin note) |
| 3/6 | Section II — READING `110:2`(同結構:Theme / Type size / Language / Reading log + italic note) |
| 4/6 | Section III — DELIVERY `111:2`(同結構:Frequency / Channels / Quiet hours / Time zone + italic note) |
| 5/6 | hairline + footer band `112:3`(audit info 左 + CTAs 右:Restore ghost + Apply accent) |

**關鍵技法 — Dot-leader 點線**
- `figma.createLine()` + `dashPattern: [1, 5]` → 1px 點 + 5px gap 重複,經典印刷術 leader 樣式
- Line 在 HORIZONTAL auto-layout 中設 `layoutSizingHorizontal = 'FILL'` → 自動填滿 label 與 value 之間
- stroke 用 token `color/fg-muted` bind,strokeWeight 1
- 比起用 text node 填 `· · · · · ·` 或 Rectangle border-dashed 都更穩定可靠

---

## Follow-up debt

- **375 mobile breakpoint** — deferred in Figma;web/ 必須補(per CLAUDE.md)
- **State variants** — Apply CTA hover/focused/disabled、Restore ghost hover、Toggle row click 狀態:Figma 此版只做 default,web/ 補
- **Motion in web** — dot-leader 印刷感 stagger 進場;Apply hover 微 lift(無 SaaS bouncy spring);改動列 last-modified timestamp 浮現
- **Live form behavior** — 真實 form submit / validation 留給 v2;此頁是 hero presentation
