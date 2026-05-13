/* =====================================================================
   Daily UI 011 — Flash Sale / Countdown · 天文台過境倒數
   Bring static Figma countdown to life: live T-minus update against
   2026.11.21 04:42 UTC+8 (Orionid max). Respect prefers-reduced-motion.
   ===================================================================== */

(() => {
  const tminusNode = document.getElementById('tminus-time');
  if (!tminusNode) return;

  // 真實 Orionid 過境日 (2026-11-21 04:42 UTC+8) 距今 ~6 個月會讓 hero 數字爆 4 位數，
  // demo 模式：target = pageload + 2h47m39s，與 Figma 設計檔同步。
  // 若要切到真實日期，把 useDemoTarget 改為 false 並依賴 data-target ISO。
  const useDemoTarget = true;
  const demoOffsetMs = (2 * 3600 + 47 * 60 + 39) * 1000;
  const targetTime = useDemoTarget
    ? Date.now() + demoOffsetMs
    : new Date(tminusNode.dataset.target).getTime();
  if (Number.isNaN(targetTime)) return;

  const segH = tminusNode.querySelector('[data-unit="h"]');
  const segM = tminusNode.querySelector('[data-unit="m"]');
  const segS = tminusNode.querySelector('[data-unit="s"]');

  // 在過境時刻之前/之後都顯示倒數；過境後改為 T + 計時，仍保持觀測情境
  const pad = (n) => String(n).padStart(2, '0');

  const render = () => {
    const now = Date.now();
    const diff = targetTime - now;
    const sign = diff >= 0 ? '−' : '+';
    const totalSec = Math.floor(Math.abs(diff) / 1000);

    const days  = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins  = Math.floor((totalSec % 3600) / 60);
    const secs  = totalSec % 60;

    const prefix = document.querySelector('.tminus__prefix');
    if (prefix) prefix.textContent = `T ${sign}`;

    // 超過 24h 在 H 段顯示「總小時數」（避免天數另立一格破壞單行 hero）
    const displayHours = days > 0 ? days * 24 + hours : hours;
    if (segH) segH.textContent = `${pad(displayHours)} H`;
    if (segM) segM.textContent = `${pad(mins)} M`;
    if (segS) segS.textContent = `${pad(secs)} S`;
  };

  // Initial paint immediately, then 1Hz tick
  render();
  const tickId = setInterval(render, 1000);

  // Stop ticking if tab is hidden (battery preservation)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(tickId);
    }
  });

  // CTA — 預約手帳 keyboard activation echoes click; here we just confirm focus path works
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('click', (e) => {
      // For the demo, prevent navigation to placeholder #reserve and surface intent
      if (cta.getAttribute('href') === '#reserve') {
        e.preventDefault();
        cta.setAttribute('aria-pressed', 'true');
        // Tiny acknowledgment animation: pulse the arrow once (NOT bouncy — respects anti-goals)
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduced) {
          const arrow = cta.querySelector('.cta__arrow');
          if (arrow) {
            arrow.animate(
              [{ transform: 'translateX(0)' }, { transform: 'translateX(14px)' }, { transform: 'translateX(6px)' }],
              { duration: 360, easing: 'cubic-bezier(0.2, 0.6, 0.2, 1)' }
            );
          }
        }
      }
    });
  }
})();
