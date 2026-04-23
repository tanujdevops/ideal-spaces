'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import FloatingLeadButtons from '@/components/ideal/FloatingLeadButtons';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutStatsSection from '@/components/about/AboutStatsSection';
import AboutHeritageSection from '@/components/about/AboutHeritageSection';
import AboutValuesSection from '@/components/about/AboutValuesSection';
import AboutAISection from '@/components/about/AboutAISection';
import AboutCTASection from '@/components/about/AboutCTASection';
import { useSEO } from '@/hooks/useSEO';

const AboutUsPage: React.FC = () => {
  useSEO({
    title: 'About Ideal Spaces',
    description:
      'Learn about Ideal Spaces, a premium Kolhapur event venue built for weddings, corporate events, social celebrations, and large-scale gatherings.',
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <AboutHeroSection />
      <AboutStatsSection />
      <AboutHeritageSection />
      <AboutValuesSection />
      <AboutAISection />
      <AboutCTASection />
      <FloatingLeadButtons />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
