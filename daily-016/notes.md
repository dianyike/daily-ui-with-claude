# Daily UI 016 — Pop-Up / Overlay · Trieste Hull Stress Alert · Brush Mark 280 Chart Recorder

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `accomplish-task`（功能性 Daily UI category brief — pop-up / overlay 介面）。路由 → **Functional Archetypes catalog · Instrument Panel**（多儀表控制台 + 條件式 alert state），從 SaaS modal dimmer + 圓角白卡 + Accept/Cancel 重寫為「1960 Trieste 深淵挑戰者控制艇儀表台 + Brush chart recorder 紙帶 pen-jump alert + 紙帶 telex 物理浮層」。
- **Density**: medium-high（6 zones 同屏 + 多 instrument readout + 紙帶 graph trace + 紙帶 telex overlay — 但每 zone 內部 restrained tabular ledger 紀律，非 Bloomberg-terminal heatmap）。
- **Success**: 使用者一眼讀出「紅墨水筆剛剛震盪 = 危險訊號到達」+ 「3 個 action 選擇被印在紙帶 telex 上方供 Don Walsh 判讀」— **pop-up 本身是物理紙帶 + chart recorder pen-jump 雙重物質化**，不是 SaaS modal dimmer + 圓角卡。

### Commit Before Code（9 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | archival-engineering but **not** Bioshock retrofuturism（1960 真實 US Navy 工程文件美學、非 Rapture art deco）／ sober-restrained but **not** clinical-stainless（控制艙暗淡 + 紙帶暖 cream、非 modern hospital UI）／ klaxon-urgent but **not** Stranger Things horror（紅光是 emergency lighting 物理光源、非 supernatural vapor）／ specific but **not** prestige-coded（Brush Mark 280 / Cleveland Ohio / US Navy ATA-204 都是真實規格、非 fake archive wallpaper — 呼應 `feedback_no_prestige_dressing.md`）／ critical but **not** sensational（pen-jump 鋸齒是物理 recorder 行為、非 Hollywood dramatic effect） |
| (b) | One named star | **Brush Mark 280 chart recorder 紙帶 telex**（CH A 黑墨 depth descent calm trace + CH B 紅墨 hull strain sawtooth pen-jump spike at leading edge）— star 是 recorder 紙帶本身 + 上面紅墨剛剛震盪的證據，**pop-up 機制由紙帶物質化承載**而非 modal 容器 |
| (c) | Motifs (3) | (1) Brush 200 / Mark 280 chart recorder 米色金屬機殼（scene/recorder-bezel #A89E8C）+ 4 角螺絲 + 上下 black plate 銘牌；CH A/CH B 雙筆 carriage 機制重現自 1960s 真實 Brush Instruments Cleveland Ohio 產品線 ／ (2) 紙帶 telex paper（scene/chart-paper-cream #E8DDC8）從上方傾斜 -1.4° 滑落到 control panel 上、頂緣 perforation row（剛從 teleprinter 撕下）+ HULL/STRESS 56pt Inter Bold 紅色 stamp overprint + IBM Plex Mono 13pt typewriter body — overlay 是物理紙物件而非數位容器 ／ (3) **Klaxon-red 條件式 accent**（scene/klaxon-red #C8332A）只在 alert state 出現於 4 個位置：紅墨 pen trace + pen-jump 註記 + DEPTH critical label + N°03 EMERGENCY ASCENT — **accent 機制四題演化軌跡**：011 dot（永恆 NOW 座標）→ 013 amber glow（in-flight burst）→ 014 cobalt dot（hairline NOW）→ 015 amber lamp（state binary toggle）→ **016 klaxon-red（normal/critical 二態 + 5 處 conditional 同步點燃）** |
| (d) | Anchor refs (≥2) | **1960-01-23 Trieste DSV-0 Challenger Deep descent**（Don Walsh + Jacques Piccard / USS Wandank ATA-204 mothership / 11°22.4′N 142°35.5′E coordinates / 10,916m crush depth / Krupp pressure sphere）— 真實歷史事件 metadata，非 fictional ／ **Brush Mark 280 chart recorder**（Brush Instruments Cleveland Ohio · 真實 1950s-60s analog strip chart 機型，US Navy 大量採購配置於潛艇監測）／ **1960s US Navy ONR engineering documentation**（technical report typography + serial numbering convention "ONR-1960-23" / "TM-9-1547" / "Strain Gauge WP-04"） |
| (e) | Anti-goals (6) | not **SaaS modal dimmer + 圓角白卡 + Accept/Cancel**（pop-up 不是 box-with-dimmer、是物理紙帶 telex）／ not **iOS confirmation 圓角藍色文字按鈕**（actions 是 N°01-03 + klaxon-red dot 取代）／ not **Bioshock Rapture art deco 1950s underwater**（避開 retrofuturism、走真實 1960 US Navy ONR 工程文件嚴肅紀律）／ not **Stranger Things 紅光 upside-down supernatural**（紅光是物理 emergency klaxon、非 horror vapor）／ not **Titan 2023 內爆事件**（敏感、避開）／ not **daily-009 Tokyo broadcast phosphor green CRT**（同為儀表台 register 但 1960 oceanographic ≠ 1986 broadcast、scale 反向 ≠ 不同年代）／ not **daily-013 deep-space Voyager telemetry sidebar**（同為 atmospheric-craft register 但 mechanism 完全不同 — 013 是時間軸 waveform timeline、016 是 chart recorder paper + alert overlay；scale 反向：013 interplanetary 23.81 LH ↔ 016 deep-sea 8470m）／ not **Cold War Soviet K-class CCCP submarine cosplay**（鎖 US Navy / Italian-designed Trieste、非 Soviet 軍事 register） |
| (f) | Color strategy | **Restrained · dark control room + conditional alert accent** — 95% dark + cream + ink-graphite；klaxon-red `#C8332A` 是 conditional accent（normal state 0 出現、critical alert state 5 處同步點燃）。Publisher `color/accent` 中性化 Dark = #B5B5B5 在頁面**零使用** — alert 由 scene/klaxon-red 接管、且只在 critical alert state 條件出現（呼應 daily-015 conditional accent 從 toggle 演化為 normal/critical 二態 alert） |
| (g) | Scene sentence | 「1960-01-23 09:47:18 UTC，Trieste DSV-0 降至 Challenger Deep 8,470m，外艙 Plexiglass 觀察窗 Strain Gauge WP-04 結構應力警報觸發 — 控制艙紅色 emergency klaxon lighting 浸染，Brush Mark 280 chart recorder 紅墨水筆突然劇烈震盪繪出 sawtooth pen-jump，一張紙帶 telex 剛從艙頂 teleprinter 撕下落到儀表台上，紅色 HULL STRESS overprint 印著 142.3 kgf/mm² 超出 138.0 限值、Don Walsh 必須在數秒內決定是否中止下潛。紙帶 telex 上印著三個動作選項：CONTINUE / HOLD / EMERGENCY ASCENT。」→ **DARK MODE locked**（emergency control room register） |
| (h) | Register | **atmospheric-craft**（深海科學儀器探索 + 1960 US Navy ONR engineering register）— 跟 daily-013 deep-space Voyager 形成「深空 ↔ 深海」對偶。Both atmospheric-craft，但 mechanism 完全不同：013 是 timeline waveform；016 是 instrument panel + paper telex overlay |
| (i) | Section list | `[HeaderStrip, DialColumn, ChartRecorder★, ViewportInset, AlertOverlay, ActionBar]` — 單 1440×900 viewport 內部 6 zones，**非 multi-section scroll**（單屏 Daily UI 慣例，呼應 013/014/015） |

### Type pair
**Engineering preset** — 走 Inter + IBM Plex Mono 雙字族紀律（呼應 daily-009 / daily-013 atmospheric-craft register）。
- **Inter Bold** 56pt — HULL/STRESS 紅色 stamp headline（唯一大字級）
- **IBM Plex Mono Regular/Medium** — 所有 instrument readout / dial value / body telex / chrome metadata
  - 32pt — DEPTH 8,470 M（critical 讀數）
  - 28pt — T+ 04:22:18 mission elapsed
  - 22pt — BRUSH 200 nameplate（Inter Semi Bold）
  - 18pt — PRESSURE / OXYGEN / CO2 / HULL TEMP 次級讀數
  - 16pt — N°01-03 action titles
  - 13pt — body telex typewriter style
  - 12pt — caption（chrome + serials + labels）
- **Tracking 紀律**：caps tracked 4-18%（serial / nameplate / headline 由緊到鬆建立 hierarchical reading rhythm）
- **Letter-spacing on red headline** = -2%（緊縮 stamp 質感、模擬 typewriter overprint）

### Mode reconciliation
Scene = dark（emergency control room register）；publisher `collectionModes` runtime = `["Light", "Dark"]` → PASS。Wrapper `setExplicitVariableModeForCollection(pubColl, darkMode.modeId)` 鎖 Dark。第二題 LIGHT 後回到 DARK series（daily-015 是 series 首個 Light、016 回到 Dark 與 013/014 對齊）。

### Local scene variables (Q4 escape hatch — daily-009 / 013 / 014 / 015 機制重用)

| Variable | Value | Why local（非 publisher） |
|---|---|---|
| `scene/klaxon-red` | #C8332A | 緊急警報紅 — publisher `color/accent` Dark 中性化 #B5B5B5 無法承擔危險語意。色相選擇來自 1960 US Navy klaxon 燈罩玻璃濾色片 + Field Manual 警示印油（深紅、略偏橙、非螢光鮮紅、避開「Stranger Things 紅光」橙紅冷光）。**機制差異 vs. 011/013/014 perpetual + 015 binary toggle**：016 是 normal/critical 二態同步 5 處點燃（red trace + pen-jump annotation + DEPTH critical label + HULL STRESS headline + N°03 EMERGENCY action），accent 從「state toggle」演化為「條件式同步事件 broadcast」。 |
| `scene/chart-paper-cream` | #E8DDC8 | Brush chart recorder 紙帶 + alert telex 紙物質實體 — publisher `color/bg` Dark = #0a0a0a 無紙質基底。Cream 色相來自 1960s 真實 chart paper + teletype paper 印油吸潤後的暖米色（非純白、非奶油、非黃化老化色）。**呼應 daily-015 manual-paper #F5F1E8** 但更深一階（series 內部紙質階梯：015 manual cream → 016 chart paper cream → 暗示未來題的 ceremonial cream / aged cream 分支可能性）。 |
| `scene/paper-grid` | #C8B89C | Chart paper 1mm grid lines + alert telex perforation row — 比 chart-paper-cream 暗 ~18% L 的同色相 darker tone。Publisher 0 token 在此範圍，scene var 補足。 |
| `scene/ink-graphite` | #1A1A1A | 紙帶上的黑墨水筆 trace + alert telex body typewriter 黑墨 + 4 角螺絲 + 12 顆 plexiglass 鉚釘。**單一語意 = 「紙上印油」**（與 publisher `color/bg` Dark = #0a0a0a 接近但語意不同 — bg 是控制艙環境暗色、ink-graphite 是紙上印刷物質）。 |
| `scene/recorder-bezel` | #A89E8C | Brush Mark 280 米色金屬機殼 — 真實 Brush Instruments 機殼烤漆色（warm tan-grey）。Publisher 無 mid-tone warm metallic token、scene var 補足。 |

Collection: `daily-016-scene` (`VariableCollectionId:403:54`) · single Mode 1 · 5 variables。

### Archetype
**Instrument Panel**（多儀表控制台 + 條件式 alert state）— Functional Archetype。Pop-Up / Overlay UI category brief routed 至 **Functional Archetypes catalog**（非 Structural），因為 intent = `accomplish-task`（決策動作介面）。

> 為什麼不走 **Object Metaphor**（daily-015）：015 是「switch IS J-38」單一物件物理位置；016 的 overlay 不是單一物件 — 是 6 zones instrument panel 加上條件式 alert overlay event，多元素 + 條件狀態變化，Instrument Panel 比 Object Metaphor 更精準。
> 為什麼不走 **Control Surface**：Control Surface 強調「動作控制集合」（拉桿 / 旋鈕 / 按鍵實體面板），016 的主視覺重心在「紀錄式 instrument readout + alert event」而非「操作介面」。Action bar 只佔 80h（11% 高度），不夠 Control Surface 主導性。
> 為什麼不走 **Timeline**（daily-013）：013 是 waveform burst 時間軸 functional；016 chart recorder 紙帶雖然也是時間軸性質，但 archetype 主視覺重心在 "instrument readout + condition alert"，紙帶是其中 1 個 zone（陪襯 DialColumn + ViewportInset + AlertOverlay）— Timeline 框不住整個 brief。
> 為什麼不走 **Receipt / Diagram**：Receipt 是 ledger-style line-item（不適合 instrument + alert combo）；Diagram 是 schematic 解構（daily-015 範圍），016 主重心在「現場儀表讀數 + alert event」而非「結構解剖」。
>
> **Anti-template sanity gate**：PASS — 非 SaaS modal dimmer + Accept/Cancel / 非 iOS confirmation / 非 Bioshock retrofuturism / 非 Stranger Things 紅光 / 非 Titan 2023 / 非 Cold War K-class CCCP / 非 daily-009 phosphor CRT / 非 daily-013 deep-space sidebar。1960 Trieste deep-sea control room + Brush Mark 280 chart recorder + 紙帶 telex pop-up + conditional klaxon-red 是 Awwwards SOTD-tier 重組形式。
>
> **Editorial chrome contamination test**（Functional Archetype 必跑）：PASS — 全頁無 serif display headline、無 Roman numeral chapter（I/II/III）、無 italic margin notes、無 EB Garamond pull-quote。HULL/STRESS headline 使用 Inter Bold（sans）非 serif；body 使用 IBM Plex Mono；chrome 使用 IBM Plex Mono caps tracked — engineering register purity 維持。

### Zone map (1440 × 900 — single frame, 6 zones)

| Zone | Position (in wrapper) | Size | Rank | 角色 |
|---|---|---|---|---|
| HeaderStrip | (0, 0) | 1440 × 56 | 5 | 任務 metadata 橫向 strip：TRIESTE · DSV-0 · USS WANDANK ATA-204（left）+ CHALLENGER DEEP · 23 JAN 1960 · 09:47:18 UTC（center）+ DIVE LOG N° 64-3 · OBSERVER P-W · DUO-1（right）+ 底部 1px hairline |
| DialColumn | (0, 56) | 240 × 704 | 3 | 垂直 tabular ledger（呼應 daily-007 Account Ledger 紀律）：TELEMETRY · LIVE 標題 + **DEPTH · CRITICAL 8,470 M（紅色 critical label + 紅 6px dot）** + PRESSURE BAR 847.2 + OXYGEN % 18.4 + CO2 % 0.6 + HULL TEMP °C 2.3 + 底部 STRAIN GAUGE WP-04 / ONR-1960-23 serial line |
| Overlay-ChartRecorder | (240, 56) | 720 × 704 | **1 STAR** | Brush Mark 280 內套 640×640 米色金屬機殼（scene/recorder-bezel）+ 上 BRUSH 200 / BRUSH MARK 280 黑色銘牌 + 4 角螺絲 + 中央 chart paper（CH A 黑墨 depth descent 緩降 sinusoidal trace + CH B 紅墨 hull strain calm baseline → sawtooth pen-jump SPIKE at leading edge）+ 雙 pen carriage triangle 指針 + PEN-JUMP 09:47:18 UTC 註記 + 底部 BRUSH INSTRUMENTS · CLEVELAND OHIO · MODEL BL-274 · SERIAL N° 4218 |
| Overlay-ViewportInset | (960, 56) | 480 × 704 | 4 | OBSERVATION · PLEXIGLASS PORT N° 1 標題 + 380×380 圓形 Plexiglass viewport（深 navy radial gradient + 鋼圈 + 12 顆 brass 鉚釘環繞 + 單束 floodlight beam @ -28° + 25 顆 marine snow 粒子）+ 下方 telemetry：T+ 04:22:18 mission elapsed + POSITION 11°22.4′N 142°35.5′E + TARGET 10,916m + DESCENT -1.8 m/s · 6,432 PSI |
| Overlay-AlertOverlay | (200, 340) | 1040 × 280 | **2 OVERLAY** | 物理紙帶 telex（960×240 rect rotated +1.4°、scene/chart-paper-cream）疊在 ChartRecorder + DialColumn 之上：頂緣 perforation row（48 顆 paper-grid 圓點 = 剛從 teleprinter 撕下）+ left ALERT N° 0847 紅色 serial + HULL / STRESS 56pt Inter Bold 紅色 stamp + 09:47:18 UTC 副標 + vertical paper-grid divider + 6 lines IBM Plex Mono body（STRAIN GAUGE / HULL TENSION / VIEWPORT / CHART TRACE / TARGET DEPTH / DESCENT VEL）+ 雙重 drop shadow（黑色 32 radius + 紅色 24 radius spread 4 暗示 emergency lighting halo） |
| Overlay-ActionBar | (0, 820) | 1440 × 80 | 5 | 3 action columns horizontal：N° 01 · CONTINUE DESCENT（grey/fg）/ N° 02 · HOLD DEPTH 8,470 M（grey/fg）/ **N° 03 · EMERGENCY ASCENT**（10px klaxon-red dot prefix + 紅色 N°03 + 紅色 title + grey subtitle）+ 2 顆垂直 hairline dividers + 頂部 1px hairline |

Acceptance criteria：
- (1) Asymmetric variance：HeaderStrip(56h) vs ChartRecorder(704h) = **12.5×** 高度差；DialColumn(240w) vs ChartRecorder(720w) = **3×** 寬度差 ✓
- (2) Edge anchoring：HeaderStrip 鎖頂 / DialColumn 鎖左 / ViewportInset 鎖右 / ActionBar 鎖底 / AlertOverlay 中央 floating ✓
- (3) Star + rank uniqueness：ChartRecorder rank 1（唯一）/ AlertOverlay rank 2（物理 overlay 機制）/ 其餘 rank 3-5 — 無 rank 1 並列 ✓
- (4) Role variety：metadata chrome / instrument ledger / star recorder / observation context / overlay event / action strip — 6 種不同角色 ✓
- (5) **新 layered overlay rank**：daily-014 photo+countdown 同畫面不同 rank；daily-015 兩 plate 同 rank 對偶；daily-016 是「rank 1 STAR + rank 2 OVERLAY 物理層疊」— overlay event 機制由 rank 2 z-layered on rank 1 承載

## Figma 檔
- **fileKey**: `bDA9MWzNRM9My6grhlE8fj`
- **URL**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=404-55
- **Daily 016 — Trieste Hull Stress Alert - 1440 (wrapper)**: `404:55` (1440×900 at x=9007, y=1936)
- **Overlay-HeaderStrip**: `404:56`
- **DialColumn**: `404:57`
- **Overlay-ChartRecorder**: `404:58`
  - **Overlay-BrushHousing**: `410:54`（內套金屬機殼）
    - **Overlay-ChartPaper**: `411:54`（560×480 紙帶 + 5 horizontal + 5 vertical grid lines + 黑紅雙筆 trace + carriage indicators）
- **Overlay-ViewportInset**: `404:59`
  - **Overlay-PlexiglassPort**: `414:55`（380×380 圓形 port + 12 鉚釘）
    - **Overlay-Plexiglass-Inner**: `415:54`（320×320 圓形 frame + floodlight beam + 25 marine snow）
  - **TelemetryBlock**: `416:54`（T+ + position + target + descent）
- **Overlay-ActionBar**: `404:60`（3 action cols + 2 dividers）
- **Overlay-AlertOverlay**: `404:61`
  - **Overlay-AlertTelex-Paper**: `417:54`（rotated +1.4°、stamp + body + perforation + drop shadow ×2）

## Pragmatic deviations from awwwards-figma skill defaults

1. **單一 unified ZoneMap-1440-Composition 取代 per-section loop**（§3.1.5 deviation）
   - Skill 預設要求「ONE ZoneMap-<width>-<section> per section in gate 2 item (i) list」+ 逐 section 用 AskUserQuestion 確認
   - 本題偏離：渲染 1 個 unified ZoneMap-1440-Composition 顯示全部 6 zones in single 1440×900 frame、確認 1 次後 compose
   - 理由：Daily UI 為 single-viewport 單屏作品（無 scroll、無 below-fold），skill 的「防止 below-fold vertical-stack fallback」前提不成立 — 所有 zones 同屏可見、不會發生 SaaS-stack 降級
   - 與 daily-013 / 014 / 015 慣例一致（atmospheric-craft + Functional Archetype series）
   - Per `pragmatism.md` Document Intentional Deviations 記錄

2. **跳過 375 RWD breakpoint**（§3.2 baseline 2 deviation）
   - Skill 預設要求「Default breakpoint pair: 1440 + 375」
   - 本題偏離：只做 1440、不做 375
   - 理由：Daily UI single-screen 作品為固定 viewport 設計、非 web responsive。daily-013/014/015 已建立此慣例（atmospheric-craft series 全部單 1440）
   - Per `pragmatism.md` 紀錄為 series-consistency deviation

3. **無 web/ 程式碼實作**
   - Per CLAUDE.md 規則（2026-05-15 起新規）：新 daily-XXX entries 預設只交付 Figma + notes + takeaway + screenshots
   - 本題遵循新規 — 無 web/ 子目錄
   - 與 daily-013 / 014 / 015 同樣處理

## Series 連續性（atmospheric-craft 對偶 + accent 機制演化）

| Entry | Register | Star | Accent mechanism | Mode | Scale | 機制 takeaway |
|---|---|---|---|---|---|---|
| 011 | editorial typographic-hero | T-minus serif tabular monument | **永恆 NOW 座標 dot** | Dark | astronomical | accent = 時間軸符號 |
| 013 | atmospheric-craft timeline | dual-track waveform timeline | **永恆 in-flight burst glow** | Dark | interplanetary 23.81 LH | accent = 光延遲物理符號 |
| 014 | cinematic-poster letterbox | 200pt countdown + photo hero | **永恆 hairline NOW dot** | Dark | concert venue | accent = anticipation NOW 符號 |
| 015 | schematic-manual comparative-pair | dual J-38 plate（OFF/ON） | **state-binary toggle**（只在 ON 出現） | **Light** | hand-scale 1942 telegraph | accent = condition 物理符號 |
| **016** | atmospheric-craft instrument panel | Brush 280 chart recorder + paper telex overlay | **normal/critical alert 二態 + 5 處同步 broadcast** | Dark | deep-sea 8,470m | accent = condition event broadcast |

**Atmospheric-craft 對偶**：daily-013 deep-space Voyager（interplanetary 23.81 LH light-delay）↔ daily-016 deep-sea Trieste（8,470m oceanic depth、6,432 PSI hull pressure）— 同 register 兩極尺度。

**Accent 機制四題演化**：
- 011 / 013 / 014 = **perpetual single-point**（一個 accent 鎖一個座標永恆顯現）
- 015 = **conditional binary toggle**（accent 在 state=ON 時出現、state=OFF 時 0 出現）
- **016 = conditional event broadcast**（accent 在 critical alert state 時同步點燃 5 個物理位置：red trace + pen-jump annotation + DEPTH critical label + HULL STRESS headline + N°03 EMERGENCY action — accent 從「state toggle」演化為「跨多元素同步事件 broadcast」）

## Mechanism reframe summary

**SaaS Pop-Up / Overlay 預設**：dimmer 浮層 + 圓角白卡 modal + ✕ close button + Accept/Cancel 雙 CTA + 圓角藍色按鈕

**Trieste 重寫 reframe**：
- **Dimmer overlay** → 整面控制艙 emergency red lighting wash + 紙帶 telex 雙重 drop shadow（黑色 + 紅色 spread halo）
- **圓角白卡 modal** → 物理紙帶 telex（從艙頂 teleprinter 撕下、頂緣 perforation row、傾斜 +1.4° 滑落到儀表台上）
- **✕ close button** → 無（紙帶不可關閉、必須做出三選一決策）
- **Accept/Cancel 雙 CTA** → 3 actions（N°01 CONTINUE / N°02 HOLD / N°03 EMERGENCY ASCENT），其中 N°03 = klaxon-red dot + 紅色 emphasis（不是「primary」概念、是「emergency 物理優先級」）
- **圓角藍色按鈕** → text-only action with serial prefix + conditional klaxon-red dot（呼應 daily-008 / 010 / 013 / 015 anti-pill 系列）
- **「pop-up 是螢幕容器」假設** → 「pop-up 是物理紙物件 + chart recorder pen-jump 雙重物質化」（紙帶 telex paper + recorder pen-jump 同時發生、互為證據）

**核心 takeaway**：overlay event 的可信度來自「物理機制 + 物理介質」雙重承載 — chart recorder 紙帶上的紅墨 pen-jump 是物理記錄（無法偽造），紙帶 telex 是物理通訊載體（從 teleprinter 撕下），紅色 emergency lighting 是物理光源（控制艙真實 emergency klaxon）— 三重物理證據鏈使「危險訊號」可信、非 SaaS modal 的「請確認」軟性提示。

## Audit pass

- ✓ Token drift: 0
- ✓ Codegen issues: 0
- ✓ Default names: 0
- ✓ Editorial chrome contamination: PASS（無 serif display / 無 Roman numeral / 無 italic）
- ✓ Conditional accent restraint: PASS（klaxon-red 只在 5 處 alert state markers、其餘 zones 0 klaxon-red 出現）
- ✓ Fact-uniqueness: PASS（Trieste / Wandank / 1960-01-23 / 8,470m / Brush Mark 280 / Cleveland Ohio / Strain Gauge WP-04 / 142.3 kgf/mm² 全部真實或工程文件 plausible，非 wallpaper）
- ✓ A11y contrast: klaxon-red #C8332A on chart-paper-cream #E8DDC8 @ 56pt headline = AA Large pass（>3:1）; ink-graphite #1A1A1A on chart-paper-cream = AAA; fg #f5f5f5 on bg #0a0a0a = AAA
