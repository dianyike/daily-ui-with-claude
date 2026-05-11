# Daily UI 002 — Credit Card Checkout

**Date**: 2026-05-11
**Figma**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=54-6
**Hero node ID** (Plugin API form): `54:6`
**Direction chosen**: D — Vault / Mechanical (safe-deposit-box metaphor, "hold to authorise" as primary CTA, inputs as dial slots)
**Scenario**: 高端威士忌 cellar 季度訂閱 — Cellar Q2 · 2026 / Cask No. 1947 / Islay Single Malt / NT$ 18,800 季

---

## Purpose Triad

| Axis | Value |
|---|---|
| **Intent** | `make-decision` — 結帳是 conversion 關鍵時刻。Vault 隱喻為高客單價賦予儀式重量，降低高金額遲疑 |
| **Success** | 「20 秒看完 receipt 確認金額，30 秒內開始輸入卡號；按住 CTA 兩秒授權完成」 |
| **Density** | `low-medium` — 單畫面、單中央欄；批號 / cask / 季度三層資訊比 sign-up 多但仍儀式式而非表單式 |

---

## Commit Before Code

**(a) Tone — contrastive rules**
- mechanical-precise, **not** industrial-cold
- ceremonial 莊重, **not** 沉悶 / stiff
- metallic-warmth（古銅 / 霧金）, **not** chrome / sci-fi
- weighted（份量感）, **not** heavy / overdesigned
- single ritual action, **not** form-grind

**(b) Star** — `HOLD-TO-AUTHORISE` 主 CTA（古銅 fill + 左 dial-ring + 右 arrow + 居中 cluster）+ 卡號 dial-window 插槽（4 個獨立 rounded slot，2 個顯示數字 / 2 個顯示佔位點）。按鈕不是「點擊」、是「按住」，視覺上像旋轉解鎖保險箱。

**(c) Motifs**
- `VAULT N°002 ／ CELLAR Q2 · 2026 ／ Cask No. 1947 ／ BATCH N°1947` — 四尺度 batch number echo（plate · subtitle · footer chrome · card slot Q4 "1947" 詩意 echo）
- 中央 ◉◉ 雙點 dial 徽記，作為頁面 anchor
- 小型大寫 + tracked letter-spacing 作為機械精度標記（plate / eyebrow / labels / footer chrome / 數值 values）

**(d) Anchor refs**
- Hermès / Loro Piana checkout（編輯感、重質感、襯線標題、不過度裝飾）
- The Macallan Single Cask product page（cask 號 + batch + release date 當設計主角）
- 古典私人會員存摺 / 銀行保險箱授權書（金屬印刷編號、單頁式 receipt 蓋章）

**(e) Anti-goals**
- not Stripe Checkout default（Inter + blue button + frosted card flip preview）
- not Apple Pay sheet（半透明 + SF Symbols + pill）
- not crypto wallet UI（neon glow + gradient border → kitsch vault）
- not 信用卡公司預設（左 form 右 翻面卡 動畫）

**(f) Color strategy** — **Committed**
- 深底（`color/bg` Dark mode 解析 = 深炭）作為 page bg
- 米白文字（`color/fg` Dark mode 反置）所有 body / value text
- 單一金屬 accent（`color/accent` 古銅 / 鎏橙）**僅保留給 CTA fill 一個位置**
- 所有 chrome / label / eyebrow / dial dots / footer 用 `color/fg-muted`
- 無第二色、無漸層、無發光

**(g) Scene sentence** — 「私人威士忌窖的木桌上，一張摺好的橘黃信箋剛拆開蠟封；旁邊立著一個古銅色的小型保險箱，門上轉盤剛停在 1947。」

---

## Archetype + sanity gate

- 主：**Editorial Manuscript**（receipt = ceremonial document，單中央欄垂直編排，max-w/sm = 960 寬）
- 內嵌：**App-Shell: form**（卡號 dial slots + Hold-to-authorise 是 functional surface — 顯式 mixed-brief 例外，§ 5 boundary 2）
- 編排：1440 × 1120 單欄、欄寬 `max-w/sm`、頂部金屬 plate、receipt 在上、卡號插槽中段、Hold-to-authorise 大按鈕收尾、底部技術 chrome lockup

**Sanity verdict**: PASS — 中央單欄 + 命名 cask + 古銅 plate + 「按住」CTA + 4-尺度 batch echo 讀 Awwwards SOTD，非 Stripe-default

---

## Mode reconciliation

- Publisher `collectionModes` = `['Light', 'Dark']`
- Scene 鎖 Dark；root frame `setExplicitVariableModeForCollection(_, Dark.modeId)`，所有 token 自動解析至 Dark
- PASS, no STOP required

---

## Type pair

- Latin chrome（plate / labels / values / footer / CTA）: bound `typography/family/latin` (Inter, Tech preset publisher token)
- CJK labels（按住授權 / 配送週期 / 持卡人 / 到期 / 安全碼）: bound `typography/family/cjk` (Noto Sans TC)
- **One serif moment**: 標題 "Cellar Q2 · 2026" 用 direct fontName `EB Garamond Regular`（Editorial preset compose proxy）— 不綁 token，這是 daily-001 同樣 trade-off：token 編輯不會 propagate 到此 text，重 compose 才會更新
- Numbers + small caps 用 letter-spacing 8–16% PERCENT 取得 tabular / mechanical 感

Hand-off swap target（未來在 Figma desktop UI）: 
- Display: Gambarino（取代 EB Garamond，更高 contrast 編輯感）
- Body / chrome: Switzer 或留 Inter
- CJK: Noto Sans TC 留

---

## Edit Pass summary

2 visible iterations (v01 → v02)。

| Pass | What changed | Why |
|---|---|---|
| v01 | Initial compose | baseline — accent 同時用在 plate / eyebrow / card label / dial dots，違反 commit (f) `accent reserved for CTA only` |
| v02 | Rebind 3 text + 2 ellipse 從 accent → fg-muted；dial dots 10→14；CTA 從 SPACE_BETWEEN 改 CENTER cluster | 還原 accent 唯一性（fact-uniqueness sweep）；dial dots 比例 + CTA 三件式 cluster 緊湊 |

最終 token-drift 掃描：0 違反（strokeWeight=2 / dot 14×14 / hairline 1×x 為 minimal-ds 未覆蓋的尺寸，非 drift）

---

## Follow-up debt

- **375 mobile breakpoint** — deferred（與 daily-001 同步處理）
- **State variants** — Button-HoldToAuthorise / Field-Name / Field-Exp / Field-Cvv / Slot-Q* 目前僅 default；`state=hover/focused/disabled/holding` 矩陣 deferred
- **Holding 進度動畫** — 靜態 Figma 無法表達 "按住 2 秒填滿環"，視覺說明留在 motion.md（hand-off）
- **Editorial preset republish** — 與 daily-001 相同建議：若 Daily UI 編輯系列繼續，考慮將 `typography/family/latin` 改為 Gambarino 或 EB Garamond 讓 display 也能 token-bind
