import React from 'react';

const stats = [
  { value: '3,000', label: 'Guest Capacity' },
  { value: '4', label: 'Event Zones' },
  { value: '250+', label: 'Car Parking' },
  { value: 'Indoor', label: 'Plus Outdoor' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F7F0DF] border-y border-[rgba(224,176,48,0.05)] py-8 md:py-12">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-[rgba(224,176,48,0.12)] md:grid-cols-4 md:gap-0 md:divide-x md:divide-[rgba(224,176,48,0.1)] md:rounded-none md:bg-transparent">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#F7F0DF] px-3 py-6 text-center md:px-6 md:py-0">
              <div className="font-space-mono font-bold text-3xl text-[#E0B030] mb-2 sm:text-4xl">
                {stat.value}
              </div>
              <div className="font-syne font-medium text-xs text-[#6b7280] uppercase tracking-wider sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
