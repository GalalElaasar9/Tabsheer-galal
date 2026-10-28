// Slide engine shared by all lessons.
// - <section class="slide" data-section="..." data-title="..."> = one slide
// - .frag inside a slide = revealed one by one with "next"
// - <div class="stepper" data-steps="N"> = step-by-step animation; children use
//   data-at="n" (visible from step n), data-only="n,m" (visible on those steps only),
//   data-states="0:a 2:b" (sets data-state attribute by step).
(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const stage = document.querySelector('.stage');
  const progress = document.querySelector('.progress > i');
  const sectionEl = document.querySelector('[data-deck="section"]');
  const countEl = document.querySelector('[data-deck="count"]');
  const overview = document.querySelector('.overview');
  let cur = 0;

  /* ---------- Theme ---------- */
  const params = new URLSearchParams(location.search);
  function setTheme(t, notify) {
    document.documentElement.classList.toggle('dark', t === 'dark');
    try { localStorage.setItem('deck-theme', t); } catch (e) { /* ignore */ }
    if (notify && window.parent !== window) window.parent.postMessage({ type: 'theme', value: t }, '*');
  }
  let initialTheme = params.get('theme');
  if (!initialTheme) {
    try { initialTheme = localStorage.getItem('deck-theme'); } catch (e) { /* ignore */ }
  }
  setTheme(initialTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'), false);

  /* ---------- Steppers ---------- */
  function makeStepper(el) {
    const max = +el.dataset.steps;
    let step = 0;
    const ctrl = document.createElement('div');
    ctrl.className = 'st-ctrl';
    ctrl.innerHTML = `
      <button class="btn" data-act="reset" title="من البداية">↺</button>
      <button class="btn" data-act="prev">→ السابق</button>
      <span class="st-count"></span>
      <button class="btn btn-primary" data-act="next">التالي ←</button>
      <div class="st-dots">${'<i></i>'.repeat(max + 1)}</div>`;
    const host = el.querySelector('.st-ctrl-host') || el;
    host.appendChild(ctrl);
    const dots = [...ctrl.querySelectorAll('.st-dots i')];
    const label = el.dataset.label || 'الخطوة';

    function render() {
      el.querySelectorAll('[data-at]').forEach(n => n.classList.toggle('st-on', step >= +n.dataset.at));
      el.querySelectorAll('[data-only]').forEach(n =>
        n.classList.toggle('st-on', n.dataset.only.split(',').map(Number).includes(step)));
      el.querySelectorAll('[data-states]').forEach(n => {
        let st = '';
        n.dataset.states.trim().split(/\s+/).forEach(pair => {
          const [k, v] = pair.split(':');
          if (step >= +k) st = v;
        });
        n.dataset.state = st;
      });
      ctrl.querySelector('.st-count').textContent = `${label} ${step} من ${max}`;
      ctrl.querySelector('[data-act="prev"]').disabled = step === 0;
      ctrl.querySelector('[data-act="next"]').disabled = step === max;
      dots.forEach((d, i) => { d.classList.toggle('on', i <= step); d.classList.toggle('cur', i === step); });
      el.dataset.step = step;
      el.dispatchEvent(new CustomEvent('step', { detail: step }));
    }
    const api = {
      next() { if (step < max) { step++; render(); return true; } return false; },
      prev() { if (step > 0) { step--; render(); return true; } return false; },
      reset() { step = 0; render(); },
      get step() { return step; },
    };
    ctrl.addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (b) api[b.dataset.act]();
    });
    el._stepper = api;
    render();
    return api;
  }
  document.querySelectorAll('.stepper').forEach(makeStepper);

  /* ---------- Navigation ---------- */
  function frags(s) { return [...s.querySelectorAll('.frag')]; }
  function steppers(s) { return [...s.querySelectorAll('.stepper')].filter(x => x.dataset.keys !== 'off').map(x => x._stepper); }

  function show(i, dir = 1, revealAll = false) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    const prevSlide = slides[cur];
    if (prevSlide && prevSlide !== slides[i]) {
      prevSlide.classList.remove('active');
      prevSlide.dispatchEvent(new CustomEvent('leave'));
    }
    cur = i;
    const s = slides[cur];
    s.classList.toggle('back', dir < 0);
    s.classList.add('active');
    s.scrollTop = 0;
    frags(s).forEach(f => { f.classList.toggle('shown', revealAll); f.classList.remove('current-frag'); });
    progress.style.width = `${((cur + 1) / slides.length) * 100}%`;
    sectionEl.textContent = s.dataset.section || '';
    countEl.textContent = `${cur + 1} / ${slides.length}`;
    try { history.replaceState(null, '', `#${cur + 1}`); } catch (e) { /* file:// may refuse */ }
    s.dispatchEvent(new CustomEvent('enter'));
  }

  function next() {
    const s = slides[cur];
    for (const st of steppers(s)) if (st.next()) return;
    const hidden = frags(s).find(f => !f.classList.contains('shown'));
    if (hidden) {
      s.querySelectorAll('.current-frag').forEach(f => f.classList.remove('current-frag'));
      hidden.classList.add('shown', 'current-frag');
      if (hidden.getBoundingClientRect().bottom > s.getBoundingClientRect().bottom) {
        hidden.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }
    if (cur < slides.length - 1) show(cur + 1, 1);
  }

  function prev() {
    const s = slides[cur];
    for (const st of steppers(s).reverse()) if (st.prev()) return;
    const shown = frags(s).filter(f => f.classList.contains('shown'));
    if (shown.length) { shown[shown.length - 1].classList.remove('shown', 'current-frag'); return; }
    if (cur > 0) show(cur - 1, -1, true);
  }

  /* ---------- Overview ---------- */
  function buildOverview() {
    const list = overview.querySelector('.ov-body');
    list.innerHTML = '';
    let section = null, grid = null;
    slides.forEach((s, i) => {
      if (s.dataset.section !== section) {
        section = s.dataset.section;
        const wrap = document.createElement('div');
        wrap.className = 'ov-section';
        wrap.innerHTML = `<h4></h4><div class="ov-list"></div>`;
        wrap.querySelector('h4').textContent = section || '';
        list.appendChild(wrap);
        grid = wrap.querySelector('.ov-list');
      }
      const b = document.createElement('button');
      b.className = 'ov-item' + (i === cur ? ' current' : '');
      b.innerHTML = `<b>${i + 1}</b><span></span>`;
      b.querySelector('span').textContent = s.dataset.title || '';
      b.addEventListener('click', () => { toggleOverview(false); show(i, i >= cur ? 1 : -1); });
      grid.appendChild(b);
    });
  }
  function toggleOverview(open) {
    const willOpen = open ?? !overview.classList.contains('open');
    if (willOpen) buildOverview();
    overview.classList.toggle('open', willOpen);
    if (willOpen) overview.querySelector('.ov-item.current')?.scrollIntoView({ block: 'center' });
  }
  overview.addEventListener('click', e => { if (e.target === overview) toggleOverview(false); });

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  }

  /* ---------- Input ---------- */
  function handleKey(key, target) {
    if (target && target.closest && target.closest('input, textarea, select, [contenteditable]')) return false;
    if (overview.classList.contains('open')) {
      if (key === 'Escape' || key === 'o' || key === 'O' || key === 'خ') { toggleOverview(false); return true; }
      return false;
    }
    switch (key) {
      case 'ArrowLeft': case 'PageDown': case ' ': case 'Enter': next(); return true;
      case 'ArrowRight': case 'PageUp': case 'Backspace': prev(); return true;
      case 'Home': show(0, -1); return true;
      case 'End': show(slides.length - 1, 1); return true;
      case 'f': case 'F': case 'ب': toggleFullscreen(); return true;
      case 'o': case 'O': case 'خ': toggleOverview(true); return true;
    }
    return false;
  }

  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest && e.target.closest('button')) return;
    if (handleKey(e.key, e.target)) e.preventDefault();
  });

  window.addEventListener('message', e => {
    const d = e.data || {};
    if (d.type === 'key') handleKey(d.key, null);
    if (d.type === 'theme') setTheme(d.value, false);
  });

  document.querySelectorAll('[data-deck-act]').forEach(b => b.addEventListener('click', () => {
    const act = b.dataset.deckAct;
    if (act === 'next') next();
    if (act === 'prev') prev();
    if (act === 'overview') toggleOverview();
    if (act === 'fullscreen') toggleFullscreen();
    if (act === 'theme') setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark', true);
    b.blur();
  }));

  // Clicking empty slide space advances, like a clicker.
  stage.addEventListener('click', e => {
    if (e.target.closest('button, a, input, textarea, select, label, .interactive, .frag.shown, .card, .tbl, .stepper')) return;
    if (getSelection().toString()) return;
    next();
  });

  window.Deck = { next, prev, go: i => show(i), slides };

  const start = parseInt(location.hash.slice(1), 10);
  show(Number.isFinite(start) ? start - 1 : 0);
})();
