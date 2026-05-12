# Daily 004 — Takeaway Card

**Mechanism, not surface.** 距離化的可重用機制，不是這個畫面本身。

---

## archetype
Marquee / Kinetic（主）+ App-Shell form 子層；horizontal tape ribbon 作為「結構元素」承載 5 行迭代歷史，第 4 行被圈中 → 萃取參數 → 結果大字 → save CTA → footer chrome。

## purpose_triad
`make-decision` × medium density × success = 「30s 掃完 5 次試驗 → 一眼看出哪杯對 → 1 點存檔」

## palette_recipe
**Restrained Light**：
- bg = `color/bg` (Light → 感熱紙米白)
- text = `color/fg` (Light → 深炭黑)
- tape ribbon bg = `color/bg-alt` (微深一階，紙張陰影)
- chrome / labels / muted rows / tickmarks = `color/fg-muted`
- accent = `color/accent` **僅保留給「被選中那一列」的 ◉ + ✓ 兩個 marks**（同一 ledger 位置）
- CTA fill = `color/fg`（不偷 accent）

## type_pair
Latin = Inter（bound via `typography/family/latin`；給 chrome / tape rows / param values / labels / CTA chip）
CJK = Noto Sans TC（bound via `typography/family/cjk`；給 caption / param sub / CTA label）
**Two serif moments** = Noto Serif TC Light（direct fontName）：
- 88px → 萃取日誌 N°004 (title)
- 200px → r = 1.38 (result climax)
**Single-field, dual-size, dual-color value** = param card value（`setRangeFontSize` 將 unit 段降至 22px + `setRangeFills` 染 fg-muted）— 不切兩個 text node、保留 tabular baseline

## motifs
- **N-scale `r 1.38` ratio echo（5 個尺度）** — top plate `r 1.38` / tape row Q4 `r 1.38` / SELECTED eyebrow `r 1.38` / result `r = 1.38` 大字 / RATIO `1.38 ×` 行。在五個尺度同步出現同一個數字，建立「這個 ratio 真實存在」的可信度。
- **Selection-by-marking, not by typescale jump** — 被選中那一行的字級與 muted rows 完全一致（textCaption + fg）；選擇感由「rounded outline frame + 左側 ◉ accent + 右尾 ✓ accent」三件套承擔。**避開**把選中元素放大成「不同物種」。
- **Tape edge tickmarks** — 上下兩條 hairline 等距 24 個刻痕（每 4 格高、其餘短）= 機械捲軸 / SCA cupping form 的 signifier。讓「紙帶」這個比喻在視覺紋理層成立，不只是修辭。
- **Mono-tabular single-field value + setRangeFontSize unit** — value 與 unit 是同一 text node、單一 baseline、字級雙層、顏色雙層。比兩個 text node 更 tabular，因為 baseline 完全同步。
- **Single-row ledger of accent** — 整頁飽和色只在 row 04 出現，且兩個 accent 標記都在同一列。眼睛沿著 row 04 從 ◉ → 值 → ✓ 自然掃讀，視覺權威集中。

## why_it_works
1. **History 變成主角，不是輔助欄** — 一般 Calculator UI 把歷史塞 sidebar / drawer / collapsed list。Kinetic Tape Stream 反過來：歷史橫向佔據頁面中央，當下選中的那一行才是「結果」。這把 make-decision 的場景（比較 / 取捨 / 認證）視覺化為 ledger 而非 input form。
2. **Selection 三件套（outline + ◉ + ✓）取代字級跳級** — 選中那一行的字級保持 caption，跟 muted rows 同類。選擇感由三個獨立 signifier 承擔（框、左標、右標）。**這比放大選中行更 editorial**，因為「同類圈中」的視覺語意比「不同物種」更接近 barista 工作筆記本上紅筆畫的圓圈。
3. **Accent 唯一性鎖在同一列** — 整頁飽和色只在 row 04 出現，且兩個位置都在同一 ledger 位置。眼睛沿著該行從 ◉ → 值 → ✓ 自然掃讀，視覺權威集中。
4. **Two serif moments + Latin chrome 對位** — Noto Serif TC Light 只出現在「萃取日誌 N°004」標題與「1.38」結果大字。兩者都是「需要慢讀」的單點，其餘整頁 sans 等寬 chrome 承擔機械精度。serif 與 sans 對位明確、不互相干擾。
5. **Single-field tabular value** — param card 的 `17 g` 是單 text node 雙字級雙顏色。比兩個 text node 更 tabular，baseline 嚴格同步。視覺上像印刷品的「主數值 + 單位下標」，不像 Excel 的「值欄 + 單位欄」。

## figma_url
https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=69-2

---

## 反向應用 (when can I reuse this mechanism)

- **任何「迭代歷史 + 從歷史挑出一個存檔」場景** — 不只 brew log，還包括：dispenser 試色、3D-print 失敗試樣、A/B 測試 variant ranking、攝影底片接觸印樣、樂器 takes 選 master、廚房食譜試味歷史。
- **任何「結果不需要新計算、只需要從候選中認證一個」** — accent 唯一性鎖在「被認證的那個」而非「主 CTA」，CTA 退居為「persist this decision」的次要動作。適用於投票、選稿、選 cover、選 hero shot。
- **任何需要「ledger 文件 + 選中之物」雙層敘事** — top plate + 紙帶歷史 + 圈中之列 + 結果大字 + save chrome 五層編排可以承載：DJ 唱片庫今晚 setlist 認證、植物標本當週選錄、實驗筆記今日結論。

## 反向 anti-pattern (when NOT to use)

- 一般 Calculator / 計算機（純 arithmetic、不關心歷史）— Tape Stream 過度儀式化、會壓掉「快速算數」的效率。
- 多步驟 wizard 計算（mortgage、稅務、保險）— 紙帶單層敘事承受不了多 step 切換，會稀釋。
- 即時計算 dashboard（trading、IoT、運動）— 紙帶適合「離散的、已完成的試驗」而非「持續流動的 stream」。需要連續性的場景應該用 Cinematic Scroll 或 Live Ticker。
- 純單一輸入 → 輸出（單位換算、密碼產生器）— 沒有「迭代歷史」可以擺，Tape Ribbon 會空。
