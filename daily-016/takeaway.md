# Daily 016 · Mechanism Card

> 把 Pop-Up / Overlay 從「SaaS modal dimmer + 圓角白卡 + Accept/Cancel + ✕ close button」的預設重寫成「1960-01-23 Trieste DSV-0 Challenger Deep 降至 8,470m、外艙 Plexiglass 觀察窗結構應力警報觸發、Brush Mark 280 chart recorder 紅墨水筆突然劇烈震盪、一張紙帶 telex 從艙頂 teleprinter 撕下落到儀表台上、Don Walsh 必須在數秒內決定是否中止下潛」。**Pop-up 不是螢幕容器、是物理紙帶 + chart recorder pen-jump 雙重物質化** — 紙帶 telex 從上方傾斜滑落、紅墨水筆 sawtooth pen-jump 同時發生在 chart paper 上、兩者互為證據鏈。

## archetype
Instrument Panel（Functional Archetype · 多儀表控制台 + 條件式 alert state）— 6 zones 同屏整合（HeaderStrip / DialColumn / ChartRecorder★ / ViewportInset / AlertOverlay / ActionBar），其中 AlertOverlay 物理層疊（rank 2 z-layered）在 ChartRecorder（rank 1 STAR）+ DialColumn 之上承載 pop-up 機制。

## register
atmospheric-craft（深海科學儀器探索 + 1960 US Navy ONR engineering register）— 跟 daily-013 deep-space Voyager（interplanetary 23.81 LH）形成「深空 ↔ 深海」對偶。同 register 但 scale 反向、mechanism 完全不同（013 timeline waveform vs 016 instrument panel + paper overlay）。

## purpose_triad
- intent: accomplish-task（功能性 Daily UI category brief — pop-up / overlay 介面），路由到 Functional Archetypes catalog · Instrument Panel
- success: 一眼讀出「紅墨水筆剛剛震盪 = 危險訊號到達」+「3 個 action 印在紙帶 telex 旁供 Don Walsh 判讀」— pop-up 由 chart recorder 紙帶 + 紙帶 telex 雙重物質化承載
- density: medium-high（6 zones 同屏 + 多 instrument readout + 紙帶 trace + paper telex overlay；每 zone 內部 restrained tabular ledger 紀律）

## palette_recipe
- **strategy**：Restrained · dark control room + conditional alert event broadcast — 95% dark + cream paper + ink-graphite；klaxon-red `#C8332A` 在 critical alert state 同步點燃 5 處
- **bg**：`color/bg` (Dark) = #0A0A0A — 控制艙環境暗色
- **bg-alt**：`color/bg-alt` (Dark) = #161616 — HeaderStrip / ActionBar 微提亮
- **surface**：`color/surface` (Dark) = #1A1A1A — ChartRecorder zone 容器
- **fg**：`color/fg` (Dark) = #F5F5F5 — instrument readout 主文 + DialColumn 主值
- **fg-muted**：`color/fg-muted` (Dark) = #A3A3A3 — chrome metadata / serials / labels / subtitles
- **border**：`color/border` (Dark) = #262626 — 1px hairlines / dividers
- **accent** / **accent-fg** / **focus-ring**：**零使用**
- **scene/klaxon-red**：local = #C8332A — **5 處 critical alert state 同步點燃**：(1) chart paper CH B 紅墨 pen trace + sawtooth pen-jump spike / (2) PEN-JUMP 09:47:18 UTC 註記 / (3) DEPTH · CRITICAL label + 6px klaxon dot / (4) ALERT N° 0847 + HULL/STRESS 56pt headline / (5) N°03 EMERGENCY ASCENT serial + title + 10px klaxon dot prefix
- **scene/chart-paper-cream**：local = #E8DDC8 — Brush chart paper substrate + alert telex paper substrate
- **scene/paper-grid**：local = #C8B89C — chart paper grid lines + alert telex perforation row
- **scene/ink-graphite**：local = #1A1A1A — 紙帶上黑墨 trace / 紙帶 telex body 黑墨 / brass 鉚釘 / 4 角螺絲
- **scene/recorder-bezel**：local = #A89E8C — Brush Mark 280 米色金屬機殼烤漆
- **機制差異 vs. 011/013/014 perpetual + 015 binary toggle**：
  - 011 dot @ NOW / 013 Solaris glow @ in-flight / 014 Cobalt dot @ NOW hairline — 都是「永恆鎖某座標」（accent 一直在）
  - 015 amber lamp glow @ ON state — **conditional state-driven binary toggle**（state=OFF 時 0 出現、state=ON 時點亮）
  - **016 klaxon-red @ critical alert state** — **conditional event broadcast**：accent 在 critical alert state 時跨多元素同步點燃 5 處（red trace + pen-jump annotation + DEPTH critical + HULL STRESS headline + N°03 EMERGENCY）
  - **Accent 機制四題演化軌跡**：裝飾 → 永恆座標符號 → 條件 state 物理映射 → **條件式跨元素事件 broadcast**

## type_pair
**Engineering preset** — Inter + IBM Plex Mono 雙字族紀律（呼應 daily-009 / daily-013 atmospheric-craft register 慣例）。
- Inter Bold 56pt — HULL/STRESS 紅色 stamp headline（**唯一大字級**、stamp typewriter overprint 質感、letter-spacing -2% 緊縮）
- Inter Semi Bold 22pt — BRUSH 200 nameplate（serif-free 工程儀器銘牌）
- IBM Plex Mono Medium 32pt — DEPTH 8,470 M（critical 讀數、最大的 mono 字級）
- IBM Plex Mono Medium 28pt — T+ 04:22:18 mission elapsed
- IBM Plex Mono Medium 16pt — N°01-03 action titles
- IBM Plex Mono Regular 18pt — 次級 dial readouts（PRESSURE / OXYGEN / CO2 / HULL TEMP）
- IBM Plex Mono Regular 13pt — alert telex body typewriter 6 行（letterSpacing 4% / lineHeight 175%）
- IBM Plex Mono 12pt caption — chrome / serials / labels（**全頁基準字級**）
- **Tracking 紀律**：18% on ALERT N° 0847 serial（最緊） / 10% on chrome eyebrow / 8% on caption / 6% on serial / 4% on body / -2% on stamp headline / 2% on T+ readout — 七階 caps tracking ramp 由內到外建立 hierarchical reading rhythm
- **跟 daily-013 對比**：013 也是 IBM Plex Mono + Inter 雙字族 atmospheric-craft，但 013 type ramp 較壓平（無 56pt hero）；016 多了 stamp headline 大字級對比，因 alert 需要視覺打斷力
- **跟 daily-015 對比**：015 走「全頁 12pt 單一字級」反向操作；016 回到多字級 ramp 但仍保持單一字族（IBM Plex Mono dominant + Inter 限於 stamp headline + nameplate）— **typography 從 schematic-manual purity 回到 instrument-panel 多級 ramp**

## motifs

1. **Brush Mark 280 chart recorder 紙帶實體重建** — 1960s 真實 Brush Instruments Cleveland Ohio 產品線重現：米色金屬機殼（scene/recorder-bezel #A89E8C）+ 4 角螺絲 + 上 BRUSH 200 / BRUSH MARK 280 黑色銘牌（Inter Semi Bold + IBM Plex Mono caps tracked subtitle）+ 中央 chart paper（cream substrate + 5 horizontal grid + 5 vertical grid）+ CH A 黑墨 depth descent calm sinusoidal trace + CH B 紅墨 hull strain calm baseline → sawtooth pen-jump spike at leading edge + 雙 pen carriage triangle 指針（black + red）+ 底部 BRUSH INSTRUMENTS · CLEVELAND OHIO · MODEL BL-274 · SERIAL N° 4218 銘牌。**Recorder 不是 SaaS chart widget、是 1960 真實工業儀器的物件擬真**。

2. **Pen-jump sawtooth artifact = 物理 alert evidence** — CH B 紅墨 trace 在 calm baseline（y=320）平滑進行後突然在 x=466 起出現 sawtooth pen-jump（y=280 / 360 / 230 / 370 / 250 / 380 / 240 / 355 / 285 振盪）— 模擬真實 chart recorder 在 strain gauge 超出 threshold 時、紅墨筆機械臂無法跟上輸入信號的「pen jump」物理 artifact。**Alert evidence 不是 toast 文字提示、是紙上的物理墨水痕跡**。配 PEN-JUMP 09:47:18 UTC 紅色註記指向 spike，把時刻錨定為可考證的時間戳。

3. **物理紙帶 telex overlay 取代 SaaS modal 容器** — overlay event 由實體紙帶承載：960×240 紙帶 paper（scene/chart-paper-cream）旋轉 +1.4°（剛從艙頂 teleprinter 撕下滑落到儀表台上的動態）+ 頂緣 48 顆 perforation 圓點（scene/paper-grid）= 「tear-here」物理 cue + 雙重 drop shadow（黑色 32 radius + 紅色 24 radius spread 4 = emergency lighting halo）+ left ALERT N° 0847 紅色 stamp serial + HULL/STRESS 56pt Inter Bold 紅色 overprint + vertical paper-grid divider + right 6 lines IBM Plex Mono 13pt typewriter body。**Overlay = 物理紙物件 + tilt 角度 + 撕下痕跡 + drop shadow 三重物質化證據**。

4. **Klaxon-red conditional event broadcast 5 處同步點燃** — `scene/klaxon-red #C8332A` 只在 critical alert state 出現於 5 個精準位置：(1) chart paper CH B trace + pen-jump spike / (2) PEN-JUMP 註記 / (3) DEPTH · CRITICAL label + 6px dot / (4) ALERT serial + HULL/STRESS headline / (5) N°03 EMERGENCY action（serial + title + 10px dot prefix）。其餘 zones（HeaderStrip / ViewportInset / N°01/N°02 actions / DialColumn 其他讀數）**零 klaxon-red 出現** — restraint 嚴格、accent 不被稀釋為裝飾。**機制 vs daily-015**：015 是「state binary toggle」（ON / OFF 二分點亮）；016 是「event broadcast」（critical state 同步點燃 5 處跨元素 — accent 從「狀態指示」演化為「事件廣播訊號鏈」）。

5. **Plexiglass viewport 觀察窗 + marine snow + floodlight beam = 物理深海 atmospheric anchor** — 380×380 圓形 port frame（鋼圈 + 12 brass 鉚釘環繞、每顆 30° 排列）+ 320×320 圓形 inner Frame（cornerRadius 160 + clipsContent + radial gradient navy-black）內含：單一 floodlight beam（280×36 rotated -28° + linear gradient warm-white）+ 25 顆 marine snow 粒子（bound to color/fg + 個別 node.opacity 0.39-0.61 atmospheric variation per F11 finding）。**Viewport 不是裝飾窗、是「深度 + 黑暗 + 微弱可見度」的物理視覺地基**。

6. **DialColumn tabular ledger 取代 SaaS dashboard 圓形 gauge widget** — 6 行垂直 ledger（TELEMETRY · LIVE 標題 + DEPTH critical row + PRESSURE / OXYGEN / CO2 / HULL TEMP 4 次級 rows + 底部 serial signature），每 row = label（IBM Plex Mono caps tracked 8-10% 12pt）+ value（IBM Plex Mono Medium 18-32pt）+ 1px hairline。**呼應 daily-007 Account Ledger 紀律**（label→value dot-leader 模式變體 — 016 用 vertical stack 取代 horizontal dot-leader）+ daily-013 telemetry sidebar 4 sections 風格繼承。

7. **真實 metadata 反 cosplay 座標** — 全頁 metadata 全部錨在真實 1960 Trieste mission 或工程文件 plausible reference：USS WANDANK ATA-204（真實 mothership）/ CHALLENGER DEEP（真實位置）/ 11°22.4′N 142°35.5′E（真實座標）/ 10,916 M（真實 crush depth）/ Brush Mark 280 + Cleveland Ohio（真實儀器型號 + 廠址）/ Strain Gauge WP-04 + ONR-1960-23 + TM-9-1547（工程文件 plausible 編號）/ Observer P-W + DUO-1（Piccard-Walsh code）。**Anchor 同 daily-013 用真實 Voyager / DSN 工程 metadata 策略**（per `feedback_no_prestige_dressing.md`）。

8. **Layered overlay = 新 rank typology「rank 1 STAR + rank 2 OVERLAY 物理層疊」** — daily-014「不同 rank 共生」（photo=1 + countdown=2 同畫面但不層疊）；daily-015「同 rank 對偶」（兩 plate 共享 STAR）；**daily-016「rank 1 + rank 2 物理 z-layered」**（AlertOverlay 紙帶物理覆蓋在 ChartRecorder + DialColumn 之上）。Rank 2 overlay 由 drop shadow + 傾斜角度 + perforation 撕痕 三重視覺承載「物理疊加」而非「z-index higher」。**Layered overlay 補入 rank typology catalogue**。

## why_it_works

1. **Mechanism reframe（Instrument Panel + Physical Paper Overlay）取代 SaaS modal 預設**：標準 Pop-Up / Overlay 是 dimmer + 圓角白卡 + Accept/Cancel + ✕。daily-016 把 pop-up 還原為「物理紙帶 telex 從 teleprinter 撕下落到儀表台」+「chart recorder 紅墨水筆同時 pen-jump」雙重物質化 — **overlay event 由物理介質承載而非數位容器**。撕下痕跡 / 傾斜角度 / drop shadow / perforation 都是物理證據而非 UI 隱喻。

2. **Conditional event broadcast 5 處同步取代 perpetual single-point accent**：011/013/014 把 accent 鎖在「某座標一個點」永恆出現；015 把 accent 升級為「state binary toggle」；**016 把 accent 升級為「conditional cross-element event broadcast」** — critical alert state 觸發時 5 個跨 zone 的元素（trace + annotation + label + headline + action）同步點燃 klaxon-red。Accent 從「位置符號」演化為「事件訊號鏈」。**這是 accent 機制四題演化的第四階段**：裝飾 → 座標 → state → 事件。

3. **物理證據鏈三重物質化** = chart recorder 紙帶上紅墨 pen-jump（物理紀錄、無法偽造）+ 紙帶 telex paper（物理通訊載體、從 teleprinter 撕下）+ 紅色 emergency lighting wash（物理光源、控制艙 klaxon 燈）。**Overlay event 的可信度來自三重物理介質而非 SaaS modal「請確認」軟性提示**。

4. **Atmospheric-craft 對偶（013 ↔ 016）**：同 register 但 scale 兩極（interplanetary 23.81 LH ↔ deep-sea 8,470m）+ mechanism 反向（013 timeline waveform vs 016 instrument panel + overlay）。**Register × Mechanism 二維 orthogonal — 同 register 可承載不同 mechanism、同 mechanism 可承載不同 register**，補入 register-mechanism orthogonality 證據。

5. **Functional Archetype Instrument Panel 取代 Editorial Manuscript / Cinematic-Poster 預設**：Pop-Up / Overlay 是功能性 brief（accomplish-task），必須走 Functional Archetypes catalog 而非 Structural。Instrument Panel 適合「多儀表 readout + 條件式 alert state」組合，比 Object Metaphor（daily-015 單一物件）/ Control Surface（按鍵主導）/ Timeline（daily-013 時間軸）更精準。**Functional Archetypes catalog 第 2 次應用**（015 是 Object Metaphor / 016 是 Instrument Panel — Functional 軸線開始展開）。

6. **Anti-pill action 系列繼承** = 3 actions 是 N°XX serial prefix + 純文字 title + subtitle，**不是 button component**。N°03 EMERGENCY 用 klaxon-red dot + 紅色 emphasis 而非 primary button 圓角藍色色塊。**呼應 daily-008 / 010 / 013 / 015 anti-pill 系列**（無 SaaS pill / 無圓角藍色按鈕 / 無 Accept/Cancel）— 新一層證據累積。

7. **Editorial chrome contamination test PASS（Functional Archetype 必跑）** — 全頁無 serif display headline（HULL/STRESS 用 Inter Bold sans）/ 無 Roman numeral chapter（I/II/III）/ 無 italic margin notes / 無 EB Garamond 引言。Functional Archetype 不被 Editorial Manuscript chrome 污染、engineering register purity 維持。

8. **回到 DARK MODE 第 2 個 atmospheric-craft entry**：daily-013 / 014 / 016 都是 Dark；daily-015 是 series 第一個 Light（schematic-manual register 必須）。**Light / Dark mode 由 register 決定**而非 series 內部 alternation rhythm — register-locked mode reconciliation 紀律。

9. **5 scene vars 累積到第 5 個 Q4 escape hatch 場景**（009 phosphor 7 vars / 013 solaris-amber 1 var / 014 cobalt-azure + countdown-hero 2 vars / 015 signal-amber + manual-paper 2 vars / **016 klaxon-red + chart-paper-cream + paper-grid + ink-graphite + recorder-bezel 5 vars**）— 016 是迄今最多 scene vars 單題。**Scene vars 從「補單一 accent color」演化為「補完整紙物質介面色板」**，因 instrument-panel 需要 dark 控制艙 + cream 紙物質雙重環境（publisher Dark 純黑無紙質）。

10. **Layered overlay rank 2 typology 補入 catalogue** — daily-014 不同 rank 共生 / daily-015 同 rank 對偶 / **daily-016 rank 1 + rank 2 物理 z-layered**。Rank typology 第三種型態：overlay event 由 rank 2 z-layered on rank 1 承載物理覆蓋，drop shadow + tilt + perforation 三重視覺證據。

## anti-goals 證據（避開的陷阱）

- ❌ SaaS modal dimmer + 圓角白卡 + Accept/Cancel + ✕ close button → 無 dimmer 圖層 + 紙帶 telex 取代圓角卡 + 無 ✕（紙帶不可關閉、必須三選一）+ N°01/02/03 取代 Accept/Cancel
- ❌ iOS confirmation 圓角藍色文字按鈕 → 無 iOS pill / 無藍色 + N°XX serial + klaxon-red conditional dot
- ❌ Bioshock Rapture art deco 1950s underwater → 無 retrofuturism geometric + 真實 1960 US Navy ONR engineering 嚴肅 register
- ❌ Stranger Things 紅光 upside-down supernatural → 紅光是物理 emergency klaxon（C8332A 深紅、略偏橙、非螢光鮮紅）+ 無 vapor / 無 supernatural 氛圍
- ❌ Titan 2023 內爆事件 → 完全避開、無相關 metadata
- ❌ Cold War Soviet K-class CCCP submarine → 鎖 US Navy / Italian-designed Trieste、無 CCCP / 西里爾標記 / 軍事 register
- ❌ daily-009 Tokyo broadcast phosphor green CRT → 不同年代（1960 vs 1986）+ 不同 register（atmospheric-craft vs synthwave-CRT）+ scale 反向
- ❌ daily-013 deep-space Voyager telemetry sidebar → 同 register 但 mechanism 完全不同（timeline waveform vs instrument panel + overlay）+ scale 兩極（interplanetary vs deep-sea）
- ❌ Apple iOS modal → 無 grouped action list + 無 blue text button + 無 圓角 modal container
- ❌ Wikipedia infobox → atmospheric-craft 是 1960 紙質工業 register、非 modern info-card 風

## why_not_alternative_archetypes
- **Object Metaphor**（daily-015） → 015 是「switch IS J-38」單一物件物理位置；016 的 overlay 不是單一物件、是 6 zones instrument panel + 條件式 alert overlay event，Object Metaphor 框不住多元素 + 條件狀態變化。
- **Control Surface** → Control Surface 強調「動作控制集合」（拉桿 / 旋鈕 / 按鍵實體面板），016 的主視覺重心在「紀錄式 instrument readout + alert event」而非「操作介面」。Action bar 只佔 80h（11% 高度），不夠 Control Surface 主導性。
- **Timeline**（daily-013） → 013 是 waveform burst 時間軸 functional；016 chart recorder 紙帶雖然有時間軸性質，但 archetype 主視覺重心在「instrument readout + condition alert」、紙帶只是其中 1 個 zone（陪襯 DialColumn + ViewportInset + AlertOverlay）— Timeline 框不住整個 brief。
- **Receipt / Ledger** → Receipt 是 line-item 條列、不適合 instrument readout + alert combo。DialColumn 雖然有 ledger 味但只是 6 zones 之一。
- **Diagram**（schematic 解構） → Diagram 是 schematic 解剖（daily-015 範圍），016 主重心在「現場儀表讀數 + alert event」而非「結構解剖」。
- **Storyboard**（漫畫序列） → 撞 daily-008 4-panel narrative 機制、且 alert overlay 是「單一時刻物理證據」、非序列敘事。
- **Editorial Manuscript** / **Cinematic-Poster** → 是 Structural Archetypes，不適用於 accomplish-task functional brief。

## figma_url
- File: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=404-55
- Daily 016 — Trieste Hull Stress Alert - 1440 wrapper: `404:55` (x=9007, y=1936, 1440×900)
- Overlay-HeaderStrip: `404:56`
- DialColumn: `404:57`
- Overlay-ChartRecorder: `404:58`
  - Overlay-BrushHousing: `410:54`
  - Overlay-ChartPaper: `411:54`
- Overlay-ViewportInset: `404:59`
  - Overlay-PlexiglassPort: `414:55`
  - Overlay-Plexiglass-Inner: `415:54`
  - TelemetryBlock: `416:54`
- Overlay-ActionBar: `404:60`
- Overlay-AlertOverlay: `404:61`
  - Overlay-AlertTelex-Paper: `417:54`
- Scene collection: `daily-016-scene` (`VariableCollectionId:403:54`) · 5 vars · Mode 1

## Reuse signals — 未來重組這套機制的線索
- **Pop-Up / Overlay / Notification / Toast 介面** — 把「模態容器 + Accept/Cancel」還原為「物理介質物件 + 事件廣播 accent」
- **緊急 / 警報 / Critical state 介面** — 反 Stranger Things 紅光、走真實 emergency lighting 物理光源；accent 從「狀態指示」升級為「事件 broadcast 訊號鏈」
- **Instrument panel / Dashboard / Telemetry 介面** — 反 SaaS dashboard 圓形 gauge widget、走 1960s 真實工業儀器 tabular ledger
- **科學探索 / Mission control 介面** — 用真實 mission metadata（座標 / 設備型號 / 工程文件編號）作 chrome 可信度地基，反 prestige cosplay 座標
- **物理介質 metaphor**（紙帶 / 票根 / 收據 / 明信片）取代 SaaS rounded-rect 容器 — 呼應 daily-010 postcard / daily-014 ticket stub / daily-016 chart paper telex 系列
- **條件式跨元素 accent broadcast 機制** — 比 perpetual single-point accent 更精煉的限制策略，accent 跨元素同步點燃但仍維持 5 處 restraint
- **首次同 register 跨 entry 兩極 scale 對偶** — atmospheric-craft 013（深空 23.81 LH）↔ 016（深海 8,470m）證明 register × scale 二維 orthogonality；未來可繼續展開（atmospheric-craft × 地心 / atmospheric-craft × 細胞 / atmospheric-craft × 量子）
- **5-var scene collection 「補完整介面色板」模式** — 當 register 跟 publisher Dark/Light 完全不對齊時（例如紙質介面 + 暗環境）、scene vars 從「補單色」升級為「補色板」
