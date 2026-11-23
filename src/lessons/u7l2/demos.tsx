import { useState } from 'react';
import { arNum } from '../../kit/blocks';

// =============================================================================
// Lab 1: محاكي طبقات الحاسوب والاتصال الهرمي التفاعلي (System Layers Simulator)
// =============================================================================
export function SystemLayersSimulator() {
  const [scenario, setScenario] = useState<'app_launch' | 'print' | 'save_file' | 'no_os'>('app_launch');
  const [currentStep, setCurrentStep] = useState(0);

  const SCENARIOS = {
    app_launch: {
      title: '🚀 تشغيل تطبيق معالجة النصوص (Word)',
      steps: [
        { layer: 4, label: 'المستخدم (User)', desc: 'ينقر مرتين بالفأرة على أيقونة تطبيق Word لفتحه.', icon: '👤', color: '#ec4899' },
        { layer: 2, label: 'نظام التشغيل (OS)', desc: 'يستقبل إشارة النقر، ويفحص وجود ملف البرنامج في التخزين (إدارة الملفات).', icon: '⚙️', color: '#8b5cf6' },
        { layer: 0, label: 'العتاد (Storage / SSD)', desc: 'يقرأ كود برنامج Word من القرص الصلب التخزيني بسرعة.', icon: '💾', color: '#f59e0b' },
        { layer: 2, label: 'نظام التشغيل (OS)', desc: 'يحجز مساحة شاغرة في RAM ويجدول وقت المعالج (إدارة الذاكرة والمهام).', icon: '⚙️', color: '#8b5cf6' },
        { layer: 0, label: 'العتاد (RAM + CPU)', desc: 'المعالج ينفذ تعليمات البداية، ويتم رسم الواجهة على الشاشة.', icon: '🧠', color: '#f59e0b' },
        { layer: 3, label: 'برنامج التطبيق (Word)', desc: 'تظهر واجهة البرنامج جاهزة لبدء كتابة المستند وحفظ الأفكار!', icon: '📝', color: '#3b82f6' },
      ],
    },
    print: {
      title: '🖨️ طباعة مستند عبر الطابعة المادية',
      steps: [
        { layer: 4, label: 'المستخدم (User)', desc: 'يضغط أمر "طباعة" داخل برنامج معالجة النصوص.', icon: '👤', color: '#ec4899' },
        { layer: 3, label: 'برنامج التطبيق (Word)', desc: 'يصيغ طلب طباعة برمجي عام ويرسله فوراً لنظام التشغيل.', icon: '📝', color: '#3b82f6' },
        { layer: 2, label: 'نظام التشغيل (OS)', desc: 'يستلم أمر الطباعة العام ويوجهه إلى برنامج تشغيل الطابعة المعتمد.', icon: '⚙️', color: '#8b5cf6' },
        { layer: 1, label: 'برنامج التشغيل (Driver)', desc: 'يترجم كود النص والألوان إلى أوامر ميكانيكية دقيقة لرأس الطباعة.', icon: '🔌', color: '#10b981' },
        { layer: 0, label: 'العتاد المادي (Printer)', desc: 'تستلم الطابعة النبضات عبر كابل USB وتطبع الورقة بنجاح!', icon: '🖨️', color: '#f59e0b' },
      ],
    },
    save_file: {
      title: '💾 حفظ ملف عمل في القرص الصلب',
      steps: [
        { layer: 4, label: 'المستخدم (User)', desc: 'يضغط على أيقونة الحفظ (Ctrl + S) داخل التطبيق.', icon: '👤', color: '#ec4899' },
        { layer: 3, label: 'برنامج التطبيق (App)', desc: 'يطلب من نظام التشغيل توفير مساحة وحفظ البيانات باسم محدد.', icon: '📱', color: '#3b82f6' },
        { layer: 2, label: 'نظام التشغيل (OS)', desc: 'يقوم بإنشاء سجل في جدول الملفات وتحديد مسار التخزين (إدارة الملفات).', icon: '⚙️', color: '#8b5cf6' },
        { layer: 0, label: 'العتاد (SSD Storage)', desc: 'يتم كتابة بتات البيانات وحفظها دائماً في خلايا الذاكرة الصلبة.', icon: '💾', color: '#f59e0b' },
      ],
    },
    no_os: {
      title: '⚠️ ماذا يحدث إذا حاولنا تشغيل تطبيق بدون نظام تشغيل؟',
      steps: [
        { layer: 4, label: 'المستخدم (User)', desc: 'يحاول تشغيل برنامج معالجة النصوص مباشرة على العتاد المادي الخالي من الـ OS.', icon: '👤', color: '#ec4899' },
        { layer: 3, label: 'برنامج التطبيق (App)', desc: 'يبحث التطبيق عن خدمات نظام التشغيل (حجز الذاكرة، إدارة الملفات، الشاشة)...', icon: '❌', color: '#ef4444' },
        { layer: 0, label: 'العتاد المادي (Hardware)', desc: 'عجز كامل! العتاد لا يفهم كود التطبيق المباشر ولا يوجد وسيط لإدارته، فيتوقف النظام تماماً!', icon: '🛑', color: '#ef4444' },
      ],
    },
  };

  const activeScenario = SCENARIOS[scenario];
  const maxStep = activeScenario.steps.length - 1;
  const currentStepData = activeScenario.steps[currentStep] || activeScenario.steps[0];

  const handleScenarioChange = (s: typeof scenario) => {
    setScenario(s);
    setCurrentStep(0);
  };

  return (
    <div className="card p-5 rounded-2xl border-2 border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-5 text-right font-sans" dir="rtl">
      {/* Top Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div>
          <h3 className="text-lg font-black text-[var(--primary)] m-0">
            🧪 محاكي تدفق الأوامر عبر طبقات الحاسوب الهرمية
          </h3>
          <p className="text-xs text-[var(--muted)] m-0 mt-0.5">
            اختر سيناريو واقعي وشاهد كيف تتواصل الطبقات (المستخدم ⬅️ التطبيق ⬅️ نظام التشغيل ⬅️ برنامج التشغيل ⬅️ العتاد)
          </p>
        </div>

        {/* Scenario buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleScenarioChange('app_launch')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              scenario === 'app_launch' ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            🚀 تشغيل تطبيق
          </button>
          <button
            onClick={() => handleScenarioChange('print')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              scenario === 'print' ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            🖨️ طباعة مستند
          </button>
          <button
            onClick={() => handleScenarioChange('save_file')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              scenario === 'save_file' ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            💾 حفظ ملف
          </button>
          <button
            onClick={() => handleScenarioChange('no_os')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              scenario === 'no_os' ? 'bg-red-600 text-white border-red-500' : 'bg-[var(--surface-1)] text-red-400 border-red-500/30'
            }`}
          >
            ⚠️ بدون نظام تشغيل!
          </button>
        </div>
      </div>

      {/* Main Interactive Stage: Layers + Step Viewer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* The 5 Layers Column */}
        <div className="md:col-span-6 flex flex-col gap-2">
          {[
            { id: 4, name: 'المستخدم (User)', en: 'User Interface', icon: '👤', color: '#ec4899' },
            { id: 3, name: 'برامج التطبيقات (Application Software)', en: 'Word, Excel, Chrome', icon: '📱', color: '#3b82f6' },
            { id: 2, name: 'نظام التشغيل (Operating System)', en: 'Windows, macOS, Android', icon: '⚙️', color: '#8b5cf6' },
            { id: 1, name: 'برامج تشغيل الأجهزة (Device Drivers)', en: 'Hardware Translators', icon: '🔌', color: '#10b981' },
            { id: 0, name: 'العتاد المادي (Hardware)', en: 'CPU, RAM, Storage, Devices', icon: '💻', color: '#f59e0b' },
          ].map((layer) => {
            const isActive = currentStepData.layer === layer.id;
            return (
              <div
                key={layer.id}
                style={{
                  borderColor: isActive ? layer.color : 'var(--border)',
                  backgroundColor: isActive ? `${layer.color}25` : 'var(--surface-1)',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isActive ? `0 0 16px ${layer.color}40` : 'none',
                  transition: 'all 0.3s ease',
                }}
                className="p-3 rounded-xl border-2 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{layer.icon}</span>
                  <div>
                    <span className="font-extrabold text-xs sm:text-sm block" style={{ color: isActive ? layer.color : 'var(--text)' }}>
                      {layer.name}
                    </span>
                    <span className="text-[10px] text-[var(--muted)] font-mono">{layer.en}</span>
                  </div>
                </div>

                {isActive && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full text-white animate-pulse"
                    style={{ backgroundColor: layer.color }}
                  >
                    نشط الآن ⚡
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Step Detail Card */}
        <div className="md:col-span-6 flex flex-col gap-4 p-5 rounded-2xl bg-[var(--surface-1)] border-2 border-[var(--border)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-2.5">
            <span className="text-xs font-black text-[var(--muted)]">
              الخطوة {arNum(currentStep + 1)} من {arNum(maxStep + 1)}
            </span>
            <span
              className="text-xs font-extrabold px-2.5 py-1 rounded-lg text-white"
              style={{ backgroundColor: currentStepData.color }}
            >
              الطبقة: {currentStepData.label}
            </span>
          </div>

          <div className="flex items-start gap-3 my-2">
            <span className="text-4xl p-2.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]">
              {currentStepData.icon}
            </span>
            <div className="flex-1">
              <h4 className="m-0 text-base font-extrabold text-[var(--text)]">
                {currentStepData.label}
              </h4>
              <p className="m-0 text-xs sm:text-sm text-[var(--text)] mt-1.5 leading-relaxed font-medium">
                {currentStepData.desc}
              </p>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
            <button
              onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
              disabled={currentStep === 0}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
            >
              ⬅️ الخطوة السابقة
            </button>

            <div className="flex items-center gap-1">
              {activeScenario.steps.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentStep ? 'bg-[var(--primary)] w-5' : 'bg-[var(--border)]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentStep((s) => Math.min(maxStep, s + 1))}
              disabled={currentStep === maxStep}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[var(--primary)] text-white border border-[var(--primary)] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
            >
              الخطوة التالية ➡️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// Lab 2: معمل وظائف نظام التشغيل الثلاث (OS Management Trio Lab)
// =============================================================================
export function OsTrioManagerLab() {
  const [tab, setTab] = useState<'tasks' | 'memory' | 'files'>('tasks');

  // Tasks state
  const [runningApps, setRunningApps] = useState<string[]>(['Word', 'Chrome', 'Spotify']);

  // Memory state (16 blocks total)
  const appMemoryMap: Record<string, number> = {
    OS_Kernel: 4,
    Word: 3,
    Chrome: 5,
    Spotify: 2,
    Excel: 2,
  };

  const toggleApp = (appName: string) => {
    if (runningApps.includes(appName)) {
      setRunningApps(runningApps.filter((a) => a !== appName));
    } else {
      setRunningApps([...runningApps, appName]);
    }
  };

  // Files state
  const [files, setFiles] = useState([
    { name: 'بحث_البرمجة.docx', folder: 'Documents', size: '24 KB' },
    { name: 'جدول_الدرجات.xlsx', folder: 'Documents', size: '18 KB' },
    { name: 'صورة_المشروع.png', folder: 'Pictures', size: '1.2 MB' },
  ]);
  const [newFileName, setNewFileName] = useState('');

  const addFile = () => {
    if (!newFileName.trim()) return;
    setFiles([...files, { name: newFileName.trim(), folder: 'Documents', size: '12 KB' }]);
    setNewFileName('');
  };

  const deleteFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // CPU calculation
  const cpuPercent = Math.min(95, runningApps.length * 18 + 8);

  return (
    <div className="card p-5 rounded-2xl border-2 border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-4 text-right font-sans" dir="rtl">
      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
        <div>
          <h3 className="text-lg font-black text-[var(--primary)] m-0">
            🧠 معمل وظائف إدارة نظام التشغيل الثلاث (OS Management Lab)
          </h3>
          <p className="text-xs text-[var(--muted)] m-0 mt-0.5">
            استكشف كيف يتحكم نظام التشغيل في المهام (Tasks)، والذاكرة (Memory)، والملفات (Files) لحظة بلحظة
          </p>
        </div>

        {/* 3 Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setTab('tasks')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              tab === 'tasks' ? 'bg-[var(--pen-blue)] text-white border-[var(--pen-blue)]' : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            🏃‍♂️ ١. إدارة المهام (Task)
          </button>
          <button
            onClick={() => setTab('memory')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              tab === 'memory' ? 'bg-[var(--pen-purple)] text-white border-[var(--pen-purple)]' : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            🧠 ٢. إدارة الذاكرة (Memory)
          </button>
          <button
            onClick={() => setTab('files')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              tab === 'files' ? 'bg-[var(--pen-green)] text-white border-[var(--pen-green)]' : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            📁 ٣. إدارة الملفات (File)
          </button>
        </div>
      </div>

      {/* Tab 1: Task Management */}
      {tab === 'tasks' && (
        <div className="flex flex-col gap-4 animate-fadeUp">
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)]">
            <div>
              <span className="text-xs text-[var(--muted)] block">ضغط المعالج الكلي (CPU Usage):</span>
              <span className="text-2xl font-black text-[var(--pen-blue)]">{arNum(cpuPercent)}%</span>
            </div>
            <div className="text-left">
              <span className="text-xs text-[var(--safe)] font-bold block">حالة تعدد المهام (Multitasking):</span>
              <span className="text-xs text-[var(--muted)]">جدولة متوازنة بواسطة نظام التشغيل ✅</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[var(--muted)]">
              انقر على أي برنامج لتشغيله أو إنهائه وشاهد توزيع المعالج الفوري:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {['Word', 'Chrome', 'Spotify', 'Excel'].map((app) => {
                const isRunning = runningApps.includes(app);
                return (
                  <button
                    key={app}
                    onClick={() => toggleApp(app)}
                    className={`p-3 rounded-xl border-2 font-bold text-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      isRunning
                        ? 'border-[var(--pen-blue)] bg-[var(--pen-blue)]/15 text-[var(--text)]'
                        : 'border-[var(--border)] bg-[var(--surface-1)] text-[var(--muted)] hover:border-[var(--muted)]'
                    }`}
                  >
                    <span className="text-xl">{app === 'Word' ? '📝' : app === 'Chrome' ? '🌐' : app === 'Spotify' ? '🎵' : '📊'}</span>
                    <span>{app}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md ${isRunning ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                      {isRunning ? 'قيد التشغيل 🟢' : 'متوقف ⚪'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Memory Management */}
      {tab === 'memory' && (
        <div className="flex flex-col gap-4 animate-fadeUp">
          <div className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[var(--text)]">خريطة كتل الذاكرة الرئيسية (RAM - سعة 16 جيجابايت):</span>
              <span className="text-[var(--pen-purple)]">
                المحجوز: {arNum(4 + runningApps.reduce((acc, app) => acc + (appMemoryMap[app] || 0), 0))} / ١٦ جيجابايت
              </span>
            </div>

            {/* RAM Visual Blocks */}
            <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 h-12 p-1.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
              {/* OS Kernel fixed 4 blocks */}
              {[1, 2, 3, 4].map((b) => (
                <div
                  key={`os-${b}`}
                  title="نظام التشغيل (OS Kernel)"
                  className="bg-purple-600/80 rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                >
                  OS
                </div>
              ))}

              {/* Dynamic Apps */}
              {runningApps.flatMap((app) =>
                Array.from({ length: appMemoryMap[app] || 1 }).map((_, bi) => (
                  <div
                    key={`${app}-${bi}`}
                    title={`محجوز لـ ${app}`}
                    className="bg-blue-500/80 rounded flex items-center justify-center text-[9px] font-bold text-white animate-pulse"
                  >
                    {app[0]}
                  </div>
                ))
              )}

              {/* Free memory placeholders */}
              {Array.from({
                length: Math.max(
                  0,
                  12 - runningApps.reduce((acc, app) => acc + (appMemoryMap[app] || 0), 0)
                ),
              }).map((_, fi) => (
                <div
                  key={`free-${fi}`}
                  title="ذاكرة حرة متاحة"
                  className="border border-dashed border-[var(--border)] rounded flex items-center justify-center text-[9px] text-[var(--muted)]"
                >
                  حر
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[var(--muted)] m-0 leading-relaxed">
              💡 <b>مبدأ الحماية:</b> نظام التشغيل يمنع أي تطبيق من الكتابة فوق عنوان ذاكرة تطبيق آخر، ويحرر كتل الذاكرة فوراً بمجرد إغلاق البرنامج.
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: File Management */}
      {tab === 'files' && (
        <div className="flex flex-col gap-4 animate-fadeUp">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-[var(--text)]">
              مسار التخزين: <span className="font-mono text-[var(--pen-green)]">C:\Users\Student\Documents</span>
            </span>

            {/* Add file mini-form */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="اسم الملف الجديد..."
                className="px-3 py-1 rounded-lg text-xs bg-[var(--surface-1)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-[var(--pen-green)]"
              />
              <button
                onClick={addFile}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-[var(--pen-green)] text-white cursor-pointer"
              >
                + إنشاء ملف
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {files.map((file, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-xl">📄</span>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-[var(--text)] block truncate">{file.name}</span>
                    <span className="text-[10px] text-[var(--muted)]">{file.size}</span>
                  </div>
                </div>
                <button
                  onClick={() => deleteFile(idx)}
                  className="text-xs text-red-400 hover:text-red-300 cursor-pointer p-1"
                  title="حذف الملف"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// Lab 3: مختبر برامج تشغيل الأجهزة والمترجم الذكي (Device Driver Bridge Lab)
// =============================================================================
export function DriverBridgeLab() {
  const [device, setDevice] = useState<'printer' | 'gpu' | 'gamepad'>('printer');
  const [installed, setInstalled] = useState<Record<string, boolean>>({});

  const isCurrentInstalled = !!installed[device];

  const DEVICES = {
    printer: {
      name: 'طابعة ليزرية احترافية (USB Printer)',
      icon: '🖨️',
      driverName: 'LaserJet P1102 Driver v3.4',
      rawMsg: 'RAW_USB_BULK: [0x1B, 0x40, 0x1B, 0x2A] -> Motor Step Forward 120 DPI',
      osMsg: 'PrintDocument("شهادة_تقدير.pdf")',
    },
    gpu: {
      name: 'كارت شاشة ألعاب فائق (NVIDIA RTX GPU)',
      icon: '🎮',
      driverName: 'Game Ready Display Driver v552.12',
      rawMsg: 'PCIe_BUS: Pipeline Shaders Direct3D 12.0 -> Compute Ray Tracing',
      osMsg: 'RenderFrame(60 FPS, Resolution=4K)',
    },
    gamepad: {
      name: 'ذراع تحكم ألعاب لاسلكي (Wireless Gamepad)',
      icon: '🕹️',
      driverName: 'HID Xbox Controller Driver v2.1',
      rawMsg: 'BLUETOOTH_PKT: [Button_A=Pressed, Stick_X=+127, Rumble_Motor=ON]',
      osMsg: 'OnPlayerJump()',
    },
  };

  const cur = DEVICES[device];

  const toggleDriver = () => {
    setInstalled((prev) => ({ ...prev, [device]: !prev[device] }));
  };

  return (
    <div className="card p-5 rounded-2xl border-2 border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-4 text-right font-sans" dir="rtl">
      <div>
        <h3 className="text-lg font-black text-[var(--pen-green)] m-0">
          🔌 مختبر برامج تشغيل الأجهزة: المترجم الرسمي بين العتاد والنظام
        </h3>
        <p className="text-xs text-[var(--muted)] m-0 mt-0.5">
          شاهد ماذا يحدث عند توصيل جهاز مادي بحاسوبك بدون برنامج تشغيل، وكيف يحل برنامج التشغيل (Device Driver) مشكلة الاتصال
        </p>
      </div>

      {/* Device Picker */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(DEVICES) as (keyof typeof DEVICES)[]).map((k) => (
          <button
            key={k}
            onClick={() => setDevice(k)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
              device === k
                ? 'bg-[var(--pen-green)] text-white border-[var(--pen-green)]'
                : 'bg-[var(--surface-1)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            <span>{DEVICES[k].icon}</span>
            <span>{DEVICES[k].name}</span>
          </button>
        ))}
      </div>

      {/* Main Bridge Viewer */}
      <div className="p-4 rounded-2xl bg-[var(--surface-1)] border-2 border-[var(--border)] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{cur.icon}</span>
            <div>
              <span className="font-extrabold text-sm text-[var(--text)]">{cur.name}</span>
              <span className="text-[11px] text-[var(--muted)] block font-mono">Driver: {cur.driverName}</span>
            </div>
          </div>

          <button
            onClick={toggleDriver}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm ${
              isCurrentInstalled
                ? 'bg-red-600 hover:bg-red-500 text-white'
                : 'bg-green-600 hover:bg-green-500 text-white'
            }`}
          >
            {isCurrentInstalled ? '🗑️ إزالة برنامج التشغيل' : '⬇️ تثبيت برنامج التشغيل (Install Driver)'}
          </button>
        </div>

        {/* Status Display */}
        {!isCurrentInstalled ? (
          <div className="p-4 rounded-xl bg-amber-500/10 border-2 border-dashed border-amber-500/40 flex items-start gap-3 text-xs leading-relaxed">
            <span className="text-2xl">⚠️</span>
            <div>
              <span className="font-bold text-amber-300 block text-sm">
                جهاز غير معروف (Unknown Device) — لا يمكن العمل!
              </span>
              <p className="m-0 text-[var(--text)] mt-1">
                نظام التشغيل استشعر اتصال الجهاز فيزيائياً، ولكنه يفتقد برنامج التشغيل (Device Driver)؛ لذلك لا يستطيع ترجمة أوامره أو الاستفادة منه إطلاقاً.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-green-500/10 border-2 border-green-500/40 flex flex-col gap-3 text-xs">
            <div className="flex items-center gap-2 text-green-300 font-bold text-sm">
              <span>✅</span>
              <span>برنامج التشغيل نشط ويعمل كمترجم فوري بين الطرفين:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[11px]">
              <div className="p-2.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                <span className="text-blue-400 font-bold block mb-1">أمر نظام التشغيل (OS Level):</span>
                <span className="text-gray-200">{cur.osMsg}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                <span className="text-green-400 font-bold block mb-1">ترجمة برنامج التشغيل للعتاد (Hardware):</span>
                <span className="text-gray-200">{cur.rawMsg}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
