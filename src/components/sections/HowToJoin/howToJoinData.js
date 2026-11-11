import { FileEdit, ClipboardCheck, Users, Handshake, Rocket } from 'lucide-react';

/**
 * Section 06: How to Join Data
 * 100% strictly preserved from official document:
 * DOC ID: MOS-CVS-001 (6. قسم خطوات الانضمام – How to Join - Page 6 & 7)
 */
export const HOW_TO_JOIN_DATA = {
  badge: 'مسار الشراكة',
  headline: 'كيف تبدأ رحلتك مع موثِق؟',
  subtitle: 'خطوات محددة وواضحة تبدأ من تقديم الطلب حتى الوصول إلى التفاهم وبدء المشاركة الفعلية.',
  stages: [
    {
      id: 'step-1',
      number: '01',
      title: 'الخطوة الأولى: تقديم الطلب',
      shortTitle: 'تقديم الطلب',
      description: 'شاركنا معلوماتك وخبراتك، وأخبرنا بما تستطيع إضافته إلى الكيان، والمسؤولية التي ترغب في توليها.',
      icon: FileEdit,
    },
    {
      id: 'step-2',
      number: '02',
      title: 'الخطوة الثانية: مراجعة الطلب',
      shortTitle: 'مراجعة الطلب',
      description: 'نراجع الطلبات لفهم الخبرات والقدرات ومدى توافقها مع احتياجات موثِق واتجاهها.',
      icon: ClipboardCheck,
    },
    {
      id: 'step-3',
      number: '03',
      title: 'الخطوة الثالثة: جلسة التعارف والتقييم',
      shortTitle: 'جلسة التعارف والتقييم',
      description: 'نتعرف عليك بصورة أعمق، ونناقش رؤيتك وطريقة تفكيرك وقدرتك على تحمل المسؤولية.',
      icon: Users,
    },
    {
      id: 'step-4',
      number: '04',
      title: 'الخطوة الرابعة: مناقشة إطار الشراكة',
      shortTitle: 'مناقشة إطار الشراكة',
      description: 'في حال وجود توافق مبدئي، نناقش طبيعة المساهمة والمسؤوليات والتوقعات والترتيبات المناسبة.',
      icon: Handshake,
    },
    {
      id: 'step-5',
      number: '05',
      title: 'الخطوة الخامسة: الاتفاق والبدء',
      shortTitle: 'الاتفاق والبدء',
      description: 'بعد الوصول إلى تفاهم واضح واتفاق متبادل، تبدأ مرحلة المشاركة الفعلية في بناء موثِق.',
      icon: Rocket,
    },
  ],
  cta: {
    label: 'قدّم طلب الانضمام كشريك',
    href: '/portal#/apply',
  },
};
