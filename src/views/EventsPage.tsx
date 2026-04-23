'use client';

import React from 'react';
import Image from 'next/image';
import { BriefcaseBusiness, CheckCircle2, Heart, Music, PartyPopper, Store } from 'lucide-react';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import FloatingLeadButtons from '@/components/ideal/FloatingLeadButtons';
import InquiryForm from '@/components/ideal/InquiryForm';
import PageHeader from '@/components/ideal/PageHeader';
import { events, whatsappLink } from '@/data/idealSpaces';
import { useSEO } from '@/hooks/useSEO';

const eventIcons = [Heart, BriefcaseBusiness, Store, Music, PartyPopper];

const EventsPage: React.FC = () => {
  useSEO({
    title: 'Wedding, Corporate & Social Event Venue',
    description:
      'Ideal Spaces hosts weddings, corporate events, exhibitions, concerts, live events, and private parties in Kolhapur.',
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#221410]">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Events"
          title="A venue built for celebrations, launches, shows, and gatherings."
          description="From wedding receptions to corporate annual meets, Ideal Spaces gives planners a premium, high-capacity canvas."
        />

        <section className="bg-[#FFFCF7] py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <p className="mb-3 font-space-mono text-xs uppercase tracking-widest text-[#E0B030]">
                  Event Types
                </p>
                <h2 className="font-fraunces text-5xl leading-tight text-[#111827]">
                  One address, multiple event formats.
                </h2>
              </div>
              <p className="font-manrope font-light text-lg leading-8 text-[#4b5563]">
                The space plan supports indoor production, open-air ambience, dining zones, and
                parking flow, making it practical for families and professional planners.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => {
                const Icon = eventIcons[index] || CheckCircle2;
                return (
                  <article
                    key={event.name}
                    className="overflow-hidden rounded-2xl border border-[#F2DFA8] bg-white shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]"
                  >
                    <div className="relative h-56">
                      <Image
                        src={event.image}
                        alt={`${event.name} at Ideal Spaces`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Icon className="mb-4 h-7 w-7 text-[#E0B030]" />
                      <h3 className="font-syne text-xl font-bold text-[#111827]">{event.name}</h3>
                      <p className="mt-3 font-manrope leading-7 text-[#4b5563]">{event.description}</p>
                      <a
                        href={whatsappLink(`Hi Ideal Spaces, I want to plan ${event.name}. Please share details.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-manrope text-sm font-bold text-[#E0B030] hover:text-[#B98215]"
                      >
                        Get pricing
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-[1280px] mx-auto px-8 grid gap-6 md:grid-cols-3">
            {[
              'Share event date, guest count, and preferred spaces.',
              'Schedule a guided site visit with the venue team.',
              'Receive layout guidance, availability, and pricing direction.',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-[#F2DFA8] bg-[#FFFCF7] p-6">
                <span className="font-space-mono text-3xl font-bold text-[#E0B030]">
                  0{index + 1}
                </span>
                <p className="mt-4 font-manrope text-lg leading-8 text-[#4b5563]">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FFFFFF] py-24">
          <div className="max-w-[980px] mx-auto px-8">
            <InquiryForm source="Events page" />
          </div>
        </section>
      </main>
      <FloatingLeadButtons />
      <Footer />
    </div>
  );
};

export default EventsPage;
