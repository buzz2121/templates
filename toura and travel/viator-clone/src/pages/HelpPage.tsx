import React from 'react';
import { Mail, Phone, MessageSquare, Search, FileText, LifeBuoy } from 'lucide-react';

import { PageWrapper } from '../components/PageWrapper';

export default function HelpPage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-slate-900 font-black px-4 py-1.5 rounded-xl text-[10px] uppercase tracking-[0.2em] mb-6">
            Help Center
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-6 italic">How can we help <span className="text-yellow-400">you</span>?</h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Find answers to common questions, manage your bookings, and get in touch with our experts.
          </p>
          
          <div className="mt-10 max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-yellow-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for articles, bookings, or policies..."
              className="w-full h-16 pl-16 pr-6 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 text-slate-900 font-bold placeholder:text-slate-300 transition-all text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: FileText, title: 'Manage Bookings', desc: 'Change dates, cancel reservations, or update your information.' },
            { icon: MessageSquare, title: 'Contact Us', desc: 'Our team of travel experts is available 24/7 to assist you.' },
            { icon: LifeBuoy, title: 'FAQs', desc: 'Frequently asked questions about payments, tickets, and more.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-yellow-400 shadow-sm transition-all duration-500">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-black tracking-tight text-slate-900 mb-4 uppercase italic">
                {item.title}
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest text-yellow-500 hover:text-yellow-600 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 italic">Still need <span className="text-yellow-400">support</span>?</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl backdrop-blur-md">
                <Phone className="text-yellow-400" />
                <div className="text-left font-black tracking-widest uppercase text-[10px]">
                  <p className="text-white/60 mb-1">Call Us</p>
                  <p>+1 (800) VIATOR-HELP</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl backdrop-blur-md">
                <Mail className="text-yellow-400" />
                <div className="text-left font-black tracking-widest uppercase text-[10px]">
                  <p className="text-white/60 mb-1">Email Support</p>
                  <p>support@viator.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
