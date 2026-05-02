export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  details: {
    client: string;
    area: string;
    duration: string;
    style: string;
  };
  gallery: string[];
  challenge: string;
  solution: string;
  serviceIds: string[];
  date: string; // ISO format: YYYY-MM-DD
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}
