import React from 'react';
import { Building2, Users, MapPin, CheckCircle } from 'lucide-react';

const AboutStatsSection: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: '3,000',
      label: 'Guest Capacity'
    },
    {
      icon: Users,
      value: '4',
      label: 'Event Zones'
    },
    {
      icon: MapPin,
      value: '250+',
      label: 'Car Parking'
    },
    {
      icon: CheckCircle,
      value: 'Indoor',
      label: 'Plus Outdoor'
    }
  ];

  return (
    <section className="bg-[#FBF7EF] border-y border-[#F2DFA8] py-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <stat.icon className="w-10 h-10 text-[#B98215]" strokeWidth={1.5} />
              </div>
              
              {/* Value */}
              <div className="font-space-mono font-bold text-4xl text-[#221410] mb-2">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="font-manrope font-extralight text-xs text-[#6b7280] uppercase tracking-[1.2px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
