import React from 'react';
import { Grid, Typography, TextField, Button, Box, CircularProgress, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// --- STYLED COMPONENTS ---

const StyledContactInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": { 
    color: '#000000', 
    fontWeight: 800,  
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    letterSpacing: '1.5px',
    opacity: 0.9      
  },
  "& .MuiInput-underline:before": { 
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: '2px' 
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { 
    borderBottomColor: '#000' 
  },
  "& .MuiInput-underline:after": { 
    borderBottomColor: '#fcc419',
    borderBottomWidth: '3px'
  },
  "& .MuiInputBase-input": {
    padding: '12px 0',
    fontSize: '1.1rem', 
    fontWeight: 600,    
    color: '#000',      
    "&::placeholder": { color: 'rgba(0,0,0,0.4)', opacity: 1 }
  }
}));

const FormSection = ({ loading, onSubmit }) => (
  <Box sx={{ bgcolor: '#ffffff', py: 10 }}>
    <Container maxWidth="1md">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {/* Header Area */}
        <Box sx={{ mb: 6, borderTop: '8px solid #fcc419', pt: 4 }}>
          <Typography variant="overline" sx={{ color: '#fcc419', fontWeight: 1000, letterSpacing: 3, mb: 1, display: 'block', fontSize: '0.9rem' }}>
            Direct Inquiry
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 1000, mb: 3, color: '#000', letterSpacing: -1, fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Request a Consultation
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', fontWeight: 500, maxWidth: '600px', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Fill out the form below. Our technical engineering team will review your requirements and contact you shortly.
          </Typography>
        </Box>

        {/* Form Area */}
        <Box component="form" onSubmit={onSubmit} noValidate>
          <Grid container spacing={5}> 
            <Grid item xs={12} sm={6}>
              <StyledContactInput required fullWidth label="Full Name" variant="standard" placeholder="Enter your full name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledContactInput required fullWidth label="Email Address" variant="standard" placeholder="example@domain.com" />
            </Grid>
            <Grid item xs={12}>
              <StyledContactInput required fullWidth label="Nature of Service" variant="standard" placeholder="e.g. Residential, Capsule, or Commercial Lift" />
            </Grid>
            <Grid item xs={12}>
              <StyledContactInput required fullWidth label="Detailed Requirements" multiline rows={4} variant="standard" placeholder="Provide specific details about your project..." />
            </Grid>
            
            <Grid item xs={12} sx={{ mt: 2 }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  disabled={loading} 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#000', 
                    color: '#fff', 
                    px: 10, 
                    py: 2, 
                    borderRadius: '4px', 
                    fontWeight: 900, 
                    letterSpacing: 2, 
                    fontSize: '1rem', 
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)', 
                    "&:hover": { bgcolor: '#fcc419', color: '#000' }, 
                    transition: 'all 0.3s ease' 
                  }}
                >
                  {loading ? <CircularProgress size={26} color="inherit" /> : 'SUBMIT ENQUIRY'}
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default FormSection;