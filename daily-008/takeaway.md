---
archetype: Cinematic Scroll + Manifesto opening
purpose_triad: { intent: feel-atmosphere → be-persuaded, success: 看完 4 格 → 點 CTA, density: low }
palette_recipe: Restrained — 紙白 bg + 黑線稿 fg + 單點橘紅 accent (Panel 04 手勢 + chevron + CTA arrow + corner dot)
type_pair: IBM Plex Mono (Latin/caption/chrome) + Noto Sans TC (CJK display + body)
motifs:
  - "方格分鏡框 — 4 個等寬黑框，2px stroke"
  - "點點軌跡 — trail dots + chevron arrow trail（accent 漸進透明）"
  - "符號式 deadpan — 咚 onomatopoeia / ? question / [verb] bracketed caption"
why_it_works: |
  404 是品牌氣質的小劇場 — 不該 SaaS 化（巨大 404 字 + pill button）。
  Comic strip 把「走失 → 找回」變成 4 個 beat 的時序敘事，scroll 自然成為 cinematic 揭示工具。
  把 panel 號碼 + monospace caption 與 CJK body 並置，形成「terminal log」感的條漫，
  避開了 friendly-mascot trap，又不至於冷漠（accent 橘紅在最後一格給溫度）。
figma_url: https://www.figma.com/design/bDA9MWzNRM9My6grhlE8fj/daily-UI-100?node-id=117-2
mechanism_cards:
  - name: "Sequential reveal via IntersectionObserver"
    rule: "每個 panel 進視窗時 stagger reveal（opacity + translateY），不要全部同時。stagger 80–120ms。"
    reason: "comic 的力量在『一格一格』讀，不是一次看完。"
  - name: "Accent budget = 1 reserved colour, 1 region"
    rule: "Restrained palette 規則：accent 只在 narrative resolution 出現（Panel 04 + CTA），其餘 region 全黑白。"
    reason: "讓 accent 自帶 storytelling — 看到橘紅 = 解決方案。"
  - name: "Editorial CTA = arrow + text, no pill"
    rule: "404 / landing / portfolio 的 primary CTA 用 underlined text-link 或 arrow + text，不用 saturated pill button。"
    reason: "pill button 是 SaaS landing 的 2 秒辨識點；editorial 用 typography 取代 chrome。"
  - name: "Chrome regions 不重複 load-bearing 事實"
    rule: "Top plate 與 footer chrome 不該同時 carry 同一個 fact（如『404 / DOC NOT FOUND』）。給每個 region 不同的 job。"
    reason: "重複 = 浪費 chrome 預算 = 削弱 fact uniqueness。"
---
