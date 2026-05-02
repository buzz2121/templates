import { motion } from "motion/react";
import { ShieldCheck, Trophy, Sparkles, UserCheck } from "lucide-react";

export default function WhyChooseUs() {
  const steps = [
    {
      icon: ShieldCheck,
      title: "Secure Investments",
      desc: "Every property in our portfolio undergoes rigorous legal and structural verification for your peace of mind."
    },
    {
      icon: Trophy,
      title: "Award Winning Team",
      desc: "Recognized globally for excellence in high-end real estate brokerage and investment advisory."
    },
    {
      icon: Sparkles,
      title: "Exceptional Portfolio",
      desc: "Curated collection of the most exclusive penthouses, villas, and off-market assets world-wide."
    },
    {
      icon: UserCheck,
      title: "Personalized Concierge",
      desc: "Bespoke service tailored to your lifestyle, from legal assistance to interior design consulting."
    }
  ];

  return (
    <section id="about" className="section-luxury bg-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold opacity-[0.02] blur-[200px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sapphire opacity-[0.08] blur-[150px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold hidden sm:block" />
                <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Unmatched Expertise</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight">
                Why the <span className="gold-text italic">Elite</span> Choose Us
              </h2>
              <p className="text-base md:text-lg text-charcoal/90 leading-[1.9] font-light tracking-wide max-w-xl">
                We don't just sell properties; we facilitate a lifestyle of grandeur. Our network provides access to the world's most coveted off-market assets and architectural masterpieces.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="premium-pill px-12 py-5 text-[10px] tracking-[0.3em]">
                Discover Our Legacy
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className="glass p-9 md:p-10 rounded-3xl space-y-6 hover:border-gold/20 transition-all duration-500 group glow-blue hover:glow-gold"
              >
                <div className="w-14 h-14 glass-blue flex items-center justify-center text-gold-dark group-hover:scale-110 transition-transform duration-500 rounded-2xl">
                  <step.icon size={26} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-serif font-bold text-charcoal tracking-tight">{step.title}</h4>
                <p className="text-sm text-charcoal/90 leading-[1.8] font-light tracking-wide">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
