# Daily 019 · AI Image Prompts — 1687 Royal Society Engravings

替換 Figma 內 2 個 bg-alt placeholder rect 為 AI 生成 1687 銅版畫風格圖像。承接 daily-017 真實印章 / daily-018 三色石版 image swap pipeline 經驗：vector 合成有 ceiling、image asset 是把 register 推到 1687 print plate 質地的唯一路徑。**演色約束：iron-gall ink pre-oxidation blue-black on cool grey-white plate paper — 絕無米色 / sepia / 紙色泛黃 / 棕褐色**。

## 共用 style spec（每個 prompt 套用）

```
1687 English copperplate intaglio engraving on cool grey-white plate paper,
struck from a freshly-inked plate by Royal Society printer John Martyn.
Pure carbon-black iron-gall ink (PRE-oxidation blue-black, NOT warm brown,
NOT sepia, NOT yellowed). Cross-hatched modelling and stippling executed
in the late-17C English engraver's hand — Wenceslaus Hollar / William
Faithorne / David Loggan school. Cool grey-white vellum-stock substrate
(undyed, un-aged, cool undertone — NOT cream, NOT bone, NOT parchment
yellow). Visible plate-mark indentation forming a rectangular bevel at the
sheet boundary. Faint ink registration shift (≤0.3mm) where the plate met
the paper. Photographed in cold raking museum-archive light, dim ambient,
no flash, no warm bias. NO modern flatness. NO digital gradient. NO sepia
filter. NO photographic depth-of-field. NO sparkles, glow, or modern type.
Just intaglio ink-on-cold-paper, restoration-quality scan.
```

## Prompt 1 — Royal Society Arms (CREST · 440×480 slot)

**位置**：TitlePlate Overlay-TitlePlate 內，Crest-Image-Slot rect (id `503:55` 內 child)，flush-left at x=96 y=120 w=440 h=480。Target image 880×960 (2× retina), portrait crop.

**Prompt**:
```
The Coat of Arms of the Royal Society of London, as it appeared in
Philosophical Transactions Volume XVI plates of MDCLXXXVII (1687).
A formal heraldic achievement, engraved in copperplate intaglio in the
late-17C English manner — cross-hatched modelling on the mantling, dense
parallel-line shading on the lion and unicorn supporters, fine stippling
on the helm and crown.

Composition: centred shield charged with three lions passant guardant of
England plus the Royal arms quartered in chief; surmounted by a closed
royal crown; supporters of a lion rampant guardant (dexter) and unicorn
rampant (sinister) standing upon a compartment of grass and quill-feathers
(the latter the Society's motif). Mantling falls in S-curves either side
of the helm. A scrolled ribbon beneath the compartment carries the
Society's motto in Roman capitals: NULLIUS IN VERBA.

The whole composition framed within a faint cartouche of acanthus and
laurel. NO color whatsoever — pure carbon-black intaglio line work on
cool grey-white plate paper. The arms occupies roughly 70% of the
vertical, with breathing space above (~12% blank cool-paper) and below
(~18% blank for the motto ribbon and slight plate-mark indentation).

Slight hand-engraver imperfections: occasional burr along the heaviest
lines, micro-variation in line spacing on the mantling, faint plate-wipe
streaks below the compartment. The paper has the very subtle laid-paper
chain-line texture visible at large reproduction, but the chain lines do
not dominate.

Style references: David Loggan's 1675 Oxonia Illustrata frontispieces;
Wenceslaus Hollar's heraldic plates for Dugdale's Antiquities of
Warwickshire (1656); the Royal Society's actual arms as borne in the
1663 Charter. Photographed in cold museum-archive raking light, slight
side-light from upper-left showing the plate-mark bevel. Image format
880×960 portrait, 2× retina.
```

## Prompt 2 — IOHN MARTYN Printer's Mark (MARK · 96×96 slot)

**位置**：Colophon Overlay-Colophon 內，Mark-Image-Slot rect (id `503:58` 內 child)，flush-left at x=0 y=80 w=96 h=96。Target image 384×384 (4× retina, since target is tiny), square crop.

**Prompt**:
```
The printer's device of John Martyn, Printer to the Royal Society of
London, as it would have appeared in the colophon of Philosophical
Transactions in MDCLXXXVII (1687). Martyn's shop sign was The Bell at
the West End of St Paul's Church-Yard, so the device centres on a
hanging church-bell.

Composition: a single passing-bell, swung slightly off-vertical as if
mid-toll, suspended from a fleur-de-lis yoke. The bell's surface is
hatched with parallel-line shading in the late-17C English manner. A
thin scrolled ribbon below the bell carries the printer's initials in
Roman capitals: I  M (for IOHN MARTYN — note the I/J convention of the
period). A small device flourish — acanthus curl or single laurel sprig
— flanks each side of the ribbon. The whole composition framed within
a faint single hairline cartouche.

Pure carbon-black intaglio ink on cool grey-white plate paper, NO sepia,
NO warm tones. Composition occupies ~85% of the square, with consistent
~7% margin of blank cool paper around all edges. Plate-mark bevel
visible at the very edge of the cool paper.

Hand-engraved imperfections: the bell's clapper line shows a faint
double-strike (the engraver re-laid the line), micro-variation in the
hatching density. The mark is small in real life (would print at about
20mm square in 1687 quarto) so detail is dense but not overworked.

Style references: 17C English printer's devices in STC bibliography
plates; Thomas Newcomb's mark; the Stationers' Company register
devices c.1660–1690. Photographed in cold museum-archive raking light,
slight side-light from upper-left. Image format 384×384 square,
4× retina.
```

## Image swap procedure (post-generation)

Once both assets generated and saved (e.g. `daily-019/assets/crest.png` 和 `daily-019/assets/mark.png`):

1. Use Figma MCP `upload_assets` to ingest both files.
2. Replace fill on `Crest-Image-Slot` (Figma id `503:55` 子 child rect) — set fill to `IMAGE` paint, scale `FILL`, source = uploaded crest asset hash.
3. Replace fill on `Mark-Image-Slot` (Figma id `503:58` 子 child rect) — same treatment with mark asset.
4. Remove the `Crest-Note` text overlay and `Mark-Note` caption (no longer needed once real asset lands).
5. Remove the dashed stroke on both rects (border was placeholder indicator).
6. Re-export `titleplate-1440.png` 和 `colophon-1440.png` plus `page-1440.png` to refresh deliverables.

## Anti-pattern reject list

- ❌ Sepia / warm brown / yellowed paper — register breaks
- ❌ Aged / weathered / foxed paper — register is "freshly struck plate", not "antique find"
- ❌ Color of any kind — Royal Society arms in actual heraldry have tincture, but this plate is monochrome publication, NOT a coloured manuscript
- ❌ Modern flat infographic style
- ❌ Photoreal 3D rendering — must read as PRINTED, not modelled
- ❌ Symmetric machine-perfect line work — wants the slight hand-engraver wobble
- ❌ Generic AI "old-document" texture overlay — that's where it goes wrong fast

## Lineage

延續 daily-017 印章（真實 image asset 替換 vector 印章合成）+ daily-018 三色石版 chart（Image asset 把 vector chart 推上 plate-paper 質地）→ daily-019 1687 銅版畫圖框（兩個 monochrome 銅版畫 element 把 typography-only register 推上整套 publication plate 質地）。

每一題都驗證同一個結論：editorial pastiche 要過得了 plate-paper 真實性的關，**vector 合成的 ceiling 是 70% — image asset 是把它推到 95% 的唯一路徑**。
