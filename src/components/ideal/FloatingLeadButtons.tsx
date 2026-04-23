'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { idealContact, whatsappLink } from '@/data/idealSpaces';

const FloatingLeadButtons: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none fixed bottom-4 left-4 right-4 z-50 hidden md:flex items-end justify-between gap-3 md:left-auto md:right-5 md:flex-col"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
    >
      <motion.a
        href={idealContact.phoneHref}
        className="pointer-events-auto inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-[#111827] px-4 font-manrope text-sm font-bold text-white shadow-xl md:hidden"
        aria-label="Call Ideal Spaces"
        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      >
        <Phone className="h-4 w-4" />
        Call
      </motion.a>
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 font-manrope text-sm font-bold uppercase tracking-[0.12em] text-[#08170d] shadow-xl md:h-14 md:w-14 md:flex-none md:rounded-full md:px-0"
        aria-label="WhatsApp Ideal Spaces"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                boxShadow: [
                  '0 18px 34px -20px rgba(37, 211, 102, 0.65)',
                  '0 22px 44px -18px rgba(37, 211, 102, 0.9)',
                  '0 18px 34px -20px rgba(37, 211, 102, 0.65)',
                ],
              }
        }
        transition={{
          boxShadow: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
          default: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
        }}
        whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="md:sr-only">WhatsApp</span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingLeadButtons;
