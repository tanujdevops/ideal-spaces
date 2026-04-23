import React from 'react';
import { ArrowRight } from 'lucide-react';
import { idealAssets } from '@/data/idealSpaces';

const AboutHeritageSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image with Border */}
          <div className="relative">
            {/* Inner border box */}
            <div className="border-2 border-[rgba(224,176,48,0.2)] rounded-xl p-4">
              {/* Image container with overlay */}
              <div className="relative h-[735px] bg-[rgba(251,247,239,0.3)] border border-[rgba(229,214,177,0.5)] rounded-lg overflow-hidden">
                <div className="absolute inset-4">
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src={idealAssets.heritage}
                      alt="Ideal Spaces venue detail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white mix-blend-saturation" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pt-16">
            {/* Label */}
            <div className="mb-6">
              <p className="font-space-mono text-xs text-[#E0B030] uppercase tracking-[2.4px]">
                Our Heritage
              </p>
            </div>

            {/* Headline */}
            <h2 className="mb-6">
              <span className="font-syne text-[40px] leading-[50px] text-[#221410] block font-semibold">
                Redefining the Event Venue Experience with
              </span>
              <span className="font-fraunces italic text-[40px] leading-[50px] text-[#E0B030] block">
                Better Celebration Planning
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 mb-8">
              <p className="font-manrope font-extralight text-base leading-[26px] text-[#4b5563]">
                Ideal Spaces is built for clients who need scale without losing elegance.
                Wedding families, corporate planners, and local organizers can explore
                indoor and outdoor zones clearly before they visit.
              </p>

              <p className="font-manrope font-extralight text-base leading-[26px] text-[#4b5563]">
                The venue combines a grand hall, open lawn, artificial turf, and large
                parking area so every event can be planned around guest capacity, movement,
                and comfort.
              </p>
            </div>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-[#E0B030] pl-6 mb-8">
              <p className="font-fraunces italic text-2xl leading-8 text-[#E0B030]">
                "We believe booking a venue should feel clear,
                confident, and inspiring."
              </p>
            </blockquote>

            {/* Link */}
            <a 
              href="#team" 
              className="inline-flex items-center gap-2 border-b border-[#221410] pb-1 group hover:border-[#E0B030] transition-colors"
            >
              <span className="font-space-mono text-sm text-[#221410] group-hover:text-[#E0B030] transition-colors">
                Explore the Spaces
              </span>

              <ArrowRight className="w-4 h-4 text-[#221410] group-hover:text-[#E0B030] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeritageSection;
