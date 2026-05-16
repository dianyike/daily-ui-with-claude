# Daily 020 · Mechanism Card

> 把 Location Tracker 從「Find My fullscreen-map + single GPS pin + bottom sheet / Uber 派車 / Strava 路線 polyline + 數據卡網格 / Pokémon GO 採集任務獎勵」的 SaaS-defaults 重寫成「1900s 馬來雨林 Royal Belum 野外博物學家手帶的 pocket field guide 攤頁 — Card No. 0119 個體 № *Tapirus indicus* / ♀ 觀察筆記」。**Location Tracker 的『定位』不是 single GPS pin、是三角測量 bearing 從 3 個 hide 觀察點交會於 sighting**；視覺 elevation 完全靠 (a) per-section BG 深淺交替綠 + (b) 連續 spiral 裝訂 + (c) inter-section bridge fleuron 過場 + (d) 邊緣 cream cardstock tabs 分類索引，把 5 sections 串成「一本攤開的 pocket guide 連續翻頁」而非「5 張獨立 web card 垂直貼」。

## archetype
**Functional Archetype · Map**（主）+ Diagram (PlateLeaf forensic plates) + Receipt (SightingsLedger entries) + Timeline (Section 4 history sub-cards) **混合應用**。`accomplish-task` intent 路由到 Functional Archetypes catalog，**避開** archetype-cheatsheet.md L43 警示「Functional briefs forced into reading-style structural archetypes」(Editorial Manuscript / Magazine Index) 的同質性陷阱。**Map 在 series 是第一次明確 Functional Archetype Map 應用**（series 已用 daily-014 / 015 / 016 / 017 Functional archetypes 但未碰 Map）。Location Tracker 與 Map archetype 的天然對齊：3 hide 觀察點 + bearing line + sighting cross + contour 全部物理化，**不是 SaaS dashboard 的 'tracking widget'**。

## register
**atmospheric-craft / pocket-guide** — series 第一個 atmospheric-craft register entry（series 已有 editorial-magazine × 3 entries: daily-008 / daily-018 / daily-019；techno-spec / brutalist-raw / Swiss-restraint 未碰）。**Pocket field guide × Map functional archetype 的雙軸組合**：atmospheric-craft register × Map structural intent = field naturalist 的核心日常工具。**Anti-pill text-led tabs（cream cardstock 而非 SaaS pill button）— 不觸發 Component-Set state coverage 強制**（per SKILL §3.2 baseline 3 *Scope note* — Functional briefs forced into reading-style structural archetypes 的同質性陷阱與 anti-pill 紀律的關係）。register × functional-tool 證據：atmospheric-craft 此 register 可承載 Map functional archetype 而不滑入 SaaS Find My / Strava 預設。

## purpose_triad
- **intent**: `accomplish-task`（researcher 需要 plot bearings + log sightings + reference plates）；路由到 Functional Archetypes catalog · **Map**
- **success**: 一眼讀出「這不是 Find My fullscreen-map + single-pin / 不是 Strava 路線 + 數據卡 / 不是 SaaS Location Tracker dashboard、是 1900s 馬來雨林博物學家手帶的 pocket field guide 攤頁 — Card No. 0119 個體 № 觀察筆記」+「Location Tracker 的『定位』機制是三角測量 bearing 從 3 個 hide 觀察點交會於 sighting、不是 GPS pin」+「整本書讀起來是一本攤開的 pocket guide 連續翻頁、不是 5 張獨立 web card 垂直貼」
- **density**: high（5 sections 縱排 4320h；TitlePage 3-band serif 主標 + tapir 主圖；PlateLeaf 4 forensic plates 不對稱布局 + MAP-INSET 預告；TriangulationMap 3 HIDE + bearings + sighting + GPS strip；SightingsLedger LEAD-ENTRY 大卡 + 4 history sub-cards；Footer chop seal + ledger stack）

## palette_recipe
- **strategy**: **Drenched** + **per-section 深淺交替**
- **per-section BG 交替紀律**（series 第一次採用、解開「全頁同色」flat-card 陷阱）：
  - Sections 1 / 3 / 5（TitlePage / TriangMap / Footer）= 深綠 `color/bg-field` #3FA052（中飽和暖森林綠、user reference image 1 童書封面色彩 borrow）
  - Sections 2 / 4（PlateLeaf / SightingsLedger）= 淺綠 `color/bg-field-pale` #D4E0C5（vellum-tinted 淡綠、深的對比 pair）
  - Bridge 帶 BG 跟**上一節同色**、下一節才翻面 → 「翻頁前最後一頁」節奏
- **plate frame**: white pocket-guide card on green BG，`color/surface` Light = #FAFAFA + strokeWeight=1 `color/border` 細邊
- **edge tabs**: cream cardstock `color/bg-tab` = #F3EDDE，PRINT active 用 strokeWeight=2 + label 加深
- **spiral binding**: deep wire green `color/spiral` = #1F512E，整頁 4320h 左邊一條不斷
- **ink discipline**: `color/fg` (#0A0A0A near-black) for display + emphasis text / `color/fg-muted` (#737373) for italic body + captions
- **5 個 local field-tokens** 補 minimal-ds 預設 Light/Dark mode 不足：`color/bg-field` / `color/bg-field-pale` / `color/bg-tab` / `color/spiral` / `typography/family/serif` — scene-specific overrides，bind 到 SCAPES=FRAME_FILL / SHAPE_FILL / FONT_FAMILY
- **accent 機制第九階段演化**：
  - 011-014 永恆單座標 / 015 state-binary / 016 event-broadcast / 017 functional-multiplexed evidence chain / 018 data-channel encoding / 019 register-discipline absence (monochrome) / **020 per-section BG 深淺交替 rhythm**
  - **020 的 accent 機制是「BG 自己交替、不依賴 chrome 元素」**：色彩 rhythm 由 page 主體 (sections + bridges) 承載，而非 accent element overlaid on monochrome BG。視覺上是 5 個 horizontal band 深/淺/深/淺/深 交替 + 線圈裝訂垂直連續 → 「翻頁節奏 + 裝訂連續」的 dual rhythm 機制
- **subject-matter image asset**: 5 張 pen-and-ink hatching plate（Audubon style·黑墨 + 白紙·pocket-guide engraving 風）：tapir-hero / hoofcast / scat / bite / map-inset。**Subject-matter image catalog 補入第四型別**：017 真實印章圖 / 018 三色 lithograph chart / 019 monochrome 銅版畫紋章 / **020 pen-and-ink natural-history plate**（多張同 register、同 ink discipline、同 black-on-white、構成 plate series 而非 single feature image）

## type_pair
**Sans + Serif dual system**（series 第一次採用混合字族 — 前序 entries 全部 sans-only Inter）：
- **Serif voice 1 · display + emphasis**: EB Garamond SemiBold (text/h1 48pt) — TitlePage "Card No. 0119" bold title + SightingsLedger LEAD-ENTRY coords "4°12′53″N · 102°26′02″E · hide D · K. Sutomo" + Footer NEXT TARGET value + Footer OBSERVER-SEAL K. Sutomo
- **Serif voice 2 · italic atmospheric**: EB Garamond Italic (text/h2 28pt / body 16pt / caption 12pt) — byline "Royal Belum Field Notes" + species "Tapirus indicus / ♀" + bottom byline "— Three contact points · Survey 14 of 23 —" + field notes block + bridge plate-transition "PLATE I — → II" + footer ledger info + footer seal "observed by" / "2025" + map sighting label
- **Sans voice 3 · chrome + metadata**: Inter Medium / Regular (text/caption 12pt) — section eyebrow "PLATE II · TRACKING EVIDENCE · 0119" caps tracking 1.5px + tab labels "HOOF / PRINT / SCAT / BITE / NEST / SIGHT" caps + GPS-READOUT 2-line numerical readout + hide point labels "HIDE A · 4.213°N 102.428°E" + NEXT TARGET caps eyebrow + copyright line + history cards 日期 + seal "BIOL · DEPT"
- **Tracking 紀律**：
  - tracking 1.5px on Inter Medium caps eyebrows + NEXT TARGET label + BIOL · DEPT
  - tracking 0.8px on PRINT cast pill tag
  - tracking 1px on history card date "08/09" etc.
- **混合字族區分原則**：**Inter sans = numerical readout / metadata / chrome label**；**EB Garamond serif = atmospheric text + display emphasis**。每個 text node 預先 preload 對應字款（per D5 figma-use rule：font load 不跨 use_figma call、每個 script 需重新 preload）+ bind `typography/family/{latin|serif}` 到 token，避免 D11 fontFamily swap trap

## motifs
1. **白 pocket-guide plate on green BG**: 每節 white plate frame 960×800（footer 960×400）浮在綠 BG 上提供 ink reading surface
2. **per-section BG 深淺交替**: 深 #3FA052 / 淺 #D4E0C5 / 深 / 淺 / 深 五節節奏
3. **連續 spiral 裝訂**: 每節左側 16×section_height deep wire spiral + 每 bridge 16×60 spiral 段 → 整頁 4320h 左邊一條不斷的綠色金屬線
4. **邊緣分類索引 tabs**: 右側 cream cardstock 6-tab column（HOOF / PRINT / SCAT / BITE / NEST / SIGHT），PRINT active（thicker stroke + 加深 label）— pocket-guide inline 分類導航的物理化
5. **三角測量 bearing 交會**: 3 個 dot 標記的 hide 觀察點 + dashed (4,3) bearing 線收斂於 ✕ sighting cross，**Location Tracker 機制的物理化**而非 single GPS pin
6. **❦ fleuron bridge 過場符**: 4 個 inter-section bridge 中央 5 個 EB Garamond ❦ + 右側 italic serif "PLATE I — → II" / "II — → III" / "III — → IV" / "IV — → V · colophon" plate-transition 標記
7. **OBSERVER-SEAL 雙圈 chop**: Footer 右側 240×240 雙線框（外 3px 內 1px）chop seal — italic "observed by" / SemiBold 28pt "K. Sutomo" / 80×1 divider / Medium caps "BIOL · DEPT" / italic "2025"
8. **black pill ContactTag**: SightingsLedger LEAD-ENTRY 左上 "PRINT cast" 黑底白字 pill — single accent-strength pill 把 LEAD-ENTRY 從 history 4 cards 中區隔出來

## why_it_works
**避開 4 個明確 anti-goal 陷阱：**
1. ❌ **Find My / Uber 預設地圖** — 全螢幕 map + single pin + bottom sheet + 'Share location' 藍 CTA。**改寫機制**: TriangulationMap 用 3 HIDE → ✕ bearing 交會 + map-canvas 是 plate 內 880×580 而非 full-bleed + 無 single-pin + 無 share-CTA
2. ❌ **Strava 路線 + 數據卡** — 彩色 polyline + 4 等大小 stat cards 網格 + 雷達圖。**改寫機制**: SightingsLedger 用 LEAD-ENTRY 大卡 + 4 history sub-zones distinct roles (HISTORY-SCAT/SIGHT/BITE/PRINT) **pocket-guide ledger style**（hairline 分隔 + serif italic + 不對稱 LEAD vs 4 history 的 7.8× 變異） + 無 polyline + 無 stat grid
3. ❌ **米色 / sepia 仿古紙** — 復刻品 cream sepia trope。**改寫機制**: 走 pre-aging real colors（中飽和暖綠 + 冷墨黑 + 卡片白 + 鐵綠線圈），per [[no-beige-for-historical-documents]] memory
4. ❌ **童書 / 卡通插畫風** — 童書封面 borrow 風格陷阱。**改寫機制**: image 1 童書綠 BG **色彩 only** selective borrow（非童書插畫風），image 2 Ron Cordes pocket guide **form-factor / motif / typography only** selective borrow（非實際 wolf 插畫）

**正向機制：**
- **per-section BG 深淺交替 + bridge 過場帶 + spiral 延伸到整節高度 + fleurons + plate-transition italic** 四個機制疊加 → 把 5 sections 串成「一本攤開的 pocket guide 連續翻頁」，解開「5 張獨立紙本卡片硬生生垂直貼在一個網頁上」的 stacked-cards 陷阱
- **「翻頁節奏 + 裝訂連續」dual rhythm**：BG 深淺交替是橫向 band rhythm、spiral 是縱向連續 thread → 兩個 rhythm 機制正交工作，page 整體讀成 bound book 而非 scrollable web page
- **Location Tracker 的『定位』物理化**：3 hide → ✕ sighting bearing 交會 + GPS coords + bearing dashed lines + contour map → 真實 field naturalist triangulation 方法的視覺呈現，**機制 mechanism 而非 widget**
- **Selective reference borrow 紀律**：image 1 只借色 / image 2 只借 form-factor + motif + typography hint → user 明確 commit「reference 是 partial input、不是 1:1 copy target」（[[references-are-partial-inputs]]）

## figma_url
https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=534-59
