# Daily 013 · Mechanism Card

> 把 Direct Messaging 從「iMessage / Discord bubble + avatar 雙縱欄」的 SaaS chat shape 重寫成「光延遲深空無線電通訊」。同樣的資料模型（兩個對話端 + 訊息串 + 送出狀態），但情緒從「秒回 chat」改為「以光速等待 4–24 分鐘的莊重對接」。對話本身成為示波器軌跡，「正在飛行中、尚未抵達」的那段訊息以 Solaris 暖琥珀單點光照亮 — 把 typing indicator 的 SaaS 預設機制（…動畫）置換為一個物理意義成立的視覺事件。

## archetype
Timeline（Functional Archetypes catalog）— 時間軸 + 雙平行軌（你 / 探測器）+ 事件錨點（waveform 段）。

## register
atmospheric-craft（mood-led、hand-built）— 非 editorial-magazine、非 Swiss-restraint、非 techno-spec、非 brutalist

## purpose_triad
- intent: accomplish-task（功能性 DM 介面 — 讀訊息 + 送訊息 + 看遙測），路由到 Functional Archetypes 而非 Structural
- success: 使用者一眼分得清「現在 / 過去 / 未來」三個訊息時態，且能找到「正在飛行中」的 protagonist
- density: medium（單對話 + 側欄遙測；不走 instrument-panel high、也不走 museum-quiet low）

## palette_recipe
- **strategy**：Restrained — 99% dark + 1 rationed warm point
- **bg**：`color/bg` (Dark) = #0A0A0A — 深空背景
- **bg-alt** / **surface**：未使用（介面通透無分層）
- **fg**：`color/fg` (Dark) = #F5F5F5 — 微暖白；in-flight burst 的訊息正文以此色保持唯一前景重音
- **fg-muted**：`color/fg-muted` (Dark) = #A3A3A3 — 過去 bursts、timestamps、caps eyebrows、telemetry rows 全用此
- **border**：`color/border` (Dark) = #262626 — 1px hairline（StationStrip 底邊 / Composer 頂邊 / Sidebar 左邊 / 中央 time axis）
- **accent**：`color/accent` (Dark) = #B5B5B5 中性灰 — **零使用**（與 daily-012 同樣 photographic / scenic accent 路線）
- **scene accent**：`scene/solaris-amber` (local) = #D9A55E — **僅出現在「正在飛行中」的 in-flight burst**（7 條 bars + 3 層光暈 + T+ timestamp + "TRANSMITTING" label）。Local var 機制走 daily-009 Q4 escape hatch，publisher 0 drift。
- **focus-ring**：`color/focus-ring` (Dark) = #62A0F0 — 未使用（無 interactive component states 組）

## type_pair
**Editorial preset** (MCP compose proxy = Inter)，用法偏 **Tech**。
- Compose proxy: Inter（Regular / Medium）— engineering chrome / caps tracked labels / readouts
- CJK: Noto Sans TC（Regular / Medium）— zh-TW 訊息正文
- 微 caps tracked 全頁紀律（letter-spacing 4-8%）：STATION DSN-VOY1 / TRANSMIT UPLINK 7.16 GHz / RECEIVE DOWNLINK 8.41 GHz / SIGNAL · LIVE / TRANSIT / ORBIT / BAND / MISSION ELAPSED / TRANSMIT CTA — 「博物館目錄」「太空總署文檔」的可信度氣質
- 訊息正文（messages）採 zh-TW Noto Sans TC 行距 150%，與 chrome 的 110% tight 形成節奏差

## motifs
1. **雙軌橫向 waveform timeline** — 中央 1px 水平 time axis 把畫面切上下兩條軌（TRANSMIT 在上 / RECEIVE 在下），每訊息為一段 7-bar sine-envelope burst 鎖在某時刻 x 位置。**訊息正文 + T+ timestamp 跟著 burst 站在同一 x 欄位**，等於把「對話列」轉成「示波器掃描帶」。
2. **單一 Solaris 暖琥珀光點** — `scene/solaris-amber` 整頁只出現一次：那段「正在飛行中、尚未抵達」的 in-flight burst（B3, T+19:18）。3 層光暈 ellipse（220 / 110 / 48）以 node-level opacity 0.05 / 0.10 / 0.20 疊出 Tarkovsky-Solaris 桌燈質感。**這顆光點就是「typing indicator」的 SaaS 預設機制（…動畫）的物理意義版本**。
3. **三時態節奏（過去 / 現在 / 未來）視覺差** — 過去 bursts：fg-muted 全不透明（已歸檔，靜）；現在 in-flight burst：Solaris amber + glow + 唯一 fg 重音訊息正文 + "TRANSMITTING" 標籤；未來 awaiting burst：fg-muted @ 40-50% opacity（飄渺、未到）。**單一時態維度用單一視覺機制（顏色 + 亮度 + 模糊度同時編碼）**，避免 status label 滿頁。

## why_it_works

1. **語義重寫（Semantic reframe）**：把 Direct Messaging（最 commodity 的 SaaS UI 題目之一）重寫為「深空光延遲無線電」。同樣的資料模型（兩個對話端 + 訊息串 + 送出狀態），但 timing model 從「即時 chat」改為「光速 4-24 分鐘等待」。**這個重寫一發出，所有 SaaS chat 預設都自動失效** — bubble shape 沒了（變 waveform）、avatar 沒了（變 station ID）、typing indicator 沒了（變 in-flight glow）、「seen 已讀」沒了（變 ETA）。

2. **avatar / bubble 全面捨棄**：SaaS chat 預設靠 avatar 圓圈 + 對偶 bubble 左右排列識別說話人。這份介面**完全沒有 avatar / 沒有 bubble**：誰是誰由 trace 在 axis 哪一側判斷（上 = 你 / 下 = 探測器）；訊息分隔由 burst x 位置在時間軸的相對距離承擔。這是 Discord+太空壁紙 anti-goal 的真正反例 — 不是改皮膚，是改 mechanism。

3. **Solaris glow 取代 typing indicator**：SaaS chat 預設用「… 三個跳點」表示「對方在輸入」。這份介面換成「在途訊息以 Solaris 暖琥珀單點光照亮」— 光點意義來自場景設定（深夜桌燈是 Tarkovsky Solaris 的視覺骨架），意義成立於對話的物理隱喻（光延遲 = 訊息真的在路上 = 該有一個光點代表它的當下位置）。**機制和情緒同源，accent 不是裝飾。**

4. **Three-tense visual encoding**（過去 / 現在 / 未來）：
   - 過去（已歸檔）：fg-muted 全色 — 安靜但完整存在
   - 現在（在途）：Solaris amber + 三層 glow + fg 重音正文 + caps "TRANSMITTING"
   - 未來（等待）：fg-muted @ 40-50% opacity — 飄渺、未抵達

   **同一視覺維度（明度 / 飽和 / 銳利度）同時編碼時態**，使用者一眼分得清三個時態的訊息，不需 status badge 滿頁。

5. **Editorial text-CTA 取代 SaaS pill button**：Composer 不放藍色圓角發送按鈕。改成 `TX · | 起草下一段傳輸 · Compose next packet... | ↗ TRANSMIT` 一行文字 + 微 caps 連結。**呼應 Daily 008 editorial CTA 機制 + Daily 010 quiet broadcast 機制** — atmospheric-craft register 不接受 pill。

6. **Telemetry sidebar 為「站」的可信度地基**：320 寬右欄 4 sections（SIGNAL · LIVE 即時讀數 / TRANSIT 光延遲 / ORBIT 軌道座標 / BAND 上行下行頻段）+ MISSION ELAPSED 鎖底計時器。**這些 readouts 全部是真實 Voyager / DSN engineering 語彙**（−152.4 dBm signal、23.81 LH light-hours、17h 47m 22s RA、+12° 04′ 51″ DEC、159.7 AU heliocentric、8.41 GHz X-Band 下行、DSS-14 Goldstone ground station、22:13:09 mission elapsed）。**真實 metadata 取代「裝高級」的 cosplay 座標**（feedback memory `feedback_no_prestige_dressing`）— 這些不是裝飾，是 anchor ref（NASA Deep Space Network status display）的合理沿用。

7. **Local scene variable Q4 escape hatch（daily-009 機制重用）**：`color/accent` publisher 已中性化為 #B5B5B5（avoid reflex orange）。劇本需要的暖琥珀屬於這個檔案的 scene-specific 訴求，不該污染 publisher。建 `daily-013-scene` local collection 帶單一 `scene/solaris-amber = #D9A55E`，in-flight burst 所有元件綁此變數。**publisher 0 token drift + 100% scene accent 紀律保持**。

8. **Functional-archetype 純度保持（Editorial chrome contamination test）**：功能性 brief 容易意外被 Structural 「Editorial Manuscript」chrome 污染（serif display 標題 / Roman 章節編號 / italic margin note）。Daily 013 全程用 sans + caps tracked + tabular 工程 ledger，完全不採 manuscript chrome — Timeline functional 機制純度通過驗證。

## anti-goals 證據（避開的陷阱）
- ❌ Marvel / Tony Stark HUD → 無藍光環、無動態 ring、無 glassmorphism、無懸浮虛擬指紋
- ❌ Discord + 太空壁紙 → 沒貼星空 wallpaper、沒留 chat bubble 形狀、沒做 avatar 列、機制本體就改了
- ❌ Spotify 桌面 waveform → 沒用居中專輯封面、沒做綠色 single-track 漸層、波形是分段 burst 而非連續曲線
- ❌ Interstellar / Gravity 電影紐 → 沒用 IMAX 預告片 typography、沒做廣告級海報構圖、沒 Hans Zimmer 那種「危機緊張」氣味
- ❌ Apollo Mission Control 1969 phosphor CRT → 完全避開了 daily-009 已用的磷光綠路線，走 1972 Tarkovsky Solaris 哲學緩慢路而非 1969 工程緊湊
- ❌ Voyager 1977 Vignelli MoH manual → 沒用 Helvetica + ink-on-paper 印刷規範書美學（那會偏 Swiss-restraint，這份偏 atmospheric-craft）
- ❌ T-minus 大字當 hero → daily-011 已做（Orionid transit countdown），這份避開重複，star 改用 burst 訊息肌理本身

## why_not_alternative_archetypes
- **Instrument Panel** → 會逼到太多 readouts 並列、密度跳到 high，Solaris「靜」消失。
- **Storyboard** → 訊息不是 sequential 故事節拍，是同一條時間軸上兩個觀測站的同步事件。
- **Object Metaphor** → waveform 已是物件隱喻；再加一層 metaphor 會冗餘。
- **Receipt** → ledger 形式太重（行 + 數字 + 邊欄）會壓掉 waveform 的 motion 感。
- **Map** → 空間關係不是這份 brief 的 mechanism；時間關係才是。

## figma_url
- File: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100
- Console 1440 wrapper: `355:56`
- StationStrip: `356:54` / Overlay-WaveformPane: `357:56` / TelemetrySidebar: `357:58` / Composer: `357:57`
- In-flight STAR burst (B3) + Solaris halo: ts `359:79` + msg `359:80` + halo `362:54 / 362:55 / 362:56`
- Local scene var: `scene/solaris-amber` (VariableID `355:55` in collection `355:54`)
