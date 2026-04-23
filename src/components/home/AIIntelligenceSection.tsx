import React from 'react';

const AIIntelligenceSection: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-space-mono text-sm text-[#E0B030] uppercase tracking-widest mb-4">Why Choose Ideal Spaces?</div>
          <h2 className="font-fraunces text-5xl text-[#111827] mb-6">Premium Venue Planning Advantage</h2>
          <p className="font-manrope font-light text-lg text-[#4b5563] max-w-[740px] mx-auto">
            Keep the same elegant card layout, now focused on the reasons planners choose Ideal Spaces
            for weddings, corporate events, and large social gatherings.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]">
            <div className="w-14 h-14 bg-[rgba(224,176,48,0.1)] rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-[#E0B030]">groups</span>
            </div>
            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">Large Guest Capacity</h3>
            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              The venue supports up to 3,000 floating guests with zones that help families and planners
              manage arrivals, dining, ceremonies, and entertainment.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]">
            <div className="w-14 h-14 bg-[rgba(224,176,48,0.1)] rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-[#E0B030]">celebration</span>
            </div>
            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">Indoor + Outdoor Flow</h3>
            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              A grand hall, open lawn, turf, and parking area let every event format feel structured,
              spacious, and easy for guests to navigate.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]">
            <div className="w-14 h-14 bg-[rgba(224,176,48,0.1)] rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-[#E0B030]">support_agent</span>
            </div>
            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">Fast Booking Support</h3>
            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              Mobile-first calls, WhatsApp links, and enquiry forms help visitors quickly get pricing,
              availability, and site-visit coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntelligenceSection;
