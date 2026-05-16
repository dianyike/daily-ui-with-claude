# Daily 020 — AI Image Prompts

5 張 pen-and-ink hatching plates，pocket-guide engraving 風格，黑墨 + 白紙。生成於外部 (ChatGPT / Midjourney 等)，PNG 放進 `assets/` 後用 Figma MCP `upload_assets` swap 進 placeholder rect。

---

## tapir-hero.png · TitlePage IMAGE-CENTER (~600×420 placeholder, 4:3 ratio)

```
Malayan tapir (Tapirus indicus) standing in profile in Belum tropical
rainforest, full body side view, classical pen-and-ink hatching
illustration in the style of Audubon's Birds of America plates and
late-19C Malay Peninsula naturalist field guides.

Composition: tapir centred in mid-distance, full body visible, head
lowered slightly as if browsing. Behind: tall dipterocarp trees with
buttress roots, hanging epiphytes, distant mountain ridge faintly hatched.
Foreground: tropical undergrowth — ferns, fallen leaves, small water
puddle. Top-left corner: small inset map fragment of Belum Forest Reserve
boundary in pen-and-ink, with "BELUM FOREST RESERVE" caption in serif
italic. Bottom: serif italic caption "Belum Rainforest, Perak, Malaysia /
Elevation: 100—300 m" left-aligned + centred plate caption "MALAYAN TAPIR
/ Tapirus indicus / Family Tapiridae" in serif + "Plate 47" right-aligned.

Pure black carbon ink on cool white plate paper. NO sepia, NO color, NO
warm tones. Dense parallel-line hatching for shading; cross-hatching only
in deepest shadows (under belly, behind ear, between buttress roots).
Plate-mark indentation visible at the edges of the cool paper.

Hand-engraved imperfections: micro-variation in hatch density, occasional
double-strike on outer contour lines. Detail dense but not overworked.
Composition occupies ~90% of the rectangle, with consistent ~5% margin of
blank cool paper around all edges. 4:3 horizontal ratio.
```

---

## hoofcast.png · PlateLeaf HOOFCAST (~500×560 placeholder, ~5:6 ratio)

```
Malayan tapir front-left footprint hoof cast, viewed from directly above
(top-down), as a 1:1 graphite rubbing reproduced on vellum. Pen-and-ink
hatching illustration in pocket field guide engraving style.

Composition: single hoof print imprint centred, occupying ~70% of the
rectangle. The print shows the characteristic 4-toed tapir foot — 3
larger frontal toes plus 1 smaller outer toe (the splayed tapir-specific
arrangement). Edges of the imprint are slightly soft (mud retained).
Around the imprint: thin pen-and-ink hatch indicating wet substrate /
mud texture. Inside the imprint: deeper hatch indicating depth.

Annotations: small serif italic caption labels at corners noting
"anterior" (top), "posterior" (bottom), "splayed digit IV" (outer toe),
"depth ~ 18 mm". Small "PLATE 32" marker in upper-right corner. Plate-mark
indentation at edges.

Pure carbon-black intaglio ink on cool grey-white plate paper. NO sepia,
NO color. Top-down forensic view, no perspective. Hand-engraved
imperfections.

5:6 vertical ratio. Composition occupies ~85% with ~7.5% white margin
around all edges.
```

---

## scat.png · PlateLeaf SCAT (~300×260 placeholder, square ratio)

```
Tapir scat cross-section, scientific botanical-style illustration showing
fibrous plant matter visible inside the cut. Pen-and-ink hatched
illustration in pocket field guide plate style.

Composition: oval scat shape rendered as if cleanly cut in half, exposing
the cross-section. Visible inside: tangled fibrous material — bits of
twig, leaf veins, undigested seeds. Pen-and-ink hatching renders both the
outer shape (with subtle moss-like texture) and the inner fibrous
material (denser hatch).

Annotations: thin pointer lines from the cross-section to small serif
italic labels — "fig seed", "twig", "leaf vein", "undigested fibre".
"PLATE 34" small marker upper-right. Plate-mark at edges.

Pure black ink on white. NO color. Square ratio. ~85% of frame, ~7.5%
margin. Engraving style with hand-cut imperfections, micro-variation.
```

---

## bite.png · PlateLeaf BITE (~300×260 placeholder, square ratio)

```
Tapir bite marks on woody stems with leaves stripped, pen-and-ink hatched
illustration in pocket field guide plate style.

Composition: a clutch of 3-4 woody stems / saplings rising from the
bottom of the frame, each showing characteristic tapir browsing damage —
clean angled bite cuts at varying heights, leaves stripped from the
lower portions, intact leaves at the top. Bite cuts show pale fresh wood
surface (rendered as un-hatched white) contrasted against the bark
(densely hatched dark).

Annotations: small italic pointer labels — "fresh bite", "leaf strip
line", "browse line ~ 1.2 m". Subtle ground line indicated by short
horizontal hatching at base. "PLATE 36" upper-right marker.

Pure black carbon ink on cool white paper. NO sepia, NO color. Square
ratio. ~85% of frame, ~7.5% margin. Hand-engraved details.
```

---

## map-inset.png · PlateLeaf MAP-INSET (~240×80 placeholder, 3:1 horizontal ratio)

```
Small pocket field guide map fragment with topographic contour lines and
triangulation markers. Pen-and-ink hatched plate style. Designed as a
THUMBNAIL preview pointing to the full map on the next plate.

Composition: shallow rectangular map fragment with 4-6 closely-spaced
contour lines suggesting hilly terrain, three small triangulation dot
markers labelled A, B, C connected by short DASHED bearing lines that
converge on a small X cross indicating sighting point. River line
suggested at lower edge with denser hatch.

Annotations: small italic serif caption "see PLATE III — triangulation"
in lower-right. North arrow ↑N in upper-left. Plate edge hairline
border.

Pure black ink on white. NO sepia, NO color. 3:1 horizontal ratio.
Composition occupies ~85%, ~7.5% margin. Hand-engraved imperfections,
suggestive map detail rather than fully resolved cartography.
```

---

## Generation notes

- All 5 plates share the same **register × ink discipline**: pure carbon-black intaglio ink, NO sepia, NO color, NO warm tones, cool grey-white plate paper substrate. Hand-engraved imperfections.
- **Plate-mark indentation** at all edges signals real intaglio printing.
- **Annotation typography** in plates is internal to the illustration — these are NOT the Figma text node captions (those are layered separately).
- Resolution: each image ≥ 1800px on longest side to allow Figma scaling without artefacts.
- Format: PNG with white BG (or transparent if available).

Upload pipeline: `mcp__plugin_figma_figma__upload_assets` with `count=1` + `nodeId={placeholder_rect_id}` + `scaleMode=FILL` returns submit URL. Then `curl -F file=@path/to/image.png <submit_url>` POSTs the PNG bytes. Figma auto-commits image fill on the placeholder rect and auto-names the layer.
