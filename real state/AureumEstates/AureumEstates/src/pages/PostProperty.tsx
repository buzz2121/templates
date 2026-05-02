import { motion, AnimatePresence } from "motion/react";
import { Upload, Home, MapPin, DollarSign, BedDouble, Bath, Maximize, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import React, { useState } from "react";

export default function PostProperty() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "Villa",
    category: "Sale",
    beds: "",
    baths: "",
    sqft: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left Column: Vision & Progress */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 md:space-y-16"
          >
            <div className="space-y-6 text-center lg:text-left">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] block font-bold">Lister Concierge</span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tighter">
                List Your <br className="hidden sm:block"/>
                <span className="gold-text italic font-serif">Masterpiece</span>
              </h1>
              <p className="text-base md:text-xl text-charcoal/60 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                Aureum Estates provides the most exclusive platform to showcase your ultra-luxury assets to the world's most discerning investors.
              </p>
            </div>

            {/* Stepper HUD */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 sm:gap-2 lg:gap-8">
              {[
                { number: 1, title: "Asset Identity", desc: "Define the essence of your property" },
                { number: 2, title: "Technical Metrics", desc: "Sqft, layout, and structural details" },
                { number: 3, title: "Curated Content", desc: "Media and final vision submission" }
              ].map((s) => (
                <div key={s.number} className={`flex items-center gap-6 transition-opacity duration-500 ${step === s.number ? "opacity-100" : "opacity-30"}`}>
                  <div className={`w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center font-serif italic text-xl ${step === s.number ? "bg-gold text-black border-transparent" : "text-gold"}`}>
                    {s.number}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal">{s.title}</h4>
                    <p className="text-[10px] text-charcoal/60 tracking-wide uppercase">{s.desc}</p>
                  </div>
                  {step > s.number && <CheckCircle2 size={16} className="text-gold ml-auto" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-charcoal/10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-10 relative z-10"
                >
                  {step === 1 && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                          <Home size={10} className="text-gold" /> Property Title
                        </label>
                        <input 
                          required 
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          type="text" 
                          className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal placeholder:text-charcoal/40" 
                          placeholder="e.g. The Zenith Penthouse" 
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                          <MapPin size={10} className="text-gold" /> Location / Community
                        </label>
                        <input 
                          required 
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          type="text" 
                          className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal placeholder:text-charcoal/40" 
                          placeholder="e.g. Palm Jumeirah, Dubai" 
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4">Property Type</label>
                          <select 
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-white/70 cursor-pointer appearance-none"
                          >
                            <option className="bg-white text-charcoal">Villa</option>
                            <option className="bg-white text-charcoal">Penthouse</option>
                            <option className="bg-white text-charcoal">Mansion</option>
                            <option className="bg-white text-charcoal">Sky Suite</option>
                          </select>
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4">Category</label>
                          <select 
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal cursor-pointer appearance-none"
                          >
                            <option className="bg-white text-charcoal">Sale</option>
                            <option className="bg-white text-charcoal">Rent</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                          <DollarSign size={10} className="text-gold" /> Expected Investment (Price)
                        </label>
                        <input 
                          required 
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          type="text" 
                          className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal placeholder:text-charcoal/40" 
                          placeholder="e.g. $15,000,000" 
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                            <BedDouble size={10} className="text-gold" /> Beds
                          </label>
                          <input required name="beds" value={formData.beds} onChange={handleInputChange} type="number" className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                            <Bath size={10} className="text-gold" /> Baths
                          </label>
                          <input required name="baths" value={formData.baths} onChange={handleInputChange} type="number" className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                            <Maximize size={10} className="text-gold" /> Sqft
                          </label>
                          <input required name="sqft" value={formData.sqft} onChange={handleInputChange} type="number" className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal" />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                          <Sparkles size={10} className="text-gold" /> Property Narrative
                        </label>
                        <textarea 
                          required 
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows={4} 
                          className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal placeholder:text-charcoal/40 resize-none" 
                          placeholder="Describe the architectural vision and unique features..." 
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4 flex items-center gap-2">
                          <Upload size={10} className="text-gold" /> Asset Visualization (Images)
                        </label>
                        <div className="w-full aspect-video border border-dashed border-charcoal/10 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-gold/30 hover:bg-charcoal/[0.01] transition-all cursor-pointer">
                           <Upload size={32} className="text-gold/40" strokeWidth={1} />
                           <p className="text-[10px] uppercase font-bold tracking-widest text-charcoal/60">Drop High-Res Assets or Browse</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-6 pt-4">
                    {step > 1 && (
                      <button 
                        type="button" 
                        onClick={() => setStep(step - 1)}
                        className="px-10 py-6 border border-charcoal/[0.1] rounded-2xl text-[10px] uppercase tracking-widest font-bold hover:bg-charcoal/[0.05] transition-all text-charcoal"
                      >
                        Previous
                      </button>
                    )}
                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-white text-charcoal py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gold-dark transition-all flex items-center justify-center gap-3 shadow-2xl"
                    >
                      {step === 3 ? "Finalize Submission" : "Next Milestone"}
                      <ChevronRight size={14} />
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-8 relative z-10"
                >
                  <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4 border border-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                     <CheckCircle2 size={48} strokeWidth={1} className="animate-pulse" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-serif italic gold-text">Asset Queued for Review</h2>
                    <p className="text-charcoal/80 font-light max-w-sm mx-auto leading-relaxed">
                      Your master property vision has been submitted. Our elite portfolio team will verify the details and activate the listing shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all"
                  >
                    Post another asset
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
