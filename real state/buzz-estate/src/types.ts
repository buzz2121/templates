export interface Estate {
  id: string;
  name: string;
  location: string;
  city: string;
  price: string;
  numericPrice: number;
  area: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: string[];
  features: string[];
  type: 'Villa' | 'Penthouse' | 'Mansion' | 'Estate';
  isFeatured?: boolean;
}

export interface JournalEntry {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface Destination {
  id: string;
  city: string;
  country: string;
  description: string;
  image: string;
}
