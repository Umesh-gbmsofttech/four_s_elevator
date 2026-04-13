// src/pages/AboutPage.jsx
import React from "react";
import { Box } from "@mui/material";
import AboutHero from "../sections/about/AboutHero";
import AboutStats from "../sections/about/AboutStats";
import AboutStory from "../sections/about/AboutStory";
import AboutValues from "../sections/about/AboutValues";
import AboutMission from "../sections/about/AboutMission";
import { aboutContent } from "../content/siteContent";
import ServiceCTA from "../sections/services/ServiceCTA";

const AboutPage = () => {
  return (
    <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
      <AboutHero  
        title={aboutContent.heroTitle} 
        subtitle={aboutContent.heroText} 
      />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <AboutMission />
      <ServiceCTA/>
    </Box>
  );
};

export default AboutPage;