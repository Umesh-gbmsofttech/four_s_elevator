import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  alpha 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Hardened Imports for Vite
import ExpandMore from '@mui/icons-material/ExpandMore';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';

// --- STYLED COMPONENTS ---

const FAQWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff', // Clean White Theme
  padding: theme.spacing(15, 0),
  color: '#000000', // Primary Text Black
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#000000',
  boxShadow: 'none',
  borderBottom: `1px solid ${alpha('#000000', 0.1)}`, // Soft Black Border
  '&:before': { display: 'none' },
  '&.Mui-expanded': {
    backgroundColor: alpha('#fcc419', 0.05), // Very light brand tint when open
  },
}));

// --- TECHNICAL FAQ DATA ---

const elevatorFaqs = [
  {
    q: "Do you provide Pitless or Low-Pit solutions?",
    a: "Yes. For existing homes where digging a deep pit is not possible, we offer advanced MRL (Machine Room-Less) and Pitless elevator solutions that require minimal structural changes to your flooring."
  },
  {
    q: "Can the elevator be installed according to Vastu?",
    a: "Certainly. Our technical team works closely with your architects to ensure the elevator placement (usually in the South or West) complies with Vastu principles while maintaining structural integrity."
  },
  {
    q: "What is the difference between a Traction and Hydraulic lift?",
    a: "Traction lifts are faster and more energy-efficient for high-rise buildings, while Hydraulic lifts are ideal for low-rise homes (2-4 floors) as they don't require a machine room on top and offer a smoother start/stop experience."
  },
  {
    q: "How energy efficient are Four S Elevators?",
    a: "Our elevators utilize VVVF (Variable Voltage Variable Frequency) drives and LED lighting systems as standard, which can reduce your building's energy consumption by up to 40% compared to traditional lift systems."
  },
  {
    q: "What kind of post-installation support do you provide?",
    a: "We provide 1 year of free comprehensive maintenance with every new installation. After that, we offer tiered AMC (Annual Maintenance Contracts) that include 24/7 emergency breakdown support and monthly safety audits."
  }
];

// --- MAIN COMPONENT ---

const FAQSection = () => {
  return (
    <FAQWrapper>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <QuestionAnswer sx={{ fontSize: '3.5rem', color: '#fcc419', mb: 2 }} />
            <Typography variant="overline" sx={{ color: '#fcc419', fontWeight: 900, letterSpacing: 4 }}>
              TECHNICAL INSIGHTS
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 1000, mt: 1, letterSpacing: -2, color: '#000' }}>
              Industry <span style={{ color: '#fcc419' }}>FAQs</span>
            </Typography>
            <Box sx={{ width: '60px', height: '4px', bgcolor: '#fcc419', mx: 'auto', mt: 2 }} />
          </Box>

          {/* FAQ List */}
          <Box>
            {elevatorFaqs.map((faq, index) => (
              <StyledAccordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: '#000', fontSize: '2rem' }} />} // Black Arrow
                  sx={{ px: 2, py: 1 }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: '1.2rem', color: '#000' }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: alpha('#000', 0.7), lineHeight: 1.8, fontSize: '1.05rem', pb: 2 }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </Box>
        </motion.div>
      </Container>
    </FAQWrapper>
  );
};

export default FAQSection;