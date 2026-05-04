import type { Metadata } from 'next';
import '../styles/index.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://idealspaces.in'),
  title: {
    default: 'Best Wedding Venue in Kolhapur | Ideal Spaces',
    template: '%s | Ideal Spaces',
  },
  description:
    'Ideal Spaces is a premium indoor and outdoor event venue in Kolhapur for weddings, corporate events, exhibitions, concerts, and private celebrations.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Ideal Spaces',
    description: 'Premium wedding, corporate, and social event venue in Kolhapur.',
    images: ['/ideal-spaces/venue-hero.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
