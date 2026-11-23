import type { LessonDef } from '../../board/types';
import { intro, explorerFrame, masterComparisons, scenarioFrame } from './scenes1';

export const u3qa: LessonDef = {
  id: 'u3qa',
  title: 'بنك الأسئلة المقالية (سؤال وجواب تفاعلي)',
  subtitle: 'الوحدة الثالثة: تقنيات الويب · الصف الثاني الثانوي (بكالوريا) · إجابات نموذجية بأسلوب طالب متفوق',
  sections: [
    {
      title: '١ · استراتيجية الإجابة المقالية وأسرار الدرجة النهائية',
      frames: [intro],
    },
    {
      title: '٢ · بنك الأسئلة المقالية التفاعلي الشامل (٣٨ سؤالاً)',
      frames: [explorerFrame],
    },
    {
      title: '٣ · الجدول الذهبي لمقارنات الامتحانات الحاسمة',
      frames: [masterComparisons],
    },
    {
      title: '٤ · سيناريوهات الأنظمة المتكاملة ومواقف التفكير النقدي',
      frames: [scenarioFrame],
    },
  ],
};
