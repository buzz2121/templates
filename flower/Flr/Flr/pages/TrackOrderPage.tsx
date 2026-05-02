
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, MapPin, Truck, CheckCircle2, Flower2 } from 'lucide-react';

export const TrackOrderPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [isTracked, setIsTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId && email) {
      setIsTracked(true);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-texture gradient-premium">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-xl border border-stone-200 rounded-full text-primary text-[9px] font-bold uppercase tracking-[0.3em] shadow-sm mb-6">
          <Truck size={12} /> Real-time Logistics
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 mb-6 italic leading-[1.1]">Where is My <br /> <span className="text-primary tracking-tight">Vibe?</span></h1>
        <p className="text-stone-500 max-w-xl mx-auto text-lg font-light italic">
          Enter your unique order signature below to follow its journey from our artisan studio to your doorstep.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {!isTracked ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/80 backdrop-blur-2xl rounded-[3.5rem] p-8 md:p-14 shadow-premium border border-white/50"
          >
            <form onSubmit={handleTrack} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 ml-6">Digital Signature (Order #)</label>
                <div className="relative">
                  <Package className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300" />
                  <input
                    type="text"
                    required
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="e.g. BP-88200"
                    className="w-full bg-stone-50/50 border border-stone-100 rounded-[2rem] pl-16 pr-8 py-5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all text-stone-900 placeholder:text-stone-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 ml-6">Email Address</label>
                <div className="relative">
                  <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Signature verification email"
                    className="w-full bg-stone-50/50 border border-stone-100 rounded-[2rem] pl-16 pr-8 py-5 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all text-stone-900 placeholder:text-stone-300"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-stone-900 text-white rounded-[2rem] font-bold uppercase tracking-widest text-[11px] shadow-2xl shadow-stone-900/20 hover:bg-stone-800 transition-all active:scale-[0.98]"
              >
                Trace Journey
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3.5rem] p-8 md:p-14 shadow-premium border border-white/50">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-16 gap-6">
                <div>
                  <h3 className="text-3xl font-serif text-stone-900 italic">Order #BP-882910</h3>
                  <p className="text-stone-400 text-sm mt-2 italic font-light">ETA: Today, Sunset Special</p>
                </div>
                <span className="px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> In Transit
                </span>
              </div>

              <div className="space-y-14">
                {[
                  { icon: CheckCircle2, status: 'Handcrafted with Love', time: 'April 23, 10:30 AM', completed: true },
                  { icon: Flower2, status: 'Final Petal Polish', time: 'April 23, 04:15 PM', completed: true },
                  { icon: Truck, status: 'Courier on Route', time: 'April 24, 09:00 AM', completed: true },
                  { icon: MapPin, status: 'Your Doorstep', time: 'Awaiting Arrival', completed: false },
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 relative">
                    {i < 3 && (
                      <div className={`absolute left-5 top-10 w-px h-12 ${step.completed ? 'bg-stone-200' : 'bg-stone-100'}`} />
                    )}
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                      step.completed ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-300'
                    }`}>
                      <step.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-serif italic ${step.completed ? 'text-stone-900' : 'text-stone-300'}`}>{step.status}</h4>
                      <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setIsTracked(false)}
              className="w-full py-5 border-2 border-stone-200 text-stone-600 rounded-[2rem] font-bold uppercase tracking-widest text-[11px] hover:bg-stone-50 transition-all"
            >
              Trace Another Journey
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
