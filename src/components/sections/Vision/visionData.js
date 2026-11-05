import primaryImg from '@/assets/images/vision/vision-primary.jpg';
import secondaryImg from '@/assets/images/vision/vision-secondary.jpg';

/**
 * Our Vision Data
 * 100% strictly preserved from official document:
 * DOC ID: MOS-CVS-001 (2. قسم الرؤية – Our Vision - Page 3 & 4)
 * Zero invented claims, promises, or marketing copy.
 */
export const VISION_DATA = {
  badge: 'رؤية موثِق',
  headline: 'نبني كيانًا... لا مجرد شركة تقدم خدمات.',
  lead: 'رؤية موثِق تتجاوز تنفيذ المشروعات البرمجية أو تقديم الخدمات التقنية.',
  paragraphs: [
    'نطمح إلى بناء كيان قادر على اكتشاف الفرص، وتطوير المنتجات، وتقديم الحلول، وبناء علاقات تجارية مستدامة، وتكوين منظومة عمل تنمو من خلال المعرفة والخبرة والمشاركة الفعلية.',
    'نريد أن تكون موثِق بيئة يستطيع فيها أصحاب القدرات المختلفة أن يجتمعوا حول رؤية مشتركة، ويحولوا أفكارهم إلى مشروعات، ومشروعاتهم إلى منتجات وأعمال ذات قيمة.',
  ],
  highlight: 'نحن في مرحلة بناء الكيان، ولذلك نرى أن الشركاء الذين ينضمون اليوم يمكنهم المشاركة في تشكيل مستقبله، والمساهمة في تحديد مسارات نموه.',
  images: {
    primary: {
      src: primaryImg,
      alt: 'بيئة ابتكار وتطوير تقنية وهندسة حلول برمجية حقيقية',
      caption: 'هندسة المنتجات وتطوير الحلول الرقمية',
    },
    secondary: {
      src: secondaryImg,
      alt: 'مؤشرات نمو وتكامل استراتيجي مستدام للشركاء',
      caption: 'بناء علاقات تجارية وشراكات مستدامة',
    },
  },
};
