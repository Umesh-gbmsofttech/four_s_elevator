import React from "react";
import { Box, Container, Stack, Typography, alpha } from "@mui/material";

const sections = [
  {
    title: "Information We Collect",
    body:
      "When you contact Four S Elevators through this website, we may collect your name, phone number, email address, project type, site details, and any other information you submit in our inquiry forms.",
  },
  {
    title: "How We Use Information",
    body:
      "We use the submitted information to respond to your inquiries, arrange consultations or site visits, prepare quotations, provide maintenance or support assistance, and improve our customer communication process.",
  },
  {
    title: "Sharing of Information",
    body:
      "We do not sell your personal information. Your details may be shared only with authorized team members or service partners when required to support your request or deliver a requested service.",
  },
  {
    title: "Data Security",
    body:
      "We take reasonable administrative and technical precautions to protect your information. However, no website or transmission method can be guaranteed to be completely secure.",
  },
  {
    title: "Third-Party Services",
    body:
      "This website may use third-party services such as maps, hosting, analytics, and lead collection tools. Those services may have their own privacy practices and policies.",
  },
  {
    title: "Contact",
    body:
      "If you have any questions about this Privacy Policy, please contact Four S Elevators at 4selevators@gmail.com or call +91 89750 11818, +91 73505 90674, or +91 88055 43746.",
  },
];

const PrivacyPolicyPage = () => (
  <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
    <Box sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 8, md: 10 }, backgroundColor: "#102332", color: "#f5f1ea" }}>
      <Container maxWidth="lg">
        <Typography sx={{ color: "#d6a53a", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 800, mb: 2 }}>
          Privacy Policy
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, lineHeight: 1.05, maxWidth: 900 }}>
          How Four S Elevators handles website inquiry data.
        </Typography>
        <Typography sx={{ mt: 3, color: alpha("#ffffff", 0.74), lineHeight: 1.9, maxWidth: 760, fontSize: "1.08rem" }}>
          This page explains how we collect, use, and protect the information submitted through our website.
        </Typography>
      </Container>
    </Box>

    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          {sections.map((section) => (
            <Box key={section.title} sx={{ p: { xs: 3, md: 4 }, borderRadius: "28px", backgroundColor: "#fffdfa", boxShadow: "0 18px 50px rgba(0,0,0,0.04)", border: `1px solid ${alpha("#102332", 0.06)}` }}>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.35rem", md: "1.6rem" }, fontWeight: 900, color: "#102332", mb: 1.5 }}>
                {section.title}
              </Typography>
              <Typography sx={{ color: "#5f6d79", lineHeight: 1.9 }}>{section.body}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default PrivacyPolicyPage;
