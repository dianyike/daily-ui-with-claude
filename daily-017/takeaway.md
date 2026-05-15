# Daily 017 · Mechanism Card

> 把 Email Receipt 從「Stripe / Shopify / Square 的 hero brand logo + line item grid + 大字 total + dual CTA」的 SaaS receipt 預設重寫成「1881 光緒柒年八月廿七日 河北滄州 會友鏢局 押運江南蘇繡 800 匹至山西大同 鏢字第〇〇五七號 主家收押副聯」。**Receipt 不是 transaction confirmation card、是 5-seal evidence chain 構成的法律效力鏈紙本文書** — 鏢局印起首權威 + 關卡通行印路徑驗證 + 主家收押印交付確認 + 鏢頭押字個人擔保 + footer 押腳 closing bookend，5 枚朱印分布在 RTL 動線的 5 個 functional positions、彼此構成可考證的 receipt 完整性。

## archetype
**Receipt**（Functional Archetype）— 鏢單 IS receipt 的天然 archetype。託運貨品 = line items / 保價銀兩 = total / 起終點 = shipping origin+destination / 4+1 朱印 = payment confirmation authority chain。**無需勉強 reframe**（不像 014 把 SaaS countdown 反向打成 cinematic-poster monument 那種大跨度），鏢單與 Email Receipt 在 receipt 三軸（item / amount / confirmation）天然對齊。

## register
**atmospheric-craft** — 跟 daily-013 deep-space Voyager（interplanetary 23.81 LH）/ daily-016 deep-sea Trieste（8,470m oceanic depth）同 register，但**跨入第三 sub-lane: pre-industrial / 東亞 / 紙本 cultural-artifact**。**series 第一個漢字主視覺 entry**（前 16 entries 全 Latin-dominant，含 daily-009 1986 Tokyo broadcast 也是 IBM Plex Mono + VT323 西式編排）— 證明 atmospheric-craft register × scale × cultural-medium 三維 orthogonal。

## purpose_triad
- **intent**: accomplish-task（功能性 Daily UI category brief — Email Receipt 介面），路由到 Functional Archetypes catalog · Receipt
- **success**: 一眼讀出「這張不是 Stripe receipt 而是 1881 鏢局押運憑單副聯」+「4 枚朱印 + 押腳 = 5-seal evidence chain 構成完整法律效力」
- **density**: medium-high（5 vertical CJK ledger cols + 4 朱印 spread + CalcLedger 5 sub-cols + Ma Shan Zheng signature + EmailMeta + LedgerFooter；每 zone restraint 紀律）

## palette_recipe
- **strategy**：Restrained · 三色（warm xuan paper + warm carbon ink + earthen vermillion）+ 1 subtle warm grid hairline
- **bg**：`scene/xuan-paper-aged` Light = #D5C6AC（三輪迭代加深從 #ECE2CC → #E3D5BE → #D5C6AC）— 米黃宣紙 fresh-pressed 質感、避開 Instagram 出土文物 filter
- **fg**：`scene/ink-graphite` Light = #221A12 — 暖碳墨（warmer than pure black per 19 世紀松煙墨色相）
- **accent**：`scene/vermillion-cinnabar` Light = #B5392A — 朱砂 mineral red 略偏橙、避開現代 fire-engine 鮮紅
- **border-grid**：`scene/border-grid` Light = #A8947A — 淡墨格線、5 cols 之間 ledger 格線 + section dividers
- **publisher tokens 零使用 of `color/accent`**：v0.4 sync 把 publisher accent 中性化到 #6B6B6B 灰，本題完全略過、accent 完全由 `scene/vermillion-cinnabar` 5 處 functional spread 承載
- **機制差異 vs 016 conditional event broadcast**：
  - 011 dot @ NOW / 013 Solaris glow @ in-flight / 014 Cobalt dot @ NOW hairline — 「永恆鎖某座標」(accent 一直在)
  - 015 amber lamp glow @ ON state — **conditional state-driven binary toggle**
  - 016 klaxon-red @ critical alert state — **conditional cross-element event broadcast** (5 處同步點燃)
  - **017 vermillion @ 5 functional spread positions** — **functional-multiplexed evidence chain**（5 處 accent 不是 alert event 同步、是 RTL 動線中的 functional 位置分布；每處 accent = 一個 legal-functional 角色）
  - **Accent 機制六題演化軌跡**：裝飾 → 永恆座標 → 永恆座標 → 永恆座標 → state-binary → event-broadcast → **functional-multiplexed evidence chain**

## type_pair
**3-voice CJK editorial system**（series 第一個 CJK-dominant type pair）。
- **印刷權威 voice 1**：Noto Serif TC Bold (text/h2 28px) — body 5 vertical cols + 標題 / Noto Serif TC Medium (text/caption 12px) — eyebrow / metadata / counterfoil
- **手寫帳房 voice 2**：Ma Shan Zheng Regular (26px) — SignatureColumn "押運鏢頭李冠銘押"（handwritten contrast vs 印刷權威，類似真實鏢局帳房先生親筆簽押 vs 印刷正文的對比）
- **篆書朱印 voice 3**：ZCOOL XiaoWei Regular (30-44px) — 4 朱印內部刻字 + footer ChopFrame（接近 篆書 印章 carving 風）— **雖然 user manual swap real ink stamp PNGs 後此 voice 改由 image asset 承載**，但 voice 角色一致：朱印 carving 視覺 chrome 跟 body 印刷 + signature 手寫 三聲線分明
- **Tracking 紀律**：8% on EmailMeta brand chrome / 6% on EscortEyebrow / 4% on Subject 主標 + LedgerFooter contact / 0% on body 5 cols（CJK chars 每字 own line via `\n`、letterSpacing 不適用）/ 0% on signature column
- **跟 daily-007 Account Ledger 對比**：007 是西式 Inter dot-leader 雙欄記帳本（horizontal LTR label→value）；017 是 vertical brush CJK columns RTL with column rules — **同樣是 receipt-adjacent ledger 機制，但 cultural-medium 反向、type system 完全不同**
- **跟 daily-016 Engineering preset 對比**：016 是 Inter + IBM Plex Mono 雙字族 atmospheric-craft；017 是 Noto Serif TC + Ma Shan Zheng + ZCOOL XiaoWei 三 CJK 字族 atmospheric-craft — **register 同、cultural-medium 反向**

## motifs

1. **5-seal evidence chain spread cluster across RTL flow** — 4 朱印 + 1 footer chop 不是物理 packed cluster、是「分布的功能完整性」：SealA 會友鏢局印 (★ rank 1) TOP-RIGHT 起首權威 + SealC 平定關記 MID-RIGHT 路徑通行 + SealB 林同甫收 LOWER-LEFT-INTERIOR 主家收押 + SealD 押 LOWER-FAR-LEFT **圓形** 鏢頭個人押字 + ChopFrame 會友 footer-RIGHT closing bookend。每枚朱印有 RTL 動線中的 functional position（起首 → 路徑 → 收受 → 個人擔保 → 收尾），構成可考證的 receipt 法律效力鏈。**Star 不是視覺 packed cluster、是「機制 cluster · 視覺 spread」的 functional spread cluster**。

2. **方圓 chop 對偶 = 機構印 vs 個人押字** — 4 機構朱印（鏢局 / 關卡 / 主家 / 押腳）皆方形 + 1 鏢頭個人押字圓形（cornerRadius 40 = 80×80 perfect circle）。**真實清末印章規矩**：方形章 = 機構認證 / 圓形章 = 個人 push 押。daily-017 把這個物理 chop shape 對偶 directly mapped 到 visual hierarchy — **圓 chop 在視覺上跳出 4 方 chop 的 grid，star 第二層 reinforcement**。

3. **5 vertical CJK columns RTL with column rules = 真實鏢單 ledger paper grid** — 5 cols Noto Serif TC Bold 28pt char-per-line（每 col 5-8 chars，代表一個 line item）+ 4 vertical 1px column rules between cols (scene/border-grid opacity 0.5)。RTL 順序：Col1 (rightmost) 鏢字第〇〇五七號 (header) / Col2 蘇繡八百匹整 (cargo) / Col3 河北滄州起運 (origin) / Col4 山西大同收訖 (destination) / Col5 (leftmost) 計銀貳仟玖拾兩 (total)。**Column rules 不是裝飾、是真實鏢單帳本紙的 ledger grid**。

4. **3-voice CJK editorial system 取代單一 sans-serif SaaS receipt** — 印刷權威 (Noto Serif TC) + 手寫帳房 (Ma Shan Zheng) + 篆書朱印 (ZCOOL XiaoWei → user-supplied real ink stamp images) 三聲線分明：印刷做 ledger body 與 metadata、手寫做 signature 親筆擔保、朱印做 legal authority carving。**反 Stripe receipt 全頁 Inter 單聲調**。

5. **CalcLedger 5 sub-cols RTL itemized 取代 horizontal 表格** — 計開 (header Bold opacity 0.85 rightmost) / 銀貳仟兩 / 火耗叁拾兩 / 保費陸拾兩 (each opacity 0.7) / 合計貳仟玖拾兩 (★ Bold leftmost)。**Itemization 不是 horizontal table rows、是 vertical RTL ledger sub-columns** — 真實清末票號匯票 calc layout 規矩；最終 total 落在最左 = RTL reading 結尾位置 = 視覺 anchor。

6. **真實 ink stamp image swap 取代合成 vector** — 第一個 daily-XXX entry 從合成 vermillion vector + inner stroke + halo + jitter 升級為**真實 ink-on-paper 篆書朱印 PNG asset 直接 image fill**。User manual swap 解決了「合成 vector 無論再多 stroke / shadow / jitter 都做不出真實墨痕質感」的根本問題。**經驗**：對於需要極度真實感的 chrome（手寫 / 印章 / 紙質），合成 vector 有 ceiling、image asset 是唯一突破路徑。

7. **xuan-paper-aged 三輪迭代加深** — #ECE2CC → #E3D5BE → #D5C6AC（每輪深 ~5%）尋找「明顯 aged 但不 Instagram filter」的甜區。最終 #D5C6AC 在白螢幕參照下顯現適度米黃，避開兩個極端：太淺（讀為 white SaaS bg）/ 太深（讀為「老照片濾鏡」+ 失去 fresh receipt freshness）。

8. **RTL discipline as load-bearing layout axis** — Star 位置 / Calc 收束位置 / Signature 落款位置 / 朱印 functional spread 全部 anchor 在 RTL 動線的 functional positions（top-right 起首 / lower-left 收結）。**v1 ZoneMap 全部 LTR 慣性錯排**（SealA 放左上、SignatureColumn 放右下、CalcLedger 放右側）— user flagged，全部砍掉重畫。教訓寫入 [`feedback_chinese_vertical_rtl.md`](memory link) 永久 pin 給未來任何 zh 古典垂直書寫 brief。

9. **EmailMeta hairlines as decorative dividers added at compose phase, not in ZoneMap** — ZoneMap v1 把 hairlines 當 5 zones 之 2，captions 在 100h 薄條互擠不可讀。v2 修正：hairlines 從 ZoneMap 拿掉、compose 階段 emailMeta 作為 VERTICAL auto-layout 的 child rectangles 加上去。**Hairlines 是 decorative divider 非 content zone** — ZoneMap should encode WHERE content lives, not WHERE decoration sits。

## why_it_works

1. **Receipt archetype + atmospheric-craft register × pre-industrial East Asia paper sub-lane = series unprecedented combination**：前 16 entries 全 Latin-dominant；017 是第一個漢字主視覺 + 紙本 cultural-artifact entry。Receipt 三軸（item / amount / confirmation）跟 鏢單 三軸（託運貨品 / 保價銀兩 / 朱印 chain）天然對齊，無需勉強 reframe。

2. **Star 機制升級為「functional-multiplexed evidence chain」**：011/013/014 是「永恆單座標 accent」；015 是「state-binary toggle」；016 是「conditional event broadcast」；**017 是「functional-multiplexed evidence chain」** — 5 枚朱印同時存在但每枚有 RTL 動線中的不同 functional 角色（起首 / 路徑 / 收受 / 個人擔保 / 收尾），accent 不是同步點燃也不是 binary toggle、是「分布的 functional 完整性」。**Accent 機制第六階段演化**。

3. **方圓 chop shape 對偶 = 物理 印章 規矩物理化到 visual hierarchy**：4 機構章方形 + 1 鏢頭押字圓形，圓 chop 在 4 方 chop 的 grid 中跳出 = star anchor 第二層 reinforcement。Shape 不是裝飾選擇、是真實清末 印章 規矩（方 = 機構 / 圓 = 個人）的物理映射。

4. **3-voice CJK editorial system 證明 atmospheric-craft 可承載 CJK type system**：series 之前 atmospheric-craft entries（009 / 013 / 016）全部是 Inter + IBM Plex Mono / Engineering preset；017 證明同 register 可換 Noto Serif TC + Ma Shan Zheng + ZCOOL XiaoWei 三 CJK 字族 — **register × type-system orthogonality**，補入 register-mechanism orthogonality 證據鏈。

5. **真實 image asset swap 跨越合成 vector ceiling**：第一個 daily-XXX entry 使用 user-supplied 真實 ink-on-paper PNG。**經驗載入 catalog**：對於極端真實感 chrome（手寫 / 印章 / 紙質 / 自然紋理），合成 vector + stroke + shadow + jitter 有 ceiling、image asset swap 是唯一突破路徑。未來 daily-XXX entries 涉及 hand-drawn / stamped / textured chrome 應預設考慮 image swap workflow。

6. **RTL discipline as load-bearing axis 寫入 memory，未來不再犯**：v1 ZoneMap 全部 LTR 慣性錯排被 user flagged，砍掉重畫。教訓寫入 [`feedback_chinese_vertical_rtl.md`](memory) — **memory 系統真實減少未來重複錯誤**的證據（feedback memory 第 4 條，除前 3 條外此類「具體 craft 紀律」首次新增）。

7. **5 cols column rules 真實鏢單 grid 取代裝飾 grid**：4 vertical 1px hairlines between body 5 cols 不是 decorative grid、是真實清末鏢單帳本紙的 column rules。每條 hairline 隔開一個 line item（header / cargo / origin / destination / total）— **Grid as functional separator not decoration**。

8. **CalcLedger RTL itemized = 真實票號匯票 calc layout**：5 sub-cols RTL（計開 → 銀 → 火耗 → 保費 → 合計）在 EscortWaybill 左側 column。Total 落最左 = RTL reading 結尾位置 = 視覺最終 anchor。**反 LTR 西式表格 row-by-row stack**。

9. **CJK 數字 + 蘇州碼 / 漢字大寫數字取代 Arabic numerals**：〇〇五七 (0057) / 廿七 (27) / 八月 (8) / 貳仟玖拾兩 (2090) — 全頁無 Arabic numeral。**反 SaaS receipt $ XX.XX 預設**。

10. **Editorial chrome contamination test PASS**：Functional Archetype 必跑檢驗 — 全頁無 EB Garamond italic margin note / 無 Roman numeral I/II/III chapter / 無西式 caps Latin display。Functional Archetype Receipt 不被 Editorial Manuscript chrome 污染。**Functional Archetypes catalog 第 3 次應用**（015 Object Metaphor / 016 Instrument Panel / 017 Receipt — Functional 軸線繼續展開）。

## anti-goals 證據（避開的陷阱）

- ❌ Stripe / Shopify / Square SaaS receipt 預設 → 無 hero brand logo + 無 line item grid + 無大字 total + 無 dual CTA + 全頁漢字 + 朱印 chain
- ❌ 徐克金庸電影海報風（紅金大字 + 飛白書法）→ 無紅金大字 + Noto Serif TC 印刷 + Ma Shan Zheng 業餘手寫 + 無飛白
- ❌ 中國風 stock 元素（龍 / 雲紋 / 寶塔 / 仙鶴 / 錦鯉）→ 零裝飾元素 + 全部 chrome 都有 functional 角色
- ❌ 過度做舊 / Instagram old-timey filter（蟲蛀 + 摺痕 + 過飽和黃）→ xuan paper 三輪 calibrated #D5C6AC 適度 aged + 無蟲蛀貼圖 + 無摺痕
- ❌ 朱印 wallpaper（朱印當裝飾滿頁）→ 4+1 朱印 functional spread + 每枚有 legal-functional 角色
- ❌ 梁山兄弟血盟 cosplay（江湖義氣場景）→ 商業文書 register + 無刀劍 + 無黑社會 vibe
- ❌ Mailchimp / Stripe receipt SaaS chrome → 無 from/to email syntax + Letterhead eyebrow 取代 envelope chrome
- ❌ Apple Wallet 圓角藍卡 → 無圓角 + 無藍 + xuan paper 質感
- ❌ daily-007 Account Ledger 西式 dot-leader 雙欄 → 同樣 receipt-ledger adjacent，但 cultural-medium 反向（007 西式橫排 / 017 東亞 vertical RTL）
- ❌ daily-009 Tokyo broadcast phosphor green CRT → 不同 register（synthwave-CRT vs 紙本 atmospheric-craft）+ 不同年代

## why_not_alternative_archetypes
- **Diagram**（schematic 解構） → 鏢單不是要解剖某個機械結構（如 015 J-38 telegraph key）；Diagram 框不住 receipt 三軸（item / amount / confirmation）
- **Map**（鏢局押運路線地圖）→ Receipt brief 重心在 confirmation evidence，不在 spatial visualization；地圖切走焦點偏移
- **Object Metaphor**（鏢單是個 object，但不是 single physical thing 的擬真）→ 015 是「switch IS J-38」；017 鏢單是 multi-line items + multi-seal、不是單一物理物件
- **Instrument Panel**（016 deep-sea control room）→ 鏢單沒有 instrument readout / dial / alert state；Instrument Panel 框不住 transaction confirmation 機制
- **Timeline**（013 Voyager waveform）→ 鏢單時間性弱（只有押運起止日期、非實時 sequence）；Timeline 框不住 list-item + total + seal-chain 結構
- **Editorial Manuscript** / **Atmospheric Photo-Led**（Structural Archetypes） → 不適用於 accomplish-task functional brief

## figma_url
- **File**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=436-59
- **Daily 017 — 鏢局憑單 - 1440 wrapper**: `436:59` (x=10560, y=1936, 1440×1401)
- **EmailMeta**: `437:54`
- **EscortWaybill**: `439:54`
  - **Overlay-WaybillCanvas**: `439:56`（NONE layout for absolute-positioned artifact zones）
- **LedgerFooter**: `443:54`
- **Scene collection**: `Daily-017-Scene` (`VariableCollectionId:436:54`) · 4 vars · 1 mode (Light)

## Reuse signals — 未來重組這套機制的線索
- **CJK 古典 / 紙本文書介面**（票號匯票 / 鏢單 / 公文 / 牌匾 / 對聯 / 古籍）— 用 RTL discipline + 4-5-zone artifact + functional spread chop chain；CJK type system 3 voices（印刷權威 + 手寫副聲 + 篆書 chrome）
- **Receipt / Invoice / Confirmation 介面** — 反 Stripe / Shopify SaaS 預設、走 paper artifact metaphor + 多 seal evidence chain（每 seal 有 functional 角色而非裝飾）
- **Legal evidence / Contract / Compliance 介面** — chop chain / signature evidence / counterfoil / breadcrumb 5-element legal-functional spread；接續 daily-007 Account Ledger 簽署 ceremony 機制但跨入 CJK cultural medium
- **Atmospheric-craft × CJK / 東亞 cultural medium** — 證明 atmospheric-craft register 可承載 CJK type system（不只 Latin-dominant）；未來可繼續展開 atmospheric-craft × 日式 / 韓式 / 越南書寫
- **真實 image asset swap 工作流**（手寫 / 印章 / 紙質 / 自然紋理） — 對極端真實感 chrome 預設考慮 image swap，合成 vector + stroke + shadow + jitter 有 ceiling
- **方圓 shape 對偶機制**（機構 vs 個人 / formal vs informal / public vs personal） — Shape semantics 物理映射到 visual hierarchy 的證據；未來 brief 涉及 dual-role 角色區分可考慮 shape contrast
- **Functional spread cluster star** — Star 不必是物理 packed cluster；多 element spread across functional positions 也可承載 star（每 element 有不同 functional 角色組成完整性）
- **RTL classical Chinese vertical-text discipline** — Pin 在 [`feedback_chinese_vertical_rtl.md`](memory)，未來 zh 古典垂直書寫必須先把 ZoneMap 從 LTR 慣性 mirror 過來
