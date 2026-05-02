import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Play, 
  ArrowRight, 
  ArrowLeft,
  Menu, 
  X,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Search
} from 'lucide-react';
import React, { useState, useEffect, ReactNode, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';

const SERVICES_DATA = [
    { 
        slug: "full-event-design",
        name: "Full Event Design", 
        desc: "Seamless orchestration from first sketch to post-event preservation. We manage the vendor ecosystem and artistic direction entirely.",
        prompt: "Luxury event planning blueprint, architectural drawing of a grand ballroom with floral installations, gold leaf accents, moody ambient lighting, 8k resolution, elegant, minimalist",
        staticImageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
        images: [
            "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: ["Concept Development", "Vendor Selection", "Timeline Management", "On-site Directorship"]
    },
    { 
        slug: "private-concierge",
        name: "Private Concierge", 
        desc: "Bespoke lifestyle management for our elite clientele, ensuring their travel, attire, and personal needs are handled with grace.",
        prompt: "High-end luxury concierge service, private club interior, deep velvet textures, crystal glasses, city view at sunset, sophisticated atmosphere, 8k resolution, cinematic lighting",
        staticImageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: ["Travel Arrangements", "Attire Selection", "Personal Assistance", "Exclusive Access"]
    },
    { 
        slug: "creative-artistry",
        name: "Creative Artistry", 
        desc: "Specialized spatial design that incorporates custom furniture builds, floral architecture, and immersive lighting scores. We treat each venue as a canvas for high-art intervention.",
        prompt: "Avant-garde floral installation in a minimalist museum space, immersive lighting, gold and white orchid structures, modern art feel, 8k resolution, luxury aesthetic",
        staticImageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1200",
        images: [
            "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1518131394154-121045831558?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: ["Floral Architecture", "Custom Lighting", "Set Design", "Sensory Experiences", "Material Innovation"]
    },
    { 
        slug: "destination-logistics",
        name: "Destination Logistics", 
        desc: "Mastery over complex global movements. Ships, private jets, and remote landscape transformations are our specialty.",
        prompt: "Luxury private jet and yacht at a remote tropical island harbor, golden hour, crystal clear water, focus on travel excellence, 8k resolution, high-end lifestyle",
        staticImageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200",
        images: [
            "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: ["Fleet Management", "Global Shipping", "Remote Setups", "Border Clearance"]
    },
    { 
        slug: "cultural-consulting",
        name: "Cultural Consulting", 
        desc: "Navigating deep global traditions with sensitivity, ensuring every cultural nuance is honored and elevated.",
        prompt: "Sophisticated global cultural heritage icons in a modern luxury library, warm wooden textures, old maps, ancient statues, refined and respectful fusion, 8k resolution",
        staticImageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
        images: [
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: ["Tradition Research", "Etiquette Guidance", "Multilingual Support", "Heritage Integration"]
    },
    { 
        slug: "the-legacy-film",
        name: "The Legacy Film", 
        desc: "Cinematic documentation of your event using industry-leading film directors to preserve the memory for generations.",
        prompt: "Classic 35mm film camera in a luxury ballroom setting, capturing a grand moving scene, bokeh lights, cinematic emotion, preserved memory vibe, 8k resolution",
        staticImageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
        images: [
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200"
        ],
        highlights: ["Film Directorship", "4K Mastering", "Private Screenings", "Digital Archiving"]
    }
];

const SingleServicePage = () => {
    const { slug } = useParams();
    const service = useMemo(() => SERVICES_DATA.find(s => s.slug === slug), [slug]);

    if (!service) return <div className="min-h-screen pt-48 text-center text-white font-serif">Service Not Found</div>;

    return (
        <PageTransition>
            <div className="pt-48 pb-24 bg-prestige-black min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-24 items-start">
                        <div className="sticky top-48">
                            <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-8 font-bold">Tier 0{SERVICES_DATA.indexOf(service) + 1}</p>
                            <h1 className="text-5xl md:text-8xl font-serif font-medium text-white italic mb-12 leading-tight drop-shadow-2xl">{service.name}</h1>
                            <p className="text-xl text-prestige-cream leading-relaxed font-normal mb-12 italic border-l-2 border-gold/40 pl-8">
                                {service.desc}
                            </p>
                            <div className="space-y-8 mb-12">
                                {service.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="w-6 h-[1px] bg-gold" />
                                        <span className="text-[11px] uppercase tracking-[0.3em] text-gray-200 font-bold">{h}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-16 space-y-12">
                                <h3 className="text-2xl font-serif text-white italic">Key Deliverables</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        "Bi-weekly strategic alignment sessions with lead architects.",
                                        "Exclusive access to our global database of rare materials and fine artisans.",
                                        "End-to-end discrete logistics and personal security integration.",
                                        "Digital legacy archive of every design choice and architectural blueprint."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start space-x-4 group">
                                            <div className="w-1.5 h-1.5 bg-gold mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                            <p className="text-prestige-cream text-sm font-medium leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link to="/contact" className="mt-16 inline-block bg-gold text-prestige-black px-12 py-6 text-[11px] uppercase tracking-[0.4em] font-bold transition-all hover:bg-white shadow-2xl">
                                Request Consultation
                            </Link>
                        </div>
                        <div className="space-y-12">
                            <div className="aspect-[4/5] bg-prestige-dark overflow-hidden border border-gold/10 relative shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                                <ServiceImageCarousel images={service.images} />
                            </div>
                            <div className="p-12 border border-gold/10 bg-prestige-dark/50 shadow-xl">
                                <h3 className="text-xl font-serif text-gold italic mb-6">The Aurelian Promise</h3>
                                <p className="text-sm text-prestige-cream leading-relaxed font-medium">
                                    Every engagement is treated as a unique commission. We do not provide templates; only bespoke architectures of experience. Our commitment is to the absolute preservation of your vision through the lens of our global expertise. Our teams operate across 24 time zones to ensure perpetual progress on every project.
                                </p>
                            </div>

                            <div className="pt-12 border-t border-gold/10">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Complementary Services</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {SERVICES_DATA.filter(s => s.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 2).map((s, i) => (
                                        <Link key={i} to={`/services/${s.slug}`} className="flex items-center justify-between p-6 bg-prestige-dark/30 hover:bg-prestige-dark transition-colors group">
                                            <span className="text-white font-serif italic text-sm">{s.name}</span>
                                            <ArrowRight size={14} className="text-gold/30 group-hover:text-gold translate-x-0 group-hover:translate-x-2 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
import { generateServiceImage } from './lib/gemini';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'glass py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-prestige-cream">
          <Link to="/" className="text-2xl font-serif tracking-[0.3em] font-bold uppercase text-gold">
            Aurelian
          </Link>
          
          <div className="hidden md:flex space-x-12 items-center">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  to={item.path}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-gold ${location.pathname === item.path ? 'text-gold' : ''}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsSearchOpen(true)}
              className="text-prestige-cream/60 hover:text-gold transition-colors ml-4"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </motion.button>

            <Link to="/contact">
            <motion.button 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="px-6 py-2 border border-gold/40 text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-prestige-black transition-all duration-300"
            >
              Inquire
            </motion.button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-prestige-dark border-t border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center space-x-4 text-xs uppercase tracking-[0.2em] text-gold"
              >
                <Search size={16} />
                <span>Quick Search</span>
              </button>
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors ${location.pathname === item.path ? 'text-gold' : 'text-prestige-cream'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [query, setQuery] = useState("");

    const filteredResults = useMemo(() => {
        if (!query.trim()) return [];
        const q = query.toLowerCase();
        return SERVICES_DATA.filter(s => 
            s.name.toLowerCase().includes(q) || 
            s.desc.toLowerCase().includes(q) ||
            s.highlights.some(h => h.toLowerCase().includes(q))
        );
    }, [query]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setQuery("");
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-prestige-black/95 backdrop-blur-2xl flex flex-col items-center pt-32 px-6"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-12 right-12 text-prestige-cream/40 hover:text-gold transition-colors"
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    <div className="w-full max-w-3xl">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="relative border-b border-gold/30 pb-4 mb-20"
                        >
                            <Search className="absolute left-0 top-1 text-gold/50" size={24} strokeWidth={1.5} />
                            <input 
                                autoFocus
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search our signature services..."
                                className="w-full bg-transparent pl-12 text-3xl md:text-5xl font-serif text-white placeholder:text-prestige-cream/10 outline-none italic"
                            />
                        </motion.div>

                        <div className="space-y-12">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((result, i) => (
                                    <motion.div
                                        key={result.slug}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link 
                                            to={`/services/${result.slug}`}
                                            onClick={onClose}
                                            className="group block"
                                        >
                                            <div className="flex items-baseline justify-between mb-2">
                                                <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors italic font-bold">{result.name}</h3>
                                                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Service 0{SERVICES_DATA.indexOf(result) + 1}</span>
                                            </div>
                                            <p className="text-prestige-cream text-sm font-medium max-w-2xl leading-relaxed">{result.desc}</p>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : query.trim() ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                                    <p className="text-prestige-cream/20 font-serif italic text-2xl">No services found for "{query}"</p>
                                </motion.div>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 opacity-40">
                                    <p className="col-span-full text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-4">Suggested Discoveries</p>
                                    {SERVICES_DATA.slice(0, 3).map((s) => (
                                        <button 
                                            key={s.slug}
                                            onClick={() => setQuery(s.name)}
                                            className="text-left text-sm font-light hover:text-gold transition-colors border-l border-gold/10 pl-6 py-2"
                                        >
                                            {s.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Fix for default marker icon in leaflet
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const InteractiveMap = () => {
    const position: [number, number] = [40.7691, -73.9814]; // One Central Park West
    
    return (
        <div className="h-[400px] w-full border border-gold/20 shadow-2xl relative grayscale-[60%] invert-[0.1] contrast-[1.1]">
            <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <Marker position={position}>
                    <Popup className="prestige-popup">
                        <div className="p-4 bg-prestige-black text-white font-serif italic">
                            <h4 className="text-gold mb-2 uppercase tracking-widest text-[11px] font-bold">The New York Studio</h4>
                            <p className="text-sm font-medium">One Central Park West, Suite 45A</p>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold z-[1000] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold z-[1000] pointer-events-none" />
        </div>
    );
};

const SectionHeading = ({ subtitle, title }: { subtitle: string, title: string }) => (
  <div className="text-center mb-20">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-medium"
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-serif font-bold text-prestige-cream"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="h-[1px] bg-gold mx-auto mt-8" 
    />
  </div>
);

const Footer = () => (
    <footer className="bg-prestige-black pt-24 pb-12 text-white border-t border-prestige">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                <div className="col-span-1 md:col-span-1">
                    <h2 className="text-3xl font-serif tracking-[0.2em] mb-8 text-gold font-bold">Aurelian</h2>
                    <p className="text-gray-100 text-sm leading-relaxed mb-8 font-medium">
                        The pinnacle of event architecture and luxury lifestyle curation. Setting global benchmarks for excellence since 1994.
                    </p>
                    <div className="flex space-x-4">
                        {[
                            { Icon: Instagram, href: "https://instagram.com/aurelian", label: "Instagram" },
                            { Icon: Twitter, href: "https://twitter.com/aurelian", label: "Twitter" },
                            { Icon: Linkedin, href: "https://linkedin.com/company/aurelian", label: "LinkedIn" }
                        ].map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/60 transition-colors duration-300 relative group overflow-hidden rounded-full"
                                aria-label={label}
                            >
                                <motion.div className="relative z-10">
                                    <Icon size={20} />
                                </motion.div>
                                <div className="absolute inset-0 bg-gold/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                            </motion.a>
                        ))}
                    </div>
                </div>
                
                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-gold">Philosophy</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li className="hover:text-white cursor-pointer underline decoration-transparent hover:decoration-gold transition-all">About the Founder</li>
                        <li className="hover:text-white cursor-pointer underline decoration-transparent hover:decoration-gold transition-all">Creative Process</li>
                        <li className="hover:text-white cursor-pointer underline decoration-transparent hover:decoration-gold transition-all">Partnerships</li>
                        <li className="hover:text-white cursor-pointer underline decoration-transparent hover:decoration-gold transition-all">Careers</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-gold">Office</h4>
                    <ul className="space-y-6 text-sm text-gray-300">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="text-gold shrink-0" />
                            <span>152 West 57th Street, <br />New York, NY 10019</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-gold shrink-0" />
                            <span>+1 (212) 555-0198</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-gold shrink-0" />
                            <span>curator@aurelian.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 text-gold">Newsletter</h4>
                    <p className="text-xs text-gray-300 mb-6 italic">Stay informed about the world of fine events.</p>
                    <div className="flex border-b border-gray-600 pb-4">
                        <input type="email" placeholder="Email Address" className="bg-transparent border-none text-xs w-full focus:outline-none placeholder:text-gray-400" />
                        <ArrowRight size={16} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
                    </div>
                </div>
            </div>

            <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-[0.2em] space-y-4 md:space-y-0">
                <p>&copy; {new Date().getFullYear()} Aurelian Events & Design Group. All Rights Reserved.</p>
                <div className="flex space-x-8">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                </div>
            </div>
        </div>
    </footer>
);

const PageTransition = ({ children }: { children: ReactNode }) => (
    <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 }
        }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className="w-full relative"
    >
        {/* Shutter Overlay Effect */}
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-gold z-[100] origin-top pointer-events-none"
        />
        <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-gold z-[100] origin-bottom pointer-events-none"
        />
        {children}
    </motion.div>
);

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    const featuredLogos = ["VOGUE", "FORBES", "BAZAAR", "BRIDES", "ELITE", "TOWNE & COUNTRY"];

    return (
        <PageTransition>
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000" alt="Luxury Event" className="w-full h-full object-cover scale-110" />
                </motion.div>
                <div className="relative z-20 text-center text-white px-6">
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-xs uppercase tracking-[0.5em] mb-8 font-bold text-gold italic drop-shadow-lg">Est. 1994 &mdash; World Class Celebration Artistry</motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4 }} className="text-6xl md:text-9xl font-serif font-medium mb-12 max-w-5xl leading-[0.9] text-white drop-shadow-2xl">The Art of <br /> <span className="text-gold italic">Pure Emotion</span></motion.h1>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <Link to="/gallery" className="group flex items-center bg-white text-prestige-black px-12 py-6 text-[11px] uppercase tracking-[0.4em] font-black transition-all hover:bg-gold hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <span>The Collection</span>
                            <div className="ml-6 overflow-hidden w-0 group-hover:w-4 transition-all duration-500">
                                <ArrowRight size={14} />
                            </div>
                        </Link>
                        <Link to="/contact" className="text-white text-[11px] uppercase tracking-[0.4em] font-black border-b-2 border-gold/60 pb-2 hover:text-gold hover:border-gold transition-all duration-500 bg-black/20 px-4 backdrop-blur-sm">
                           Private Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Status & Milestones */}
            <div className="py-24 border-y border-gold/10 bg-prestige-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {[
                        { v: "30+", l: "Years of Heritage" },
                        { v: "1.2k", l: "Elite Projects" },
                        { v: "48", l: "Nations Transformed" },
                        { v: "100%", l: "Client Discretion" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <h4 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4 group-hover:text-gold transition-colors duration-700 italic">{stat.v}</h4>
                            <div className="w-8 h-[2px] bg-gold mx-auto mb-4 group-hover:w-16 transition-all duration-700" />
                            <p className="text-[11px] uppercase tracking-[0.5em] text-gray-200 font-black group-hover:text-white transition-colors duration-700">{stat.l}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Press Marquee */}
            <div className="bg-prestige-dark py-12 border-y border-gold/10 overflow-hidden">
                <div className="flex animate-scroll whitespace-nowrap">
                   {[...featuredLogos, ...featuredLogos].map((logo, i) => (
                       <span key={i} className="text-gold/20 text-4xl font-serif italic mx-24 tracking-[0.2em]">{logo}</span>
                   ))}
                </div>
            </div>

            {/* The Aurelian Philosophy Overview */}
            <section className="py-48 bg-prestige-black relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <SectionHeading subtitle="Our Philosophy" title="Architecting Emotion" />
                    <p className="text-prestige-cream leading-relaxed text-xl font-medium italic mb-24 mx-auto max-w-3xl drop-shadow-sm">
                        "Luxury is not about excess. It's about the precision of memory, the weight of a moment, and the invisible thread that connects every guest to the experience."
                    </p>
                    <div className="grid md:grid-cols-3 gap-16 mb-32">
                        {[
                            { t: "Immersion", d: "We design environments that engage every sense, from the first scent to the final note." },
                            { t: "Heritage", d: "Blending historical grandeur with contemporary innovation to create timeless legacies." },
                            { t: "Discretion", d: "Serving the world's most prominent figures with absolute privacy and professional grace." }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                                <h4 className="text-gold text-xs uppercase tracking-[0.3em] font-black mb-4">{item.t}</h4>
                                <p className="text-prestige-cream text-sm font-medium leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="relative max-w-4xl mx-auto">
                         <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full" />
                         <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" alt="Gala" className="relative z-10 border border-gold/20 shadow-2xl w-full" />
                         <div className="absolute -bottom-16 -right-16 text-[180px] font-serif italic text-gold/5 select-none z-0">Aurelian</div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-48 bg-prestige-dark border-t border-prestige">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-32">
                        <SectionHeading subtitle="The Method" title="The Creative Journey" />
                        <p className="text-prestige-cream/80 text-lg font-light italic max-w-2xl mx-auto mt-8 border-l border-r border-gold/20 px-12">
                            "Every masterpiece begins with a conversation. We listen for the unsaid, then build it into reality."
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Unearthing the core DNA of your vision through deep consultation. We identify the silent desires that define true luxury." },
                            { step: "02", title: "Curation", desc: "Sourcing world-class artisans and materials that defy the ordinary. From rare florals to bespoke textiles crafted in Italy." },
                            { step: "03", title: "Composition", desc: "Architecting the spatial flow and emotional rhythm of the event. Every second is designed to leave a permanent mark." },
                            { step: "04", title: "Ascension", desc: "Flawless execution where every detail reaches its highest potential. The moment where vision becomes an immortal memory." }
                        ].map((s, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-prestige-black/40 p-10 border border-gold/5 relative group transition-all duration-700 hover:border-gold/20 flex flex-col h-full"
                            >
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                
                                <div className="flex items-baseline justify-between mb-10">
                                    <span className="text-4xl font-serif text-gold/10 group-hover:text-gold/30 transition-colors duration-500">{s.step}</span>
                                    <div className="w-8 h-[1px] bg-gold/20" />
                                </div>
                                
                                <h3 className="text-2xl font-serif text-white mb-6 italic font-bold">{s.title}</h3>
                                <p className="text-sm text-prestige-cream font-medium leading-relaxed mb-8 flex-grow">
                                    {s.desc}
                                </p>
                                
                                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/40 group-hover:text-gold transition-colors duration-500 font-semibold">
                                    Phase {s.step}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signature Venues Section */}
            <section className="py-48 bg-prestige-dark border-y border-prestige">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading subtitle="The Settings" title="Signature Venues" />
                    <div className="grid md:grid-cols-3 gap-16 mt-24">
                        {[
                            { name: "Villa d'Este", loc: "Lake Como", desc: "A 16th-century masterpiece where we've hosted some of the world's most intimate royal celebrations." },
                            { name: "Aman Tokyo", loc: "Japan", desc: "Minimalist grandeur meets urban sophistication. Our playground for avant-garde corporate summits." },
                            { name: "Palais Garnier", loc: "Paris", desc: "The ultimate stage for grand galas, where history and modern artistry collide under the crystal." }
                        ].map((v, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/5] bg-prestige-black mb-10 overflow-hidden relative border border-gold/10">
                                    <div className="absolute inset-0 bg-prestige-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                    <img 
                                        src={`https://images.unsplash.com/photo-${i === 0 ? '1533174072545-7a4b6ad7a6c3' : i === 1 ? '1540959733332-eab4deabeeaf' : '1504280390367-361c6d9f38f4'}?auto=format&fit=crop&q=80&w=800`} 
                                        alt={v.name} 
                                        className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out" 
                                    />
                                    <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-prestige-black/90 to-transparent w-full">
                                        <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">Inquire for bookings</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">{v.loc}</span>
                                    <h3 className="text-2xl font-serif text-white italic group-hover:text-gold transition-colors duration-500 font-bold">{v.name}</h3>
                                    <div className="w-12 h-[2px] bg-gold group-hover:w-full transition-all duration-1000" />
                                    <p className="text-sm text-prestige-cream font-medium leading-relaxed">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials section */}
            <section className="py-48 bg-prestige-black">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <SectionHeading subtitle="Curated Echoes" title="Client Voices" />
                    <div className="mt-32 relative">
                        <span className="text-[200px] font-serif italic text-gold/5 absolute -top-32 left-1/2 -translate-x-1/2 select-none">"</span>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <p className="text-2xl md:text-4xl font-serif text-white italic font-bold leading-relaxed mb-12 drop-shadow-lg">
                                "The level of detail was not just impressive; it was spiritual. Aurelian didn't just plan our wedding; they built a temporary universe for our love to inhabit."
                            </p>
                            <p className="text-gold text-xs uppercase tracking-[0.5em] font-black">&mdash; H.R.H. Princess of [Redacted]</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Presence Section */}
            <section className="py-32 bg-prestige-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none grayscale">
                    <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000" alt="World Map" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-8 font-bold">Global Reach</p>
                    <h2 className="text-4xl md:text-6xl font-serif font-light text-white mb-16 italic">Studios in the World's Capitals</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {["New York", "London", "Paris", "Dubai"].map((city) => (
                            <motion.div key={city} whileHover={{ scale: 1.05 }} className="border-b border-gold/20 pb-8">
                                <h4 className="text-xl font-serif text-white italic font-bold">{city}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-gold font-bold mt-2">Boutique & Production Studio</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

const AboutPage = () => (
    <PageTransition>
        <div className="pt-48 pb-24 bg-prestige-black min-h-screen relative overflow-hidden">
            {/* Global Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-24 items-center mb-48">
                <div className="relative">
                    <div className="aspect-[4/5] bg-prestige-dark overflow-hidden border border-gold/10 relative shadow-2xl">
                       <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" alt="The Visionary" className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000" />
                    </div>
                    <div className="absolute -top-12 -left-12 w-64 h-64 border-t border-l border-gold/20 -z-10" />
                </div>
                <div className="space-y-12">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-6">Established 1994</p>
                      <h2 className="text-5xl md:text-8xl font-serif font-bold leading-tight text-white mb-8">The Legacy of <br /><span className="italic text-gold">Aurelian</span></h2>
                      <p className="text-xl text-prestige-cream leading-relaxed font-bold mb-12 italic border-l-2 border-gold/40 pl-8 drop-shadow-sm">
                         "We don't create events. We curate significant moments in history for the most discerning individuals on the planet."
                      </p>
                      <p className="text-prestige-cream text-lg font-medium leading-relaxed mb-12">
                         Established in 1994, Aurelian has spent three decades setting the gold standard for luxury event design. From royal weddings in destination castles to high-profile corporate galas in New York, our touch is unmistakable.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gold/10">
                        <div>
                            <h4 className="text-3xl font-serif text-gold mb-1 italic font-bold">30+</h4>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white font-black">Years of Mastery</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-serif text-gold mb-1 italic font-bold">1k+</h4>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white font-black">Global Masterpieces</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values Deep Dive */}
            <div className="mb-48">
                <SectionHeading subtitle="Core Principles" title="The Aesthetic Standard" />
                <div className="grid md:grid-cols-3 gap-16 mt-20">
                    {[
                        { t: "Aesthetic Purity", d: "Every visual element is scrutinized for its contribution to the overall narrative harmoniously.", icon: "✧" },
                        { t: "Master Craftsmanship", d: "Working exclusively with artisans who have spent decades perfecting their specific medium.", icon: "✥" },
                        { t: "Strategic Vision", d: "Beyond beauty, we focus on the logistical flow and guest psychology to ensure perfection.", icon: "✦" }
                    ].map((v, i) => (
                        <div key={i} className="text-center space-y-6 group">
                            <span className="text-4xl text-gold/30 group-hover:text-gold transition-colors block">{v.icon}</span>
                            <h4 className="text-xl font-serif text-gold italic font-bold">{v.t}</h4>
                            <p className="text-sm text-prestige-cream font-medium leading-loose">{v.d}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Leadership Section */}
            <div className="py-32 border-y border-gold/10">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <SectionHeading subtitle="Leadership" title="The Curator Council" />
                        <p className="text-prestige-cream/80 text-lg font-light leading-relaxed italic border-l-2 border-gold/30 pl-8">
                            "Our strength lies in our plurality. We aren't just event planners; we are architects, fashion historians, and master chefs of experience."
                        </p>
                        <p className="text-prestige-cream/70 font-light leading-relaxed">
                            Aurelian is supported by a worldwide network of over 150 project managers, creative directors, and master technicians. Our leadership team brings collective expertise from interior design, film production, and high-fashion ateliers. Each project is assigned a designated Curator who remains the single point of contact from inception to delivery.
                        </p>
                        <ul className="space-y-6 text-gold text-[11px] font-bold tracking-[0.3em] uppercase">
                            <li className="flex items-center space-x-6"><div className="w-12 h-[1px] bg-gold" /> <span>Avant-Garde Design Studios</span></li>
                            <li className="flex items-center space-x-6"><div className="w-12 h-[1px] bg-gold" /> <span>Heritage & Protocol Division</span></li>
                            <li className="flex items-center space-x-6"><div className="w-12 h-[1px] bg-gold" /> <span>Advanced Technical Production</span></li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                         <div className="aspect-square bg-prestige-dark border border-gold/10 overflow-hidden group shadow-2xl relative">
                             <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700" alt="Team" />
                             <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors" />
                         </div>
                         <div className="aspect-square bg-prestige-dark border border-gold/10 overflow-hidden group mt-12 shadow-2xl relative">
                             <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700" alt="Team" />
                             <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors" />
                         </div>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="py-48">
                <SectionHeading subtitle="The Architects" title="Our Team" />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                    {[
                        { 
                            name: "Aurelia Vance", 
                            role: "Founder & Creative Director", 
                            bio: "A visionary with three decades of experience in high-luxury spatial design and global event architecture.",
                            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                        },
                        { 
                            name: "Julian Thorne", 
                            role: "Lead Architect", 
                            bio: "Specializing in the transformation of historical venues into contemporary masterpieces through structural innovation.",
                            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
                        },
                        { 
                            name: "Elena Rossi", 
                            role: "Head of Floral Artistry", 
                            bio: "Master of sensory immersion, using rare botanicals to create living sculptures that define the emotional atmosphere.",
                            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
                        },
                        { 
                            name: "Marcus Chen", 
                            role: "Global Logistics Director", 
                            bio: "The master behind the curtain, ensuring every element—no matter how rare—arrives on time across all continents.",
                            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
                        }
                    ].map((member, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <div className="aspect-[3/4] bg-prestige-dark overflow-hidden border border-gold/10 mb-8 relative">
                                <img 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-prestige-black via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{member.role}</h4>
                                <h3 className="text-2xl font-serif text-white italic">{member.name}</h3>
                                <div className="w-8 h-[1px] bg-gold/30 group-hover:w-full transition-all duration-1000" />
                                <p className="text-sm text-prestige-cream/60 font-light leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global Clientele Section */}
            <div className="py-48 bg-prestige-black text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-8 font-bold">The Aurelian Client</p>
                    <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight mb-12">Discretion is Our <span className="text-gold">Greatest Asset</span></h2>
                    <p className="text-prestige-cream/70 font-light leading-loose text-sm mb-16">
                        We serve a diverse yet singular clientele—Heads of State, Nobel Laureates, Creative Icons, and Industry Titans. While our work is immortalized in memory, our client identities remain strictly confidential. Every agreement is bound by an uncompromising non-disclosure framework, ensuring that your private celebrations remain truly private.
                    </p>
                    <div className="inline-block border border-gold/20 p-8 hover:border-gold transition-all">
                        <Link to="/contact" className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold">Inquire Securely</Link>
                    </div>
                </div>
            </div>

            {/* The Aurelian Manifesto */}
            <div className="mt-64 bg-prestige-dark p-24 border border-gold/10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-12 font-bold">The Manifesto</p>
                    <h2 className="text-4xl md:text-7xl font-serif text-white italic leading-tight mb-16">Design as a <br /> <span className="text-gold">Sacred Act</span></h2>
                    <div className="grid md:grid-cols-2 gap-16 text-left">
                        <div className="space-y-8">
                            <p className="text-prestige-cream/80 text-lg font-light leading-relaxed italic">
                                We believe that true luxury is found in the pauses, the silences, and the invisible threads that weave an event together. 
                            </p>
                            <p className="text-prestige-cream/60 text-sm font-light leading-relaxed">
                                Our mission is to protect the sanctity of the moment. In an age of digital noise, we create physical realities that demand full presence. We do not design for the camera; we design for the soul.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <p className="text-prestige-cream/60 text-sm font-light leading-relaxed">
                                Every Aurelian project is a rebellion against the temporary. While the event lasts a single night, its architectural precision ensures it lives forever in the collective memory of those who were present.
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-gold/20">
                                {["Quiet Grandeur", "Obsessive Detail", "Ethical Luxury", "Cultural Preservation"].map((m, i) => (
                                    <li key={i} className="flex items-center space-x-4">
                                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                                        <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</PageTransition>
);

const GalleryPage = () => {
    const categories = ["All", "Weddings", "Corporate", "Private"];
    const [activeTab, setActiveTab] = useState("All");

    const images = [
        { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", title: "Royal Gala", type: "Corporate", size: "md:col-span-2 aspect-video" },
        { url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=800", title: "Eternal Vows", type: "Weddings", size: "md:col-span-1 aspect-square" },
        { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", title: "City Lights", type: "Private", size: "md:col-span-1 aspect-square" },
        { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", title: "Noir Soirée", type: "Private", size: "md:col-span-2 aspect-video" },
        { url: "https://images.unsplash.com/photo-1464366420604-129323395c41?auto=format&fit=crop&q=80&w=800", title: "Midnight Garden", type: "Weddings", size: "md:col-span-1 aspect-square" },
        { url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=800", title: "Celestial Dining", type: "Corporate", size: "md:col-span-2 aspect-video" },
        { url: "https://images.unsplash.com/photo-1520854221256-17ec23f3743a?auto=format&fit=crop&q=80&w=800", title: "Velvet Nights", type: "Private", size: "md:col-span-1 aspect-square" },
        { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", title: "The Atrium", type: "Weddings", size: "md:col-span-1 aspect-square" },
        { url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800", title: "Tech Summit", type: "Corporate", size: "md:col-span-1 aspect-square" },
    ];

    const filteredImages = activeTab === "All" ? images : images.filter(img => img.type === activeTab);

    return (
        <PageTransition>
            <div className="pt-48 pb-24 bg-prestige-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading subtitle="The Masterpieces" title="The Collection" />
                
                <p className="text-prestige-cream/80 text-lg font-light italic max-w-3xl mb-24 border-l-2 border-gold/30 pl-12 leading-relaxed">
                    Our digital archive represents a fraction of our commissions. Out of respect for our clients' privacy, many of our most significant works are not publicly showcased. The following collection demonstrates our range across spatial architecture, set design, and emotional choreography.
                </p>

                <div className="flex justify-center flex-wrap gap-8 mb-20">
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`text-[10px] uppercase tracking-[0.4em] transition-all pb-4 border-b-2 font-bold ${activeTab === cat ? 'border-gold text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img, idx) => (
                            <motion.div 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                key={img.title} 
                                className={`relative group overflow-hidden ${img.size} cursor-pointer border border-gold/10 shadow-2xl`}
                            >
                                <img src={img.url} alt={img.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" />
                                <div className="absolute inset-0 bg-prestige-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center p-12">
                                    <div className="text-center text-prestige-cream transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                        <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4">{img.type}</p>
                                        <h3 className="text-3xl font-serif italic mb-6">{img.title}</h3>
                                        <div className="h-[1px] w-12 bg-gold mx-auto" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                <div className="mt-32 text-center">
                    <p className="text-prestige-cream/60 text-sm font-light italic max-w-2xl mx-auto border-t border-gold/10 pt-12">
                        "Each architectural choice made within these spaces is a reflection of a specific emotional beat. We do not repeat ourselves; we redefine excellence for every client."
                    </p>
                </div>
                
                {/* Bespoke Commissions Feature */}
                <div className="mt-48 grid md:grid-cols-2 gap-24 items-center bg-prestige-black p-12 md:p-24 border border-gold/10">
                    <div>
                        <SectionHeading subtitle="Beyond the Frame" title="Bespoke Commissions" />
                        <p className="text-prestige-cream/80 text-lg font-light leading-relaxed mb-8 italic">
                            For those who seek the truly unprecedented.
                        </p>
                        <p className="text-prestige-cream/60 text-sm font-light leading-relaxed mb-12">
                            Many of our most ambitious projects involve complete physical transformations of landscapes, the construction of temporary glass pavilions in remote deserts, or the total takeover of historical monuments. We specialize in the impossible.
                        </p>
                        <div className="space-y-6">
                            {[
                                { t: "Island Private Takeover", d: "Complete ecosystem design for multi-day private celebrations." },
                                { t: "Heritage Reimagined", d: "Sensitive integration of modern technology into ancient sites." },
                                { t: "Cinematic Sets", d: "Building immersive environments that blur the line between reality and film." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <div className="w-1 h-1 bg-gold rounded-full" />
                                    <h5 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{item.t}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square">
                        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" alt="Bespoke" className="w-full h-full object-cover grayscale brightness-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gold text-xs uppercase tracking-[1em] font-bold border border-gold/40 p-6 backdrop-blur-sm">Commission Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageTransition>
);
};

const ImageModal = ({ isOpen, onClose, imageUrl }: { isOpen: boolean, onClose: () => void, imageUrl: string }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] bg-prestige-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative max-w-7xl w-full h-full flex items-center justify-center px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={imageUrl} 
                            alt="Full view" 
                            className="max-w-full max-h-full object-contain shadow-2xl border border-gold/20 mr-auto ml-auto"
                            referrerPolicy="no-referrer"
                        />
                        <button 
                            onClick={onClose}
                            className="absolute top-0 right-0 p-4 text-prestige-cream/40 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ServiceImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const next = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full group/carousel overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsModalOpen(true);
                    }}
                    className="w-full h-full object-cover cursor-zoom-in"
                    referrerPolicy="no-referrer"
                />
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-500 z-20">
                <button 
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-prestige-black/40 border border-gold/20 flex items-center justify-center text-white hover:bg-gold hover:text-prestige-black transition-all"
                >
                    <ArrowLeft size={16} />
                </button>
                <button 
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-prestige-black/40 border border-gold/20 flex items-center justify-center text-white hover:bg-gold hover:text-prestige-black transition-all"
                >
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-[1px] transition-all duration-500 ${i === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`}
                    />
                ))}
            </div>

            <ImageModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                imageUrl={images[currentIndex]} 
            />
        </div>
    );
};

const ServiceCard = ({ 
    service, 
    idx 
}: { 
    service: any; 
    idx: number;
    key?: number | string;
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="relative z-10 h-full flex flex-col bg-prestige-black border border-gold/10 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden group"
        >
            <div className="aspect-[4/3] relative overflow-hidden">
                <ServiceImageCarousel images={service.images} />
            </div>
            
            <div className="p-10 flex-grow flex flex-col relative">
                <div className="absolute -right-4 -bottom-4 text-7xl font-serif italic text-gold/5 opacity-20 select-none group-hover:opacity-40 transition-opacity">0{idx + 1}</div>
                <span className="text-[10px] text-gold/50 mb-6 block font-mono tracking-widest font-bold">SERVICE 0{idx + 1}</span>
                <Link to={`/services/${service.slug}`}>
                    <h3 className="text-xl font-serif mb-4 text-white hover:text-gold transition-colors italic">{service.name}</h3>
                </Link>
                <p className="text-xs text-prestige-cream/60 leading-relaxed font-light mb-8 line-clamp-3">
                    {service.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-gold/5 flex justify-between items-center">
                    <Link 
                        to={`/services/${service.slug}`}
                        className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold hover:text-white transition-colors flex items-center space-x-2"
                    >
                        <span>View Details</span>
                        <ArrowRight size={12} />
                    </Link>
                    <div className="flex space-x-4">
                        <span className="text-[8px] text-prestige-cream/30 uppercase tracking-widest">Aurelian Selection</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ServicesPage = () => (
    <PageTransition>
        <div className="pt-48 pb-24 bg-prestige-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="Architectural Precision" title="The Aurelian Offering" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
                {SERVICES_DATA.map((service, idx) => (
                    <ServiceCard key={idx} service={service} idx={idx} />
                ))}
            </div>

            {/* Exclusive FAQ Section */}
            <div className="mt-48 max-w-4xl mx-auto">
                 <SectionHeading subtitle="Inquiry Details" title="Common Considerations" />
                 <div className="space-y-12 mt-20">
                    {[
                        { q: "What is your typical lead time?", a: "To ensure Aurelian's standard of excellence, we recommend 12-18 months of planning. However, we have special task forces capable of ultra-luxury 'Pop-Up' events in as little as 3 months for existing clients." },
                        { q: "Do you travel globally?", a: "90% of our portfolio consists of international destinations. We maintain logistics hubs in Europe, Asia, and the Middle East, allowing us to deploy anywhere on earth within 72 hours." },
                        { q: "What is the primary aesthetic?", a: "While we adapt to every vision, our house style is rooted in 'Silent Grandeur'—high-impact design that feels effortless and integrated. We focus on materials that age beautifully and lighting that transforms the spirit." },
                        { q: "How do you handle privacy?", a: "Security and confidentiality are paramount. All vendors sign comprehensive NDAs, and our digital communications are handled via encrypted private servers for absolute peace of mind." }
                    ].map((faq, i) => (
                        <div key={i} className="border-b border-gold/10 pb-8 hover:border-gold/30 transition-colors">
                            <h4 className="text-gold font-serif italic text-xl mb-4">{faq.q}</h4>
                            <p className="text-prestige-cream/80 text-sm font-light leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Engagement Models Section */}
            <div className="mt-64 text-center border-t border-gold/10 pt-32">
                <SectionHeading subtitle="Our Levels of Engagement" title="Service Tiers" />
                <div className="grid md:grid-cols-3 gap-12 mt-24 text-left">
                    {[
                        { t: "TIER I: DESIGN ONLY", d: "A comprehensive aesthetic blueprint including spatial layouts, mood boards, and vendor recommendations. Ideal for clients with existing production teams." },
                        { t: "TIER II: FULL MANAGEMENT", d: "End-to-end orchestration. We manage every contract, timeline, and artistic detail. Includes complete on-site execution and staffing." },
                        { t: "TIER III: BESPOKE COMMISSION", d: "The pinnacle of our offering. Includes dedicated concierge, custom furniture builds from Italy, and global travel logistics for your entire guest list." }
                    ].map((tier, i) => (
                        <div key={i} className="p-12 border border-gold/10 bg-prestige-dark/20 hover:border-gold transition-colors group">
                            <h4 className="text-gold text-xs tracking-widest font-bold mb-6">{tier.t}</h4>
                            <p className="text-prestige-cream/70 text-sm font-light leading-loose group-hover:text-prestige-cream transition-colors">{tier.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</PageTransition>
);

const ContactPage = () => (
    <PageTransition>
        <div className="pt-32 pb-16 bg-prestige-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 font-semibold">Contact Us</p>
                <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-white leading-none drop-shadow-2xl">Let’s Orchestrate <br /><span className="italic text-gold">Excellence</span></h2>
                
                <div className="space-y-12 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-8">
                            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0">
                                <MapPin className="text-gold" size={18} />
                            </div>
                            <div>
                              <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-black mb-2">The New York Studio</p>
                              <p className="text-prestige-cream leading-relaxed text-sm font-bold">One Central Park West, Suite 45A <br />New York, NY 10023</p>
                            </div>
                        </div>
                        <InteractiveMap />
                    </div>
                    <div className="flex items-start space-x-8">
                        <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0">
                            <Mail className="text-gold" size={18} />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-black mb-2">Direct Inquiry</p>
                          <p className="text-prestige-cream text-base font-black italic underline decoration-gold underline-offset-8">concierge@aurelian.com</p>
                          <p className="text-prestige-cream/60 text-[10px] mt-3 font-mono font-bold">Response Protocol: 24h Global Turnaround</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-10 border-t border-gold/10">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-6 italic">Representative Offices</p>
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h5 className="text-white text-xs font-serif italic mb-2">London Office</h5>
                            <p className="text-[10px] text-gray-400 tracking-wider">Mayfair District, W1J</p>
                        </div>
                        <div>
                            <h5 className="text-white text-xs font-serif italic mb-2">Dubai Studio</h5>
                            <p className="text-[10px] text-gray-400 tracking-wider">Downtown Emirates Tower</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-prestige-dark p-10 md:p-16 border border-gold/10 relative shadow-2xl">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold" />
                
                <h3 className="text-2xl font-serif text-white italic mb-10 font-bold">Begin Your Journey</h3>
                <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-black">Full Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-gold py-3 focus:outline-none focus:border-white transition-colors text-sm text-white italic font-bold" placeholder="Name" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-black">Preferred City</label>
                            <input type="text" className="w-full bg-transparent border-b border-gold py-3 focus:outline-none focus:border-white transition-colors text-sm text-white italic font-bold" placeholder="e.g. Paris" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-black">Projected Date</label>
                        <input type="date" className="w-full bg-transparent border-b border-gold py-3 focus:outline-none focus:border-white transition-colors text-sm text-white font-bold italic" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-black">Describe Your Vision</label>
                        <textarea rows={4} className="w-full bg-transparent border-b border-gold py-3 focus:outline-none focus:border-white transition-colors text-sm text-white italic font-bold resize-none" placeholder="Write your message..." />
                    </div>
                    <button className="w-full bg-gold text-prestige-black py-6 text-xs uppercase tracking-[0.5em] font-black hover:bg-white transition-all shadow-xl hover:shadow-gold/20">
                      Send Secure Message
                    </button>
                    <div className="mt-10 text-center">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3 italic">Secure Inbound Relay</p>
                        <p className="text-prestige-cream/40 text-[10px] font-light leading-relaxed">
                            Aurelian utilizes military-grade encryption for all client communications. Your data is never stored on third-party cloud infrastructure. A senior partner will review your inquiry and respond within one business cycle.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</PageTransition>
);

export default function App() {
  return (
    <Router>
      <div className="relative bg-prestige-black selection:bg-gold/40 min-h-screen font-body overflow-x-hidden">
        <Navbar />
        
        {/* Persistent Decorative Element From Theme */}
        <div className="fixed left-0 top-0 h-full w-24 border-r border-gold/10 z-[40] hidden lg:flex flex-col justify-center items-center pointer-events-none">
            <span className="rotate-180 [writing-mode:vertical-rl] text-[8px] uppercase tracking-[0.5em] text-gold/50 italic font-bold">
              Luxury Reimagined &bull; Aurelian Design Group &bull; Est. 1994
            </span>
        </div>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<SingleServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        
        {/* Bottom Left Frame Corner Asset */}
        <div className="fixed bottom-0 left-0 w-32 h-32 border-l border-b border-gold/20 m-4 pointer-events-none hidden lg:block z-[40]" />
      </div>
    </Router>
  );
}
