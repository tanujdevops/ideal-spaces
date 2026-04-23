import React from 'react';
import { idealContact, whatsappLink } from '@/data/idealSpaces';

const ContactInfoCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Visit Our Office Card */}
      <div className="bg-white border border-[#F2DFA8] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(224,176,48,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#E0B030]">
              location_on
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#221410] mb-2">
              Visit the Venue
            </h3>
            <p className="font-manrope font-extralight text-sm text-[#4B5563] leading-relaxed mb-3">
              {idealContact.address}
            </p>
            <a 
              href={idealContact.googleMapsLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-manrope font-medium text-sm text-[#E0B030] hover:text-[#B98215] transition-colors"
            >
              <span>Get Directions</span>
              <span className="material-icons text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Call or Email Us Card */}
      <div className="bg-white border border-[#F2DFA8] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(224,176,48,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#E0B030]">
              phone
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#221410] mb-3">
              Call or Email Us
            </h3>
            <div className="space-y-2">
              <a 
                href={idealContact.phoneHref}
                className="flex items-center gap-2 font-manrope font-extralight text-sm text-[#4B5563] hover:text-[#E0B030] transition-colors"
              >
                <span className="material-icons text-base">
                  call
                </span>
                <span>{idealContact.phone}</span>
              </a>
              <a 
                href={`mailto:${idealContact.email}`}
                className="flex items-center gap-2 font-manrope font-extralight text-sm text-[#4B5563] hover:text-[#E0B030] transition-colors"
              >
                <span className="material-icons text-base">
                  email
                </span>
                <span>{idealContact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Card */}
      <div className="bg-white border border-[#F2DFA8] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(224,176,48,0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#E0B030]">
              schedule
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#221410] mb-3">
              WhatsApp Support
            </h3>
            <div className="space-y-2 font-manrope font-extralight text-sm text-[#4B5563]">
              <div className="flex justify-between items-center">
                <span>Availability:</span>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-medium text-[#221410] hover:text-[#E0B030]">Start Chat</a>
              </div>
              <div className="flex justify-between items-center">
                <span>Best for:</span>
                <span className="font-medium text-[#221410]">Pricing & Dates</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Response:</span>
                <span className="font-medium text-[#221410]">Mobile-first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
