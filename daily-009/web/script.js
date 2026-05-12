/* =====================================================================
   Daily UI 009 — Music Player · BVE-9000
   Live data motion: spectrum, VU meters, timecode, sleeve rotation.
   Honors prefers-reduced-motion.
   ===================================================================== */

(() => {
  'use strict';

  const player = document.getElementById('js-player');
  const playBtn = document.getElementById('js-play');
  const elapsedEl = document.getElementById('js-elapsed');
  const remainEl = document.getElementById('js-remain');
  const progressFill = document.getElementById('js-progress');
  const progressCursor = document.getElementById('js-cursor');
  const timestampEl = document.getElementById('js-timestamp');
  const peakEl = document.getElementById('js-peak');
  const volNumEl = document.getElementById('js-vol-num');
  const volumeBarsEl = document.getElementById('js-volume-bars');
  const spectrumBarsEl = document.getElementById('js-spectrum-bars');
  const trackListEl = document.getElementById('js-track-list');

  const vuL = {
    fill: document.getElementById('js-vu-l-fill'),
    peak: document.getElementById('js-vu-l-peak'),
    db: document.getElementById('js-vu-l-db'),
    el: document.querySelector('.vu[data-ch="L"]'),
  };
  const vuR = {
    fill: document.getElementById('js-vu-r-fill'),
    peak: document.getElementById('js-vu-r-peak'),
    db: document.getElementById('js-vu-r-db'),
    el: document.querySelector('.vu[data-ch="R"]'),
  };

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- State ----- */
  const state = {
    playing: true,
    elapsed: 222,           // seconds (03:42)
    duration: 378,          // seconds (06:18)
    bars: [],               // spectrum bar instantaneous levels
    barPeaks: [],
    vuLLevel: 0.78,
    vuRLevel: 0.86,
    vuLPeak: 0.78,
    vuRPeak: 0.86,
  };

  const isMobile = () => window.matchMedia('(max-width: 900px)').matches;

  /* ----- Build spectrum bars ----- */
  function buildSpectrumBars() {
    spectrumBarsEl.innerHTML = '';
    const n = isMobile() ? 20 : 32;
    document.querySelectorAll('.bar-count').forEach(el => el.textContent = n);
    state.bars = [];
    state.barPeaks = [];
    for (let i = 0; i < n; i++) {
      const col = document.createElement('div');
      col.className = 'bar-col';
      col.dataset.i = i;
      spectrumBarsEl.appendChild(col);
      // Initial seed level: typical broadcast peak shape (mids hot, edges quieter)
      const t = i / (n - 1);
      const base = 0.35 + 0.55 * Math.sin(Math.PI * t * 1.4) * Math.exp(-Math.pow((t - 0.45) * 2.4, 2));
      const jitter = (Math.sin(i * 7.3) + Math.cos(i * 3.7)) * 0.05;
      state.bars.push(Math.max(0.15, Math.min(0.95, base + jitter)));
      state.barPeaks.push(state.bars[i]);
    }
    renderSpectrum();
  }

  function renderSpectrum() {
    const cols = spectrumBarsEl.children;
    const maxSegs = isMobile() ? 8 : 12;
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
      const lv = state.bars[i];
      const segs = Math.max(2, Math.floor(lv * maxSegs));
      const target = segs;
      // Reuse existing children where possible
      const existing = col.children.length;
      if (existing > target) {
        while (col.children.length > target) col.removeChild(col.lastChild);
      } else if (existing < target) {
        for (let s = existing; s < target; s++) {
          const seg = document.createElement('span');
          seg.className = 'bar-seg';
          col.appendChild(seg);
        }
      }
      // Re-class each segment
      const peakSegThresh = lv > 0.78 ? Math.ceil(segs * 0.2) : 0;
      for (let s = 0; s < segs; s++) {
        const seg = col.children[segs - 1 - s]; // bottom-up: top is index 0 (newest at top)
        // We want top segments (newest, highest in display) to potentially be amber peak
        if (s >= segs - peakSegThresh) {
          seg.className = 'bar-seg peak';
        } else if (s > segs * 0.5) {
          seg.className = 'bar-seg';
        } else {
          seg.className = 'bar-seg dim';
        }
      }
    }
  }

  /* ----- Spectrum animation (smoothed random walk) ----- */
  let spectrumTimer = null;
  function tickSpectrum() {
    for (let i = 0; i < state.bars.length; i++) {
      // target: pull toward base shape with random fluctuation
      const t = i / Math.max(1, state.bars.length - 1);
      const base = 0.30 + 0.50 * Math.sin(Math.PI * t * 1.4) * Math.exp(-Math.pow((t - 0.45) * 2.4, 2));
      const target = base + (Math.random() - 0.5) * 0.35;
      // ease toward target
      state.bars[i] += (target - state.bars[i]) * 0.45;
      state.bars[i] = Math.max(0.10, Math.min(0.98, state.bars[i]));
    }
    renderSpectrum();
  }

  /* ----- VU meters ----- */
  function tickVU() {
    // Smooth random walk for L and R, with R prone to clipping
    const driftL = (Math.random() - 0.5) * 0.18;
    const driftR = (Math.random() - 0.5) * 0.22;
    state.vuLLevel = Math.max(0.18, Math.min(0.96, state.vuLLevel + driftL));
    state.vuRLevel = Math.max(0.18, Math.min(0.99, state.vuRLevel + driftR));
    // Peak hold (slow decay)
    state.vuLPeak = Math.max(state.vuLLevel, state.vuLPeak - 0.012);
    state.vuRPeak = Math.max(state.vuRLevel, state.vuRPeak - 0.012);

    vuL.fill.style.setProperty('--lv', (state.vuLLevel * 100).toFixed(1) + '%');
    vuR.fill.style.setProperty('--lv', (state.vuRLevel * 100).toFixed(1) + '%');
    vuL.peak.style.setProperty('--peak', (state.vuLPeak * 100).toFixed(1) + '%');
    vuR.peak.style.setProperty('--peak', (state.vuRPeak * 100).toFixed(1) + '%');

    const dbL = ((state.vuLLevel - 0.82) * 30).toFixed(1);
    const dbR = ((state.vuRLevel - 0.82) * 30).toFixed(1);
    vuL.db.textContent = `${dbL >= 0 ? '+' : ''}${dbL} dB`;
    vuR.db.textContent = `${dbR >= 0 ? '+' : ''}${dbR} dB`;
    vuL.db.classList.toggle('over', state.vuLLevel > 0.82);
    vuR.db.classList.toggle('over', state.vuRLevel > 0.82);

    // Top-bar peak readout uses higher of L/R
    if (peakEl) {
      const top = Math.max(state.vuLLevel, state.vuRLevel);
      const topDb = ((top - 0.82) * 30).toFixed(1);
      peakEl.textContent = `${topDb >= 0 ? '+' : ''}${topDb}`;
    }
  }

  /* ----- Timecode ----- */
  function fmtMS(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  function renderTimecode() {
    elapsedEl.textContent = fmtMS(state.elapsed);
    const remain = Math.max(0, state.duration - state.elapsed);
    remainEl.textContent = `-${fmtMS(remain)}`;
    const p = (state.elapsed / state.duration) * 100;
    progressFill.style.setProperty('--p', p.toFixed(2) + '%');
    progressCursor.style.setProperty('--p', p.toFixed(2) + '%');
  }

  let lastTC = performance.now();
  function tickTimecode(now) {
    if (state.playing) {
      const dt = (now - lastTC) / 1000;
      state.elapsed += dt;
      if (state.elapsed >= state.duration) state.elapsed = 0;
      renderTimecode();
    }
    lastTC = now;
  }

  /* ----- Studio timestamp (JST simulated, ticks every second) ----- */
  const tsState = { h: 23, m: 47, s: 13, day: 12 };
  function tickTimestamp() {
    tsState.s += 1;
    if (tsState.s >= 60) { tsState.s = 0; tsState.m += 1; }
    if (tsState.m >= 60) { tsState.m = 0; tsState.h += 1; }
    if (tsState.h >= 24) { tsState.h = 0; tsState.day += 1; }
    const H = String(tsState.h).padStart(2, '0');
    const M = String(tsState.m).padStart(2, '0');
    const S = String(tsState.s).padStart(2, '0');
    const D = String(tsState.day).padStart(2, '0');
    timestampEl.textContent = `${H}:${M}:${S} JST · 1986-05-${D}`;
  }

  /* ----- Build volume bars (32 segs, 24 on, 22-23 peak amber) ----- */
  function buildVolumeBars() {
    if (!volumeBarsEl) return;
    volumeBarsEl.innerHTML = '';
    const onCount = 24;
    for (let i = 0; i < 32; i++) {
      const seg = document.createElement('span');
      seg.className = 'seg';
      if (i < onCount - 2) seg.classList.add('on');
      else if (i < onCount) seg.classList.add('peak');
      volumeBarsEl.appendChild(seg);
    }
  }

  /* ----- Play / Pause toggle ----- */
  function setPlaying(p) {
    state.playing = p;
    player.classList.toggle('playing', p);
    player.classList.toggle('paused', !p);
    playBtn.setAttribute('aria-pressed', String(p));
    playBtn.setAttribute('aria-label', p ? 'Pause' : 'Play');
    if (p) startAnimations(); else stopAnimations();
  }

  /* ----- Track selection ----- */
  function bindTrackList() {
    if (!trackListEl) return;
    trackListEl.querySelectorAll('li[data-i]').forEach(li => {
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'button');
      const onSelect = () => {
        trackListEl.querySelectorAll('li').forEach(x => x.classList.remove('current'));
        li.classList.add('current');
        // Vertical hold "glitch" effect when switching tracks
        player.classList.add('switching');
        setTimeout(() => player.classList.remove('switching'), 240);
        // Reset playhead
        state.elapsed = 0;
        renderTimecode();
      };
      li.addEventListener('click', onSelect);
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(); }
      });
    });
  }

  /* ----- Toggle buttons ----- */
  document.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const on = btn.dataset.on !== 'true';
      btn.dataset.on = String(on);
      btn.setAttribute('aria-pressed', String(on));
    });
  });

  /* ----- Transport buttons (skip/seek) ----- */
  document.querySelector('[data-role="prev"]').addEventListener('click', () => { state.elapsed = 0; renderTimecode(); });
  document.querySelector('[data-role="next"]').addEventListener('click', () => { state.elapsed = state.duration; renderTimecode(); });
  const rew = document.querySelector('[data-role="rewind"]');
  if (rew) rew.addEventListener('click', () => { state.elapsed = Math.max(0, state.elapsed - 10); renderTimecode(); });
  const ff = document.querySelector('[data-role="fastforward"]');
  if (ff) ff.addEventListener('click', () => { state.elapsed = Math.min(state.duration, state.elapsed + 10); renderTimecode(); });

  playBtn.addEventListener('click', () => setPlaying(!state.playing));

  /* ----- Animation loop ----- */
  let rafId = null;
  let lastSpectrum = 0;
  let lastVU = 0;
  let lastTs = 0;
  function loop(now) {
    if (!state.playing) { rafId = null; return; }
    if (!reducedMotion) {
      if (now - lastSpectrum > 90) { tickSpectrum(); lastSpectrum = now; }
      if (now - lastVU > 130)      { tickVU();      lastVU = now; }
    }
    if (now - lastTs > 1000)       { tickTimestamp(); lastTs = now; }
    tickTimecode(now);
    rafId = requestAnimationFrame(loop);
  }
  function startAnimations() {
    if (!rafId) {
      lastTC = performance.now();
      rafId = requestAnimationFrame(loop);
    }
  }
  function stopAnimations() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  /* ----- Init ----- */
  buildSpectrumBars();
  buildVolumeBars();
  bindTrackList();
  renderTimecode();
  tickVU();
  setPlaying(true);

  /* Rebuild spectrum on resize (bar count differs by viewport) */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildSpectrumBars, 200);
  });

})();
