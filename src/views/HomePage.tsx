'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AIIntelligenceSection from '@/components/home/AIIntelligenceSection';
import CuratedListingsSection from '@/components/home/CuratedListingsSection';
import ProcessSection from '@/components/home/ProcessSection';
import TrustSignalsSection from '@/components/home/TrustSignalsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import { useSEO } from '@/hooks/useSEO';

const HomePage: React.FC = () => {
  useSEO({
    title: 'Best Wedding Venue in Kolhapur',
    description:
      'Ideal Spaces is a premium event venue with a grand hall, open lawn, turf, and 250+ car parking for weddings, corporate events, and social celebrations.',
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AIIntelligenceSection />
      <CuratedListingsSection />
      <ProcessSection />
      <TrustSignalsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
