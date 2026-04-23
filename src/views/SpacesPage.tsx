'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Ruler, Users } from 'lucide-react';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import FloatingLeadButtons from '@/components/ideal/FloatingLeadButtons';
import InquiryForm from '@/components/ideal/InquiryForm';
import PageHeader from '@/components/ideal/PageHeader';
import { spaces, whatsappLink } from '@/data/idealSpaces';
import { useSEO } from '@/hooks/useSEO';

const SpacesPage: React.FC = () => {
  useSEO({
    title: 'Event Spaces in Kolhapur',
    description:
      'Explore Ideal Spaces Grand Hall, Open Lawn, Artificial Turf, and large parking area for weddings, corporate events, and social celebrations.',
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#221410]">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Spaces"
          title="Indoor and outdoor zones designed for scale."
          description="Choose from a grand indoor hall, expansive lawn, flexible turf, and efficient parking planned for high-volume guest movement."
        />

        <section className="bg-[#FFFCF7] py-24">
          <div className="max-w-[1280px] mx-auto px-8 grid gap-8">
            {spaces.map((space, index) => (
              <article
                key={space.name}
                className={`grid overflow-hidden rounded-2xl border border-[#F2DFA8] bg-white shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)] lg:grid-cols-2 ${
                  index % 2 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative min-h-[280px] sm:min-h-[360px]">
                  <Image
                    src={space.image}
                    alt={`${space.name} at Ideal Spaces`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="mb-3 font-space-mono text-xs uppercase tracking-widest text-[#E0B030]">
                    {space.area}
                  </p>
                  <h2 className="font-fraunces text-4xl leading-tight text-[#111827]">
                    {space.name}
                  </h2>
                  <p className="mt-4 font-manrope font-light text-lg leading-8 text-[#4b5563]">
                    {space.description}
                  </p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {space.capacity.map((item) => (
                      <div key={item.label} className="rounded-xl bg-[#FBF7EF] p-4">
                        <p className="font-manrope text-xs font-bold uppercase tracking-wider text-[#E0B030]">
                          {item.label}
                        </p>
                        <p className="mt-1 font-space-mono text-xl font-bold text-[#221410]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappLink(`Hi Ideal Spaces, I want pricing and availability for ${space.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E0B030] px-5 py-3 font-manrope text-sm font-bold text-[#221410] transition hover:bg-[#B98215]"
                    >
                      Check Availability
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/contact#inquiry"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#d1d5db] px-5 py-3 font-manrope text-sm font-bold text-[#374151] transition hover:border-[#E0B030] hover:text-[#E0B030]"
                    >
                      Site Visit
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F7F0DF] py-20">
          <div className="max-w-[1280px] mx-auto px-8 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Ruler,
                title: 'Large Footprint',
                text: 'Separate zones support movement, staging, dining, parking, and overflow planning.',
              },
              {
                icon: Users,
                title: 'Guest Comfort',
                text: 'Layouts are planned around capacity, entry flow, and practical guest experience.',
              },
              {
                icon: CheckCircle2,
                title: 'Event Ready',
                text: 'Suitable for weddings, receptions, trade shows, concerts, and private functions.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#F2DFA8] bg-white p-8">
                <item.icon className="mb-5 h-8 w-8 text-[#E0B030]" />
                <h3 className="font-syne text-xl font-bold text-[#111827]">{item.title}</h3>
                <p className="mt-3 font-manrope leading-7 text-[#4b5563]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FFFFFF] py-24">
          <div className="max-w-[980px] mx-auto px-8">
            <InquiryForm source="Spaces page" />
          </div>
        </section>
      </main>
      <FloatingLeadButtons />
      <Footer />
    </div>
  );
};

export default SpacesPage;
