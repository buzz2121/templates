import { Mail, Instagram, Twitter, Youtube, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32">
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
           <p className="text-gold text-[11px] font-bold tracking-[0.5em] uppercase">Connect With Us</p>
           <h1 className="text-6xl md:text-8xl font-serif">The First <br /><span className="italic">Step</span></h1>
           <div className="h-[1px] w-20 bg-gold mx-auto" />
           <p className="text-xl text-charcoal/60 leading-relaxed font-light">
             We look forward to hearing about your vision and how we can bring it to life.
           </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream border-y border-gold/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-20">
            <div className="space-y-12">
               <h2 className="text-4xl font-serif">Contact Information</h2>
               <div className="space-y-8">
                 <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                     <Mail size={24} className="text-gold group-hover:text-white" />
                   </div>
                   <div>
                     <p className="text-[10px] tracking-widest font-bold uppercase text-charcoal/40 mb-1">Email</p>
                     <p className="text-xl font-serif">hello@buzzmanagement.com</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                     <Phone size={24} className="text-gold group-hover:text-white" />
                   </div>
                   <div>
                     <p className="text-[10px] tracking-widest font-bold uppercase text-charcoal/40 mb-1">Phone</p>
                     <p className="text-xl font-serif">+1 (310) 555-0100</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                     <MapPin size={24} className="text-gold group-hover:text-white" />
                   </div>
                   <div>
                     <p className="text-[10px] tracking-widest font-bold uppercase text-charcoal/40 mb-1">Offices</p>
                     <p className="text-xl font-serif">Los Angeles • New York • London</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="space-y-8">
               <h3 className="text-[11px] tracking-[0.4em] uppercase font-bold text-gold">Follow The Excellence</h3>
               <div className="flex gap-6">
                 <a href="#" className="w-12 h-12 border border-charcoal/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all hover:text-white"><Instagram size={20} /></a>
                 <a href="#" className="w-12 h-12 border border-charcoal/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all hover:text-white"><Twitter size={20} /></a>
                 <a href="#" className="w-12 h-12 border border-charcoal/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all hover:text-white"><Youtube size={20} /></a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-12 md:p-20 shadow-2xl">
            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2 group">
                  <p className="text-[9px] tracking-widest font-bold text-charcoal/40 uppercase">Full Name</p>
                  <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-4 outline-none focus:border-gold transition-colors text-charcoal tracking-widest uppercase text-[11px]" />
                </div>
                <div className="space-y-2 group">
                  <p className="text-[9px] tracking-widest font-bold text-charcoal/40 uppercase">Email Address</p>
                  <input type="email" className="w-full bg-transparent border-b border-charcoal/10 py-4 outline-none focus:border-gold transition-colors text-charcoal tracking-widest uppercase text-[11px]" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2 group">
                  <p className="text-[9px] tracking-widest font-bold text-charcoal/40 uppercase">Event Type</p>
                  <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-4 outline-none focus:border-gold transition-colors text-charcoal tracking-widest uppercase text-[11px]" />
                </div>
                <div className="space-y-2 group">
                  <p className="text-[9px] tracking-widest font-bold text-charcoal/40 uppercase">Event Date</p>
                  <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-4 outline-none focus:border-gold transition-colors text-charcoal tracking-widest uppercase text-[11px]" />
                </div>
              </div>
              <div className="space-y-2 group">
                  <p className="text-[9px] tracking-widest font-bold text-charcoal/40 uppercase">Your Message</p>
                  <textarea rows={4} className="w-full bg-transparent border-b border-charcoal/10 py-4 outline-none focus:border-gold transition-colors text-charcoal tracking-widest uppercase text-[11px] resize-none"></textarea>
              </div>
              
              <div className="pt-10">
                <button className="group relative overflow-hidden px-16 py-8 bg-charcoal text-white text-[12px] font-bold tracking-[0.5em] uppercase shadow-2xl w-full">
                  <span className="relative z-10 transition-colors group-hover:text-gold-light">Send Inquiry</span>
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
