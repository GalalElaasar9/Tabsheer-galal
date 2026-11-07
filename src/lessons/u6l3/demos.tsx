import { useState, useMemo } from 'react';
import { arNum } from '../../kit/blocks';

/* =========================================================================
   1. ASCII Table & Decoder Lab (المعمل التفاعلي لجدول ASCII وفك الشفرات)
   ========================================================================= */

// The standard 8 columns (0 to 7) and 16 rows (0 to F)
const COL_HEX = ['0', '1', '2', '3', '4', '5', '6', '7'];
const COL_BIN = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111'];
const ROW_HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const ROW_BIN = [
  '0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111',
  '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111',
];

// Printable / display representations for ASCII 0x00 to 0x7F
const ASCII_MAP: Record<string, string> = {
  '0,0': 'NUL', '0,1': 'SOH', '0,2': 'STX', '0,3': 'ETX', '0,4': 'EOT', '0,5': 'ENQ', '0,6': 'ACK', '0,7': 'BEL',
  '0,8': 'BS',  '0,9': 'HT',  '0,A': 'LF',  '0,B': 'VT',  '0,C': 'FF',  '0,D': 'CR',  '0,E': 'SO',  '0,F': 'SI',
  '1,0': 'DLE', '1,1': 'DC1', '1,2': 'DC2', '1,3': 'DC3', '1,4': 'DC4', '1,5': 'NAK', '1,6': 'SYN', '1,7': 'ETB',
  '1,8': 'CAN', '1,9': 'EM',  '1,A': 'SUB', '1,B': 'ESC', '1,C': 'FS',  '1,D': 'GS',  '1,E': 'RS',  '1,F': 'US',
  '2,0': 'SP',  '2,1': '!',   '2,2': '"',   '2,3': '#',   '2,4': '$',   '2,5': '%',   '2,6': '&',   '2,7': "'",
  '2,8': '(',   '2,9': ')',   '2,A': '*',   '2,B': '+',   '2,C': ',',   '2,D': '-',   '2,E': '.',   '2,F': '/',
  '3,0': '0',   '3,1': '1',   '3,2': '2',   '3,3': '3',   '3,4': '4',   '3,5': '5',   '3,6': '6',   '3,7': '7',
  '3,8': '8',   '3,9': '9',   '3,A': ':',   '3,B': ';',   '3,C': '<',   '3,D': '=',   '3,E': '>',   '3,F': '?',
  '4,0': '@',   '4,1': 'A',   '4,2': 'B',   '4,3': 'C',   '4,4': 'D',   '4,5': 'E',   '4,6': 'F',   '4,7': 'G',
  '4,8': 'H',   '4,9': 'I',   '4,A': 'J',   '4,B': 'K',   '4,C': 'L',   '4,D': 'M',   '4,E': 'N',   '4,F': 'O',
  '5,0': 'P',   '5,1': 'Q',   '5,2': 'R',   '5,3': 'S',   '5,4': 'T',   '5,5': 'U',   '5,6': 'V',   '5,7': 'W',
  '5,8': 'X',   '5,9': 'Y',   '5,A': 'Z',   '5,B': '[',   '5,C': '\\',  '5,D': ']',   '5,E': '^',   '5,F': '_',
  '6,0': '`',   '6,1': 'a',   '6,2': 'b',   '6,3': 'c',   '6,4': 'd',   '6,5': 'e',   '6,6': 'f',   '6,7': 'g',
  '6,8': 'h',   '6,9': 'i',   '6,A': 'j',   '6,B': 'k',   '6,C': 'l',   '6,D': 'm',   '6,E': 'n',   '6,F': 'o',
  '7,0': 'p',   '7,1': 'q',   '7,2': 'r',   '7,3': 's',   '7,4': 't',   '7,5': 'u',   '7,6': 'v',   '7,7': 'w',
  '7,8': 'x',   '7,9': 'y',   '7,A': 'z',   '7,B': '{',   '7,C': '|',   '7,D': '}',   '7,E': '~',   '7,F': 'DEL',
};

export function AsciiExplorerDemo() {
  const [tab, setTab] = useState<'encode' | 'decode'>('encode');
  const [inputWord, setInputWord] = useState('Hello');
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);

  // Decoder state
  const [hexInput, setHexInput] = useState('4C 6F 76 65');

  const currentChar = inputWord[selectedCharIndex] ?? (inputWord[0] || 'H');
  const charCode = currentChar.charCodeAt(0) || 72;
  const colIndex = (charCode >> 4) & 0x0f;
  const rowIndex = charCode & 0x0f;
  const colHex = colIndex.toString(16).toUpperCase();
  const rowHex = rowIndex.toString(16).toUpperCase();
  const colBin = colIndex.toString(2).padStart(4, '0');
  const rowBin = rowIndex.toString(2).padStart(4, '0');
  const fullHex = charCode.toString(16).toUpperCase().padStart(2, '0');

  // Decode hex tokens
  const decodedTokens = useMemo(() => {
    const raw = hexInput.replace(/[^0-9a-fA-F]/g, '');
    const tokens: { hex: string; dec: number; char: string; bin: string; valid: boolean }[] = [];
    for (let i = 0; i < raw.length; i += 2) {
      const pair = raw.slice(i, i + 2);
      if (pair.length === 2) {
        const dec = parseInt(pair, 16);
        const char = dec >= 32 && dec <= 126 ? String.fromCharCode(dec) : dec === 32 ? 'SP' : `[${pair}]`;
        const bin = dec.toString(2).padStart(8, '0');
        tokens.push({ hex: pair.toUpperCase(), dec, char, bin, valid: true });
      }
    }
    return tokens;
  }, [hexInput]);

  return (
    <div className="card mt-3">
      {/* Mode Switcher Tabs */}
      <div className="flex gap-2 border-b border-border pb-3 mb-4 flex-wrap items-center justify-between">
        <div className="flex gap-2">
          <button
            className={`btn ${tab === 'encode' ? 'btn-primary' : ''}`}
            onClick={() => setTab('encode')}
          >
            🔤 ترميز النصوص (Text → Codes)
          </button>
          <button
            className={`btn ${tab === 'decode' ? 'btn-primary' : ''}`}
            onClick={() => setTab('decode')}
          >
            🔓 فك شفرة الأكواد (Hex → Text)
          </button>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-sm font-bold text-muted">أمثلة الكتاب:</span>
          {['Hello', 'MILK', 'Love', 'ThankYou!'].map(w => (
            <button
              key={w}
              className="pill pill-primary text-xs cursor-pointer hover:opacity-80"
              onClick={() => {
                if (tab === 'encode') {
                  setInputWord(w);
                  setSelectedCharIndex(0);
                } else {
                  // convert word to hex pairs
                  const h = Array.from(w).map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
                  setHexInput(h);
                }
              }}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {tab === 'encode' ? (
        <div>
          {/* Word Input & Letter Picker */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 items-center bg-surface-2 p-3 rounded-xl border border-border">
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-muted mb-1">اكتب أي كلمة إنجليزية:</label>
              <input
                className="field w-full font-mono font-bold text-lg ltr"
                value={inputWord}
                maxLength={16}
                onChange={e => {
                  setInputWord(e.target.value);
                  setSelectedCharIndex(0);
                }}
                placeholder="اكتب كلمة مثلاً Hello"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-muted mb-1">اختر حرفاً لعرض تحليله في الجدول:</label>
              <div className="flex gap-2 flex-wrap">
                {inputWord.split('').map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCharIndex(idx)}
                    className={`font-mono text-xl font-bold px-3 py-1.5 rounded-lg border transition-all ${
                      selectedCharIndex === idx
                        ? 'bg-primary text-white border-primary shadow-md scale-105'
                        : 'bg-surface border-border hover:bg-surface-3'
                    }`}
                  >
                    {ch === ' ' ? '␣ (Space)' : ch}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Letter Breakdown Banner */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3 rounded-xl bg-primary-soft border border-primary/30 mb-4 text-center">
            <div className="bg-surface p-2 rounded-lg border border-border">
              <span className="text-xs text-muted block font-bold">الحرف المختار</span>
              <span className="text-2xl font-black text-primary font-mono">{currentChar === ' ' ? 'Space' : currentChar}</span>
            </div>
            <div className="bg-surface p-2 rounded-lg border border-border">
              <span className="text-xs text-muted block font-bold">العمود (MSB 4-bits)</span>
              <span className="text-lg font-black text-blue-600 font-mono ltr block">
                {colHex} ({colBin})
              </span>
            </div>
            <div className="bg-surface p-2 rounded-lg border border-border">
              <span className="text-xs text-muted block font-bold">الصف (LSB 4-bits)</span>
              <span className="text-lg font-black text-orange-600 font-mono ltr block">
                {rowHex} ({rowBin})
              </span>
            </div>
            <div className="bg-surface p-2 rounded-lg border border-border">
              <span className="text-xs text-muted block font-bold">ست عشري (Hexadecimal)</span>
              <span className="text-2xl font-black text-purple-700 font-mono ltr block">{fullHex}₁₆</span>
            </div>
            <div className="bg-surface p-2 rounded-lg border border-border col-span-2 md:col-span-1">
              <span className="text-xs text-muted block font-bold">ثنائي (Binary 8-Bit)</span>
              <span className="text-base font-black text-emerald-700 font-mono ltr block">
                <span className="text-blue-600">{colBin}</span>
                <span className="text-orange-600">{rowBin}</span>
              </span>
            </div>
          </div>

          {/* Mini ASCII Interactive Table */}
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-center border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-surface-2 border-b border-border">
                  <th className="p-2 border-r border-border text-muted">
                    الصف / العمود
                  </th>
                  {COL_HEX.map((cHex, ci) => (
                    <th
                      key={cHex}
                      className={`p-2 border-r border-border font-bold ${
                        ci === colIndex ? 'bg-blue-100 text-blue-900 font-black ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <div>{cHex}</div>
                      <div className="text-[10px] text-muted">{COL_BIN[ci]}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROW_HEX.map((rHex, ri) => (
                  <tr key={rHex} className={ri === rowIndex ? 'bg-orange-50' : 'hover:bg-surface-2'}>
                    <td
                      className={`p-1.5 border-t border-r border-border font-bold ${
                        ri === rowIndex ? 'bg-orange-100 text-orange-900 font-black ring-2 ring-orange-500' : 'bg-surface-2'
                      }`}
                    >
                      <span className="ltr inline-block">{rHex} ({ROW_BIN[ri]})</span>
                    </td>
                    {COL_HEX.map((cHex, ci) => {
                      const key = `${ci},${rHex}`;
                      const char = ASCII_MAP[key] ?? '';
                      const isTarget = ci === colIndex && ri === rowIndex;
                      return (
                        <td
                          key={cHex}
                          onClick={() => {
                            if (char && char !== 'NUL' && char !== 'DEL') {
                              setInputWord(char === 'SP' ? ' ' : char);
                              setSelectedCharIndex(0);
                            }
                          }}
                          className={`p-1.5 border-t border-r border-border cursor-pointer transition-all ${
                            isTarget
                              ? 'bg-purple-600 text-white font-black text-sm scale-110 shadow-lg z-10 rounded'
                              : ci === colIndex
                              ? 'bg-blue-50 text-blue-900'
                              : ri === rowIndex
                              ? 'bg-orange-50 text-orange-900'
                              : 'text-foreground'
                          }`}
                        >
                          {char}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2 text-center">
            💡 اضغط على أي خانة في الجدول لاختيار الحرف ومشاهدة إحداثيات الصف والعمود.
          </p>
        </div>
      ) : (
        /* Decoder Tab */
        <div>
          <div className="p-3 bg-surface-2 rounded-xl border border-border mb-4">
            <label className="block text-sm font-bold mb-1">
              أدخل رموزاً ست عشرية (Hexadecimal) لفك شفرتها (كل خانتين تمثلان بايت):
            </label>
            <div className="flex gap-2">
              <input
                className="field flex-1 font-mono font-bold text-lg ltr"
                value={hexInput}
                onChange={e => setHexInput(e.target.value)}
                placeholder="4C 6F 76 65"
              />
              <button
                className="btn"
                onClick={() => setHexInput('54 68 61 6E 6B 59 6F 75 21')}
              >
                تمرين الكتاب (ThankYou!)
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-xs text-muted font-bold">أكواد جاهزة من الامتحان:</span>
              <button className="pill text-xs" onClick={() => setHexInput('4C 6F 76 65')}>4C 6F 76 65 (Love)</button>
              <button className="pill text-xs" onClick={() => setHexInput('4D 49 4C 4B')}>4D 49 4C 4B (MILK)</button>
              <button className="pill text-xs" onClick={() => setHexInput('48 65 6C 6C 6F')}>48 65 6C 6C 6F (Hello)</button>
            </div>
          </div>

          {/* Decoded Word Banner */}
          <div className="card bg-safe-soft border-safe/40 p-4 mb-4 text-center">
            <span className="text-xs font-bold text-safe uppercase tracking-wider block mb-1">
              النتيجة بعد فك الشفرة (Decoded String)
            </span>
            <div className="text-4xl font-black font-mono tracking-wide text-foreground my-2">
              "{decodedTokens.map(t => t.char).join('')}"
            </div>
            <span className="text-sm text-muted">
              عدد البايتات: {arNum(decodedTokens.length)} بايت ({arNum(decodedTokens.length * 8)} بت)
            </span>
          </div>

          {/* Step by step tokens table */}
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-center border-collapse text-sm">
              <thead className="bg-surface-2 border-b border-border font-bold">
                <tr>
                  <th className="p-2.5">الرقم السداسي (Hex)</th>
                  <th className="p-2.5">الثنائي (Binary)</th>
                  <th className="p-2.5">العشري (Decimal)</th>
                  <th className="p-2.5">العمود / الصف في الجدول</th>
                  <th className="p-2.5 bg-primary-soft text-primary">الحرف الناتج</th>
                </tr>
              </thead>
              <tbody>
                {decodedTokens.map((t, idx) => {
                  const col = t.hex[0];
                  const row = t.hex[1];
                  return (
                    <tr key={idx} className="border-b border-border hover:bg-surface-2 font-mono">
                      <td className="p-2 font-bold text-purple-700">{t.hex}₁₆</td>
                      <td className="p-2 text-emerald-700">{t.bin}₂</td>
                      <td className="p-2 text-muted">{t.dec}</td>
                      <td className="p-2 text-xs">
                        عمود <span className="text-blue-600 font-bold">{col}</span> وتقاطع صف <span className="text-orange-600 font-bold">{row}</span>
                      </td>
                      <td className="p-2 font-black text-xl text-primary bg-primary-soft/50">
                        {t.char}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   2. Character Corruption Simulator (محاكي تلف وتشوّه الأحرف)
   ========================================================================= */

type EncodingName = 'UTF-8' | 'Windows-1256' | 'ISO-8859-1' | 'ASCII';

export function CharacterCorruptionDemo() {
  const [sourceText, setSourceText] = useState('مرحباً بكم في طباشير!');
  const [saveEnc, setSaveEnc] = useState<EncodingName>('UTF-8');
  const [readEnc, setReadEnc] = useState<EncodingName>('Windows-1256');

  // Realistic simulation of text corruption / mojibake
  const corruptedResult = useMemo(() => {
    if (saveEnc === readEnc) {
      return { text: sourceText, corrupted: false };
    }

    // UTF-8 saved, opened as Windows-1256 or ISO-8859-1
    if (saveEnc === 'UTF-8' && (readEnc === 'ISO-8859-1' || readEnc === 'Windows-1256')) {
      // Simulating mojibake for Arabic
      return {
        text: sourceText
          .replace(/م/g, 'Ù…')
          .replace(/ر/g, 'Ø±')
          .replace(/ح/g, 'Ø­')
          .replace(/ب/g, 'Ø¨')
          .replace(/ا/g, 'Ø§')
          .replace(/ً/g, 'Ù‹')
          .replace(/ك/g, 'Ùƒ')
          .replace(/ف/g, 'Ù')
          .replace(/ي/g, 'ÙŠ')
          .replace(/ط/g, 'Ø·')
          .replace(/ش/g, 'Ø´'),
        corrupted: true,
      };
    }

    // Windows-1256 saved, opened as UTF-8
    if (saveEnc === 'Windows-1256' && readEnc === 'UTF-8') {
      return {
        text: '   ! (رموز غير معروفة / أخطاء بايت)',
        corrupted: true,
      };
    }

    // Saved as ASCII but has Arabic
    if (saveEnc === 'ASCII') {
      return {
        text: sourceText.replace(/[\u0600-\u06FF]/g, '?'),
        corrupted: true,
      };
    }

    return {
      text: 'Ø§Ù„Ù…Ø±Ø­Ø¨Ø§ ???',
      corrupted: true,
    };
  }, [sourceText, saveEnc, readEnc]);

  return (
    <div className="card mt-3">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">اكتب النص المراد اختباره:</label>
        <div className="flex gap-2">
          <input
            className="field flex-1 font-bold"
            value={sourceText}
            onChange={e => setSourceText(e.target.value)}
          />
          <button className="btn" onClick={() => setSourceText('مرحباً بكم في درس البرمجة')}>
            نص عربي
          </button>
          <button className="btn" onClick={() => setSourceText('Café & Naïve')}>
            نص فرنسي/لاتيني
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Save Encoding */}
        <div className="p-3 bg-surface-2 rounded-xl border border-border">
          <span className="text-xs font-bold text-muted block mb-1">
            ① نظام الترميز أثناء الحفظ (Save / Encoding)
          </span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {(['UTF-8', 'Windows-1256', 'ISO-8859-1', 'ASCII'] as EncodingName[]).map(enc => (
              <button
                key={enc}
                className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                  saveEnc === enc ? 'bg-primary text-white border-primary shadow' : 'bg-surface hover:bg-surface-3'
                }`}
                onClick={() => setSaveEnc(enc)}
              >
                {enc}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-muted block mt-2">
            {saveEnc === 'UTF-8' && '🌟 يونيكود موحد: يدعم العربية وكل لغات العالم.'}
            {saveEnc === 'Windows-1256' && 'قديم: مخصص للعربية في ويندوز فقط.'}
            {saveEnc === 'ISO-8859-1' && 'قديم: يدعم اللغات الأوروبية اللاتينية فقط.'}
            {saveEnc === 'ASCII' && 'محدود: يدعم الإنجليزية فقط، ويفشل في العربية!'}
          </span>
        </div>

        {/* Read Encoding */}
        <div className="p-3 bg-surface-2 rounded-xl border border-border">
          <span className="text-xs font-bold text-muted block mb-1">
            ② نظام فك الترميز أثناء الفتح (Read / Decoding)
          </span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {(['UTF-8', 'Windows-1256', 'ISO-8859-1', 'ASCII'] as EncodingName[]).map(enc => (
              <button
                key={enc}
                className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                  readEnc === enc ? 'bg-purple-600 text-white border-purple-600 shadow' : 'bg-surface hover:bg-surface-3'
                }`}
                onClick={() => setReadEnc(enc)}
              >
                {enc}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-muted block mt-2">
            البرنامج يقرأ البايتات بناءً على هذا الجدول التفسيري.
          </span>
        </div>
      </div>

      {/* Result Display Box */}
      <div
        className={`p-4 rounded-xl border text-center transition-all ${
          !corruptedResult.corrupted
            ? 'bg-safe-soft border-safe/50'
            : 'bg-danger-soft border-danger/50'
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-sm">
            {!corruptedResult.corrupted ? '✅ تطابق الترميز وفك الترميز' : '⚠️ حدوث تلف وتشوّه الأحرف (Character Corruption)'}
          </span>
          <span className={`pill ${!corruptedResult.corrupted ? 'pill-safe' : 'pill-warn'}`}>
            {saveEnc} ➔ {readEnc}
          </span>
        </div>

        <div className="text-3xl font-black font-mono my-3 p-3 bg-surface rounded-lg border border-border overflow-x-auto ltr">
          {corruptedResult.text}
        </div>

        <p className="text-xs leading-relaxed">
          {!corruptedResult.corrupted ? (
            <span className="text-safe font-bold">
              البرنامج فك تشفير البايتات بنفس الجدول الذي حُفظت به، فظهرت الحروف الأصلية سليمة 100%.
            </span>
          ) : (
            <span className="text-danger font-bold">
              السبب: محاولة فك الترميز بنظام مختلف! حاول البرنامج مطابقة البايتات بجدول خاطئ، فظهرت كحروف غريبة وعلامات استفهام.
            </span>
          )}
        </p>

        {corruptedResult.corrupted && (
          <button
            className="btn btn-primary mt-3 text-xs"
            onClick={() => setReadEnc(saveEnc)}
          >
            🔧 إصلاح الخلل (مطابقة نظام فك الترميز ليصبح {saveEnc})
          </button>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   3. Font Inspector Demo (مختبر فحص الخطوط ومقارنة أنواعها الثلاثة)
   ========================================================================= */

type FontType = 'serif' | 'sans-serif' | 'semi-cursive';

export function FontInspectorDemo() {
  const [selectedFont, setSelectedFont] = useState<FontType>('serif');
  const [char, setChar] = useState('A');
  const [showSerifMarkers, setShowSerifMarkers] = useState(true);

  const fontInfo = {
    serif: {
      name: 'Serif (مُذَيَّل / ذو زوائد)',
      example: 'Times New Roman / Georgia',
      family: '"Times New Roman", Times, serif',
      desc: 'خطوط تحتوي على زوائد أو حليات صغيرة عند أطراف الحروف، وتُشعر بالرسمية وتسهل تتبع الأسطر المطبوعة في الكتب والجرائد.',
      hasSerifs: true,
    },
    'sans-serif': {
      name: 'Sans-serif (خالٍ من الزوائد)',
      example: 'Arial / Calibri / Segoe UI',
      family: 'Arial, Helvetica, sans-serif',
      desc: 'خطوط بسيطة ونظيفة بدون أي زوائد عند الأطراف، ممتازة ومريحة جداً للقراءة على الشاشات الرقمية والهواتف.',
      hasSerifs: false,
    },
    'semi-cursive': {
      name: 'Semi-cursive (شبه رقعي / متصل جزئياً)',
      example: 'Monotype Corsiva / Caveat',
      family: '"Monotype Corsiva", Caveat, cursive',
      desc: 'خطوط تميل إلى الشكل اليدوي أو المتصل جزئياً، تعطي مظهراً فنياً وجمالياً متميزاً.',
      hasSerifs: false,
    },
  }[selectedFont];

  return (
    <div className="card mt-3">
      {/* Font Type Selector */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {(['serif', 'sans-serif', 'semi-cursive'] as FontType[]).map(ft => (
          <button
            key={ft}
            className={`py-2 px-3 text-xs md:text-sm font-bold rounded-xl border text-center transition-all ${
              selectedFont === ft ? 'bg-primary text-white border-primary shadow-md' : 'bg-surface-2 hover:bg-surface-3'
            }`}
            onClick={() => setSelectedFont(ft)}
          >
            {ft === 'serif' && '١ · Serif (ذو زوائد)'}
            {ft === 'sans-serif' && '٢ · Sans-serif (بسيط)'}
            {ft === 'semi-cursive' && '٣ · Semi-cursive (يدوي)'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Visual Inspection Panel */}
        <div className="p-6 bg-surface-2 rounded-2xl border border-border text-center relative overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-muted">فحص شكل الحرف (Glyph)</span>
            <div className="flex gap-1">
              {['A', 'H', 'E', 'Q', 'R'].map(c => (
                <button
                  key={c}
                  className={`w-7 h-7 text-xs font-bold rounded ${char === c ? 'bg-primary text-white' : 'bg-surface'}`}
                  onClick={() => setChar(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div
            className="text-[120px] font-bold leading-none my-4 transition-all duration-300 relative inline-block select-none"
            style={{ fontFamily: fontInfo.family }}
          >
            {char}
            {selectedFont === 'serif' && showSerifMarkers && (
              <>
                <span className="absolute -bottom-1 -left-3 w-5 h-5 rounded-full border-2 border-red-500 animate-pulse pointer-events-none" />
                <span className="absolute -bottom-1 -right-3 w-5 h-5 rounded-full border-2 border-red-500 animate-pulse pointer-events-none" />
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-red-500 animate-pulse pointer-events-none" />
              </>
            )}
          </div>

          {selectedFont === 'serif' && (
            <div className="mt-2">
              <label className="text-xs text-red-600 font-bold inline-flex items-center gap-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showSerifMarkers}
                  onChange={e => setShowSerifMarkers(e.target.checked)}
                />
                تحديد الزوائد (Serifs) باللون الأحمر
              </label>
            </div>
          )}
        </div>

        {/* Conceptual Rules Panel */}
        <div className="space-y-3">
          <div className="p-3 bg-surface rounded-xl border border-border">
            <span className="text-xs text-muted font-bold block">نوع الخط ومثاله:</span>
            <span className="font-bold text-base text-primary block">{fontInfo.name}</span>
            <span className="text-xs text-muted font-mono block">أمثلة: {fontInfo.example}</span>
            <p className="text-xs text-foreground mt-1.5 leading-relaxed">{fontInfo.desc}</p>
          </div>

          <div className="p-3 bg-primary-soft rounded-xl border border-primary/30">
            <span className="text-xs font-bold text-primary block mb-1">
              🔑 القاعدة الذهبية المقررة في المنهج:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold mt-2">
              <div className="bg-surface p-2 rounded-lg border border-border">
                <span className="text-blue-600 block">① رمز الحرف (Character Code)</span>
                <span className="text-muted block text-[11px] mt-0.5">يحدد «ما هو الحرف» (قيمته في الذاكرة: 65)</span>
              </div>
              <div className="bg-surface p-2 rounded-lg border border-border">
                <span className="text-purple-600 block">② الخط (Font)</span>
                <span className="text-muted block text-[11px] mt-0.5">يحدد «كيف يبدو شكل الحرف» على الشاشة</span>
              </div>
            </div>
            <p className="text-[11px] text-muted mt-2">
              لاحظ: رمز الحرف في الذاكرة (0x41 أو 65) ثابت لا يتغير نهائياً عند تغيير نوع الخط!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. Text Data Size Calculator (حاسبة حجم النصوص وتكلفة التخزين)
   ========================================================================= */

export function DataSizeCalculatorDemo() {
  const [text, setText] = useState('Happy Birthday');

  const stats = useMemo(() => {
    const totalChars = text.length;
    const spaces = (text.match(/\s/g) || []).length;
    const letters = totalChars - spaces;
    const asciiBytes = totalChars; // 1 byte per ASCII char
    const asciiBits = asciiBytes * 8;
    const utf16Bytes = totalChars * 2; // 2 bytes per char

    return {
      totalChars,
      spaces,
      letters,
      asciiBytes,
      asciiBits,
      utf16Bytes,
    };
  }, [text]);

  return (
    <div className="card mt-3">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">اكتب أي جملة أو كلمة لحساب حجمها:</label>
        <div className="flex gap-2">
          <input
            className="field flex-1 font-bold font-mono text-lg"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className="btn" onClick={() => setText('Welcome')}>
            مثال Welcome (7 أحرف)
          </button>
          <button className="btn" onClick={() => setText('Happy Birthday')}>
            مثال Happy Birthday (14 حرفاً)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-4">
        <div className="bg-surface-2 p-3 rounded-xl border border-border">
          <span className="text-xs text-muted block font-bold">إجمالي الرموز والمسافات</span>
          <span className="text-3xl font-black text-primary font-mono">{arNum(stats.totalChars)}</span>
          <span className="text-[10px] text-muted block mt-1">
            ({arNum(stats.letters)} حرف + {arNum(stats.spaces)} مسافة)
          </span>
        </div>
        <div className="bg-surface-2 p-3 rounded-xl border border-border">
          <span className="text-xs text-muted block font-bold">الحجم بنظام ASCII</span>
          <span className="text-3xl font-black text-safe font-mono">{arNum(stats.asciiBytes)} Byte</span>
          <span className="text-[10px] text-muted block mt-1">كل حرف = 1 بايت</span>
        </div>
        <div className="bg-surface-2 p-3 rounded-xl border border-border">
          <span className="text-xs text-muted block font-bold">الحجم بالبت (Bits)</span>
          <span className="text-3xl font-black text-blue-600 font-mono">{arNum(stats.asciiBits)} Bit</span>
          <span className="text-[10px] text-muted block mt-1">{arNum(stats.asciiBytes)} × 8 بت</span>
        </div>
        <div className="bg-surface-2 p-3 rounded-xl border border-border">
          <span className="text-xs text-muted block font-bold">الحجم بنظام UTF-16</span>
          <span className="text-3xl font-black text-purple-600 font-mono">{arNum(stats.utf16Bytes)} Byte</span>
          <span className="text-[10px] text-muted block mt-1">كل حرف = 2 بايت</span>
        </div>
      </div>

      {/* Memory Blocks Visualizer */}
      <div className="p-3 bg-surface-2 rounded-xl border border-border">
        <span className="text-xs font-bold text-muted block mb-2">
          تمثيل خلايا الذاكرة (Memory Bytes): كل مربع = 1 Byte (8 بت)
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {text.split('').map((char, i) => (
            <div
              key={i}
              className="p-2 bg-surface rounded-lg border border-border text-center min-w-[3.5rem] shadow-xs"
            >
              <div className="text-xs text-muted font-mono">{arNum(i + 1)}</div>
              <div className="font-bold text-lg text-primary font-mono my-0.5">
                {char === ' ' ? '␣' : char}
              </div>
              <div className="text-[10px] text-muted font-mono">
                {char.charCodeAt(0).toString(16).toUpperCase()}₁₆
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
