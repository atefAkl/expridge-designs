import slide1Img from "@/assets/images/hero/slide-1.jpg";
import slide2Img from "@/assets/images/hero/slide-2.jpg";
import slide3Img from "@/assets/images/hero/slide-3.jpg";

/**
 * Hero Carousel Slides Data
 * Updated with punchy, distinct, concise titles per slide as instructed in video feedback
 */
export const HERO_SLIDES = [
  {
    id: "slide-1",
    badge: "استقطاب الشركاء",
    titlePrefix: "نبحث عن شريك في البناء...",
    titleHighlight: "لا عن موظف.",
    subtitle:
      " نحن نعمل على بناء كيان تقني وريادي يهدف إلى تحويل الخبرات والأفكار والقدرات إلى منتجات وأعمال حقيقية.",
    primaryCta: {
      label: "قدّم طلب الانضمام كشريك",
      href: "#final-cta",
    },
    secondaryCta: {
      label: "تعرّف على رؤيتنا",
      href: "#vision",
    },
    image: slide1Img,
    imageAlt:
      "بنية رقمية متطورة وشبكة ذكية تعكس التحول الرقمي وبناء المنتجات الحقيقية",
    tag: "بناء الكيان والمنتجات",
  },
  {
    id: "slide-2",
    badge: "صناعة القرارات",
    titlePrefix: "هل لديك رؤية...",
    titleHighlight: "أم تنتظر التعليمات.",
    subtitle:
      "نؤمن أن بناء شركة ناجحة لا يعتمد على المهارة التقنية وحدها، بل يحتاج إلى عقول تفكر، ومبادرة حقيقية، وشركاء يتحملون المسؤولية ويشاركون في صناعة القرارات والنتائج.",
    primaryCta: {
      label: "قدّم طلب الانضمام كشريك",
      href: "#final-cta",
    },
    secondaryCta: {
      label: "تعرّف على رؤيتنا",
      href: "#vision",
    },
    image: slide2Img,
    imageAlt: "بيئة تقنية متقدمة وشراكات تصنع القرارات والنتائج المستدامة",
    tag: "صناعة القرارات والنتائج",
  },
  {
    id: "slide-3",
    badge: "رحلة البناء",
    titlePrefix: "نصنع شراكات استراتيجية مستدامة...",
    titleHighlight: "تبني المستقبل.",
    subtitle:
      "نبحث عن أشخاص يرغبون في أن يكونوا جزءًا فاعلاً من رحلة التأسيس والبناء، ويشاركون في تشكيل مستقبل الكيان لا مجرد أفراد ينفذون مهاماً محددة.",
    primaryCta: {
      label: "قدّم طلب الانضمام كشريك",
      href: "#final-cta",
    },
    secondaryCta: {
      label: "تعرّف على رؤيتنا",
      href: "#vision",
    },
    image: slide3Img,
    imageAlt: "شراكة حقيقية تساهم في رحلة البناء وتشكيل مستقبل الكيان",
    tag: "رحلة البناء المشترك",
  },
];
