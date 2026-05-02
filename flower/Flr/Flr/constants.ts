import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'roses',
    name: 'Premium Roses',
    image: 'https://images.unsplash.com/photo-1548683313-f62f053239c8?w=800&q=80'
  },
  {
    id: 'bouquets',
    name: 'Artisan Bouquets',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80'
  },
  {
    id: 'occasions',
    name: 'Special Occasions',
    image: 'https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=800&q=80'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eternal Blush Roses',
    price: 89,
    category: 'Roses',
    image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&q=80',
    description: 'Breathtaking pink roses hand-picked for their perfection.',
    rating: 5,
    isFeatured: true,
    stock: 12,
    tags: ['Best Seller', 'Romantic']
  },
  {
    id: '2',
    name: 'The Midnight Muse',
    price: 125,
    category: 'Romantic',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80',
    description: 'Deep velvet roses and obsidian-toned accents for the ultimate romantic gesture.',
    rating: 4.8,
    isFeatured: true,
    stock: 5,
    tags: ['Premium', 'New']
  },
  {
    id: '3',
    name: 'White Lily Symphony',
    price: 75,
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80',
    description: 'A pure and elegant arrangement of fresh white lilies and jasmine.',
    rating: 4.9,
    stock: 15,
    tags: ['Elegant']
  },
  {
    id: '4',
    name: 'Peony Passion',
    price: 95,
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80',
    description: 'Lush pink peonies arranged with delicate eucalyptus leaves.',
    rating: 5,
    stock: 8,
    tags: ['Limited Edition']
  },
  {
    id: '5',
    name: 'Orchid Elegance',
    price: 110,
    category: 'Exotic',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Stunning Phalaenopsis orchids in a ceramic minimalist vase.',
    rating: 4.7,
    stock: 10,
    tags: ['Exotic']
  },
  {
    id: '6',
    name: 'Golden Tulips',
    price: 65,
    category: 'Bouquets',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&q=80',
    description: 'A cheerful arrangement of bright yellow tulips.',
    rating: 4.6,
    stock: 20,
    tags: ['Customer Favorite']
  }
];

export const FLOWER_COMPONENTS = [
  { id: 'fc1', name: 'Red Rose', price: 5, color: '#e11d48', image: 'https://images.unsplash.com/photo-1548658166-136d4f6a7e76?w=400&q=80' },
  { id: 'fc2', name: 'White Lily', price: 7, color: '#f8fafc', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80' },
  { id: 'fc3', name: 'Blue Hydrangea', price: 8, color: '#3b82f6', image: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?w=400&q=80' },
  { id: 'fc4', name: 'Pink Peony', price: 9, color: '#db2777', image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&q=80' },
  { id: 'fc5', name: 'Yellow Tulip', price: 4, color: '#eab308', image: 'https://images.unsplash.com/photo-1550983092-24732c4d9243?w=400&q=80' },
  { id: 'fc6', name: 'Eucalyptus Leaf', price: 2, color: '#166534', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&q=80' },
];
