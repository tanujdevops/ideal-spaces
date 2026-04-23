import React from 'react';
import { idealContact, whatsappLink } from '@/data/idealSpaces';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: string;
  actionLink: string;
  bgColor: string;
}

const OtherWaysSection: React.FC = () => {
  const methods: ContactMethod[] = [
    {
      icon: 'chat',
      title: 'WhatsApp Us',
      description: 'Chat directly with the venue team for pricing, dates, and site visit support.',
      action: 'Start Chat',
      actionLink: whatsappLink(),
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      icon: 'call',
      title: 'Click to Call',
      description: 'Call the venue team directly from mobile when you need faster answers.',
      action: 'Call Now',
      actionLink: idealContact.phoneHref,
      bgColor: 'bg-[#E3F2FD]'
    },
    {
      icon: 'event',
      title: 'Schedule a Call',
      description: 'Use the enquiry form to request a walkthrough for your event date.',
      action: 'Book Now',
      actionLink: '/contact#inquiry',
      bgColor: 'bg-[#FFF3E0]'
    }
  ];

  return (
    <section className="bg-[#FBF7EF] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-syne font-bold text-4xl text-[#221410] mb-4">
            Other Ways to Connect
          </h2>
          <p className="font-manrope text-lg text-[#4B5563] leading-relaxed max-w-[640px] mx-auto">
            Need faster support? Use WhatsApp, click-to-call, or the enquiry form.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="bg-white border border-[#F2DFA8] rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-icons text-3xl text-[#E0B030]">
                  {method.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-syne font-bold text-xl text-[#221410] mb-3">
                {method.title}
              </h3>

              {/* Description */}
              <p className="font-manrope font-extralight text-sm text-[#4B5563] leading-relaxed mb-6">
                {method.description}
              </p>

              {/* Action Link */}
              <a 
                href={method.actionLink}
                target={method.actionLink.startsWith('http') ? '_blank' : '_self'}
                rel={method.actionLink.startsWith('http') ? 'noopener noreferrer' : ''}
                className="inline-flex items-center gap-2 font-manrope font-bold text-sm text-[#E0B030] hover:text-[#B98215] transition-colors group"
              >
                <span>{method.action}</span>
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherWaysSection;
