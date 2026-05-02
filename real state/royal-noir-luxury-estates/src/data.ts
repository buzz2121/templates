export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  city: string;
  beds: number;
  baths: number;
  area: number;
  type: "Villa" | "Penthouse" | "Apartment" | "Mansion" | "Estate";
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  status: "For Sale" | "For Rent";
  furnished: boolean;
  agent: {
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "The Belvedere Estate",
    price: 42500000,
    location: "Upper East Side, New York",
    city: "New York",
    beds: 6,
    baths: 8,
    area: 12500,
    type: "Mansion",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Built in 1912 and meticulously restored, The Belvedere is an architectural masterpiece of limestone and light, providing an unparalleled living experience in the heart of Manhattan’s Gold Coast.",
    features: ["Concierge Service", "Wine Cellar", "Rooftop Garden", "Private Elevator"],
    status: "For Sale",
    furnished: true,
    agent: {
      name: "Arthur Sterling",
      role: "Global Acquisitions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      phone: "+1 (212) 555-0120",
      email: "a.sterling@private-estates.com"
    }
  },
  {
    id: "2",
    title: "Azure Glass Pavilion",
    price: 24750000,
    location: "Saint-Jean-Cap-Ferrat, France",
    city: "Cap-Ferrat",
    beds: 5,
    baths: 6,
    area: 8400,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A seamless integration of modernist architecture and the Mediterranean landscape, the Azure Pavilion offers panoramic sea views and total privacy within a secure pine-forested enclave.",
    features: ["Infinity Pool", "Private Beach Access", "Security Suite", "Smart Controls"],
    status: "For Sale",
    furnished: true,
    agent: {
      name: "Sophia Laurent",
      role: "Luxury Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      phone: "+33 4 93 01 02 03",
      email: "sophia@private-estates.com"
    }
  },
  {
    id: "3",
    title: "One Central Penthouse",
    price: 15900000,
    location: "Mayfair, London",
    city: "London",
    beds: 4,
    baths: 4,
    area: 5200,
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600566753151-3843b33df0dd?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Positioned at the apex of Mayfair’s most prestigious development, this residence features hand-finished materials and floor-to-ceiling windows overlooking Hyde Park.",
    features: ["24h Doorman", "Fitness Centre", "Automated Parking", "Wellness Spa"],
    status: "For Sale",
    furnished: false,
    agent: {
      name: "James Montrose",
      role: "European Portfolio",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      phone: "+44 20 7946 0000",
      email: "james@private-estates.com"
    }
  }
];

export const AGENTS = [
  {
    name: "Arthur Sterling",
    role: "Senior Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    experience: "30+ Years",
    phone: "+1 (212) 555-0120",
    email: "a.sterling@private-estates.com"
  },
  {
    name: "Sophia Laurent",
    role: "International Liaison",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    experience: "15+ Years",
    phone: "+33 4 93 01 02 03",
    email: "sophia@private-estates.com"
  },
  {
    name: "James Montrose",
    role: "Estates Advisory",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    experience: "20+ Years",
    phone: "+44 20 7946 0000",
    email: "james@private-estates.com"
  }
];
