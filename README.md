# Daily UI 100 with Claude

100 天設計挑戰，用 Figma 跟 Claude 一起做。

---

## 主題

**Editorial × Atmospheric — mechanism, not surface.**

每一題不做 SaaS template，改用編輯式 / 檔案式 / 工業文件式的版面來重新詮釋。
目標是讓每張畫面都帶得走一個可重用的設計機制，而不是再生一張流行樣式的截圖。

## 方向

- **Figma 優先**：所有題目先在同一份 Figma 檔案排版，再決定要不要落地成程式。
- **Token-bound**：顏色 / 字級 / 間距 / 圓角 / 容器寬度 / 斷點都綁 `minimal-ds-template` 36 個 design tokens。
- **`web/` 是可選的**：2026-05-15 起新題目不預設做網頁實作，停在 Figma + `notes.md` + `takeaway.md` + `screenshots/`。
- **Anti-template**：每題明示 anti-goals，避免落入 SaaS / 復古 / 風格模板的預設陷阱。

---

## 進度

| # | 題目 | Figma 節點 |
| --- | --- | --- |
| 001 | Sign Up | [`41:15`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=41-15) |
| 002 | Credit Card Checkout | [`54:6`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=54-6) |
| 004 | Calculator | [`69:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=69-2) |
| 005 | App Icon | [`83:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=83-2) |
| 006 | User Profile | [`91:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=91-2) |
| 007 | Settings | [`107:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=107-2) |
| 008 | 404 Page | [`117:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=117-2) |
| 009 | Music Player | [`152:10`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=152-10) |
| 010 | Social Share | [`181:2`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=181-2) |
| 011 | Flash Sale / Countdown | [`238:51`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=238-51) |
| 012 | E-Commerce (Single Item) | [`344:54`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=344-54) |
| 013 | Direct Messaging | [`355:56`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=355-56) |
| 014 | Countdown Timer | [`375:57`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=375-57) |
| 015 | On/Off Switch | [`387:57`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=387-57) |
| 016 | Pop-Up / Overlay | [`404:55`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=404-55) |
| 017 | Email Receipt | [`436:59`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=436-59) |
| 018 | Analytics Chart | [`467:55`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=467-55) |
| 019 | Leaderboard | [`503:54`](https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=503-54) |
| 003 · 020 – 100 | 進行中 | — |

每題的詳細 brief 跟蒸餾出的機制見 `daily-XXX/notes.md` 與 `daily-XXX/takeaway.md`。

---

## 資料夾結構

```
daily-XXX/
├── notes.md           # 鎖定的 brief + Edit Pass 紀錄
├── takeaway.md        # 蒸餾後的可重用 mechanism
├── screenshots/       # Figma 匯出最終 PNG
├── assets/            # （可選）AI / 攝影 / 手繪 source
└── web/               # （可選）對應 HTML / CSS / JS
```

## 本地預覽

`web/` 是 vanilla HTML/CSS/JS，沒有 build step：

```bash
cd daily-002/web
python3 -m http.server 8000
```

## Figma 檔案

所有 100 題在同一份檔案：
<https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100>

---

## License

MIT — 見 [`LICENSE`](./LICENSE)。
