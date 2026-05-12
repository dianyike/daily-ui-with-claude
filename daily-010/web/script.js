/* =====================================================================
   Daily UI 010 — Social Share · 明信片郵戳
   Press any stamp → 印泥下沉 → 印漬擴散 → POSTED chop drops in.
   Toggleable: pressing a different stamp re-mails to that channel. The
   chop is regenerated each press (fresh date + slight rotation jitter).
   prefers-reduced-motion: collapses animations to a snap.
   ===================================================================== */
(() => {
  'use strict';

  const composition = document.getElementById('composition');
  const stampsRow   = document.getElementById('stampsRow');
  const heroCode    = document.getElementById('heroCode');
  const heroGlyph   = document.getElementById('heroGlyph');
  const postedInfo  = document.getElementById('postedInfo');
  const postedTo    = document.getElementById('postedTo');
  const chop        = document.getElementById('chop');
  const chopDate    = document.getElementById('chopDate');
  const chopTime    = document.getElementById('chopTime');
  const stampHint   = document.getElementById('stampHint');
  const recipient   = document.getElementById('recipient');
  const footStats   = document.getElementById('footStats');

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const totalChannels = stampsRow.querySelectorAll('.cell').length;

  // Which channel is currently "stamped onto the postcard"
  let activeChannel = 'X';

  const pad2 = (n) => String(n).padStart(2, '0');
  const fmtDate = (d) => ({
    full: `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`,
    mmdd: `${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`,
  });
  const fmtTime = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;

  function setActiveChannel(channel, code, name) {
    activeChannel = channel;
    const now = new Date();
    const fd  = fmtDate(now);
    const ft  = fmtTime(now);

    heroCode.textContent   = `${code} · ${name}`;
    heroGlyph.textContent  = code;
    postedInfo.textContent = `POSTED · DI-010 · ${fd.full} · ${ft}`;
    postedTo.textContent   = `→ ${code} · ${name}`;
    chopDate.textContent   = fd.mmdd;
    chopTime.textContent   = `${ft} · TW`;

    // Refresh which row stamp is shown as active
    stampsRow.querySelectorAll('.cell').forEach((cell) => {
      const isActive = cell.dataset.channel === channel;
      cell.classList.toggle('is-active', isActive);
      cell.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Refresh chop with a slight rotation jitter — fresh ink press
    const jitter = (Math.random() * 8 - 4) - 10; // base -10deg ± 4
    chop.style.setProperty('--chop-rot', `${jitter.toFixed(2)}deg`);
    chop.classList.remove('is-fresh');
    void chop.offsetWidth; // reflow to restart animation
    chop.classList.add('is-fresh');
    setTimeout(() => chop.classList.remove('is-fresh'), 500);

    stampHint.textContent = `已寄出至 ${name}（${code}）— 點任一枚改寄、Enter 重寄。`;
  }

  function pressCell(cell) {
    const channel = cell.dataset.channel;
    const code    = cell.dataset.code;
    const name    = cell.dataset.name;

    cell.classList.add('is-pressing');

    const settleDelay = reduceMotion.matches ? 0 : 200;
    setTimeout(() => {
      cell.classList.remove('is-pressing');
      setActiveChannel(channel, code, name);
    }, settleDelay);
  }

  stampsRow.addEventListener('click', (e) => {
    const cell = e.target.closest('.cell');
    if (!cell) return;
    pressCell(cell);
  });

  // Initial state — X is shown as the active mailed channel (matches Figma)
  setActiveChannel('X', 'X', 'TWITTER');
  // Strip the initial "is-fresh" animation marker — Figma boot state, not a press
  chop.classList.remove('is-fresh');
  footStats.textContent = `STAMPS REGISTERED  ${pad2(totalChannels)} / ${pad2(totalChannels)}`;
  stampHint.textContent = '點選一枚郵戳寄出，或鍵盤 Tab 切換、Enter 壓印。';

  // Recipient input — clear placeholder on first focus
  let recipientPristine = true;
  recipient.addEventListener('focus', () => {
    if (recipientPristine && recipient.value === '親愛的讀者') {
      recipient.value = '';
      recipientPristine = false;
    }
  });
  recipient.addEventListener('blur', () => {
    if (recipient.value.trim() === '') {
      recipient.value = '親愛的讀者';
      recipientPristine = true;
    }
  });
})();
