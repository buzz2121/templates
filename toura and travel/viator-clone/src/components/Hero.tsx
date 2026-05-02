import React, { useState } from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <section className="relative h-[550px] flex items-center justify-center pt-20" id="hero-section">
      {/* Background with HD Travel Image */}
      <div 
        className="absolute inset-0 z-0 bg-neutral-900 overflow-hidden"
      >
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-neutral-900/20 z-10" />
        
        <img 
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2800" 
          alt="hero" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Memories you'll <span className="text-yellow-400 italic">never</span> forget
        </motion.h1>

        {/* Search Widget */}
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row items-center gap-1 border-4 border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="search-widget"
        >
          {/* Destination */}
          <div className="flex-1 w-full flex flex-col items-start px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors">
            <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Where to?</span>
            <input 
              type="text" 
              placeholder="Paris, France" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-extrabold text-sm p-0 outline-none placeholder:text-slate-300"
            />
          </div>

          <div className="hidden md:block w-px h-8 bg-slate-100" />

          {/* Date Picker */}
          <div className="hidden md:flex flex-col items-start px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors w-48 relative">
            <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">When?</span>
            <div className="custom-datepicker-wrapper w-full">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select dates"
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-extrabold text-sm p-0 outline-none cursor-pointer"
                dateFormat="MMM d, yyyy"
              />
            </div>
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="w-full md:w-auto px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black uppercase text-xs tracking-widest rounded-xl transition-all active:scale-95 shadow-lg shadow-yellow-400/20"
          >
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
};
