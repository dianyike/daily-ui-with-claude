/* ----------------------------------------------------------------------------
   Daily UI 006 — Ticker Biography
   Motion: stagger-reveal trajectory nodes once page is settled.
   Honors prefers-reduced-motion (CSS already short-circuits the keyframes).
---------------------------------------------------------------------------- */

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = document.querySelectorAll('.ticker__node');
  if (!nodes.length) return;

  if (reduced) {
    nodes.forEach(n => n.classList.add('is-revealed'));
    return;
  }

  // Reveal in chronological order (left → right), staggered.
  const reveal = () => {
    nodes.forEach((node, i) => {
      setTimeout(() => node.classList.add('is-revealed'), 180 * i);
    });
  };

  // Run once layout has painted.
  if ('requestIdleCallback' in window) {
    requestIdleCallback(reveal, { timeout: 400 });
  } else {
    requestAnimationFrame(() => requestAnimationFrame(reveal));
  }

  // Announce arrival on NOW dot (for screen readers + analytics-style nicety)
  const status = document.getElementById('status');
  if (status) {
    const total = nodes.length;
    setTimeout(() => {
      status.textContent = `Trajectory loaded: ${total} milestones, current = NOW.`;
    }, 180 * total + 250);
  }
})();
