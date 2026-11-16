import { useState, useMemo } from 'react';
import { arNum } from '../../kit/blocks';

/* =========================================================================
   1. Data Comparison Lab: 100 Students Grades (معمل مقارنة درجات الـ 100 طالب)
   ========================================================================= */

// Sample 100 students dataset
const RAW_STUDENTS = [
  { id: 1, name: 'أحمد محمود', grade: 98, class: '1/4' },
  { id: 2, name: 'سارة خالد', grade: 74, class: '1/2' },
  { id: 3, name: 'يوسف إبراهيم', grade: 88, class: '1/1' },
  { id: 4, name: 'منى عبد الرحمن', grade: 92, class: '1/3' },
  { id: 5, name: 'كريم حسن', grade: 65, class: '1/2' },
  { id: 6, name: 'فاطمة علي', grade: 100, class: '1/4' },
  { id: 7, name: 'عمر طارق', grade: 58, class: '1/1' },
  { id: 8, name: 'نور الدين', grade: 84, class: '1/3' },
  { id: 9, name: 'مريم سعيد', grade: 96, class: '1/4' },
  { id: 10, name: 'زياد مصطفى', grade: 77, class: '1/2' },
  { id: 11, name: 'آية وائل', grade: 91, class: '1/4' },
  { id: 12, name: 'حازم شريف', grade: 82, class: '1/1' },
  { id: 13, name: 'سلمى هشام', grade: 69, class: '1/3' },
  { id: 14, name: 'مصطفى كمال', grade: 95, class: '1/4' },
  { id: 15, name: 'شهد عادل', grade: 87, class: '1/2' },
  { id: 16, name: 'بلال تامر', grade: 63, class: '1/1' },
  { id: 17, name: 'رنا حسام', grade: 99, class: '1/4' },
  { id: 18, name: 'أمير وليد', grade: 79, class: '1/3' },
  { id: 19, name: 'هدى سامح', grade: 85, class: '1/2' },
  { id: 20, name: 'مازن أشرف', grade: 90, class: '1/4' },
  // And 80 more simulated values...
  ...Array.from({ length: 80 }, (_, i) => ({
    id: i + 21,
    name: `طالب رقم ${i + 21}`,
    grade: Math.floor(55 + ((i * 37) % 45)),
    class: `1/${(i % 4) + 1}`,
  })),
];

export function DataComparisonLab() {
  const [view, setView] = useState<'raw' | 'table' | 'chart'>('raw');
  const [highlightTop, setHighlightTop] = useState(false);

  // Stats calculation
  const stats = useMemo(() => {
    const excellent = RAW_STUDENTS.filter(s => s.grade >= 85).length;
    const veryGood = RAW_STUDENTS.filter(s => s.grade >= 75 && s.grade < 85).length;
    const good = RAW_STUDENTS.filter(s => s.grade >= 65 && s.grade < 75).length;
    const pass = RAW_STUDENTS.filter(s => s.grade < 65).length;
    const topStudent = [...RAW_STUDENTS].sort((a, b) => b.grade - a.grade)[0];
    return { excellent, veryGood, good, pass, topStudent };
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        border: '2px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        color: 'var(--pen-ink)',
        direction: 'rtl',
        fontFamily: 'Cairo, system-ui, sans-serif',
      }}
    >
      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setView('raw')}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              border: view === 'raw' ? '2px solid var(--pen-red)' : '1px solid var(--border)',
              backgroundColor: view === 'raw' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(30, 41, 59, 0.6)',
              color: view === 'raw' ? 'var(--pen-red)' : '#cbd5e1',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '15px',
            }}
          >
            ❌ 1. قائمة نصية خام (غير مصممة)
          </button>
          <button
            onClick={() => setView('table')}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              border: view === 'table' ? '2px solid var(--pen-blue)' : '1px solid var(--border)',
              backgroundColor: view === 'table' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(30, 41, 59, 0.6)',
              color: view === 'table' ? 'var(--pen-blue)' : '#cbd5e1',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '15px',
            }}
          >
            📋 2. جدول بيانات منظم
          </button>
          <button
            onClick={() => setView('chart')}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              border: view === 'chart' ? '2px solid var(--pen-green)' : '1px solid var(--border)',
              backgroundColor: view === 'chart' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(30, 41, 59, 0.6)',
              color: view === 'chart' ? 'var(--pen-green)' : '#cbd5e1',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '15px',
            }}
          >
            📊 3. رسم بياني وتصور مرئي (Visualization)
          </button>
        </div>

        {view !== 'raw' && (
          <button
            onClick={() => setHighlightTop(h => !h)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid var(--pen-orange)',
              backgroundColor: highlightTop ? 'var(--pen-orange)' : 'transparent',
              color: highlightTop ? '#000' : 'var(--pen-orange)',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            ⭐ {highlightTop ? 'إلغاء تمييز الأوائل' : 'أظهر صاحب المركز الأول فوراً!'}
          </button>
        )}
      </div>

      {/* Content based on View */}
      {view === 'raw' && (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '16px', border: '1px dashed var(--pen-red)' }}>
          <div style={{ color: 'var(--pen-red)', fontWeight: 'bold', marginBottom: '8px', fontSize: '15px' }}>
            ⚠️ تحدي الطالب: حاول قراءة واكتشاف أعلى طالب في هذه القائمة العشوائية خلال 3 ثوانٍ فقط!
          </div>
          <div
            style={{
              maxHeight: '260px',
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: '13px',
              lineHeight: 1.8,
              color: '#94a3b8',
              direction: 'rtl',
            }}
          >
            {RAW_STUDENTS.map(s => `${s.name} - ${s.grade}% - فصل ${s.class}`).join(' • ')}
          </div>
          <div style={{ marginTop: '12px', color: '#f87171', fontSize: '14px', fontWeight: 'bold' }}>
            النتيجة: مرهقة جداً للعين! لا يمكن المقارنة، واستخراج المعلومة يأخذ وقتاً طويلاً.
          </div>
        </div>
      )}

      {view === 'table' && (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '16px', border: '1px solid var(--border)' }}>
          <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)', color: 'var(--pen-blue)' }}>
                  <th style={{ padding: '8px' }}>#</th>
                  <th style={{ padding: '8px' }}>اسم الطالب</th>
                  <th style={{ padding: '8px' }}>الفصل</th>
                  <th style={{ padding: '8px' }}>الدرجة</th>
                  <th style={{ padding: '8px' }}>التقدير</th>
                </tr>
              </thead>
              <tbody>
                {RAW_STUDENTS.slice(0, 15).map((s, idx) => {
                  const isTop = s.grade === stats.topStudent.grade;
                  return (
                    <tr
                      key={s.id}
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        backgroundColor: isTop && highlightTop ? 'rgba(234, 179, 8, 0.25)' : idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      }}
                    >
                      <td style={{ padding: '8px', opacity: 0.6 }}>{arNum(s.id)}</td>
                      <td style={{ padding: '8px', fontWeight: isTop && highlightTop ? 'bold' : 'normal' }}>
                        {s.name} {isTop && highlightTop && '👑'}
                      </td>
                      <td style={{ padding: '8px' }}>{s.class}</td>
                      <td style={{ padding: '8px', color: s.grade >= 85 ? 'var(--pen-green)' : s.grade >= 75 ? 'var(--pen-blue)' : 'var(--pen-orange)', fontWeight: 'bold' }}>
                        {arNum(s.grade)}%
                      </td>
                      <td style={{ padding: '8px' }}>
                        {s.grade >= 85 ? 'ممتاز' : s.grade >= 75 ? 'جيد جداً' : s.grade >= 65 ? 'جيد' : 'مقبول'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: '#94a3b8' }}>
            * يتم عرض عينة من الطلاب مع إمكانية التمييز والفرز المنتظم.
          </div>
        </div>
      )}

      {view === 'chart' && (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.35)', borderRadius: '12px', padding: '20px', border: '1px solid var(--pen-green)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '200px', padding: '0 40px', gap: '30px' }}>
            {[
              { label: 'ممتاز (85%+)', count: stats.excellent, color: 'var(--pen-green)', icon: '🌟' },
              { label: 'جيد جداً (75%+)', count: stats.veryGood, color: 'var(--pen-blue)', icon: '👍' },
              { label: 'جيد (65%+)', count: stats.good, color: 'var(--pen-orange)', icon: '📖' },
              { label: 'مقبول (دون 65%)', count: stats.pass, color: 'var(--pen-red)', icon: '⚠️' },
            ].map(col => {
              const heightPct = Math.round((col.count / 100) * 180);
              return (
                <div key={col.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '18px', color: col.color, marginBottom: '6px' }}>
                    {arNum(col.count)} طالب
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: `${heightPct}px`,
                      backgroundColor: col.color,
                      opacity: 0.85,
                      borderRadius: '8px 8px 0 0',
                      transition: 'height 0.4s ease',
                      boxShadow: `0 0 15px ${col.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                    }}
                  >
                    {col.icon}
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}>
                    {col.label}
                  </div>
                </div>
              );
            })}
          </div>

          {highlightTop && (
            <div style={{ marginTop: '20px', padding: '12px 18px', backgroundColor: 'rgba(234, 179, 8, 0.2)', border: '1px solid var(--pen-orange)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '28px' }}>🏆</span>
              <div>
                <b style={{ color: 'var(--pen-orange)', fontSize: '16px' }}>الطالب الأول على المدرسة:</b> {stats.topStudent.name} (فصل {stats.topStudent.class}) بنسبة <b>{arNum(stats.topStudent.grade)}%</b>.
              </div>
            </div>
          )}

          <div style={{ marginTop: '14px', color: 'var(--pen-green)', fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}>
            🎯 النتيجة: فهمت توزيع مستويات الـ 100 طالب بالكامل في أقل من ثانيتين بفضل (التصور - Visualization)!
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   2. Pictogram vs. Icon Sorter (معمل التمييز بين الرسم التصويري والأيقونة)
   ========================================================================= */

type Item = { id: string; icon: string; name: string; type: 'pic' | 'icon'; explanation: string };

const ITEMS_TO_SORT: Item[] = [
  { id: 'smoke', icon: '🚭', name: 'ممنوع التدخين', type: 'pic', explanation: 'رسم تصويري ينقل إرشاداً وتحذيراً عاماً دون كلمات في الأماكن العامة.' },
  { id: 'trash', icon: '🗑️', name: 'سلة المحذوفات', type: 'icon', explanation: 'أيقونة تمثل وظيفة برمجية وأداة ملموسة في نظام تشغيل الكمبيوتر.' },
  { id: 'wc', icon: '🚹🚺', name: 'دورات المياه', type: 'pic', explanation: 'رسم تصويري عالمي لتحديد المرافق دون الحاجة لأي لغة.' },
  { id: 'browser', icon: '🌐', name: 'متصفح الإنترنت', type: 'icon', explanation: 'أيقونة ترمز إلى تطبيق أو برنامج تصفح الويب على الهاتف أو الحاسوب.' },
  { id: 'exit', icon: '🏃‍♂️🚪', name: 'مخرج الطوارئ', type: 'pic', explanation: 'رسم تصويري إرشادي معتمد في محطات القطار والمطارات والمباني.' },
  { id: 'cam', icon: '📷', name: 'تطبيق الكاميرا', type: 'icon', explanation: 'أيقونة تمثل تطبيق الكاميرا على الهاتف الذكي لفتح العدسة والتصوير.' },
];

export function PictogramVsIconLab() {
  const [selectedItem, setSelectedItem] = useState<Item>(ITEMS_TO_SORT[0]);
  const [userGuess, setUserGuess] = useState<'pic' | 'icon' | null>(null);

  const isCorrect = userGuess !== null && userGuess === selectedItem.type;

  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        border: '2px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        color: 'var(--pen-ink)',
        direction: 'rtl',
        fontFamily: 'Cairo, system-ui, sans-serif',
      }}
    >
      <div style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 'bold', color: 'var(--pen-blue)' }}>
        🎮 تحدي المختبر: اختر عنصراً ثم حدد هل هو (Pictogram) أم (Icon) واكتشف الفرق العلمي!
      </div>

      {/* Item selector chips */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {ITEMS_TO_SORT.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
              setUserGuess(null);
            }}
            style={{
              padding: '8px 16px',
              borderRadius: '12px',
              border: selectedItem.id === item.id ? '2px solid var(--pen-blue)' : '1px solid var(--border)',
              backgroundColor: selectedItem.id === item.id ? 'rgba(59, 130, 246, 0.25)' : 'rgba(30, 41, 59, 0.5)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Current item card */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '64px', marginBottom: '8px' }}>{selectedItem.icon}</div>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#f8fafc' }}>{selectedItem.name}</div>
        <div style={{ fontSize: '15px', color: '#94a3b8', marginTop: '4px' }}>ما هو التصنيف الدقيق لهذا العنصر؟</div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '18px' }}>
          <button
            onClick={() => setUserGuess('pic')}
            style={{
              padding: '12px 28px',
              borderRadius: '10px',
              border: userGuess === 'pic' ? '2px solid var(--pen-orange)' : '1px solid var(--border)',
              backgroundColor: userGuess === 'pic' ? 'rgba(249, 115, 22, 0.25)' : 'rgba(30, 41, 59, 0.7)',
              color: 'var(--pen-orange)',
              fontSize: '17px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            🚹 رسم تصويري (Pictogram)
          </button>

          <button
            onClick={() => setUserGuess('icon')}
            style={{
              padding: '12px 28px',
              borderRadius: '10px',
              border: userGuess === 'icon' ? '2px solid var(--pen-purple)' : '1px solid var(--border)',
              backgroundColor: userGuess === 'icon' ? 'rgba(168, 85, 247, 0.25)' : 'rgba(30, 41, 59, 0.7)',
              color: 'var(--pen-purple)',
              fontSize: '17px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            📱 أيقونة برمجية (Icon)
          </button>
        </div>
      </div>

      {/* Feedback */}
      {userGuess && (
        <div
          style={{
            padding: '16px',
            borderRadius: '12px',
            backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: `1.5px solid ${isCorrect ? 'var(--pen-green)' : 'var(--pen-red)'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <span style={{ fontSize: '32px' }}>{isCorrect ? '🎉' : '❌'}</span>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: isCorrect ? 'var(--pen-green)' : 'var(--pen-red)' }}>
              {isCorrect ? 'إجابة صحيحة ومتقنة!' : 'إجابة غير دقيقة! فكر في الوظيفة:'}
            </div>
            <div style={{ fontSize: '14px', color: '#e2e8f0', marginTop: '4px' }}>
              {selectedItem.explanation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. Hierarchy & Structuring Lab (معمل الهيكلة ومستويات الشجرة التفاعلية)
   ========================================================================= */

export function HierarchyLab() {
  const [mode, setMode] = useState<'admin' | 'web'>('admin');

  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        border: '2px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        color: 'var(--pen-ink)',
        direction: 'rtl',
        fontFamily: 'Cairo, system-ui, sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--pen-purple)' }}>
          🏗️ معمل الهيكلة (Structuring): استكشف كيف تُنظم العلاقات الهرمية
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setMode('admin')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: mode === 'admin' ? '2px solid var(--pen-purple)' : '1px solid var(--border)',
              backgroundColor: mode === 'admin' ? 'rgba(168, 85, 247, 0.25)' : 'transparent',
              color: mode === 'admin' ? 'var(--pen-purple)' : '#cbd5e1',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            👔 هيكل إدارة المدرسة
          </button>
          <button
            onClick={() => setMode('web')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: mode === 'web' ? '2px solid var(--pen-blue)' : '1px solid var(--border)',
              backgroundColor: mode === 'web' ? 'rgba(59, 130, 246, 0.25)' : 'transparent',
              color: mode === 'web' ? 'var(--pen-blue)' : '#cbd5e1',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            🏫 هيكلة نظام المدرسة الإلكتروني
          </button>
        </div>
      </div>

      {mode === 'admin' ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '10px 0' }}>
          {/* Level 1 */}
          <div style={{ padding: '12px 28px', backgroundColor: 'rgba(168, 85, 247, 0.25)', border: '2px solid var(--pen-purple)', borderRadius: '12px', textAlign: 'center', width: '260px' }}>
            <div style={{ fontSize: '24px' }}>👔</div>
            <div style={{ fontWeight: 'bold', fontSize: '18px', color: 'var(--pen-purple)' }}>مدير المدرسة</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>قمة الهرم الإداري (المستوى الأول)</div>
          </div>

          <div style={{ color: 'var(--pen-purple)', fontSize: '20px' }}>⬇️</div>

          {/* Level 2 */}
          <div style={{ padding: '10px 24px', backgroundColor: 'rgba(59, 130, 246, 0.2)', border: '2px solid var(--pen-blue)', borderRadius: '12px', textAlign: 'center', width: '260px' }}>
            <div style={{ fontSize: '22px' }}>📋</div>
            <div style={{ fontWeight: 'bold', fontSize: '17px', color: 'var(--pen-blue)' }}>وكيل المدرسة</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>الإشراف التنفيذي (المستوى الثاني)</div>
          </div>

          <div style={{ color: 'var(--pen-blue)', fontSize: '20px' }}>⬇️</div>

          {/* Level 3 */}
          <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
            <div style={{ flex: 1, maxWidth: '200px', padding: '10px', backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1.5px solid var(--pen-green)', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px' }}>👨‍🏫</div>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-green)' }}>معلمو اللغات</div>
            </div>
            <div style={{ flex: 1, maxWidth: '200px', padding: '10px', backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1.5px solid var(--pen-green)', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px' }}>📐</div>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-green)' }}>معلمو العلوم والرياضيات</div>
            </div>
            <div style={{ flex: 1, maxWidth: '200px', padding: '10px', backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1.5px solid var(--pen-green)', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px' }}>💻</div>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-green)' }}>معلمو الحاسب والتكنولوجيا</div>
            </div>
          </div>

          <div style={{ color: 'var(--pen-green)', fontSize: '20px' }}>⬇️</div>

          {/* Level 4 */}
          <div style={{ padding: '8px 24px', backgroundColor: 'rgba(234, 179, 8, 0.15)', border: '1.5px solid var(--pen-orange)', borderRadius: '10px', textAlign: 'center', width: '320px' }}>
            <span style={{ fontSize: '18px' }}>🎒 </span>
            <b style={{ color: 'var(--pen-orange)' }}>جميع طلاب الصف الأول والثاني والثانوي</b>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '10px 0' }}>
          {/* Web Level 1 */}
          <div style={{ padding: '12px 28px', backgroundColor: 'rgba(59, 130, 246, 0.25)', border: '2px solid var(--pen-blue)', borderRadius: '12px', textAlign: 'center', width: '280px' }}>
            <div style={{ fontSize: '24px' }}>🏫</div>
            <div style={{ fontWeight: 'bold', fontSize: '18px', color: 'var(--pen-blue)' }}>موقع المدرسة الرئيسي</div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>قاعدة البيانات المركزية</div>
          </div>

          <div style={{ color: 'var(--pen-blue)', fontSize: '20px' }}>⬇️</div>

          {/* Web Level 2 */}
          <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
            <div style={{ flex: 1, maxWidth: '180px', padding: '10px', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1.5px solid var(--pen-purple)', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-purple)' }}>الصف الأول الثانوي</div>
            </div>
            <div style={{ flex: 1, maxWidth: '180px', padding: '10px', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1.5px solid var(--pen-purple)', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-purple)' }}>الصف الثاني الثانوي</div>
            </div>
            <div style={{ flex: 1, maxWidth: '180px', padding: '10px', backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1.5px solid var(--pen-purple)', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-purple)' }}>الصف الثالث الثانوي</div>
            </div>
          </div>

          <div style={{ color: 'var(--pen-purple)', fontSize: '20px' }}>⬇️</div>

          {/* Web Level 3 */}
          <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'center' }}>
            {['فصل 1/1 (35 طالب)', 'فصل 1/2 (40 طالب)', 'فصل 1/3 (30 طالب)', 'فصل 1/4 (45 طالب)'].map(cls => (
              <div key={cls} style={{ padding: '8px 12px', backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid var(--pen-green)', borderRadius: '8px', fontSize: '13px', color: 'var(--pen-green)', fontWeight: 'bold' }}>
                {cls}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   4. Affordance vs. Signifier Interactive Lab (معمل الإمكانية والدالة)
   ========================================================================= */

export function AffordanceSignifierLab() {
  const [doorType, setDoorType] = useState<'handle' | 'plate'>('handle');
  const [showSignifier, setShowSignifier] = useState(false);
  const [doorStatus, setDoorStatus] = useState<string | null>(null);

  // Search button state
  const [hasLens, setHasLens] = useState(true);
  const [hasText, setHasText] = useState(true);

  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        border: '2px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        color: 'var(--pen-ink)',
        direction: 'rtl',
        fontFamily: 'Cairo, system-ui, sans-serif',
      }}
    >
      <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--pen-orange)', marginBottom: '16px' }}>
        🚪 معمل تفاعلي: لغز الباب وأزرار البحث (Affordance vs Signifier)
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {/* Part A: The Norman Door Simulator */}
        <div style={{ backgroundColor: 'rgba(0,0,0,0.35)', border: '1px solid var(--pen-blue)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--pen-blue)', marginBottom: '8px' }}>
            ١. لغز الباب: كيف تعرف إن كان عليك السحب أم الدفع؟
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '14px' }}>
            <button
              onClick={() => { setDoorType('handle'); setDoorStatus(null); }}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: doorType === 'handle' ? '2px solid var(--pen-blue)' : '1px solid var(--border)',
                backgroundColor: doorType === 'handle' ? 'rgba(59, 130, 246, 0.25)' : 'transparent',
                color: doorType === 'handle' ? 'var(--pen-blue)' : '#cbd5e1',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
              }}
            >
              مقبض بارز (Handle)
            </button>
            <button
              onClick={() => { setDoorType('plate'); setDoorStatus(null); }}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: doorType === 'plate' ? '2px solid var(--pen-orange)' : '1px solid var(--border)',
                backgroundColor: doorType === 'plate' ? 'rgba(249, 115, 22, 0.25)' : 'transparent',
                color: doorType === 'plate' ? 'var(--pen-orange)' : '#cbd5e1',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
              }}
            >
              لوح معدني أملس (Flat Plate)
            </button>
          </div>

          {/* Interactive Door Mockup */}
          <div
            style={{
              width: '180px',
              height: '180px',
              margin: '0 auto',
              backgroundColor: '#334155',
              border: '4px solid #64748b',
              borderRadius: '8px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
            }}
          >
            {doorType === 'handle' ? (
              <div
                style={{
                  width: '24px',
                  height: '80px',
                  backgroundColor: '#cbd5e1',
                  borderRadius: '12px',
                  border: '2px solid #94a3b8',
                  boxShadow: '3px 3px 8px rgba(0,0,0,0.6)',
                }}
              />
            ) : (
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: '#94a3b8',
                  border: '2px solid #cbd5e1',
                  borderRadius: '4px',
                }}
              />
            )}

            {/* Signifier text */}
            {showSignifier && (
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  color: '#facc15',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                }}
              >
                {doorType === 'handle' ? 'اسحب (Pull)' : 'ادفع (Push)'}
              </div>
            )}
          </div>

          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <button
              onClick={() => setShowSignifier(s => !s)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--pen-purple)',
                backgroundColor: showSignifier ? 'rgba(168, 85, 247, 0.3)' : 'transparent',
                color: 'var(--pen-purple)',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              🏷️ {showSignifier ? 'إخفاء الدالة (Signifier)' : 'إظهار لافتة الدالة (Signifier)'}
            </button>
            <button
              onClick={() => {
                if (doorType === 'handle') setDoorStatus('✅ شكل المقبض (Affordance) قال ليدك: "امسك واسحبني" ففتح الباب!');
                else setDoorStatus('✅ اللوح الأملس (Affordance) قال ليدك: "ادفعني للأمام" ففتح الباب!');
              }}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: 'var(--pen-green)',
                color: '#000',
                border: 'none',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              جرب فتح الباب
            </button>
          </div>

          {doorStatus && (
            <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--pen-green)', fontWeight: 'bold' }}>
              {doorStatus}
            </div>
          )}
        </div>

        {/* Part B: Search Input Signifier */}
        <div style={{ backgroundColor: 'rgba(0,0,0,0.35)', border: '1px solid var(--pen-purple)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--pen-purple)', marginBottom: '8px' }}>
            ٢. حقل البحث والدالة (Signifier)
          </div>
          <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
            جرب تعطيل أيقونة العدسة أو نص البحث لملاحظة كيف يفقد المستخدم التوجيه!
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            <button
              onClick={() => setHasLens(l => !l)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                backgroundColor: hasLens ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                color: hasLens ? 'var(--pen-blue)' : '#64748b',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              🔍 أيقونة العدسة ({hasLens ? 'مفعلة' : 'معطلة'})
            </button>
            <button
              onClick={() => setHasText(t => !t)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                backgroundColor: hasText ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
                color: hasText ? 'var(--pen-purple)' : '#64748b',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              📝 نص "ابحث هنا" ({hasText ? 'مفعل' : 'معطل'})
            </button>
          </div>

          {/* Search Box Mockup */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#1e293b',
              border: '2px solid #475569',
              borderRadius: '24px',
              padding: '8px 16px',
              width: '80%',
              margin: '0 auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            {hasLens && <span style={{ fontSize: '18px', marginLeft: '8px', color: 'var(--pen-blue)' }}>🔍</span>}
            <input
              type="text"
              readOnly
              placeholder={hasText ? 'اكتب اسم الدرس أو الطالب للبحث...' : ''}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                outline: 'none',
                width: '100%',
                fontSize: '14px',
                direction: 'rtl',
              }}
            />
          </div>

          <div style={{ marginTop: '14px', fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5', textAlign: 'right' }}>
            • <b>الإمكانية (Affordance):</b> المستطيل نفسه يوضح أنه حقل كتابة.<br />
            • <b>الدالة (Signifier):</b> العدسة وعبارة "ابحث هنا" تخبرك بوظيفة الحقل المحددة.
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. Accessibility & Universal Design Lab (معمل إمكانية الوصول والتصميم الشامل)
   ========================================================================= */

export function AccessibilityLab() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [screenReaderActive, setScreenReaderActive] = useState(false);
  const [announcedText, setAnnouncedText] = useState('');
  const [hasRamp, setHasRamp] = useState(true);

  return (
    <div
      style={{
        backgroundColor: highContrast ? '#000000' : 'rgba(15, 23, 42, 0.95)',
        border: highContrast ? '3px solid #facc15' : '2px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        color: highContrast ? '#ffffff' : 'var(--pen-ink)',
        direction: 'rtl',
        fontFamily: 'Cairo, system-ui, sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: highContrast ? '#facc15' : 'var(--pen-green)' }}>
          ♿ معمل إمكانية الوصول (Accessibility) والتصميم الشامل (Universal Design)
        </div>

        {/* Accessibility Toolbar */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setHighContrast(c => !c)}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid var(--pen-orange)',
              backgroundColor: highContrast ? '#facc15' : 'transparent',
              color: highContrast ? '#000' : 'var(--pen-orange)',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
            }}
          >
            👁️ تباين عالي ({highContrast ? 'مفعل' : 'معطل'})
          </button>
          <button
            onClick={() => setLargeText(l => !l)}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid var(--pen-blue)',
              backgroundColor: largeText ? 'var(--pen-blue)' : 'transparent',
              color: largeText ? '#fff' : 'var(--pen-blue)',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
            }}
          >
            🔍 تكبير الخط ({largeText ? 'مفعل' : 'معطل'})
          </button>
          <button
            onClick={() => {
              setScreenReaderActive(r => !r);
              setAnnouncedText(screenReaderActive ? '' : 'تم تشغيل قارئ الشاشة الصوتي للمكفوفين (Screen Reader Ready).');
            }}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid var(--pen-purple)',
              backgroundColor: screenReaderActive ? 'var(--pen-purple)' : 'transparent',
              color: screenReaderActive ? '#fff' : 'var(--pen-purple)',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
            }}
          >
            🔊 قارئ الشاشة ({screenReaderActive ? 'مفعل' : 'معطل'})
          </button>
        </div>
      </div>

      {/* Screen Reader Voice Box */}
      {screenReaderActive && (
        <div style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1px solid var(--pen-purple)', borderRadius: '10px', padding: '10px 16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '24px' }}>🗣️</span>
          <div>
            <b style={{ color: 'var(--pen-purple)' }}>صوت قارئ الشاشة:</b> {announcedText || 'اضغط على أي عنصر في الصفحة لسماع قراءته ووصفه البديل (Alt Text).'}
          </div>
        </div>
      )}

      {/* Demo Content Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        {/* Sample Accessible Card */}
        <div
          onClick={() => {
            if (screenReaderActive) setAnnouncedText('بطاقة درس تصميم البيانات، الصف الأول الثانوي، اضغط لبدء الدرس.');
          }}
          style={{
            backgroundColor: highContrast ? '#111827' : 'rgba(30, 41, 59, 0.6)',
            border: highContrast ? '2px solid #ffffff' : '1px solid var(--border)',
            borderRadius: '12px',
            padding: '16px',
            cursor: screenReaderActive ? 'pointer' : 'default',
          }}
        >
          <div style={{ fontSize: largeText ? '24px' : '18px', fontWeight: 'bold', color: highContrast ? '#facc15' : 'var(--pen-blue)', marginBottom: '8px' }}>
            درس تصميم واجهات المستخدم (UI/UX)
          </div>
          <p style={{ fontSize: largeText ? '17px' : '14px', lineHeight: 1.6, color: highContrast ? '#ffffff' : '#cbd5e1' }}>
            يوفر هذا الدرس نصوصاً بديلة لجميع الصور، وترجمة نصية كاملة لجميع المقاطع المصورة لمساعدة ضعاف السمع والمكفوفين.
          </p>
          <div style={{ marginTop: '10px', display: 'flex', gap: '6px' }}>
            <span style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
              CC مترجم
            </span>
            <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
              Alt Text متاح
            </span>
          </div>
        </div>

        {/* Universal Design (Stairs & Ramp) */}
        <div style={{ backgroundColor: highContrast ? '#111827' : 'rgba(30, 41, 59, 0.6)', border: highContrast ? '2px solid #ffffff' : '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ fontSize: largeText ? '22px' : '17px', fontWeight: 'bold', color: highContrast ? '#facc15' : 'var(--pen-green)' }}>
              🏛️ التصميم الشامل (مدخل المدرسة)
            </div>
            <button
              onClick={() => setHasRamp(r => !r)}
              style={{
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid var(--pen-green)',
                backgroundColor: hasRamp ? 'rgba(34, 197, 94, 0.2)' : 'transparent',
                color: 'var(--pen-green)',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              {hasRamp ? 'إلغاء المنحدر ❌' : 'إضافة منحدر الكراسي المتحركة ✅'}
            </button>
          </div>

          <div style={{ height: '90px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '10px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px' }}>🪜</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>سلالم عادية</div>
            </div>
            {hasRamp ? (
              <div style={{ textAlign: 'center', color: 'var(--pen-green)', fontWeight: 'bold' }}>
                <div style={{ fontSize: '24px' }}>♿ 🛹</div>
                <div style={{ fontSize: '12px' }}>منحدر مائل (Ramp) للجميع</div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--pen-red)', fontWeight: 'bold' }}>
                <div style={{ fontSize: '24px' }}>⚠️❌</div>
                <div style={{ fontSize: '12px' }}>المدخل غير متاح للكراسي!</div>
              </div>
            )}
          </div>

          <p style={{ marginTop: '10px', fontSize: largeText ? '16px' : '13px', color: highContrast ? '#ffffff' : '#cbd5e1', lineHeight: 1.5 }}>
            {hasRamp
              ? '✅ التصميم الشامل: يناسب الأصحاء، ومستخدمي الكراسي المتحركة، وعربات الأطفال في آنٍ واحد دون تمييز!'
              : '❌ تصميم قاصر: يمنع الطلاب ذوي الاحتياجات الخاصة من دخول المبنى بسهولة.'}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   6. LATCH Interactive Lab (معمل مبدأ LATCH لتنظيم البيانات)
   ========================================================================= */

type LatchItem = {
  id: string;
  title: string;
  category: 'L' | 'A' | 'T' | 'C' | 'H';
  icon: string;
  question: string;
  explanation: string;
};

const LATCH_DATA: LatchItem[] = [
  {
    id: 'branches',
    title: 'فروع مكتبة في القاهرة والإسكندرية والشرقية',
    category: 'L',
    icon: '📍',
    question: 'فين؟ (المكان الجغرافي)',
    explanation: 'الموقع (Location): تنظيم البيانات جغرافياً حسب المحافظة لتجد أقرب فرع.',
  },
  {
    id: 'students',
    title: 'كشف أسماء الطلاب: أحمد، إبراهيم، خالد، محمد، يوسف',
    category: 'A',
    icon: '🔤',
    question: 'اسمه بيبدأ بإيه؟ (الحروف الأبجدية)',
    explanation: 'الترتيب الأبجدي (Alphabet): تنظيم هجائي لتصل لأي اسم بسرعة.',
  },
  {
    id: 'schedule',
    title: 'جدول الحصص: الحصة الأولى، الحصة الثانية، الحصة الثالثة',
    category: 'T',
    icon: '⏰',
    question: 'إمتى؟ (الوقت والتسلسل الزمني)',
    explanation: 'الوقت (Time): تنظيم زمني متسلسل لجدول المواعيد والدروس.',
  },
  {
    id: 'library',
    title: 'تقسيم رفوف المكتبة: كتب علوم، كتب تاريخ، كتب لغات',
    category: 'C',
    icon: '📚',
    question: 'نوعه إيه؟ (الفئة والتصنيف)',
    explanation: 'الفئة (Category): تجميع العناصر في مجموعات حسب النوع والصفات المشتركة.',
  },
  {
    id: 'admin',
    title: 'الهيكل الإداري: مدير المدرسة ➔ وكيل ➔ معلمين ➔ طلاب',
    category: 'H',
    icon: '👑',
    question: 'مستواه إيه ومين أعلى؟ (الهرمية)',
    explanation: 'الهرمية (Hierarchy): تنظيم هرمي يوضح الرتب والمستويات الإدارية.',
  },
  {
    id: 'history',
    title: 'ترتيب أحداث معركة حطين وسيرة الأبطال من الأقدم للأحدث',
    category: 'T',
    icon: '⏳',
    question: 'إمتى؟ (التسلسل التاريخي)',
    explanation: 'الوقت (Time): ترتيب الأحداث التاريخية وفق خط زمني محدد.',
  },
];

export function LatchInteractiveLab() {
  const [selectedItem, setSelectedItem] = useState<LatchItem>(LATCH_DATA[0]);
  const [userGuess, setUserGuess] = useState<'L' | 'A' | 'T' | 'C' | 'H' | null>(null);

  const isCorrect = userGuess !== null && userGuess === selectedItem.category;

  const LATCH_BUTTONS: { key: 'L' | 'A' | 'T' | 'C' | 'H'; label: string; icon: string; color: string }[] = [
    { key: 'L', label: 'الموقع (Location)', icon: '📍', color: 'var(--pen-blue)' },
    { key: 'A', label: 'الأبجدية (Alphabet)', icon: '🔤', color: 'var(--pen-green)' },
    { key: 'T', label: 'الوقت (Time)', icon: '⏰', color: 'var(--pen-orange)' },
    { key: 'C', label: 'الفئة (Category)', icon: '📚', color: 'var(--pen-purple)' },
    { key: 'H', label: 'الهرمية (Hierarchy)', icon: '👑', color: 'var(--pen-red)' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        border: '2px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        color: 'var(--pen-ink)',
        direction: 'rtl',
        fontFamily: 'Cairo, system-ui, sans-serif',
      }}
    >
      <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: '14px' }}>
        🗂️ تحدي مبدأ LATCH: اختر مثالاً وصنّفه حسب الطريقة الصحيحة وسؤاله السحري!
      </div>

      {/* Item selector chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        {LATCH_DATA.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
              setUserGuess(null);
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '10px',
              border: selectedItem.id === item.id ? '2px solid var(--pen-purple)' : '1px solid var(--border)',
              backgroundColor: selectedItem.id === item.id ? 'rgba(168, 85, 247, 0.25)' : 'rgba(30, 41, 59, 0.5)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>{item.icon}</span>
            <span>{item.title.split(':')[0]}</span>
          </button>
        ))}
      </div>

      {/* Current challenge card */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '18px', textAlign: 'center', marginBottom: '18px' }}>
        <div style={{ fontSize: '40px', marginBottom: '6px' }}>{selectedItem.icon}</div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#f8fafc', marginBottom: '6px' }}>
          {selectedItem.title}
        </div>
        <div style={{ fontSize: '14px', color: '#94a3b8' }}>
          أي حرف من أحرف مبدأ LATCH يمثل هذه الطريقة؟ (اسأل نفسك السؤال المناسب!)
        </div>

        {/* LATCH 5 Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
          {LATCH_BUTTONS.map(btn => (
            <button
              key={btn.key}
              onClick={() => setUserGuess(btn.key)}
              style={{
                padding: '10px 18px',
                borderRadius: '10px',
                border: userGuess === btn.key ? `2px solid ${btn.color}` : '1px solid var(--border)',
                backgroundColor: userGuess === btn.key ? 'rgba(255,255,255,0.15)' : 'rgba(30, 41, 59, 0.7)',
                color: btn.color,
                fontSize: '15px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>{btn.icon}</span>
              <span><b>{btn.key}</b> - {btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Result feedback */}
      {userGuess && (
        <div
          style={{
            padding: '14px 18px',
            borderRadius: '12px',
            backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: `1.5px solid ${isCorrect ? 'var(--pen-green)' : 'var(--pen-red)'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '28px' }}>{isCorrect ? '🎉' : '❌'}</span>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: isCorrect ? 'var(--pen-green)' : 'var(--pen-red)' }}>
              {isCorrect ? `إجابة صحيحة ومتقنة! السؤال الذهبي هو: «${selectedItem.question}»` : 'إجابة غير صحيحة، فكر في طبيعة الترتيب:'}
            </div>
            <div style={{ fontSize: '14px', color: '#e2e8f0', marginTop: '3px' }}>
              {selectedItem.explanation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
