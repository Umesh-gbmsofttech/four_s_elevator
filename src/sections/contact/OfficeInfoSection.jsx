import React from 'react';
import { Typography, Stack, Box, alpha, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';

// --- STYLED COMPONENTS ---

const InfoWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#001e29', // Four S Brand Ink Blue
  color: '#fff',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  // Change 1: Small Box - Reduced height from 600px to 450px
  minHeight: '450px', 
  overflow: 'hidden',
  boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
  borderRadius: '4px',
}));

const DetailsSide = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: '300px',
  // Reduced padding slightly to maintain balance with the new height
  padding: theme.spacing(8, 6), 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 2, 
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 3),
  }
}));

const ImageSide = styled(Box)({
  flex: 1,
  minWidth: '300px',
  // Change 2: NEW LIFT IMAGE - Clean modern elevator doors
  backgroundImage: 'url("https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // Maintaining cinematic filter to match brand colors
  filter: 'grayscale(1) contrast(1.2) brightness(0.7)', 
  position: 'relative',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.02)', // Subtle zoom effect on hover
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, #001e29 0%, rgba(0,30,41,0) 100%)',
    opacity: 0.6
  }
});

const IconCircle = styled(Box)({
  width: '56px',
  height: '56px',
  backgroundColor: alpha('#fcc419', 0.1),
  border: `1px solid ${alpha('#fcc419', 0.3)}`,
  color: '#fcc419',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const ContactLine = ({ icon, label, val }) => (
  <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
    <IconCircle>
      {React.cloneElement(icon, { sx: { fontSize: '1.8rem' } })}
    </IconCircle>
    <Box>
      <Typography variant="overline" sx={{ color: '#fcc419', fontWeight: 900, letterSpacing: 2, display: 'block', mb: 0.5 }}>
        {label}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3 }}>
        {val}
      </Typography>
    </Box>
  </Box>
);

const OfficeInfoSection = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', py: { xs: 5, md: 10 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <InfoWrapper>
            {/* LEFT SIDE: CONTACT DETAILS */}
            <DetailsSide>
              <Box sx={{ mb: 4 }}> {/* Reduced bottom margin */}
                <Typography variant="h3" sx={{ fontWeight: 1000, mb: 1, letterSpacing: -1 }}>
                  Direct <span style={{ color: '#fcc419' }}>Contact</span>
                </Typography>
                <Box sx={{ width: '60px', height: '4px', bgcolor: '#fcc419' }} />
              </Box>

              <Stack spacing={4}> {/* Reduced spacing between items */}
                <ContactLine 
                  icon={<LocationOn />} 
                  label="HEADQUARTERS" 
                  val="402, Industrial Estate, Pune, Maharashtra, India" 
                />
                <ContactLine 
                  icon={<Phone />} 
                  label="PHONE LINE" 
                  val="+91 7592056788" 
                />
                <ContactLine 
                  icon={<Email />} 
                  label="OFFICIAL EMAIL" 
                  val="info@fours.in" 
                />
                <ContactLine 
                  icon={<AccessTime />} 
                  label="STUDIO HOURS" 
                  val="Mon - Sat: 9:00 AM - 6:00 PM" 
                />
              </Stack>

              <Box sx={{ mt: 6, opacity: 0.4 }}> {/* Reduced top margin */}
                <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 3 }}>
                  FOUR S ELEVATORS • EST 2008
                </Typography>
              </Box>
            </DetailsSide>

            {/* RIGHT SIDE: MODERN LIFT IMAGE */}
            <ImageSide />
          </InfoWrapper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OfficeInfoSection;