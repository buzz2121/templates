import { ChevronRight, Target, Heart, Scale, Zap, Award, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white text-left">
      {/* Intro Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80&w=1000" alt="Clinic Interior" className="w-full" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand text-white p-10 rounded-[2rem] shadow-2xl z-20 max-w-xs">
                <div className="text-5xl font-bold mb-2 text-white">15+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Years of Clinical Excellence in Downtown Dubai</div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-brand font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Who We Are</span>
              <h2 className="text-5xl text-slate-900 mb-8 leading-tight tracking-tight">Experience Dental Care in its <span className="font-serif italic text-accent">Purest</span> Form.</h2>
              <p className="text-slate-500 mb-10 leading-relaxed text-lg">
                Elite Dental Care was founded with a single vision: to bridge the gap between hard clinical science and the art of human hospitality. In the heart of Dubai, we've built more than a clinic—we've built a sanctuary.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "Digital Precision", desc: "Latest AI-driven diagnostics" },
                  { title: "Painless Clinic", desc: "Advanced sedation options" },
                  { title: "Bespoke Plans", desc: "Tailored for your unique face" },
                  { title: "Swiss Quality", desc: "Premium materials & labs" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start text-left">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm mb-1 text-left">{item.title}</h4>
                      <p className="text-slate-400 text-xs text-left">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="bg-slate-900 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand hover:shadow-xl transition-all group">
                Download Our Brochure <ChevronRight size={14} className="inline ml-2 group-hover:ml-4 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">The Foundation</span>
              <h2 className="text-4xl text-slate-900 mb-8 tracking-tight">Built on a <span className="font-serif italic text-brand">Legacy of Trust</span>.</h2>
              <div className="space-y-6 text-slate-500 leading-relaxed">
                <p>
                  Started in 2011, Elite Dental Care emerged as a response to the mechanical nature of modern dentistry. We believed that a patient's emotional journey was just as critical as the clinical outcome. 
                </p>
                <p>
                  Over the last decade, we have grown from a boutique 2-chair practice to one of Dubai's most awarded multidisciplinary clinics, housing 18 specialists and serving over 20,000 unique patients.
                </p>
              </div>
              <div className="mt-12 flex gap-12">
                 <div>
                   <span className="block text-3xl font-bold text-brand">2011</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Founded</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-bold text-brand">12+</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clinic Awards</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-bold text-brand">100%</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Swiss Materials</span>
                 </div>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-6">
               <div className="space-y-6">
                  <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" alt="Detail 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-brand rounded-3xl p-8 flex flex-col justify-end text-white">
                    <Award size={32} className="mb-4" />
                    <span className="font-bold">ISO 9001</span>
                    <span className="text-xs text-white/60">Quality Certified</span>
                  </div>
               </div>
               <div className="pt-12 space-y-6">
                  <div className="aspect-square bg-accent rounded-3xl p-8 flex flex-col justify-end text-white">
                    <Users size={32} className="mb-4" />
                    <span className="font-bold">18 Specialists</span>
                    <span className="text-xs text-white/60">In-house</span>
                  </div>
                  <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" alt="Detail 2" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-24">
            <span className="text-brand font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our DNA</span>
            <h2 className="text-5xl text-slate-900 tracking-tight leading-tight">The Values That <span className="font-serif italic text-accent">Drive Us</span>.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="text-brand" />, title: "Precision First", desc: "We don't believe in 'good enough'. Our diagnostic protocols and treatment execution are accurate to the fraction of a millimeter." },
              { icon: <Heart className="text-accent" />, title: "Radical Empathy", desc: "We listen more than we talk. Understanding your fears and aspirations is the first step in every treatment plan." },
              { icon: <Scale className="text-slate-900" />, title: "Ethical Integrity", desc: "No unnecessary treatments. We recommend only what is clinically essential for your long-term health." },
              { icon: <Zap className="text-brand" />, title: "Always Evolving", desc: "Our team spends 200+ hours annually on international training to bring the world's latest techniques to Dubai." },
              { icon: <Award className="text-accent" />, title: "Artisanal Craft", desc: "We view every smile as a unique canvas. Every veneer is hand-finished to match your unique facial anatomy." },
              { icon: <Users className="text-slate-900" />, title: "Global Perspective", desc: "Our team represents 12 nationalities, allowing us to understand the diverse aesthetic preferences of Dubai." }
            ].map((value, i) => (
              <div key={i} className="text-left group cursor-default">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand group-hover:scale-110 transition-all duration-500 group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-brand py-32 text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-12 relative z-10">
              <h2 className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-12">Our Manifest</h2>
              <div className="max-w-4xl mx-auto">
                  <p className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
                      "To provide an unparalleled dental experience that combines world-class clinical precision with human-centric care, ensuring every patient leaves with a smile that reflects their inner radiance."
                  </p>
              </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif italic text-white select-none whitespace-nowrap">
                Elite
             </div>
          </div>
      </section>
    </div>
  );
}
