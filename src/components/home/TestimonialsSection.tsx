import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#FFFCF7] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="font-space-mono text-sm text-[#E0B030] uppercase tracking-widest mb-4">Testimonials</div>
            <h2 className="font-fraunces text-5xl text-[#111827]">What Our Clients Say</h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-[#FCD34D] text-xl">star</span>
              ))}
            </div>
            <p className="font-manrope text-base text-[#4b5563] leading-relaxed mb-6">
              "The Grand Hall and lawn combination made our wedding reception feel effortless. The guest flow was exactly what we needed."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
              <div>
                <div className="font-syne font-bold text-sm text-[#111827]">Wedding Client</div>
                <div className="font-manrope text-xs text-[#6b7280]">Kolhapur</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-[#FCD34D] text-xl">star</span>
              ))}
            </div>
            <p className="font-manrope text-base text-[#4b5563] leading-relaxed mb-6">
              "For our annual meet, the parking and hall capacity solved the biggest planning concerns."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
              <div>
                <div className="font-syne font-bold text-sm text-[#111827]">Corporate Planner</div>
                <div className="font-manrope text-xs text-[#6b7280]">Maharashtra</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-[#FCD34D] text-xl">star</span>
              ))}
            </div>
            <p className="font-manrope text-base text-[#4b5563] leading-relaxed mb-6">
              "The enquiry form and WhatsApp response made it easy to shortlist the venue and plan a walkthrough."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
              <div>
                <div className="font-syne font-bold text-sm text-[#111827]">Event Organizer</div>
                <div className="font-manrope text-xs text-[#6b7280]">Local Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
