'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import FloatingLeadButtons from '@/components/ideal/FloatingLeadButtons';
import InquiryForm from '@/components/ideal/InquiryForm';
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ContactMapSection from '@/components/contact/ContactMapSection';
import OtherWaysSection from '@/components/contact/OtherWaysSection';
import FAQSection from '@/components/contact/FAQSection';
import { useSEO } from '@/hooks/useSEO';

const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact Ideal Spaces',
    description:
      'Contact Ideal Spaces to book a site visit, call the venue team, get directions, or send a WhatsApp enquiry for weddings and events.',
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <ContactHeroSection />
      <section className="bg-[#FFFCF7] py-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <ContactInfoCards />
            <InquiryForm
              title="Send Event Details"
              subtitle="Share the essentials and the venue team will respond with availability, pricing direction, and site-visit support."
              source="Contact page"
            />
          </div>
        </div>
      </section>
      <ContactMapSection />
      <OtherWaysSection />
      <FAQSection />
      <FloatingLeadButtons />
      <Footer />
    </div>
  );
};

export default ContactPage;
