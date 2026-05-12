# Daily UI 009 — Music Player

## Locked brief

### Purpose Triad
- **Intent**: `feel-atmosphere` (engineer-console mood) + secondary `acquire-info` (read meters, signal)
- **Success**: Within 3s, viewer recognises a 1986 broadcast control room — not a Spotify clone. Wants to keep watching meters move.
- **Density**: high — many parallel streams (spectrum + dual VU + timecode + track list + chrome + transport) visible at once.

### Commit Before Code

1. **Tone (X but not Y)** —
   - phosphor-glow, not neon-blaze (single hue, no rainbow)
   - engineering-precise, not corporate-utility (callouts composed editorially)
   - information-dense, not cluttered (every datum has a job)
   - 1986 Tokyo, not Miami sunset
   - city-pop melancholy, not vapor kitsch

2. **Star** — dual-channel spectrum + VU meters (the eye lives there; always animating)

3. **Motifs** —
   - CRT scanline horizontal banding (~14% opacity, 4px spacing)
   - Phosphor afterglow / chromatic fringe (web-only, via CSS text-shadow)
   - Engineering callouts (CH-1/2, dB scale, JST timestamp, MOON-28018 catalog no, BVE-9000 model)

4. **Anchor references** —
   - Sony BVE-9000 broadcast editor (1986)
   - Yamaha NS-1000M monitor speaker brochures
   - Mariya Takeuchi *Variety* (1984) back-cover credits typography
   - NeXT / Atari ST CRT terminal readouts

5. **Anti-goals** —
   - NOT Miami Vice palm-sunset purple/pink synthwave template
   - NOT Outrun chrome grid / DeLorean
   - NOT Spotify-clone bottom-bar player UX
   - NOT default Tailwind dark-mode glass card
   - NOT a16z fintech "retro" thin gradient on black

6. **Color strategy** — **Drenched** single phosphor-green hue family, amber strategic accent (peak alarms / ON AIR dot / current-track marker / main Play button).

7. **Scene sentence (forcing Dark)** — *It is 23:47 JST, 第13號棚 control room, the engineer's CRT is the only light source — the deck has just rotated past track 03 of side B, peak meters are bouncing toward the red, and the room hums in the C-pitch carrier of three CRTs running in parallel.*

### Archetype
**Bento Asymmetric** — single-screen multi-weight cells. Spectrum cell is full-bleed-wide (the star). Below: NowPlaying (sleeve + meta), TrackList, VUColumn — each cell sized by content weight, not uniform.

Editorial sanity gate: **PASS** — concrete anchor references and engineering specificity (JST, MOON-28018, BVE-9000, Mariya Takeuchi) make this read as a 1986 broadcast deck, not Generic Synthwave Music Player Template.

## Local palette (Daily009-Scene variable collection)

The minimal-ds Dark mode publishes neutral dark colors; the CRT phosphor green scene needs a palette override. Built a local alias collection (`Daily009-Scene` / mode `CRT`) per minimal-ds `figma-mcp-findings.md` §8 Q4 escape hatch.

| Variable | RGB | Role |
|---|---|---|
| `color/scene/bg` | `#081109` | Deep phosphor black (canvas) |
| `color/scene/bg-alt` | `#0d1c14` | Chrome strip / cell fill |
| `color/scene/fg` | `#6efeb0` | Primary phosphor green |
| `color/scene/fg-dim` | `#388765` | Dimmed phosphor (labels, secondary text) |
| `color/scene/fg-faint` | `#23503c` | Faint phosphor (hairlines, off states) |
| `color/scene/alarm` | `#ffaa00` | Peak amber / current-track marker / play button |
| `color/scene/grid` | `#152d21` | Cell borders / grid lines |

## Type pair
- **IBM Plex Mono** (Regular / Medium / Bold) — Latin engineering callouts, titles, eyebrows. Substitutes minimal-ds `typography/family/latin` for this scene (precedent: Daily 008).
- **VT323** — bitmap CRT font for timestamps, dB readouts, track durations. Used in tightly-bounded contexts only (the "live data" feel).
- **Noto Sans TC** — CJK (`プラスティック・ラブ` / `竹内まりや`). minimal-ds `typography/family/cjk` proxy.

## Token discipline check
- **0 token drift** — 687 nodes walked / 549 SOLID fills / 42 SOLID strokes — 100% bound to either minimal-ds tokens or the Daily009-Scene local alias collection.
- **State variants** — `TransportButton` component set has full `state=default/hover/focused/disabled` coverage (Edit Pass §5.4 state-coverage sweep: PASS).
- **Multi-breakpoint** — both `1440` and `375` use identical structural tokens; only sizing tokens (`text/*`, count of spectrum bars) collapse appropriately.

## Collapse rules (1440 → 375)
- **TopStrip**: `collapse` — drops CH/STEREO/TX-LOCK/PEAK details, keeps ON AIR + JST timestamp.
- **Spectrum**: `reorder + collapse` — 32 bars → 20 bars, same dual-channel feel.
- **NowPlaying**: keep horizontal sleeve+meta but downscale sleeve 240→108, drop runtime/BPM/key bottom block.
- **TrackList**: `collapse` — 9 visible → 5 + "+4 MORE TRACKS" cue, drop secondary JA romaji line.
- **VUColumn**: `restack` — vertical needle-gauge layout → horizontal bar layout below TrackList.
- **Timecode**: keep, full width.
- **Transport**: `collapse` — 5 playback buttons → 3 (drop Rewind/FastFwd, keep Prev/Play/Next). Toggles stay (3). Volume meter dropped on mobile.
- **BottomStrip**: `collapse` — keep "STUDIO 13 · BVE-9000" + "DAILY UI 009", drop full copyright credit.

## Figma archive
- **File**: `bDA9MWzNRM9My6grhlE8fj`
- **Frame 1440**: `Daily 009 — Music Player - 1440` — node `152:10`
- **Frame 375**: `Daily 009 — Music Player - 375` — node `166:7`
- **Component set**: `TransportButton` (4 state variants) — node `158:10`
- **Local variable collection**: `Daily009-Scene` (7 variables, mode `CRT`) — id `152:2`
- **Direct URL**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=152-10

## Web implementation
See `web/index.html` — animated phosphor monitor with live spectrum, VU needle motion, scanline shimmer, and timecode cursor; `prefers-reduced-motion` honored. Tokens declared at `:root` for parity with minimal-ds + Daily009-Scene.
