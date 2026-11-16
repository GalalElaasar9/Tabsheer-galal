// Board scenes · Unit 4 · Lesson 2 · User-Centered Design (UCD), Usability, Accessibility, Golden Summary Board, and Ending
import { useState } from 'react';
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

/* =========================================================================
   1. Interactive Component for Slide 1: UCD Concept & 5 Core Questions
   ========================================================================= */
function UcdConceptInteractive() {
  const [selectedQ, setSelectedQ] = useState<number>(0);
  const [explored, setExplored] = useState<boolean[]>([true, false, false, false, false]);

  const questions = [
    {
      q: 'مين هيستخدم الموقع؟',
      en: 'Who will use the website?',
      icon: '👥',
      color: '#38bdf8',
      ans: 'تحديد الفئات المستهدفة وظروفهم (مثل: أولياء أمور مستعجلين، طلاب، أو معلمون). لأن واجهة الطلاب تختلف تماماً عن واجهة أولياء الأمور.',
      action: 'أداة مساعدة: شخصية المستخدم (User Persona).',
    },
    {
      q: 'هو عايز يعمل إيه من الموقع؟',
      en: 'What is the user’s primary goal?',
      icon: '🎯',
      color: '#4ade80',
      ans: 'معرفة الهدف المحدد للزيارة (مثل: معرفة نتيجة الامتحانات فوراً، أو دفع المصروفات) وتجنب إجباره على مشاهدة أشياء لا يحتاجها الآن.',
      action: 'التركيز على المهمة الأساسية دون تشتيت الزائر.',
    },
    {
      q: 'إيه المعلومات اللي محتاج يوصل ليها؟',
      en: 'What information does he need?',
      icon: '📋',
      color: '#fb923c',
      ans: 'ترتيب أولويات المحتوى (درجات المواد، التقدير العام، رقم الجلوس) ووضعها في الصدارة بخطوط واضحة وأماكن متوقعة.',
      action: 'أداة مساعدة: المخطط الهيكلي (Wireframe Blueprint).',
    },
    {
      q: 'إيه الصعوبات اللي ممكن تقابله؟',
      en: 'What pain points might he face?',
      icon: '⚠️',
      color: '#f43f5e',
      ans: 'توقع نقاط الألم (Pain Points): مثل بطء سرعة الإنترنت، أو استخدام هاتف بشاشة صغيرة، أو ضعف البصر، وتصميم حلول مسبقة لها.',
      action: 'مراعاة التصميم المتجاوب وسهولة الوصول (Accessibility a11y).',
    },
    {
      q: 'هل يقدر يستخدم الموقع بسهولة وفاعلية؟',
      en: 'Can he use it easily and effectively?',
      icon: '⚡',
      color: '#c084fc',
      ans: 'التحقق من قابلية الاستخدام (Usability): هل يستطيع الزائر إنجاز مهمته في ثوانٍ معدودة وبدون أخطاء أو ارتباك؟',
      action: 'إجراء اختبارات الاستخدام والتطوير التكراري المستمر.',
    },
  ];

  const handleSelect = (idx: number) => {
    setSelectedQ(idx);
    setExplored((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const exploredCount = explored.filter(Boolean).length;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      {/* Top Concepts Flow: Persona + Wireframe + CRAP -> UCD */}
      <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 'bold', color: '#94a3b8' }}>الربط بالمفاهيم السابقة:</span>
          <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 6, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid #38bdf8' }}>
            👤 Persona (فهم المستخدم)
          </span>
          <span style={{ color: '#64748b' }}>+</span>
          <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 6, background: 'rgba(251, 146, 60, 0.15)', color: '#fb923c', border: '1px solid #fb923c' }}>
            📐 Wireframe (أماكن العناصر)
          </span>
          <span style={{ color: '#64748b' }}>+</span>
          <span style={{ fontSize: 12, padding: '2px 8px', borderRadius: 6, background: 'rgba(192, 132, 252, 0.15)', color: '#c084fc', border: '1px solid #c084fc' }}>
            🎨 CRAP (المظهر البصري)
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(14, 165, 233, 0.2)', padding: '3px 10px', borderRadius: 6, border: '1px solid #0ea5e9' }}>
          <span style={{ fontSize: 12, color: '#38bdf8', fontWeight: 'bold' }}>➔ الفكرة الموحدة:</span>
          <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 'bold' }}>التصميم المتمحور حول المستخدم (UCD)</span>
        </div>
      </div>

      {/* Main Grid: Left Questions / Right Definition & Thought */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 12, flex: 1, marginTop: 8 }}>
        {/* Right Column: Definition & Question Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
          {/* Official Definition Box */}
          <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(56, 189, 248, 0.35)', borderRadius: 10, padding: '10px 14px', textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 'bold', color: '#38bdf8' }}>📖 يعني إيه UCD؟ (تعريف الكتاب)</span>
              <span style={{ fontSize: 10.5, fontWeight: 'bold', background: '#0284c7', color: '#fff', padding: '1px 6px', borderRadius: 4 }}>وزاري معتمد</span>
            </div>
            <div style={{ fontSize: 13.5, color: '#f1f5f9', fontWeight: 'bold', lineHeight: 1.5 }}>
              «نهج يجعل فهم المستخدمين واحتياجاتهم وسياق استخدامهم أساساً لقرارات التصميم.»
            </div>
            <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4, lineHeight: 1.45 }}>
              <b>ببساطة للطلاب:</b> نفكر من وجهة نظر المستخدم قبل اتخاذ أي قرار، ونستبدل «أنا المصمم وشايف كده» بـ «المستخدم محتاج إيه؟».
            </div>
          </div>

          {/* Active Question Focus Card */}
          <div style={{ flex: 1, background: 'rgba(15, 23, 42, 0.85)', border: `2px solid ${questions[selectedQ].color}`, borderRadius: 10, padding: '12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 6 }}>
                <span style={{ fontSize: 15, fontWeight: 'bold', color: questions[selectedQ].color }}>
                  {questions[selectedQ].icon} السؤال ({selectedQ + 1} من 5): {questions[selectedQ].q}
                </span>
                <span style={{ fontSize: 11, color: '#94a3b8', direction: 'ltr' }}>{questions[selectedQ].en}</span>
              </div>
              <div style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.55, marginTop: 8 }}>
                <b>الإجابة والتطبيق:</b> {questions[selectedQ].ans}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 10px', borderRadius: 6, fontSize: 11.5, color: questions[selectedQ].color, fontWeight: 'bold' }}>
              💡 {questions[selectedQ].action}
            </div>
          </div>
        </div>

        {/* Left Column: Interactive 5 Questions List */}
        <div style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 13.5, fontWeight: 'bold', color: '#ffffff' }}>
                ❓ الأسئلة الـ 5 التي يسألها المصمم لنفسه:
              </span>
              <span style={{ fontSize: 11, fontWeight: 'bold', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', padding: '2px 8px', borderRadius: 6 }}>
                استكشفت {exploredCount} من 5
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {questions.map((item, idx) => {
                const isSelected = selectedQ === idx;
                const isDone = explored[idx];
                return (
                  <button
                    key={item.q}
                    onClick={() => handleSelect(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: 8,
                      background: isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                      border: isSelected ? `2px solid ${item.color}` : '1px solid rgba(255,255,255,0.1)',
                      color: isSelected ? '#ffffff' : '#cbd5e1',
                      cursor: 'pointer',
                      textAlign: 'right',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <span style={{ fontSize: 12.5, fontWeight: isSelected ? 'bold' : 'normal' }}>
                        {idx + 1}. {item.q}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: isDone ? '#4ade80' : '#64748b' }}>
                      {isDone ? '✓ تم' : 'اضغط'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ fontSize: 11.5, color: '#94a3b8', textAlign: 'center', marginTop: 6 }}>
            اضغط على أي سؤال لعرض طريقة تفكير مصمم الـ UCD في الإسكرينات القادمة
          </div>
        </div>
      </div>

      {/* Bottom Golden Rule Banner */}
      <div style={{ marginTop: 8, background: 'linear-gradient(90deg, rgba(234, 179, 8, 0.15) 0%, rgba(245, 158, 11, 0.25) 100%)', border: '1px solid #f59e0b', borderRadius: 8, padding: '7px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <span style={{ fontSize: 16 }}>⭐</span>
        <span style={{ fontSize: 13.5, fontWeight: 'bold', color: '#fef08a' }}>
          القاعدة الذهبية المعتمدة: «مش المهم إن الموقع يعجب المصمم بس.. المهم إنه يكون مناسب للشخص اللي هيستخدمه!»
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. Interactive Component for Slide 2: Practical School Results Case
   ========================================================================= */
function UcdSchoolCaseInteractive() {
  const [activeTab, setActiveTab] = useState<'table' | 'mockup'>('table');
  const [selectedRow, setSelectedRow] = useState<number>(0);
  const [mockupMode, setMockupMode] = useState<'designer' | 'ucd'>('ucd');

  const rows = [
    {
      need: 'الوصول للنتيجة بسرعة',
      needEn: 'Fast Results Access',
      decision: 'وضع زر النتائج في مكان واضح وبارز في صدارة الصفحة (CTA رئيسي).',
      why: 'ولي الأمر متوتر ومستعجل؛ إخفاء الزر في قائمة فرعية يسبب الإحباط والتشتت.',
      icon: '⚡',
      color: '#38bdf8',
    },
    {
      need: 'معرفة نتيجة طالب محدد',
      needEn: 'Specific Student Search',
      decision: 'توفير خانة مباشرة لكتابة رقم الجلوس وزر استعلام فوري.',
      why: 'تجنب تصفح قوائم وملفات PDF طويلة تضم آلاف الأسماء المرهقة.',
      icon: '🔍',
      color: '#4ade80',
    },
    {
      need: 'فهم الدرجات بسهولة',
      needEn: 'Clear Grade Visualization',
      decision: 'عرض المواد والدرجات في جدول منظم ومريح للعين مع التقدير بالألوان.',
      why: 'الأرقام المتراكمة دون جدول واضح تسبب التباساً في حساب المجموع والنجاح.',
      icon: '📊',
      color: '#c084fc',
    },
    {
      need: 'استخدام الموقع من الموبايل',
      needEn: 'Mobile Responsiveness',
      decision: 'تصميم صفحة متجاوبة (Responsive) سريعة تناسب شاشات الهواتف.',
      why: 'أغلب أولياء الأمور يفتحون الروابط من هواتفهم الذكية وليس من أجهزة كمبيوتر.',
      icon: '📱',
      color: '#fb923c',
    },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      {/* Top Scenario & Tab Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '8px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16 }}>🏫</span>
          <span style={{ fontSize: 13.5, fontWeight: 'bold', color: '#f1f5f9' }}>
            السيناريو: بنصمم موقع لعرض نتائج الطلاب.. هل نصمم على ذوقنا أم على احتياج ولي الأمر؟
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => setActiveTab('table')}
            style={{
              padding: '4px 12px',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 'bold',
              background: activeTab === 'table' ? '#8b5cf6' : 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            📋 جدول القرارات
          </button>
          <button
            onClick={() => setActiveTab('mockup')}
            style={{
              padding: '4px 12px',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 'bold',
              background: activeTab === 'mockup' ? '#8b5cf6' : 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            🖥️ محاكي الواجهتين (مقارنة)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'table' ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12, flex: 1, marginTop: 8 }}>
          {/* Table of 4 User Needs -> Design Decisions */}
          <div style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 6, padding: '4px 8px', background: 'rgba(255,255,255,0.06)', borderRadius: 6, fontSize: 12, fontWeight: 'bold', color: '#94a3b8' }}>
              <span>👤 احتياج المستخدم (ولي الأمر)</span>
              <span>🎯 قرار التصميم المعتمد</span>
            </div>

            {rows.map((r, idx) => {
              const isSelected = selectedRow === idx;
              return (
                <div
                  key={r.need}
                  onClick={() => setSelectedRow(idx)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: 6,
                    padding: '8px 10px',
                    borderRadius: 8,
                    background: isSelected ? 'rgba(139, 92, 246, 0.2)' : 'rgba(15, 23, 42, 0.5)',
                    border: isSelected ? `2px solid ${r.color}` : '1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 15 }}>{r.icon}</span>
                    <span style={{ fontSize: 12.5, fontWeight: isSelected ? 'bold' : 'normal', color: isSelected ? '#ffffff' : '#cbd5e1' }}>
                      {r.need}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: isSelected ? '#ffffff' : '#94a3b8', lineHeight: 1.4 }}>
                    {r.decision}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Whim vs Need & Selected Row Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Whim vs Reality Card */}
            <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '10px 12px' }}>
              <div style={{ fontSize: 12.5, fontWeight: 'bold', color: '#f43f5e', marginBottom: 4 }}>
                ❌ ذوق ورأي المصمم الشخصي:
              </div>
              <div style={{ fontSize: 11.5, color: '#cbd5e1', lineHeight: 1.45 }}>
                شايف إن الصفحة الرئيسية لازم يكون فيها: صور كبيرة للمدرسة، أنشطة ومعارض، وتصميم مليان ألوان وتأثيرات براقة!
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 'bold', color: '#4ade80', marginTop: 6, marginBottom: 2 }}>
                ✅ احتياج المستخدم الحقيقي:
              </div>
              <div style={{ fontSize: 11.5, color: '#cbd5e1', lineHeight: 1.45 }}>
                ولي الأمر داخل الموقع لسبب وحيد ومحدد: <b>عايز يعرف نتيجة ابنه بسرعة وبدون تشتيت!</b>
              </div>
            </div>

            {/* Selected Decision Explanation */}
            <div style={{ flex: 1, background: 'rgba(30, 41, 59, 0.8)', border: `2px solid ${rows[selectedRow].color}`, borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 'bold', color: rows[selectedRow].color, marginBottom: 4 }}>
                  {rows[selectedRow].icon} تحليل القرار: {rows[selectedRow].need}
                </div>
                <div style={{ fontSize: 12.5, color: '#ffffff', lineHeight: 1.5 }}>
                  <b>القرار الهندسي:</b> {rows[selectedRow].decision}
                </div>
                <div style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.45, marginTop: 6 }}>
                  <b>لماذا هذا القرار حاسم؟</b> {rows[selectedRow].why}
                </div>
              </div>
              <div style={{ fontSize: 11, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '4px 8px', borderRadius: 4, textAlign: 'center' }}>
                اضغط على الصفوف الأربعة لاستكشاف جميع القرارات المقررة
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mockup Visual Comparison Mode */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
            <button
              onClick={() => setMockupMode('designer')}
              style={{
                padding: '6px 16px',
                borderRadius: 8,
                fontSize: 12.5,
                fontWeight: 'bold',
                background: mockupMode === 'designer' ? '#ef4444' : 'rgba(239, 68, 68, 0.15)',
                color: '#ffffff',
                border: '1px solid #ef4444',
                cursor: 'pointer',
              }}
            >
              ❌ واجهة ذوق المصمم (مشتتة وفوضوية)
            </button>
            <button
              onClick={() => setMockupMode('ucd')}
              style={{
                padding: '6px 16px',
                borderRadius: 8,
                fontSize: 12.5,
                fontWeight: 'bold',
                background: mockupMode === 'ucd' ? '#22c55e' : 'rgba(34, 197, 94, 0.15)',
                color: '#ffffff',
                border: '1px solid #22c55e',
                cursor: 'pointer',
              }}
            >
              ✅ واجهة UCD (متمحورة حول احتياج ولي الأمر)
            </button>
          </div>

          <div style={{ flex: 1, background: '#090d16', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {mockupMode === 'designer' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 'bold', color: '#f43f5e' }}>🏫 موقع مدرسة الأمل الثانوية (وجهة نظر المصمم فقط)</span>
                  <span style={{ fontSize: 11, color: '#ef4444' }}>أين زر النتائج؟! مستخدم تائه</span>
                </div>
                {/* Big Flashy Photo Banner */}
                <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)', borderRadius: 8, padding: '16px', textAlign: 'center', color: '#fff' }}>
                  <div style={{ fontSize: 16, fontWeight: 'bold' }}>🎉 ألبوم صور حفل التكريم السنوي ومعرض التربية الفنية 🎉</div>
                  <div style={{ fontSize: 11, opacity: 0.9 }}>تصفح أكثر من 300 صورة عالية الدقة للأنشطة المدرسية</div>
                </div>
                {/* School news cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                  <div style={{ background: '#1e293b', padding: 8, borderRadius: 6, fontSize: 11, color: '#94a3b8' }}>📰 خبر: رحلة الأهرامات الجمعة</div>
                  <div style={{ background: '#1e293b', padding: 8, borderRadius: 6, fontSize: 11, color: '#94a3b8' }}>🏆 فوز فريق السلة بالمركز الثاني</div>
                  <div style={{ background: '#1e293b', padding: 8, borderRadius: 6, fontSize: 11, color: '#94a3b8' }}>🥗 قائمة وجبات الكانتين الجديدة</div>
                </div>
                {/* Results Button buried and small */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', borderTop: '1px solid #334155', paddingTop: 6 }}>
                  <span style={{ fontSize: 10.5, color: '#64748b', background: '#1e293b', padding: '3px 8px', borderRadius: 4 }}>
                    رابط فرعي: للاستعلام عن النتائج انزل لآخر الصفحة ➔ اضغط هنا
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 'bold', color: '#38bdf8' }}>🏫 بوابة مدرسة الأمل الثانوية · بوابة النتائج الفورية</span>
                  <span style={{ fontSize: 11, color: '#4ade80' }}>✓ الوصول في ثانيتين فقط!</span>
                </div>
                {/* Main Prominent Results Card */}
                <div style={{ background: 'rgba(30, 41, 59, 0.9)', border: '2px solid #38bdf8', borderRadius: 8, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>🎓</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff' }}>استعلام نتائج امتحانات الفصل الدراسي الثاني 2027</div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>أدخل رقم الجلوس المكون من 5 أرقام واضغط عرض النتيجة</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <div style={{ background: '#0f172a', border: '1px solid #64748b', borderRadius: 6, padding: '6px 12px', fontSize: 13, color: '#f8fafc', fontWeight: 'bold' }}>
                      رقم الجلوس: 14205
                    </div>
                    <button style={{ background: '#2563eb', border: 'none', borderRadius: 6, padding: '6px 16px', fontSize: 13, color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
                      🔍 عرض النتيجة
                    </button>
                  </div>
                </div>
                {/* Grade display card */}
                <div style={{ background: '#1e293b', borderRadius: 8, padding: '8px 12px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, textAlign: 'center', fontSize: 11.5 }}>
                  <div style={{ background: '#0f172a', padding: 6, borderRadius: 4 }}><b>اللغة العربية:</b> <span style={{ color: '#4ade80' }}>98/100 (ممتاز)</span></div>
                  <div style={{ background: '#0f172a', padding: 6, borderRadius: 4 }}><b>الرياضيات:</b> <span style={{ color: '#4ade80' }}>96/100 (ممتاز)</span></div>
                  <div style={{ background: '#0f172a', padding: 6, borderRadius: 4 }}><b>العلوم:</b> <span style={{ color: '#4ade80' }}>94/100 (ممتاز)</span></div>
                  <div style={{ background: '#0f172a', padding: 6, borderRadius: 4 }}><b>الحاسب الآلي:</b> <span style={{ color: '#4ade80' }}>100/100 (ممتاز)</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Alert */}
      <div style={{ marginTop: 8, background: 'rgba(139, 92, 246, 0.15)', border: '1px solid #8b5cf6', borderRadius: 8, padding: '6px 14px', textAlign: 'center', fontSize: 13, color: '#e9d5ff', fontWeight: 'bold' }}>
        🎯 الخلاصة العملية: «لاحظ هنا.. مش بنصمم على حسب ذوقنا الشخصي، لكن على حسب احتياجات المستخدم الحقيقية!»
      </div>
    </div>
  );
}

/* =========================================================================
   3. Interactive Component for Slide 3: 5 Stages of UCD Cycle
   ========================================================================= */
function UcdStagesCycleInteractive() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: 1,
      title: 'فهم المستخدم',
      titleEn: 'Understand the User',
      icon: '👤',
      color: '#38bdf8',
      desc: 'نعرف أهدافه واحتياجاته وسياق استخدامه وسلوكه اليومي والتحديات التي تواجهه.',
      tool: 'أداة مساعدة: شخصية المستخدم (User Persona).',
      question: 'مين المستخدم وإيه ظروف استخدامه للموقع؟',
      output: 'بطاقة شخصية نموذجية تحتوي الأهداف والاحتياجات ونقاط الألم.',
    },
    {
      num: 2,
      title: 'تنظيم المعلومات',
      titleEn: 'Information Architecture',
      icon: '📐',
      color: '#fb923c',
      desc: 'نحدد العناصر المهمة وأماكنها وأولويات المحتوى ومسارات التصفح الأساسية.',
      tool: 'أداة مساعدة: المخطط الهيكلي (Wireframe Blueprint).',
      question: 'إيه اللي هيتحط في الصفحة وترتيب أولوياته إيه قبل التلوين؟',
      output: 'مسودة معمارية بالأبيض والأسود تركز على الهيكل دون تشتيت الألوان.',
    },
    {
      num: 3,
      title: 'تصميم الحل',
      titleEn: 'Design the Solution',
      icon: '🎨',
      color: '#c084fc',
      desc: 'ننظم شكل ومظهر الصفحة البصري باحترافية ونختار الألوان والخطوط والأزرار.',
      tool: 'القواعد المعتمدة: مبادئ التصميم البصري الأربعة (CRAP).',
      question: 'إزاي نخلي الواجهة مريحة ومتباينة ومحاذية ومترابطة بصرياً؟',
      output: 'واجهة بصرية متسقة ومريحة للعين تطبق التباين والتكرار والمحاذاة والتقارب.',
    },
    {
      num: 4,
      title: 'اختبار التصميم',
      titleEn: 'Test the Design',
      icon: '🧪',
      color: '#fbbf24',
      desc: 'نخلي مستخدمين حقيقيين يجربوا الموقع ونلاحظ: هل قدروا ينجزوا المطلوب بسهولة؟',
      tool: 'المفهوم المقرر: اختبار قابلية الاستخدام (Usability Testing).',
      question: 'هل يقدر ولي الأمر يوصل لنتيجة ابنه في ثانيتين وبدون تعثر؟',
      output: 'تقرير بالملاحظات الواقعية ونقاط الصعوبة التي واجهت المستخدمين.',
    },
    {
      num: 5,
      title: 'التحسين والتطوير',
      titleEn: 'Refine & Iterate',
      icon: '🚀',
      color: '#4ade80',
      desc: 'نعدل المشكلات ونقاط الألم التي ظهرت أثناء الاختبار، ونعيد الاختبار لو محتاجين.',
      tool: 'المفهوم المقرر: التحسين التكراري المستمر (Iterative Design Loop).',
      question: 'ما التعديلات المطلوبة لجعل التجربة مثالية وسلسة؟',
      output: 'نسخة محسنة ومحدثة تحقق أعلى رضا وسرعة للمستخدم النهائي.',
    },
  ];

  const current = stages[activeStage];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      {/* Top 5 Stepper Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
        {stages.map((st, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={st.title}
              onClick={() => setActiveStage(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '6px 8px',
                borderRadius: 8,
                background: isActive ? 'rgba(30, 41, 59, 0.95)' : 'rgba(15, 23, 42, 0.6)',
                border: isActive ? `2px solid ${st.color}` : '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 16 }}>{st.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 'bold', color: isActive ? st.color : '#94a3b8' }}>
                  {st.num}. {st.title}
                </span>
              </div>
              <span style={{ fontSize: 9.5, color: '#64748b', marginTop: 2 }}>{st.titleEn}</span>
            </button>
          );
        })}
      </div>

      {/* Main Focus Stage Box */}
      <div style={{ flex: 1, marginTop: 8, background: 'rgba(30, 41, 59, 0.75)', border: `2px solid ${current.color}`, borderRadius: 10, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 24 }}>{current.icon}</span>
              <div>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: current.color }}>
                  المرحلة ({current.num}): {current.title}
                </span>
                <span style={{ fontSize: 12, color: '#94a3b8', marginRight: 8 }}>({current.titleEn})</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage((p) => Math.max(0, p - 1))}
                style={{ padding: '3px 10px', borderRadius: 4, background: '#1e293b', color: activeStage === 0 ? '#475569' : '#fff', border: '1px solid #475569', fontSize: 11, cursor: activeStage === 0 ? 'default' : 'pointer' }}
              >
                السابق ❮
              </button>
              <button
                disabled={activeStage === 4}
                onClick={() => setActiveStage((p) => Math.min(4, p + 1))}
                style={{ padding: '3px 10px', borderRadius: 4, background: '#1e293b', color: activeStage === 4 ? '#475569' : '#fff', border: '1px solid #475569', fontSize: 11, cursor: activeStage === 4 ? 'default' : 'pointer' }}
              >
                التالي ❯
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14, marginTop: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 14, color: '#f1f5f9', lineHeight: 1.55 }}>
                <b>ماذا نفعل في هذه المرحلة؟</b><br />
                {current.desc}
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '8px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: 12.5, fontWeight: 'bold', color: current.color }}>❓ السؤال الجوهري:</span>
                <div style={{ fontSize: 12, color: '#cbd5e1', marginTop: 2 }}>{current.question}</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '8px 12px', borderRadius: 6, border: `1px solid ${current.color}` }}>
                <span style={{ fontSize: 12.5, fontWeight: 'bold', color: current.color }}>🛠️ الأداة / المفهوم المساعد:</span>
                <div style={{ fontSize: 12, color: '#ffffff', marginTop: 2, fontWeight: 'bold' }}>{current.tool}</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '8px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: 12.5, fontWeight: 'bold', color: '#4ade80' }}>📦 مخرجات المرحلة:</span>
                <div style={{ fontSize: 12, color: '#cbd5e1', marginTop: 2 }}>{current.output}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ fontSize: 11.5, color: '#94a3b8', textAlign: 'center', background: 'rgba(255,255,255,0.04)', padding: '4px', borderRadius: 6 }}>
          دورة UCD عملية متكررة ومستمرة تبدأ بفهم المستخدم وتمر بالتنظيم والتصميم وتكتمل بالاختبار والتحسين.
        </div>
      </div>

      {/* Bottom Methodological Note Box */}
      <div style={{ marginTop: 8, background: 'rgba(234, 179, 8, 0.15)', border: '1px solid #eab308', borderRadius: 8, padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>💡</span>
        <div style={{ fontSize: 12.5, color: '#fef08a', lineHeight: 1.45 }}>
          <b>ملحوظة منهجية مهمة:</b> «Persona و Wireframe أدوات مساعدة يمكن استخدامها ضمن التصميم المتمحور حول المستخدم، <b>لكن مش شرط تكون إلزامية في كل مشروع!</b>»
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. Interactive Component for Slide 4: Testing & Iteration Loop
   ========================================================================= */
function UcdTestingIterationInteractive() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [testedMode, setTestedMode] = useState<'before' | 'after'>('after');

  const steps = [
    {
      num: 1,
      title: 'نعرف سبب المشكلة',
      titleEn: 'Identify the Root Cause',
      icon: '🔎',
      color: '#38bdf8',
      desc: 'نسأل أولياء الأمور ونلاحظ سلوكهم: ليه مش قادرين يوصلوا لصفحة النتائج؟ هل لأن الزر مخفي في قائمة فرعية، أم لأن الخط صغير جداً؟',
      quote: '«أنا دخلت الموقع ومش لاقي أي كلمة بتقول النتيجة فين وسط الأخبار الكثيرة!»',
    },
    {
      num: 2,
      title: 'نراجع مكان زر النتائج وطريقة الوصول',
      titleEn: 'Review Placement & Flow',
      icon: '📐',
      color: '#fb923c',
      desc: 'نحلل بنية الصفحة ومسار رحلة المستخدم (User Flow)، ونحدد الموضع الأفضل الذي تنظر إليه عين الزائر فور دخوله (أعلى وسط الصفحة).',
      quote: '«مكان الزر لازم يكون في الصدارة وأول عنصر يلفت الانتباه مباشرة دون الحاجة للنزول لأسفل.»',
    },
    {
      num: 3,
      title: 'نعدل التصميم',
      titleEn: 'Modify & Refine Design',
      icon: '🛠️',
      color: '#c084fc',
      desc: 'نطبق مبادئ CRAP: نكبر حجم الزر، نضعه في مكان واضح، ونعطيه تبايناً لونياً ساطعاً (أزرق ملكي جذاب) ليبرز كإجراء رئيسي (CTA).',
      quote: '«تكبير الزر وتغيير لونه ومكانه جعل الصفحة واضحة ومهيأة للغرض الأساسي.»',
    },
    {
      num: 4,
      title: 'نخلي المستخدمين يجربوه مرة تانية',
      titleEn: 'Re-test with Real Users',
      icon: '✅',
      color: '#4ade80',
      desc: 'نعيد التجربة مع نفس أولياء الأمور للتأكد من زوال العائق، وقياس سرعة وسهولة وصولهم للنتيجة بنجاح تام.',
      quote: '«الآن وصلت للنتيجة في ثانيتين فقط فور فتح الموقع! تجربة مريحة وسهلة جداً.»',
    },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      {/* Top Scenario Alert */}
      <div style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid #f59e0b', borderRadius: 8, padding: '7px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16 }}>⚠️</span>
          <span style={{ fontSize: 13, fontWeight: 'bold', color: '#fef08a' }}>
            السيناريو الواقعي: صممنا موقع المدرسة، وبعد الإطلاق اكتشفنا إن بعض أولياء الأمور مش عارفين يوصلوا للنتائج.. نعمل إيه؟
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => setTestedMode('before')}
            style={{
              padding: '3px 10px',
              borderRadius: 6,
              fontSize: 11.5,
              fontWeight: 'bold',
              background: testedMode === 'before' ? '#ef4444' : 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            الموقع قبل التعديل ❌
          </button>
          <button
            onClick={() => setTestedMode('after')}
            style={{
              padding: '3px 10px',
              borderRadius: 6,
              fontSize: 11.5,
              fontWeight: 'bold',
              background: testedMode === 'after' ? '#22c55e' : 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            الموقع بعد التحسين ✅
          </button>
        </div>
      </div>

      {/* Main Grid: 4 Steps on Left / Details & Simulation on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 12, flex: 1, marginTop: 8 }}>
        {/* Left Column: 4 Remediation Steps */}
        <div style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 }}>
              🔄 دورة حل المشكلات في 4 خطوات عملية:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {steps.map((st, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={st.title}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: 8,
                      background: isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                      border: isSelected ? `2px solid ${st.color}` : '1px solid rgba(255,255,255,0.1)',
                      color: isSelected ? '#ffffff' : '#cbd5e1',
                      cursor: 'pointer',
                      textAlign: 'right',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 16 }}>{st.icon}</span>
                      <span style={{ fontSize: 12.5, fontWeight: isSelected ? 'bold' : 'normal' }}>
                        {st.num}. {st.title}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: isSelected ? st.color : '#64748b' }}>
                      {isSelected ? 'المفعلة' : 'فحص'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ fontSize: 11.5, color: '#94a3b8', textAlign: 'center', marginTop: 4 }}>
            اضغط على أي خطوة لرؤية دور المصمم واقتباس المستخدم
          </div>
        </div>

        {/* Right Column: Active Step Details & Before/After Simulator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Active Step Card */}
          <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: `2px solid ${steps[activeStep].color}`, borderRadius: 10, padding: '10px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 'bold', color: steps[activeStep].color }}>
                {steps[activeStep].icon} الخطوة ({activeStep + 1}): {steps[activeStep].title}
              </span>
              <span style={{ fontSize: 11, color: '#94a3b8', direction: 'ltr' }}>{steps[activeStep].titleEn}</span>
            </div>
            <div style={{ fontSize: 12.5, color: '#e2e8f0', lineHeight: 1.5, marginTop: 6 }}>
              {steps[activeStep].desc}
            </div>
            <div style={{ marginTop: 6, background: 'rgba(255,255,255,0.06)', padding: '6px 10px', borderRadius: 6, fontSize: 11.5, color: '#fef08a', fontStyle: 'italic' }}>
              🗣️ {steps[activeStep].quote}
            </div>
          </div>

          {/* Mini Live Simulator Result Card */}
          <div style={{ flex: 1, background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {testedMode === 'before' ? (
              <div>
                <div style={{ fontSize: 13, fontWeight: 'bold', color: '#ef4444', marginBottom: 4 }}>
                  ❌ تجربة ولي الأمر قبل التعديل:
                </div>
                <div style={{ fontSize: 12, color: '#cbd5e1', lineHeight: 1.45 }}>
                  • ولي الأمر يبحث في الصفحة الرئيسية لأكثر من 3 دقائق.<br />
                  • معدل إنجاز المهمة بنجاح: <b>30% فقط!</b><br />
                  • شكاوى متعددة وإحباط لعدم وضوح مكان النتائج.
                </div>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: 13, fontWeight: 'bold', color: '#22c55e', marginBottom: 4 }}>
                  ✅ تجربة ولي الأمر بعد التحسين والتعديل:
                </div>
                <div style={{ fontSize: 12, color: '#cbd5e1', lineHeight: 1.45 }}>
                  • زر نتائج بارز في أعلى الصفحة بلون أزرق ساطع.<br />
                  • معدل إنجاز المهمة بنجاح: <b>100% لجميع أولياء الأمور!</b><br />
                  • زمن الوصول للنتيجة: <b>ثانيتان فقط</b> فور تحميل الصفحة.
                </div>
              </div>
            )}

            <div style={{ fontSize: 11, color: '#38bdf8', textAlign: 'center', background: 'rgba(56, 189, 248, 0.1)', padding: '4px', borderRadius: 4 }}>
              الاختبار العملي يكشف ما لا يستطيع المصمم رؤيته بمفرده في المعمل!
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Golden Principle */}
      <div style={{ marginTop: 8, background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)', border: '1px solid #10b981', borderRadius: 8, padding: '7px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <span style={{ fontSize: 16 }}>🎯</span>
        <span style={{ fontSize: 13.5, fontWeight: 'bold', color: '#ffffff' }}>
          المبدأ الجوهري: «التصميم مش لازم يكون مثالي من أول مرة؛ بنختبره ونحسنه بناءً على ملاحظات وتجربة المستخدمين!»
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   5. Interactive Component for Slide 5: Designer Opinion vs UCD
   ========================================================================= */
function UcdVsDesignerOpinionInteractive() {
  const [challengeIdx, setChallengeIdx] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<'designer' | 'ucd' | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean>(false);

  const challenges = [
    {
      stmt: '«أنا شايف إن الصور الكبيرة والتأثيرات الكثيرة هتخلي الموقع أجمل، يبقى نستخدمها.»',
      type: 'designer',
      reason: 'قرار مبني على الذوق الشخصي والافتراض الفردي للمصمم دون دراسة حاجة الزائر.',
    },
    {
      stmt: '«المستخدم محتاج يوصل للنتيجة بسرعة، يبقى لازم نخلي الوصول للنتائج واضح وسهل وفي الصدارة.»',
      type: 'ucd',
      reason: 'تصميم متمحور حول المستخدم يضع هدفه وسرعة إنجازه للمهمة في المقام الأول.',
    },
    {
      stmt: '«إضافة موسيقى تعمل تلقائياً عند فتح الموقع لأن المصمم يحب الأجواء الحماسية.»',
      type: 'designer',
      reason: 'رأي المصمم يزعج المستخدمين ويهدر باقة الإنترنت دون أي قيمة وظيفية.',
    },
    {
      stmt: '«تكبير حقول الإدخال والأزرار بعد شكوى كبار السن من صعوبة النقر عليها من الهاتف.»',
      type: 'ucd',
      reason: 'استجابة حقيقية لنقاط ألم المستخدمين وسياق استخدامهم الواقعي وفق فلسفة UCD.',
    },
  ];

  const current = challenges[challengeIdx];

  const handleAnswer = (choice: 'designer' | 'ucd') => {
    if (answered) return;
    setUserChoice(choice);
    setAnswered(true);
    if (choice === current.type) {
      setScore((s) => s + 1);
    }
  };

  const nextChallenge = () => {
    setUserChoice(null);
    setAnswered(false);
    setChallengeIdx((prev) => (prev + 1) % challenges.length);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      {/* 2 Big Comparative Banners */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {/* Designer Opinion (Traditional) */}
        <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '2px solid #ef4444', borderRadius: 10, padding: '10px 14px', textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 'bold', color: '#f87171' }}>
              ❌ التصميم بناءً على رأي المصمم (التقليدي)
            </span>
            <span style={{ fontSize: 18 }}>🎨</span>
          </div>
          <div style={{ fontSize: 13, color: '#fecaca', background: 'rgba(0,0,0,0.3)', padding: '6px 10px', borderRadius: 6, fontStyle: 'italic', lineHeight: 1.45 }}>
            «أنا شايف إن الصور الكبيرة والتأثيرات الكثيرة هتخلي الموقع أجمل، يبقى نستخدمها.»
          </div>
          <div style={{ fontSize: 11.5, color: '#cbd5e1', marginTop: 6, lineHeight: 1.45 }}>
            • المنطلق: الذوق الفردي والافتراضات الشخصية.<br />
            • الهدف: استعراض مهارات الجماليات والألوان فقط.<br />
            • النتيجة: موقع معقد ومشتت وصعب الاستخدام!
          </div>
        </div>

        {/* User-Centered Design (UCD) */}
        <div style={{ background: 'rgba(34, 197, 94, 0.12)', border: '2px solid #22c55e', borderRadius: 10, padding: '10px 14px', textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 'bold', color: '#4ade80' }}>
              ✅ التصميم المتمحور حول المستخدم (UCD)
            </span>
            <span style={{ fontSize: 18 }}>🎯</span>
          </div>
          <div style={{ fontSize: 13, color: '#bbf7d0', background: 'rgba(0,0,0,0.3)', padding: '6px 10px', borderRadius: 6, fontStyle: 'italic', lineHeight: 1.45 }}>
            «المستخدم محتاج يوصل للنتيجة بسرعة، يبقى لازم نخلي الوصول للنتائج واضح وسهل.»
          </div>
          <div style={{ fontSize: 11.5, color: '#cbd5e1', marginTop: 6, lineHeight: 1.45 }}>
            • المنطلق: أبحاث واحتياجات وسياق المستخدم الفعلي.<br />
            • الهدف: سرعة وسهولة إنجاز المهمة وخلوها من الأخطاء.<br />
            • النتيجة: موقع عملي وناجح يحقق أهدافه بكفاءة!
          </div>
        </div>
      </div>

      {/* Interactive Classification Mini-Game */}
      <div style={{ flex: 1, marginTop: 8, background: 'rgba(30, 41, 59, 0.75)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 'bold', color: '#38bdf8' }}>
              🎮 تحدي التمييز السريع: صنّف العبارة التالية ({challengeIdx + 1} من {challenges.length})
            </span>
            <span style={{ fontSize: 12, fontWeight: 'bold', color: '#4ade80', background: 'rgba(34, 197, 94, 0.15)', padding: '2px 8px', borderRadius: 6 }}>
              النقاط: {score} / {challenges.length}
            </span>
          </div>

          <div style={{ fontSize: 14.5, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', margin: '14px 0', padding: '10px 14px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: 8, border: '1px dashed #64748b', lineHeight: 1.5 }}>
            {current.stmt}
          </div>

          {/* 2 Choice Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <button
              disabled={answered}
              onClick={() => handleAnswer('designer')}
              style={{
                padding: '8px 20px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 'bold',
                background: answered && current.type === 'designer' ? '#ef4444' : 'rgba(239, 68, 68, 0.2)',
                color: '#ffffff',
                border: '1px solid #ef4444',
                cursor: answered ? 'default' : 'pointer',
                opacity: answered && current.type !== 'designer' ? 0.4 : 1,
              }}
            >
              رأي المصمم الشخصي (العادي)
            </button>
            <button
              disabled={answered}
              onClick={() => handleAnswer('ucd')}
              style={{
                padding: '8px 20px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 'bold',
                background: answered && current.type === 'ucd' ? '#22c55e' : 'rgba(34, 197, 94, 0.2)',
                color: '#ffffff',
                border: '1px solid #22c55e',
                cursor: answered ? 'default' : 'pointer',
                opacity: answered && current.type !== 'ucd' ? 0.4 : 1,
              }}
            >
              تصميم متمحور حول المستخدم (UCD)
            </button>
          </div>
        </div>

        {/* Feedback Area */}
        {answered ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: userChoice === current.type ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)', padding: '8px 12px', borderRadius: 6, border: `1px solid ${userChoice === current.type ? '#22c55e' : '#ef4444'}` }}>
            <div style={{ fontSize: 12.5, color: '#ffffff' }}>
              <b>{userChoice === current.type ? '🎉 إجابة صحيحة!' : '⚠️ انتبه للتصنيف:'}</b> {current.reason}
            </div>
            <button
              onClick={nextChallenge}
              style={{ padding: '4px 12px', borderRadius: 6, background: '#38bdf8', color: '#090d16', border: 'none', fontSize: 12, fontWeight: 'bold', cursor: 'pointer' }}
            >
              العبارة التالية ❯
            </button>
          </div>
        ) : (
          <div style={{ fontSize: 11.5, color: '#94a3b8', textAlign: 'center' }}>
            اضغط على الخيار الصحيح للتحقق من الفرق بدقة وفق المنهج المعتمد 2027
          </div>
        )}
      </div>

      {/* Bottom Summary Callout */}
      <div style={{ marginTop: 8, background: 'rgba(14, 165, 233, 0.15)', border: '1px solid #0ea5e9', borderRadius: 8, padding: '6px 14px', textAlign: 'center', fontSize: 13, color: '#e0f2fe', fontWeight: 'bold' }}>
        💡 الفارق الجوهري في الامتحان: «نحن لا نصمم لأنفسنا أو لأذواقنا، بل نصمم للمستخدمين وفق أبحاث وحاجات حقيقية!»
      </div>
    </div>
  );
}

/* =========================================================================
   Exported UCD Detail Frames (5 Dedicated Interactive Slides)
   ========================================================================= */
export const ucdDetailFrames: FrameDef[] = [
  {
    id: 'ucd-concept-intro',
    title: '١ · ما هو التصميم المتمحور حول المستخدم (UCD)؟',
    scene: true,
    notes: (
      <>
        <p><b>رابعاً: التصميم المتمحور حول المستخدم (User-Centered Design - UCD):</b></p>
        <p><b>الربط بالمفاهيم السابقة:</b></p>
        <ul>
          <li><b>Persona:</b> نفهم مين المستخدم وإيه احتياجاته.</li>
          <li><b>Wireframe:</b> نحدد أماكن العناصر والمعلومات في الصفحة قبل التلوين.</li>
          <li><b>CRAP:</b> ننظم الشكل البصري للموقع وقواعد الإخراج الجذاب.</li>
        </ul>
        <p><b>الفكرة التي تجمع كل هذا:</b> أن نصمم الموقع بناءً على احتياجات الشخص الذي سيستخدمه، وليس بناءً على ذوق المصمم أو رأيه الشخصي!</p>
        <p><b>تعريف الكتاب المعتمد:</b> «نهج يجعل فهم المستخدمين واحتياجاتهم وسياق استخدامهم أساساً لقرارات التصميم.»</p>
        <p><b>الأسئلة الخمسة التي يسألها المصمم لنفسه:</b> مين هيستخدمه؟ عايز يعمل إيه؟ محتاج يوصل لإيه؟ إيه الصعوبات اللي ممكن تقابله؟ وهل يقدر يستخدمه بسهولة؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المفهوم الرابع: الرؤية الكبرى التي تجمع شخصية المستخدم والمخطط الهيكلي ومبادئ CRAP">
          رابعاً: التصميم المتمحور حول المستخدم (UCD) 🎯
        </Heading>

        <Box x={50} y={105} w={1180} h={575} c="blue" fill="blue" at={1}>
          <div style={{ padding: '12px 16px', height: '100%', boxSizing: 'border-box' }}>
            <UcdConceptInteractive />
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ucd-parent-results-case',
    title: '٢ · دراسة حالة: موقع نتائج المدرسة (ذوق المصمم vs احتياج المستخدم)',
    scene: true,
    notes: (
      <>
        <p><b>٢ · مثال عملي: موقع نتائج المدرسة (المنهج المعتمد):</b></p>
        <p><b>ذوق المصمم:</b> يرى ضرورة وضع صور كبيرة للمدرسة وأنشطة وأخبار كثيرة وتأثيرات ألوان مبهرة.</p>
        <p><b>احتياج ولي الأمر الحقيقي:</b> دخل الموقع لسبب محدد: يريد معرفة نتيجة ابنه بسرعة وبدون تشتيت!</p>
        <p><b>تحويل الاحتياجات إلى 4 قرارات تصميمية:</b></p>
        <ol>
          <li><b>الوصول للنتيجة بسرعة:</b> وضع زر النتائج في مكان واضح وبارز في الصدارة.</li>
          <li><b>معرفة نتيجة طالب محدد:</b> توفير خانة مباشرة لكتابة رقم الجلوس.</li>
          <li><b>فهم الدرجات بسهولة:</b> عرض المواد والدرجات في جدول منظم ومريح للعين.</li>
          <li><b>استخدام الموقع من الموبايل:</b> تصميم صفحة متجاوبة تناسب شاشات الهواتف.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مثال واقعي: كيف نحول احتياجات ولي الأمر إلى 4 قرارات تصميمية واضحة؟">
          ٢ · دراسة حالة: موقع نتائج المدرسة (ذوق المصمم vs احتياج المستخدم) 🏫
        </Heading>

        <Box x={50} y={105} w={1180} h={575} c="purple" fill="purple" at={1}>
          <div style={{ padding: '12px 16px', height: '100%', boxSizing: 'border-box' }}>
            <UcdSchoolCaseInteractive />
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ucd-5-stages-cycle',
    title: '٣ · دورة مراحل تطبيق UCD الخمسة وأدواتها',
    scene: true,
    notes: (
      <>
        <p><b>٣ · كيف نطبق التصميم المتمحور حول المستخدم؟ دورة المراحل الخمسة:</b></p>
        <ol>
          <li><b>فهم المستخدم:</b> نعرف أهدافه واحتياجاته وسياق استخدامه (أداة Persona).</li>
          <li><b>تنظيم المعلومات:</b> نحدد العناصر المهمة وأماكنها وأولوياتها (أداة Wireframe).</li>
          <li><b>تصميم الحل:</b> ننظم شكل الصفحة ومظهرها البصري (تطبيق مبادئ CRAP).</li>
          <li><b>اختبار التصميم:</b> نخلي مستخدمين يجربوا الموقع ونلاحظ مدى سهولة الإنجاز (Usability Testing).</li>
          <li><b>التحسين والتطوير:</b> نعدل المشكلات التي ظهرت ونعيد الاختبار لو محتاجين.</li>
        </ol>
        <p><b>ملحوظة منهجية هامة:</b> Persona و Wireframe أدوات مساعدة ممتازة في UCD، لكن مش شرط تكون إلزامية في كل مشروع.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="دورة UCD: خمس مراحل متكاملة تبدأ بفهم المستخدم وتمر بالتنظيم والتصميم والاختبار">
          ٣ · دورة مراحل تطبيق التصميم المتمحور حول المستخدم (UCD Process) 🔄
        </Heading>

        <Box x={50} y={105} w={1180} h={575} c="green" fill="green" at={1}>
          <div style={{ padding: '12px 16px', height: '100%', boxSizing: 'border-box' }}>
            <UcdStagesCycleInteractive />
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ucd-testing-iteration',
    title: '٤ · أهمية الاختبار والتحسين ودورة حل المشكلات',
    scene: true,
    notes: (
      <>
        <p><b>٤ · مثال يوضح أهمية الاختبار والتحسين (المنهج المعتمد):</b></p>
        <p>بعد إطلاق موقع المدرسة، واجه أولياء الأمور صعوبة في الوصول لصفحة النتائج.</p>
        <p><b>دورة حل المشكلة في 4 خطوات:</b></p>
        <ol>
          <li><b>نعرف سبب المشكلة:</b> نسأل أولياء الأمور ونلاحظ أين يتعثرون.</li>
          <li><b>نراجع مكان زر النتائج:</b> إعادة التفكير في مسار الوصول وهندسة الصفحة.</li>
          <li><b>نعدل التصميم:</b> نكبر الزر ونضعه في الصدارة بلون متباين.</li>
          <li><b>نعيد الاختبار:</b> نخلي المستخدمين يجربوه مرة ثانية للتحقق من زوال العائق.</li>
        </ol>
        <p><b>القاعدة:</b> «التصميم مش لازم يكون مثالي من أول مرة؛ بنختبره ونحسنه بناءً على ملاحظات المستخدمين!»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التطوير التكراري: دورة تصحيح الأخطاء وعلاج صعوبات الاستخدام خطوة بخطوة">
          ٤ · أهمية الاختبار والتحسين ودورة حل المشكلات 🧪
        </Heading>

        <Box x={50} y={105} w={1180} h={575} c="orange" fill="orange" at={1}>
          <div style={{ padding: '12px 16px', height: '100%', boxSizing: 'border-box' }}>
            <UcdTestingIterationInteractive />
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ucd-vs-designer-opinion',
    title: '٥ · الفرق بين رأي المصمم والتصميم المتمحور حول المستخدم',
    scene: true,
    notes: (
      <>
        <p><b>٥ · الفرق بين التصميم العادي والتصميم المتمحور حول المستخدم:</b></p>
        <p><b>رأي المصمم (التصميم العادي):</b> «أنا شايف إن الصور الكبيرة والتأثيرات الكثيرة هتخلي الموقع أجمل، يبقى نستخدمها.»</p>
        <p><b>التصميم المتمحور حول المستخدم (UCD):</b> «المستخدم محتاج يوصل للنتيجة بسرعة، يبقى لازم نخلي الوصول للنتائج واضح وسهل.»</p>
        <p><b>الخلاصة الامتحانية:</b> التصميم الناجح لا ينطلق من ذوق المصمم الفردي، بل من فهم احتياجات وسياق مستخدم الموقع الفعلي.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الفارق الجوهري: كيف تفرق في امتحانات البكالوريا بين رأي المصمم الشخصي وفلسفة UCD؟">
          ٥ · الفرق بين رأي المصمم والتصميم المتمحور حول المستخدم (UCD) ⚖️
        </Heading>

        <Box x={50} y={105} w={1180} h={575} c="blue" fill="blue" at={1}>
          <div style={{ padding: '12px 16px', height: '100%', boxSizing: 'border-box' }}>
            <UcdVsDesignerOpinionInteractive />
          </div>
        </Box>
      </Scene>
    ),
  },
];

/* =========================================================================
   USABILITY COMPONENTS (خامساً: قابلية الاستخدام)
   ========================================================================= */

/* 1. Usability Concept + Practical Example (يعني إيه + مثال) */
function UsabilityConceptInteractive() {
  const [mode, setMode] = useState<'easy' | 'hard'>('easy');

  const hardSteps = [
    'الرئيسية',
    'الطلاب',
    'الخدمات',
    'نتائج الطلاب',
    'الثانوية العامة',
    'الصف الثاني',
    'إدخال رقم الجلوس',
    'عرض النتيجة',
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10, boxSizing: 'border-box', direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', system-ui, sans-serif", whiteSpace: 'normal' }}>
      {/* Visual Identity Strip */}
      <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1.5px solid rgba(56, 189, 248, 0.45)', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>👌</span>
          <span style={{ fontSize: 13.5, fontWeight: 'bold', color: '#e2e8f0' }}>
            الهوية البصرية للمفهوم: <span style={{ color: '#38bdf8' }}>السرعة والسهولة والفاعلية</span> — المستخدم ينفذ مهمته دون تعقيد أو خطوات زائدة.
          </span>
        </div>
        <span style={{ fontSize: 11.5, fontWeight: 'bold', background: 'rgba(56, 189, 248, 0.16)', color: '#38bdf8', padding: '3px 10px', borderRadius: 999, border: '1px solid #38bdf8', whiteSpace: 'nowrap' }}>
          ٥ · Usability
        </span>
      </div>

      {/* Main 2 Columns: Meaning (Right) + Interactive Example (Left) */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.2fr', gap: 14, flex: 1 }}>
        {/* Right Column: What does it mean? */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '2px solid #38bdf8', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontSize: 15, fontWeight: 'bold', color: '#38bdf8', marginBottom: 6 }}>
              📖 يعني إيه قابلية الاستخدام؟ (تعريف الكتاب)
            </div>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff', lineHeight: 1.5 }}>
              «سهولة وفاعلية إنجاز المهمة.»
            </div>
            <div style={{ fontSize: 12, color: '#94a3b8', direction: 'ltr', textAlign: 'left', marginTop: 4 }}>
              Ease and effectiveness of completing the user&apos;s task
            </div>
          </div>

          <div style={{ flex: 1, background: 'rgba(30, 41, 59, 0.78)', border: '1.5px solid rgba(255,255,255,0.16)', borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8 }}>
                💡 ببساطة للطلاب:
              </div>
              <div style={{ fontSize: 14.5, color: '#f1f5f9', lineHeight: 1.65 }}>
                يعني الموقع يكون <b>سهل الاستخدام</b>، والمستخدم يقدر يعمل اللي هو عايزه (زي معرفة النتيجة أو الشراء) <b>بسرعة ومن غير تعقيد أو خطوات غير ضرورية</b>.
              </div>
            </div>

            <div style={{ background: 'rgba(251, 191, 36, 0.12)', border: '1px dashed #fbbf24', borderRadius: 8, padding: '9px 12px', fontSize: 13, color: '#fef08a', lineHeight: 1.5 }}>
              ⚠️ <b>خد بالك:</b> قابلية الاستخدام مش معناها إن الموقع شكله حلو وبس، الأهم إن المستخدم يقدر يوصل لهدفه بسهولة!
            </div>
          </div>
        </div>

        {/* Left Column: Practical Interactive Example */}
        <div style={{ background: 'rgba(15, 23, 42, 0.92)', border: `2px solid ${mode === 'easy' ? '#4ade80' : '#f87171'}`, borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 8 }}>
            <span style={{ fontSize: 15, fontWeight: 'bold', color: '#ffffff' }}>
              🏫 مثال: طالب دخل يعرف نتيجته
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                onClick={() => setMode('easy')}
                style={{
                  cursor: 'pointer',
                  padding: '5px 11px',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 'bold',
                  background: mode === 'easy' ? '#16a34a' : 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                ✅ موقع سهل (خطوتان)
              </button>
              <button
                type="button"
                onClick={() => setMode('hard')}
                style={{
                  cursor: 'pointer',
                  padding: '5px 11px',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 'bold',
                  background: mode === 'hard' ? '#dc2626' : 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                ❌ موقع معقد (8 خطوات)
              </button>
            </div>
          </div>

          {mode === 'easy' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '8px 0' }}>
              <div style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1.5px solid #22c55e', borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 'bold', color: '#4ade80', marginBottom: 4 }}>
                  ١. في الصفحة الرئيسية مباشرة:
                </div>
                <div style={{ fontSize: 13.5, color: '#e2e8f0' }}>
                  زر واضح في المقدمة: <b>«نتائج الطلاب — أدخل رقم الجلوس»</b>.
                </div>
              </div>

              <div style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1.5px solid #22c55e', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 'bold', color: '#4ade80', marginBottom: 4 }}>
                    ٢. النتيجة في ثوانٍ:
                  </div>
                  <div style={{ fontSize: 13, color: '#e2e8f0' }}>يكتب الرقم ويضغط «عرض النتيجة» فتظهر الشهادة فوراً!</div>
                </div>
                <span style={{ background: '#16a34a', color: '#fff', padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  نجح 98% 🎉
                </span>
              </div>

              <div style={{ background: 'rgba(22, 163, 74, 0.2)', borderRadius: 8, padding: '8px 12px', fontSize: 13, color: '#bbf7d0', fontWeight: 'bold', textAlign: 'center' }}>
                ✅ قابلية استخدام ممتازة: المهمة تمت في خطوتين وبأقل جهد!
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '8px 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {hardSteps.map((st, idx) => (
                  <div
                    key={st}
                    style={{
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(248, 113, 113, 0.45)',
                      borderRadius: 7,
                      padding: '6px 10px',
                      fontSize: 12.5,
                      color: '#fecaca',
                    }}
                  >
                    <b>{idx + 1}.</b> {st}
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(220, 38, 38, 0.2)', borderRadius: 8, padding: '8px 12px', fontSize: 13, color: '#fecaca', fontWeight: 'bold', textAlign: 'center' }}>
                ❌ قابلية استخدام ضعيفة: المعلومة موجودة، لكن الطالب تاه في 8 خطوات طويلة!
              </div>
            </div>
          )}

          <div style={{ fontSize: 12.5, color: '#94a3b8', background: 'rgba(255,255,255,0.04)', padding: '6px 10px', borderRadius: 8, textAlign: 'center' }}>
            القاعدة: كلما وصل المستخدم لهدفه بخطوات أقل ووضوح أكبر، زادت قابلية الاستخدام.
          </div>
        </div>
      </div>
    </div>
  );
}





/* =========================================================================
   Exported Usability Detail Frame (Concise: Meaning + Practical Example)
   ========================================================================= */
export const usabilityDetailFrames: FrameDef[] = [
  {
    id: 'usability-concept-intro',
    title: '٥ · قابلية الاستخدام (Usability): يعني إيه؟ مع مثال',
    scene: true,
    notes: (
      <>
        <p><b>خامساً: قابلية الاستخدام (Usability):</b></p>
        <p><b>يعني إيه؟</b> «سهولة وفاعلية إنجاز المهمة» — يعني الموقع يكون سهل الاستخدام، والزائر ينفذ هدفه بسرعة وبدون تعقيد أو خطوات غير ضرورية.</p>
        <p><b>مثال:</b> طالب دخل موقع المدرسة علشان يعرف نتيجته؛ لو وصلها في خطوتين مباشرتين فالقابلية ممتازة، أما لو تاه في 8 خطوات فالقابلية ضعيفة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading u="blue" sub="المفهوم الخامس: يعني إيه قابلية الاستخدام؟ مع مثال عملي مباشر">
          ٥ · قابلية الاستخدام (Usability) 👌
        </Heading>

        <Box x={46} y={122} w={1188} h={566} c="blue" fill="blue" at={1} />
        <Place x={46} y={122} w={1188} h={566} at={1}>
          <div style={{ width: '100%', height: '100%', padding: '12px 16px', boxSizing: 'border-box' }}>
            <UsabilityConceptInteractive />
          </div>
        </Place>
      </Scene>
    ),
  },
];

/* =========================================================================
   Interactive Component & Export Frame for Concept 6: Accessibility (a11y)
   Concise: Meaning + Practical Interactive Example
   ========================================================================= */
function AccessibilityInteractive() {
  const [accessible, setAccessible] = useState<boolean>(true);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10, boxSizing: 'border-box', direction: 'rtl', textAlign: 'right', fontFamily: "'Cairo', system-ui, sans-serif", whiteSpace: 'normal' }}>
      {/* Visual Identity Strip */}
      <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1.5px solid rgba(74, 222, 128, 0.45)', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>♿</span>
          <span style={{ fontSize: 13.5, fontWeight: 'bold', color: '#e2e8f0' }}>
            الهوية البصرية للمفهوم: <span style={{ color: '#4ade80' }}>الشمولية وعدم استبعاد أي فئة</span> — الموقع متاح لكل البشر بمختلف قدراتهم.
          </span>
        </div>
        <span style={{ fontSize: 11.5, fontWeight: 'bold', background: 'rgba(74, 222, 128, 0.16)', color: '#4ade80', padding: '3px 10px', borderRadius: 999, border: '1px solid #4ade80', whiteSpace: 'nowrap' }}>
          ٦ · Accessibility (a11y)
        </span>
      </div>

      {/* Main 2 Columns: Meaning (Right) + Interactive Example (Left) */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.2fr', gap: 14, flex: 1 }}>
        {/* Right Column: What does it mean? */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '2px solid #4ade80', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontSize: 15, fontWeight: 'bold', color: '#4ade80', marginBottom: 6 }}>
              📖 يعني إيه إمكانية الوصول الرقمي؟
            </div>
            <div style={{ fontSize: 18.5, fontWeight: 'bold', color: '#ffffff', lineHeight: 1.55 }}>
              تمكين جميع الأشخاص، بمن فيهم ذوو الإعاقة وكبار السن، من استخدام الموقع والتفاعل معه بسهولة.
            </div>
            <div style={{ fontSize: 12, color: '#94a3b8', direction: 'ltr', textAlign: 'left', marginTop: 4 }}>
              Inclusive access for everyone, including disabilities &amp; elderly
            </div>
          </div>

          <div style={{ flex: 1, background: 'rgba(30, 41, 59, 0.78)', border: '1.5px solid rgba(255,255,255,0.16)', borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 'bold', color: '#fbbf24', marginBottom: 8 }}>
                💡 ببساطة للطلاب:
              </div>
              <div style={{ fontSize: 14.5, color: '#f1f5f9', lineHeight: 1.65 }}>
                يعني نصمم الموقع بحيث ما يوقفش أي حد؛ اللي عنده <b>كف بصر</b> يسمعه بقارئ الشاشة، واللي عنده <b>ضعف بصر أو كبير في السن</b> يقرأ الخط بوضوح، واللي ما بيستخدمش الفأرة يتنقل بلوحة المفاتيح!
              </div>
            </div>

            <div style={{ background: 'rgba(74, 222, 128, 0.12)', border: '1px dashed #4ade80', borderRadius: 8, padding: '9px 12px', fontSize: 13, color: '#dcfce7', lineHeight: 1.5 }}>
              📌 <b>الفرق عن Usability:</b> قابلية الاستخدام بتهتم بالسهولة عامةً، وإمكانية الوصول بتضمن إن السهولة دي تشمل <b>ذوي الإعاقة وكبار السن</b> كمان!
            </div>
          </div>
        </div>

        {/* Left Column: Practical Interactive Example */}
        <div style={{ background: 'rgba(15, 23, 42, 0.92)', border: `2px solid ${accessible ? '#4ade80' : '#f87171'}`, borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 8 }}>
            <span style={{ fontSize: 15, fontWeight: 'bold', color: '#ffffff' }}>
              🎓 مثال: موقع المدرسة في حالة وجود كفيف أو ضعيف بصر
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                onClick={() => setAccessible(true)}
                style={{
                  cursor: 'pointer',
                  padding: '5px 11px',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 'bold',
                  background: accessible ? '#16a34a' : 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                ✅ متاح للجميع
              </button>
              <button
                type="button"
                onClick={() => setAccessible(false)}
                style={{
                  cursor: 'pointer',
                  padding: '5px 11px',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 'bold',
                  background: !accessible ? '#dc2626' : 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                ❌ غير متاح (عائق)
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '8px 0' }}>
            {/* Example Part 1: Alt Text for Blind Users */}
            <div style={{ background: 'rgba(30, 41, 59, 0.85)', border: `1.5px solid ${accessible ? '#38bdf8' : '#f87171'}`, borderRadius: 10, padding: '11px 14px' }}>
              <div style={{ fontSize: 13.5, fontWeight: 'bold', color: accessible ? '#38bdf8' : '#fca5a5', marginBottom: 4 }}>
                ١. صورة النتيجة + قارئ الشاشة (للكفيف):
              </div>
              <div style={{ fontFamily: 'monospace', direction: 'ltr', textAlign: 'left', fontSize: 12, background: '#0b101e', padding: '5px 9px', borderRadius: 6, color: accessible ? '#4ade80' : '#f87171' }}>
                {accessible ? '<img src="result.png" alt="شهادة النتيجة: 98% ناجح" />' : '<img src="result.png" />'}
              </div>
              <div style={{ fontSize: 13, color: '#e2e8f0', marginTop: 6 }}>
                🔊 <b>ما يسمعه الطالب الكفيف:</b>{' '}
                {accessible ? '«شهادة النتيجة: 98% ناجح» ✅' : '«صورة بدون وصف!» (لا يعرف نتيجته ❌)'}
              </div>
            </div>

            {/* Example Part 2: High Contrast & Large Button for Low Vision / Elderly */}
            <div style={{ background: accessible ? '#0f172a' : '#e2e8f0', border: `1.5px solid ${accessible ? '#facc15' : '#cbd5e1'}`, borderRadius: 10, padding: '11px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 'bold', color: accessible ? '#facc15' : '#cbd5e1', marginBottom: 3 }}>
                  ٢. الوضوح وحجم الزر (لضعاف البصر وكبار السن):
                </div>
                <div style={{ fontSize: accessible ? 14 : 11, color: accessible ? '#ffffff' : '#cbd5e1' }}>
                  {accessible ? 'تباين قوي وخط كبير يسهل قراءته والضغط عليه فوراً ✅' : 'لون باهت وزر صغير جداً يصعب رؤيته ❌'}
                </div>
              </div>
              <span style={{ background: accessible ? '#16a34a' : '#cbd5e1', color: accessible ? '#ffffff' : '#e2e8f0', borderRadius: 8, padding: accessible ? '8px 18px' : '2px 6px', fontSize: accessible ? 14 : 10, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                عرض النتيجة
              </span>
            </div>
          </div>

          <div style={{ fontSize: 12.5, color: '#94a3b8', background: 'rgba(255,255,255,0.04)', padding: '6px 10px', borderRadius: 8, textAlign: 'center' }}>
            القاعدة: إضافة النص البديل (Alt Text) والتباين العالي والأزرار الواضحة تجعل الموقع متاحاً للجميع.
          </div>
        </div>
      </div>
    </div>
  );
}

export const accessibilityDetailFrame: FrameDef = {
  id: 'accessibility-interactive',
  title: '٦ · إمكانية الوصول الرقمي (Accessibility - a11y): يعني إيه؟ مع مثال',
  scene: true,
  notes: (
    <>
      <p><b>سادساً: إمكانية الوصول الرقمي (Accessibility - a11y):</b></p>
      <p><b>يعني إيه؟</b> تمكين جميع الأشخاص، بمن فيهم ذوو الإعاقة وكبار السن، من استخدام الموقع وفهم محتواه والتفاعل معه بدون عوائق.</p>
      <p><b>مثال:</b> توفير النص البديل (Alt Text) لصور النتائج ليقرأها قارئ الشاشة للمكفوفين، وتوفير تباين عالٍ وأزرار واضحة لضعاف البصر وكبار السن.</p>
    </>
  ),
  render: () => (
    <Scene>
      <Heading u="green" sub="المفهوم السادس: يعني إيه إمكانية الوصول؟ مع مثال عملي مباشر">
        ٦ · إمكانية الوصول الرقمي (Accessibility - a11y) ♿
      </Heading>
      <Box x={46} y={122} w={1188} h={566} c="green" fill="green" at={1} />
      <Place x={46} y={122} w={1188} h={566} at={1}>
        <div style={{ width: '100%', height: '100%', padding: '12px 16px', boxSizing: 'border-box' }}>
          <AccessibilityInteractive />
        </div>
      </Place>
    </Scene>
  ),
};

/* =========================================================================
   Existing part3 Frames (Usability, Accessibility, Golden Summary, Ending)
   ========================================================================= */
export const part3: FrameDef[] = [
  {
    id: 'usability-accessibility',
    title: '⚖️ الفرق بين قابلية الاستخدام (Usability) وإمكانية الوصول (a11y)',
    scene: true,
    notes: (
      <>
        <p><b>الفرق بين قابلية الاستخدام وسهولة الوصول الشامل:</b></p>
        <ol>
          <li>
            <b>قابلية الاستخدام (Usability):</b>
            مدى سهولة وكفاءة وسرعة استخدام الموقع بواسطة المستخدمين العاديين لإنجاز أهدافهم بنجاح ودون أخطاء أو إحباط.
          </li>
          <li>
            <b>سهولة الوصول الشامل (Accessibility - a11y):</b>
            تصميم وبرمجة الموقع ليكون قابلاً للاستخدام الكامل من قِبل <b>جميع فئات المجتمع بمن فيهم ذوو الإعاقات وكبار السن</b> باستخدام التقنيات المساعدة.
          </li>
        </ol>
        <p><b>أهم معايير سهولة الوصول المقررة:</b></p>
        <ul>
          <li><b>النصوص البديلة (Alt Text):</b> توفير وصف دقيق لكل صورة يقرأه برنامج قارئ الشاشة (Screen Reader) للمكفوفين.</li>
          <li><b>التباين اللوني العالي (High Contrast):</b> نصوص واضحة بخلفيات متباينة لتسهيل القراءة لضعاف البصر في مختلف ظروف الإضاءة.</li>
          <li><b>التنقل بلوحة المفاتيح (Keyboard Navigation):</b> إمكانية الضغط على زر Tab للتنقل بين الروابط والأزرار بدون فأرة.</li>
          <li><b>الأزرار وحقول الإدخال الكبيرة:</b> لتسهيل اللمس على الهواتف لكبار السن ولمن يعانون من ارتعاش اليدين.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الفرق الجوهري بين سهولة الاستخدام والوصول الشامل لذوي الإعاقة">
          ٦ · قابلية الاستخدام (Usability) vs إمكانية الوصول (a11y) ♿
        </Heading>

        {/* 2 Big Comparative Columns */}
        {/* Right: Usability */}
        <Box x={660} y={120} w={560} h={330} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                ⚡ قابلية الاستخدام (Usability)
              </div>
              <span style={{ fontSize: 28 }}>👌</span>
            </div>

            <div style={{ fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              <b>التعريف:</b> مدى قدرة الزائر على إنجاز مهامه (مثل البحث عن خضار، إضافته للسلة، والدفع) <b>بأعلى سرعة وسهولة وأقل عدد من الأخطاء</b>.
            </div>

            <div className="space-y-1.5 text-xs" style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
              <div>• <b>سهولة التعلم:</b> يفهم الزائر الواجهة من النظرة الأولى.</div>
              <div>• <b>الكفاءة والسرعة:</b> إتمام الشراء في ثوانٍ معدودة.</div>
              <div>• <b>الرضا والراحة:</b> تجربة مبهجة وخالية من التعقيد.</div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              التركيز: الكفاءة والسهولة لعامة المستخدمين
            </div>
          </div>
        </Box>

        {/* Left: Accessibility (a11y) */}
        <Box x={60} y={120} w={580} h={330} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                ♿ سهولة الوصول الشامل (Accessibility)
              </div>
              <span style={{ fontSize: 28 }}>🌐</span>
            </div>

            <div style={{ fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              <b>التعريف:</b> تمكين <b>جميع الأشخاص دون استثناء، وبخاصة ذوو الاحتياجات الخاصة وكبار السن</b>، من الوصول للموقع وفهمه والتفاعل معه.
            </div>

            <div className="space-y-1.5 text-xs" style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
              <div>• <b>النص البديل (Alt Text):</b> لوصف المنتجات لقارئات الشاشة الصوتية.</div>
              <div>• <b>التباين العالي:</b> نصوص واضحة تماماً لضعاف البصر.</div>
              <div>• <b>التنقل بلوحة المفاتيح:</b> استخدام زر (Tab) دون الحاجة لفأرة.</div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              التركيز: الشمولية وعدم حرمان أي فئة من استخدام الويب
            </div>
          </div>
        </Box>

        {/* Bottom Banner: Practical Comparison Card */}
        <Box x={60} y={470} w={1160} h={195} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 22px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
              <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                🛒 تطبيق سهولة الوصول (a11y) على متجر الخضراوات والفواكه:
              </span>
              <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                نموذج واقعي
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs" style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <b style={{ color: '#38bdf8' }}>١. للمكفوفين (Screen Readers):</b><br />
                وضع وسم: <code style={{ color: '#4ade80' }}>alt="طماطم بلدية عضوية حمراء طازجة"</code> حتى يسمع المستخدم الوصف بصوت واضح.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <b style={{ color: '#eab308' }}>٢. لضعاف البصر وكبار السن:</b><br />
                استخدام ألوان بنسبة تباين تزيد عن 4.5:1 وأزرار لمس كبيرة واضحة (أضف للسلة) يسهل النقر عليها.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <b style={{ color: '#f43f5e' }}>٣. لمستخدمي الحركة المحدودة:</b><br />
                إمكانية فتح السلة وإتمام الدفع بالكامل عبر مفتاح الإدخال (Enter) والـ (Tab) في لوحة المفاتيح.
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', textAlign: 'center' }}>
              الموقع الاحترافي في بكالوريا 2027 هو الذي يجمع بين أعلى قابلية استخدام وأعلى شمولية وصول!
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'golden-summary-board',
    title: '٦ · لوحة الملخص الذهبي الشامل',
    scene: true,
    notes: (
      <>
        <p><b>٦ · لوحة الملخص الذهبي الشامل (المنهج المعتمد):</b></p>
        <p>خريطة المراجعة النهائية التي تجمع كافة مفاهيم الدرس الثاني المقررة في امتحانات الثانوية العامة والبكالوريا:</p>
        <ul>
          <li><b>UCD:</b> التصميم المتمحور حول المستخدم («نحن لا نصمم لأنفسنا»).</li>
          <li><b>User Persona:</b> الديموغرافيا، الأهداف، الاحتياجات، ونقاط الألم (وأداء الخادم خارج عنها).</li>
          <li><b>Wireframe:</b> المسودة المعمارية بالأبيض والأسود لتركيز الانتباه على الهيكل وتوزيع المساحات.</li>
          <li><b>CRAP:</b> التباين، التكرار، المحاذاة، التقارب.</li>
          <li><b>Accessibility:</b> سهولة الوصول الشامل للجميع بما فيهم ذوو الإعاقات.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="جدول المراجعة الامتحانية السريعة المعتمد في المنهج المعتمد">
          ٦ · لوحة الملخص الذهبي الشامل لمفاهيم الدرس الثاني 📋
        </Heading>

        {/* 4 Summary Cards Grid */}
        {/* Card 1: UCD & Persona */}
        <Box x={660} y={115} w={560} h={255} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ١ · فلسفة UCD وشخصية المستخدم (Persona)
            </div>
            <div className="space-y-1 text-xs" style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              <div>• <b>فلسفة UCD:</b> «نحن لا نصمم لأنفسنا، بل للمستخدمين!» (توجيه التصميم وفق بحث حقيقي).</div>
              <div>• <b>شخصية المستخدم:</b> تمثيل افتراضي للمستخدم المثالي يوجه قرارات الواجهة.</div>
              <div>• <b>العناصر الأربعة:</b> الديموغرافيا، الأهداف، الاحتياجات، ونقاط الألم.</div>
              <div>• <b>تنبيه امتحاني:</b> أداء وسرعة الخادم (Server) ليس جزءاً من شخصية المستخدم!</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              المرجع: المنهج المعتمد
            </div>
          </div>
        </Box>

        {/* Card 2: Wireframe */}
        <Box x={60} y={115} w={580} h={255} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              ٢ · المخطط الهيكلي (Wireframe Blueprint)
            </div>
            <div className="space-y-1 text-xs" style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              <div>• <b>التعريف:</b> رسم تخطيطي أولي يحدد أماكن المحتوى والأزرار ومسارات التصفح.</div>
              <div>• <b>تشبيه المخطط المعماري:</b> رسم الجدران والغرف قبل اختيار ألوان الطلاء.</div>
              <div>• <b>علل (أبيض وأسود):</b> لتركيز التفكير على هيكل الصفحة وسهولة الاستخدام.</div>
              <div>• <b>الفائدة:</b> تجنب الجدل الذوقي المبكر حول الألوان وتوفير وقت وتكلفة التعديل.</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              المرجع: المنهج المعتمد
            </div>
          </div>
        </Box>

        {/* Card 3: CRAP Principles */}
        <Box x={660} y={390} w={560} h={270} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              ٣ · مبادئ التصميم البصري الأربعة (CRAP)
            </div>
            <div className="space-y-1 text-xs" style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
              <div>• <b>C - التباين (Contrast):</b> إبراز الأهم (أزرار الشراء CTA والعناوين الرئيسية).</div>
              <div>• <b>R - التكرار (Repetition):</b> توحيد أشكال الأزرار والخطوط لبناء هوية بصرية.</div>
              <div>• <b>A - المحاذاة (Alignment):</b> ترتيب العناصر على شبكة منتظمة لإلغاء الفوضى.</div>
              <div>• <b>P - التقارب (Proximity):</b> تجميع العناصر المترابطة معاً مع ترك فراغات بيضاء.</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              المرجع: المنهج المعتمد
            </div>
          </div>
        </Box>

        {/* Card 4: Usability & Accessibility */}
        <Box x={60} y={390} w={580} h={270} c="purple" fill="purple" at={4}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ٤ · قابلية الاستخدام وسهولة الوصول (a11y)
            </div>
            <div className="space-y-1 text-xs" style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
              <div>• <b>Usability:</b> سرعة وسهولة إنجاز المهام للمستخدم العادي دون أخطاء.</div>
              <div>• <b>Accessibility:</b> شمولية الموقع لجميع فئات المجتمع وذوي الإعاقة.</div>
              <div>• <b>أهم الأدوات المقررة:</b> النص البديل (Alt Text) لقارئات الشاشة.</div>
              <div>• <b>التباين والتنقل:</b> تباين لوني مريح والتنقل الكامل بلوحة المفاتيح.</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              المرجع: المنهج المعتمد
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ending-u4l2',
    title: 'خاتمة الدرس الثاني',
    scene: true,
    notes: (
      <>
        <p><b>ألف مبروك! أتممتم بنجاح دراسة الدرس الثاني من الوحدة الرابعة: تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية.</b></p>
        <p>أصبحتم الآن قادرين على تحليل واجهات الويب، وبناء شخصيات المستخدمين، ورسم المخططات الهيكلية، وتطبيق مبادئ CRAP وسهولة الوصول باحترافية كاملة في اختبارات البكالوريا 2027.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={150} size={80}>🎉 مبروك إتمام الدرس الثاني!</Txt>
        <Txt x={640} y={245} size={32} c="purple">تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية (بكالوريا 2027)</Txt>
        <Underline x={260} y={285} w={760} c="green" />

        <Box x={160} y={330} w={960} h={180} c="green" fill="green" size={22} tc="ink" at={1}>
          🌟 <b>أهم المهارات التي أتقنتموها اليوم:</b>
          <br />
          ١. فهم فلسفة التصميم المتمحور حول المستخدم (UCD) وبناء الـ Persona.
          <br />
          ٢. رسم المخطط الهيكلي (Wireframe) وتبرير تصميمه بالأبيض والأسود.
          <br />
          ٣. إتقان مبادئ CRAP الأربعة (التباين، التكرار، المحاذاة، التقارب).
          <br />
          ٤. تطبيق معايير سهولة الوصول الشامل (Accessibility - a11y) والنص البديل.
        </Box>

        <Doodle x={640} y={560} icon="🚀" size={85} c="orange" fill="orange" at={2} label="نلتقي في الدرس الثالث: أساليب تقييم المواقع الإلكترونية" lsize={20} lc="orange" />
      </Scene>
    ),
  },
];
