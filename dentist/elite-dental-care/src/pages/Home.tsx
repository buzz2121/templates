import { motion } from 'motion/react';
import { ChevronRight, Sparkles, ShieldCheck, Stethoscope, HeartPulse, Syringe, Baby, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const services = [
  { 
    title: "Scaling & Polishing", 
    icon: <Sparkles className="w-8 h-8 text-brand" />,
    desc: "Maintain your oral health with professional cleaning and deep scaling.",
    category: "Maintenance"
  },
  { 
    title: "Invisalign", 
    icon: <ShieldCheck className="w-8 h-8 text-brand" />,
    desc: "The clear alternative to braces for a beautiful, straight smile.",
    category: "Orthodontics"
  },
  { 
    title: "Dental Veneers", 
    icon: <Stethoscope className="w-8 h-8 text-brand" />,
    desc: "Transform your smile with custom-made, durable porcelain veneers.",
    category: "Cosmetic"
  },
  { 
    title: "Teeth Straightening", 
    icon: <HeartPulse className="w-8 h-8 text-brand" />,
    desc: "Orthodontic solutions for children and adults using modern techniques.",
    category: "Orthodontics"
  },
  { 
    title: "Dental Implants", 
    icon: <Syringe className="w-8 h-8 text-brand" />,
    desc: "Permanent and natural-looking solution for missing teeth.",
    category: "Implants"
  },
  { 
    title: "Pediatric Dentistry", 
    icon: <Baby className="w-8 h-8 text-brand" />,
    desc: "Specialized dental care for infants and children in a friendly environment.",
    category: "Prevention"
  }
];

export const doctors = [
  { name: "Dr. Aarav Sharma", role: "General Dentist", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. Vikram Malhotra", role: "Lead Dentist & Specialist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. Sophia Khan", role: "Orthodontist", img: "https://images.unsplash.com/photo-1594824813573-c6bc5244f76d?auto=format&fit=crop&q=80&w=400" }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative lg:min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 lg:pt-0">
        <div className="max-w-7xl mx-auto px-12 w-full grid lg:grid-cols-2 gap-20 items-center text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 py-20 lg:py-0"
          >
            <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Experience Excellence</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 tracking-tight">
              Redefining Your <span className="font-serif italic text-brand">Dental Journey</span> in Dubai.
            </h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-normal max-w-lg">
              Award-winning dental care combining world-class expertise with cutting-edge technology for your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/services" className="bg-brand text-white px-10 py-5 rounded-lg font-bold text-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 inline-block text-center">
                GET STARTED TODAY
              </Link>
              <Link to="/gallery" className="border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-lg font-bold text-sm hover:bg-slate-50 transition-all transform hover:-translate-y-1 inline-block text-center">
                VIEW OUR WORKS
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-6 border-t border-slate-100 pt-10">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="patient" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <span className="block font-bold text-slate-900 text-lg">15,000+ Happy Patients</span>
                <div className="flex items-center text-accent text-sm">
                  ★★★★★ <span className="text-slate-400 text-xs ml-3 font-semibold uppercase tracking-widest">(4.9/5 Rating)</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] bg-slate-100 rounded-[3rem] shadow-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Clinic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-brand/10 group-hover:bg-brand/0 transition-colors duration-700" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-xl grid grid-cols-2 gap-8">
                <div className="border-l-4 border-accent pl-5">
                  <span className="block text-3xl font-bold text-slate-900 tracking-tight">18+</span>
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Specialists</span>
                </div>
                <div className="border-l-4 border-brand pl-5">
                  <span className="block text-3xl font-bold text-slate-900 tracking-tight">24/7</span>
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Emergency</span>
                </div>
                <div className="border-l-4 border-brand pl-5">
                  <span className="block text-3xl font-bold text-slate-900 tracking-tight">0%</span>
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Finance</span>
                </div>
                <div className="border-l-4 border-accent pl-5">
                  <span className="block text-3xl font-bold text-slate-900 tracking-tight">#1</span>
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Clinic Dubai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Table Section */}
      <section className="bg-brand py-20 text-center">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "15+", label: "Experience" },
              { val: "20k+", label: "Patients" },
              { val: "18", label: "Specialists" },
              { val: "4.9/5", label: "Rating" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-sans font-bold text-white mb-2">{stat.val}</div>
                <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid Style */}
      <section className="py-32 bg-white text-left">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">The Elite Edge</span>
            <h2 className="text-5xl text-slate-900 tracking-tight leading-tight">Why Discerning Patients <br/><span className="font-serif italic text-brand">Choose Us.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-slate-900 rounded-[3rem] p-16 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck className="text-brand" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Swiss-Quality Standards</h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  We import the finest materials from Switzerland and Germany, ensuring that your dental restorations are not just beautiful, but built to last a lifetime.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-3xl group-hover:bg-brand/20 transition-all duration-700 pointer-events-none" />
            </div>

            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Search className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">AI Diagnostics</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Using advanced AI imaging, we detect issues 2 years before they become visible to the human eye. Prevention redefined.
              </p>
            </div>

            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <HeartPulse className="text-brand" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Painless Clinic</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Experience dental care without the anxiety. Our specialized sedation options ensure a completely stress-free experience.
              </p>
            </div>

            <div className="md:col-span-2 bg-accent rounded-[3rem] p-16 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-2/3 text-left">
                  <h3 className="text-3xl font-bold mb-6 text-white">Family-Centered Care</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    From your toddler's first checkup to advanced geriatric dentistry, we provide a warm, sanctuary-like environment for every generation.
                  </p>
                </div>
                <div className="md:w-1/3">
                   <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-white">
                      <Baby size={40} className="mb-4 text-white" />
                      <span className="block font-bold">Kids Corner</span>
                      <span className="text-xs text-white/70">Specialized Pediatric Wing</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white text-left">
        <div className="max-w-4xl mx-auto px-12">
          <div className="text-center mb-20">
            <span className="text-brand font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Answers</span>
            <h2 className="text-5xl text-slate-900 tracking-tight leading-tight">Frequently Asked <span className="font-serif italic text-brand">Questions.</span></h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "Do you accept international insurance?", a: "Yes, we work with most major international and local insurance providers including AXA, Bupa, and Daman. Our concierge team can help verify your coverage." },
              { q: "Is valet parking available?", a: "Absolutely. We offer complimentary valet parking for all our patients at the Downtown Dubai office entrance." },
              { q: "How long does a smile makeover take?", a: "Depending on the complexity, a full smile makeover can range from 2 visits (for veneers) to several months (for orthodontics). We provide a detailed timeline during your initial consult." },
              { q: "Do you offer financing?", a: "Yes, we offer 0% interest payment plans for up to 12 months for select treatments through our banking partners." }
            ].map((item, i) => (
              <div key={i} className="group border-b border-slate-100 pb-6">
                <button className="flex justify-between items-center w-full py-4 text-left font-bold text-xl text-slate-900 group-hover:text-brand transition-colors">
                  <span>{item.q}</span>
                  <ChevronRight size={20} className="text-accent group-hover:rotate-90 transition-all" />
                </button>
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                  <p className="text-slate-500 py-4 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="bg-brand rounded-[4rem] p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-sm">Ready to Reveal Your <span className="font-serif italic text-accent font-normal">Best Smile?</span></h2>
              <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium">
                Join 20,000+ happy patients who have transformed their lives through elite dental care. Book your bespoke consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link to="/contact" className="bg-accent text-white px-12 py-6 rounded-2xl font-bold text-sm hover:bg-accent-dark transition-all transform hover:-translate-y-1">
                    BOOK AN APPOINTMENT
                 </Link>
                 <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all transform hover:-translate-y-1">
                    EXPLORE SERVICES
                 </Link>
              </div>
            </div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Section link preview */}
      <section className="py-32 bg-slate-50 text-left">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Services</span>
                <h2 className="text-5xl text-slate-900 tracking-tight leading-tight">Advanced Dentistry for <span className="font-serif italic text-brand">Exceptional</span> Smiles.</h2>
              </div>
              <Link to="/services" className="text-slate-900 font-bold text-[10px] uppercase tracking-widest hover:text-brand transition-colors">View All Services →</Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-10 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
      </section>
    </div>
  );
}
