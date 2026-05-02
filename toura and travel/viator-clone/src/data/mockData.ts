import { Star, Clock, Zap, MapPin } from 'lucide-react';

export interface Tour {
  id: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  location: string;
  tags: string[];
  badge?: string;
  isLikelyToSellOut?: boolean;
}

export const MOCK_TOURS: Tour[] = [
  {
    id: '1',
    title: 'Skip-the-Line: Vatican Museums & Sistine Chapel Guided Tour',
    image: 'https://images.unsplash.com/photo-1594959584482-db14d83c3bb2?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviews: 12450,
    price: 85,
    duration: '3 hours',
    location: 'Rome, Italy',
    tags: ['Art & Culture', 'Tickets & Passes', 'Walking Tours', 'Rome'],
    badge: 'Likely to Sell Out',
    isLikelyToSellOut: true
  },
  {
    id: '2',
    title: 'Stonehenge, Windsor Castle, and Bath from London',
    image: 'https://images.unsplash.com/photo-1517713982677-4b66332f98de?auto=format&fit=crop&q=80&w=1200',
    rating: 4.5,
    reviews: 8900,
    price: 120,
    duration: '11 hours',
    location: 'London, UK',
    tags: ['Day Trips', 'Historical Tours', 'London', 'History'],
  },
  {
    id: '3',
    title: 'Grand Canyon West Rim Bus Tour with Optional Helicopter & Boat',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&q=80&w=1200',
    rating: 4.6,
    reviews: 5600,
    price: 155,
    duration: '10 hours',
    location: 'Las Vegas, USA',
    tags: ['Outdoor Activities', 'Day Trips', 'Adventure', 'Grand Canyon'],
    badge: 'Best Seller'
  },
  {
    id: '4',
    title: 'Paris Seine River Dinner Cruise with Live Music',
    image: 'https://images.unsplash.com/photo-1550114891-220bb9128581?auto=format&fit=crop&q=80&w=1200',
    rating: 4.7,
    reviews: 3200,
    price: 95,
    duration: '2 hours',
    location: 'Paris, France',
    tags: ['Food & Drink', 'Tours & Sightseeing', 'Paris', 'Cruise'],
  },
  {
    id: '5',
    title: 'Dubai Desert Safari, Red Dunes, Camel Ride & BBQ Dinner',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviews: 7800,
    price: 65,
    duration: '6 hours',
    location: 'Dubai, UAE',
    tags: ['Outdoor Activities', 'Adventure', 'Dubai', 'Safari'],
  },
  {
    id: '6',
    title: 'Bali All-Inclusive: Ubud Rice Terrace, Temples & Waterfall',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    rating: 4.7,
    reviews: 2100,
    price: 45,
    duration: '8 hours',
    location: 'Bali, Indonesia',
    tags: ['Outdoor Activities', 'Cultural Tours', 'Bali', 'Temple'],
  },
  {
    id: '7',
    title: 'Amalfi Coast Day Trip from Rome',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviews: 1540,
    price: 145,
    duration: '12 hours',
    location: 'Positano, Italy',
    tags: ['Day Trips', 'Scenic'],
  },
  {
    id: '8',
    title: 'Shark Cage Diving Adventure in Cape Town',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviews: 820,
    price: 195,
    duration: '6 hours',
    location: 'Cape Town, South Africa',
    tags: ['Outdoor Activities', 'Water Sports'],
  },
  {
    id: '9',
    title: 'Authentic Thai Cooking Class in Bangkok',
    image: 'https://plus.unsplash.com/premium_photo-1661330369792-7efc902ff673?auto=format&fit=crop&q=80&w=1200',
    rating: 4.7,
    reviews: 1100,
    price: 35,
    duration: '4 hours',
    location: 'Bangkok, Thailand',
    tags: ['Food & Drink', 'Classes & Workshops'],
  },
  {
    id: '10',
    title: 'Louvre Museum Guided Tour: The Best of the Louvre',
    image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&q=80&w=1200',
    rating: 4.6,
    reviews: 5400,
    price: 65,
    duration: '2.5 hours',
    location: 'Paris, France',
    tags: ['Art & Culture', 'Tickets & Passes'],
  },
  {
    id: '11',
    title: 'Surfing Lessons at Bondi Beach',
    image: 'https://images.unsplash.com/photo-1502680399488-bd2328232c9e?auto=format&fit=crop&q=80&w=1200',
    rating: 4.5,
    reviews: 670,
    price: 55,
    duration: '2 hours',
    location: 'Sydney, Australia',
    tags: ['Water Sports', 'Outdoor Activities'],
  },
  {
    id: '12',
    title: 'Mount Fuji and Lake Kawaguchi Scenic Tour',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviews: 3200,
    price: 110,
    duration: '10 hours',
    location: 'Tokyo, Japan',
    tags: ['Day Trips', 'Sightseeing'],
  }
];

export const CATEGORIES = [
  { 
    name: 'Art & Culture', 
    slug: 'art-and-culture',
    icon: 'Palette', 
    query: 'art',
    description: 'Immerse yourself in history, fine arts, and local traditions with our curated cultural experiences.',
    heroImage: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    name: 'Outdoor Activities', 
    slug: 'outdoor-activities',
    icon: 'Mountain', 
    query: 'outdoor',
    description: 'Adventure awaits in the great outdoors. From hiking to hot air balloons, find your thrill.',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    name: 'Tickets & Passes', 
    slug: 'tickets-and-passes',
    icon: 'Ticket', 
    query: 'tickets',
    description: 'Skip the line and save time with priority access to the world\'s most popular landmarks and attractions.',
    heroImage: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    name: 'Tours & Sightseeing', 
    slug: 'tours-and-sightseeing',
    icon: 'Camera', 
    query: 'tours',
    description: 'See the city through the eyes of a local with our expert-led walking tours and bus sightseeing.',
    heroImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    name: 'Food & Drink', 
    slug: 'food-and-drink',
    icon: 'Utensils', 
    query: 'food',
    description: 'Taste the world with culinary tours, wine tastings, and authentic cooking classes.',
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    name: 'Day Trips', 
    slug: 'day-trips',
    icon: 'Bus', 
    query: 'day trips',
    description: 'Escape the city and discover nearby gems with our full-day excursions and comfortable transport.',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    name: 'Water Sports', 
    slug: 'water-sports',
    icon: 'Waves', 
    query: 'water',
    description: 'Make a splash with snorkeling, surfing, boat rentals, and unforgettable aquatic adventures.',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    name: 'Classes & Workshops', 
    slug: 'classes-and-workshops',
    icon: 'GraduationCap', 
    query: 'classes',
    description: 'Learn a new skill from local experts. From pottery to photography, unleash your creativity.',
    heroImage: 'https://images.unsplash.com/photo-1513258496099-48168024adb0?auto=format&fit=crop&q=80&w=2000'
  },
];

export const EXPLORE_DATA = {
  'Top activities': {
    categories: [
      { id: 'cat', name: 'Top categories' },
      { id: 'mea', name: 'Top Middle East & Africa tours' },
      { id: 'asia', name: 'Top Asia tours' },
      { id: 'carib', name: 'Top Caribbean tours' },
      { id: 'euro', name: 'Top Europe tours' },
      { id: 'na', name: 'Top North America tours' }
    ],
    links: {
      'cat': ['Walking Tours in Rome', 'Historical Tours in Rome', 'Walking Tours in Paris', 'Day Trips in London', 'Historical Tours in Paris', 'Day Trips in Florence', 'Historical Tours in London', 'Cultural Tours in Barcelona', 'Walking Tours in Barcelona', 'Wine Tastings in Florence', 'Day Trips in Reykjavik', 'Day Trips in Las Vegas'],
      'mea': ['Dubai Desert Safari', 'Giza Pyramids Tour', 'Petra Day Trip', 'Marrakech Souk Tour'],
      'asia': ['Tokyo Street Food Tour', 'Bali Temple Tour', 'Ha Long Bay Cruise', 'Phi Phi Islands Tour'],
      'carib': ['St. Lucia Boat Tour', 'Havana Classic Car Tour', 'Dunn River Falls', 'Aruba Snorkeling'],
      'euro': ['Eiffel Tower Tickets', 'Colosseum Guided Tour', 'Louvre Museum Tour', 'Sagrada Familia Entry'],
      'na': ['Grand Canyon Helicopter', 'NYC Empire State Building', 'Alcatraz Tour', 'Statue of Liberty']
    }
  },
  'Top landmarks': {
    categories: [
      { id: 'popular', name: 'Most Popular' },
      { id: 'europe_l', name: 'Europe Landmarks' },
      { id: 'americas_l', name: 'Americas Landmarks' },
      { id: 'asia_l', name: 'Asia Landmarks' }
    ],
    links: {
      'popular': ['Eiffel Tower', 'Colosseum', 'Statue of Liberty', 'Machu Picchu', 'Great Wall of China', 'Taj Mahal', 'Burj Khalifa', 'Sagrada Familia'],
      'europe_l': ['Louvre Museum', 'Stonehenge', 'Acropolis of Athens', 'Vatican Museums', 'Buckingham Palace', 'Leaning Tower of Pisa'],
      'americas_l': ['Empire State Building', 'Golden Gate Bridge', 'Chichen Itza', 'Christ the Redeemer', 'Grand Canyon', 'Niagara Falls'],
      'asia_l': ['Fushimi Inari-taisha', 'Angkor Wat', 'Gardens by the Bay', 'Grand Palace Bangkok', 'Arashiyama Bamboo Grove']
    }
  },
  'Explore the world': {
    categories: [
      { id: 'trending', name: 'Trending destinations' },
      { id: 'top_things', name: 'Top things to do in ...' },
      { id: 'interests', name: 'Trip ideas by interest' },
      { id: 'articles', name: 'Trending articles' }
    ],
    links: {
      'trending': [
        'Tokyo, Japan Tours', 'New Delhi, India Tours', 'Bangkok, Thailand Tours',
        'Rome, Italy Tours', 'London, England Tours', 'Amsterdam, Netherlands Tours',
        'Paris, France Tours', 'Dubai, United Arab Emirates Tours', 'Florence, Italy Tours',
        'Phuket, Thailand Tours', 'New York City, USA Tours', 'Las Vegas, USA Tours'
      ],
      'top_things': ['Museums in Paris', 'Nightlife in Berlin', 'Surfing in Bali', 'Cafes in Hanoi'],
      'interests': [
        'Photography Tours', 'Sustainable Travel', 'Solo Female Travel', 'Family Adventures',
        'Secret London Gems', 'Tokyo Nightlife Guide', 'Paris for Foodies', 'Bali Wellness Retreats',
        'History Buff Itineraries', 'Luxury Train Journeys', 'Backpacking Europe 2026', 'Safari Photography'
      ],
      'articles': [
        'Best Beaches 2026', 'Hidden Gems of Europe', 'City Breaks on a Budget', 'Luxury in the Maldives',
        'Top 10 Street Food Cities', 'How to Travel Sustainably', 'Solo Travel Safety Tips', 'Digital Nomad Hotspots'
      ]
    }
  }
};

export const DESTINATIONS = [
  { name: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800' },
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800' },
  { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  { name: 'NYC', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800' },
  { name: 'Barcelona', image: 'https://images.unsplash.com/photo-1583997051651-8288c933ea35?auto=format&fit=crop&q=80&w=800' }
];
