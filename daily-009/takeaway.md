---
archetype: Bento Asymmetric (single-screen control surface)
purpose_triad: { intent: feel-atmosphere + acquire-info, success: 3秒辨識 1986 廣播控制室 (not Spotify clone)，meters 動態讓使用者願意停留, density: high }
palette_recipe: Drenched — 磷光綠單一色相 (#6efeb0 / #388765 / #23503c) on 深磷光黑 (#081109)；amber (#ffaa00) 只在 peak alarm / 當前曲目 / ON AIR / Play 主鍵
type_pair: IBM Plex Mono (Regular/Medium/Bold) — 工程 callouts + 標題；VT323 — CRT bitmap 數字 (時間碼 / dB / 時長)；Noto Sans TC — CJK
motifs:
  - "CRT scanline 橫向條紋 — 4px spacing / ~14% opacity 黑色，覆蓋整個 frame"
  - "Segmented LED bars — 每根 spectrum bar 由 N 個 10px 高 segments 構成 (上方 amber peak ticks / 中段亮綠 / 下段暗綠)，模擬廣播機房 LED 階梯"
  - "Engineering callouts — JST 時間戳 / MOON-28018 catalog no / BVE-9000 機型 / NS-1000M monitor speaker — 把『廣播機房』作為敘事 anchor，非裝飾"
why_it_works: |
  Synthwave / 80s 80% 的網路範例都是 Miami sunset palm trees + Outrun chrome grid + 紫粉漸層。
  那不是 awwwards-tier，那是 stock template。
  
  繞開模板的關鍵不是「不要做 80s」而是「換 80s 的場景」：
    Miami Vice → 1986 Tokyo broadcast control room
    DeLorean → Sony BVE-9000 broadcast editor
    Aesthetic vaporwave → Mariya Takeuchi city-pop 工程嚴謹感
  
  這個轉場讓所有元件天然落入位：
    - 字體必然是 IBM Plex Mono (工程感) + VT323 (CRT bitmap) — 不能用 SF Pro
    - 色彩必然是 drenched 單一磷光綠 — 不能用紫粉雙色
    - 內容必然是 dB 刻度 / JST 時間 / 機型編號 — 不能用 Lorem Ipsum
    - Star 必然是 spectrum + VU meters — 工程師看的東西

  Bento Asymmetric 不是平均分格 3-card row。
  Spectrum 是 hero 横跨全寬（the star），下面三個 cells 權重不同
  (NowPlaying 大 / TrackList 中 / VUColumn 小)。每個 cell 大小由內容權重決定。

figma_url: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=152-10
mechanism_cards:
  - name: "Scene-shift to escape stock template"
    rule: "當 brief 命中 80s/synthwave/retro 等 trending 美學時，先把『場景』從常見模板（Miami sunset / palm / sunset grid）shift 到一個具名的 1986 場景（Tokyo broadcast / Yamaha 監聽室 / city-pop 後台），讓所有設計決策被場景 anchor 而非 mood-board pinterest 採樣。"
    reason: "Stock 模板是 mood-board 採樣的平均值。一個具名場景強迫每個元件落入位（字、色、內容、star），自動繞開平均值。"
  - name: "Drenched mono-hue palette + single alarm accent"
    rule: "整套 UI 使用同一 hue 家族 (此處磷光綠 6efeb0/388765/23503c)，所有 fg/text/border/bar 都吃同色不同明度。Amber 只保留給 alarm 事件 (peak / current / ON AIR / 主 CTA)，禁止做裝飾。"
    reason: "編輯級 vs SaaS template 的差別常常在 palette layer 數。Drenched 砍掉裝飾色彩位，留下的每個 accent 都自帶語意（看到 amber = 警示 / 主動）。"
  - name: "Segmented-LED bars 取代 smooth gradient bars"
    rule: "Spectrum / VU 不畫 smooth gradient bar，而是 stacked N×10px segments 帶 2px gap。每根 bar 由（上方紅 alarm / 中段亮 / 下段暗）三段組成模擬廣播機房 LED 階梯。"
    reason: "Smooth gradient = 現代 Spotify; segmented LED = 1986 broadcast hardware。視覺感受差距巨大，幾何複雜度幾乎一樣。"
  - name: "Mixed mono-type system (engineering + bitmap + CJK)"
    rule: "工程 UI 不要全部 mono 同字體；至少 3 個角色：(a) IBM Plex Mono — 標題與 callouts (Regular/Medium/Bold)；(b) VT323 bitmap — 純數字 readouts (時間 / dB / 時長)；(c) Noto Sans TC — CJK。同 monospace 家族不同 face 形成『廣播機房有三台 CRT』的感覺。"
    reason: "全部單一 mono 變單調 (terminal); 全部不同 type 變亂。同家族不同 face 留住工程感同時製造視覺節奏。"
  - name: "Geometric icons not unicode glyphs for transport controls"
    rule: "Media transport icons (rewind/prev/play/next/ff) 必須由 figma rectangles + vectors 手繪，不要用 unicode `⏮ ◂◂ ▶ ▸▸ ⏭` — 因為這些字元混搭時跨字體 render 差異大 (⏮ 在某些 OS 是 colored emoji，◂ 是純 glyph)，破壞單色紀律。"
    reason: "圖標一致性是『手工 vs 拼接』的辨識點。手畫 5 個三角形 + bar 比測試 30 個字體渲染來得便宜。"
  - name: "Local scene variable collection for palette overrides (Q4 escape hatch)"
    rule: "minimal-ds Dark 模式發布的是中性深色 palette；如場景需要特定色相（如磷光綠 CRT），不要 hardcode hex（會被 Edit Pass §3.3 P1 drift 抓到），改為建立 local variable collection (e.g., `Daily009-Scene` / mode `CRT`) 包含 scene-specific tokens，所有 fill/stroke 透過 setBoundVariable 綁到這個 local collection。"
    reason: "保留 token discipline (100% bound, 0 drift)，同時取得 scene-specific palette 自由度。圖層 inspector 仍見變數名而非數字，便於日後微調。"
---
