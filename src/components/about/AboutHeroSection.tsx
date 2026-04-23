import React from 'react';
import { idealAssets } from '@/data/idealSpaces';

const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#B98215] h-[380px] md:h-[480px] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ 
          backgroundImage: `url('${idealAssets.about}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-[90%] px-6 md:px-8">
          <h1 className="font-fraunces text-[36px] md:text-[56px] leading-[1.1] text-[#FBF7EF] mb-4 md:mb-6">
            Redefining Celebrations with<br />
            <span className="italic">Scale & Elegance</span>
          </h1>
          
          {/* Divider */}
          <div className="w-24 h-px bg-[rgba(251,247,239,0.4)] mx-auto mb-6 md:mb-8" />
          
          <p className="font-manrope font-extralight text-base md:text-lg text-[rgba(251,247,239,0.95)] leading-relaxed tracking-wide">
            Where weddings, corporate events, and social gatherings are planned around comfort, capacity, and premium hospitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
