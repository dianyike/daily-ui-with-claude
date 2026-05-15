# Daily 018 · Mechanism Card

> 把 Analytics Chart 從「modern dashboard hero metric card + 篩選器 + dual CTA + gradient」的 SaaS chart card 預設重寫成「1858 Royal Commission Plate I · 讀 Florence Nightingale 在 East Army 24 個月的 polar-area mortality 圖、Blue Book 編排做頁面框架」。**Analytics Chart 不是 dashboard widget、是政治證據的視覺載體**——Nightingale 1858 用三色印 lithograph 把 Prussian blue (Preventable Disease) / sanguine red (Wounds) / bone black (All Other) 24 個月 × 3 因 layered concentric 排在 polar-area wedges、改變了英國軍隊衛生制度。daily-018 復刻這套圖像語法、把 Editorial Manuscript chrome（VOLUME I · PLATE I imprint / MDCCCLVIII Roman numerals / dot-leader bibliography / Blue Book preamble）做頁面骨架。

## archetype
**Editorial Manuscript**（Structural Archetype）— 不勉強 reframe。Editorial Manuscript = 單欄閱讀流 + 邊欄注釋 + 每節 single local protagonist + 連續滾動 sectional rules separated by hairlines。Analytics chart 與 Editorial Manuscript 的天然對齊：chart 本體 = body image / preamble = manifesto / findings = pullquote / provenance = bibliography — Coxcomb 章節就是 Editorial Manuscript 的 hero plate；其餘章節都是 supporting essay structure。**series 第二個 Editorial Manuscript Structural 應用**（前次 daily-008 404 Royal Atlas 同 archetype 但 register 不同；017 鏢局是 Functional Receipt 不在 Structural catalog）。

## register
**editorial-magazine** — series 內第二個明確 editorial-magazine register entry（連同 daily-008 404 Royal Atlas）。**Sans-only 替代 serif 的紀律**：minimal-ds 字族池無 serif，Latin family bind 解析到 Inter。Bodoni-esque heavy display 用 Inter Bold 88px + letterSpacing PIXELS -2 撐起 Victorian 印刷重量；caps eyebrow 用 letterSpacing 1.6–2.4 + Roman numerals 文字紀律 (MDCCCLVIII / MDCCCLIV / VOLUME I / PLATE I / § II § III)；body 用 Inter Regular lineHeightPct 150 配 max-width 720。**證明 editorial-magazine register 可承載 sans-only 字族而不需要真實 serif**。

## purpose_triad
- **intent**: acquire-info（雜誌研讀頁、非控件 console；中間選項「console with minimal controls」在 Gate 1 第一輪被 user 確認排除）；路由到 Structural Archetypes catalog · Editorial Manuscript
- **success**: 一眼讀出「這不是 SaaS chart card / 不是現代 infographic 重畫、是 1858 Plate I 的當代閱讀」+「Year I 的 Prussian blue 在 Year II 顯著縮水 = 改革後的政治證據 + same scale k 是 honest comparison 不是視覺修辭」
- **density**: high（7 sections 縱排 4414h；Coxcomb 主節有 Year I 33 個 wedges × 3 因 + Year II 29 個 wedges；Reform-compare 又重畫 2 個 mini coxcombs；Findings 大型 pullquote；Provenance 5 條 dot-leader 條目）

## palette_recipe
- **strategy**：Committed · 三色印（Prussian blue + sanguine red + bone black）on bone paper substrate
- **UI chrome 100% token-bound**：
  - `color/bg` Light = #FFFFFF（純白 bone paper substrate）
  - `color/fg` Light = #0A0A0A（near-black，與 bone-black ink 自然重合）
  - `color/fg-muted` Light = #737373（45% gray，eyebrow / metadata / GLOSS / marginalia）
  - `color/border` Light = #E5E5E5（hairlines / 1px rules）
  - `color/bg-alt` Light = #F5F5F5（Legend section 微微 paper variation）
- **Chart inks as subject-matter ink, NOT token**：
  - Prussian blue `#1F3A68` — Preventable Disease（Berlin 1704 Diesbach 合成的第一個現代 lake pigment、in plate carries largest weight）
  - Sanguine red `#B33A2A` — Wounds & Injuries（cinnabar-vermilion 朱砂紅 of British editorial press）
  - Bone black `#0A0A0A` — All Other Causes（carbon charred from bone；與 `color/fg` 自然重合）
- **`color/accent` 完全略過**：v0.4 sync 把 publisher accent 中性化到灰 (#6B6B6B Light / #B5B5B5 Dark)，本題完全不使用、accent 視覺角色由 subject-matter ink 承載
- **audit.js allowlist 紀律**：三色 ink hex（1f3a68 / b33a2a / 0a0a0a）加入 audit token drift allowlist，避免誤判 P1 drift；**Subject-matter ink ≠ UI token** 是此 brief 第一次明確分軌

- **機制差異 vs 017 vermillion functional spread cluster**：
  - 011 dot @ NOW / 013 Solaris glow @ in-flight / 014 Cobalt dot @ NOW — 永恆單座標
  - 015 amber lamp glow — state-binary toggle
  - 016 klaxon-red @ critical alert — conditional event broadcast
  - 017 vermillion @ 5 functional spread positions — functional-multiplexed evidence chain
  - **018 三色 ink @ subject-matter color encoding** — **data-channel encoding**（每個 ink 對應一個 mortality cause、48 個 wedges × 24 months × 2 years 共用同 color-cause mapping、color = data category 不是 brand accent 也不是 alert state）
  - **Accent / color 機制第七階段演化**：裝飾 → 永恆座標 → 永恆座標 → 永恆座標 → state-binary → event-broadcast → functional-multiplexed evidence chain → **data-channel encoding**

## type_pair
**Sans-only editorial system**（Latin = Inter, publisher resolved）。
- **印刷權威 voice 1**：Inter Bold (text/display 88px) — Hero display title + Reform-compare DELTA 數字（1 500 → 107）+ Findings LEFT-MARGIN-NUMERIC「1 144」+ Footer "Analytics Chart." 大字
- **印刷主聲 voice 2**：Inter Regular (text/h1 48px) — Findings PULLQUOTE 主體 "Of every thousand soldiers who died..."
- **副標 / 內文 voice 3**：Inter Regular (text/body 16px) — preamble paragraph / ink-spec body / provenance entries / marginalia
- **eyebrow / metadata voice 4**：Inter Medium (text/caption 12px) — 全頁 eyebrow caps (ROYAL COMMISSION / LEGEND · 三色印 / PROVENANCE & METHOD / FINDING I)、imprint block、page numbers、citations
- **Tracking 紀律**：
  - letterSpacing -2 PIXELS on display 88px（Victorian heavy serif 在 sans 上的緊縮模擬）
  - letterSpacing -0.6 PIXELS on h1 48px pullquote
  - letterSpacing +0.4 to +1.2 PIXELS on body 16px
  - letterSpacing +1.6 to +3.2 PIXELS on caption 12px eyebrows（Blue Book caps 緊湊但有空氣感）
- **lineHeight 紀律**：
  - 100% on display titles（多行 display 自然有 ascender/descender separation）
  - 110% on h2 statements（INFLECTION "Sanitary Commission arrives at Scutari" 緊收）
  - 130% on h1 pullquote
  - 150% on body 16px + caption 12px（Inter 在 small size 需要更多 leading 撐 legibility）
- **Roman numerals 全頁紀律**：MDCCCLVIII (1858) / MDCCCLIV (1854) / MDCCCLV (1855) / MDCCCLVI (1856) / MMXXVI (2026) / VOLUME I / PLATE I / § II § III § IV § V — Arabic numerals 只在 data 出現（1 500 / 107 / 1 144 / per 1 000）。**Roman = 編號 / Arabic = 數據**的物理區分，與 Blue Book 19th-century editorial convention 一致。
- **跟 daily-017 三 CJK 字族對比**：017 用 Noto Serif TC + Ma Shan Zheng + ZCOOL XiaoWei 三 CJK 字族 atmospheric-craft；018 用 Inter 單字族多 weight + caps + tracking 紀律 editorial-magazine — **register 反向 + cultural-medium 反向 + type system 反向**，補入 register × type-system 三維 orthogonality 證據

## motifs

1. **Coxcomb polar-area wedges 12 months × 3 causes layered concentric** — 每月 30° 楔形使用 `figma.createEllipse` arcData 從 -π/2 順時針 +π/6 per month；每月 3 因（Preventable Blue / Wounds Red / Other Black）依 √deaths 降冪 append（largest first → back; smaller after → front overlay）→ 視覺上 outer ring = 該月最大 cause、middle = 第二、inner = 第三。**「Area not radius encodes mortality」紀律**：r = k × √deaths（k=7.23 hero / k=5 小 multiples），加倍死亡 = √2 倍 radius = 2× area。`pin` 中心 4×4 黑點標 common vertex。

2. **三色印 lithograph palette as data-channel encoding** — Prussian blue / sanguine red / bone black 三色 ink 分別映射 Preventable Disease / Wounds / All Other Causes；color 不是 brand accent / alert state / decorative variation，而是 data-channel encoding（color = data category）。**48 個 wedges × 24 months × 2 years 共用同 color-cause mapping**，因此 viewer 在 chart 之間能自然 carry 編碼閱讀；legend section 用 96×96 大 swatch + 歷史文化 spec（Berlin 1704 / cinnabar / bone charcoal）強化 mapping memory。

3. **Same-scale honest comparison (k=7.23 hero, k=5 small multiples)** — Year II rose 看起來顯著縮水是因為 same scale 控制下的 empirical evidence、不是視覺修辭調整。Marginalia 直接告訴 viewer：「Same scale k=7.23 governs both years; the diminished rose at right is empirical, not rhetorical」。同樣的紀律延伸到 Reform-compare BEFORE/AFTER（k=5 同步）。**Honest comparison 是 evidence-presentation 的紀律 axis**，與 SaaS dashboard 經常為視覺平衡而調 scale 的做法相反。

4. **Blue Book editorial chrome as page skeleton** — VOLUME I · PLATE I 右上 imprint block、ROYAL COMMISSION ON THE SANITARY STATE OF THE ARMY · MDCCCLVIII · PLATE I 全頁 header strip、Roman numerals 全頁編號紀律、dot-leader bibliography 5 entries with year + title + page reference、§ II § III § IV § V 章節編號。**Editorial Manuscript archetype 的 chrome 不是 dashboard frame、是 1857-58 政府委員會 Blue Book report 的編排語法**。

5. **Subject-matter ink ≠ UI token (audit allowlist discipline)** — Chart 三色 ink 直接 hex literal `#1F3A68` `#B33A2A` `#0A0A0A`，audit.js 在 token drift sweep 加入 allowedInkHex Set 防止誤判 P1。**這是第一次明確將 subject-matter ink（內容素材）與 UI token（設計系統 chrome）分軌的紀律**。Subject-matter ink 在 brief 階段 commit 為「Prussian blue / sanguine red / bone black on bone paper」、不繫 token、不算 drift；UI chrome 100% token-bound。**未來 brief 涉及具有歷史色相規範（中藥色 / 印刷史色 / 染料化學 / 鳥類羽色 / 礦物學色）的內容創作 entries**，subject-matter color 都應走此分軌規約。

6. **Bodoni-esque heavy display via Inter Bold + 緊字距** — minimal-ds 字族池無 serif，但 Editorial Manuscript hero 通常用大字 serif。**解法**：Inter Bold 88px + letterSpacing PIXELS -2 + lineHeightPct 100，得到「sans 字族在 display 重量上模擬 Bodoni / Didone」的視覺效果。**Trade-off 接受**：略失 19th-century 純度（Bodoni 1791 是 didone serif）、但獲得 minimal-ds 紀律一致性（無 fontFamily skip-bind workaround）。**Future**：若需更真實 serif，options (b) republish library 加入 Lora/EB Garamond/Crimson 或 (c) skip fontFamily bind on display titles。

7. **Roman numerals 全頁紀律 = 編號 vs Arabic = 數據的物理區分** — MDCCCLVIII (1858) 在 imprint / Roman in citations / § II § III 章節都用 Roman；1 500 / 107 / 1 144 / per 1 000 / k=7.23 / k=5 在 data presentation 用 Arabic。**Roman = 時間與身分編號 / Arabic = 數據** 的物理分軌，與 Blue Book 19th-century editorial convention 一致；現代 dashboard convention 是「全 Arabic」一統、本 entry 反此預設。

8. **Subtle bg variation (color/bg-alt) as section register marker** — Legend section 用 `color/bg-alt` (#F5F5F5) 取代 `color/bg` (#FFFFFF)、其他 6 sections 全用 `color/bg`。**Legend = 解釋層**，視覺上微微 paper variation 區隔 Coxcomb chart 主節（white）與後續閱讀流。bg-alt 跟 bg 對比僅 ~3% L 差、不衝突，但足以 register 為 "different surface"。**Editorial Manuscript 的 surface-tonal modulation 紀律**：sections 之間用 hairlines + bg-alt 區隔，非用 color blocks 或 padding gaps。

9. **Star 重判紀律 (BEFORE rose over CENTER-CAPTION)** — Reform-compare ZoneMap 階段，原 brief 草案把 CENTER-CAPTION 設 ★，但實際算 area 280×360=100,800 / viewport 1,267,200 = 7.95%、fail criterion 3。**rhetorical 重新分析**：歷史上 BEFORE rose（災變年 Year I）才是改變世界的證據、CENTER-CAPTION 是 bridging 註解。改派 BEFORE = ★（27.3% + spatially largest）。**經驗**：brief 預設的 star 與 ZoneMap 算術可能衝突；遇到 fail criterion 應重判 star 而非 force-fit 體積。Star 是 rhetorical anchor 必須與 acceptance criteria 同時成立。

10. **Functional spread of UI hierarchy across columns (left anchor / center body / right meta)** — 7 sections cross-section coherence：左側 anchor column（Hero MASTHEAD-TITLE / Coxcomb PRIMARY / Reform BEFORE / Findings LEFT-MARGIN-NUMERIC 全 flush-left dominant）／中央版心（Hero display + preamble / Coxcomb Year II 副 rose / Reform INFLECTION + DELTA / Findings PULLQUOTE）／右側 meta column（Hero IMPRINT / Coxcomb MARGINALIA / Legend KEY-DICTIONARY / Findings GLOSS / Provenance META-PAGENUM 全 flush-right metadata）— **三縱欄結構一路貫穿 7 節**，Blue Book editorial版面的 marginal-gloss 紀律物理化到 ZoneMap level。

## why_it_works

1. **Editorial Manuscript archetype + editorial-magazine register × Sans-only Latin type system = series 補入 sans 替代 serif 在 Victorian register 的可行性證據**：series 之前 editorial register entries (008 Royal Atlas) 也是 sans-only；018 進一步證明 Bodoni-esque display 可由 Inter Bold + letterSpacing -2 取代真實 serif、register 紀律由 caps + tracking + Roman numerals + Blue Book chrome 承載而非字體本身。**Register × type-system orthogonality 補完**：atmospheric-craft (009/013/016 Inter+Plex / 017 CJK 三族)、editorial-magazine (008/018 Inter sans-only)。

2. **Color 機制升級為「data-channel encoding」**：011/013/014 永恆單座標 → 015 state-binary → 016 event-broadcast → 017 functional-multiplexed evidence chain → **018 data-channel encoding**（color = data category）。**機制第七階段演化**。Color 在 Daily UI 100 series 中經過 7 個明確不同的角色 instantiation，每個 entry 補入一個新的「color 在這裡做什麼」instance、總體形成 color-mechanism catalog 一個 axis 的完整 evidence chain。

3. **Subject-matter ink vs UI token 分軌紀律**：第一個 entry 明確把內容素材 ink（Prussian blue / sanguine red / bone black）與 UI 設計系統 token 分軌、audit.js allowlist 確認此分軌。**未來 brief 涉及具有歷史色相規範**（中藥色 / 印刷史色 / 染料化學 / 鳥類羽色 / 礦物學色 / 旗幟史 / 軍服色…）的內容創作 entries，subject-matter color 都應走此分軌規約。寫入 catalog：「Subject-matter color 是內容、不是 design system extension；audit allowlist 是分軌的 enforcement point」。

4. **Honest comparison (same-scale k) 取代視覺平衡修辭**：Year I 與 Year II 共用 k=7.23、BEFORE 與 AFTER 共用 k=5。Marginalia 明寫「Same scale governs both; diminished rose is empirical, not rhetorical」。**反 SaaS dashboard 的 scale-rebalancing 預設**（dashboard 經常為視覺平衡而調 axis scale）；Evidence presentation 紀律 ≠ Dashboard 視覺紀律。**這個紀律應寫入未來凡是 comparison chart entries 的預設**。

5. **Polar-area wedge 真實復刻取代 infographic 重畫**：daily-018 Coxcomb 用 `figma.createEllipse arcData` 真實畫 12 月 × 3 因 × 2 年 = 64+ 個 wedges、scale + z-order 紀律與 Nightingale 1858 原版一致。**反 anti-goal #4「現代手繪重畫 1858 über-flat 2D infographic」**。Daily UI 100 series 此後遇到 historical chart references（如可能的 Snow Broad Street cholera map / Shewhart 1925 control chart / Keeling Curve），都應走真實 chart geometry 復刻而非 infographic 風格化。

6. **Blue Book chrome 取代 dashboard frame**：VOLUME I · PLATE I imprint / ROYAL COMMISSION 全頁 header / dot-leader bibliography / § II § III § IV § V 章節編號 / Roman numerals 全頁紀律 — Editorial Manuscript archetype 的 chrome 全部來自 1857-58 英國政府委員會 Blue Book report 的編排語法，非任何 SaaS / dashboard / modern editorial 借鑑。**Anti-template sanity check 由 chrome 來自真實歷史 reference document 自動滿足**。

7. **Star 重判紀律：rhetorical anchor 與 acceptance criteria 必須同時成立**：Reform-compare 初稿 CENTER-CAPTION = ★ 但 area 7.95% 不過 criterion 3，重判 BEFORE = ★ 因為歷史上 BEFORE rose 才是「改變世界的證據」。**Star 不是 brief 階段預定後不能改的固定值、是與 ZoneMap acceptance criteria 同步推導的；當算術與預設衝突，重判 star 而非 force-fit 體積**。經驗寫入未來 brief：「Star nomination is provisional until ZoneMap confirms area + dominance」。

8. **Functional spread of UI hierarchy across columns 寫入 cross-section coherence**：左 anchor / 中 body / 右 meta 三縱欄結構物理化到 7 sections。**Editorial Manuscript 的 marginal-gloss 紀律 = Blue Book 學術版面物理結構**：右 meta column 不是裝飾選擇、是 19th-century 學術出版的 marginalia tradition 物理映射到當代 ZoneMap。

9. **Roman numerals = 編號 vs Arabic = 數據的物理區分**：MDCCCLVIII / VOLUME I / § II 用 Roman、1 500 / 107 / 1 144 用 Arabic — 不是隨機選擇、是 Blue Book convention。**反現代「全 Arabic」一統預設**；未來 brief 涉及歷史文獻復刻 entries 應預設考慮此區分（19 世紀英國 Blue Book / 18 世紀 Encyclopédie / 19 世紀法國 Inspections / 20 世紀早期 RSA proceedings）。

10. **AI image swap pipeline (vector → image-fidelity) 落地證據**：Figma vector wedges 算術正確但 "too computer-precise"，無 plate-mark indentation、無 hand-engraver wobble、無 ink registration offset、無 paper grain；4 張 user-generated AI image (ChatGPT image gen + 1858 lithograph prompt) 透過 Figma MCP `upload_assets` 直接 carry 這些 chrome。**完整 workflow 規約寫入 catalog**：
    - Prompt template 拆 5 個 placement（hero + 副 + 2 mini + optional paper texture），每個 prompt 包含 NO-list 與 style spec 共用段（共用：1858 British government Blue Book lithograph plate, three-color print on bone-paper substrate, hand-stippled by Victorian engraver, plate-mark indentation, ink registration offset ≤1mm, raking museum-archive light）
    - Cleanup discipline：swap 前先清掉 Figma 內所有 vector primitives + 對應重複 caption / eyebrow text（避免 chrome 重複；daily-018 砍掉 128 wedges + center pins + 4 chartCol caption + 1 section eyebrow text）
    - upload_assets MCP tool 用法：count=1 + nodeId + scaleMode=FIT，回傳 single-use submit URL（10 min 過期），multipart POST 把 PNG bytes 推上去自動完成 BlobStore commit + canvas placement + 自動 set IMAGE fill on target nodeId
    - Quality jump 證據：vector placeholder 階段 audit 通過但「too computer-precise」、AI image 落地後 Victorian lithograph 質感從 placeholder 升級到 image-fidelity（plate-mark + 手刻 wobble + paper grain + ink offset 全部 visible in screenshot）
    - **未來涉及 historical chart references 的 daily-XXX entries**（Snow Broad Street cholera map / Shewhart 1925 control chart / Keeling Curve / Marey railway timetable / Minard's Napoleon march / 任何 19th-century scientific illustration / hand-stippled chart）**預設考慮 AI gen + upload_assets swap pipeline**；Figma vector chart 從一開始就應視為 placeholder、用來 commit layout proportion 與 token discipline、最終 visual 走 image-fidelity 路徑。
