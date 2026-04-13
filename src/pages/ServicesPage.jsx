// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography, alpha } from "@mui/material";
import { servicesContent } from "../content/siteContent";
import { motion, useScroll, useSpring } from "framer-motion";

// Components
import ServiceHeader from "../sections/services/ServiceHeader";
import ServiceItem from "../sections/services/ServiceItem";
import ServiceCTA from "../sections/services/ServiceCTA";
import AdvancedTechFlower from "../sections/services/AdvancedTechFlower";
import AdvanceEnginer from "../sections/services/AdvanceEnginer";

const ServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box component="main" sx={{ backgroundColor: "#FFFFFF", overflowX: "hidden", position: "relative" }}>
      
      {/* 1. INTERACTIVE SHAFT NAVIGATION (The Vertical Progress) */}
      <Box sx={{ 
        position: "fixed", 
        left: { xs: 10, md: 40 }, 
        top: "20%", 
        height: "60vh", 
        width: "2px", 
        bgcolor: alpha("#0F172A", 0.05),
        zIndex: 100,
        display: { xs: "none", lg: "block" }
      }}>
        <motion.div 
          style={{ 
            scaleY, 
            transformOrigin: "top", 
            backgroundColor: "#d6a53a",
            width: "100%",
            height: "100%"
          }} 
        />
        {/* Floor Markers */}
        {[0, 1, 2, 3, 4].map((floor) => (
          <Box key={floor} sx={{ 
            position: "absolute", 
            top: `${floor * 25}%`, 
            left: -4, 
            width: 10, 
            height: 10, 
            borderRadius: "50%", 
            bgcolor: "#fff", 
            border: `2px solid ${alpha("#0F172A", 0.1)}` 
          }} />
        ))}
      </Box>

      <ServiceHeader 
        title={servicesContent.heroTitle} 
        subtitle={servicesContent.heroText} 
      />

      {/* Main Services Loop */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="xl">
          <Stack spacing={4}>
            {servicesContent.items.map((item, idx) => (
              <ServiceItem 
                key={item.title}
                item={item}
                index={idx}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Engineering & Tech Sections */}
      <AdvanceEnginer />
      <AdvancedTechFlower />

      {/* 2. COMPLIANCE RIBBON (The Authority Proof) */}
      <Box sx={{ 
        py: 6, 
        borderTop: "1px solid #f0f0f0", 
        borderBottom: "1px solid #f0f0f0",
        bgcolor: "#fafafa" 
      }}>
        <Container>
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            justifyContent="space-between" 
            alignItems="center" 
            spacing={4}
            sx={{ opacity: 0.6, filter: "grayscale(100%)" }}
          >
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#0F172A", letterSpacing: 2 }}>
              ENGINEERING STANDARDS:
            </Typography>
            {/* Replace these with actual SVGs of ISO/IS logos */}
            <Typography sx={{ fontWeight: 700 }}>ISO 9001:2015</Typography>
            <Typography sx={{ fontWeight: 700 }}>IS 14665 (PART 3)</Typography>
            <Typography sx={{ fontWeight: 700 }}>PUNE MUNICIPAL CORP. CERTIFIED</Typography>
            <Typography sx={{ fontWeight: 700 }}>CE SAFETY RATED</Typography>
          </Stack>
        </Container>
      </Box>

      <ServiceCTA />
      
    </Box>
  );
};

export default ServicesPage;