# Daily UI 018 — Analytics Chart · Reading Florence Nightingale's 1858 Coxcomb · MDCCCLVIII Royal Commission Plate I

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `acquire-info`（雜誌研讀頁、不是控件 console）。路由 → **Structural Archetypes catalog · Editorial Manuscript**，從「dashboard / hero metric card / interactive filter」的 modern analytics console 預設重寫為「1858 Royal Commission Plate I · 讀 Florence Nightingale 在 East Army 24 個月的 polar-area mortality 圖、Blue Book 編排做頁面框架」。
- **Density**: high（7 sections 縱排 4414h；Coxcomb 主節有 Year I 33 個 wedges × 3 因 + Year II 29 個 wedges、外加 marginalia ink 圖例；Reform-compare 又重畫 2 個 mini coxcombs；Findings 大型 pullquote；Provenance 5 條 dot-leader 條目）。
- **Success**: 讀者一眼讀出「這不是 SaaS chart card / 不是現代 infographic 重畫、是 1858 Plate I 的當代閱讀」+「Year I 的 Prussian blue 在 Year II 顯著縮水 = 改革後的政治證據 + same scale k=7.23 / k=5 governs both 是 honest comparison 不是視覺修辭」。

### Commit Before Code（9 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | printed not designed（編輯印刷的克制紀律、非 dashboard product designer 的小卡片）/ evidence not advocacy（資料是政治證據、非情緒勸進）/ sanguine not decorative（朱紅是因為印刷三色印的歷史 ink、非 brand accent）/ restrained not embellished（無 prestige dressing、無假目錄號、無假圖板邊框）/ analytical not infographic（Tufte 教材級 polar-area chart 本體、非 Behance medium-post 重畫） |
| (b) | One named star | **1858 East Army Coxcomb 雙年玫瑰圖**（Diagram of the Causes of Mortality in the Army in the East · Plate I · Year I 4/1854 – 3/1855 catastrophic year + Year II 4/1855 – 3/1856 post-reform）— star **不是某一個月的高峰、也不是某一個 cause**，是「24 個月 × 3 因的整體 polar-area 結構 + same-scale 雙年比較」這個完整圖像 — Nightingale 1858 政治證據的視覺載體本身。 |
| (c) | Motifs (2-3) | (1) **三色印 lithograph palette** — Prussian blue 普魯士藍 (#1F3A68 Preventable) + sanguine red 朱紅 (#B33A2A Wounds) + bone black 骨碳黑 (#0A0A0A All Other) on bone paper substrate ／ (2) **polar-area wedges 12 月 × 3 因 layered concentric** — 每月一個 30° 楔形、3 因依 area-largest-first append (z-order 最大在底)、ALL THREE 共用 area-not-radius 編碼規則 ／ (3) **Blue Book editorial chrome** — 全頁 ROYAL COMMISSION ON THE SANITARY STATE OF THE ARMY · Plate I · MDCCCLVIII period title / VOLUME I PLATE I imprint block 右上 / dot-leader bibliography 引用 sources / 全頁無 Arabic numerals 在 titling，全用 Roman numerals MDCCCLVIII MDCCCLIV ／ (4) **bone-paper 紙質基底** — `color/bg` 純白 + 三色 ink 同框做暖色化、無 Instagram 過度做舊 filter |
| (d) | Anchor refs (≥2) | (1) **Florence Nightingale**, *Notes on Matters Affecting the Health, Efficiency, and Hospital Administration of the British Army* (Harrison & Sons, London, 1858), Plate I — 原版 Coxcomb 玫瑰圖／(2) **Royal Commission on the Sanitary State of the Army**, *Report, with Appendices* (HMSO, London, 1857) — 政治背景／(3) **I. B. Cohen** (1984), "Florence Nightingale," *Scientific American* vol. 250 no. 3, pp. 128–137 — 圖表分析學術／(4) **L. R. Brasseur** (2005), "Florence Nightingale's Visual Rhetoric," *Technical Communication Quarterly* vol. 14 no. 2 — visual rhetoric 分析 |
| (e) | Anti-goals (≥2) | ❌ Modern SaaS dashboard（Tailwind cards / shadcn pill / gradient text / hero metric card / dual CTA）／ ❌ Tufte-pastiche 純黑白學術裝（街道電線桿純黑白資訊設計 = "information design 筆記" 拼不出 Victorian print）／ ❌ Steampunk / faux-archival（假黃複古紙 + 雕花邊框 + 鎏金銅 = prestige dressing 違反 [[feedback_no_prestige_dressing]]）／ ❌ Infographic「現代手繪重畫 1858」über-flat 2D（Behance medium-post 風） |
| (f) | Color strategy | **Committed · 三色印（Prussian blue + sanguine red + bone black）on bone paper substrate** — UI chrome 100% token-bound（`color/bg` `color/fg` `color/fg-muted` `color/border` `color/bg-alt`），chart inks 作為 **subject-matter ink** 不繫 token（accent v0.4 中性化到灰、`color/accent` 完全略過、三色由直接 hex literal 承載；audit allowlist 已加入避免誤判 P1 drift）。**Subject-matter ink 與 UI token 分軌**是此 brief 的紀律：UI 是設計系統、ink 是內容素材。 |
| (g) | Scene sentence (forces dark/light) | **LIGHT · 骨白紙頁，閱讀室自然光，墨色微微錯版，Coxcomb 在中央版心，Blue Book 序言在邊欄、午後 reading-room 不是夜燈** — 1858 lithograph fresh print 質感、publisher default mode Light → 無需 setExplicitVariableMode override |
| (h) | Register | **editorial-magazine** — series 第二個 editorial register entry（連同 daily-008 404 Royal Atlas / daily-017 鏢局憑單作為近期 cultural-artifact heavy entries 後），與 atmospheric-craft 並列為 craft-anchored 主軸。**Bodoni-esque display via Inter Bold + 緊字距** 替代真實 serif（minimal-ds 字族池無 serif；Inter Bold + letterSpacing -2 撐 Victorian heavy display）— register × type-system orthogonality 的 sans 替代證明 |
| (i) | Section list (top→bottom scroll order) | `Hero` (∼720h, 4-row: HEADER eyebrow / DISPLAY title 3-line + IMPRINT column / PREAMBLE paragraph / bottom rule) → `Coxcomb` (∼1500h, plate label row + HORIZONTAL body: PRIMARY 620×620 Year I + SECONDARY 360×360 Year II + MARGINALIA right column with three-ink legend + bottom footnote) → `Legend` (∼560h, bg-alt subtle paper variation; 3 ink-spec rows with large swatch + KEY-DICTIONARY right) → `Reform-compare` (∼900h, HORIZONTAL BEFORE 480×460 + INFLECTION 240 center + AFTER 480×460, all k=5 same scale; DELTA row 1500→107; footnote) → `Findings` (∼480h, LEFT-MARGIN-NUMERIC "1 144" + PULLQUOTE main quote + RIGHT-MARGIN-NOTE GLOSS) → `Provenance` (∼560h, SOURCES 5 dot-leader entries + METHOD note) → `Footer` (∼320h, TOP rule + COLOPHON "Analytics Chart." + NAV column + meta) |

### Archetype
**Editorial Manuscript**（Structural Archetypes catalog）— 不勉強 reframe。Editorial Manuscript = 單欄閱讀流 + 邊欄注釋 + 每節 single local protagonist + 連續滾動 sectional rules separated by hairlines。Analytics chart 與 Editorial Manuscript 的天然對齊：chart 本體 = body image / preamble = manifesto / findings = pullquote / provenance = bibliography — Coxcomb 章節就是 Editorial Manuscript 的 hero plate；其餘章節都是 supporting essay structure。

### Anti-template sanity check（gate 3 silent · PASS）
「Nightingale 1858 Coxcomb + 三色 lithograph palette + bone paper light + Inter Bold display + Blue Book chrome + 7-section Editorial Manuscript」會 read like Awwwards SOTD 還是 100 SaaS dashboard？→ **PASS**：沒有任何 hero metric card / dual CTA / gradient title / shadcn pill。也沒有 Tufte b/w information-design 純素學術裝。Functional Archetypes 不在 catalog（intent = acquire-info → Structural catalog；不是 accomplish-task），所以 Editorial chrome contamination test 不適用（test 是用來查 Functional 是否被 Editorial chrome 污染）。

---

## ZoneMap log（gate 4 / §3.1.5 · 7 sections per scroll order）

ZoneMap 參考欄統一放在 Page 1 的 x=19000 scratch column（off-canvas 右側，與其他 dailies row-1/row-2 既有橫排不衝突；spec 預設 x=-1600 在此 file 幾何下會撞上 daily-017）。7 個 ZoneMap 縱排 stacking y=0 → y=4760，渲完成後 §3.3→§3.4 邊界刪除全部 7 frame。

### ZoneMap-1440-Hero（confirmed v1，5 zones）
- HEADER 1440×48 r4 top-flush / MASTHEAD-TITLE ★ 880×220 r1 lower-left / IMPRINT 280×120 r3 upper-right / PREAMBLE 600×120 r3 / DECORATE 1440×4 r5 bottom-flush
- 4 acceptance criteria PASS：variance 5.76× ✓ / HEADER + DECORATE edge anchored ✓ / 1 star + ★ largest ✓ / 5 distinct roles ✓

### ZoneMap-1440-Coxcomb（confirmed v2，overlap fix）
- **v1 缺陷**：SECONDARY 380×380 at x=900 與 MARGINALIA 216×400 at x=1224 水平重疊 56px、看起來像意外不像刻意分層
- **v2 iterate**：SECONDARY 縮為 360×360 並左移至 x=820、與 MARGINALIA 之間留 44px gap
- 最終 5 zones：PLATE-LABEL 280×24 r4 / COXCOMB-PRIMARY ★ 600×600 r1 / COXCOMB-SECONDARY 360×360 r2 / MARGINALIA 216×420 r3 right-flush / FOOTNOTE 1100×60 r4

### ZoneMap-1440-Legend（confirmed v1，4 zones）
- EYEBROW 480×24 r4 / INK-SWATCHES ★ 760×340 r1 / KEY-DICTIONARY 520×360 r2 right-flush / DECORATE 1440×2 r5
- 4 criteria PASS

### ZoneMap-1440-Reform（confirmed v1 但 star 改派）
- **設計階段 star 重判**：原 brief 草案把 CENTER-CAPTION 設 ★，但實際算 area 在 280×360 = 100,800 / viewport 1440×880 = 1,267,200 = 7.95% — **fail star ≥25% 或 spatial largest**。**rhetorical 重新分析**：歷史上是 BEFORE rose（災變那年的鏢頭）才是「改變世界的證據」、CENTER-CAPTION 是 bridging 註解。改派 BEFORE = ★ r1（640×540 vs 100,800 = 345,600 = 27.3% ✓ AND largest ✓）；CENTER-CAPTION 降為 INFLECTION r3。
- 最終 6 zones：EYEBROW 400×24 r4 / BEFORE ★ 640×540 r1 left-flush / INFLECTION 200×360 r3 center / AFTER 540×440 r2 right-flush / DELTA 1280×64 r3 / FOOTNOTE 1100×24 r4

### ZoneMap-1440-Findings（confirmed v1，6 zones）
- EYEBROW 600×24 r4 / LEFT-MARGIN-NUMERIC 180×280 r2 left-flush / PULLQUOTE ★ 920×280 r1 / ATTRIBUTION 280×60 r3 / RIGHT-MARGIN-NOTE 160×280 r4 right-flush / BOTTOM-RULE 1440×2 r5

### ZoneMap-1440-Provenance（confirmed v1，5 zones）
- EYEBROW 480×24 r4 / META-PAGENUM 80×24 r4 right-flush / SOURCES-LIST ★ 600×400 r1 / METHOD-NOTE 600×400 r2 / BOTTOM-RULE 1440×1 r5

### ZoneMap-1440-Footer（confirmed v1，4 zones）
- TOP-RULE 1440×1 r5 top-flush / COLOPHON ★ 720×120 r1 / NAV-COLUMN 400×80 r4 / META-BOTTOM 600×24 r4
- Star COLOPHON 86,400 / 403,200 = 21.4%，**未到 25% 但 spatially largest ✓** — criterion 3 經 "spatially largest" path PASS

### Cross-section coherence
- **左側 anchor column**：Hero MASTHEAD-TITLE 大字塊（lower-left）↕ Coxcomb COXCOMB-PRIMARY（left-leaning）↕ Reform BEFORE（flush left）↕ Findings LEFT-MARGIN-NUMERIC（flush left）— **「左側 dominant」column 一路貫通**，編輯印刷的 left-eye-anchor 紀律
- **右側 meta column**：Hero IMPRINT VOLUME I PLATE I MDCCCLVIII ↕ Coxcomb MARGINALIA（right-flush）↕ Legend KEY-DICTIONARY（right）↕ Findings RIGHT-MARGIN-NOTE GLOSS ↕ Provenance META-PAGENUM（right-flush）— **「右側 meta / 邊欄注釋」column 一路貫通**，Blue Book 學術版面的 marginal-gloss 紀律
- **中央版心**：Hero DISPLAY title + PREAMBLE / Coxcomb Year II SECONDARY rose / Reform INFLECTION caption + DELTA / Findings PULLQUOTE — **大字 / 主節點 / 重述居中**

---

## Compose phase log（§3.2 · 1440 outer wrapper · 8 use_figma calls + 1 fix call）

### Phase D Call A — Outer wrapper + Hero
- Outer name "Daily 018 — Causes of Mortality - 1440" VERTICAL auto-layout itemSpacing=0（Editorial Manuscript 連續流、無 SaaS section gap）、padding 0、FILL/HUG sizing → **gotcha**：`outer.resize(1440, 720)` 把 `primaryAxisSizingMode` 從 AUTO 翻回 FIXED，需在所有 children append 完後再 set 一次 AUTO 才會 grow（**fix call** 修正 outer h 從 720 → 1423）
- Hero 4 row：Row-Header (HORIZONTAL SPACE_BETWEEN, 47h) + Rule-HeaderBottom (FILL 1×1) + Row-Title (HORIZONTAL SPACE_BETWEEN top-aligned, 403h with display + imprint) + Row-Preamble (HORIZONTAL, 184h) + DECORATE-Rule
- Display title "Diagram of the Causes / of Mortality in the / Army in the East." — Inter Bold 88px bound to `text/display`, letterSpacing PIXELS -2, lineHeightPct 100（**P2 polish**：理論上應 110% 配合 leading/tight；100% 在 Inter Bold 88px 多行時還是有自然 ascender/descender separation、視覺尚可、不阻斷 hand-off）
- Imprint block 5 lines right-aligned in caps small caps 風（VOLUME I / PLATE I / Presented to both Houses of Parliament / by Command of Her Majesty / MDCCCLVIII）— Roman numerals 紀律全頁延伸

### Phase D Call B — Coxcomb section + Year I primary chart (33 wedges)
- Section "Coxcomb" VERTICAL itemSpacing=0 padding 64 sides
- Body row HORIZONTAL itemSpacing=40
- **Overlay-PrimaryChart 620×620 NONE layout**（spec 規則：NONE with children = P1 prefix Overlay- to skip codegen audit；audit.js 已驗證 Overlay- 前綴正確豁免）
- 12 月 × 3 因 = 33 個非零 wedges（April 1854 至少有 P=1, O=1；其他月分至少有 P + O；Aug 起加 W）
- **Wedge geometry**：每個 30° 楔形使用 `figma.createEllipse()` + `arcData = { startingAngle, endingAngle, innerRadius: 0 }`，從 -π/2（top）開始順時針 12 月、每月 +π/6
- **Scale**：r = k × √deaths, k=7.23（給定 max preventable Y1=1500 → r_max=280 px 在 620×620 center 310,310 fits）
- **Z-order 紀律**：每月 3 因依 √deaths 降冪排序、largest first append → smaller after → 視覺上 outer ring = 該月最大 cause、middle = 第二、inner = 第三（match Nightingale 原版概念：outer ring 視覺即「最大 cause」）
- **Subject-matter ink** literal hex：Prussian blue `#1F3A68` + sanguine red `#B33A2A` + bone black `#0A0A0A` — 不繫 token、audit allowlist accepted
- Center pin 4×4 黑點 bound to `color/fg` — 標 common vertex（Nightingale 註：The areas are measured from the centre as the common vertex）

### Phase D Call C — Coxcomb section completion（Year II 29 wedges + marginalia + footnote）
- Overlay-SecondaryChart 360×360 同 scale k=7.23 → Y2 peak=220 → r_max=107 px → **視覺證據是 Year II rose 顯著縮水**
- Year II Apr 1855 (220, 100, 60) wounds=100 比 preventable 220 接近一半，與 Y1 月份相比 wounds 比例上升 — 真實歷史細節保留
- Marginalia column VERTICAL HUG：「THREE INKS」標 + 3 ink swatch (12×12) + label rows + hairline rule + 技術註 (k=7.23 same scale governs both years; diminished rose is empirical not rhetorical)
- Footnote row：Florence Nightingale, Notes... (1858), Plate I, p. 11. Source data harmonised to monthly mortality per 1 000 mean strength.

### Phase D Call D — Legend section
- 全節 bg `color/bg-alt`（從 #FFFFFF → #F5F5F5）→ 視覺上微微 paper variation 區隔 Coxcomb（white）
- INK-SWATCHES col VERTICAL → 3 個 ink-spec row HORIZONTAL 含 96×96 大 swatch + 雙欄文字：header row HORIZONTAL SPACE_BETWEEN (label Bold h2 + hex caption right) + 副標 caption + body paragraph（technical 歷史細節：Prussian Blue 1704 Berlin / Sanguine Red 朱砂 cinnabar / Bone Black carbon-from-bone）
- KEY-DICTIONARY 右欄 360 wide：「ON READING THE WEDGES」+ 楔形編碼說明 + hairline + 「areas not radii」note

### Phase D Call E — Reform-compare section（2 mini polar charts + INFLECTION + DELTA + footnote）
- 雙 mini polar charts 同 k=5（**honest comparison 紀律**：不為 Year II rose 視覺大小用更大 k 來補；用同 scale 才能看出政治變化）
- BEFORE chart 480×460, Y1 12 月 × 3 因（同 Call B 邏輯但 k=5 → r_max=194）
- AFTER chart 480×460, Y2 12 月 × 3 因（k=5 → Y2 peak r_max=74，rose 視覺上很小、明顯）
- INFLECTION column 240 wide center：MARCH MDCCCLV eyebrow + 48px 黑色 horizontal rule + "Sanitary Commission arrives at Scutari." text/h2 Bold tight-leading + 短解釋
- DELTA row HORIZONTAL CENTER：1 500 (text/display Bold) → 107 (text/display Bold) + caption note，數字級 anchors 整節
- Footnote 居中 800 wide

### Phase D Call F — Findings section
- LEFT-MARGIN-NUMERIC 200 wide：「1 144」display Bold tight-leading + 雙 caption（"PREVENTABLE / DEATHS" + "PER 1 000 / MEAN STRENGTH"）+ 40px hairline rule + "JANUARY MDCCCLV"
- PULLQUOTE-Main col layoutGrow=1 → 拿剩下寬度：「"Of every thousand soldiers who died in the East, more than four-fifths perished from causes preventable by sanitation — not from wounds in battle, not from the cold, not from the Russian gun."」h1 48px lineHeightPct 130 letterSpacing -0.6 + 80px hairline + attribution caption
- RIGHT-MARGIN-NOTE col 180 wide：「GLOSS」Bold + 學術註解（Cohen 1984 / Brasseur 2005 後續學者 estimate 數據）

### Phase D Call G — Provenance section
- SOURCES-LIST col layoutGrow=1：5 個 bookEntry rows HORIZONTAL SPACE_BETWEEN，每 row 左 year (caption muted) + title (body) + 右 page reference (caption muted) + 下方 1px hairline
- 5 entries：1858 Nightingale Notes / 1857 Royal Commission Report / 1858 Nightingale Mortality of the British Army / 1984 Cohen Scientific American / 2005 Brasseur Tech Comm Quarterly
- METHOD-NOTE 420 wide：方法說明 + hairline + 楔形 scale 公式 r = k√d 註

### Phase D Call H — Footer section
- TOP-RULE 1440×2 bound to `color/fg`（粗 rule、close-out emphasis 比其他 hairline 重）
- Body row HORIZONTAL SPACE_BETWEEN：COLOPHON col HUG (DAILY UI · 018 caption + "Analytics Chart." display Bold + composed by dianyistudio · MMXXVI) + NAV-COLUMN VERTICAL HUG right-aligned (INDEX / NOTES / SOURCES / → DAILY 019 muted)
- Row-Meta HORIZONTAL SPACE_BETWEEN：reading 註 left + figma.com URL right，全 caption muted

### Phase E — Edit Pass
- audit.js sweep PASS：token drift 0（chart ink allowlist accepted）/ codegen issues 0（Overlay- 前綴生效）/ state coverage N/A（無 interactive primitives, anti-pill register）
- 視覺 10 sweeps PASS（5.7 唯一 P2 polish 是 hero display lineHeight 100→110；不阻斷 hand-off）
- ZoneMap cleanup（§3.3→§3.4 邊界）：7 frames removed via prefix match `ZoneMap-`

### Phase G — AI image swap（post-handoff milestone）
- 4 張 user-generated AI lithograph chart 圖（ChatGPT image gen，Year I primary / Year II secondary / BEFORE mini / AFTER mini）替換 4 個 Overlay 的 vector wedges
- **Cleanup discipline**：4 frames 清掉 128 個 vector wedges + center pins + inline captions；Reform-compare chartCol 內 4 個重複 text labels 砍掉（AI image 底 caption 已承載）；Row-Eyebrow 左側「改革前 vs 改革後 · BEFORE & AFTER SANITARY REFORM」砍掉（AI image 頂 caption 已承載 § III 章節 mark 留）
- **upload_assets workflow**：4 個 single-use submit URL（10 min 過期）+ multipart POST PNG bytes（filename 變圖層名）+ Figma plugin 自動 BlobStore commit + 自動 set IMAGE fill on target nodeId + scaleMode FIT 保 aspect
- 4 imageHash 落到對應 nodeId：468:59 PrimaryChart / 472:55 SecondaryChart / 475:63 Before / 475:105 After
- **Quality jump**：vector wedges 算術正確但「too computer-precise」、AI image carry plate-mark indentation + hand-engraver wobble + ink registration offset + paper grain — Victorian lithograph 質感從 placeholder → image-fidelity
- AI image source PNG 歸檔到 `daily-018/screenshots/raw-ai/`（4 張共 ~9 MB）
- final page screenshot 從 outer h=4414 → h=4352（高度微減 62px 因 Reform-compare Row-Eyebrow 已 trim）

---

## Source data note

本頁 chart 數據是「approximation harmonised against Nightingale's 1858 plate values」、非逐月 exact figures（exact 數據在 sectionals 之間有 source discrepancies）。**取用紀律**：
- Preventable / Wounds / Other 月別 deaths per 1000 from approximated curves matching the plate's visual proportions
- Year I peak preventable ≈ 1500 (Jan 1855), Year II annual avg ≈ 107
- **Daily UI piece scope**：accuracy 到「視覺上正確 + 學術上接近 historical record」即可；要 publication-grade exact reproduction 需另查 Royal Commission Appendix III 原表
