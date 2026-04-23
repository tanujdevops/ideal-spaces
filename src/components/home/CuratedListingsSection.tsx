import React from 'react';
import { Link } from '@/lib/router';
import { spaces } from '@/data/idealSpaces';

const CuratedListingsSection: React.FC = () => {
    const spaceImages = spaces.map((space) => space.image);

  return (
    <section className="bg-[#FFFCF7] py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d="M0 0h20v20H0z" fill="#E0B030" opacity="0.05" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="font-space-mono text-sm text-[#E0B030] uppercase tracking-widest mb-4">Venue Zones</div>
            <h2 className="font-fraunces text-5xl text-[#111827]">Curated Spaces</h2>
          </div>

          <Link to="/spaces" className="flex items-center gap-2 font-manrope font-bold text-[#E0B030] hover:gap-4 transition-all">
            View All Spaces
            <span className="font-material-icons text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Large Featured Property */}
          <div className="col-span-12 md:col-span-8 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] relative group">
            <div className="relative h-[500px]">
              <img 
                src={spaceImages[0]} 
                alt="Grand Hall at Ideal Spaces" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-[#E0B030] inline-block px-3 py-1 rounded text-[#221410] font-manrope font-bold text-xs mb-4">
                  FEATURED
                </div>
                <h3 className="font-fraunces text-3xl text-white mb-2">Grand Hall</h3>
                <p className="font-manrope font-light text-white/80 mb-4">3023 m2 indoor premium setting</p>
                <div className="border-t border-white/20 pt-4 flex items-center justify-between">
                  <span className="font-space-mono text-white">Up to 3,000 floating</span>
                  <div className="flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="font-material-icons text-sm">groups</span>
                      <span className="font-space-mono text-sm">2,000 seated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-material-icons text-sm">square_foot</span>
                      <span className="font-space-mono text-sm">3023 m2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Property Card */}
          <div className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] relative group">
            <div className="relative h-[500px]">
              <img 
                src={spaceImages[1]} 
                alt="Open Lawn at Ideal Spaces" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-fraunces text-xl text-white mb-1">Open Lawn</h3>
                <p className="font-manrope text-sm text-white/70 mb-3">Evening receptions</p>
                <span className="font-space-mono text-sm text-white">3636 m2</span>
              </div>
            </div>
          </div>

          {/* Desert Oasis */}
          <div className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] aspect-square">
            <div className="relative h-full">
              <img 
                src={spaceImages[2]} 
                alt="Artificial Turf at Ideal Spaces" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-fraunces text-xl text-white mb-1">Artificial Turf</h3>
                <p className="font-manrope text-sm text-white/70 mb-3">Activity and extension zone</p>
                <span className="font-space-mono text-sm text-white">Up to 300</span>
              </div>
            </div>
          </div>

          {/* Coastal Retreat */}
          <div className="col-span-12 md:col-span-8 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] relative">
            <div className="relative h-[800px]">
              <img 
                src={spaceImages[3]} 
                alt="Parking Area at Ideal Spaces" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-fraunces text-2xl text-white mb-2">Parking Area</h3>
                <p className="font-manrope text-white/70 mb-6">Smooth arrival and exit flow</p>
                <div className="border-t border-white/20 pt-6 flex items-center justify-between">
                  <span className="font-space-mono text-white">250 cars</span>
                  <Link to="/spaces" className="text-white hover:bg-white/10 p-2 rounded-full transition-all">
                    <span className="font-material-icons text-2xl">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedListingsSection;
