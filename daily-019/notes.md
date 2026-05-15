# Daily UI 019 — Leaderboard · 1687 Royal Society Member Register · Plate XIX · MDCLXXXVII

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `acquire-info`（讀印刷頁、不是控件操作）。路由 → **Structural Archetypes catalog · Magazine Index**（不走 Editorial Manuscript — 避免 series 同質性 per archetype-cheatsheet.md L44 "Forcing a non-functional brief into Editorial Manuscript is the most common source of series-wide homogeneity"）。Magazine Index = catalogued grid of dated entries 結構，每列 = 一位 Practitioner、依 rank 排序，是 Leaderboard 的天然 archetypal 對齊。
- **Density**: medium-high（4 sections 縱排 2480h；Register 12 rows × 11 columns + 右側 7 條 Latin marginalia；Notations 8 個 def block in 3-col grid + 一段長 Method-Disclosure paragraph；Colophon 5 zones edge-strip imprint）。
- **Success**: 讀者一眼讀出「這不是 SaaS gamification leaderboard / 不是 Hogwarts 學院積分 / 不是 RPG 戰力 bar 的 fantasy game UI、是 1687 Phil. Trans. Royal Society 的當代閱讀」+「rank 不是單一戰力數字、是 7 個可量化 Faculty 欄位加總、讀者能看見 rank 的拆解」+「整套演色完全無米色 / sepia / 紙色泛黃 — iron-gall pre-oxidation blue-black on cool grey-white plate paper」。

### Commit Before Code（9 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | **printed not designed**（1687 Phil Trans 印刷紀律、非 product designer 的 leaderboard widget）／**scholarly not gamified**（學會年鑑紀錄、非 game score / podium / badge）／**monumental but understated**（star 是 LEAD-ROW 但用 typography 承載、非 card / background highlight）／**latinate not branded**（Latin 邊欄 + Cum Privilegio + Roman numerals 是真實 17C 編排紀律、非裝飾性 prestige dressing）／**ranked not ordered**（rank = Roman numerals + decomposable 7-column tally、非 progress bar / 1st/2nd/3rd 視覺修辭） |
| (b) | One named star | **Register 區的 LEAD-ROW（Dr. ALDUS SERTORIUS, F.R.S. · Cantabridge）**作為 page-level protagonist 的代表 — 整個 Register 區是 page 主節，Register 內的 LEAD-ROW 是 local star。視覺上 LEAD-ROW 由 **typography 承載 elevation**：bigger № at text/h2 (28pt) + NAME at text/body + weight/medium + collegium italic 副行 + 7 tally numbers at text/body + weight/medium + **TOTAL "45" at text/h2 + weight/bold + 1.7× line-height** — 完全不用 card / background / podium / trophy / badge / medal 視覺修辭（anti-goal 全列）。 |
| (c) | Motifs (2-3) | (1) **Iron-gall blue-black ink on cool grey-white plate paper** — DS palette monochrome（`color/bg` 白 + `color/fg` 近黑 + `color/fg-muted` 中灰）剛好對得上 1687 pre-oxidation 真實演色，無米色 / sepia / 紙色泛黃 ／ (2) **Decomposable Faculties Tally** — rank 不是單一戰力數、是 7 個可量化 Faculty column (TMUT / ATHL / DMNS / CITN / TNRE / CRSP / DECL) 加總 + TOTAL，讀者看得到 rank 拆解 ／ (3) **Phil. Trans. Royal Society chrome** — PHILOSOPHICAL TRANSACTIONS OF THE ROYAL SOCIETY 頂部 eyebrow / Vol. XVI · Pl. XIX · Fol. 287 · LONDINI · MDCLXXXVII meta line / BOOK I · PRINCIPAL FELLOWS 區段頭 / NOTÆ 邊欄 Latin abbreviation key + cross-refs / EXPLANATION OF THE COLUMNS / Cum Privilegio Regiæ Majestatis / PRINTED FOR THE SOCIETY by IOHN MARTYN — full editorial chrome 來自真實 17C scientific publication imprint discipline ／ (4) **Full-bleed horizontal rules + nested hairlines** — TitlePlate / Register / Notations / Colophon 之間用 1440-wide full-bleed rule 分隔，rows 之間用 1056-wide `color/border` hairline、LEAD-ROW 與 body 之間用 `color/fg` 較粗 hairline 加強分隔 |
| (d) | Anchor refs (≥2) | (1) **Henry Oldenburg / Robert Hooke**, *Philosophical Transactions of the Royal Society* (London, MDCLXXXVII / 1687) — Vol. XVI 的實際出版頁面結構 ／ (2) **Royal Society's 1663 Charter** — 紋章與 institutional language 紀律 ／ (3) **David Loggan**, *Oxonia Illustrata* (1675) — 17C 學會出版的銅版畫 frontispiece 風格 ／ (4) **Wenceslaus Hollar** 的 heraldic plates — 1687 plate-paper 演色 reference |
| (e) | Anti-goals (≥2) | ❌ **米色 / sepia / parchment yellow / 紙色泛黃**（這是現代復刻品的 trope、1687 實際當下是 cool grey-white）／ ❌ **Hogwarts 學院積分 / Genshin 戰力榜 / RPG game UI fantasy-game-screen 美術**（這是 brief 預設陷阱）／ ❌ **Podium top-3 視覺強化 / 王冠 / 獎牌 / star icon / rank icon 徽章**（SaaS gamification 套路、與「scholarly register」對立）／ ❌ **Progress bar / 戰力數值 horizontal bar**（戰力是 decomposable tally + total，非 single-bar visualization）／ ❌ **假 archive No. / 假 catalogue mark 沒有 narrative function**（呼應 [[feedback_no_prestige_dressing]]、所有 archive 編號 Plate XIX / Fol. 287 / Signum A 4 都是真實 17C publication signature 慣例） |
| (f) | Color strategy | **Restrained · 完全 monochrome on cool grey-white plate paper** — UI chrome 100% token-bound（`color/bg` `color/fg` `color/fg-muted` `color/border` `color/bg-alt`）。**`color/accent` 完全略過**（v0.4 sync 把 publisher accent 中性化到灰 #6B6B6B / #B5B5B5、本題的「register 是 17C 銅版印刷單色版面、無彩色 accent」與此完美對齊）。Royal Society 紋章 + IOHN MARTYN printer's mark 走 **AI image swap pipeline**（17C copperplate engraving 在 cool grey-white plate paper、monochrome black ink）替代彩色 accent — 與 daily-017 印章 / daily-018 三色 lithograph 同 pipeline，但 daily-019 image asset 是 monochrome 單色 engraving、非多色。 |
| (g) | Scene sentence (forces dark/light) | **LIGHT · 冷灰白 vellum 紙頁，gallery 冷光下閱讀，鐵膽墨剛印上去的 blue-black 還沒泛棕，午後博物館 archive 室不是夜燈** — 1687 freshly-struck plate 質感、publisher default mode Light → 無需 setExplicitVariableMode override |
| (h) | Register | **editorial-magazine** — series 第三個 editorial-magazine register entry（連同 daily-008 404 Royal Atlas / daily-018 Coxcomb 1858 Royal Commission Plate）。**1687 銅版印刷紀律由 typography + chrome 承載**：Inter 單字族 multi-weight + caps tracking + Roman numerals + Latin marginalia + full-bleed rules — 證明 editorial-magazine register 在「17C scientific publication」次型別也可承載 sans-only 字族而不需要真實 serif（與 daily-018「19C Blue Book」次型別並列、兩種 historical-document 次型別都 sans-only 承載成功）。 |
| (i) | Section list (top→bottom scroll order) | `TitlePlate` (1440×720, Asymmetric Plate — EYEBROW r4 + CREST r2 image-slot flush-left 440×480 + PLATE-TITLE r1 "A REGISTER" + Italic 3-line body + META + RULE-BOT full-bleed) → `Register` (1440×1000, Annotated Body — SECT-EYEBROW r4 + RULE-TOP full-bleed + COL-HEADER 11 cells + LEAD-ROW r1 star at +28pt + 11 body rows with 2-line name/collegium structure + SIDEBAR-LEGEND r3 right-flush 240w with NOTÆ 7-item Latin gloss + closing GRESHAM COLL. + RULE-BOT full-bleed) → `Notations` (1440×480, 3-Column Definition Grid — SECT-EYEBROW + RULE-TOP + DEFINITIONS-GRID r3 (8 def blocks × 3 cols × 3 rows; last slot empty by design) + HAIRLINE-MID + METHOD-DISCLOSURE r1 star paragraph with Hooke signature + RULE-BOT) → `Colophon` (1440×280, Edge-Strip Imprint — RULE-TOP full-bleed + MARK r3 image-slot flush-left 96×96 + PRIVILEGE r4 italic + FOLIO r4 caps tracking + IMPRINT-LINE r1 star 4-line caps tracking flush-right ending at x=1440) |

### Archetype
**Magazine Index**（Structural Archetypes catalog · acquire-info medium-high candidate per archetype-cheatsheet.md L31–32）— 不勉強 reframe。Magazine Index = catalogued grid of dated entries 結構，每列 = 一位 Practitioner、依 rank 排序、行間 hairline divider、區段 hairline + full-bleed rule 分隔、邊欄 marginalia 注釋。**Leaderboard 與 Magazine Index 的天然對齊**：rank 表 = catalogue 條目陣列 / col-header = index dimensions / sidebar = marginalia / colophon = imprint。**避開 Editorial Manuscript 同質性陷阱**（cheatsheet.md L44 "Forcing a non-functional brief into Editorial Manuscript is the most common source of series-wide homogeneity"）— series 已連續用 Editorial Manuscript（008 / 018）+ Functional archetypes（014 / 015 / 016 / 017）；019 走 Magazine Index 是 Structural catalog 內第一次明確 Magazine Index 應用，補入新 archetype 證據。

### Anti-template sanity check（gate 3 silent · PASS）
「1687 Royal Society Member Register + iron-gall blue-black + cool grey-white plate paper + monochrome 銅版印刷 + Magazine Index catalogued grid + Latin marginalia + Roman numerals」會 read like Awwwards SOTD 還是 100 SaaS leaderboard？→ **PASS**：沒有任何 podium top-3 / progress bar / rank icon / badge / trophy / score widget / gamification chrome / Hogwarts 學院色 / RPG 戰力修辭。也沒有米色 sepia 復古 trope。**Magazine Index 在 17C scientific publication 次型別下的具體 instantiation 與 SaaS leaderboard archetype 是反向的（每列是 substantive 條目而非微卡 widget）**。

### Brief lock interview log
- **Pre-skill**：題目 + 方向 + 演色約束在 awwwards-figma skill 載入前已由 user 在普通對話中鎖定（hot path 變體 — 沒有外部 reference 圖檔，但有「1687 皇家學會會員年鑑」+ 「不要米色或紙的演色」這兩個明確 commit）
- **Cold path step 4 restate**：載入 skill 後，把整套 brief 用一個 AskUserQuestion + preview 收尾 confirm（「鎖定，往下走」← user 回應）— 1 個 Q
- **Gate 3 archetype**：silently locked Magazine Index、Editorial Manuscript 同質性 risk 在 notes 中說明、未額外問 user — 0 個 Q
- **Total 3-Q hard cap**：實際只用 1 Q（剩下 2 Q 留給後續 zoning + 收尾決策）

---

## ZoneMap log（gate 4 / §3.1.5 · 4 sections per scroll order · 1440 only）

User opt-out of 375 mobile（「全面跳過 — 只出 1440 單一 breakpoint」確認 turn）— **editorial print plate 邏輯**：1687 Phil Trans 原件本來就是單一版面，拿下來看、不轉手機。Phase D outer wrapper 只生 1 個 1440 wrapper、不做 multi-breakpoint。Phase F responsive.md skipped per CLAUDE.md default scope（no hand-off package）。

4 個 ZoneMap 縱排 stacking 在 x=-1600 reference column：
- ZoneMap-1440-TitlePlate y=0 h=720
- ZoneMap-1440-Register y=820 h=1000
- ZoneMap-1440-Notations y=1920 h=480
- ZoneMap-1440-Colophon y=2500 h=280

All 4 ZoneMaps removed at §3.3 → §3.4 boundary per zone-map.md Procedure step 6 (用 prefix match `ZoneMap-` 一鍵清除).

### ZoneMap-1440-TitlePlate（confirmed v1 · Option B Asymmetric Plate）
- EYEBROW 280×16 r4 / **CREST 440×480 r2 flush-left** / **PLATE-TITLE 744×220 r1 STAR right-anchored** / META 600×16 r4 / RULE-BOT 1440×2 r5 full-bleed
- 4 acceptance criteria PASS：variance 73× ✓ / CREST flush-left edge anchored ✓ / 1 star + r1 spatially relevant ✓ / 5 distinct roles ✓
- **拒絕 Option A Centered Monument**：避免與 Notations 區也用中心對稱會造成「全頁四節都中軸堆疊」rhythm 單調；Asymmetric 起頭 + Asymmetric 收尾（Colophon Option B）形成 editorial bookend

### ZoneMap-1440-Register（confirmed v1 · Option B Annotated Body）
- SECT-EYEBROW 320×16 r4 / RULE-TOP 1344×2 r5 / COL-HEADER 1056×48 r4 / **LEAD-ROW 1056×80 r1 STAR** / TABLE-BODY 1056×660 r2 / **SIDEBAR-LEGEND 240×812 r3 flush-right at x=1200** / RULE-BOT 1344×2 r5
- 4 acceptance criteria PASS：variance 259× ✓ / SIDEBAR flush-right edge anchored ✓ / 1 star r1 + spatially identifiable ✓ / 7 distinct roles ✓
- **拒絕 Option A Star-Row Crown**（full-width table 無 sidebar）：失去 17C scientific publication 的 marginal gloss tradition；Sidebar 提供 cross-reference (v. Pl. XVII / v. Pl. XX) + Latin abbreviation key + closing GRESHAM COLL. 落款 — 真實 1687 編排紀律的物理化

### ZoneMap-1440-Notations（confirmed v1 · Option A 3-Column Definition Grid）
- SECT-EYEBROW 320×16 r4 / RULE-TOP 1440×2 r5 full-bleed / **DEFINITIONS-GRID 1248×216 r3** composite zone (8 def blocks × 3 cols × 3 rows internal) / HAIRLINE-MID 1248×1 r5 / **METHOD-DISCLOSURE 1248×80 r1 STAR** / RULE-BOT 1440×2 r5 full-bleed
- 4 acceptance criteria PASS：variance 216× ✓ / RULE-TOP + RULE-BOT 兩條 full-bleed 邊緣 anchored ✓ / 1 star r1 ✓ / 6 distinct roles ✓
- **拒絕 Option B Key + Methodology Asymmetric**：Notations 區的功能是「解釋欄位 + 方法論揭露」、八欄定義是橫排網格自然形式；非對稱左右會壓縮 def block 的可讀寬度

### ZoneMap-1440-Colophon（confirmed v1 · Option B Edge-Strip Imprint）
- RULE-TOP 1440×2 r5 full-bleed / **MARK 96×96 r3 flush-left x=0** / PRIVILEGE 520×16 r4 mid / FOLIO 200×12 r4 mid / **IMPRINT-LINE 520×80 r1 STAR flush-right ends at x=1440**
- 4 acceptance criteria PASS：variance 17× ✓ / MARK x=0 + IMPRINT x+w=1440 雙邊 anchored ✓ / 1 star r1 + spatially identifiable ✓ / 5 distinct roles ✓
- **拒絕 Option A Centered Imprint**（17C 古典中軸隱識型）：與 Notations 區同為中軸堆疊會讓尾部 rhythm 單調；Edge-Strip 不對稱 bookend TitlePlate 也用 Asymmetric Plate（CREST left / TITLE right）— 整頁從頭至尾不對稱 rhythm 一致

### Cross-section coherence
- **左側 anchor column**：TitlePlate CREST flush-left ↕ Register LEAD-ROW + body rows 全 flush-left at x=96/144 ↕ Notations DEFINITIONS-GRID col-1 + METHOD start x=96 ↕ Colophon MARK x=0 — **「左側 anchor」column 一路貫通**
- **右側 meta column**：TitlePlate META right-aligned ↕ Register SIDEBAR-LEGEND right-flush 240w ↕ Notations 隱無（DEFINITIONS-GRID 全寬橫排）↕ Colophon IMPRINT-LINE flush-right — **「右側 meta」column 在 3/4 sections 貫通**
- **中央版心**：TitlePlate PLATE-TITLE right-anchored ↕ Register COL-HEADER + LEAD-ROW + body 全部 ↕ Notations METHOD-DISCLOSURE r1 STAR + DEFINITIONS-GRID + HAIRLINE-MID ↕ Colophon PRIVILEGE + FOLIO mid — **主節點都在中央版心 + LEAD-ROW + METHOD-DISCLOSURE 是 page-level 雙 protagonist 在中軸**
- **Asymmetric rhythm bookend**：TitlePlate Option B (CREST left / TITLE right) + Colophon Option B (MARK left / IMPRINT right) 一前一後形成「不對稱開場 + 不對稱收尾」對稱 — 中間 Register / Notations 較傳統表格 + 中軸堆疊。**整頁 rhythm 是「不對稱 → 平衡橫排 → 平衡中軸 → 不對稱」**

---

## Compose phase log（§3.2 · 1440 outer wrapper · 7 use_figma calls）

### Phase D Call 1 — Outer wrapper + 4 placeholder sections
- Outer name `Daily 019 — Royal Society Member Register - 1440` VERTICAL auto-layout itemSpacing=0、padding 0、counterAxisSizingMode=FIXED 1440 width、primaryAxisSizingMode=AUTO 自動 hug height
- 4 inner sections `Overlay-TitlePlate` (720h) / `Overlay-Register` (1000h) / `Overlay-Notations` (480h) / `Overlay-Colophon` (280h)
- **Overlay-** 前綴所有 inner sections（per Phase D baseline 1 audit exemption）— 因為 4 個 section 都需要 absolute positioning 編排（左右非對稱、image slot + 多欄表格 + 邊欄 marginalia）、不適合純 auto-layout
- placeholder=true on each section 顯示 shimmer indicator during build
- Outer height auto-resolved to 2480h after all sections placed ✓

### Phase D Call 2 — TitlePlate
- EYEBROW caps tracking 24%（PHILOSOPHICAL TRANSACTIONS · OF THE ROYAL SOCIETY）at text/caption + weight/medium + fg-muted
- **CREST image-slot rect** 440×480 flush-left at (96, 120) bg-alt fill + dashed `color/border` stroke + center caption "[ ARMS · ROYAL · SOCIETY ] / Engraving plate — image swap"（marks intent for AI image swap pipeline per §2.6 deliberate placeholder rule）
- **PLATE-TITLE 3-layer stack**：Line 1 "A REGISTER" text/display + weight/medium + tracking 2% + leading 110% / Line 2-4 italic "Of the most Eminent Practitioners / of the MAGICAL ARTS, with their / Demonstrated Faculties." at text/h2 + Italic + leading 130%
- META "VOL. XVI · PL. XIX · FOL. 287 · LONDINI · MDCLXXXVII" at text/caption + tracking 18% + fg-muted
- RULE-BOT full-bleed 1440×2 bound to `color/fg`（粗 rule、close-out TitlePlate emphasis）
- placeholder=false ✓

### Phase D Call 3a — Register chrome
- SECT-EYEBROW "BOOK I · PRINCIPAL FELLOWS" caps tracking 24%
- RULE-TOP full-bleed 1440×2 bound to `color/fg`
- **COL-HEADER 11 cells** 行：№ (40w right-align) / NAME, ad collegium (296w left) / ELECTED (80w center) / 7× 4-letter abbreviated faculty headers TMUT ATHL DMNS CITN TNRE CRSP DECL (56w each center, tracking 18%) / TOTAL (168w right) — all weight/medium fg-muted
- Hairline under col-header 1056×1 bound to `color/border`
- **SIDEBAR-LEGEND r3 right-flush at x=1200 w=240**：NOTÆ heading + 7 abbreviation entries (lhs italic + rhs caption muted): F.R.S. / Coll. Lond / ad collegium / Tallia / — · — separator / v. Pl. XVII pro Indice Demonstrationum / v. Pl. XX pro Inscriptione Aetherialium / closing "— GRESHAM COLL. —" 落款 at y=880
- RULE-BOT full-bleed 1440×2 bound to `color/fg`

### Phase D Call 3b — LEAD-ROW (Rank I)
- y=160 h=80 row
- № "I" at text/h2 28pt aligned right at column-0 — **typographic elevation 1**
- NAME "Dr. ALDUS SERTORIUS, F.R.S." at text/body + weight/medium + tracking 4% — **typographic elevation 2**
- Collegium "Cantabridge · ad collegium Trinitatis" at text/caption + Italic + leading 130% + fg-muted — 副行於 y=ly+44 separate text node（與 body rows v2 後結構一致）
- ELECTED "MDCLXIV" at text/body + Regular center-aligned
- 7 tally numbers at text/body + weight/medium center-aligned at fixed column x positions (536/600/664/728/792/856/920)
- **TOTAL "45" at text/h2 + weight/bold right-aligned** — **typographic elevation 3**
- Below LEAD-ROW: thicker hairline 1056×1 bound to `color/fg`（非 border）— 強調 rank-I 與後續 body 的階層斷層

### Phase D Call 3c–3e — Body rows II-XII (11 rows)
- **v1 缺陷**：原本 name+collegium 用一個 text node "Name · collegium" + `setRangeFontName` italic 在 separator 之後、`maxWidth: 296` + `textAutoResize='HEIGHT'`，但部分長名字（Mlle HESTER BELLAMONT · Lutet. Paris., Sorbonn.）視覺上溢出進 ELECTED 欄位（textAutoResize 行為與預期不符、text 沒有在 296px 換行）
- **v2 fix call**：mutate 11 個 Row-X-Name 既有 text node — 把 "    ·    " separator 替換為 `\n` 強制換行、italic + fg-muted 重新 apply 到第二行範圍、`textAutoResize='HEIGHT'` 後 `resize(296, t.height)` 確保 width 鎖定 — 結果每 row 變兩行 (Name regular line 1 + collegium italic muted line 2)、與 LEAD-ROW 結構一致
- 12 practitioner data set（period-accurate 命名混合 — Sir / Dr. / Mr. / Mlle / Hon. / Father / Master 17C 歐洲 honorific 多樣性 + Cantabridge / Oxon. / Leyden / Paris / Edinburgh / Cambridge / Prague / Antwerp / Coll. Lond / Padua 八個學術中心 + MDCLXIV-MDCLXXXII 19 年 election span）
- 每 row hairline 1056×1 bound to `color/border`（淡分隔線、非 LEAD-ROW 那條 fg 重 rule）
- 7 tally numbers + TOTAL 11 個 cell 共 11 個 text nodes per row（4 left-block cells + 7 tally cells + 0 (TOTAL is 1 of the 11) = 11 total）
- TOTAL at text/body + weight/medium right-aligned（body rows 的 TOTAL 沒有 LEAD 那麼 elevation、但比其他 cell 略 weight）

### Phase D Call 4 — Notations section
- SECT-EYEBROW "EXPLANATION OF THE COLUMNS"
- RULE-TOP full-bleed
- **DEFINITIONS-GRID** 8 def block × 3 cols × 3 rows (last 3rd col row-3 故意空 — 8 entries 不完整填滿 9 個 grid slot 是真實 17C 編排自由度，避免「9 個 def 為了填滿 grid」造成內容硬撐)
- 每 def block: heading row (Roman + abbreviation, e.g. "I · TRANSMUT" caps tracking + weight/medium) + body italic 1-line gloss at fg-muted
- HAIRLINE-MID 1248×1 bound to `color/border` 中分隔
- **METHOD-DISCLOSURE star paragraph** at text/body + Regular + leading 150% + maxWidth 1248 — Recording Secretary Hooke 簽名 + Gresham Coll. 落款 + 1660-1687 minute 範圍 + "no Vouchsafe of continued Faculty" 法律免責條款 — period-accurate 學會 attestation discipline
- RULE-BOT full-bleed

### Phase D Call 5 — Colophon section
- RULE-TOP full-bleed at y=0 of section
- **MARK 96×96 image-slot rect** flush-left at x=0 y=80 — bg-alt fill + dashed border stroke + caption "[ PRINTER'S MARK ]" italic muted（marks intent for AI image swap pipeline）
- PRIVILEGE "Cum Privilegio Regiæ Majestatis" at text/body + Italic mid-positioned
- FOLIO "Pl. XIX · Fol. 287 · Signum A 4" at text/caption + tracking 16% fg-muted
- **IMPRINT-LINE star** 4-line caps tracking 18% + weight/medium flush-right ending at x=1440 + leading 180%（充足 leading 讓 4 行 stack 不擠）：
  ```
  PRINTED  FOR  THE  SOCIETY
  by  IOHN  MARTYN,  Printer  to  the  Royal  Society
  at  the  Bell,  in  St  Paul's  Church-Yard
  LONDINI    ·    MDCLXXXVII
  ```

---

## Edit Pass log（§3.3 · 10 sweeps + audit.js + ZoneMap cleanup）

### Sweeps verdict（per awwwards-rules.md §5.1–§5.10）
- **5.1 Direct comparison** ✓ — 每 section 都 trace 回 brief locked items（tone / star / motifs / anti-goals）。Star = LEAD-ROW 在視覺上由 typography 承載 elevation、無 podium / badge / score chrome（anti-goals 全列守住）。
- **5.2 AI-slop sweep** ✓ — 整頁讀起來是 1687 Phil Trans 印刷頁、不是 SaaS leaderboard。無 gradient text / glow / glassmorphic / 3-card grid / reflex blue or orange / bouncy curves / "Click here" CTA。Inter 字族但用 caps tracking + Roman numerals + Latin marginalia 強紀律。
- **5.3 Squint test** ✓ — Squint 後最顯著的 typographic mass：(1) TitlePlate "A REGISTER" display + (2) Register LEAD-ROW + TOTAL "45" + (3) Notations METHOD-DISCLOSURE paragraph mass + (4) Colophon IMPRINT-LINE 4-line block。Page-level star = Register 區整體（LEAD-ROW 是 Register 內 local star）— 競爭可接受、editorial 多重 protagonist 是 expected。
- **5.4 State and edge coverage** N/A — 純 editorial print plate、無 interactive primitives（Button/Input/Link 一個都沒有）。**Anti-pill register 紀律觸發 baseline 3 exemption**（per Phase D baseline 3 added note 2026-05-15: text 節點不在 named primitive instance scope）。Image slots (CREST + MARK) 是 deliberate placeholders 含 dimension caption + intent annotation — 不是 empty-state defects（per §5.4 exception note）。
- **5.5 Fact-uniqueness sweep** ✓ — 重複事實 audit：MDCLXXXVII 出現於 TitlePlate META / Notations Method date range / Colophon IMPRINT（3 處），但各承載不同上下文（出版年 / 編 minute 範圍上限 / 印刷年）；Pl. XIX 出現於 META + Colophon Folio（標 plate 編號 + colophon folio mark）；ROYAL SOCIETY 出現於 TitlePlate Eyebrow + Colophon IMPRINT（institutional identifier）；Gresham Coll. 出現於 Register Sidebar closing + Notations Method signature（學會地址 + 簽名 date 標）。**全部 deliberate**：1687 publication convention 要求 title block / colophon / signature 各自 carry institutional + date markers。**No wallpaper duplications**。
- **5.6 Heuristic gut-check (Nielsen)** N/A — 純 editorial 文件、no interaction heuristics 適用。
- **5.7 Severity tagging** — 無 P0 / P1。P2: 部分 body row 的 name+collegium 視覺溢出進 ELECTED 欄（v1 缺陷）已於 Edit Pass fix call 修正為兩行結構 ✓。P3: TitlePlate "A REGISTER" 與 Register LEAD-ROW 雙 protagonist（editorial multi-protagonist accepted、non-blocking）。
- **5.8 Polish details** ✓ — Pixel grid 96/144/152/448 etc 全在 8pt 倍數；無 widows/orphans on display；color 全 token-bound；無 mixed icon style（無 icon）；copy capitalization 一致（caps + Title Case 各得其分）；Roman numerals 全頁紀律。
- **5.9 Don't perfect one corner** ✓ — 4 sections polish level 一致。
- **5.10 Accessibility** ✓ — `color/fg` (#0A0A0A) on `color/bg` (#FFFFFF) 對比 >20:1（遠超 AA 4.5:1）；無 focus-visible 需求（無 interactive）；無 motion 需 reduced-motion fallback。

### audit.js sweep（scoped to Daily 019 wrapper subtree）
- tokenDrift 0 ✓
- codegenIssues 0 ✓（Overlay- 前綴 4 個 sections 全部正確 exempt no-auto-layout check）
- missingStates 0 ✓（無 Button/Input/Link primitives）

### ZoneMap cleanup（§3.3 → §3.4 boundary, after AskUserQuestion confirm）
- 4 個 ZoneMap-1440-* frame 一次性刪除 via prefix match `ZoneMap-`
- 無 leftover Zone-*-bg sublayers in compose subtree
- File 從 ZoneMap reference column + compose 兩條軌 → 只剩 compose 軌

---

## Source data note

12 practitioner 是 **period-accurate fiction**（虛構但符合 17C 歐洲學會會員命名 + 學術中心分佈 + election year sequencing convention）：
- **Honorific 多樣性**：Sir / Dr. / Mr. / Mlle / Hon. / Father / Master — 17C 歐洲學會接受 nobility / academic / clerical / lay 各種 honorific
- **學術中心**：Cantabridge / Oxon. / Leyden / Paris (Sorbonn.) / Edinburgh / Cambridge / Oxon. (Wadham) / Praha (Acad. Carol.) / Antwerp / Coll. Lond (Greshamiæ) / Edin. (Coll. Reg.) / Padua (Acad. Patavin.)
- **Election year**：MDCLXIV 至 MDCLXXXII（1664–1682）19 年 span，rank order 與 election year 不完全相關 — 真實學會年鑑 rank 是 demonstrated faculties 加總而非 seniority
- **Faculty tally**：7 個 column 是 **period-accurate fiction**，但符合 1687 Royal Society 真實有過的 attestation type（experimental demonstrations / citations / fellowship years / public lectures / corresponding letters / written declarations）

**Daily UI piece scope**：accuracy 到「視覺上正確 + 學術上接近 1687 Royal Society 實際 minute book 編排紀律」即可；要 publication-grade 真實名冊查 Robert Hooke / Henry Oldenburg 在 1687 的 Royal Society Council minutes 原稿（Royal Society Library, Carlton House Terrace）。

---

## Phase G — AI image swap（pending external generation）

2 個 placeholder rect 待 swap：
- CREST (Crest-Image-Slot 在 Overlay-TitlePlate 內，440×480 slot)
- MARK (Mark-Image-Slot 在 Overlay-Colophon 內，96×96 slot)

詳細 prompt + style spec + 替換步驟見 `ai-image-prompts.md`。承接 daily-017 印章 / daily-018 三色 lithograph image swap pipeline；本題 image asset 是 **monochrome 銅版畫**（不是多色），與 1687 publication 單色印刷紀律一致。

Asset generation 由 user 外部執行（無 image-gen tool integrated 到此 session）。生成後保存於 `daily-019/assets/crest.png` 與 `daily-019/assets/mark.png`，再由 Figma MCP `upload_assets` 工具直接 swap fill + 自動 BlobStore commit + 自動 set IMAGE fill on target nodeId。
