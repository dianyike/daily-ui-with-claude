# Daily UI 005 — App Icon

**Date**: 2026-05-12
**Figma**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=83-2
**Hero node ID** (Plugin API form): `83:2`
**Direction chosen**: A — Tide · 潮汐記號（虛構看潮汐 app；icon = 1 條海平線 + 17 顆 sine 曲線點 + 1 顆 accent anchor）
**Scenario**: Tide N°005 brand mark reveal — 多尺度 icon 條（29 / 40 / 60 / 76 / 120 / 180 / 240 px）證明 5px 仍辨識
**Web implementation**: **permanently skipped** per user instruction 2026-05-13 — App Icon 此題為純 Figma brand-mark 設計題，不生成 web/ 代碼，請勿視為待補事項

---

## Purpose Triad

| Axis | Value |
|---|---|
| **Intent** | `feel-atmosphere` — brand identity reveal，讓人感受「Tide 這個 app 的氣味」而非操作什麼 |
| **Success** | 「3 秒看到 icon 記住形狀;多尺度條證明 5px 仍辨識;讀完 47°45′N 經緯度 + Tide N°005 後相信『這是真的存在的 app』」 |
| **Density** | `low` — 單一 hero icon + 一句宣言 + 多尺度條 + 經緯度 chrome |

---

## Commit Before Code

**(a) Tone — contrastive rules**
- navigational-quiet（海事儀器讀數）, **not** nautical-decorative（船舵、繩結、錨頭裝飾）
- chart-precision（印刷海圖銀箔燙印）, **not** maritime-luxury（帆船俱樂部金漆）
- horizon-monumental（滿版深夜海平線氣壓）, **not** seaside-photography（浪花、泡沫、夕陽）
- icon-as-instrument（測量儀器單一讀數）, **not** icon-as-emoji（微笑、波浪、心形）
- silver-on-navy（深底銀字 chart 美學）, **not** white-on-blue（醫療 / 企業）

**(b) Star** — **Tide rounded-square brand mark**（480×480 顯示尺寸，iOS 比例 224/1024 圓角 = 105px）：cream paper 紙底（Light mode override 與深底 page 形成對比），內含三件幾何 —
- 一條跨內寬的 horizon hairline (海平線；2px tall)
- 17 顆等距小圓點沿一個完整 sine 週期分布（潮汐曲線，像舊海圖點線描繪；峰在 t=0.25，谷在 t=0.75）
- 一顆 accent 實心 anchor dot + 細 tick 連結至 cosine 峰（當下潮位讀數標記）

**(c) Motifs**
- **`N°005` index 在 4 個尺度 echo**：top plate / hero caption / footer / archive index
- **海平線 hairline 在頁面 3 個層級 echo**：icon 內部 hairline / icon 上方 page-wide hairline divider / footer 上方 hairline — 把「海平線」做成頁面結構詞彙
- **經緯度標籤** `47°45′N · 22°08′W` + **潮汐高低點時間** `H · 14⁻32 / L · 20⁻47` 作為 chart-precision 紋理（Ordnance Survey / Admiralty 海圖風）
- **多尺度 icon 條**（29 / 40 / 60 / 76 / 120 / 180 / 240 px = 7 個尺寸）— 證明 icon 可縮放生存；< 60 px 時 dot count 從 17 降到 9 / 5 / 0（小尺寸只留 horizon + accent anchor）
- **單字符大寫 + tracked letter-spacing 14–18%** Latin chrome

**(d) Anchor refs**
- 英國 Ordnance Survey 海圖 / 海軍部 Admiralty chart
- Jasper Morrison / Naoto Fukasawa「Super Normal」工具設計
- Aesop / Common Projects 品牌 mark presentation page
- Apple Design Award case studies（icon hero + scale strip + maker note）
- Massimo Vignelli 海運 / 鐵路 wayfinding system

**(e) Anti-goals**
- not iOS Weather app（雲 + 太陽 emoji + 漸層）
- not 沖浪 app（橙紅漸層 + 浪花 illustration）
- not 漁業 / 釣魚 app（卡通魚 + 木船）
- not 帆船俱樂部（金漆 + 老照片 + serif logo）
- not Stocks / 加密貨幣 app（K 線 + 綠紅）
- not Apple Design Lab 預設（彩虹漸層 + glassmorphism + 倒影）

**(f) Color strategy** — **Committed Dark page + Light icon mark**
- page bg = `color/bg`（Dark mode → 深炭近黑，作為深夜海平線氣壓）
- page text = `color/fg`（Dark → 米白）
- icon canvas bg = `color/bg`（**Light mode override** in child frame：cream / 紙張）
- icon hairline + tide dots = `color/fg`（Light → 深炭，銀箔印感）
- chrome / lat-long / motifs / muted scale labels = `color/fg-muted`
- borders / hairline dividers = `color/border`
- **accent = `color/accent`** **page-level 鎖在 1 個概念位置（"icon mark"）**；atomic uses = 15（hero icon 2 + 6 minis × 2 + 29px mini × 1）。Page chrome (plate / title / caption / footer) 完全 0 accent。

**(g) Scene sentence** — 「深夜海事氣象站的金屬桌上,一張未折的海圖剛被攤開;上面用銀箔燙印著一個方形儀器標記,內含一條地平線和一條由 17 顆小點描成的潮汐曲線;最高點旁邊有一個發著淡橙光的標記點。」

---

## Archetype + sanity gate

- 主：**Typographic Hero**（`archetype-cheatsheet.md` § 2）— 但 type-protagonist 由 *brand-mark glyph* 承擔（icon 是 display glyph 的延伸）；display 標題 `TIDE` 與 icon 共構單一視覺主體
- Sibling grid：**Centered Monument**（垂直軸對稱、單欄、icon 與標題垂直堆疊）
- 無內嵌 App-Shell — 此頁無 form / dashboard

**Sanity verdict**: PASS — 深底 + 銀箔感 icon + 經緯度 + 多尺度條 + serif `TIDE N°005` 讀起來像 brand reveal / Pentagram case study，不是 App Store 截圖 + 5 星評分 + Get 按鈕。

---

## Mode reconciliation

- Publisher `collectionModes` = `['Light', 'Dark']`
- Scene 鎖 Dark page（深夜氣壓）；root frame `setExplicitVariableModeForCollection(_, Dark.modeId='23:0')` → 所有 token 自動解析至 Dark
- **Child icon frames (1 hero + 7 minis) 顯式 override 為 Light mode** → icon canvas 解析為 cream-paper（Light bg）+ 深炭 ink（Light fg）
- 同根樹下 Dark + Light 雙 mode 共存。PASS

---

## Type pair

- Latin chrome（plate / caption row left / strip eyebrow / size labels / footer）: bound `typography/family/latin` (Inter, Tech preset publisher token)
- CJK caption（潮汐記號 · 測量單一讀數）: bound `typography/family/cjk` (Noto Sans TC)
- **One serif moment**（direct fontName，與 daily-001/002/004 同 trade-off）:
  - `Noto Serif TC Light` 144px → "TIDE" hero display，letter-spaced 16% PERCENT 像 chart heading

Hand-off swap target（未來在 Figma desktop UI）:
- Display: Gambarino Regular（取代 Noto Serif TC Light 作為 TIDE 字頭，更高 contrast brand-mark feel）
- Body / chrome: Switzer 或留 Inter
- CJK: Noto Sans TC 留

---

## Edit Pass summary

1 visible iteration（v01 直接成立，免 v02）。

| Pass | What changed | Why |
|---|---|---|
| v01 | Initial compose | 全套 root + plate + hero icon (3 件幾何) + title + 多尺度條 (7 mini icons) + footer 一次到位 |

最終 token-drift scan：**0 違反**（fills + strokes 全 bound）
Accent atomic uses：15（全在 icon mark 內部，page chrome 0 accent）
Out-of-band sizes（非 minimal-ds token 覆蓋）：
- icon corner radius 105px / 26 / 9 / 13 / 16 / 26 / 39 / 53 = iOS 比例 224/1024 industry constant
- TIDE display 144px / dot diameters 6/3/2 = 非 token 覆蓋的字級與微小圖形尺寸

---

## Follow-up debt

- **375 mobile breakpoint** — deferred（與 daily-001/002/004 同步）
- **State variants** — N/A，此頁無 interactive primitive
- **Animation on web** — 若未來補做 web 版：anchor accent dot 可做緩慢「呼吸 pulse」表達 live tide reading；17 dots 可做 sine-traveling wave 在 page load 時逐一 reveal
- **Editorial preset republish** — 同 daily-001/002/004 建議：考慮將 `typography/family/latin` 改為 Gambarino / EB Garamond 讓 display 也能 token-bind
- **Icon export pipeline** — 真實 iOS app 需要 1024×1024 master + 多種尺寸自動 export；目前只在 Figma 中以 frame 重現多尺度而非真實 export
- **AppIcon mask 行為** — 真實 iOS 套用 squircle mask，這裡是 standard rounded-rect，視覺接近但非精確 squircle
