# Takeaway — Daily UI 007 · Settings

## Mechanism card

- **Archetype** — Editorial Spread × App-Shell form(雜誌印刷頁 + 互動表單混合;mixed-brief 例外 per awwwards-figma § 5 boundary 2)
- **Purpose Triad** — make-decision · 30s 內掃 12 項偏好 + 決定 Apply or back · medium density
- **Palette recipe** — Restrained Light(米白 bg + 深炭 fg + 灰調 fgMuted + hairline border);**accent 鎖在 Apply CTA**(整版唯一 1 處 atomic 使用)— 所有 setting value 0 accent。
- **Type pair** — Noto Serif TC Light 96px(hero "Account Ledger." display)/ Noto Serif TC Light 32px(Roman I·II·III chapter)/ EB Garamond Italic 16-18px(intro paragraph + 每節 margin note)/ Inter Medium 11-16px(labels + chrome)/ Inter Regular 16px(tabular values,需要 `font-variant-numeric: tabular-nums`)
- **Motifs**
  - **Dot-leader 點線連接 label → value** — 印刷術會計表慣用,在 Figma 用 `createLine() + dashPattern [1, 5]` 在 HORIZONTAL auto-layout 內 FILL,1px 點 + 5px gap 重複
  - **Roman 章節編號** I / II / III + 章節 eyebrow(serif 大羅馬 + 拉丁 small-caps)— 書本分章邏輯,給設定頁一種「合約 / 章程」氣質
  - **Italic margin note** 在每節下方,EB Garamond Italic 寫一行解釋這節的範疇 — 不是 tooltip,是印刷頁裡編輯的旁白
  - **Audit footer** "LAST REVIEWED 2026.05.12 · 3 entries changed since 2026.04.28" — 真實 audit trail metadata,不是裝高級的座標 / 編號
  - **Apply 「簽署」CTA** — accent fill + 拉丁 small-caps + 中文「簽署」表意:不是「Save」按鈕,是「簽下這份名冊」的儀式感
- **Mode reconciliation** Scene = Light(米白報紙),published modes `['Light','Dark']` → PASS

## Why it works(機制,非表面)

- **「設定 = 帳本登錄」的隱喻一致性**:第一句 intro 就把帳本(ledger)+ 章節(chapters)+ 行(line)+ 審查(review)+ 簽署(apply)五個會計詞彙打進讀者頭腦。後面每一個視覺元素(dot-leader、Roman、margin note、audit footer)都是這個隱喻的具現。整版讀起來像翻一份合約,不是「點按到的設定列表」。
- **Dot-leader 是時間軸的安靜對應物**:daily-006 用 hairline + 4 個 tickmark 連接 4 個事件;daily-007 用 dot-leader 連接 label 與 value。同一種「視覺路徑學」應用在不同節奏(一個是時間水平流動、一個是設定垂直登錄)。
- **Accent 紀律 = 1 個 atomic use**:這版是整個 daily UI 系列裡 accent 最克制的案例。Restore 用 ghost outline + fgMuted text、Apply 用 accent fill,讓「動作意願度」的分級完全靠視覺權重承擔,不需要文案解釋。
- **真實 metadata 全程守住**:"3 entries changed since 2026.04.28" 是真實審查 audit metadata,有功能(讓使用者知道上次審完了哪些);與 daily-006 的 `Joined 2021.03` 同類。沒有 `INDEX N° 042` 沒有 `25°02′N` 沒有「卷宗編號」cosplay。

## Anti-goals 留下的價值

iOS Settings / macOS System Preferences / Android Material Settings / Notion · Linear Preferences modal / SaaS dashboard preferences / Discord · Slack 設定 — 六個 anti-goals 全是強烈視覺慣性。compose 時 grep 自己:有沒有滑出 chevron、有沒有圓角 row、有沒有 toggle switch、有沒有左 sidebar、有沒有黏底 Save bar、有沒有彩色 icon。如果都沒有,Ledger 紀律保住。

## Reusable Figma scaffold

- **Dot-leader 點線**:`figma.createLine()` + `dashPattern: [1, 5]` 在 HORIZONTAL auto-layout 內 `layoutSizingHorizontal = 'FILL'`,strokeWeight 1,stroke 用 token bind。最穩定的「label · · · · · value」實作方式,比 text-of-dots / rect-with-dashed-border 都好。
- **Roman + small-caps section header pattern**:大 serif Roman 字當 anchor + 小 small-caps Latin/CJK 名稱共 baseline 對齊(`counterAxisAlignItems = 'BASELINE'`)。可重用於任何「章節 / chapter / step」分節。
- **Italic margin note pattern**:每節下方一行 EB Garamond Italic + maxWidth ~640px + lineHeight 145%。給長篇 / 教學 / 設定型內容增加「編輯旁白」氣質,避免 tooltip。
- **Audit footer pattern**:小型大寫 label `LAST REVIEWED` + 主體值「日期 · 摘要句」+ 右側 CTA pair(ghost + accent)。可重用於任何 review-state 的頁尾。
- **Container 預先清空 fills**(從 daily-006 v02 學到):每個 createAutoLayout 容器 frame 都立刻 `n.fills = []`,token-drift scan 從第一次 compose 就是 0。

## Figma reference

- File: bDA9MWzNRM9My6grhlE8fj
- Hero node: `107:2`
- URL: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=107-2
