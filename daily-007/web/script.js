/* ----------------------------------------------------------------------------
   Daily UI 007 — Ledger Settings
   Motion: stagger-reveal hero + 3 sections + footer; brief Apply CTA feedback.
   Honors prefers-reduced-motion.
---------------------------------------------------------------------------- */

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const blocks = document.querySelectorAll('.hero-title, .ledger-section, .footer');

  if (reduced) {
    blocks.forEach(b => b.classList.add('is-revealed'));
    return;
  }

  const reveal = () => {
    blocks.forEach((b, i) => {
      setTimeout(() => b.classList.add('is-revealed'), 120 * i);
    });
  };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(reveal, { timeout: 300 });
  } else {
    requestAnimationFrame(() => requestAnimationFrame(reveal));
  }

  // Apply button — write to a polite aria-live region, no real submit
  const apply = document.querySelector('.btn--apply');
  const restore = document.querySelector('.btn--ghost');
  const status = document.getElementById('status');

  if (apply && status) {
    apply.addEventListener('click', (e) => {
      e.preventDefault();
      status.textContent = 'Preferences signed and applied. Ledger updated.';
      const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      // gentle visual confirmation: tag the button label momentarily
      const original = apply.innerHTML;
      apply.innerHTML = `SIGNED · ${stamp}`;
      apply.disabled = true;
      setTimeout(() => {
        apply.innerHTML = original;
        apply.disabled = false;
        status.textContent = '';
      }, 1800);
    });
  }
  if (restore && status) {
    restore.addEventListener('click', () => {
      status.textContent = 'Restore defaults — confirmation required.';
    });
  }
})();
