// Visual SVG Illustrations and Architectural Components for Unit 7 Lesson 1 (Computer Architecture)

/** 1. Stylized Desktop PC Tower (وحدة الكمبيوتر الرئيسية / Case) */
export const PcTowerSvg = ({ size = 110 }: { size?: number }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer chassis shadow & body */}
    <rect x="22" y="8" width="56" height="98" rx="8" fill="#1e2235" stroke="var(--pen-blue)" strokeWidth="2.5" />
    <rect x="26" y="12" width="48" height="90" rx="6" fill="#131726" />
    {/* Glass side panel with inner components glow */}
    <rect x="30" y="24" width="40" height="66" rx="4" fill="#1a2038" stroke="#3b82f644" strokeWidth="1.5" />
    {/* Internal glowing GPU & Motherboard lights */}
    <circle cx="50" cy="42" r="10" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
    <circle cx="50" cy="42" r="4" fill="#38bdf8" />
    <rect x="36" y="62" width="28" height="7" rx="2" fill="#818cf8" opacity="0.8" />
    <rect x="36" y="73" width="28" height="7" rx="2" fill="#818cf8" opacity="0.8" />
    {/* Front panel details */}
    <circle cx="50" cy="18" r="3.5" fill="#38bdf8" />
    <rect x="42" y="93" width="16" height="3" rx="1.5" fill="#64748b" />
    <rect x="42" y="98" width="16" height="3" rx="1.5" fill="#64748b" />
    {/* Bottom stand feet */}
    <rect x="26" y="106" width="10" height="4" rx="2" fill="#475569" />
    <rect x="64" y="106" width="10" height="4" rx="2" fill="#475569" />
  </svg>
);

/** 2. Stylized Motherboard & Internal Components (المكونات الداخلية / اللوحة الأم والمعالج) */
export const MotherboardSvg = ({ size = 110 }: { size?: number }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* PCB Board */}
    <rect x="14" y="10" width="72" height="92" rx="6" fill="#0f2b26" stroke="var(--pen-purple)" strokeWidth="2.5" />
    {/* Circuit traces */}
    <path d="M22 22 H42 V35" stroke="#10b98166" strokeWidth="1.5" fill="none" />
    <path d="M58 22 H78 V35" stroke="#10b98166" strokeWidth="1.5" fill="none" />
    <path d="M22 92 H38 V78" stroke="#10b98166" strokeWidth="1.5" fill="none" />
    <path d="M78 92 H62 V78" stroke="#10b98166" strokeWidth="1.5" fill="none" />
    {/* Central CPU Socket */}
    <rect x="33" y="32" width="34" height="34" rx="4" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
    <rect x="38" y="37" width="24" height="24" rx="2" fill="#334155" />
    <text x="50" y="52" fill="#facc15" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CPU</text>
    {/* RAM Slots */}
    <rect x="72" y="30" width="5" height="40" rx="1.5" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1" />
    <rect x="80" y="30" width="5" height="40" rx="1.5" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1" />
    {/* PCIe expansion slot */}
    <rect x="22" y="76" width="56" height="7" rx="1.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
    {/* Chipset & Capacitors */}
    <circle cx="25" cy="40" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
    <circle cx="25" cy="50" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
    <circle cx="25" cy="60" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
    <rect x="52" y="86" width="16" height="10" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
  </svg>
);

/** 3. Stylized Keyboard & Mouse (أجهزة الإدخال / لوحة المفاتيح والفأرة) */
export const KeyboardMouseSvg = ({ size = 110 }: { size?: number }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Keyboard body */}
    <rect x="8" y="24" width="62" height="44" rx="5" fill="#1e293b" stroke="var(--pen-green)" strokeWidth="2.5" />
    {/* Keyboard key rows */}
    <g fill="#334155" stroke="#475569" strokeWidth="0.5">
      <rect x="13" y="30" width="7" height="6" rx="1" />
      <rect x="23" y="30" width="7" height="6" rx="1" />
      <rect x="33" y="30" width="7" height="6" rx="1" />
      <rect x="43" y="30" width="7" height="6" rx="1" />
      <rect x="53" y="30" width="12" height="6" rx="1" fill="#3b82f6" />

      <rect x="13" y="39" width="9" height="6" rx="1" />
      <rect x="25" y="39" width="7" height="6" rx="1" />
      <rect x="35" y="39" width="7" height="6" rx="1" />
      <rect x="45" y="39" width="7" height="6" rx="1" />
      <rect x="55" y="39" width="10" height="6" rx="1" />

      <rect x="13" y="48" width="11" height="6" rx="1" />
      <rect x="27" y="48" width="24" height="6" rx="1" fill="#22c55e" />
      <rect x="54" y="48" width="11" height="6" rx="1" />
    </g>
    {/* Mouse Body */}
    <rect x="76" y="32" width="18" height="32" rx="9" fill="#1e293b" stroke="var(--pen-green)" strokeWidth="2" />
    <line x1="85" y1="32" x2="85" y2="44" stroke="#64748b" strokeWidth="1" />
    <rect x="83.5" y="36" width="3" height="6" rx="1.5" fill="#22c55e" />
    {/* Connecting USB Cables */}
    <path d="M39 24 Q39 12 50 12 Q65 12 75 18" stroke="#64748b" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    <path d="M85 32 Q85 18 75 18" stroke="#64748b" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    {/* Small USB Connector */}
    <rect x="70" y="82" width="14" height="18" rx="2" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
    <rect x="73" y="100" width="8" height="6" fill="#cbd5e1" />
    <circle cx="75" cy="103" r="0.8" fill="#1e293b" />
    <circle cx="79" cy="103" r="0.8" fill="#1e293b" />
    <text x="38" y="94" fill="var(--pen-green)" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">إدخال USB</text>
  </svg>
);

/** 4. Stylized Desktop Monitor (أجهزة الإخراج / الشاشة) */
export const MonitorSvg = ({ size = 110 }: { size?: number }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Monitor frame */}
    <rect x="10" y="12" width="80" height="56" rx="6" fill="#0f172a" stroke="var(--pen-orange)" strokeWidth="2.5" />
    {/* Screen inner area */}
    <rect x="14" y="16" width="72" height="48" rx="3" fill="#1e1e38" />
    {/* Screen display graphic (Code & colorful chart) */}
    <rect x="18" y="22" width="32" height="4" rx="1" fill="#38bdf8" />
    <rect x="18" y="29" width="24" height="3" rx="1" fill="#94a3b8" />
    <rect x="18" y="35" width="28" height="3" rx="1" fill="#94a3b8" />
    <circle cx="68" cy="34" r="10" fill="#f59e0b22" stroke="#f59e0b" strokeWidth="1.5" />
    <path d="M68 28 L68 34 L73 37" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
    {/* Screen power LED */}
    <circle cx="50" cy="65.5" r="1.5" fill="#f59e0b" />
    {/* Monitor stand & base */}
    <path d="M46 68 L44 86 H56 L54 68 Z" fill="#334155" stroke="var(--pen-orange)" strokeWidth="1.5" />
    <rect x="32" y="86" width="36" height="7" rx="3.5" fill="#1e293b" stroke="var(--pen-orange)" strokeWidth="1.5" />
    <text x="50" y="106" fill="var(--pen-orange)" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">إخراج HDMI</text>
  </svg>
);

/** 5. Quirky Storage: Chocolate Bar USB (فلاش ميموري شوكولاتة) */
export const ChocolateUsbSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* USB Plug Head */}
    <rect x="38" y="10" width="24" height="20" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
    <rect x="43" y="15" width="5" height="5" fill="#1e293b" />
    <rect x="52" y="15" width="5" height="5" fill="#1e293b" />
    <rect x="40" y="26" width="20" height="4" fill="#38bdf8" />
    {/* Chocolate Body */}
    <rect x="22" y="30" width="56" height="58" rx="6" fill="#451a03" stroke="#78350f" strokeWidth="2.5" />
    {/* Chocolate Chunks */}
    <rect x="27" y="35" width="21" height="22" rx="3" fill="#5c2406" stroke="#78350f" strokeWidth="1" />
    <rect x="52" y="35" width="21" height="22" rx="3" fill="#5c2406" stroke="#78350f" strokeWidth="1" />
    <rect x="27" y="61" width="21" height="22" rx="3" fill="#5c2406" stroke="#78350f" strokeWidth="1" />
    {/* Bite mark on bottom-right chunk */}
    <path d="M52 61 H68 C66 68 70 74 65 80 C60 84 52 83 52 83 Z" fill="#5c2406" />
    <path d="M68 61 C64 68 70 74 65 83" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
    <text x="50" y="96" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">🍫 فلاشة شوكولاتة</text>
  </svg>
);

/** 6. Quirky Storage: Retro 80s Cassette Tape (شريط كاسيت صخر) */
export const CassetteTapeSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cassette Outer Shell */}
    <rect x="14" y="20" width="72" height="48" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
    {/* Top Label */}
    <rect x="22" y="26" width="56" height="24" rx="3" fill="#fef08a" />
    <text x="50" y="34" fill="#854d0e" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AL-SAKHR 1985</text>
    {/* Tape reels window */}
    <rect x="28" y="36" width="44" height="12" rx="6" fill="#0f172a" />
    <circle cx="36" cy="42" r="4.5" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
    <circle cx="64" cy="42" r="4.5" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />
    <rect x="42" y="40.5" width="16" height="3" fill="#451a03" />
    {/* Bottom Trapazoid */}
    <path d="M24 68 L32 54 H68 L76 68 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
    <circle cx="38" cy="62" r="2" fill="#64748b" />
    <circle cx="62" cy="62" r="2" fill="#64748b" />
    <text x="50" y="85" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">📼 كاسيت الثمانينات</text>
  </svg>
);

/** 7. Quirky Storage: Punched Card (البطاقة المثقوبة التاريخية) */
export const PunchedCardSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Punched Card with chamfered top-left corner */}
    <path d="M26 22 L14 34 V76 H86 V22 H26 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
    {/* Header line & title */}
    <line x1="16" y1="36" x2="84" y2="36" stroke="#b45309" strokeWidth="1" />
    <text x="50" y="32" fill="#92400e" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">IBM / PUNCH CARD</text>
    {/* Punched Hole Grid (black holes = 1s, empty = 0s) */}
    <g fill="#1e293b">
      <rect x="22" y="42" width="3" height="5" rx="0.5" />
      <rect x="32" y="42" width="3" height="5" rx="0.5" />
      <rect x="52" y="42" width="3" height="5" rx="0.5" />
      <rect x="72" y="42" width="3" height="5" rx="0.5" />

      <rect x="27" y="52" width="3" height="5" rx="0.5" />
      <rect x="42" y="52" width="3" height="5" rx="0.5" />
      <rect x="62" y="52" width="3" height="5" rx="0.5" />

      <rect x="22" y="62" width="3" height="5" rx="0.5" />
      <rect x="37" y="62" width="3" height="5" rx="0.5" />
      <rect x="57" y="62" width="3" height="5" rx="0.5" />
      <rect x="77" y="62" width="3" height="5" rx="0.5" />
    </g>
    <text x="50" y="92" fill="#d97706" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">📜 كارت كرتون مثقوب</text>
  </svg>
);

/** 8. Quirky Storage: Smart Spy Ring / Wearable MicroSD (خاتم ذكي بكارت ميموري) */
export const SmartRingSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ring Outer Loop */}
    <circle cx="50" cy="50" r="26" stroke="#e2e8f0" strokeWidth="7" fill="none" />
    <circle cx="50" cy="50" r="26" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
    {/* Ring Gemstone / MicroSD Holder */}
    <rect x="34" y="16" width="32" height="18" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
    {/* MicroSD Card in Ring */}
    <rect x="40" y="19" width="20" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
    <circle cx="44" cy="25" r="1.5" fill="#38bdf8" />
    <text x="53" y="27" fill="#38bdf8" fontSize="6" fontWeight="bold" fontFamily="monospace">1TB</text>
    {/* Glowing circuit pulse */}
    <path d="M30 40 Q24 50 30 60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
    <path d="M70 40 Q76 50 70 60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
    <text x="50" y="92" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">💍 خاتم تخزين ذكي</text>
  </svg>
);

/** 9. Full Architectural Block Diagram Component (المخطط المعماري للمكونات الخمسة) */
export const ArchitecturalBlockDiagram = () => (
  <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px 10px',
    boxSizing: 'border-box',
    fontFamily: "'Cairo', system-ui, sans-serif",
  }}>
    {/* Top Row: Input Unit -> CPU -> Output Unit */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '15px' }}>
      
      {/* 1. Input Unit */}
      <div style={{
        flex: '1',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '2px solid var(--pen-blue)',
        borderRadius: '12px',
        padding: '10px 14px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '2px' }}>⌨️</div>
        <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: '17px' }}>وحدة الإدخال (Input)</div>
        <div style={{ fontSize: '13px', color: 'var(--pen-ink)', marginTop: '2px' }}>لوحة المفاتيح · الفأرة · الماسح</div>
      </div>

      {/* Flow Arrow: Input -> CPU */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--pen-blue)' }}>بيانات (Data)</span>
        <svg width="60" height="24" viewBox="0 0 60 24">
          <line x1="5" y1="12" x2="50" y2="12" stroke="var(--pen-blue)" strokeWidth="3" strokeDasharray="5 3" />
          <polygon points="55,12 45,6 45,18" fill="var(--pen-blue)" />
        </svg>
      </div>

      {/* 2. Central Processing Unit (CPU) */}
      <div style={{
        flex: '2',
        background: 'rgba(168, 85, 247, 0.12)',
        border: '2.5px solid var(--pen-purple)',
        borderRadius: '14px',
        padding: '10px 16px',
        boxShadow: '0 6px 18px rgba(168, 85, 247, 0.25)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '22px' }}>🧠</span>
          <span style={{ color: 'var(--pen-purple)', fontWeight: 800, fontSize: '18px' }}>
            المعالج (Processor / CPU)
          </span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* CU */}
          <div style={{
            flex: 1,
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1.5px solid var(--pen-orange)',
            borderRadius: '8px',
            padding: '6px',
            textAlign: 'center',
          }}>
            <div style={{ fontWeight: 'bold', color: 'var(--pen-orange)', fontSize: '14px' }}>🧭 وحدة التحكم (CU)</div>
            <div style={{ fontSize: '11px', color: 'var(--pen-ink)', marginTop: '2px' }}>تنفيذ التعليمات وإصدار الأوامر</div>
          </div>
          {/* ALU */}
          <div style={{
            flex: 1,
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1.5px solid var(--pen-red)',
            borderRadius: '8px',
            padding: '6px',
            textAlign: 'center',
          }}>
            <div style={{ fontWeight: 'bold', color: 'var(--pen-red)', fontSize: '14px' }}>⚡ وحدة الحساب والمنطق (ALU)</div>
            <div style={{ fontSize: '11px', color: 'var(--pen-ink)', marginTop: '2px' }}>الحسابات والمقارنات الشرطية</div>
          </div>
        </div>
      </div>

      {/* Flow Arrow: CPU -> Output */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--pen-green)' }}>معلومات (Info)</span>
        <svg width="60" height="24" viewBox="0 0 60 24">
          <line x1="5" y1="12" x2="50" y2="12" stroke="var(--pen-green)" strokeWidth="3" strokeDasharray="5 3" />
          <polygon points="55,12 45,6 45,18" fill="var(--pen-green)" />
        </svg>
      </div>

      {/* 3. Output Unit */}
      <div style={{
        flex: '1',
        background: 'rgba(34, 197, 94, 0.1)',
        border: '2px solid var(--pen-green)',
        borderRadius: '12px',
        padding: '10px 14px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '2px' }}>🖥️</div>
        <div style={{ color: 'var(--pen-green)', fontWeight: 800, fontSize: '17px' }}>وحدة الإخراج (Output)</div>
        <div style={{ fontSize: '13px', color: 'var(--pen-ink)', marginTop: '2px' }}>الشاشة · الطابعة · مكبرات الصوت</div>
      </div>
    </div>

    {/* Bidirectional Arrow between CPU and Main Memory */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
      <svg width="30" height="34" viewBox="0 0 30 34">
        <line x1="15" y1="6" x2="15" y2="28" stroke="var(--pen-purple)" strokeWidth="3" />
        <polygon points="15,2 10,9 20,9" fill="var(--pen-purple)" />
        <polygon points="15,32 10,25 20,25" fill="var(--pen-purple)" />
      </svg>
      <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--pen-purple)' }}>تبادل مباشر وسريع للتعليمات والبيانات ⇅</span>
    </div>

    {/* Middle Component: Main Memory RAM */}
    <div style={{
      width: '68%',
      background: 'rgba(59, 130, 246, 0.15)',
      border: '2px solid var(--pen-blue)',
      borderRadius: '12px',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 14px rgba(59, 130, 246, 0.2)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '26px' }}>⚡</span>
        <div>
          <div style={{ fontWeight: 800, color: 'var(--pen-blue)', fontSize: '16px' }}>
            الذاكرة الرئيسية (Primary Memory / RAM)
          </div>
          <div style={{ fontSize: '12px', color: 'var(--pen-ink)' }}>تخزين مؤقت وسريع جداً · تفقد محتوياتها عند انقطاع الكهرباء</div>
        </div>
      </div>
      <div style={{
        background: 'var(--tint-blue)',
        color: 'var(--pen-blue)',
        fontWeight: 'bold',
        fontSize: '12px',
        padding: '4px 10px',
        borderRadius: '6px',
      }}>
        متطايرة (Volatile)
      </div>
    </div>

    {/* Bidirectional Arrow between RAM and Secondary Storage */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
      <svg width="30" height="34" viewBox="0 0 30 34">
        <line x1="15" y1="6" x2="15" y2="28" stroke="var(--pen-orange)" strokeWidth="3" strokeDasharray="4 2" />
        <polygon points="15,2 10,9 20,9" fill="var(--pen-orange)" />
        <polygon points="15,32 10,25 20,25" fill="var(--pen-orange)" />
      </svg>
      <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--pen-orange)' }}>تحميل وحفظ دائم للملفات (Long-term) ⇅</span>
    </div>

    {/* Bottom Component: Secondary Storage */}
    <div style={{
      width: '68%',
      background: 'rgba(245, 158, 11, 0.15)',
      border: '2px solid var(--pen-orange)',
      borderRadius: '12px',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.2)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '26px' }}>💾</span>
        <div>
          <div style={{ fontWeight: 800, color: 'var(--pen-orange)', fontSize: '16px' }}>
            ذاكرة التخزين الثانوي (Secondary Storage)
          </div>
          <div style={{ fontSize: '12px', color: 'var(--pen-ink)' }}>القرص الصلب (HDD) · محرك SSD · فلاشة USB · سعات ضخمة ودائمة</div>
        </div>
      </div>
      <div style={{
        background: 'var(--tint-orange)',
        color: 'var(--pen-orange)',
        fontWeight: 'bold',
        fontSize: '12px',
        padding: '4px 10px',
        borderRadius: '6px',
      }}>
        غير متطايرة (Non-Volatile)
      </div>
    </div>
  </div>
);

/** 10. Visual CU Conductor Metaphor Card (وحدة التحكم - المايسترو المنظم) */
export const CuVisualCard = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    direction: 'rtl',
    textAlign: 'right',
    fontFamily: "'Cairo', system-ui, sans-serif",
  }}>
    {/* Visual Flow diagram of CU dispatching commands */}
    <div style={{
      background: 'rgba(245, 158, 11, 0.12)',
      border: '1.5px solid var(--pen-orange)',
      borderRadius: '10px',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '22px' }}>🧭</div>
        <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--pen-orange)' }}>وحدة التحكم (CU)</div>
        <div style={{ fontSize: '10px', color: 'var(--pen-ink)' }}>تُصدر الأوامر</div>
      </div>
      <svg width="70" height="30" viewBox="0 0 70 30">
        <line x1="5" y1="15" x2="60" y2="15" stroke="var(--pen-orange)" strokeWidth="2.5" />
        <polygon points="65,15 55,10 55,20" fill="var(--pen-orange)" />
        <text x="32" y="10" fontSize="8" fill="var(--pen-orange)" fontWeight="bold" textAnchor="middle">أمر تحكم</text>
      </svg>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '22px' }}>⚙️</div>
        <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--pen-ink)' }}>المكونات والذاكرة</div>
        <div style={{ fontSize: '10px', color: 'var(--pen-ink)' }}>تنفيذ التوجيه</div>
      </div>
    </div>

    {/* Key Responsibilities */}
    <div style={{ fontSize: '14px', lineHeight: 1.45, color: 'var(--pen-ink)' }}>
      <div>• <b>المهمة والوظيفة:</b> تنفذ التعليمات (Instructions) وتُصدر الأوامر (Commands).</div>
      <div>• <b>تشبيه المؤسسة:</b> المايسترو والمدير المسؤول عن تنظيم مواعيد عمل كل قطعة.</div>
    </div>

    {/* Practical Calculator Example Banner */}
    <div style={{
      background: 'var(--surface)',
      border: '1.5px dashed var(--pen-orange)',
      borderRadius: '8px',
      padding: '8px 10px',
    }}>
      <div style={{ fontWeight: 'bold', color: 'var(--pen-orange)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>💡</span>
        <span>مثال الآلة الحاسبة (3 + 5):</span>
      </div>
      <div style={{ fontSize: '12px', color: 'var(--pen-ink)', marginTop: '3px', lineHeight: 1.4 }}>
        تستقبل الإدخال، وتأمر وحدة ALU بإجراء الجمع، وتأمر الشاشة بعرض الرقم 8.
      </div>
      <div style={{
        marginTop: '4px',
        padding: '3px 8px',
        background: 'var(--tint-orange)',
        borderRadius: '5px',
        color: 'var(--pen-orange)',
        fontWeight: 'bold',
        fontSize: '11px',
        textAlign: 'center',
      }}>
        هي التي توجه وتأمر، ولا تحسب الناتج بنفسها!
      </div>
    </div>
  </div>
);

/** 11. Visual ALU Mathematical Engine Card (وحدة الحساب والمنطق) */
export const AluVisualCard = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    direction: 'rtl',
    textAlign: 'right',
    fontFamily: "'Cairo', system-ui, sans-serif",
  }}>
    {/* Two Functional Pipelines: Math vs Logic */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
      {/* 1. Arithmetic Operations */}
      <div style={{
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1.5px solid var(--pen-red)',
        borderRadius: '8px',
        padding: '6px 8px',
      }}>
        <div style={{ fontWeight: 'bold', color: 'var(--pen-red)', fontSize: '13px', textAlign: 'center', marginBottom: '4px' }}>
          🧮 العمليات الحسابية
        </div>
        <div style={{ fontSize: '12px', lineHeight: 1.4, color: 'var(--pen-ink)' }}>
          <div>• الجمع: 3 + 5 = <b>8</b></div>
          <div>• الطرح: 9 - 4 = <b>5</b></div>
          <div>• الضرب: 6 × 2 = <b>12</b></div>
          <div>• القسمة: 10 ÷ 2 = <b>5</b></div>
        </div>
      </div>

      {/* 2. Logical Comparisons */}
      <div style={{
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1.5px solid var(--pen-red)',
        borderRadius: '8px',
        padding: '6px 8px',
      }}>
        <div style={{ fontWeight: 'bold', color: 'var(--pen-red)', fontSize: '13px', textAlign: 'center', marginBottom: '4px' }}>
          ⚖️ العمليات المنطقية
        </div>
        <div style={{ fontSize: '12px', lineHeight: 1.4, color: 'var(--pen-ink)' }}>
          <div>• هل 10 &gt; 5؟ <b>(نعم)</b></div>
          <div>• هل 7 = 7؟ <b>(صحيح)</b></div>
          <div>• هل 3 &lt; 8؟ <b>(نعم)</b></div>
          <div style={{ color: 'var(--pen-red)', fontWeight: 'bold' }}>• المقارنة الشرطية</div>
        </div>
      </div>
    </div>

    {/* Practical Student Grades Example */}
    <div style={{
      background: 'var(--surface)',
      border: '1.5px dashed var(--pen-red)',
      borderRadius: '8px',
      padding: '8px 10px',
    }}>
      <div style={{ fontWeight: 'bold', color: 'var(--pen-red)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>💡</span>
        <span>مثال درجات الطالب:</span>
      </div>
      <div style={{ fontSize: '12px', color: 'var(--pen-ink)', marginTop: '3px', lineHeight: 1.4 }}>
        حساب مجموع المواد: 20 + 25 + 30 = <b>75</b>.
      </div>
      <div style={{
        marginTop: '4px',
        padding: '3px 8px',
        background: 'var(--tint-red)',
        borderRadius: '5px',
        color: 'var(--pen-red)',
        fontWeight: 'bold',
        fontSize: '11px',
        textAlign: 'center',
      }}>
        وحدة ALU هي المحرك الذي ينفذ العملية الحسابية ويحدد الناتج!
      </div>
    </div>
  </div>
);

/** 12. Stylized RAM DIMM Stick (شريحة الذاكرة الرئيسية RAM) */
export const RamStickSvg = ({ width = 240, height = 75 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 240 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Green PCB Stick */}
    <rect x="10" y="8" width="220" height="50" rx="3" fill="#166534" stroke="#22c55e" strokeWidth="2" />
    {/* Left and right notch cutouts */}
    <path d="M10 28 H14 V38 H10 Z" fill="var(--surface)" />
    <path d="M230 28 H226 V38 H230 Z" fill="var(--surface)" />
    {/* Golden contact teeth pins with bottom keying notch */}
    <rect x="14" y="58" width="88" height="9" fill="#eab308" />
    <rect x="102" y="58" width="8" height="9" fill="var(--surface)" />
    <rect x="110" y="58" width="116" height="9" fill="#eab308" />
    {/* Pin divider lines */}
    <line x1="20" y1="58" x2="20" y2="67" stroke="#854d0e" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="40" y1="58" x2="40" y2="67" stroke="#854d0e" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="60" y1="58" x2="60" y2="67" stroke="#854d0e" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="80" y1="58" x2="80" y2="67" stroke="#854d0e" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="130" y1="58" x2="130" y2="67" stroke="#854d0e" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="160" y1="58" x2="160" y2="67" stroke="#854d0e" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="190" y1="58" x2="190" y2="67" stroke="#854d0e" strokeWidth="1" strokeDasharray="3 3" />
    {/* 8 Black Memory Chips */}
    <g fill="#0f172a" stroke="#334155" strokeWidth="1">
      <rect x="20" y="14" width="20" height="38" rx="2" />
      <rect x="46" y="14" width="20" height="38" rx="2" />
      <rect x="72" y="14" width="20" height="38" rx="2" />
      <rect x="98" y="14" width="15" height="38" rx="2" />
      <rect x="127" y="14" width="15" height="38" rx="2" />
      <rect x="148" y="14" width="20" height="38" rx="2" />
      <rect x="174" y="14" width="20" height="38" rx="2" />
      <rect x="200" y="14" width="20" height="38" rx="2" />
    </g>
    {/* Golden contact pads on chips */}
    <circle cx="24" cy="18" r="1" fill="#eab308" />
    <circle cx="50" cy="18" r="1" fill="#eab308" />
    <circle cx="76" cy="18" r="1" fill="#eab308" />
    <circle cx="152" cy="18" r="1" fill="#eab308" />
    <circle cx="178" cy="18" r="1" fill="#eab308" />
    <circle cx="204" cy="18" r="1" fill="#eab308" />
    {/* Label Sticker */}
    <rect x="80" y="24" width="60" height="18" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.5" />
    <text x="110" y="36" fill="#1e293b" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">16GB DDR4</text>
  </svg>
);

/** 13. Stylized Open Hard Disk Drive (HDD القرص الصلب الميكانيكي) */
export const HddDriveSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Metal Chassis */}
    <rect x="12" y="10" width="76" height="80" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="2.5" />
    {/* Inner Platter Chamber */}
    <rect x="16" y="14" width="68" height="72" rx="4" fill="#0f172a" />
    {/* Silver Magnetic Platter */}
    <circle cx="50" cy="46" r="30" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
    <circle cx="50" cy="46" r="22" fill="#cbd5e1" stroke="#e2e8f0" strokeWidth="1" />
    {/* Central Spindle Motor */}
    <circle cx="50" cy="46" r="10" fill="#475569" stroke="#64748b" strokeWidth="1.5" />
    <circle cx="50" cy="46" r="4" fill="#0f172a" />
    {/* Actuator Arm and Read/Write Head */}
    <path d="M26 80 L44 54 L49 52" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    <circle cx="26" cy="80" r="5" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
    <circle cx="49" cy="52" r="1.5" fill="#ef4444" />
    {/* Text Label */}
    <text x="50" y="93" fill="var(--pen-orange)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">HDD (ميكانيكي)</text>
  </svg>
);

/** 14. Stylized Solid State Drive (SSD القرص السريع والمقاوم للصدمات) */
export const SsdDriveSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 2.5" Metal casing */}
    <rect x="14" y="16" width="72" height="68" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
    {/* Metallic finish inner panel */}
    <rect x="18" y="20" width="64" height="60" rx="3" fill="#1e293b" />
    {/* Gold SSD Branding */}
    <text x="50" y="44" fill="#38bdf8" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">SSD</text>
    <text x="50" y="55" fill="#94a3b8" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SOLID STATE DRIVE</text>
    {/* Capacity Badge */}
    <rect x="36" y="61" width="28" height="10" rx="2" fill="#0284c7" />
    <text x="50" y="69" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">1 TB</text>
    {/* SATA connector pins at bottom */}
    <rect x="24" y="80" width="22" height="4" fill="#eab308" />
    <rect x="50" y="80" width="30" height="4" fill="#eab308" />
    <text x="50" y="94" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SSD (فائق السرعة)</text>
  </svg>
);

/** 15. Stylized Metallic USB 3.0 Flash Drive (ذاكرة الفلاش USB) */
export const UsbStickSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* USB Plug Head */}
    <rect x="36" y="12" width="28" height="24" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
    {/* Blue USB 3.0 Tab inside connector */}
    <rect x="40" y="16" width="20" height="5" fill="#0284c7" />
    <rect x="42" y="24" width="5" height="5" fill="#1e293b" />
    <rect x="53" y="24" width="5" height="5" fill="#1e293b" />
    {/* Metallic Body */}
    <rect x="30" y="34" width="40" height="48" rx="6" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
    <rect x="34" y="38" width="32" height="40" rx="4" fill="#334155" />
    {/* Capacity imprint */}
    <text x="50" y="56" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">128GB</text>
    <text x="50" y="67" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">USB 3.2</text>
    {/* Keychain loop */}
    <circle cx="50" cy="80" r="3" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
    <text x="50" y="94" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">USB (محمول)</text>
  </svg>
);

/** 16. Stylized Flatbed Scanner (الماسح الضوئي) */
export const ScannerSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scanner Base Body */}
    <rect x="10" y="32" width="80" height="48" rx="6" fill="#1e293b" stroke="var(--pen-blue)" strokeWidth="2" />
    {/* Glass Flatbed */}
    <rect x="16" y="38" width="68" height="34" rx="3" fill="#0f172a" />
    {/* Scanned Document Paper */}
    <rect x="22" y="42" width="40" height="26" rx="2" fill="#f8fafc" opacity="0.85" />
    <line x1="26" y1="48" x2="52" y2="48" stroke="#64748b" strokeWidth="1.5" />
    <line x1="26" y1="54" x2="48" y2="54" stroke="#64748b" strokeWidth="1.5" />
    <line x1="26" y1="60" x2="42" y2="60" stroke="#64748b" strokeWidth="1.5" />
    {/* Glowing Green/Cyan Laser Scan Bar */}
    <line x1="16" y1="55" x2="84" y2="55" stroke="#22c55e" strokeWidth="2.5" />
    <line x1="16" y1="55" x2="84" y2="55" stroke="#86efac" strokeWidth="1" strokeDasharray="4 2" />
    {/* Open Top Lid (Perspective) */}
    <path d="M12 32 L26 12 H94 L88 32 Z" fill="#334155" stroke="var(--pen-blue)" strokeWidth="1.5" opacity="0.9" />
    {/* Control Buttons */}
    <circle cx="78" cy="72" r="2.5" fill="#22c55e" />
    <circle cx="70" cy="72" r="2" fill="#64748b" />
    <text x="50" y="93" fill="var(--pen-blue)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">الماسح الضوئي (Scanner)</text>
  </svg>
);

/** 17. Stylized Laser Printer (الطابعة) */
export const PrinterSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top Input Paper Tray */}
    <path d="M30 12 H70 V28 H30 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
    {/* Main Printer Body */}
    <rect x="14" y="26" width="72" height="44" rx="6" fill="#1e293b" stroke="var(--pen-green)" strokeWidth="2" />
    {/* Front Output Slot */}
    <rect x="22" y="44" width="56" height="10" rx="2" fill="#0f172a" />
    {/* Printed Paper Ejecting */}
    <rect x="26" y="48" width="48" height="28" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    <line x1="32" y1="56" x2="68" y2="56" stroke="#3b82f6" strokeWidth="2" />
    <line x1="32" y1="62" x2="60" y2="62" stroke="#64748b" strokeWidth="1.5" />
    <line x1="32" y1="68" x2="54" y2="68" stroke="#64748b" strokeWidth="1.5" />
    {/* Status LED & Power Button */}
    <circle cx="76" cy="34" r="2" fill="#22c55e" />
    <rect x="68" y="32" width="4" height="4" rx="1" fill="#64748b" />
    <text x="50" y="92" fill="var(--pen-green)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">الطابعة (Printer)</text>
  </svg>
);

/** 18. Stylized Audio Speakers (مكبرات الصوت) */
export const SpeakersSvg = ({ size = 95 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left Speaker Box */}
    <rect x="16" y="22" width="30" height="56" rx="4" fill="#1e293b" stroke="var(--pen-green)" strokeWidth="2" />
    <circle cx="31" cy="36" r="6" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
    <circle cx="31" cy="58" r="10" fill="#0f172a" stroke="var(--pen-green)" strokeWidth="1.5" />
    <circle cx="31" cy="58" r="4" fill="#22c55e" />
    {/* Right Speaker Box */}
    <rect x="54" y="22" width="30" height="56" rx="4" fill="#1e293b" stroke="var(--pen-green)" strokeWidth="2" />
    <circle cx="69" cy="36" r="6" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
    <circle cx="69" cy="58" r="10" fill="#0f172a" stroke="var(--pen-green)" strokeWidth="1.5" />
    <circle cx="69" cy="58" r="4" fill="#22c55e" />
    {/* Sound Waves radiating */}
    <path d="M88 40 Q94 50 88 60" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M12 40 Q6 50 12 60" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
    <text x="50" y="92" fill="var(--pen-green)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">السماعات (Speakers)</text>
  </svg>
);

/** 19. Realistic Motherboard Rear I/O Shield Panel (لوحة المنافذ الخلفية للكمبيوتر) */
export const RearIoPanelSvg = ({ width = 450, height = 290 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 450 290" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Metal Backplate */}
    <rect x="8" y="8" width="434" height="274" rx="10" fill="#0f172a" stroke="#475569" strokeWidth="2.5" />
    <rect x="12" y="12" width="426" height="266" rx="8" fill="#1e293b" />
    
    {/* Corner Mounting Screws */}
    <circle cx="22" cy="22" r="3.5" fill="#64748b" stroke="#334155" strokeWidth="1" />
    <circle cx="428" cy="22" r="3.5" fill="#64748b" stroke="#334155" strokeWidth="1" />
    <circle cx="22" cy="268" r="3.5" fill="#64748b" stroke="#334155" strokeWidth="1" />
    <circle cx="428" cy="268" r="3.5" fill="#64748b" stroke="#334155" strokeWidth="1" />

    {/* Section 1: Legacy VGA / D-Sub (Left) */}
    <g transform="translate(24, 60)">
      <rect x="0" y="0" width="70" height="150" rx="4" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
      <text x="35" y="20" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">VGA</text>
      {/* VGA Socket (Blue D-sub) */}
      <polygon points="15,40 55,40 50,75 20,75" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1.5" />
      <circle cx="8" cy="57" r="3" fill="#cbd5e1" />
      <circle cx="62" cy="57" r="3" fill="#cbd5e1" />
      {/* 3 rows of pins */}
      {[0, 1, 2, 3, 4].map((col) => (
        <g key={col}>
          <circle cx={22 + col * 6.5} cy="48" r="1.2" fill="#0f172a" />
          <circle cx={24 + col * 6} cy="57" r="1.2" fill="#0f172a" />
          <circle cx={26 + col * 5.5} cy="66" r="1.2" fill="#0f172a" />
        </g>
      ))}
    </g>

    {/* Section 2: Middle Stack 1 (Dual USB 3.0 + HDMI below) */}
    <g transform="translate(108, 30)">
      <rect x="0" y="0" width="92" height="215" rx="5" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
      
      {/* Top USB 3.0 */}
      <rect x="10" y="15" width="72" height="34" rx="2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="14" y="20" width="64" height="13" rx="1.5" fill="#2563eb" />
      <rect x="25" y="24" width="7" height="3" fill="#fbbf24" />
      <rect x="37" y="24" width="7" height="3" fill="#fbbf24" />
      <rect x="49" y="24" width="7" height="3" fill="#fbbf24" />
      <rect x="61" y="24" width="7" height="3" fill="#fbbf24" />
      <text x="46" y="44" fill="#93c5fd" fontSize="7" fontWeight="bold" textAnchor="middle">USB 3.0</text>

      {/* Middle USB 3.0 */}
      <rect x="10" y="60" width="72" height="34" rx="2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="14" y="65" width="64" height="13" rx="1.5" fill="#2563eb" />
      <rect x="25" y="69" width="7" height="3" fill="#fbbf24" />
      <rect x="37" y="69" width="7" height="3" fill="#fbbf24" />
      <rect x="49" y="69" width="7" height="3" fill="#fbbf24" />
      <rect x="61" y="69" width="7" height="3" fill="#fbbf24" />
      <text x="46" y="89" fill="#93c5fd" fontSize="7" fontWeight="bold" textAnchor="middle">USB 3.0</text>

      {/* HDMI Port Underneath */}
      <g transform="translate(10, 120)">
        <rect x="0" y="0" width="72" height="48" rx="3" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M12 12 L60 12 L54 36 L18 36 Z" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
        <rect x="22" y="17" width="28" height="6" rx="1" fill="#fbbf24" />
        <text x="36" y="32" fill="#f8fafc" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">HDMI</text>
      </g>
      <text x="46" y="195" fill="#c084fc" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">منفذ HDMI 📺</text>
    </g>

    {/* Section 3: Middle Stack 2 (Ethernet RJ45 on top + Dual USB 3.0 below) */}
    <g transform="translate(216, 30)">
      <rect x="0" y="0" width="92" height="215" rx="5" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
      
      {/* Ethernet RJ-45 Jack (Top) */}
      <g transform="translate(10, 15)">
        <rect x="0" y="0" width="72" height="62" rx="3" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* Notch for clip */}
        <rect x="26" y="0" width="20" height="12" fill="#334155" />
        {/* 8 Gold Pins */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((p) => (
          <line key={p} x1={15 + p * 6} y1="20" x2={15 + p * 6} y2="40" stroke="#fbbf24" strokeWidth="1.5" />
        ))}
        {/* LEDs */}
        <circle cx="12" cy="52" r="3.5" fill="#22c55e" stroke="#14532d" strokeWidth="0.8" />
        <circle cx="60" cy="52" r="3.5" fill="#eab308" stroke="#713f12" strokeWidth="0.8" />
        <text x="36" y="55" fill="#22c55e" fontSize="7" fontWeight="bold" textAnchor="middle">LAN / RJ45</text>
      </g>

      {/* USB 3.0 Port 3 */}
      <rect x="10" y="90" width="72" height="34" rx="2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="14" y="95" width="64" height="13" rx="1.5" fill="#2563eb" />
      <rect x="25" y="99" width="7" height="3" fill="#fbbf24" />
      <rect x="37" y="99" width="7" height="3" fill="#fbbf24" />
      <rect x="49" y="99" width="7" height="3" fill="#fbbf24" />
      <rect x="61" y="99" width="7" height="3" fill="#fbbf24" />

      {/* USB 3.0 Port 4 */}
      <rect x="10" y="135" width="72" height="34" rx="2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="14" y="140" width="64" height="13" rx="1.5" fill="#2563eb" />
      <rect x="25" y="144" width="7" height="3" fill="#fbbf24" />
      <rect x="37" y="144" width="7" height="3" fill="#fbbf24" />
      <rect x="49" y="144" width="7" height="3" fill="#fbbf24" />
      <rect x="61" y="144" width="7" height="3" fill="#fbbf24" />

      <text x="46" y="195" fill="#4ade80" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">شبكة Ethernet 🌐</text>
    </g>

    {/* Section 4: Right Audio Stack (Blue Line-in, Green Audio-out, Pink Mic) */}
    <g transform="translate(324, 30)">
      <rect x="0" y="0" width="85" height="215" rx="5" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="42" y="20" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">AUDIO</text>
      
      {/* Blue: Line In */}
      <g transform="translate(42, 50)">
        <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="#0284c7" />
        <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#000" strokeWidth="1.5" />
      </g>

      {/* Green: Line Out / Headphones */}
      <g transform="translate(42, 105)">
        <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="#16a34a" />
        <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#000" strokeWidth="1.5" />
      </g>

      {/* Pink: Microphone */}
      <g transform="translate(42, 160)">
        <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="#ec4899" />
        <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#000" strokeWidth="1.5" />
      </g>

      <text x="42" y="200" fill="#f472b6" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">مقابس الصوت 🔊</text>
    </g>

    {/* Bottom Callout Banner */}
    <rect x="24" y="252" width="402" height="26" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
    <text x="225" y="269" fill="#93c5fd" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
      لوحة المنافذ والواجهات الخلفية للكمبيوتر (Motherboard I/O Panel)
    </text>
  </svg>
);

/** 20. Stylized USB Cable Plug (كابل وموصل USB) */
export const UsbCableSvg = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cable Cord */}
    <path d="M40 75 L40 54" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
    {/* Strain Relief Boot */}
    <rect x="34" y="46" width="12" height="10" rx="2" fill="#1e293b" stroke="#334155" strokeWidth="1" />
    {/* Plug Body */}
    <rect x="30" y="26" width="20" height="22" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
    <circle cx="40" cy="37" r="3" fill="#3b82f6" />
    {/* Metal Shield Plug */}
    <rect x="32" y="10" width="16" height="16" rx="1.5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
    <rect x="34" y="14" width="12" height="6" fill="#2563eb" />
    <rect x="36" y="16" width="2" height="3" fill="#fbbf24" />
    <rect x="42" y="16" width="2" height="3" fill="#fbbf24" />
    <text x="40" y="76" fill="var(--pen-blue)" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">USB</text>
  </svg>
);

/** 21. Stylized HDMI Cable Plug (كابل وموصل HDMI) */
export const HdmiCableSvg = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cable Cord */}
    <path d="M40 75 L40 52" stroke="#64748b" strokeWidth="9" strokeLinecap="round" />
    {/* Strain Relief Boot */}
    <rect x="33" y="44" width="14" height="10" rx="2" fill="#1e293b" stroke="#334155" strokeWidth="1" />
    {/* Plug Body */}
    <rect x="28" y="24" width="24" height="22" rx="3" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
    <text x="40" y="38" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HDMI</text>
    {/* Gold HDMI Trapezoid Plug */}
    <path d="M30 10 L50 10 L46 24 L34 24 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
    <rect x="36" y="14" width="8" height="4" rx="1" fill="#1e293b" />
    <text x="40" y="76" fill="var(--pen-purple)" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">HDMI</text>
  </svg>
);

/** 22. Stylized Ethernet RJ-45 Plug (كابل وموصل Ethernet) */
export const EthernetCableSvg = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cable Cord */}
    <path d="M40 75 L40 52" stroke="#2563eb" strokeWidth="9" strokeLinecap="round" />
    {/* Blue Boot / Snagless Hood */}
    <path d="M31 46 Q40 40 49 46 L47 56 L33 56 Z" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1" />
    {/* Clear Plastic Modular Body */}
    <rect x="30" y="20" width="20" height="26" rx="2" fill="rgba(241, 245, 249, 0.85)" stroke="#94a3b8" strokeWidth="1.5" />
    {/* 8 Gold Pins */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <line key={i} x1={32 + i * 2.2} y1="12" x2={32 + i * 2.2} y2="18" stroke="#fbbf24" strokeWidth="1.2" />
    ))}
    {/* Front Contact Nose */}
    <rect x="31" y="10" width="18" height="10" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
    {/* Retaining Latch / Clip */}
    <path d="M36 24 L40 14 L44 24" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <text x="40" y="76" fill="var(--pen-green)" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">RJ-45</text>
  </svg>
);

/** 23. Realistic Network Hub (المحور - Hub بـ 8 منافذ RJ-45) */
export const HubDeviceSvg = ({ width = 440, height = 210 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 440 210" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="220" cy="195" rx="190" ry="12" fill="rgba(0,0,0,0.3)" />

    {/* Top Angled Surface (Perspective 3D Box) */}
    <polygon points="40,65 140,20 390,20 320,65" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
    {/* Top Ventilation Grille Dots */}
    <g fill="#172554">
      {[0, 1, 2, 3, 4].map((r) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((c) => (
          <circle key={`${r}-${c}`} cx={240 + c * 14 + (r % 2) * 6} cy={30 + r * 6} r="1.5" />
        ))
      )}
    </g>

    {/* Right Angled Side */}
    <polygon points="320,65 390,20 410,60 340,125" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />

    {/* Main Front / Rear Port Face */}
    <rect x="40" y="65" width="300" height="110" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
    <rect x="44" y="69" width="292" height="102" rx="3" fill="#1e293b" />

    {/* Port Section Bezel */}
    <rect x="50" y="85" width="250" height="65" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />

    {/* 8 LAN RJ-45 Ports (Numbered 8 to 1 from left to right as in hardware) */}
    {[
      { num: 'UpLink', x: 55 },
      { num: '8', x: 82 },
      { num: '7', x: 108 },
      { num: '6', x: 134 },
      { num: '5', x: 160 },
      { num: '4', x: 186 },
      { num: '3', x: 212 },
      { num: '2', x: 238 },
      { num: '1', x: 264 },
    ].map((port) => (
      <g key={port.num} transform={`translate(${port.x}, 92)`}>
        {/* Metal Port Outer */}
        <rect x="0" y="0" width="22" height="38" rx="2" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
        {/* Black Jack Interior */}
        <rect x="2" y="4" width="18" height="28" rx="1.5" fill="#020617" />
        {/* Notch */}
        <rect x="6" y="4" width="10" height="6" fill="#334155" />
        {/* Gold Pins */}
        <line x1="5" y1="12" x2="5" y2="24" stroke="#fbbf24" strokeWidth="0.8" />
        <line x1="8" y1="12" x2="8" y2="24" stroke="#fbbf24" strokeWidth="0.8" />
        <line x1="11" y1="12" x2="11" y2="24" stroke="#fbbf24" strokeWidth="0.8" />
        <line x1="14" y1="12" x2="14" y2="24" stroke="#fbbf24" strokeWidth="0.8" />
        <line x1="17" y1="12" x2="17" y2="24" stroke="#fbbf24" strokeWidth="0.8" />
        {/* LED Link Indicator */}
        <circle cx="11" cy="34" r="1.8" fill="#22c55e" />
        {/* Port Number Label */}
        <text x="11" y="48" fill="#93c5fd" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          {port.num}
        </text>
      </g>
    ))}

    {/* DC Power Jack (Right) */}
    <g transform="translate(308, 105)">
      <circle cx="12" cy="12" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="#64748b" />
      <circle cx="12" cy="12" r="1.5" fill="#020617" />
      <text x="12" y="32" fill="#94a3b8" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DC IN</text>
    </g>

    {/* Callout Title Banner */}
    <rect x="60" y="180" width="260" height="22" rx="4" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
    <text x="190" y="195" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
      جهاز المحور (Hub) · يربط أجهزة الشبكة بكابلات Ethernet
    </text>
  </svg>
);

/** 24. Realistic Network Router (جهاز التوجيه - Router) */
export const RouterDeviceSvg = ({ width = 450, height = 210 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 450 210" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="210" cy="190" rx="180" ry="14" fill="rgba(0,0,0,0.3)" />

    {/* Wi-Fi Antenna on Right */}
    <g transform="translate(370, 20)">
      {/* Pivot Base */}
      <rect x="0" y="100" width="16" height="30" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="8" cy="115" r="4" fill="#64748b" />
      {/* Tall Antenna Rod */}
      <rect x="4" y="0" width="8" height="102" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="8" y1="10" x2="8" y2="90" stroke="#cbd5e1" strokeWidth="1" />
      <text x="8" y="-5" fill="#3b82f6" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">Wi-Fi 📡</text>
    </g>

    {/* Router Body (Curved Modern Shell) */}
    <path
      d="M30 145 C30 80, 70 65, 210 65 C350 65, 380 80, 380 145 C380 165, 360 175, 210 175 C60 175, 30 165, 30 145 Z"
      fill="#f8fafc"
      stroke="#cbd5e1"
      strokeWidth="2.5"
    />
    <path
      d="M40 142 C40 85, 75 72, 210 72 C345 72, 370 85, 370 142 C370 155, 350 165, 210 165 C70 165, 40 155, 40 142 Z"
      fill="#e2e8f0"
    />

    {/* Rear Ports Inset Cutout */}
    <rect x="75" y="105" width="280" height="50" rx="5" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />

    {/* Power DC In Jack */}
    <circle cx="95" cy="130" r="7" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
    <circle cx="95" cy="130" r="2.5" fill="#000" />
    <text x="95" y="148" fill="#94a3b8" fontSize="6" fontWeight="bold" textAnchor="middle">POWER</text>

    {/* Power Button */}
    <circle cx="120" cy="130" r="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
    <text x="120" y="148" fill="#94a3b8" fontSize="6" fontWeight="bold" textAnchor="middle">ON/OFF</text>

    {/* 4 Yellow Ethernet LAN Ports (RJ-45) */}
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${150 + i * 36}, 112)`}>
        {/* Yellow Bezel */}
        <rect x="0" y="0" width="30" height="34" rx="2" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
        {/* Black Port Interior */}
        <rect x="3" y="4" width="24" height="24" rx="1.5" fill="#020617" />
        {/* Plug Insert (RJ-45 Cable Head plugged in) */}
        <rect x="5" y="8" width="20" height="18" rx="1" fill="#facc15" stroke="#a16207" strokeWidth="1" />
        <rect x="9" y="10" width="12" height="6" fill="#fbbf24" />
        <text x="15" y="34" fill="#020617" fontSize="6" fontWeight="900" textAnchor="middle">
          {`L${4 - i}`}
        </text>
      </g>
    ))}

    {/* 1 Grey/Blue WAN (Internet) Port */}
    <g transform="translate(300, 112)">
      <rect x="0" y="0" width="30" height="34" rx="2" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
      <rect x="3" y="4" width="24" height="24" rx="1.5" fill="#020617" />
      <rect x="5" y="8" width="20" height="18" rx="1" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
      <text x="15" y="34" fill="#ffffff" fontSize="6" fontWeight="900" textAnchor="middle">WAN</text>
    </g>

    {/* Realistic Yellow & Grey Network Cables flowing down */}
    <path d="M165 130 C165 170, 130 190, 100 205" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M201 130 C201 165, 180 185, 170 205" stroke="#eab308" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M237 130 C237 165, 250 185, 260 205" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M273 130 C273 170, 310 190, 330 205" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M315 130 C315 160, 350 180, 370 200" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" fill="none" />

    {/* Title Banner */}
    <rect x="65" y="180" width="280" height="22" rx="4" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
    <text x="205" y="195" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
      جهاز التوجيه (Router) · يوجه البيانات بين الشبكات المختلفة
    </text>
  </svg>
);

/** 25. Visual Topology Diagram for School Lab Wired LAN (مخطط معمل المدرسة السلكي) */
export const LanNetworkDiagramSvg = ({ width = 450, height = 210 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 450 210" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Device (Hub / Switch) */}
    <rect x="180" y="85" width="90" height="40" rx="6" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
    <text x="225" y="103" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">جهاز Hub / راوتر</text>
    <text x="225" y="117" fill="#93c5fd" fontSize="8" textAnchor="middle" fontFamily="Cairo, sans-serif">موزع الشبكة 🔀</text>

    {/* Cables to Workstations */}
    <line x1="180" y1="95" x2="90" y2="45" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 3" />
    <line x1="270" y1="95" x2="360" y2="45" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 3" />
    <line x1="180" y1="115" x2="90" y2="165" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 3" />
    <line x1="270" y1="115" x2="360" y2="165" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 3" />

    {/* Station 1: Top-Left */}
    <g transform="translate(30, 20)">
      <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="35" y="20" fill="#f8fafc" fontSize="16" textAnchor="middle">💻</text>
      <text x="35" y="36" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">جهاز ١ (معمل)</text>
    </g>

    {/* Station 2: Top-Right */}
    <g transform="translate(350, 20)">
      <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="35" y="20" fill="#f8fafc" fontSize="16" textAnchor="middle">💻</text>
      <text x="35" y="36" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">جهاز ٢ (معمل)</text>
    </g>

    {/* Station 3: Bottom-Left */}
    <g transform="translate(30, 145)">
      <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="35" y="20" fill="#f8fafc" fontSize="16" textAnchor="middle">💻</text>
      <text x="35" y="36" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">جهاز ٣ (معمل)</text>
    </g>

    {/* Station 4: Bottom-Right (Network Printer) */}
    <g transform="translate(350, 145)">
      <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
      <text x="35" y="20" fill="#f8fafc" fontSize="16" textAnchor="middle">🖨️</text>
      <text x="35" y="36" fill="#22c55e" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">طابعة مشتركة</text>
    </g>

    {/* Label */}
    <text x="225" y="165" fill="#4ade80" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo, sans-serif">
      تبادل البيانات ومشاركة الطابعة عبر كابلات Ethernet
    </text>
  </svg>
);
