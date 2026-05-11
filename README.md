# Daily UI 100 with Claude

100 天設計挑戰 — 每題用 [`awwwards-figma`](https://github.com/) 流程在 Figma 編排出 Awwwards 級別的編輯式設計，再落地成可用的 HTML / CSS / JS。

> 不是「設計 SaaS template 100 次」，而是讓每張畫面都帶得走一個可重用的設計機制（mechanism, not surface）。

---

## 進度

| # | 題目 | 方向 | Figma 節點 |
|---|---|---|---|
| 001 | Sign Up | Atmospheric Photo-Led + Editorial Manuscript（左 cinematic 媒體 + 右編輯式表單） | [`41:15`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=41-15) |
| 002 | Credit Card Checkout | Vault / Mechanical（單欄編輯文件 + dial-window 卡號 + Hold-to-Authorise） | [`54:6`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=54-6) |
| 003 – 100 | … | 進行中 | — |

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
└── web/               # 對應的 HTML / CSS / JS 落地實作
    ├── index.html
    ├── styles.css
    └── script.js
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

---

## License

MIT — 見 [`LICENSE`](./LICENSE)。
