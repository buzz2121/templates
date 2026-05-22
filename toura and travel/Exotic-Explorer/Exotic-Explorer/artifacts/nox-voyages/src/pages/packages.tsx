import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { Clock, ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";

const PACKAGES = [
  {
    id: 1,
    name: "The Aegean Oracle",
    duration: "10 Days",
    price: "$18,500",
    pricePerPerson: "per person",
    category: "Cultural",
    region: "Europe",
    image: "/santorini.png",
    tagline: "Where ancient civilizations meet modern luxury.",
    desc: "A decade-spanning journey through Greece's most storied islands. Begin in Athens with a private museum consultation before flying to Santorini for five nights in a cliff-edge estate with personal chef and sommelier. A chartered catamaran whisks you through the Cyclades — Mykonos, Naxos, Milos — before a final night in a Paros seafront villa with a curated fire dinner on the terrace.",
    highlights: [
      "Private yacht charter through the Cyclades",
      "Exclusive after-hours access to the Acropolis Museum",
      "Personal chef and private sommelier for all meals",
      "Cliff-edge suite at a design estate, Santorini",
      "Helicopter transfer from Athens to Mykonos"
    ],
    includes: ["Private aviation", "All accommodation", "All meals & beverages", "Personal guide", "VIP transfers"]
  },
  {
    id: 2,
    name: "Atoll Seclusion",
    duration: "7 Days",
    price: "$24,000",
    pricePerPerson: "per couple",
    category: "Retreat",
    region: "Asia",
    image: "/maldives.png",
    tagline: "An entire island, reserved for you alone.",
    desc: "The Maldives stripped of its crowds. NOX secures an entire private atoll — one that does not appear on any public booking platform — for your party exclusively. Your staff of eight includes a private marine biologist, a Maldivian chef specializing in reef-to-table cuisine, and a personal dive master who guides you through bioluminescent night dives and whale shark encounters.",
    highlights: [
      "Entire private island reservation (no other guests)",
      "Personal marine biologist and dive master",
      "Reef-to-table dining by a Maldivian master chef",
      "Bioluminescent night dive experience",
      "Seaplane and speedboat transfers included"
    ],
    includes: ["Seaplane transfers", "Full island buyout", "All meals & premium bar", "Watersports equipment", "Snorkeling & dive gear"]
  },
  {
    id: 3,
    name: "Patagonian Edge",
    duration: "14 Days",
    price: "$32,000",
    pricePerPerson: "per person",
    category: "Adventure",
    region: "Americas",
    image: "/patagonia.png",
    tagline: "At the ends of the earth, where only the prepared venture.",
    desc: "Fourteen days at the bottom of the world, where Torres del Paine rises like cathedrals above glacial lakes, and the Milky Way is so vivid it casts shadows. NOX arranges helicopter access to unmarked glaciers, private estancia dinners with Patagonian sheep farmers, guided hikes led by ex-mountaineers, and nights in a luxury ecolodge where the wind speaks through steel and glass.",
    highlights: [
      "Helicopter access to two unmarked glaciers",
      "Private estancia asado dinner under the Milky Way",
      "Ex-mountaineer led trekking through Torres del Paine",
      "Puma tracking with a resident wildlife biologist",
      "Zodiac boat exploration of the Grey Glacier lagoon"
    ],
    includes: ["Private charter flights", "Luxury ecolodge stays", "All guided activities", "All meals", "Emergency satellite comms"]
  },
  {
    id: 4,
    name: "Atlas Nights",
    duration: "8 Days",
    price: "$15,000",
    pricePerPerson: "per couple",
    category: "Cultural",
    region: "Africa",
    image: "/morocco.png",
    tagline: "Eight thousand stars and one extraordinary camp.",
    desc: "Morocco is three countries in one: a medieval city of ancient learning, a mountain kingdom draped in cedar forests, and an ocean of silence and sand. NOX traces all three. Private riad in the Fes medina, two nights in a mountain retreat in the Atlas, and three nights in a bespoke luxury desert camp in the Sahara — with a personal astronomer and telescope under skies untouched by light pollution.",
    highlights: [
      "Private riad takeover in the Fes medina, 12th-century heritage property",
      "Bespoke Sahara camp with personal astronomer",
      "Hand-picked Berber guides across all terrain",
      "Private cooking master class in a Marrakech palace",
      "Sunset camel caravan into the dunes"
    ],
    includes: ["Private vehicle and guide", "All accommodation", "Curated meals", "Camel trek", "Astronomy session"]
  },
  {
    id: 5,
    name: "Kyoto Ancestry",
    duration: "9 Days",
    price: "$28,000",
    pricePerPerson: "per person",
    category: "Cultural",
    region: "Asia",
    image: "/kyoto.png",
    tagline: "Seventeen centuries of culture, opened exclusively for you.",
    desc: "Japan's cultural capital has a public face and a private one. NOX opens the private one. Your nine days include a dawn ceremony at a Zen temple normally closed to outsiders, a private audience with a living National Treasure ceramicist, kaiseki dinner prepared by a three-Michelin-starred chef in a 300-year-old machiya, a personal geisha evening in a Gion ochaya, and a night tea ceremony in a garden illuminated only by lanterns.",
    highlights: [
      "Private dawn Zen ceremony at a restricted Kyoto temple",
      "Audience with a Living National Treasure artisan",
      "Three-Michelin-star kaiseki in a 300-year machiya",
      "Exclusive geisha evening in a private Gion ochaya",
      "Bullet train arrangement in private Green Car"
    ],
    includes: ["Business class flights", "Ryokan and boutique hotel stays", "All curated meals", "Cultural access fees", "Dedicated interpreter"]
  },
  {
    id: 6,
    name: "Nordic Silence",
    duration: "6 Days",
    price: "$19,000",
    pricePerPerson: "per couple",
    category: "Retreat",
    region: "Europe",
    image: "/iceland.png",
    tagline: "The Northern Lights, a glass cabin, and absolute quiet.",
    desc: "Iceland is geological theater. NOX eliminates the audience. A private glass-domed cabin on a lava plateau, positioned away from all roads and neighbors, where the aurora borealis performs nightly above your heated bed. Heated outdoor pool, private glacier hiking with a glaciologist, a helicopter flight over two active volcanoes, and an evening of private hot spring access in a location known only to locals.",
    highlights: [
      "Private glass aurora cabin on a lava plateau",
      "Helicopter flight over Fagradalsfjall active volcano",
      "Private glacier hike with certified glaciologist",
      "Secret hot spring evening with local guide",
      "Private natural history museum tour of Reykjavik"
    ],
    includes: ["Private transfers throughout", "Glass cabin accommodation", "All meals", "Two guided excursions", "Aurora alert system"]
  },
  {
    id: 7,
    name: "Bali Sanctum",
    duration: "11 Days",
    price: "$22,000",
    pricePerPerson: "per couple",
    category: "Retreat",
    region: "Asia",
    image: "/bali.png",
    tagline: "A spiritual and sensory immersion in the Island of the Gods.",
    desc: "The Bali known to the world is not the Bali NOX shows you. Begin in a private jungle villa compound above the Ayung River with a personal Balinese healer, yoga master, and chef. Witness a fire ceremony in a village that never hosts visitors. Spend two days at a remote coastal estate in Nusa Penida, where manta rays drift through water so clear it seems like glass. Conclude with a private cremation ceremony attendance — one of the most extraordinary spiritual events on earth.",
    highlights: [
      "Private jungle compound above the Ayung River gorge",
      "Private fire ceremony attendance in a village off-limits to tourists",
      "Manta ray snorkeling at the Manta Point, Nusa Penida",
      "Personal Balinese healer, yoga master, and chef",
      "Sunrise private access to Pura Lempuyang Temple"
    ],
    includes: ["Private villa compound", "All meals by private chef", "All activities", "Spiritual guide", "Airport transfers"]
  },
  {
    id: 8,
    name: "The Grand Amalfi",
    duration: "12 Days",
    price: "$38,000",
    pricePerPerson: "per couple",
    category: "Cultural",
    region: "Europe",
    image: "/amalfi.png",
    tagline: "The Mediterranean's most dramatic coastline, entirely on your terms.",
    desc: "The Amalfi Coast from a hillside estate overlooking Positano, a vintage Riva speedboat docked at your private jetty, a helicopter arrival over Ravello, and evenings in places the Amalfi guidebooks never mention. NOX arranges a private pasta-making class with a third-generation grandmother in Cetara, secret access to the Blue Grotto before sunrise, a dinner inside a private coastal cave, and a day trip to Capri on a charted sailing yacht.",
    highlights: [
      "Private Positano clifftop estate with personal Riva speedboat",
      "Helicopter arrival from Naples over the coastline",
      "Pre-dawn Blue Grotto private access",
      "Dinner in a candlelit sea cave accessible only by boat",
      "Day charter to Capri on a vintage sailing yacht"
    ],
    includes: ["Helicopter transfer", "Villa estate rental", "Private Riva boat", "All curated meals", "Personal concierge"]
  }
];

const CATEGORIES = ["All", "Retreat", "Adventure", "Cultural"];

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? PACKAGES
    : PACKAGES.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-48 pb-24">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-6">Crafted Itineraries</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-8">Tour Packages</h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light text-base md:text-lg lg:text-xl leading-relaxed">
            Architected sequences of time, space, and sensation. Each package is a fully realized journey — not a template, but a declaration of intent.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-2 lg:justify-center overflow-x-auto pb-4 no-scrollbar mb-16">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-1.5 uppercase tracking-widest text-[10px] whitespace-nowrap transition-all duration-300 ${
                activeCategory === c
                  ? "bg-primary text-black font-semibold"
                  : "text-white/35 hover:text-white border border-white/10 hover:border-white/30"
              }`}
              data-testid={`category-${c.toLowerCase()}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="space-y-6">
          {filtered.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-dark border border-white/5 hover:border-primary/30 transition-colors duration-500 overflow-hidden"
              data-testid={`package-card-${pkg.id}`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="w-full lg:w-[340px] h-64 lg:h-auto relative overflow-hidden flex-shrink-0 lg:sticky lg:top-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="glass-dark px-3 py-1 text-xs text-primary uppercase tracking-widest border border-primary/30">
                      {pkg.category}
                    </span>
                  </div>
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-3 h-3 text-primary" />
                        <span className="text-white/40 text-xs uppercase tracking-widest">{pkg.duration}</span>
                        <span className="text-white/20">·</span>
                        <span className="text-white/40 text-xs uppercase tracking-widest">{pkg.region}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-1">{pkg.name}</h3>
                      <p className="text-primary/70 font-light italic text-sm">{pkg.tagline}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="block text-white/30 text-xs uppercase tracking-widest mb-1">Starting From</span>
                      <span className="text-3xl font-serif text-white">{pkg.price}</span>
                      <span className="block text-white/30 text-xs mt-1">{pkg.pricePerPerson}</span>
                    </div>
                  </div>

                  <p className="text-white/55 font-light leading-relaxed mb-6 text-sm">
                    {expanded === pkg.id ? pkg.desc : pkg.desc.substring(0, 220) + "..."}
                  </p>

                  {/* Highlights */}
                  {expanded === pkg.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mb-8 space-y-3"
                    >
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Curated Highlights</p>
                      {pkg.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-start gap-3">
                          <Check className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <span className="text-white/60 text-sm font-light">{h}</span>
                        </div>
                      ))}
                      <div className="pt-6 border-t border-white/10 mt-6">
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Package Includes</p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.includes.map((inc, ii) => (
                            <span key={ii} className="text-xs border border-white/10 text-white/40 px-3 py-1 uppercase tracking-wider">
                              {inc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-white/10 pt-6">
                    <Link
                      href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-black text-xs uppercase tracking-widest hover:bg-white transition-colors duration-500 font-semibold"
                      data-testid={`package-inquire-${pkg.id}`}
                    >
                      Request Details <ArrowRight className="w-3 h-3" />
                    </Link>
                    <button
                      onClick={() => setExpanded(expanded === pkg.id ? null : pkg.id)}
                      className="text-xs uppercase tracking-widest text-white/40 hover:text-primary transition-colors inline-flex items-center gap-2"
                      data-testid={`package-expand-${pkg.id}`}
                    >
                      {expanded === pkg.id ? (
                        <><ChevronUp className="w-3 h-3" /> Hide Details</>
                      ) : (
                        <><ChevronDown className="w-3 h-3" /> View Full Itinerary</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bespoke CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center glass-dark p-16 border-t border-primary/20 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-primary shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Beyond the Catalog</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">None of These Fit Precisely?</h2>
          <p className="text-white/50 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            These packages are illustrative, not exhaustive. Every NOX journey is ultimately bespoke. Tell us what you want and we will architect it from scratch.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 border border-primary text-primary tracking-widest uppercase text-sm hover:bg-primary hover:text-black transition-all duration-500"
            data-testid="bespoke-packages-cta"
          >
            Commission a Custom Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
