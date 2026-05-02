
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, LogIn, UserPlus } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-pink-950/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold italic text-pink-950">
                    {isLogin ? 'Welcome Back' : 'Join the Circle'}
                  </h2>
                  <p className="text-pink-400 text-sm mt-1">
                    {isLogin ? 'Enter your details to sign in' : 'Create an account to start blooming'}
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-pink-50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-pink-400" />
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-pink-300 ml-4">Full Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-pink-50/50 border border-pink-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-pink-300 ml-4">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300" />
                    <input 
                      type="email" 
                      placeholder="hello@example.com"
                      className="w-full bg-pink-50/50 border border-pink-100 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-pink-300 ml-4">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300" />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-pink-50/50 border border-pink-100 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                </div>

                <button className="w-full py-4 bg-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all flex items-center justify-center gap-3">
                  {isLogin ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              <div className="mt-8 text-center">
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-pink-600 text-sm font-bold hover:underline"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
