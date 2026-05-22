import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, Globe, Shield, Star, Clock, Award, Users, MapPin, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const DESTINATIONS = [
  { name: "Maldives", image: "/maldives.png", tag: "Private Atoll", desc: "Overwater villas on untouched coral atolls. Your own private horizon." },
  { name: "Santorini", image: "/santorini.png", tag: "Cliffside Aegean", desc: "Ancient blue domes above obsidian cliffs, a private yacht anchored below." },
  { name: "Kyoto", image: "/kyoto.png", tag: "Sacred Japan", desc: "Closed-door temples, kaiseki rituals, and ryokan life without compromise." },
  { name: "Patagonia", image: "/patagonia.png", tag: "Edge of Earth", desc: "Glaciers, condors, and absolute silence — accessed by helicopter." },
];

const EXPERIENCES = [
  {
    label: "Luxury Retreats",
    image: "/retreats.png",
    tag: "01",
    desc: "Private islands. Secluded villas. Estates that don't appear on any list — accessible only to those we introduce.",
    details: ["Entire private island buyouts", "Invitation-only estate network", "Staff of 8–20, invisible until needed"],
    price: "From $12,000 / week"
  },
  {
    label: "Adventure",
    image: "/patagonia.png",
    tag: "02",
    desc: "Helicopters into unmarked wilderness. Deep sea. High altitude. Handled with white-glove precision so the edge feels effortless.",
    details: ["Helicopter glacier landings", "Private liveaboard dive expeditions", "Himalayan circuits with Sherpa teams"],
    price: "From $8,500 / experience"
  },
  {
    label: "Cultural Immersion",
    image: "/kyoto.png",
    tag: "03",
    desc: "Closed-door access to the world's most guarded heritage sites and the masters who animate them.",
    details: ["After-hours Acropolis & monument access", "Private Zen temple ceremonies at dawn", "Artisan dynasty ateliers in Florence"],
    price: "From $4,500 / experience"
  },
  {
    label: "Honeymoon",
    image: "/maldives.png",
    tag: "04",
    desc: "Two weeks. One planet. Absolute devotion. Written in bioluminescent seas and the silence of places the world hasn't found yet.",
    details: ["Private island sky lantern ceremonies", "Sea cave candlelit dinners", "Aurora glass cabin nights"],
    price: "From $16,000 / journey"
  },
];

const WHY_ITEMS = [
  {
    icon: Shield,
    title: "Absolute Discretion",
    desc: "Every arrangement is protected by iron-clad NDAs. Our network is invisible to the public by design."
  },
  {
    icon: Globe,
    title: "87 Countries, Zero Compromises",
    desc: "Decades of relationships with local experts, private estate owners, and cultural gatekeepers."
  },
  {
    icon: Clock,
    title: "24/7 Director Access",
    desc: "Your dedicated NOX director is reachable at any hour, in any time zone, for anything."
  },
  {
    icon: Star,
    title: "Unrepeatable Itineraries",
    desc: "Every journey is architected from scratch. No two NOX experiences are ever the same."
  },
  {
    icon: Award,
    title: "43 Industry Awards",
    desc: "Recognized globally as the benchmark for ultra-luxury travel curation since 2006."
  },
  {
    icon: Users,
    title: "Capped Clientele",
    desc: "We accept fewer than 200 new clients per year. Every relationship is intentional."
  },
];

const STATS = [
  { value: "87", label: "Countries" },
  { value: "12,400+", label: "Journeys Crafted" },
  { value: "18", label: "Years of Mastery" },
  { value: "43", label: "Global Awards" },
];

const TESTIMONIALS_PREVIEW = [
  {
    name: "Alexander R.",
    role: "CEO, Atlas Ventures",
    text: "NOX delivered an experience in Patagonia that defied logic. Flawless execution. They have permanently ruined normal travel for me.",
    dest: "Patagonia"
  },
  {
    name: "Elena M.",
    role: "Private Client, Monaco",
    text: "The Maldives estate they secured wasn't listed publicly. The discretion and service quality is entirely unmatched.",
    dest: "Maldives"
  },
  {
    name: "Sophia K.",
    role: "Creative Director, London",
    text: "Kyoto was transcendent. Private temple access and a ryokan master who spent four hours with us — something I could never arrange alone.",
    dest: "Kyoto"
  },
];

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);
  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isLarge;
}

function ExperiencesSection({ isLarge }: { isLarge: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="border-t border-white/5 bg-card">
      {/* Header */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Modes of Travel</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Luxury Experiences</h2>
          <p className="text-white/35 font-light text-sm md:text-base leading-relaxed lg:whitespace-nowrap">
            Four ways to inhabit the world. Each one architected to the highest standard we know — which is the only standard we accept.
          </p>
        </div>
      </div>

      {/* Expanding Accordion Panels */}
      <div
        className="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full"
        onMouseLeave={() => setActive(null)}
      >
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.label}
            className="relative overflow-hidden cursor-pointer flex-shrink-0 w-full lg:w-auto min-h-[120px] lg:h-full"
            initial={false}
            animate={{ 
              flex: isLarge ? (active === i ? 3 : active === null ? 1 : 0.4) : 1,
              height: isLarge ? "600px" : (active === i ? "400px" : "120px"),
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={() => setActive(i)}
            data-testid={`experience-panel-${i}`}
          >
            {/* Background image */}
            <motion.img
              src={exp.image}
              alt={exp.label}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: active === i ? 1.05 : 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Dark overlay — lighter when active */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: active === i
                  ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)"
                  : "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)"
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Gold top accent line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left"
              animate={{ scaleX: active === i ? 1 : 0, opacity: active === i ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ boxShadow: "0 0 12px rgba(212,175,55,0.8)" }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">

              {/* Tag number — shrinks when siblings are active */}
              <motion.span
                className="font-serif text-primary/50 font-bold block mb-3"
                animate={{ fontSize: active === i ? "1rem" : "3rem", opacity: active === i ? 0.6 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {exp.tag}
              </motion.span>

              {/* Title — vertical when panel is collapsed */}
              <div className="relative">
                <motion.h3
                  className="font-serif text-white leading-tight whitespace-nowrap overflow-hidden"
                  animate={{
                    fontSize: active === i ? "2.4rem" : "1.1rem",
                    color: active === i ? "#D4AF37" : "#ffffff",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {exp.label}
                </motion.h3>
              </div>

              {/* Expanded content */}
              <motion.div
                className="overflow-hidden"
                animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="text-white/65 font-light leading-relaxed text-sm mt-5 mb-5 max-w-sm">
                  {exp.desc}
                </p>

                {/* Bullet details */}
                <div className="space-y-2 mb-7">
                  {exp.details.map((d, di) => (
                    <div key={di} className="flex items-center gap-3">
                      <div className="w-4 h-[1px] bg-primary flex-shrink-0" />
                      <span className="text-white/50 text-xs font-light">{d}</span>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-primary text-xs uppercase tracking-widest">{exp.price}</span>
                  <Link
                    href="/experiences"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-white/30 text-white px-5 py-2 hover:border-primary hover:text-primary transition-all duration-300"
                    data-testid={`experience-link-${i}`}
                  >
                    Explore <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const isLarge = useIsLargeScreen();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground" ref={containerRef}>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />
          <img src="/hero.png" alt="Cinematic luxury travel" className="w-full h-full object-cover object-center scale-110" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-primary font-serif tracking-[0.3em] uppercase text-sm mb-6"
          >
            Nox Voyages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[10rem] font-serif font-bold text-white mb-6 leading-none tracking-tight drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          >
            Journey Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary">
              Extraordinary
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white/60 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Curated escapes for those who have seen everything — and still hunger for more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/destinations"
              className="inline-block px-10 py-4 bg-primary text-black font-semibold tracking-widest uppercase text-sm hover:bg-white transition-all duration-500 glow-gold"
              data-testid="hero-cta-destinations"
            >
              Explore Destinations
            </Link>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border border-white/30 text-white tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-all duration-500"
              data-testid="hero-cta-plan"
            >
              Plan Your Journey
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ── BRAND MANIFESTO ── */}
      <section className="py-40 relative noise-bg bg-background border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-6">Our Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-snug mb-8">
                For those who architect their lives, we architect the escapes.
              </h2>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-white hover:border-white transition-colors">
                Our Story <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-white/60 text-lg font-light leading-relaxed">
                NOX VOYAGES is not an agency. We are a gateway to the unseen, the untouched, and the unimaginable. Access is a privilege. Excellence is our baseline.
              </p>
              <p className="text-white/50 font-light leading-relaxed">
                Founded in 2006, we have spent eighteen years building relationships that cannot be bought — only cultivated. The result is a network that opens doors most people don't know exist.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-primary font-serif italic text-xl">
                  "Luxury is not what you acquire. It's what you experience."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-0 bg-card border-y border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center py-14 px-8 border-r border-white/5 last:border-r-0"
            >
              <div className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/60 mb-2">{stat.value}</div>
              <div className="text-white/40 uppercase tracking-widest text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ── */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Curated Edens</p>
              <h2 className="text-4xl md:text-6xl font-serif text-white">Where We Take You</h2>
            </div>
            <Link href="/destinations" className="text-white hover:text-primary transition-colors uppercase tracking-widest text-xs pb-1 border-b border-primary inline-flex items-center gap-2">
              All Destinations <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESTINATIONS.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ height: i % 2 === 0 ? "560px" : "480px", alignSelf: i % 2 === 0 ? "flex-start" : "flex-end" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700 z-10" />
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute bottom-0 left-0 p-7 z-20">
                  <span className="text-primary text-xs tracking-widest uppercase block mb-2">{dest.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 group-hover:text-primary transition-colors duration-500">{dest.name}</h3>
                  <p className="text-white/0 group-hover:text-white/70 transition-all duration-500 text-sm font-light leading-relaxed max-w-[220px]">
                    {dest.desc}
                  </p>
                </div>
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LUXURY EXPERIENCES (Expanding Accordion Panels) ── */}
      <ExperiencesSection isLarge={isLarge} />

      {/* ── WHY NOX ── */}
      <section className="py-32 bg-background border-t border-white/5 relative noise-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">The Standard</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Why NOX Voyages</h2>
            <p className="text-white/40 mt-4 font-light max-w-xl mx-auto">
              An elite travel house built on access, discretion, and an obsessive refusal to compromise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-dark p-10 group hover:border-primary/40 border border-white/5 transition-colors duration-500"
              >
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ── */}
      <section className="py-32 bg-card border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Client Words</p>
              <h2 className="text-4xl md:text-6xl font-serif text-white">Words of the Elite</h2>
            </div>
            <Link href="/testimonials" className="text-white hover:text-primary transition-colors uppercase tracking-widest text-xs pb-1 border-b border-primary inline-flex items-center gap-2">
              All Testimonials <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_PREVIEW.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="glass-dark p-10 border-t border-primary/20 relative"
              >
                <div className="absolute top-0 left-0 w-20 h-[1px] bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/80 font-light leading-relaxed text-lg font-serif italic mb-8">"{t.text}"</p>
                <div className="border-t border-white/10 pt-6 flex justify-between items-end">
                  <div>
                    <p className="text-white text-sm uppercase tracking-widest font-semibold">{t.name}</p>
                    <p className="text-white/40 text-xs mt-1">{t.role}</p>
                  </div>
                  <span className="text-primary/50 text-xs uppercase tracking-wider">{t.dest}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
          <img src="/amalfi.png" alt="Amalfi Coast" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.3em] text-xs mb-6"
          >
            Begin Here
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
          >
            The World Awaits Those Prepared to See It
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 mb-12 text-lg font-light max-w-xl mx-auto"
          >
            Begin the consultation process for your next masterpiece. A NOX director will respond within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-primary text-black tracking-widest uppercase text-sm hover:bg-white transition-all duration-500 font-semibold glow-gold"
              data-testid="cta-contact"
            >
              Start Your Journey
            </Link>
            <Link
              href="/packages"
              className="inline-block px-12 py-4 border border-white/40 text-white tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-all duration-500"
              data-testid="cta-packages"
            >
              View Packages
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
