# Takeaway · Daily UI 023 — Adventurer Guild Onboarding · Cyberpunk System Window Cascade

蒸餾 mechanism layer，不是 surface。下個 entry 遇到「onboarding / 多階段 cascade / system-driven intake / RPG game-UI 屬性視窗」這類 brief 可以直接搬。

---

## 1. Onboarding = system-event cascade, NOT welcome carousel + stepper

Daily UI 023 = Onboarding。**SaaS 預設機制**：3-5 張 welcome carousel slide + 「下一步」「跳過」+ 1/4 2/4 3/4 進度點 + 最後一張 「Get Started」CTA。或者 Setup Wizard：分步表單 + 進度條 + Back/Next。這套 chrome 撐起 100% Awwwards 以下 onboarding flows。

**023 反規 mechanism**：onboarding **不是步驟**、是 **system-event cascade**。系統依序對新人「發生」事件，每個 panel 是一個事件的 receipt：
- S1 system standby (mood — pre-event 空白等待)
- S2 credential issued (event: identity printed)
- S3 attributes revealed (event: identity quantified)
- S4 bulletin announced (event: world-state delivered to newcomer)
- S5 quest assigned (event: first task dispatched)
- S6 oath bound (event: enrollment finalized via single CTA)

關鍵差異：**no progress bar / no Back / no Skip**。Cascade 是單向的，sections N/M index 是 phase counter 非 stepper（不可後退、不可跳過）。用戶角色：被 system 「處理」而非「填表」。

**通用 rule**：當 brief 是「新成員進入既有系統」（onboarding / KYC verification / 入會 / 開戶 / 角色創建），用 **event-cascade-as-scroll** 結構：每個 scroll section = 一個 system event panel，integration 從 SaaS 的「user driving the form」翻轉成「system briefing the user」。Storyboard archetype 的 signature motif（panel gutter + consequence panels）剛好結構性承載。

Adjacent registers 可用：cyberpunk RPG game-UI（023）/ aviation pre-flight checklist / military induction / lab safety induction / scientific specimen accession / passport stamp sequence / dossier handoff.

---

## 2. Anti-portrait via hexagonal silhouette (cyberpunk variant of [[no-bw-portraits-zh]])

daily-022 已蒸餾 chalk-outline silhouette + functional label 處理 forensic procedural 受害者肖像。023 cyberpunk RPG game-UI 場景同樣會被「PHOTO」slot 拐回 anime 角色剪影（Solo Leveling 招牌肖像、Cyberpunk 2077 V 大頭照），會把 ceremony 變成同人。

**023 解法**：用 **hexagonal cyan polygon + 「PHOTO-NULL / AWAITING SCAN」label**：
- 220×290 PHOTO-NULL frame（void bg + cyan stroke）保留「卡上有照片格」物理結構
- 內部 100×120 6-edge polygon cyan 0.25 opacity — 「身分待掃描」幾何抽象，不暗示生物特徵
- 下方 mono "PHOTO-NULL / AWAITING SCAN" label — system speaks 描述當前狀態，不是 user-facing 「請上傳大頭照」

**通用 rule**：當 brief 需要「身分卡上會有人像」但你要避開：
- 真實肖像 trope（grayscale = 遺照 in zh-TW / anime 大頭 = 同人 in cyberpunk / 自拍 = SaaS profile pic）
- 用 **抽象幾何 placeholder + system-state label** 取代。讓 viewer 讀到「這裡會有 identity 但 system 尚未 mint」，不觸發任何個人圖像 trope。

Adjacent: KYC pre-verification / anonymous voting card / unhatched character slot / pre-launch wait list slot / archival placeholder for missing scan.

---

## 3. Committed 3-color role multiplex (vs daily-022 1-color restraint)

整版 deep void BG + 3 個 saturated accent，每色鎖死自己的功能 role 不混用：

| Color | Hex | Locked roles | 出現位置 |
|---|---|---|---|
| **scene/magenta** | #FF2D95 | Primary chrome / Active assertions | section eyebrow tabs (S1 NEW MEMBER / S3 MANIFEST / S6 OATH) / panel borders (S2 ID-CARD / S3 ADV-ATTRS / S4 BULLETIN / S5 QUEST-BRIEF / S6 OATH-TEXT) / ROSTER active row fill / CTA fill / Code STR/DEX big mono caps / DIFFICULTY accent / PANEL-MARKER stroke / sigil decorations |
| **scene/cyan** | #00E5FF | Secondary metadata / Networks / Admin | scan grid frame / S1 SCAN-CHIP stroke + label / S2 corner brackets + 3 metadata chips / S3 GUILD ADMIN panel + ADM-ATTRS / S4 RECENT INTAKE stroke + RECENT INTAKE header + hashtags / S5 NODE-MAP frame + ASCII / DISTRICT + DUE chip strokes |
| **scene/lime** | #B6FF3C | Alert / Status / Binding warning | S1 STANDBY chip / S2 OATH PENDING dot + label / S3 RUN-PROFILE dot + chip / S4 ALERT D-03 BREACH eyebrow / S3 STR/DEX/INT/CHA/LCK 段條 filled 部分 / S5 MISSION tab fill + PRIORITY stroke + REWARD chip / S6 OATH BINDING IRREVERSIBLE dot |

對比 daily-022 restrained 1-color forensic-red 多 role multiplex（9 roles on 1 color），023 走 committed 3-color 各自有專屬 role-set。**不是「越多色越好」**，而是 brief 需要更多語意分層（system speak 區分 chrome / metadata / alert 三層） + register 允許更高飽和（cyberpunk vs forensic atmospheric-craft）。

**通用 rule**：
- **1-color restraint**（022 forensic / 020 atmospheric-craft）適合 historical / craft / atmospheric register，accent 串連整版 + 中性 BG 控節制
- **3-color committed**（023 cyberpunk / 021 mission-console）適合 techno-spec register，多色各鎖 functional role + dark void BG 控節制

兩種都不是「多色 brand palette」（SaaS landing 用 5+ 個 vague brand color 互相不打架）。差異在於 **每個 accent 都有 locked role**，role 不可跨色互換。

---

## 4. 6-section rhythm break via mid-page horizontal-stack pivot

[[break-stacked-card-feel]] memory + [[whole-page-is-artwork]]：multi-section ≥3 sections need ≥2 thread-stitch mechanisms 避「hero + cards stack」SaaS shape。023 6 sections 需要 rhythm variation。

**023 rhythm map**：
| Section | Composition shape | Local star location |
|---|---|---|
| S1 OpeningCard | Off-grid corner-shifted | WORDMARK bottom-left |
| S2 Credential | Centered monument + 3 corner fans | ID-CARD center |
| S3 Attributes | **Dual-panel L+R** | ADV-ATTRS left |
| S4 Bulletin | **Dual-panel L+R** | BULLETIN-PANEL left |
| S5 Quest | **Vertical top-band + bottom-strip** ← rhythm break | QUEST-BRIEF top |
| S6 OathConfirm | Centered ceremony close | OATH-TEXT center |

S3 + S4 連續兩節 L+R 會讀成 split layout 重複，所以 S5 強制 vertical-stack 打破節奏。S6 回到 centered close 呼應 S1 + S2，產生「open / converge / split-detail / split-detail / break / close」的 6-beat 拍號。

**通用 rule**：當 section list ≥5 且中間有連續 2+ 節同 composition shape，**第三節必須 pivot 換軸**（L+R → top-bottom，或 centered → off-grid，或 dual-panel → single-panel）。整版讀起來就會有「呼吸」而非 stacked card。ZoneMap 階段就要鎖死這個 pivot，不要等到 §3.2 compose 才被動發現。

Adjacent applications：multi-section landing page where 中段技術細節有 3+ sections 容易重複 / 報告 multi-chapter 中段資料 panel / 多階段 wizard 中段 form 重複避同感。

---

## 5. Anti-pill discipline in cyberpunk system register (text-led mono chip)

[[anti-pill-text-led]] memory 一直在 editorial / atmospheric registers 中強制：editorial 不用 SaaS Button primitive、用 text-led underline / caps eyebrow。但 cyberpunk 系統視窗有強烈的「screen reads as terminal」需求，看起來像可能會反向掉進 ROUNDED neon button 的 sci-fi UI 陷阱。

**023 解法**：cyberpunk 場景的 chips 全部走 **sharp-edge frame stroke + mono caps + 無 fill**：
- S1 SCAN-CHIP: 1px cyan stroke + mono caps + 0 cornerRadius
- S2 metadata chips: 1px cyan stroke + mono caps + 0 cornerRadius
- S3 RUN-CHIP: 1px lime stroke + lime mono + 0 cornerRadius
- S4 hashtags: 1px cyan stroke + mono caps + 0 cornerRadius
- S5 PRIORITY-CHIP + SPEC cells: 1px coloured stroke + mono + 0 cornerRadius
- S6 ENROLL CONFIRM CTA: **唯一例外 — 600×120 filled rect 巨型 button**（cascade 結尾 single irreversible confirmation，Solo Leveling system-window mechanism 直接 portable）

關鍵：**0 cornerRadius 全頁鎖**。Solo Leveling 系統視窗的招牌「硬邊銳角矩形」就是 anti-pill discipline 的 cyberpunk 表親。pill = SaaS warmth = 不對。

**通用 rule**：register 跨界時 anti-pill 紀律不換。editorial 用 text-led underline / cyberpunk 用 sharp frame stroke / Swiss-restraint 用 hairline + caps — 三種 register 三種 chip vocabulary，但都 NOT SaaS pill。Component-Set state coverage 強制就 skip（因為沒用 Button primitive）。

唯一例外：**oversized single CTA at the cascade closing moment**（023 S6 ENROLL CONFIRM）— filled rect 巨型 button 是 Solo Leveling system window 的招牌 single oversized confirmation，這是 archetype-native vocabulary 而非 SaaS 借用。filled-rect-CTA-as-cascade-close 跟 pill-CTA-as-default 不同：前者是 ceremony 完成的單一物理動作，後者是 SaaS 預設 chrome。
