# Daily 012 · Mechanism Card

> 把一個電商商品頁從「DTC 樣板（hero + dual CTA + 3-card grid + free-shipping pill）」整個重寫成「時裝屋檔案目錄頁」，藉此把「買一支香水」轉化為「進入一份私人香氛檔案」。商品照片本身用 atmospheric photo-led 滿版承載說服，購買動線改以單欄編輯雜誌節奏在第二屏之後展開。

## archetype
Atmospheric Photo-Led (parent) + Editorial Manuscript (story sections — Notes / Provenance / Acquire)

## register
editorial-magazine 微 quiet-luxury — 巴黎檔案目錄調，非美妝 DTC、非 Vignelli Swiss、非 brutalist

## purpose_triad
- intent: be-persuaded 為主（goal = 讓重視形象與生活風格的人感覺自己屬於這裡才買）
- success: 使用者讀完 hero atmospheric photo 後**主動下捲**到 Acquire；50ML / €240 為 selected 預設
- density: medium-low（單品電商、視覺主導）

## palette_recipe
- **strategy**：Restrained（白紙 + 黑墨 + photographic accent 來自香水液體的暖金）
- **bg**：`color/bg` (Light) = #FFFFFF — 純白紙
- **bg-alt**：`color/bg-alt` = #F5F5F5 — Provenance 段微差紙感
- **fg**：`color/fg` = 近黑墨色（非 #000）
- **fg-muted**：`color/fg-muted` = 中灰，承載 italic colophon / role meta / footnote
- **accent**：色彩來自照片本身的暖金液體（非 token，photographic accent）；`color/accent` 在頁面上 **完全沒用到**（已中性化為 #6B6B6B 避開 reflex orange）
- **focus-ring**：`color/focus-ring` = #1B6FE3 (Light) — 僅在 state=focused variant 的 outline 出現

## type_pair
**Editorial preset**（MCP compose proxy = Inter）。
- Compose proxy: Inter（Regular / Italic / Medium / Bold）
- **Hand-off swap target**：Gambarino（display 88px / 48px — 編輯雜誌標題）+ EB Garamond（body 16px — 古典 serif 段落）+ Inter（caption / chrome 12px — 微 caps tracked eyebrow / serial）

## motifs
1. **方切玻璃 photographic protagonist** — hero 段滿版照片本身就是 motif，瓶子方切幾何 + 奶油紙柔影 = 整頁構圖骨架；後續 sections 留白 + 微差 bg-alt 都呼應這個材質感。
2. **微 caps tracked chrome** — eyebrow（`N° VII · ÉDITION HIVER 2026`）、price line（`50 ML · EAU DE PARFUM · €240`）、serial（`ÉDITION LIMITÉE · N° 045 / 480`）、size labels（`30 ML / 50 ML / 100 ML`）— 全用 12% / 14% / 16% letter-spacing 的 weight/medium，建立「博物館目錄 / 香水師檔案」的可信度氣質。
3. **Italic accent in display serif** — `d'Hiver.`（hero）/ `"An archive of winter light."`（provenance quote）/ 所有 italic 副文（colophon、scroll cue、shipping footnote）— italic 永遠攜帶「情感 / 觀察」聲線，roman 永遠攜帶「事實 / 編號」聲線。聲線兩分使全頁有節奏。

## why_it_works
1. **重寫框架（Reframe）**：把「電商商品頁」改寫為「時裝屋發行的私人香氛檔案目錄第 N° VII 期」。同樣的資料模型（商品名 + 香調 + 故事 + 價格 + 變體 + CTA），但情緒從「比較 → 加購 → 結帳」改為「閱讀 → 進入 → 收藏」。
2. **主角單一：照片就是說服**：Hero 不放大標 + CTA 對抗式競爭；照片占 100% viewport，文字 plates 是 overlay 不是 hero。Atmospheric Photo-Led 的純粹形式 — 「圖片滿版在後面，物品剛好在右邊」（用戶原話）讓構圖一次完成。
3. **延遲 CTA**：購買動線（Add to vellum envelope）放在第三段（Acquire）而非 hero。Hero 的 acquire chrome 只有「50ML · EAU DE PARFUM · €240」+ 「Scroll to view the ritual ↓」— 把交易訊號縮小到極微小的視覺權重。
4. **Selected state = inversion, not pill**：Size selector 用「選中那條反白成黑底白字」的編輯目錄重音句節奏，而不是 SaaS 預設的 pill / card / radio chip。一句話、一條 row、視覺差讓選擇變成「畫了重點」而非「填了表單」。
5. **CTA = quiet-luxury 黑方塊**：全寬 1200×72 黑色矩形 + 微 caps 標籤「ADD TO VELLUM ENVELOPE  →」，呼應 Apple / Aesop / Bottega 的 product-register Buy 慣例，避開 SaaS pill。
6. **Editorial chrome 四重對稱**：每段都用「`0X / SECTION NAME`」eyebrow（caps tracked）+ italic 右側 meta，建立節奏；hero colophon 「Composé à Grasse, hiver 2026」`italic` + 「ÉDITION LIMITÉE · N° 045 / 480」`caps tracked` 是這套節奏的最早一次出現，與後續段標題層形成左右呼應。
7. **編號脈絡分工**：N° VII（這個系列號）/ N° 045 / 480（hero colophon — 限量手工 decant 序號）/ N° VII 復現於 Footer breadcrumb — 三個位置三個角色，避開 fact-uniqueness 重複陷阱。
8. **中性化 accent**：`color/accent` 在頁面上 **零使用**。所有「accent」感都來自香水液體本身的攝影暖金，這是 photo-led 的合法 accent — 它不是 token 也不應該是 token，因為它是材質的真實顏色。這是 atmospheric photo-led 與「Reflex orange 反射式預設」的本質區別。

## anti-goals 證據（避開的陷阱）
- ❌ DTC 美妝 SaaS 樣板 → 無 dual CTA / 無 5-星評價 / 無 "Free shipping" pill / 無 "Subscribe & save" 彈窗
- ❌ 金色奢華刻板 → 無 gradient gold / 無 baroque flourishes / 無金邊框 / 無水鑽
- ❌ Apple 產品頁複刻 → 沒走純白底 + 巨大產品 + 一行 tagline + Buy 按鈕的純 quiet-luxury 路線；改走 editorial-magazine 加目錄編號 + colophon + 法文 archival 語碼
- ❌ Instagram lifestyle 濾鏡 → 無粉/米色漸層 / 無手寫字 / 無 emoji / 無生活擺拍

## why_not_centered_monument
Centered Monument（quiet-luxury 默認）也合理，但選 Atmospheric Photo-Led + Editorial Manuscript 是因為：
1. 用戶給的參考（Aupale + Oryzo）都偏 atmospheric photo + editorial chrome，不是 centered minimal product specimen
2. Editorial section 序列（Notes / Provenance / Acquire）有可寫敘事內容，不是純品牌聲明
3. 滿版照片 + 文字 overlay-left 比中央 product specimen 更能服務 be-persuaded（「身入其境」），而 centered 偏向 acquire-info

## figma_url
- File: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100
- Hero 1440: `324:53`
- Notes / Provenance / Acquire / Footer 1440: `333:52` / `334:52` / `335:52` / `337:52`
- Mobile 375: `338:53` / `339:54` / `339:72` / `340:53` / `340:73`
- Button-AcquireCTA component set (4 states): `336:63`
