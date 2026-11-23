// Board scenes · part 2 (Operating System, 3 Core Management Functions, Device Drivers)
import type { FrameDef } from '../../board/types';
import {
  Box, Heading, Note, Place, Scene,
} from '../../sketch/Sketch';
import { DeviceDriverBridgeSvg, OsTrioVisualCard } from './visuals';

export const part2: FrameDef[] = [
  {
    id: 'operating-system-trio',
    title: '٣ · نظام التشغيل (OS) ووظائف الإدارة الثلاث',
    scene: true,
    notes: (
      <>
        <p><b>نظام التشغيل (Operating System - OS):</b></p>
        <p>هو نوع من برامج النظام مسؤول عن الوظائف الأساسية للكمبيوتر. يمتلك وظائف إدارة حاسمة:</p>
        <ol>
          <li><b>إدارة المهام (Task Management):</b> تنظيم العمليات المتعددة التي تعمل في نفس الوقت (Multitasking) وتوزيع وقت المعالج CPU بينها بالتساوي دون تجميد الجهاز.</li>
          <li><b>إدارة الذاكرة (Memory Management):</b> تخصيص مساحات في الذاكرة الرئيسية (RAM) لكل برنامج نشط، وحماية نطاق كل برنامج، وتحرير المساحة فور إغلاق البرنامج.</li>
          <li><b>إدارة الملفات (File Management):</b> تنظيم الملفات والمجلدات وتحديد المسارات التخزينية على الأقراص الصلبة (SSD / HDD) والتحكم في حقوق القراءة والكتابة والبحث.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>٣ · نظام التشغيل (OS) ووظائف الإدارة الثلاث الكبرى ⚙️</Heading>

        <Box x={150} y={130} w={980} h={80} c="purple" fill="purple" size={24} tc="ink">
          💡 نظام التشغيل (OS) هو المسؤول عن الوظائف الأساسية للكمبيوتر، ويمتلك ٣ وظائف إدارة رئيسية:
        </Box>

        <Place x={150} y={225} w={980} h={280} at={1}>
          <OsTrioVisualCard />
        </Place>

        <Note x={150} y={535} w={980} h={95} color="yellow" at={2}>
          ⚡ <b>سؤال امتحاني مكرر:</b> ما هي وظائف إدارة نظام التشغيل الثلاث؟
          <br />
          الإجابة النموذجية المباشرة: <b>١) إدارة المهام (Task)</b>، <b>٢) إدارة الذاكرة (Memory)</b>، و<b>٣) إدارة الملفات (File)</b>.
        </Note>
      </Scene>
    ),
  },

  {
    id: 'device-drivers',
    title: '٤ · برامج تشغيل الأجهزة (Device Drivers)',
    scene: true,
    notes: (
      <>
        <p><b>برامج تشغيل الأجهزة (Device Drivers):</b></p>
        <p>تُعرف ببساطة باسم &quot;برنامج التشغيل&quot; (Driver)، وهي نوع من برمجيات النظام.</p>
        <p><b>وظيفتها الجوهرية:</b> التحكم في الاتصال بين جهاز متصل بالحاسوب (مثل الطابعة، كارت الشاشة، ذراع التحكم، الماسح الضوئي) والبرمجيات ونظام التشغيل.</p>
        <p><b>لماذا نحتاجها؟</b> لأن الشركات تصنع آلاف الطابعات والكروت المختلفة، ولا يمكن لنظام التشغيل أن يحفظ التفاصيل الميكانيكية والكهربائية لكل طابعة في العالم؛ فيأتي برنامج التشغيل كمترجم رسمي خاص بهذا الجهاز ليحول أوامر النظام العامة إلى نبضات يفهمها العتاد بدقة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>٤ · برامج تشغيل الأجهزة (Device Drivers) 🔌</Heading>

        <Place x={150} y={130} w={980} h={230} at={0}>
          <DeviceDriverBridgeSvg />
        </Place>

        <Box x={150} y={380} w={475} h={155} c="green" fill="green" at={1}>
          <div className="flex flex-col gap-1.5 text-right font-sans p-1">
            <span className="font-extrabold text-base text-[var(--pen-green)]">
              التعريف الوزاري لبرنامج التشغيل:
            </span>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
              هو برنامج يتحكم في الاتصال بين جهاز متصل وبرنامج على كمبيوتر، ويُعرف ببساطة باسم &quot;برنامج التشغيل&quot; (Driver).
            </p>
            <span className="text-[11px] text-[var(--muted)] font-medium">
              يُصنف كنوع من <b>برمجيات النظام (System Software)</b>.
            </span>
          </div>
        </Box>

        <Box x={655} y={380} w={475} h={155} c="blue" fill="blue" at={2}>
          <div className="flex flex-col gap-1.5 text-right font-sans p-1">
            <span className="font-extrabold text-base text-[var(--pen-blue)]">
              ماذا يحدث لو غاب برنامج التشغيل؟
            </span>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
              تظهر رسالة &quot;جهاز غير معروف (Unknown Device)&quot; ⚠️؛ فالنظام يستشعر وجود السلك ولكن لا يعرف لغة التخاطب مع الجهاز.
            </p>
            <span className="text-[11px] text-[var(--safe)] font-bold">
              ✅ بمجرد تثبيت الـ Driver يتعرف النظام على وظائف الجهاز فوراً.
            </span>
          </div>
        </Box>

        <Note x={150} y={555} w={980} h={85} color="blue" at={3}>
          💡 <b>تشبيه المترجم الفوري:</b> نظام التشغيل يتكلم لغة عامة، والطابعة تتكلم لغة إلكترونية خاصة بها، وبرنامج التشغيل (Device Driver) هو المترجم المعتمد الجالس بينهما!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'os-platforms',
    title: '٥ · أنظمة التشغيل في الحواسيب والهواتف الذكية',
    scene: true,
    notes: (
      <>
        <p><b>تنوع أنظمة التشغيل حسب بيئة الجهاز:</b></p>
        <p>يوضح المنهج المقرر أن أنظمة التشغيل لا تقتصر على الحواسيب الشخصية بل تمتد إلى جميع الأجهزة الذكية:</p>
        <ol>
          <li><b>أجهزة الكمبيوتر المكتبية والمحمولة (Desktop & Laptops):</b> أشهرها نظام <b>Windows</b> المطور من شركة Microsoft، ونظام <b>macOS</b> المطور من شركة Apple لأجهزة Mac، بالإضافة لنظام Linux.</li>
          <li><b>الهواتف الذكية والأجهزة اللوحية (Smartphones & Tablets):</b> لا يمكن أن تعمل بدون نظام تشغيل؛ فأجهزة iPhone تعمل بنظام <b>iOS</b>، بينما تعمل بقية الهواتف الذكية بنظام <b>Android OS</b>.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>٥ · عائلات أنظمة التشغيل: الحواسيب والهواتف الذكية 📱💻</Heading>

        <Box x={150} y={130} w={475} h={260} c="blue" at={1}>
          <div className="flex flex-col gap-2 text-right font-sans p-2">
            <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2">
              <span className="text-2xl">💻</span>
              <span className="font-black text-base text-[var(--pen-blue)]">
                أنظمة تشغيل الحواسيب (Desktop OS)
              </span>
            </div>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
              مخصصة للتعامل مع الفأرة ولوحة المفاتيح والمهام الإنتاجية المتعددة والشاشات الكبيرة:
            </p>
            <div className="p-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1 text-xs">
              <span>• <b className="text-[var(--pen-blue)]">Windows:</b> النظام الأكثر انتشاراً حول العالم.</span>
              <span>• <b className="text-[var(--pen-purple)]">macOS:</b> النظام المخصص لحواسيب شركة Apple.</span>
              <span>• <b className="text-[var(--pen-green)]">Linux:</b> نظام مفتوح المصدر شائع بالسيرفرات.</span>
            </div>
          </div>
        </Box>

        <Box x={655} y={130} w={475} h={260} c="green" at={2}>
          <div className="flex flex-col gap-2 text-right font-sans p-2">
            <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2">
              <span className="text-2xl">📱</span>
              <span className="font-black text-base text-[var(--pen-green)]">
                أنظمة تشغيل الهواتف الذكية (Mobile OS)
              </span>
            </div>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
              مخصصة لشاشات اللمس وتوفير البطارية وإدارة مستشعرات الكاميرا والـ GPS:
            </p>
            <div className="p-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1 text-xs">
              <span>• <b className="text-[var(--pen-green)]">Android OS:</b> النظام المعتمد لأغلب الهواتف الذكية.</span>
              <span>• <b className="text-[var(--pen-blue)]">iOS:</b> نظام التشغيل المخصص لأجهزة iPhone.</span>
            </div>
            <span className="text-[11px] text-[var(--pen-orange)] font-bold">
              ⚠️ تأكيد المنهج: &quot;الهواتف الذكية مزودة حتماً بنظام تشغيل&quot;.
            </span>
          </div>
        </Box>

        <Note x={150} y={420} w={980} h={100} color="yellow" at={3}>
          💡 <b>تصحيح مفهوم خاطئ من تدريبات المنهج:</b> العبارة التي تقول &quot;الهواتف الذكية لا تأتي مجهزة بنظام تشغيل&quot; هي عبارة <b>خاطئة تماماً</b>؛ لأن الهاتف بدون نظام تشغيل مثل Android أو iOS لن يستجيب للمس ولا يمكنه تشغيل أي تطبيق إطلاقاً!
        </Note>
      </Scene>
    ),
  },
];
