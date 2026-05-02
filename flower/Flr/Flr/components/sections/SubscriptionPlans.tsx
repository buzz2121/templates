import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Calendar, Truck } from 'lucide-react';

const PLANS = [
  {
    id: 'weekly',
    name: 'Artisan Weekly',
    price: 45,
    description: 'A fresh, seasonal bouquet delivered to your door every Monday.',
    features: ['Hand-picked seasonal blooms', 'Free premium vase with first order', '15% discount on extra gifts', 'Cancel anytime'],
    color: 'bg-stone-50'
  },
  {
    id: 'biweekly',
    name: 'Signature Fortnightly',
    price: 80,
    description: 'Our most popular choice. Curated elegance every two weeks.',
    features: ['Master florist signature mix', 'Priority delivery window', '20% discount on extra gifts', 'Gift wrapping included'],
    color: 'bg-stone-900',
    dark: true,
    featured: true
  },
  {
    id: 'monthly',
    name: 'Luxury Monthly',
    price: 150,
    description: 'Large, rare floral installations for the true connoisseur.',
    features: ['Rare & exotic species', 'Custom styling consultation', '30% discount on extra gifts', 'Personal concierge'],
    color: 'bg-stone-50'
  }
];

export const SubscriptionPlans: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${plan.color} ${plan.dark ? 'text-white' : 'text-stone-900'} rounded-[3rem] p-10 border border-stone-100 flex flex-col relative overflow-hidden`}
            >
              {plan.featured && (
                <div className="absolute top-8 right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif italic mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif">${plan.price}</span>
                  <span className={`text-xs uppercase font-bold tracking-widest ${plan.dark ? 'text-stone-400' : 'text-stone-400'}`}>/ delivery</span>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-10 ${plan.dark ? 'text-stone-400' : 'text-stone-500'}`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.dark ? 'bg-white/10 text-primary' : 'bg-primary/10 text-primary'}`}>
                      <Check size={12} />
                    </div>
                    <span className="text-xs font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold transition-all ${
                plan.dark 
                  ? 'bg-primary text-white hover:scale-[1.02]' 
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}>
                Subscribe Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
