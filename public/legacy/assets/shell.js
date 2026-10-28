// Lesson shell: browser-like tabs, each tab hosts one lesson (iframe) or the lesson picker.

const CURRICULUM = [
  {
    unit: 'الفصل الأول', title: 'تكنولوجيا المعلومات والمجتمع',
    lessons: [
      { n: 1, title: 'تطور تكنولوجيا المعلومات والتحول الاجتماعي' },
      { n: 2, title: 'كيف يعمل الذكاء الاصطناعي' },
      { n: 3, title: 'الذكاء الاصطناعي في الحياة اليومية والصناعة' },
      { n: 4, title: 'القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي' },
    ],
  },
  {
    unit: 'الفصل الثاني', title: 'الأمن السيبراني',
    lessons: [
      { id: 'u2l1', n: 1, title: 'تقنيات التشفير والمصادقة', icon: '🔐', src: 'lessons/unit2-lesson1.html' },
      { n: 2, title: 'تصميم أمن الشبكات' },
      { id: 'u2l3', n: 3, title: 'الاستجابة للحوادث وإدارة المخاطر', icon: '🚨', src: 'lessons/unit2-lesson3.html' },
    ],
  },
  {
    unit: 'الفصل الثالث', title: 'الويب',
    lessons: [
      { id: 'u3l1', n: 1, title: 'تطور الويب (The Evolution of the Web)', icon: '🌐', src: 'lessons/unit3-lesson1.html' },
      { n: 2, title: 'طرق الاتصال في تطبيقات الويب' },
      { n: 3, title: 'أساسيات تكنولوجيا الواجهة الأمامية' },
    ],
  },
  {
    unit: 'الفصل الرابع', title: 'تصميم الويب والوسائط',
    lessons: [
      { n: 1, title: 'أنواع الوسائط وخصائصها' },
      { n: 2, title: 'تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية' },
      { n: 3, title: 'طرق تقييم المواقع الإلكترونية' },
      { n: 4, title: 'عملية التحسين التكراري للمواقع الإلكترونية' },
    ],
  },
];

const LESSONS = {};
CURRICULUM.forEach((u, ui) => u.lessons.forEach(l => {
  if (l.id) LESSONS[l.id] = { ...l, unitIndex: ui + 1 };
}));

const STORE_KEY = 'shell-tabs-v1';
const THEME_KEY = 'shell-theme';

const tabsEl = document.getElementById('tabs');
const viewsEl = document.getElementById('views');
const views = new Map(); // tabId -> { el, lessonId }

let state = loadState();

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && Array.isArray(s.tabs) && s.tabs.length) {
      s.tabs = s.tabs.filter(t => t.lessonId === null || LESSONS[t.lessonId]);
      if (s.tabs.length) {
        if (!s.tabs.some(t => t.id === s.active)) s.active = s.tabs[0].id;
        return s;
      }
    }
  } catch (e) { /* storage unavailable */ }
  const id = uid();
  return { tabs: [{ id, lessonId: 'u2l1' }], active: id };
}

function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
}

function uid() {
  return 't' + Math.random().toString(36).slice(2, 9);
}

/* ---------- Theme ---------- */
function getTheme() {
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t) return t;
  } catch (e) { /* ignore */ }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme, broadcast = true) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* ignore */ }
  if (broadcast) {
    views.forEach(v => {
      const f = v.el.querySelector('iframe');
      if (f && f.contentWindow) f.contentWindow.postMessage({ type: 'theme', value: theme }, '*');
    });
  }
}

document.getElementById('themeBtn').addEventListener('click', () => {
  applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
});

window.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'theme') applyTheme(d.value);
});

/* ---------- Tabs ---------- */
function tabLabel(tab) {
  if (!tab.lessonId) return { icon: '✨', title: 'تبويب جديد' };
  const l = LESSONS[tab.lessonId];
  return { icon: l.icon || '📘', title: `ف${l.unitIndex} · د${l.n} — ${l.title}` };
}

function renderTabs() {
  tabsEl.innerHTML = '';
  state.tabs.forEach(tab => {
    const { icon, title } = tabLabel(tab);
    const el = document.createElement('div');
    el.className = 'tab' + (tab.id === state.active ? ' active' : '');
    el.setAttribute('role', 'tab');
    el.title = title;
    el.innerHTML = `<span class="tab-ico">${icon}</span><span class="tab-title"></span><button class="tab-close" aria-label="إغلاق">×</button>`;
    el.querySelector('.tab-title').textContent = title;
    el.addEventListener('click', ev => {
      if (ev.target.closest('.tab-close')) closeTab(tab.id);
      else activate(tab.id);
    });
    el.addEventListener('auxclick', ev => { if (ev.button === 1) closeTab(tab.id); });
    tabsEl.appendChild(el);
  });
  const act = tabsEl.querySelector('.tab.active');
  if (act) act.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

function ensureView(tab) {
  let v = views.get(tab.id);
  if (v && v.lessonId === tab.lessonId) return v;
  if (v) v.el.remove();

  const el = document.createElement('div');
  el.className = 'view';
  if (tab.lessonId) {
    const l = LESSONS[tab.lessonId];
    const f = document.createElement('iframe');
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    f.src = `${l.src}?theme=${theme}`;
    f.title = l.title;
    f.allow = 'fullscreen';
    f.setAttribute('allowfullscreen', '');
    el.appendChild(f);
  } else {
    el.appendChild(buildPicker(tab));
  }
  viewsEl.appendChild(el);
  v = { el, lessonId: tab.lessonId };
  views.set(tab.id, v);
  return v;
}

function activate(id) {
  state.active = id;
  state.tabs.forEach(t => {
    const v = ensureView(t);
    v.el.classList.toggle('active', t.id === id);
  });
  renderTabs();
  saveState();
  focusActiveFrame();
}

function focusActiveFrame() {
  const v = views.get(state.active);
  const f = v && v.el.querySelector('iframe');
  if (f) setTimeout(() => { try { f.contentWindow.focus(); } catch (e) { /* ignore */ } }, 30);
}

function newTab(lessonId = null) {
  const tab = { id: uid(), lessonId };
  state.tabs.push(tab);
  activate(tab.id);
}

function closeTab(id) {
  const i = state.tabs.findIndex(t => t.id === id);
  if (i < 0) return;
  state.tabs.splice(i, 1);
  const v = views.get(id);
  if (v) { v.el.remove(); views.delete(id); }
  if (!state.tabs.length) {
    newTab();
    return;
  }
  if (state.active === id) state.active = state.tabs[Math.min(i, state.tabs.length - 1)].id;
  activate(state.active);
}

function openLessonInTab(tab, lessonId) {
  tab.lessonId = lessonId;
  activate(tab.id);
}

/* ---------- Picker ---------- */
function buildPicker(tab) {
  const wrap = document.createElement('div');
  wrap.className = 'picker';
  const inner = document.createElement('div');
  inner.className = 'picker-inner';
  inner.innerHTML = `
    <h1>اختر الدرس</h1>
    <p class="sub">البرمجة والذكاء الاصطناعي · الصف الثاني الثانوي (بكالوريا) · الترم الأول</p>`;

  CURRICULUM.forEach(u => {
    const unit = document.createElement('section');
    unit.className = 'unit';
    unit.innerHTML = `<div class="unit-head"><span class="unit-chip">${u.unit}</span><span class="unit-title">${u.title}</span></div>`;
    const grid = document.createElement('div');
    grid.className = 'lessons';
    u.lessons.forEach(l => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'lesson-card ' + (l.id ? 'ready' : 'soon');
      card.innerHTML = `
        <div class="n">${l.icon || '📄'} الدرس ${l.n}</div>
        <div class="t"></div>
        <div class="s">${l.id ? 'جاهز للشرح ←' : 'قريبًا'}</div>`;
      card.querySelector('.t').textContent = l.title;
      if (l.id) card.addEventListener('click', () => openLessonInTab(tab, l.id));
      else card.disabled = true;
      grid.appendChild(card);
    });
    unit.appendChild(grid);
    inner.appendChild(unit);
  });

  wrap.appendChild(inner);
  return wrap;
}

/* ---------- Keyboard ---------- */
document.getElementById('newTabBtn').addEventListener('click', () => newTab());

document.addEventListener('keydown', e => {
  if (e.altKey && (e.key === 'n' || e.key === 'N' || e.key === 'ى')) { e.preventDefault(); newTab(); return; }
  if (e.altKey && (e.key === 'w' || e.key === 'W' || e.key === 'ص')) { e.preventDefault(); closeTab(state.active); return; }
  // Keys pressed while the shell (not the lesson) has focus are forwarded to the active lesson.
  const v = views.get(state.active);
  const f = v && v.el.querySelector('iframe');
  if (f && f.contentWindow && !e.target.closest('input, textarea')) {
    f.contentWindow.postMessage({ type: 'key', key: e.key }, '*');
    if (['ArrowLeft', 'ArrowRight', ' ', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) e.preventDefault();
  }
});

applyTheme(getTheme(), false);
activate(state.active);
