import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BookingWidget() {
  const navigate = useNavigate();
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-4rem] mb-16">
      <div className="bg-[#141414] border border-royal-white/10 p-4 md:p-6 lg:rounded-none shadow-2xl">
        <form className="flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between">
          
          <div className="flex-1 w-full md:w-auto md:border-r border-royal-white/10 px-4">
            <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-1">Check-in</label>
            <div className="flex items-center gap-2">
              <input 
                type="date" 
                className="bg-transparent text-royal-white text-sm outline-none w-full font-light" 
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto md:border-r border-royal-white/10 px-4">
            <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-1">Check-out</label>
            <div className="flex items-center gap-2">
              <input 
                type="date" 
                className="bg-transparent text-royal-white text-sm outline-none w-full font-light" 
              />
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto px-4">
            <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-1">Guests</label>
            <div className="flex items-center gap-2">
              <select className="bg-transparent text-royal-white text-sm outline-none w-full font-light appearance-none" defaultValue={"2"}>
                <option value="1" className="bg-royal-dark">1 Adult</option>
                <option value="2" className="bg-royal-dark">2 Adults</option>
                <option value="3" className="bg-royal-dark">2 Adults, 1 Child</option>
                <option value="4" className="bg-royal-dark">Family (4)</option>
              </select>
              <Users size={16} className="text-royal-gold shrink-0" />
            </div>
          </div>

          <div className="w-full md:w-auto mt-4 md:mt-0 pl-0 md:pl-4">
            <button 
              type="button"
              onClick={() => navigate('/book')}
              className="w-full md:w-auto bg-royal-gold text-royal-dark hover:bg-royal-white px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
            >
              Check Availability
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
