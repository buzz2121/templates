
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  isFeatured?: boolean;
  stock?: number;
  tags?: string[];
}

export interface BouquetComponent {
  id: string;
  name: string;
  price: number;
  color: string;
  image: string;
}

export interface CustomBouquet {
  basePrice: number;
  flowers: { component: BouquetComponent; count: number }[];
  arrangement: string;
  totalPrice: number;
}

export interface CartItem extends Product {
  quantity: number;
  personalMessage?: {
    text: string;
    isAIGenerated: boolean;
    style: string;
  };
  customBouquet?: CustomBouquet;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export type Occasion = 'Birthday' | 'Anniversary' | 'Wedding' | 'Sympathy' | 'Just Because';
export type Mood = 'Romantic' | 'Elegant' | 'Cheerful' | 'Calm' | 'Vibrant';

export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}
