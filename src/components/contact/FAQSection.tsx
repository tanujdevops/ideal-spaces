import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What event types can Ideal Spaces host?',
      answer:
        'Ideal Spaces is suited for weddings, receptions, corporate events, exhibitions, trade shows, concerts, live events, and private parties.',
    },
    {
      id: 2,
      question: 'How many guests can the venue handle?',
      answer:
        'The Grand Hall can support up to 2,000 seated guests and up to 3,000 floating guests. The Open Lawn supports up to 2,500 guests depending on layout.',
    },
    {
      id: 3,
      question: 'Is parking available?',
      answer:
        'Yes. The parking area is planned for 250+ cars, helping guest arrivals and exits stay smoother for larger events.',
    },
    {
      id: 4,
      question: 'How do I get pricing or book a site visit?',
      answer:
        'Use the enquiry form, WhatsApp button, or click-to-call option. Share your name, phone, event date, and guest count so the venue team can respond with relevant details.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-3">
            <span className="font-space-mono text-xs text-[#E0B030] uppercase tracking-widest">
              Help Center
            </span>
          </div>
          <h2 className="font-syne font-bold text-4xl text-[#221410] mb-4">
            Common Questions
          </h2>
          <p className="font-manrope text-lg text-[#4B5563] leading-relaxed max-w-[640px] mx-auto">
            Find quick answers about capacity, parking, venue zones, and site-visit enquiries.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-[#FFFCF7] border border-[#F2DFA8] rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-[#FBF7EF] transition-colors"
              >
                <div className="w-8 h-8 bg-[#FFFCF7] border border-[#F2DFA8] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-syne font-bold text-sm text-[#E0B030]">
                    {String(faq.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="flex-1 font-syne font-bold text-lg text-[#221410]">
                  {faq.question}
                </h3>
                <span className={`material-icons text-[#E0B030] transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pl-[72px]">
                  <p className="font-manrope font-extralight text-sm text-[#4B5563] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact#inquiry"
            className="inline-flex items-center gap-2 font-manrope font-bold text-base text-[#E0B030] hover:text-[#B98215] transition-colors group"
          >
            <span>Ask the venue team</span>
            <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
