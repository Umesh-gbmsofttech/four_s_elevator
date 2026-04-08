import React from 'react';
import { Box } from '@mui/material';

const LocationSection = () => (
  <Box sx={{ height: '500px', width: '100%', filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}>
    <iframe 
      title="map" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471223405!2d73.78056580665518!3d18.524545041088734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d4317791a045e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712610000000!5m2!1sen!2sin" 
      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
    />
  </Box>
);

export default LocationSection;