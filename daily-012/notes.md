# Daily UI 012 — E-Commerce (Single Item) · Maison Lumen N° VII

## Locked brief (Purpose Triad + 8 Commit items + archetype)

### Purpose Triad
- **Intent**: `be-persuaded` 為主（讓重視形象與生活風格的目標客群「感覺自己屬於這裡」才買），purchase affordance 存在但不焦點化。
- **Success criterion**：使用者讀完 hero 後**主動下捲**至 Acquire section，並能在 size selector 看清 50ML / €240 為預設選項。
- **Density**：medium-low。單品電商、視覺主導、文字精準少量。

### Commit Before Code（8 項，含 §2 gate 2 register）

| # | 項目 | 鎖定值 |
|---|---|---|
| (a) | Tone (X but not Y) | editorial but 非 archival-dusty / archival but 非 austere / Parisian but 非 stereotype / 量度 but 非 distance |
| (b) | One named star | 滿版 hero 中的方切玻璃香水瓶（cream paper bg + 自然光柔影） |
| (c) | Motifs (3) | 方切玻璃 + 奶油紙柔影 / 微 caps tracked chrome (eyebrow + serial) / italic accent in display serif |
| (d) | Anchor refs (≥2) | Aupale Vodka (quiet-luxury) · Oryzo cork coaster (editorial-magazine) · Aesop product page · Chanel N°5 packaging codes |
| (e) | Anti-goals (3) | not 金色奢華刻板（gradient gold / baroque flourishes）/ not DTC 美妝 SaaS 樣板（dual CTA + 5-star + free-shipping pill）/ not Instagram 美學濾鏡（pink-peach gradient + handwritten font） |
| (f) | Color strategy | **Restrained** — color/bg (#FFFFFF) + color/fg (near-black) + photo 自帶的暖金液體作 photographic accent；color/accent 已中性化為 #6B6B6B（避開 reflex orange） |
| (g) | Scene sentence | 「白晝的紙樣本上，一只方切玻璃瓶投下柔影，像時裝屋的檔案頁。」→ **LIGHT MODE locked** |
| (h) | Register | **editorial-magazine** 微 quiet-luxury（巴黎檔案目錄調，非美妝 DTC、非 Vignelli Swiss、非 brutalist） |

### Type pair
**Editorial preset**（MCP compose proxy = Inter — publisher 預設）。
- Latin compose proxy: Inter（Regular / Italic / Medium / Bold）
- Hand-off swap target: **Gambarino**（display 88px / 48px）+ **EB Garamond**（body 16px）+ Inter（caption / chrome 12px）
- CJK 未使用（品牌敘事為法文 + 英文，無 zh-TW 在頁面內容）

### Mode reconciliation
Scene = light；publisher `collectionModes = ['Light', 'Dark']` → PASS。Light mode 為 default。

### Archetype
**Atmospheric Photo-Led**（parent）+ **Editorial Manuscript**（story sections — Notes / Provenance / Acquire）

> Hero 段：滿版照片 carries `be-persuaded` 的 first-touch — 攝影本身就是說服。
> 後續 sections：Editorial Manuscript 單欄敘事 + 標號 eyebrow + 章節 hairline rule，避開 SaaS feature-card 三排格。
>
> Anti-template sanity gate：PASS — 非 centered-hero + dual-CTA + 3-card grid + footer 的 SaaS shape。Asymmetric overlay tableau（photo full-bleed underlay + text plates overlay-left）+ 多區段 vertical scroll（每段 single-column）。

### Zone map (1440 hero)
左文右圖 diptych 改為 IMAGES 滿版 underlay + text plates overlay-left（使用者拍板：「圖片滿版在後面 尺寸很適合 然後圖片剛好物品剛好在右邊」）。User 微調 TEXT 至 x=120、INFO 至 x=160 y=704。

Acceptance criteria：
- (1) Asymmetric variance：IMAGES 1.296M vs META 11K = ~117× ✓
- (2) Edge anchoring：IMAGES bleeds 四邊 ✓
- (3) Star + rank：1 個 r1（IMAGES = brief 鎖定的瓶子主角）✓
- (4) Role variety：5 roles（HEADER / META / TEXT / INFO / IMAGES + colophon）✓

## Figma 檔
- **fileKey**: `bDA9MWzNRM9My6grhlE8fj`
- **URL**: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100
- **ZoneMap-1440 reference**: `320:50`
- **Hero - 1440**: `324:53`（含 Overlay-HeroTableau `324:54` + Photo-Hero `324:55` + Colophon `329:50`）
- **Notes - 1440**: `333:52`
- **Provenance - 1440**: `334:52`
- **Acquire - 1440**: `335:52`
- **Footer - 1440**: `337:52`
- **Hero - 375**: `338:53`
- **Notes - 375**: `339:54`
- **Provenance - 375**: `339:72`
- **Acquire - 375**: `340:53`
- **Footer - 375**: `340:73`
- **Component set**: `Button-AcquireCTA` `336:63`（4 state variants：default `336:51` / hover `336:54` / focused `336:57` / disabled `336:60`）
- **Image hash** (perfume photo, reused across 1440 + 375): `1003ff408f0ae7279be738973770547d798923e5`

## Section breakdown

| Section | 1440 size | 375 size | Pattern |
|---|---|---|---|
| Hero | 1440×900 | 375×720 | Atmospheric Photo-Led — photo full-bleed underlay + asymmetric text plates overlay-left + bottom colophon overlay-right |
| Notes (Les Notes) | 1440×720 | 375×760 | Editorial pyramid — 3 rows `TÊTE / CŒUR / FOND`, widening hairlines (80 / 160 / 240 → 48 / 96 / 144 at 375) 視覺化香調金字塔 |
| Provenance | 1440×720 | 375×800 | Editorial paragraph + 香水師 attribution side meta（1440 雙欄、375 vertical stack） |
| Acquire | 1440×900 | 375×920 | Editorial size selector（50ML 反白成黑底白字，非 pricing card grid）+ 全寬黑色 CTA（quiet-luxury 非 SaaS pill）+ 中性化 shipping footnote |
| Footer | 1440×240 | 375×240 | Minimal logo + tertiary nav + colophon serial restate |

## Edit Pass 結果

### 10 sweeps（awwwards-rules §5）
- 5.1 Direct comparison：PASS（每區段回溯到 Commit 鎖定值）
- 5.2 AI-slop sweep：PASS（無 gradient text / glow / glassmorphic card / 3-card grid / reflex 橘藍 / "Learn more" copy）
- 5.3 Squint test：PASS（photo 確實第一主角，display 標題第二，chrome 第三）
- 5.4 State coverage：PASS（Button-AcquireCTA 4 variants 完整；size selector 有 selected/unselected 視覺差）
- 5.5 Fact-uniqueness：PASS（N° VII / ÉDITION HIVER 2026 / Grasse 各角色不同：headline ref / footer breadcrumb / 出處 colophon）
- 5.6 Heuristic gut-check：~28/40（brand portfolio 合理）
- 5.7 Severity tagging：0 P0 / 0 P1
- 5.8 Polish details：PASS（token-bound、無 stray px、無 widow）
- 5.9 Don't perfect one corner：PASS（5 sections 質感一致）
- 5.10 Accessibility sweep：PASS（focus-ring 變體可見 + ≥24px tap target + 對比 >7:1）

### audit.js 機械化掃描
- scopeCount: 166
- tokenDrift: **0**
- codegenIssues: **0**
- crossBreakpointDrift: **0**（skeleton-only sweep，視覺檢查通過）
- missingStates: **0**

## Responsive collapse rules (feed Phase F responsive.md)

| Section | 1440 → 375 |
|---|---|
| Hero | reorder：nav padding 80 → 24；display text/display(88) → text/h1(48)；headline rule 48 → 32；photo 維持 full-bleed (image hash reused)；text plates 維持 overlay-left |
| Notes | restack：pyramid rows 從水平 (TAG + RULE + ACCORDS 同行) → 垂直 (TAG+RULE 一行 + ACCORDS 下行)；title text/h1 → text/h2；rule widths 80/160/240 → 48/96/144 |
| Provenance | restack：雙欄 body + perfumer meta → 垂直 stack（paragraph 上、rule + perfumer + role 下）；title text/h1 → text/h2；side coords meta hide |
| Acquire | retain layout：size rows 維持 selected/unselected 反白；padding 24 → 16；CTA 從 1200×72 → 327×56；title text/h1 → text/h2 |
| Footer | restack：top row 水平 (logo + nav) → 垂直 stack；bottom row 同樣 stack；nav links 字距 8% → 6% (擠進 327px) |
