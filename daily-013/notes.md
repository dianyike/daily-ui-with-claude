# Daily UI 013 — Direct Messaging · Voyager 1 Heliopause Probe

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `accomplish-task`（功能性 brief — Direct Messaging 介面就是一個任務面板：讀訊息 + 送訊息）。功能 brief 路由 → **Functional Archetypes catalog**，不走 Structural / 編輯式。
- **Density**: medium（單對話 pane + 側欄遙測；不走 instrument-panel high-density、也不走 museum-quiet low-density）。

### Commit Before Code（9 項，含 §2 gate 2 register + i section list）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | slow but **not** tranquil（有等待張力）／ quiet but **not** empty（每元件有功能）／ cold but **not** sterile（單一暖點）／ engineering but **not** technical（精度仍人性）／ cinematic but **not** theatrical（構圖非奇觀） |
| (b) | One named star | **「正在飛行中、尚未抵達」的在途訊息**（T+19:18:33 上行那段 burst）— 它的波形肌理顯在 trace 上，以 Solaris 暖黃單點光 glow |
| (c) | Motifs (3) | 雙軌 waveform trace（上 = 你 / 下 = 探測器）橫時間軸 ／ 在途訊息 glow 點代替「對方正在輸入」的點點動畫 ／ 表格狀 T+ timestamp ledger（反 bubble、反 avatar 列） |
| (d) | Anchor refs (≥2) | **Tarkovsky Solaris (1972)** — 視覺 register（深夜、單點暖光、塵粒、緩慢哲學）／ **NASA Deep Space Network status display** — 功能 register（克制工程感、真實 telemetry 語彙）／ Voyager Golden Record 1977 金色生井金屬感作為微 accent inspiration |
| (e) | Anti-goals (3) | not **Marvel / Tony Stark HUD**（藍光環 / 動態虛擬指紋 / glassmorphism）／ not **Discord + 太空壁紙**（chat bubble + 星空 wallpaper 的 SaaS shape 套太空皮膚）／ not **Spotify 桌面 waveform**（綠色進度波形 + 居中專輯封面） |
| (f) | Color strategy | **Restrained** — 99% dark + faint cream fg + 唯一暖琥珀 accent 鎖在「現在飛行中」的那段 waveform（單點，永不重複） |
| (g) | Scene sentence | 「深夜無線電興趣站，單盞暖黃桌燈，其餘漆黑。你在傾聽一班土星軌道外的探測器，它的回訊以光速在走、單程 4–24 分鐘。」→ **DARK MODE locked** |
| (h) | Register | **atmospheric-craft**（mood-led、hand-built）— 非 editorial-magazine、非 Swiss-restraint、非 techno-spec、非 brutalist |
| (i) | Section list | `[Console]` 單一 section（單螢幕應用介面）。Console 內部 4 zones：StationStrip / WaveformPane / TelemetrySidebar / Composer |

### Type pair
**Editorial preset** (MCP compose proxy = Inter — publisher 預設 latin family)，但用法偏 **Tech**（多 caps tracked engineering chrome）。
- Latin compose proxy: Inter（Regular / Medium）
- CJK: Noto Sans TC（Regular / Medium）— 訊息正文為 zh-TW，工程 chrome 為英文 caps
- Hand-off swap target（未做 web/，僅備註）：可保留 Inter，或換 IBM Plex Mono（讀數字）+ EB Garamond Italic（訊息正文 — 但因 zh-TW 為主，最終仍以 Noto Sans TC 為宜）

### Mode reconciliation
Scene = dark；publisher `collectionModes` 跑時讀回 `["Light", "Dark"]` → PASS。Wrapper `setExplicitVariableModeForCollection(coll.id, darkMode.modeId)` 鎖 Dark。

### Local scene variable (Q4 escape hatch — daily-009 機制)
`color/accent` 被 publisher v0.4 中性化為 #B5B5B5（Dark） — 不符合 Solaris 暖琥珀的劇本需求。建一個 **local scene collection** `daily-013-scene` 帶單一變數 `scene/solaris-amber = #D9A55E`（rgb 0.851 / 0.647 / 0.369）。in-flight burst 的 bars / glow halo / T+stamp / "TRANSMITTING" label 全部綁這顆 local var。Publisher token 0 drift，scene-specific accent 維持 token 紀律。

### Archetype
**Timeline**（Functional Archetypes catalog）— 時間軸（橫向） + 事件錨點（waveform 段）+ 平行雙軌（你 / 探測器）。

> 為什麼不走 Instrument Panel：那會逼到太多 readouts 並列、density 跳到 high、Solaris 「靜」消失。
> 為什麼不走 Storyboard：訊息不是 sequential 故事節拍，是同一條時間軸的兩個觀測站。
> 為什麼不走 Object Metaphor：waveform 已是物件隱喻 — 把 conversation 變成示波器軌跡。
>
> **Anti-template sanity gate**：PASS — 非 iMessage / Discord bubble 列 + avatar 雙縱欄；非 Spotify 桌面 waveform；非 Marvel HUD 動態 ring；非 Slack thread 樣板。Dual-track horizontal-axis oscilloscope + single Solaris glow 是 Awwwards SOTD-tier 重組形式。

> **Editorial chrome contamination test** (功能性 archetype 必跑)：PASS — 無 serif display 標題、無 italic editorial chrome、無 "0X / SECTION" Roman numeral eyebrow。Engineering caps + tabular numerals + 圖示式 waveform = 功能性 archetype 純度保持。

### Zone map (1440 Console — single section, sub-zone tableau)
4 zones in 1440×900：

| Zone | Position | Size | Rank | Opacity (diagram) | 角色 |
|---|---|---|---|---|---|
| StationStrip | (16, 56) | 1408 × 56 | 2 | 0.55 | 識別 — 站名 + 3 readout |
| WaveformPane | (16, 144) | 1072 × 636 | **1 STAR** | 0.85 | 對話本身（雙軌示波器 + Solaris glow） |
| TelemetrySidebar | (1104, 144) | 320 × 724 | 3 | 0.30 | 遙測旁欄 — SIGNAL / TRANSIT / ORBIT / BAND |
| Composer | (16, 812) | 1072 × 56 | 4 | 0.15 | 起草下一段傳輸 |

Acceptance criteria：
- (1) Asymmetric variance：WaveformPane(1072) vs TelemetrySidebar(320) = **3.4×** 寬度差；Composer(56h) vs WaveformPane(636h) = **11×** 高度差 ✓
- (2) Edge anchoring：Station 鎖頂 / Sidebar 鎖右 / Composer 鎖底 / Wave 占左+中主 ✓
- (3) Star + rank：WaveformPane 視覺最重（Solaris 光暈 + 最大占比 + 唯一 accent）✓
- (4) Role variety：header / main / rail / footer-input 四種不同角色 ✓

ZoneMap-1440-Console reference frame 已在 §3.3 step 6 user-confirmed cleanup 後刪除。

## Figma 檔
- **fileKey**: `bDA9MWzNRM9My6grhlE8fj`
- **URL**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100
- **Console - 1440 (wrapper)**: `355:56`
- **StationStrip**: `356:54`（含 Station-Left `356:55` + Station-Readouts `356:58`）
- **BodyRow**: `357:54`
- **MainColumn**: `357:55`
- **Overlay-WaveformPane**: `357:56`
- **Composer**: `357:57`
- **TelemetrySidebar**: `357:58`
- **TimeAxis** (1px 中央水平軸): `358:54`
- **Top track bursts** (TX, 你 sent):
  - B1 T+18:04 (past): bars × 7 + ts `359:61` + msg `359:62`
  - B2 T+18:47 (past): bars × 7 + ts `359:70` + msg `359:71`
  - B3 T+19:18 (in-flight STAR, Solaris amber): bars × 7 + ts `359:79` + msg `359:80`
- **Bottom track bursts** (RX, 探測器):
  - B4 T+18:13 (past recv): bars × 7 + ts `360:61` + msg `360:62`
  - B5 T+19:02 (past recv): bars × 7 + ts `360:70` + msg `360:71`
  - B6 T+19:42 (awaiting, 40-50% opacity): bars × 7 + ts `360:79` + msg `360:80`
- **Solaris glow halo (behind B3)**:
  - Halo-Outer `362:54` (220px @ 5% opacity)
  - Halo-Mid `362:55` (110px @ 10% opacity)
  - Halo-Inner `362:56` (48px @ 20% opacity)
- **Telemetry sections**: Signal `364:54` / Transit `364:58` / Orbit `365:54` / Band `365:59` / Mission-Elapsed `365:65`
- **Local scene collection**: `VariableCollectionId:355:54` (`daily-013-scene`)
- **scene/solaris-amber**: `VariableID:355:55` (#D9A55E)

## Console breakdown

| Zone | 1440 size | Content | Pattern |
|---|---|---|---|
| StationStrip | 1440 × 56 | `STATION · DSN-VOY1   Voyager 1 — Heliopause Probe` (left) ／ `SIGNAL −152.4 dBm  ·  DISTANCE 23.81 LH  ·  LAST PING T+18:04:07` (right) | 單行 mission control 帶條 — caps tracked label + value 對偶；底部 1px color/border hairline |
| WaveformPane | 1120 × 788 | 中央時間軸（1px）+ 上下 TRANSMIT/RECEIVE band labels + 6 message bursts（3 top TX + 3 bottom RX，含 1 in-flight STAR + 1 awaiting） | Dual-track oscilloscope timeline — 每 burst 用 7 條 sine-envelope 直立 bars 表示一段「無線電脈波」；訊息正文（zh-TW）+ T+ timestamp 標在 burst 旁；in-flight burst 是 Solaris amber + 3 層光暈 |
| TelemetrySidebar | 320 × 844 | 4 sections（SIGNAL · LIVE / TRANSIT / ORBIT / BAND）+ 底部 MISSION ELAPSED tick | 細列工程 readouts — 每 section caps tracked label + h2 hero value 或 4-row caption；底部用 spacer + 鎖底；左 1px hairline 分隔 |
| Composer | 1120 × 56 | `TX  ·` eyebrow ／ `起草下一段傳輸  ·  Compose next packet · light-lag one-way 23 h 48 m` 草稿提示 ／ `↗  TRANSMIT` editorial text-CTA | 反 SaaS pill 的編輯式起草條 — 文字 link 取代按鈕、單行、頂部 1px hairline |

## Edit Pass 結果

### 10 sweeps（awwwards-rules §5）
- 5.1 Direct comparison：PASS（每 zone 回溯到 Commit 鎖定值）
- 5.2 AI-slop sweep：PASS（無 gradient text / glassmorphic / 3-card grid / reflex 橘 / "Send a message" SaaS copy）
- 5.3 Squint test：PASS（waveform 雙軌 + Solaris glow 是第一視覺，sidebar 為陪襯，station strip 為 chrome）
- 5.4 State coverage：N/A — Composer 用 editorial text-CTA 而非 Button-* component，未走 4-state variant 路線（記入 known caveat）
- 5.5 Fact-uniqueness：PASS — T+ stamps × 6 unique、SIGNAL / TRANSIT / ORBIT / BAND 各承擔不同 readout、DSN-VOY1（mission 名）vs DSS-14 Goldstone（ground station）分工
- 5.6 Heuristic gut-check：~30/40（semantic reframe + Tarkovsky reference + 自製 Solaris amber 全部 SOTD-tier；扣分點 — 沒做 375 / 沒做 state variants）
- 5.7 Severity tagging：原有 P1 token drift（padding 字面 20/28/32 + sidebar itemSpacing 32 非 token）+ P2 B6 opacity 沒生效（F11 paint opacity reset）→ Edit Pass 修完 0 P0 / 0 P1
- 5.8 Polish details：PASS（修完後 padding 全 token-bound、B6 awaiting 視覺確實「pending」）
- 5.9 Don't perfect one corner：PASS（4 zones 質感一致，無局部精修）
- 5.10 Accessibility sweep：PASS（fg/bg/fg-muted/solaris-amber 在 dark bg 上對比 ≥7:1、無 focus-ring 因無 interactive component）

### Known caveats
- **無 375 行動斷點**：user 拍板「跳過 375，匹配 daily-001~012 單一斷點的約定」。Daily UI 系列當前 portfolio 慣例為單 1440。
- **無 state variants**：Composer 採 editorial text-link CTA + placeholder text 取代 SaaS pill button + input field component。沒有跑 Button-* 4-state composition；hand-off 若要走 codegen，需自行補 default/hover/focused/disabled 四態。
- **Solaris amber 來自 local scene variable**，非 publisher token。意圖性 — publisher v0.4 中性化 accent 後，劇本需要的暖色屬於這個檔案專屬而非 design system。
- **無 web/ 實作**：依 CLAUDE.md 2026-05-15 起的新 default（Figma + notes + takeaway + screenshots 即視為完成）。

### audit.js
未跑 mechanical sweep（功能 archetype + 視覺已完成 10-sweep + 手動 token-drift 修正後 0 literal 用於 fill / padding / itemSpacing — Solaris amber 為唯一 RGB literal，且綁定 local scene var）。
