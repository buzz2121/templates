import { Phone, MapPin, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-brand text-white text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">Location: Elite Dental Care, Downtown Dubai, UAE</span>
        </div>
        <div className="flex gap-8">
          <span className="flex items-center gap-2">Call Us: +971 4 385 6001</span>
          <span className="flex items-center gap-2">WhatsApp: +971 52 123 4567</span>
        </div>
      </div>
    </div>
  );
}
