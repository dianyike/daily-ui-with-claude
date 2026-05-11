# Daily 002 — Takeaway Card

**Mechanism, not surface.** 距離化的可重用機制，不是這個畫面本身。

---

## archetype
Editorial Manuscript（主）+ App-Shell form 子層；單中央欄垂直編排（max-w/sm），高客單價 conversion 場景。

## purpose_triad
`make-decision` × low-medium density × success = 「20s 看完 → 30s 開始填 → 2s hold 完成授權」

## palette_recipe
**Committed Dark**：
- bg = `color/bg` (Dark mode → 深炭)
- text = `color/fg` (Dark mode → 米白)
- chrome / labels / eyebrow / footer / dial dots = `color/fg-muted`
- accent = `color/accent` **唯一一個位置**：主 CTA fill。任何 chrome 都不能漏 accent。

## type_pair
Latin = Inter（bound via `typography/family/latin`，給 chrome / values / labels）
CJK = Noto Sans TC（bound via `typography/family/cjk`，給 zh-TW labels + CTA 雙語）
**One serif moment** = EB Garamond Regular（direct fontName，作為儀式式標題 e.g. "Cellar Q2 · 2026"）；其餘整頁無 serif

## motifs
- **N-scale batch echo** — 把一個編號（cask / batch / edition / N°）在 3-4 個尺度 echo：plate header / receipt subtitle / footer chrome / 詩意「巧合」位置（如卡號末 4 碼 = batch number）。建立「這個編號真的存在」的可信度。
- **Dial-window slot 替代平鋪 input** — 卡號不畫 16 個底線格也不畫一個長 input，而是 4 個獨立 rounded 小窗（fill=color/bg-alt + stroke=color/border）。立刻產生「機械裝置 / 觀景窗」感而非「填表單」感。
- **小型大寫 + tracked letter-spacing 12–16%** 作為「精度 / 機械標記」的型態詞彙 — 取代 SaaS 預設的 sans-medium body。
- **單 CTA + ring + arrow 居中三件式** — 取代 SaaS 慣性的 SPACE_BETWEEN 兩極排佈；居中緊湊 cluster 暗示「ritual gesture」而非「next step」。

## why_it_works
1. **Accent 唯一性 → 視覺權威集中**：整頁只有一個飽和色，就在「按住授權」CTA。眼睛無處逃，CTA 自帶 gravitas，不需要 hover state 或文案灌水。
2. **Motif 在多尺度 echo → 內容真實感**：Cask 1947 出現在副標、footer、卡號 Q4 槽，讀者下意識相信「1947 是真的」，從而相信這份訂閱授權書本身。
3. **App-Shell 隱身在 Editorial 文件下**：表單本來最容易 SaaS-default，但用 ledger 文件（hairline + space-between label/value row）+ 命名 batch 包裝起來後，form 變成「文件第三段」，不是 hero 主角，編輯感得以延續到操作層。
4. **Dial slots 把功能美學化**：4 個 rounded 小窗 instead of 16 digit fields — 既保留 4×4 quartet 的真實卡號結構，又把「填空」轉化成「轉盤對位」的儀式語言。

## figma_url
https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=54-6

---

## 反向應用 (when can I reuse this mechanism)

- **任何高金額 / 高承諾的 conversion 終點** — 不只 checkout，還包括：簽約、訂金支付、會員入會、捐贈、預約名額、報名截止前的確認。
- **任何「編號可炫耀」的內容** — limited edition、batch number、edition N、發行日期、cask number、版次。Daily UI 003 Landing Page 若主題對得上，N-scale echo 可直接 reuse。
- **任何需要「ceremonial 而非 functional」儀式感的 form** — 不適用於日常表單（登入、搜尋、評論）；適用於「這次操作是一個 moment」的 form。

## 反向 anti-pattern (when NOT to use)

- 一般 SaaS / 行政後台 checkout — 過度儀式化會拉長感知時間、增加放棄。
- 多步驟 wizard checkout — Vault 隱喻無法承受多畫面，會稀釋。
- 高頻 / 訂閱續訂自動扣款 — 不需要 ritual，反而要快。
