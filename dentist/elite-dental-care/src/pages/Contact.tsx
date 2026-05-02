import { motion } from 'motion/react';
import { 
  Phone, MapPin, Clock, Send, Laptop, Coffee, 
  Car, Instagram, Twitter, Linkedin, MessageSquare, 
  Sparkles, ShieldCheck, Globe
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header Section */}
      <section className="pt-40 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase mb-8 block font-sans">Connect With Excellence</span>
            <h1 className="text-6xl md:text-8xl text-slate-900 tracking-tighter leading-[0.9] mb-10 font-bold">
              The First Step <br />
              <span className="font-serif italic text-brand font-normal">Towards</span> Perfection.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-normal">
              Whether you're seeking a routine check-up or a life-changing smile transformation, our concierge team is ready to curate your journey.
            </p>
          </motion.div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      </section>

      {/* Interactive Contact Matrix */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Direct Intel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group border border-slate-800 shadow-2xl">
                <div className="relative z-10 text-left">
                   <div className="flex items-center gap-4 mb-12">
                      <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center">
                        <Phone size={24} className="text-white" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Immediate Assistance</span>
                        <h3 className="text-2xl font-bold text-white">+971 4 385 6001</h3>
                      </div>
                   </div>
                   
                   <div className="space-y-10">
                      <div className="flex gap-6 items-start">
                        <MapPin size={24} className="text-accent shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">Our Atelier</h4>
                          <p className="text-white/60 text-sm leading-relaxed">Precision Plaza, Level 4, Al Wasl, <br />Downtown Dubai, UAE</p>
                        </div>
                      </div>

                      <div className="flex gap-6 items-start">
                        <Clock size={24} className="text-accent shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">Experience Hours</h4>
                          <p className="text-white/60 text-sm leading-relaxed">Mon — Fri: 09:00 - 21:00 <br />Sat: 10:00 - 18:00 (Elite Service only)</p>
                        </div>
                      </div>
                   </div>

                   <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-4">
                      {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                        <div key={i} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand transition-all cursor-pointer">
                          <Icon size={20} className="text-white" />
                        </div>
                      ))}
                   </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-3xl group-hover:bg-brand/20 transition-all duration-700 pointer-events-none" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-left">
                   <Globe className="text-brand mb-4" size={28} />
                   <h5 className="font-bold text-slate-900 mb-2 leading-tight">International Patients</h5>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Personal Concierge</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-left">
                   <ShieldCheck className="text-accent mb-4" size={28} />
                   <h5 className="font-bold text-slate-900 mb-2 leading-tight">Insurance Support</h5>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Direct Billing</p>
                </div>
              </div>
            </div>

            {/* Right Column: Request Portal */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-100 rounded-[3rem] shadow-2xl p-12 md:p-20 text-left">
                <div className="mb-12 text-left">
                   <div className="flex items-center gap-4 mb-4 text-brand">
                      <Sparkles size={20} />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">Priority Request</span>
                   </div>
                   <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Schedule Your Visit</h2>
                </div>

                <form className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3 relative group">
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-transparent border-b-2 border-slate-100 py-4 text-slate-900 focus:border-brand outline-none transition-all peer placeholder-transparent"
                        placeholder="John Doe"
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-brand pointer-events-none"
                      >
                        Full Name
                      </label>
                    </div>

                    <div className="space-y-3 relative group">
                      <input 
                        type="email" 
                        id="email"
                        className="w-full bg-transparent border-b-2 border-slate-100 py-4 text-slate-900 focus:border-brand outline-none transition-all peer placeholder-transparent"
                        placeholder="john@example.com"
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-brand pointer-events-none"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3 relative group">
                      <input 
                        type="tel" 
                        id="phone"
                        className="w-full bg-transparent border-b-2 border-slate-100 py-4 text-slate-900 focus:border-brand outline-none transition-all peer placeholder-transparent"
                        placeholder="+971"
                      />
                      <label 
                        htmlFor="phone"
                        className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-brand pointer-events-none"
                      >
                        Phone Number
                      </label>
                    </div>

                    <div className="space-y-3 relative group">
                      <select 
                        className="w-full bg-transparent border-b-2 border-slate-100 py-4 text-slate-900 focus:border-brand outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>General Consultation</option>
                        <option>Smile Makeover</option>
                        <option>Dental Implants</option>
                        <option>Orthodontics</option>
                      </select>
                      <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Primary Interest
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3 relative group">
                    <textarea 
                      rows={3} 
                      className="w-full bg-transparent border-b-2 border-slate-100 py-4 text-slate-900 focus:border-brand outline-none transition-all peer placeholder-transparent resize-none"
                      placeholder="Message"
                    ></textarea>
                    <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Notes for specialists (Optional)
                    </label>
                  </div>

                  <button type="button" className="w-full bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.3em] py-8 rounded-[1.5rem] hover:bg-brand transition-all flex items-center justify-center gap-4 group">
                    <span>Send Secure Request</span>
                    <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Access */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Car className="text-brand" />, title: "Valet Arrival", desc: "Premium arrival service with dedicated clinical attendants." },
              { icon: <Coffee className="text-accent" />, title: "Luxe Lounge", desc: "Sip specialty coffee or herbal infusions while you wait." },
              { icon: <Laptop className="text-slate-900" />, title: "Digital Journey", desc: "Instant access to your cloud-based digital mockups." },
              { icon: <MessageSquare className="text-brand" />, title: "WhatsApp 24/7", desc: "Direct access to our nurse advisors for post-care questions." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 text-left hover:shadow-xl transition-all duration-500">
                 <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                 <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Strip / Aesthetic Visual */}
      <section className="h-[500px] bg-slate-200 relative group overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="The Atelier" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl text-center border border-white/20">
               <MapPin className="text-brand mx-auto mb-4" size={40} />
               <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">Visit The Atelier</h3>
               <p className="text-sm text-slate-500 mb-8 font-medium">Al Wasl Road, Wing B, Level 4 <br />Dubai, UAE</p>
               <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand transition-all">
                  Open in Maps
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}

