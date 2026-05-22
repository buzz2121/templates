import { motion } from "framer-motion";
import { Link } from "wouter";

const experiences = [
  {
    title: "Luxury Retreats",
    image: "/retreats.png",
    desc: "Absolute privacy. Unprecedented comfort. Villas and private islands where your only neighbor is the horizon. NOX secures estates that don't appear on any booking platform — compounds that operate on invitation only, staffed by teams who anticipate before you ask.",
    examples: ["Private island buyout — Seychelles", "Cliff estate takeover — Santorini", "Jungle compound — Bali", "Desert oasis camp — Sahara"],
    price: "From $12,000 / week"
  },
  {
    title: "Adventure",
    image: "/patagonia.png",
    desc: "For those who demand a pulse. Helicopters, deep sea, high altitude. Handled with white-glove precision so you experience the edge without the chaos. Every expedition is designed around your threshold — and then quietly raises it.",
    examples: ["Helicopter glacier landings — Patagonia", "Deep-sea liveaboard — Great Barrier Reef", "Himalayan private circuit — Nepal", "Volcano flight — Iceland"],
    price: "From $8,500 / experience"
  },
  {
    title: "Cultural Immersion",
    image: "/kyoto.png",
    desc: "Closed-door access to the world's most guarded heritage sites and local masters. Eighteen years of relationships with temple guardians, museum directors, and artisan dynasties have given NOX access that money alone cannot purchase — only time and trust.",
    examples: ["After-hours Acropolis — Athens", "Private Zen ceremony — Kyoto", "Master artisan day — Florence", "Living traditions — Rajasthan"],
    price: "From $4,500 / experience"
  },
  {
    title: "Honeymoon",
    image: "/maldives.png",
    desc: "Two weeks. One planet. Absolute devotion to romance. A NOX honeymoon is not a vacation — it is the opening chapter of a life chosen together, written in bioluminescent seas, candlelit sea caves, and the silence of places the rest of the world has not yet found.",
    examples: ["Private atoll ceremony — Maldives", "Cliff estate romance — Amalfi Coast", "Sacred union — Bali jungle & coast", "Northern Lights cabin — Iceland"],
    price: "From $16,000 / journey"
  }
];

export default function Experiences() {
  return (
    <div className="min-h-screen bg-background">
      {experiences.map((exp, index) => (
        <section
          key={exp.title}
          className="min-h-screen lg:h-screen relative flex items-center overflow-hidden lg:sticky top-0"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/55 z-10" />
            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
          </div>

          <div className={`container mx-auto px-6 relative z-20 ${index === 0 ? "pt-20 lg:pt-16" : ""}`}>
            <div className={`max-w-2xl ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
              <motion.span
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-primary uppercase tracking-[0.3em] text-sm block mb-4"
              >
                0{index + 1} // Experience
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-serif text-white mb-6"
              >
                {exp.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/80 text-xl font-light leading-relaxed mb-8"
              >
                {exp.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mb-10 space-y-2"
              >
                {exp.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-[1px] bg-primary" />
                    <span className="text-white/55 text-sm font-light">{ex}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-4 h-[1px] bg-primary/40" />
                  <span className="text-primary text-xs uppercase tracking-widest">{exp.price}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link
                  href="/contact"
                  className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
                  data-testid={`inquire-experience-${index}`}
                >
                  Inquire
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
