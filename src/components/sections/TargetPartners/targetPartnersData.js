import { TrendingUp, Cpu, Settings, PieChart, Handshake, PlusCircle } from 'lucide-react';

/**
 * Section 03: Who We're Looking For Data
 * Headline updated to concise format requested in video feedback
 */
export const TARGET_PARTNERS_DATA = {
  badge: 'من نبحث عنهم',
  headline: 'نبحث عن قدرات حقيقية... لا مسميات وظيفية.',
  intro: 'لا يشترط أن تكون قد أسست شركة من قبل، أو شغلت منصبًا إداريًا كبيرًا. ما يهمنا هو ما تستطيع إضافته، والمسؤولية التي يمكنك تحملها، والنتائج التي تستطيع المساهمة في تحقيقها.',
  subheading: 'نرحب بأصحاب القدرات والخبرات في مجالات متعددة، ومنها:',
  domains: [
    {
      id: 'business-market',
      number: '01',
      title: 'تطوير الأعمال وفهم السوق',
      icon: TrendingUp,
      points: [
        'اكتشاف الفرص التجارية وتحليلها.',
        'فهم احتياجات العملاء والأسواق.',
        'بناء نماذج الأعمال وتطوير مصادر الإيرادات.',
      ],
    },
    {
      id: 'products-tech',
      number: '02',
      title: 'المنتجات والتقنية',
      icon: Cpu,
      points: [
        'تطوير المنتجات والحلول التقنية.',
        'تحويل الأفكار إلى منتجات قابلة للتطبيق.',
        'فهم احتياجات المستخدمين وربطها بالحلول التقنية.',
      ],
    },
    {
      id: 'operations-management',
      number: '03',
      title: 'التشغيل والإدارة',
      icon: Settings,
      points: [
        'تنظيم العمليات والإجراءات.',
        'إدارة الموارد وتحسين الأداء.',
        'تحويل الأهداف إلى خطط ومسؤوليات قابلة للتنفيذ.',
      ],
    },
    {
      id: 'finance-governance',
      number: '04',
      title: 'المالية والحوكمة',
      icon: PieChart,
      points: [
        'التخطيط المالي وفهم التكاليف والإيرادات.',
        'بناء السياسات والإجراءات.',
        'المساهمة في تنظيم القرارات والالتزامات.',
      ],
    },
    {
      id: 'strategic-partnerships',
      number: '05',
      title: 'العلاقات والشراكات الاستراتيجية',
      icon: Handshake,
      points: [
        'بناء العلاقات المهنية والتجارية.',
        'تطوير فرص التعاون.',
        'فتح قنوات جديدة للنمو والتوسع.',
      ],
    },
    {
      id: 'other-domains',
      number: '06',
      title: 'مجالات أخرى وقدرات نوعية',
      icon: PlusCircle,
      isSpecial: true,
      text: 'إذا كانت لديك خبرة أو قدرة ترى أنها يمكن أن تضيف قيمة إلى موثِق، فنحن نرحب بالتعرف عليها، حتى لو لم تندرج ضمن المجالات السابقة.',
    },
  ],
};
