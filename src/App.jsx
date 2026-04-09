import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = React.lazy(() => import("./pages/PrivacyPolicyPage"));
import ScrollToTopButton from "./components/ScrollToTop";
import ContactModal from "./components/ContactModal";
import { Navbar } from "./sections/Navbar";
import Footer from "./sections/Footer";
import LeadCapturePopup from "./components/LeadCapturePopup";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [contactModalOpen, setContactModalOpen] = React.useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />
      <ScrollToTopButton />
      <LeadCapturePopup onOpenContactModal={() => setContactModalOpen(true)} />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Suspense>
      <Footer onOpenContactModal={() => setContactModalOpen(true)} />
      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </Router>
  );
}

export default App;
