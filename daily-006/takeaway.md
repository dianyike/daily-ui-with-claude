# Takeaway — Daily UI 006 · User Profile

## Mechanism card

- **Archetype** — Editorial Spread × Kinetic Marquee(左頁 portrait + 右頁 horizontal time-axis ticker;雜誌人物特寫對開頁版式)
- **Purpose Triad** — feel-atmosphere · 10s 內讀完照片+軌跡+引言 · medium density
- **Palette recipe** — Restrained Light(米白 bg + 深炭 fg + 灰調 fgMuted + hairline border);**accent 唯一鎖在 NOW**(時間軸最右端 ◉ solid + 同列「Editorial Prize · NOW」字色 — 同概念兩次 echo)
- **Type pair** — Noto Serif TC Light 96px(zh 姓名 display)/ EB Garamond Italic 56px(英文 pull quote)/ Inter Medium 11-16px small-caps + 16-18% PERCENT letter-spacing(chrome / eyebrow / metadata labels)/ Noto Sans TC Regular 13-18px(role + 軌跡 cjk 細節)
- **Motifs**
  - 「人像為錨點 + 時間軸由錨點延伸」的對開頁雙主體版式
  - 4 個年度 tickmark + 細 hairline 串連 → 3 個 outline ●(過去) + 1 個 solid ◉(NOW accent)— 用「填色狀態切換」表達時間單向性
  - eyebrow + 大字 + 小字 三段式 hierarchy(eyebrow 小型大寫 → 主體大字 → 細節小字)在 5 處 echo:About / Trajectory / On her work / By the numbers / Footer
  - Stats 用「大數字 + 小型大寫 label」橫向排對齊 — 報紙 obituary 用法,不用 percentage bar / progress ring
  - portrait 用 imageFilters `saturation: -1` 強制 b/w → 與整版 monochrome ink 系統一致

## Why it works(機制,非表面)

- **「人 × 軌跡」雙主體 obeys 雜誌特寫的閱讀順序**:讀者眼睛先停在臉 → 移到大字姓名 → 滑到時間軸往右掃到 NOW。這條閱讀路徑跟「LinkedIn cover photo + 圓頭像 + connect button」的 F-shape 截然相反,所以一眼就不像社交網站。
- **Accent 鎖在「NOW」單一概念**:整版 0 accent 的 chrome、metadata、年份、stats、quote;只有時間軸最右端 + 同列字串 echo 一次。讀者大腦不需要評估「哪個 UI 元素更重要」— 設計已經幫他做完。對比之下,LinkedIn 用藍色塗滿 button / link / badge / accent line,每一個都在爭眼球。
- **真實 metadata vs cosplay metadata**:寫 `Joined 2021.03` `Based Taipei`(profile 真實有的欄位),不寫 `25°02′N 121°33′E`(裝高級的座標 cosplay)。功能性 motif 通過,affectation 砍掉。
- **靜態 b/w 肖像 + 暖橙 accent 1 點**:整版色彩節制到極致,剩下唯一的色點變成情緒槓桿。如果加第二個彩色元素,槓桿斷掉。

## Anti-goals 留下的價值

LinkedIn / Facebook / Instagram / GitHub / dating app / 加密貨幣 NFT profile —— 這六個 anti-goals 不是隨便列的,它們各自有強烈的視覺習慣(banner photo、tabs bar、stats top bar、contribution graph、gradient avatar、swipe button)。在 compose 時 grep 自己有沒有不小心走進這些慣性,是這份 takeaway 最實用的 checklist。

## Reusable Figma scaffold

- root frame `primaryAxisSizingMode = 'AUTO'`(hug 內容高度,不要鎖 1440×900,內容會擠出去)
- ticker 連接線 = rowDots 內 ABSOLUTE-positioned hairline,resize 到 rowDots 全寬 + y 中心對齊(row HUG 高度 = 12px dot + 8px padding = 20px → y=9.5)
- container auto-layout frame default 帶 unbound 白底 SOLID fill — 一定要清空 fills,不然 token-drift scan 會抓出來
- 圖片來源:`upload_assets` 拿 single-use upload URL → curl 外部 image → POST 給 Figma → 拿到 imageHash → 後續 use_figma 重設 fills 帶 `filters: { saturation: -1 }`(b/w editorial 處理)

## Figma reference

- File: bDA9MWzNRM9My6grhlE8fj
- Hero node: `91:2`
- URL: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=91-2
