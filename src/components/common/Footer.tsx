import React from 'react';
import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from '@/lib/router';
import { idealContact, whatsappLink } from '@/data/idealSpaces';

const Footer: React.FC = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/spaces', label: 'Spaces' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="mb-6 flex items-center gap-3">
              <img src="/logo-new.png" alt="Ideal Spaces" className="h-10 w-auto" />
              <span className="font-fraunces text-2xl font-bold">Ideal Spaces</span>
            </Link>
            <p className="mb-6 font-red-hat text-sm leading-7 text-[#cfc7b8]">
              Premium indoor and outdoor venue spaces for weddings, corporate events,
              exhibitions, concerts, and unforgettable celebrations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 font-manrope text-sm font-bold uppercase tracking-[0.12em] text-[#08170d]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-[#cfc7b8] transition hover:border-[#E0B030] hover:text-[#E0B030]"
                aria-label="Ideal Spaces Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-syne text-lg font-bold text-white">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-block font-manrope text-sm text-[#cfc7b8] transition hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-syne text-lg font-bold text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={idealContact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-red-hat text-sm leading-7 text-[#cfc7b8] hover:text-white"
                >
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#E0B030]" />
                  <span>{idealContact.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={idealContact.phoneHref}
                  className="flex items-center gap-3 font-red-hat text-sm text-[#cfc7b8] hover:text-white"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#E0B030]" />
                  <span>{idealContact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${idealContact.email}`}
                  className="flex items-center gap-3 font-red-hat text-sm text-[#cfc7b8] hover:text-white"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-[#E0B030]" />
                  <span>{idealContact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Link
              to="/contact#inquiry"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#E0B030] px-5 py-3 font-manrope text-sm font-bold text-[#221410] hover:bg-[#B98215] transition-colors"
            >
              Book a Site Visit
            </Link>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center font-manrope text-sm text-[#8e8574] md:text-left">
              Copyright 2026 Ideal Spaces. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="font-manrope text-sm text-[#8e8574] transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="font-manrope text-sm text-[#8e8574] transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
