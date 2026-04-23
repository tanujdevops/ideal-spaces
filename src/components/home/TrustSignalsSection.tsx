import React from 'react';
import { idealAssets } from '@/data/idealSpaces';

const TrustSignalsSection: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-fraunces text-5xl text-[#111827] mb-6">Redefining Event Venues</h2>
          <div className="w-24 h-1 bg-[#E0B030] mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Border */}
          <div className="relative">
            <div className="border-2 border-[rgba(224,176,48,0.2)] rounded-2xl p-4">
              <img
                src={idealAssets.corporate}
                alt="Corporate event setup at Ideal Spaces"
                className="rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full"
              />
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <span className="font-material-icons text-2xl text-[#E0B030]">verified_user</span>
                </div>
              </div>
              <div>
                <h4 className="font-syne font-bold text-xl text-[#111827] mb-2">Multiple Event Zones</h4>
                <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                  Grand indoor, open lawn, activity turf, and parking spaces are planned for
                  smoother weddings, corporate events, and social gatherings.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <span className="font-material-icons text-2xl text-[#E0B030]">support_agent</span>
                </div>
              </div>
              <div>
                <h4 className="font-syne font-bold text-xl text-[#111827] mb-2">Fast Site Visit Support</h4>
                <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                  Mobile calls, WhatsApp, and short forms help guests and planners move quickly from
                  discovery to enquiry.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <span className="font-material-icons text-2xl text-[#E0B030]">savings</span>
                </div>
              </div>
              <div>
                <h4 className="font-syne font-bold text-xl text-[#111827] mb-2">Guest Comfort Focus</h4>
                <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                  Capacity, flow, and 250+ car parking are presented clearly so event decisions are
                  easier from the first visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
