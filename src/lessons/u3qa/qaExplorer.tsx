import { useState, useMemo } from 'react';
import { ESSAY_QUESTIONS, CATEGORIES, QuestionCategory, EssayQuestion } from './data';
import { arNum } from '../../kit/blocks';

export function QAExplorer() {
  const [activeCategory, setActiveCategory] = useState<QuestionCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyStarred, setOnlyStarred] = useState(false);
  const [onlyMastered, setOnlyMastered] = useState(false);
  const [openIds, setOpenIds] = useState<Record<number, boolean>>({ 1: true }); // Q1 open by default
  const [masteredIds, setMasteredIds] = useState<Record<number, boolean>>({});

  // Filter questions
  const filtered = useMemo(() => {
    return ESSAY_QUESTIONS.filter((q) => {
      // Category filter
      if (activeCategory !== 'all' && q.category !== activeCategory) {
        return false;
      }
      // Starred filter
      if (onlyStarred && !q.isStarred) {
        return false;
      }
      // Mastered filter
      if (onlyMastered && !masteredIds[q.id]) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const inQ = q.q.toLowerCase().includes(query);
        const inHook = q.studentAnswer.hook.toLowerCase().includes(query);
        const inPoints = q.studentAnswer.points.some(
          (p) => p.text.toLowerCase().includes(query) || (p.title && p.title.toLowerCase().includes(query))
        );
        const inSummary = q.studentAnswer.summary.toLowerCase().includes(query);
        const inMnemonic = q.mnemonic.toLowerCase().includes(query);
        const inKeywords = q.keywords.some((k) => k.toLowerCase().includes(query));

        if (!inQ && !inHook && !inPoints && !inSummary && !inMnemonic && !inKeywords) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, onlyStarred, onlyMastered, searchQuery, masteredIds]);

  // Mastered counts
  const masteredCount = Object.values(masteredIds).filter(Boolean).length;
  const progressPercent = Math.round((masteredCount / ESSAY_QUESTIONS.length) * 100);

  // Toggle open
  const toggleOpen = (id: number) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    filtered.forEach((q) => {
      all[q.id] = true;
    });
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const toggleMastered = (id: number) => {
    setMasteredIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="qa-explorer w-full max-w-5xl mx-auto flex flex-col gap-5 text-right font-sans" dir="rtl">
      {/* Header Info & Progress Bar */}
      <div className="card p-5 border-2 border-[var(--border)] rounded-2xl bg-[var(--surface-2)] flex flex-col gap-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✍️</span>
            <div>
              <h2 className="text-2xl font-black text-[var(--primary)] m-0">
                بنك الأسئلة المقالية النموذجية (سؤال وجواب)
              </h2>
              <p className="text-sm text-[var(--muted)] m-0 mt-0.5">
                ٣٨ سؤالاً مقالياً شاملاً تغطي منهج الوحدة الثالثة بالكامل بإجابات ذكية بأسلوب طالب متفوق
              </p>
            </div>
          </div>

          {/* Progress Pill */}
          <div className="flex items-center gap-2 bg-[var(--surface-1)] px-3.5 py-2 rounded-xl border border-[var(--border)]">
            <span className="text-sm font-bold text-[var(--safe)]">
              🎯 أتقنت: {arNum(masteredCount)} من {arNum(ESSAY_QUESTIONS.length)} ({arNum(progressPercent)}%)
            </span>
          </div>
        </div>

        {/* Progress Chalk Bar */}
        <div className="w-full bg-[var(--surface-1)] h-3 rounded-full overflow-hidden border border-[var(--border)]">
          <div
            className="h-full bg-[var(--safe)] transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Controls: Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-[var(--border)]">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isActive
                    ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm'
                    : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)] hover:bg-[var(--surface-hover)]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[var(--surface-2)] text-[var(--muted)]'
                  }`}
                >
                  {cat.id === 'all'
                    ? arNum(ESSAY_QUESTIONS.length)
                    : arNum(ESSAY_QUESTIONS.filter((q) => q.category === cat.id).length)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Quick Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بكلمة (مثال: HTTP, CERN, JSON, DOM, SSR, كود 404...)..."
              className="w-full px-4 py-2 pr-10 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
            />
            <span className="absolute right-3 top-2.5 text-[var(--muted)] text-sm pointer-events-none">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-2 text-xs text-[var(--muted)] hover:text-[var(--text)] cursor-pointer"
              >
                ✕ مسح
              </button>
            )}
          </div>

          {/* Toggle Switches & Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setOnlyStarred(!onlyStarred)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                onlyStarred
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-[var(--surface-1)] text-[var(--muted)] border-[var(--border)] hover:text-[var(--text)]'
              }`}
            >
              <span>⭐</span>
              <span>أسئلة الامتحانات المكررة</span>
            </button>

            <button
              onClick={() => setOnlyMastered(!onlyMastered)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                onlyMastered
                  ? 'bg-green-500/20 text-green-300 border-green-500/50'
                  : 'bg-[var(--surface-1)] text-[var(--muted)] border-[var(--border)] hover:text-[var(--text)]'
              }`}
            >
              <span>👍</span>
              <span>المتقنة فقط</span>
            </button>

            <div className="h-5 w-px bg-[var(--border)] mx-1" />

            <button
              onClick={expandAll}
              className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-[var(--surface-1)] border border-[var(--border)] hover:bg-[var(--surface-hover)] text-[var(--text)] cursor-pointer"
            >
              📖 فتح الكل
            </button>

            <button
              onClick={collapseAll}
              className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-[var(--surface-1)] border border-[var(--border)] hover:bg-[var(--surface-hover)] text-[var(--muted)] cursor-pointer"
            >
              📕 غلق الكل
            </button>
          </div>
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between px-1 text-xs text-[var(--muted)]">
        <span>عرض {arNum(filtered.length)} سؤالاً وفق شروط البحث</span>
        {searchQuery && (
          <span className="text-[var(--primary)] font-bold">
            نتائج البحث عن: &quot;{searchQuery}&quot;
          </span>
        )}
      </div>

      {/* Questions List */}
      <div className="flex flex-col gap-4">
        {filtered.length === 0 ? (
          <div className="card p-10 text-center text-[var(--muted)] rounded-2xl border border-[var(--border)]">
            <span className="text-4xl block mb-2">🔍</span>
            <p className="text-base font-bold m-0">لم يتم العثور على أي سؤال يطابق بحثك!</p>
            <p className="text-xs mt-1">جرب البحث بكلمة أخرى أو قم بإلغاء الفلاتر.</p>
          </div>
        ) : (
          filtered.map((item) => (
            <QuestionCard
              key={item.id}
              item={item}
              isOpen={!!openIds[item.id]}
              isMastered={!!masteredIds[item.id]}
              onToggleOpen={() => toggleOpen(item.id)}
              onToggleMastered={() => toggleMastered(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface QuestionCardProps {
  item: EssayQuestion;
  isOpen: boolean;
  isMastered: boolean;
  onToggleOpen: () => void;
  onToggleMastered: () => void;
}

function QuestionCard({ item, isOpen, isMastered, onToggleOpen, onToggleMastered }: QuestionCardProps) {
  return (
    <div
      className={`card rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
        isMastered
          ? 'border-green-600/50 bg-[var(--surface-2)]/90'
          : isOpen
          ? 'border-[var(--primary)] bg-[var(--surface-2)] shadow-lg'
          : 'border-[var(--border)] bg-[var(--surface-2)]/70 hover:border-[var(--border-strong)]'
      }`}
    >
      {/* Question Header & Summary Bar */}
      <div
        onClick={onToggleOpen}
        className="p-4 sm:p-5 cursor-pointer select-none flex flex-col gap-3 transition-colors hover:bg-[var(--surface-hover)]/40"
      >
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg bg-[var(--primary)]/15 text-[var(--primary)] text-xs font-black border border-[var(--primary)]/30">
              س{arNum(item.id)}
            </span>
            <span className="text-xs text-[var(--muted)] flex items-center gap-1 font-semibold">
              <span>{item.categoryIcon}</span>
              <span>{item.categoryLabel}</span>
            </span>
            {item.isStarred && (
              <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 text-[11px] font-bold border border-amber-500/30">
                ⭐ سؤال امتحان مكرر
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Mastered Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleMastered();
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all border cursor-pointer flex items-center gap-1 ${
                isMastered
                  ? 'bg-green-600 text-white border-green-500 shadow-sm'
                  : 'bg-[var(--surface-1)] text-[var(--muted)] border-[var(--border)] hover:text-green-400 hover:border-green-500/40'
              }`}
              title={isMastered ? 'اضغط لإلغاء الإتقان' : 'اضغط لتحديده كمتقن'}
            >
              <span>{isMastered ? '✅ تم الإتقان' : '🎯 ضع علامة إتقان'}</span>
            </button>

            {/* Expand / Collapse Icon */}
            <span
              className={`w-7 h-7 rounded-full bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-center text-xs font-bold transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-[var(--primary)]' : 'text-[var(--muted)]'
              }`}
            >
              ▼
            </span>
          </div>
        </div>

        {/* The Question Text */}
        <h3 className="text-base sm:text-lg font-extrabold text-[var(--text)] m-0 leading-relaxed">
          {item.q}
        </h3>

        {/* Toggle prompt if closed */}
        {!isOpen && (
          <div className="text-xs text-[var(--primary)] font-bold flex items-center gap-1 mt-1">
            <span>👁️ اضغط لإظهار الإجابة النموذجية وطريقة تثبيتها بالدماغ...</span>
          </div>
        )}
      </div>

      {/* Answer Body (Accordion) */}
      {isOpen && (
        <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-[var(--border)] flex flex-col gap-5 bg-[var(--surface-1)]/40 animate-fadeUp">
          {/* Student Hook (Speech Bubble) */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--primary)]/10 border-r-4 border-[var(--primary)] text-sm text-[var(--text)] leading-relaxed">
            <div className="flex items-center gap-1.5 text-xs font-black text-[var(--primary)] mb-1">
              <span>💬</span>
              <span>بص يا صاحبي، الفكرة ببساطة:</span>
            </div>
            <p className="m-0 font-medium">{item.studentAnswer.hook}</p>
          </div>

          {/* Core Model Answer Points */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black tracking-wider text-[var(--muted)] uppercase m-0 flex items-center gap-1">
              <span>📝</span>
              <span>الإجابة النموذجية المعتمدة (النقاط المطلوبة كاملة):</span>
            </h4>

            <div className="flex flex-col gap-2.5">
              {item.studentAnswer.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm text-[var(--text)] leading-relaxed"
                >
                  {pt.title && (
                    <span className="font-black text-[var(--primary)] ml-1.5 block sm:inline">
                      {pt.title}
                    </span>
                  )}
                  <span className="font-normal text-[var(--text)]">{pt.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Answer Summary Takeaway */}
          {item.studentAnswer.summary && (
            <div className="p-3 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/30 text-xs sm:text-sm text-[var(--text)] font-semibold flex items-start gap-2">
              <span className="text-base shrink-0">🎯</span>
              <div>
                <span className="font-black text-[var(--safe)] block sm:inline ml-1">
                  الخلاصة للامتحان:
                </span>
                <span>{item.studentAnswer.summary}</span>
              </div>
            </div>
          )}

          {/* Bottom Grid: Mnemonic + Keywords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {/* Mental Trick / Mnemonic */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
                <span>💡</span>
                <span>تثبيتها في دماغي (Mental Trick):</span>
              </div>
              <p className="m-0 text-xs sm:text-sm font-bold text-amber-100/90 leading-relaxed">
                {item.mnemonic}
              </p>
            </div>

            {/* Grading Keywords */}
            <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-blue-300">
                <span>🔑</span>
                <span>كلمات مفتاحية يدور عليها المصحح:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.keywords.map((kw, ki) => (
                  <span
                    key={ki}
                    className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-200 text-[11px] font-bold border border-blue-400/20"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer Action */}
          <div className="flex items-center justify-between pt-2 border-t border-[var(--border)] text-xs">
            <span className="text-[var(--muted)]">
              سؤال {arNum(item.id)} من {arNum(ESSAY_QUESTIONS.length)}
            </span>
            <button
              type="button"
              onClick={onToggleMastered}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                isMastered
                  ? 'bg-green-600 text-white'
                  : 'bg-[var(--surface-1)] text-[var(--safe)] border border-[var(--safe)]/40 hover:bg-[var(--safe)] hover:text-white'
              }`}
            >
              <span>{isMastered ? '🎉 تم الحفظ والإتقان' : '👍 علّم كـ "أتقنت السؤال"'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
