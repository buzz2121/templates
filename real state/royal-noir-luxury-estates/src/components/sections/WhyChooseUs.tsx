import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Award, Diamond, EyeOff } from "lucide-react";

const FEATURES = [
  {
    icon: <Diamond className="text-gold" size={32} />,
    title: "Curated Excellence",
    description: "Every listing in our portfolio undergoes a rigorous selection process, ensuring only architectural artifacts are presented."
  },
  {
    icon: <EyeOff className="text-gold" size={32} />,
    title: "Off-Market Access",
    description: "Our private network provides entry to the world’s most significant estates before they ever reach the public eye."
  },
  {
    icon: <ShieldCheck className="text-gold" size={32} />,
    title: "Absolute Discretion",
    description: "Confidentiality is our primary asset. We protect the privacy of the world’s most prominent families and individuals."
  },
  {
    icon: <Award className="text-gold" size={32} />,
    title: "Strategic Advisory",
    description: "Beyond brokerage, we provide market intelligence and acquisition strategies designed to build generational wealth."
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-40 bg-[#080808] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-screen border-r border-white/5 hidden xl:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-8"
                >
                    <div className="w-16 h-[1px] gold-gradient" />
                    <span className="text-gold uppercase tracking-[0.5em] font-bold text-[10px]">The Distinction</span>
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-10 uppercase leading-[0.9]">
                    WHY THE <br />
                    <span className="italic font-light text-gold ml-[-0.05em]">VISIONARIES</span> <br />
                    CHOOSE US
                </h2>
                <p className="text-white/40 text-xl font-light leading-relaxed max-w-md tracking-wide mb-12">
                    Since 1924, we have served as the silent architects of the world's most prestigious real estate transactions.
                </p>
                <div className="flex gap-12">
                    <div>
                        <div className="text-4xl font-display text-white mb-2">98%</div>
                        <div className="text-[10px] uppercase tracking-widest text-gold font-bold">Retention Rate</div>
                    </div>
                    <div>
                        <div className="text-4xl font-display text-white mb-2">100+</div>
                        <div className="text-[10px] uppercase tracking-widest text-gold font-bold">Countries Served</div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
                {FEATURES.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group"
                    >
                        <div className="mb-6 transform group-hover:scale-110 transition-luxury inline-block">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-display text-white mb-4 uppercase tracking-widest group-hover:text-gold transition-luxury">
                            {feature.title}
                        </h3>
                        <p className="text-white/30 font-light leading-relaxed text-sm tracking-wide group-hover:text-white/50 transition-luxury">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
