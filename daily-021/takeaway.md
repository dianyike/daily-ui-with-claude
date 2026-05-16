# Takeaway · Daily UI 021 — Home Orbit Observatory

蒸餾 mechanism layer，不是 surface。下個 entry 遇到「accomplish-task + 中央 observed entity + 多層 classification」這類 brief 可以直接搬。

---

## 1. Object Metaphor 是 Functional Archetype 的合法路徑

Per archetype-cheatsheet.md Functional Archetypes catalog 包括 Object Metaphor — 之前 series 沒用過（014/015/016/017 用 Receipt / Diagram / Map / Functional 其他類；020 用 Map）。

**核心 mechanism**：當 brief 有「**一個焦點實體**被觀測 / 被儀表化」的概念，整頁可以圍繞那個實體本身作為視覺與功能 protagonist：
- daily-021：家屋 → 行星 / 中央天體
- 適用場景：profile (the user is the body) · weather app (the location is the body) · 監測 dashboard (the system is the body) · 健康追蹤 (the body is literally the body)

NOT 同質於 Map（Map 是 spatial-location-first，user is moving through space）也不同於 Instrument Panel（IP 是 chrome + multiple gauges 沒有 single dominant entity）。Object Metaphor 的 key 是：一個 thing 居中、其他都是修飾它的環。

---

## 2. NASA Eyes 反規：軌道 = 分類軸，節點 = 實例

User reference 是 NASA Eyes (Earth / Solar System) — 5-layer split 後 portable mechanism：

| Layer | Reference 內 | Daily-021 反規 | 通用 mechanism |
|---|---|---|---|
| Structure | edge chrome + center canvas | 同 | 4 邊 chrome wrap + 1 center viewport |
| Mechanism | 軌道環編碼資料源類型（NOAA-20 / Jason-2 / NISAR ...） | 軌道環編碼**房間**（BED/BATH/LIVING/KITCHEN/GARAGE） | 多層同心橢圓做為「分類軸」、每環一類 |
| Mechanism | 軌道上節點 = 衛星實例 | 軌道上節點 = 該房間的個別感測器 | 每環的節點 = 該分類下的個別實例 |
| Visual | 多色軌道（mission-coded） | 1 色 highlight + 4 色 muted（active = alert source ring 唯一 cyan） | 多軌道只 highlight 1 條：active 那條，其他 muted |

**最重要的決定**：軌道分離軸是 **房間** 不是 **感測器類型**。User 在 Gate 2 直接拍板。這個選擇影響整頁所有資料視覺化方向 — 因為「房間」是 user mental model 的 mass noun（user 想「廚房怎麼了」不是「動作感測器怎麼了」），軌道軸應對齊 mental model 而不是技術分類。

**通用 rule**：當 brief 有 2 個分類維度（e.g. 房間 × 感測器類型 / 員工 × 部門 / 商品 × 季節 / 城市 × 指標），把 **user mental model 的 mass noun** 作為軌道（big spatial axis）、**technical 分類** 作為節點位置或 mono label。永遠把更 high-level / user-domain 的分類放在 mass axis。

---

## 3. Edge-instrumental + center-contemplative 是組合原則

5 edge chrome 元素 + 中央開放 canvas = NASA Eyes 的 rhythm 核心：

```
+----------+--------------------------+----------+
| EVENTS   |                          | OPS      |
| FEED     |                          | TOOLS    |
| stack    |       OPEN CANVAS        | icons    |
|          |       (the protagonist)  |          |
|          |                          |          |
+----------+--------------------------+----------+
|            DATA LAYER TOGGLE STRIP            |
+-----------------------------------------------+
```

- 邊緣 dense（chrome 訊息密度高、垂直/水平 stack 緊湊）
- 中央 open（呼吸空間 + 主視覺 + 大量留白做為焦點）
- Ambient density vs Active density 對比 = breathing rhythm

**通用 rule**：任何「觀察+操作 1 個 entity」brief 都可用這個壓邊組合。Awwwards 中常見變體：影視站(海報置中+左右 cast/credits)、藝術站(作品置中+左右 metadata/curator)、地圖站(canvas + 邊 tools)。

---

## 4. Sub-axis encoding: ring = category, node = instance, color = state

3 維資料壓在 2D 平面的 mechanism：

| 維度 | 編碼方式 |
|---|---|
| Room (5 categories) | Ring altitude (5 同心橢圓 inner→outer) |
| Sensor type (~9 types) | mono 2-char code label vẵn next to node |
| Sensor state (live/warn/fault) | Node fill color (green/amber/red) + halo ring for warn |

**通用 rule**：3+ 維資料不要做 nested grid（5×9×3 = 135 cells SaaS table trap）。挑 1 維作 spatial axis（ring altitude / x position / column）、1 維作 textual identifier（mono label / icon glyph）、1 維作 visual cue（color / opacity / size）。

---

## 5. Mission palette 4-color discipline（適用所有 techno-spec brief）

| Token | Hex | Purpose | 使用場合 |
|---|---|---|---|
| `color/mission-live` | #2DE876 | LIVE / OK / ACTIVE | 脈動 dot · LIVE label · routine event marks · NOW state |
| `color/mission-warn` | #FFB000 | WARN / ATTENTION | KITCHEN-DR sensor · alert source · SECURITY-track event · BACK-DOOR row tint |
| `color/mission-cyan` | #6EE7FF | ACTIVE / SELECTED / READOUT | KITCHEN ring stroke · NOW cursor · sensor codes · active toggle · DRILL button |
| `color/mission-fault` | #FF4747 | FAULT / ESCALATION | 保留 — 本作沒觸發；下次有真 fault state 時使用 |

**通用 rule**：4 色 ≤ chroma 槽位（per awwwards-rules.md §2.4 palette layer cap）。每色一個 semantic role，**永遠不混色 role**（cyan 不能拿來當 LIVE，green 不能拿來當 ACTIVE）。SaaS dashboard 常見的「5 個 chart 5 種顏色」是同質性陷阱。

---

## 6. Anti-pill text-led toggles works in techno-spec

Section 2 hero data-layer strip 9 個 sensor-type toggles 用 mono code（"MO" 大字）+ caps name（"MOTION"）+ stroke box（cyan active / border muted）— 不是 pill button。

```
┌─────────────────┐    ┌─────────────────┐
│ MO  MOTION       │    │ DR  DOOR         │
│ cyan border      │    │ border-muted     │
└─────────────────┘    └─────────────────┘
   active (selected)        muted (off)
```

**通用 rule**：techno-spec / brutalist-raw / Swiss-restraint register 都可以用 text-led toggles 取代 pill button。Anti-pill discipline = 不觸發 minimal-ds Button primitive 的 4-state component variant 強制（per SKILL §3.2 baseline 3 Scope note）。文字節點不是 named primitive、不被 state coverage 政策抓。

---

## 7. Multi-signal continuity > callout box

Edit Pass round 1 移除 amber WARN callout box — alert source 已用 3 個獨立信號標示：
1. **Section 1 Header ALERT-TICKER**: amber "◣ ALERT" eyebrow + "DOOR · KITCHEN BACK · OPENED 0.4s"
2. **Section 2 Hero ORBIT-CANVAS**: KITCHEN ring **cyan-highlighted** (active) + KITCHEN-DR sensor **amber filled + double halo** (warn) 
3. **Section 3 Timeline SECURITY-TRACK**: amber dot at NOW position
4. **Section 4 Briefing KITCHEN row**: amber tint + KITCHEN spotlight 6-cell grid 內 DR cell amber stroke

4 個獨立信號接續 alert evidence chain — 不需要第 5 個 callout box 在中央 canvas 上指著 sensor 說「這裡 ALERT」。Callout 加在足夠的 signal continuity 之上是 redundancy，反而會跟其他 chrome 衝突（這次跟 canvas eyebrow 衝突）。

**通用 rule**：當一個事件 / 狀態 / 警報 already 有 ≥3 redundant signal locations，第 4 個 explicit callout 是浪費的、會造成 spatial conflict。讓 multi-section visual repetition 自然 carry meaning。

---

## 8. Bridge bands with mission-style ZONE delimiters as thread-stitch

5 sections vertical scroll + 4 bridge bands of 40h between them = 形成「Mission Console scroll」連續性，而不是 5 張獨立 SaaS card 垂直貼。

每個 bridge band 中央 mono "ZONE I · CONSOLE → ZONE II · ORBIT FRAME" delimiter + 左右 dashed hairlines。

**Mechanism**：
- 40h thin band → 視覺上夠細不喧賓奪主
- ZONE delimiter 用 mission ops 慣用語 → 維持 techno-spec register
- "PREV → NEXT" 形式 → 顯式 narrative bridge
- 左右 dashed → 接續感（不是切割感）

**通用 rule**：multi-section 縱排 ≥3 節 需要 thread-stitch（per [[break-stacked-card-feel]] memory）。Bridge bands + per-section content 是有效組合。

---

## 9. dashPattern 在 RECTANGLE 不會 render — 用 stroke 才有 dash

Compose Call F 我寫了 `dashPattern = [4, 4]` 在 vertical leader rect 上但發現 render 出來是實線。Rectangle 的 dashPattern 只在 strokes（不是 fills）上有效。

**通用 rule**：要 dashed line：
- 用 LINE node + strokes + dashPattern ✓
- 或 RECTANGLE with empty fills + strokes + dashPattern ✓
- 不要 RECTANGLE with fills + dashPattern ✗ (fills 不支援 dash)

---

## 10. setExplicitVariableModeForCollection on outer wrapper = 整頁 force dark

```js
outer.setExplicitVariableModeForCollection(minDsColl, darkMode.modeId);
```

Pin Dark mode on the outer wrapper node → 所有 child token resolution 都 inherit Dark mode value。不需要 per-node 設定。

**通用 rule**：任何 scene sentence 鎖 dark 或 light 的 brief，第一個 compose call 就在 outer wrapper 上 setExplicitVariableModeForCollection。Mode reconciliation (D6) 在 Boot 階段已驗證 publisher 有對應 mode；compose 階段就 force 它。

---

## Series first

- **第一個 techno-spec register entry**（series 前序 4 entries 017/018/019/020 全 historical-document reframe）
- **第一個明確 Object Metaphor functional archetype 應用**
- **第一個 mission accent 4-color discipline 應用**（series 前作的 accent 是 single accent stage 1-9 evolution、本作直接 4-channel mission palette）
- **第一個用 setExplicitVariableModeForCollection pin Dark mode on outer wrapper**（前作用 BG color 強制 dark，本作用 token mode pin 更乾淨）

---

## Anti-goals that survived to final

✅ NOT Nest/Ring 攝影機 grid · NOT Apple/Google Home pill toggle list · NOT 電玩 RGB gamer · NOT 仮設幾何 gauge dashboard · NOT 歷史文獻 reframe（跳出 daily-017~020 連續歷史文獻 register）
