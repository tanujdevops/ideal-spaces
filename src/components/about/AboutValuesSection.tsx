import React from 'react';
import { Lightbulb, Eye, Award } from 'lucide-react';

const AboutValuesSection: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Premium Experience',
      description: 'We keep the venue experience elegant, spacious, and practical for weddings, corporate events, and social celebrations.'
    },
    {
      icon: Eye,
      title: 'Clear Planning',
      description: 'Capacity, parking, event zones, and enquiry steps are presented clearly so planners can make decisions with confidence.'
    },
    {
      icon: Award,
      title: 'Lead Response',
      description: 'Calls, WhatsApp, directions, and enquiry forms help visitors move from interest to site visit quickly.'
    }
  ];

  return (
    <section className="bg-[#FFFFFF] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-space-mono text-xs text-[#E0B030] uppercase tracking-[1.2px] mb-4">
            Our Ethos
          </div>
          <h2 className="font-syne text-4xl text-[#221410]">
            Driven by Purpose
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white border border-[#F2DFA8] rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-[rgba(224,176,48,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-[#E0B030]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-syne text-xl text-[#221410] mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="font-manrope font-extralight text-sm leading-[22.75px] text-[#4b5563]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
