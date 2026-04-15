import React, { useState } from "react";
import { Box, Typography, alpha, Container, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports (keeping your paths)
import v3fImg from "../../assets/elevator-door-finish-sample-pune-05.png";
import ardImg from "../../assets/woodenlift.avif";
import pmsmImg from "../../assets/automatic-passenger-lift-interior-pune-01.png";
import iotImg from "../../assets/custom-elevator-ceiling-panel-pune-01.png";
import loadImg from "../../assets/hospitallift.webp";

const techData = [
  { id: "01", title: "GOLDEN DESIGNER", desc: "Ornate golden finishes featuring etched patterns and recessed ceiling arrays for an opulent, majestic cabin atmosphere.", image: v3fImg, label: "GOLDEN " },
  { id: "02", title: "WOODEN LUXURY", desc: "Next-generation Automatic Rescue Device that safely docks the elevator to the nearest floor during power outages.", image: ardImg, label: "WOODEN " },
  { id: "03", title: "ROSE GOLD ELITE", desc: "Exquisite mirror-finish rose gold paneling with intricate floor mandalas, offering the ultimate statement in luxury vertical travel.", image: pmsmImg, label: "ROSE GOLD " },
  { id: "04", title: "SILVER SERIES", desc: "Modern stainless steel finishes with minimalist aesthetic patterns and precision-engineered handrails for a sleek, corporate look.", image: iotImg, label: "SILVER " },
  { id: "05", title: "MEDICAL & STRETCHER", desc: "Spacious MS-8 grade cabins designed specifically for healthcare environments, providing smooth, reliable transport for medical equipment.", image: loadImg, label: "MS " }
];

const AdvancedTechFlower = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm")); // Extra check for very small screens

  const GOLD = "#C5A059";
  const NAVY = "#0F172A";

  return (
    <Box sx={{ 
      py: { xs: 8, md: 10 }, 
      bgcolor: "#FFFFFF", 
      minHeight: { xs: "auto", md: "850px" },
      position: "relative",
      overflow: "hidden", 
      display: "flex",
      alignItems: "center"
    }}>
      
      {/* Background Grid */}
      <Box sx={{
        position: "absolute",
        inset: 0,
        opacity: 0.04,
        backgroundImage: `radial-gradient(${NAVY} 1.5px, transparent 1.5px)`,
        backgroundSize: "45px 45px",
        zIndex: 0
      }} />
      
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        
        <Box 
  sx={{ 
    width: "100%", 
    textAlign: "center", 
    mb: { xs: 2, md: 10 }, 
    pb: { xs: 4, md: 4 } // Added responsive padding bottom here
  }}
>
  <Typography
    variant="h2"
    sx={{
      fontWeight: 700,
      color: NAVY,
      fontSize: { xs: "1.5rem", md: "3.5rem" }, 
      textTransform: "uppercase",
      letterSpacing: 2,
      position: "relative",
      display: "inline-block",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: -10,
        left: "50%",
        transform: "translateX(-50%)",
        width: "60px",
        height: "4px",
        bgcolor: GOLD,
      }
    }}
  >
  </Typography>
</Box>
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center", 
          width: "100%",
        }}>
          
          {/* CONTAINER 1: THE PETAL FLOWERS */}
          <Box sx={{ 
            flex: { xs: "1 1 100%", md: "0 0 50%" },
            height: { xs: 300, sm: 350, md: 650 }, // Tightened height for mobile
            position: "relative", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            // Reduced scale further for small mobile
            transform: { xs: "scale(0.7)", sm: "scale(0.85)", md: "scale(1)" },
            mb: { xs: 2, md: 0 } 
          }}>
            {techData.map((tech, idx) => {
              const angle = (idx * 360) / techData.length;
              // SIGNIFICANT CHANGE: Radius is much smaller on mobile to prevent overlap
              const radius = isSmallMobile ? 90 : (isMobile ? 110 : 150); 
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const isActive = activeIdx === idx;

              return (
                <Box
                  key={idx}
                  onClick={() => isMobile && setActiveIdx(idx)}
                  onMouseEnter={() => !isMobile && setActiveIdx(idx)}
                  component={motion.div}
                  animate={{ 
                    scale: isActive ? 1.15 : 1,
                    zIndex: isActive ? 50 : 10,
                    x: x,
                    y: y
                  }}
                  style={{ position: "absolute", cursor: "pointer" }}
                >
                  <Box sx={{
                    width: { xs: 140, md: 200 }, 
                    height: { xs: 140, md: 200 },
                    position: "relative",
                    bgcolor: NAVY,
                    border: `2px solid ${isActive ? GOLD : alpha(NAVY, 0.05)}`,
                    borderRadius: "75% 5% 75% 5%", 
                    transform: `rotate(${angle + 45}deg)`, 
                    transition: "0.5s ease",
                    overflow: "hidden",
                  }}>
                    <Box 
                      component="img"
                      src={tech.image}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: `rotate(-${angle + 45}deg) scale(1.6)`, 
                        filter: isActive ? "grayscale(0%) brightness(0.9)" : "grayscale(100%) brightness(0.4)",
                        transition: "0.7s ease"
                      }}
                    />
                    <Box sx={{ 
                      position: "absolute", 
                      inset: 0, 
                      background: isActive 
                        ? `linear-gradient(to bottom, transparent, ${alpha(NAVY, 0.8)})` 
                        : alpha(NAVY, 0.4), 
                      zIndex: 1 
                    }} />
                    
                    <Box sx={{ 
                      position: "relative", zIndex: 2, height: "100%", width: "100%", 
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transform: `rotate(-${angle + 45}deg)`, 
                    }}>
                      <Typography sx={{ 
                        fontSize: { xs: "0.5rem", md: "0.65rem" }, 
                        fontWeight: 900, 
                        color: "#FFFFFF", 
                        letterSpacing: 1.5,
                        textAlign: "center",
                        px: 1,
                        textShadow: "0px 2px 4px rgba(0,0,0,0.5)" 
                      }}>
                        {tech.label}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
            
            <Box sx={{ 
              width: { xs: 30, md: 60 }, height: { xs: 30, md: 60 }, 
              borderRadius: "50%", bgcolor: "#FFF", 
              zIndex: 25, border: `1px solid ${alpha(GOLD, 0.3)}`, 
              display: "flex", alignItems: "center", justifyContent: "center" 
            }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: GOLD }} />
            </Box>
          </Box>

          {/* CONTAINER 2: THE CONTENT */}
          {/* CHANGE: Added mt: 8 on mobile to ensure it clears the petal radius */}
          <Box sx={{ 
            flex: { xs: "1 1 100%", md: "0 0 50%" }, 
            pl: { md: 10 },
            mt: { xs: 8, sm: 4, md: 0 }, 
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            minHeight: { xs: "200px", md: "400px" },
            zIndex: 10
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}    
                exit={{ y: -20, opacity: 0 }}    
                transition={{ duration: 0.4 }}
              >
                <Typography sx={{ color: GOLD, fontWeight: 900, letterSpacing: 4, mb: 1, fontSize: "0.7rem" }}>
                  PREMIUM_FINISH 
                </Typography>
                
                <Typography variant="h2" sx={{ 
                  fontWeight: 900, 
                  color: NAVY, 
                  mb: 1, 
                  fontSize: { xs: '1.4rem', md: '3.8rem' }, 
                  lineHeight: 1.2 
                }}>
                  {techData[activeIdx].title}
                </Typography>

                <Box sx={{ width: "40px", height: "4px", bgcolor: GOLD, mb: 3, mx: { xs: "auto", md: 0 } }} />

                <Typography sx={{ 
                  color: alpha(NAVY, 0.7), 
                  fontSize: { xs: "0.9rem", md: "1.15rem" }, 
                  lineHeight: 1.6, 
                  maxWidth: "500px",
                  px: { xs: 2, md: 0 }
                }}>
                  {techData[activeIdx].desc}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>

        </Box>
      </Container>
    </Box>
  ); 
};

export default AdvancedTechFlower;