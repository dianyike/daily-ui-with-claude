/* ----------------------------------------------------------------------------
   Daily UI 001 — Sign Up · interactions
   Light-touch only — editorial sites should feel patient, not animated.
---------------------------------------------------------------------------- */

(() => {
  const form = document.getElementById('signup-form');
  if (!form) return;

  const email = form.querySelector('#email');
  const emailField = email.closest('.field');
  const emailHint = emailField.querySelector('.hint');
  const password = form.querySelector('#password');
  const passwordField = password.closest('.field');
  const name = form.querySelector('#name');
  const nameField = name.closest('.field');
  const cta = form.querySelector('.cta');

  // Email validation — only after first blur with content
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = () => {
    const v = email.value.trim();
    if (!v) {
      emailField.classList.remove('is-invalid');
      emailHint.textContent = '';
      return false;
    }
    if (!emailRe.test(v)) {
      emailField.classList.add('is-invalid');
      emailHint.textContent = '請輸入有效的電子信箱格式';
      return false;
    }
    emailField.classList.remove('is-invalid');
    emailHint.textContent = '';
    return true;
  };
  email.addEventListener('blur', validateEmail);
  email.addEventListener('input', () => {
    if (emailField.classList.contains('is-invalid')) validateEmail();
  });

  // Update CTA disabled state based on all required fields
  const updateCTA = () => {
    const hasName = name.value.trim().length > 0;
    const hasEmail = email.value.trim().length > 0 && emailRe.test(email.value.trim());
    const hasPw = password.value.length >= 8;
    cta.disabled = !(hasName && hasEmail && hasPw);
  };
  [name, email, password].forEach(el => {
    el.addEventListener('input', updateCTA);
  });
  updateCTA();

  // Submit handler — for portfolio demo, just acknowledge
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateEmail()) {
      email.focus();
      return;
    }
    if (password.value.length < 8) {
      passwordField.classList.add('is-invalid');
      password.focus();
      return;
    }
    // Success state — replace button label
    const label = cta.querySelector('.cta-label');
    const arrow = cta.querySelector('.cta-arrow');
    label.textContent = '已送出';
    arrow.textContent = '✓';
    cta.disabled = true;
  });

  // Theme toggle on triple-tap of plate label (editorial easter egg)
  const plateLabel = document.querySelector('.plate-label');
  let taps = 0, tapTimer;
  plateLabel?.addEventListener('click', () => {
    taps++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => { taps = 0; }, 500);
    if (taps >= 3) {
      const root = document.documentElement;
      const next = root.dataset.theme === 'dark' ? '' : 'dark';
      root.dataset.theme = next;
      taps = 0;
    }
  });
})();
