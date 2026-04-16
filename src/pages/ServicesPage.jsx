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
  const badgeLabels = [
    "ISO 9001:2015",
    "IS 14665 (Part 3)",
    "PMC Approved",
    "CE Safety Rated"
  ];

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
      {/* 2. COMPLIANCE RIBBON (Premium Version) */}
<Box
  component={motion.div}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  sx={{
    py: { xs: 6, md: 8 },
    bgcolor: "#f8f9fb",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee"
  }}
>
  <Container maxWidth="lg">
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      {/* LEFT TEXT */}
      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          sx={{
            color: "#C5A059",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: 3,
            mb: 1
          }}
        >
          ENGINEERING EXCELLENCE
        </Typography>

        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            color: "#0F172A"
          }}
        >
          Certified & Trusted Standards
        </Typography>
      </Box>

      {/* RIGHT BADGES */}
      <Stack
        direction="row"
        spacing={2}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {badgeLabels.map((badge, i) => (
          <Box
            key={i}
            component={motion.div}
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sx={{
              px: 2.5,
              py: 1.5,
              minWidth: "180px", // 👈 keeps all cards same width
              height: "48px",    // 👈 equal height for perfect alignment
            
              display: "flex",           // 👇 center fix
              alignItems: "center",
              justifyContent: "center",
            
              textAlign: "center",
            
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.8rem",
            
              bgcolor: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              color: "#0F172A",
            
              transition: "all 0.3s ease",
            
              "&:hover": {
                bgcolor: "#C5A059",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(197,160,89,0.4)"
              }
            }}
          >
            {badge}
          </Box>
        ))}
      </Stack>
    </Stack>
  </Container>
</Box>
      <ServiceCTA />
      
    </Box>
  );
};

export default ServicesPage;
