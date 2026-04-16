// @ts-nocheck
import React from "react";
import { Box, Typography, Button, Stack, alpha } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/** * DIRECT ASSET IMPORTS
 * Replace these paths with your actual filenames in src/assets/
 */
import InstallationImg from "../../assets/elevator-installation.png";
import ModernizationImg from "../../assets/elevator-modernization.png";
import MaintenanceImg from "../../assets/elevator-maintenance.png";
import EmergencyImg from "../../assets/elevator-emergency.png";

// Mapping imports to the index
const SERVICE_ASSETS = [
  InstallationImg,
  ModernizationImg,
  MaintenanceImg,
  EmergencyImg
];

const ServiceItem = ({ item, index }) => {
  // Use the imported asset based on index, fallback to first image if out of bounds
  const currentImage = SERVICE_ASSETS[index] || SERVICE_ASSETS[0];

  return (
    <Grid size={12} sx={{ mb: { xs: 8, md: 16 } }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        sx={{
          display: "flex",
          flexDirection: { 
            xs: "column", 
            md: index % 2 === 0 ? "row" : "row-reverse" 
          },
          minHeight: "550px",
          bgcolor: "transparent",
          position: "relative",
        }}
      >
        {/* 1. ARCHITECTURAL VIEWPORT */}
        <Box 
          sx={{ 
            flex: { md: "0 0 60%" }, 
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            // Slight tilt effect for that "custom-engineered" feel
            clipPath: {
              md: index % 2 === 0 
                ? "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" 
                : "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)"
            }
          }}
        >
          <Box
            component={motion.img}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2 }}
            src={currentImage}
            alt={item.title}
            sx={{
              width: "100%",
              height: "100%",
              minHeight: { xs: "350px", md: "100%" },
              objectFit: "cover",
              display: "block"
            }}
          />
          
          {/* Brand Watermark on Image */}
          <Typography
            sx={{
              position: "absolute",
              top: 30,
              left: index % 2 === 0 ? 30 : "auto",
              right: index % 2 === 0 ? "auto" : 30,
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              zIndex: 2
            }}
          >
            Four S / Precision
          </Typography>
        </Box>

        {/* 2. FLOATING CONTENT CARD */}
        <Box 
          sx={{ 
            flex: 1, 
            p: { xs: 4, md: 6, lg: 8 }, 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            bgcolor: "#fff",
            // This creates the professional "overlap" look
            ml: { md: index % 2 === 0 ? "-8%" : 0 },
            mr: { md: index % 2 === 0 ? 0 : "-8%" },
            mt: { xs: -6, md: 8 },
            mb: { xs: 0, md: 8 },
            zIndex: 5,
            boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
            borderLeft: index % 2 === 0 ? "none" : "1px solid #f0f0f0",
            borderRight: index % 2 === 0 ? "1px solid #f0f0f0" : "none"
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "#D6A53A",
                  fontWeight: 900,
                  letterSpacing: 5,
                  fontSize: "0.75rem",
                  display: "block",
                  mb: 1
                }}
              >
                SERVICE 0{index + 1}
              </Typography>
              
              <Typography
                variant="h2"
                sx={{
                  color: "#1A1A1B",
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.4rem", lg: "2.8rem" },
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                  mb: 2
                }}
              >
                {item.title}
              </Typography>
              <DividerLine />
            </Box>

            <Typography
              sx={{
                color: "#555",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {item.text}
            </Typography>

            <Box sx={{ pt: 2 }}>
              <Button
                component={RouterLink}
                to="/contact"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: "#1A1A1B",
                  borderBottom: "2px solid #D6A53A",
                  borderRadius: 0,
                  px: 0,
                  py: 1,
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  letterSpacing: 2,
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#D6A53A",
                    letterSpacing: 3,
                    "& svg": { transform: "translateX(8px)" }
                  },
                  "& svg": { transition: "0.3s" }
                }}
              >
                REQUEST SPEC SHEET
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};

/** Simple decorative line component */
const DividerLine = () => (
  <Box 
    sx={{ 
      width: "50px", 
      height: "3px", 
      bgcolor: "#D6A53A",
      transition: "width 0.5s ease",
      ".MuiBox-root:hover &": { width: "80px" } 
    }} 
  />
);

export default ServiceItem;
