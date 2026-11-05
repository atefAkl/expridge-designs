import slide1Img from '@/assets/images/hero/slide-1.jpg';
import slide2Img from '@/assets/images/hero/slide-2.jpg';
import slide3Img from '@/assets/images/hero/slide-3.jpg';

/**
 * Hero Carousel Slides Data
 * Content taken 100% strictly and word-for-word from official document:
 * DOC ID: MOS-CVS-001 (صفحة التعريف واستقطاب الشركاء - 1. القسم الرئيسي Hero Section)
 */
export const HERO_SLIDES = [
  {
    id: 'slide-1',
    badge: 'استقطاب الشركاء',
    titlePrefix: 'لا نبحث عمّن يعمل معنا فقط...',
    titleHighlight: 'بل عمّن يشاركنا البناء.',
    subtitle:
      'في موثِق، نعمل على بناء كيان تقني وريادي يهدف إلى تحويل الخبرات والأفكار والقدرات إلى منتجات وأعمال حقيقية.',
    primaryCta: {
      label: 'قدّم طلب الانضمام كشريك',
      href: '#final-cta',
    },
    secondaryCta: {
      label: 'تعرّف على رؤية موثِق',
      href: '#vision',
    },
    image: slide1Img,
    imageAlt: 'بنية رقمية متطورة وشبكة ذكية تعكس التحول الرقمي وبناء المنتجات الحقيقية',
    tag: 'بناء الكيان والمنتجات',
  },
  {
    id: 'slide-2',
    badge: 'استقطاب الشركاء',
    titlePrefix: 'لا نبحث عمّن يعمل معنا فقط...',
    titleHighlight: 'بل عمّن يشاركنا البناء.',
    subtitle:
      'نؤمن أن بناء شركة ناجحة لا يعتمد على المهارة التقنية وحدها، بل يحتاج إلى عقول تفكر، وأشخاص تبادر، وشركاء يتحملون المسؤولية ويشاركون في صناعة القرارات والنتائج.',
    primaryCta: {
      label: 'قدّم طلب الانضمام كشريك',
      href: '#final-cta',
    },
    secondaryCta: {
      label: 'تعرّف على رؤية موثِق',
      href: '#vision',
    },
    image: slide2Img,
    imageAlt: 'بيئة تقنية متقدمة وشراكات تصنع القرارات والنتائج المستدامة',
    tag: 'صناعة القرارات والنتائج',
  },
  {
    id: 'slide-3',
    badge: 'استقطاب الشركاء',
    titlePrefix: 'لا نبحث عمّن يعمل معنا فقط...',
    titleHighlight: 'بل عمّن يشاركنا البناء.',
    subtitle:
      'نبحث عن أشخاص يرغبون في أن يكونوا جزءًا من رحلة البناء، لا مجرد أفراد ينفذون مهامًا محددة.',
    primaryCta: {
      label: 'قدّم طلب الانضمام كشريك',
      href: '#final-cta',
    },
    secondaryCta: {
      label: 'تعرّف على رؤية موثِق',
      href: '#vision',
    },
    image: slide3Img,
    imageAlt: 'شراكة حقيقية تساهم في رحلة البناء وتشكيل مستقبل الكيان',
    tag: 'رحلة البناء المشترك',
  },
];
