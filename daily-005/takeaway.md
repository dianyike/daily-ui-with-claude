# Daily 005 — Takeaway Card

**Mechanism, not surface.** 距離化的可重用機制，不是這個畫面本身。

---

## archetype
Typographic Hero（brand-mark glyph 作為 type-protagonist）+ Centered Monument 軸對稱單欄；深底 page + Light-mode override icon canvas 形成「instrument on chart」對比。

## purpose_triad
`feel-atmosphere` × low density × success = 「3 秒記住 icon 形狀 + 多尺度條證明 5px 仍辨識 + 經緯度 chrome 給可信度」

## palette_recipe
**Committed Dark page + Light icon mark**：
- page bg = `color/bg` (Dark → 深炭近黑，深夜海平線氣壓)
- page text = `color/fg` (Dark → 米白)
- **icon canvas bg = `color/bg` (Light mode override in child frame → cream paper)**
- icon mark hairline + tide dots = `color/fg` (Light → 深炭銀箔印感)
- chrome / lat-long / scale labels = `color/fg-muted`
- accent = `color/accent` **page-level 鎖在「icon mark」一個概念位置**（15 個 atomic uses 全在 icon 內部，page chrome 0 accent）

## type_pair
Latin = Inter（bound via `typography/family/latin`；給 plate / scale labels / footer chrome）
CJK = Noto Sans TC（bound via `typography/family/cjk`；給 caption 潮汐記號 · 測量單一讀數）
**One serif moment** = Noto Serif TC Light 144px（direct fontName）→ "TIDE" brand-mark display，letter-spaced 16% PERCENT 像 chart heading

## motifs
- **Page bg dark + child icon bg Light（雙 mode 同根樹）** — 用 `setExplicitVariableModeForCollection` 在子 frame 強制 Light mode override，產生「instrument-on-chart」物質對比。比手動填 cream 色更可靠 — 換 brand 色時整套 propagate。
- **Icon mark 三件式骨架**：horizon hairline + 17 顆 sine 點 + 1 accent anchor dot/tick — 全幾何、無 path，可以 5px 仍辨識（dot 數量按尺寸 17 / 9 / 5 / 0 階梯式減少，但 horizon + accent 永遠保留）
- **多尺度 strip 證明縮放生存** — 7 個 icon 從 29 / 40 / 60 / 76 / 120 / 180 / 240 px 一字排開。是 brand mark presentation 的 standard editorial move，比單一大 icon 更可信「這真的是個 app icon」
- **N°005 在 4 個尺度 echo + 經緯度 / 潮汐 H/L 時間 chrome** — 把虛構 brand 用「真實儀器資料」包裝得可信（47°45′N / H · 14⁻32 / L · 20⁻47 給 chart-precision 紋理）
- **Accent uniqueness 用「概念位置」而非「atomic count」定義** — 一個 design asset 出現在 N 個尺度仍是同一個位置；page chrome（plate / title / caption / footer）必須完全無 accent，才能維持「accent 鎖在 icon mark」的視覺權威

## why_it_works
1. **Brand-mark 取代 type 成為 Typographic Hero protagonist** — 標準 Typographic Hero 由 display 字頭主導；本頁把 *icon glyph* 當成「視覺 display 字」，「TIDE」serif 標題反退居說明。這把 App Icon 從「Apple HIG 規範附件」提升為「品牌 brand reveal 的主角」。
2. **Dark page + Light icon override = instrument-on-chart 對比** — 在同一 design system 內用 mode override 製造「page 物質感（夜空）」與「icon 物質感（紙張）」的雙層敘事，比手動 cream 色更編輯且更系統化。
3. **多尺度 strip 是 icon design 的「self-proof」** — 把同一 icon 從 29 px 到 240 px 一字排開、按尺寸退化 dot count，等於在頁面上做完整 icon design lecture：「這個 icon 在每個尺寸都活著」。比一張大 icon 截圖更可信。
4. **Accent 用 conceptual location 而非 atomic count 鎖唯一** — 全頁 15 個 accent atomic occurrences 都在 icon 內部，page 任何 chrome 都不偷 accent；這保住 fact-uniqueness sweep 的精神（一個視覺權威集中點）即使物理上散佈多次。
5. **真實儀器 chrome 包裝虛構 brand** — 47°45′N 經緯度、H/L 潮汐時刻、N°005 編號形成「這個 app 似乎真的存在於 22°W 某個港口」的可信度。Editorial brand reveal 的關鍵是讓虛構物變 "discoverable as real"。

## figma_url
https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=83-2

---

## 反向應用 (when can I reuse this mechanism)

- **任何 brand identity reveal / case study 頁面** — 不只 app icon，還包括：studio mark / wordmark / sub-brand 系統的 hero 介紹頁。
- **任何「design asset 需要在多尺度生存」的證明** — favicon · social avatar · printed label · enamel pin · embroidery patch · 路標圖示。Multi-scale strip 是 self-proof 的 standard editorial move。
- **任何需要「page 物質感 vs object 物質感」雙層對比** — gallery exhibition page（dark gallery wall + bright artwork）/ luxury product reveal（dark studio + bright object）/ instrument catalog（dark display case + bright item card）。Dark page + Light child mode override 是這個對比的 systemic 解法。
- **任何虛構 brand 需要 "discoverable as real" 可信度** — speculative design / portfolio fictional case / 教學示範 brand — 經緯度 / 編號 / 製作元資料 chrome 給可信度。

## 反向 anti-pattern (when NOT to use)

- 真實 app store 上架素材 — App Store 截圖需要 hero shot + 5 星評分 + Get 按鈕 + 螢幕截圖陣列，不是 brand reveal。
- 內部 admin dashboard 的 logo 區 — 此頁面尺度過 monumental，不適合 utility surface。
- 高互動 app marketing site — Tide N°005 結構是「凝視式 brand reveal」，沒有 scroll-driven 互動 / video / CTA。需要互動的 marketing 應該用 Cinematic Scroll 或 Bento Asymmetric。
- 多 brand / 子品牌 family 並陳 — Centered Monument 軸對稱單欄不適合 N×M grid。多 brand 應該用 Magazine Index 或 Pinned Collage。
- 圖示本身缺乏幾何純度的 brand — 若 icon 是插畫 / 表情 / 複雜 mark，這套 chart-precision 包裝會「拍打不上」；anchor refs 是 Naoto Fukasawa quiet object，不是 illustrator-driven。
