import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { CategoryBar } from '../components/CategoryBar';
import { TourCard, DestinationCard } from '../components/Cards';
import { MOCK_TOURS, DESTINATIONS, EXPLORE_DATA } from '../data/mockData';
import { Clock, ShieldCheck, Ticket, Users, ChevronRight, Smartphone, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import { PageWrapper, ScrollReveal } from '../components/PageWrapper';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'Top activities' | 'Top landmarks' | 'Explore the world'>('Top activities');
  const [activeSubCat, setActiveSubCat] = useState<string>('');
  const navigate = useNavigate();

  // Initialize subcat if not set
  React.useEffect(() => {
    setActiveSubCat(EXPLORE_DATA[activeTab].categories[0].id);
  }, [activeTab]);

  const currentTabContent = EXPLORE_DATA[activeTab];
  const currentLinks = (currentTabContent.links as any)[activeSubCat] || [];

  return (
    <PageWrapper>
      <main>
        <Hero />
        <CategoryBar />

        {/* Benefits Section */}
        <section className="bg-white py-14" id="benefits">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 border border-slate-100 transition-all hover:shadow-lg">
                <div className="bg-yellow-400 p-3 rounded-xl shadow-md"><Clock className="text-slate-900" size={24} /></div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest mb-1">Free Cancellation</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Up to 24h prior</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 border border-slate-100 transition-all hover:shadow-lg">
                <div className="bg-slate-900 p-3 rounded-xl shadow-md"><ShieldCheck className="text-yellow-400" size={24} /></div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest mb-1">Secure Booking</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reserve now, pay later</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 border border-slate-100 transition-all hover:shadow-lg">
                <div className="bg-yellow-400 p-3 rounded-xl shadow-md"><Ticket className="text-slate-900" size={24} /></div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest mb-1">Trusted Quality</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified experiences</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 border border-slate-100 transition-all hover:shadow-lg">
                <div className="bg-slate-900 p-3 rounded-xl shadow-md"><Users className="text-yellow-400" size={24} /></div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest mb-1">Expert Support</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">24/7 Global help</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      {/* Popular Destinations Bento Grid */}
      <section className="py-20" id="destinations">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-tighter mb-2">Popular Destinations</h2>
                <p className="text-slate-500 font-medium uppercase text-[10px] tracking-widest">Pick your next favorite place to visit</p>
              </div>
              <button 
                onClick={() => navigate('/search')}
                className="bg-slate-100 hover:bg-yellow-400 text-slate-900 font-black uppercase text-[10px] tracking-widest px-6 py-2 rounded-full transition-colors"
              >
                See all
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
              <DestinationCard 
                name={DESTINATIONS[1].name} 
                image={DESTINATIONS[1].image} 
                className="col-span-2 row-span-2" 
              />
              <DestinationCard 
                name={DESTINATIONS[0].name} 
                image={DESTINATIONS[0].image} 
                className="col-span-1 row-span-1" 
              />
              <DestinationCard 
                name={DESTINATIONS[3].name} 
                image={DESTINATIONS[3].image} 
                className="col-span-1 row-span-1" 
              />
              <DestinationCard 
                name={DESTINATIONS[4].name} 
                image={DESTINATIONS[4].image} 
                className="col-span-2 row-span-1" 
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Explore Section */}
      <section className="pb-28 pt-24 bg-white relative overflow-hidden" id="explore-section">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 italic">Uncover the <span className="text-yellow-400">Extraordinary</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {(['Top activities', 'Top landmarks', 'Explore the world'] as const).map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 transform ${
                    activeTab === tab 
                      ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105' 
                      : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar / Subcategories */}
            <div className="lg:col-span-3 space-y-2">
              <div className="p-2 bg-slate-50 rounded-[2rem] border border-slate-100">
                {currentTabContent.categories.map((cat) => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveSubCat(cat.id)}
                    className={`w-full flex items-center justify-between p-5 rounded-[1.5rem] text-left transition-all duration-300 group ${
                      activeSubCat === cat.id 
                        ? 'bg-white shadow-xl shadow-slate-200/50 text-slate-900' 
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">{cat.name}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      activeSubCat === cat.id ? 'bg-yellow-400 text-slate-900' : 'bg-transparent group-hover:bg-slate-100'
                    }`}>
                      <ChevronRight size={14} className={activeSubCat === cat.id ? 'translate-x-0.5 transition-transform' : 'text-slate-300'} />
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-8 px-4">
                <button 
                  onClick={() => navigate('/explore')}
                  className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500 hover:text-yellow-600 transition-all"
                >
                  <span className="relative">
                    See full inventory
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                  </span>
                  <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight size={12} />
                  </div>
                </button>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-9">
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={activeTab + activeSubCat}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {currentLinks.map((link: string, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => navigate(`/search?q=${encodeURIComponent(link)}`)}
                    className="group relative p-8 bg-slate-50 hover:bg-white rounded-[2.5rem] text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-slate-100 overflow-hidden"
                  >
                    {/* Decorative element */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-colors" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center group-hover:bg-slate-900 shadow-sm transition-all duration-500">
                          <Ticket size={20} className="text-slate-400 group-hover:text-yellow-400" />
                        </div>
                        {idx % 4 === 0 && (
                          <span className="text-[8px] font-black uppercase tracking-widest text-yellow-600 bg-yellow-400/10 px-2 py-1 rounded-lg">
                            Trending
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 leading-relaxed mb-4">
                        {link}
                      </h3>
                      
                      <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-yellow-600 transition-colors">
                        Explore Now <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>

              {currentLinks.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck size={32} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-300 uppercase tracking-widest italic">Coming Soon</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Curating exclusive experiences for this category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Top Experiences */}
      <section className="py-20 bg-slate-50" id="top-experiences">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black tracking-tighter mb-2">Top Experiences on Viator</h2>
                <p className="text-slate-500 font-medium uppercase text-[10px] tracking-widest">Highly-rated tours people are raving about</p>
              </div>
              <button className="text-slate-900 hover:text-yellow-500 font-black uppercase text-[10px] tracking-widest transition-colors">View All Activities</button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {MOCK_TOURS.slice(0, 4).map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-12 px-4 md:px-6">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto bg-neutral-900 rounded-[2.5rem] overflow-hidden relative min-h-[450px] flex items-center shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000" 
                alt="Promo bg"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/40 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 md:p-20 max-w-2xl">
              <div className="inline-block bg-yellow-400 text-slate-900 font-black px-4 py-1.5 rounded-xl text-[10px] uppercase tracking-[0.2em] mb-8">
                Exclusive Deal
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
                Adventure is <br /><span className="text-yellow-400 italic">calling</span> your name
              </h2>
              <p className="text-slate-300 text-lg mb-10 font-medium leading-relaxed max-w-md">
                Unlock limited-time discounts of up to 40% on European summers.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-12 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/20">
                Book My Trip
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Best Sellers */}
      <section className="py-20" id="best-sellers">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black tracking-tighter mb-2 italic">Best Sellers</h2>
                <p className="text-slate-500 font-medium uppercase text-[10px] tracking-widest">The most popular experiences this month</p>
              </div>
              <button className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest px-8 py-3 rounded-xl transition-all hover:bg-yellow-400 hover:text-slate-900">Explore All</button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {MOCK_TOURS.slice(2, 6).map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* App Promo */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden" id="app-promo">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-16 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] -z-0" />
            
            <div className="flex-1 z-10 text-center md:text-left">
              <div className="inline-block bg-white text-slate-900 font-black px-4 py-1.5 rounded-lg text-[10px] uppercase tracking-widest mb-8">
                Travel Better
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Experience <br /><span className="text-yellow-400 italic">more</span> on the app</h2>
              <p className="text-slate-400 text-lg mb-12 font-medium max-w-lg mx-auto md:mx-0">
                Exclusive mobile-only deals, offline tickets, and real-time alerts. Join 10M+ travelers today.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-5">
                <div className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all group">
                  <div className="bg-white p-2.5 rounded-xl shadow-inner group-hover:bg-yellow-400 transition-colors">
                    <Smartphone size={22} className="text-slate-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-white/60 uppercase font-black tracking-widest">Apple Store</p>
                    <p className="text-white font-black leading-none mt-1">Download</p>
                  </div>
                </div>
                <div className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all group">
                  <div className="bg-white p-2.5 rounded-xl shadow-inner group-hover:bg-yellow-400 transition-colors">
                    <PlayCircle size={22} className="text-slate-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-white/60 uppercase font-black tracking-widest">Google Play</p>
                    <p className="text-white font-black leading-none mt-1">Download</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center z-10">
              <div className="relative w-full max-w-[320px] h-[640px] bg-slate-800 border-[12px] border-slate-700 rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
                 <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                  alt="App UI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
      </main>
    </PageWrapper>
  );
}
