import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography, alpha } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { contactContent } from "../../content/siteContent";
import { Reveal } from "../../components/motion/Reveal";

const FAQSection = () => (
  <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#102332", color: "#f5f1ea" }}>
    <Container maxWidth="md">
      <Reveal>
        <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2, textAlign: "center" }}>
          Frequently Asked
        </Typography>
        <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, lineHeight: 1.08, textAlign: "center", mb: 5 }}>
          Questions before the first site visit.
        </Typography>
      </Reveal>

      <Box>
        {contactContent.faqs.map((faq) => (
          <Accordion
            key={faq.q}
            disableGutters
            sx={{
              backgroundColor: "transparent",
              color: "#f5f1ea",
              boxShadow: "none",
              borderBottom: `1px solid ${alpha("#ffffff", 0.1)}`,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore sx={{ color: "#d6a53a" }} />} sx={{ px: 0 }}>
              <Typography sx={{ fontWeight: 800 }}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography sx={{ color: alpha("#ffffff", 0.72), lineHeight: 1.85 }}>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  </Box>
);

export default FAQSection;
