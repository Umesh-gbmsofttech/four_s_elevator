import React, { useState } from "react";
import { Box, Typography, alpha, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports
import v3fImg from "../../assets/elevator-door-finish-sample-pune-05.png";
import ardImg from "../../assets/woodenlift.avif";
import pmsmImg from "../../assets/automatic-passenger-lift-interior-pune-01.png";
import iotImg from "../../assets/custom-elevator-ceiling-panel-pune-01.png";
import loadImg from "../../assets/hospitallift.webp";

const techData = [
  { 
    id: "01",
    title: "GOLDEN DESIGNER", 
    desc: "Ornate golden finishes featuring etched patterns and recessed ceiling arrays for an opulent, majestic cabin atmosphere.", 
    image: v3fImg, 
    label: "GOLDEN - 7"
  },
  { 
    id: "02",
    title: "WOODEN LUXURY", 
    desc: "Next-generation Automatic Rescue Device that safely docks the elevator to the nearest floor during power outages.", 
    image: ardImg,
    label: "WOODEN - 4"
  },
  { 
    id: "03",
    title: "ROSE GOLD ELITE", 
    desc: "Exquisite mirror-finish rose gold paneling with intricate floor mandalas, offering the ultimate statement in luxury vertical travel.", 
    image: pmsmImg,
    label: "ROSE GOLD - 5"
  },
  { 
    id: "04",
    title: "SILVER SERIES", 
    desc: "Modern stainless steel finishes with minimalist aesthetic patterns and precision-engineered handrails for a sleek, corporate look.", 
    image: iotImg,
    label: "SILVER - 1"
  },
  { 
    id: "05",
    title: "MEDICAL & STRETCHER", 
    desc: "Spacious MS-8 grade cabins designed specifically for healthcare environments, providing smooth, reliable transport for medical equipment.", 
    image: loadImg,
    label: "MS - 8"  
  }
];

const AdvancedTechFlower = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const GOLD = "#C5A059";
  const NAVY = "#0F172A";

  return (
    <Box sx={{ 
      py: 10, 
      bgcolor: "#FFFFFF", 
      minHeight: "850px",
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
        
        {/* --- HEADING SECTION --- */}
        <Box sx={{ width: "100%", textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: NAVY,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
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
            Various Options We Offer
          </Typography>
        </Box>

        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center", 
          width: "100%" 
        }}>
          
          {/* CONTAINER 1: THE PETAL FLOWERS (LEFT SIDE) */}
          <Box sx={{ 
            flex: "0 0 50%", 
            height: { xs: 450, md: 650 }, 
            position: "relative", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
          }}>
            {techData.map((tech, idx) => {
              const angle = (idx * 360) / techData.length;
              const radius = 150; 
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const isActive = activeIdx === idx;

              return (
                <Box
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
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
                    width: 200, 
                    height: 200,
                    position: "relative",
                    bgcolor: NAVY,
                    border: `2px solid ${isActive ? GOLD : alpha(NAVY, 0.05)}`,
                    borderRadius: "75% 5% 75% 5%", 
                    transform: `rotate(${angle + 45}deg)`, 
                    transition: "0.5s ease",
                    overflow: "hidden",
                    boxShadow: isActive ? `0 20px 50px ${alpha(NAVY, 0.3)}` : "none",
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
                        fontSize: "0.65rem", 
                        fontWeight: 900, 
                        color: "#FFFFFF", 
                        letterSpacing: 2.5,
                        textShadow: "0px 2px 4px rgba(0,0,0,0.5)" 
                      }}>
                        {tech.label}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
            
            {/* Center Anchor */}
            <Box sx={{ 
              width: 60, height: 60, borderRadius: "50%", bgcolor: "#FFF", 
              zIndex: 25, border: `1px solid ${alpha(GOLD, 0.3)}`, 
              display: "flex", alignItems: "center", justifyContent: "center" 
            }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: GOLD }} />
            </Box>
          </Box>

          {/* CONTAINER 2: THE CONTENT (RIGHT SIDE) */}
          <Box sx={{ 
            flex: "0 0 50%", 
            pl: { md: 10 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "400px"
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ x: 50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }}    
                exit={{ x: -30, opacity: 0 }}    
                transition={{ duration: 0.4 }}
              >
                <Typography sx={{ color: GOLD, fontWeight: 900, letterSpacing: 4, mb: 1, fontSize: "0.8rem" }}>
                  PREMIUM_FINISH // {techData[activeIdx].id}
                </Typography>
                
                <Typography variant="h2" sx={{ 
                  fontWeight: 900, 
                  color: NAVY, 
                  mb: 2, 
                  fontSize: { xs: '2.5rem', md: '3.8rem' }, 
                  lineHeight: 1 
                }}>
                  {techData[activeIdx].title}
                </Typography>

                <Box sx={{ width: "60px", height: "5px", bgcolor: GOLD, mb: 4 }} />

                <Typography sx={{ color: alpha(NAVY, 0.7), fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "500px" }}>
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