import React from 'react';
import { motion } from 'motion/react';
import { Truck, MapPin, Package, CheckCircle2 } from 'lucide-react';

export const DeliveryTracking: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-premium border border-stone-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest">
                <Truck size={14} /> Global Logistics
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 italic leading-tight">
                Trace Your <br />
                <span className="text-primary">Botanical Journey.</span>
              </h2>
              <p className="text-stone-500 text-lg font-light leading-relaxed">
                From the moment our master florists select your stems to the second they reach your doorstep, track every step of your bouquet's journey in real-time.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { icon: Package, label: 'Handpicked & Conditioned', time: '08:00 AM' },
                  { icon: CheckCircle2, label: 'Artisan Arrangement Complete', time: '10:30 AM' },
                  { icon: Truck, label: 'Out for White-Glove Delivery', time: '12:00 PM', active: true },
                  { icon: MapPin, label: 'Arriving Soon', time: 'Est. 01:30 PM' },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-6 relative">
                    {idx < 3 && <div className="absolute left-6 top-10 bottom-0 w-px bg-stone-100" />}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center relative z-10 ${
                      step.active ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-stone-50 text-stone-300'
                    }`}>
                      <step.icon size={20} />
                    </div>
                    <div>
                      <p className={`text-sm font-bold uppercase tracking-widest ${step.active ? 'text-stone-900' : 'text-stone-400'}`}>
                        {step.label}
                      </p>
                      <p className="text-xs text-stone-400">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80" 
                alt="Delivery tracking map" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-stone-900/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40"
                 >
                    <Truck size={24} />
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
