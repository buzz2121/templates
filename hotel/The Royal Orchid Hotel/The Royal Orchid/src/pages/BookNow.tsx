import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function BookNow() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Reservations</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light mb-6">
            Book Your <span className="italic text-royal-gold">Stay</span>
          </h1>
          <p className="text-royal-white/70 font-light">
            Secure your reservation at The Royal Orchid and prepare for an unforgettable experience.
          </p>
        </motion.div>

        {/* Step Indicator */}
        <div className="flex justify-center items-center mb-12">
          {[1, 2, 3].map((num) => (
            <React.Fragment key={num}>
              <div
                className={`w-8 h-8 flex items-center justify-center border rounded-full text-xs transition-colors duration-300 ${
                  step >= num
                    ? 'border-royal-gold bg-royal-gold text-royal-dark'
                    : 'border-royal-white/30 text-royal-white/30 bg-transparent'
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`w-16 h-[1px] mx-2 transition-colors duration-300 ${
                    step > num ? 'bg-royal-gold' : 'bg-royal-white/30'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-[#141414] border border-royal-white/10 p-8 md:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-serif-cormorant text-2xl font-light mb-8 text-royal-gold">1. Select Dates & Guests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Check-in Date</label>
                    <input type="date" className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Check-out Date</label>
                    <input type="date" className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Adults</label>
                    <select className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors appearance-none">
                      {[1,2,3,4].map(n => <option key={n} value={n} className="bg-royal-dark text-royal-white">{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Children</label>
                    <select className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors appearance-none">
                      {[0,1,2,3].map(n => <option key={n} value={n} className="bg-royal-dark text-royal-white">{n}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-12">
                  <button onClick={nextStep} className="bg-royal-gold text-royal-dark px-8 py-3 text-xs uppercase tracking-widest hover:bg-royal-white transition-colors">Continue to Rooms</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-serif-cormorant text-2xl font-light mb-8 text-royal-gold">2. Select Room Type</h2>
                <div className="space-y-6 mb-8">
                  {['Presidential Suite', 'Royal Club Room', 'Deluxe Heritage', 'Signature Villa'].map((room, i) => (
                    <label key={i} className="flex items-center gap-4 p-4 border border-royal-white/10 cursor-pointer hover:border-royal-gold/50 transition-colors">
                      <input type="radio" name="room" className="accent-royal-gold" defaultChecked={i===0} />
                      <div className="flex-1">
                        <h3 className="font-serif-cormorant text-xl text-royal-white">{room}</h3>
                        <p className="text-royal-white/50 text-sm">Breakfast included • Free cancellation</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-royal-gold block">From ₹{15000 + (i*10000)} / night</span>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between mt-12">
                  <button onClick={prevStep} className="border border-royal-white/30 text-royal-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-royal-white hover:text-royal-dark transition-colors">Back</button>
                  <button onClick={nextStep} className="bg-royal-gold text-royal-dark px-8 py-3 text-xs uppercase tracking-widest hover:bg-royal-white transition-colors">Continue to Details</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-serif-cormorant text-2xl font-light mb-8 text-royal-gold">3. Guest Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Special Requests (Optional)</label>
                    <textarea rows={3} className="w-full bg-transparent border-b border-royal-white/30 pb-2 text-royal-white outline-none focus:border-royal-gold transition-colors"></textarea>
                  </div>
                </div>
                <div className="flex justify-between mt-12">
                  <button onClick={prevStep} className="border border-royal-white/30 text-royal-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-royal-white hover:text-royal-dark transition-colors">Back</button>
                  <button className="bg-royal-gold text-royal-dark px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-royal-white transition-colors">Confirm Booking</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
