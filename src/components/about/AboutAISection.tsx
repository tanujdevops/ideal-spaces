import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { idealAssets } from '@/data/idealSpaces';

const AboutAISection: React.FC = () => {
  const features = [
    'Grand Hall, Lawn, Turf, and Parking',
    'Up to 3,000 floating guest capacity',
    'Wedding, corporate, exhibition, and concert fit',
    'WhatsApp, call, and enquiry-first booking flow',
  ];

  return (
    <section className="bg-[#FBF7EF] border-t border-[#F2DFA8] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <p className="font-space-mono text-xs text-[#E0B030] uppercase tracking-[1.2px]">
                Venue Advantage
              </p>
            </div>

            <h2 className="mb-6">
              <span className="font-syne text-5xl leading-[48px] text-[#221410] block font-semibold">
                Lead-Ready
              </span>
              <span className="font-fraunces font-light italic text-5xl leading-[48px] text-[#E0B030] block">
                Venue Experience
              </span>
            </h2>

            <p className="font-manrope font-extralight text-lg leading-[29.25px] text-[#4b5563] mb-8">
              Ideal Spaces is presented for quick decision-making: visual venue zones,
              capacity-led content, mobile-first enquiry options, and direct contact paths
              for families and event planners.
            </p>

            <ul className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#E0B030]" />
                  </div>
                  <span className="font-manrope font-extralight text-base text-[#221410]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/spaces"
              className="inline-flex items-center gap-2 border-b border-[#221410] pb-1 group hover:border-[#E0B030] transition-colors"
            >
              <span className="font-space-mono text-sm text-[#221410] group-hover:text-[#E0B030] transition-colors">
                View venue spaces
              </span>
              <ArrowRight className="w-4 h-4 text-[#221410] group-hover:text-[#E0B030] transition-colors" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[592px] h-[732px] bg-[rgba(229,214,177,0.5)] rounded-lg rotate-2" />
            </div>

            <div className="relative aspect-[560/700] rounded-lg overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <img
                src={idealAssets.grandHall}
                alt="Ideal Spaces Grand Hall"
                className="absolute h-full left-[-12.5%] w-[125%] object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 border border-[#F2DFA8] rounded p-4 flex items-center gap-4">
                <div className="w-10 h-[46px] bg-[rgba(224,176,48,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#E0B030]" />
                </div>
                <div>
                  <p className="font-space-mono text-xs text-[#6b7280] uppercase mb-1">
                    Venue Advantage
                  </p>
                  <p className="font-manrope font-extralight text-lg text-[#221410]">
                    Mobile and WhatsApp Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAISection;
