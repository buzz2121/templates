import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import TeamPage from './pages/Team';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTAs />
      </div>
    </Router>
  );
}
