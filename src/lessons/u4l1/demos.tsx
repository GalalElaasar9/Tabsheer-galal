// Interactive components with distinct student visual identities for Unit 4 · Lesson 1
import { useState } from 'react';
import { IdentityHeader, THEMES } from './common';

/* =========================================================================
   1. PlanningQuestionsInteractive: 4 Questions Before Choosing a Medium
   ========================================================================= */
export function PlanningQuestionsInteractive() {
  const [active, setActive] = useState(0);
  const [explored, setExplored] = useState<boolean[]>([true, false, false, false]);
  const [resources, setResources] = useState({
    budget: true,
    website: true,
    video: true,
    socialTeam: true,
  });

  const questions = [
    {
      num: '١',
      title: 'ما الرسالة التي نريد توصيلها؟',
      short: 'الرسالة',
      icon: '✉️',
      color: THEMES.blue.accent,
      bg: THEMES.blue.softBg,
      border: THEMES.blue.border,
      meaning: 'إيه المعلومة اللي عايزين نوصلها للناس بوضوح؟',
      exampleTitle: 'مثال: الإعلان عن كورس برمجة جديد للطلاب',
      bullets: ['موعد بداية الكورس.', 'محتوى الكورس بالتفصيل.', 'طريقة الاشتراك في الكورس.'],
    },
    {
      num: '٢',
      title: 'من هو الجمهور المستهدف؟',
      short: 'الجمهور المستهدف',
      icon: '👥',
      color: THEMES.purple.accent,
      bg: THEMES.purple.softBg,
      border: THEMES.purple.border,
      meaning: 'مين الأشخاص اللي عايزين نوصلهم الرسالة؟',
      exampleTitle: 'مثال: طلاب الصف الثاني الثانوي المهتمون بتعلم البرمجة',
      bullets: ['تحديد المرحلة الدراسية والاهتمام.', 'اختيار الأسلوب والمنصة الأقرب لهم.', 'تجنب مخاطبة الجميع بشكل عشوائي.'],
      warning: 'خلي بالك: مش كل الناس جمهور مستهدف؛ إحنا بنحدد الفئة اللي بنوجه لها الرسالة!',
    },
    {
      num: '٣',
      title: 'ما الموارد المتاحة لنا؟',
      short: 'الموارد المتاحة',
      icon: '🧰',
      color: THEMES.orange.accent,
      bg: THEMES.orange.softBg,
      border: THEMES.orange.border,
      meaning: 'إيه الإمكانيات الفعلية اللي معانا ونقدر نستخدمها؟',
      exampleTitle: 'اختبر الإمكانيات المتاحة لفريق الكورس:',
      bullets: [
        'هل عندنا ميزانية للإعلانات؟',
        'هل عندنا موقع إلكتروني؟',
        'هل نقدر نصور فيديو؟',
        'هل عندنا فريق يقدر يدير صفحات التواصل الاجتماعي؟',
      ],
    },
    {
      num: '٤',
      title: 'ما الوسيلة التي تحقق الهدف بشكل أفضل؟',
      short: 'الوسيلة المناسبة',
      icon: '🚀',
      color: THEMES.green.accent,
      bg: THEMES.green.softBg,
      border: THEMES.green.border,
      meaning: 'بعد ما عرفنا الرسالة والجمهور والموارد، نختار الوسيلة (أو المزيج) الأنسب.',
      exampleTitle: 'توزيع ذكي للوسائل حسب دور كل وسيلة:',
      bullets: [
        'فيديو على فيسبوك أو إنستجرام: علشان نوصل لعدد كبير من الطلاب.',
        'موقع إلكتروني: علشان نعرض تفاصيل الكورس بالكامل.',
        'نموذج تسجيل: علشان الطلاب يقدروا يسجلوا بسهولة.',
      ],
    },
  ];

  const selectTab = (idx: number) => {
    setActive(idx);
    setExplored(prev => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const current = questions[active];
  const exploredCount = explored.filter(Boolean).length;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="📢"
        title="التخطيط قبل التصميم: سيناريو الإعلان عن كورس برمجة جديد للطلاب"
        badge={`استكشفت ${exploredCount} / 4 أسئلة`}
        theme={THEMES.blue}
      />

      {/* 4 Interactive Step Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {questions.map((q, idx) => {
          const isSelected = active === idx;
          return (
            <button
              key={q.num}
              type="button"
              onClick={() => selectTab(idx)}
              style={{
                cursor: 'pointer',
                textAlign: 'right',
                padding: '9px 11px',
                borderRadius: 10,
                background: isSelected ? q.bg : 'rgba(15, 23, 42, 0.78)',
                border: `2px solid ${isSelected ? q.color : 'rgba(148, 163, 184, 0.25)'}`,
                color: '#f8fafc',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 18 }}>{q.icon}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: '#0f172a',
                    background: q.color,
                    padding: '1px 7px',
                    borderRadius: 999,
                  }}
                >
                  سؤال {q.num}
                </span>
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: isSelected ? q.color : '#e2e8f0', lineHeight: 1.35 }}>
                {q.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Detail Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 12, flex: 1 }}>
        {/* Right: Focused Explanation & Interactive Sandbox */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.88)',
            border: `2px solid ${current.border}`,
            borderRadius: 12,
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 22 }}>{current.icon}</span>
              <span style={{ fontSize: 18, fontWeight: 900, color: current.color }}>
                {current.num}. {current.title}
              </span>
            </div>

            <div
              style={{
                background: current.bg,
                border: `1px solid ${current.border}`,
                borderRadius: 8,
                padding: '7px 11px',
                fontSize: 14,
                color: '#f8fafc',
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              💡 يعني: {current.meaning}
            </div>

            <div style={{ fontSize: 13.5, fontWeight: 800, color: '#cbd5e1', marginBottom: 6 }}>
              {current.exampleTitle}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {current.bullets.map(b => (
                <div
                  key={b}
                  style={{
                    fontSize: 13.5,
                    color: '#e2e8f0',
                    background: 'rgba(30, 41, 59, 0.72)',
                    padding: '6px 10px',
                    borderRadius: 8,
                    borderRight: `3px solid ${current.color}`,
                  }}
                >
                  • {b}
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Interactive Box on Tab 3 or Warning on Tab 2 */}
          {active === 1 && current.warning && (
            <div
              style={{
                background: 'rgba(248, 113, 113, 0.16)',
                border: '1.5px solid #f87171',
                borderRadius: 8,
                padding: '7px 11px',
                fontSize: 13,
                color: '#fecaca',
                fontWeight: 800,
              }}
            >
              ⚠️ {current.warning}
            </div>
          )}

          {active === 2 && (
            <div style={{ background: 'rgba(30, 41, 59, 0.9)', borderRadius: 8, padding: '8px 10px', border: '1px solid #fb923c66' }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#fb923c', marginBottom: 5 }}>
                🛠️ جرّب تفعيل/تعطيل الموارد المتوفرة لديك لترى الخطة المناسبة:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[
                  ['budget', '💰 ميزانية إعلانات'],
                  ['website', '🌐 موقع إلكتروني'],
                  ['video', '🎬 تصوير فيديو'],
                  ['socialTeam', '📱 فريق سوشيال'],
                ].map(([key, label]) => {
                  const k = key as keyof typeof resources;
                  const on = resources[k];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setResources(r => ({ ...r, [k]: !r[k] }))}
                      style={{
                        cursor: 'pointer',
                        fontSize: 12,
                        fontWeight: 800,
                        padding: '4px 9px',
                        borderRadius: 6,
                        background: on ? 'rgba(74, 222, 128, 0.2)' : 'rgba(15, 23, 42, 0.9)',
                        border: `1px solid ${on ? '#4ade80' : '#64748b'}`,
                        color: on ? '#bbf7d0' : '#94a3b8',
                      }}
                    >
                      {on ? '✅' : '⬜'} {label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Left: Live Visual Blueprint Card of the Course Campaign */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1.5px solid rgba(148, 163, 184, 0.3)',
            borderRadius: 12,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 900, color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 6 }}>
            🗺️ الهوية البصرية لخطة الإعلان:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ padding: '7px 10px', borderRadius: 8, background: THEMES.blue.softBg, border: `1px solid ${THEMES.blue.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: THEMES.blue.accent }}>١ · الرسالة الواضحة</div>
              <div style={{ fontSize: 13, color: '#f1f5f9' }}>كورس برمجة: الموعد + المحتوى + الاشتراك</div>
            </div>

            <div style={{ padding: '7px 10px', borderRadius: 8, background: THEMES.purple.softBg, border: `1px solid ${THEMES.purple.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: THEMES.purple.accent }}>٢ · الجمهور المحدد (وليس كل الناس)</div>
              <div style={{ fontSize: 13, color: '#f1f5f9' }}>طلاب الصف الثاني الثانوي المهتمون بالبرمجة</div>
            </div>

            <div style={{ padding: '7px 10px', borderRadius: 8, background: THEMES.orange.softBg, border: `1px solid ${THEMES.orange.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: THEMES.orange.accent }}>٣ · الموارد الجاهزة الآن</div>
              <div style={{ fontSize: 12.5, color: '#f1f5f9' }}>
                {resources.video ? '🎬 فيديو متاح' : '🖼️ صورة/نص'} ·{' '}
                {resources.website ? '🌐 موقع متاح' : '📄 صفحة بديلة'} ·{' '}
                {resources.budget ? '💰 إعلان ممول' : '🆓 نشر مجاني'}
              </div>
            </div>

            <div style={{ padding: '7px 10px', borderRadius: 8, background: THEMES.green.softBg, border: `1px solid ${THEMES.green.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: THEMES.green.accent }}>٤ · القنوات المقترحة لتحقيق الهدف</div>
              <div style={{ fontSize: 12.5, color: '#dcfce7', lineHeight: 1.5 }}>
                {resources.video && resources.socialTeam ? '• فيديو فيسبوك/إنستجرام للوصول لأكبر عدد\n' : '• منشور سوشيال ميديا بالرسالة\n'}
                {resources.website ? '• موقع إلكتروني لعرض التفاصيل + نموذج تسجيل' : '• نموذج تسجيل مباشر لاشتراك الطلاب'}
              </div>
            </div>
          </div>

          <div style={{ fontSize: 12, color: '#94a3b8', textAlign: 'center', fontWeight: 700 }}>
            نحدد الوسيلة بعد فهم الرسالة + الجمهور + الموارد!
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. TvMediumInteractive: ① التلفزيون (Television)
   ========================================================================= */
export function TvMediumInteractive() {
  const [replyTried, setReplyTried] = useState(false);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="📺"
        title="① التلفزيون"
        enTitle="Television"
        badge="المعلومات المنقولة: فيديو + صوت"
        theme={THEMES.blue}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 14, flex: 1 }}>
        {/* Right: Structured Concept Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: `1.5px solid ${THEMES.blue.border}`, borderRadius: 12, padding: '11px 14px' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: THEMES.blue.accent, marginBottom: 4 }}>
              🎬 ما المعلومات التي ينقلها؟
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#ffffff' }}>
              فيديو + صوت
            </div>
            <div style={{ fontSize: 13.5, color: '#cbd5e1', marginTop: 2 }}>
              يعني التلفزيون بيجمع بين الصورة المتحركة والصوت في نفس الوقت.
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1.5px solid rgba(148, 163, 184, 0.3)', borderRadius: 12, padding: '11px 14px' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: THEMES.blue.accent, marginBottom: 6 }}>
              ✨ خصائصه الأساسية:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: 13.5, color: '#e2e8f0' }}>
              <div>• يمكنه الوصول إلى جمهور كبير في وقت واحد.</div>
              <div>• يجمع بين الصورة والصوت.</div>
              <div>• عادةً يكون الاتصال فيه من المرسل إلى المتلقي <b style={{ color: '#facc15' }}>(اتجاه واحد)</b>.</div>
            </div>
          </div>

          <div style={{ background: THEMES.blue.softBg, border: `1.5px solid ${THEMES.blue.border}`, borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: '#e0f2fe', marginBottom: 3 }}>
              🎯 إذن التلفزيون مناسب لإيه؟
            </div>
            <div style={{ fontSize: 13.5, color: '#f8fafc', lineHeight: 1.55 }}>
              لو شركة عايزة تعلن عن منتج جديد وتوصل لعدد كبير من الناس في نفس الوقت، التلفزيون ممكن يكون وسيلة مناسبة.
            </div>
          </div>
        </div>

        {/* Left: Live TV Screen One-way Simulation */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.92)',
            border: '2px solid #38bdf8',
            borderRadius: 14,
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 14.5, fontWeight: 900, color: '#38bdf8' }}>
            🏡 مثال من الحياة: محاكاة شاشة التلفزيون
          </div>

          {/* TV Screen Visual */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 100%)',
              border: '3px solid #64748b',
              borderRadius: 12,
              padding: '16px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: '#94a3b8' }}>
              <span style={{ background: '#dc2626', color: '#fff', padding: '1px 7px', borderRadius: 4, fontWeight: 800 }}>● بث مباشر</span>
              <span>صورة متحركة 🎥 + صوت 🔊</span>
            </div>
            <div style={{ fontSize: 38 }}>📺✨</div>
            <div style={{ fontSize: 16, fontWeight: 900, color: '#ffffff' }}>
              نشرة الأخبار / إعلان عن منتج جديد
            </div>
            <div style={{ fontSize: 13, color: '#bae6fd' }}>
              المرسل يبث ━━━━► ملايين المشاهدين يستقبلون في نفس اللحظة
            </div>
          </div>

          {/* Interactive Test */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button
              type="button"
              onClick={() => setReplyTried(v => !v)}
              style={{
                cursor: 'pointer',
                padding: '9px 14px',
                borderRadius: 10,
                background: replyTried ? '#dc2626' : '#0284c7',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: 14,
              }}
            >
              {replyTried ? '🚫 محاولة الرد عبر التلفزيون فشلت!' : '💬 جرّب ترد على الإعلان من التلفزيون نفسه'}
            </button>

            <div
              style={{
                padding: '8px 12px',
                borderRadius: 8,
                background: replyTried ? 'rgba(248, 113, 113, 0.18)' : 'rgba(30, 41, 59, 0.75)',
                border: `1px solid ${replyTried ? '#f87171' : '#334155'}`,
                fontSize: 13,
                color: replyTried ? '#fecaca' : '#cbd5e1',
                lineHeight: 1.5,
              }}
            >
              {replyTried
                ? 'أنت بتستقبل المعلومات فقط، لكن مش بتقدر ترد على الإعلان من خلال التلفزيون نفسه لأن الاتصال هنا «اتجاه واحد».'
                : 'اضغط الزر لاختبار هل يمكنك الرد والتفاعل المباشر مع الإعلان عبر شاشة التلفزيون؟'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. RadioMediumInteractive: ② الراديو (Radio)
   ========================================================================= */
export function RadioMediumInteractive() {
  const [drivingMode, setDrivingMode] = useState(true);
  const [station, setStation] = useState<'news' | 'program'>('news');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="📻"
        title="② الراديو"
        enTitle="Radio"
        badge="المعلومات المنقولة: صوت فقط"
        theme={THEMES.orange}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 14, flex: 1 }}>
        {/* Right: Structured Concept Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: `1.5px solid ${THEMES.orange.border}`, borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: THEMES.orange.accent, marginBottom: 3 }}>
              🔊 ما المعلومات التي ينقلها؟
            </div>
            <div style={{ fontSize: 15.5, fontWeight: 900, color: '#ffffff' }}>صوت فقط.</div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1.5px solid rgba(148, 163, 184, 0.3)', borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: THEMES.orange.accent, marginBottom: 5 }}>
              ✨ خصائصه الأساسية:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: 13.5, color: '#e2e8f0' }}>
              <div>• يعتمد على الصوت في نقل المعلومات.</div>
              <div>• يمكن الاستماع إليه أثناء التنقل أو أداء مهام أخرى.</div>
              <div>• عادةً يكون الاتصال فيه باتجاه واحد.</div>
            </div>
          </div>

          <div style={{ background: 'rgba(248, 113, 113, 0.15)', border: '1.5px solid #f87171', borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: '#fca5a5', marginBottom: 3 }}>
              ⚠️ خلي بالك:
            </div>
            <div style={{ fontSize: 14, color: '#fee2e2', fontWeight: 700 }}>
              الراديو مش بينقل فيديو، هو بيعتمد على الصوت فقط.
            </div>
          </div>
        </div>

        {/* Left: Interactive Car Driving Audio Scenario */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.92)',
            border: '2px solid #fb923c',
            borderRadius: 14,
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14.5, fontWeight: 900, color: '#fb923c' }}>
              🚗 مثال من الحياة: سائق السيارة
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                onClick={() => setDrivingMode(true)}
                style={{
                  cursor: 'pointer',
                  fontSize: 11.5,
                  fontWeight: 800,
                  padding: '3px 9px',
                  borderRadius: 6,
                  background: drivingMode ? '#fb923c' : '#1e293b',
                  color: drivingMode ? '#0f172a' : '#cbd5e1',
                }}
              >
                🎧 استماع (أثناء القيادة)
              </button>
              <button
                type="button"
                onClick={() => setDrivingMode(false)}
                style={{
                  cursor: 'pointer',
                  fontSize: 11.5,
                  fontWeight: 800,
                  padding: '3px 9px',
                  borderRadius: 6,
                  background: !drivingMode ? '#f87171' : '#1e293b',
                  color: !drivingMode ? '#0f172a' : '#cbd5e1',
                }}
              >
                👀 شاشة مرئية
              </button>
            </div>
          </div>

          {/* Radio Dashboard Visual */}
          <div
            style={{
              background: drivingMode ? 'rgba(251, 146, 60, 0.14)' : 'rgba(248, 113, 113, 0.14)',
              border: `1.5px dashed ${drivingMode ? '#fb923c' : '#f87171'}`,
              borderRadius: 12,
              padding: '14px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 34 }}>{drivingMode ? '🚗 🔊 📻' : '🚗 ❌ 📱'}</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#ffffff' }}>
              {drivingMode
                ? station === 'news'
                  ? '🎙️ بث نشرة الأخبار — سماع أثناء القيادة'
                  : '🎙️ برنامج إذاعي — سماع أثناء التنقل'
                : '⚠️ خطر! النظر إلى شاشة أثناء القيادة يشتت السائق'}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
              <button
                type="button"
                onClick={() => setStation('news')}
                style={{
                  cursor: 'pointer',
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 800,
                  background: station === 'news' ? '#fb923c' : '#0f172a',
                  color: station === 'news' ? '#0f172a' : '#fdba74',
                }}
              >
                📻 نشرة الأخبار
              </button>
              <button
                type="button"
                onClick={() => setStation('program')}
                style={{
                  cursor: 'pointer',
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 800,
                  background: station === 'program' ? '#fb923c' : '#0f172a',
                  color: station === 'program' ? '#0f172a' : '#fdba74',
                }}
              >
                📻 برنامج إذاعي
              </button>
            </div>
          </div>

          <div style={{ background: THEMES.orange.softBg, border: `1px solid ${THEMES.orange.border}`, borderRadius: 8, padding: '8px 12px' }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: '#fed7aa' }}>💡 ليه الراديو مناسب للموقف ده؟</div>
            <div style={{ fontSize: 13, color: '#f8fafc', marginTop: 2 }}>
              لأن الشخص مش محتاج يركز بعينه على شاشة؛ هو بيستقبل المعلومات عن طريق السمع!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. NewspaperMediumInteractive: ③ الصحيفة (Newspaper)
   ========================================================================= */
export function NewspaperMediumInteractive() {
  const [internetOn, setInternetOn] = useState(false);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="📰"
        title="③ الصحيفة"
        enTitle="Newspaper"
        badge="المعلومات المنقولة: نصوص + صور"
        theme={THEMES.gold}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 14, flex: 1 }}>
        {/* Right: Structured Concept Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: `1.5px solid ${THEMES.gold.border}`, borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: THEMES.gold.accent, marginBottom: 3 }}>
              📝 ما المعلومات التي تنقلها؟
            </div>
            <div style={{ fontSize: 15.5, fontWeight: 900, color: '#ffffff' }}>نصوص + صور.</div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.88)', border: '1.5px solid rgba(148, 163, 184, 0.3)', borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: THEMES.gold.accent, marginBottom: 6 }}>
              ✨ خصائص الصحيفة:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: 13.5, color: '#e2e8f0' }}>
              <div>• بتكون موجودة مادياً كوسيلة مطبوعة.</div>
              <div>• يمكن قراءتها دون الحاجة إلى اتصال بالإنترنت.</div>
              <div>• الاتصال فيها باتجاه واحد.</div>
            </div>
          </div>

          <div style={{ background: THEMES.gold.softBg, border: `1.5px solid ${THEMES.gold.border}`, borderRadius: 12, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: '#fef08a', marginBottom: 3 }}>
              ⭐ إذن أهم ميزة هنا:
            </div>
            <div style={{ fontSize: 13.5, color: '#ffffff', fontWeight: 700, lineHeight: 1.5 }}>
              إن الصحيفة وسيلة مطبوعة متاحة مادياً، ومش محتاجة إنترنت لقراءتها.
            </div>
          </div>
        </div>

        {/* Left: Interactive Offline Internet Cut Test */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.92)',
            border: '2px solid #facc15',
            borderRadius: 14,
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14.5, fontWeight: 900, color: '#facc15' }}>
              🧪 اختبر: لو الإنترنت مش شغال!
            </span>
            <button
              type="button"
              onClick={() => setInternetOn(v => !v)}
              style={{
                cursor: 'pointer',
                padding: '5px 12px',
                borderRadius: 8,
                fontSize: 12.5,
                fontWeight: 900,
                background: internetOn ? '#16a34a' : '#dc2626',
                color: '#ffffff',
              }}
            >
              {internetOn ? '📶 الإنترنت: شغال الآن' : '📴 الإنترنت: مقطوع'}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div
              style={{
                background: 'rgba(250, 204, 21, 0.14)',
                border: '2px solid #facc15',
                borderRadius: 10,
                padding: '12px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 30 }}>📰</div>
              <div style={{ fontSize: 14, fontWeight: 900, color: '#fef08a', marginTop: 4 }}>الصحيفة المطبوعة</div>
              <div style={{ fontSize: 12.5, color: '#ffffff', marginTop: 6 }}>
                أخبار اليوم + الصور واضحة أمامك.
              </div>
              <div style={{ marginTop: 8, fontSize: 12, fontWeight: 900, color: '#4ade80' }}>
                ✅ تقرأها عادي دون إنترنت!
              </div>
            </div>

            <div
              style={{
                background: internetOn ? 'rgba(56, 189, 248, 0.14)' : 'rgba(248, 113, 113, 0.14)',
                border: `2px solid ${internetOn ? '#38bdf8' : '#f87171'}`,
                borderRadius: 10,
                padding: '12px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 30 }}>{internetOn ? '🌐' : '🔌'}</div>
              <div style={{ fontSize: 14, fontWeight: 900, color: internetOn ? '#bae6fd' : '#fecaca', marginTop: 4 }}>
                صفحة موقع عبر الشبكة
              </div>
              <div style={{ fontSize: 12.5, color: '#e2e8f0', marginTop: 6 }}>
                {internetOn ? 'تفتح طالما يوجد اتصال شبكة.' : 'تعذّر الاتصال بالإنترنت!'}
              </div>
              <div style={{ marginTop: 8, fontSize: 12, fontWeight: 900, color: internetOn ? '#4ade80' : '#f87171' }}>
                {internetOn ? '✅ متاحة الآن بالإنترنت' : '❌ تتأثر بانقطاع الشبكة'}
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(30, 41, 59, 0.85)', borderRadius: 8, padding: '8px 12px', fontSize: 13, color: '#e2e8f0' }}>
            <b>مثال من الحياة:</b> لما تشتري جريدة وتقرأ أخبار اليوم، بتستقبل المعلومات المكتوبة والصور حتى لو الإنترنت مش شغال.
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. WebsiteMediumInteractive: ④ الموقع الإلكتروني (Website)
   ========================================================================= */
export function WebsiteMediumInteractive() {
  const [activeMedia, setActiveMedia] = useState(0);
  const [activeProp, setActiveProp] = useState(0);

  const mediaItems = [
    { label: 'النصوص', en: 'Text', icon: '📝', school: 'أخبار المدرسة وجداول الامتحانات والإعلانات المكتوبة.' },
    { label: 'الصور', en: 'Images', icon: '🖼️', school: 'صور الأنشطة المدرسية والرحلات والتكريمات.' },
    { label: 'الفيديو', en: 'Video', icon: '🎬', school: 'فيديوهات تعليمية لشرح المناهج بشكل عملي.' },
    { label: 'الصوت', en: 'Audio', icon: '🎧', school: 'ملفات صوتية لشرح بعض الدروس والمراجعات.' },
  ];

  const props = [
    '١. يمكن الجمع بين معلومات متنوعة في مكان واحد.',
    '٢. يمكن تحديث المعلومات في أي وقت.',
    '٣. يمكن الوصول إليه من أي مكان يتوفر فيه اتصال مناسب بالشبكة.',
    '٤. يمكن توفير التفاعل ثنائي الاتجاه من خلال النماذج والتعليقات وغيرها.',
    '٥. يمكن استخدامه من المتصفح، وقد تسمح بعض تطبيقات الويب أيضاً بالتثبيت.',
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="🌐"
        title="④ الموقع الإلكتروني (أهم وسيلة في الدرس والوحدة)"
        enTitle="Website"
        badge="يجمع 4 أنواع معلومات في مكان واحد"
        theme={THEMES.green}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 12, flex: 1 }}>
        {/* Right: School Website Mockup showing all 4 media types */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: `2px solid ${THEMES.green.border}`,
            borderRadius: 12,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 900, color: THEMES.green.accent }}>
              🏫 مثال من الحياة: موقع مدرسة إلكتروني
            </span>
            <span style={{ fontSize: 11, color: '#94a3b8' }}>اضغط لاستكشاف المحتوى</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
            {mediaItems.map((m, idx) => {
              const sel = activeMedia === idx;
              return (
                <button
                  key={m.en}
                  type="button"
                  onClick={() => setActiveMedia(idx)}
                  style={{
                    cursor: 'pointer',
                    padding: '8px 6px',
                    borderRadius: 8,
                    background: sel ? THEMES.green.softBg : 'rgba(30, 41, 59, 0.8)',
                    border: `1.5px solid ${sel ? '#4ade80' : '#334155'}`,
                    color: '#f8fafc',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 22 }}>{m.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: sel ? '#4ade80' : '#f1f5f9' }}>{m.label}</div>
                  <div style={{ fontSize: 10.5, color: '#94a3b8' }}>({m.en})</div>
                </button>
              );
            })}
          </div>

          <div
            style={{
              background: 'rgba(30, 41, 59, 0.85)',
              border: '1px solid rgba(74, 222, 128, 0.35)',
              borderRadius: 10,
              padding: '12px',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 900, color: '#4ade80', marginBottom: 4 }}>
              {mediaItems[activeMedia].icon} داخل موقع المدرسة — {mediaItems[activeMedia].label} ({mediaItems[activeMedia].en}):
            </div>
            <div style={{ fontSize: 14, color: '#f8fafc', lineHeight: 1.55 }}>
              {mediaItems[activeMedia].school}
            </div>
          </div>

          <div style={{ fontSize: 12.5, color: '#bbf7d0', fontWeight: 800, background: THEMES.green.softBg, padding: '6px 10px', borderRadius: 8 }}>
            📌 يعني الموقع الإلكتروني يقدر يجمع أنواعاً مختلفة من المعلومات (نصوص + صور + فيديو + صوت) في مكان واحد!
          </div>
        </div>

        {/* Left: 5 Core Properties of Website */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1.5px solid rgba(148, 163, 184, 0.35)',
            borderRadius: 12,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 900, color: THEMES.green.accent }}>
            ⚙️ خصائص الموقع الإلكتروني الخمسة:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {props.map((p, idx) => {
              const sel = activeProp === idx;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setActiveProp(idx)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'right',
                    padding: '8px 11px',
                    borderRadius: 8,
                    background: sel ? THEMES.green.softBg : 'rgba(30, 41, 59, 0.72)',
                    border: `1.5px solid ${sel ? '#4ade80' : '#334155'}`,
                    color: sel ? '#ffffff' : '#cbd5e1',
                    fontSize: 13.2,
                    fontWeight: sel ? 800 : 600,
                    lineHeight: 1.45,
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div>

          <div style={{ background: 'rgba(192, 132, 252, 0.16)', border: '1px solid #c084fc', borderRadius: 8, padding: '7px 10px', fontSize: 12.5, color: '#f3e8ff', fontWeight: 800 }}>
            💡 هنقف عند نقطة مهمة جداً: ما الفرق بين الاتصال في اتجاه واحد والاتصال في اتجاهين؟ (في الشريحة التالية)
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   6. CommunicationDirectionInteractive: One-way vs Two-way Communication
   ========================================================================= */
export function CommunicationDirectionInteractive() {
  const [questionText, setQuestionText] = useState('متى يبدأ التقديم للصف الثاني الثانوي؟');
  const [sent, setSent] = useState(false);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 9, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="⇄"
        title="يعني إيه اتصال في اتجاه واحد واتجاهين؟"
        enTitle="One-way vs Two-way Communication"
        badge="مقارنة وتفاعل حي"
        theme={THEMES.purple}
      />

      {/* Top Two-Column Live Visual */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {/* One-way */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1.5px solid #fb923c',
            borderRadius: 12,
            padding: '10px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 900, color: '#fb923c' }}>➡️ الاتصال في اتجاه واحد</span>
            <span style={{ fontSize: 11, color: '#fed7aa', direction: 'ltr' }}>One-way Communication</span>
          </div>
          <div style={{ fontSize: 13.5, color: '#f1f5f9', fontWeight: 700 }}>
            هو انتقال المعلومات من المُرسل إلى المُستقبل فقط.
          </div>
          <div
            style={{
              background: 'rgba(251, 146, 60, 0.12)',
              borderRadius: 8,
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              fontSize: 13,
              fontWeight: 800,
              color: '#ffedd5',
            }}
          >
            <span>📺 التلفزيون يبث إعلاناً</span>
            <span style={{ fontSize: 18, color: '#fb923c' }}>───►</span>
            <span>👀 أنت تستقبل فقط</span>
          </div>
        </div>

        {/* Two-way with working school inquiry form */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1.5px solid #4ade80',
            borderRadius: 12,
            padding: '10px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 900, color: '#4ade80' }}>⇄ الاتصال في اتجاهين</span>
            <span style={{ fontSize: 11, color: '#bbf7d0', direction: 'ltr' }}>Two-way Communication</span>
          </div>
          <div style={{ fontSize: 13.5, color: '#f1f5f9', fontWeight: 700 }}>
            هو الاتصال الذي يمكن فيه للمستخدمين الاستجابة والمشاركة.
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <input
              type="text"
              value={questionText}
              onChange={e => {
                setQuestionText(e.target.value);
                setSent(false);
              }}
              style={{
                flex: 1,
                fontSize: 12.5,
                padding: '5px 8px',
                borderRadius: 6,
                background: '#1e293b',
                border: '1px solid #4ade80',
                color: '#ffffff',
              }}
            />
            <button
              type="button"
              onClick={() => setSent(true)}
              style={{
                cursor: 'pointer',
                padding: '5px 11px',
                borderRadius: 6,
                background: '#16a34a',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: 12.5,
              }}
            >
              إرسال 📤
            </button>
          </div>
          <div style={{ fontSize: 12.5, color: sent ? '#4ade80' : '#94a3b8', fontWeight: 800 }}>
            {sent
              ? '✅ استقبلت المدرسة سؤالك وتم التفاعل بين الطرفين!'
              : 'مثال: نموذج تقديم استفسار في موقع المدرسة ➔ اكتب سؤالك واضغط إرسال.'}
          </div>
        </div>
      </div>

      {/* Comparison Table matching Screenshot 7 */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.88)',
          border: '1px solid rgba(192, 132, 252, 0.4)',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            background: 'rgba(192, 132, 252, 0.16)',
            padding: '7px 14px',
            fontSize: 14,
            fontWeight: 900,
            color: '#f3e8ff',
          }}
        >
          <div>➡️ اتجاه واحد</div>
          <div>⇄ اتجاهين</div>
        </div>
        {[
          ['المرسل يرسل المعلومات', 'يوجد إرسال واستجابة'],
          ['المستقبل يستقبل فقط', 'المستخدم يستطيع المشاركة'],
          ['مثال: نشرة الأخبار', 'مثال: نموذج التواصل بالموقع'],
        ].map(([one, two]) => (
          <div
            key={one}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              padding: '7px 14px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              fontSize: 13.5,
              color: '#e2e8f0',
            }}
          >
            <div>• {one}</div>
            <div style={{ color: '#bbf7d0', fontWeight: 700 }}>• {two}</div>
          </div>
        ))}
      </div>

      {/* Crucial Note */}
      <div
        style={{
          background: 'rgba(250, 204, 21, 0.14)',
          border: '1.5px solid #facc15',
          borderRadius: 10,
          padding: '8px 14px',
          fontSize: 13.5,
          color: '#fef9c3',
          fontWeight: 800,
        }}
      >
        📌 <b>ملحوظة مهمة جداً:</b> الموقع الإلكتروني أساساً ممكن يعرض المعلومات في اتجاه واحد، لكن يمكن إضافة وسائل للتفاعل تجعله يدعم الاتصال ثنائي الاتجاه.
      </div>
    </div>
  );
}

/* =========================================================================
   7. SocialMediaAndTableInteractive: ⑤ Social Media + 5 Media Summary Table
   ========================================================================= */
export function SocialMediaAndTableInteractive() {
  const [views, setViews] = useState(120);
  const [comments, setComments] = useState<string[]>(['ما مواعيد كورس البرمجة؟']);
  const [shares, setShares] = useState(18);
  const [selectedRow, setSelectedRow] = useState(4);

  const summaryRows = [
    { medium: 'التلفزيون', info: 'فيديو + صوت', feature: 'الوصول لجمهور كبير', color: '#38bdf8' },
    { medium: 'الراديو', info: 'صوت', feature: 'الاستماع أثناء التنقل', color: '#fb923c' },
    { medium: 'الصحيفة', info: 'نص + صور', feature: 'متاحة مادياً دون إنترنت', color: '#facc15' },
    { medium: 'الموقع الإلكتروني', info: 'نص + صور + فيديو + صوت', feature: 'التحديث والتفاعل', color: '#4ade80' },
    { medium: 'التواصل الاجتماعي', info: 'نص + صور + فيديو + صوت', feature: 'سرعة النشر والمشاركة', color: '#f472b6' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="📱"
        title="⑤ وسائل التواصل الاجتماعي + ملخص مقارنة الوسائط الخمسة"
        enTitle="Social Media"
        badge="سرعة النشر والمشاركة والتفاعل"
        theme={THEMES.pink}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 12, flex: 1 }}>
        {/* Right: Interactive Facebook Post Demo */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: `2px solid ${THEMES.pink.border}`,
            borderRadius: 12,
            padding: '11px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 900, color: THEMES.pink.accent, marginBottom: 4 }}>
              📢 مثال من الحياة: بوست على فيسبوك عن كورس جديد
            </div>
            <div style={{ fontSize: 12.5, color: '#cbd5e1', marginBottom: 6 }}>
              تنقل: <b>نصوص + صور + فيديو + صوت</b> · نشر سريع · مشاركة وتفاعل بين المستخدمين.
            </div>
          </div>

          <div
            style={{
              background: '#1e293b',
              border: '1px solid #475569',
              borderRadius: 10,
              padding: '10px 12px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ fontSize: 13.5, fontWeight: 800, color: '#ffffff' }}>
              🎓 إعلان: كورس برمجة جديد لطلاب الصف الثاني الثانوي!
            </div>
            <div style={{ fontSize: 12, color: '#94a3b8' }}>
              👀 مشاهدة: <b style={{ color: '#f472b6' }}>{views}</b> · 💬 تعليقات: <b style={{ color: '#f472b6' }}>{comments.length}</b> · 🔁 مشاركات: <b style={{ color: '#f472b6' }}>{shares}</b>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              <button
                type="button"
                onClick={() => setViews(v => v + 1)}
                style={{ cursor: 'pointer', fontSize: 11.5, fontWeight: 800, padding: '4px 8px', borderRadius: 6, background: '#0f172a', color: '#e2e8f0', border: '1px solid #475569' }}
              >
                👀 شوف البوست
              </button>
              <button
                type="button"
                onClick={() => setComments(c => [...c, 'هل متاح تسجيل أونلاين؟'])}
                style={{ cursor: 'pointer', fontSize: 11.5, fontWeight: 800, padding: '4px 8px', borderRadius: 6, background: '#0f172a', color: '#fbcfe8', border: '1px solid #f472b6' }}
              >
                💬 تعليق / سؤال
              </button>
              <button
                type="button"
                onClick={() => setShares(s => s + 1)}
                style={{ cursor: 'pointer', fontSize: 11.5, fontWeight: 800, padding: '4px 8px', borderRadius: 6, background: '#be185d', color: '#ffffff' }}
              >
                🔁 شارك مع أصحابك
              </button>
            </div>
            <div style={{ fontSize: 12, color: '#cbd5e1', background: '#0f172a', padding: '5px 8px', borderRadius: 6 }}>
              آخر سؤال: «{comments[comments.length - 1]}»
            </div>
          </div>

          <div style={{ fontSize: 12.5, color: '#fce7f3', fontWeight: 800 }}>
            ✅ الناس تشوف البوست + تعمل تعليق + تشارك المنشور + تسأل عن التفاصيل!
          </div>
        </div>

        {/* Left: 5 Media Summary Table */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1.5px solid rgba(148, 163, 184, 0.35)',
            borderRadius: 12,
            padding: '11px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 900, color: '#f8fafc', marginBottom: 4 }}>
            📊 ملخص مقارنة الوسائط الخمسة (اضغط على أي وسيلة للتركيز):
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1.25fr 1.15fr',
                fontSize: 12.5,
                fontWeight: 900,
                color: '#cbd5e1',
                padding: '5px 8px',
                borderBottom: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div>الوسيلة</div>
              <div>المعلومات المنقولة</div>
              <div>أهم الخصائص</div>
            </div>

            {summaryRows.map((row, idx) => {
              const sel = selectedRow === idx;
              return (
                <button
                  key={row.medium}
                  type="button"
                  onClick={() => setSelectedRow(idx)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'right',
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 1.25fr 1.15fr',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 9px',
                    borderRadius: 8,
                    background: sel ? 'rgba(30, 41, 59, 0.95)' : 'rgba(15, 23, 42, 0.6)',
                    border: `1.5px solid ${sel ? row.color : 'rgba(255,255,255,0.08)'}`,
                    color: '#f8fafc',
                    fontSize: 12.5,
                  }}
                >
                  <div style={{ fontWeight: 900, color: row.color }}>{row.medium}</div>
                  <div style={{ color: '#e2e8f0' }}>{row.info}</div>
                  <div style={{ color: '#bbf7d0', fontWeight: 700 }}>{row.feature}</div>
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700 }}>
            💡 الوسيلة المختارة: <b style={{ color: summaryRows[selectedRow].color }}>{summaryRows[selectedRow].medium}</b> — {summaryRows[selectedRow].feature}.
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   8. WebsiteStrengthsInteractive: 5 Strengths of Websites (Screenshots 9-10)
   ========================================================================= */
export function WebsiteStrengthsInteractive() {
  const [selected, setSelected] = useState(0);
  const [examUpdated, setExamUpdated] = useState(false);

  const strengths = [
    {
      num: '١',
      title: 'يمكن الجمع بين معلومات متنوعة',
      icon: '🧩',
      meaning: 'أقدر أحط نصوص وصور وفيديوهات وأعرضها مع بعض في نفس الموقع.',
      example: 'موقع تعليمي فيه شرح مكتوب وفيديو وصور توضيحية.',
    },
    {
      num: '٢',
      title: 'يمكن تحديث المعلومات في أي وقت',
      icon: '🔄',
      meaning: 'لو عندي معلومة قديمة، أقدر أعدلها وأضيف معلومات جديدة فوراً.',
      example: 'المدرسة نشرت جدول الامتحانات ثم تعدّل موعد مادة؛ فتعدل الجدول على الموقع مباشرة أسهل من إعادة طباعة آلاف النسخ الورقية.',
    },
    {
      num: '٣',
      title: 'الوصول إليه من أي مكان يتوفر فيه اتصال مناسب بالشبكة',
      icon: '🌍',
      meaning: 'مش لازم تكون موجوداً في مكان معين علشان تستخدم الموقع.',
      example: 'طالب في القاهرة يقدر يدخل على موقع مدرسته وهو مسافر في الإسكندرية، طالما عنده اتصال مناسب بالإنترنت.',
    },
    {
      num: '٤',
      title: 'إمكانية التفاعل ثنائي الاتجاه',
      icon: '💬',
      meaning: 'المستخدم مش مجرد شخص بيشاهد المعلومات، لكنه ممكن يشارك ويتفاعل.',
      example: 'التعليقات · نماذج التواصل · نماذج التسجيل · إرسال الاستفسارات.',
    },
    {
      num: '٥',
      title: 'يمكن استخدامه من المتصفح، وقد تسمح بعض تطبيقات الويب أيضاً بالتثبيت',
      icon: '💻',
      meaning: 'تدخل عليه من متصفح مثل Chrome أو Edge، وبعض تطبيقات الويب تتيح تثبيتها على الجهاز للوصول بسهولة.',
      example: 'فتح الموقع من المتصفح أو تثبيته على شاشة الموبايل أو اللاب توب.',
    },
  ];

  const active = strengths[selected];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="💪"
        title="نقاط القوة في المواقع الإلكترونية (٥ مميزات)"
        enTitle="Website Strengths"
        badge="أولاً: المميزات"
        theme={THEMES.green}
        rightSlot={<span style={{ fontSize: 12, color: '#bbf7d0', fontWeight: 700 }}>كل وسيلة ليها مميزات وعيوب!</span>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 12, flex: 1 }}>
        {/* Right: 5 Selectable Strength Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, justifyContent: 'space-between' }}>
          {strengths.map((s, idx) => {
            const isSel = selected === idx;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setSelected(idx)}
                style={{
                  cursor: 'pointer',
                  textAlign: 'right',
                  padding: '9px 12px',
                  borderRadius: 10,
                  background: isSel ? THEMES.green.softBg : 'rgba(15, 23, 42, 0.85)',
                  border: `1.5px solid ${isSel ? '#4ade80' : 'rgba(148, 163, 184, 0.25)'}`,
                  color: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span style={{ fontSize: 13.5, fontWeight: isSel ? 900 : 700, color: isSel ? '#4ade80' : '#e2e8f0' }}>
                  {s.num}. {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Left: Detailed Visual Example Stage */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '2px solid #4ade80',
            borderRadius: 12,
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 28 }}>{active.icon}</span>
              <div style={{ fontSize: 17, fontWeight: 900, color: '#4ade80' }}>
                {active.num}. {active.title}
              </div>
            </div>

            <div style={{ background: THEMES.green.softBg, borderRadius: 10, padding: '10px 12px', marginBottom: 10 }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: '#bbf7d0' }}>المعنى ببساطة:</div>
              <div style={{ fontSize: 14, color: '#ffffff', marginTop: 2, lineHeight: 1.55 }}>{active.meaning}</div>
            </div>

            <div style={{ background: 'rgba(30, 41, 59, 0.85)', borderRadius: 10, padding: '10px 12px', border: '1px solid #334155' }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: '#38bdf8' }}>🏫 مثال تطبيقي:</div>
              <div style={{ fontSize: 14, color: '#e2e8f0', marginTop: 3, lineHeight: 1.55 }}>{active.example}</div>
            </div>
          </div>

          {/* Interactive mini demo on Strength #2, else quick visual */}
          {selected === 1 ? (
            <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid #4ade80', borderRadius: 10, padding: '9px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 900, color: '#facc15' }}>
                  📅 جدول الامتحانات: البرمجة — {examUpdated ? 'الخميس (تم التحديث فوراً!)' : 'الاثنين'}
                </div>
                <div style={{ fontSize: 11.5, color: '#94a3b8' }}>أسهل من إعادة طباعة آلاف الجداول الورقية!</div>
              </div>
              <button
                type="button"
                onClick={() => setExamUpdated(v => !v)}
                style={{ cursor: 'pointer', padding: '5px 10px', borderRadius: 7, background: '#16a34a', color: '#fff', fontWeight: 800, fontSize: 12 }}
              >
                {examUpdated ? '↺ استرجاع' : '✏️ حدّث الموعد الآن'}
              </button>
            </div>
          ) : (
            <div style={{ background: 'rgba(74, 222, 128, 0.1)', borderRadius: 8, padding: '8px 12px', fontSize: 13, color: '#bbf7d0', fontWeight: 800 }}>
              ✨ هل الموقع بلا عيوب؟ لا! في الشريحة التالية نتعرف على القيود الثلاثة للمواقع الإلكترونية.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   9. WebsiteLimitationsInteractive: 3 Limitations of Websites (Screenshots 11-12)
   ========================================================================= */
export function WebsiteLimitationsInteractive() {
  const [tab, setTab] = useState(0);
  const [netFast, setNetFast] = useState(true);
  const [hasNotif, setHasNotif] = useState(false);
  const [offlineSupport, setOfflineSupport] = useState(false);

  const limits = [
    { num: '١', title: 'تحتاج معظم وظائف المواقع إلى اتصال بالشبكة', icon: '📡' },
    { num: '٢', title: 'غالباً يحتاج المستخدم إلى فتح الموقع للوصول إلى محتواه', icon: '🔔' },
    { num: '٣', title: 'قد تختلف سرعة العرض والتحميل حسب جهاز المستخدم وبيئة الشبكة', icon: '⏳' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="🚧"
        title="ثانياً: قيود المواقع الإلكترونية (٣ تحديات)"
        enTitle="Website Limitations"
        badge="صعوبات الاستخدام المحتملة"
        theme={THEMES.red}
      />

      {/* 3 Tab Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {limits.map((lim, idx) => {
          const sel = tab === idx;
          return (
            <button
              key={lim.num}
              type="button"
              onClick={() => setTab(idx)}
              style={{
                cursor: 'pointer',
                textAlign: 'right',
                padding: '10px 12px',
                borderRadius: 10,
                background: sel ? THEMES.red.softBg : 'rgba(15, 23, 42, 0.85)',
                border: `2px solid ${sel ? '#f87171' : 'rgba(148, 163, 184, 0.25)'}`,
                color: '#f8fafc',
              }}
            >
              <div style={{ fontSize: 13.5, fontWeight: 900, color: sel ? '#fca5a5' : '#e2e8f0', lineHeight: 1.45 }}>
                {lim.icon} {lim.num}. {lim.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Focused Stage */}
      <div
        style={{
          flex: 1,
          background: 'rgba(15, 23, 42, 0.9)',
          border: '2px solid rgba(248, 113, 113, 0.5)',
          borderRadius: 12,
          padding: '14px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {tab === 0 && (
          <>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fca5a5', marginBottom: 6 }}>
                📡 ١. تحتاج معظم وظائف المواقع إلى اتصال بالشبكة
              </div>
              <div style={{ fontSize: 14, color: '#e2e8f0', marginBottom: 10 }}>
                يعني علشان تفتح الموقع وتستخدم معظم خدماته، غالباً هتحتاج إنترنت. <b>مثال:</b> طالب عايز يدخل على موقع تعليمي لكن مفيش اتصال بالإنترنت ➔ مش هيقدر يستخدم معظم وظائف الموقع.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, background: 'rgba(30, 41, 59, 0.85)', padding: '12px', borderRadius: 10 }}>
              <div style={{ fontSize: 13.5, color: offlineSupport ? '#bbf7d0' : '#fecaca', fontWeight: 700 }}>
                {offlineSupport
                  ? '✅ ملحوظة: يمكن تصميم بعض المواقع أو تطبيقات الويب لتوفير محتوى أو وظائف محدودة دون اتصال!'
                  : '📵 الحالة الافتراضية دون إنترنت: معظم وظائف الموقع التعليمي لا تعمل.'}
              </div>
              <button
                type="button"
                onClick={() => setOfflineSupport(v => !v)}
                style={{ cursor: 'pointer', padding: '6px 12px', borderRadius: 8, background: offlineSupport ? '#16a34a' : '#f97316', color: '#fff', fontWeight: 800, fontSize: 12.5 }}
              >
                {offlineSupport ? 'وضع بدون إنترنت مُعد مسبقاً' : 'اختبر استثناء تطبيقات الويب'}
              </button>
            </div>
          </>
        )}

        {tab === 1 && (
          <>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fca5a5', marginBottom: 6 }}>
                🔔 ٢. غالباً يحتاج المستخدم إلى فتح الموقع للوصول إلى محتواه
              </div>
              <div style={{ fontSize: 14, color: '#e2e8f0', marginBottom: 10 }}>
                يعني المستخدم عادةً لازم يدخل الموقع بنفسه علشان يشوف المعلومات الجديدة. <b>مثال:</b> المدرسة نشرت إعلاناً جديداً على موقعها، لكن الطالب غالباً مش هيعرف بالإعلان إلا لما يفتح الموقع ويدخل صفحة الإعلانات!
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, background: 'rgba(30, 41, 59, 0.85)', padding: '12px', borderRadius: 10 }}>
              <div style={{ fontSize: 13.5, color: hasNotif ? '#bbf7d0' : '#fde68a', fontWeight: 700 }}>
                {hasNotif
                  ? '🔔 عند تفعيل الإشعارات أو وسائل إبلاغ أخرى: يصل التنبيه للطالب مباشرة بوجود إعلان جديد.'
                  : '🌐 دون إشعارات: الإعلان منشور على الموقع، لكن الطالب لم يفتح الموقع بعد ولا يعلم به!'}
              </div>
              <button
                type="button"
                onClick={() => setHasNotif(v => !v)}
                style={{ cursor: 'pointer', padding: '6px 12px', borderRadius: 8, background: hasNotif ? '#16a34a' : '#0284c7', color: '#fff', fontWeight: 800, fontSize: 12.5 }}
              >
                {hasNotif ? 'إيقاف الإشعارات' : 'فعّل إشعارات التنبيه'}
              </button>
            </div>
          </>
        )}

        {tab === 2 && (
          <>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fca5a5', marginBottom: 6 }}>
                ⏳ ٣. قد تختلف سرعة العرض والتحميل حسب جهاز المستخدم وبيئة الشبكة
              </div>
              <div style={{ fontSize: 14, color: '#e2e8f0', marginBottom: 8 }}>
                السرعة تتأثر بـ ٤ عوامل: <b>نوع الجهاز · إمكانيات الجهاز · سرعة الإنترنت · حجم المحتوى بالموقع</b>.
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ background: 'rgba(74, 222, 128, 0.14)', border: '1px solid #4ade80', borderRadius: 10, padding: '10px 12px' }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: '#4ade80' }}>🚀 طالب لديه إنترنت سريع وجهاز قوي</div>
                <div style={{ fontSize: 13, color: '#f8fafc', marginTop: 4 }}>يشغّل الفيديو التعليمي بجودة عالية فوراً!</div>
              </div>
              <div style={{ background: 'rgba(248, 113, 113, 0.14)', border: '1px solid #f87171', borderRadius: 10, padding: '10px 12px' }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: '#fca5a5' }}>🐢 طالب لديه إنترنت ضعيف</div>
                <div style={{ fontSize: 13, color: '#f8fafc', marginTop: 4 }}>يستنى وقتاً أطول لتحميل نفس الفيديو التعليمي.</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
              <span style={{ fontSize: 12.5, color: netFast ? '#4ade80' : '#fca5a5', fontWeight: 800 }}>
                {netFast ? '▶ محاكاة التحميل الآن: تشغيل سريع HD' : '⏳ محاكاة التحميل الآن: تحميل بطيء (Buffer)...'}
              </span>
              <button
                type="button"
                onClick={() => setNetFast(v => !v)}
                style={{ cursor: 'pointer', padding: '5px 11px', borderRadius: 7, background: '#fb923c', color: '#0f172a', fontWeight: 900, fontSize: 12 }}
              >
                بدّل سرعة الشبكة 🔄
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   10. StrengthsVsLimitationsInteractive: Table + Instant Classifier (Screenshot 12)
   ========================================================================= */
export function StrengthsVsLimitationsInteractive() {
  const [answers, setAnswers] = useState<Record<number, 's' | 'l'>>({});

  const quizItems: { text: string; correct: 's' | 'l' }[] = [
    { text: 'تحديث جدول الامتحانات فوراً دون إعادة الطباعة', correct: 's' },
    { text: 'اختلاف سرعة تحميل الفيديو حسب سرعة الإنترنت والجهاز', correct: 'l' },
    { text: 'إرسال استفسار عبر نموذج تواصل بالموقع', correct: 's' },
    { text: 'حاجة الطالب لفتح صفحة الإعلانات ليعرف بالخبر الجديد', correct: 'l' },
  ];

  const correctCount = quizItems.filter((item, idx) => answers[idx] === item.correct).length;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="⚖️"
        title="مقارنة نقاط القوة والقيود في المواقع الإلكترونية"
        enTitle="Strengths vs Limitations"
        badge={`صنّفت ${correctCount} / ${quizItems.length} صح`}
        theme={THEMES.gold}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1 }}>
        {/* Official Table */}
        <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1.5px solid #facc15', borderRadius: 12, padding: '12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, fontWeight: 900, color: '#fef08a', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 6 }}>
            📋 جدول المقارنة المعتمد:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flex: 1, marginTop: 8 }}>
            <div style={{ background: THEMES.green.softBg, border: '1px solid #4ade80', borderRadius: 10, padding: '10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: '#4ade80' }}>💪 نقاط القوة (٥)</div>
              <div style={{ fontSize: 12.5, color: '#f8fafc', lineHeight: 1.65 }}>
                ١. الجمع بين أنواع المعلومات<br />
                ٢. تحديث المعلومات في أي وقت<br />
                ٣. الوصول من أماكن مختلفة<br />
                ٤. التفاعل مع المستخدمين<br />
                ٥. الاستخدام من المتصفح وإمكانية التثبيت لبعض التطبيقات
              </div>
            </div>

            <div style={{ background: THEMES.red.softBg, border: '1px solid #f87171', borderRadius: 10, padding: '10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: '#fca5a5' }}>🚧 القيود (٣)</div>
              <div style={{ fontSize: 12.5, color: '#f8fafc', lineHeight: 1.75 }}>
                ١. الحاجة غالباً لاتصال بالشبكة<br />
                ٢. الحاجة غالباً لفتح الموقع للوصول إلى محتواه<br />
                ٣. اختلاف سرعة التحميل حسب الجهاز والشبكة
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Classifier Game */}
        <div style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1.5px solid #38bdf8', borderRadius: 12, padding: '12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, fontWeight: 900, color: '#38bdf8' }}>
            🎯 اختبر فهمك: صنّف كل عبارة هل هي «نقطة قوة» أم «قيد»؟
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {quizItems.map((item, idx) => {
              const picked = answers[idx];
              const isRight = picked === item.correct;
              return (
                <div
                  key={item.text}
                  style={{
                    background: 'rgba(30, 41, 59, 0.85)',
                    border: `1.5px solid ${picked ? (isRight ? '#4ade80' : '#f87171') : '#334155'}`,
                    borderRadius: 9,
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: '#f1f5f9', flex: 1 }}>{item.text}</div>
                  <div style={{ display: 'flex', gap: 5 }}>
                    <button
                      type="button"
                      onClick={() => setAnswers(a => ({ ...a, [idx]: 's' }))}
                      style={{
                        cursor: 'pointer',
                        fontSize: 11.5,
                        fontWeight: 800,
                        padding: '4px 8px',
                        borderRadius: 6,
                        background: picked === 's' ? '#16a34a' : '#0f172a',
                        color: '#fff',
                        border: '1px solid #4ade80',
                      }}
                    >
                      قوة 💪
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnswers(a => ({ ...a, [idx]: 'l' }))}
                      style={{
                        cursor: 'pointer',
                        fontSize: 11.5,
                        fontWeight: 800,
                        padding: '4px 8px',
                        borderRadius: 6,
                        background: picked === 'l' ? '#dc2626' : '#0f172a',
                        color: '#fff',
                        border: '1px solid #f87171',
                      }}
                    >
                      قيد ⚠️
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   11. PurposeCasesInteractive: 4 Cases for Choosing Media by Purpose
   ========================================================================= */
export function PurposeCasesInteractive() {
  const [selected, setSelected] = useState(0);

  const cases = [
    {
      num: 'الحالة ١',
      title: 'إعلام عدد كبير من الناس في آنٍ واحد',
      icon: '📢',
      theme: THEMES.blue,
      meaning: 'عايز أوصل معلومة لأكبر عدد ممكن من الناس في نفس الوقت.',
      media: ['التلفزيون', 'إعلانات وسائل التواصل الاجتماعي'],
      reason: 'لأنها تساعد على الوصول إلى جمهور كبير.',
      example: 'شركة بتعلن عن افتتاح فرع جديد، وعايزة أكبر عدد من الناس يعرفوا بالافتتاح ➔ تستخدم إعلاناً تلفزيونياً أو إعلاناً على وسائل التواصل الاجتماعي.',
    },
    {
      num: 'الحالة ٢',
      title: 'تقديم معلومات تفصيلية',
      icon: '📚',
      theme: THEMES.green,
      meaning: 'عايز أعرض معلومات كتير، وأقسمها وأرتبها بطريقة منظمة.',
      media: ['الموقع الإلكتروني'],
      reason: 'يمكن للموقع تقديم كمية كبيرة من المعلومات وتنظيمها في صفحات وأقسام وتحديثها.',
      example: 'جامعة عايزة تعرض: الكليات الموجودة · شروط القبول · المصروفات · الأوراق المطلوبة · مواعيد التقديم ➔ الموقع الإلكتروني مناسب جداً.',
    },
    {
      num: 'الحالة ٣',
      title: 'إيصال المعلومات مباشرة لأشخاص محددين',
      icon: '✉️',
      theme: THEMES.orange,
      meaning: 'عايز أبعت معلومة لشخص معين أو مجموعة محددة، مش لكل الناس.',
      media: ['البريد الإلكتروني', 'الرسائل المباشرة'],
      reason: 'يمكن توصيل المعلومات بشكل فردي.',
      example: 'مدرس عايز يبعت نتيجة طالب معين لولي أمره ➔ الأفضل يستخدم البريد الإلكتروني أو رسالة مباشرة بدل نشر النتيجة على موقع عام.',
    },
    {
      num: 'الحالة ٤',
      title: 'التناقل الشفهي (Word of Mouth)',
      icon: '🗣️',
      theme: THEMES.pink,
      meaning: 'انتقال المعلومات من شخص لشخص عن طريق التوصية أو المشاركة أو الحديث عنها.',
      media: ['وسائل التواصل الاجتماعي'],
      reason: 'يمكن للمستخدمين مشاركة المعلومات ونشرها طوعاً.',
      example: 'شخص حضر كورس برمجة وعجبه جداً فنشر تجربته على فيسبوك، أصدقاؤه شافوا المنشور وشاركوه مع آخرين ➔ فانتشرت المعلومة من شخص لشخص.',
    },
  ];

  const c = cases[selected];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="🎯"
        title="اختيار الوسائط وفقاً للغرض والجمهور المستهدف (الحالات الأربع)"
        badge="أهم تطبيق عملي في الدرس"
        theme={c.theme}
      />

      {/* Alert Principle */}
      <div style={{ background: 'rgba(250, 204, 21, 0.12)', border: '1px solid #facc15', borderRadius: 8, padding: '6px 12px', fontSize: 13.5, color: '#fef9c3', fontWeight: 800 }}>
        💡 الفكرة الأساسية: مش معنى إن عندنا موقع إلكتروني إنه يكون أفضل وسيلة في كل المواقف؛ لازم نختار الوسيلة المناسبة حسب الغرض والجمهور!
      </div>

      {/* 4 Case Selector Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {cases.map((item, idx) => {
          const sel = selected === idx;
          return (
            <button
              key={item.num}
              type="button"
              onClick={() => setSelected(idx)}
              style={{
                cursor: 'pointer',
                textAlign: 'right',
                padding: '9px 11px',
                borderRadius: 10,
                background: sel ? item.theme.softBg : 'rgba(15, 23, 42, 0.85)',
                border: `2px solid ${sel ? item.theme.accent : 'rgba(148, 163, 184, 0.25)'}`,
                color: '#ffffff',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 900, color: item.theme.accent }}>{item.num}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: sel ? item.theme.accent : '#e2e8f0', lineHeight: 1.35 }}>
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Case Breakdown */}
      <div
        style={{
          flex: 1,
          background: 'rgba(15, 23, 42, 0.92)',
          border: `2px solid ${c.theme.accent}`,
          borderRadius: 12,
          padding: '13px 16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, color: c.theme.accent, marginBottom: 6 }}>
              {c.icon} {c.num}: {c.title}
            </div>
            <div style={{ fontSize: 14, color: '#f1f5f9', lineHeight: 1.6, marginBottom: 8 }}>
              <b>المعنى:</b> {c.meaning}
            </div>
            <div style={{ background: 'rgba(30, 41, 59, 0.85)', padding: '9px 12px', borderRadius: 9 }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: '#38bdf8' }}>🔍 السبب العلمي:</div>
              <div style={{ fontSize: 13.5, color: '#e2e8f0', marginTop: 2 }}>{c.reason}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ background: c.theme.softBg, border: `1px solid ${c.theme.border}`, borderRadius: 10, padding: '10px 12px' }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: c.theme.accent, marginBottom: 5 }}>✅ الوسائل المناسبة:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {c.media.map(m => (
                <span key={m} style={{ fontSize: 13.5, fontWeight: 900, background: '#0f172a', color: '#ffffff', padding: '4px 10px', borderRadius: 7, border: `1px solid ${c.theme.accent}` }}>
                  • {m}
                </span>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(30, 41, 59, 0.85)', borderRadius: 10, padding: '10px 12px', borderRight: `4px solid ${c.theme.accent}` }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: '#facc15', marginBottom: 3 }}>🌟 مثال تطبيقي:</div>
            <div style={{ fontSize: 13.5, color: '#f8fafc', lineHeight: 1.55 }}>{c.example}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   12. WordOfMouthAndDecisionLab: WOM Spread Simulator + Scenario Matcher
   ========================================================================= */
export function WordOfMouthAndDecisionLab() {
  const [step, setStep] = useState(1);
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  const scenarios = [
    {
      q: 'جامعة تعرض الكليات وشروط القبول والمصروفات ومواعيد التقديم:',
      correct: 'الموقع الإلكتروني',
      why: 'يعرض معلومات تفصيلية كبيرة منظمة في صفحات وأقسام.',
    },
    {
      q: 'مدرس يرسل نتيجة طالب معين لولي أمره:',
      correct: 'البريد الإلكتروني / رسالة مباشرة',
      why: 'لإيصال المعلومات مباشرة لشخص محدد بدل النشر العام.',
    },
    {
      q: 'شركة تفتتح فرعاً جديداً وتريد إعلام أكبر عدد من الناس معاً:',
      correct: 'التلفزيون / إعلانات التواصل الاجتماعي',
      why: 'يساعدان على الوصول لجمهور كبير في آنٍ واحد.',
    },
    {
      q: 'انتشار تجربة رائعة عن كورس برمجة من الأصدقاء عبر فيسبوك:',
      correct: 'وسائل التواصل الاجتماعي (Word of Mouth)',
      why: 'يتيح مشاركة المستخدمين ونشر التوصيات طوعاً.',
    },
  ];

  const options = [
    'الموقع الإلكتروني',
    'البريد الإلكتروني / رسالة مباشرة',
    'التلفزيون / إعلانات التواصل الاجتماعي',
    'وسائل التواصل الاجتماعي (Word of Mouth)',
  ];

  const currentScenario = scenarios[scenarioIdx];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
      <IdentityHeader
        icon="🗣️"
        title="التناقل الشفهي (Word of Mouth) + مختبر اختيار الوسيلة المناسبة"
        enTitle="Word of Mouth"
        badge="محاكاة + تطبيق فوري"
        theme={THEMES.pink}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 12, flex: 1 }}>
        {/* Right: Interactive Word of Mouth Simulator */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '2px solid #f472b6',
            borderRadius: 12,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 15.5, fontWeight: 900, color: '#f472b6' }}>
              🔄 محاكي انتشار التناقل الشفهي (Word of Mouth):
            </div>
            <div style={{ fontSize: 13, color: '#cbd5e1', marginTop: 3 }}>
              انتقال المعلومات من شخص لشخص بالتوصية والمشاركة الطوعية عبر <b>وسائل التواصل الاجتماعي</b>.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div style={{ padding: '8px 10px', borderRadius: 8, background: 'rgba(244, 114, 182, 0.16)', border: '1px solid #f472b6', fontSize: 13, color: '#fff' }}>
              <b>١. التجربة:</b> شخص حضر كورس برمجة وعجبه جداً ➔ نشر تجربته على فيسبوك.
            </div>
            <div style={{ padding: '8px 10px', borderRadius: 8, background: step >= 2 ? 'rgba(56, 189, 248, 0.16)' : 'rgba(30, 41, 59, 0.6)', border: `1px solid ${step >= 2 ? '#38bdf8' : '#334155'}`, fontSize: 13, color: step >= 2 ? '#fff' : '#64748b' }}>
              <b>٢. التوصية:</b> أصدقاؤه شافوا المنشور وشاركوه طوعاً مع أشخاص آخرين.
            </div>
            <div style={{ padding: '8px 10px', borderRadius: 8, background: step >= 3 ? 'rgba(74, 222, 128, 0.16)' : 'rgba(30, 41, 59, 0.6)', border: `1px solid ${step >= 3 ? '#4ade80' : '#334155'}`, fontSize: 13, color: step >= 3 ? '#fff' : '#64748b' }}>
              <b>٣. الانتشار:</b> المعلومة انتشرت من شخص لشخص بدون إعلان مدفوع!
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              onClick={() => setStep(s => (s >= 3 ? 1 : s + 1))}
              style={{ cursor: 'pointer', flex: 1, padding: '8px 12px', borderRadius: 8, background: '#db2777', color: '#fff', fontWeight: 900, fontSize: 13 }}
            >
              {step < 3 ? `اكشف المرحلة التالية (${step}/3) ➔` : '↺ أعد محاكاة الانتشار'}
            </button>
          </div>
        </div>

        {/* Left: Live Scenario Matcher */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '2px solid #38bdf8',
            borderRadius: 12,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 900, color: '#38bdf8' }}>🎯 اختبر قرارك ({scenarioIdx + 1}/{scenarios.length}):</span>
            <button
              type="button"
              onClick={() => {
                setScenarioIdx(i => (i + 1) % scenarios.length);
                setPicked(null);
              }}
              style={{ cursor: 'pointer', padding: '4px 10px', borderRadius: 6, background: '#0284c7', color: '#fff', fontWeight: 800, fontSize: 12 }}
            >
              موقف آخر ➔
            </button>
          </div>

          <div style={{ background: 'rgba(56, 189, 248, 0.14)', border: '1px solid #38bdf8', borderRadius: 9, padding: '10px 12px', fontSize: 14, fontWeight: 800, color: '#ffffff' }}>
            {currentScenario.q}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
            {options.map(opt => {
              const isPicked = picked === opt;
              const isCorrect = opt === currentScenario.correct;
              let bg = 'rgba(30, 41, 59, 0.85)';
              let br = '#475569';
              if (picked) {
                if (isCorrect) {
                  bg = 'rgba(74, 222, 128, 0.25)';
                  br = '#4ade80';
                } else if (isPicked) {
                  bg = 'rgba(248, 113, 113, 0.25)';
                  br = '#f87171';
                }
              }
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPicked(opt)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'right',
                    padding: '8px 10px',
                    borderRadius: 8,
                    background: bg,
                    border: `1.5px solid ${br}`,
                    color: '#f8fafc',
                    fontSize: 12.5,
                    fontWeight: 700,
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: 12.5, fontWeight: 800, color: picked ? (picked === currentScenario.correct ? '#4ade80' : '#fca5a5') : '#94a3b8' }}>
            {picked
              ? picked === currentScenario.correct
                ? `✅ اختيار ممتاز! ${currentScenario.why}`
                : `💡 الأنسب هو «${currentScenario.correct}» لأن: ${currentScenario.why}`
              : 'اختر الوسيلة المناسبة للموقف أعلاه لتتأكد من فهمك.'}
          </div>
        </div>
      </div>
    </div>
  );
}
