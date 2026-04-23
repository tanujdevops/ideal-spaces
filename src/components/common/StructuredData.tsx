import React from 'react';
import { useLocation } from '@/lib/router';
import { idealContact } from '@/data/idealSpaces';

const SITE_URL = 'https://idealspaces.in';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'eventVenue';
  data?: {
    title?: string;
    description?: string;
    location?: string;
    region?: string;
    image?: string;
  };
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const location = useLocation();
  const currentUrl = `${SITE_URL}${location.pathname}`;

  const schemas: Record<string, object> = {
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Ideal Spaces',
      url: SITE_URL,
      description:
        'Premium indoor and outdoor event venue for weddings, corporate events, exhibitions, concerts, and social celebrations in Kolhapur.',
      potentialAction: {
        '@type': 'CommunicateAction',
        target: `${SITE_URL}/contact`,
      },
    },
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Ideal Spaces',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-new.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: idealContact.phone,
        email: idealContact.email,
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
    },
    eventVenue: {
      '@context': 'https://schema.org',
      '@type': 'EventVenue',
      name: data?.title || 'Ideal Spaces',
      description:
        data?.description ||
        'Premium event venue with a grand hall, open lawn, turf, and parking for weddings and corporate events.',
      url: currentUrl,
      image: data?.image || `${SITE_URL}/ideal-spaces/venue-hero.png`,
      telephone: idealContact.phone,
      email: idealContact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: idealContact.address,
        addressLocality: data?.location || 'Kolhapur',
        addressRegion: data?.region || 'Maharashtra',
        addressCountry: 'IN',
      },
      maximumAttendeeCapacity: 3000,
    },
  };

  const schemaData = schemas[type] || schemas.website;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
