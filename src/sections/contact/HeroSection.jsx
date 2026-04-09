import React from "react";
import { Box, Chip, Container, Typography, alpha } from "@mui/material";
import { contactContent } from "../../content/siteContent";
import { siteMedia } from "../../assets/siteMedia";
import { Reveal } from "../../components/motion/Reveal";

const HeroSection = () => (
  <Box
    sx={{
      position: "relative",
      minHeight: { xs: "70svh", md: "80vh" },
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      color: "#fff",
      backgroundColor: "#08131d",
    }}
  >
    <Box sx={{ position: "absolute", inset: 0 }}>
      <Box component="video" src={siteMedia.heroVideo} autoPlay muted loop playsInline sx={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,19,29,0.3), rgba(8,19,29,0.9))" }} />
    </Box>

    <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 10, md: 14 } }}>
      <Reveal>
        <Chip
          label="Contact Four S"
          sx={{
            mb: 3,
            color: "#f5f1ea",
            backgroundColor: alpha("#ffffff", 0.08),
            border: `1px solid ${alpha("#ffffff", 0.12)}`,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.8rem" }, fontWeight: 900, lineHeight: 1.05, maxWidth: 880 }}>
          {contactContent.heroTitle}
        </Typography>
        <Typography sx={{ mt: 3, maxWidth: 680, color: alpha("#ffffff", 0.76), lineHeight: 1.9, fontSize: "1.15rem" }}>
          {contactContent.heroText}
        </Typography>
      </Reveal>
    </Container>
  </Box>
);

export default HeroSection;
