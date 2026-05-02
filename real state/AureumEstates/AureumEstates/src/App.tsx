import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Projects from "./pages/Projects";
import CommunityDetail from "./pages/CommunityDetail";
import Contact from "./pages/Contact";
import PostProperty from "./pages/PostProperty";
import VirtualTour from "./components/VirtualTour";
import { Property } from "./constants";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [activeTourProperty, setActiveTourProperty] = useState<Property | null>(null);

  useEffect(() => {
    const handleOpenTour = (event: any) => {
      setActiveTourProperty(event.detail);
    };

    window.addEventListener('open-virtual-tour', handleOpenTour);
    return () => window.removeEventListener('open-virtual-tour', handleOpenTour);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative selection:bg-gold/20 selection:text-white">
        <div className="cinematic-bg" />
        <Navbar />
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<CommunityDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/post-property" element={<PostProperty />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        {/* Global Virtual Tour Layer */}
        <AnimatePresence>
          {activeTourProperty && (
            <VirtualTour 
              property={activeTourProperty} 
              onClose={() => setActiveTourProperty(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
