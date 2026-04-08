import React, { useState } from 'react';
import { Box, Container, Grid, Snackbar, Alert } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed

// Import the sections
import HeroSection from '../sections/contact/HeroSection';
import FormSection from '../sections/contact/FormSection';
import OfficeInfoSection from '../sections/contact/OfficeInfoSection';
import LocationSection from '../sections/contact/LocationSection';
import FAQSection from '../sections/contact/FAQSection';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenPopup(true);
    }, 1500);
  };

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* ENTRANCE ANIMATION: 
         This wraps everything in a "Drop" effect on page load.
      */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* SECTION 1: FULL HERO */}
        <HeroSection />

        {/* SECTION 2: FORM & INFO 
           Removed Container to eliminate side gaps.
           Used a Grid with width 100% to go edge-to-edge.
        */}
        <Grid 
          container 
          spacing={0} 
          sx={{ 
            width: '100%', 
            position: 'relative', 
            zIndex: 10,
            bgcolor: '#fff' 
          }}
        >
          <FormSection loading={loading} onSubmit={handleSubmit} />
          <OfficeInfoSection />
        </Grid>

        {/* SECTION 3: LOCATION */}
        <Box sx={{ width: '100%' }}>
          <LocationSection />
        </Box>

        {/* SECTION 4: DARK FAQ */}
        <Box sx={{ width: '100%', bgcolor: '#001e29' }}>
          <FAQSection />
        </Box>
      </motion.div>

      {/* POPUP NOTIFICATION */}
      <Snackbar 
        open={openPopup} 
        autoHideDuration={4000} 
        onClose={() => setOpenPopup(false)} 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          icon={<CheckCircle fontSize="inherit" />} 
          sx={{ 
            bgcolor: '#000', 
            color: '#fff', 
            borderRadius: 0, 
            fontWeight: 800,
            borderLeft: '8px solid #fcc419' 
          }}
        >
          Inquiry Sent! We will contact you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;