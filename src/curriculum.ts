// Curriculum registry for Tabasheer.
// Units and lessons mapped to whiteboards or legacy slide decks.

export type LessonEntry = { n: number; title: string; en?: string; icon?: string; board?: string; legacy?: string; badge?: string };
export type UnitEntry = { unit: string; title: string; lessons: LessonEntry[] };

/** الصف الأول الثانوي (Grade 1 Secondary) */
export const CURRICULUM_G1: UnitEntry[] = [
  {
    unit: 'الوحدة الأولى', title: 'ما هي المعلومات والوسائط؟',
    lessons: [
      { n: 1, title: 'البيانات والمعلومات والمعرفة' },
      { n: 2, title: 'الوسائط وأنواعها' },
    ],
  },
  {
    unit: 'الوحدة الثانية', title: 'أخلاقيات المعلومات والقوانين والحقوق',
    lessons: [
      { n: 1, title: 'أخلاقيات المعلومات والمشاكل الرقمية' },
      { n: 2, title: 'البيانات الشخصية والخصوصية وحق الصورة' },
      { n: 3, title: 'حقوق الملكية الفكرية والصناعية والمؤلف' },
      { n: 4, title: 'استخدام المعلومات والكشف عنها' },
    ],
  },
  {
    unit: 'الوحدة الثالثة', title: 'أمن المعلومات',
    lessons: [
      { n: 1, title: 'مفهوم أمن المعلومات والتهديدات المتنوعة' },
      { n: 2, title: 'إجراءات ومقاييس حماية أمن المعلومات' },
    ],
  },
  {
    unit: 'الوحدة الرابعة', title: 'الكمبيوترات والبرمجيات ونظم التشغيل',
    lessons: [
      { n: 1, title: 'بنية الكمبيوتر والمكونات الخمسة الرئيسية' },
      { n: 2, title: 'أنظمة التشغيل والبرمجيات' },
    ],
  },
  {
    unit: 'الوحدة الخامسة', title: 'الإنترنت والاتصالات',
    lessons: [
      { n: 1, title: 'تطور وسائل الاتصال' },
      { n: 2, title: 'الاتصال عبر الإنترنت وخصائصه' },
    ],
  },
  {
    unit: 'الوحدة السادسة', title: 'التناظرية والرقمية (Analog & Digital)',
    lessons: [
      { n: 1, title: 'التناظرية والرقمية والتحويل A/D و D/A', en: 'Analog & Digital', icon: '📶' },
      { n: 2, title: 'النظام الثنائي وكمية المعلومات (Bits & Bytes)', en: 'Binary & Information Units', icon: '🔢' },
      { n: 3, title: 'التمثيل الرقمي للأحرف', en: 'Digital Representation of Characters', icon: '🔤', board: 'u6l3', badge: 'جديد' },
      { n: 4, title: 'نظام الست عشري', en: 'Hexadecimal System', icon: '🔟' },
      { n: 5, title: 'العمليات الحسابية العددية والمتممات', en: 'Binary Arithmetic & Complements', icon: '➕' },
      { n: 6, title: 'رقمنة الصوت', en: 'Audio Digitization', icon: '🎙️' },
      { n: 7, title: 'رقمنة الصور', en: 'Image Digitization', icon: '🖼️' },
      { n: 8, title: 'التمثيل الرقمي وضغط الفيديو', en: 'Video Digitization & Compression', icon: '🎬' },
      { n: 9, title: 'تصميم المعلومات', en: 'Information Design', icon: '📊' },
    ],
  },
];

/** الصف الثاني الثانوي (بكالوريا) */
export const CURRICULUM_G2: UnitEntry[] = [
  {
    unit: 'الفصل الأول', title: 'تكنولوجيا المعلومات والمجتمع',
    lessons: [
      { n: 1, title: 'المجتمع وتكنولوجيا المعلومات' },
      { n: 2, title: 'أمن المعلومات والمشاكل الرقمية' },
    ],
  },
  {
    unit: 'الفصل الثاني', title: 'استخدام أدوات جمع البيانات',
    lessons: [
      { n: 1, title: 'المستشعرات والبيانات' },
      { n: 2, title: 'تطبيقات الذكاء الاصطناعي وإنترنت الأشياء' },
    ],
  },
  {
    unit: 'الفصل الثالث', title: 'الويب (Web Technologies)',
    lessons: [
      { n: 1, title: 'تطور الويب', en: 'The Evolution of the Web', icon: '🌐', board: 'u3l1' },
      { n: 2, title: 'طرق الاتصال في تطبيقات الويب', en: 'Communication Methods in Web Applications', icon: '📡', board: 'u3l2' },
      { n: 3, title: 'أساسيات تكنولوجيا الواجهة الأمامية', en: 'Front-end Technology Fundamentals', icon: '💻', board: 'u3l3' },
      { n: 4, title: 'مراجعة شاملة وماراثون الامتحانات (الوحدة الثالثة)', en: 'Unit 3 Master Review & Mega Quiz', icon: '🏆', board: 'u3rev', badge: 'مراجعة شاملة' },
    ],
  },
  {
    unit: 'الفصل الرابع', title: 'تصميم الويب والوسائط',
    lessons: [
      { n: 1, title: 'أنواع الوسائط وخصائصها', en: 'Media Types & Characteristics', icon: '🎥', board: 'u4l1' },
      { n: 2, title: 'تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية', en: 'Information Design & Website UX', icon: '🧠', board: 'u4l2' },
      { n: 3, title: 'طرق تقييم المواقع الإلكترونية', en: 'Website Evaluation Methods', icon: '🔍', board: 'u4l3' },
      { n: 4, title: 'عملية التحسين التكراري للمواقع الإلكترونية', en: 'Iterative Website Optimization Process', icon: '🔄', board: 'u4l4' },
    ],
  },
];

/** Default alias for backward compatibility */
export const CURRICULUM = CURRICULUM_G2;

export type GradeId = 'g1' | 'g2';
export const GRADES = [
  {
    id: 'g2' as const,
    title: 'الصف الثاني الثانوي (بكالوريا)',
    sub: 'البرمجة والذكاء الاصطناعي · الترم الأول 2026 / 2027',
    badge: '٨ دروس متاحة',
    curriculum: CURRICULUM_G2,
  },
  {
    id: 'g1' as const,
    title: 'الصف الأول الثانوي',
    sub: 'البرمجة والذكاء الاصطناعي · الترم الأول 2026 / 2027',
    badge: 'درس جديد متاح',
    curriculum: CURRICULUM_G1,
  },
];

export const legacyId = (u: number, n: number) => `u${u}l${n}`;
