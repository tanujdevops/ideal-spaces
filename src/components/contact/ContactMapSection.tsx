import React from 'react';
import { idealContact } from '@/data/idealSpaces';

const ContactMapSection: React.FC = () => {
  return (
    <section className="bg-[#FBF7EF] py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="relative aspect-[1280/400] rounded-2xl overflow-hidden border border-[#F2DFA8] bg-gray-100">
          <iframe
            title="Ideal Spaces location"
            src={idealContact.mapEmbedUrl}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <a
              href={idealContact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto bg-white shadow-2xl rounded-xl px-8 py-4 flex items-center gap-3 hover:shadow-3xl transition-shadow group"
            >
              <span className="material-icons text-2xl text-[#E0B030] group-hover:scale-110 transition-transform">
                location_on
              </span>
              <div className="text-left">
                <p className="font-syne font-bold text-base text-[#221410] mb-0.5">
                  Ideal Spaces
                </p>
                <p className="font-manrope font-extralight text-xs text-[#64748B]">
                  Get directions on Google Maps
                </p>
              </div>
              <span className="material-icons text-[#E0B030]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
