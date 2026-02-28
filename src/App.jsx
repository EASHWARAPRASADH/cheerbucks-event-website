import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="font-sans antialiased bg-white text-gray-900 selection:bg-primary-200 selection:text-primary-900 flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Breadcrumbs />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919176468656"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.282-.355.446-.52.149-.164.074-.347.037-.5-.074-.153-.112-1.447-.712-1.672-.796-.225-.084-.374-.126-.523-.126-.149 0-.298.074-.446.223-.148.148-.566.547-.566.547-.298.446-.223 1.236.223 2.34.966 2.34.966 1.105 1.125 2.336 1.733 2.336 1.733.566.298 1.057.223 1.407-.149.349-.298.566-.896.566-.896.298-.447.596-.298.896-.149.3.149 1.831.896 1.831.896.298.149.523.074.67-.149.146-.223.566-.896.566-.896.149-.298.298-.597.446-.896.149-.298.223-.596.149-.896-.074-.3-.896-1.105-1.653-2.209-1.653-2.209-.298-.447-.596-.447-.896-.447-.3 0-.596.149-.896.447-.3.298-.896.896-.896.896-.523.896-1.236 1.344-1.236 1.344-.67.447-1.236.67-1.236.67-.523 0-1.057-.223-1.58-.67-.523-.447-1.057-1.125-1.58-2.01-.523-.887-.785-1.733-.785-2.46 0-.727.262-1.344.785-1.867.523-.523 1.125-.785 1.807-.785.682 0 1.284.262 1.807.785.523.523.785 1.125.785 1.807 0 .682-.262 1.284-.785 1.807-.523.523-1.125.785-1.807.785-.682 0-1.284-.262-1.807-.785-.523-.523-.785-1.125-.785-1.807 0-.682.262-1.284.785-1.807.523-.523 1.125-.785 1.807-.785.682 0 1.284.262 1.807.785.523.523.785 1.125.785 1.807 0 .682-.262 1.284-.785 1.807-.523.523-1.125.785-1.807.785z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
