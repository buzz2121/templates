import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_TOURS } from '../data/mockData';
import { TourCard } from '../components/Cards';
import { Filter, SlidersHorizontal, Map } from 'lucide-react';

import { PageWrapper } from '../components/PageWrapper';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const filteredTours = MOCK_TOURS.filter(t => {
    const searchStr = query.toLowerCase();
    if (!searchStr) return true;
    
    const title = t.title.toLowerCase();
    const location = t.location.toLowerCase();
    const tags = t.tags.map(tag => tag.toLowerCase());
    
    // Check for full match
    if (title.includes(searchStr) || location.includes(searchStr) || tags.some(tag => tag.includes(searchStr))) return true;
    
    // Check for word-by-word match
    const words = searchStr.split(' ').filter(w => w.length > 2);
    if (words.length > 0) {
      return words.some(w => title.includes(w) || location.includes(w) || tags.some(tag => tag.includes(w)));
    }
    
    return false;
  });

  return (
    <PageWrapper>
      <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-8 py-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-72 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-32">
            <h3 className="font-black text-xs uppercase tracking-widest mb-6">Filter By</h3>
            
            <div className="space-y-8">
              <div>
                <p className="text-sm font-bold mb-4">Price Range</p>
                <input type="range" className="w-full accent-yellow-400" />
                <div className="flex justify-between text-[10px] font-black text-slate-400 mt-2">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold mb-4">Categories</p>
                <div className="space-y-2">
                  {['Tours', 'Tickets', 'Food', 'Adventure'].map(c => (
                    <label key={c} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-yellow-400 focus:ring-yellow-400" />
                      <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900">{c}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold mb-4">Tour Type</p>
                <div className="space-y-2">
                  {['Private Tours', 'Walking Tours', 'Day Trips', 'Boat Tours', 'Nightlife', 'Museums'].map(t => (
                    <label key={t} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-yellow-400 focus:ring-yellow-400" />
                      <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold mb-4">Duration</p>
                <div className="space-y-2">
                  {['0-1 hours', '1-4 hours', '4-24 hours', '2+ days'].map(d => (
                    <label key={d} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-yellow-400 focus:ring-yellow-400" />
                      <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{d}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold mb-4">Rating</p>
                <div className="space-y-3">
                  {[5, 4, 3].map(r => (
                    <label key={r} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="rating" className="w-4 h-4 border-slate-200 text-yellow-400 focus:ring-yellow-400" />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < r ? 'text-yellow-400' : 'text-slate-200'}`}>★</span>
                        ))}
                        <span className="text-[10px] font-black text-slate-400 ml-1">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-black tracking-tighter">
                {filteredTours.length} experiences in <span className="text-yellow-500 italic">{query || 'World'}</span>
              </h1>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 text-xs font-black uppercase tracking-widest hover:border-yellow-400 transition-all">
                  <SlidersHorizontal size={14} />
                  Sort
                </button>
                <button className="flex lg:hidden items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 text-xs font-black uppercase tracking-widest hover:border-yellow-400 transition-all">
                  <Filter size={14} />
                  Filters
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all">
                  <Map size={14} />
                  Map View
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-100 border-dashed">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No experiences found for your search.</p>
                <button className="mt-4 text-yellow-500 font-black hover:underline underline-offset-4">Try a different destination</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
