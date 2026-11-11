import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeader } from '@/components/common';
import { VISION_DATA } from './visionData';
import { ShieldCheck, Compass, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TAB_ICONS = {
  vision: Compass,
  mission: Lightbulb,
  goals: Target,
};

export function VisionSection() {
  const { t, isRtl } = useLanguage();
  const translatedTabs = t('vision.tabs');
  const tabs = VISION_DATA.tabs.map((tab, idx) => {
    const tr = Array.isArray(translatedTabs) ? translatedTabs[idx] : null;
    if (!tr) return tab;
    return {
      ...tab,
      label: tr.label,
      lead: tr.lead,
      paragraphs: tr.paragraphs,
      highlight: tr.highlight,
      image: {
        ...tab.image,
        alt: tr.imageAlt,
        caption: tr.imageCaption,
      },
    };
  });

  const [activeTabId, setActiveTabId] = useState('vision');

  const activeTab = tabs.find((item) => item.id === activeTabId) || tabs[0];
  const ActiveIcon = TAB_ICONS[activeTab.id] || Compass;

  return (
    <section
      id="vision"
      aria-label={t('vision.sectionAria')}
      className="pt-10 pb-16 lg:pt-14 lg:pb-20 bg-[#F8F6EF] border-b border-[#E7E3D4]/80 overflow-hidden relative"
    >
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF7C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0F2D5B]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Unified Centered Header with Lateral Lines */}
        <SectionHeader
          badge={t('vision.badge')}
          title={t('vision.headline')}
          centered={true}
          theme="light"
          goldDivider={true}
          showSideLines={true}
          className="mb-8 sm:mb-12"
        />

        {/* Interactive Tabs Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-[#E7E3D4] shadow-sm gap-2">
            {tabs.map((tab) => {
              const Icon = TAB_ICONS[tab.id] || Compass;
              const isSelected = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold font-cairo transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F2D5B] text-white shadow-md'
                      : 'text-[#475569] hover:text-[#0F2D5B] hover:bg-[#F8F6EF]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#D4AF7C]' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display - Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Narrative text matching active tab */}
          <div className="lg:col-span-7 space-y-6 text-start font-cairo">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Active Tab Label Indicator */}
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF7C] bg-[#0F2D5B] px-3.5 py-1 rounded-lg">
                  <ActiveIcon className="w-4 h-4" />
                  <span>{activeTab.label} {t('vision.tabIndicatorSuffix')}</span>
                </div>

                {/* Lead Headline */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D5B] leading-snug">
                  {activeTab.lead}
                </h3>

                {/* Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {activeTab.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Highlight Callout */}
                <div
                  className={`${
                    isRtl
                      ? 'border-r-4 pr-5 rounded-l-2xl'
                      : 'border-l-4 pl-5 rounded-r-2xl'
                  } border-[#D4AF7C] py-3.5 px-4 bg-white/80 border border-[#E7E3D4] shadow-sm max-w-2xl`}
                >
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF7C] shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-[#0F2D5B] font-bold leading-relaxed">
                      {activeTab.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Active Tab Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E7E3D4] bg-white group"
                >
                  <img
                    src={activeTab.image.src}
                    alt={activeTab.image.alt}
                    className="w-full h-72 sm:h-84 lg:h-[390px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C38]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Image Caption */}
                  <div className="absolute bottom-4 right-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-start">
                    <p className="text-xs font-bold text-[#0F2D5B] font-cairo">
                      {activeTab.image.caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default VisionSection;
