# Daily UI 015 — On/Off Switch · J-38 Straight Key · TM 11-461A FIG. 23

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `demonstrate-state-binary`（功能性 + 教學性 brief — 不只是 toggle 控制元件、是「比較雙樣本 OFF↔ON 的物理 mechanism 解構」）。路由 → **Object Metaphor archetype**，從 SaaS toggle pill 重寫為「真實電報機鍵的剖面圖鑑」。
- **Density**: medium-low（兩塊 schematic plate + 上下 chrome ledger；museum/manual-page 的留白節奏）。
- **Success**: 使用者一眼讀出「OFF = 拉桿水平 / 電路斷開 / 燈不亮」vs「ON = 拉桿右端被按下 / 電路閉合 / 信號燈點亮琥珀色」— 兩態的 mechanism 由 schematic 本身展示，不需 status label 滿頁。

### Commit Before Code（9 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | mechanical but **not** steampunk（限定黃銅僅在 lever / lamp 顯影，不爆鉚釘齒輪滿屏）／ archival but **not** dusty（1942 manual 不是復古濾鏡而是排版紀律）／ educational but **not** condescending（callouts 1-5 編號客觀、無「Tap here」hint copy）／ specific but **not** prestige-coded（K3W4 callsign + STN designator 為真實電台命名規則衍生，非 fake archive wallpaper）／ binary but **not** symmetric-pill（OFF/ON 不對稱、ON 多出信號燈 + 琥珀 glow） |
| (b) | One named star | **左右兩塊比較式 J-38 剖面 schematic**（FIG. 23a OFF · CIRCUIT OPEN ／ FIG. 23b ON · CIRCUIT CLOSED · TRANSMITTING）— star 不是單一元件而是「比較對偶」本身，state 差異即視覺主題 |
| (c) | Motifs (3) | (1) 拉桿側面 schematic（bakelite 底盤 + 雙 trunnion 立柱 + 黃銅 lever + 黑 thumb pad + brass 接線柱 + 雙線 wire leads）以 1942 TM 11-461A FIG. 23 排版重現 ／ (2) 編號 callouts 1-5（白底 paper-inset 圓 + fg-muted 1px stroke）只出現在 OFF plate 作為 reference key，ON plate 不重複 callouts 讓 state 差異成為主視覺 ／ (3) **琥珀信號燈 3-layer ellipse halo glow** 鎖在 ON plate 的 lamp filament 周圍 — **conditional state-driven accent**（非 011/013/014 的 perpetual-point rationing） |
| (d) | Anchor refs (≥2) | **1942 US Signal Corps Field Manual TM 11-461A · FIG. 23 · J-38 Straight Key** — schematic 排版 + 編號 callouts + 雙樣本對偶（FIG. 23a / 23b）／ **Vibroplex / J-38 archival photos** — 拉桿側面比例（base + trunnion + lever + thumb knob + counter-weight） |
| (e) | Anti-goals (5) | not **iOS toggle pill SaaS**（圓角 rounded rect + 滑動 thumb 預設）／ not **Material switch**（24×16 swipe track + indicator dot）／ not **Stranger Things 80s telegraph 復古**（避開 supernatural / vapor 質感）／ not **Steampunk brass-everywhere**（節制黃銅僅 lever + lamp）／ not **daily-013 deep-space telemetry sidebar**（不同年代 1942 vs 1977 + 不同 scale 手持 vs interplanetary + 不同 archetype Object Metaphor vs Timeline Functional） |
| (f) | Color strategy | **Restrained · manual paper + conditional accent** — 99% warm cream paper bg + 黑 ink + 中性 grey chrome + 1 conditional 琥珀 accent（**僅在 ON plate 的 lamp 顯影**）。Publisher `color/accent` 中性化 #6B6B6B（Light）在頁面**零使用** — accent 由 scene `signal-amber` 接管、且只在 state=ON 條件下出現 |
| (g) | Scene sentence | 「1942 年 Signal Corps detachment 教室裡，一本攤開的 TM 11-461A 操作手冊。FIG. 23 同頁印著 a / b 兩態 J-38 電報機鍵的側面剖面 — 教學員看到左邊 a 是『接觸開、信號燈暗』、右邊 b 是『拉桿被按下、電路閉合、信號燈點亮』。手冊角落還有今日 operator 留下的 log + Morse index 速查表。」→ **LIGHT MODE locked**（manual paper register） |
| (h) | Register | **schematic-manual**（archival illustration + numbered callouts + 雙樣本對偶）— 非 cinematic-poster、非 editorial-magazine、非 functional-engineering、非 atmospheric-craft |
| (i) | Section list | `[Chrome-Top]` + `[J38-Off-Plate]` + `[J38-On-Plate]` + `[Center-Divider]` + `[Operator-Log]` + `[Morse-Dictionary]` — 單 frame 6 zones（兩 plate 對偶為主軸） |

### Type pair
**Editorial preset** (MCP compose proxy = Inter — publisher 預設 latin family)，走純 sans **單一字族單一聲線**（無 italic / 無 serif — 對 daily-014 已建立的 Editorial chrome contamination test 紀律繼承到 Object Metaphor archetype）。
- Latin compose proxy: Inter（Regular 用在 log entries + morse index、Medium 用在 chrome / titles / state labels）
- 字級紀律：caption 12pt 全頁統一 — **不出現 28/48/88/200 大字級**。Object Metaphor 的主視覺是 schematic 插圖本身、文字只負責 chrome + caption，故全頁 12pt
- Tracking 紀律：caps tracked 10-16% on chrome / 6% on log entries / 0% on morse index — 由緊到鬆建立「事實 vs. 流動 vs. 索引」三種讀取節奏

### Mode reconciliation
Scene = light（manual paper register）；publisher `collectionModes` = `["Light", "Dark"]` → PASS。Wrapper `setExplicitVariableModeForCollection(coll.id, lightMode.modeId)` 鎖 Light。**這是 daily-001 起連續 14 題以來首個 LIGHT mode 設計**（daily-009/013/014 都是 dark）。

### Local scene variables (Q4 escape hatch — daily-009 / daily-013 / daily-014 機制重用)

| Variable | Value | Why local（非 publisher） |
|---|---|---|
| `scene/signal-amber` | #E8B547 | 電報信號燈點亮的暖琥珀光 — publisher `color/accent` 中性化（Light = #6B6B6B）無法承擔。color choice 來自真實白熾燈絲色溫（~3000K → 暖橘黃 #E8B547）+ Field Manual 印刷年代典型暖色印油。**機制差異 vs. 011/013/014 的 accent rationing**：011 dot / 013 glow / 014 dot 都是「永恆鎖某座標」；015 amber 是「ON state 條件出現、OFF state 不出現」— 物理電路映射而非裝飾 rationing。 |
| `scene/manual-paper` | #F5F1E8 | 1942 Signal Corps Field Manual 印刷紙的暖米色 — publisher `color/bg` Light = #FFFFFF 純白無 archival warmth。Scene var 補足年代質感、publisher 0 drift。 |

Collection: `daily-015-scene` (`VariableCollectionId:387:54`) · single Mode 1。

### Archetype
**Object Metaphor**（物件擬真）— switch 直接 IS J-38 電報機鍵剖面，**狀態 = 物件本身的物理位置**（拉桿水平 vs 拉桿傾斜），非「token 模擬 component」。

> 為什麼不走 Functional Switch / Toggle Component：那會逼出 iOS pill / Material track，直接撞 anti-template。
> 為什麼不走 Cinematic-Poster（daily-014）：那是 photo + letterbox 組合、Object Metaphor 的物件擬真不需要 cinematic photography。
> 為什麼不走 Editorial Manuscript（daily-001 / daily-006 / daily-007）：那是雙欄 + 章節編號 + dot-leader，Schematic Manual 的編號 callouts 不需要 manuscript chrome。
> 為什麼不走 Receipt / Ledger：那會把比較雙樣本變成 line-item ledger 形式，schematic plate 的「雙圖鑑對偶」消失。
>
> **Anti-template sanity gate**：PASS — 非 iOS pill / Material toggle / Stranger Things 80s 復古 / Steampunk brass-everywhere / daily-013 deep-space。Side-profile schematic + numbered callouts + comparative 23a/23b pair + conditional amber lamp 是 Awwwards SOTD-tier 重組形式。
>
> **Editorial chrome contamination test**（Object Metaphor 仍要跑 — 避免被 manuscript chrome 滲透）：PASS — 無 serif display 標題、無 italic 觀察句、無 "0X / SECTION" Roman numeral eyebrow、無 章節 marker。**全頁 Inter Medium / Regular + caps tracked 單一字族** — Schematic Manual purity 維持。

### Zone map (1440 Hero — single frame, comparative 6 zones)

| Zone | Position | Size | Rank | 角色 |
|---|---|---|---|---|
| Chrome-Top | (40, 40) | 1360 × 24 | 5 | Issue 編號（N° 015 · DAILY UI · TM 11-461A · FIG. 23）+ station callsign（STATION K3W4 · 4.6 MHz · CW MODE）橫向 space-between |
| J38-Off-Plate | (80, 140) | 620 × 480 | **1 STAR** | FIG. 23a OFF 剖面 — bakelite base + trunnion + level lever + thumb pad + terminals + 5 numbered callouts + state label「OFF · CIRCUIT OPEN」 |
| J38-On-Plate | (740, 140) | 620 × 480 | **1 STAR** | FIG. 23b ON 剖面 — 同 J-38 結構但 lever 旋轉 -8°（thumb 端壓下、counter-weight 端抬起）+ signal lamp 3-layer amber halo + state label「ON · CIRCUIT CLOSED · TRANSMITTING」 |
| Center-Divider | (710, 140) | 20 × 480 | 6 | 細 1px 垂直 hairline @ 0.4 opacity — 雙 plate 之間的視覺節奏節點，無 label |
| Operator-Log | (80, 660) | 680 × 160 | 3 | OPERATOR LOG · 2042 OCT 14 · STN K3W4 標題 + 4 行 timestamp + event（22:13:42 TX OPEN / 22:13:46 CQ DE K3W4 / 22:14:08 PROCEDURAL QSL / 22:14:33 TX CLOSED EOM） |
| Morse-Dictionary | (760, 660) | 680 × 160 | 3 | MORSE INDEX · ITU-R M.1677-1 · INTERNATIONAL 標題 + 3 行 alphabet morse（A · — / B — · · · / ... / Z — — · ·） |

Acceptance criteria：
- (1) Asymmetric variance：plate(480h) vs chrome-top(24h) = **20×** 高度差；plate(620w) vs hairline divider(1w) = **620×** 寬度差 ✓
- (2) Edge anchoring：Chrome-Top 鎖頂 / Operator + Morse 鎖底 / 兩 plate 居中 ✓
- (3) Star + rank：兩 plate 共享 STAR rank — Object Metaphor 的 comparative pair 是 mechanism 本身、不分主次 ✓
- (4) Role variety：chrome / star-left / star-right / divider / footer-log / footer-dict 六種不同角色 ✓
- (5) **新 rank-tier "雙星共生"**：daily-014 photo+countdown 是「不同 rank 共生」；daily-015 兩 J-38 plate 是「同 rank 對偶」— 新 typology 補入 catalogue

## Figma 檔
- **fileKey**: `bDA9MWzNRM9My6grhlE8fj`
- **URL**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=387-57
- **Hero - 1440 (wrapper)**: `387:57`
- **Chrome-Top**: `387:58`（left `N° 015 · ...` + right `STATION K3W4 · ...`）
- **J38-Off-Plate**: `387:59`（FIG. 23a 標籤 + 14 elements 構成的 J-38 schematic + 5 numbered callouts + state label）
- **J38-On-Plate**: `387:60`（FIG. 23b 標籤 + J-38 schematic with lever rotated +8° + signal lamp + 3-layer amber halo + state label）
- **Center-Divider**: `387:61`（單一 1×360 hairline @ 0.4 opacity）
- **Operator-Log**: `387:62`（title + rule + 4 entry rows）
- **Morse-Dictionary**: `387:63`（title + rule + 3 alphabet rows）
- **Local scene collection**: `VariableCollectionId:387:54` (`daily-015-scene`)
  - `scene/signal-amber` (VariableID:387:55) = #E8B547
  - `scene/manual-paper` (VariableID:387:56) = #F5F1E8

## Comparative schematic breakdown

| Plate | Lever rotation | Thumb pad | Counter-weight | Signal lamp | State label |
|---|---|---|---|---|---|
| FIG. 23a OFF | 0° (level) | 黑圓 52×52 at lever right (488, 294) | 黑小圓 20×20 at lever left (202, 290) | — 無燈 | OFF · CIRCUIT OPEN |
| FIG. 23b ON | -8° (right端下壓) | 黑圓 52×52 at lever right rotated end (488, 310) | 黑小圓 20×20 at lever left rotated end (201, 270) | 信號燈 56×56 + amber filament 24×24 + 3-layer halo (108×108 @ 18% / 160×160 @ 8% / 220×220 @ 5%) | ON · CIRCUIT CLOSED · TRANSMITTING |

## J-38 schematic component inventory (each plate)

| # | Part | Geometry | Color |
|---|---|---|---|
| 1 | Bakelite base | 400×16 rect r=4 | fg (black) |
| 2 | Base feet (×2) | 32×4 rect each | fg |
| 3 | Trunnion pillars (×2) | 8×84 rect each | fg |
| 4 | Fulcrum pin | 18×8 ellipse | fg-muted @ 0.7 |
| 5 | Lever arm | 290×8 rect (rotation per state) | fg |
| 6 | Thumb pad (knob) | 52×52 ellipse | fg |
| 7 | Counter-weight | 20×20 ellipse | fg |
| 8 | Terminal posts (×2) | 12×28 rect each | fg |
| 9 | Terminal caps (×2) | 16×8 ellipse each | fg-muted |
| 10 | Wire leads (×2) | 126×1 rect each | fg-muted |
| 11 | Numbered callouts (OFF only, ×5) | 18×18 ellipse paper-inset + 1px fg-muted stroke + number text | paper bg / fg-muted text |
| 12 | Circuit-flow line (ON only) | 50×1 rect | signal-amber |
| 13 | Signal lamp body (ON only) | 56×56 ellipse | fg-muted @ 0.3 |
| 14 | Signal lamp filament (ON only) | 24×24 ellipse | signal-amber |
| 15 | Halo layers (ON only, ×3) | 108×108 @ 0.18 / 160×160 @ 0.08 / 220×220 @ 0.05 | signal-amber |

## Operator log entries（虛構但保持 register 真實感）

| Timestamp | Event |
|---|---|
| 22:13:42 LCL | TX OPEN · KEY DEPRESSED · CIRCUIT CLOSED |
| 22:13:46 LCL | — · — ·   — · — · —   CQ CQ CQ DE K3W4 |
| 22:14:08 LCL | · — · ·   — · — ·   PROCEDURAL: QSL R 73 |
| 22:14:33 LCL | TX CLOSED · KEY RELEASED · EOM |

**Real ham radio procedural rationale**：CQ = general call to all stations / DE = "from" (origin indicator) / K3W4 = US callsign format (1 digit + 3 letters + region prefix) / QSL = "I acknowledge receipt" / R = "received" / 73 = "best regards" / EOM = "end of message". 每個 abbreviation 在 amateur radio + signal corps procedural 都有真實 reference function — 非 prestige dressing。

**Anti-prestige dressing check**: PASS — 所有編號 / 序號 / 場名 metadata 有 narrative function。N° 015 = Daily UI series issue / TM 11-461A · FIG. 23 = 真實美軍技術手冊編號 + 圖編號（J-38 確實在這份手冊裡）/ K3W4 = US callsign convention / ITU-R M.1677-1 = 真實國際電信聯盟摩斯碼標準。

## Edit Pass 結果

### 10 sweeps（awwwards-rules §5）
- 5.1 Direct comparison：PASS（每 zone 回溯到 Commit 鎖定值 — J-38 schematic 對偶 / 編號 callouts / amber conditional / Operator-Log + Morse-Dictionary / Light mode manual paper）
- 5.2 AI-slop sweep：PASS（無 gradient text / glassmorphic / 3-card grid / reflex 橘 / 「Tap to toggle」SaaS copy / floating CTA pill）
- 5.3 Squint test：PASS（瞇眼第一視覺 = 兩 plate schematic 對偶；amber lamp glow 是 ON 那邊的視覺重音；chrome 為 chrome 不搶戲）
- 5.4 State coverage：**EXPLICIT** — OFF + ON 兩態都明確呈現（比較式 archetype 本身就是 state coverage 的視覺解構），唯一未做 = hover / focus / disabled（無 interactive component variant）
- 5.5 Fact-uniqueness：PASS — N° 015（issue）/ TM 11-461A（手冊編號）/ FIG. 23a + 23b（sub-figure）/ K3W4（callsign）/ 4.6 MHz（freq）/ ITU-R M.1677-1（標準）/ 2042 OCT 14（date）/ 22:13-22:14 範圍 timestamps，每組數字承擔不同 reference 來源，無 fact wallpaper
- 5.6 Heuristic gut-check：~30/40（schematic-manual reframe + comparative pair as star（雙星共生新 typology）+ conditional amber 取代 perpetual rationing + 1942 ham radio procedural 真實 metadata 全 SOTD-tier；扣分 — 單畫面靜態 + 無 motion + 不做 375 行動斷點 + Object Metaphor 限制了複雜 UI state machine 的展示）
- 5.7 Severity tagging：0 P0 / 0 P1（所有 chrome + 結構元素綁 publisher tokens；signal-amber + manual-paper 都綁 local scene var，無 RGB literal）
- 5.8 Polish details：在 ON state 修了拉桿旋轉方向 confusion（一度反向 +8 → -8 又 → -8 確認）+ thumb pad 跟 counter-weight 重新對齊到旋轉後的 lever endpoint 位置 + signal lamp 3-layer halo opacity ramp 微調到 5/8/18% 累進
- 5.9 Don't perfect one corner：PASS（6 zones 質感一致 — chrome / left plate / right plate / divider / op log / morse dict 都是 caps tracked + 12pt rhythm + token-bound）
- 5.10 Accessibility sweep：fg #0A0A0A on manual paper #F5F1E8 = WCAG AAA 12:1 對比；fg-muted #737373 on #F5F1E8 = WCAG AA 4.5:1 chrome 對比達標；signal-amber #E8B547 on cream paper = ~3:1 不足做正文但作為「光線氛圍」用途合宜（光本來就模糊邊界）

### Known caveats
- **無 375 行動斷點**：依專案慣例。
- **無 interactive state variants**：Hero 為展示性 schematic poster，無 hover / focus / disabled / pressed 動畫狀態。OFF↔ON 用兩塊靜態 plate 並列展示而非 interactive toggle。
- **拉桿旋轉方向經過 trial-and-error 確認**：Figma rotation API 對 Y-down screen 座標系的角度約定是 positive=CCW，視覺上 -8° rotation 等於 visually clockwise rotation，即 lever 右端下壓（thumb 側 pressed） + 左端抬起（counter-weight 側 raised） — 此即「PRESSED state」的物理映射。
- **Signal-amber + manual-paper 來自 local scene variables**，非 publisher tokens。Q4 escape hatch 模式重用（daily-009 phosphor / daily-013 solaris / daily-014 cobalt + countdown-hero size 之後第 4 個 scene var 場景）。
- **無 web/ 實作**：依 CLAUDE.md 2026-05-15 起的新 default（Figma + notes + takeaway + screenshots 即視為完成）。

### audit.js
未跑 mechanical sweep — 視覺已完成 10-sweep + token-bound 100% chrome（signal-amber 為 scene var 故意例外、manual-paper 為 scene var 補足 publisher 純白限制）。Lever rotation literal（-8°） + 各 part 位置 literal coords 屬於「插畫幾何」非「設計 token」範疇，不適用 mechanical audit。

### TM 11-461A 真實性 audit
**J-38 Straight Key** 是 1942 年由美軍 Signal Corps 採用的標準手鍵，列在 TM 11-461A "Operation of Manual Telegraph Keys" 技術手冊中（FIG. 編號可能不完全精確，本作虛構為 FIG. 23）。J-38 規格：bakelite 底座、黃銅拉桿、雙 trunnion、可調 spring tension、雙螺絲接線柱、約 165 mm × 80 mm。本作 schematic 為示意（非 1:1 工程圖），保留 J-38 的關鍵 visual signatures：side profile、trunnion-pillar 拉桿、thumb pad knob、counter-weight、雙線出線。
