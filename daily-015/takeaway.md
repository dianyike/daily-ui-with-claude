# Daily 015 · Mechanism Card

> 把 On/Off Switch 從「iOS toggle pill / Material switch」的 SaaS 預設重寫成「1942 年 US Signal Corps Field Manual TM 11-461A · FIG. 23 J-38 電報機鍵的雙樣本剖面圖鑑」。Switch 不是 component 的 token 模擬、是物件本身的物理位置 — 拉桿水平 = OFF · 電路斷開 / 拉桿右端被按下 = ON · 電路閉合 · 信號燈點亮琥珀光。比較雙樣本（FIG. 23a / 23b）並列展示讓 state 差異成為視覺主題本身，不需要 status badge 滿頁。

## archetype
Object Metaphor（物件擬真）— switch 直接 IS J-38 電報機鍵剖面、狀態 = 物件本身的物理位置（拉桿旋轉角度 + 信號燈點亮與否），非「component variant」的 token 演繹。

## register
schematic-manual（archival illustration + numbered callouts + 雙樣本 a/b 對偶 + procedural log）— 非 cinematic-poster（daily-014）、非 atmospheric-craft（daily-013）、非 editorial-magazine、非 functional-engineering。

## purpose_triad
- intent: demonstrate-state-binary（功能性 + 教學性 brief — 比較雙樣本 OFF↔ON 的物理 mechanism 解構），路由到 Object Metaphor 而非 Functional Switch / Toggle
- success: 一眼讀出兩態的 mechanism — 拉桿位置 + 信號燈狀態同時編碼 ON/OFF，不需 status badge / label / icon
- density: medium-low（兩 plate + 上下 chrome ledger；museum/manual-page 留白節奏）

## palette_recipe
- **strategy**：Restrained · manual paper + conditional accent — 99% warm cream paper bg + 黑 ink + 中性 grey chrome + 1 conditional 琥珀 accent
- **bg**：`scene/manual-paper` (local) = #F5F1E8 — 1942 Signal Corps Field Manual 紙質暖米色。publisher `color/bg` Light = #FFFFFF 純白無年代質感、scene var 補足
- **fg**：`color/fg` (Light) = #0A0A0A — schematic 黑墨 ink（J-38 本體 + lever + thumb pad + state labels + log event 正文）
- **fg-muted**：`color/fg-muted` (Light) = #737373 — 中性 grey chrome（FIG 標籤 / 編號 callout text / Chrome-Top eyebrow / op log timestamp / morse alphabet / hairlines / terminal caps）
- **border** / **bg-alt** / **accent** / **accent-fg** / **focus-ring**：**零使用**
- **scene accent**：`scene/signal-amber` (local) = #E8B547 — **只在 ON plate 的信號燈顯影**（filament 24×24 + 3-layer halo 108×108 @ 18% / 160×160 @ 8% / 220×220 @ 5%）
  - **機制差異 vs. 011/013/014 的 perpetual-point accent rationing**：
    - 011 dot @ NOW / 013 Solaris glow @ in-flight burst / 014 Cobalt dot @ NOW hairline — 都是「永恆鎖某座標」（accent 一直在）
    - 015 amber lamp glow @ ON state — **conditional state-driven**（state=OFF 時 0 出現、state=ON 時點亮）
    - Accent 從「永恆座標符號」進一步演化為「state-binary 條件物理映射」

## type_pair
**Editorial preset** (MCP compose proxy = Inter)，走純 sans **單一字族單一聲線**（無 italic / 無 serif — Editorial chrome contamination test 紀律繼承到 Object Metaphor archetype）。
- Compose proxy: Inter（Regular 用在 log entries + morse alphabet、Medium 用在 chrome + titles + state labels）
- 字級紀律：**全頁 12pt** — 不出現 28/48/88/200 大字級。Object Metaphor 的主視覺是 schematic 插圖本身、文字不參與 hero 競爭
- Tracking 紀律：caps tracked 10-16% on chrome / 6% on log entries / 0% on morse index — 由緊到鬆建立三種讀取節奏（事實 / 流動 / 索引）
- **跟 daily-014 對比**：014 跳過 publisher type ramp 做 1:16.7 二元對比；015 反向操作 — **所有字級壓平到 caption 12pt 單一級**，typography 完全讓位給 schematic insulation

## motifs

1. **比較雙樣本 plate 對偶（FIG. 23a / 23b）** — 左 OFF / 右 ON 並列展示，**state 差異即視覺主題本身**。不是「一個 switch 的 hover state」、是「兩個獨立 schematic plate 的物理位置對比」。Anchor ref = 1942 TM 11-461A 雙圖鑑排版（同頁列 a / b 兩態）。

2. **J-38 剖面 15-component 解構** — 每 plate 15 個 component（base / feet / trunnion ×2 / fulcrum pin / lever / thumb pad / counter-weight / terminal ×2 / cap ×2 / wire ×2，OFF 多 callouts ×5、ON 多 lamp + halo ×4）。**Object Metaphor 不是貼一張 J-38 圖、是用幾何重新建構它的物理結構** — 每個 part 有明確功能 reference。

3. **編號 callouts 1-5 只出現在 OFF plate** — 18×18 paper-inset 圓 + 1px fg-muted stroke + 編號數字。**Reference plate / state plate 分工**：OFF 是「parts 圖鑑」，ON 是「state 差異展示」。Callouts 不在兩 plate 重複、避免 wallpaper。

4. **拉桿旋轉 -8° 作為 PRESSED 物理映射** — ON plate 的 lever rectangle 套 -8° rotation（Figma API 視覺上 = 順時針 → 右端下壓 + 左端抬起）。Thumb pad + counter-weight 同步重新定位到旋轉後的 lever endpoint 座標（488, 310 / 201, 270）。**幾何運算精確匹配物理 mechanism**：lever 中心 (345, 290) + 旋轉 -8° + 右端相對 (145, 0) 旋轉後位置 (143.59, 20.18) → 絕對 (488.59, 310.18)。

5. **Signal-amber 3-layer halo glow（ON only）** — filament 24×24 居中 + 3 圈 ellipse halo（108 @ 18% / 160 @ 8% / 220 @ 5%）疊出光暈質感。**這是 conditional accent 而非 perpetual rationing**：state=OFF 時 plate 無燈、state=ON 時 plate 多出整組 lamp + halo elements。Accent 不是裝飾、是物理電路閉合的視覺映射。

6. **Schematic 編號 callouts 是 functional-archetype-pure 的編號使用方式** — 不像 daily-011/012/013/014 的 N° 011 / N° VII / N° 045 / N° 014 是 issue/serial 編號（事實 reference），daily-015 的 1-5 是「part numbering」（教學 reference）。**編號從事實標記升級為 schematic 解構符號** — 跟 daily-008 的 panel `01-04` 漫畫框編號是同類功能但不同 register。

7. **Operator log + Morse index 作 chrome ledger** — 底部雙 zones 用真實 ham radio + Signal Corps procedural metadata（CQ DE K3W4 / QSL R 73 / EOM / ITU-R M.1677-1）。**Chrome 提供 schematic 的 procedural 可信度地基**，同 daily-013 telemetry sidebar 用真實 DSN engineering metadata 的策略 — 真實 metadata 取代 prestige dressing cosplay 座標。

8. **首個 LIGHT MODE 設計 in series** — daily-001 起連續 14 題以來首次切到 Light（manual paper register）。**Mode reconciliation 證明 publisher Light/Dark 雙模式都被走過**（之前 008/010/011/012 也是 Light，但用 publisher 純白；015 用 scene-manual-paper 補足年代暖米感）。

## why_it_works

1. **Mechanism reframe（Object Metaphor）取代 toggle component 預設**：iOS pill / Material switch 都是把 ON/OFF 抽象為「indicator」（藍色圓滑到右 = ON / 灰色圓在左 = OFF）。daily-015 把 ON/OFF 還原為「物理開關物件本身的位置」 — 拉桿水平 vs 拉桿被按下、信號燈暗 vs 信號燈亮。**Switch 不是 UI 元件、是被擬真的物件本身**。

2. **比較雙樣本 plate 取代「單一 component 變體」展示**：傳統 UI 設計展示 toggle states 用 hover/focus/disabled/pressed 4 variant 並列。daily-015 用 1942 manual 的「同頁列 a / b 兩態 schematic」雙樣本對偶 — **state 差異成為視覺主題本身**，不是 component property 演繹。

3. **Conditional accent 取代 perpetual rationing**：011/013/014 都是把 accent 鎖在「某座標一個點」永恆出現（NOW dot / in-flight glow / Cobalt dot）。015 把 accent 從「永恆」升級為「條件物理映射」 — 只有 ON state 才出現信號燈。**Accent 從裝飾符號 → 座標符號 → 條件物理符號**，三題逐步演化。

4. **雙星共生 = comparative-pair 新 rank typology**：daily-014 是「不同 rank 共生」（photo=1 + countdown=2）；daily-015 是「同 rank 對偶」（兩 plate 共享 1 STAR rank）。新 rank typology 補入 catalogue。**比較式 archetype 的 star 不是某個元件、是「對比關係」本身**。

5. **Schematic 編號 callouts 是 referential-numbering 純度**：daily-014 N° 014 + N° 0245 / 4800 是「issue + serial」事實 reference；daily-015 callouts 1-5 是「part numbering」教學 reference。**編號類型分工更細緻** — `N°XXX` 留給 issue/series/serial 等事實 metadata，`1-5` 純數字留給 schematic 解構編號。

6. **Schematic Manual register 取代 cinematic-poster register**：daily-014 走 photo-led cinematic-poster；daily-015 反向走純線稿 schematic-manual — 同樣 Structural 軸線上的兩個極端。**Anchor ref（TM 11-461A FIG. 23）讓所有元件落位**：FIG 23a/23b 編號 / numbered callouts / state labels「CIRCUIT OPEN / CLOSED · TRANSMITTING」/ operator log + morse index chrome 都是 manual 排版的標準件。

7. **首個 LIGHT MODE + manual paper scene var 補足 publisher 純白限制**：publisher `color/bg` Light = #FFFFFF 太冷無年代感。Scene `manual-paper` = #F5F1E8 暖米色補足、publisher 0 drift。**Q4 escape hatch 模式累積到第 4 個 scene 應用場景**（009 phosphor / 013 solaris / 014 cobalt+countdown-hero / 015 signal-amber+manual-paper），證明 scene var 是穩定可重複的工具。

8. **單一字族壓平字級 vs daily-014 1:16.7 二元對比**：014 用 12pt → 200pt 跳級對比突出 cinematic hero；015 反向 — **全頁 caption 12pt 單一字級** 讓 typography 完全讓位給 schematic 插圖。兩種極端的 type-rhythm 策略都成立、視題目 archetype 不同而選。

9. **Procedural 真實 metadata 取代 cosplay 座標**：CQ DE K3W4 / QSL R 73 / EOM 是 ham radio + Signal Corps 真實 procedural abbreviation；ITU-R M.1677-1 是真實國際電信聯盟摩斯碼標準；K3W4 是符合 US callsign 編碼規則。**每個編號 / 簡寫有 narrative function** — 同 daily-013 用真實 DSN engineering metadata（dBm / LH / DSS-14 Goldstone）的策略繼承。

## anti-goals 證據（避開的陷阱）
- ❌ iOS toggle pill SaaS → 無圓角 rounded rect track + 無滑動 thumb + 無藍色 ON state indicator
- ❌ Material switch → 無 24×16 track + 無 indicator dot + 無 Material elevation shadow
- ❌ Stranger Things 80s telegraph 復古 → 無 vapor 質感 + 無 80s neon 色 + 無 supernatural 圖像隱喻
- ❌ Steampunk brass-everywhere → 黃銅 / 金屬色僅在 lever（黑 inked） + 信號燈 filament，無滿屏鉚釘齒輪
- ❌ daily-013 deep-space telemetry sidebar → 不同年代（1942 vs 1977）+ 不同 scale（手持物件 vs interplanetary）+ 不同 archetype（Object Metaphor vs Timeline Functional）+ 不同 mode（Light vs Dark）
- ❌ daily-014 cinematic-poster → 不同 mode（Light vs Dark）+ 不同 archetype（Object Metaphor vs Structural Photography）+ 反向 type rhythm（壓平 12pt vs 跳級 12→200pt）
- ❌ Apple Settings panel → 無 grouped list + 無 chevron + 無 description text below toggle
- ❌ Wikipedia diagram → schematic-manual 是 1942 印刷 register、非 SVG 矢量百科風

## why_not_alternative_archetypes
- **Functional Switch / Toggle Component** → 會逼出 iOS pill / Material track，直接撞 anti-template。
- **Cinematic-Poster**（daily-014） → 那是 photo + letterbox 組合，Object Metaphor 的物件擬真不需要 cinematic photography。
- **Editorial Manuscript**（daily-006 / 007） → 那是雙欄 + 章節編號 + dot-leader + italic margin，Schematic Manual 的編號 callouts 不需要 manuscript chrome 多聲部。
- **Receipt / Ledger** → 會把比較雙樣本變成 line-item ledger，schematic plate 對偶消失。
- **Timeline**（daily-013） → 時間軸是時間關係的編碼，015 是 state-binary 的空間 / 物理位置編碼，不適用。
- **Object Metaphor + Storyboard 合併**（如 4-panel comic showing OFF→ON transition） → 撞 daily-008 的 4-格漫畫機制，且把單一 binary state 切割為過程動畫稀釋了 mechanism。
- **Card / Modal SaaS** → 直接撞 anti-template。

## figma_url
- File: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=387-57
- Hero 1440 wrapper: `387:57`
- Chrome-Top: `387:58`
- J38-Off-Plate (FIG. 23a): `387:59`
- J38-On-Plate (FIG. 23b): `387:60`
- Center-Divider: `387:61`
- Operator-Log: `387:62`
- Morse-Dictionary: `387:63`
- Local scene collection: `daily-015-scene` (VariableCollectionId `387:54`)
  - `scene/signal-amber` (VariableID `387:55`) = #E8B547
  - `scene/manual-paper` (VariableID `387:56`) = #F5F1E8
