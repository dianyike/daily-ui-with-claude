# Daily UI 006 — User Profile

**Date**: 2026-05-12
**Figma**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=91-2
**Hero node ID** (Plugin API form): `91:2`
**Direction chosen**: Ticker biography(編年人物特寫 — 左 b/w 人像 + 右橫向時間軸)
**Scenario**: Chen, Yi-Hsuan(陳怡萱),雜誌編輯 / Senior Researcher,Profile #006

---

## Purpose Triad

| Axis | Value |
|---|---|
| **Intent** | `feel-atmosphere` — 雜誌人物特寫頁,讓讀者感受這個人的氣息 |
| **Success** | 「10 秒掃完照片 + 4 段年表 + 一句引言 → 記住人物個性」 |
| **Density** | `medium` — portrait + 命名堆疊 + ticker 4 節點 + stats + quote |

---

## Commit Before Code

**(a) Tone — contrastive rules**
- editorial-biography 雜誌人物特寫, **not** SaaS-profile-card(LinkedIn/Facebook 卡片)
- newspaper-archive 報紙存檔, **not** Instagram-grid 排版
- chronological-restrained 克制年表, **not** infographic-timeline 多彩信息圖
- portrait-as-protagonist 肖像為主角, **not** avatar-as-tag 點綴頭像
- monochrome-ink 單色墨水, **not** colorful-badge 彩色徽章

**(b) Star** — **Horizontal Biographical Ticker + Portrait Anchor**:左側 1:1 比例黑白人像(editorial 肅照 + hairline frame)+ 右側橫向時間軸(2021 / 2022 / 2024 / 2026 四節點 + 4 段事件 + 最右端 NOW ◉ accent solid)。整版讀起來是「人物 × 軌跡」對開頁。

**(c) Motifs**(每項都有 narrative 功能,無炫技裝飾)
- **時間軸 hairline + 4 個 tickmark**:3 個 ● outline(過去)+ 1 個 ◉ solid accent(NOW)— 時間單向性 + accent 唯一性
- **真實 metadata**:`Joined 2021.03` `Based Taipei` — 不加假座標 / 假編號
- **stats 三聯**:`42 posts · 8 awards · 312 following` 中黑點分隔,單行
- **italic pull quote** 大字「Quiet work, loud results.」— 人物個性載體
- **small-caps Latin chrome + 14-18% PERCENT letter-spacing** 章節 eyebrow

**(d) Anchor refs**
- The New Yorker / The Atlantic 雜誌人物特寫對開頁
- 維基百科古典 infobox(chronology, joined date)
- Pentagram / Apple Newsroom "About the Founder" hero
- Iris Apfel / Helmut Newton 雜誌肖像存檔

**(e) Anti-goals**
- not LinkedIn(banner + 圓頭像 + connect button + skills chips)
- not Facebook(cover photo + tabs + posts feed)
- not Instagram(grid + stats top bar + bio link 圈)
- not GitHub(contribution graph + repo list)
- not 加密貨幣 / NFT profile(漸層頭像 + hex address)
- not dating app(多張照片 + 興趣 chips + swipe button)

**(f) Color strategy** — **Restrained**
- bg = `color/bg`(Light → 米白報紙感)
- text = `color/fg`(深炭墨水)
- portrait image = saturation -1 → 灰階(b/w editorial 處理)
- portrait frame stroke = `color/border`(2px hairline)
- chrome / metadata labels / years / stats 分隔點 = `color/fg-muted`
- hairlines / 時間軸主線 = `color/border`
- **accent = `color/accent`** **page-level 鎖在 1 個位置(NOW ◉)**;atomic uses = 1。Page chrome(plate / name / quote / stats)完全 0 accent。

**(g) Scene sentence** — 「翻開一本厚雜誌的人物特寫頁;左頁是一張黑白肅照人像,右頁從照片旁延伸出一條細細的時間軸,記著這個人從 2021 到 2026 做了什麼;軸線最右端有一顆橙色的標記,代表 NOW。」

---

## Archetype + sanity gate

- 主:**Editorial Spread**(`archetype-cheatsheet.md` § 1)— 左右對開頁,portrait + narrative
- 內嵌:**Kinetic Marquee**(`§ 7`)— 右頁 ticker 是 horizontal scrolling line,結構主體
- 無 App-Shell — 此頁無 form / dashboard

**Sanity verdict**: PASS — 米白底 + b/w portrait + 細時間軸 + 唯一 NOW accent + zh-TW serif 標題 + small-caps Latin chrome 讀起來像 The Atlantic 人物特寫,不是 LinkedIn / Instagram / GitHub profile。

---

## Mode reconciliation

- Publisher `collectionModes` = `['Light', 'Dark']`
- Scene 鎖 Light(米白報紙感);root frame `setExplicitVariableModeForCollection(_, Light.modeId='2:0')`,所有 token 解析至 Light
- PASS, no STOP

---

## Type pair

- Latin chrome(eyebrow / year labels / event labels / metadata / stats): bound `typography/family/latin` (Inter, Tech preset)
- CJK 命名 / role 中段 / quote 後半: bound `typography/family/cjk` (Noto Sans TC)
- **Two serif moments**(direct fontName,延續 daily-001/002/004/005 trade-off):
  - `Noto Serif TC Light` 88px → 陳怡萱(zh display)
  - `Noto Serif TC Light Italic` 56px → "Quiet work, loud results." pull quote
- Latin name "Chen, Yi-Hsuan" 用 Inter 32px tracked 8% — 與中文名垂直堆疊

Hand-off swap target(未來在 Figma desktop UI):
- Display: Gambarino Regular(取代 Noto Serif TC Light 作為 zh display)
- Body / chrome: Switzer 或留 Inter
- CJK: Noto Sans TC 留

---

## Image

- 來源:Unsplash editorial portrait
- 處理:imageFilters `contrast: 0.04, exposure: -0.02, saturation: 0`(微調 editorial,**保留彩色** — zh-TW context 下 b/w 人像 = 遺照,文化禁忌)
- 框:1px stroke `color/border`,radius = 0(無圓角,雜誌感)
- 尺寸:420 × 520(3:4 editorial portrait 比例)

---

## Edit Pass summary

2 visible iterations(v01 → v02)。

| Pass | What changed | Why |
|---|---|---|
| v01 | Initial 5-call compose | root frame 卡死 1440×900 → quote/stats/footer 被切掉螢幕外;ticker hairline `layoutPositioning='ABSOLUTE'` 但 y=-36 飄到 row 外面看不到 |
| v02 | (1) root `primaryAxisSizingMode = 'AUTO'` → 高度 hug 到 1251px,所有內容可見。(2) ticker hairline 重新 insert 到 rowDots index 0、resize 到 rowDots 全寬 1312、y 重置為 row 中心 9.5px → 4 個 dot 正確被細線串起。(3) Token-drift scan:20 個 auto-layout 容器 frame 帶 default 白底 unbound fill → 清空 fills(透明,由 root bg 承擔)→ drift = 0 |
| v03 | **文化校正**:b/w portrait 在華人文化是遺照符號,語意被翻轉成「紀念已故」。Figma `saturation: -1` → `saturation: 0`(回彩色,微調 contrast/exposure 保留 editorial 感);web CSS `grayscale(1)` → 移除;`<img alt>` 移除「黑白處理」字樣。Feedback memory `feedback_no_bw_portraits_zh.md` 已存,後續所有 zh-TW context 的 portrait 預設彩色。 |

最終 token-drift scan:**0 違反**(text fills + portrait stroke + ticker hairline + accent dot 全 bound;容器全透明)
Accent atomic uses:2(NOW dot solid + "Editorial Prize · NOW" 文字 fill — 同概念位置「NOW」的兩次 echo)
Out-of-band sizes(非 minimal-ds token 覆蓋):portrait 420×520(editorial 3:4 比例)、display 96px、quote 56px、year 32px — 非 token 字級

---

## Compose call log

| Call | Created |
|---|---|
| 1/5 | root `91:2` + plate row + hairline divider(token bind 36 變數) |
| 2/5 | hero 2-col `92:2` + portrait column `92:3` + portrait rect `92:4` + b/w Unsplash image(via upload_assets + saturation:-1 filter) |
| 3/5 | content column `98:2`(eyebrow / 陳怡萱 serif display / Latin name / role / hairline / metadata 3 rows) |
| 4/5 | ticker section `99:2`(eyebrow / 4-year row / dots+hairline `99:9` / event titles / event details CJK) |
| 5/5 | divider + quote-and-stats `100:3`(EB Garamond Italic pull quote 760w + stats 3 rows) + footer chrome |

---

## Follow-up debt

- **375 mobile breakpoint** — deferred(與 daily-001/002/004/005 同步)
- **State variants** — N/A,此頁無 interactive primitive(profile 是 read-only view)
- **Motion on web** — Ticker 進場可做 stagger reveal(年份淡入 + tickmark 由左至右點亮 + NOW accent 最後 pulse 一次);quote 字頭顏色 transition;靜態 Figma 表達不出
- **Real interactivity** — Follow / Message 按鈕未進此 hero;保留給 v2 把 profile 變 functional
