/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
  luxury_villa: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80",
  penthouse_interior: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80",
  beach_front: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
  modern_mansion: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  urban_loft: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  community_1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  community_2: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
};

export const COMMUNITIES = [
  {
    id: "waterfront",
    name: "The Waterfront District",
    location: "Marina Coastline",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    description: "A transformative urban ecosystem bridging the serenity of the sea with the pulse of modern luxury. Feature-rich residences with private berths and panoramic ocean views.",
    amenities: ["Private Marina", "Oceanfront Beach Club", "Helipad Access", "Luxury Retail Promenade"],
    stats: { completions: "2025", properties: "150+", priceFrom: "$5.5M" },
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "oasis",
    name: "Oasis Reserve",
    location: "Desert Gardens",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80",
    description: "A sanctuary of peace in the heart of the golden sands. The Oasis Reserve offers ultra-modern villas surrounded by lush botanical gardens and temperature-controlled outdoor spaces.",
    amenities: ["Botanical Sanctuary", "Equestrian Center", "Eco-Spa", "Private Golf Course"],
    stats: { completions: "2026", properties: "85", priceFrom: "$12.0M" },
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "skygate",
    name: "Skygate Heights",
    location: "Business Hub",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80",
    description: "Architectural verticality redefined. Skygate Heights represents the pinnacle of high-altitude living, featuring the world's highest infinity pool and sky-bridges connecting residential peaks.",
    amenities: ["Sky Bridge Lobby", "Highest Infinity Pool", "Smart-Connected Living", "Michelin Star Dining"],
    stats: { completions: "2024", properties: "320", priceFrom: "$2.8M" },
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export interface Hotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  label: string;
  description: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tag: "New" | "Luxury" | "Ready";
  type: "Villa" | "Penthouse" | "Apartment";
  status: "For Sale" | "For Rent";
  tourImage?: string;
  hotspots?: Hotspot[];
  coords: [number, number]; // [lat, lng]
}

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Celestial Heights Penthouse",
    location: "Downtown Skyline, Dubai",
    price: "$12,500,000",
    beds: 5,
    baths: 6,
    sqft: "8,500",
    image: IMAGES.penthouse_interior,
    tag: "Luxury",
    type: "Penthouse",
    status: "For Sale",
    coords: [25.1972, 55.2744],
    tourImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=3840&q=100",
    hotspots: [
      { id: "h1", x: 25, y: 40, label: "Floor-to-Ceiling Windows", description: "Triple-glazed UV resistant glass offering 360 views." },
      { id: "h2", x: 60, y: 55, label: "Italian Marble Flooring", description: "Sourced directly from Carrara, polished to a mirror finish." }
    ]
  },
  {
    id: "2",
    title: "The Azure Mansion",
    location: "Palm Jumeirah, Dubai",
    price: "$28,000,000",
    beds: 7,
    baths: 9,
    sqft: "15,200",
    image: IMAGES.luxury_villa,
    tag: "New",
    type: "Villa",
    status: "For Sale",
    coords: [25.1124, 55.1390],
    tourImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=3840&q=100",
    hotspots: [
      { id: "h1", x: 40, y: 30, label: "Infinity Horizon Pool", description: "Bespoke pool design with salt-water filtration." },
      { id: "h2", x: 80, y: 50, label: "Private Cinema", description: "Dolby Atmos enabled 12-seat private theater." }
    ]
  },
  {
    id: "3",
    title: "Elysium Glass Villa",
    location: "Emirates Hills",
    price: "$18,200,000",
    beds: 6,
    baths: 7,
    sqft: "11,000",
    image: IMAGES.modern_mansion,
    tag: "Ready",
    type: "Villa",
    status: "For Sale",
    coords: [25.0667, 55.1667],
    tourImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3840&q=100",
    hotspots: [
      { id: "h1", x: 20, y: 60, label: "Zen Garden Entryway", description: "Minimalist landscape design with ancient olive trees." }
    ]
  },
  {
    id: "4",
    title: "Onyx Urban Loft",
    location: "Marina Bay",
    price: "$45,000 / mo",
    beds: 3,
    baths: 4,
    sqft: "4,200",
    image: IMAGES.urban_loft,
    tag: "Ready",
    type: "Apartment",
    status: "For Rent",
    coords: [25.0819, 55.1367],
    tourImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=3840&q=100"
  },
  {
    id: "5",
    title: "Sapphire Shore Estate",
    location: "Malibu Coast",
    price: "$35,000,000",
    beds: 8,
    baths: 10,
    sqft: "22,000",
    image: IMAGES.beach_front,
    tag: "Luxury",
    type: "Villa",
    status: "For Sale",
    coords: [34.0259, -118.7798],
    tourImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=3840&q=100"
  },
  {
    id: "6",
    title: "Zenith Sky Suite",
    location: "Central Park West, NY",
    price: "$28,000 / mo",
    beds: 4,
    baths: 5,
    sqft: "6,800",
    image: IMAGES.community_2,
    tag: "New",
    type: "Penthouse",
    status: "For Rent",
    coords: [40.7812, -73.9665],
    tourImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=3840&q=100"
  }
];

