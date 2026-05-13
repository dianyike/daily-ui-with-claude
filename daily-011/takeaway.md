# Daily 011 · Mechanism Card

> 把功能性交易畫面（限時特賣 + 倒數）整個重寫為一份觀測情境，藉此把「銷售迫切」轉化為「事件的莊重感」。

## archetype
Typographic Hero（Editorial Catalog #2，sibling grid: Centered Monument）

## purpose_triad
- intent: feel-atmosphere 為主 + make-decision 為輔
- success: 使用者讀完 hero 後**主動下捲**找 CTA（不在 hero 就被拉走）
- density: low（單一 ROI）

## palette_recipe
- **strategy**：Restrained（99% 黑白灰 + 1% accent）
- **bg**：`color/bg` (Dark mode) — 微藍 tint 的近黑，像天文台暗房紙本
- **fg**：`color/fg` — 暖象牙白（不是 #FFF）
- **fg-muted**：`color/fg-muted` — 中灰，承載 metadata / 軌跡 hairline / nav 字
- **border**：`color/border` — 極淺灰，crosshair / hairline 分隔
- **accent**：`color/accent` — 觀測紅 / mars orange（檯燈紅、火星色），只在「現在/NOW」label + dot + CTA hover 出現

## type_pair
**Editorial preset**：EB Garamond + Noto Sans TC（MCP compose proxy）。
- Latin: EB Garamond — Old Style serif, tabular lining figures，1960s Mission Control 報告書字種
- CJK: Noto Sans TC — 中性 sans，與 serif Latin 拉開層次
- **Hand-off swap target**：Gambarino（display only）+ EB Garamond/Inter（body）+ Noto Sans TC

## motifs
1. **十字準星（cross-hair）** — 細 1px 線在 T-minus 後方交叉，bound to `color/border`。視覺權重低於文字，但結構性指涉天文觀測。
2. **編號座標（RA · Dec）** — `RA 05ʰ 35ᵐ · DEC −05° 23′` 在 nav 中央；觀測手帳基因。
3. **軌跡 hairline + accent dot** — 細水平線 + 1 個 `color/accent` 圓點 + 「現在/NOW」label。把「即時」這件事縮成一個極小的視覺權重，整頁 only 1 accent point（呼應 Restrained color strategy）。

## why_it_works
1. **重寫框架（Reframe）**：把「限時特賣 / 搶購倒數」改寫為「天體過境觀測」。同一個資料模型（剩餘時間 + 名額 + 價格），但情緒從「焦慮→緊迫→衝動」改為「等待→莊重→預約」。
2. **主角獨大**：T-minus 數字字串是唯一 hero，不和圖像 / 副標 / CTA 競爭。Centered Monument 構圖讓 1440 viewport 第一屏只乘載這一件事。
3. **延遲 CTA**：預約按鈕放第二屏，逼出觀測情境感後才出現。Editorial 替代方案（底線文字 + 箭頭，非 pill）避開 SaaS package signature。
4. **單一 accent 規則**：只有「現在/NOW」label + dot 使用 accent，其餘 99% 全在灰階。色彩稀缺性 = 重量。
5. **編號脈絡**：N° 011（issue）/ No. 047（手帳序號）/ N° 045-047（觀測紀錄）— 三套不同編號各有其職，避開 fact-uniqueness 重複陷阱。同時為頁面建立了「博物館 / 檔案館」的可信度氣質。
6. **黑底白字 + serif tabular**：Nature / Scientific American 學術期刊基因；EB Garamond lining figures 在大尺寸 + 4% letter-spacing 下呈現「mission report 印刷物」感，避開了 SaaS 倒數鐘的 Inter mono 預設。

## anti-goals 證據（避開的陷阱）
- ❌ SaaS 倒數三卡片（Hours / Minutes / Seconds 大寫粗體標籤）→ 單一字串 `T − 02 H 47 M 39 S`
- ❌ gradient cosmic purple / blue space stock → restrained B&W + 唯一觀測紅
- ❌ glow buttons / neon accent → text underline + arrow CTA
- ❌ 「限時搶購！」紅字驚嘆號 hype → 「下次過境 · NEXT TRANSIT」editorial eyebrow
- ❌ 黑 + cyan cyberpunk → 黑 + 觀測紅（暖橙色相 ≈ 15°，避開冷色）

## figma_url
- File: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100
- 1440 frame: `238:51`
- 375 frame: `248:52`
- Link-Reserve component set: `252:64`
