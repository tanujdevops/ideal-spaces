'use client';

import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from '@/lib/router';
import { idealContact, whatsappLink } from '@/data/idealSpaces';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/spaces', label: 'Spaces' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    return path !== '/' && location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#F0D47A] bg-white/95 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img src="/logo-new.png" alt="Ideal Spaces" className="h-9 w-auto" />
          <span className="font-fraunces text-2xl font-bold text-[#111827]">Ideal Spaces</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 font-manrope transition-colors ${
                isActive(link.path)
                  ? 'text-[#E0B030] font-semibold'
                  : 'text-[#374151] hover:text-[#E0B030]'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <motion.span
                  layoutId="navbar-active-link"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-[#E0B030]"
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={idealContact.phoneHref}
            className="font-manrope font-semibold text-[#374151] hover:text-[#E0B030] transition-colors px-4 py-2"
          >
            Call
          </a>
          <Link
            to="/contact#inquiry"
            className="bg-[#E0B030] text-[#221410] font-manrope font-bold px-6 py-2 rounded-lg hover:bg-[#C8911F] transition-all hover:shadow-lg"
          >
            Book Now
          </Link>
        </div>

        <motion.button
          type="button"
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-[#374151] hover:text-[#E0B030] transition-colors"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
        >
          <span className="font-material-icons text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden absolute top-20 left-0 w-full origin-top bg-white border-b border-[#F0D47A] shadow-lg py-4 px-8 flex flex-col gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10, scaleY: 0.98 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scaleY: 0.98 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-manrope text-lg py-2 transition-colors ${
                isActive(link.path)
                  ? 'text-[#E0B030] font-semibold'
                  : 'text-[#374151] hover:text-[#E0B030]'
              }`}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 border-t border-[#F0D47A] pt-4">
            <a
              href={idealContact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#111827] px-4 py-3 font-manrope font-bold text-white transition-colors hover:bg-[#374151]"
              onClick={closeMobileMenu}
              aria-label="Call Ideal Spaces"
            >
              <span className="font-material-icons text-lg">call</span>
              Call
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25d366] px-4 py-3 font-manrope font-bold text-[#08170d] transition-colors hover:bg-[#1ebe5d]"
              onClick={closeMobileMenu}
              aria-label="WhatsApp Ideal Spaces"
            >
              <span className="font-material-icons text-lg">chat</span>
              WhatsApp
            </a>
          </div>
          <Link
            to="/contact#inquiry"
            className="bg-[#E0B030] text-[#221410] font-manrope font-bold px-6 py-3 rounded-lg hover:bg-[#C8911F] transition-all hover:shadow-lg text-center"
            onClick={closeMobileMenu}
          >
            Book Now
          </Link>
        </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
