import React from 'react';
import { Star, Clock, Heart, Zap } from 'lucide-react';
import { Tour } from '../data/mockData';
import { Link, useNavigate } from 'react-router-dom';

export interface TourCardProps {
  tour: Tour;
  key?: string | number;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Link to={`/tour/${tour.id}`} className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer" id={`tour-${tour.id}`}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-sm transition-colors backdrop-blur-sm z-10" onClick={(e) => e.preventDefault()}>
          <Heart size={18} />
        </button>
        {tour.badge && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 text-[9px] font-black px-2.5 py-1.5 rounded-lg shadow-sm uppercase tracking-widest z-10">
            {tour.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
          {tour.location}
        </div>
        <h3 className="text-base font-extrabold text-slate-900 mb-4 line-clamp-2 min-h-[48px] leading-tight group-hover:text-slate-900 transition-colors">
          {tour.title}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center text-yellow-400">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-sm font-black text-slate-900">{tour.rating}</span>
          </div>
          <span className="text-xs font-bold text-slate-400">({tour.reviews.toLocaleString()} reviews)</span>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-black tracking-widest text-slate-500">
            <Clock size={14} className="text-slate-300" />
            <span>{tour.duration}</span>
          </div>
          <div className="text-right">
            <p className="text-[12px] font-black text-slate-900">${tour.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export interface DestinationCardProps {
  name: string;
  image: string;
  className?: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ name, image, className = "" }) => {
  const navigate = useNavigate();
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden group cursor-pointer ${className}`} 
      id={`dest-${name}`}
      onClick={() => navigate(`/search?q=${encodeURIComponent(name)}`)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-6 left-6 z-20">
        <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Featured Destination</p>
        <h4 className="text-white text-2xl font-black tracking-tighter">{name}</h4>
      </div>
    </div>
  );
};
