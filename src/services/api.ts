import { properties, starterListings, type ListingRecord } from '@/data/properties';

type ApiResponse<T> = Promise<{ data: T }>;

const USER_KEY = 'buildestate_user';
const LISTINGS_KEY = 'buildestate_listings';

const wait = <T,>(data: T, ms = 250): ApiResponse<T> =>
  new Promise((resolve) => {
    globalThis.setTimeout(() => resolve({ data }), ms);
  });

const browserStorage = {
  get(key: string) {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(key);
  },
  set(key: string, value: string) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, value);
  },
  remove(key: string) {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
  },
};

function readListings(): ListingRecord[] {
  const saved = browserStorage.get(LISTINGS_KEY);
  if (!saved) return starterListings;

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : starterListings;
  } catch {
    return starterListings;
  }
}

function writeListings(listings: ListingRecord[]) {
  browserStorage.set(LISTINGS_KEY, JSON.stringify(listings));
}

function formValue(formData: FormData, key: string, fallback = '') {
  const value = formData.get(key);
  return typeof value === 'string' ? value : fallback;
}

export const userAPI = {
  register: (data: { fullName: string; email: string; phone: string; password: string }) => {
    const user = {
      _id: `user-${Date.now()}`,
      name: data.fullName || data.email.split('@')[0],
      email: data.email,
    };
    browserStorage.set(USER_KEY, JSON.stringify(user));
    return wait({
      success: true,
      token: `frontend-token-${Date.now()}`,
      user,
      message: 'Account created locally.',
    });
  },

  login: (data: { email: string; password: string; rememberMe?: boolean }) => {
    const saved = browserStorage.get(USER_KEY);
    const user = saved
      ? JSON.parse(saved)
      : {
          _id: 'demo-user',
          name: data.email.split('@')[0] || 'Demo User',
          email: data.email,
        };

    return wait({
      success: true,
      token: `frontend-token-${Date.now()}`,
      user,
      message: 'Signed in locally.',
    });
  },

  forgotPassword: (email: string) =>
    wait({
      success: true,
      email,
      message: 'A demo reset link has been generated locally.',
    }),

  resetPassword: (token: string, password: string) =>
    wait({
      success: Boolean(token && password),
      message: 'Password reset completed locally.',
    }),

  verifyEmail: (token: string) =>
    wait({
      success: Boolean(token),
      message: 'Email verified locally.',
    }),

  getProfile: () =>
    wait({
      success: true,
      user: JSON.parse(browserStorage.get(USER_KEY) || '{"_id":"demo-user","name":"Demo User","email":"demo@buildestate.local"}'),
    }),
};

export const propertiesAPI = {
  getAll: () =>
    wait({
      success: true,
      property: properties,
    }),

  getById: (id: string) => {
    const property = [...properties, ...readListings()].find((item) => item._id === id);
    return wait({
      success: Boolean(property),
      property,
    });
  },
};

export const userListingsAPI = {
  create: (formData: FormData) => {
    let amenities: string[] = [];
    try {
      amenities = JSON.parse(formValue(formData, 'amenities', '[]'));
    } catch {
      amenities = [];
    }

    const listing: ListingRecord = {
      _id: `listing-${Date.now()}`,
      title: formValue(formData, 'title', 'Untitled Property'),
      type: formValue(formData, 'type', 'Flat'),
      availability: formValue(formData, 'availability', 'For Sale'),
      location: formValue(formData, 'location', 'Ahmedabad, Gujarat'),
      price: Number(formValue(formData, 'price', '0')),
      beds: Number(formValue(formData, 'beds', '0')),
      baths: Number(formValue(formData, 'baths', '0')),
      sqft: Number(formValue(formData, 'sqft', '0')),
      description: formValue(formData, 'description', 'Submitted property listing.'),
      phone: formValue(formData, 'phone', '+91 98765 43210'),
      googleMapLink: formValue(formData, 'googleMapLink'),
      amenities,
      image: [properties[0].image[0]],
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const listings = [listing, ...readListings()];
    writeListings(listings);

    return wait({
      success: true,
      property: listing,
      message: 'Listing saved locally for this browser.',
    });
  },

  getMyListings: () =>
    wait({
      success: true,
      properties: readListings(),
    }),

  update: (id: string, formData: FormData) => {
    const listings = readListings().map((listing) =>
      listing._id === id
        ? {
            ...listing,
            title: formValue(formData, 'title', listing.title),
            location: formValue(formData, 'location', listing.location),
            price: Number(formValue(formData, 'price', String(listing.price))),
          }
        : listing
    );
    writeListings(listings);
    return wait({ success: true });
  },

  delete: (id: string) => {
    writeListings(readListings().filter((listing) => listing._id !== id));
    return wait({ success: true });
  },
};

export const appointmentsAPI = {
  schedule: (data: {
    propertyId: string;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    message?: string;
  }) =>
    wait({
      success: true,
      appointment: {
        _id: `appointment-${Date.now()}`,
        ...data,
        status: 'requested',
      },
    }),

  getByUser: () => wait({ success: true, appointments: [] }),

  cancel: (id: string, reason?: string) =>
    wait({
      success: true,
      id,
      reason,
    }),
};

export const contactAPI = {
  submit: (data: { name: string; email: string; phone: string; message: string }) =>
    wait({
      success: true,
      message: 'Message captured locally.',
      submission: {
        _id: `contact-${Date.now()}`,
        ...data,
        createdAt: new Date().toISOString(),
      },
    }),
};

const aiProperties = [
  {
    building_name: 'The Glass Pavilion',
    builder_name: 'BuildEstate Signature',
    property_type: 'Villa',
    bhk_config: '6BHK',
    location_address: 'Satellite, Ahmedabad, Gujarat',
    price: 'Rs. 12.5 Cr',
    price_per_sqft: 'Rs. 15,244',
    description: properties[0].description,
    amenities: properties[0].amenities,
    area_sqft: '8200',
    floor_number: 'Ground',
    total_floors: '2',
    possession_status: 'Ready to Move',
    rera_number: 'PR/GJ/AHMEDABAD/2026/001',
    parking: '4 covered',
    property_url: '/property/prop-001',
    source: '99acres',
    facing_direction: 'East',
    nearby_landmarks: ['SG Highway', 'Iscon Cross Road', 'Premium schools', 'Retail corridor'],
  },
  {
    building_name: 'Skyline Penthouse',
    builder_name: 'Urban Crest',
    property_type: 'Penthouse',
    bhk_config: '4BHK',
    location_address: 'Bodakdev, Ahmedabad, Gujarat',
    price: 'Rs. 8.95 Cr',
    price_per_sqft: 'Rs. 17,549',
    description: properties[1].description,
    amenities: properties[1].amenities,
    area_sqft: '5100',
    floor_number: '22',
    total_floors: '22',
    possession_status: 'Ready to Move',
    rera_number: 'PR/GJ/AHMEDABAD/2026/002',
    parking: '3 covered',
    property_url: '/property/prop-002',
    source: 'magicbricks',
    facing_direction: 'West',
    nearby_landmarks: ['Sindhu Bhavan Road', 'Business district', 'Fine dining', 'Clubs'],
  },
  {
    building_name: 'AI Hub Smart Villa',
    builder_name: 'Future Habitat',
    property_type: 'Villa',
    bhk_config: '4BHK',
    location_address: 'Gift City, Gandhinagar, Gujarat',
    price: 'Rs. 6.15 Cr',
    price_per_sqft: 'Rs. 15,769',
    description: properties[5].description,
    amenities: properties[5].amenities,
    area_sqft: '3900',
    floor_number: 'Ground',
    total_floors: '2',
    possession_status: 'Under Construction',
    rera_number: 'PR/GJ/GANDHINAGAR/2026/006',
    parking: '2 covered',
    property_url: '/property/prop-006',
    source: 'housing',
    facing_direction: 'North',
    nearby_landmarks: ['Gift City', 'Metro access', 'Fintech district', 'Riverfront'],
  },
];

export const aiAPI = {
  search: (data: {
    city?: string;
    locality?: string;
    bhk?: string;
    possession?: string;
    price?: { min: number; max: number };
    type?: string;
    category?: string;
  }) => {
    const city = data.city || 'Ahmedabad';
    return wait(
      {
        properties: aiProperties.map((property) => ({
          ...property,
          location_address: property.location_address.replace('Ahmedabad', city),
        })),
        analysis: {
          overview: [
            {
              name: 'The Glass Pavilion',
              price: 'Rs. 12.5 Cr',
              area: '8200 sqft',
              location: city,
              highlight: 'Best lifestyle fit',
              match_score: 94,
              one_line_insight: 'Highest lifestyle score with strong resale depth in the premium segment.',
              red_flags: [{ flag: 'Higher upkeep cost because of large glass frontage', severity: 'low' as const }],
              value_verdict: 'fair' as const,
            },
            {
              name: 'Skyline Penthouse',
              price: 'Rs. 8.95 Cr',
              area: '5100 sqft',
              location: city,
              highlight: 'Best city-center option',
              match_score: 89,
              one_line_insight: 'Premium address and limited top-floor inventory support long-term value.',
              red_flags: [],
              value_verdict: 'good_deal' as const,
            },
            {
              name: 'AI Hub Smart Villa',
              price: 'Rs. 6.15 Cr',
              area: '3900 sqft',
              location: city,
              highlight: 'Best appreciation potential',
              match_score: 91,
              one_line_insight: 'Gift City proximity gives this listing the strongest growth narrative.',
              red_flags: [{ flag: 'Construction timeline should be verified before booking', severity: 'medium' as const }],
              value_verdict: 'good_deal' as const,
            },
          ],
          best_value: {
            name: 'AI Hub Smart Villa',
            reason: 'It balances price, connectivity, and future demand near Gift City better than the other matches.',
          },
          recommendations: [
            `Shortlist properties near employment corridors in ${city} first.`,
            'Compare maintenance charges before deciding between villa and penthouse options.',
            'Prioritize ready-to-move listings if rental income timing matters.',
          ],
        },
      },
      700
    );
  },

  locationTrends: (city: string) =>
    wait(
      {
        locations: [
          { location: `Prime ${city}`, price_per_sqft: '16500', percent_increase: '11.4', rental_yield: '3.2' },
          { location: `West ${city}`, price_per_sqft: '13200', percent_increase: '8.1', rental_yield: '3.8' },
          { location: `North ${city}`, price_per_sqft: '10800', percent_increase: '12.7', rental_yield: '4.1' },
        ],
        analysis: {
          trends: [
            {
              location: `Prime ${city}`,
              price_per_sqft: '16500',
              yearly_change_pct: '11.4',
              rental_yield_pct: '3.2',
              outlook: 'Positive',
            },
            {
              location: `West ${city}`,
              price_per_sqft: '13200',
              yearly_change_pct: '8.1',
              rental_yield_pct: '3.8',
              outlook: 'Stable',
            },
            {
              location: `North ${city}`,
              price_per_sqft: '10800',
              yearly_change_pct: '12.7',
              rental_yield_pct: '4.1',
              outlook: 'Bullish',
            },
          ],
          top_appreciation: {
            location: `North ${city}`,
            reason: 'Infrastructure expansion and lower entry prices create the strongest upside.',
          },
          best_rental_yield: {
            location: `North ${city}`,
            reason: 'Tenant demand is improving while ticket sizes remain more accessible.',
          },
          investment_tips: [
            'Favor projects with strong road access and reliable possession timelines.',
            'Use rental yield as a tie-breaker when appreciation potential is similar.',
            'Keep a reserve for maintenance and registration costs before finalizing the budget.',
          ],
        },
      },
      500
    ),

  validateKeys: () => wait({ success: true }),
};

export default {};
