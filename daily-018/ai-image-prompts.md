# Daily 018 · AI Image Prompts — Coxcomb Chart Visuals

替換 Figma 內 vector 渲染的 4 張 chart 為 AI 生成 1858 lithograph plate 風格圖像。Figma vector chart 是 placeholder、用於 layout commitment；最終 chart visual 走 AI generation + manual image swap 路徑。承接 daily-017 真實 ink stamp image swap 經驗（合成 vector 有 ceiling、image asset 是唯一突破路徑）。

## 共用 style spec（每個 prompt 套用）

```
1858 British government Blue Book lithograph plate, three-color print
on bone-paper substrate. Hand-stippled by Victorian engraver. Prussian
blue (Berlin lake pigment) for Preventable Disease, sanguine red
(cinnabar-vermilion) for Wounds & Injuries, bone black (carbon-from-bone)
for All Other Causes. Subtle plate-mark indentation. Faint ink registration
offset (≤1mm). Cream-bone paper grain. NO modern infographic flatness.
NO synthetic gradient. NO photographic depth-of-field. NO sparkles. NO
glow. NO modern typography. Just the polar-area wedges on paper. Square
crop. Photographed in raking museum-archive light, not flash.
```

## Prompt 1 — Year I Primary Coxcomb (catastrophic year 4/1854 – 3/1855)

**位置**：Coxcomb 主節 Overlay-PrimaryChart（620×620 viewport center 310,310，target image 1200×1200 square crop 4× retina）

**Prompt**:
```
A Florence Nightingale coxcomb polar-area diagram, 1858 Royal Commission
Plate I, showing the catastrophic year April 1854 to March 1855 of British
army mortality in the Crimea. Twelve 30-degree wedges fanning clockwise
from the top (April), each wedge subdivided into three concentric layered
areas: Prussian blue (Preventable Disease, largest) overlapping sanguine
red (Wounds, smaller) overlapping bone black (Other Causes, smallest).

Winter wedges (November through March) are MASSIVE — January is the peak
at radius matching deaths-per-1000 = 1500 with k=7.23 area scaling. Spring
wedges (April, May, June) are tiny dots near the centre — April has just
1-2 deaths. The Prussian blue ring dominates almost every month — this is
the political evidence: preventable disease did most of the killing.

Three-color hand-stippled lithograph on bone-cream paper, with the faint
plate-mark indentation visible at the square boundary. Wedge edges are
NOT computer-precise — they have the slight wobble of a Victorian engraver
working by hand. Faint dotted radial guide lines visible at 30-degree
intervals beneath the wedges, in pale graphite. Tiny "JAN" "FEB" "MAR" etc
month labels in 6pt sans-serif (Inter or modern equivalent) around the
perimeter, set in bone black. Center marked by a 1mm black pin showing
the "common vertex" from which areas are measured.

No frame around the chart. No gradient. No glow. No modern dashboard
aesthetic. Just the rose on paper, photographed in raking museum-archive
light. 1200x1200 square. Style: Edward Tufte's "Visual Explanations" plate
reproductions, restoration-quality scan.
```

## Prompt 2 — Year II Secondary Coxcomb (post-reform 4/1855 – 3/1856)

**位置**：Coxcomb 主節 Overlay-SecondaryChart（360×360 viewport center 180,180，target image 720×720 square crop 4× retina）

**Prompt**:
```
A Florence Nightingale coxcomb polar-area diagram, 1858 Royal Commission
Plate I, second year — April 1855 to March 1856 — AFTER the Sanitary
Commission arrived at Scutari in March 1855. Twelve 30-degree wedges, but
each wedge is DRAMATICALLY SMALLER than the previous year. April 1855
still shows a modest blue+red wedge (mortality lag — drainage not yet
fixed). May through March all very small wedges, mostly with just a
tiny inner core of bone black (Other) and a thin Prussian blue outer ring.

Use the SAME scale as the Year I rose (k=7.23) — do NOT enlarge to fill
the frame. The visible smallness IS the political message. Empty white
paper around most of the rose; the rose itself occupies maybe 25% of
the square. This is empirical evidence of reform: a chart designed to be
smaller because the data IS smaller.

Three-color hand-stippled lithograph on bone-cream paper, with the faint
plate-mark indentation visible at the square boundary. Wedge edges have
the slight hand-engraver wobble. Faint dotted radial guide lines visible
at 30-degree intervals beneath the wedges, in pale graphite. Tiny "APR"
"MAY" "JUN" etc month labels in 6pt sans-serif around the perimeter, set
in bone black. Center marked by a 1mm black pin.

No frame. No gradient. No glow. No modern dashboard aesthetic. Just the
shrunken rose on paper, photographed in raking museum-archive light.
720x720 square. Style: Edward Tufte's "Visual Explanations" plate
reproductions, restoration-quality scan.
```

## Prompt 3 — Reform-compare BEFORE mini chart (Year I @ k=5)

**位置**：Reform-compare 章節 BEFORE column（480×460，target image 960×920 4× retina）

**Prompt**:
```
A smaller-format Florence Nightingale coxcomb polar-area diagram showing
the FIRST year of British army mortality in the Crimea (April 1854 to
March 1855). Identical encoding to the hero plate: twelve 30-degree
wedges, three layered concentric causes per month (Prussian blue
Preventable, sanguine red Wounds, bone black Other).

Sized for a side-by-side comparison panel — uses scale k=5 (smaller than
the hero plate's k=7.23). The rose still has the catastrophic winter
peaks dominant, but compressed into a tighter footprint. January is the
visual peak at radius matching deaths-per-1000 = 1500 with k=5 area
scaling.

Three-color hand-stippled lithograph on bone-cream paper. Wedge edges
hand-engraver wobble. Faint dotted radial guide lines at 30-degree
intervals. Tiny month labels in 6pt sans-serif around the perimeter
in bone black. 1mm black centre pin. Faint plate-mark indentation.

Caption beneath in 8pt sans-serif: "APR MDCCCLIV – MAR MDCCCLV ·
Mortality per 1 000 mean strength — pre-reform". Subhead caption
visible above: "BEFORE & AFTER SANITARY REFORM".

960x920 portrait crop. Same Victorian engraving style and bone-cream
paper as the hero plate — the two charts MUST share the same plate-stock
aesthetic so the side-by-side reads as twin reproductions from the same
1858 Blue Book signature.
```

## Prompt 4 — Reform-compare AFTER mini chart (Year II @ k=5)

**位置**：Reform-compare 章節 AFTER column（480×460，target image 960×920 4× retina）

**Prompt**:
```
A smaller-format Florence Nightingale coxcomb polar-area diagram showing
the SECOND year of British army mortality in the Crimea (April 1855 to
March 1856) — post-reform. Identical encoding to the BEFORE plate: same
three causes (Prussian blue Preventable, sanguine red Wounds, bone black
Other), same k=5 scale, same paper stock, same engraving hand.

The rose is DRAMATICALLY smaller than the BEFORE chart. Mostly empty
bone-cream paper around it. Maybe 12-15% of the frame is the rose; the
rest is paper. April 1855 still shows a modest wedge from the lag effect.
May through March mostly tiny inner cores.

The visible smallness IS the political message — readers comparing this
side-by-side with the BEFORE rose see immediately that reform worked.

Three-color hand-stippled lithograph on bone-cream paper. Wedge edges
hand-engraver wobble. Faint dotted radial guide lines at 30-degree
intervals. Tiny month labels in 6pt sans-serif around the perimeter
in bone black. 1mm black centre pin. Faint plate-mark indentation.

Caption beneath in 8pt sans-serif: "APR MDCCCLV – MAR MDCCCLVI · Same
scale k = 5. Diminished rose is empirical."

960x920 portrait crop. Critically MUST share the same Victorian engraving
style and bone-cream paper stock as the BEFORE chart so the pair reads
as twin reproductions from the same 1858 Blue Book signature.
```

## Optional Prompt 5 — Hero plate texture overlay (if desired)

**位置**：Hero section 整節背景 overlay 或 outer wrapper 紙質基底（target 2880×1440 4× retina）

```
Pristine cream-bone paper sheet, fresh from a Victorian printer's plate
press in 1858. Faint laid-paper grain visible at oblique angle. NO
yellowing. NO foxing. NO tears. NO Instagram aged filter. NO Latin
script visible. NO illustrations. Just the paper, photographed in
raking museum-archive light to show paper texture and the faint plate-
mark impression along the top edge. Subtle. Restrained. Editorial
print quality. 2880x1440 landscape. Reference: a pristine first
impression of a Royal Commission report folio, just lifted from the
press.
```

## 應用筆記

- **生成工具**：建議 Midjourney v6/v7、Flux Pro、Imagen 4、Recraft V3 都可試；Midjourney 對「Victorian lithograph plate」style 的 grasp 通常最強，但需要明確指定 NO modern typography / NO infographic flatness
- **負面 prompt 紀律**：`--no glow, gradient, sparkles, neon, modern dashboard, infographic flatness, photographic depth of field, watermark, signature, label overlay, AI artifact, distorted hands, text in image except month labels`（month labels 在 chart perimeter 是真實 Nightingale plate 的細節、保留）
- **替換流程**：生成 → 下載 PNG → 在 Figma 直接拖入對應 Overlay frame、調整 size match frame width/height、刪除原 vector wedges（保留 frame 結構）
- **Trade-off 接受**：失去 token-bound 紀律（image fill 不可繫 token），但 chart visual 質感升級到「真實 1858 lithograph 復刻感」、跟 daily-017 鏢局朱印 image swap 同 workflow
- **未來 series 規律**：daily-XXX entries 涉及 historical chart references（Snow Broad Street cholera map / Shewhart 1925 control chart / Keeling Curve / Coxcomb / Marey's railway timetable / Minard's Napoleon march map）建議都預設考慮 AI image swap path

## 風險

- AI 生成可能出現 month labels 拼字錯誤、月份順序亂、wedge 數量不準確（不一定 12 個）— **manual check 必要**；如 wedge 數量不對或 ring 順序錯（preventable 應該是 outer 不是 inner），需重 generate
- AI 對「same scale k=5」幾何精準度低 — Year II rose 可能被 generative model 自動放大到 fill frame（infographic 直覺）；明確 prompt「rose occupies maybe 12-15% of frame; rest is paper」+ 多生幾張挑
- Plate-mark 與 ink registration offset 細節需要強調，否則容易渲成現代 high-fidelity reproduction、失去 1858 lithograph 風味
- 如最後對比 BEFORE/AFTER 二圖時發現 plate-stock 不一致（一張紙偏黃、另一張偏白），需重 generate 至匹配
