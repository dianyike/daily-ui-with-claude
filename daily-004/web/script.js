/* ----------------------------------------------------------------------------
   Daily UI 004 — Brew Log Calculator
   Wires the tape ribbon → selected trial parameters → result panel → save CTA.
   The Figma frame captures the "marked row" state; clicking a row re-marks it.
---------------------------------------------------------------------------- */

(() => {
  const rows = Array.from(document.querySelectorAll('.tape-row'));
  const rValue = document.getElementById('r-value');
  const plateRatio = document.getElementById('plate-ratio');
  const selIdx = document.getElementById('sel-idx');
  const selDoseYield = document.getElementById('sel-dose-yield');
  const selRatioEb = document.getElementById('sel-ratio-eb');
  const valDose = document.getElementById('val-dose');
  const valYield = document.getElementById('val-yield');
  const valTime = document.getElementById('val-time');
  const supRatio = document.getElementById('sup-ratio');
  const supYield = document.getElementById('sup-yield');
  const supStatus = document.getElementById('sup-status');
  const ctaIdx = document.getElementById('cta-idx');
  const cta = document.getElementById('cta-save');
  const live = document.getElementById('aria-live');

  // Live clock for plate-right — matches the "Brew log opened at 09⁻47" mood
  const plateTime = document.getElementById('plate-time');
  const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  function tickClock() {
    const now = new Date();
    const day = DAYS[now.getDay()];
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    plateTime.textContent = day + '  ·  ' + hh + '⁻' + mm;
  }
  tickClock();
  setInterval(tickClock, 30000);

  function selectRow(row) {
    if (!row || row.classList.contains('is-selected')) return;

    const data = row.dataset;
    const idx = String(rows.indexOf(row) + 1).padStart(2, '0');
    const ratioStr = String(data.ratio);
    const yieldNum = Number(data.yield);
    const doseNum = Number(data.dose);
    // 1:N brew ratio (yield ÷ dose), rounded — coffee convention.
    const brewRatio = Math.round(yieldNum / doseNum);

    // Fade the big serif r-value, swap, fade back in
    rValue.classList.add('is-updating');
    setTimeout(() => {
      rValue.textContent = ratioStr;
      rValue.classList.remove('is-updating');
    }, 220);

    plateRatio.textContent = 'r ' + ratioStr;
    selIdx.textContent = idx;
    selDoseYield.textContent = data.dose + ' : ' + data.yield;
    selRatioEb.textContent = 'r ' + ratioStr;
    valDose.textContent = data.dose;
    valYield.textContent = data.yield;
    valTime.textContent = data.time;
    supRatio.textContent = '1 : ' + brewRatio;
    // YIELD support echoes the big r-value — fact-uniqueness motif (same number at multiple scales)
    supYield.textContent = ratioStr + ' ×';
    supStatus.textContent = data.status || '—';
    ctaIdx.textContent = idx;

    rows.forEach(r => {
      r.classList.remove('is-selected');
      r.setAttribute('aria-selected', 'false');
    });
    row.classList.add('is-selected');
    row.setAttribute('aria-selected', 'true');

    // Reset save CTA — a freshly marked row is unsaved again
    cta.classList.remove('is-saved');
    cta.querySelector('.cta-cjk').textContent = '存為配方';

    live.textContent = 'Selected trial ' + idx + ', ratio r ' + ratioStr + '.';
  }

  rows.forEach(row => {
    row.addEventListener('click', () => selectRow(row));
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectRow(row);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = rows[Math.min(rows.indexOf(row) + 1, rows.length - 1)];
        next.focus(); selectRow(next);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = rows[Math.max(rows.indexOf(row) - 1, 0)];
        prev.focus(); selectRow(prev);
      }
    });
  });

  cta.addEventListener('click', () => {
    if (cta.classList.contains('is-saved')) return;
    cta.classList.add('is-saved');
    cta.querySelector('.cta-cjk').textContent = '已存入';
    live.textContent = 'Recipe ' + ctaIdx.textContent + ' saved.';
  });

  // Keyboard quick-save: ⌘/Ctrl + S
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      cta.click();
    }
  });
})();
