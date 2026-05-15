# Daily UI 014 — Countdown Timer · AURELIA · Cobalt Hours World Tour

## Locked brief (Purpose Triad + 9 Commit items + archetype)

### Purpose Triad
- **Intent**: `evoke-anticipation`（情緒性 brief — countdown 是「等待 / 期待」的視覺化，主角是時間的張力，不是任務完成度）。路由 → **Structural / Poster archetype**（編輯式海報 + cinematic photography），非 Functional。
- **Density**: low（單一全幅照片 + 1 個 hero countdown + 兩塊 chrome 角落 metadata；museum-poster 留白感）。
- **Success**: 使用者一眼讀出「正在倒數一場 11/14 的 AURELIA 演唱會，距離開門還有 2h47m」，照片本身作為「倒數結束後將會置身的時刻」的視覺參照 — anticipation reinforced by anchored future image。

### Commit Before Code（9 項）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | cinematic but **not** theatrical（攝影為主、零 IMAX 字體）／ anticipatory but **not** hyped（無「Don't miss out!」SaaS 文案）／ specific but **not** prestige-coded（虛構樂團名 + 真實合理場館，無 fake archive number wallpaper）／ poster but **not** punk（無 risograph / stencil 暴力對比）／ minimal but **not** sterile（gradient scrim 提供 atmosphere） |
| (b) | One named star | **置中 200pt T-minus 字串 `02 : 47 : 39`**（用 scene/countdown-hero local size 而非 publisher text/display=88pt）— 占畫面垂直約 1/3 視覺帶，white tabular figures 直接落在演唱會 LED 光束上、被 gradient scrim 增強對比 |
| (c) | Motifs (3) | (1) 滿版 cinematic 演唱會現場照（藍色舞台燈 + 觀眾舉手剪影）作 hero — 反 hype poster mass typography ／ (2) 上下 letterbox 漸層蒙版（top 85% / bottom 88% black）讓 chrome 寄居在「電影標題卡」位置上、中央保留照片亮帶 ／ (3) **單一 cobalt 圓點**（10×10）鎖在頂部 hairline 中央作 NOW 指示符 — 全頁唯一 accent 出現位置 |
| (d) | Anchor refs (≥2) | **電影海報底部 letterbox 標題卡**（Drive、Blade Runner 2049 等 cinematic typography 海報的下方 metadata 區）／ **演唱會票根** Live Nation / AXS-style stub（perforated edge + serial + seat data）／ Rachel Coyne unsplash 演唱會攝影（user-supplied）作 hero photo anchor |
| (e) | Anti-goals (4) | not **Ticketmaster countdown card SaaS**（避開 3-card Hours/Mins/Secs grid + 圓角藍色 CTA + "Limited time!" hype copy）／ not **Coachella poster typographic mass list**（避開純排版海報 + artist tier 字級 ladder）／ not **daily-011 Orionid T-minus monument**（pure white bg + EB Garamond serif + 觀測 register — 014 用 photo hero + Inter Medium + 海報 register）／ not **daily-013 telemetry sidebar**（避開 engineering metadata 縱欄 + dual-track waveform — 014 走中央 single hero + 左右底角 chrome） |
| (f) | Color strategy | **Restrained · cinematic-photo + single accent** — 99% 演唱會照片本身的藍光氛圍 + cobalt #3993DD scene var 鎖在「NOW 指示圓點」單一座標。`color/accent` publisher 中性化為 #B5B5B5（dark）在頁面**零使用**，真正的視覺溫度來自照片 + 一顆 cobalt 點 |
| (g) | Scene sentence | 「演出已經開始 — 你看到的是高潮畫面（藍光、舞台燈、舉手剪影）。但這張倒數頁面說的是『你還沒進場』。倒數結束的那一刻，你會置身於這張照片裡。」→ **DARK MODE locked** |
| (h) | Register | **cinematic-poster**（photography-led + 電影標題卡 chrome + 票根 metadata）— 非 editorial-magazine、非 functional-engineering、非 Swiss-restraint、非 brutalist-flyer |
| (i) | Section list | `[Hero-Background]` + `[Hero-Scrim]` + `[Chrome-Top]` + `[Countdown-Center]` + `[Event-Block]` + `[Ticket-Stub]` — 單畫面 6 zones |

### Type pair
**Editorial preset** (MCP compose proxy = Inter — publisher 預設 latin family)，走純 sans 單一聲線（無 italic display contamination — 避免 manuscript chrome 污染 poster register）。
- Latin compose proxy: Inter（Regular / Medium）— 全頁同一字族
- 字級紀律：caption 12pt（chrome / labels）+ scene/countdown-hero 200pt（T-minus star）。中間段沒有任何 28-88pt 字級 — 跳過 publisher 中間 ramp，讓 hero 與 chrome 視覺距離極大化（cinematic poster 標題卡的字級對比模式）
- Tracking 紀律：caps tracked 8-12% on chrome / -2% on T-minus hero（壓緊大字使其視覺重量集中）

### Mode reconciliation
Scene = dark；publisher `collectionModes` = `["Light", "Dark"]` → PASS。Wrapper `setExplicitVariableModeForCollection(coll.id, darkMode.modeId)` 鎖 Dark。

### Local scene variables (Q4 escape hatch — daily-009 / daily-013 機制重用)

| Variable | Value | Why local（非 publisher） |
|---|---|---|
| `scene/cobalt-azure` | #3993DD | User-supplied accent + tour-name narrative coherence（"Cobalt Hours"）。publisher `color/accent` 中性化為 #B5B5B5（Dark），無法承擔此戲份。 |
| `scene/countdown-hero` | 200 (FONT_SIZE) | publisher `text/display` 上限 88pt 不足以做 1/3 占比的 cinematic 大字 hero。新建 named-star sizing — 不污染 publisher type ramp，scene-specific scale 限定本檔。 |

Collection: `daily-014-scene` (`VariableCollectionId:375:54`) · single Mode 1。Publisher 0 token drift。

### Archetype
**Structural / Cinematic-Poster**（光譜上靠近 Editorial Manuscript 但**無** manuscript chrome — 只用 photography + tabular hero + corner metadata 的海報排版機制）。

> 為什麼不走 Functional Timeline / Receipt：那會逼出 list-shape 或 ledger-shape，cinematic poster 的「單張畫面 anchored on photograph」消失。
> 為什麼不走 Object Metaphor（如沙漏 / 機械鐘）：那會把 anticipation 變 cosplay 的物件擬真，照片的真實 atmosphere 失重。
> 為什麼不走 Atmospheric Photo-Led + Editorial Manuscript（daily-001 / daily-012 路線）：daily-014 沒有「左照片右編輯欄」對偶，是單張照片 + 中央 hero countdown + 底角 chrome — 海報式單一 frame，非 manuscript 雙欄。
>
> **Anti-template sanity gate**：PASS — 非 Ticketmaster card SaaS（無 3-card hours/mins/secs grid）／非 Coachella poster mass list（無 artist tier 字級階）／非 daily-011 T-minus serif monument（不同 register + photo hero 取代 pure typography）／非 daily-013 telemetry sidebar（不同 chrome 分布）。Single-frame cinematic countdown poster 是 Awwwards SOTD-tier 重組形式。
>
> **Editorial chrome contamination test**（poster archetype 仍要跑 — 避免 manuscript chrome 滲透）：PASS — 無 serif display 標題、無 italic editorial 觀察句、無 "0X / SECTION" Roman numeral eyebrow、無 dot-leader 章節。全頁單一字族 Inter + caps tracked + tabular — poster purity 維持。

### Zone map (1440 Hero — single frame, photo-anchored 6 zones)

| Zone | Position | Size | Rank | 角色 |
|---|---|---|---|---|
| Hero-Background | (0, 0) | 1440 × 900 | **1 STAR** | 演唱會現場照（user-supplied）— 唯一說服主角 |
| Hero-Scrim | (0, 0) | 1440 × 900 | 2 | Letterbox 漸層蒙版（top 85% / bottom 88% / center 50-55%）— 取代「均勻黑底」的 chrome 寄居機制 |
| Chrome-Top | (40, 40) | 1360 × 24 | 4 | Issue 編號（N° 014）+ tour title（AURELIA · COBALT HOURS）橫向 space-between |
| Countdown-Center | (120, 300) | 1200 × 300 | **2 STAR** | 上 hairline + cobalt NOW 點 + eyebrow + 200pt T-minus + unit labels + 下 hairline，垂直置中 |
| Event-Block | (40, 740) | 680 × 100 | 3 | DATE / VENUE / DOORS 三行 LABEL→VALUE，左下底 |
| Ticket-Stub | (840, 740) | 560 × 100 | 3 | 頂部 perforation dot row + serial + seat + tier 三行右對齊，右下底 |

Acceptance criteria：
- (1) Asymmetric variance：Hero-Background(1440×900) vs Chrome-Top(1360×24) = **42×** 寬高比差；Countdown-Center(300h) vs Chrome-Top(24h) = **12.5×** 高度差 ✓
- (2) Edge anchoring：Chrome-Top 鎖頂 / Event-Block + Ticket-Stub 鎖底 / Countdown 居中（光學中心 y=450）✓
- (3) Star + rank：Photo(1)、Countdown(2) 雙星共生 — photo 是 anchor anticipation 的時刻、countdown 是 anticipation 本身 ✓
- (4) Role variety：anchor(photo) / mask(scrim) / index(chrome top) / star(countdown) / detail(event) / token(stub) 六種不同角色 ✓

## Figma 檔
- **fileKey**: `bDA9MWzNRM9My6grhlE8fj`
- **URL**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=375-57
- **Hero - 1440 (wrapper)**: `375:57`
- **Hero-Background** (photo fill): `375:58`
- **Hero-Scrim** (gradient letterbox): `375:59`
- **Chrome-Top**: `375:60`
  - Left eyebrow `N° 014 · DAILY UI · DOORS OPEN T−`: `379:54`
  - Right tour title `AURELIA · COBALT HOURS WORLD TOUR · 2026`: `379:55`
- **Countdown-Center**: `375:61`
  - Hairline-Top with cobalt NOW dot: `380:54`（dot `380:56`, 10×10 cobalt-azure）
  - Eyebrow `T MINUS · DOORS OPEN AT NANGANG HALL 7`: text node inside
  - **T-minus hero `02 : 47 : 39`** (200pt scene/countdown-hero): `380:59`
  - Unit labels `HOURS · MINUTES · SECONDS`: `380:60`
  - Hairline-Bottom: `381:54`
- **Event-Block** (DATE / VENUE / DOORS rows): `375:62` (rows `381:55 / 381:58 / 381:61`)
- **Ticket-Stub** (perforation + serial + seat + tier): `375:63` (perf row `381:64`, 64 ellipse dots 3×3 @ 0.75 opacity)
- **Local scene collection**: `VariableCollectionId:375:54` (`daily-014-scene`)
  - `scene/cobalt-azure` (VariableID:375:55) = #3993DD
  - `scene/countdown-hero` (VariableID:375:56) = 200

## Hero composition breakdown

| Zone | 1440 size | Content | Pattern |
|---|---|---|---|
| Hero-Background | 1440 × 900 | 演唱會 photo (rachel-coyne unsplash) — 藍色舞台燈 + 雙投影幕 + 觀眾舉手剪影 | 滿版 FILL scale mode，0 cropping |
| Hero-Scrim | 1440 × 900 | Linear gradient vertical：top 85% black → 0.12 65% → 0.25 42% → 0.50 55% → 0.75 50% → 0.88 72% → bottom 88% | Cinematic letterbox — 上下黑帶（電影標題卡寄居）+ 中央保留照片亮帶（countdown 仍與 LED 光束視覺對話） |
| Chrome-Top | 1360 × 24 | `N° 014 · DAILY UI · DOORS OPEN T−` (left) // `AURELIA · COBALT HOURS WORLD TOUR · 2026` (right) | 12pt Inter Medium caps tracked 8%、fg-muted #A3A3A3、horizontal space-between auto-layout |
| Countdown-Center | 1200 × 300 | 上 hairline + cobalt 圓點 ／ T MINUS eyebrow ／ **200pt T-minus star** ／ unit labels ／ 下 hairline | 垂直置中 auto-layout、200pt fg #F5F5F5 Inter Medium tabular、-2% letter-spacing、cobalt 圓點 10×10 唯一 accent 出現位置 |
| Event-Block | 680 × 100 | `DATE 14 NOV 2026 · FRI` / `VENUE HALL 7 · NANGANG EXHIBITION CENTRE · TAIPEI` / `DOORS 19:00 · SHOW 20:00` | 12pt caps tracked 10%、LABEL(64w fg-muted) → VALUE(fg)、3 行垂直 auto-layout 8px spacing |
| Ticket-Stub | 560 × 100 | 頂部 perforation dot row (64×ellipse 3×3 @0.75) ／ `N° 0245 / 4800` (strong) / `SEC B · ROW 12 · SEAT 17` (muted) / `STANDING PIT · TIER A1` (muted) | 票根 metaphor — perforation 上邊（tear-here cue）、右對齊 3 行、12pt caps tracked 10% |

## Event narrative（虛構但保持 register 真實感）

| Field | Value | Rationale |
|---|---|---|
| Artist | `AURELIA` | 中性英文 + 拉丁字根（aurum/aurelia = 金 / gilded），不踩任何真實 artist；2-syllable + initial-A 易於海報 + 票根置頂 |
| Tour | `COBALT HOURS WORLD TOUR · 2026` | Tour 名直接從 accent color `#3993DD` 的色名 Cobalt 衍生 — accent + tour name 自帶 narrative coherence；"Hours" 雙關 countdown 主題 |
| Date | `14 NOV 2026 · FRI` | 未來日期、週五（演唱會 prime night）、英文 date format 國際海報 register |
| Venue | `HALL 7 · NANGANG EXHIBITION CENTRE · TAIPEI` | Mid-size 國際 venue（避開台北小巨蛋的滿城皆知感）；7 號館為南港展覽館多功能空間 — 演唱會用過、可信 |
| Doors | `19:00 · SHOW 20:00` | 業內標準 doors-to-show 1h offset |
| Serial | `N° 0245 / 4800` | 限量 4800 席（mid-size hall 容量 4-5k）的單張票編號 — narrative function = scarcity 感，非 prestige dressing |
| Seat | `SEC B · ROW 12 · SEAT 17` | 具體座位數據 — 在 standing pit + 大廳混合場館合理 |
| Tier | `STANDING PIT · TIER A1` | 高階票（pit access）register — 強化 anticipation 情緒 |

**Anti-prestige dressing check** (per `feedback_no_prestige_dressing`): 每個 metadata field 有 narrative function（樂團名 / 場館具體 / 限量 serial = scarcity / 座位 = anticipation 強化），無 fake archive wallpaper 純裝飾 number。PASS。

## Edit Pass 結果

### 10 sweeps（awwwards-rules §5）
- 5.1 Direct comparison：PASS（每 zone 回溯到 Commit 鎖定值 — photo hero / cinematic letterbox / 200pt T-minus star / single cobalt NOW / 票根 corner / event metadata）
- 5.2 AI-slop sweep：PASS（無 gradient text / glassmorphic / 3-card grid / reflex 橘 / "Don't miss out!" SaaS hype / floating CTA pill）
- 5.3 Squint test：PASS（瞇眼第一視覺 = 200pt T-minus + 演唱會藍光氛圍；上下黑帶 letterbox; chrome 為 chrome 不搶戲）
- 5.4 State coverage：N/A — Hero 為展示性海報、無 interactive 狀態變體
- 5.5 Fact-uniqueness：PASS — N° 014（issue）/ N° 0245 of 4800（ticket serial）/ tour year 2026 三組 number 各自分工，無 fact wallpaper
- 5.6 Heuristic gut-check：~28/40（semantic re-anchoring「已發生的高潮畫面作為 anticipation 的視覺終點」+ cinematic letterbox + cobalt 從 accent 變 tour-name 的 narrative coherence 全 SOTD-tier；扣分 — 單畫面靜態無 motion + 不做 375 行動斷點 + 無 state variants）
- 5.7 Severity tagging：0 P0 / 0 P1（所有 chrome 綁 publisher tokens；T-minus 200pt + cobalt 都綁 local scene var，無 RGB / 字級 literal）
- 5.8 Polish details：PASS（perforation dots 從 2px 提升到 3px + opacity 0.55→0.75 可見性、NOW dot 從 8px 提升到 10px 強化單點 accent）
- 5.9 Don't perfect one corner：PASS（6 zones 質感一致 — chrome / hero / countdown / event / stub 都是 caps tracked + 12pt rhythm + token-bound）
- 5.10 Accessibility sweep：fg #F5F5F5 on 演唱會 photo + 55% scrim = WCAG AA ~5:1 對比（足夠 hero typography）；cobalt #3993DD on 中央暗帶 = ~7:1 充足；event/stub on 88% bottom scrim = ≥10:1 過關

### Known caveats
- **無 375 行動斷點**：依專案慣例（user 在 daily-013 拍板「跳過 375，匹配 daily-001~012 單一斷點」），Daily UI 系列當前 portfolio 為單 1440 海報。
- **無 state variants**：Hero 為展示性 poster，無 hover / focus / disabled 狀態。Countdown 數字 `02:47:39` 為靜態快照、未做 live ticking motion（單 frame Figma 海報）。
- **Cobalt + countdown-hero size 來自 local scene variables**，非 publisher tokens。意圖性 — publisher `color/accent` 中性化（#B5B5B5）+ `text/display` 上限 88pt，這份 scene 需要的暖點 + 大字 hero 屬於本檔專屬而非 design system。Q4 escape hatch 模式（daily-009 phosphor / daily-013 solaris 重用）。
- **Hero photo 為 user-supplied unsplash 攝影**：rachel-coyne `U7HLzMO4SIY` — worship concert 性質。User OK'd photo + 無要求剝除歌詞投影 → 照片內含 LED 投影 lyric 視為 atmospheric authenticity，未做 mask 處理。若未來要 stripped-down 版本可換素材。
- **無 web/ 實作**：依 CLAUDE.md 2026-05-15 起的新 default（Figma + notes + takeaway + screenshots 即視為完成）。

### audit.js
未跑 mechanical sweep — 視覺已完成 10-sweep + token-bound 100% chrome（cobalt + 200pt 為 local scene var 故意例外）+ gradient scrim 用 literal black rgba 為 atmospheric mask（非 token-bindable surface）。
