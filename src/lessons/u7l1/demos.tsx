import { useState } from 'react';
import { arNum } from '../../kit/blocks';
import { HwBadge, PortBadge, GoldenRule } from './common';

/* =========================================================================
   1. Computer Architecture & Flow Simulator (معمل بنية الكمبيوتر وتدفق البيانات والتحكم)
   ========================================================================= */

type ComponentKey = 'cu' | 'alu' | 'ram' | 'storage' | 'input' | 'output';

interface ComponentDetail {
  titleAr: string;
  titleEn: string;
  category: string;
  role: string;
  examples: string[];
  color: 'orange' | 'purple' | 'blue' | 'green' | 'red';
  icon: string;
  keyRule: string;
}

const COMPONENTS_INFO: Record<ComponentKey, ComponentDetail> = {
  cu: {
    titleAr: 'وحدة التحكم',
    titleEn: 'Control Unit (CU)',
    category: 'المعالج (CPU)',
    role: 'تنفذ التعليمات (instructions) وتُصدر الأوامر (commands) لكل وظيفة في الحاسوب.',
    examples: ['جلب التعليمات من RAM', 'توجيه ALU لإجراء العمليات', 'إصدار إشارات القراءة والكتابة'],
    color: 'orange',
    icon: '🧭',
    keyRule: 'تدفق التحكم يخرج حصرياً من وحدة التحكم إلى جميع المكونات الأربعة الأخرى.',
  },
  alu: {
    titleAr: 'وحدة الحساب والمنطق',
    titleEn: 'Arithmetic Logic Unit (ALU)',
    category: 'المعالج (CPU)',
    role: 'تؤدي الحسابات (calculations) مثل الجمع والضرب، والعمليات المنطقية والمقارنات.',
    examples: ['العمليات الحسابية: + - × ÷', 'المقارنات المنطقية: > < = ≠', 'العمليات الثنائية: AND, OR, NOT'],
    color: 'red',
    icon: '⚡',
    keyRule: 'تتحد مع وحدة التحكم لتشكيل المعالج (Processor / CPU).',
  },
  ram: {
    titleAr: 'وحدة الذاكرة الرئيسية',
    titleEn: 'Primary Memory (RAM)',
    category: 'جهاز التخزين (مؤقت)',
    role: 'تخزن مؤقتاً (Temporarily) البرامج والبيانات قيد التشغيل، وتتبادلها مباشرة وبسرعة فائقة مع المعالج.',
    examples: ['ذاكرة الوصول العشوائي (RAM)', 'البرامج المفتوحة حالياً', 'بيانات العمليات الجارية'],
    color: 'blue',
    icon: '🧠',
    keyRule: 'القلب الوسيط لتدفق البيانات؛ تدخل إليها البيانات من الإدخال وتخرج منها للإخراج والمعالج.',
  },
  storage: {
    titleAr: 'ذاكرة التخزين الثانوية',
    titleEn: 'Secondary Storage',
    category: 'جهاز التخزين (مدى طويل)',
    role: 'تخزين البرامج والبيانات على المدى الطويل (Long-term) والاحتفاظ بها حتى بعد انقطاع التيار الكهربائي.',
    examples: ['القرص الصلب (HDD)', 'القرص ذو الحالة الصلبة (SSD)', 'ذاكرة فلاش USB', 'أقراص التخزين الخارجية'],
    color: 'purple',
    icon: '💾',
    keyRule: 'تتبادل البيانات حصرياً مع الذاكرة الرئيسية لحفظ الملفات أو تحميلها.',
  },
  input: {
    titleAr: 'أجهزة الإدخال',
    titleEn: 'Input Devices',
    category: 'الأجهزة الطرفية',
    role: 'تُدخل (inputs) المعلومات والبيانات من مصادر خارجية إلى داخل الكمبيوتر.',
    examples: ['لوحة المفاتيح (Keyboard)', 'الفأرة (Mouse)', 'الماسح الضوئي (Scanner)', 'الميكروفون'],
    color: 'blue',
    icon: '⌨️',
    keyRule: 'ترسل تدفق البيانات مباشرة إلى الذاكرة الرئيسية (RAM)، وتتلقى أوامرها من وحدة التحكم.',
  },
  output: {
    titleAr: 'أجهزة الإخراج',
    titleEn: 'Output Devices',
    category: 'الأجهزة الطرفية',
    role: 'تُخرج (outputs) المعلومات والنتائج المعالجة إلى خارج الكمبيوتر للمستخدم.',
    examples: ['شاشة العرض (Monitor)', 'الطابعة (Printer)', 'السماعات (Speakers)', 'البروجكتور'],
    color: 'green',
    icon: '🖥️',
    keyRule: 'تستقبل تدفق البيانات حصرياً من الذاكرة الرئيسية (RAM) بتوجيه من وحدة التحكم.',
  },
};

type ScenarioKey = 'idle' | 'add' | 'save' | 'print';

interface ScenarioStep {
  text: string;
  activeComp: ComponentKey[];
  flowType: 'control' | 'data' | 'both';
}

const SCENARIOS: Record<ScenarioKey, { title: string; steps: ScenarioStep[] }> = {
  idle: {
    title: 'وضع الاستعداد والمراقبة',
    steps: [
      {
        text: 'انقر على أي مكون بالرسم لمعرفة دوره ووظيفته، أو اختر سيناريو عملي من الأزرار بالأعلى لمشاهدة حركة الإشارات.',
        activeComp: [],
        flowType: 'both',
      },
    ],
  },
  add: {
    title: 'سيناريو: إجراء عملية حسابية (5 + 3 = 8)',
    steps: [
      {
        text: '١. يقوم المستخدم بإدخال الرقمين 5 و 3 وأمر الجمع عبر جهاز الإدخال (لوحة المفاتيح).',
        activeComp: ['input', 'ram'],
        flowType: 'data',
      },
      {
        text: '٢. وحدة التحكم (CU) تجلب التعليمة من الذاكرة الرئيسية (RAM) وتصدر أمراً لوحدة ALU بإجراء الجمع.',
        activeComp: ['cu', 'alu', 'ram'],
        flowType: 'control',
      },
      {
        text: '٣. تنقل الذاكرة الرئيسية الرقمين 5 و 3 إلى وحدة الحساب والمنطق (ALU).',
        activeComp: ['ram', 'alu'],
        flowType: 'data',
      },
      {
        text: '٤. تقوم ALU بحساب النتيجة (8) وتُعيدها لتُسجل في الذاكرة الرئيسية (RAM).',
        activeComp: ['alu', 'ram'],
        flowType: 'data',
      },
      {
        text: '٥. وحدة التحكم (CU) تصدر أمراً بعرض الناتج، فتنتقل النتيجة 8 من الذاكرة الرئيسية إلى الشاشة (الإخراج).',
        activeComp: ['cu', 'ram', 'output'],
        flowType: 'both',
      },
    ],
  },
  save: {
    title: 'سيناريو: فتح وتعديل وحفظ ملف على القرص الثانوي',
    steps: [
      {
        text: '١. ينقر المستخدم على ملف محفوظ في القرص الثانوي (SSD/HDD).',
        activeComp: ['input', 'cu'],
        flowType: 'control',
      },
      {
        text: '٢. وحدة التحكم تُصدر أمراً بنقل نسخة من الملف من التخزين الثانوي إلى الذاكرة الرئيسية (RAM).',
        activeComp: ['cu', 'storage', 'ram'],
        flowType: 'data',
      },
      {
        text: '٣. يتم عرض الملف على الشاشة وتعديله من خلال الذاكرة والمعالج.',
        activeComp: ['ram', 'cu', 'output'],
        flowType: 'both',
      },
      {
        text: '٤. عند الضغط على "حفظ"، تأمر وحدة التحكم بكتابة التعديلات من RAM إلى القرص الثانوي لتخزينها على المدى الطويل.',
        activeComp: ['cu', 'ram', 'storage'],
        flowType: 'data',
      },
    ],
  },
  print: {
    title: 'سيناريو: طباعة تقرير أو مستند ورقي',
    steps: [
      {
        text: '١. يُعطي المستخدم أمر الطباعة عبر النقر بالفأرة أو اختصار لوحة المفاتيح.',
        activeComp: ['input', 'cu'],
        flowType: 'control',
      },
      {
        text: '٢. تستقبل وحدة التحكم (CU) إشارة الأمر وتتأكد من جاهزية الذاكرة الرئيسية وجهاز الطابعة.',
        activeComp: ['cu', 'ram', 'output'],
        flowType: 'control',
      },
      {
        text: '٣. يتم إرسال بيانات المستند من الذاكرة الرئيسية (RAM) مباشرة إلى الطابعة (جهاز الإخراج) عبر كابل الواجهة (USB).',
        activeComp: ['ram', 'output'],
        flowType: 'data',
      },
      {
        text: '٤. تُخرج الطابعة الورقة المطبوعة، وتُرسل إشارة انتهاء المهمة لوحدة التحكم.',
        activeComp: ['output', 'cu'],
        flowType: 'control',
      },
    ],
  },
};

export const ArchitectureFlowSimulator = () => {
  const [selectedComp, setSelectedComp] = useState<ComponentKey>('cu');
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('idle');
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [showControlFlow, setShowControlFlow] = useState<boolean>(true);
  const [showDataFlow, setShowDataFlow] = useState<boolean>(true);

  const scenario = SCENARIOS[activeScenario];
  const currentStep = scenario.steps[stepIndex] || scenario.steps[0];
  const info = COMPONENTS_INFO[selectedComp];

  const handleScenarioChange = (s: ScenarioKey) => {
    setActiveScenario(s);
    setStepIndex(0);
  };

  const nextStep = () => {
    if (stepIndex < scenario.steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const isHighlighted = (comp: ComponentKey) => {
    if (activeScenario === 'idle') return selectedComp === comp;
    return currentStep.activeComp.includes(comp);
  };

  return (
    <div
      style={{
        backgroundColor: '#0d131f',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        color: '#f8fafc',
        border: '2px solid rgba(59, 130, 246, 0.3)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        direction: 'rtl',
      }}
    >
      {/* Top Header & Toggles */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🖥️</span>
            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: '#60a5fa' }}>
              محاكي بنية الكمبيوتر التفاعلي · تدفق التحكم وتدفق البيانات
            </h3>
          </div>
          <p style={{ margin: '0.25rem 0 0', color: '#94a3b8', fontSize: '0.95rem' }}>
            المخطط المعماري المعتمد للحاسوب: المعالج (CPU: CU + ALU)، التخزين (RAM + SSD)، الإدخال، والإخراج
          </p>
        </div>

        {/* Legend / Toggles */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={() => setShowControlFlow(!showControlFlow)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: showControlFlow ? 'rgba(249, 115, 22, 0.2)' : '#1e293b',
              border: `2px solid ${showControlFlow ? '#f97316' : '#475569'}`,
              color: showControlFlow ? '#fdba74' : '#94a3b8',
              borderRadius: '0.6rem',
              padding: '0.4rem 0.8rem',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <span style={{ display: 'inline-block', width: '22px', height: '3px', backgroundColor: '#f97316' }} />
            <span>تدفق التحكم (خط متصل من CU)</span>
          </button>

          <button
            onClick={() => setShowDataFlow(!showDataFlow)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: showDataFlow ? 'rgba(56, 189, 248, 0.2)' : '#1e293b',
              border: `2px solid ${showDataFlow ? '#38bdf8' : '#475569'}`,
              color: showDataFlow ? '#7dd3fc' : '#94a3b8',
              borderRadius: '0.6rem',
              padding: '0.4rem 0.8rem',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <span style={{ display: 'inline-block', width: '22px', borderTop: '3px dashed #38bdf8' }} />
            <span>تدفق البيانات (خط منقط)</span>
          </button>
        </div>
      </div>

      {/* Scenario Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem', backgroundColor: '#131e32', padding: '0.75rem', borderRadius: '0.85rem' }}>
        <span style={{ alignSelf: 'center', color: '#93c5fd', fontWeight: 'bold', fontSize: '0.9rem' }}>
          🎯 اختر تجربة عملية:
        </span>
        <button
          onClick={() => handleScenarioChange('idle')}
          style={{
            backgroundColor: activeScenario === 'idle' ? '#2563eb' : '#1e293b',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.45rem 0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          🔍 استكشاف المكونات
        </button>
        <button
          onClick={() => handleScenarioChange('add')}
          style={{
            backgroundColor: activeScenario === 'add' ? '#ea580c' : '#1e293b',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.45rem 0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          ➕ جمع رقمين (5 + 3 = 8)
        </button>
        <button
          onClick={() => handleScenarioChange('save')}
          style={{
            backgroundColor: activeScenario === 'save' ? '#7c3aed' : '#1e293b',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.45rem 0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          💾 حفظ ملف بالقرص الثانوي
        </button>
        <button
          onClick={() => handleScenarioChange('print')}
          style={{
            backgroundColor: activeScenario === 'print' ? '#16a34a' : '#1e293b',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.45rem 0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          🖨️ طباعة مستند
        </button>
      </div>

      {/* Main Architecture Diagram SVG + Interactive Overlay */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#070b14',
          borderRadius: '1rem',
          border: '1.5px solid #1e293b',
          overflow: 'hidden',
          padding: '1.25rem',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1.5rem', alignItems: 'center', minHeight: '340px' }}>
          
          {/* COLUMN 1: INPUT DEVICES */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
            <div
              onClick={() => { setSelectedComp('input'); setActiveScenario('idle'); }}
              style={{
                width: '100%',
                backgroundColor: isHighlighted('input') ? 'rgba(20, 184, 166, 0.25)' : '#0f172a',
                border: `2.5px ${isHighlighted('input') ? 'solid #14b8a6' : 'dashed #334155'}`,
                borderRadius: '0.85rem',
                padding: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isHighlighted('input') ? '0 0 20px rgba(20, 184, 166, 0.4)' : 'none',
              }}
            >
              <div style={{ fontSize: '2rem' }}>⌨️</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#2dd4bf', marginTop: '0.3rem' }}>
                جهاز الإدخال
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>Input Device</div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.4rem', backgroundColor: '#1e293b', padding: '0.2rem 0.5rem', borderRadius: '0.4rem' }}>
                كيبورد · ماوس · ماسح
              </div>
            </div>

            {/* Indicator Flow to RAM */}
            {showDataFlow && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 'bold' }}>
                <span>تدفق بيانات</span>
                <span style={{ fontSize: '1.1rem' }}>⮂</span>
              </div>
            )}
          </div>

          {/* COLUMN 2: CENTER (CPU + STORAGE) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Top Box: CPU Container (CU + ALU) */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                border: '2px solid #3b82f6',
                borderRadius: '1rem',
                padding: '1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '1px solid #334155', paddingBottom: '0.4rem' }}>
                <span style={{ color: '#60a5fa', fontWeight: 900, fontSize: '1.1rem' }}>
                  ⚡ المعالج: وحدة المعالجة المركزية (CPU)
                </span>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#93c5fd', padding: '0.15rem 0.5rem', borderRadius: '0.4rem' }}>
                  المكونان الرئيسيان ١ و ٢
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {/* CU */}
                <div
                  onClick={() => { setSelectedComp('cu'); setActiveScenario('idle'); }}
                  style={{
                    backgroundColor: isHighlighted('cu') ? 'rgba(249, 115, 22, 0.25)' : '#0f172a',
                    border: `2.5px ${isHighlighted('cu') ? 'solid #f97316' : 'solid #475569'}`,
                    borderRadius: '0.75rem',
                    padding: '0.85rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isHighlighted('cu') ? '0 0 18px rgba(249, 115, 22, 0.5)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '1.6rem' }}>🧭</div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fb923c' }}>وحدة التحكم</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Control Unit (CU)</div>
                  <div style={{ fontSize: '0.7rem', color: '#fdba74', marginTop: '0.3rem' }}>تنفيذ التعليمات وإصدار الأوامر</div>
                </div>

                {/* ALU */}
                <div
                  onClick={() => { setSelectedComp('alu'); setActiveScenario('idle'); }}
                  style={{
                    backgroundColor: isHighlighted('alu') ? 'rgba(239, 68, 68, 0.25)' : '#0f172a',
                    border: `2.5px ${isHighlighted('alu') ? 'solid #ef4444' : 'solid #475569'}`,
                    borderRadius: '0.75rem',
                    padding: '0.85rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isHighlighted('alu') ? '0 0 18px rgba(239, 68, 68, 0.5)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '1.6rem' }}>⚡</div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#f87171' }}>وحدة الحساب والمنطق</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ALU</div>
                  <div style={{ fontSize: '0.7rem', color: '#fca5a5', marginTop: '0.3rem' }}>العمليات الحسابية والمنطقية</div>
                </div>
              </div>
            </div>

            {/* Bottom Box: Storage Container (Primary RAM + Secondary Storage) */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                border: '2px solid #8b5cf6',
                borderRadius: '1rem',
                padding: '1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '1px solid #334155', paddingBottom: '0.4rem' }}>
                <span style={{ color: '#c084fc', fontWeight: 900, fontSize: '1.1rem' }}>
                  💾 جهاز التخزين (Storage Devices)
                </span>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(139, 92, 246, 0.2)', color: '#d8b4fe', padding: '0.15rem 0.5rem', borderRadius: '0.4rem' }}>
                  المكونان الرئيسيان ٣ و ٤
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {/* RAM (Primary) */}
                <div
                  onClick={() => { setSelectedComp('ram'); setActiveScenario('idle'); }}
                  style={{
                    backgroundColor: isHighlighted('ram') ? 'rgba(59, 130, 246, 0.25)' : '#0f172a',
                    border: `2.5px ${isHighlighted('ram') ? 'solid #3b82f6' : 'solid #475569'}`,
                    borderRadius: '0.75rem',
                    padding: '0.85rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isHighlighted('ram') ? '0 0 18px rgba(59, 130, 246, 0.5)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '1.6rem' }}>🧠</div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#60a5fa' }}>الذاكرة الرئيسية</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Primary Memory (RAM)</div>
                  <div style={{ fontSize: '0.7rem', color: '#93c5fd', marginTop: '0.3rem' }}>تخزين مؤقت سريع (القلب الوسيط)</div>
                </div>

                {/* Secondary Storage */}
                <div
                  onClick={() => { setSelectedComp('storage'); setActiveScenario('idle'); }}
                  style={{
                    backgroundColor: isHighlighted('storage') ? 'rgba(168, 85, 247, 0.25)' : '#0f172a',
                    border: `2.5px ${isHighlighted('storage') ? 'solid #a855f7' : 'solid #475569'}`,
                    borderRadius: '0.75rem',
                    padding: '0.85rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isHighlighted('storage') ? '0 0 18px rgba(168, 85, 247, 0.5)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '1.6rem' }}>💽</div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#c084fc' }}>الذاكرة الثانوية</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Secondary Storage</div>
                  <div style={{ fontSize: '0.7rem', color: '#e9d5ff', marginTop: '0.3rem' }}>تخزين طويل الأجل (SSD / HDD)</div>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMN 3: OUTPUT DEVICES */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
            <div
              onClick={() => { setSelectedComp('output'); setActiveScenario('idle'); }}
              style={{
                width: '100%',
                backgroundColor: isHighlighted('output') ? 'rgba(34, 197, 94, 0.25)' : '#0f172a',
                border: `2.5px ${isHighlighted('output') ? 'solid #22c55e' : 'dashed #334155'}`,
                borderRadius: '0.85rem',
                padding: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isHighlighted('output') ? '0 0 20px rgba(34, 197, 94, 0.4)' : 'none',
              }}
            >
              <div style={{ fontSize: '2rem' }}>🖥️</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#4ade80', marginTop: '0.3rem' }}>
                جهاز الإخراج
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>Output Device</div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.4rem', backgroundColor: '#1e293b', padding: '0.2rem 0.5rem', borderRadius: '0.4rem' }}>
                شاشة · طابعة · سماعات
              </div>
            </div>

            {/* Indicator Flow from RAM */}
            {showDataFlow && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 'bold' }}>
                <span style={{ fontSize: '1.1rem' }}>⮂</span>
                <span>تدفق بيانات</span>
              </div>
            )}
          </div>

        </div>

        {/* Dynamic Scenario Walkthrough Sub-Panel */}
        {activeScenario !== 'idle' && (
          <div
            style={{
              marginTop: '1.25rem',
              backgroundColor: '#111c2e',
              border: '1.5px solid #2563eb',
              borderRadius: '0.75rem',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 800, color: '#93c5fd', fontSize: '1rem' }}>
                📍 {scenario.title} — خطوة {arNum(stepIndex + 1)} من {arNum(scenario.steps.length)}
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={prevStep}
                  disabled={stepIndex === 0}
                  style={{
                    backgroundColor: stepIndex === 0 ? '#1e293b' : '#334155',
                    color: stepIndex === 0 ? '#64748b' : '#fff',
                    border: 'none',
                    borderRadius: '0.4rem',
                    padding: '0.25rem 0.6rem',
                    cursor: stepIndex === 0 ? 'not-allowed' : 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  ◀ السابق
                </button>
                <button
                  onClick={nextStep}
                  disabled={stepIndex === scenario.steps.length - 1}
                  style={{
                    backgroundColor: stepIndex === scenario.steps.length - 1 ? '#1e293b' : '#2563eb',
                    color: stepIndex === scenario.steps.length - 1 ? '#64748b' : '#fff',
                    border: 'none',
                    borderRadius: '0.4rem',
                    padding: '0.25rem 0.6rem',
                    cursor: stepIndex === scenario.steps.length - 1 ? 'not-allowed' : 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                  }}
                >
                  التالي ▶
                </button>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.6', color: '#f1f5f9' }}>
              {currentStep.text}
            </p>
          </div>
        )}
      </div>

      {/* Selected Component Inspector Card */}
      <div
        style={{
          marginTop: '1.25rem',
          backgroundColor: '#0f172a',
          borderRadius: '0.85rem',
          border: '1.5px solid #1e293b',
          padding: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '2rem' }}>{info.icon}</span>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {info.titleAr} <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'normal' }}>({info.titleEn})</span>
              </h4>
              <span style={{ fontSize: '0.85rem', color: '#60a5fa' }}>التصنيف: {info.category}</span>
            </div>
          </div>
          <HwBadge color={info.color}>{info.titleEn}</HwBadge>
        </div>

        <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '0.75rem' }}>
          <b>الوظيفة والدور:</b> {info.role}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'bold' }}>أمثلة معتمدة:</span>
          {info.examples.map((ex, i) => (
            <span key={i} style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '0.2rem 0.6rem', borderRadius: '0.4rem', fontSize: '0.85rem' }}>
              {ex}
            </span>
          ))}
        </div>

        <GoldenRule title="قاعدة المنهج الأساسية">{info.keyRule}</GoldenRule>
      </div>
    </div>
  );
};


/* =========================================================================
   2. Ports & Interfaces Matcher Lab (معمل منافذ التوصيل والواجهات)
   ========================================================================= */

interface PeripheralItem {
  id: string;
  name: string;
  category: string;
  correctPort: 'usb' | 'hdmi' | 'ethernet';
  icon: string;
  hint: string;
}

const PERIPHERALS: PeripheralItem[] = [
  { id: 'p1', name: 'شاشة حاسوب عالية الدقة (Monitor)', category: 'عرض بصري', correctPort: 'hdmi', icon: '🖥️', hint: 'تحتاج كابل واحد ينقل الفيديو الرقمي عالي الدقة والصوت معاً' },
  { id: 'p2', name: 'لوحة مفاتيح (Keyboard)', category: 'جهاز إدخال', correctPort: 'usb', icon: '⌨️', hint: 'الواجهة الأكثر استخداماً وشيوعاً للأجهزة الطرفية' },
  { id: 'p3', name: 'جهاز التوجيه المنزلي (Router)', category: 'اتصال شبكي', correctPort: 'ethernet', icon: '🌐', hint: 'معيار اتصال سلكي لشبكات LAN السلكية في المنازل والمكاتب' },
  { id: 'p4', name: 'طابعة ليزر (Laser Printer)', category: 'جهاز إخراج', correctPort: 'usb', icon: '🖨️', hint: 'تتصل بالحاسوب عبر الواجهة الأكثر استخداماً للأجهزة الطرفية' },
  { id: 'p5', name: 'تلفزيون رقمي ومعدات صوت', category: 'صوتيات وفيديو', correctPort: 'hdmi', icon: '📺', hint: 'كابل HDMI ينقل الصوت والفيديو الرقمي في مسار واحد' },
  { id: 'p6', name: 'محول وموزع شبكة (Hub / Switch)', category: 'بنية شبكية', correctPort: 'ethernet', icon: '🖧', hint: 'توصيل سلكي مباشر لأجهزة الشبكات المحلية' },
  { id: 'p7', name: 'محرك أقراص صلبة خارجي (External HDD)', category: 'تخزين ثانوي', correctPort: 'usb', icon: '💾', hint: 'جهاز تخزين طرفي يتصل عبر منفذ USB السريع' },
];

export const PortsAndInterfacesLab = () => {
  const [selectedItem, setSelectedItem] = useState<PeripheralItem>(PERIPHERALS[0]);
  const [userChoice, setUserChoice] = useState<'usb' | 'hdmi' | 'ethernet' | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);

  const handleSelectPeripheral = (p: PeripheralItem) => {
    setSelectedItem(p);
    setUserChoice(null);
    setFeedback(null);
  };

  const handleChoosePort = (port: 'usb' | 'hdmi' | 'ethernet') => {
    setUserChoice(port);
    const isCorrect = port === selectedItem.correctPort;

    if (isCorrect) {
      setFeedback({
        isCorrect: true,
        message: `إجابة صحيحة تماماً! ${selectedItem.name} تستخدم منفذ ${port.toUpperCase()} وفقاً للمعيار القياسي.`,
      });
      if (!answeredIds.includes(selectedItem.id)) {
        setScore(score + 1);
        setAnsweredIds([...answeredIds, selectedItem.id]);
      }
    } else {
      setFeedback({
        isCorrect: false,
        message: `غير دقيق! تلميح المنهج: ${selectedItem.hint}. حاول مرة أخرى.`,
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#0c1524',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        color: '#f8fafc',
        border: '2px solid rgba(168, 85, 247, 0.35)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        direction: 'rtl',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🔌</span>
            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: '#c084fc' }}>
              معمل واجهات ومنافذ التوصيل (Interfaces & Ports)
            </h3>
          </div>
          <p style={{ margin: '0.25rem 0 0', color: '#94a3b8', fontSize: '0.95rem' }}>
            الواجهة (Interface): مكون يتوسط تبادل المعلومات، يُستخدم لتوصيل الكمبيوتر الرئيسي بالأجهزة الطرفية.
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '0.5rem 1rem', borderRadius: '0.75rem', fontWeight: 'bold', color: '#38bdf8' }}>
          الأجهزة المطابقة: {arNum(answeredIds.length)} من {arNum(PERIPHERALS.length)} 🏆
        </div>
      </div>

      {/* 3 Core Interfaces Cards (Curriculum Definitions) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        
        {/* USB */}
        <div style={{ backgroundColor: '#101b30', border: '2px solid #3b82f6', borderRadius: '0.85rem', padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <PortBadge name="USB" type="usb" />
            <span style={{ fontSize: '1.4rem' }}>🖲️</span>
          </div>
          <h5 style={{ margin: '0 0 0.4rem', color: '#93c5fd', fontSize: '1.05rem', fontWeight: 'bold' }}>
            الواجهة الأكثر استخداماً للأجهزة الطرفية
          </h5>
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.5' }}>
            متوافق مع الطابعات، لوحات المفاتيح، الفأرة، ومحركات الأقراص الصلبة الخارجية وذاكرة الفلاش.
          </p>
        </div>

        {/* HDMI */}
        <div style={{ backgroundColor: '#19112e', border: '2px solid #a855f7', borderRadius: '0.85rem', padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <PortBadge name="HDMI" type="hdmi" />
            <span style={{ fontSize: '1.4rem' }}>🎬</span>
          </div>
          <h5 style={{ margin: '0 0 0.4rem', color: '#d8b4fe', fontSize: '1.05rem', fontWeight: 'bold' }}>
            نقل الفيديو والصوت والبيانات بكابل واحد
          </h5>
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.5' }}>
            معيار اتصال عالي الدقة متوافق مع شاشات العرض وأجهزة التلفزيون الرقمية ومعدات الصوت المتطورة.
          </p>
        </div>

        {/* Ethernet */}
        <div style={{ backgroundColor: '#0d2218', border: '2px solid #22c55e', borderRadius: '0.85rem', padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <PortBadge name="Ethernet" type="ethernet" />
            <span style={{ fontSize: '1.4rem' }}>🌐</span>
          </div>
          <h5 style={{ margin: '0 0 0.4rem', color: '#86efac', fontSize: '1.05rem', fontWeight: 'bold' }}>
            الشبكات المحلية السلكية (Wired LAN)
          </h5>
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.5' }}>
            معيار اتصال للشبكات المحلية في المنازل والمكاتب، متوافق مع المحاور (Hubs) وأجهزة التوجيه (Routers).
          </p>
        </div>

      </div>

      {/* Interactive Matching Game */}
      <div style={{ backgroundColor: '#080d17', borderRadius: '1rem', border: '1.5px solid #1e293b', padding: '1.25rem' }}>
        <h4 style={{ margin: '0 0 0.75rem', color: '#f8fafc', fontSize: '1.1rem' }}>
          🎮 تمرين تطبيقي: اختر جهازاً طرفياً ثم اختر المنفذ المناسب له لتوصيله بالحاسوب:
        </h4>

        {/* Peripherals List */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
          {PERIPHERALS.map((p) => {
            const isDone = answeredIds.includes(p.id);
            const isSelected = selectedItem.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPeripheral(p)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: isSelected ? '#2563eb' : isDone ? 'rgba(34, 197, 94, 0.15)' : '#1e293b',
                  color: isSelected ? '#fff' : isDone ? '#86efac' : '#cbd5e1',
                  border: `1.5px solid ${isSelected ? '#60a5fa' : isDone ? '#22c55e' : '#334155'}`,
                  borderRadius: '0.6rem',
                  padding: '0.45rem 0.8rem',
                  cursor: 'pointer',
                  fontWeight: isSelected ? 'bold' : 'normal',
                  fontSize: '0.85rem',
                }}
              >
                <span>{p.icon}</span>
                <span>{p.name}</span>
                {isDone && <span>✓</span>}
              </button>
            );
          })}
        </div>

        {/* Active Peripheral Details & Question */}
        <div style={{ backgroundColor: '#131e32', borderRadius: '0.85rem', padding: '1.25rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '2.2rem' }}>{selectedItem.icon}</span>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#f1f5f9' }}>{selectedItem.name}</h4>
              <span style={{ fontSize: '0.85rem', color: '#93c5fd' }}>فئة الجهاز: {selectedItem.category}</span>
            </div>
          </div>

          <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', color: '#cbd5e1' }}>
            💡 <b>ما هي الواجهة الرسمية المعتمدة في المنهج لتوصيل هذا الجهاز بالكمبيوتر؟</b>
          </p>

          {/* Port Choice Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            <button
              onClick={() => handleChoosePort('usb')}
              style={{
                backgroundColor: userChoice === 'usb' ? (feedback?.isCorrect ? '#16a34a' : '#dc2626') : '#1e293b',
                border: '2px solid #3b82f6',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '0.6rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              منفذ USB
            </button>

            <button
              onClick={() => handleChoosePort('hdmi')}
              style={{
                backgroundColor: userChoice === 'hdmi' ? (feedback?.isCorrect ? '#16a34a' : '#dc2626') : '#1e293b',
                border: '2px solid #a855f7',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '0.6rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              منفذ HDMI
            </button>

            <button
              onClick={() => handleChoosePort('ethernet')}
              style={{
                backgroundColor: userChoice === 'ethernet' ? (feedback?.isCorrect ? '#16a34a' : '#dc2626') : '#1e293b',
                border: '2px solid #22c55e',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '0.6rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              منفذ Ethernet
            </button>
          </div>
        </div>

        {/* Feedback Display */}
        {feedback && (
          <div
            style={{
              backgroundColor: feedback.isCorrect ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              border: `2px solid ${feedback.isCorrect ? '#22c55e' : '#ef4444'}`,
              borderRadius: '0.75rem',
              padding: '0.9rem 1.25rem',
              color: feedback.isCorrect ? '#86efac' : '#fca5a5',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            {feedback.isCorrect ? '🎉 ' : '⚠️ '} {feedback.message}
          </div>
        )}
      </div>
    </div>
  );
};


/* =========================================================================
   3. Ministry Diagram Solver Lab (حل تفاعلي لمخطط الوزارة "تحد معلوماتك")
   ========================================================================= */

interface SlotItem {
  number: number;
  label: string;
  correctAnswer: string;
  category: string;
}

const MINISTRY_SLOTS: SlotItem[] = [
  { number: 1, label: 'الفراغ [1] داخل CPU', correctAnswer: 'وحدة التحكم', category: 'المعالج CPU' },
  { number: 2, label: 'الفراغ [2] داخل CPU', correctAnswer: 'وحدة الحساب والمنطق', category: 'المعالج CPU' },
  { number: 3, label: 'الفراغ [3] جهاز التخزين العلوي', correctAnswer: 'جهاز الذاكرة الرئيسية', category: 'التخزين المؤقت' },
  { number: 4, label: 'الفراغ [4] الطرف الأيمن', correctAnswer: 'جهاز الإدخال', category: 'الأجهزة الطرفية' },
  { number: 5, label: 'الفراغ [5] جهاز التخزين السفلي', correctAnswer: 'ذاكرة التخزين الثانوية', category: 'التخزين الدائم' },
  { number: 6, label: 'الفراغ [6] الطرف الأيسر', correctAnswer: 'جهاز الإخراج', category: 'الأجهزة الطرفية' },
];

const AVAILABLE_OPTIONS = [
  'جهاز الإدخال',
  'جهاز الإخراج',
  'وحدة التحكم',
  'وحدة الحساب والمنطق',
  'جهاز الذاكرة الرئيسية',
  'ذاكرة التخزين الثانوية',
];

export const MinistryDiagramSolverLab = () => {
  const [userSlots, setUserSlots] = useState<Record<number, string>>({});
  const [selectedSlotNum, setSelectedSlotNum] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectOption = (opt: string) => {
    setUserSlots({ ...userSlots, [selectedSlotNum]: opt });
    if (selectedSlotNum < 6) {
      setSelectedSlotNum(selectedSlotNum + 1);
    }
  };

  const handleReset = () => {
    setUserSlots({});
    setSelectedSlotNum(1);
    setIsSubmitted(false);
  };

  const calculateCorrectCount = () => {
    let count = 0;
    MINISTRY_SLOTS.forEach((slot) => {
      // In Ministry exam notes: [1] and [2] can be swapped (CU and ALU)
      if (slot.number === 1 || slot.number === 2) {
        const ans = userSlots[slot.number];
        if (ans === 'وحدة التحكم' || ans === 'وحدة الحساب والمنطق') {
          count++;
        }
      } else if (userSlots[slot.number] === slot.correctAnswer) {
        count++;
      }
    });
    return count;
  };

  const correctCount = calculateCorrectCount();

  return (
    <div
      style={{
        backgroundColor: '#0a101d',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        color: '#f8fafc',
        border: '2px solid rgba(234, 179, 8, 0.35)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        direction: 'rtl',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🏆</span>
            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: '#facc15' }}>
              معمل حل مخطط بنية الحاسوب التفاعلي الشامل
            </h3>
          </div>
          <p style={{ margin: '0.25rem 0 0', color: '#94a3b8', fontSize: '0.95rem' }}>
            تطبيق عملي لسؤال "تحدَّ معلوماتك": اسكن المكونات الصحيحة في الفراغات [1] إلى [6] على مخطط تدفق البيانات والتحكم.
          </p>
        </div>

        <button
          onClick={handleReset}
          style={{
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            border: '1px solid #475569',
            borderRadius: '0.6rem',
            padding: '0.4rem 0.9rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          🔄 إعادة البدء
        </button>
      </div>

      {/* Grid of Slots to Fill */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {MINISTRY_SLOTS.map((slot) => {
          const isSelected = selectedSlotNum === slot.number;
          const userVal = userSlots[slot.number];
          const isCorrect =
            slot.number === 1 || slot.number === 2
              ? userVal === 'وحدة التحكم' || userVal === 'وحدة الحساب والمنطق'
              : userVal === slot.correctAnswer;

          return (
            <div
              key={slot.number}
              onClick={() => setSelectedSlotNum(slot.number)}
              style={{
                backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.2)' : '#111b2d',
                border: `2px solid ${
                  isSubmitted
                    ? isCorrect
                      ? '#22c55e'
                      : '#ef4444'
                    : isSelected
                    ? '#3b82f6'
                    : '#334155'
                }`,
                borderRadius: '0.85rem',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: 800, color: '#facc15', fontSize: '0.95rem' }}>{slot.label}</span>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#1e293b', color: '#94a3b8', padding: '0.1rem 0.5rem', borderRadius: '0.3rem' }}>
                  {slot.category}
                </span>
              </div>

              <div
                style={{
                  backgroundColor: '#0a101d',
                  borderRadius: '0.5rem',
                  padding: '0.6rem',
                  minHeight: '2.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: userVal ? (isSubmitted ? (isCorrect ? '#86efac' : '#fca5a5') : '#38bdf8') : '#64748b',
                  border: '1px dashed #334155',
                }}
              >
                {userVal || 'اضغط هنا للاختيار'}
              </div>

              {isSubmitted && !isCorrect && (
                <div style={{ color: '#f87171', fontSize: '0.75rem', marginTop: '0.4rem' }}>
                  الإجابة الصحيحة: {slot.correctAnswer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Available Options Picker */}
      <div style={{ backgroundColor: '#111c2e', borderRadius: '0.85rem', padding: '1.25rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ color: '#93c5fd', fontWeight: 'bold', fontSize: '0.95rem' }}>
            👇 اختر المكون لتسكينه في <b>الفراغ [{arNum(selectedSlotNum)}]</b>:
          </span>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            (يمكنك النقر على أي فراغ بالأعلى لتغييره)
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {AVAILABLE_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelectOption(opt)}
              style={{
                backgroundColor: '#1e293b',
                color: '#f8fafc',
                border: '1.5px solid #475569',
                borderRadius: '0.6rem',
                padding: '0.55rem 1rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.borderColor = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1e293b';
                e.currentTarget.style.borderColor = '#475569';
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Check Results Action */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <button
          onClick={() => setIsSubmitted(true)}
          disabled={Object.keys(userSlots).length === 0}
          style={{
            backgroundColor: '#eab308',
            color: '#000',
            border: 'none',
            borderRadius: '0.75rem',
            padding: '0.75rem 1.75rem',
            fontWeight: 900,
            fontSize: '1.05rem',
            cursor: Object.keys(userSlots).length === 0 ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 14px rgba(234, 179, 8, 0.4)',
          }}
        >
          ✅ فحص الإجابات والتقييم
        </button>

        {isSubmitted && (
          <div style={{ fontSize: '1.15rem', fontWeight: 800, color: correctCount === 6 ? '#4ade80' : '#facc15' }}>
            النتيجة: {arNum(correctCount)} من {arNum(6)} إجابات صحيحة{' '}
            {correctCount === 6 ? '🏆 ممتاز! أتقنت مخطط معمارية الحاسوب بالكامل!' : '💡 راجع الملاحظات الحمراء للتصحيح.'}
          </div>
        )}
      </div>
    </div>
  );
};
