'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@/lib/router';
import { homeContent, idealAssets, whatsappLink } from '@/data/idealSpaces';

const dynamicHeroWords = ['Celebration', 'Launches', 'Shows', 'Gatherings', 'Sports'];

const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(dynamicHeroWords[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = dynamicHeroWords[wordIndex];
  const visibleWord = currentWord.slice(0, visibleCharacters);

  useEffect(() => {
    if (shouldReduceMotion) {
      setWordIndex(0);
      setVisibleCharacters(dynamicHeroWords[0].length);
      setIsDeleting(false);
      return;
    }

    const hasFullWord = visibleCharacters === currentWord.length;
    const hasNoWord = visibleCharacters === 0;
    const delay = isDeleting ? 55 : hasFullWord ? 1400 : 95;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && hasFullWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && hasNoWord) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % dynamicHeroWords.length);
        return;
      }

      setVisibleCharacters((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [currentWord, isDeleting, shouldReduceMotion, visibleCharacters]);

  const venueImages = [
    idealAssets.grandHall,
    idealAssets.openLawn,
    idealAssets.corporate,
    idealAssets.hero,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative bg-[#FFFFFF] pt-20 pb-32 overflow-hidden">
        {/* Background decorative blurs */}
        <motion.div 
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
          className="absolute right-0 top-14 w-64 h-64 bg-[rgba(224,176,48,0.1)] rounded-full blur-[32px]" 
        />
        <motion.div 
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }
          }
          transition={{ 
            duration: 10,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
          className="absolute left-[738px] bottom-22 w-64 h-64 bg-[rgba(251,217,84,0.28)] rounded-full blur-[32px]" 
        />

        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial={shouldReduceMotion ? false : 'hidden'}
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-[rgba(224,176,48,0.1)] border border-[rgba(224,176,48,0.2)] rounded-full px-4 py-2 mb-10">
                <div className="w-2 h-2 bg-[#E0B030] rounded-full" />
                <span className="font-manrope font-bold text-xs text-[#E0B030] uppercase tracking-wider">
                  Premium Event Venue
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-fraunces text-[56px] lg:text-[70px] leading-[1.1] text-[#111827] mb-8"
                aria-label={`Where Grand ${currentWord} Come to Life`}
              >
                <span aria-hidden="true">
                  Where Grand<br />
                  <span className="italic text-[#E0B030]">
                    {visibleWord}
                    <span className="ml-1 inline-block w-[0.08em] translate-y-[0.06em] animate-pulse bg-[#E0B030] align-baseline">&nbsp;</span>
                  </span>
                  <span className="hidden sm:inline">
                    {' '}Come<br />
                  </span>
                  <span className="block sm:hidden">Come</span>
                  to Life
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="font-manrope font-light text-xl leading-7 text-[#4b5563] mb-12 max-w-[676px]">
                {homeContent.hero.subtext}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact#inquiry" className="bg-[#E0B030] text-[#221410] font-manrope font-bold text-lg px-8 py-4 rounded-xl shadow-[0px_10px_15px_-3px_rgba(224,176,48,0.25),0px_4px_6px_-4px_rgba(224,176,48,0.25)] hover:bg-[#C8911F] transition-all hover:shadow-xl inline-flex items-center">
                  {homeContent.hero.ctaPrimary}
                  <span className="font-material-icons text-sm ml-2">arrow_forward</span>
                </Link>
                <a href={whatsappLink('Hi Ideal Spaces, please share pricing for an event booking.')} target="_blank" rel="noopener noreferrer" className="border-2 border-[#d1d5db] text-[#374151] font-manrope font-bold text-lg px-8 py-4 rounded-xl hover:border-[#E0B030] hover:text-[#E0B030] transition-all inline-flex items-center">
                  <span className="font-material-icons text-2xl text-[#E0B030] mr-2">chat</span>
                  {homeContent.hero.ctaSecondary}
                </a>
              </motion.div>

              {/* Social Proof */}
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src={venueImages[0]} alt="" className="w-10 h-10 rounded-full border-2 border-[#FFFCF7] object-cover" />
                  <img src={venueImages[1]} alt="" className="w-10 h-10 rounded-full border-2 border-[#FFFCF7] object-cover" />
                  <img src={venueImages[2]} alt="" className="w-10 h-10 rounded-full border-2 border-[#FFFCF7] object-cover" />
                  <div className="w-10 h-10 bg-[#111827] rounded-full border-2 border-[#FFFCF7] flex items-center justify-center">
                    <span className="font-manrope font-bold text-xs text-white">3k</span>
                  </div>
                </div>
                <span className="font-manrope text-sm text-[#6b7280]">
                  Up to 3,000 guest venue capacity
                </span>
              </motion.div>
            </motion.div>

            {/* Right - Featured Property Card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_#e5e7eb]">
                <div className="relative h-[625px]">
                  <img
                    src={venueImages[3]}
                    alt="Ideal Spaces grand indoor and outdoor venue"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Property Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 border border-white/20 rounded-xl p-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-fraunces font-bold text-lg text-[#111827] mb-1">Ideal Spaces</h3>
                        <p className="font-space-mono text-xs text-[#6b7280] uppercase tracking-wide">Kolhapur, Maharashtra</p>
                      </div>
                      <div className="bg-[rgba(224,176,48,0.1)] px-2 py-1 rounded">
                        <span className="font-manrope font-bold text-xs text-[#E0B030]">BOOK SITE VISIT</span>
                      </div>
                    </div>
                    <div className="border-t border-[#e5e7eb] pt-3 flex items-center justify-between">
                      <span className="font-space-mono text-sm text-[#4b5563]">250+ car parking</span>
                      <div className="flex items-center gap-4 text-[#4b5563]">
                        <div className="flex items-center gap-1">
                          <span className="font-material-icons text-xs">groups</span>
                          <span className="font-manrope text-sm">3000</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-material-icons text-xs">event</span>
                          <span className="font-manrope text-sm">Weddings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
