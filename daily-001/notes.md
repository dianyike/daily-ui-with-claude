# Daily UI 001 — Sign Up

**Date**: 2026-05-11
**Figma**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=41-15
**Hero node ID** (Plugin API form): `41:15`
**Direction chosen**: C — Cinematic Split (50/50, full-bleed left media + minimal right form)

---

## Purpose Triad

| Axis | Value |
|---|---|
| **Intent** | `be-persuaded` — sign-up is a conversion event; left cinematic panel does the persuasion work, right form is the conversion mechanism |
| **Success** | 「3 秒內感受到品牌情緒、10 秒內已開始填第一個欄位」 |
| **Density** | `low` — one screen, two regions, no parallel content streams |

---

## Commit Before Code

**(a) Tone — contrastive rules**
- editorial-cinematic, **not** glamour-magazine sheen
- 安靜 quiet, **not** boring
- 暖暗 warm-dark, **not** moody-vampire / gothic
- crafted (裱褙感), **not** vintage / retro
- 從容 patient, **not** 緩慢 slow-loading

**(b) Star** — left cinematic panel: full-bleed monochrome tone block + serif caption read like a paperback first line. Form is *not* the star; it's the ritual action after.

**(c) Motifs**
- Hairline 1px short rules as paragraph-break (not full-width dividers)
- Chapter number prefix `01 ／` echoed at two scales (right eyebrow + left plate-label)
- Plate metadata typesets at top + bottom of media panel (DAILY UI ／ 001 + PLATE 01 · DAYBREAK)

**(d) Anchor refs**
- Aesop product imagery + label typesetting (low-saturation, single hero, serif caption below)
- The Browser Company / Arc onboarding first screen (warm, calm, deliberate, one-question-at-a-time)

**(e) Anti-goals**
- not Notion / Linear sign-up (gradient hero + 2-CTA + Google hard-stack)
- not Apple sign-up sheet (frosted glass on photo bg, centered)
- not Webflow / Framer marketplace "premium portfolio" sign-up (oversized serif + abstract gradient + ghost button)

**(f) Color strategy** — **Committed**: two anchored tones (`color/fg` deep on left panel, `color/bg` cream on right panel) + single saturated `color/accent` reserved for Continue button only. No gradient, no glow, no third color.

**(g) Scene sentence** — 「深咖啡色的清晨書房裡，一張裱褙過的黑白照片靠在牆邊；桌上攤開一張米白色信紙，墨水剛乾。」

---

## Archetype + sanity gate

**Atmospheric Photo-Led** (page) + **Editorial Manuscript** (form as a chapter section), hierarchically combined.
- Citation: `archetype-cheatsheet.md` § Archetype selection: `be-persuaded` × `low` → "Typographic Hero · Atmospheric Photo-Led"
- Citation: `archetype-cheatsheet.md` § Combining archetypes: "Atmospheric Photo-Led (page) + Editorial Manuscript (story sections)"

**Sanity verdict**: PASS. Reads as Awwwards SOTD direction (full-bleed media + serif caption + plate metadata + underline-only form), not SaaS (no gradient hero, no 2-CTA, no social-login hard-stack).

---

## Mode reconciliation

- Publisher `collectionModes` = `['Light', 'Dark']`
- Scene requires left-dark / right-cream → Page mode = **Light**, left panel achieves dark via `color/fg` fill (token still owns the value; Dark-mode toggle would invert correctly).
- PASS, no STOP required.

---

## Type pair

- Latin chrome (metadata, labels, form text, button): **Inter** (publisher token `typography/family/latin` = "Inter", Tech preset)
- CJK protagonist (title + caption): **Noto Serif TC** Light / Regular, applied via direct `fontName` since publisher token is sans-serif (Tech preset). Trade-off: token edits won't propagate to display text — flagged as compose-time freshness, parallel to leading resolve-then-set pattern.
- Hand-off swap target (future, in Figma desktop UI): Gambarino display / Switzer body / Noto Serif TC stays.

---

## Edit Pass summary

4 visible iterations (v01 → v04). Final formal sweep: **0 token drift / 0 codegen issues** across 33 nodes.

| Pass | What changed | Why |
|---|---|---|
| v01 | Initial compose | baseline |
| v02 | Title + caption → Noto Serif TC; PhotoPlate inserted in media middle; hairline opacity bumped | CJK fallback to sans broke editorial gravitas; middle panel was empty |
| v03 | Plate size 440×300 → 480×320; plate opacity 0.08 → 0.22; caption opacity 0.45 → 0.65 | plate was visually invisible |
| v04 | Frame opacity → paint opacity on plate; removed redundant inner caption; plate 480×360 (4:3 photo aspect) | inner caption inherited opacity-multiplied invisible; aspect ratio refinement |

---

## Follow-up debt

- **375 mobile breakpoint** — deferred (Daily UI portfolio uses 1440 screenshot; mobile reflow listed for series-wide tooling pass)
- **State variants** — Input / Button currently default-only; full `state=hover/focused/disabled` matrix deferred
- **Editorial preset republish** — Consider republishing minimal-ds with `typography/family/latin` = "EB Garamond" or "Gambarino" for editorial sub-series; would let display text bind to token instead of compose-time fontName
