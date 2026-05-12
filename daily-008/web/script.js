/* Daily UI 008 — 404 · A Small Disappearance
   - Sequential panel reveal via IntersectionObserver (stagger 120ms)
   - Theme toggle (light ⇄ dark) with localStorage persistence
   - Respects prefers-reduced-motion
*/
(() => {
  'use strict';

  const STORAGE_KEY = 'daily-ui-theme';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── Theme toggle ──────────────────────────────────────────────────── */
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const icon = document.querySelector('[data-theme-icon]');

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }
  syncIcon();

  function syncIcon() {
    if (!icon) return;
    icon.textContent = root.getAttribute('data-theme') === 'dark' ? '◑' : '◐';
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
      syncIcon();
    });
  }

  /* ─── Panel sequential reveal ───────────────────────────────────────── */
  const panels = document.querySelectorAll('.panel');

  if (reducedMotion) {
    panels.forEach((p) => p.classList.add('is-in'));
  } else if ('IntersectionObserver' in window) {
    const seen = new WeakSet();
    let staggerCounter = 0;
    let lastBatchAt = 0;
    const STAGGER_MS = 120;
    const BATCH_RESET_MS = 800;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          seen.add(entry.target);

          const now = performance.now();
          if (now - lastBatchAt > BATCH_RESET_MS) staggerCounter = 0;
          lastBatchAt = now;

          const delay = staggerCounter * STAGGER_MS;
          staggerCounter += 1;

          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-in');

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    panels.forEach((p) => io.observe(p));
  } else {
    // Fallback: just show
    panels.forEach((p) => p.classList.add('is-in'));
  }

  /* ─── Keyboard convenience: Enter on body fires primary CTA ─────────── */
  const primary = document.querySelector('[data-cta-primary]');
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (primary) primary.click();
  });
})();
