import React from 'react';

const ContactHeroSection: React.FC = () => {
  return (
    <section className="bg-[#FFFCF7] border-b border-[rgba(229,214,177,0.5)] py-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center">
          {/* Label */}
          <div className="flex justify-center mb-4">
            <span className="font-space-mono text-xs text-[#E0B030] uppercase tracking-widest">
              Contact & Booking
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-fraunces text-6xl text-[#221410] mb-6">
            Book a Site Visit
          </h1>

          {/* Subtitle */}
          <p className="font-manrope text-lg text-[#4B5563] leading-relaxed max-w-[672px] mx-auto">
            Share your event date, guest count, and contact details. The Ideal Spaces team
            can help with pricing, availability, directions, and venue walkthroughs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
