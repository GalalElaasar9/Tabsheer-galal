import { ChevronRight, Moon, Sun } from 'lucide-react';
import { Logo } from './brand/Logo';
import { Whiteboard } from './board/Whiteboard';
import { CURRICULUM, legacyId } from './curriculum';
import { LESSONS } from './lessons';
import { go, useRoute } from './lib/route';
import { useTheme } from './lib/theme';

export function App() {
  const route = useRoute();
  if (route.page === 'board' && LESSONS[route.id]) {
    return <Whiteboard key={route.id} lesson={LESSONS[route.id]} onHome={() => go('/')} />;
  }
  if (route.page === 'legacy') {
    const found = findLegacy(route.id);
    if (found) return <Legacy title={found.title} src={found.src} />;
  }
  return <Home />;
}

function findLegacy(id: string) {
  for (const [ui, u] of CURRICULUM.entries()) {
    for (const l of u.lessons) if (l.legacy && legacyId(ui + 1, l.n) === id) return { title: l.title, src: l.legacy };
  }
  return null;
}

function ThemeButton() {
  const [theme, toggle] = useTheme();
  return (
    <button className="ui-btn" onClick={toggle} title="الوضع الليلي / النهاري" aria-label="تبديل الوضع">
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function Home() {
  return (
    <div className="home">
      <header className="topbar">
        <a href="#/" aria-label="Tabasheer"><Logo size={40} /></a>
        <div className="flex-1" />
        <ThemeButton />
      </header>
      <div className="home-scroll">
        <div className="home-inner">
          <h1>اختر الدرس</h1>
          <p className="sub">البرمجة والذكاء الاصطناعي · الصف الثاني الثانوي (بكالوريا) · الترم الأول</p>
          {CURRICULUM.map((u, ui) => (
            <section key={u.unit} className="unit">
              <div className="unit-head"><span className="unit-chip">{u.unit}</span><span className="unit-title">{u.title}</span></div>
              <div className="lesson-grid">
                {u.lessons.map(l => {
                  const href = l.board ? `#/lesson/${l.board}` : l.legacy ? `#/legacy/${legacyId(ui + 1, l.n)}` : undefined;
                  const kind = l.board ? 'board' : l.legacy ? 'legacy' : 'soon';
                  const body = (
                    <>
                      <span className="n">{l.icon || '📄'} الدرس {l.n}</span>
                      <span className="t">{l.title}</span>
                      {l.en && <span className="en">{l.en}</span>}
                      <span className="s">{l.board ? 'سبورة تفاعلية ←' : l.legacy ? 'شرائح ←' : 'قريبًا'}</span>
                    </>
                  );
                  return href
                    ? <a key={l.n} className={`lesson-card ${kind}`} href={href}>{body}</a>
                    : <div key={l.n} className="lesson-card soon">{body}</div>;
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function Legacy({ title, src }: { title: string; src: string }) {
  const [theme] = useTheme();
  return (
    <div className="legacy">
      <header className="topbar">
        <a href="#/" aria-label="Tabasheer"><Logo size={34} /></a>
        <a className="ui-btn" href="#/"><ChevronRight size={18} /> الدروس</a>
        <b className="truncate">{title}</b>
        <div className="flex-1" />
        <ThemeButton />
      </header>
      <iframe key={theme} src={`${src}?theme=${theme}`} title={title} allow="fullscreen" />
    </div>
  );
}
