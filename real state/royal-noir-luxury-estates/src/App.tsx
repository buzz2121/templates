import { motion } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

// Page Imports
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Agents from "./pages/Agents";
import Compare from "./pages/Compare";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background selection:bg-primary selection:text-black">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster theme="dark" />
      </div>
    </BrowserRouter>
  );
}
