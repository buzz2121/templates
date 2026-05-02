import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CATEGORIES, MOCK_TOURS } from '../data/mockData';
import { TourCard } from '../components/Cards';
import { ChevronRight, Filter, SortAsc, MapPin, Calendar, Clock, Star } from 'lucide-react';
import * as Icons from 'lucide-react';

import { PageWrapper } from '../components/PageWrapper';

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const category = CATEGORIES.find(c => c.slug === slug);
  
  if (!category) {
    return (
      <PageWrapper>
        <div className="pt-32 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-black">Category not found</h1>
          <button onClick={() => navigate('/')} className="mt-4 text-yellow-500 font-bold uppercase tracking-widest text-xs">Return Home</button>
        </div>
      </PageWrapper>
    );
  }

  const IconComponent = (Icons as any)[category.icon];
  
  // Filter tours (simulation based on category query)
  const filteredTours = MOCK_TOURS.filter(tour => 
    tour.tags.some(tag => tag.toLowerCase().includes(category.query.toLowerCase())) ||
    tour.title.toLowerCase().includes(category.query.toLowerCase())
  );

  // If none found, show some anyway for visual richness
  const displayTours = filteredTours.length > 0 ? filteredTours : MOCK_TOURS.slice(0, 4);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-slate-50">
      {/* Dynamic Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <img 
          src={category.heroImage} 
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover blur-[1px] brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-yellow-400/30 rotate-3">
            <IconComponent size={40} className="text-slate-900 -rotate-3" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-yellow-400 font-medium italic drop-shadow-lg">
            {category.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 -mt-20 relative z-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
          
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-50">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                Featured {category.name} <span className="text-slate-200">/</span> <span className="text-xs font-black uppercase text-slate-400 tracking-widest">{displayTours.length} Experiences</span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                <Filter size={14} /> Filter
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                <SortAsc size={14} /> Sort
              </button>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Experience Grid (Alternative Layout for "Good Pages") */}
          <div className="mt-24">
             <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-slate-100" />
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 text-center">More to Discover</h3>
                <div className="h-px flex-1 bg-slate-100" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { title: 'Best for Small Groups', icon: MapPin },
                  { title: 'Eco-Friendly Options', icon: Star },
                  { title: 'Local Hidden Gems', icon: Clock },
                  { title: 'Seasonal Special Deals', icon: Calendar },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50/50 hover:bg-yellow-400 p-8 rounded-[2rem] group cursor-pointer transition-all duration-500 border border-transparent hover:border-yellow-500">
                    <item.icon size={24} className="text-slate-300 group-hover:text-slate-900 mb-6 transition-colors" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 leading-tight">{item.title}</h4>
                    <ChevronRight size={14} className="mt-4 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-2 transition-all" />
                  </div>
                ))}
             </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-24 bg-slate-900 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] -mr-32 -mt-32" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] -ml-32 -mb-32" />
             
             <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tight mb-6">Can't decide on <span className="text-yellow-400">your</span> style?</h3>
             <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-10">Let our experts help you plan the perfect itinerary.</p>
             <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-12 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-yellow-400/20 active:scale-95">
                Contact an Expert
             </button>
          </div>
        </div>
      </section>
    </div>
    </PageWrapper>
  );
}
