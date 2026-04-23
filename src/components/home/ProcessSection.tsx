import React from 'react';
import { Link } from '@/lib/router';

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[#F7F0DF] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Sticky Content */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="font-space-mono text-sm text-[#E0B030] uppercase tracking-widest mb-6">Process</div>
              <h2 className="font-fraunces text-5xl text-[#111827] mb-6 leading-tight">
                The Path to Your<br />
                <span className="italic text-[#E0B030]">Perfect Event</span>
              </h2>
              <p className="font-manrope font-light text-lg text-[#4b5563] mb-8 leading-relaxed">
                The enquiry journey stays simple: share details, visit the venue, review spaces,
                and lock your event plan with confidence.
              </p>
              <Link to="/contact#inquiry" className="inline-block bg-[#111827] text-white font-manrope font-medium px-8 py-3 rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] hover:bg-[#1f2937] transition-all">
                Book a Site Visit
              </Link>
            </div>
          </div>

          {/* Right - Process Steps */}
          <div className="lg:col-span-8 space-y-12">
            {/* Step 1 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">Share Event Details</h3>
                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Tell us your name, phone, event date, and guest count so the venue team can respond
                    with useful availability and pricing context.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">Schedule Site Visit</h3>
                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Walk through the Grand Hall, Open Lawn, Turf, and parking flow to understand the
                    actual guest experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">Review Layout Options</h3>
                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Match your wedding, corporate, exhibition, or social event format with the right
                    indoor and outdoor zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">04</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">Confirm Booking</h3>
                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Finalize availability, pricing, and next steps with the venue team through call,
                    WhatsApp, or the enquiry form.
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

export default ProcessSection;
