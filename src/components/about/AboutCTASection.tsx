import React from 'react';
import { Link } from '@/lib/router';
import textureImage from '../../images/Abstract architectural texture with light and shadow.png';
import { imageSrc } from '../../utils/imageSrc';

const CTASection: React.FC = () => {
  return (
    <section className="bg-[#E0B030] py-24 relative overflow-hidden">
      <img
        src={imageSrc(textureImage)}
        alt="Background Texture"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="absolute top-0 left-1/4 w-96" />

      <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10">
        <h2 className="font-fraunces text-5xl text-[#221410] mb-6">
          Ready to Visit Ideal Spaces?
        </h2>
        <p className="font-manrope font-light text-xl text-[#221410]/80 mb-10 max-w-[680px] mx-auto">
          Book a site visit, get pricing, or ask for availability through a mobile-first enquiry flow.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/contact#inquiry" className="bg-[#111827] text-white font-manrope font-bold text-lg px-10 py-4 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.18)] hover:bg-[#221410] hover:shadow-2xl transition-all">
            Book a Site Visit
          </Link>
          <Link to="/spaces" className="border-2 border-[#221410] text-[#221410] font-manrope font-bold text-lg px-10 py-4 rounded-xl hover:bg-[#221410] hover:text-white transition-all">
            View Spaces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
