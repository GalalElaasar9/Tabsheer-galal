// Narration script and tags for Unit 4 Lesson 1 — Media Types & Characteristics
import type { TagKind } from '../../sketch/Sketch';

export const SCRIPT: Record<string, string[]> = {
  cover: [
    'أهلاً بكم في أول دروس الوحدة الرابعة: أنواع الوسائط وخصائصها لمرحلة البكالوريا.',
    'النهارده هنتعلم إزاي نختار الصور والصوت والفيديو لمواقع الويب، ونفهم أسرار الضغط وجودة العرض بدون ما نبطئ تحميل الصفحة.',
  ],
  journey: [
    'دي محطات رحلتنا: من أول أنواع الوسائط، مروراً بالصور النقطية والمتجهة، وخوارزميات الضغط، والصوت والفيديو، وحتى وسوم HTML5 وبنك الأسئلة.',
  ],
  'media-types-overview': [
    'الويب الحديث قايم على أربع وسائط: النصوص، الصور، الصوت، والفيديو. وكل وسيط ليه وظيفته وتكلفته في حجم التحميل.',
  ],
  'raster-vs-vector': [
    'مقارنة امتحانية مهمة جداً: الصور النقطية Raster معمولة من بكسلات وبتفقد وضوحها بالتكبير زي الصور الطبيعية، والصور المتجهة Vector معادلات محتفظة بحدتها للأبد زي الشعارات.',
  ],
  'media-explorer': [
    'في المعمل ده قارن بنفسك بين صيغ JPEG و PNG و WebP و SVG وشوف إزاي نسبة الضغط بتأثر على حجم الملف وسرعة الفتح.',
  ],
  'check-images': [
    'يلا نتأكد من فهمنا لأنواع الصور وصيغ الويب المختلفة.',
  ],
  'compression-lossy-vs-lossless': [
    'خوارزميات الضغط نوعين: ضغط بفقْد Lossy بيحذف تفاصيل دقيقة العين مش بتلاحظها، وضغط بدون فقْد Lossless بيحافظ على الملف الأصلي بالكامل.',
  ],
  'audio-digitalization': [
    'الصوت الرقمي بيتحدد بحاجتين: معدل العينات Sample Rate وعمق البت Bit Depth، وهما اللي بيحددوا النقاء وحجم الملف.',
  ],
  'audio-video-lab': [
    'جرب مشغل الفيديو والصوت في HTML5: بدّل بين الخصائص وشوف استهلاك الباقة مع كل دقة.',
  ],
  'order-raster': [
    'رتّب خطوات تجهيز وضغط الصورة للعرض في موقع الويب بالترتيب الهندسي الصحيح.',
  ],
  'check-audio-video': [
    'أسئلة تأكد من فهمك لخصائص الصوت والفيديو الرقمي في تطبيقات الويب.',
  ],
  'html5-media-tags': [
    'وسوم HTML5 الحديثة سهّلت عرض الوسائط: وسم img مع خاصية alt، ووسم video مع controls و poster.',
  ],
  'textbook-definitions': [
    'دي لوحة معجم مصطلحات كتاب الوزارة المعتمدة لدرس أنواع الوسائط.',
  ],
  'concept-map-u4l1': [
    'دي الخريطة الذهنية الشاملة للدرس الأول في وحدة تصميم الويب والوسائط.',
  ],
  quiz: [
    'وقت التقييم: عشر أسئلة بتغطي محتوى درس الوسائط طبقاً لامتحانات البكالوريا.',
  ],
  diff: [
    'فرّق بين المفاهيم المتقاربة: Raster و Vector، Lossy و Lossless، MP3 و WAV، JPEG و PNG.',
  ],
  applied: [
    'مواقف واقعية وتطبيقية من امتحانات الثانوية العامة: فكّر واكشف الإجابة.',
  ],
  'ending-u4l1': [
    'ألف مبروك! أتقنتم بنجاح أول دروس الوحدة الرابعة: أنواع الوسائط وخصائصها.',
  ],
};

export const TAG: Record<string, TagKind> = {
  cover: 'story',
  journey: 'journey',
  'media-types-overview': 'parts',
  'raster-vs-vector': 'compare',
  'media-explorer': 'detail',
  'compression-lossy-vs-lossless': 'compare',
  'audio-digitalization': 'term',
  'audio-video-lab': 'example',
  'html5-media-tags': 'how',
  'textbook-definitions': 'term',
  'concept-map-u4l1': 'summary',
  'ending-u4l1': 'summary',
};

