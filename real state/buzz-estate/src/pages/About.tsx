import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Users, Globe2, Building2, TrendingUp, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

const STATS = [
  { icon: Building2, value: "72,000+", label: "Units Delivered" },
  { icon: TrendingUp, value: "USD 2B+", label: "Shareholder Equity" },
  { icon: Users, value: "12,000+", label: "Employees Worldwide" },
  { icon: Globe2, value: "15+", label: "Countries Present" },
];

const VALUES = [
  { title: "Excellence", desc: "Commitment to uncompromising quality and architectural innovation." },
  { title: "Trust", desc: "Building lasting relationships through transparency and integrity." },
  { title: "Lifestyle", desc: "Creating holistic environments that elevate the everyday experience." },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Corporate Excellence"
          />
          <div className="absolute inset-0 bg-brand-dark/50 z-10" />
        </div>
        <div className="relative z-20 max-w-4xl px-6 space-y-8 text-white">
           <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">The Buzz Estate Legacy</span>
           <h1 className="text-5xl lg:text-8xl font-serif leading-[1.1] uppercase tracking-tighter text-white">Setting the <br/> <span className="italic text-brand-gold text-white">Standard</span></h1>
           <p className="text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
             Since our inception in 2002, we have redefined the Middle East's luxury real estate landscape.
           </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-brand-dark py-24 border-y border-brand-gold/10">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mx-auto text-brand-gold">
                <stat.icon size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white">{stat.value}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
             <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Our Vision</span>
             <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter">Creating Lifestyles <br /> <span className="italic">Since 2002</span></h2>
             <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                <p>
                  Buzz Estate has been at the forefront of the Middle East's luxury real estate market since 2002, delivering award-winning residential, commercial, and leisure properties across the region and beyond.
                </p>
                <p>
                  With a track record of building the most iconic towers in Dubai and partnering with the world's most luxurious brands, we have earned our place as one of the world's leading luxury developers.
                </p>
             </div>
             <div className="flex gap-6 pt-6">
                <Button className="bg-brand-gold text-white rounded-none px-10 h-14 uppercase tracking-widest text-[10px] font-bold">Our Governance</Button>
                <Button variant="outline" className="border-brand-dark text-brand-dark rounded-none px-10 h-14 uppercase tracking-widest text-[10px] font-bold">Media Centre</Button>
             </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-brand-surface relative overflow-hidden shadow-luxury">
                <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Team Work" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white border border-brand-line p-10 flex flex-col justify-center gap-4 hidden lg:flex">
                <Star className="text-brand-gold" size={40} />
                <h4 className="text-2xl font-serif">Customer First</h4>
                <p className="text-xs text-brand-gray leading-relaxed font-medium">Delivering a seamless experience from enquiry to moving into your dream home.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-brand-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">The Bedrock of Our Success</span>
            <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter">CORE VALUES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUES.map((val, i) => (
              <motion.div 
                key={i}
                className="bg-white p-12 text-center space-y-6 shadow-sm border border-brand-line/50 hover:shadow-luxury transition-shadow duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="w-12 h-[2px] bg-brand-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif uppercase tracking-tight">{val.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Segment */}
      <section className="py-32 bg-brand-dark text-white text-center overflow-hidden relative">
         <div className="container mx-auto px-6 relative z-10 space-y-12">
            <h2 className="text-4xl lg:text-6xl font-serif max-w-4xl mx-auto leading-tight italic">
              "To remain at the forefront of the luxury real estate market through constant innovation and excellence."
            </h2>
            <div className="flex justify-center flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-brand-gold flex items-center justify-center p-1">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" className="w-full h-full object-cover rounded-full" alt="Chairman" />
              </div>
              <p className="mt-4 text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black">Hussain Sajwani</p>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Founder & Chairman</p>
            </div>
         </div>
      </section>
    </div>
  );
}
