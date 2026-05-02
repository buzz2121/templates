/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// Pages
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetailPage from './pages/BlogPostDetailPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <SmoothScroll>
          <div className="relative min-h-screen">
            {/* Premium Touches */}
            <div className="grain-overlay" />
            <FloatingCTA />
            
            {/* Layout */}
            <Navbar />
            
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:id" element={<ServiceDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<LegalPage />} />
                <Route path="/terms" element={<LegalPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </ThemeProvider>
  );
}
