// Board scenes · part 3 (Application Software, Hierarchical Architecture, Ending summary)
import type { FrameDef } from '../../board/types';
import {
  Box, Heading, Note, Place, Scene,
} from '../../sketch/Sketch';
import { AppCategoriesVisual, LayeredArchitectureVisual } from './visuals';

export const part3: FrameDef[] = [
  {
    id: 'application-software',
    title: '٦ · برامج التطبيقات (Application Software)',
    scene: true,
    notes: (
      <>
        <p><b>برامج التطبيقات (Application Software):</b></p>
        <p>تُعرف ببساطة باسم &quot;برنامج التطبيق&quot; أو &quot;التطبيقات&quot; (Apps).</p>
        <p><b>التعريف المنهجي:</b> هي البرامج التي تعمل <b>فوق</b> برنامج النظام، وتُصمم لأداء وظائف ومهام محددة للمستخدم.</p>
        <p><b>أهم أصنافها المقررة:</b></p>
        <ol>
          <li><b>برامج معالجة النصوص (Document Processing Software):</b> لإنشاء وتنسيق المستندات والتقارير والبحوث (مثل Microsoft Word, Google Docs).</li>
          <li><b>برامج الجداول الحسابية (Spreadsheet Software):</b> لإجراء العمليات الحسابية والمالية والجداول الإحصائية والرسوم البيانية (مثل Microsoft Excel, Google Sheets).</li>
          <li><b>متصفحات الويب وتطبيقات التواصل والوسائط:</b> مثل Chrome، مشغلات الفيديو، وبرامج التصميم الجرافيكي.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>٦ · برامج التطبيقات (Application Software) 📱📝</Heading>

        <Box x={150} y={130} w={980} h={85} c="blue" fill="blue" size={26} tc="ink">
          💡 برامج التطبيقات هي البرامج المصممة لمساعدة المستخدم على إنجاز أعماله اليومية والتعليمية.
        </Box>

        <Place x={150} y={235} w={980} h={260} at={1}>
          <AppCategoriesVisual />
        </Place>

        <Note x={150} y={515} w={980} h={105} color="yellow" at={2}>
          ⚡ <b>القاعدة الجوهرية للامتحان:</b>
          <br />
          <b>لا يمكن لبرامج التطبيقات أن تعمل بمفردها بدون برنامج النظام (نظام التشغيل)!</b>
          <br />
          التطبيق يحتاج لنظام التشغيل ليطلب منه: حجز مكان بالذاكرة RAM، جدولة وقت المعالج، وقراءة وحفظ الملفات في القرص الصلب.
        </Note>
      </Scene>
    ),
  },

  {
    id: 'layered-hierarchy',
    title: '٧ · المعمارية الهرمية وتكامل الطبقات',
    scene: true,
    notes: (
      <>
        <p><b>هرم معمارية الحاسوب المتكاملة:</b></p>
        <p>تتكامل مكونات الحاسوب المادية والبرمجية في طبقات هرمية متسلسلة:</p>
        <ol>
          <li><b>الطبقة 0 (العتاد Hardware):</b> الأساس المادي السفلي (المعالج، الذاكرة، التخزين، الأجهزة الطرفية).</li>
          <li><b>الطبقة 1 (برامج التشغيل Drivers):</b> المترجمات المتخصصة للتخاطب مع العتاد.</li>
          <li><b>الطبقة 2 (نظام التشغيل OS):</b> العقل المنظم والمشرف على المهام والذاكرة والملفات.</li>
          <li><b>الطبقة 3 (برامج التطبيقات Apps):</b> الأدوات التي تنجز رغبات ومهام المستخدم.</li>
          <li><b>الطبقة 4 (المستخدم User):</b> في قمة الهرم، يتفاعل مع واجهات التطبيقات بسهولة ويسر.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>٧ · هرم معمارية الطبقات المتكاملة للحاسوب 🏛️</Heading>

        <Place x={150} y={130} w={980} h={370} at={0}>
          <LayeredArchitectureVisual />
        </Place>

        <Note x={150} y={520} w={980} h={100} color="green" at={1}>
          🎯 <b>ملخص تدفق الأوامر:</b>
          المستخدم يضغط داخل <b>التطبيق</b> ⬅️ التطبيق يطلب من <b>نظام التشغيل</b> ⬅️ نظام التشغيل يوجه <b>برنامج التشغيل</b> ⬅️ برنامج التشغيل يرسل نبضات للـ <b>العتاد المادي</b>!
        </Note>
      </Scene>
    ),
  },
];

export const ending: FrameDef = {
  id: 'ending-summary',
  title: '🏁 خلاصة المراجعة الذهبية',
  h: 880,
  notes: (
    <p>
      ملخص شامل لأهم المصطلحات والقواعد الذهبية لدرس برامج الكمبيوتر لمراجعتها قبل حل أسئلة التقييم وماراثون الامتحانات.
    </p>
  ),
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto text-right font-sans" dir="rtl">
      <div className="p-4 rounded-2xl bg-[var(--surface-2)] border-2 border-[var(--primary)] flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-[var(--primary)] m-0">
            🏁 بطاقة المراجعة الذهبية · درس برامج الكمبيوتر (Software & Hardware)
          </h2>
          <p className="text-xs text-[var(--muted)] m-0 mt-1">
            الصف الأول الثانوي · الوحدة السابعة: الكمبيوترات · الدرس الثاني
          </p>
        </div>
        <span className="text-4xl">🏆</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1.5">
          <span className="text-sm font-extrabold text-[var(--pen-orange)]">
            ١ · الأجهزة والعتاد (Hardware):
          </span>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            جميع المكونات المادية الملموسة مثل وحدة الكمبيوتر الرئيسية (CPU, RAM, Storage) والأجهزة الطرفية (الشاشة، الفأرة، الطابعة).
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1.5">
          <span className="text-sm font-extrabold text-[var(--pen-blue)]">
            ٢ · البرمجيات (Software):
          </span>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            البرامج والبيانات التي تعمل فوق العتاد المادي؛ تنقسم إلى برمجيات النظام (لتشغيل العتاد) وبرامج التطبيقات (لأداء مهام المستخدم).
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1.5">
          <span className="text-sm font-extrabold text-[var(--pen-purple)]">
            ٣ · نظام التشغيل (Operating System - OS):
          </span>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            برنامج النظام المسؤول عن الوظائف الأساسية، ويمتلك ٣ وظائف إدارة: <b>إدارة المهام (Task)</b>، <b>إدارة الذاكرة (Memory)</b>، و<b>إدارة الملفات (File)</b>. أمثلته: Windows, macOS, Android, iOS.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1.5">
          <span className="text-sm font-extrabold text-[var(--pen-green)]">
            ٤ · برنامج تشغيل الجهاز (Device Driver):
          </span>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            برنامج يتحكم في الاتصال والترجمة بين جهاز متصل بالكمبيوتر والبرمجيات ونظام التشغيل؛ يُصنف كنوع من برمجيات النظام.
          </p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/30 flex items-start gap-2.5 text-xs text-[var(--text)] leading-relaxed font-semibold">
        <span className="text-xl shrink-0">💡</span>
        <div>
          <span className="font-extrabold text-amber-300 block mb-0.5">
            القاعدة الذهبية المعتمدة في امتحانات الوزارة:
          </span>
          <span>
            <b>لا يمكن لبرامج التطبيقات أن تعمل بدون برنامج النظام (نظام التشغيل).</b> البرامج التطبيقية مثل Word و Excel تحتاج حتماً لنظام التشغيل للتخاطب مع المعالج، حجز الذاكرة RAM، والوصول للأجهزة والملفات.
          </span>
        </div>
      </div>
    </div>
  ),
};
