# Daily UI 100 with Claude

100 天設計挑戰 — 每題用 [`awwwards-figma`](https://github.com/) 流程在 Figma 編排出 Awwwards 級別的編輯式設計，再落地成可用的 HTML / CSS / JS。

> 不是「設計 SaaS template 100 次」，而是讓每張畫面都帶得走一個可重用的設計機制（mechanism, not surface）。

---

## 進度

| # | 題目 | 方向 | Figma 節點 |
|---|---|---|---|
| 001 | Sign Up | Atmospheric Photo-Led + Editorial Manuscript（左 cinematic 媒體 + 右編輯式表單） | [`41:15`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=41-15) |
| 002 | Credit Card Checkout | Vault / Mechanical（單欄編輯文件 + dial-window 卡號 + Hold-to-Authorise） | [`54:6`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=54-6) |
| 004 | Calculator | Kinetic Tape Stream — Brew Log（橫向紙帶歷史 + 選中列 outline+◉+✓ + r=1.38 serif moment） | [`69:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=69-2) |
| 005 | App Icon | Tide · 潮汐記號（深底 page + Light-mode override icon canvas + 3 件幾何 horizon/17 sine dots/anchor + 7 級多尺度條） | [`83:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=83-2) |
| 006 | User Profile | Ticker Biography — 編年人物特寫（左彩色 editorial portrait + 右橫向時間軸 4 節點 + NOW ◉ 唯一 accent + EB Garamond Italic pull quote） | [`91:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=91-2) |
| 007 | Settings | Account Ledger — 雙欄記帳本（dot-leader 點線串連 label→value · Roman I/II/III 章節 · 每節 EB Garamond Italic margin note · Apply「簽署」CTA 唯一 accent） | [`107:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=107-2) |
| 008 | 404 Page | A Small Disappearance — 4 格漫畫敘事（`click → fall → wander → home`）· Stick-figure 反 mascot 線稿（DALL·E 生成 + pre-crop 移除 AI 自畫的 panel 框）· Restrained accent 限定 Panel 04 narrative-resolution + CTA arrow · Editorial CTA = arrow + text-link 取代 SaaS pill button | [`117:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=117-2) |
| 003 · 009 – 100 | … | 進行中 | — |

---

## 設計系統

所有顏色 / 字級 / 間距 / 圓角 / 容器寬度 / 斷點都綁定到 **`minimal-ds-template`**（Figma community library）的 36 個 design tokens。

`minimal-ds` 刻意把容器級元件（Card / Modal / Hero / Navbar）排除在外 —— 編輯級判斷留給每題重新組合，避免落入 SaaS template 陷阱。

| 類別 | Tokens |
|---|---|
| Color | `bg` `fg` `accent` `border` `bg-alt` `fg-muted` `accent-fg` `surface`（Light / Dark 雙模式） |
| Type | `family/latin` `family/cjk` · `display` `h1` `h2` `body` `caption` · `weight/regular | medium | bold` · `leading/tight | loose` |
| Space | `space/1 … space/6` |
| Radius | `radius/sm | md | lg` |
| Layout | `max-w/xs | sm | md | lg` · `bp/sm | md | lg` |

---

## 每題的資料夾結構

```
daily-XXX/
├── notes.md           # 鎖定的 brief（Purpose Triad + 7 Commit items + archetype）+ Edit Pass 紀錄
├── takeaway.md        # 蒸餾後的 mechanism card（可反向重用 / 反 anti-pattern）
├── screenshots/       # Figma 匯出最終 PNG
├── assets/            # （可選）AI 生成 / 攝影 / 手繪等 source 素材原檔
└── web/               # 對應的 HTML / CSS / JS 落地實作
    ├── index.html
    ├── styles.css
    ├── script.js
    └── assets/        # （可選）web 直接引用、已 crop / 壓縮 過的 production 版
```

---

## 本地預覽

每題的 `web/` 是 vanilla HTML/CSS/JS，沒有 build step。任一靜態伺服器都可開：

```bash
cd daily-002/web
python3 -m http.server 8000
# 或者用 VSCode Live Server 直接 right-click → Open with Live Server
```

開瀏覽器到 `http://localhost:8000`。

---

## Figma 單一檔案

所有 100 題都在同一份 Figma 檔案、每題各一個 frame：

🔗 **<https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100>**

Frame 命名慣例：`Daily 001 — Sign Up - 1440`、`Daily 002 — Credit Card Checkout - 1440` …

---

## 機制總覽（Takeaway Index）

從每題蒸餾出的可重用機制 — 細節見對應 `daily-XXX/takeaway.md`：

| # | Mechanism | 何時可重用 |
|---|---|---|
| 001 | Mirrored chapter-prefix rhetoric（左 `DAILY UI ／ 001` + 右 `01 ／ 開立帳號`） | 任何媒體 panel + 表單 panel 並置的編輯式 conversion 頁面 |
| 002 | N-scale 編號 echo（plate / receipt / footer / 詩意位置 四尺度） · Dial-window slot 替代平鋪 input · Centered CTA cluster | 高金額 conversion 終點 / 有可炫耀編號（edition / batch / cask）/ 需要 ceremonial 而非 functional moment-form |
| 004 | History-as-protagonist Tape Ribbon · Selection-by-marking（outline + ◉ + ✓）取代字級跳級 · N-scale `r 1.38` 五尺度 echo · Single-field setRangeFontSize 數值+單位 | 迭代歷史 + 從候選中認證一個（試色 / 試樣 / variant ranking / 選 master take）/ 結果不需重新計算只需挑出一個存檔的場景 |
| 005 | Brand-mark-as-Typographic-Hero protagonist · Dark page + Light-mode override child icon canvas（同樹雙模式對比）· 多尺度 strip + 階梯式 dot-count 退化 self-prove 5px 生存 · Accent uniqueness 用 conceptual location 定義（page chrome 0 accent） | 任何 brand identity reveal / design asset 多尺度生存證明 / "page 物質 vs object 物質" 雙層對比 / speculative design 虛構物 discoverable-as-real |
| 006 | Portrait-as-anchor + 軌跡橫向延伸 雙主體版式 · 時間單向性用「過去 outline ● → NOW solid ◉」填色狀態切換 · 真實 metadata（Joined / Based）取代 cosplay 座標 · imageFilters saturation 微調 editorial（zh-TW context 永不 full b/w — feedback memory `feedback_no_bw_portraits_zh.md`） | 任何「人 × 軌跡」profile / about / team / case-study 對開頁版式 / 需要時間單向性的可視化 / 編輯式 portrait page |
| 007 | Dot-leader 點線連接 label→value（Figma `createLine() + dashPattern [1, 5]`、web `border-bottom: dotted` + baseline 對齊）· Roman 章節編號 + Italic margin note 「編輯旁白」紀律 · Audit footer 真實 review metadata（不裝高級）· Accent atomic uses = 1（Apply 唯一)— 系列最克制 | 任何 form-as-document / 合約 / 章程 / 訂閱頁 / 設定頁 / 表格式內容需要「印刷頁」氣質而非 SaaS list 慣性 |
| 008 | Sequential 4-panel comic strip 用 Cinematic Scroll archetype（scroll = 揭示 = 時序敘事的工具）· Stick-figure 反 mascot 線稿（具體 = 規避 friendly-mascot 陷阱）· Accent budget = 1 reserved 顏色 + 1 region（橘紅鎖在 narrative-resolution beat，看到色 = 看到出口）· Editorial CTA = arrow + text-link 取代 SaaS pill button · Chrome regions 各自承擔不同 job（top plate = identity / footer = system signal，永不重複同一 fact）· AI illustration hand-off 紀律（DALL·E prompt 共用 style baseline + 同 seed + pre-crop 移除 AI 自畫框） | 任何 sequential storytelling / multi-beat reveal / 中斷或錯誤狀態頁（404 / maintenance / empty state）/ 需要 character-driven 但要避開 Memoji-Dropbox 陷阱的場合 |

---

## License

MIT — 見 [`LICENSE`](./LICENSE)。
