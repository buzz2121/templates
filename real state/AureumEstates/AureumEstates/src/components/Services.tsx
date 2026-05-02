import { motion } from "motion/react";
import { Building2, Landmark, LineChart, KeyRound } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Premium Sales",
      desc: "Marketing your asset to our global database of ultra-high-net-worth individuals."
    },
    {
      icon: Landmark,
      title: "Property Acquisition",
      desc: "Strategic sourcing of off-market properties and luxury estates globally."
    },
    {
      icon: LineChart,
      title: "Investment Advisory",
      desc: "Data-driven insights to maximize returns in the high-end real estate sector."
    },
    {
      icon: KeyRound,
      title: "Estate Management",
      desc: "24/7 bespoke management services for your most valuable real estate assets."
    }
  ];

  return (
    <section className="section-luxury bg-cream relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.04] blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center section-heading">
          <div className="flex items-center gap-4 justify-center">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Our Expertise</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-charcoal">
            Bespoke <span className="gold-text italic">Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-charcoal/80 font-light text-base md:text-lg leading-[1.9] tracking-wide">
            Comprehensive real estate strategies executed with surgical precision and global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-charcoal/[0.1] rounded-3xl overflow-hidden border border-charcoal/10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="group relative p-10 md:p-12 bg-white hover:bg-pearl transition-all duration-700 cursor-pointer overflow-hidden text-center sm:text-left"
            >
              <div className="relative z-10 space-y-8">
                <div className="text-gold group-hover:scale-110 transition-transform duration-700 inline-block glass-blue p-5 rounded-2xl">
                  <service.icon size={32} strokeWidth={1} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-base font-bold uppercase tracking-[0.2em] text-charcoal">{service.title}</h3>
                  <p className="text-charcoal/70 text-sm font-light leading-[1.8] tracking-wide">{service.desc}</p>
                </div>
              </div>
              {/* Number indicator */}
              <span className="absolute -bottom-6 -right-4 text-charcoal/[0.035] group-hover:text-gold/[0.15] font-serif font-black text-[8rem] transition-colors duration-700 pointer-events-none italic">
                {idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
