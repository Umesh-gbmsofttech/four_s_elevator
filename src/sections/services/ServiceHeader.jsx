import React from "react";
import { Box, Container, Typography, alpha } from "@mui/material";
import { Reveal } from "../../components/motion/Reveal";
import { siteMedia } from "../../assets/siteMedia";

const ServiceHeader = ({ title, subtitle }) => (
  <Box
    sx={{
      position: "relative",
      minHeight: {
        xs: "100dvh",   // 🔥 Dynamic viewport height (best for mobile)
        md: "100vh",
      },
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      color: "#f5f1ea",
      backgroundColor: "#08131d",
    }}
  >
    {/* 🎥 Video Background */}
    <Box sx={{ position: "absolute", inset: 0 }}>
      <Box
        component="video"
        src={siteMedia.video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.3,
        }}
      />

      {/* 🌑 Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(8,19,29,0.4), rgba(8,19,29,0.95))",
        }}
      />
    </Box>

    {/* 📦 Content */}
    <Container
      sx={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      <Reveal>
        <Typography
          sx={{
            color: "#d6a53a",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontWeight: 800,
            mb: 2,
          }}
        >
          Our Capabilities
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            fontWeight: 900,
            lineHeight: 1.05,
            maxWidth: 900,
            mx: "auto",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: alpha("#ffffff", 0.74),
            lineHeight: 1.9,
            maxWidth: 750,
            fontSize: "1.1rem",
            mx: "auto",
          }}
        >
          {subtitle}
        </Typography>
      </Reveal>
    </Container>
  </Box>
);

export default ServiceHeader;