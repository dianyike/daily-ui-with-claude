# Takeaway · Daily UI 022 — Pattern Hunt Cold-Case Corkboard

蒸餾 mechanism layer，不是 surface。下個 entry 遇到「search 機制 / 多 entity → 1 convergence / forensic procedural / corkboard physicality」這類 brief 可以直接搬。

---

## 1. Search as node-link convergence, NOT search-bar + result-list

Daily UI 022 = Search。**SaaS 預設機制**：text input → typeahead dropdown → result list (cards) → filter sidebar → sort dropdown → pagination → "0 results" empty state. 這套 chrome 撐起 100% Awwwards 以下 search interfaces。

**022 反規 mechanism**：
- search query = central convergence node (PATTERN NODE №7-MID)
- search results = 5 satellite entities (victims) connected to center via red lines
- relevance ranking = string thickness / status icon (◉ MATCH vs ○ NO-MATCH)
- filter = sticky tag chips integrated into wall surface, NOT a sidebar
- sort = chronological column in cross-reference table, NOT a dropdown
- pagination = "ROWS 1—23 OF 23" footer, NOT page numbers
- empty state = wall with no strings drawn (機制即 affordance)

**通用 rule**：當 brief 是「多源頭資料收束到單一答案」（search / fraud detection / diagnostic / pattern recognition / cluster analysis），用 **central node + satellite edges** 結構，relevance 用 **edge attribute**（粗細 / 顏色 / 樣式）編碼，避開「列表 + 計分」的 SaaS 直覺。Diagram archetype 的 Signature motif（connectors, ports, flow paths）必須結構性地承載頁面，不只裝飾。

Adjacent registers 可用：tech-spec network topology / forensic procedural / scientific paper figure / archival schematic / OPS dashboard relational view.

---

## 2. Single saturated accent with role multiplexing

整面 forensic 冷白基調 + 1 個 saturated accent（forensic-red #C8362B）扮演 **9 個結構性 role**：

| Role | 出現位置 |
|---|---|
| Section divider | 紅 hairline 1px 出現於 S1 底邊 + S5 頂邊（過渡 stitch） |
| Convergence string | 5 條 1.5px 紅線從 victim photo 收束到中央 PATTERN NODE |
| Anchor pin | 5 個 10×10 + 1 個 14×14 紅 ellipse 標記線端 |
| Status MATCH indicator | ◉ 紅圓點（vs ○ 灰圓 = NO-MATCH） |
| Section eyebrow bullet | 5 節都用 8×8 紅 ellipse + "SECTION N · ..." mono bold 紅 |
| Active control | ACTIVE pill stroke / VERIFIED seal stroke / FILTERS tag bg |
| Cursor / typing | query input 末尾 8×18 紅 rect 模擬輸入游標 |
| Page marker accent | "R1 R2 R3" 紅 tag 在 rule cards / "←" 紅箭頭 in adjacent cases |
| Confidence reach | 74% 紅 fill + 紅 marker + 紅 % 數字（progress + value 都紅） |

**通用 rule**：restrained color strategy 不是「只用一色」、是「**一色多役**」。一個 saturated accent 串連整版各 section、各 role，產生「整頁讀起來是同一篇」的視覺一致性。比用多色 brand palette 更節制、比純黑白更有溫度。Awwwards SOTD restraint-register entries 常用：Aesop 黃 / Audemars 深綠 / Bottega 黑（黑作 accent on light）/ Vignelli 紅。

---

## 3. Anti-portrait via chalk silhouette + functional label

[[no-bw-portraits-zh]] memory：grayscale portraits of real people = 遺照 in zh-TW context。但 forensic procedural brief 主角就是 5 名（虛構）受害者，**遺照 IS the genre**。如何在不觸發禁忌的同時保留 procedural 質感？

**022 解法**：用 **chalk-outline silhouette + functional label**，不放實際肖像：
- 132×184 photo paper card（forensic-photo white + 紙邊 stroke + drop shadow + 微旋轉 ±2°）— 保留物理感
- 內部 116×130 graphite block（#2D2D33）— 暗示「人影但抽象化」、不是真實 portrait
- 下方 V.N + NAME + DATE mono label — 提供必要 forensic identification
- ◉ MATCH / ○ NO-MATCH 狀態 icon — 補語意

**通用 rule**：當 brief 主題 inherently 涉及敏感肖像（醫療 / 法醫 / 死亡 / 受害者 / 罪犯 / 失蹤者），**抽象 silhouette + functional label** 是合法替代。讓觀者讀到「這裡有個人 entity 在被檢視 / 處理」，但避免具象化的尊嚴問題。Adjacent applications：anonymized user testing / 醫療隱私 case study / 警方公告 / 失蹤人口 database UI / criminal record archive。

---

## 4. BG-rhythm thread-stitch for ≥3 section briefs (alternative to bridge bands)

[[break-stacked-card-feel]] memory：multi-section ≥3 sections need ≥2 thread-stitch mechanisms (BG-rhythm / bridge-bands / vertical-thread / plate-transitions)。

**daily-020** 用 bridge bands（4 個 PLATE I→V mission delimiters）+ 連續 spiral binding + plate-transition italic = 3 mechanisms。

**daily-022** 走另一條路：**BG-rhythm 5 節交替** + 紅 thread 橫貫 + 一致 SECTION I-V eyebrow band = 3 mechanisms。**不需要**獨立 bridge bands between sections（節間直接 butt，省 4 個 strip 的 chrome 開銷）。

5 節 BG 律動：
```
S1 forensic-paper #F4F2EC (warm light)
S2 forensic-wall  #D8D5CE (cool darker — the wall itself)
S3 forensic-paper #F4F2EC (back to light)
S4 forensic-photo #FCFBF8 (lighter paper white)
S5 forensic-wall  #D8D5CE (return to wall, frames the page)
```

Light → Dark → Light → Lightest → Dark 的非單調起伏（不是 light → dark → light 三明治 也不是 lightest → light → dark gradient）— **不可預測但有節奏**。S5 回到 S2 的 wall 形成「全頁始於 paper 終於 wall」的 frame-and-content 結構（wall 是封底）。

**通用 rule**：multi-section briefs 不一定要有 bridge bands。**BG 顏色節間律動 + 統一 inline section header pattern** 也能達成 thread-stitch。前者適合 historical-document register（如 daily-020 with PLATE markers），後者適合 procedural / techno-spec register（chrome 已經密、再加 bridge bands 過重）。

---

## 5. Typography opacity ladder as hierarchy substitute when token palette is thin

minimal-ds 只有 2 個文字 token: `color/fg` (full black) + `color/fg-muted` (#737373 mid-grey)。但 procedural register 需要 4-5 tier 視覺 hierarchy（heading / body / muted / hint / disabled / decorative）。

**3 條路**：
1. 加更多 grey tokens (color/fg-dim / color/fg-faint) — 污染 minimal-ds + 每個 entry 都要重建
2. 使用 saturated accent 區隔 (但會破壞 restraint)
3. **單一 ink token + opacity ladder** — 我們選這個

**022 ladder**:
- 1.0 opacity = primary heading / data value（DET. DIANYI IKE / №7-MID / 23 evidence numbers）
- 0.6 opacity = body text / subtitle / role description
- 0.45 opacity = meta dim text（dates, timestamps, badge numbers）
- 0.35 opacity = ○ NO-MATCH icons / inactive states
- 0.18 opacity = bar tracks
- 0.06 opacity = grid mesh background lines
- 0.025 opacity = zebra row stripes

實作關鍵 — **F11 trap**：bound color variable 的 paint 在 `fills` 賦值時 paint-level opacity 會被 reset 為 1。解法：
- **node-level opacity** (no children, or text without子 layers) → 多數情況用這個
- **leave unbound + literal RGB + paint.opacity** → row stripes 必須這個（row 有 text children, node.opacity 會傳染 text）

不是純粹的「全用 token」教條 — 是知道 trap 在哪、知道哪些 cosmetic drift 不可避免、把不可避免 documented as intentional。

**通用 rule**：register 的視覺 hierarchy 超過 token palette 涵蓋時，**ink + opacity ladder** 是合法擴充。把 audit drift 分類為「應修 P1」vs「documented intentional」、不是把 audit 100% 通過 視為唯一目標。

---

## 6. The "wall" is both BG AND content (Object Metaphor + Diagram hybrid)

S2 WallCanvas 嚴格說來不是純 Diagram archetype — 它兼具：
- **Object Metaphor** layer：整個 section IS a corkboard（forensic-wall #D8D5CE 是牆面 BG、photo cards 是物理釘上去的物件、red strings 是物理棉繩）
- **Diagram** layer：5 satellites → 1 central node 是 schematic relational structure

Archetype 不必純粹單一。Hybrid 在 functional briefs 尤其常見：
- Music player = Instrument Panel + Object Metaphor (the device)
- Map app = Map archetype + Receipt-style trip ticket
- Forensic search = Diagram + Object Metaphor (the wall)

關鍵：**一個 archetype 主導 layout grammar、另一個提供 surface metaphor**。022 是 Diagram-led layout（左右節 schematic、表格 manifest 是純 Diagram）+ Object Metaphor surface（S2 wall 是 metaphor、S5 stamp seal 是 metaphor）。

**通用 rule**：當 brief 同時有「網路結構」+「物理裝置」感（forensic / scientific / industrial / archival），不要強迫單一 archetype。Pick the structural one as parent + add object surface as accent。

---

## 7. Anti-pill discipline for procedural register

S1 ACTIVE pill / S5 VERIFIED seal / Filter tags / Rule R1 R2 R3 tags — 都是「looks like a pill / badge」但**避開 SaaS 預設 pill pattern**：

| SaaS pill default | 022 substitution |
|---|---|
| `border-radius: 9999px` | `border-radius: 0`（全部 sharp corners） |
| 飽和 brand color bg | 透明 bg + 紅 1px stroke（or 紅 fill 倒色 white text 只在 Filter tags） |
| 中性 grey text | 飽和 forensic-red text + uppercase mono caps + letter-spacing 12-16% |
| 24px height | 變動 — 不固定 pill size，contextual sizing |
| icon-only or text-only | **icon + text + 雙重編碼**（◉ dot + ACTIVE text、← arrow + caseno text） |

**通用 rule**：procedural / forensic / technical / archival registers 中，rounded pills 是 SaaS 信號。改用：
- Sharp-corner labeled boxes with 1px stroke
- Mono caps with 12-16% letter-spacing
- Double-encoded icon + text
- Variable sizing per context

這 4 條改變的累積效果遠大於單一改動 — 整頁讀起來不再像 SaaS dashboard。

---

## Cross-entry mechanism map

| Mechanism | First seen | Reused in | Notes |
|---|---|---|---|
| node-link convergence as search | daily-022 | — | Diagram archetype Signature motif |
| chalk silhouette anti-portrait | daily-022 | — | sensitive subject treatment |
| BG-rhythm thread-stitch (sans bridge bands) | daily-022 | — | alternative to daily-020 bridge bands |
| ink + opacity hierarchy ladder | daily-022 | — | answer to thin token palette |
| single saturated accent multiplex (9 roles) | daily-022 | (extends daily-017 vermillion / daily-021 mission-warn) | restraint via role overload not chroma minimization |
| anti-pill procedural register | daily-022 | — | sharp-corner labeled boxes |
| Diagram + Object Metaphor hybrid | daily-022 | — | wall-as-object + nodes-as-diagram |
| corkboard physical mechanism (string + pin) | daily-022 | — | source: cartoon insurance illustration, surface stripped |

---

## When to revisit this entry

Reach for daily-022 patterns when next brief involves:
- search / pattern recognition / cluster analysis / fraud detection / forensic / archival
- multi-source → 1-convergence reading
- physical artifact metaphor without cartoon illustration
- sensitive portrait subject (memorial / medical / criminal)
- thin token palette but rich hierarchy needs
- procedural / lab / archival register avoiding SaaS chrome
