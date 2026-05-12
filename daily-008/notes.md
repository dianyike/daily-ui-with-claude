# Daily UI 008 — 404 Page

## Figma
- File: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100
- Desktop frame node: `117:2` — `Daily 008 — 404 Page - 1440`
- Mobile frame node: `124:2` — `Daily 008 — 404 Page - 375`

## Direction (locked)
**Direction chosen**: Comic Strip Panels — 4-panel sequential narrative `click → fall → wander → home`. Lane: illustration / character / sequential storytelling.

## Purpose Triad
- **Intent**: `feel-atmosphere` (primary) → `be-persuaded` (secondary: back to home)
- **Success criterion**: 訪客看完 4 格漫畫 + 點 CTA（而非關 tab）
- **Density**: `low` (4 panels + 1 hero title + 1 CTA + footer chrome)

## Commit Before Code (7 items)

**(a) Tone — contrastive rules**
- 線條乾淨 **but not** 童書插畫 / Mid-Journey 角色感
- 默劇式 deadpan 幽默 **but not** Slack-sticker 嬉鬧
- 螢光螢幕質地（grid / noise）**but not** vaporwave / Y2K nostalgia
- 角色簡筆 stick figure **but not** Notion-illo / Apple Memoji 風

**(b) Star** — 4-panel comic strip (`[click] → [fall] → [wander] → [home]`). Title, CTA, footer chrome all subordinate.

**(c) Motifs**
1. 方格分鏡框 — 4 個等寬黑框，2px stroke
2. 點點軌跡 — Panel 03 trail dots (figure leaves dotted footstep), Panel 04 chevron arrow trail
3. 格與格之間的「跨界」線 — DEFERRED to web/ implementation (cleaner via SVG crossing panel boundary than via Figma auto-layout)

**(d) Anchor refs**
- **xkcd / The Oatmeal** — 條漫骨架（單格 = 一個 idea，4 格成完整 beat）
- **Tom Gauld** (New Yorker) — deadpan 黑白方格 + 細線
- **Lynda Barry** — 手繪框 + 角色不對稱

**(e) Anti-goals**
- ❌ Dropbox / Mailchimp 風 friendly mascot 大眼角色
- ❌ Isometric 3D illustration (GitHub 404 octocat 風)
- ❌ Huge 404 typography 當背景（Daily UI cliché #1）
- ❌ Gradient / glow / drop-shadow (vaporwave / Y2K trap)

**(f) Color strategy**: `Restrained`
- `color/bg` 紙白 + `color/fg` 黑線稿 + `color/accent` 單點橘紅（只用在 Panel 04 指向手勢 + chevron 箭頭 + CTA arrow + Panel 04 corner dot）
- 兩個結構色 + 一個 reserved accent

**(g) Scene sentence**
> 白紙上 4 個黑框，一個 stick figure 在格子間走失，最後一格用橘紅手勢指向 home。
> → Light mode primary（漫畫紙感 = 白底），Dark mode 由 web toggle 補上

## Archetype
**Selected: Cinematic Scroll** (`archetype-cheatsheet.md` §5) — "scroll itself is choreography ... each scroll moment is a beat in a sequence" 字面對應 4 panels 逐格揭示。
**Combine**: Cinematic Scroll (page) + Manifesto-style opening title (first beat, before strip)

**Sanity check**: SaaS 404 = 巨大 404 字體 + 3D illo + pill button「Back to home」。**全部不做**（anti-pattern table 全避開：text link 取代 pill button、單色 accent、underline-grow 不用）。Awwwards SOTD 條漫式 404（Studio Maw / Sennep / Robin Mastromarino）= ✅ 對版。

## Typography pair (per minimal-ds §1.4)
- **Latin (MCP-proxy)**: IBM Plex Mono — caption / panel number / footer chrome
- **CJK**: Noto Sans TC — display title, body copy, captions
- **Why mono**: 條漫的 caption（`click` / `fall` / `wander` / `home`）讀起來像 terminal 對白，等寬強化「事件序列」感

## Edit Pass log
| # | Finding | Severity | Fix |
|---|---|---|---|
| 5.1 | Motif #3「跨界線」未實作 | P2 | Defer to web/ (SVG crossing panel boundary) |
| 5.3 | Title 112px 過度搶 star | P1 | ✅ Resized to 80px |
| 5.4 | CTA state variants 未建 | P2 | Document in web/ CSS (default + hover + focus + disabled) |
| 5.5 | Top plate vs footer 都有「404 · DOC NOT FOUND」 | P1 | ✅ Top plate → "DAILY 008 · LOST DOCUMENT", footer 保留 "ERROR · 404 · DOC NOT FOUND" |
| 5.8 | Token drift sweep | — | ✅ 0 / 212 nodes |
| Polish | CTA underline rule 視覺穿過字 | P3 | ✅ Removed; CTA = arrow + text only |

## Web implementation plan
- 4 panels reveal on scroll (IntersectionObserver) + draw-on SVG stroke animation per panel
- Light + Dark mode toggle (Dark = invert: bg→fg, fg→bg; accent unchanged)
- `prefers-reduced-motion`: 仍 reveal 但去除 draw-on stroke + 縮短 stagger
- Responsive: desktop 1440 horizontal row, tablet/mobile 2×2 grid
- Keyboard: CTA reachable, focus ring uses accent at 2px
