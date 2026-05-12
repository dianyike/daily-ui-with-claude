# Takeaway — Daily UI 010 / Social Share

> Distilled mechanism card. Mechanism, not surface.

## Mechanism

**「分享」當成郵寄一張明信片」的儀式 — 慢、有重量、可見的物件動作，反 viral 反 share-sheet。**

When the share action becomes a *physical metaphor* (selecting a stamp, pressing ink, watching the cancellation bleed), the cognitive register shifts from "viral broadcast" to "deliberate mailing". Anti-default to all SaaS share UI which optimises for instant click-and-spray.

## What carries the metaphor

| Layer | Editorial pattern | What it does |
|---|---|---|
| **Object** | Postcard card with stamp on top-right corner | Subject of the share IS the artifact, not a content URL |
| **Mark** | Penny-Black-inspired stamp (single ink, mono caption, denomination) | Anti-icon — feels archival, not branded |
| **Action** | Press 印泥下沉 (scale-down + invert) → cancellation chop drops in (scale 0.4→1.12→1 with rotation jitter) | The press IS the share; the chop is the receipt |
| **Receipt** | Posted line (mono ledger) + cancellation chop on card body | Two registrations: ledger record + visual stamp — both belong on the postcard, neither in chrome |

## Token recipe

- **Color** — Restrained (Light): vellum bg + single deep ink fg + single accent (cancellation red). No third hue.
- **Type pair** — Inter for display glyph, Noto Sans TC for message pull-quote, IBM Plex Mono for ALL ledger / label / caption / denomination text (the "postal monospace" carries the typographic-postal motif).
- **Motion** — kinetic without bouncy. Press = 200ms scale-down + invert. Chop = 460ms scale with overshoot (1.12→1) + locked rotation. Rotation gets ±4° jitter per press to feel hand-stamped, not stamped-by-script.

## Why it works

1. **Single-channel narrative** — only ONE channel is "currently posted" at any moment (toggleable, no consumption). The hero stamp + chop both update on every press. State = the currently-stamped channel, nothing else.
2. **Anti-wallpaper discipline** — date/time appears ONCE in the cancellation chop area (chop + posted line, both on the postcard). No footer date, no header date. Removing chrome date duplication is what stops it reading SaaS.
3. **Editorial labels do real work** — `01 寄件人` / `02 收件人` are not decoration; they segment the artifact into reader-walkable parts. Tried adding `03 STAMP` margin label — pulled it because the hero stamp + chop visually own that segment without a label pointing.

## Anchor refs honored

- Royal Mail Penny Black — single-color print + small denomination + mono caption
- Aesop receipt card — cold typographic luxury, no mascot, no emoji
- Japan Post Aerogramme — paper-craft register, no glossy SaaS sheen

## Anti-goals defended

- ✗ Mailchimp friendly mascot cartoon stamps
- ✗ Etsy hand-drawn craft stickers
- ✗ Notion emoji button row
- ✗ Twitter / X gradient share sheet

## Reusable for next time

- The **press → chop drop-in animation** generalises to any "deliberate registration" interaction (sign-in, confirm-send, archive-this) — when you want the user to feel they did something physical, not flashed a button.
- The **`01 / 02` labeled segmentation** generalises to any artifact-as-page composition where the reader needs to parse a multi-region object (form receipts, ticket stubs, label cards).
- The **toggleable single-channel model** (no consumption, just latest-wins) is the editorial alternative to multi-select share — communicates intent ("I want this to land at X") over volume ("blast everywhere").

## Source

- Figma file: <https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100>
- Frame 1440 node id: `181:2`
- Frame 375 node id: `189:26`
- Stamp component set: `178:22`
