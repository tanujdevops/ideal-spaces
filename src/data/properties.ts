import glassPavilion from '@/images/The Glass Pavilion.jpg';
import skylinePenthouse from '@/images/Skyline Penthouse.jpg';
import desertOasis from '@/images/Desert Oasis.jpg';
import coastalRetreat from '@/images/Coastal Retreat.jpg';
import heroImage from '@/images/Hero Section.jpg';
import aiHubHero from '@/images/AI Hub hero.jpg';
import { imageSrc } from '@/utils/imageSrc';

export interface PropertyRecord {
  _id: string;
  title: string;
  location: string;
  price: number;
  image: string[];
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  availability: string;
  description: string;
  amenities: string[];
  phone: string;
  googleMapLink?: string;
  createdAt?: string;
}

export interface ListingRecord extends PropertyRecord {
  status: 'pending' | 'active' | 'rejected' | 'expired';
  rejectionReason?: string;
  expiresAt?: string;
  createdAt: string;
}

export const properties: PropertyRecord[] = [
  {
    _id: 'prop-001',
    title: 'The Glass Pavilion',
    location: 'Satellite, Ahmedabad, Gujarat',
    price: 125000000,
    image: [imageSrc(glassPavilion)],
    beds: 6,
    baths: 6,
    sqft: 8200,
    type: 'Villa',
    availability: 'For Sale',
    phone: '+91 98765 43210',
    googleMapLink: 'https://maps.google.com/?q=Satellite+Ahmedabad',
    amenities: ['Parking', 'Swimming Pool', 'Gym', 'Security', 'Garden', 'Club House', 'CCTV'],
    description:
      'A light-filled luxury villa with glass walls, landscaped courtyards, private pool, and generous entertainment spaces close to SG Highway.',
    createdAt: '2026-04-01T10:00:00.000Z',
  },
  {
    _id: 'prop-002',
    title: 'Skyline Penthouse',
    location: 'Bodakdev, Ahmedabad, Gujarat',
    price: 89500000,
    image: [imageSrc(skylinePenthouse)],
    beds: 4,
    baths: 5,
    sqft: 5100,
    type: 'Penthouse',
    availability: 'For Sale',
    phone: '+91 98765 43211',
    googleMapLink: 'https://maps.google.com/?q=Bodakdev+Ahmedabad',
    amenities: ['Parking', 'Lift', 'Security', 'Power Backup', 'Intercom', 'Gated Community'],
    description:
      'A private top-floor residence with panoramic city views, double-height living spaces, smart-home readiness, and two reserved parking bays.',
    createdAt: '2026-03-22T10:00:00.000Z',
  },
  {
    _id: 'prop-003',
    title: 'Desert Oasis Residence',
    location: 'Thaltej, Ahmedabad, Gujarat',
    price: 42000000,
    image: [imageSrc(desertOasis)],
    beds: 3,
    baths: 3,
    sqft: 2750,
    type: 'House',
    availability: 'For Sale',
    phone: '+91 98765 43212',
    googleMapLink: 'https://maps.google.com/?q=Thaltej+Ahmedabad',
    amenities: ['Parking', 'Garden', 'Security', 'Rainwater Harvesting', 'CCTV'],
    description:
      'A warm contemporary home with textured finishes, a shaded patio, flexible family room, and easy access to schools and retail corridors.',
    createdAt: '2026-02-14T10:00:00.000Z',
  },
  {
    _id: 'prop-004',
    title: 'Coastal Retreat Apartment',
    location: 'Vesu, Surat, Gujarat',
    price: 32000000,
    image: [imageSrc(coastalRetreat)],
    beds: 3,
    baths: 3,
    sqft: 2400,
    type: 'Flat',
    availability: 'For Sale',
    phone: '+91 98765 43213',
    googleMapLink: 'https://maps.google.com/?q=Vesu+Surat',
    amenities: ['Lift', 'Parking', 'Gym', 'Swimming Pool', 'Children Play Area', 'Club House'],
    description:
      'A breezy premium apartment with a full-width balcony, clubhouse access, and refined interiors designed for low-maintenance city living.',
    createdAt: '2026-01-30T10:00:00.000Z',
  },
  {
    _id: 'prop-005',
    title: 'Urban Garden Studio',
    location: 'Race Course, Vadodara, Gujarat',
    price: 8500000,
    image: [imageSrc(heroImage)],
    beds: 1,
    baths: 1,
    sqft: 780,
    type: 'Studio',
    availability: 'For Rent',
    phone: '+91 98765 43214',
    googleMapLink: 'https://maps.google.com/?q=Race+Course+Vadodara',
    amenities: ['Lift', 'Security', 'Power Backup', 'Intercom'],
    description:
      'A compact furnished studio near the business district with excellent natural light, efficient storage, and quick access to cafes and transit.',
    createdAt: '2026-04-10T10:00:00.000Z',
  },
  {
    _id: 'prop-006',
    title: 'AI Hub Smart Villa',
    location: 'Gift City, Gandhinagar, Gujarat',
    price: 61500000,
    image: [imageSrc(aiHubHero)],
    beds: 4,
    baths: 4,
    sqft: 3900,
    type: 'Villa',
    availability: 'For Sale',
    phone: '+91 98765 43215',
    googleMapLink: 'https://maps.google.com/?q=Gift+City+Gandhinagar',
    amenities: ['Parking', 'Gym', 'Security', 'Garden', 'CCTV', 'Gated Community', 'Jogging Track'],
    description:
      'A tech-enabled villa near Gift City with energy-efficient systems, a private deck, generous bedrooms, and strong long-term rental potential.',
    createdAt: '2026-04-18T10:00:00.000Z',
  },
];

export const starterListings: ListingRecord[] = [
  {
    ...properties[1],
    status: 'active',
    createdAt: '2026-03-26T10:00:00.000Z',
    expiresAt: '2026-05-26T10:00:00.000Z',
  },
  {
    ...properties[4],
    _id: 'listing-002',
    status: 'pending',
    createdAt: '2026-04-20T10:00:00.000Z',
  },
];

