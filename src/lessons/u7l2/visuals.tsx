// Visual components and illustrations for Unit 7 Lesson 2: Computer Software & Hardware

/** 1. The 4-Layer Hierarchy Architecture (هرم طبقات الحاسوب) */
export const LayeredArchitectureVisual = ({ activeLayer }: { activeLayer?: number }) => {
  const layers = [
    { id: 4, name: 'المستخدم (User)', en: 'Human End-User', icon: '👤', color: '#ec4899', desc: 'يتفاعل مع التطبيقات لإنجاز المهام' },
    { id: 3, name: 'برامج التطبيقات (Application Software)', en: 'Apps: Word, Excel, Browsers', icon: '📱', color: '#3b82f6', desc: 'تعمل فوق نظام التشغيل لأداء وظائف محددة' },
    { id: 2, name: 'نظام التشغيل (Operating System - OS)', en: 'Windows, macOS, Android, iOS', icon: '⚙️', color: '#8b5cf6', desc: 'مسؤول عن الوظائف الأساسية وإدارة المهام والذاكرة والملفات' },
    { id: 1, name: 'برامج تشغيل الأجهزة (Device Drivers)', en: 'Hardware Translators & Controllers', icon: '🔌', color: '#10b981', desc: 'تتحكم في الاتصال والترجمة بين العتاد والبرمجيات' },
    { id: 0, name: 'العتاد المادي (Hardware)', en: 'CPU, RAM, Storage, Peripherals', icon: '💻', color: '#f59e0b', desc: 'الأجزاء الملموسة ووحدة الكمبيوتر الرئيسية والأجهزة الطرفية' },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-2.5 font-sans" dir="rtl">
      {layers.map((l) => {
        const isCurrent = activeLayer === undefined || activeLayer === l.id;
        return (
          <div
            key={l.id}
            style={{
              borderColor: l.color,
              backgroundColor: isCurrent ? `${l.color}15` : 'var(--surface-2)',
              opacity: isCurrent ? 1 : 0.45,
              transform: isCurrent ? 'scale(1.01)' : 'scale(0.99)',
              transition: 'all 0.25s ease',
            }}
            className="w-full max-w-2xl p-3.5 rounded-2xl border-2 flex items-center justify-between gap-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)]">
                {l.icon}
              </span>
              <div>
                <h4 className="m-0 text-base font-extrabold" style={{ color: l.color }}>
                  {l.name}
                </h4>
                <p className="m-0 text-xs text-[var(--muted)] mt-0.5">{l.desc}</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[var(--surface-1)] border border-[var(--border)] text-[var(--text)] shrink-0">
              {l.en}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/** 2. The 3 Core Management Functions of the Operating System (وظائف إدارة نظام التشغيل الثلاث) */
export const OsTrioVisualCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto font-sans text-right" dir="rtl">
      {/* 1. Task Management */}
      <div className="card p-5 rounded-2xl border-2 border-[var(--pen-blue)] bg-[var(--surface-2)] flex flex-col gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🏃‍♂️</span>
          <div>
            <h4 className="m-0 text-lg font-black text-[var(--pen-blue)]">١ · إدارة المهام</h4>
            <span className="text-xs text-[var(--muted)] font-mono">Task Management</span>
          </div>
        </div>
        <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
          تنظيم وتوزيع وقت المعالج (CPU) بين البرامج المختلفة التي تعمل في نفس الوقت (Multitasking) لمنع تجمد الحاسوب.
        </p>
        <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-between text-xs">
          <span className="text-[var(--muted)]">مهمة نشطة:</span>
          <span className="font-bold text-[var(--pen-blue)]">Word + Chrome + الموسيقى</span>
        </div>
      </div>

      {/* 2. Memory Management */}
      <div className="card p-5 rounded-2xl border-2 border-[var(--pen-purple)] bg-[var(--surface-2)] flex flex-col gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🧠</span>
          <div>
            <h4 className="m-0 text-lg font-black text-[var(--pen-purple)]">٢ · إدارة الذاكرة</h4>
            <span className="text-xs text-[var(--muted)] font-mono">Memory Management</span>
          </div>
        </div>
        <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
          تخصيص مساحات في الذاكرة الرئيسية (RAM) لكل برنامج نشط، وتحريرها فور إغلاقه لمنع تداخل أو انهيار البرامج.
        </p>
        <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-between text-xs">
          <span className="text-[var(--muted)]">سعة RAM المخصصة:</span>
          <span className="font-bold text-[var(--pen-purple)]">حماية العناوين وحجز المساحات</span>
        </div>
      </div>

      {/* 3. File Management */}
      <div className="card p-5 rounded-2xl border-2 border-[var(--pen-green)] bg-[var(--surface-2)] flex flex-col gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📁</span>
          <div>
            <h4 className="m-0 text-lg font-black text-[var(--pen-green)]">٣ · إدارة الملفات</h4>
            <span className="text-xs text-[var(--muted)] font-mono">File Management</span>
          </div>
        </div>
        <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
          تنظيم وحفظ الملفات والمجلدات في وسائط التخزين الثانوية (SSD / HDD)، وإدارة حقوق القراءة والكتابة والبحث.
        </p>
        <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-between text-xs">
          <span className="text-[var(--muted)]">الهيكل التخزيني:</span>
          <span className="font-bold text-[var(--pen-green)]">شجرة المجلدات والمسارات C:\</span>
        </div>
      </div>
    </div>
  );
};

/** 3. Device Driver Translator Bridge SVG (جسر برنامج تشغيل الجهاز) */
export const DeviceDriverBridgeSvg = () => (
  <svg viewBox="0 0 760 220" className="w-full max-w-3xl h-auto" style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.25))' }}>
    {/* Background Board */}
    <rect x="10" y="10" width="740" height="200" rx="16" fill="rgba(30, 41, 59, 0.75)" stroke="var(--border)" strokeWidth="2" />

    {/* Step 1: App / OS Box */}
    <g transform="translate(30, 35)">
      <rect width="190" height="150" rx="12" fill="rgba(59, 130, 246, 0.15)" stroke="var(--pen-blue)" strokeWidth="2" />
      <text x="95" y="38" fill="var(--pen-blue)" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
        برنامج التطبيق + الـ OS
      </text>
      <text x="95" y="65" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        Application + OS
      </text>
      <rect x="20" y="85" width="150" height="42" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
      <text x="95" y="112" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        &quot;Print(Report.pdf)&quot;
      </text>
    </g>

    {/* Arrow 1 to Driver */}
    <g transform="translate(230, 95)">
      <line x1="5" y1="15" x2="65" y2="15" stroke="var(--pen-blue)" strokeWidth="3" strokeDasharray="6 4" />
      <polygon points="65,15 53,9 53,21" fill="var(--pen-blue)" />
      <text x="35" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="Cairo, sans-serif">
        أمر برمجي عام
      </text>
    </g>

    {/* Step 2: Device Driver Bridge */}
    <g transform="translate(310, 25)">
      <rect width="170" height="170" rx="14" fill="rgba(16, 185, 129, 0.18)" stroke="var(--pen-green)" strokeWidth="2.5" />
      <text x="85" y="32" fill="var(--pen-green)" fontSize="15" fontWeight="black" textAnchor="middle" fontFamily="Cairo, sans-serif">
        برنامج تشغيل الجهاز
      </text>
      <text x="85" y="52" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontFamily="monospace">
        Device Driver 🔌
      </text>

      {/* Translation Cog Visual */}
      <circle cx="85" cy="95" r="28" fill="none" stroke="var(--pen-green)" strokeWidth="3" strokeDasharray="5 3" />
      <text x="85" y="100" fill="#34d399" fontSize="18" textAnchor="middle">
        ⚙️
      </text>

      <rect x="15" y="132" width="140" height="26" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
      <text x="85" y="149" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
        مترجم الإشارات الدقيقة
      </text>
    </g>

    {/* Arrow 2 to Hardware */}
    <g transform="translate(490, 95)">
      <line x1="5" y1="15" x2="65" y2="15" stroke="var(--pen-green)" strokeWidth="3" />
      <polygon points="65,15 53,9 53,21" fill="var(--pen-green)" />
      <text x="35" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="Cairo, sans-serif">
        نبضات كهربائية
      </text>
    </g>

    {/* Step 3: Hardware Peripheral (Printer) */}
    <g transform="translate(570, 35)">
      <rect width="160" height="150" rx="12" fill="rgba(245, 158, 11, 0.15)" stroke="var(--pen-orange)" strokeWidth="2" />
      <text x="80" y="38" fill="var(--pen-orange)" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
        الجهاز المادي
      </text>
      <text x="80" y="65" fill="#fcd34d" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        Hardware: Printer 🖨️
      </text>

      {/* Mini Printer Drawing */}
      <rect x="35" y="80" width="90" height="40" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="50" y="70" width="60" height="14" rx="2" fill="#cbd5e1" />
      <rect x="50" y="112" width="60" height="18" rx="1" fill="#f8fafc" />
      <line x1="55" y1="120" x2="85" y2="120" stroke="#0284c7" strokeWidth="1.5" />
      <circle cx="112" cy="98" r="3" fill="#22c55e" />
    </g>
  </svg>
);

/** 4. Hardware vs Software Metaphor (الجسد والروح) */
export const HardwareVsSoftwareSvg = () => (
  <svg viewBox="0 0 680 200" className="w-full max-w-2xl h-auto" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
    <rect x="10" y="10" width="660" height="180" rx="14" fill="rgba(30, 41, 59, 0.7)" stroke="var(--border)" strokeWidth="2" />

    {/* Left: Hardware (The Body) */}
    <g transform="translate(35, 30)">
      <rect width="285" height="140" rx="12" fill="rgba(245, 158, 11, 0.12)" stroke="var(--pen-orange)" strokeWidth="2" />
      <text x="142" y="32" fill="var(--pen-orange)" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
        العتاد والأجهزة (Hardware)
      </text>
      <text x="142" y="55" fill="#fcd34d" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        المكونات المادية الملموسة (كالجسد 🤖)
      </text>
      <text x="142" y="85" fill="var(--text)" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        • المعالج CPU والذاكرة RAM
      </text>
      <text x="142" y="108" fill="var(--text)" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        • القرص الصلب والشاشة والأجهزة الطرفية
      </text>
      <text x="142" y="128" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo, sans-serif">
        &quot;بدون برمجيات = حديد لا نفع منه!&quot;
      </text>
    </g>

    {/* Center Link Plus */}
    <g transform="translate(330, 85)">
      <circle cx="10" cy="15" r="18" fill="var(--surface-1)" stroke="var(--border)" strokeWidth="2" />
      <text x="10" y="21" fill="var(--primary)" fontSize="18" fontWeight="bold" textAnchor="middle">
        +
      </text>
    </g>

    {/* Right: Software (The Soul) */}
    <g transform="translate(360, 30)">
      <rect width="285" height="140" rx="12" fill="rgba(59, 130, 246, 0.12)" stroke="var(--pen-blue)" strokeWidth="2" />
      <text x="142" y="32" fill="var(--pen-blue)" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
        البرمجيات (Software)
      </text>
      <text x="142" y="55" fill="#93c5fd" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        البرامج والبيانات التي تمنحه الحياة (كالروح ⚡)
      </text>
      <text x="142" y="85" fill="var(--text)" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        • برمجيات النظام (نظام التشغيل OS)
      </text>
      <text x="142" y="108" fill="var(--text)" fontSize="12" textAnchor="middle" fontFamily="Cairo, sans-serif">
        • برامج تشغيل الأجهزة وبرامج التطبيقات
      </text>
      <text x="142" y="128" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="Cairo, sans-serif">
        &quot;بدون عتاد = أفكار لا تجد مكاناً لتنفيذها!&quot;
      </text>
    </g>
  </svg>
);

/** 5. Application Categories Grid Visual (أصناف برامج التطبيقات المقررة) */
export const AppCategoriesVisual = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl mx-auto font-sans text-right" dir="rtl">
    <div className="card p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col items-center text-center gap-1.5">
      <span className="text-3xl">📝</span>
      <h5 className="m-0 text-sm font-bold text-[var(--pen-blue)]">معالجة النصوص</h5>
      <span className="text-[11px] text-[var(--muted)]">Document Processing</span>
      <p className="text-[10px] text-[var(--text)] m-0 mt-1">كتابة التقارير والمستندات وتنسيق النصوص (مثل Word)</p>
    </div>

    <div className="card p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col items-center text-center gap-1.5">
      <span className="text-3xl">📊</span>
      <h5 className="m-0 text-sm font-bold text-[var(--pen-green)]">الجداول الحسابية</h5>
      <span className="text-[11px] text-[var(--muted)]">Spreadsheet Software</span>
      <p className="text-[10px] text-[var(--text)] m-0 mt-1">الحسابات والجداول والرسوم البيانية (مثل Excel)</p>
    </div>

    <div className="card p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col items-center text-center gap-1.5">
      <span className="text-3xl">🌐</span>
      <h5 className="m-0 text-sm font-bold text-[var(--pen-purple)]">متصفحات الويب</h5>
      <span className="text-[11px] text-[var(--muted)]">Web Browsers</span>
      <p className="text-[10px] text-[var(--text)] m-0 mt-1">استعراض مواقع الإنترنت والبحث (مثل Chrome, Edge)</p>
    </div>

    <div className="card p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col items-center text-center gap-1.5">
      <span className="text-3xl">🎨</span>
      <h5 className="m-0 text-sm font-bold text-[var(--pen-orange)]">التصميم والوسائط</h5>
      <span className="text-[11px] text-[var(--muted)]">Media & Design</span>
      <p className="text-[10px] text-[var(--text)] m-0 mt-1">الرسم وتحرير الصور وتشغيل الفيديوهات والألعاب</p>
    </div>
  </div>
);
