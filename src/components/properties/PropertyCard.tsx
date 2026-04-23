import React, { useState } from 'react';
import { Link } from '@/lib/router';

interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  badge?: string;
  tags?: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  name,
  price,
  location,
  beds,
  baths,
  sqft,
  badge,
  tags = []
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white border border-[#F2DFA8] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[340/240] overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-20" />

        {/* Badge */}
        {badge && (
          <div className={`absolute top-4 left-4 px-3 py-1.5 rounded text-white font-space-mono text-xs font-bold shadow-lg ${
            badge === 'HOT' ? 'bg-[#E0B030]' :
            badge === 'SOLD' ? 'bg-gray-500' :
            badge === 'FOR RENT' ? 'bg-blue-500' :
            'bg-[#10B981]'
          }`}>
            {badge}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg group/fav"
        >
          <span className={`material-icons text-xl transition-all ${
            isFavorite 
              ? 'text-[#E0B030]' 
              : 'text-[#6B7280] group-hover/fav:text-[#E0B030]'
          }`}>
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-space-mono font-bold text-xl text-[#E0B030]">
            ₹
          </span>
          <span className="font-space-mono font-bold text-2xl text-[#E0B030]">
            {price}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-syne text-lg text-[#221410] mb-1">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 mb-4">
          <span className="material-icons text-[#E0B030] text-sm">
            location_on
          </span>
          <span className="font-manrope font-extralight text-sm text-[#6B7280]">
            {location}
          </span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#F2DFA8]">
          <div className="flex items-center gap-1.5">
            <span className="material-icons text-[#6B7280] text-lg">
              bed
            </span>
            <span className="font-manrope font-extralight text-sm text-[#221410]">
              {beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-icons text-[#6B7280] text-lg">
              bathtub
            </span>
            <span className="font-manrope font-extralight text-sm text-[#221410]">
              {baths} Baths
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-icons text-[#6B7280] text-lg">
              square_foot
            </span>
            <span className="font-manrope font-extralight text-sm text-[#221410]">
              {sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#FFFFFF] border border-[#F2DFA8] rounded-full font-manrope font-extralight text-xs text-[#6B7280] uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <button className="w-full mt-2 bg-transparent border border-[#E0B030] text-[#E0B030] font-manrope font-bold py-2 rounded-lg hover:bg-[#E0B030] hover:text-[#221410] transition-all">
          View Details
        </button>
      </div>
    </div>
    </Link>
  );
};

export default PropertyCard;
