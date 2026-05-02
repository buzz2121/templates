import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXPLORE_DATA, DESTINATIONS } from '../data/mockData';
import { ChevronRight, Search, Map, Compass, TrendingUp, Globe, Ticket } from 'lucide-react';
import { motion } from 'motion/react';

import { PageWrapper } from '../components/PageWrapper';

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState<'Top activities' | 'Top landmarks' | 'Explore the world'>('Top activities');
  const [activeSubCat, setActiveSubCat] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setActiveSubCat(EXPLORE_DATA[activeTab].categories[0].id);
  }, [activeTab]);

  const currentTabContent = EXPLORE_DATA[activeTab];
  const currentLinks = (currentTabContent.links as any)[activeSubCat] || [];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

      {/* Hero / Header for Explore */}
      <section className="bg-neutral-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2800" 
            alt="Explore bg"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-neutral-950/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block bg-yellow-400 text-slate-900 font-black px-4 py-1.5 rounded-xl text-[10px] uppercase tracking-[0.2em] mb-8">
            Discovery Engine
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9] italic">
             Find your <span className="text-yellow-400">next</span> adventure
          </h1>
          <p className="text-slate-300 font-medium text-lg mb-12 max-w-2xl mx-auto">
            Discover thousands of handpicked experiences from local experts across the globe.
          </p>

          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[2.5rem] blur opacity-25 group-focus-within:opacity-50 transition duration-1000 group-focus-within:duration-200"></div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Where to? (e.g. Tokyo, Paris, Hiking...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && navigate(`/search?q=${searchQuery}`)}
                className="w-full bg-white border border-slate-100 rounded-[2rem] py-7 px-16 text-slate-900 placeholder:text-slate-400 font-bold outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all text-xl shadow-2xl"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-yellow-500 transition-colors" size={28} />
              <button 
                onClick={() => navigate(`/search?q=${searchQuery}`)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-10 py-4 rounded-[1.5rem] font-black uppercase text-xs tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories and Links Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 mb-20 items-center justify-center">
            {(['Top activities', 'Top landmarks', 'Explore the world'] as const).map(tab => {
                const Icon = tab === 'Top activities' ? Compass : tab === 'Top landmarks' ? Map : Globe;
                return (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-10 py-4 rounded-[1.5rem] flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-300 transform ${
                      activeTab === tab 
                        ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105' 
                        : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                    }`}
                  >
                    <Icon size={16} className={activeTab === tab ? 'text-yellow-400' : 'text-slate-300'} />
                    {tab}
                  </button>
                );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sidebar Subcategories */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-3">
              <div className="p-3 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 mt-2 ml-4">Browse Collection</p>
                {currentTabContent.categories.map((cat) => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveSubCat(cat.id)}
                    className={`w-full flex items-center justify-between p-5 rounded-[1.8rem] text-left transition-all duration-300 group ${
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

              {activeTab === 'Explore the world' && (
                <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group cursor-pointer shadow-2xl" onClick={() => window.open('https://www.viator.com/blog', '_blank')}>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-[50px] -mr-16 -mt-16 group-hover:bg-yellow-400/20 transition-all duration-700" />
                   <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Compass className="text-yellow-400" size={24} />
                     </div>
                     <h4 className="text-2xl font-black italic tracking-tighter mb-4">Viator Blog</h4>
                     <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8">Expert tips, hidden gems, and destination guides curated by locals.</p>
                     <span className="text-yellow-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Read stories <ChevronRight size={14} /></span>
                   </div>
                </div>
              )}
            </div>

            {/* Content Results Grid */}
            <div className="lg:col-span-8 xl:col-span-9">
               <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                       <TrendingUp size={24} className="text-yellow-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black tracking-tighter">Popular in <span className="text-slate-400 italic">this category</span></h2>
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Curated selection of top experiences</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-900 bg-slate-100 px-4 py-2 rounded-full uppercase tracking-widest">{currentLinks.length} results</span>
               </div>

               <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={activeTab + activeSubCat}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
               >
                {currentLinks.map((link: string, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => navigate(`/search?q=${encodeURIComponent(link)}`)}
                    className="group relative p-8 bg-slate-50 hover:bg-white rounded-[2.5rem] text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-slate-100 overflow-hidden"
                  >
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-colors pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center group-hover:bg-slate-900 shadow-sm transition-all duration-500">
                          <Ticket size={20} className="text-slate-400 group-hover:text-yellow-400" />
                        </div>
                        {idx % 5 === 0 && (
                          <span className="text-[8px] font-black uppercase tracking-widest text-yellow-600 bg-yellow-400/10 px-2 py-1 rounded-lg">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 leading-relaxed mb-4">
                        {link}
                      </h3>
                      
                      <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100/50 group-hover:border-slate-100 transition-colors">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-yellow-600 transition-colors flex items-center gap-2">
                          Explore Now <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[9px] font-medium text-slate-300">from $45</span>
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>

              {currentLinks.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 text-center bg-slate-50 rounded-[3rem]">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                    <Compass size={36} className="text-slate-200 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest italic">Inventory Updating</h3>
                  <p className="text-slate-400 text-sm font-medium mt-4 max-w-xs mx-auto">We're currently scouring the globe for the very best experiences in this category. Check back soon!</p>
                </div>
              )}

              {/* Discovery Asset Cards */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="relative h-80 rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl shadow-slate-200/50" onClick={() => navigate('/search?q=europe')}>
                    <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Discover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                       <span className="bg-yellow-400 text-slate-900 font-black px-4 py-1.5 rounded-xl text-[9px] uppercase tracking-[0.2em] mb-4 w-fit">Seasonal Curator</span>
                       <h5 className="text-white font-black text-4xl tracking-tighter mb-4 leading-none">Best of <br />European Summer</h5>
                       <span className="text-white/60 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Explore the list <ChevronRight size={14} /></span>
                    </div>
                 </div>
                 <div className="relative h-80 rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl shadow-slate-200/50" onClick={() => navigate('/search?q=adventure')}>
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Discover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-80" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                       <span className="bg-slate-900 text-white font-black px-4 py-1.5 rounded-xl text-[9px] uppercase tracking-[0.2em] mb-4 w-fit">Trending Adventures</span>
                       <h5 className="text-white font-black text-4xl tracking-tighter mb-4 leading-none">The Great <br />Outdoors</h5>
                       <span className="text-white/60 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">See activities <ChevronRight size={14} /></span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageWrapper>
  );
}
