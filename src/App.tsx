import { useState } from 'react';
import { ChevronRight, Moon, Sun, Sparkles } from 'lucide-react';
import { Logo } from './brand/Logo';
import { Whiteboard } from './board/Whiteboard';
import { GRADES, legacyId, type GradeId } from './curriculum';
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
  for (const grade of GRADES) {
    for (const [ui, u] of grade.curriculum.entries()) {
      for (const l of u.lessons) {
        if (l.legacy && legacyId(ui + 1, l.n) === id) return { title: l.title, src: l.legacy };
      }
    }
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
  const [gradeId, setGradeId] = useState<GradeId>(() => {
    const saved = localStorage.getItem('tabasheer_grade') as GradeId;
    return saved === 'g1' || saved === 'g2' ? saved : 'g2';
  });

  const currentGrade = GRADES.find(g => g.id === gradeId) || GRADES[0];

  const switchGrade = (id: GradeId) => {
    setGradeId(id);
    localStorage.setItem('tabasheer_grade', id);
  };

  return (
    <div className="home">
      <header className="topbar">
        <a href="#/" aria-label="Tabasheer"><Logo size={40} /></a>
        <div className="flex-1" />
        <ThemeButton />
      </header>
      <div className="home-scroll">
        <div className="home-inner">
          <div className="home-header-row">
            <div>
              <h1>اختر الدرس</h1>
              <p className="sub">{currentGrade.sub}</p>
            </div>
            {/* Grade Switcher */}
            <div className="grade-switcher" role="tablist">
              {GRADES.map(g => (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={gradeId === g.id}
                  className={`grade-tab ${gradeId === g.id ? 'active' : ''}`}
                  onClick={() => switchGrade(g.id)}
                >
                  <span>{g.title}</span>
                  <span className="grade-badge">{g.badge}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Switch helper for Grade 1 */}
          {gradeId === 'g1' && (
            <div className="p-3.5 my-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between flex-wrap gap-2 text-sm shadow-sm">
              <span className="font-bold text-[var(--text)]">
                💡 هل تبحث عن دروس ومراجعة <b>الصف الثاني الثانوي (بكالوريا)</b>؟
              </span>
              <button className="ui-btn primary" onClick={() => switchGrade('g2')}>
                الانتقال إلى ثانية ثانوي ←
              </button>
            </div>
          )}

          {/* Hero Banner for Grade 2 Unit 3 Master Review */}
          {gradeId === 'g2' && (
            <a href="#/lesson/u3rev" className="hero-review-banner">
              <div>
                <span className="hero-review-badge">
                  <Sparkles size={14} /> مراجعة شاملة وماراثون الامتحانات · كتاب الوزارة والفائز
                </span>
                <h2 className="hero-review-title">مراجعة الفصل الثالث: الويب (Web Technologies)</h2>
                <p className="hero-review-desc">
                  شرح تفاعلي منظم: معمارية الطبقات الثلاث (ص 118)، بروتوكولات الاتصال وأكواد الحالة، ثلاثي الواجهة الأمامية، و١٥ محطة تفاعلية واختبار مقيّم.
                </p>
              </div>
              <span className="hero-review-btn">
                ابدأ المراجعة التفاعلية ←
              </span>
            </a>
          )}

          {currentGrade.curriculum.map((u, ui) => (
            <section key={u.unit} className="unit">
              <div className="unit-head">
                <span className="unit-chip">{u.unit}</span>
                <span className="unit-title">{u.title}</span>
              </div>
              <div className="lesson-grid">
                {u.lessons.map(l => {
                  const href = l.board ? `#/lesson/${l.board}` : l.legacy ? `#/legacy/${legacyId(ui + 1, l.n)}` : undefined;
                  const kind = l.board ? 'board' : l.legacy ? 'legacy' : 'soon';
                  const isFeatured = l.board === 'u3rev';
                  const body = (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="n">{l.icon || '📄'} الدرس {l.n}</span>
                        {l.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-black bg-[var(--primary-soft)] text-[var(--primary)]">
                            {l.badge}
                          </span>
                        )}
                      </div>
                      <span className="t">{l.title}</span>
                      {l.en && <span className="en">{l.en}</span>}
                      <span className="s">{l.board ? 'سبورة تفاعلية ←' : l.legacy ? 'شرائح ←' : 'قريبًا'}</span>
                    </>
                  );
                  return href
                    ? (
                      <a
                        key={l.n}
                        className={`lesson-card ${kind} ${isFeatured ? 'review-featured' : ''}`}
                        href={href}
                      >
                        {body}
                      </a>
                    )
                    : (
                      <div key={l.n} className="lesson-card soon">
                        {body}
                      </div>
                    );
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
