import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString() + suffix);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, target, { duration: 2.5, ease: "easeOut" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const STATS = [
  { label: "Countries", value: 87, suffix: "" },
  { label: "Journeys Crafted", value: 12400, suffix: "+" },
  { label: "Years of Excellence", value: 18, suffix: "" },
  { label: "Global Awards", value: 43, suffix: "" },
  { label: "Private Estates in Network", value: 340, suffix: "+" },
  { label: "Client Retention Rate", value: 96, suffix: "%" },
  { label: "Continents Covered", value: 6, suffix: "" },
  { label: "NDA-Protected Partnerships", value: 200, suffix: "+" },
];

const TEAM = [
  {
    name: "Sebastian Noir",
    role: "Founder & Chief Director",
    image: "/maldives.png",
    bio: "Former diplomatic attaché and luxury hospitality director with 22 years of curating impossible experiences for heads of state and global business leaders."
  },
  {
    name: "Celeste Beaumont",
    role: "Director, European Operations",
    image: "/santorini.png",
    bio: "Based between Paris and Amalfi, Celeste manages NOX's Mediterranean estate network and maintains relationships with over 40 private villa owners."
  },
  {
    name: "Kenji Watanabe",
    role: "Director, Asia Pacific",
    image: "/kyoto.png",
    bio: "A Tokyo native with deep cultural connections across Japan, Bali, and Southeast Asia. Kenji curates cultural immersions that no other operator can access."
  },
  {
    name: "Amara Diallo",
    role: "Director, Africa & Middle East",
    image: "/morocco.png",
    bio: "Raised between Dakar and Marrakech, Amara commands an extraordinary network of desert guides, conservation camps, and royal-tier contacts across 22 African nations."
  }
];

const TIMELINE = [
  { year: "2006", event: "NOX VOYAGES founded in Geneva by Sebastian Noir after orchestrating a 30-person private expedition to Antarctica for a single client." },
  { year: "2009", event: "First regional office opens in Tokyo. The Asia-Pacific network begins, led by Kenji Watanabe." },
  { year: "2012", event: "NOX reaches 1,000 curated journeys. Travel + Leisure names us 'The World's Most Discreet Travel House.'" },
  { year: "2015", event: "Private island acquisition program launches, giving clients first-access rights to exclusive estates before they become known." },
  { year: "2018", event: "African operations expand under Amara Diallo. Saharan camp collection launched." },
  { year: "2021", event: "NOX Voyages recognized by Forbes as a top 10 ultra-luxury travel brand worldwide. Client roster reaches 12,000." },
  { year: "2024", event: "18th anniversary. 87 countries covered, 43 global awards. Still capped at 200 new clients per year." }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <img src="/retreats.png" alt="NOX Voyages" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-6 lg:whitespace-nowrap">Eighteen Years. One Standard.</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-8 leading-tight">
              The Architect of Escapes
            </h1>
            <p className="text-white/60 text-xl font-light leading-relaxed">
              NOX VOYAGES was founded on a singular premise: true luxury is not having to ask. We anticipate, we design, and we execute flawless global maneuvers for the world's most discerning individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[600px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group"
          >
            <img src="/retreats.png" alt="Our Standard" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">The Origin</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Excellence by Design</h2>
            </div>
            <p className="text-white/60 font-light leading-relaxed">
              NOX began in 2006 with a single impossible brief: orchestrate a private expedition to Antarctica for a single high-net-worth family, in complete secrecy, within six weeks. Sebastian Noir — then a diplomatic attaché with deep contacts in global logistics and luxury hospitality — delivered it without a single misstep.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              That brief became the template. NOX maintains a strict cap on our client roster to ensure uncompromising quality. Every itinerary is built from the ground up, utilizing a global network of fixers, private aviation partners, and exclusive estates that do not exist on the public market.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              When you travel with NOX, you are invisible to the crowd and the center of the universe to our staff. That balance — anonymity and elevation — is the NOX signature.
            </p>
            <div className="pt-8 border-t border-white/10">
              <p className="text-primary font-serif italic text-2xl leading-relaxed">
                "The standard is perfection. Everything else is a compromise."
              </p>
              <p className="text-white/30 text-xs uppercase tracking-wider mt-3">— Sebastian Noir, Founder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-card border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">What Drives Us</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-12 border-t border-primary/30 relative"
            >
              <div className="absolute top-0 left-0 w-16 h-[1px] bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <p className="text-primary text-xs uppercase tracking-widest mb-6">Mission</p>
              <h3 className="text-2xl font-serif text-white mb-6">To make the impossible routine</h3>
              <p className="text-white/55 font-light leading-relaxed">
                Every brief we accept begins with the assumption that it can be done. Our mission is to take the most complex, most ambitious, most logistically demanding travel visions and deliver them flawlessly — consistently, confidentially, and without compromise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-dark p-12 border-t border-primary/30 relative"
            >
              <div className="absolute top-0 left-0 w-16 h-[1px] bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <p className="text-primary text-xs uppercase tracking-widest mb-6">Vision</p>
              <h3 className="text-2xl font-serif text-white mb-6">A world where access is truly unlimited</h3>
              <p className="text-white/55 font-light leading-relaxed">
                We believe the world's most extraordinary experiences should be available to those who are genuinely prepared to appreciate them — not just those who can afford a booking fee. NOX curates for depth of experience, not breadth of catalog.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-32 bg-background border-t border-white/5 relative noise-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">By the Numbers</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Eighteen Years in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center p-10 border border-white/5 glass-dark group hover:border-primary/30 transition-colors duration-500"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 mb-3 group-hover:from-primary group-hover:to-yellow-300 transition-all">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-card border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Our History</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white">The NOX Story</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary/30 to-transparent ml-8 md:ml-16" />
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-8 md:gap-16 mb-12 relative"
              >
                <div className="flex-shrink-0 w-16 md:w-32 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1 relative z-10 shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                  <span className="text-primary font-serif text-sm md:text-base mt-2">{item.year}</span>
                </div>
                <div className="pb-12">
                  <p className="text-white/60 font-light leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">The Directors</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Who We Are</h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto font-light">
              A small, globally distributed team of obsessives — each one a master of their region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group"
                data-testid={`team-member-${i}`}
              >
                <div className="relative h-80 overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700 z-10" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
                </div>
                <p className="text-primary text-xs uppercase tracking-widest mb-1">{member.role}</p>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-white/45 text-sm font-light leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-card border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-6">Join the Few</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Become a NOX Client</h2>
            <p className="text-white/50 font-light max-w-xl mx-auto mb-12 text-lg leading-relaxed">
              We accept fewer than 200 new client relationships per year. If you believe you are ready, we would like to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-black tracking-widest uppercase text-sm hover:bg-white transition-colors duration-500 font-semibold"
              data-testid="about-cta"
            >
              Begin the Application <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
