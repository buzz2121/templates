import { Estate, Destination, JournalEntry } from './types';
export type { Estate, Destination, JournalEntry };

export const ESTATES: Estate[] = [
  {
    id: 'cavalli-tower',
    name: 'Cavalli Tower',
    location: 'Dubai Marina, UAE',
    city: 'Dubai',
    price: 'Starting AED 21,000,000',
    numericPrice: 21000000,
    area: '4,500 - 12,000 sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    type: 'Estate',
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80'
    ],
    features: ['Cavalli Branded Interiors', 'Private Cigar Lounge', 'Jetty Access', 'Wellness Spa'],
    description: 'The world\'s only Cavalli-branded tower, featuring unhindered views of the Palm Jumeirah and the Dubai skyline.'
  },
  {
    id: 'buzz-bay',
    name: 'Buzz Bay By Cavalli',
    location: 'Dubai Harbour, UAE',
    city: 'Dubai',
    price: 'Starting AED 14,500,000',
    numericPrice: 14500000,
    area: '3,200 - 8,500 sq.ft',
    bedrooms: 3,
    bathrooms: 4,
    type: 'Mansion',
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80'
    ],
    features: ['Private Beach', 'Rooftop Infinity Pool', 'Fashion-inspired Design', 'Marina Access'],
    description: 'A three-tower masterpiece in the heart of Dubai Harbour, where luxury meets the sea.'
  },
  {
    id: 'safa-two',
    name: 'Safa Two de GRISOGONO',
    location: 'Sheikh Zayed Road, Dubai',
    city: 'Dubai',
    price: 'Starting AED 8,900,000',
    numericPrice: 8900000,
    area: '1,500 - 4,200 sq.ft',
    bedrooms: 2,
    bathrooms: 3,
    type: 'Penthouse',
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    ],
    features: ['Ruby-inspired Design', 'Fog Forest', 'Edge Walk', 'Glass Bottom Pool'],
    description: 'A ruby-inspired architectural marvel overlooking Safa Park and World Islands.'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'dubai-marina',
    city: 'Dubai Marina',
    country: 'UAE',
    description: 'The heartbeat of New Dubai.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80'
  },
  {
    id: 'palm-jumeirah',
    city: 'Palm Jumeirah',
    country: 'UAE',
    description: 'The eighth wonder of the world.',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80'
  },
  {
    id: 'business-bay',
    city: 'Business Bay',
    country: 'UAE',
    description: 'Contemporary living in the city center.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: '1',
    title: 'The Rise of Branded Residences in Dubai',
    category: 'Lifestyle',
    date: 'Jan 20, 2026',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
    excerpt: 'Why fashion-branded towers are seeing record-breaking demand in the EMEA region.'
  }
];
