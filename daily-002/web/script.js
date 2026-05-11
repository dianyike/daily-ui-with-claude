/* ----------------------------------------------------------------------------
   Daily UI 002 — Cellar Q2 · 2026 Checkout · interactions
   - Card-slot auto-advance + backspace handoff
   - Hold-to-Authorise gesture (pointer + Space keyboard) with 2s threshold
   - Submit-on-authorise: lock state, swap CTA label
---------------------------------------------------------------------------- */

(() => {
  const form = document.getElementById('vault-form');
  if (!form) return;

  const slots = Array.from(form.querySelectorAll('.slot'));
  const cardholder = form.querySelector('#cardholder');
  const expiry = form.querySelector('#expiry');
  const cvv = form.querySelector('#cvv');
  const cta = form.querySelector('#cta-hold');
  const live = document.getElementById('aria-live');

  /* --------------------------------------------------------------------------
     Card-slot — auto-advance on 4 digits; backspace on empty hops back
  -------------------------------------------------------------------------- */
  slots.forEach((slot, i) => {
    slot.addEventListener('input', (e) => {
      // strip non-digits
      const raw = slot.value.replace(/\D+/g, '').slice(0, 4);
      if (slot.value !== raw) slot.value = raw;
      if (raw.length === 4 && i < slots.length - 1) slots[i + 1].focus();
    });
    slot.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && slot.value === '' && i > 0) {
        slots[i - 1].focus();
        // move caret to the end
        const prev = slots[i - 1];
        requestAnimationFrame(() => prev.setSelectionRange(prev.value.length, prev.value.length));
      } else if (e.key === 'ArrowLeft' && slot.selectionStart === 0 && i > 0) {
        slots[i - 1].focus();
      } else if (e.key === 'ArrowRight' && slot.selectionEnd === slot.value.length && i < slots.length - 1) {
        slots[i + 1].focus();
      }
    });
    // 4-quartet paste support — paste a full card number into slot 0 to fill
    slot.addEventListener('paste', (e) => {
      const text = (e.clipboardData || window.clipboardData).getData('text');
      const digits = text.replace(/\D+/g, '');
      if (digits.length >= 4) {
        e.preventDefault();
        for (let s = 0; s < slots.length; s++) {
          slots[s].value = digits.slice(s * 4, s * 4 + 4);
        }
        const lastFilled = Math.min(Math.ceil(digits.length / 4) - 1, slots.length - 1);
        slots[lastFilled].focus();
      }
    });
  });

  /* --------------------------------------------------------------------------
     Expiry — auto-format as MM / YY while typing
  -------------------------------------------------------------------------- */
  expiry.addEventListener('input', () => {
    const digits = expiry.value.replace(/\D+/g, '').slice(0, 4);
    if (digits.length <= 2) {
      expiry.value = digits;
    } else {
      expiry.value = `${digits.slice(0, 2)} / ${digits.slice(2)}`;
    }
  });

  /* --------------------------------------------------------------------------
     Validation — light-touch; gate the Hold CTA
  -------------------------------------------------------------------------- */
  const isComplete = () => {
    const cardOK = slots.every(s => /^\d{4}$/.test(s.value));
    const nameOK = cardholder.value.trim().length >= 2;
    const expOK = /^\d{2}\s\/\s\d{2}$/.test(expiry.value);
    const cvvOK = /^\d{3,4}$/.test(cvv.value);
    return cardOK && nameOK && expOK && cvvOK;
  };
  const refreshCTA = () => {
    if (cta.classList.contains('is-authorised')) return;
    cta.disabled = !isComplete();
  };
  [...slots, cardholder, expiry, cvv].forEach(el => {
    el.addEventListener('input', refreshCTA);
    el.addEventListener('change', refreshCTA);
  });
  refreshCTA();

  /* --------------------------------------------------------------------------
     Hold-to-Authorise gesture
     - pointerdown / Space keydown starts the 2s CSS transition on the ring
     - releasing before full cancels (transition snaps back via class removal)
     - on full (transitionend on stroke-dashoffset) → authorised state
  -------------------------------------------------------------------------- */
  const HOLD_MS = 2000;
  const ring = cta.querySelector('.ring-progress');
  let holdTimer = null;
  let holding = false;

  const setLive = (msg) => { if (live) live.textContent = msg; };

  const beginHold = () => {
    if (cta.disabled || cta.classList.contains('is-authorised') || holding) return;
    holding = true;
    cta.classList.add('is-holding');
    setLive('正在授權，請繼續按住兩秒。');
    holdTimer = window.setTimeout(() => {
      // Reached full hold
      if (holding) authorise();
    }, HOLD_MS);
  };

  const cancelHold = () => {
    if (!holding) return;
    holding = false;
    cta.classList.remove('is-holding');
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
    // Snap the ring back to empty
    // Force reflow so transition restarts cleanly next time
    ring.style.transition = 'none';
    ring.style.strokeDashoffset = '100';
    void ring.offsetWidth;
    ring.style.transition = '';
    ring.style.strokeDashoffset = '';
    setLive('已取消授權。');
  };

  const authorise = () => {
    holding = false;
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
    cta.classList.remove('is-holding');
    cta.classList.add('is-authorised');
    cta.querySelector('.cta-label').textContent = '已授權  ·  AUTHORISED';
    cta.querySelector('.cta-arrow').textContent = '✓';
    cta.setAttribute('aria-pressed', 'true');
    cta.disabled = true;
    setLive('已完成授權，季度訂閱 NT$ 18,800 已扣款。');
  };

  // Pointer
  cta.addEventListener('pointerdown', (e) => {
    cta.setPointerCapture?.(e.pointerId);
    beginHold();
  });
  cta.addEventListener('pointerup', cancelHold);
  cta.addEventListener('pointercancel', cancelHold);
  cta.addEventListener('pointerleave', cancelHold);

  // Keyboard — Space hold
  cta.addEventListener('keydown', (e) => {
    if ((e.key === ' ' || e.key === 'Spacebar') && !e.repeat) {
      e.preventDefault();
      beginHold();
    } else if (e.key === 'Enter' && !cta.disabled) {
      // Enter = shortcut authorise (accessibility alt path)
      e.preventDefault();
      authorise();
    }
  });
  cta.addEventListener('keyup', (e) => {
    if (e.key === ' ' || e.key === 'Spacebar') cancelHold();
  });
  cta.addEventListener('blur', cancelHold);

  // Block native form submit (this is a hold-gesture flow)
  form.addEventListener('submit', (e) => e.preventDefault());

  /* --------------------------------------------------------------------------
     Theme toggle — triple-click the plate label (editorial easter egg)
  -------------------------------------------------------------------------- */
  const plateLabel = document.querySelector('.plate-label');
  let taps = 0, tapTimer;
  plateLabel?.addEventListener('click', () => {
    taps++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => { taps = 0; }, 500);
    if (taps >= 3) {
      const root = document.documentElement;
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      taps = 0;
    }
  });
})();
