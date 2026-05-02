import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_TOURS } from '../data/mockData';
import { Star, Clock, MapPin, Share, Heart, CheckCircle2, ChevronRight, Users, Ticket } from 'lucide-react';

import { PageWrapper } from '../components/PageWrapper';

export default function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = MOCK_TOURS.find(t => t.id === id);

  if (!tour) return <div className="pt-32 text-center font-black uppercase tracking-widest text-slate-400">Tour not found</div>;

  return (
    <PageWrapper>
      <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 py-12">
          {/* Photos & Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
              <span className="hover:text-slate-900 cursor-pointer" onClick={() => navigate('/')}>Home</span>
              <ChevronRight size={12} />
              <span>{tour.location}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[0.95]">{tour.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 border-b pb-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-yellow-400">
                  <Star size={20} fill="currentColor" />
                  <span className="ml-1 text-lg font-black text-slate-900">{tour.rating}</span>
                </div>
                <span className="text-sm font-bold text-slate-400">({tour.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={18} className="text-[#00af87]" />
                <span className="text-sm font-bold uppercase tracking-widest">{tour.location}</span>
              </div>
            </div>

            {/* Grid Layout for Photos */}
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-12">
              <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden">
                <img src={tour.image} className="w-full h-full object-cover" alt="Main" />
              </div>
              <div className="col-span-2 row-span-1 rounded-[2rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Detail 1" />
              </div>
              <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Detail 2" />
              </div>
              <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden bg-slate-900 relative">
                <img src="https://images.unsplash.com/photo-1550114891-220bb9128581?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-50" alt="Detail 3" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black uppercase text-xs tracking-widest">+12 More</span>
                </div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-black tracking-tighter italic mb-4">About this experience</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Discover the magic of {tour.location} with our award-winning tour. Get skip-the-line access to the most popular sights and enjoy expert commentary from our local guides. Perfect for families, couples, and solo adventurers looking to make the most of their visit.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Clock, label: 'Duration', val: tour.duration },
                  { icon: Users, label: 'Capacity', val: 'Max 12 guests' },
                  { icon: Ticket, label: 'Ticket', val: 'Instant delivery' },
                  { icon: HelpCircle, label: 'Language', val: 'English, Spanish' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="bg-white p-2 rounded-lg shadow-sm"><item.icon size={20} className="text-slate-900" /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                      <p className="text-sm font-extrabold text-slate-900 leading-none">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Widget Sidebar */}
          <aside className="w-full lg:w-[400px]">
            <div className="sticky top-32 bg-white border border-slate-100 shadow-2xl rounded-[2.5rem] p-8">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price From</p>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">${tour.price}</p>
                </div>
                <div className="bg-yellow-400/10 text-yellow-500 font-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest">
                  Best Price
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Select Date & Travelers</p>
                  <div className="flex items-center justify-between font-extrabold text-slate-900">
                    <span>Oct 24, 2026</span>
                    <span className="text-yellow-600 hover:underline cursor-pointer italic">Change</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4">
                  <CheckCircle2 className="text-[#00af87]" size={18} />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-[0.1em]">Free cancellation available</span>
                </div>
              </div>

              <button className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black uppercase text-sm tracking-widest rounded-2xl transition-all shadow-xl shadow-yellow-400/30 active:scale-95">
                Reserve Now & Pay Later
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-8 text-slate-400">
                <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors">
                  <Heart size={20} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Wishlist</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors">
                  <Share size={20} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Share</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}

function HelpCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}
