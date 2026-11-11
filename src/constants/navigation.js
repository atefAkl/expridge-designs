/**
 * Simplified Navigation Links with translation keys
 */
export const NAV_LINKS = [
  { id: 'hero', labelKey: 'nav.links.hero', href: '#hero' },
  { id: 'faq', labelKey: 'nav.links.faq', href: '#faq' },
  { id: 'contact', labelKey: 'nav.links.contact', href: '#contact' },
];

export const FOOTER_LINKS = [
  { labelKey: 'footer.links.home', href: '#hero' },
  { labelKey: 'footer.links.vision', href: '#vision' },
  { labelKey: 'footer.links.targetPartners', href: '#target-partners' },
  { labelKey: 'footer.links.partnershipModel', href: '#partnership-model' },
  { labelKey: 'footer.links.principles', href: '#principles' },
  { labelKey: 'footer.links.faq', href: '#faq' },
  { labelKey: 'footer.links.privacy', href: '#' },
  { labelKey: 'footer.links.terms', href: '#' },
  { labelKey: 'footer.links.adminsLogin', href: '/portal#/login' },
];

export const FOOTER_COLUMNS = {
  quickLinks: {
    title: 'footer.links.home',
    links: [
      { labelKey: 'footer.links.home', href: '#hero' },
      { labelKey: 'footer.links.vision', href: '#vision' },
      { labelKey: 'footer.links.targetPartners', href: '#target-partners' },
      { labelKey: 'footer.links.partnershipModel', href: '#partnership-model' },
      { labelKey: 'footer.links.faq', href: '#faq' },
    ],
  },
};
