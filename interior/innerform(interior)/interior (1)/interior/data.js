const projectsData = [
  {
    "id": "living-oasis",
    "category": "living",
    "layout": "collage-layout-a",
    "title": "SoHo Loft Residence",
    "style": "Minimal / Luxury",
    "location": "SoHo, New York",
    "area": "1,850 sq ft",
    "number": "01",
    "description": "A study in tranquility and light. This SoHo loft was stripped back to its purest form, utilizing a neutral palette of warm greys, white oak, and soft linens. The space emphasizes openness while maintaining distinct zones for living and reflection.",
    "year": "2024",
    "client": "Private Collector",
    "scope": "Interior Architecture",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1600607687969-a732e6d9738f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1567016376495-9909ef2cfcfb?auto=format&fit=crop&q=80&w=1200"
    ],
    "link": "minimalist-living-oasis.html"
  },
  {
    "id": "texture-kitchen",
    "category": "kitchen",
    "layout": "collage-layout-b",
    "title": "Tribeca Raw Kitchen",
    "style": "Organic Modern",
    "location": "Tribeca, New York",
    "area": "450 sq ft",
    "number": "02",
    "description": "Moving away from sterile modernism, this Tribeca kitchen utilizes hand-plastered walls and reclaimed timber to create a space that feels grounded and visceral. Every surface invites touch, from the honed marble to the wire-brushed oak.",
    "year": "2023",
    "client": "The Chens",
    "scope": "Kitchen Design",
    "images": [
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1585128719395-364273299723?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1556912177-f273200ff3cf?auto=format&fit=crop&q=80&w=1200"
    ],
    "link": "organic-texture-kitchen.html"
  },
  {
    "id": "serene-suite",
    "category": "bedroom",
    "layout": "collage-layout-c",
    "title": "Upper West Sanctuary",
    "style": "Modern Minimal",
    "location": "Upper West Side, NY",
    "area": "620 sq ft",
    "number": "03",
    "description": "Designed as a personal sanctuary, the Serene Suite utilizes acoustic paneling and circadian lighting to create the ultimate rest environment. The palette is strictly monolithic, allowing the play of light and shadow to define the atmosphere.",
    "year": "2024",
    "client": "J. Stern",
    "scope": "Bedroom Design",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1505691938895-1758d705128e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560448194-4420ca8f5597?auto=format&fit=crop&q=80&w=1200"
    ],
    "link": "serene-suite.html"
  },
  {
    "id": "bathroom-1",
    "category": "bathroom",
    "layout": "collage-layout-a",
    "title": "Chelsea Stone Spa",
    "style": "Luxury Spa",
    "location": "Chelsea, New York",
    "area": "240 sq ft",
    "number": "04",
    "description": "We reimagined this space into a personal spa, utilizing natural stone, minimal grout lines, and a heavy floating vanity. The integration of concealed water systems and ambient backlighting creates a weightless, ethereal experience.",
    "year": "2024",
    "client": "Private Client",
    "scope": "Renovation",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1620626011761-9963d7b6976a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    "id": "office-1",
    "category": "commercial",
    "layout": "collage-layout-b",
    "title": "Visionary Hub Loft",
    "style": "Industrial Precision",
    "location": "Hudson Yards, NY",
    "area": "4,200 sq ft",
    "number": "05",
    "description": "A collaborative workspace designed for a leading tech firm. The layout balances high-energy social zones with deep-work pods, all tied together by a raw industrial aesthetic refined with premium finishes.",
    "year": "2024",
    "client": "Tech Collective",
    "scope": "Spatial Strategy & Interior Design",
    "images": [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1531973576160-7125cd663986?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    "id": "villa-1",
    "category": "residential",
    "layout": "collage-layout-c",
    "title": "Coastal Panorama Villa",
    "style": "Modernist Coastal",
    "location": "Sagaponack, NY",
    "area": "8,500 sq ft",
    "number": "06",
    "description": "This oceanfront villa blurs the line between interior and exterior. Expansive glass walls and a continuous stone floor lead the eye to the horizon, while custom teak millwork warms the vast, light-filled volumes.",
    "year": "2023",
    "client": "Private Estate",
    "scope": "Full Architectural Interiors",
    "images": [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0bab2a674?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];

const servicesData = [
  {
    "id": "interior-design",
    "title": "Interior <em>Design</em>",
    "short_desc": "Spaces that reflect your lifestyle, not just trends.",
    "description": "We specialize in ultra-luxury residential interiors that speak to international standards. Our approach is holistic—blending architectural bones with artisanal textures.",
    "features": ["Bespoke Concept Design", "Material & Finish Palette", "3D Photorealistic Previews", "Global Sourcing & Procurement"],
    "images": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687969-a732e6d9738f?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    "id": "modular-kitchen",
    "title": "Modular <em>Kitchen</em>",
    "short_desc": "Precision-engineered culinary sanctuaries for the modern home chef.",
    "description": "Our modular kitchens are defined by seamless hardware, architectural surfaces, and logical workflows that transform cooking into an effortless experience.",
    "features": ["German Hardware Integration", "Rare Stone Countertops", "Smart Storage Engineering", "Hidden Appliance Suites"],
    "images": [
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1556912177-f273200ff3cf?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    "id": "bedroom-design",
    "title": "Bedroom <em>Design</em>",
    "short_desc": "Curated suites for rest and rejuvenation in a dead-silent environment.",
    "description": "We design bedrooms as sensory-neutral sanctuaries, utilizing sound-dampening textures and circadian lighting systems to optimize restorative sleep.",
    "features": ["Acoustic Wall Treatment", "Circadian Lighting Control", "Custom Bed Architecture", "Monolithic Wardrobe Systems"],
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1505691938895-1758d705128e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560448194-4420ca8f5597?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    "id": "bathroom-design",
    "title": "Bathroom <em>Design</em>",
    "short_desc": "Spa-inspired sanctuaries of stone and water for your daily wellness.",
    "description": "From book-matched marble slabs to concealed rainfall systems, our bathrooms are structural poems dedicated to the ritual of the bath.",
    "features": ["Slab-Matching Stone Work", "Concealed Basin Systems", "Smart Shower Integration", "Moisture-Adaptive Finishes"],
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1620626011761-9963d7b6976a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507652313519-d4c9174996dd?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    "id": "furniture-decor",
    "title": "Furniture <em>& Decor</em>",
    "short_desc": "Bespoke curation of artifacts and furniture for a deeply personal narrative.",
    "description": "We source global artifacts and custom-design furniture pieces that act as the punctuation marks of an interior narrative.",
    "features": ["Bespoke Furniture Design", "Global Artifact Sourcing", "Art Consultation & Placement", "Tactile Textile Selection"],
    "images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1567016376495-9909ef2cfcfb?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    "id": "full-renovation",
    "title": "Full <em>Renovation</em>",
    "short_desc": "Structural alchemy: transforming outdated shells into modern masterpieces.",
    "description": "We specialize in the structural and aesthetic rebirth of aging properties, managing everything from core plumbing to the final art placement.",
    "features": ["Structural Engineering", "Civil & Plumbing Redesign", "Full Project Management", "Post-Handover Maintenance"],
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1533090159492-f046c82098ca?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1564012435548-232537f07e59?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];
