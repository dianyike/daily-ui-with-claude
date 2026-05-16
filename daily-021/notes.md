# Daily UI 021 — Home Monitoring Dashboard · Home Orbit Observatory · Mission Console reframe

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `accomplish-task`（Home Monitoring Dashboard functional — observer needs to see at-a-glance which room/sensor flagged what + drill into KITCHEN alert source）。路由 → **Functional Archetypes catalog · Object Metaphor**（家屋作為被觀測的天體 / 行星）+ Instrument Panel chrome layer。**避開** Functional brief 同質性陷阱（accomplish-task → reading-style Editorial Manuscript / Magazine Index 的誤路由 per archetype-cheatsheet.md `accomplish-task` lane note）。
- **Density**: high（5 sections 縱排 2520h；MissionConsoleHeader 5-col chrome strip + ALERT-TICKER 反轉左寬欄 STAR；HeroOrbitView 中央 5 同心軌道環 + 21 sensor nodes + isometric house hex glyph + 4 邊 edge chrome；RealRateTimeline 4-axis track stack + 全寬 scrubber STAR + NOW cursor；RoomTelemetryBriefing 左 5-row table + 右 KITCHEN spotlight 6-cell sensor grid + 4 events stack；MissionColophon 全寬 HOME · ORBIT · OBSERVATORY wordmark + meta line）。
- **Success**: 一眼讀出「這不是 Nest/Ring 攝影機 grid / 不是 Apple Home pill toggle list / 不是 RGB gamer console / 不是仮設幾何 gauge dashboard、是 70s NASA Mission Control 把『家』視為被觀測天體的儀表台」+「軌道環編碼=房間（BED/BATH/LIVING/KITCHEN/GARAGE），軌道上的節點=該房間的個別感測器，amber 節點 = WARN 警報源」+「整頁讀起來是一個連續的 mission ops console scroll、不是 SaaS dashboard 卡片網格」。

### Commit Before Code（9 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | **mission-console not smart-home-app**（70s MOCR / aviation glass-cockpit blood line vs Nest/Ring/Apple Home UI）／ **orbital-canvas not floor-plan-grid**（家屋作為天體、感測器作為軌道節點，不是 top-down 平面圖加 pin）／ **techno-spec not techno-toy**（austere 螢光綠/琥珀/青/紅 4-color mission palette，不是 gamer RGB）／ **planetary-house not photo-frame-house**（家屋作為 celestial body 抽象 hex glyph，不是寫實照片裡的家屋）／ **edge-instrumental not bento-card**（chrome 在 4 邊 events feed / tools / data layer toggles，不是垂直堆疊卡片）／ **monospace-clinical not branded-marketing**（全 mono typography、無 brand voice、無 CTA selling） |
| (b) | One named star | **HERO 中央 ORBIT-CANVAS**：isometric hexagonal home glyph 中心 + 5 同心軌道環 + 21 sensor nodes 散佈於各環。視覺 star = home hex glyph + KITCHEN cyan-highlighted ring，功能 star = KITCHEN-DR amber WARN sensor（連到 Section 1 ALERT-TICKER 的警報源 evidence link）。雙 protagonist：mass-and-place visual = home glyph，narrative function = WARN sensor。 |
| (c) | Motifs (≥2) | (1) **5 同心軌道環編碼房間**（BED 內 → GARAGE 外，KITCHEN ring cyan-highlight 因 active alert，其餘 mission-grid faint navy stroke）／ (2) **monospace 2-char 感測器代碼**（MO motion / DR door / TM temp / CO CO₂ / SM smoke / PW power / WT water / WI wifi / HU humidity / OC occupy）標籤貼節點旁／ (3) **LIVE 螢光綠脈動 + REAL-RATE 時碼徽章**（Header + Hero data strip + Colophon 都帶 LIVE pulse · 串連 3 節）／ (4) **左欄 events stack monospace 時戳 + 雙色狀態 dot**（NASA Eyes Featured Stories 反規）／ (5) **底部 data-layer toggle strip**（9 sensor-type 切換 · MO active cyan）／ (6) **4 bridge bands 過場帶**（中央 mono delimiter "ZONE I · CONSOLE → ZONE II · ORBIT FRAME" + 左右虛線 · 4 個橋帶接續貫穿 5 節） |
| (d) | Anchor refs (≥2) | (1) **NASA Eyes on the Earth**（用戶 reference image 1 · 中央地球 + 多色軌道環 + edge chrome + LIVE 綠脈動 + bottom data layer strip）／ (2) **NASA Eyes on the Solar System**（用戶 reference image 2 · 左 Featured Stories panel + 中央 Sun + 同心 planetary orbits + REAL-RATE 時碼）／ (3) **70s NASA MOCR Houston Mission Control Room**（aesthetic ground · 黑底螢光標籤 mono 字 / amber WARN / cyan READOUT / 螢光綠 LIVE）／ (4) **Aviation glass-cockpit PFD/MFD**（節點可讀性 + symbolic geometry as object metaphor，不是 photoreal） |
| (e) | Anti-goals (≥3 user-confirmed) | ❌ **Nest / Ring 攝影機 grid**（3×2 縮圖 + 在線 dot + quick action toggle · 主要 SaaS Home Monitoring trope）／ ❌ **電玩 RGB gamer console**（號玣サイバー / 黃 · 金屬鮮 · 電鬥 RGB · techno-spec 變 gamer 身分的踩雷）／ ❌ **仮設幾何 dashboard**（大量 circular gauge / fake speedometer / abstract data viz · Dribbble「幾何控制台 prototype」trope）／ ❌ **歷史文獻 reframe**（user 明確 "換 register 跳出歷史文獻"、跳出 daily-017 ~ 020 連續 4 篇歷史文獻 register 的同質性危機） |
| (f) | Color strategy | **Drenched** — mission-deep (#050709) 與 bg-alt Dark (#161616) 兩段深 BG 全頁交替（Hero/Briefing #050709 最深、Header/Timeline/Colophon #161616 略淺、Bridges 反相 · 形成節間 1-stitch BG 深淺律動）。Mission accent 4-color discipline（不超過 4 色彩 chroma）：**screen green (#2DE876) = LIVE**、**amber (#FFB000) = WARN**、**cyan (#6EE7FF) = active labels / NOW cursor / KITCHEN ring**、**red (#FF4747) = FAULT 保留**（dashboard 上沒有 fault 狀態被觸發、紅色保留作 escalation）。整頁無 light / warm tones、無 white CTA、無 brand color。 |
| (g) | Scene sentence (forces dark/light) | **DARK · 02:47 主人睡了**，廚房後門感測器剛剛 OPENED 0.4 秒（也許冰箱壓縮機跳了、也許不是），控台主螢幕對著開放廚房牆放著、dark mission console 顯示家屋當下的軌道狀態，BED 軌道 MO 節點靜止綠、KITCHEN 軌道 DR 節點剛閃了一下琥珀又回綠 — 絕對 dark mode mission ops 02:47 night-B shift、不是 Nest 早晨 6 點淡色介面 |
| (h) | Register | **techno-spec** — series 第一個 techno-spec register entry（前序 4 entries 017/018/019/020 全 historical-document reframe）。NASA Mission Operations Control Room blood line × Object Metaphor functional archetype 的雙軸組合：techno-spec register × Object Metaphor structural intent = 家屋作為被觀測天體 mission console。Anti-pill text-led toggles（mono code + name caps，沒有 SaaS pill button）— 不觸發 Component-Set state coverage 強制（per SKILL §3.2 baseline 3 *Scope note*）。 |
| (i) | Section list (top→bottom scroll order) | `Overlay-MissionConsoleHeader` (1440×120, bg-alt · 5-col chrome strip · ALERT-TICKER 反轉左寬欄 STAR + SPEC + CLOCK + LIVE + 右 MISSION-ID) → **Overlay-BridgeBand-1** (1440×40 mission-deep · "ZONE I · CONSOLE → ZONE II · ORBIT FRAME") → `Overlay-HeroOrbitView` (1440×920, mission-deep · 中央 ORBIT-CANVAS STAR + 左 EVENTS-FEED + 右 ACTION-TOOLS + 底 DATA-LAYER-STRIP) → **Bridge-2** (bg-alt · "ZONE II → ZONE III · REAL-RATE TIMELINE") → `Overlay-RealRateTimeline` (1440×360, bg-alt · 全寬 SCRUBBER STAR + 4-axis track stack SECURITY/MOTION/CLIMATE/POWER) → **Bridge-3** (mission-deep · "ZONE III → ZONE IV · ROOM BRIEFING") → `Overlay-RoomTelemetryBriefing` (1440×680, mission-deep · 左 5-row table + 右 KITCHEN spotlight 6-cell sensor grid + 4 events) → **Bridge-4** (bg-alt · "ZONE IV → ZONE V · COLOPHON") → `Overlay-MissionColophon` (1440×280, bg-alt · 全寬 HOME · ORBIT · OBSERVATORY wordmark + meta line · Manifesto-風單軸結構) |

### Archetype
**Functional Archetype · Object Metaphor**（主：家屋作為被觀測天體 / 行星）+ **Instrument Panel**（chrome layer：4 邊 edge chrome、底部 toggle strip、頂部 mission spec strip）混合。`accomplish-task` intent 路由到 Functional Archetypes catalog，**避開** archetype-cheatsheet.md L43 警示。Object Metaphor 在 series 是**第一次明確 Object Metaphor 應用**（series 已用 daily-014/015/016/017/020 其他 Functional archetypes，daily-020 用 Map archetype 與本作的 Object Metaphor 是相鄰但不同：Map 是「展開的地圖+定位」，Object Metaphor 是「家屋本身即儀表」）。

### Anti-template sanity check（gate 3 silent · PASS）
「02:47 dark mission console + 中央 hexagonal home glyph + 5 同心軌道環編碼房間 + 21 mono 2-char sensor 節點 + KITCHEN cyan-ring + amber DR WARN node + edge chrome events feed/tools/data toggles + 4 bridge bands ZONE delimiter」會 read like Awwwards SOTD 還是 100 SaaS Home Monitoring landings？→ **PASS**：沒有 Nest/Ring 攝影機 grid / 沒有 Apple Home toggle list / 沒有 gamer RGB / 沒有 Dribbble gauge dashboard / 沒有 floor plan + pin。

### Brief lock interview log
- Hot path（user supplied 2 references at gate 1 step 1）— image 1 NASA Eyes on the Earth（地球 + 多色軌道環 + edge chrome + LIVE）+ image 2 NASA Eyes on the Solar System（左 Featured Stories panel + 同心 planetary orbits + REAL-RATE 時碼）。User direction: "NASA 控制台 但不要完全照抄這是方向"
- Gate 1 step 2 收 star + 軌道軸 + anti-goals（3 Qs in 1 turn）：
  - star = isometric 家屋本體作為行星 + 多層感測器軌道環
  - 軌道軸 = 房間為軸 (KITCHEN/LIVING/BED/BATH/GARAGE) — **重要決定**：軌道分離=房間，不是感測器類型。軌道高度低/高 = 內房間/外房間（intimacy gradient + perimeter）
  - anti-goals: Nest grid / 電玩 RGB / 仮設幾何 dashboard（3 個 user-confirmed concrete traps）
- Gate 1 step 3 + convergence: 1 Q restate + 斷點決定（**單 1440、跳過 375** per techno-spec mission console scale exemption — mission ops console 本質就是 wall-of-screens，不是手機介面）
- §3.1.5 ZoneMap loop: 5 sections，4 個 (c) 自生節 1 turn 收 A/B picks（S1-B 反轉 weight / S3-B 多軸 track stack / S4-A 左 table + 右 lead spotlight / S5-B 單欄 wordmark Manifesto風）+ 5 個 Y/I/R confirms（S2 hero 是 NASA Eyes 直接 adapt source b、跳過 A/B pick）。全 5 節 first-pass Yes

---

## Compose phase log（§3.2 · 1440 single breakpoint · 6 use_figma calls）

### Call A — Foundation: local mission-tokens + outer wrapper + 5 sections + 4 bridges
- 建 local `mission-tokens` collection 含 7 個 scene-specific tokens（minimal-ds 不覆蓋 mission accent + mono family）：
  - `color/mission-live` = #2DE876（LIVE pulse 螢光綠）
  - `color/mission-warn` = #FFB000（WARN 琥珀）
  - `color/mission-fault` = #FF4747（FAULT 保留紅）
  - `color/mission-cyan` = #6EE7FF（cyan labels / NOW cursor / KITCHEN ring）
  - `color/mission-grid` = #1A2A4A（faint navy orbital ring stroke）
  - `color/mission-deep` = #050709（最深 BG）
  - `typography/family/mono` = "JetBrains Mono"（補 minimal-ds 預設 Inter sans 之外的 mono、mission console 必需）
- Outer wrapper `Daily 021 — Home Orbit Console - 1440` VERTICAL auto-layout itemSpacing=0、padding 0、counterAxisSizingMode=FIXED 1440、primaryAxisSizingMode=AUTO 自動 hug height=2520
- **Pin Dark mode** on outer wrapper via `setExplicitVariableModeForCollection(minDsColl, darkMode.modeId)` — 整頁 force dark
- 5 inner sections `Overlay-{MissionConsoleHeader / HeroOrbitView / RealRateTimeline / RoomTelemetryBriefing / MissionColophon}` + 4 inner bridges `Overlay-BridgeBand-{1,2,3,4}`（**Overlay-** 前綴 per Phase D baseline 1 audit exemption，因 absolute positioning 編排）
- BG depth alternation pattern: Header bg-alt → Bridge1 mission-deep → Hero mission-deep → Bridge2 bg-alt → Timeline bg-alt → Bridge3 mission-deep → Briefing mission-deep → Bridge4 bg-alt → Colophon bg-alt — 形成 thread-stitch #1 節間律動
- Wrapper x=22000 collision-aware（避開 daily-001~020 系列既有 chrome 已佔的 x 區段；daily-020 在 x=17801）

### Call B — Section 1 MissionConsoleHeader (B 反轉 weight)
- 5 columns 左到右：ALERT-TICKER 640×120 STAR / SPEC 280 / CLOCK 240 / LIVE 120 / MISSION-ID 160（**B 反轉**：TICKER 在左寬欄，不是 NASA Eyes 預設右寬欄 — 平衡視覺重心，左讀優先 + 右側 readouts 排列）
- ALERT-TICKER 內：amber ◣ ALERT eyebrow + mono "T+ 02:47:14" → bold ticker headline "DOOR · KITCHEN BACK" + sub "OPENED 0.4s · NORMAL CLOSE-RATE · NO ESCALATION"（4-clause mission ops 風格）
- MISSION SPEC：MMRS · 021 + BUILD 4 · SHIFT B
- CLOCK：02:47:14（cyan）+ 2026-05-16 · NIGHT-B（user 機器當下時間 sync）
- LIVE：mission-live green pulse + halo ring + "LIVE / real-rate" 標籤
- MISSION-ID：OBSERVATORY / TPE-04 / 25.03°N 121.57°E（Taipei coords）
- 4 vertical hairline rules zone dividers + bottom section divider

### Call C — 4 bridge bands
- 每節中央 mono "ZONE I · CONSOLE → ZONE II · ORBIT FRAME" 風格 delimiter
- 左右兩條 dashed hairline（左從 x=60 到文字左、右從文字右到 x=1380）
- 渡帶接續 5 節節間 - thread-stitch #2

### Call D — Hero edge chrome (events feed + action tools + data layer strip)
- **EVENTS-FEED** 280×820 左：RECENT EVENTS eyebrow + 6 events stack（each: state dot + mono 02:47:14 time + cyan code 2-char + room name + note）+ "VIEW ALL 247 EVENTS" cyan link
- **ACTION-TOOLS** 120×820 右：OPS eyebrow + 4 icon buttons (+ / − / ◎ RESET / ▦ LAYER) + cyan DRILL DOWN button + CALIB SET 4 / BUILD 021.4 / 2026-05-16 chrome
- **DATA-LAYER-STRIP** 1440×100 底：9 sensor-type toggles MO/DR/TM/CO/SM/PW/WT/WI/OC，MO MOTION active cyan stroke，其餘 muted；右端 OVERLAY ALL + LIVE pulse

### Call E — Hero ORBIT-CANVAS structure (cross-hair + 5 rings + house glyph + chrome)
- 細微正交十字線（vertical x=800 + horizontal y=410，opacity 0.35）vintage 雷達感
- 4-edge canvas frame（faint border 1px）
- NSEW axis markers + top-left BEARING REF compass + top-right ORBITAL VIEW eyebrow + bottom FRAME 027 · TILT 30° · DEC 03° + 0-3m scale bar
- 5 同心橢圓軌道環（tilted 30° iso · y-rx ratio 0.55）：
  - BED rx=180 · BATH rx=260 · LIVING rx=340 · KITCHEN rx=420（**cyan stroke 1.5px** alert active）· GARAGE rx=500
- 中央 hexagonal home glyph：外大 hex (100px, surface fill + cyan stroke) + 內小 hex (56px, cyan stroke 0.5 opacity) + 中央 mission-live filled 8px dot + 20px halo ring
- HOME · OBS-LIVE 標籤 + 25.0330°N · 121.5654°E coords 在 house 下方

### Call F — 21 sensor nodes + WARN callout
- 21 個 sensor nodes 散佈於 5 軌道環（每環 3-6 sensors）：
  - BED: MO/DR/TM/CO (4)
  - BATH: MO/WT/HU (3)
  - LIVING: MO/DR/TM/CO/PW (5)
  - KITCHEN: MO/DR/TM/CO/SM/PW (6 — **DR @ 70° = amber WARN source**)
  - GARAGE: MO/DR/PW (3)
- 每 sensor = halo ring (0.35 opacity) + filled dot (4px live / 6px warn) + mono 2-char code label
- KITCHEN-DR WARN sensor 多一個 24px 外 halo ring（alarm reach 視覺指示）+ 12px 中 halo（雙環 = 警報強調）
- 初稿包含 amber 警報 callout box 連到 header — Edit Pass 移除（與 canvas eyebrow 重疊 + amber sensor 本身已足夠強的視覺信號 + KITCHEN cyan ring + header ticker 三重信號疊加無需第四 callout）

### Call G — Section 3 RealRateTimeline (B 多軸 track stack)
- 左 AXIS-LABEL-COL 120×360：T+ AXIS + REAL-RATE 1× + 24H window cyan + 4 track labels SECURITY/MOTION/CLIMATE/POWER
- 上 FULL-WIDTH-SCRUBBER 1320×100 STAR：24h tick marks（每 2h，6h 大刻度）+ playback track + cyan played region（0h 到 02:47 = 11.6% bar）+ NOW vertical cursor + NOW · 02:47:14 cyan label + 右端 LIVE dot
- 4 sub-tracks 每條 1320×40：
  - SECURITY (amber): 4 events 含 NOW 處大琥珀 5px dot（KITCHEN DR alert source 出現在 SECURITY track 上）
  - MOTION (live green): 16 events 高密度 routine motion
  - CLIMATE (cyan): 10 events 環境變化
  - POWER (cyan): 5 events 電器循環
- 底部 LEGEND-STRIP: PLAY ▶ · STEP -15s / +15s · RATE 1× · TICK 1s · LIVE LAGS 4.2s green dot

### Call H — Section 4 RoomTelemetryBriefing (A 左 table + 右 lead spotlight)
- **左半 5-row table** 720×680：ROOM/SENSORS/LAST EVENT/STATUS 4 columns，5 rooms 各帶 state dot + mono row content + sub-line 補充說明（"all sensors within tolerance" or "6× BACK-DOOR OPENINGS · LIKELY COMPRESSOR CYCLE"）
  - KITCHEN row 全 amber tinted（state warn）
- **右半 KITCHEN spotlight** 720×640：
  - 大 KITCHEN display 88pt（左 flush）+ "6 SENSORS · BACK-DOOR FLAGGED 6× TONIGHT" eyebrow + "compressor cycle pattern consistent with prior nights · no escalation" sub
  - **6-cell sensor grid** 2-col × 3-row：MO / DR (amber active) / TM / CO / SM / PW — 每 cell 320×64 stroke box + 大 cyan code + caps desc + reading + state dot
  - **4 RECENT EVENTS** stack KITCHEN-scoped: 02:47:11 DR / 02:46:38 DR / 02:44:12 CO / 02:31:08 MO

### Call I — Section 5 MissionColophon (B Manifesto-風)
- 雙 hairline rule 頂部（vintage register pattern）
- 左 eyebrow "DAILY UI 021 ◢ HOME MONITORING DASHBOARD" + 右 eyebrow "MISSION SIGN-OFF ◢ T+ 02:47:14 · 2026-05-16"
- **HOME · ORBIT · OBSERVATORY** wordmark text/h1 48pt mono bold 全寬橫排 + "— Manor Reporting System · MMRS · BUILD 021.4 · Mode NIGHT-B" sub
- 右側 mission badge stack：◉ LIVE · OBSERVING (green) + REAL-RATE · 1× (cyan) + FRAME 027 / N
- Meta line：25.0330°N · 121.5654°E + OBS TPE-04 · CALIB SET 4 + 21 SENSORS / 5 ROOMS + STARTED 2024-03-12 · ON-LINE 794d + © 2026 · Manor Reporting System · NIGHT-B SHIFT
- 下半 signed line: "signed: K.D. · observatory desk · 02:47:14 night·shift B · sweep complete · all sensors within tolerance"

---

## Edit Pass log（§3.3 · 2 rounds · 4 P1 fixes）

### Round 1 — 4 P1 issues
1. **S2 Hero · WARN callout box overlap with canvas eyebrow**：移除整個 callout box + vertical leader（4 nodes：WarnCallout-VerticalLeader / Box / Label / Sub）。Rationale：amber WARN sensor 本身 + KITCHEN cyan ring + Section 1 ALERT-TICKER text 三重信號已足。多加 callout box 反而與 canvas eyebrow "ORBITAL VIEW · 5 ROOMS · 21 SENSORS" 衝突。
2. **S2 Hero · ring labels (BED/BATH/LIVING/KITCHEN/GARAGE) 在 cross-hair 右側橫排重疊**：重新建立，stagger 上下交替（BED top y=388 / BATH bottom y=424 / LIVING top / KITCHEN bottom / GAR top），letterSpacing 12→4%，GARAGE → 縮寫 GAR，count "·4S" 緊接 label 右側
3. **S4 Briefing · LAST EVENT 字串溢出 STATUS col**：縮短 4 events 字串（"0.8L FLOW ENDED" → "0.8L FLOW"、"NO MOTION 16m" → "16m IDLE"、"OPENED 0.4s (6×)" → "6× OPENED"、"8H SINCE LAST EVENT" → "8H QUIET"）+ STATUS col x 從 608 移到 648（多 40px LAST EVENT 空間）
4. **Bridge bands · 右端虛線與長標籤文字重疊**：使用 `label.width` 實際 rendered 寬度重算左右虛線位置（不再用字串長度估算）

### Round 2 — 2 cosmetic micro-fixes
- S2 GAR ring label x=1308 → 1268（pull back into canvas frame right edge 1320 內）
- S4 KITCHEN sensors text "6 · MO DR TM CO SM PW" (21 chars 158px) → "6 · MO DR TM CO +2" (18 chars 135px) fits SENSORS col 140px width

### Token discipline
- All fills bound via `setBoundVariableForPaint`：minimal-ds tokens (color/fg / fg-muted / border / surface / bg / bg-alt) + local mission-tokens (mission-live / warn / fault / cyan / grid / deep)
- fontSize bound to text/* tokens (caption / body / h2 / h1 / display)
- fontFamily bound to typography/family/* (latin Inter / mono JetBrains Mono)
- 無 literal hex / px 值散落（除了 strokeWeight 1/1.5px、letterSpacing %、dashPattern numbers 這些 Figma 必需 number primitives）

### Functional Archetype motif post-fix check (per archetype-cheatsheet.md)
- Editorial chrome contamination test: ❌ NO fleurons / ❌ NO italic display / ❌ NO ornamental dividers / ❌ NO column rules with serif type / ❌ NO byline 風格 italic — ✅ PASS
- mission-console aesthetic 全程一致 mono + hairline ruled + LIVE/WARN/CYAN/FAULT 4-color discipline

---

## Thread-stitch inventory（per [[break-stacked-card-feel]] memory · need ≥2 for ≥3 sections）

1. **BG depth alternation** — Header bg-alt → Bridge1 mission-deep → Hero mission-deep → Bridge2 bg-alt → Timeline bg-alt → Bridge3 mission-deep → Briefing mission-deep → Bridge4 bg-alt → Colophon bg-alt — 形成「翻頁前最後一頁」節奏
2. **4 bridge bands with ZONE delimiters** — 每節之間 1440×40 過場帶中央 mono "ZONE I → ZONE II" 過場標記 + 左右 dashed hairlines — 顯式接續紀錄
3. **LIVE green pulse 跨節串連** — Section 1 Header / Section 2 Hero data-layer strip / Section 3 Timeline (LIVE LAGS 4.2s) / Section 5 Colophon (◉ LIVE · OBSERVING) 共 4 個 LIVE green pulse 位置貫穿頁面 — 螢光 signal 連線

3 個 thread-stitches，break stacked-card feel ✓ PASS。

---

## Files

- **Figma frame**: outer wrapper `Daily 021 — Home Orbit Console - 1440` · id `556:63` · x=22000, y=0, 1440×2520
- **Screenshots**: `screenshots/page-1440.png` (full wrapper) + 5 section screenshots
- **Local extension tokens**: `mission-tokens` collection (7 vars · 1 collection · stays in file)
- **No web/ implementation** per CLAUDE.md default for entries created 2026-05-15 onward

---

## Anti-goal compliance（per Gate 2 item e）

- ❌ Nest / Ring 攝影機 grid (3×2 縮圖 + 在線 dot + quick action toggle) — **PASS**：無攝影機縮圖，無 3×2 grid
- ❌ 電玩 RGB gamer console (號玣サイバー / 黃 · RGB) — **PASS**：4-color mission discipline，黃 = WARN 不是 brand，無 RGB 漸層、無 gamer typography
- ❌ 仮設幾何 dashboard (大量 circular gauge + fake speedometer) — **PASS**：無 circular gauge、無 speedometer、無 abstract data viz；所有 viz 都有 narrative function (orbit = room, sensor = dot, scrubber = time)
- ❌ 歷史文獻 reframe (跳出 daily-017~020 連續歷史文獻 series) — **PASS**：techno-spec register 首發、無紙本 / 米色 / sepia / 印刷 plate 殘留
