import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Truck, Clock, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const DeliveryOptions: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<'standard' | 'express' | 'hand'>('standard');

  const methods = [
    { id: 'standard', name: 'Premium Standard', time: 'Next Day', price: 'Free', icon: Truck },
    { id: 'express', name: 'White Glove Express', time: 'Same Day (4hr)', price: '$25', icon: Clock },
    { id: 'hand', name: 'Personal Hand-Delivery', time: 'Scheduled', price: '$40', icon: MapPin },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Calendar size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-stone-900">Logistics</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {methods.map((method) => {
            const Icon = method.icon;
            const isActive = selectedMethod === method.id;
            return (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id as any)}
                className={`flex items-center justify-between p-6 rounded-[2.5rem] border transition-all duration-500 text-left ${
                  isActive 
                    ? 'bg-stone-900 border-stone-900 text-white shadow-2xl scale-[1.02]' 
                    : 'bg-white border-stone-100 hover:border-stone-200 text-stone-600'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                    isActive ? 'bg-white/10 text-primary' : 'bg-stone-50 text-stone-400'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="block text-lg font-serif mb-1">{method.name}</span>
                    <span className="block text-xs font-light opacity-60 tracking-widest uppercase">{method.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`block text-xl font-serif mb-1 ${isActive ? 'text-primary' : 'text-stone-900'}`}>{method.price}</span>
                  {isActive && <CheckCircle2 size={16} className="ml-auto text-emerald-400" />}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-10 shadow-xl border border-stone-100">
        <h4 className="text-xl font-serif italic text-stone-900 mb-8">Recipient Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 px-2">Recipient Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-stone-50 border-none rounded-2xl p-4 text-stone-900 placeholder:text-stone-300 focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 px-2">Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-stone-50 border-none rounded-2xl p-4 text-stone-900 placeholder:text-stone-300 focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 px-2">Delivery Address</label>
            <textarea placeholder="123 Artisan Way, Bloom City..." className="w-full bg-stone-50 border-none rounded-3xl p-4 text-stone-900 placeholder:text-stone-300 focus:ring-2 focus:ring-primary/20 transition-all min-h-[100px] resize-none" />
          </div>
        </div>
      </section>
    </div>
  );
};
