import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const HeroBox = styled(Box)({
  height: '100vh', // Full screen height
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  backgroundImage: 'url("https://aaronelevators.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-10.10.18-723x1024.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // Parallax effect
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,30,41,0.9))',
    zIndex: 1
  }
});

const HeroSection = () => (
  <HeroBox>
    <Box sx={{ zIndex: 2, px: 3 }}>
      <motion.div 
        initial={{ opacity: 0, y: -50, scale: 0.9 }} 
        animate={{ opacity: 1, y: 0, scale: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography 
          variant="overline" 
          sx={{ letterSpacing: 10, color: '#fcc419', fontWeight: 900, fontSize: '1rem' }}
        >
          FOUR S ELEVATORS
        </Typography>
        
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 1000, 
            fontSize: { xs: '3.5rem', md: '6.5rem' }, 
            mt: 2, 
            letterSpacing: -3,
            lineHeight: 1
          }}
        >
          READY TO <span style={{ color: '#fcc419' }}>ELEVATE?</span>
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Typography variant="h6" sx={{ mt: 4, fontWeight: 300, letterSpacing: 2 }}>
            SCROLL TO EXPLORE
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  </HeroBox>
);

export default HeroSection;