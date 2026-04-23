'use client';

import React from 'react';
import { Toaster } from 'sonner';
import AutoAnimations from '@/components/common/AutoAnimations';
import ScrollToTop from '@/components/common/ScrollToTop';
import StructuredData from '@/components/common/StructuredData';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AutoAnimations />
      <ScrollToTop />
      <StructuredData type="website" />
      <StructuredData type="organization" />
      <StructuredData type="eventVenue" />
      {children}
      <Toaster position="top-center" richColors />
    </>
  );
}
