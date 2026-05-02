import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import Locations from '../components/Locations';

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-24 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Connect With Us</h1>
        <p className="text-primary-200 font-medium">Your journey to a perfect smile starts with a simple message.</p>
      </div>

      <Locations />
      
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-600">Have a question or want to book an appointment? Fill out the form and our team will get back to you shortly.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Phone</h4>
                    <p className="text-slate-600">+91 911 388 3333</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email</h4>
                    <p className="text-slate-600">info@realtooth.in</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Location</h4>
                    <p className="text-slate-600">Realtooth Plaza, Gomti Nagar, Lucknow, UP - 226010</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-primary-600 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-primary-600 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-primary-600 transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:border-primary-600 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
