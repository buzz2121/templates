import React from 'react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export const CategoryBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 overflow-hidden" id="category-bar">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-8 py-4 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat, idx) => {
          const IconComponent = (Icons as any)[cat.icon] || Icons.Map;
          return (
            <div 
              key={idx} 
              onClick={() => navigate(`/category/${cat.slug}`)}
              className="flex flex-col items-center gap-2 cursor-pointer group min-w-fit"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all border border-transparent group-hover:border-yellow-400 shadow-sm">
                <IconComponent size={20} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 whitespace-nowrap transition-colors">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
