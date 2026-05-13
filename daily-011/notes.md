# Daily UI 011 — Flash Sale / Countdown Timer

## Locked brief (Purpose Triad + 7 Commit items + archetype)

### Purpose Triad
- **Intent**: `feel-atmosphere` 為主 + `make-decision` 為輔。觀測情境先於購買行為。
- **Success criterion**：使用者讀完 hero（T-minus + 流星雨名稱 + 剩餘名額）後**主動下捲找預約 CTA**。CTA 放第二屏，逼出觀測情境感。
- **Density**：low。天文台記譜風 = 大量負空間、單一 ROI（時間數字就是主角）。

### Commit Before Code（7 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (4 X but not Y) | 安靜 but 不冷漠 / 精確 but 不冷硬 / 古典 but 不懷舊 / 重量 but 不沉重 |
| (b) | One named star | 中央 `T − 02 H 47 M 39 S` 字串本身。版面視覺重力全被它吸住，其餘節點是衛星 |
| (c) | Motifs (2-3) | 細十字準星 / 細弧線軌道 / 編號座標（RA · Dec） |
| (d) | Anchor refs (≥2) | NASA 1960s Mission Control report cards · Greenwich 皇家天文台手帳印刷品 · Kenya Hara × MUJI catalog · Blue Note 1500 series record sleeves |
| (e) | Anti-goals (≥2) | not SaaS 三卡片 / not gradient cosmic purple-blue / not glow buttons / not 紅字搶購驚嘆號 / not 黑+cyan cyberpunk |
| (f) | Color strategy | **Restrained**：99% 黑白灰 + 1% 觀測紅 accent（只在「現在/NOW」+ CTA hover 出現） |
| (g) | Scene sentence | 「凌晨 3:42 的奇瑞山天文台，觀測員攤開手帳，T-minus 數字在低紅色檯燈下緩慢翻動，窗外的獵戶座剛升起。」→ **DARK MODE locked** |

### Type pair
**Editorial preset** — EB Garamond + Noto Sans TC（compose proxy）。Hand-off swap target：Gambarino（display）+ EB Garamond / Inter（body）+ Noto Sans TC。理由：tabular lining figures 處理 T-minus 數字、Nature/Scientific American 學術期刊基因。

### Mode reconciliation
Scene = dark；publisher `collectionModes = ['Light', 'Dark']` → pass。Main frame 顯式 `setExplicitVariableModeForCollection(coll.id, darkMode.modeId)`。

### Archetype
**Typographic Hero**（Editorial Catalog #2，sibling grid: Centered Monument）

> T-minus 數字串本身就是構圖（display typography *is* the composition）。Supporting copy（流星雨名稱、時間、容量、CTA）subordinate。明確區隔 SaaS Centered Hero：沒有 tagline + 兩個按鈕公式。Motifs 借用 Object Metaphor 的觀測 reticle 作為**結構性**框架（不是 decoration）。

**Editorial sanity gate**: PASS — 朝 Awwwards SOTD 端、避開 SaaS landing。
**Editorial chrome contamination test**: 不適用（Editorial Catalog，非 Functional Archetype）。

## Figma 檔
- **fileKey**: `bDA9MWzNRM9My6grhlE8fj`
- **URL**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100
- **1440 node ID**: `238:51`（Daily 011 — Countdown - 1440）
- **375 node ID**: `248:52`（Daily 011 — Countdown - 375）
- **Component set**: `252:64`（Link-Reserve · 4 states: default / hover / focused / disabled）

## Edit Pass 結果

### 9 sweeps（awwwards-rules §5）
- 5.1 Direct comparison：PASS（每個區段回溯到 Commit 鎖定值）
- 5.2 AI-slop sweep：PASS（無 gradient text / glow card / 3-card grid / Reflex orange）
- 5.3 Squint test：PASS（T-minus 確實第一主角）
- 5.4 State coverage：PASS（Link-Reserve 4 state variants）
- 5.5 Fact-uniqueness：PASS（N° 011 / No. 047 / N° 045-047 各有其職）
- 5.6 Heuristic gut-check：~28/40（observation metaphor 一致、token-bound）
- 5.7 Severity tagging：無 P0 / P1
- 5.8 Polish details：PASS（token-bound、無 stray px、無 widows）
- 5.9 Don't perfect one corner：PASS（各區段質感一致）

### audit.js 機械化掃描
- tokenDrift: **0**
- codegenIssues: **0**
- crossBreakpointDrift: **0**
- missingStates: **0**

## Responsive collapse rules（feed Phase F responsive.md）

| Section | 1440 → 375 |
|---|---|
| Nav | reorder：水平 3 欄 → 垂直 stack 2 行 |
| Hero | T-minus collapse：`text/display` 1 行 → `text/h1` 2 行（T − 02 H / 47 M 39 S）；crosshair hide（mobile 太擠）；trajectory 縮短 |
| Reservation | collapse：左右 2 欄 → 上下 1 欄；vertical divider → horizontal divider；CapacityNumber `text/h1` → `text/h2` |
| ObservationLog | restack：水平表格 5 欄 → 垂直 stack 每筆 3 行 |
| Footer | reorder：水平 2 欄 → 垂直 stack 3 行 |
