'use client';

import React, { useMemo, useState } from 'react';
import { CalendarDays, MessageCircle, Phone, Users } from 'lucide-react';
import { toast } from 'sonner';
import { idealContact, whatsappLink } from '@/data/idealSpaces';

interface InquiryFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  source?: string;
}

const initialForm = {
  name: '',
  phone: '',
  eventDate: '',
  guestCount: '',
};

const inputClass =
  'w-full rounded-lg border border-[#F2DFA8] bg-[#FBF7EF] px-4 py-3 text-[#221410] outline-none transition focus:border-[#E0B030]';

const InquiryForm: React.FC<InquiryFormProps> = ({
  title = 'Plan Your Celebration',
  subtitle = 'Share the essentials and our venue team will help with availability, pricing, and a site visit.',
  compact = false,
  source = 'Website inquiry',
}) => {
  const [form, setForm] = useState(initialForm);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const updateField =
    (field: keyof typeof initialForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const message = [
      'Hi Ideal Spaces, I want to inquire about an event booking.',
      `Source: ${source}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Event Date: ${form.eventDate}`,
      `Guest Count: ${form.guestCount}`,
    ].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    toast.success('Inquiry opened in WhatsApp');
    setForm(initialForm);
  };

  return (
    <section
      id="inquiry"
      className={`rounded-2xl border border-[#F2DFA8] bg-white shadow-sm ${
        compact ? 'p-5' : 'p-6 sm:p-8'
      }`}
    >
      <div className={compact ? 'mb-5' : 'mb-7'}>
        <p className="mb-2 font-space-mono text-xs uppercase tracking-widest text-[#E0B030]">
          Inquiry
        </p>
        <h2 className="font-syne font-bold text-2xl leading-tight text-[#221410] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl font-manrope font-extralight text-sm leading-7 text-[#4B5563]">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider">Name</span>
          <input
            className={inputClass}
            type="text"
            value={form.name}
            onChange={updateField('name')}
            placeholder="Your full name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider">Phone</span>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E0B030]" />
            <input
              className={`${inputClass} pl-11`}
              type="tel"
              value={form.phone}
              onChange={updateField('phone')}
              placeholder="+91"
              required
            />
          </div>
        </label>
        <label className="block">
          <span className="mb-2 block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider">Event Date</span>
          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E0B030]" />
            <input
              className={`${inputClass} pl-11`}
              type="date"
              min={today}
              value={form.eventDate}
              onChange={updateField('eventDate')}
              required
            />
          </div>
        </label>
        <label className="block">
          <span className="mb-2 block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider">Guest Count</span>
          <div className="relative">
            <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E0B030]" />
            <input
              className={`${inputClass} pl-11`}
              type="number"
              min="1"
              value={form.guestCount}
              onChange={updateField('guestCount')}
              placeholder="Approx. guests"
              required
            />
          </div>
        </label>

        <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row">
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E0B030] px-6 py-3 font-manrope text-sm font-bold text-[#221410] transition hover:bg-[#B98215] shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </button>
          <a
            href={idealContact.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#d1d5db] px-6 py-3 font-manrope text-sm font-bold text-[#374151] transition hover:border-[#E0B030] hover:text-[#E0B030]"
          >
            <Phone className="h-4 w-4" />
            Call Venue Team
          </a>
        </div>
      </form>
    </section>
  );
};

export default InquiryForm;
