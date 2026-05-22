import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useCallback } from "react";

const TESTIMONIALS = [
  {
    name: "Alexander R.",
    role: "CEO, Atlas Ventures",
    location: "New York, USA",
    dest: "Patagonia",
    year: "2024",
    rating: 5,
    text: "NOX delivered an experience in Patagonia that defied logic. The helicopter touchdown on the glacier, the estancia asado under the Milky Way, the silence of Torres del Paine at 5am — none of it felt real. Flawless execution from the first call to the last transfer. They have permanently ruined normal travel for me."
  },
  {
    name: "Elena M.",
    role: "Private Client",
    location: "Monaco",
    dest: "Maldives",
    year: "2023",
    rating: 5,
    text: "The Maldives atoll they secured for us wasn't listed publicly — and that's precisely the point. For seven days, the island belonged to us. The marine biologist took my children on bioluminescent night dives. The chef knew my husband's dietary restrictions better than I did. The level of discretion and service is entirely unmatched by any operator I've encountered in 20 years."
  },
  {
    name: "James T.",
    role: "Managing Partner, Blackwater Capital",
    location: "London, UK",
    dest: "Amalfi Coast",
    year: "2024",
    rating: 5,
    text: "From the helicopter arrival over Positano to the candlelit cave dinner, I didn't lift a finger. Every transition was seamless, every detail anticipated. The vintage Riva was ready when we wanted it. The estate staff knew our preferences by day two without being told. This is what luxury actually means — not thread counts and champagne, but the permanent absence of friction."
  },
  {
    name: "Sophia K.",
    role: "Creative Director",
    location: "London, UK",
    dest: "Kyoto",
    year: "2023",
    rating: 5,
    text: "Kyoto was transcendent. The pre-dawn temple ceremony brought me to tears — a Zen priest had prepared the space for just the two of us. The kaiseki dinner was served in a room that had hosted three generations of the same family. The geisha evening in a Gion ochaya was intimate, warm, and genuinely cultural — not a performance. Something I could never have arranged alone in a hundred attempts."
  },
  {
    name: "Marcus W.",
    role: "Founder, MedTech Ventures",
    location: "Zurich, Switzerland",
    dest: "Iceland",
    year: "2024",
    rating: 5,
    text: "I've seen the Northern Lights before. I had never experienced them like this — lying in a glass-domed bed on a lava plateau with no artificial light within 60 kilometers. The aurora was so vivid it felt hallucinated. Then the volcanologist guided us over Fagradalsfjall at dawn. NOX turned Iceland from a Instagram destination into a personal revelation."
  },
  {
    name: "Isabelle C.",
    role: "Art Collector & Philanthropist",
    location: "Paris, France",
    dest: "Morocco",
    year: "2023",
    rating: 5,
    text: "Morocco with NOX is not Morocco you have read about. The riad was a 14th-century heritage property in the Fes medina — not a boutique hotel, a private palace on loan. The Sahara camp had a personal astronomer and a telescope. Three nights under those stars rewired my perspective entirely. I returned to Paris a different person."
  },
  {
    name: "David K.",
    role: "Private Equity Director",
    location: "Singapore",
    dest: "Bali",
    year: "2022",
    rating: 5,
    text: "The Bali jungle compound above the Ayung River was unlike any villa I've stayed in. The healer came to us each morning. Our personal chef cooked from a garden 15 steps from the kitchen. The private fire ceremony — arranged for our party alone — remains the single most powerful cultural experience of my life. I cannot imagine reaching that moment without NOX's relationships."
  },
  {
    name: "Natalie & Thomas B.",
    role: "Honeymooners",
    location: "Dubai, UAE",
    dest: "Maldives & Amalfi",
    year: "2024",
    rating: 5,
    text: "We asked for the impossible — two weeks that combined Maldives and Amalfi without feeling rushed. NOX architected it perfectly. The private island for the first week, then a helicopter to the Colombo seaplane, then a flight to Naples and a helicopter over Positano to our cliff estate. The sky lantern ceremony on our final Maldives evening is the most beautiful memory of our lives. Every anniversary, we call NOX."
  },
  {
    name: "Lord & Lady H.",
    role: "Private Clients",
    location: "Edinburgh, Scotland",
    dest: "Santorini",
    year: "2023",
    rating: 5,
    text: "We've been clients of NOX for seven years and four journeys. Each one has been architecturally different — Patagonia, Morocco, Bali, and now Santorini. The Santorini estate was perched so high above the caldera that clouds drifted below us at sunset. The catamaran through the Cyclades was three days of pure sailing bliss. The level of care has never wavered. That consistency is the rarest luxury of all."
  },
  {
    name: "Yuki S.",
    role: "Tech Entrepreneur",
    location: "Tokyo, Japan",
    dest: "Seychelles",
    year: "2024",
    rating: 5,
    text: "I am Japanese and I have traveled extensively, so arranging an experience in the Seychelles that surprised me seemed impossible. NOX found an island that my own research had not surfaced — one reserved entirely for us. The marine biologist turned snorkeling into an education. The Creole chef served reef-to-table food that changed my understanding of what a meal could be. Absolute perfection."
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [gridRef, gridApi] = useEmblaCarousel({ loop: false, align: "start", breakpoints: {} });

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-40" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl -z-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-6">Client Voices</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-8">Words of the Elite</h1>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-xl leading-relaxed">
              We let our execution speak for itself. Our clients occasionally speak for us — in private. Here is what they permit us to share.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-12 text-center">Featured Reviews</p>
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {TESTIMONIALS.slice(0, 5).map((t, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="glass-dark p-12 md:p-20 text-center border-t border-primary/20 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary shadow-[0_0_15px_rgba(212,175,55,1)]" />

                      <Quote className="w-8 h-8 text-primary/30 mx-auto mb-8" />

                      <div className="flex justify-center gap-1 mb-8 text-primary">
                        {[...Array(t.rating)].map((_, s) => (
                          <Star key={s} className="w-5 h-5 fill-primary" />
                        ))}
                      </div>

                      <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-10 max-w-3xl mx-auto">
                        "{t.text}"
                      </p>

                      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
                        <div>
                          <h4 className="text-white uppercase tracking-widest text-sm font-semibold">{t.name}</h4>
                          <span className="text-white/40 text-xs tracking-wider">{t.role}</span>
                        </div>
                        <div className="hidden md:block w-[1px] h-8 bg-white/10" />
                        <div className="text-center">
                          <span className="text-primary text-xs uppercase tracking-widest block">{t.dest}</span>
                          <span className="text-white/30 text-xs">{t.location} · {t.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 text-white/30 hover:text-primary transition-colors p-2"
              onClick={scrollPrev}
              data-testid="carousel-prev"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 text-white/30 hover:text-primary transition-colors p-2"
              onClick={scrollNext}
              data-testid="carousel-next"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-24 bg-card border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-12 text-center">All Client Testimonials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="glass-dark p-8 border-t border-primary/10 hover:border-primary/40 transition-colors duration-500 group relative"
                data-testid={`testimonial-card-${i}`}
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-12 h-[1px] bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-700" />

                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-primary text-xs uppercase tracking-wider">{t.dest}</span>
                </div>

                <p className="text-white/70 font-light leading-relaxed mb-8 text-sm font-serif italic">
                  "{t.text.length > 220 ? t.text.substring(0, 220) + "..." : t.text}"
                </p>

                <div className="border-t border-white/10 pt-6 flex justify-between items-end">
                  <div>
                    <p className="text-white text-sm uppercase tracking-widest font-semibold">{t.name}</p>
                    <p className="text-white/35 text-xs mt-1">{t.role}</p>
                    <p className="text-white/25 text-xs">{t.location}</p>
                  </div>
                  <span className="text-white/20 text-xs">{t.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-32 bg-background border-t border-white/5 relative noise-bg">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-8">Client Trust</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-snug">
              96% of NOX clients travel with us again within two years.
            </h2>
            <p className="text-white/50 font-light text-lg leading-relaxed">
              We do not advertise. We do not promote. We do not have a social media presence. Every new client comes through a referral from an existing one. That is the only metric that matters to us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
