# Daily UI 017 — Email Receipt · 會友鏢局押運憑單 · 1881 河北滄州 → 山西大同

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `accomplish-task`（功能性 Daily UI category brief — Email Receipt 介面）。路由 → **Functional Archetypes catalog · Receipt**，從 Stripe / Shopify / Square SaaS receipt 的「hero brand logo + line item grid + total」預設重寫為「1881 光緒柒年八月廿七日 河北滄州 會友鏢局 押運蘇繡 800 匹至山西大同 鏢字第〇〇五七號 主家收押副聯」。
- **Density**: medium-high（5 vertical CJK ledger cols + 4 朱印 functional spread cluster + CalcLedger 5 sub-cols itemized + Ma Shan Zheng handwritten signature + EmailMeta eyebrow + LedgerFooter counterfoil + 1 footer chop bookend，但每 zone 內部 restrained 紀律，非 wallpaper）。
- **Success**: 使用者一眼讀出「這張不是 Stripe receipt 而是 1881 鏢局押運憑單副聯」+「4 枚朱印 + 押腳 = 5-seal evidence chain（鏢局印 起首權威 / 關卡通行 / 主家收押 / 鏢頭押字 / footer 押腳 closing bookend）構成完整法律效力鏈」。

### Commit Before Code（9 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | aged-functional but **not** relic-museum-curated（19 世紀末真實鏢局商業文書、非博物館展品標籤）／ solemn-ledger but **not** 江湖血盟（功能性鏢單帳本、非梁山兄弟義氣 cosplay）／ restrained-calligraphy but **not** 武俠電影海報飛白（克制楷體與篆書、非徐克金庸紅金大字）／ historic-craftsman but **not** 中國風 stock（真實平遙票號 / 滄州鏢局工藝美學、非 Canva 龍鳳雲紋寶塔）／ transaction-evidence but **not** 文物展品（fresh issue 當下 artifact、非出土文物） |
| (b) | One named star | **4 朱印 functional spread cluster + footer 押腳 = 5-seal evidence chain**（SealA 會友鏢局印 起首權威 top-right / SealC 平定關記 路線通行 mid-right / SealB 林同甫收 主家收押 lower-left interior / SealD 押 鏢頭個人 lower-far-left **圓形** / ChopFrame 會友 footer closing bookend right）— star 不是物理 packed cluster 而是「分布的功能完整性」（每枚朱印有 RTL 動線中的 functional position、彼此構成可考證的法律鏈）。**accent 機制第六階段**（011 永恆座標 → 013 glow → 014 dot → 015 state-binary → 016 cross-element broadcast → 017 functional-multiplexed evidence chain）。 |
| (c) | Motifs (2-3) | (1) 朱印 hierarchy 4 + 1 functional spread cluster／(2) 5 vertical brush CJK columns RTL with column rules（真實鏢單 ledger paper 格線）／(3) controlled aged xuan paper（克制 distress、避開 Instagram 出土文物 filter）／(4) Ma Shan Zheng handwritten signature contrast voice（印刷權威 Noto Serif TC 主聲 + 手寫帳房 Ma Shan Zheng 副聲）／(5) 5-zone ledger body — CalcLedger sub-columns RTL itemized（計開 / 銀貳仟兩 / 火耗叁拾兩 / 保費陸拾兩 / 合計貳仟玖拾兩 ★）|
| (d) | Anchor refs (≥2) | (1) 河北滄州 會友鏢局（李冠銘 1845 創立 - 1910 解散、清末最大鏢局之一）／(2) 山西平遙 日昇昌票號匯票格式（1820s-1900s）／(3) 山東 謝家福鏢局（八大鏢局 1871）／(4) reference 圖：劉源清請求招募「保鏢」公文（Ming/Qing 公文 chrome vocabulary anchor — 借 chrome 但不抄 content）|
| (e) | Anti-goals (≥2) | ❌ 徐克金庸電影海報風（紅金大字 + 飛白書法 + 武俠 cliché）／ ❌ 中國風 stock 元素（龍 / 雲紋 / 寶塔 / 仙鶴 / 錦鯉 / Canva 東方裝飾）／ ❌ 過度做舊 / Instagram old-timey filter（蟲蛀 + 大量摺痕 + 過飽和黃 — receipt 是 fresh transaction artifact）／ ❌ 朱印 wallpaper（朱印當裝飾滿頁蓋 — 4+1 枚 functional 而非 N 枚紋樣）／ ❌ 梁山兄弟血盟 cosplay（鏢單是商業文書、非江湖義氣場景）／ ❌ Mailchimp / Stripe receipt SaaS chrome（hero brand logo + dual CTA + 圓角卡）|
| (f) | Color strategy | **Restrained · 三色（warm xuan paper + warm carbon ink + earthen vermillion）+ 1 subtle grid hairline** — 95%+ paper + ink，朱印紅 functional accent **5 處同步**（4 朱印 + 1 押腳 — 機制接續 016 conditional broadcast 但條件不是 alert state、是 RTL 動線的 functional spread positions）|
| (g) | Scene sentence (forces dark/light) | **LIGHT · 鏢局帳房桌面，午後窗口透光，紙是 fresh-pressed xuan paper** — receipt transaction 當下產出 = light-mode artifact；跟 daily-015 J-38 manual paper light 同 register 下一個邏輯位置；xuan paper warm 黃底 + 碳墨黑 + 朱砂紅 三色最高對比 |
| (h) | Register | **atmospheric-craft** — 跟 daily-013 Voyager（深空 interplanetary 23.81 LH）/ daily-016 Trieste（深海 8,470m）同 register，**跨入第三 sub-lane: pre-industrial / 東亞 / 紙本 cultural-artifact**。**series 第一個漢字主視覺 entry**（前 16 entries 全西式 Latin / 含日文字也用西式編排）— register × scale × cultural-medium 三維 orthogonal 證據 |
| (i) | Section list (top→bottom scroll order) | `EmailMeta` (top, ~80h, 3-zone eyebrow brand-subject-serial 含上下 hairlines) → `EscortWaybill` (middle, 1100h, 8-zone artifact: eyebrow + 5 vertical CJK cols RTL + 4 朱印 spread + CalcLedger 5 sub-cols + Ma Shan Zheng signature column) → `LedgerFooter` (bottom, ~160h, Counterfoil legal-left + TrailingMeta contact mid + Breadcrumb mid-bottom + footer ChopFrame bookend right [user manual edit removed]) |

### Archetype
**Receipt**（Functional Archetypes catalog）— 鏢單 IS receipt 的天然 archetype；託運貨品 = line items / 保價銀兩 = total / 起終點 = shipping origin+destination / 朱印 = payment confirmation authority。**無需勉強套**（不像 014 把 SaaS countdown 反向打成 cinematic-poster 那種大跨度 reframe）。

### Anti-template sanity check（gate 3 silent · PASS）
「鏢局憑單 + 1881 河北滄州 + 4 functional 朱印 cluster + LIGHT xuan paper + Noto Serif TC + Ma Shan Zheng」會 read like Awwwards SOTD 還是 1/100 SaaS receipt？→ **PASS**：沒有任何 Stripe / Square / Shopify receipt 的 hero brand logo + line item grid + total chrome；也沒有 Wuxia 電影海報的紅金大字。Editorial chrome contamination test PASS — 全頁僅漢字毛筆書法 + 蘇州碼數字（〇〇五七 / 廿七日 / 貳仟玖拾兩 等）+ 篆書朱印 + Ma Shan Zheng 手寫，西式 italic / Roman / EB Garamond 完全不出現。

---

## ZoneMap log（gate 4 / §3.1.5 · 3 sections per scroll order）

### ZoneMap-1440-EmailMeta（confirmed v2，4 zones → 3 zones）
- v1 嘗試：5 zones 含 hairlines 上下作為 zones — 100h 薄條中 captions 互相擠壓不可讀
- v2 修正：hairlines 從 ZoneMap 拿掉、compose 階段再加（hairlines 是 decorative divider 非 content zone）
- 最終 3 zones：Eyebrow-Brand 200×16 (rank 3 left) / Eyebrow-Route+Subject 700×16 (★ rank 1 center) / Eyebrow-Serial+Date 340×16 (rank 3 right)
- 4 acceptance criteria PASS（asymmetric / edge anchored / star + rank / role variety）

### ZoneMap-1440-EscortWaybill（confirmed v2，RTL discipline correction）
- **v1 嚴重錯誤**：把 SealA 鏢局印（起首權威）放 TOP-LEFT、SignatureColumn 落款放 LOWER-RIGHT、CalcLedger 計欄放 RIGHT margin — **三處全部與 RTL 漢字垂直書寫動線（top→bottom within column, right→left across columns）對調**
- **User flagged**: 「須注意中文從上到下是從右至左過去」— v1 被砍掉重畫
- **v2 RTL-corrected**：SealA TOP-RIGHT (起首權威) / SealC MID-RIGHT (路線描述) / WaybillBody-7Cols-RTL CENTER / CalcLedger LEFT margin (totals 收束) / SealB LOWER-LEFT INTERIOR (主家收押) / SignatureColumn LOWER-LEFT (落款) / SealD LOWER-FAR-LEFT (押字) / EyebrowCaps top
- **此教訓寫入 memory**：[`feedback_chinese_vertical_rtl.md`](../../.claude/projects/-Users-dianyi-Desktop-Portfolio-daily-ui-with-claude/memory/feedback_chinese_vertical_rtl.md) — 未來任何 zh 古典垂直書寫 brief 必須先把「rotation 90° + mirror」框架套到 ZoneMap 起首
- 8 zones 全 confirm，4 acceptance criteria PASS
- 最終 body 從 7 cols 壓到 5 cols（fits 1440 width better）

### ZoneMap-1440-LedgerFooter（confirmed v1，4 zones）
- 4 zones varied positions：Counterfoil-副聯 540×112 (rank 2 left) / TrailingMeta 460×56 (rank 4 mid-top) / Breadcrumb 460×16 (rank 3 mid-bottom) / ChopFrame ★ rank 1 200×112 right bookend
- 4 acceptance criteria PASS

### Cross-section coherence
- **右側權威 column**：EmailMeta serial+date (rank 3) ↕ EscortWaybill SealA (★ rank 1) ↕ LedgerFooter ChopFrame (★ rank 1) — 形成「右側權威 + 編號 vertical column」
- **左側 narrative column**：EscortWaybill CalcLedger (rank 3) ↕ LedgerFooter Counterfoil (rank 2) — 形成「左側計算 + 法律敘述 column」
- **中央軸**：EscortWaybill body 5 cols ↕ LedgerFooter contact + breadcrumb — 中央 metadata 通道

---

## Compose phase log（§3.2 · 1440 outer wrapper · 5 use_figma calls）

### Phase 1 — Setup
- 創建 local `Daily-017-Scene` collection（Light mode only）
- 4 scene vars：`scene/xuan-paper-aged` (#ECE2CC → #E3D5BE → #D5C6AC 三輪迭代加深) / `scene/ink-graphite` (#221A12 暖碳墨) / `scene/vermillion-cinnabar` (#B5392A 朱砂偏橙) / `scene/border-grid` (#C9BCA0 → #B5A689 → #A8947A 三輪加深)
- 1440 outer wrapper "Daily 017 — 鏢局憑單 - 1440" VERTICAL auto-layout, FILL 1440 / HUG vertical, bg bound to `scene/xuan-paper-aged`

### Phase 2 — EmailMeta
- VERTICAL auto-layout padding 24v / 80h, item spacing 8
- HairlineRule-Top + EyebrowRow HORIZONTAL SPACE_BETWEEN + HairlineRule-Bottom
- EyebrowRow 3 text spans：Brand "會友鏢局 · 河北滄州" / Subject "鏢字第〇〇五七號 · 押運憑單" (★ Bold) / SerialDate "光緒柒年八月廿七日"
- Noto Serif TC Medium / Bold, text/caption (12px) bound, scene/ink-graphite + opacity 0.55 / 1.0 / 0.55, letter-spacing 4%

### Phase 3 — EscortWaybill Phase A (section + eyebrow + canvas shell)
- VERTICAL section frame, padding 60t/80b/80h, item spacing 32
- EscortEyebrow text "河北滄州 · 會友鏢局帳房 · 押運憑單" (Noto Serif TC Medium, text/caption, opacity 0.45)
- Overlay-WaybillCanvas 1280×940 NONE layout（per skill compose-time baseline #1: NONE with children = P1, prefix `Overlay-` to skip — for absolute-positioned artifact zone）

### Phase 4 — EscortWaybill Phase B (5 RTL CJK columns)
- 5 vertical text nodes, each char on own line via `\n`
- RTL order：Col1 (rightmost canvas x=820): 鏢字第〇〇五七號 / Col2 (x=700): 蘇繡八百匹整 / Col3 (x=580): 河北滄州起運 / Col4 (x=460): 山西大同收訖 / Col5 (leftmost x=340): 計銀貳仟玖拾兩
- Noto Serif TC Bold, fontSize bound to text/h2 (28px), lineHeight PIXELS 32 (per F1 — lineHeight bind forces PIXELS, use literal direct), letterSpacing 0, scene/ink-graphite

### Phase 5 — EscortWaybill Phase C (4 chops vermillion vector v1)
- 4 frames：SealA top-right (140×140 ★ rank 1, 會友/鏢局 2x2)，SealC mid-right (120×120, 平定/關記)，SealB lower-left interior (120×120, 林同/甫收)，SealD lower-far-left (80×80 押)
- 各 rotation jitter (3° / -2° / 4° / -3°), node opacity 0.9 (F11: 必須 node 不能 paint，bound 變數 paint opacity 會被 silently 重設 1)
- Inner text white centered with ZCOOL XiaoWei (篆書近似)

### Phase 6 — EscortWaybill Phase D (CalcLedger + SignatureColumn)
- CalcLedger Col1 monolithic "計開銀貳仟兩火耗叁拾兩保費陸拾兩" 15 chars (RTL right side)
- CalcLedger Col2 "合計貳仟玖拾兩" (★ Bold, leftmost)
- SignatureColumn vertical "押運鏢頭李冠銘押" Ma Shan Zheng Regular 26px (handwritten contrast voice vs 印刷權威 Noto Serif TC)
- Divider hairline above signature column

### Phase 7 — LedgerFooter
- VERTICAL section frame padding 32v/80h
- HairlineRule-Top + Overlay-FooterCanvas 1280×130 NONE
- 4 zones absolute-positioned：Counterfoil 副聯 multi-line legal text left (text/caption, scene/ink-graphite opacity 0.7) / TrailingMeta 鏢局聯絡 mid-top / Breadcrumb 鏢字編號+date mid-bottom / ChopFrame 會友 ★ rank 1 right bookend (80×80 vermillion + ZCOOL XiaoWei white centered)

---

## Edit Pass log（§3.3 · 3 rounds + user manual swap）

### Round 1 — 印章感 + bg/hairline 加深
- xuan-paper-aged: #ECE2CC → #E3D5BE (deepened, more obviously aged)
- border-grid: #C9BCA0 → #B5A689 (more visible structure)
- 5 chops (4 seals + ChopFrame footer)：
  - Inner stroke 3px deep vermillion #802114 (邊欄 carved frame — 真石章邊框)
  - Drop shadow MULTIPLY 5radius/1spread vermillion 0.35 (paper absorption halo)
  - Inner text fill 從 pure white 改為 scene/xuan-paper-aged (negative carve through paper, not white ink)

### Round 2 — bg 再加深 + CalcLedger 拆 + body column rules
- xuan-paper-aged: #E3D5BE → #D5C6AC (third tier deepened)
- border-grid: #B5A689 → #A8947A
- CalcLedger Col1 從 monolithic 15-char 拆成 4 separate sub-cols：計開 (header Bold opacity 0.85) / 銀貳仟兩 / 火耗叁拾兩 / 保費陸拾兩 (Medium opacity 0.7 each)，加 Col2 合計貳仟玖拾兩 (★ Bold leftmost) = 5 sub-columns 真正 ledger 帳本感
- 4 vertical column rules between body 5 cols (1px scene/border-grid opacity 0.5) — 真鏢單 ledger paper 格線

### Round 3 — User manual swap to real ink stamp images
- **User feedback**: 「看起來有點奇快 不太像那種印章感」— 合成 vector chops 即使加邊欄 + halo + 鋸齒 jitter 仍欠真實墨痕質感
- User 自行下載 4-5 個真實 ink chop PNGs 在 Figma 直接 swap：
  - SealA 會友鏢局 — 真實 ink-on-paper 篆書方印（uneven density + edge feathering）
  - SealC 平定關記 — 同質感 篆書關卡章
  - SealB 林同甫收 — 篆書收押章
  - SealD 押 — 圓形 push 印（assistant 之前已將 frame cornerRadius 改 40 = 圓 per 個人押字慣例）
  - ChopFrame footer 會友 — 似乎被 user 移除（footer 右側 bookend 缺，但 EmailMeta serial-date 右側仍提供 right-column anchor）
- **Assistant 微調**：將 SealD frame 從 80×80 rounded square 改 cornerRadius 40 → 圓形（個人押字慣例 vs 機構印慣例）

### ZoneMap cleanup（§3.3 step 6）
- 3 ZoneMap reference column frames（ZoneMap-1440-EmailMeta / EscortWaybill / LedgerFooter at x=-1600）— user 手動編輯時已順便移除，無需 assistant 清理

---

## Final composition state
- **Wrapper**: Daily 017 — 鏢局憑單 - 1440 (`436:59`, 1440×1401) at canvas x=10560 y=1936（page 1，與 daily-001 ~ 016 排在同一 page）
- **Sections**:
  - EmailMeta (`437:54`)
  - EscortWaybill (`439:54`) 
    - Overlay-WaybillCanvas (`439:56`)
  - LedgerFooter (`443:54`)
- **Local scene collection**: `Daily-017-Scene` (`VariableCollectionId:436:54`) · 4 vars · 1 mode (Light)
- **No 375 mobile**: per user decision — 1881 鏢局憑單 = single-page cinematic artifact native to desktop / 紙本閱讀，mobile 強推 responsive 會失去 register。
- **Real chop images**: 4 + 1 朱印 swapped to user-supplied ink stamp PNG assets — 第一個 daily-XXX entry 使用真實 image asset 而非純合成 vector

---

## Per-screenshot notes（saved to `daily-017/screenshots/`）
- `daily-017-1440.png` — full 1440×1401 wrapper (3 sections stacked，real chops swapped)
- `daily-017-detail-escort-waybill.png` — EscortWaybill section close-up (1440×1126，body 5 cols + 4 朱印 + CalcLedger + signature 全可見)
