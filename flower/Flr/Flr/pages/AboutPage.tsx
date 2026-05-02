
import React from 'react';
import { motion } from 'motion/react';
import { Flower2, Heart, Shield, Leaf } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-pink-950 mb-8">Our Story</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-pink-900/70 leading-relaxed">
            <p>
              Founded in 2020, Bloom & Petal started with a simple mission: to bring the freshness of a country garden to the heart of the city. We believe that flowers are more than just a gift—they are a language of emotion, a way to share joy, comfort, and love.
            </p>
            <p>
              Our artisans work closely with local sustainable farms to ensure every stem in your bouquet is planet-friendly and picked at the peak of its beauty. From our greenhouses to your doorstep, we handle every petal with care.
            </p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=800&auto=format&fit=crop" 
              alt="Our Florist" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <section className="py-24 bg-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Leaf, title: 'Sustainable', desc: 'Committed to eco-friendly farming and plastic-free packaging.' },
              { icon: Heart, title: 'Artisanal', desc: 'Every bouquet is hand-tied by our expert floral designers.' },
              { icon: Flower2, title: 'Freshness', desc: 'Our unique supply chain ensures flowers arrive fresher than yours.' },
              { icon: Shield, title: 'Quality', desc: 'Double-checked for perfection before leaving our studio.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600 shadow-sm">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-pink-950 mb-2">{feature.title}</h3>
                <p className="text-sm text-pink-900/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
