import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../sections/contact/HeroSection";
import FormSection from "../sections/contact/FormSection";
import OfficeInfoSection from "../sections/contact/OfficeInfoSection";
import LocationSection from "../sections/contact/LocationSection";
import FAQSection from "../sections/contact/FAQSection";

const ContactPage = () => (
  <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
    <HeroSection />
    <FormSection />
    <OfficeInfoSection />
    <LocationSection />
    <FAQSection />
  </Box>
);

export default ContactPage;
