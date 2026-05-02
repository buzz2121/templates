import { Service, Project, BlogPost } from '../types';

export const services: Service[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Comprehensive design solutions from concept to completion, tailored to your lifestyle.',
    fullDescription: 'Our interior design service is a holistic journey of transformation. We don\'t just pick colors and furniture; we curate environments that resonate with your soul and enhance your daily living. From the initial mood board to the final styling, every detail is meticulously planned to reflect your personal narrative and Indian heritage. We specialize in creating high-end residential spaces that balance opulence with comfort.',
    icon: 'Layout',
    image: '/images/img_1.jpg',
    features: [
      'Bespoke Concept Development',
      '3D Visualization & Walkthroughs',
      'Material & Finish Selection',
      'Custom Millwork Design',
      'Lighting Design & Integration',
      'Art & Decor Curation',
      'Vastu-Compliant Layouts',
      'Smart Home Integration'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your vision, lifestyle, and functional requirements through deep consultation.' },
      { title: 'Concept', description: 'Developing a unique design language, mood boards, and initial sketches.' },
      { title: 'Design Development', description: 'Detailed drawings, 3D renders, material selection, and technical specifications.' },
      { title: 'Procurement', description: 'Sourcing exclusive materials and furniture from global and local vendors.' },
      { title: 'Execution', description: 'On-site management, vendor coordination, and precision implementation.' },
      { title: 'Handover', description: 'Final styling, quality checks, and revealing your transformed space.' }
    ]
  },
  {
    id: 'furniture-curation',
    title: 'Furniture Curation',
    description: 'Bespoke furniture selection and custom pieces that define the character of your space.',
    fullDescription: 'Furniture is the soul of a room. Our curation service sources exclusive pieces from global designers and local Indian artisans. We also specialize in custom-designed furniture that fits your space perfectly, ensuring a blend of comfort, functionality, and high-end aesthetics. We believe every piece should tell a story of craftsmanship and luxury.',
    icon: 'Sofa',
    image: '/images/img_2.jpg',
    features: [
      'Global Sourcing',
      'Custom Furniture Design',
      'Upholstery & Fabric Selection',
      'Antique Restoration',
      'Ergonomic Assessment',
      'White-Glove Installation',
      'Material Longevity Testing',
      'Artisanal Collaboration'
    ],
    process: [
      { title: 'Selection', description: 'Curating a list of pieces that align with the design theme and your comfort.' },
      { title: 'Customization', description: 'Designing bespoke items for unique requirements and dimensions.' },
      { title: 'Procurement', description: 'Managing orders, quality checks, and international logistics.' },
      { title: 'Installation', description: 'Professional assembly and final placement in your home.' }
    ]
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Optimizing flow and functionality to ensure your environment works in perfect harmony.',
    fullDescription: 'Effective space planning is the foundation of a successful interior. We analyze the architectural layout to optimize flow, light, and utility. Our approach integrates Vastu principles with modern ergonomics to create spaces that feel open, intuitive, and balanced. We ensure every square foot is utilized purposefully without compromising on the sense of luxury.',
    icon: 'Maximize',
    image: '/images/img_3.jpg',
    features: [
      'Architectural Analysis',
      'Vastu Shastra Integration',
      'Circulation & Flow Optimization',
      'Zoning & Layout Design',
      'Storage Solutions',
      'Lighting & Ventilation Planning',
      'Acoustic Optimization',
      'Future-Proofing Layouts'
    ],
    process: [
      { title: 'Audit', description: 'Analyzing the existing architectural footprint and structural constraints.' },
      { title: 'Zoning', description: 'Defining functional areas based on usage patterns and lifestyle.' },
      { title: 'Drafting', description: 'Creating multiple layout options for review and iteration.' },
      { title: 'Finalization', description: 'Detailed technical plans and blueprints for execution.' }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Transforming existing structures into modern masterpieces while preserving heritage.',
    fullDescription: 'Our renovation service breathes new life into old spaces. Whether it\'s a heritage haveli or a dated apartment, we specialize in structural transformations that respect the past while embracing the future. We handle everything from civil work to final finishes, ensuring a stress-free turnkey experience. Our goal is to enhance property value while creating a stunning modern home.',
    icon: 'PenTool',
    image: '/images/img_4.jpg',
    features: [
      'Structural Modifications',
      'Civil & MEP Work',
      'Heritage Restoration',
      'Kitchen & Bath Remodeling',
      'Flooring & Ceiling Upgrades',
      'Turnkey Project Management',
      'Energy Efficiency Upgrades',
      'Waterproofing & Insulation'
    ],
    process: [
      { title: 'Assessment', description: 'Evaluating structural integrity, civil requirements, and hidden issues.' },
      { title: 'Planning', description: 'Detailed renovation roadmap, budgeting, and permit management.' },
      { title: 'Demolition & Civil', description: 'Executing core structural changes with precision and safety.' },
      { title: 'Finishing', description: 'Applying high-end finishes, lighting, and final styling.' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'lutyens-penthouse',
    title: 'The Lutyens Penthouse',
    category: 'Living',
    location: 'New Delhi',
    image: '/images/img_5.jpg',
    description: 'A sophisticated blend of colonial charm and modern luxury in the heart of New Delhi. This project involved a complete overhaul of a 4,500 sq. ft. penthouse to create a space that is both grand and intimate.',
    details: {
      client: 'Private Entrepreneur',
      area: '4,500 Sq. Ft.',
      duration: '8 Months',
      style: 'Modern Colonial'
    },
    gallery: [
      '/images/img_5.jpg',
      '/images/img_6.jpg',
      '/images/img_7.jpg',
      '/images/img_8.jpg'
    ],
    challenge: 'The client wanted to preserve the architectural heritage of the Lutyens zone while integrating state-of-the-art smart home technology and modern comforts. Balancing the heavy colonial aesthetic with light, airy modern elements was key.',
    solution: 'We used a palette of rich teaks, Italian marbles, and brass accents. Smart systems were concealed behind custom millwork, and the layout was opened up to maximize views of the lush greenery. We introduced large-scale art pieces to anchor the expansive rooms.',
    serviceIds: ['interior-design', 'furniture-curation', 'space-planning'],
    date: '2023-11-15',
    testimonial: {
      quote: "Vanya Interiors transformed our heritage property into a modern masterpiece without losing its soul. Their attention to detail is unparalleled.",
      author: "Vikram Sethi",
      role: "Founder, Sethi Group"
    }
  },
  {
    id: 'heritage-haveli',
    title: 'Heritage Haveli',
    category: 'Bedroom',
    location: 'Udaipur',
    image: '/images/img_9.jpg',
    description: 'Restoring a centuries-old haveli into a boutique luxury residence. This project was a labor of love, involving traditional Rajasthani craftsmanship and modern structural engineering.',
    details: {
      client: 'Royal Family Associate',
      area: '6,000 Sq. Ft.',
      duration: '14 Months',
      style: 'Rajputana Heritage'
    },
    gallery: [
      '/images/img_9.jpg',
      '/images/img_10.jpg',
      '/images/img_4.jpg',
      '/images/img_6.jpg'
    ],
    challenge: 'Restoring structural integrity without losing the original character of the intricate stone carvings and lime plaster walls. The haveli had significant dampness issues and outdated plumbing.',
    solution: 'We collaborated with local artisans to use traditional Thapi plaster and stone carving techniques. Modern plumbing and electricals were carefully routed through non-structural voids, and the courtyard was transformed into a central oasis with a marble fountain.',
    serviceIds: ['renovation', 'interior-design', 'space-planning'],
    date: '2023-08-20'
  },
  {
    id: 'skyline-residence',
    title: 'Skyline Residence',
    category: 'Living',
    location: 'Mumbai',
    image: '/images/img_1.jpg',
    description: 'A minimalist, high-tech apartment overlooking the Arabian Sea. The design focus was on "quiet luxury"—using the highest quality materials in a restrained, elegant manner.',
    details: {
      client: 'Tech Executive',
      area: '2,800 Sq. Ft.',
      duration: '6 Months',
      style: 'Ultra-Modern Minimalist'
    },
    gallery: [
      '/images/img_1.jpg',
      '/images/img_11.jpg',
      '/images/img_12.jpg',
      '/images/img_13.jpg'
    ],
    challenge: 'Creating a sense of warmth in a starkly minimalist space with high ceilings and large glass walls. The client wanted a home that felt like a sanctuary away from the Mumbai bustle.',
    solution: 'We introduced layered lighting and soft textures through custom rugs and wall coverings. A neutral palette with deep blue accents mirrored the sea outside, creating a seamless indoor-outdoor connection. We used sound-dampening materials to ensure absolute silence.',
    serviceIds: ['interior-design', 'furniture-curation', 'space-planning'],
    date: '2024-01-10',
    testimonial: {
      quote: "The team at Vanya understood my need for silence and minimalism perfectly. Every time I walk in, I feel the chaos of Mumbai melt away.",
      author: "Ananya Roy",
      role: "CTO, FinTech Solutions"
    }
  },
  {
    id: 'coastal-villa',
    title: 'The Goa Retreat',
    category: 'Living',
    location: 'Goa',
    image: '/images/img_14.jpg',
    description: 'A luxury vacation villa that blends Mediterranean architecture with Indian tropical elements. Designed for indoor-outdoor living and ultimate relaxation.',
    details: {
      client: 'NRI Family',
      area: '5,500 Sq. Ft.',
      duration: '10 Months',
      style: 'Tropical Luxury'
    },
    gallery: [
      '/images/img_15.jpg',
      '/images/img_16.jpg',
      '/images/img_14.jpg'
    ],
    challenge: 'Dealing with the high humidity and salt air of Goa while maintaining a high-end finish. The client wanted a "resort feel" without it looking generic.',
    solution: 'We used weather-resistant materials like treated teak and natural stone. The layout features large folding doors that open to a private pool and landscaped gardens. We curated a collection of local Goan art and artifacts to give the space a soul.',
    serviceIds: ['interior-design', 'furniture-curation', 'renovation'],
    date: '2023-05-12'
  },
  {
    id: 'urban-oasis',
    title: 'Urban Oasis',
    category: 'Bedroom',
    location: 'Bangalore',
    image: '/images/img_4.jpg',
    description: 'A serene bedroom retreat in the heart of bustling Bangalore. Designed with natural materials and soft lighting to create a sense of calm.',
    details: {
      client: 'Design Consultant',
      area: '2,200 Sq. Ft.',
      duration: '5 Months',
      style: 'Organic Modern'
    },
    gallery: [
      '/images/img_4.jpg',
      '/images/img_10.jpg',
      '/images/img_17.jpg'
    ],
    challenge: 'Creating a feeling of being close to nature despite the urban setting and limited view.',
    solution: 'We installed a vertical garden on the balcony and used broad-leafed plants indoors. Cane furniture, linen drapes, and a soft earth-toned palette reinforce the organic theme.',
    serviceIds: ['interior-design', 'furniture-curation'],
    date: '2024-02-28'
  },
  {
    id: 'minimalist-kitchen',
    title: 'The Culinary Studio',
    category: 'Kitchen',
    location: 'Bangalore',
    image: '/images/img_18.jpg',
    description: 'A state-of-the-art minimalist kitchen designed for a professional chef. Focus on ergonomics and high-end appliances.',
    details: {
      client: 'Executive Chef',
      area: '600 Sq. Ft.',
      duration: '4 Months',
      style: 'Industrial Minimalist'
    },
    gallery: [
      '/images/img_18.jpg'
    ],
    challenge: 'Maximizing storage and workspace in a relatively compact area while maintaining a clean, uncluttered look.',
    solution: 'We used handle-less cabinetry and integrated all appliances. A large central island serves as both a prep station and an informal dining area.',
    serviceIds: ['interior-design', 'space-planning'],
    date: '2024-02-15'
  },
  {
    id: 'spa-bathroom',
    title: 'Azure Sanctuary',
    category: 'Bathroom',
    location: 'Pune',
    image: '/images/img_19.jpg',
    description: 'A spa-like bathroom retreat featuring natural stone and ambient lighting.',
    details: {
      client: 'Private Client',
      area: '450 Sq. Ft.',
      duration: '3 Months',
      style: 'Zen Luxury'
    },
    gallery: [
      '/images/img_19.jpg'
    ],
    challenge: 'Creating a sense of openness in a windowless space.',
    solution: 'We used a combination of skylights and layered LED lighting to mimic natural light. A freestanding stone tub serves as the focal point.',
    serviceIds: ['interior-design', 'renovation'],
    date: '2024-03-01'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'revival-of-craft',
    title: 'The Revival of Indian Craftsmanship',
    excerpt: 'Exploring how traditional artisanship is finding its place in the modern luxury segment of Indian architecture.',
    content: 'Full story about craftsmanship...',
    image: '/images/img_10.jpg',
    date: 'March 12, 2026',
    category: 'Heritage'
  },
  {
    id: 'modern-vastu',
    title: 'Modern Vastu: Harmony in Design',
    excerpt: 'How we integrate ancient spatial principles with contemporary aesthetics to create balanced living environments.',
    content: 'Full story about Vastu...',
    image: '/images/img_20.jpg',
    date: 'February 28, 2026',
    category: 'Philosophy'
  },
  {
    id: 'textiles-of-india',
    title: 'Textiles of India: A Luxury Narrative',
    excerpt: 'A deep dive into the rare textiles we source from across the subcontinent to bring soul to our interior projects.',
    content: 'Full story about textiles...',
    image: '/images/img_9.jpg',
    date: 'February 15, 2026',
    category: 'Materials'
  }
];
