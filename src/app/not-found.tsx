'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#fbf7ef] px-6 text-center">
      <h1 className="mb-4 font-fraunces text-6xl font-bold text-[#b88a2b]">404</h1>
      <p className="mb-8 font-manrope text-xl text-[#3a3225]">Page not found</p>
      <Link
        href="/"
        className="rounded-md bg-[#11100d] px-8 py-3 font-manrope font-bold text-white transition hover:bg-[#2b251c]"
      >
        Go to Ideal Spaces
      </Link>
    </main>
  );
}
