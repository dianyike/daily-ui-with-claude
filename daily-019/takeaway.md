# Daily 019 · Mechanism Card

> 把 Leaderboard 從「modern SaaS gamification — podium top-3 / progress bar / rank badge / trophy icon / score widget / Hogwarts 學院積分 / RPG 戰力 bar」的 fantasy-game-screen 預設重寫成「1687 Phil. Trans. Royal Society Plate XIX · Register of the Most Eminent Practitioners of the Magical Arts, with their Demonstrated Faculties」。**Leaderboard 不是 game UI、是 17C 學會年鑑印刷頁**——rank 不是單一戰力數字、是 7 個可量化 Faculty column (TRANSMUT / AETHERIAL / DEMONSTR / CITATIONS / TENURE / CORRESP / DECLAR) 加總 + TOTAL，讀者看得到 rank 拆解；視覺 elevation 完全靠 typography（bigger № + medium-weight NAME + bold display TOTAL）、無 card / background / podium 視覺修辭。

## archetype
**Magazine Index**（Structural Archetype · acquire-info medium-high candidate）— **不走 Editorial Manuscript**，避開 archetype-cheatsheet.md L44 警示「Forcing a non-functional brief into Editorial Manuscript is the most common source of series-wide homogeneity」。series 已有 daily-008 / daily-018 兩個 Editorial Manuscript Structural 應用；daily-019 走 Magazine Index 是 Structural catalog 內**第一次明確 Magazine Index 應用**，補入新 archetype 證據。Magazine Index = catalogued grid of dated entries 結構（每列 = 一位 Practitioner，依 rank 排序，行間 hairline divider，sidebar marginalia）—Leaderboard 與 Magazine Index 的天然對齊。**「magazine」名字是歷史命名、register-agnostic**：17C scientific publication 是 1687 magazine 的 register × Magazine Index 結構應用，與 Linear changelog / Read.cv archive / Apple Mac collection 是 register × Magazine Index 的不同 register 應用並列。

## register
**editorial-magazine** — series 第三個明確 editorial-magazine register entry（連同 daily-008 404 Royal Atlas / daily-018 Coxcomb 1858 Royal Commission Plate）。**17C 銅版印刷紀律由 typography + chrome 承載**：Inter 單字族 multi-weight + caps tracking + Roman numerals 全頁 + Latin marginalia + full-bleed rules — 證明 editorial-magazine register 在「17C scientific publication」次型別下也可承載 sans-only 字族而不需要真實 serif（與 daily-018「19C Blue Book」次型別並列、兩種 historical-document 次型別都 sans-only 承載成功）。**register × historical-period 證據**：editorial-magazine 此 register 在 series 已驗證 1687 / 1858 兩個明確時代次型別，sans-only Inter + 紀律完整 carry 兩者。

## purpose_triad
- **intent**: acquire-info（讀印刷頁、非控件操作）；路由到 Structural Archetypes catalog · Magazine Index
- **success**: 一眼讀出「這不是 SaaS gamification leaderboard / 不是 Hogwarts 學院積分 / 不是 RPG 戰力 bar 的 fantasy-game-screen 美術、是 1687 Phil. Trans. Royal Society 的當代閱讀」+「rank 不是單一戰力數字、是 7 個可量化 Faculty column 加總、讀者看得到 rank 的拆解」+「演色完全無米色 sepia 紙色泛黃 — iron-gall pre-oxidation blue-black on cool grey-white plate paper」
- **density**: medium-high（4 sections 縱排 2480h；Register 12 rows × 11 columns + 右側 7 條 Latin marginalia；Notations 8 def block in 3-col grid + 一段長 Method-Disclosure paragraph；Colophon 5 zones edge-strip imprint）

## palette_recipe
- **strategy**：Restrained · **完全 monochrome on cool grey-white plate paper**
- **UI chrome 100% token-bound**：
  - `color/bg` Light = #FFFFFF（純白 plate paper substrate）
  - `color/fg` Light = #0A0A0A（near-black，自然 mimic iron-gall pre-oxidation blue-black）
  - `color/fg-muted` Light = #737373（45% gray，eyebrow / metadata / sidebar gloss / italic body）
  - `color/border` Light = #E5E5E5（hairlines / row dividers / 1px rules）
  - `color/bg-alt` Light = #F5F5F5（image-slot 預 swap 階段 fill；swap 後 image fill 覆蓋）
- **`color/accent` 完全略過**：v0.4 sync 把 publisher accent 中性化到灰 (#6B6B6B / #B5B5B5)；本題的「register 是 17C 銅版印刷單色版面、無彩色 accent」與此**完美對齊**。**第一個 entry 把 v0.4 accent 中性化解讀為 design strength 而非 bug**——unlock 17C / black-and-white-only 印刷史 register 的可能性。
- **subject-matter image asset 是 monochrome 銅版畫**（NOT 多色像 daily-018 三色 lithograph）：Royal Society arms + IOHN MARTYN bell mark 兩張 ChatGPT-generated 17C copperplate engraving，pure black ink + 細密 cross-hatching shading + plate-mark indentation + 文字 ribbon "NULLIUS IN VERBA" + "I M"。**Subject-matter image ≠ Subject-matter ink**：017 是真實印章圖 / 018 是三色 lithograph chart / 019 是 monochrome 銅版畫紋章 — 三種 image asset 型別補入 catalog。

- **機制差異 vs 前序 entries 的 color/image 機制**：
  - 011 dot @ NOW / 013 Solaris glow @ in-flight / 014 Cobalt dot @ NOW — 永恆單座標
  - 015 amber lamp glow — state-binary toggle
  - 016 klaxon-red @ critical alert — conditional event broadcast
  - 017 vermillion @ 5 functional spread positions — functional-multiplexed evidence chain
  - 018 三色 ink @ subject-matter color encoding — data-channel encoding
  - **019 完全無彩色 accent · monochrome image asset only** — **register-discipline absence**
  - **Accent / color 機制第八階段演化**：裝飾 → 永恆單座標 → 永恆單座標 → 永恆單座標 → state-binary → event-broadcast → functional-multiplexed evidence chain → data-channel encoding → **register-discipline absence**（color 在 register 紀律下完全缺席、image asset 是 monochrome 銅版畫單色，視覺權威由 typography + chrome + full-bleed rules + Latin marginalia 承載而非顏色）

## type_pair
**Sans-only editorial system**（Latin = Inter, publisher resolved）。
- **印刷權威 voice 1**：Inter Medium (text/display 88px) — TitlePlate "A REGISTER"（caps tracking 2% + leading 110% + weight/medium 不是 Bold，與 daily-018 88px Bold 反差，因 17C plate display 不需要 Bodoni-esque heavy weight）
- **印刷主聲 voice 2**：Inter Italic (text/h2 28pt) — TitlePlate 3-line subtitle "Of the most Eminent Practitioners..."（period-accurate italic 副標傳統）
- **副標 / 內文 voice 3**：Inter Regular (text/body 16px) — METHOD-DISCLOSURE paragraph at leading 150% + maxWidth 1248；ELECTED year cell + body row TOTAL right-aligned at weight/medium
- **eyebrow / metadata voice 4**：Inter Medium (text/caption 12px) — 全頁 eyebrow caps tracking 18–24%（PHILOSOPHICAL TRANSACTIONS / BOOK I · PRINCIPAL FELLOWS / EXPLANATION OF THE COLUMNS / META line / IMPRINT 4-line block / col header 11 cells / FOLIO / sidebar abbreviation lhs）
- **table 內文 voice 5**：Inter Caption Regular + Italic 雙 line per row（Name line 1 regular + collegium line 2 italic muted）
- **LEAD-ROW elevation voice**：Inter h2 28pt for № "I" + body 16px weight/medium for NAME + body 16px Italic muted for collegium + body 16px weight/medium for 7 tally cells + **h2 28pt Bold for TOTAL "45"** — **完全靠 typography 承載 star elevation**，不用 card / background / podium

- **Tracking 紀律**：
  - tracking 2% on display 88px "A REGISTER"（slight loosen 給氣氛）
  - tracking 4% on LEAD-ROW NAME body 16px
  - tracking 16–24% on caption eyebrows 12px（caps tracking 越大、editorial weight 越強）
  - tracking 18% on body row col-header caps + ELECTED + IMPRINT 4-line caps
- **lineHeight 紀律**：
  - 100% on Lead-Total "45" h2（單字大字無需 leading）
  - 110% on display "A REGISTER" + Lead-Num "I" + body row 內文 + eyebrows
  - 120% on body row text/body 配 max-width
  - 130% on italic body title + collegium italic 副行 + sidebar abbreviation
  - 150% on METHOD-DISCLOSURE paragraph + IMPRINT 4-line + sidebar long-form
  - 180% on Colophon IMPRINT-LINE 4-line caps block（充足 leading 撐 imprint chrome 結束 chord）

- **Roman numerals 全頁紀律**：LEAD-ROW № "I"、body rows II–XII、ELECTED 12 個 year (MDCLXIV / MDCLXV / MDCLXVI / MDCLXVII / MDCLXX / MDCLXXII / MDCLXXIII / MDCLXXVI / MDCLXXIX / MDCLXXXII)、Notations def heading I–VIII、Method date range MDCLX–MDCLXXXVII + signature date "Twentieth Day of November MDCLXXXVII"、TitlePlate META "Vol. XVI · Pl. XIX · Fol. 287"、Colophon FOLIO "Pl. XIX · Fol. 287 · Signum A 4"、IMPRINT "MDCLXXXVII"。Arabic numerals 只在 Faculty tally (8/7/6/5/4 個 single digit) + TOTAL (45/42/40/40/38/36/35/34/33/32/30/29) — **Roman = 編號 / Arabic = 數據** 的物理區分，與 daily-018 19C Blue Book convention 紀律一致 + 跨越世代延伸到 17C convention。

- **跟 daily-018 字款使用對比**：018 大字 display "Diagram of the Causes..." 用 Inter Bold 88px + tracking -2px（Bodoni-esque heavy）；019 大字 display "A REGISTER" 用 Inter Medium 88px + tracking +2%（不用 Bold、輕鬆延伸 caps）— 因 17C plate display 不需要 19C Blue Book 的 heavy serif weight；**editorial-magazine register 內部 historical-period 次型別差異**反映在 display weight discipline 上。

## motifs

1. **Decomposable Faculties Tally as rank-decomposition mechanism** — Rank 不是單一戰力數字、是 7 個 quantifiable Faculty column 加總 + TOTAL：TRANSMUT (transmutations witnessed by ≥2 Fellows certified by signature) / AETHERIAL (calculations submitted to Astronomer Royal) / DEMONSTR (public demonstrations in Gresham Hall) / CITATIONS (citations lodged with Stationers' Company) / TENURE (years of fellowship) / CORRESP (preserved letters in Register-Book) / DECLAR (sworn declarations before Recording Secretary)。每 column 0–8 整數量綱、TOTAL 是 7 column sum 上限 56 reduced to 0–10 scale（per Notations METHOD-DISCLOSURE 描述）。**讀者可以看見 rank 的拆解**：rank-I Sertorius 的 45 不是黑箱數字、是 8+8+7+6+6+5+5；rank-XII Brindale 的 29 是 4+4+5+4+4+4+4。這比 progress bar / 戰力 number 高一階的資訊密度，**核心 mechanism**：把單一戰力數字 reframe 為「可量化 + 可驗證 + 可拆解」的 attestation tally。**這個 mechanism 是 1687 Royal Society 真實 minute book attestation discipline 的物理化**——學會接受會員的方式就是「demonstrated + witnessed + certified + cited + declared」7 條 evidence axes，把 rank 從 black-box 量到 audit-trail。

2. **Anti-podium star elevation via typography only** — Page protagonist = Register 區整體；Register 內 local star = LEAD-ROW (Dr. ALDUS SERTORIUS, F.R.S.)。視覺 elevation **完全靠 typography 承載**：
    - № "I" at text/h2 28pt（其他 body rows 用 text/caption 12pt）— 2.33× 字級
    - NAME at text/body 16pt + weight/medium（其他 body rows 用 text/caption 12pt + weight/regular）— 1.33× 字級 + 1 weight step
    - 7 tally cells at text/body 16pt + weight/medium（body rows 用 caption 12pt + regular）— 1.33× 字級 + 1 weight step
    - **TOTAL "45" at text/h2 28pt + weight/bold + 1.7× line-height**（body rows TOTAL 用 body 16pt + medium）— 2.33× 字級 + 2 weight step
    - Below LEAD-ROW: thicker hairline 1056×1 bound to `color/fg`（非 `color/border` 淡灰）— 強調 rank-I 與後續 body 的階層斷層
    **不用 card / background highlight / podium / trophy / medal / crown / badge / star icon / rank icon — 任何視覺修辭** — 這些都是 SaaS gamification 套路（anti-goals 全列）。**Star elevation by typography only is the editorial alternative to SaaS card-elevation**——core mechanism 紀律。

3. **Iron-gall blue-black on cool grey-white plate paper (NOT米色 sepia parchment yellow)** — 拒絕現代復刻品的「舊文件 = 米色紙」trope。1687 freshly-struck plate 當下實際物件是 cool grey-white plate paper（vellum stock 在未泛黃前是冷灰白）+ iron-gall ink 在未氧化前是 blue-black（不是棕褐色）。DS palette `color/bg` (#FFFFFF) + `color/fg` (#0A0A0A) 剛好近似這個演色（純白 + near-black）。**Anti-trope discipline**：「老文件 = 牛皮紙黃 + sepia 棕」是 1900–2000 復刻品工業套路、不是 1687 當下真實質感；user 的 brief 「不要米色或紙的演色」恰好對齊歷史正確性。**未來 brief 涉及歷史文獻復刻 entries**（中世紀 manuscript / Renaissance treatise / 18C scientific paper / 19C cabinet card）**預設考慮「拒絕米色 sepia 復刻 trope、走文獻當下真實演色」**。

4. **Phil. Trans. Royal Society chrome as page skeleton** — VOLUME XVI · PLATE XIX · FOLIO 287 · LONDINI MDCLXXXVII imprint / PHILOSOPHICAL TRANSACTIONS OF THE ROYAL SOCIETY eyebrow / BOOK I · PRINCIPAL FELLOWS 區段頭 / EXPLANATION OF THE COLUMNS 區段頭 / NOTÆ 邊欄 / Cum Privilegio Regiæ Majestatis / PRINTED FOR THE SOCIETY by IOHN MARTYN, Printer to the Royal Society, at the Bell, in St Paul's Church-Yard, LONDINI · MDCLXXXVII — **編輯 chrome 全部來自真實 1687 Royal Society publication imprint discipline**，非任何 SaaS / dashboard / 現代 editorial 借鑑。**Anti-template sanity check 由 chrome 來自真實歷史 reference document 自動滿足**（與 daily-018 Blue Book chrome 同 mechanism、不同 historical-period 次型別）。

5. **Sidebar Latin gloss as authentic marginalia** — NOTÆ 7 條 abbreviation key + cross-refs：F.R.S. / Coll. Lond / ad collegium / Tallia / —·— separator / v. Pl. XVII pro Indice Demonstrationum / v. Pl. XX pro Inscriptione Aetherialium / closing "— GRESHAM COLL. —" 落款。**不是裝飾性 caption、是真實 17C scientific publication 的 marginal-gloss tradition**——讀者在閱讀主表時，邊欄提供 abbreviation 解碼 + 跨 plate cross-reference + 學會地址落款。**Editorial Manuscript / Magazine Index 在 17C scientific register 下的 marginalia 紀律**：sidebar 是學術閱讀的延伸 affordance、不是 chrome filler。

6. **Cum Privilegio + Recording Secretary signature as period-accurate authority assertion** — Notations 區的 METHOD-DISCLOSURE paragraph 不是「verified by..」現代 badge、是 17C Royal Society 真實 attestation discipline：「Tallies herein presented were compiled from the Minutes of the Society's Meetings between the years MDCLX and MDCLXXXVII inclusive, transcribed and verified by the Recording Secretary, Mr. Robert Hooke. The Society maketh no Vouchsafe of any Practitioner's continued Faculty beyond the date of last entry. — Signed at Gresham Coll. this Twentieth Day of November, MDCLXXXVII.」**包含 4 個 period-accurate authority element**：(1) data source (Minutes) + (2) date range (MDCLX-MDCLXXXVII) + (3) named signatory (Robert Hooke as Recording Secretary, 真實歷史人物) + (4) liability clause ("no Vouchsafe of continued Faculty")。**Cum Privilegio Regiæ Majestatis** 在 Colophon 區是 17C 王室印刷特權聲明、與當代「© All rights reserved」對應的 17C 法律 chrome。**Period-accurate authority assertion 是 editorial 取代 SaaS gamification badge 的 mechanism**。

7. **Roman numerals = 編號 vs Arabic = 數據的物理區分** — Roman numerals 全頁編號紀律（rank № I–XII + ELECTED 12 個 year MDCLXIV–MDCLXXXII + def heading I–VIII + VOL. XVI · PL. XIX · FOL. 287 + LONDINI MDCLXXXVII + Notations Method "Twentieth Day of November MDCLXXXVII"）；Arabic numerals 僅在 Faculty tally + TOTAL（單位是「demonstrated facts count」、不是「身分編號」）。**Roman = 編號身分 / Arabic = 數據事實** 的物理分軌延續 daily-018 19C Blue Book convention（MDCCCLVIII / VOLUME I / PLATE I 用 Roman；1500 / 107 / 1144 用 Arabic），證明此分軌橫跨 17C–19C editorial-magazine register 多個 historical-period 次型別。

8. **Sans-only Inter under typographic discipline carries 17C plate authority** — minimal-ds 字族池無 serif、但 1687 publication 用的是 caslon / garamond / van dyck old-style serif。**解法**：Inter 單字族 + multi-weight + 字距 tracking 紀律 + caps + Roman numerals + Latin marginalia + full-bleed rules — 證明 editorial-magazine register × 1687 plate 次型別在 sans-only 字族下 carry authentic 17C publication chrome 的可行性。**Trade-off 接受**：略失 caslon 純度、但獲得 minimal-ds 紀律一致性 + 全 register × historical-period 統一 sans 證據。**未來 brief 涉及 17C–19C editorial historical-period 次型別**（中世紀 manuscript / Renaissance treatise / Encyclopédie / Diderot / Encyclopédie / 18C scientific paper / 19C cabinet card / 19C Blue Book），sans-only + 字距 + caps + Roman numerals 紀律 預設可行；真實 serif 是錦上添花、非必需。

9. **Monochrome copperplate engraving image swap as register completer** — 2 個 image asset (Royal Society arms + IOHN MARTYN bell mark) 透過 Figma MCP `upload_assets` 從 ChatGPT image gen 直接 carry 17C copperplate engraving 質感：plate-mark indentation + cross-hatched shading + fleur-de-lis yoke + NULLIUS IN VERBA ribbon + lion / unicorn supporters + acanthus mantling + I M initial ribbon。**Vector 合成的 ceiling 是 70%、image asset 是把它推到 95% 的唯一路徑**（與 daily-017 印章 / daily-018 三色 lithograph 同 pipeline）。**019 image asset 是 monochrome 單色銅版畫、非多色 lithograph**——補入 image asset 型別 catalog：017 真實印章圖 / 018 三色 lithograph chart / 019 monochrome 銅版畫紋章。**Pipeline 一致**：write prompts 在 ai-image-prompts.md / generate externally via ChatGPT image gen / save in assets/ / upload via Figma MCP upload_assets (single-use submit URL with multipart POST) / auto BlobStore commit + auto IMAGE fill on target nodeId / cleanup placeholder strokes + caption text overlays / re-export final screenshots。

10. **Magazine Index in 17C scientific register vs daily-018 Editorial Manuscript in 19C Blue Book register** — **同 register (editorial-magazine) 但不同 archetype + 不同 historical-period 次型別**：daily-018 = Editorial Manuscript × 19C Blue Book / daily-019 = Magazine Index × 17C Phil. Trans. **Series 補入 register × archetype × historical-period 三維 orthogonality 證據**：editorial-magazine register 在 series 已驗證 (a) Royal Atlas 404 page (008) / (b) 1858 Blue Book Coxcomb (018) / (c) 1687 Phil. Trans. member register (019) — 三個明確不同的 historical-period × archetype 組合。**未來新 editorial-magazine register entry 應預設嘗試新 archetype × 新 historical-period 組合**（不要重複 008/018/019 任一），維持 series 內部 register × archetype × historical-period 三維 coverage 持續擴張。

## why_it_works

1. **Anti-template trap 預警 + 預設失敗模式具體化**：user 一開始提的「魔法師戰力排行榜」是高風險題材——直接做容易滑成 Hogwarts 學院積分 / Genshin 戰力 / RPG game UI 美術。**解法**：把它綁到「真實歷史文件原型」上（1687 Phil. Trans. Royal Society Member Register），讓 mechanism 是文件層的、不是奇幻美術層的。**Anti-template sanity gate 在 brief 階段就 surfaced**——告訴 user「魔法師世界這個題材本身在這個 project 的 anti-template 框架下是高風險的，要救它得 anchor 到具體真實歷史文件原型」。**Future**：未來 brief 含 fantasy / sci-fi / 流行文化題材時，預設啟動「綁到真實歷史文件原型」discipline、避免題材本身把整個輸出拖向通俗類型範本。

2. **User 演色約束 "no 米色"  完美對齊歷史正確性**：user 直覺說「不要米色或紙的演色」、實際對應「拒絕現代復刻品的米色 trope、走 1687 freshly-struck plate 當下真實演色 (cool grey-white + blue-black)」。**直覺約束 = 歷史正確性 的對齊不是巧合**——「老文件 = 米色」是 100 年的復刻品工業套路、不是文獻當下真實質感；現代設計師對這個套路的反感剛好回歸真實。**Future**：未來 brief 涉及歷史文獻復刻 entries，user 若提類似「不要米色 / 不要 sepia / 不要泛黃」約束，預設視為對齊歷史正確性而非任性偏好。

3. **DS v0.4 accent neutralization 在此 brief 反向成 design strength**：minimal-ds v0.4 把 `color/accent` 中性化為 #6B6B6B Light / #B5B5B5 Dark、原本為了避免「橘紅 SaaS 預設陷阱」。**019 brief 演色約束「monochrome 銅版印刷單色、無彩色 accent」剛好與此完美對齊**——v0.4 中性化在此 entry 變成 design strength：DS 預設不給 accent 顏色，正好 unlock 17C / black-and-white-only 印刷史 register 的可能性。**Future**：未來 brief 涉及單色印刷史 / monochrome editorial 等 register 預設 leverage v0.4 中性 accent；不要為「給 brand identity」而硬塗回 accent 色。

4. **Magazine Index 在 17C register 下的 specific instantiation 與 SaaS leaderboard archetype 反向**：Magazine Index 在 SaaS 預設下會 render 為「卡片陣列 + filter chip + 上下分頁 + 搜尋」；在 17C register 下 render 為「12 列實質 catalogue 條目 + 7 column tally + Latin sidebar + colophon imprint」。**同 archetype、不同 register 結果天差地別**——這就是 register × archetype orthogonality 的具體證據。**Future**：「magazine」這個歷史命名不必 anchor 到 magazine register；structural pattern register-agnostic。當下個 brief 用 Magazine Index 時，預設考慮新的 register × Magazine Index 組合（Linear changelog / Read.cv archive / Apple Mac collection / 中世紀 illuminated index / 18C 礦物學 catalogue / 19C bird-spotting register / 20C film festival programme）。

5. **Anti-podium star elevation via typography only 寫入 catalog**：rank-I LEAD-ROW 完全由 typography 承載 elevation——bigger № + weight/medium NAME + bold display TOTAL + thicker hairline 分隔——**不用 card / background / podium / trophy / badge / star icon / rank icon / crown / medal 任何視覺修辭**。**Editorial discipline 完全替代 SaaS gamification 視覺修辭**。**Future**：未來 brief 涉及 ranking / hierarchy / "top item" elevation discipline 預設 typography-only 路徑、ban 視覺修辭 chrome。Card-elevation 是 SaaS dashboard 路徑、不是 editorial register 路徑。

6. **Period-accurate authority assertion 取代現代 verification badge**：Notations 區 METHOD-DISCLOSURE paragraph 不用「Verified ✓」/ "Audited" / "Trusted partner" 現代 chrome、用 17C Royal Society 真實 attestation discipline：data source + date range + named signatory + liability clause。**Editorial substitute mechanism 比 SaaS badge 高一階的信任 affordance**——讀者讀完知道（1）資料從哪來 + （2）時間範圍 + （3）誰簽的 + （4）信任邊界。**Future**：未來 brief 涉及 trust / verification / authority assertion discipline 預設 period-accurate paragraph 取代 badge / checkmark / icon。

7. **Sans-only Inter 在 17C 字款 deficit 下用 discipline 承載 register**：minimal-ds 字族池無 caslon / garamond / van dyck old-style serif、但 sans-only Inter + 字距 + caps + Roman numerals + Latin marginalia + 字款 weight 紀律 carry 1687 plate authority 的可行性 in this entry confirmed。**這是 series 第三個 editorial-magazine register entry 證明 sans-only 路徑跨多 historical-period 次型別可行**（008 Royal Atlas + 018 19C Blue Book + 019 17C Phil. Trans.）。Type-system 與 register × historical-period 的 orthogonality 證據鏈完整。**Future**：editorial-magazine register × any historical-period 次型別預設 sans-only 路徑 + discipline carry 紀律；真實 serif 是錦上添花、optional library republish。

8. **Subject-matter image asset 三型別補入 catalog**：017 真實印章 PNG（拍攝 + 後製去背） / 018 三色 lithograph chart（AI gen + multiplexed three-ink data encoding） / **019 monochrome 銅版畫紋章**（AI gen + 17C engraving plate-mark + cross-hatching + 細密 shading）。**Subject-matter image asset 由內容 register 決定型別 + 工具路徑**：印章 = 物件攝影 / 三色 chart = 三色 lithograph AI gen / 紋章 + printer's mark = monochrome 銅版畫 AI gen。**Future**：未來 brief 涉及 subject-matter image asset 預設依 register 對應的 historical-image-medium 選擇 image asset 型別。

9. **Roman numerals = 編號 / Arabic = 數據 跨世代 convention 證據**：daily-018 證明此 convention 在 19C Blue Book editorial 有效；daily-019 證明此 convention 在 17C Phil. Trans. 同樣有效。**Editorial historical-period 跨世代 convention coverage 從 1 個 19C 點 → 17C + 19C 兩個證據點，convention 跨度 200 年 (1687-1858)**。**Future**：editorial-magazine register × historical-period 次型別 entries 預設考慮此 convention discipline，現代 SaaS「全 Arabic 一統」是反此 historical convention 的、應該 push back。

10. **CLAUDE.md 預設 "stop at Figma" + 1440 only opt-out + 跳過 hand-off package 是 series-internal series-scope discipline**：user 在過程中 opt-out 375 mobile（「全面跳過 — 只出 1440 單一 breakpoint」）+ 跳過 hand-off package + 跳過全域 archive，**series-internal scope discipline 由 user 在每次 entry 階段確認**。CLAUDE.md 預設「stop at Figma + notes.md + takeaway.md + screenshots/」是 series 整體 default、不是 awwwards-figma skill 預設；skill 預設是 hot-path Phase F 完整 hand-off。**Series-default 取代 skill-default 是合法 scope discipline**，**寫入 catalog**：「Series-level CLAUDE.md 可以 narrow skill-default scope；entry-level user opt-out 進一步 narrow series-default scope。Skill = 工具上限 / Series = 工具下限 / Entry = 實際範圍」三層 scope 紀律。
