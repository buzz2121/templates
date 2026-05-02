import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import Estates from './pages/Estates';
import EstateDetails from './pages/EstateDetails';
import Compare from './pages/Compare';
import About from './pages/About';
import Journal from './pages/Journal';
import Investors from './pages/Investors';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col">
          <CustomCursor />
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/estates" element={<Estates />} />
              <Route path="/estates/:id" element={<EstateDetails />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/investors" element={<Investors />} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating Enquiry Button */}
          <div className="fixed bottom-10 right-10 z-50">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#DBC18D] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group relative"
            >
              <MessageCircle size={28} />
              <span className="absolute right-20 bg-brand-dark text-white px-4 py-2 rounded-sm text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold tracking-widest hidden lg:block">
                Enquire Now
              </span>
            </motion.button>
          </div>
        </div>
      </SmoothScroll>
    </Router>
  );
}
