// Term 1 curriculum. A lesson is either a whiteboard (board), an older slide deck (legacy), or not ready yet.

export type LessonEntry = { n: number; title: string; en?: string; icon?: string; board?: string; legacy?: string };
export type UnitEntry = { unit: string; title: string; lessons: LessonEntry[] };

export const CURRICULUM: UnitEntry[] = [
  {
    unit: 'الفصل الأول', title: 'تكنولوجيا المعلومات والمجتمع',
    lessons: [
      { n: 1, title: 'تطور تكنولوجيا المعلومات والتحول الاجتماعي' },
      { n: 2, title: 'كيف يعمل الذكاء الاصطناعي' },
      { n: 3, title: 'الذكاء الاصطناعي في الحياة اليومية والصناعة' },
      { n: 4, title: 'القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي' },
    ],
  },
  {
    unit: 'الفصل الثاني', title: 'الأمن السيبراني',
    lessons: [
      { n: 1, title: 'تقنيات التشفير والمصادقة', icon: '🔐', legacy: 'legacy/lessons/unit2-lesson1.html' },
      { n: 2, title: 'تصميم أمن الشبكات' },
      { n: 3, title: 'الاستجابة للحوادث وإدارة المخاطر', icon: '🚨', legacy: 'legacy/lessons/unit2-lesson3.html' },
    ],
  },
  {
    unit: 'الفصل الثالث', title: 'الويب',
    lessons: [
      { n: 1, title: 'تطور الويب', en: 'The Evolution of the Web', icon: '🌐', board: 'u3l1' },
      { n: 2, title: 'طرق الاتصال في تطبيقات الويب', en: 'Communication Methods in Web Applications', icon: '📡', board: 'u3l2' },
      { n: 3, title: 'أساسيات تكنولوجيا الواجهة الأمامية' },
    ],
  },
  {
    unit: 'الفصل الرابع', title: 'تصميم الويب والوسائط',
    lessons: [
      { n: 1, title: 'أنواع الوسائط وخصائصها' },
      { n: 2, title: 'تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية' },
      { n: 3, title: 'طرق تقييم المواقع الإلكترونية' },
      { n: 4, title: 'عملية التحسين التكراري للمواقع الإلكترونية' },
    ],
  },
];

export const legacyId = (u: number, n: number) => `u${u}l${n}`;
