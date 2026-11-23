// Board scenes · Unit 4 · Lesson 4 · Design Thinking, Performance optimization stack & CRO
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Place, Scene, Txt } from '../../sketch/Sketch';

export const designThinking: FrameDef[] = [
  {
    id: 'dt-intro',
    title: '١ · ما المقصود بالتفكير التصميمي؟',
    scene: true,
    notes: (
      <>
        <p><b>١- ما المقصود بالتفكير التصميمي؟</b></p>
        <p>هو طريقة مرنة لحل المشكلات، تركز على فهم احتياجات المستخدم، ثم تجربة حلول مختلفة وتحسينها بناءً على النتائج.</p>
        <p><b>مثال توضيحي:</b> تخيل أنك تصمم موقعاً تعليمياً؛ كمصمم قد ترى الموقع ممتازاً وألوانه جميلة وتصميمه منظماً، لكن هل هذا يعني أن المستخدمين يرونه ممتازاً؟ قد يواجه المستخدم مشكلات مثل: عدم الوصول للدروس، عدم فهم تحميل الملفات، أو عدم معرفة كيفية بدء الاختبار.</p>
        <p><b>المشكلة:</b> أن المصمم يحكم على الموقع من وجهة نظره هو وليس من وجهة نظر المستخدم. وهنا يظهر دور التفكير التصميمي: بدلاً من أن نصمم ما نراه نحن مناسباً، نحاول أن نفهم ما يحتاجه المستخدم بالفعل. والكتاب يحدد خمس مراحل أساسية له.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="طريقة مرنة لحل المشكلات تركز على فهم احتياجات المستخدم وتجربة الحلول">
          ١ · ما المقصود بالتفكير التصميمي؟ (Design Thinking)
        </Heading>

        {/* Top Definition Card */}
        <Place x={60} y={115} w={1160} h={80} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-purple)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <span className="font-extrabold text-sm text-[var(--pen-purple)] block">التعريف الأساسي:</span>
                <p className="text-xs text-[var(--text)] m-0 font-medium">
                  هو طريقة مرنة لحل المشكلات، تركز على فهم احتياجات المستخدم، ثم تجربة حلول مختلفة وتحسينها بناءً على النتائج.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs font-black text-[var(--primary)] whitespace-nowrap">
              User-Centric Method
            </div>
          </div>
        </Place>

        {/* Left Card: Scenario & Perspective Clash */}
        <Place x={570} y={210} w={650} h={375} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--pen-blue)] flex items-center gap-2">
                  <span>🎓</span>
                  <span>خلينا نفهم الفكرة بمثال: موقع تعليمي</span>
                </span>
                <span className="text-[11px] text-[var(--muted)] font-mono">Perspective Gap</span>
              </div>

              {/* Designer vs User views */}
              <div className="space-y-2 mb-3">
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <span className="font-black text-xs text-[var(--pen-blue)] block mb-1">وجهة نظر المصمم:</span>
                  <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
                    ممكن أنت كمصمم تشوف إن الموقع ممتاز، والألوان جميلة، والتصميم منظم.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/30">
                  <span className="font-black text-xs text-[var(--danger)] block mb-1">لكن هل ده معناه إن المستخدمين شايفينه ممتاز؟</span>
                  <div className="text-xs text-[var(--text)] space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[var(--danger)]">•</span>
                      <span>مش عارف يوصل للدروس.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[var(--danger)]">•</span>
                      <span>مش فاهم طريقة تحميل الملفات.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[var(--danger)]">•</span>
                      <span>مش عارف يبدأ الاختبار منين.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/40 text-xs font-bold text-[var(--danger)] text-center">
              ⚠️ إذن المشكلة: المصمم بيحكم على الموقع من وجهة نظره هو، مش من وجهة نظر المستخدم!
            </div>
          </div>
        </Place>

        {/* Right Card: Design Thinking Role & 5 Stages */}
        <Place x={60} y={210} w={490} h={375} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-purple)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--pen-purple)] flex items-center gap-2">
                  <span>✨</span>
                  <span>وهنا بيظهر دور التفكير التصميمي</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--safe-soft)] text-[var(--safe)] text-[11px] font-black">
                  الحل الجذري
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 text-xs text-[var(--text)] leading-relaxed font-bold mb-3">
                <span className="text-sm text-[var(--safe)] font-black block mb-1">القاعدة المحورية:</span>
                بدلاً من أن نصمم ما نراه نحن مناسباً، نحاول أن نفهم ما يحتاجه المستخدم بالفعل.
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)]">
                <span className="font-bold text-[var(--pen-purple)] block mb-1.5">الكتاب بيحدد خمس مراحل أساسية:</span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-center">
                  <span className="p-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">١. التعاطف</span>
                  <span className="p-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">٢. التعريف</span>
                  <span className="p-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">٣. توليد الأفكار</span>
                  <span className="p-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">٤. النموذج الأولي</span>
                  <span className="p-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] col-span-2 text-[var(--pen-purple)] font-bold">٥. الاختبار (Test)</span>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-[11px] text-[var(--primary)] font-bold text-center">
              هنشرح كل مرحلة بالتفصيل في الشرائح التالية ➡️
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--pen-purple)]">
              <span>🎯</span>
              <span>التفكير التصميمي ينقل عقلية المطور من "أنا ماذا أريد؟" إلى "المستخدم ماذا يحتاج؟".</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Empathize ➔ Define ➔ Ideate ➔ Prototype ➔ Test</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'dt-empathize',
    title: 'المرحلة الأولى: التعاطف (Empathize)',
    scene: true,
    notes: (
      <>
        <p><b>المرحلة الأولى: التعاطف (Empathize):</b></p>
        <p><b>المقصود بها:</b> فهم تجربة المستخدم واحتياجاته ومشكلاته من خلال الملاحظة والأسئلة والبحث المناسب.</p>
        <p><b>يعني إيه التعاطف هنا؟</b> مش المقصود مجرد الشعور بالشفقة على المستخدم، لكن المقصود إننا نحاول نفهم تجربته ونشوف المشكلة من وجهة نظره.</p>
        <p><b>مثال:</b> لو بنصمم موقع تعليمي، ممكن نعمل مقابلات مع المستخدمين ونسألهم: هل بتعرف توصل للدرس بسهولة؟ هل بتواجه صعوبة في تحميل الملفات؟ هل شكل الموقع مريح؟ إيه أكثر حاجة بتضايقك؟ وممكن كمان نراقبهم أثناء استخدام الموقع.</p>
        <p><b>الهدف:</b> إننا نجمع معلومات حقيقية عن احتياجات المستخدمين.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="فهم تجربة المستخدم واحتياجاته ومشكلاته من خلال الملاحظة والأسئلة والبحث">
          المرحلة الأولى: التعاطف (Empathize) 🤝
        </Heading>

        {/* Top Concept */}
        <Place x={60} y={115} w={1160} h={95} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-blue)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)] flex items-center justify-center font-mono font-black text-xl text-[var(--primary)]">
                1
              </div>
              <div>
                <span className="font-extrabold text-sm text-[var(--pen-blue)] block">المقصود بها:</span>
                <p className="text-xs text-[var(--text)] m-0 font-bold leading-relaxed">
                  فهم تجربة المستخدم واحتياجاته ومشكلاته من خلال الملاحظة والأسئلة والبحث المناسب.
                </p>
                <p className="text-[11px] text-[var(--muted)] m-0 font-medium">
                  مش المقصود مجرد الشعور بالشفقة على المستخدم، لكن المقصود إننا نحاول نفهم تجربته ونشوف المشكلة من وجهة نظره.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono whitespace-nowrap">
              Interviews & Observation
            </div>
          </div>
        </Place>

        {/* Left Card: Interview Questions */}
        <Place x={540} y={225} w={680} h={355} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>🎤</span>
                  <span>مثال: مقابلات وأسئلة مع المستخدمين (موقع تعليمي)</span>
                </span>
                <span className="text-[11px] text-[var(--pen-blue)] font-bold">استماع مباشر</span>
              </div>

              <div className="space-y-2 mb-2">
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--pen-blue)] font-bold">❓</span>
                  <span>هل بتعرف توصل للدرس بسهولة؟</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--pen-blue)] font-bold">❓</span>
                  <span>هل بتواجه صعوبة في تحميل الملفات؟</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--pen-blue)] font-bold">❓</span>
                  <span>هل شكل الموقع مريح أثناء الاستخدام؟</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--pen-blue)] font-bold">❓</span>
                  <span>إيه أكثر حاجة بتضايقك في الموقع؟</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs font-bold text-[var(--primary)] flex items-center gap-2">
              <span>👀</span>
              <span>وممكن كمان نراقب المستخدمين أثناء استخدام الموقع لرصد تصرفاتهم العفوية.</span>
            </div>
          </div>
        </Place>

        {/* Right Card: The Core Objective */}
        <Place x={60} y={225} w={460} h={355} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--safe)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--safe)] flex items-center gap-2">
                  <span>🎯</span>
                  <span>الهدف من مرحلة التعاطف</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--safe-soft)] text-[var(--safe)] text-[11px] font-black">
                  بيانات حقيقية
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 text-xs text-[var(--text)] leading-relaxed font-bold space-y-3">
                <p className="m-0 text-sm text-[var(--safe)] font-black">
                  الهدف إننا نجمع معلومات حقيقية عن احتياجات المستخدمين.
                </p>
                <p className="m-0 text-xs text-[var(--text)] font-medium">
                  لا تعتمد على تخيلاتك الشخصية في مكتبك؛ انزل للمستخدمين واسمع منهم وشوف عيونهم وهي بتتصفح.
                </p>
                <div className="p-2.5 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-[11px] text-[var(--muted)] font-normal">
                  📌 كل إجابة وكل لحظة تردد للمستخدم هي كنز يوجه خطة التحسين القادمة.
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>المرحلة القادمة:</span>
              <span className="text-[var(--pen-orange)] font-bold">المرحلة الثانية: التعريف (Define) ➡️</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--safe)]">
              <span>💡</span>
              <span>التعاطف ليس عاطفة مجردة، بل أداة بحثية لجمع الحقائق وسلوكيات الاستخدام الفعلية.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Empathize ➔ Gather Evidence</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'dt-define',
    title: 'المرحلة الثانية: التعريف (Define)',
    scene: true,
    notes: (
      <>
        <p><b>المرحلة الثانية: التعريف (Define):</b></p>
        <p><b>المقصود بها:</b> بناءً على المعلومات المستخلصة من مرحلة التعاطف، نقوم بتوضيح المشكلة المراد حلها.</p>
        <p>يعني في المرحلة الأولى جمعنا معلومات كثيرة، وفي هذه المرحلة نحلل هذه المعلومات ونحدد المشكلة الأساسية.</p>
        <p><b>مثال:</b> بعد سؤال المستخدمين وملاحظة استخدامهم للموقع، اكتشفنا أن المشكلة الأساسية هي: المستخدمون يواجهون صعوبة في الوصول إلى الدروس بسبب عدم تنظيم القائمة الرئيسية. إذن بدلاً من أن نغير تصميم الموقع بالكامل، نحدد المشكلة بدقة ونركز على حلها.</p>
        <p><b>خد بالك من الفرق:</b></p>
        <ul>
          <li><b>التعاطف:</b> نجمع معلومات ونفهم المستخدم.</li>
          <li><b>التعريف:</b> نحدد المشكلة التي نحتاج لحلها.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تحليل البيانات المستخلصة من التعاطف وصياغة المشكلة المحورية بدقة متناهية">
          المرحلة الثانية: التعريف (Define) 🎯
        </Heading>

        {/* Top Definition */}
        <Place x={60} y={115} w={1160} h={95} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-orange)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--pen-orange)]/20 border border-[var(--pen-orange)] flex items-center justify-center font-mono font-black text-xl text-[var(--pen-orange)]">
                2
              </div>
              <div>
                <span className="font-extrabold text-sm text-[var(--pen-orange)] block">المقصود بها:</span>
                <p className="text-xs text-[var(--text)] m-0 font-bold leading-relaxed">
                  بناءً على المعلومات المستخلصة من مرحلة التعاطف، نقوم بتوضيح المشكلة المراد حلها.
                </p>
                <p className="text-[11px] text-[var(--muted)] m-0 font-medium">
                  يعني في المرحلة الأولى جمعنا معلومات كتير، وفي المرحلة دي بنحلل المعلومات دي ونحدد المشكلة الأساسية.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono whitespace-nowrap">
              Problem Statement
            </div>
          </div>
        </Place>

        {/* Left: Practical Example Discovery */}
        <Place x={540} y={225} w={680} h={355} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>🔍</span>
                  <span>مثال عملي: استخلاص المشكلة الأساسية</span>
                </span>
                <span className="text-[11px] text-[var(--pen-orange)] font-bold">اكتشاف السبب الجذري</span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] mb-3 leading-relaxed">
                بعد سؤال المستخدمين وملاحظة استخدامهم للموقع، اكتشفنا إن المشكلة الأساسية هي:
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/40 text-xs font-bold text-[var(--text)] mb-3 flex items-start gap-2.5">
                <span className="text-lg text-[var(--danger)]">🚨</span>
                <div>
                  <span className="font-black text-xs text-[var(--danger)] block">المشكلة المحددة بدقة:</span>
                  <span className="leading-relaxed">المستخدمين بيواجهوا صعوبة في الوصول إلى الدروس بسبب عدم تنظيم القائمة الرئيسية.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 text-xs font-bold text-[var(--safe)]">
                💡 التوفير الذكي: إذن بدل ما نغير تصميم الموقع كله، نحدد المشكلة بدقة ونركز على حلها فقط!
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              Raw Feedback ➔ Clear Specific Problem
            </div>
          </div>
        </Place>

        {/* Right: Difference Callout (خد بالك من الفرق) */}
        <Place x={60} y={225} w={460} h={355} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--warning)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2 mb-3">
                <span className="text-xl">⚖️</span>
                <span className="font-extrabold text-sm text-[var(--warning)]">
                  خد بالك من الفرق:
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-blue)]/40">
                  <span className="font-black text-xs text-[var(--pen-blue)] block mb-1">١. التعاطف (Empathize):</span>
                  <span className="text-xs text-[var(--text)] font-medium leading-relaxed">
                    نجمع معلومات ونفهم تجربة وسلوك المستخدم.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-orange)]/40">
                  <span className="font-black text-xs text-[var(--pen-orange)] block mb-1">٢. التعريف (Define):</span>
                  <span className="text-xs text-[var(--text)] font-medium leading-relaxed">
                    نحدد بدقة المشكلة اللي محتاجين نحلها ونستبعد التشتت.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>المرحلة القادمة:</span>
              <span className="text-[var(--pen-purple)] font-bold">المرحلة الثالثة: توليد الأفكار (Ideate) ➡️</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--pen-orange)]">
              <span>🎯</span>
              <span>تحديد المشكلة بدقة هو نصف الحل؛ لأنه يمنع تشتيت الجهود في إصلاح أجزاء لا تعاني من خلل.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Define the Core Pain Point</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'dt-ideate',
    title: 'المرحلة الثالثة: توليد الأفكار (Ideate)',
    scene: true,
    notes: (
      <>
        <p><b>المرحلة الثالثة: توليد الأفكار (Ideate):</b></p>
        <p><b>المقصود بها:</b> توليد أكبر عدد ممكن من الأفكار لحل المشكلة.</p>
        <p>بعد ما حددنا المشكلة، نبدأ نفكر في حلول مختلفة. مثلاً: عندنا مشكلة أن المستخدمين لا يعرفون كيفية الوصول للدروس بسهولة.</p>
        <p><b>ممكن نقترح:</b></p>
        <ol>
          <li>إضافة قائمة رئيسية واضحة.</li>
          <li>تقسيم الدروس حسب الوحدات.</li>
          <li>إضافة مربع للبحث عن الدروس.</li>
          <li>إضافة اختصارات للدروس الأكثر استخداماً.</li>
          <li>إضافة ترتيب واضح للمواد.</li>
        </ol>
        <p><b>خد بالك:</b> في هذه المرحلة لا نختار أول فكرة تخطر في بالنا، لكن نحاول توليد أكبر عدد ممكن من الأفكار والحلول.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="العصف الذهني وابتكار أكبر عدد ممكن من الحلول والبدائل دون تسرع">
          المرحلة الثالثة: توليد الأفكار (Ideate) 🧠
        </Heading>

        {/* Top Definition */}
        <Place x={60} y={115} w={1160} h={95} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-purple)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--pen-purple)]/20 border border-[var(--pen-purple)] flex items-center justify-center font-mono font-black text-xl text-[var(--pen-purple)]">
                3
              </div>
              <div>
                <span className="font-extrabold text-sm text-[var(--pen-purple)] block">المقصود بها:</span>
                <p className="text-xs text-[var(--text)] m-0 font-bold leading-relaxed">
                  توليد أكبر عدد ممكن من الأفكار لحل المشكلة.
                </p>
                <p className="text-[11px] text-[var(--muted)] m-0 font-medium">
                  بعد ما حددنا المشكلة، نبدأ نفكر في حلول مختلفة وبدائل متعددة.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono whitespace-nowrap">
              Brainstorming & Solutions
            </div>
          </div>
        </Place>

        {/* Left: 5 Proposed Solutions */}
        <Place x={520} y={225} w={700} h={355} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>💡</span>
                  <span>مثال حل مشكلة: صعوبة وصول المستخدمين للدروس</span>
                </span>
                <span className="text-[11px] text-[var(--pen-purple)] font-bold">٥ حلول مقترحة</span>
              </div>

              {/* 5 suggestions */}
              <div className="space-y-1.5">
                <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] font-black flex items-center justify-center text-[11px]">١</span>
                  <span className="font-bold text-[var(--text)]">إضافة قائمة رئيسية واضحة.</span>
                </div>
                <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] font-black flex items-center justify-center text-[11px]">٢</span>
                  <span className="font-bold text-[var(--text)]">تقسيم الدروس حسب الوحدات.</span>
                </div>
                <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] font-black flex items-center justify-center text-[11px]">٣</span>
                  <span className="font-bold text-[var(--text)]">إضافة مربع للبحث عن الدروس.</span>
                </div>
                <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] font-black flex items-center justify-center text-[11px]">٤</span>
                  <span className="font-bold text-[var(--text)]">إضافة اختصارات للدروس الأكثر استخداماً.</span>
                </div>
                <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] font-black flex items-center justify-center text-[11px]">٥</span>
                  <span className="font-bold text-[var(--text)]">إضافة ترتيب واضح للمواد.</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              Multiple creative alternatives generated
            </div>
          </div>
        </Place>

        {/* Right: Crucial Notice */}
        <Place x={60} y={225} w={440} h={355} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--warning)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2 mb-3">
                <span className="text-xl">⚠️</span>
                <span className="font-extrabold text-sm text-[var(--warning)]">
                  خد بالك:
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[var(--warning-soft)] border border-[var(--warning)]/40 text-xs text-[var(--text)] leading-relaxed font-bold space-y-3">
                <p className="m-0 text-sm text-[var(--warning)] font-black">
                  في المرحلة دي مش بنختار أول فكرة تيجي في دماغنا!
                </p>
                <p className="m-0 text-xs text-[var(--text)] font-medium">
                  لكن بنحاول نولد أكبر عدد ممكن من الأفكار والحلول.
                </p>
                <div className="p-2.5 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-[11px] text-[var(--muted)] font-normal">
                  💡 وفرة الأفكار تمنح الفريق حرية المفاضلة واختيار الحل الأكثر ملاءمة وسهولة في التنفيذ.
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>المرحلة القادمة:</span>
              <span className="text-[var(--pen-green)] font-bold">المرحلة الرابعة: النموذج الأولي (Prototype) ➡️</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--pen-purple)]">
              <span>🚀</span>
              <span>الكمية تولد الجودة: كلما اتسعت رقعة الأفكار المطروحة، زادت فرصة الوصول إلى حل مبتكر واستثنائي.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Divergent Thinking First</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'dt-prototype',
    title: 'المرحلة الرابعة: النموذج الأولي (Prototype)',
    scene: true,
    notes: (
      <>
        <p><b>المرحلة الرابعة: النموذج الأولي (Prototype):</b></p>
        <p><b>المقصود بها:</b> إنشاء نموذج أولي سريع بناءً على الأفكار المقترحة.</p>
        <p><b>يعني إيه نموذج أولي؟</b> هو نسخة مبدئية وبسيطة من التصميم، نعملها لكي نجرب الفكرة قبل ما ننفذ الموقع بشكل كامل.</p>
        <p><b>مثال:</b> بدلاً من أن نبرمج الموقع بالكامل، نعمل تصميماً مبدئياً للصفحة الرئيسية يوضح: مكان القائمة الرئيسية، مكان الوحدات والدروس، شكل مربع البحث، وطريقة التنقل بين الصفحات.</p>
        <p>النموذج الأولي قد يكون مجرد رسم على ورقة، أو تصميم على برنامج، أو نسخة بسيطة قابلة للتجربة.</p>
        <p><b>الهدف:</b> أن نرى الفكرة عملياً قبل أن نستثمر وقتاً ومجهوداً كبيراً في تنفيذها.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="إنشاء نسخة تجريبية سريعة وبسيطة لاختبار الفكرة قبل كتابة الكود البرمجي الكامل">
          المرحلة الرابعة: النموذج الأولي (Prototype) 🎨
        </Heading>

        {/* Top Definition */}
        <Place x={60} y={115} w={1160} h={95} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-green)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)] flex items-center justify-center font-mono font-black text-xl text-[var(--safe)]">
                4
              </div>
              <div>
                <span className="font-extrabold text-sm text-[var(--pen-green)] block">المقصود بها:</span>
                <p className="text-xs text-[var(--text)] m-0 font-bold leading-relaxed">
                  إنشاء نموذج أولي سريع بناءً على الأفكار المقترحة.
                </p>
                <p className="text-[11px] text-[var(--muted)] m-0 font-medium">
                  يعني إيه نموذج أولي؟ هو نسخة مبدئية وبسيطة من التصميم، بنعملها علشان نجرب الفكرة قبل ما ننفذ الموقع بشكل كامل.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono whitespace-nowrap">
              Low-Fidelity & Mockups
            </div>
          </div>
        </Place>

        {/* Left: Example Mockup Details */}
        <Place x={540} y={225} w={680} h={355} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>📐</span>
                  <span>مثال: تصميم مبدئي للصفحة الرئيسية</span>
                </span>
                <span className="text-[11px] text-[var(--pen-green)] font-bold">بدلاً من البرمجة الكاملة</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] mb-3">
                <span className="font-bold text-[var(--pen-green)] block mb-1.5">النموذج المبدئي يوضح النقاط التالية:</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-1.5">
                    <span className="text-[var(--pen-green)] font-bold">•</span>
                    <span>مكان القائمة الرئيسية.</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-1.5">
                    <span className="text-[var(--pen-green)] font-bold">•</span>
                    <span>مكان الوحدات والدروس.</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-1.5">
                    <span className="text-[var(--pen-green)] font-bold">•</span>
                    <span>شكل مربع البحث.</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-1.5">
                    <span className="text-[var(--pen-green)] font-bold">•</span>
                    <span>طريقة التنقل بين الصفحات.</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs text-[var(--text)] font-medium">
                📝 <span className="font-bold text-[var(--primary)]">أشكال النموذج الأولي:</span> ممكن يكون مجرد رسم على ورقة، أو تصميم على برنامج، أو نسخة بسيطة قابلة للتجربة.
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              Fail fast, learn fast, build right
            </div>
          </div>
        </Place>

        {/* Right: The Goal */}
        <Place x={60} y={225} w={460} h={355} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--safe)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--safe)] flex items-center gap-2">
                  <span>🎯</span>
                  <span>الهدف من النموذج الأولي</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--safe-soft)] text-[var(--safe)] text-[11px] font-black">
                  حماية الموارد
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 text-xs text-[var(--text)] leading-relaxed font-bold space-y-3">
                <p className="m-0 text-sm text-[var(--safe)] font-black">
                  الهدف: نشوف الفكرة عملياً قبل ما نستثمر وقت ومجهود كبير في تنفيذها.
                </p>
                <p className="m-0 text-xs text-[var(--text)] font-medium">
                  تعديل خط على ورقة أو تغيير موقع زر في نموذج أولي يستغرق دقيقة واحدة.. بينما تعديل الكود بعد البرمجة الكاملة قد يستغرق أسابيع!
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>المرحلة القادمة:</span>
              <span className="text-[var(--danger)] font-bold">المرحلة الخامسة: الاختبار (Test) ➡️</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--safe)]">
              <span>💡</span>
              <span>النموذج الأولي يمنح الفكرة تجسيداً ملموساً يسهل على الجميع اختباره وإبداء الرأي فيه.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Prototype ➔ Next: Test</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'dt-test',
    title: 'المرحلة الخامسة: الاختبار (Test)',
    scene: true,
    notes: (
      <>
        <p><b>المرحلة الخامسة: الاختبار (Test):</b></p>
        <p><b>المقصود بها:</b> نجعل المستخدمين يجربون النموذج الأولي، ثم نجمع ملاحظاتهم ونراقب ما يحدث.</p>
        <p><b>مثال:</b> نعرض التصميم المبدئي على مجموعة من المستخدمين ونطلب منهم الوصول إلى درس معين.</p>
        <p><b>نراقب:</b></p>
        <ul>
          <li>هل قدروا يوصلوا للدرس بسهولة؟</li>
          <li>هل فهموا طريقة استخدام القائمة؟</li>
          <li>هل واجهوا أي صعوبات؟</li>
          <li>هل عندهم اقتراحات لتحسين التصميم؟</li>
        </ul>
        <p>بعد ذلك نجمع الملاحظات ونحدد التعديلات المطلوبة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تجربة المستخدمين للنموذج الأولي، ومراقبة سلوكهم الفعلي، وجمع الملاحظات بدقة">
          المرحلة الخامسة: الاختبار (Test) 🧪
        </Heading>

        {/* Top Definition */}
        <Place x={60} y={115} w={1160} h={95} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--danger)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)] flex items-center justify-center font-mono font-black text-xl text-[var(--danger)]">
                5
              </div>
              <div>
                <span className="font-extrabold text-sm text-[var(--danger)] block">المقصود بها:</span>
                <p className="text-xs text-[var(--text)] m-0 font-bold leading-relaxed">
                  نجعل المستخدمين يجربون النموذج الأولي، ثم نجمع ملاحظاتهم ونراقب ما يحدث.
                </p>
                <p className="text-[11px] text-[var(--muted)] m-0 font-medium">
                  الاختبار الحقيقي هو وضع النموذج بين أيدي المستخدمين ومراقبة تفاعلهم دون توجيه مسبق.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono whitespace-nowrap">
              User Testing & Feedback
            </div>
          </div>
        </Place>

        {/* Left: What do we observe? */}
        <Place x={520} y={225} w={700} h={355} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>👀</span>
                  <span>مثال: عرض التصميم المبدئي على مستخدمين للوصول لدرس معين</span>
                </span>
                <span className="text-[11px] text-[var(--danger)] font-bold">نقاط المراقبة</span>
              </div>

              {/* 4 observation checks */}
              <div className="space-y-2 mb-3">
                <span className="font-bold text-xs text-[var(--pen-blue)] block">نراقب بدقة:</span>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--danger)] font-bold">🔍</span>
                  <span>هل قدروا يوصلوا للدرس بسهولة؟</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--danger)] font-bold">🔍</span>
                  <span>هل فهموا طريقة استخدام القائمة؟</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--danger)] font-bold">🔍</span>
                  <span>هل واجهوا أي صعوبات؟</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2.5 text-xs">
                  <span className="text-[var(--danger)] font-bold">🔍</span>
                  <span>هل عندهم اقتراحات لتحسين التصميم؟</span>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/30 text-xs font-bold text-[var(--danger)] text-center">
              بعد كده نجمع الملاحظات ونحدد التعديلات المطلوبة.
            </div>
          </div>
        </Place>

        {/* Right: The Core Lesson */}
        <Place x={60} y={225} w={440} h={355} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--primary)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--primary)] flex items-center gap-2">
                  <span>📊</span>
                  <span>مخرجات الاختبار</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] text-[11px] font-black">
                  رؤى واقعية
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/40 text-xs text-[var(--text)] leading-relaxed font-bold space-y-3">
                <p className="m-0 text-sm text-[var(--primary)] font-black">
                  الملاحظات هي المحرك الحقيقي للتطوير!
                </p>
                <p className="m-0 text-xs text-[var(--text)] font-medium">
                  لا تدافع عن تصميمك إذا عجز المستخدم عن فهمه؛ صمت المستخدم أو ارتباكه هو المؤشر الأكثر صدقاً لوجود خلل تصميمي.
                </p>
                <div className="p-2.5 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-[11px] text-[var(--muted)] font-normal">
                  💡 الاختبار ليس نهاية المطاف، بل هو البوصلة التي توجه التعديل القادم.
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>السؤال الجوهري:</span>
              <span className="text-[var(--primary)] font-bold">هل يسير في اتجاه واحد؟ ➡️</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--danger)]">
              <span>🎯</span>
              <span>الاختبار يكشف الفجوة بين ما كان يتوقعه المصمم وما عايشه المستخدم على أرض الواقع.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Test ➔ Learn ➔ Refine</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'dt-loop',
    title: 'هل التفكير التصميمي يسير في اتجاه واحد فقط؟',
    scene: true,
    notes: (
      <>
        <p><b>هل التفكير التصميمي يسير في اتجاه واحد فقط؟</b></p>
        <p>لأ، وهذه نقطة مهمة جداً في الكتاب.</p>
        <p>مراحل التفكير التصميمي ليست خطوات خطية صارمة يجب أن نمشي فيها للأمام فقط.</p>
        <p>يعني ممكن نبدأ بالاختبار، ونكتشف أن هناك مشكلة في فهم احتياجات المستخدم، فنرجع لمرحلة التعاطف. أو نكتشف أن المشكلة التي حددناها ليست دقيقة، فنرجع لمرحلة التعريف.</p>
        <p><b>مثال يوضح إمكانية الرجوع بين المراحل:</b></p>
        <ul>
          <li>التعاطف: فهم المستخدمين.</li>
          <li>التعريف: تحديد مشكلة صعوبة الوصول للدروس.</li>
          <li>توليد الأفكار: اقتراح حلول.</li>
          <li>النموذج الأولي: تصميم نسخة مبدئية.</li>
          <li>الاختبار: تجربة المستخدمين للتصميم.</li>
        </ul>
        <p><b>القاعدة:</b> لو ظهرت مشكلة، نرجع للمرحلة المناسبة ونحسن الحل 🔄.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مرونة الحركة ذهاباً وإياباً: لماذا ليست مراحل التفكير التصميمي خطوات خطية صارمة؟">
          هل التفكير التصميمي يسير في اتجاه واحد فقط؟ 🔄
        </Heading>

        {/* Left Side: Text Explanation */}
        <Place x={600} y={115} w={620} h={475} at={1}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--primary)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--primary)] flex items-center gap-2">
                  <span>❓</span>
                  <span>هل يسير في اتجاه واحد فقط؟</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--danger-soft)] text-[var(--danger)] text-[11px] font-black">
                  لأ! نقطة مهمة جداً
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/30 text-xs text-[var(--text)] leading-relaxed mb-3 font-bold">
                <p className="m-0 text-sm text-[var(--danger)] font-black mb-1">
                  مراحل التفكير التصميمي مش خطوات خطية صارمة لازم نمشي فيها للأمام فقط!
                </p>
              </div>

              <div className="space-y-2 mb-3">
                <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs leading-relaxed">
                  <span className="font-bold text-[var(--pen-blue)] block mb-1">حالة رجوع ١:</span>
                  ممكن نبدأ بالاختبار، ونكتشف إن فيه مشكلة في فهم احتياجات المستخدم، <b className="text-[var(--pen-blue)]">فنرجع لمرحلة التعاطف</b> من جديد.
                </div>

                <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs leading-relaxed">
                  <span className="font-bold text-[var(--pen-orange)] block mb-1">حالة رجوع ٢:</span>
                  أو نكتشف أثناء التجربة إن المشكلة اللي حددناها مش دقيقة، <b className="text-[var(--pen-orange)]">فنرجع لمرحلة التعريف</b> لإعادة صياغة المشكلة.
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs font-bold text-[var(--primary)] text-center">
              💡 المرونة والرجوع المستمر هما سر قوة ونجاح التفكير التصميمي.
            </div>
          </div>
        </Place>

        {/* Right Side: Vertical Flow Diagram (Screenshot 7 Exact Diagram) */}
        <Place x={60} y={115} w={515} h={475} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="border-b border-[var(--border)] pb-2 mb-3 text-center">
                <span className="font-black text-xs text-[var(--text)]">
                  مثال يوضح إمكانية الرجوع بين المراحل:
                </span>
              </div>

              {/* Vertical Stack */}
              <div className="space-y-1.5 flex flex-col items-center">
                <div className="w-full p-2.5 rounded-xl bg-[#0a1a15] border border-emerald-700/60 text-xs text-center font-bold text-emerald-300">
                  التعاطف: فهم المستخدمين
                </div>
                <span className="text-xs text-[var(--muted)]">⬇️</span>

                <div className="w-full p-2.5 rounded-xl bg-[#0a1a15] border border-emerald-700/60 text-xs text-center font-bold text-emerald-300">
                  التعريف: تحديد مشكلة صعوبة الوصول للدروس
                </div>
                <span className="text-xs text-[var(--muted)]">⬇️</span>

                <div className="w-full p-2.5 rounded-xl bg-[#0a1a15] border border-emerald-700/60 text-xs text-center font-bold text-emerald-300">
                  توليد الأفكار: اقتراح حلول
                </div>
                <span className="text-xs text-[var(--muted)]">⬇️</span>

                <div className="w-full p-2.5 rounded-xl bg-[#0a1a15] border border-emerald-700/60 text-xs text-center font-bold text-emerald-300">
                  النموذج الأولي: تصميم نسخة مبدئية
                </div>
                <span className="text-xs text-[var(--muted)]">⬇️</span>

                <div className="w-full p-2.5 rounded-xl bg-[#0a1a15] border border-emerald-700/60 text-xs text-center font-bold text-emerald-300">
                  الاختبار: تجربة المستخدمين للتصميم
                </div>
              </div>
            </div>

            {/* Bottom Return Callout Button (Exact from Screenshot 7) */}
            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-600 flex items-center justify-center gap-2 text-xs font-black text-emerald-300">
              <span className="text-base">🔄</span>
              <span>لو ظهرت مشكلة، نرجع للمرحلة المناسبة ونحسن الحل.</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={3}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--safe)]">
              <span>🌟</span>
              <span>التفكير التصميمي ليس قطاراً يسير في سكة واحدة، بل هو شبكة ذكية تتكيف وتعود لتصحيح المسار دائماً.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Non-Linear Adaptive Process</span>
          </div>
        </Place>
      </Scene>
    ),
  },
];

export const abTesting: FrameDef[] = [
  {
    id: 'ab-intro',
    title: 'خامساً · ما المقصود باختبار A/B؟',
    scene: true,
    notes: (
      <>
        <p><b>خامساً: اختبار A/B:</b></p>
        <p><b>١- ما المقصود باختبار A/B؟</b></p>
        <p>هو طريقة لمقارنة نسختين مختلفتين من نفس الشيء لمعرفة أيهما أفضل، باستخدام مقياس محدد.</p>
        <p><b>مثال بسيط جداً:</b> تخيل أن لدينا موقع للتسوق الإلكتروني، وفيه زر للشراء. نريد معرفة أي لون من اللونين أفضل في جذب المستخدمين للضغط على الزر: النسخة A (زر أحمر) أم النسخة B (زر أزرق).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مقارنة نسختين مختلفتين من نفس العنصر لمعرفة أيهما أفضل باستخدام مقياس محدد">
          خامساً: ما المقصود باختبار A/B؟ (A/B Testing) 🅰️/🅱️
        </Heading>

        {/* Top Definition Card */}
        <Place x={60} y={115} w={1160} h={80} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--primary)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              <div>
                <span className="font-extrabold text-sm text-[var(--primary)] block">التعريف الأساسي:</span>
                <p className="text-xs text-[var(--text)] m-0 font-medium">
                  هو طريقة لمقارنة نسختين مختلفتين من نفس الشيء لمعرفة أيهما أفضل، باستخدام مقياس محدد.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs font-black text-[var(--primary)] whitespace-nowrap">
              Split Testing Method
            </div>
          </div>
        </Place>

        {/* Left: Replicating Infographic from Screenshot 1 */}
        <Place x={600} y={210} w={620} h={375} at={2}>
          <div className="p-4 rounded-2xl bg-[#0f172a] border border-blue-500/40 h-full flex flex-col justify-between shadow-lg font-sans text-white text-center">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-2">
              <span className="font-black text-sm text-blue-400">آلية الاختبار الإحصائي المعتمدة</span>
              <span className="text-xs font-mono text-slate-400">50% / 50% Split</span>
            </div>

            <div className="flex items-center justify-center gap-4 my-auto">
              {/* Variation A */}
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col items-center w-48 shadow-md">
                <span className="text-[11px] font-bold text-emerald-400 mb-1">50% visitors see variation A</span>
                <div className="w-24 h-16 rounded-lg bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-xs font-bold text-emerald-300 mb-2">
                  صفحة أ
                </div>
                <div className="text-lg font-black text-emerald-400">15%</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono">Conversion</div>
              </div>

              {/* VS Badge */}
              <div className="w-10 h-10 rounded-full bg-blue-600 border border-blue-300 flex items-center justify-center font-black text-xs text-white shadow-md">
                VS
              </div>

              {/* Variation B */}
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col items-center w-48 shadow-md">
                <span className="text-[11px] font-bold text-amber-400 mb-1">50% visitors see variation B</span>
                <div className="w-24 h-16 rounded-lg bg-amber-950/60 border border-amber-500/50 flex items-center justify-center text-xs font-bold text-amber-300 mb-2">
                  صفحة ب
                </div>
                <div className="text-lg font-black text-amber-400">36%</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono">Conversion</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-blue-950/50 border border-blue-700/50 text-[11px] text-blue-300 font-bold">
              🏆 النتيجة: النسخة B حققت معدل تحويل مضاعفاً بالأرقام المثبتة!
            </div>
          </div>
        </Place>

        {/* Right: Hook Scenario */}
        <Place x={60} y={210} w={520} h={375} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--pen-orange)] flex items-center gap-2">
                  <span>🛒</span>
                  <span>خلينا نفهمها بمثال بسيط جداً</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--warning-soft)] text-[var(--warning)] text-[11px] font-black">
                  متجر إلكتروني
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] leading-relaxed mb-3">
                تخيل إن عندنا موقع للتسوق الإلكتروني، وفيه زر للشراء.. عايزين نعرف أنهي لون من اللونين أفضل في جذب المستخدمين للضغط على الزر:
              </div>

              <div className="space-y-2 mb-3">
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/40 flex items-center justify-between">
                  <span className="font-bold text-xs text-[var(--danger)]">النسخة A:</span>
                  <span className="px-3 py-1 rounded-lg bg-[var(--danger)] text-white text-xs font-black">اشتر الآن (زر أحمر)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-blue)]/40 flex items-center justify-between">
                  <span className="font-bold text-xs text-[var(--pen-blue)]">النسخة B:</span>
                  <span className="px-3 py-1 rounded-lg bg-[#0284c7] text-white text-xs font-black">اشتر الآن (زر أزرق)</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs font-bold text-[var(--primary)] text-center">
              تعالوا نشوف نتيجة التجربة الرقمية في الشريحة التالية ➡️
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--primary)]">
              <span>🎯</span>
              <span>اختبار A/B يلغي الاعتماد على الحدس الشخصي ويجعل تفاعل المستخدمين الفعلي هو الفيصل.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Compare Variation A vs B</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'ab-experiment',
    title: 'مثال عملي: تجربة زر الشراء الأحمر والأزرق',
    scene: true,
    notes: (
      <>
        <p><b>مثال عملي على اختبار A/B:</b></p>
        <p>نعرض النسخة A على مجموعة من المستخدمين، والنسخة B على مجموعة أخرى، وبعد ذلك نقارن النتائج.</p>
        <p><b>الأرقام:</b></p>
        <ul>
          <li>النسخة A (زر أحمر): 1000 مستخدم ➔ 100 ضغطة.</li>
          <li>النسخة B (زر أزرق): 1000 مستخدم ➔ 180 ضغطة.</li>
        </ul>
        <p><b>الاستنتاج:</b> هنا النسخة B حققت عدد ضغطات أكبر؛ إذن نقدر نقول إن الزر الأزرق حقق نتيجة أفضل في هذه التجربة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="عرض النسخة A على مجموعة والنسخة B على مجموعة أخرى والمقارنة الميدانية بالأرقام">
          مثال عملي: تجربة زر الشراء (أحمر vs أزرق) 🛒
        </Heading>

        {/* Top Place */}
        <Place x={60} y={115} w={1160} h={80} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-blue)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <span className="font-extrabold text-sm text-[var(--pen-blue)] block">آلية التجربة الميدانية:</span>
                <p className="text-xs text-[var(--text)] m-0 font-medium">
                  هنعرض النسخة A على مجموعة من المستخدمين، والنسخة B على مجموعة أخرى، وبعد كده نقارن النتائج.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono whitespace-nowrap">
              Controlled Experiment
            </div>
          </div>
        </Place>

        {/* Left: Two Button Variations */}
        <Place x={650} y={210} w={570} h={375} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="border-b border-[var(--border)] pb-2 mb-3 text-center">
                <span className="font-black text-sm text-[var(--text)]">تصميم النسختين المختبرتين</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* Variation A */}
                <div className="p-4 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/50 flex flex-col items-center justify-center text-center gap-3 shadow-inner">
                  <span className="font-extrabold text-xs text-[var(--danger)]">النسخة A</span>
                  <button className="px-6 py-2.5 rounded-xl bg-[#dc2626] text-white font-bold text-sm shadow-md cursor-default pointer-events-none">
                    اشتر الآن
                  </button>
                  <span className="text-xs text-[var(--muted)] font-bold">زر أحمر</span>
                </div>

                {/* Variation B */}
                <div className="p-4 rounded-xl bg-[var(--board-bg)] border border-blue-500/50 flex flex-col items-center justify-center text-center gap-3 shadow-inner">
                  <span className="font-extrabold text-xs text-blue-400">النسخة B</span>
                  <button className="px-6 py-2.5 rounded-xl bg-[#0284c7] text-white font-bold text-sm shadow-md cursor-default pointer-events-none">
                    اشتر الآن
                  </button>
                  <span className="text-xs text-[var(--muted)] font-bold">زر أزرق</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-center text-xs text-[var(--muted)] font-medium">
              الفرق الوحيد بين الصفحتين هو لون زر الدعوة للإجراء (CTA).
            </div>
          </div>
        </Place>

        {/* Right: Results Table */}
        <Place x={60} y={210} w={570} h={375} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--safe)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--safe)] flex items-center gap-2">
                  <span>📊</span>
                  <span>جدول نتائج التجربة</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--safe-soft)] text-[var(--safe)] text-[11px] font-black">
                  بيانات إحصائية
                </span>
              </div>

              {/* Exact Table from Screenshot 2 */}
              <div className="space-y-2 mb-3">
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-black text-[var(--muted)] pb-1 border-b border-[var(--border)]/40">
                  <div>النسخة</div>
                  <div>عدد المستخدمين</div>
                  <div>عدد الضغطات</div>
                </div>

                {/* Row A */}
                <div className="grid grid-cols-3 gap-2 items-center p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-center">
                  <div className="font-mono font-black text-sm text-[var(--danger)]">A</div>
                  <div className="font-mono font-bold text-[var(--text)]">1000</div>
                  <div className="font-mono font-bold text-[var(--danger)]">100</div>
                </div>

                {/* Row B */}
                <div className="grid grid-cols-3 gap-2 items-center p-2.5 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/50 text-xs text-center font-bold">
                  <div className="font-mono font-black text-sm text-blue-400">B 🏆</div>
                  <div className="font-mono font-bold text-[var(--text)]">1000</div>
                  <div className="font-mono font-black text-base text-[var(--safe)]">180</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--safe)]/40 text-xs leading-relaxed font-bold text-[var(--text)]">
                <span className="text-[var(--safe)] block mb-1">الاستنتاج العملي:</span>
                هنا النسخة B حققت عدد ضغطات أكبر؛ إذن نقدر نقول إن <b className="text-blue-400">الزر الأزرق حقق نتيجة أفضل</b> في هذه التجربة.
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              +80% Increase in Click Rate
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--warning)]">
              <span>⚠️</span>
              <span>لكن علشان نضمن دقة وصحة اختبار A/B، لازم نفهم شوية نقاط أساسية مهمة جداً!</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Next: 3 Core Rules</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'ab-core-rules',
    title: 'النقاط الأساسية لاختبار A/B',
    scene: true,
    notes: (
      <>
        <p><b>٢- النقاط الأساسية لاختبار A/B:</b></p>
        <p><b>النقطة الأولى:</b> لازم يكون الفرق بين النسختين واضحاً ومحدداً. يعني لو عايزين نعرف تأثير لون الزر، نغير لون الزر فقط، ونسيب باقي التصميم زي ما هو. ليه؟ علشان نقدر نحدد إن الاختلاف في النتائج سببه لون الزر. لكن لو غيرنا اللون وحجم الزر ومكانه وشكل الصفحة في نفس الوقت، مش هنعرف أي تغيير فيهم هو اللي أثر على النتيجة.</p>
        <p><b>النقطة الثانية:</b> لازم نحدد طريقة القياس قبل الاختبار. يعني لازم نحدد إحنا هنقيس إيه بالضبط (مثل: عدد الضغطات على الزر، نسبة إتمام عملية الشراء، أو عدد الأشخاص الذين سجلوا في الموقع). مينفعش نبدأ الاختبار وبعد ما تظهر النتائج نختار المقياس اللي يعجبنا.</p>
        <p><b>النقطة الثالثة:</b> لازم نجمع بيانات كافية قبل اتخاذ القرار. يعني مينفعش نعرض النسختين على شخصين فقط ونقرر إن واحدة أفضل؛ لازم يكون عندنا عدد مناسب من المستخدمين والبيانات حتى تكون المقارنة مفيدة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="القواعد المنهجية الثلاث التي تجعل اختبار A/B دقيقاً وعادلاً وموثوقاً إحصائياً">
          النقاط الأساسية لاختبار A/B 📌
        </Heading>

        {/* 3 Pillar Cards */}
        {/* Rule 1 */}
        <Place x={840} y={115} w={380} h={475} at={1}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-blue)]/40 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] font-black text-sm flex items-center justify-center font-mono">
                  1
                </div>
                <span className="font-extrabold text-sm text-[var(--pen-blue)]">الفرق واضح ومحدد</span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] leading-relaxed mb-3 font-medium">
                يعني لو عايزين نعرف تأثير لون الزر، <b className="text-[var(--pen-blue)]">نغير لون الزر فقط</b>، ونسيب باقي التصميم زي ما هو.
              </div>

              <div className="p-3 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs text-[var(--text)] leading-relaxed mb-3">
                <span className="font-black text-[var(--primary)] block mb-1">ليه؟</span>
                علشان نقدر نحدد إن الاختلاف في النتائج سببه لون الزر بالتحديد.
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/30 text-[11px] text-[var(--danger)] font-bold">
                ⚠️ لكن لو غيرنا اللون والحجم والمكان وشكل الصفحة معاً، مش هنعرف أي تغيير فيهم هو المؤثر!
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              Single Variable Isolation
            </div>
          </div>
        </Place>

        {/* Rule 2 */}
        <Place x={450} y={115} w={370} h={475} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-orange)]/40 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--pen-orange)]/20 text-[var(--pen-orange)] font-black text-sm flex items-center justify-center font-mono">
                  2
                </div>
                <span className="font-extrabold text-sm text-[var(--pen-orange)]">تحديد المقياس مسبقاً</span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] leading-relaxed mb-2.5 font-medium">
                لازم نحدد إحنا هنقيس إيه بالضبط <b className="text-[var(--pen-orange)]">قبل بدء الاختبار</b>:
              </div>

              <div className="space-y-1.5 mb-3 text-xs">
                <div className="p-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2">
                  <span className="text-[var(--pen-orange)] font-bold">•</span>
                  <span>عدد الضغطات على الزر.</span>
                </div>
                <div className="p-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2">
                  <span className="text-[var(--pen-orange)] font-bold">•</span>
                  <span>نسبة إتمام عملية الشراء.</span>
                </div>
                <div className="p-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] flex items-center gap-2">
                  <span className="text-[var(--pen-orange)] font-bold">•</span>
                  <span>عدد الأشخاص اللي سجلوا في الموقع.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--warning-soft)] border border-[var(--warning)]/40 text-[11px] text-[var(--text)] font-bold">
                ⛔ <b className="text-[var(--warning)]">تحذير:</b> مينفعش نبدأ الاختبار وبعد ما تظهر النتائج نختار المقياس اللي يعجبنا!
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              Pre-defined Success Metric
            </div>
          </div>
        </Place>

        {/* Rule 3 */}
        <Place x={60} y={115} w={370} h={475} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-green)]/40 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--safe-soft)] text-[var(--safe)] font-black text-sm flex items-center justify-center font-mono">
                  3
                </div>
                <span className="font-extrabold text-sm text-[var(--pen-green)]">جمع بيانات كافية</span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] leading-relaxed mb-3 font-medium">
                لازم نجمع بيانات كافية وعينة مستخدمين ذات دلالة إحصائية <b className="text-[var(--safe)]">قبل اتخاذ القرار</b>.
              </div>

              <div className="p-3 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/30 text-xs text-[var(--text)] leading-relaxed mb-3 font-bold">
                <span className="text-[var(--danger)] block mb-1">خطأ شائع:</span>
                مينفعش نعرض النسختين على شخصين فقط ونقرر إن واحدة أفضل!
              </div>

              <div className="p-3 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 text-xs font-bold text-[var(--safe)]">
                ✅ القاعدة: لازم يكون عندنا عدد مناسب من المستخدمين والبيانات حتى تكون المقارنة مفيدة.
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              Statistical Significance
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--safe)]">
              <span>🌟</span>
              <span>عزل المتغير الواحد وتحديد المقياس مسبقاً وتوفير حجم عينة كافٍ = قرارات هندسية دقيقة لا تقبل الشك.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Rigorous A/B Methodology</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'ab-single-vs-multi',
    title: 'الفرق بين تغيير واحد وتغييرات متعددة',
    scene: true,
    notes: (
      <>
        <p><b>مثال مهم جداً على الفرق بين تغيير واحد وتغييرات متعددة:</b></p>
        <p><b>الحالة الصحيحة (تغيير عنصر واحد):</b></p>
        <ul>
          <li>النسخة A: زر أحمر.</li>
          <li>النسخة B: زر أزرق.</li>
        </ul>
        <p>هكذا نستطيع معرفة تأثير لون الزر بدقة.</p>
        <p><b>الحالة الخاطئة (تغييرات متعددة):</b></p>
        <ul>
          <li>النسخة A: زر أحمر وصغير في أسفل الصفحة.</li>
          <li>النسخة B: زر أزرق وكبير في أعلى الصفحة.</li>
        </ul>
        <p>هنا غيرنا أكثر من عنصر؛ وبالتالي لو نجحت النسخة B، لن نعرف هل السبب هو اللون الأزرق، أم الحجم الكبير، أم مكان الزر!</p>
        <p><b>الخلاصة:</b> في اختبار A/B يجب أن نتحكم في الاختلافات ونحدد تأثير التغيير الذي نختبره.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="لماذا يجب التحكم في الاختلافات وعزل المتغيرات بدقة عند إجراء الاختبار؟">
          الفرق بين تغيير واحد وتغييرات متعددة ⚖️
        </Heading>

        {/* Case 1: Single Change (Correct) */}
        <Place x={650} y={115} w={570} h={470} at={1}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--safe)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--safe)] flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <span>الحالة الأولى: تغيير عنصر واحد فقط (صحيح)</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--safe-soft)] text-[var(--safe)] text-[11px] font-black">
                  علمي ومضبوط
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] mb-3 leading-relaxed">
                افترض إننا عايزين نعرف تأثير لون زر الشراء:
              </div>

              <div className="space-y-2 mb-3">
                <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/30 flex items-center justify-between text-xs">
                  <span className="font-bold text-[var(--danger)]">• النسخة A:</span>
                  <span className="font-black text-[var(--text)]">زر أحمر</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-blue)]/30 flex items-center justify-between text-xs">
                  <span className="font-bold text-[var(--pen-blue)]">• النسخة B:</span>
                  <span className="font-black text-[var(--text)]">زر أزرق</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 text-xs font-bold text-[var(--safe)]">
                🎯 النتيجة: كده نقدر نعرف بدقة تأثير لون الزر، لأن كل باقي عناصر الصفحة متطابقة 100%.
              </div>
            </div>

            <div className="text-[11px] text-[var(--safe)] text-center font-bold">
              ✅ نجاح الاختبار = عزل تام للمتغير.
            </div>
          </div>
        </Place>

        {/* Case 2: Multiple Changes (Flawed) */}
        <Place x={60} y={115} w={570} h={470} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--danger)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--danger)] flex items-center gap-2">
                  <span className="text-lg">❌</span>
                  <span>الحالة الثانية: تغييرات متعددة في وقت واحد (خطأ)</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--danger-soft)] text-[var(--danger)] text-[11px] font-black">
                  مضلل وغير دقيق
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] mb-3 leading-relaxed">
                لكن لو عملنا:
              </div>

              <div className="space-y-2 mb-3">
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/40 text-xs">
                  <span className="font-bold text-[var(--danger)] block mb-1">• النسخة A:</span>
                  <span className="text-[var(--text)] font-medium">زر أحمر + صغير + في أسفل الصفحة.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-blue-500/40 text-xs">
                  <span className="font-bold text-blue-400 block mb-1">• النسخة B:</span>
                  <span className="text-[var(--text)] font-medium">زر أزرق + كبير + في أعلى الصفحة.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/40 text-xs font-bold text-[var(--danger)] leading-relaxed">
                ⚠️ المأزق: هنا إحنا غيرنا أكثر من عنصر! وبالتالي لو النسخة B نجحت، مش هنعرف هل السبب هو اللون الأزرق، ولا الحجم الكبير، ولا مكان الزر!
              </div>
            </div>

            <div className="text-[11px] text-[var(--danger)] text-center font-bold">
              ❌ فشل الاختبار = تداخل المتغيرات وضياع الحقيقة.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={3}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--primary)]">
              <span>💡</span>
              <span>القاعدة الذهبية: إذن في اختبار A/B لازم نتحكم في الاختلافات ونحدد تأثير التغيير اللي بنختبره.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Control Variables Carefully</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'methods-integration',
    title: 'سادساً · كيف ترتبط الأساليب الثلاثة ببعضها؟',
    scene: true,
    notes: (
      <>
        <p><b>سادساً: كيف ترتبط الأساليب الثلاثة ببعضها؟</b></p>
        <p>دي نقطة مهمة لفهم الدرس كله.</p>
        <p><b>وظيفة كل أسلوب:</b></p>
        <ul>
          <li><b>دورة PDCA:</b> تنظيم عملية التحسين المستمر.</li>
          <li><b>التفكير التصميمي:</b> فهم المستخدم واكتشاف المشكلات وتوليد الحلول.</li>
          <li><b>اختبار A/B:</b> مقارنة نسختين لمعرفة أيهما أفضل بناءً على البيانات.</li>
        </ul>
        <p><b>ربط الأساليب بمثال واحد (موقع تعليمي يواجه المستخدمون صعوبة في التسجيل):</b></p>
        <ol>
          <li>نستخدم التفكير التصميمي لفهم المشكلة ومعرفة احتياجات المستخدمين.</li>
          <li>نقترح حلولاً ونصمم نموذجاً أولياً ونختبره.</li>
          <li>نستخدم اختبار A/B لمقارنة تصميمين لنموذج التسجيل.</li>
          <li>نستخدم دورة PDCA لتنظيم تنفيذ التغيير وقياس النتائج وتكرار التحسين.</li>
        </ol>
        <p><b>الخلاصة:</b> كل أسلوب له وظيفة مختلفة، لكن الثلاثة يساعدون في تحسين الموقع.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="دي نقطة مهمة لفهم الدرس كله: تكامل الأساليب الثلاثة لتحقيق التحسين المستمر">
          سادساً: كيف ترتبط الأساليب الثلاثة ببعضها؟ 🔗
        </Heading>

        {/* Left Card: 3 Methods Functions Table */}
        <Place x={630} y={115} w={590} h={475} at={1}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--primary)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--primary)] flex items-center gap-2">
                  <span>📊</span>
                  <span>وظيفة كل أسلوب في هندسة الويب</span>
                </span>
                <span className="text-[11px] font-mono text-[var(--muted)]">Core Functions</span>
              </div>

              {/* Table */}
              <div className="space-y-2.5">
                <div className="grid grid-cols-12 gap-2 text-center text-xs font-black text-[var(--muted)] pb-1 border-b border-[var(--border)]/40">
                  <div className="col-span-5 text-right pr-2">الأسلوب</div>
                  <div className="col-span-7 text-right">وظيفته الأساسية</div>
                </div>

                {/* PDCA */}
                <div className="grid grid-cols-12 gap-2 items-center p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-blue)]/40 text-xs">
                  <div className="col-span-5 font-black text-[var(--pen-blue)] text-right flex items-center gap-1.5">
                    <span>🔄</span>
                    <span>دورة PDCA</span>
                  </div>
                  <div className="col-span-7 text-[var(--text)] font-medium text-right leading-relaxed">
                    تنظيم عملية التحسين المستمر.
                  </div>
                </div>

                {/* Design Thinking */}
                <div className="grid grid-cols-12 gap-2 items-center p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-purple)]/40 text-xs">
                  <div className="col-span-5 font-black text-[var(--pen-purple)] text-right flex items-center gap-1.5">
                    <span>🧠</span>
                    <span>التفكير التصميمي</span>
                  </div>
                  <div className="col-span-7 text-[var(--text)] font-medium text-right leading-relaxed">
                    فهم المستخدم واكتشاف المشكلات وتوليد الحلول.
                  </div>
                </div>

                {/* A/B Testing */}
                <div className="grid grid-cols-12 gap-2 items-center p-3 rounded-xl bg-[var(--board-bg)] border border-emerald-500/40 text-xs">
                  <div className="col-span-5 font-black text-emerald-400 text-right flex items-center gap-1.5">
                    <span>🅰️/🅱️</span>
                    <span>اختبار A/B</span>
                  </div>
                  <div className="col-span-7 text-[var(--text)] font-medium text-right leading-relaxed">
                    مقارنة نسختين لمعرفة أيهما أفضل بناءً على البيانات.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs font-bold text-[var(--primary)] text-center">
              💡 الثلاثة لا يتعارضون، بل يكمل كل منهم الآخر في حلقة تطوير متناغمة!
            </div>
          </div>
        </Place>

        {/* Right Card: Unified Example (موقع تعليمي) */}
        <Place x={60} y={115} w={550} h={475} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>🎓</span>
                  <span>خلينا نربطهم بمثال واحد</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--warning-soft)] text-[var(--warning)] text-[11px] font-black">
                  موقع تعليمي
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/30 text-xs text-[var(--danger)] font-bold mb-2.5 flex items-center gap-2">
                <span className="text-base">🚨</span>
                <span>عندنا موقع تعليمي والمستخدمين بيواجهوا صعوبة في التسجيل.</span>
              </div>

              {/* 4 Connected Steps from Screenshot */}
              <div className="space-y-1.5 mb-2.5">
                <div className="p-2 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-[var(--pen-purple)] border border-[var(--border)] text-xs">
                  <span className="font-bold text-[var(--pen-purple)] ml-1">١.</span>
                  <span className="text-[var(--text)]">نستخدم <b className="text-[var(--pen-purple)]">التفكير التصميمي</b> لفهم المشكلة ومعرفة احتياجات المستخدمين.</span>
                </div>

                <div className="p-2 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-[var(--pen-green)] border border-[var(--border)] text-xs">
                  <span className="font-bold text-[var(--pen-green)] ml-1">٢.</span>
                  <span className="text-[var(--text)]">نقترح حلولاً ونصمم <b className="text-[var(--pen-green)]">نموذجاً أولياً</b> ونختبره.</span>
                </div>

                <div className="p-2 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-emerald-500 border border-[var(--border)] text-xs">
                  <span className="font-bold text-emerald-400 ml-1">٣.</span>
                  <span className="text-[var(--text)]">نستخدم <b className="text-emerald-400">اختبار A/B</b> لمقارنة تصميمين لنموذج التسجيل.</span>
                </div>

                <div className="p-2 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-[var(--pen-blue)] border border-[var(--border)] text-xs">
                  <span className="font-bold text-[var(--pen-blue)] ml-1">٤.</span>
                  <span className="text-[var(--text)]">نستخدم <b className="text-[var(--pen-blue)]">دورة PDCA</b> لتنظيم تنفيذ التغيير وقياس النتائج وتكرار التحسين.</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 text-xs font-bold text-[var(--safe)] text-center">
              إذن كل أسلوب له وظيفة مختلفة، لكن الثلاثة بيساعدوا في تحسين الموقع.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={3}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--primary)]">
              <span>🌟</span>
              <span>التفكير التصميمي يفهم ويبتكر ➔ اختبار A/B يحدد الخيار الأفضل رقمياً ➔ دورة PDCA تدير وتكرر التحسين المستمر.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">PDCA + Design Thinking + A/B Testing</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'lesson-glossary',
    title: 'سابعاً · أهم المصطلحات في الدرس',
    scene: true,
    notes: (
      <>
        <p><b>سابعاً: أهم المصطلحات في الدرس:</b></p>
        <ul>
          <li><b>Iterative Improvement:</b> التحسين التكراري</li>
          <li><b>PDCA:</b> خطط – نفّذ – تحقق – تصرف</li>
          <li><b>Plan:</b> تحديد المشكلة ووضع خطة</li>
          <li><b>Do:</b> تنفيذ التغيير</li>
          <li><b>Check:</b> قياس النتائج والتأكد من نجاح التغيير</li>
          <li><b>Act:</b> اعتماد التغيير أو تعديل الخطة</li>
          <li><b>Design Thinking:</b> التفكير التصميمي</li>
          <li><b>Empathize:</b> التعاطف وفهم المستخدم</li>
          <li><b>Define:</b> تحديد المشكلة</li>
          <li><b>Ideate:</b> توليد الأفكار</li>
          <li><b>Prototype:</b> إنشاء النموذج الأولي</li>
          <li><b>Test:</b> اختبار النموذج</li>
          <li><b>A/B Testing:</b> مقارنة نسختين باستخدام البيانات</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المصطلحات الرسمية المقررة في المنهج ومعانيها باللغة العربية">
          سابعاً: أهم المصطلحات في الدرس 📖
        </Heading>

        {/* Right Card: Terms 1 to 6 (Iterative Optimization & PDCA) */}
        <Place x={660} y={115} w={560} h={545} at={1}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5 mb-3">
                <span className="font-extrabold text-sm text-[var(--pen-blue)] flex items-center gap-2">
                  <span>🔄</span>
                  <span>التحسين التكراري ودورة PDCA</span>
                </span>
                <span className="text-[11px] text-[var(--muted)] font-mono">1 – 6</span>
              </div>

              {/* Table Column Headers */}
              <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-xs font-black text-[var(--muted)]">
                <span>المصطلح (Term)</span>
                <span>معناه (Meaning)</span>
              </div>

              <div className="space-y-2">
                {/* 1. Iterative Improvement */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">1</span>
                    <span className="font-mono font-bold text-xs text-sky-400 bg-sky-950/40 px-2 py-0.5 rounded-md border border-sky-800">
                      Iterative Improvement
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">التحسين التكراري</span>
                </div>

                {/* 2. PDCA */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">2</span>
                    <span className="font-mono font-bold text-xs text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded-md border border-blue-800">
                      PDCA
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">خطط – نفّذ – تحقق – تصرف</span>
                </div>

                {/* 3. Plan */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">3</span>
                    <span className="font-mono font-bold text-xs text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded-md border border-indigo-800">
                      Plan
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">تحديد المشكلة ووضع خطة</span>
                </div>

                {/* 4. Do */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">4</span>
                    <span className="font-mono font-bold text-xs text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-800">
                      Do
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">تنفيذ التغيير</span>
                </div>

                {/* 5. Check */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">5</span>
                    <span className="font-mono font-bold text-xs text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded-md border border-purple-800">
                      Check
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">قياس النتائج والتأكد من نجاح التغيير</span>
                </div>

                {/* 6. Act */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">6</span>
                    <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-800">
                      Act
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">اعتماد التغيير أو تعديل الخطة</span>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-[11px] text-[var(--muted)] text-center font-mono">
              PDCA Quality Management Framework
            </div>
          </div>
        </Place>

        {/* Left Card: Terms 7 to 13 (Design Thinking & A/B Testing) */}
        <Place x={60} y={115} w={560} h={545} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5 mb-3">
                <span className="font-extrabold text-sm text-[var(--pen-purple)] flex items-center gap-2">
                  <span>💡</span>
                  <span>التفكير التصميمي واختبار A/B</span>
                </span>
                <span className="text-[11px] text-[var(--muted)] font-mono">7 – 13</span>
              </div>

              {/* Table Column Headers */}
              <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-xs font-black text-[var(--muted)]">
                <span>المصطلح (Term)</span>
                <span>معناه (Meaning)</span>
              </div>

              <div className="space-y-1.5">
                {/* 7. Design Thinking */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">7</span>
                    <span className="font-mono font-bold text-xs text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded-md border border-purple-800">
                      Design Thinking
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">التفكير التصميمي</span>
                </div>

                {/* 8. Empathize */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">8</span>
                    <span className="font-mono font-bold text-xs text-pink-400 bg-pink-950/40 px-2 py-0.5 rounded-md border border-pink-800">
                      Empathize
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">التعاطف وفهم المستخدم</span>
                </div>

                {/* 9. Define */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">9</span>
                    <span className="font-mono font-bold text-xs text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded-md border border-orange-800">
                      Define
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">تحديد المشكلة</span>
                </div>

                {/* 10. Ideate */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">10</span>
                    <span className="font-mono font-bold text-xs text-yellow-400 bg-yellow-950/40 px-2 py-0.5 rounded-md border border-yellow-800">
                      Ideate
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">توليد الأفكار</span>
                </div>

                {/* 11. Prototype */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">11</span>
                    <span className="font-mono font-bold text-xs text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded-md border border-cyan-800">
                      Prototype
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">إنشاء النموذج الأولي</span>
                </div>

                {/* 12. Test */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">12</span>
                    <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-800">
                      Test
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">اختبار النموذج</span>
                </div>

                {/* 13. A/B Testing */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[var(--surface-1)] text-[10px] text-[var(--muted)] flex items-center justify-center font-mono">13</span>
                    <span className="font-mono font-bold text-xs text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded-md border border-blue-800">
                      A/B Testing
                    </span>
                  </div>
                  <span className="font-bold text-xs text-[var(--text)]">مقارنة نسختين باستخدام البيانات</span>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-[11px] text-[var(--muted)] text-center font-mono">
              Human-Centered Design & Empirical Data Testing
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },
];

export const part2: FrameDef[] = [
  {
    id: 'performance-optimization-stack', title: 'حزمة تقنيات تسريع الأداء (Performance Stack)', scene: true,
    notes: (
      <>
        <p><b>أهم التقنيات الهندسية لتسريع أداء ومعدلات تحميل الموقع:</b></p>
        <ul>
          <li><b>تحويل الصور إلى WebP:</b> يوفر أكثر من 60% من حجم الصور النقطية.</li>
          <li><b>التحميل الكسول (Lazy Loading):</b> تأخير تحميل الصور والمقاطع غير المرئية حتى يقترب المستخدم منها عبر <code>loading="lazy"</code>.</li>
          <li><b>التصغير (Minification):</b> حذف المسافات والتعليقات من ملفات CSS و JavaScript.</li>
          <li><b>التخزين المؤقت (Browser Caching):</b> حفظ الملفات الثابتة في جهاز الزائر لتفتح فورياً في الزيارات التالية عبر ترويسة <code>Cache-Control</code>.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الركائز الأربع التي تقلص زمن تحميل الصفحة من ثوانٍ إلى أجزاء من الثانية">
          حزمة تقنيات تسريع الأداء (Speed Optimization)
        </Heading>

        {/* Pillar 1: WebP */}
        <Box x={890} y={170} w={270} h={360} c="green" at={1} />
        <Doodle x={1025} y={235} icon="🖼️" size={75} c="green" fill="green" at={1} />
        <Txt x={1025} y={305} size={28} c="green" at={1}>١ · صور WebP</Txt>
        <Txt x={1025} y={360} w={230} size={18} c="ink" at={1}>• ضغط فائق مع دعم الشفافية</Txt>
        <Txt x={1025} y={400} w={230} size={18} c="ink" at={1}>• تقليص حجم الملف بنسبة 60%</Txt>
        <Txt x={1025} y={440} w={230} size={18} c="ink" at={1}>• توفير هائل في باقة الموبايل</Txt>
        <Txt x={1025} y={485} size={20} c="green" at={1}>بديل حديث لـ JPEG و PNG</Txt>

        {/* Pillar 2: Lazy Loading */}
        <Box x={600} y={170} w={270} h={360} c="blue" at={2} />
        <Doodle x={735} y={235} icon="⚡" size={75} c="blue" fill="blue" at={2} />
        <Txt x={735} y={305} size={28} c="blue" at={2}>٢ · التحميل الكسول</Txt>
        <Txt x={735} y={360} w={230} size={18} c="ink" at={2}>• loading="lazy"</Txt>
        <Txt x={735} y={400} w={230} size={18} c="ink" at={2}>• لا يحمل الصور البعيدة إلا عند التمرير</Txt>
        <Txt x={735} y={440} w={230} size={18} c="ink" at={2}>• فتح الصفحة الأولى في لمح البصر</Txt>
        <Txt x={735} y={485} size={20} c="blue" at={2}>سرعة LCP فائقة ⏱️</Txt>

        {/* Pillar 3: Minification */}
        <Box x={310} y={170} w={270} h={360} c="orange" at={3} />
        <Doodle x={445} y={235} icon="📦" size={75} c="orange" fill="orange" at={3} />
        <Txt x={445} y={305} size={28} c="orange" at={3}>٣ · تصغير الأكواد</Txt>
        <Txt x={445} y={360} w={230} size={18} c="ink" at={3}>• Minification لـ CSS و JS</Txt>
        <Txt x={445} y={400} w={230} size={18} c="ink" at={3}>• حذف المسافات والأسطر الفارغة</Txt>
        <Txt x={445} y={440} w={230} size={18} c="ink" at={3}>• تقليص حجم ملف الكود للنصف</Txt>
        <Txt x={445} y={485} size={20} c="orange" at={3}>style.min.css</Txt>

        {/* Pillar 4: Caching */}
        <Box x={20} y={170} w={270} h={360} c="purple" at={4} />
        <Doodle x={155} y={235} icon="💾" size={75} c="purple" fill="purple" at={4} />
        <Txt x={155} y={305} size={28} c="purple" at={4}>٤ · التخزين المؤقت</Txt>
        <Txt x={155} y={360} w={230} size={18} c="ink" at={4}>• Browser Caching</Txt>
        <Txt x={155} y={400} w={230} size={18} c="ink" at={4}>• حفظ الملفات الثابتة بجهاز الزائر</Txt>
        <Txt x={155} y={440} w={230} size={18} c="ink" at={4}>• فتح فوري في الزيارة التالية</Txt>
        <Txt x={155} y={485} size={20} c="purple" at={4}>Cache-Control: max-age</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1140} h={80} c="pink" fill="pink" size={21} tc="ink" at={5}>
          🚀 <b>النتيجة الإجمالية:</b> تطبيق هذه الحزمة يقلص حجم تحميل الصفحة بنسبة 85% ويجعل زمن التحميل أقل من ثانية واحدة!
        </Box>
      </Scene>
    ),
  },
  {
    id: 'cro-frictionless-ux', title: 'تحسين معدل التحويل وإزالة نقاط الاحتكاك (CRO)', scene: true,
    notes: (
      <>
        <p><b>تحسين معدل التحويل وإزالة نقاط الاحتكاك (CRO & Frictionless UX):</b></p>
        <p>كل حقل زائد وكل زر غير واضح يمثل "نقطة احتكاك" تجعل المستخدم يتردد ويهرب.</p>
        <p><b>استراتيجيات الـ CRO الناجحة:</b></p>
        <ul>
          <li><b>تقليص حقول الاستمارات:</b> الاقتصار على المعلومات الجوهرية فقط وتوفير التسجيل السريع.</li>
          <li><b>إبراز أزرار الدعوة للإجراء (CTA):</b> استخدام نصوص محفزة ("ابدأ التعلم مجاناً" بدلاً من "إرسال").</li>
          <li><b>توفير الأمان والطمأنينة:</b> إظهار شارات الأمان وضمان استرجاع الأموال وسياسة الخصوصية.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف تحول الزوار المترددين إلى مشتركين وعملاء دائمين؟">
          تحسين معدل التحويل (Conversion Rate Optimization - CRO)
        </Heading>

        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#1c1015', borderColor: '#e11d48' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-rose-400">⚠️ نقاط الاحتكاك المسببة للهروب (Friction Points)</span>
                <span className="pill text-xs font-bold bg-rose-950 text-rose-300 border-rose-700">تطرد الزوار</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• استمارات طويلة تطلب ٢٠ معلومة شخصية غير ضرورية.</li>
                <li>• إجبار المستخدم على إنشاء حساب وتفعيل إيميل قبل استعراض الخدمة.</li>
                <li>• أزرار تسجيل باهتة وصغيرة ومخفية في زاوية الصفحة.</li>
                <li>• غياب رسائل الطمأنينة وسياسة الأمان وإرجاع الأموال.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800 text-xs text-rose-300 font-bold">
              ❌ النتيجة: يغادر 70% من الزوار الصفحة دون إتمام الهدف.
            </div>
          </div>
        </Place>

        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1a18', borderColor: '#10b981' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-emerald-400">✨ الحلول التكرارية المحسنة (CRO Solutions)</span>
                <span className="pill text-xs font-bold bg-emerald-950 text-emerald-300 border-emerald-700">ترفع المبيعات</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• تقليص الاستمارة لـ 3 حقول فقط مع خيار التسجيل بنقرة واحدة بحساب Google.</li>
                <li>• إتاحة "الشراء كضيف" وإظهار شريط تقدم تسلسلي (Progress Bar).</li>
                <li>• زر CTA عريض وبارز بلون مشرق ونص محفز ("ابدأ مجاناً").</li>
                <li>• وضع شارات التقييم والضمان بجوار الزر لطمأنة الزائر.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 font-bold">
              🚀 النتيجة: مضاعفة معدل التحويل والاشتراكات بنسبة تفوق 200%!
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Box x={40} y={560} w={1140} h={80} c="green" fill="green" size={21} tc="ink" at={3}>
          💡 <b>القاعدة الذهبية:</b> في كل دورة تحسين تكرارية، ابحث عن الحقل أو الخطوة الأكثر إزعاجاً للمستخدم وتخلص منها فوراً.
        </Box>
      </Scene>
    ),
  },
];

