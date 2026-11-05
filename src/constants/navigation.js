/**
 * Navigation & Footer links matching 100% strictly the official document sections:
 * DOC ID: MOS-CVS-001 (مقترح المحتوى الرسمي لصفحات استقطاب الشركاء)
 */
export const NAV_LINKS = [
  { id: 'hero', label: 'الرئيسية', href: '#hero' },
  { id: 'vision', label: 'رؤية موثِق', href: '#vision' },
  { id: 'target-partners', label: 'من نبحث عنهم', href: '#target-partners' },
  { id: 'partnership-model', label: 'مفهوم الشراكة', href: '#partnership-model' },
  { id: 'principles', label: 'مبادئنا', href: '#principles' },
  { id: 'how-to-join', label: 'خطوات الانضمام', href: '#how-to-join' },
  { id: 'faq', label: 'الأسئلة الشائعة', href: '#faq' },
];

export const FOOTER_COLUMNS = {
  quickLinks: {
    title: 'روابط سريعة',
    links: [
      { label: 'الرئيسية', href: '#hero' },
      { label: 'من نبحث عنهم', href: '#target-partners' },
      { label: 'مفهوم الشراكة', href: '#partnership-model' },
      { label: 'مبادئنا', href: '#principles' },
      { label: 'خطوات الانضمام', href: '#how-to-join' },
      { label: 'الأسئلة الشائعة', href: '#faq' },
    ],
  },
  about: {
    title: 'عن موثِق',
    links: [
      { label: 'رؤية موثِق', href: '#vision' },
      { label: 'بناء الكيان والمنتجات', href: '#vision' },
      { label: 'ملف الشركاء المستهدفين', href: '#target-partners' },
      { label: 'نموذج العمل المشترك', href: '#partnership-model' },
    ],
  },
  additional: {
    title: 'روابط إضافية',
    links: [
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'الشروط والأحكام', href: '#' },
      { label: 'تواصل مع فريق الشراكات', href: 'mailto:atef@exep-ridge.com' },
      { label: 'خريطة الموقع', href: '#hero' },
    ],
  },
};
