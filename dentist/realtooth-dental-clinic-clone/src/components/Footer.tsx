import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-24 pb-12">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-100">
                <span className="text-white font-bold text-xl">RT</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800">
                REAL<span className="text-primary-600">TOOTH</span>
              </span>
            </Link>
            <p className="text-slate-500 mb-8 leading-relaxed max-w-sm font-medium">
              Experience the future of dentistry with our advanced laser technology and expert team in the heart of Lucknow.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <div className="absolute top-full left-0 w-8 h-1 bg-primary-600 mt-2" />
            </h4>
            <ul className="space-y-4 font-semibold text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Services', path: '/services' },
                { name: 'About Clinic', path: '/about' },
                { name: 'Our Team', path: '/team' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary-600 transition-colors flex items-center gap-2 group">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-8 relative inline-block">
              Get in Touch
              <div className="absolute top-full left-0 w-8 h-1 bg-primary-600 mt-2" />
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-primary-600 shrink-0" size={20} />
                <address className="not-italic text-sm font-medium leading-relaxed">
                  Realtooth Plaza, Gomti Nagar,<br />
                  Lucknow, UP - 226010
                </address>
              </li>
              <li className="flex gap-4 font-bold text-slate-800">
                <Phone className="text-primary-600 shrink-0" size={20} />
                <p className="text-sm">+91 911 388 3333</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-8 relative inline-block">
              Newsletter
              <div className="absolute top-full left-0 w-8 h-1 bg-primary-600 mt-2" />
            </h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-primary-600 transition-colors font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-xl hover:bg-primary-600 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} Realtooth Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
