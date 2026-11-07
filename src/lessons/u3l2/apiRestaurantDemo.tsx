import { useEffect, useRef, useState } from 'react';

type StudentId = 123 | 124 | 125 | 999;

interface StudentRecord {
  name: string;
  seatNumber: number;
  grade: number;
  status: string;
  school: string;
}

const STUDENTS_DB: Record<number, StudentRecord> = {
  123: { name: 'أحمد سامي (Ahmed)', seatNumber: 123, grade: 95, status: 'ممتاز 🌟', school: 'مدرسة المتفوقين' },
  124: { name: 'مريم خالد (Mariam)', seatNumber: 124, grade: 98, status: 'الأولى على المحافظة 🏆', school: 'ثانوية المستقبل' },
  125: { name: 'عمر حسن (Omar)', seatNumber: 125, grade: 86, status: 'جيد جداً ✨', school: 'ثانوية النور' },
};

export function ApiRestaurantDemo() {
  const [selectedId, setSelectedId] = useState<StudentId>(123);
  const [viewMode, setViewMode] = useState<'restaurant' | 'code'>('restaurant');
  const [step, setStep] = useState<number>(0); // 0: Idle, 1: Request, 2: API traveling to kitchen, 3: DB query, 4: JSON packed, 5: API returning, 6: UI rendered
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const student = STUDENTS_DB[selectedId];
  const isFound = Boolean(student);

  const jsonPayload = isFound
    ? JSON.stringify(
        {
          id: selectedId,
          name: student.name,
          seatNumber: student.seatNumber,
          grade: student.grade,
          status: student.status,
          school: student.school,
        },
        null,
        2
      )
    : JSON.stringify(
        {
          status: 404,
          error: 'Not Found',
          message: `الطالب رقم ${selectedId} غير مسجل في قاعدة البيانات`,
        },
        null,
        2
      );

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearTimer();
  }, []);

  const runSimulation = () => {
    clearTimer();
    setStep(1);
    setIsPlaying(true);

    const scheduleStep = (nextStep: number, delay: number) => {
      timerRef.current = window.setTimeout(() => {
        setStep(nextStep);
        if (nextStep < 6) {
          scheduleStep(nextStep + 1, nextStep === 3 ? 1200 : 900);
        } else {
          setIsPlaying(false);
        }
      }, delay);
    };

    scheduleStep(2, 800);
  };

  const handleNextStep = () => {
    clearTimer();
    setIsPlaying(false);
    setStep(prev => (prev < 6 ? prev + 1 : 0));
  };

  const handleReset = () => {
    clearTimer();
    setIsPlaying(false);
    setStep(0);
  };

  return (
    <div style={{ fontFamily: 'var(--font)', direction: 'rtl', width: '100%', maxWidth: 1160, margin: '0 auto' }}>
      {/* Top Controls Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '12px 18px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          boxShadow: 'var(--shadow)',
        }}
      >
        {/* Student Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 800, fontSize: 15, color: 'var(--pen-ink)' }}>اختر طالب للاستعلام:</span>
          {([123, 124, 125, 999] as StudentId[]).map(id => (
            <button
              key={id}
              onClick={() => {
                setSelectedId(id);
                setStep(0);
                clearTimer();
                setIsPlaying(false);
              }}
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                fontWeight: 800,
                fontSize: 14,
                cursor: 'pointer',
                border: selectedId === id ? '2px solid var(--primary)' : '1px solid var(--border)',
                background: selectedId === id ? 'var(--primary-soft)' : 'var(--surface-2)',
                color: selectedId === id ? 'var(--primary)' : 'var(--text)',
                transition: 'all .15s ease',
              }}
            >
              {id === 999 ? '⚠️ طالب غير مسجل (999)' : `طالب #${id}`}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--surface-2)', padding: 4, borderRadius: 12 }}>
          <button
            onClick={() => setViewMode('restaurant')}
            style={{
              padding: '6px 14px',
              borderRadius: 9,
              fontWeight: 800,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              background: viewMode === 'restaurant' ? 'var(--primary)' : 'transparent',
              color: viewMode === 'restaurant' ? '#fff' : 'var(--muted)',
            }}
          >
            🍔 تشبيه المطعم
          </button>
          <button
            onClick={() => setViewMode('code')}
            style={{
              padding: '6px 14px',
              borderRadius: 9,
              fontWeight: 800,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              background: viewMode === 'code' ? 'var(--primary)' : 'transparent',
              color: viewMode === 'code' ? '#fff' : 'var(--muted)',
            }}
          >
            💻 الكود الفعلي & JSON
          </button>
        </div>
      </div>

      {/* Playback Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          margin: '16px 0',
          padding: '8px 16px',
          background: 'var(--surface-2)',
          borderRadius: 12,
          border: '1px solid var(--border)',
        }}
      >
        <button
          onClick={runSimulation}
          disabled={isPlaying}
          className="btn btn-primary"
          style={{ padding: '8px 20px', fontSize: 15, fontWeight: 900 }}
        >
          {isPlaying ? '⏳ الرحلة جارية…' : '▶ تشغيل الرحلة كاملة'}
        </button>

        <button
          onClick={handleNextStep}
          disabled={isPlaying}
          className="btn"
          style={{ padding: '8px 16px', fontSize: 14, fontWeight: 800 }}
        >
          {step === 0 ? 'ابدأ خطوة بخطوة ⏭' : step < 6 ? `الخطوة التالية (${step}/6) ⏭` : 'إعادة من البداية ↺'}
        </button>

        <button
          onClick={handleReset}
          className="btn"
          style={{ padding: '8px 14px', fontSize: 13, color: 'var(--muted)' }}
        >
          إعادة ضبط
        </button>

        {/* Step indicator pills */}
        <div style={{ display: 'flex', gap: 6, marginInlineStart: 12 }}>
          {[1, 2, 3, 4, 5, 6].map(s => (
            <div
              key={s}
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                fontSize: 12,
                fontWeight: 900,
                background: step === s ? 'var(--primary)' : step > s ? 'var(--safe)' : 'var(--border)',
                color: step >= s ? '#fff' : 'var(--muted)',
                transition: 'all .25s ease',
              }}
            >
              {step > s ? '✓' : s}
            </div>
          ))}
        </div>
      </div>

      {/* Main Stage: Restaurant Perspective vs Code Perspective */}
      {viewMode === 'restaurant' ? (
        /* ================= 1. RESTAURANT METAPHOR VIEW ================= */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr 1fr',
            gap: 16,
            alignItems: 'stretch',
            position: 'relative',
          }}
        >
          {/* Station 1: Customer (Frontend) */}
          <div
            style={{
              background: 'var(--surface)',
              border: step === 1 || step === 6 ? '2px solid var(--pen-blue)' : '1px solid var(--border)',
              borderRadius: 16,
              padding: 20,
              boxShadow: step === 1 || step === 6 ? '0 0 0 3px var(--info-soft)' : 'var(--shadow)',
              transition: 'all .3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 8 }}>🧑‍💼</div>
            <div style={{ fontWeight: 900, fontSize: 20, color: 'var(--pen-blue)' }}>أنت (الزبون في الصالة)</div>
            <div style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 700, marginBottom: 14 }}>
              يمثل: 💻 <b>الـ Frontend (المتصفح)</b>
            </div>

            <div
              style={{
                width: '100%',
                background: 'var(--surface-2)',
                padding: '10px 14px',
                borderRadius: 10,
                fontSize: 13,
                lineHeight: 1.6,
                textAlign: 'right',
                marginBottom: 14,
              }}
            >
              <div style={{ fontWeight: 800, color: 'var(--pen-ink)', marginBottom: 4 }}>📋 قائمة الطعام (المنيو):</div>
              <div>• قاعد في الصالة مش في المطبخ</div>
              <div>• بتطلب بيانات الطالب بالرقم #{selectedId}</div>
              <div>• مستني الجرسون يرجعلك بالطبق</div>
            </div>

            {/* Customer speech bubble / status */}
            {step === 1 && (
              <div
                style={{
                  background: 'var(--info-soft)',
                  color: 'var(--pen-blue)',
                  border: '1.5px dashed var(--pen-blue)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  fontWeight: 800,
                  fontSize: 13,
                  lineHeight: 1.5,
                  animation: 'fadeUp .3s ease',
                }}
              >
                🗣️ "يا جرسون! لو سمحت هاتلي بيانات الطالب رقم {selectedId}!"
              </div>
            )}

            {step === 6 && (
              <div
                style={{
                  background: isFound ? 'var(--safe-soft)' : 'var(--danger-soft)',
                  color: isFound ? 'var(--safe)' : 'var(--danger)',
                  border: `2px solid ${isFound ? 'var(--safe)' : 'var(--danger)'}`,
                  borderRadius: 12,
                  padding: 12,
                  width: '100%',
                  marginTop: 6,
                  animation: 'pulseIn .4s ease',
                  textAlign: 'right',
                }}
              >
                <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 4 }}>
                  {isFound ? '🍽️ استلمت الوجبة (البيانات)!' : '⚠️ الجرسون رجع برسالة اعتذار!'}
                </div>
                {isFound ? (
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text)' }}>
                    <div><b>الاسم:</b> {student.name}</div>
                    <div><b>الجلوس:</b> {student.seatNumber}</div>
                    <div><b>الدرجة:</b> {student.grade} / 100 ({student.status})</div>
                  </div>
                ) : (
                  <div style={{ fontSize: 13, color: 'var(--pen-red)' }}>
                    طالب غير مسجل (كود الخطأ: 404 Not Found).
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Station 2: The Waiter (API) */}
          <div
            style={{
              background: 'var(--surface)',
              border: step === 2 || step === 5 ? '2px solid var(--pen-pink)' : '1px solid var(--border)',
              borderRadius: 16,
              padding: 20,
              boxShadow: step === 2 || step === 5 ? '0 0 0 3px var(--pink-soft)' : 'var(--shadow)',
              transition: 'all .3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 8 }}>🤵</div>
            <div style={{ fontWeight: 900, fontSize: 20, color: 'var(--pen-pink)' }}>الجرسون (النادل)</div>
            <div style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 700, marginBottom: 14 }}>
              يمثل: 🔌 <b>واجهة الـ API</b>
            </div>

            <div
              style={{
                width: '100%',
                background: 'var(--surface-2)',
                padding: '10px 14px',
                borderRadius: 10,
                fontSize: 13,
                lineHeight: 1.6,
                textAlign: 'right',
                marginBottom: 14,
              }}
            >
              <div style={{ fontWeight: 800, color: 'var(--pen-ink)', marginBottom: 4 }}>وظيفة الجرسون (الـ API):</div>
              <div>• وسيط بين الزبون والشيف</div>
              <div>• بياخد تذكرة الطلب ويوصلها للمطبخ</div>
              <div>• بيستلم الطبق المنظم (JSON) ويرجعه</div>
              <div style={{ color: 'var(--pen-red)', fontWeight: 800 }}>• مانع الزبون يدخل المطبخ! 🔒</div>
            </div>

            {/* Waiter in-flight states */}
            {step === 2 && (
              <div
                style={{
                  background: 'var(--pink-soft)',
                  color: 'var(--pen-pink)',
                  border: '1.5px dashed var(--pen-pink)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  fontWeight: 800,
                  fontSize: 13,
                  lineHeight: 1.5,
                  animation: 'fadeUp .3s ease',
                }}
              >
                🏃‍♂️ <b>الجرسون رايح للمطبخ:</b>
                <div style={{ direction: 'ltr', fontFamily: 'monospace', fontSize: 12, marginTop: 4 }}>
                  GET /api/students/{selectedId}
                </div>
              </div>
            )}

            {step === 4 && (
              <div
                style={{
                  background: 'var(--warn-soft)',
                  color: 'var(--warn)',
                  border: '1.5px dashed var(--warn)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  fontWeight: 800,
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                📦 استلم العلبة المغلفة بالـ <b>JSON</b> من الشيف!
              </div>
            )}

            {step === 5 && (
              <div
                style={{
                  background: 'var(--safe-soft)',
                  color: 'var(--safe)',
                  border: '1.5px dashed var(--safe)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  fontWeight: 800,
                  fontSize: 13,
                  lineHeight: 1.5,
                  animation: 'fadeUp .3s ease',
                }}
              >
                🏃‍♂️ <b>الجرسون راجع للزبون:</b>
                <div>شايل صينية فيها الـ JSON المنظم 🍽️</div>
              </div>
            )}
          </div>

          {/* Station 3: Kitchen & Pantry (Backend & Database) */}
          <div
            style={{
              background: 'var(--surface)',
              border: step === 3 || step === 4 ? '2px solid var(--pen-orange)' : '1px solid var(--border)',
              borderRadius: 16,
              padding: 20,
              boxShadow: step === 3 || step === 4 ? '0 0 0 3px var(--warn-soft)' : 'var(--shadow)',
              transition: 'all .3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 8 }}>👨‍🍳🗄️</div>
            <div style={{ fontWeight: 900, fontSize: 20, color: 'var(--pen-orange)' }}>المطبخ والمخزن المغلق</div>
            <div style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 700, marginBottom: 14 }}>
              يمثل: ⚙️ <b>الـ Backend</b> + 🗄️ <b>قاعدة البيانات</b>
            </div>

            <div
              style={{
                width: '100%',
                background: 'var(--surface-2)',
                padding: '10px 14px',
                borderRadius: 10,
                fontSize: 13,
                lineHeight: 1.6,
                textAlign: 'right',
                marginBottom: 14,
              }}
            >
              <div style={{ fontWeight: 800, color: 'var(--pen-ink)', marginBottom: 4 }}>ما يحدث خلف الأبواب المغلقة:</div>
              <div>• الشيف (Backend) يستلم التذكرة</div>
              <div>• يفتح دواليب المخزن (Database) بالسر</div>
              <div>• يغلف المكونات في علبة قياسية (JSON)</div>
            </div>

            {/* Kitchen states */}
            {step === 3 && (
              <div
                style={{
                  background: 'var(--warn-soft)',
                  color: 'var(--pen-orange)',
                  border: '1.5px dashed var(--pen-orange)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  fontWeight: 800,
                  fontSize: 13,
                  lineHeight: 1.5,
                  animation: 'pulseIn .4s ease',
                }}
              >
                🍳 <b>الشيف بيبحث في قاعدة البيانات:</b>
                <div style={{ fontSize: 12, marginTop: 4 }}>
                  {isFound ? `✅ لقى صف الطالب #${selectedId}` : `❌ بحث في المخزن ولم يجد #${selectedId}`}
                </div>
              </div>
            )}

            {step >= 4 && (
              <div
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '8px 10px',
                  width: '100%',
                  textAlign: 'left',
                  direction: 'ltr',
                  fontFamily: 'monospace',
                  fontSize: 11,
                  color: 'var(--pen-purple)',
                }}
              >
                {`// علبة JSON المغلفة:
{ "name": "${isFound ? student.name.split(' ')[0] : ''}", "grade": ${isFound ? student.grade : 0} }`}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ================= 2. CODE & REAL WEB PERSPECTIVE VIEW ================= */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 16,
            alignItems: 'start',
          }}
        >
          {/* Left Column: Real JavaScript Fetch Code & Execution */}
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 20,
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontWeight: 900, fontSize: 18, color: 'var(--pen-blue)' }}>
                💻 كود الجافاسكريبت في المتصفح (Frontend):
              </div>
              <span className="pill pill-primary">fetch API</span>
            </div>

            <div
              style={{
                background: '#16192b',
                color: '#ecefff',
                padding: '14px 18px',
                borderRadius: 12,
                direction: 'ltr',
                textAlign: 'left',
                fontFamily: 'Consolas, monospace',
                fontSize: 13,
                lineHeight: 1.7,
                overflowX: 'auto',
                border: '1px solid var(--border)',
              }}
            >
              <div>
                <span style={{ color: '#ff7cc0' }}>// 1. طلب بيانات الطالب من الـ API:</span>
              </div>
              <div>
                <span style={{ color: '#9775fa' }}>const</span> response = <span style={{ color: '#9775fa' }}>await</span>{' '}
                <span style={{ color: '#4dabf7' }}>fetch</span>(
                <span style={{ color: '#51cf66' }}>`/api/students/${selectedId}`</span>);
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: '#ff7cc0' }}>// 2. تحويل الرد النصي إلى كائن JSON:</span>
              </div>
              <div>
                <span style={{ color: '#9775fa' }}>const</span> data = <span style={{ color: '#9775fa' }}>await</span>{' '}
                response.<span style={{ color: '#4dabf7' }}>json</span>();
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: '#ff7cc0' }}>// 3. عرض النتيجة على الشاشة:</span>
              </div>
              <div>
                document.<span style={{ color: '#4dabf7' }}>querySelector</span>(<span style={{ color: '#51cf66' }}>'#student-name'</span>).innerText = data.name;
              </div>
            </div>

            {/* Explanation box */}
            <div
              style={{
                marginTop: 16,
                background: 'var(--primary-soft)',
                padding: '12px 16px',
                borderRadius: 12,
                fontSize: 13,
                lineHeight: 1.65,
                color: 'var(--pen-ink)',
              }}
            >
              <b>💡 كيف يترجم هذا تشبيه المطعم؟</b>
              <div>
                سطر <code style={{ color: 'var(--primary)', fontWeight: 800 }}>fetch('/api/students/{selectedId}')</code> هو مكافئ لنداء الزبون:
                <br />
                «يا API، هاتلي بيانات الطالب رقم {selectedId} من السيرفر!».
              </div>
            </div>
          </div>

          {/* Right Column: Returned JSON Payload with Key-Value breakdown */}
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 20,
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontWeight: 900, fontSize: 18, color: 'var(--pen-purple)' }}>
                📦 استجابة الـ API المستلمة (صيغة JSON):
              </div>
              <span className={`pill ${isFound ? 'pill-safe' : 'pill-warn'}`}>
                {isFound ? '200 OK' : '404 Not Found'}
              </span>
            </div>

            <pre
              style={{
                background: '#16192b',
                color: isFound ? '#51cf66' : '#ff6b6b',
                padding: '14px 18px',
                borderRadius: 12,
                direction: 'ltr',
                textAlign: 'left',
                fontFamily: 'Consolas, monospace',
                fontSize: 13,
                lineHeight: 1.6,
                overflowX: 'auto',
                border: '1px solid var(--border)',
                margin: 0,
              }}
            >
              {jsonPayload}
            </pre>

            {/* Key-Value Breakdown Table */}
            {isFound && (
              <div style={{ marginTop: 14 }}>
                <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 6, color: 'var(--muted)' }}>
                  تشريح حزمة الـ JSON (المفتاح ➔ القيمة):
                </div>
                <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse', textAlign: 'right' }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
                      <th style={{ padding: '6px 10px' }}>المفتاح (Key)</th>
                      <th style={{ padding: '6px 10px' }}>القيمة (Value)</th>
                      <th style={{ padding: '6px 10px' }}>التفسير</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px dashed var(--border)' }}>
                      <td style={{ padding: '6px 10px', direction: 'ltr', fontFamily: 'monospace', color: 'var(--primary)' }}>"name"</td>
                      <td style={{ padding: '6px 10px' }}>"{student.name.split(' ')[0]}"</td>
                      <td style={{ padding: '6px 10px', color: 'var(--muted)' }}>اسم الطالب</td>
                    </tr>
                    <tr style={{ borderBottom: '1px dashed var(--border)' }}>
                      <td style={{ padding: '6px 10px', direction: 'ltr', fontFamily: 'monospace', color: 'var(--primary)' }}>"seatNumber"</td>
                      <td style={{ padding: '6px 10px' }}>{student.seatNumber}</td>
                      <td style={{ padding: '6px 10px', color: 'var(--muted)' }}>رقم الجلوس (رقم)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 10px', direction: 'ltr', fontFamily: 'monospace', color: 'var(--primary)' }}>"grade"</td>
                      <td style={{ padding: '6px 10px' }}>{student.grade}</td>
                      <td style={{ padding: '6px 10px', color: 'var(--muted)' }}>الدرجة الامتحانية</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Educational Walkthrough Banner at bottom */}
      <div
        style={{
          marginTop: 18,
          background: 'var(--surface)',
          border: '1.5px solid var(--safe)',
          borderRadius: 14,
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: 'var(--shadow)',
        }}
      >
        <div style={{ fontSize: 36, flexShrink: 0 }}>💡</div>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--pen-ink)' }}>
          <b style={{ color: 'var(--safe)', fontSize: 15 }}>الخلاصة المنهجية للامتحان:</b>
          <br />
          • الـ <b>API</b> هو الجرسون: وسيط آمن يفصل المتصفح (الزبون) عن قاعدة البيانات الحقيقية (المطبخ والمخزن) لحمايتها وتنظيم الطلبات.
          <br />
          • صيغة <b>JSON</b> هي الطبق أو الورقة المنظمة التي تحتوي البيانات على شكل أزواج (مفتاح ➔ قيمة)، تفهمها كل لغات البرمجة والأنظمة بخفة وسرعة.
        </div>
      </div>
    </div>
  );
}
