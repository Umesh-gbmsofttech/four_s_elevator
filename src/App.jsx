import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage'; // 1. IMPORT THE CONTACT PAGE
import ScrollToTopButton from './components/ScrollToTop';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ScrollToTopButton />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        
        {/* 2. ADD THE CONTACT ROUTE HERE */}
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;