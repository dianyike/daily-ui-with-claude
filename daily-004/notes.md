# Daily UI 004 — Calculator

**Date**: 2026-05-12
**Figma**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=69-2
**Hero node ID** (Plugin API form): `69:2`
**Direction chosen**: C — Kinetic Tape Stream（橫向紙帶流、history-as-protagonist）
**Scenario**: Brew Log — v60 拉花萃取試驗工作表（barista 一上午試了 5 杯，挑出第 4 杯存檔）

---

## Purpose Triad

| Axis | Value |
|---|---|
| **Intent** | `make-decision` — 五次試驗，挑出今天值得存檔的 recipe |
| **Success** | 「30 秒掃完試驗歷史 → 一眼看出哪杯 ratio + yield 對 → 一鍵存為 Recipe 04」 |
| **Density** | `medium` — 紙帶歷史 5 行 + 4 個參數 card + 結果面板 + save CTA + footer chrome |

---

## Commit Before Code

**(a) Tone — contrastive rules**
- ribbon-kinetic 紙帶運動感, **not** ticker-stock-feed（不是金融 dashboard 噪訊）
- analog warmth（蠟紙、墨水、感熱紙）, **not** thermal-printer-grey（不要便利商店收據冷灰）
- workbench-laboratory 工作枱實驗室, **not** lab-sterile（不要醫療感）
- tabular-precision 表格精度, **not** spreadsheet-grid（不要 Excel 線框）
- one-marked-winner 單點認證, **not** ranked-list（不是評分排行）

**(b) Star** — **Horizontal Tape Ribbon**：bg-alt 米白紙帶背景，上下兩排 tickmark hairline，5 行萃取試驗橫向排列，第 4 行被 rounded outline frame 圈住 + 左側 ◉ accent dot + 右尾 ✓ accent — 選擇感由「框 + 兩個 accent 標記」承擔，不靠 typescale 跳級。

**(c) Motifs**
- **`r =` ratio key** 在 5 個尺度 echo：top plate `r 1.38` / tape row Q4 `r 1.38` / SELECTED eyebrow `r 1.38` / result 大字 `r = 1.38` / RATIO 行 `1.38 ×`
- **tape tickmarks** 上下兩條 hairline + 等距 24 個刻痕（每 4 格高、其餘短）— 機械捲軸 signifier
- **mono-tabular Latin 數字** + small caps 標籤 + letter-spacing 14–18% PERCENT
- **✓ / ✘ / —** 單字符 row 尾標 — 取代 button group

**(d) Anchor refs**
- 老式收銀機 / adding machine 紙帶（Burroughs / Olivetti）
- Aram Bartholl / Studio Dumbar mono-grid editorial
- SCA cupping form（barista 賽事評分紙的網格紋理 + 手寫圈記）
- Hermès 工藝筆記 / CdG 商品標籤線框 + 等寬編號

**(e) Anti-goals**
- not iPhone Calculator（圓鈕陣 + 彩色運算符 + 黑底）
- not Notion / Linear table（cell 邊框 + emoji + 鬼影 hover）
- not Excel / Google Sheets（grid + header bar + freeze pane）
- not 智能家居 dashboard（卡片堆疊 + 圖標 + 漸層）
- not 健身環 / Apple Health（環形進度 + 漸層 + 打卡感）

**(f) Color strategy** — **Restrained**
- bg = `color/bg`（Light mode → 感熱紙米白）
- text = `color/fg`（Light mode → 深炭黑）
- tape ribbon bg = `color/bg-alt`（比 bg 微深一階，紙張陰影）
- chrome / tape edges / labels / tickmarks / muted history rows = `color/fg-muted`
- borders / hairlines / param card stroke = `color/border`
- **accent = `color/accent`** **僅保留給 row 04 的 ◉ + ✓ 兩個位置（同一列）**。CTA 用 fg fill 而非 accent — 強化 accent 唯一性（與 daily-002 同模式）。

**(g) Scene sentence** — 「barista 工作枱的不鏽鋼桌面上,一捲剛從計算式收銀機抽出的窄紙帶橫向攤開;上面手寫了一上午的萃取試驗,其中第四行旁邊用紅墨水畫了一個圓圈,下面寫著『saved』。」

---

## Archetype + sanity gate

- 主：**Marquee / Kinetic**（`archetype-cheatsheet.md` § 7）— horizontal scrolling tape IS the structural element，motion is the section, not decoration
- 內嵌：**App-Shell: form**（4 個參數 card + save CTA — mixed-brief 顯式例外 per § 5 boundary 2，與 daily-002 同模式）

**Sanity verdict**: PASS — 橫向紙帶 + 5 行萃取試驗 + 第 4 行被圈起 + 紅 ✓ + 米白感熱紙 + zh-TW serif 標題 + 小型大寫 latin 技術行讀起來像 craft 咖啡品牌 / SCA 杯測筆記，不是 iPhone Calculator 或 Excel。

---

## Mode reconciliation

- Publisher `collectionModes` = `['Light', 'Dark']`
- Scene 鎖 Light（感熱紙米白底）；root frame `setExplicitVariableModeForCollection(_, Light.modeId='2:0')`，所有 token 自動解析至 Light
- PASS, no STOP required

---

## Type pair

- Latin chrome（plate / tape rows / labels / values / footer / CTA chip）: bound `typography/family/latin` (Inter, Tech preset publisher token)
- CJK labels（caption / param sub / CTA label）: bound `typography/family/cjk` (Noto Sans TC)
- **Two serif moments** (direct fontName — 與 daily-001/002 同 trade-off):
  - `Noto Serif TC Light` 88px → 萃取日誌 N°004
  - `Noto Serif TC Light` 200px → r = 1.38 大字（result panel）
- Param card value (17 / 272 / 2:30 / 93) 用 Inter 48px + inline unit 22px (`setRangeFontSize`) + `setRangeFills` 將 unit 段染為 fg-muted — 單字段、雙字級、雙顏色

Hand-off swap target（未來在 Figma desktop UI）:
- Display: Gambarino（取代 Noto Serif TC Light，更高 contrast 編輯感）
- Body / chrome: Switzer 或留 Inter
- CJK: Noto Sans TC / Noto Serif TC 留

---

## Edit Pass summary

2 visible iterations (v01 → v02)。

| Pass | What changed | Why |
|---|---|---|
| v01 | Initial compose | baseline — selected row 04 用 textBody 與 muted rows textCaption 對比過強（視覺類別跳級）；caption 用 ASCII 半形逗號；param card 上下兩列（value / cjk-unit），unit 飄離 value；CTA paddingLeft/Right 不對稱 (36/30) |
| v02 | (1) caption `,` → `，` 全形 (zh-TW 正字)。(2) selected row 04 字級降回 caption，選擇感由 outline + ◉ + ✓ 承擔 (fact-uniqueness)，paddingY 18→12。(3) param card 重構：單字段 `17 g` 用 `setRangeFontSize` 22px + `setRangeFills` fg-muted，CJK sub 純 descriptor (豆量/萃出/時間/水溫)。(4) CTA paddingLeft/Right 30/30 對稱 | 還原選擇感的「同類圈中」語意；orthography 正字；參數欄 tabular value+unit 同字段、CJK 段獨立；節奏對稱 |

最終 token-drift scan：**0 違反**（fills + strokes 全 bound 或無填色）

---

## Follow-up debt

- **375 mobile breakpoint** — deferred（與 daily-001 / daily-002 同步處理）
- **State variants** — Button-SaveAsRecipe / TapeRow（hover row 高亮 + 點擊變 selected）目前僅 default；`state=hover/focused/disabled` 矩陣 deferred
- **Kinetic motion** — 靜態 Figma 無法表達「最新一筆從右側滑入、舊筆向左漂移、邊緣淡出」，留在 motion.md（hand-off）
- **Editorial preset republish** — 同 daily-001/002 建議：考慮將 `typography/family/latin` 改為 Gambarino / EB Garamond 讓 display 也能 token-bind
