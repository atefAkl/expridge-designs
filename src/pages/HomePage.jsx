import React from 'react';
import { Layout } from '@/components/layout';
import {
  HeroSection,
  VisionSection,
  TargetPartnersSection,
  PartnershipModelSection,
  PrinciplesSection,
  HowToJoinSection,
  FaqSection,
  FinalCtaSection,
  IconTransitionSection,
} from '@/components/sections';

/**
 * HomePage - Assembles all landing page sections in strict sequence:
 * 1. Hero
 * 2. Vision
 * 3. Target Partners (Who We're Looking For)
 * 4. Partnership Model (What Partnership Means)
 * 5. Principles
 * 6. How to Join
 * 7. FAQ
 * 8. Final CTA
 * 9. Animated Icon Transition
 * 10. Footer (via Layout)
 */
export function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <VisionSection />
      <TargetPartnersSection />
      <PartnershipModelSection />
      <PrinciplesSection />
      <HowToJoinSection />
      <FaqSection />
      <FinalCtaSection />
      <IconTransitionSection />
    </Layout>
  );
}

export default HomePage;
