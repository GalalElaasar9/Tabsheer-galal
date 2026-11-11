// Board scenes · Unit 4 · Lesson 1 · Part 3: Choosing Media by Purpose, Word of Mouth, Summary, and Ending
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Place, Scene, Txt, Underline } from '../../sketch/Sketch';
import { FONT_RTL, LessonSceneShell, THEMES } from './common';
import { PurposeCasesInteractive, WordOfMouthAndDecisionLab } from './demos';

export const part3: FrameDef[] = [
  {
    id: 'purpose-four-cases',
    title: 'اختيار الوسائط وفقاً للغرض (الحالات الأربع)',
    scene: true,
    notes: (
      <>
        <p><b>اختيار الوسائط وفقاً للغرض والجمهور المستهدف:</b></p>
        <ol>
          <li><b>إعلام عدد كبير من الناس في آنٍ واحد:</b> التلفزيون + إعلانات التواصل الاجتماعي (مثال: افتتاح فرع جديد لشركة).</li>
          <li><b>تقديم معلومات تفصيلية:</b> الموقع الإلكتروني (مثال: جامعة تعرض الكليات وشروط القبول والمصروفات والأوراق والمواعيد).</li>
          <li><b>إيصال المعلومات مباشرة لأشخاص محددين:</b> البريد الإلكتروني + الرسائل المباشرة (مثال: مدرس يرسل نتيجة طالب لولي أمره).</li>
          <li><b>التناقل الشفهي (Word of Mouth):</b> وسائل التواصل الاجتماعي للمشاركة الطوعية (مثال: توصية كورس برمجة على فيسبوك).</li>
        </ol>
      </>
    ),
    render: () => (
      <LessonSceneShell
        color="purple"
        title="ثالثاً: اختيار الوسائط وفقاً للغرض (الحالات الأربع) 🎯"
        sub="ليس الموقع هو الأنسب دائماً؛ نختار الوسيلة حسب الغرض والجمهور المستهدف"
      >
        <PurposeCasesInteractive />
      </LessonSceneShell>
    ),
  },

  {
    id: 'word-of-mouth-sim',
    title: 'التناقل الشفهي (Word of Mouth) ومختبر القرار',
    scene: true,
    notes: (
      <>
        <p><b>التناقل الشفهي (Word of Mouth):</b> انتقال المعلومات من شخص لشخص عن طريق التوصية أو المشاركة أو الحديث عنها طوعاً عبر وسائل التواصل الاجتماعي.</p>
      </>
    ),
    render: () => (
      <LessonSceneShell
        color="pink"
        title="التناقل الشفهي (Word of Mouth) ومختبر اختيار الوسيط 🗣️"
        sub="محاكي الانتشار الطوعي عبر فيسبوك + اختبار اختيار الوسيلة المناسبة للمواقف"
      >
        <WordOfMouthAndDecisionLab />
      </LessonSceneShell>
    ),
  },

  {
    id: 'golden-summary-u4l1',
    title: 'لوحة الملخص الشامل للدرس الأول',
    scene: true,
    notes: (
      <>
        <p><b>ملخص سريع لكل ما تعلمناه في الدرس الأول:</b> الأسئلة الأربعة، الوسائط الخمسة واتجاه الاتصال، نقاط القوة والقيود للموقع، والحالات الأربع للاختيار حسب الغرض.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading u="green" sub="مراجعة سريعة لأركان الدرس الأول الأربعة بالهوية البصرية الكاملة">
          لوحة الملخص الشامل للدرس الأول 🗺️
        </Heading>

        {[
          {
            x: 650, y: 130, w: 580, h: 255, c: 'blue' as const, theme: THEMES.blue,
            head: '١ · الأسئلة الأربعة قبل الاختيار',
            lines: [
              '• ما الرسالة التي نريد توصيلها؟ (المعلومة الأساسية)',
              '• من هو الجمهور المستهدف؟ (وليس كل الناس!)',
              '• ما الموارد المتاحة لنا؟ (ميزانية · موقع · فيديو · فريق)',
              '• ما الوسيلة التي تحقق الهدف بشكل أفضل؟',
            ],
          },
          {
            x: 50, y: 130, w: 580, h: 255, c: 'purple' as const, theme: THEMES.purple,
            head: '٢ · الوسائط الخمسة واتجاه الاتصال',
            lines: [
              '• التلفزيون (فيديو+صوت) | الراديو (صوت فقط) | الصحيفة (نص+صور)',
              '• الموقع الإلكتروني والتواصل الاجتماعي (نص+صور+فيديو+صوت)',
              '• اتجاه واحد: إرسال فقط · اتجاهين: إرسال + استجابة ومشاركة',
              '• الموقع قد يدعم اتجاهين بإضافة النماذج والتعليقات',
            ],
          },
          {
            x: 650, y: 405, w: 580, h: 265, c: 'green' as const, theme: THEMES.green,
            head: '٣ · قوة المواقع (٥) وقيودها (٣)',
            lines: [
              '• القوة: جمع المعلومات · التحديث · الوصول من أي مكان',
              '• القوة: التفاعل ثنائي الاتجاه · المتصفح وإمكانية التثبيت',
              '• القيود: الحاجة غالباً للشبكة · فتح الموقع للوصول للمحتوى',
              '• القيود: اختلاف سرعة العرض والتحميل حسب الجهاز والشبكة',
            ],
          },
          {
            x: 50, y: 405, w: 580, h: 265, c: 'pink' as const, theme: THEMES.pink,
            head: '٤ · اختيار الوسيط حسب الغرض',
            lines: [
              '• جمهور كبير معاً ➔ التلفزيون + إعلانات التواصل الاجتماعي',
              '• معلومات تفصيلية ➔ الموقع الإلكتروني (صفحات وأقسام)',
              '• أشخاص محددون ➔ البريد الإلكتروني + الرسائل المباشرة',
              '• التناقل الشفهي (Word of Mouth) ➔ التواصل الاجتماعي',
            ],
          },
        ].map((card, i) => (
          <span key={card.head} className="contents">
            <Box x={card.x} y={card.y} w={card.w} h={card.h} c={card.c} fill={card.c} at={i + 1} />
            <Place x={card.x} y={card.y} w={card.w} h={card.h} at={i + 1}>
              <div style={{ ...FONT_RTL, padding: '14px 18px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: card.theme.accent, borderBottom: `1px solid ${card.theme.border}`, paddingBottom: 6 }}>
                  {card.head}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13.5, color: '#f1f5f9', lineHeight: 1.55 }}>
                  {card.lines.map(l => <div key={l}>{l}</div>)}
                </div>
              </div>
            </Place>
          </span>
        ))}
      </Scene>
    ),
  },

  {
    id: 'ending-u4l1',
    title: 'خاتمة الدرس الأول',
    scene: true,
    notes: (
      <>
        <p><b>أحسنت!</b> الآن أصبحت قادراً على اختيار الوسيلة الأنسب لنقل المعلومات قبل بدء تصميم الموقع الإلكتروني، وفي الدرس الثاني ننتقل لتصميم المعلومات وتجربة المستخدم للمواقع.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={130} size={46} c="green">أحسنت! أتقنت الدرس الأول بالكامل 🎉</Txt>
        <Underline x={270} y={185} w={740} c="green" />
        <Txt x={640} y={255} size={27} c="ink">من اختيار الوسيط المناسب ➔ إلى هندسة تجربة المستخدم في الدرس الثاني</Txt>

        {[
          ['🎯', '٤ أسئلة للتخطيط'],
          ['📡', '٥ وسائط نقل'],
          ['⇄', 'اتجاهين للتفاعل'],
          ['⚖️', 'قوة وقيود الويب'],
          ['🗣️', 'Word of Mouth'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1080 - i * 220}
            y={475}
            icon={icon}
            size={84}
            label={label}
            lsize={18}
            lc="green"
            at={1}
            delay={i * 0.16}
          />
        ))}
      </Scene>
    ),
  },
];
