'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Camera, MessageCircle } from 'lucide-react';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import FloatingLeadButtons from '@/components/ideal/FloatingLeadButtons';
import PageHeader from '@/components/ideal/PageHeader';
import { GalleryCategory, galleryImages, whatsappLink } from '@/data/idealSpaces';
import { useSEO } from '@/hooks/useSEO';

type GalleryFilter = 'All' | GalleryCategory;

const categories: GalleryFilter[] = ['All', 'Weddings', 'Corporate', 'Events'];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>('All');

  useSEO({
    title: 'Ideal Spaces Gallery',
    description:
      'View Ideal Spaces venue gallery for weddings, corporate events, and social celebrations.',
  });

  const visibleImages = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#221410]">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Gallery"
          title="Preview the spaces before your site visit."
          description="Browse wedding, corporate, and event-ready venue visuals, then connect with the team for availability and pricing."
        />

        <section className="bg-[#FFFCF7] py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl border px-5 py-3 font-manrope text-sm font-bold transition ${
                    activeCategory === category
                      ? 'border-[#E0B030] bg-[#E0B030] text-[#221410]'
                      : 'border-[#F2DFA8] bg-white text-[#4B5563] hover:border-[#E0B030] hover:text-[#E0B030]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleImages.map((item) => (
                <figure
                  key={`${item.category}-${item.title}`}
                  className="overflow-hidden rounded-2xl border border-[#F2DFA8] bg-white shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={`${item.title} at Ideal Spaces`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <p className="font-space-mono text-xs uppercase tracking-widest text-[#E0B030]">
                        {item.category}
                      </p>
                      <h2 className="mt-1 font-syne text-lg font-bold text-[#111827]">{item.title}</h2>
                    </div>
                    <Camera className="h-5 w-5 flex-none text-[#E0B030]" />
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-[#E0B030] p-6 text-[#221410] sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <h2 className="font-fraunces text-3xl text-[#221410]">Want to see the venue live?</h2>
                <p className="mt-3 font-manrope font-light leading-7 text-[#221410]/80">
                  A guided walkthrough is the fastest way to understand capacity, parking, and event flow.
                </p>
              </div>
              <a
                href={whatsappLink('Hi Ideal Spaces, I would like to schedule a gallery-to-site visit walkthrough.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#111827] px-6 py-3 font-manrope text-sm font-bold text-white transition hover:bg-[#221410] md:mt-0"
              >
                <MessageCircle className="h-4 w-4" />
                Book Visit
              </a>
            </div>
          </div>
        </section>
      </main>
      <FloatingLeadButtons />
      <Footer />
    </div>
  );
};

export default GalleryPage;
