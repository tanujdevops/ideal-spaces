import glassPavilion from '@/images/The Glass Pavilion.jpg';
import heritageSection from '@/images/Heritage section.jpg';
import mainAboutImage from '@/images/Main about image.jpg';
import mapLocation from '@/images/Map_Location.jpg';
import skylinePenthouse from '@/images/Skyline Penthouse.jpg';
import { imageSrc } from '@/utils/imageSrc';

export const idealContact = {
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'events@idealspaces.in',
  address: 'Ideal Spaces, Kolhapur, Maharashtra, India',
  googleMapsLink: 'https://maps.google.com/?q=Ideal+Spaces+Kolhapur+Maharashtra',
  mapEmbedUrl: 'https://www.google.com/maps?q=Ideal%20Spaces%20Kolhapur%20Maharashtra&output=embed',
};

export const idealAssets = {
  hero: '/ideal-spaces/venue-hero.png',
  grandHall: '/ideal-spaces/grand-hall.png',
  openLawn: '/ideal-spaces/open-lawn.png',
  corporate: '/ideal-spaces/corporate-events.png',
  about: imageSrc(mainAboutImage),
  heritage: imageSrc(heritageSection),
  glassPavilion: imageSrc(glassPavilion),
  skyline: imageSrc(skylinePenthouse),
  map: imageSrc(mapLocation),
};

export const homeContent = {
  hero: {
    headline: 'Where Grand Celebrations Come to Life',
    subtext:
      'A premium venue offering expansive indoor and outdoor spaces for weddings, corporate events, and unforgettable experiences.',
    ctaPrimary: 'Book a Site Visit',
    ctaSecondary: 'Get Pricing',
  },
  highlights: [
    'Up to 3,000 Guest Capacity',
    'Multiple Event Zones',
    '250+ Car Parking',
    'Indoor + Outdoor Venue',
  ],
};

export const spaces = [
  {
    name: 'Grand Hall',
    area: '3023 m2',
    capacity: [
      { label: 'Seated', value: '2,000' },
      { label: 'Floating', value: '3,000' },
    ],
    image: idealAssets.grandHall,
    description:
      'Designed for large-scale weddings and corporate events with a premium indoor setting.',
  },
  {
    name: 'Open Lawn',
    area: '3636 m2',
    capacity: [
      { label: 'Comfortable', value: '1,800' },
      { label: 'Max', value: '2,500' },
    ],
    image: idealAssets.openLawn,
    description:
      'Expansive outdoor lawn ideal for weddings, receptions, and evening events.',
  },
  {
    name: 'Artificial Turf',
    area: '631 m2',
    capacity: [{ label: 'Capacity', value: 'Up to 300 people' }],
    image: idealAssets.glassPavilion,
    description:
      'Flexible space for sports or event extensions like kids zones and activities.',
  },
  {
    name: 'Parking Area',
    area: '6911 m2',
    capacity: [{ label: 'Capacity', value: '250 cars' }],
    image: idealAssets.skyline,
    description:
      'Large and efficient parking space ensuring smooth guest experience.',
  },
];

export const events = [
  {
    name: 'Weddings & Receptions',
    description:
      'Elegant indoor and outdoor settings for ceremonies, receptions, sangeet nights, and family celebrations.',
    image: idealAssets.openLawn,
  },
  {
    name: 'Corporate Events',
    description:
      'Large-capacity hall layouts, parking, and controlled guest movement for launches, annual meets, and conferences.',
    image: idealAssets.corporate,
  },
  {
    name: 'Exhibitions & Trade Shows',
    description:
      'Flexible zones for stalls, brand displays, product demos, and high-footfall visitor circulation.',
    image: idealAssets.grandHall,
  },
  {
    name: 'Concerts & Live Events',
    description:
      'Open-scale venue planning for staged performances, audience flow, production support, and guest comfort.',
    image: idealAssets.hero,
  },
  {
    name: 'Private Parties',
    description:
      'Polished spaces for milestone celebrations, birthdays, anniversaries, and premium social gatherings.',
    image: idealAssets.heritage,
  },
];

export type GalleryCategory = 'Weddings' | 'Corporate' | 'Events';

export const galleryImages: Array<{
  title: string;
  category: GalleryCategory;
  image: string;
}> = [
  {
    title: 'Outdoor Wedding Lawn',
    category: 'Weddings',
    image: idealAssets.openLawn,
  },
  {
    title: 'Grand Hall Reception',
    category: 'Weddings',
    image: idealAssets.grandHall,
  },
  {
    title: 'Premium Corporate Stage',
    category: 'Corporate',
    image: idealAssets.corporate,
  },
  {
    title: 'Indoor Gala Layout',
    category: 'Corporate',
    image: idealAssets.glassPavilion,
  },
  {
    title: 'Evening Event Setup',
    category: 'Events',
    image: idealAssets.hero,
  },
  {
    title: 'Social Celebration Detail',
    category: 'Events',
    image: idealAssets.heritage,
  },
];

export const whatsappLink = (
  message = 'Hi Ideal Spaces, I would like to book a site visit.'
) => `https://wa.me/${idealContact.whatsapp}?text=${encodeURIComponent(message)}`;
