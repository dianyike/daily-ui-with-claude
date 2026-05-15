# Daily 014 · Mechanism Card

> 把 Countdown Timer 從「Ticketmaster 3-card hours/mins/secs grid + 圓角藍色 CTA」的 SaaS 預設重寫成「電影海報 letterbox 標題卡 + 演唱會現場照作 anticipation 的視覺終點」。倒數結束的那一刻，你會置身於背景照片裡的那個高潮現場 — 用「已發生的畫面」當「等待的視覺參照」，把 anticipation 從抽象時間張力錨定為可看見的場景。

## archetype
Structural / Cinematic-Poster（光譜靠近 Editorial Manuscript 但**無** manuscript chrome — 只用 photography + tabular hero + corner metadata 的海報排版機制）。

## register
cinematic-poster（photography-led + 電影標題卡 chrome + 票根 metadata）— 非 editorial-magazine、非 functional-engineering、非 Swiss-restraint、非 brutalist-flyer。

## purpose_triad
- intent: evoke-anticipation（情緒性 brief — 主角是時間張力 + 期待感，不是任務完成度），路由到 Structural / Poster 而非 Functional
- success: 一眼讀出「11/14 開門前 2h47m 倒數 + 那個 cinematic 場景就是你錯過會變成的」 — 照片作為 anticipation 的視覺錨點
- density: low（單照片 + 1 hero countdown + 兩塊底角 chrome；museum-poster 留白感）

## palette_recipe
- **strategy**：Restrained · cinematic-photo + single accent — 99% 來自照片本身的藍光氛圍 + 1 rationed cobalt point
- **bg**：`color/bg` (Dark) = #0A0A0A — 但實際 visible bg 是 photo 本身、`color/bg` 只在 photo 載入前作 fallback
- **fg**：`color/fg` (Dark) = #F5F5F5 — T-minus hero 數字 + event-block VALUE + ticket-stub serial 強重音
- **fg-muted**：`color/fg-muted` (Dark) = #A3A3A3 — 全頁 chrome（eyebrows / tour title / unit labels / event-block LABEL / stub seat tier / hairlines）
- **border** / **bg-alt** / **accent** / **accent-fg** / **focus-ring**：**零使用** — Hero 為展示性 poster 無 interactive 表面，publisher `color/accent` 中性化（#B5B5B5）被 scene cobalt 取代
- **scene accent**：`scene/cobalt-azure` (local) = #3993DD — **僅出現在頂部 hairline 中央的 10×10 NOW 圓點**。Local var 機制走 daily-009 / daily-013 Q4 escape hatch，publisher 0 drift。User-supplied accent + tour-name "Cobalt Hours" 自帶 narrative coherence。
- **scene hero-size**：`scene/countdown-hero` (local) = 200 FONT_SIZE — publisher `text/display` 上限 88pt 不足以做 1/3 占比 cinematic 大字 hero。新建 named-star sizing，scene-specific scale。

## scrim_recipe（cinematic letterbox mask）
垂直 linear gradient，7 stops：
- 0.00: rgba(0,0,0,0.85) — top heavy 黑帶（電影標題卡寄居）
- 0.12: 0.65
- 0.25: 0.42
- 0.50: 0.55 — center 保留 photo 亮帶但仍有對比給 T-minus
- 0.75: 0.50
- 0.88: 0.72
- 1.00: 0.88 — bottom heavy 黑帶（event-block + ticket-stub 寄居）

**機制意義**：黑帶不是「裝飾邊框」，是「把 photo 從滿版 hero 轉成電影標題卡寄居處」的視覺寄居機制。Chrome 不寄居在 photo 上方（會打架），是寄居在 photo **letterbox 出來的黑帶上**。這就是 cinematic poster 跟 SaaS overlay 的根本差異。

## type_pair
**Editorial preset** (MCP compose proxy = Inter)，用法走純 sans 單一聲線（無 italic display contamination）。
- Compose proxy: Inter（Regular / Medium）— 全頁同一字族
- 字級紀律：12pt caption（chrome / labels） + 200pt scene/countdown-hero（T-minus star）— **跳過 publisher 中間 ramp 16/28/48/88，讓 hero 與 chrome 視覺距離極大化**（cinematic poster 標題卡的字級對比模式）
- Tracking 紀律：caps tracked 8-12% on chrome（事實 / 編號 / 標籤）／ -2% on T-minus hero（壓緊大字使其視覺重量集中）／ -2% T-minus + 10% labels 形成「壓 vs. 鬆」的字距節奏
- 訊息類型分工：N° issue + tour title = caps tracked / countdown 數字 = tabular tight / LABEL→VALUE = caps tracked / serial = N° prefix + slash limit

## motifs

1. **滿版 cinematic 演唱會照作 hero** — 你的 user-supplied photo（藍色舞台燈 + 雙投影幕歌詞 + 觀眾舉手剪影）直接作 1440×900 全幅背景、FILL scale mode 0 cropping。**取代「平面色塊 + 排版 typography」的海報 SaaS 預設**。Photo 是說服機制本身、字幾乎只負責 chrome 與 hero countdown。

2. **Cinematic letterbox gradient scrim** — 上下重黑帶（top 85% / bottom 88%）+ 中央保留 photo 亮帶的 7-stop 漸層蒙版。**這個 scrim 不是 legibility patch，是電影標題卡寄居機制**。Chrome 寄居在 letterbox 出來的黑帶上、photo 寄居在中央亮帶 — 兩者不在同一視覺層級打架。對 SaaS 「整片半透明 overlay」的 anti-pattern。

3. **單一 cobalt NOW 圓點 rationed 到極致** — `scene/cobalt-azure` 整頁只出現一次：頂部 hairline 中央的 10×10 圓。**它說的不是「品牌色」，是「現在這個時刻」的座標標示** — 如同 daily-013 Solaris amber 鎖在 in-flight burst 的單點機制重用。Hairline 把畫面切成「過去（上半）/ 未來（下半）」、cobalt 點是 NOW 的視覺定位。Cobalt 從 brand-accent 升級為時間軸座標符號。

4. **200pt T-minus 跳過 publisher type ramp** — `02 : 47 : 39` 走 scene/countdown-hero（200pt），publisher `text/display`(88) 太小無法做 1/3 占比 cinematic 大字。新建 scene-specific FONT_SIZE 變數 — **不污染 publisher type ramp**、scene-named-star sizing 模式，跟 scene/cobalt-azure 同邏輯。`feedback_publisher_values_first` PASS — 讀完 publisher 所有值才意識到 88 不夠、確認需要 scene var 而非 literal。

5. **電影標題卡 + 票根 corner metadata 二分** — bottom 黑帶切左 680 / 右 560 兩塊：
   - 左 `Event-Block`：DATE / VENUE / DOORS — 三行 LABEL(fg-muted 64w) → VALUE(fg) 對齊欄
   - 右 `Ticket-Stub`：頂 perforation dot row（64×3px ellipse @ 0.75）+ 右對齊 serial / seat / tier
   - **Perforation = 票根 metaphor 的視覺 token**，不是 SaaS 圓角卡片 chrome。1px 高度的 dot row 是「tear here」cue、把 stub 從「右下角文字塊」升級為「物件擬真但極簡」的票根。

6. **跳過 publisher 中間字級 ramp 創造 1:16.7 對比** — 12pt chrome → 200pt hero 是 1:16.7 的字級跳，**publisher 的 28 / 48 / 88 全部跳過**。Cinematic poster 標題卡的字級節奏不是「漸進 ramp」，是「微小 metadata vs. 巨大 title」的二元對比。daily-014 把這個機制錨定為 type rhythm。

7. **單一字族 + 微 caps tracked 全頁紀律避開 manuscript 污染** — Poster archetype 容易被 Editorial Manuscript chrome（serif display / italic margin / Roman numeral）污染。daily-014 全用 Inter Medium + caps tracked 8-12% — **單一字族單一聲線**，poster register 不接 manuscript 多聲部。Editorial chrome contamination test PASS。

8. **「已發生的高潮畫面」作為 anticipation 的視覺終點 — semantic reframe** — Countdown 是「等待還沒到」的時間張力。但 hero photo 是「演出進行中」的高潮畫面（LED 歌詞 + 觀眾舉手）。這個 inversion 把 countdown 從「抽象時間倒數」改寫為「你會在 02h47m 後置身於這張照片裡」。**機制和情緒同源**：photo 不是裝飾、是 anticipation 的視覺錨。對 Ticketmaster 「白底 + 3 card grid + Stock photo CTA」的 anti-pattern。

## why_it_works

1. **語義錨定（Semantic anchoring）取代 SaaS countdown 模板**：Ticketmaster / Live Nation 預設用 3-card hours/mins/secs grid + 圓角 CTA + "Limited time!" hype copy 表達倒數。daily-014 把 countdown 錨定到「具體一場 11/14 AURELIA · Cobalt Hours Tour」+ 一張「倒數結束你會置身的現場照」。**這個錨定一旦成立，所有 SaaS countdown 預設自動失效** — Hours/Mins/Secs grid → 單一 hero string；CTA → 沒有 CTA（poster 不購買）；hype copy → metadata only。

2. **Photo 作 hero、非裝飾**：絕大多數 countdown UI 把 photo 當配角（背景紋理 / decorative tile）。daily-014 把 photo 升級為主角 — 它是 anticipation 的視覺錨。**Countdown 與 photo 互為註腳**：photo 解釋「為什麼要等」（你會置身在這），countdown 解釋「等多久」（02h47m）。

3. **Letterbox scrim 機制取代 overlay 機制**：SaaS overlay = 均勻 50% 半透明黑層 → photo 失去 atmosphere、chrome 半浮半沉。daily-014 letterbox 是 7-stop gradient：黑帶集中在 chrome 寄居的位置（上 85% / 下 88%），photo 中央亮帶保留 atmosphere。**Chrome 寄居在黑帶上而非 photo 上 — 兩者不打架**。

4. **Cobalt accent 從品牌色升級為座標符號**：傳統 brand-accent 邏輯：「accent color 是品牌語言、出現在 CTA / link / highlight 等多處」。daily-014 把 cobalt 限定到一顆 10×10 圓點 — 它不是 brand，是「NOW 在時間軸上的位置」。Hairline 切時間軸（上=過去 / 下=未來）、圓點落在交會處 = 現在。**Accent 從裝飾升級為功能符號**（同 daily-013 Solaris amber 鎖 in-flight burst 機制）。

5. **跳過 publisher type ramp 的字級對比節奏**：12pt → 200pt 是 1:16.7，跳過 16/28/48/88 四級。**Cinematic poster 標題卡的字級節奏不是漸進 ramp，是 metadata（微小）vs. title（巨大）的二元對比**。這個跳級讓 hero 有壓倒性視覺重量、chrome 有 chrome 的克制。daily-014 把這個機制錨定為 type rhythm。

6. **Tour name 從 accent color 反向衍生**：`#3993DD` → Cobalt → "COBALT HOURS WORLD TOUR"。**Accent + tour name + scene var name 三者 narrative-coherent**，不是「先有 tour name 再挑 accent」也不是「先挑 accent 再亂套 tour name」。這個反向設計讓 cobalt 出現有理由 — 它不只是「user 給的藍」，是「tour 自己的色」。

7. **Anti-prestige dressing 紀律保持**：所有編號 / 序號 / 場館名都有 narrative function（per `feedback_no_prestige_dressing`）：
   - N° 014 = Daily UI series issue（真實系列編號）
   - N° 0245 / 4800 = 票根 serial + 限量總票數（scarcity narrative）
   - AURELIA / COBALT HOURS = tour-name narrative coherence
   - HALL 7 · NANGANG / TAIPEI = mid-size 國際 venue（避開小巨蛋 prestige cliché）
   
   無 fake archive number wallpaper、無 fake catalogue mark、無 fake coords。

8. **Local scene variable Q4 escape hatch 雙重重用**：daily-009 phosphor green / daily-013 solaris amber 已建立「publisher 中性化的 token 不夠用時，建 scene-local var 而非 hardcode literal」的模式。daily-014 同時用兩個 local scene var（cobalt-azure + countdown-hero size）— 模式成熟到可重複套用、publisher 紀律保持、scene 戲份滿足。

## anti-goals 證據（避開的陷阱）
- ❌ Ticketmaster countdown card SaaS → 無 3-card hours/mins/secs grid + 無圓角藍色 CTA + 無 "Limited time!" hype copy + 無「Buy now」purchase intent
- ❌ Coachella poster typographic mass list → 無 artist tier 字級階（Headliner XXL / Co-Headliner XL / Mid M / Support S）+ 無 typographic mass wallpaper
- ❌ daily-011 Orionid T-minus monument → 不同 register（photo hero ≠ pure typography）+ 不同字族（Inter Medium ≠ EB Garamond serif）+ 不同 bg（演唱會藍光 ≠ pure white）+ 不同 scene 編號邏輯（N° 014 issue + 0245 serial + 2026 tour ≠ N° 011 / 047 / 045-047 觀測 log）
- ❌ daily-013 telemetry sidebar → 不同 chrome 分布（中央 hero + 底角 corner ≠ dual-track waveform + right sidebar）+ 不同 accent 機制（cobalt 鎖 NOW dot ≠ solaris 鎖 in-flight burst，但邏輯同源、表達不同）
- ❌ Coldplay / Taylor Swift live cosplay → 用 fictional artist + tour 名（AURELIA / COBALT HOURS）避開真實 artist 衍生負荷
- ❌ Pinterest / Eventbrite poster 模板 → 無 floating CTA pill + 無 RSVP 表單 + 無 social-share button row + 無 "Save the date" 文案
- ❌ IMAX / Christopher Nolan 預告片 typography → 無 stencil display + 無 ALL CAPS 大字海報主標 + 無「IN THEATERS / DOLBY ATMOS」chrome
- ❌ Generic event landing page → 無 hero「You're invited」copy + 無 social proof grid + 無 venue map embed

## why_not_alternative_archetypes
- **Functional Timeline**（如 daily-013 horizontal axis）→ 會逼出 list-shape，cinematic 單畫面 anchored on photograph 消失。
- **Object Metaphor**（如 機械鐘 / 沙漏）→ 會把 anticipation 變物件擬真 cosplay、照片的真實 atmosphere 失重。
- **Receipt / Ledger** → ledger 形式太重（dot-leader + 章節）會壓掉 photo hero。
- **Atmospheric Photo-Led + Editorial Manuscript**（daily-001 / daily-012 路線）→ 那是雙欄結構（左 cinematic 媒體 + 右編輯文件）；daily-014 是單張全幅照片 + 中央 hero + 底角 chrome — 海報式單一 frame，非 manuscript 雙欄。
- **Card / Modal SaaS** → 直接撞 Ticketmaster anti-goal。
- **Instrument Panel** → 多 readouts 並列、密度跳到 high，photo atmosphere 消失。

## figma_url
- File: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=375-57
- Hero 1440 wrapper: `375:57`
- Hero-Background (photo fill): `375:58`
- Hero-Scrim (cinematic letterbox gradient): `375:59`
- Chrome-Top: `375:60`
- **T-minus 200pt star**: `380:59`（bound to local `scene/countdown-hero`）
- **Cobalt NOW dot**: `380:56`（bound to local `scene/cobalt-azure`）
- Event-Block: `375:62`
- Ticket-Stub: `375:63`
- Local scene collection: `daily-014-scene` (VariableCollectionId `375:54`)
  - `scene/cobalt-azure` (VariableID `375:55`) = #3993DD
  - `scene/countdown-hero` (VariableID `375:56`) = 200
