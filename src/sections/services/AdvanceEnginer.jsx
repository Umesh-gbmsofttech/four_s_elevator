// @ts-nocheck
import React, { useState } from 'react';
import { Typography, Box, Stack, alpha, Container, Chip, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

// --- ASSET IMPORTS ---
import mrPanelImg from '../../assets/mr control.png';
import mrlPanelImg from '../../assets/mrl control.png';
import microBoardImg from '../../assets/micro board.png';
import vvvfDriveImg from '../../assets/vvf.png';

const BRAND_BLUE = "#a87602";
const NAVY = "#0F172A";

const engineeringData = [
  { 
    id: "01", 
    title: "MR Control Panel", 
    tag: "High-Rise Ready",
    image: mrPanelImg, 
    desc: "Engineered for maximum uptime in demanding high-rise environments. Features industrial-grade heat management and modular relay boards for rapid maintenance.",
    specs: ["3-Phase Power", "IP54 Rating", "Manual Override"]
  },
  { 
    id: "02", 
    title: "MRL Control Panel", 
    tag: "Compact Power",
    image: mrlPanelImg, 
    desc: "A sleek, hoistway-integrated solution that recovers valuable square footage. Designed for whisper-quiet operation in residential and luxury builds.",
    specs: ["Zero Machine Room", "Slim-line Chassis", "Integrated UPS"]
  },
  { 
    id: "03", 
    title: "Microprocessor Board", 
    tag: "Advanced Intelligence",
    image: microBoardImg, 
    desc: "The core intelligence unit utilizing dual-core processing to manage complex traffic patterns and real-time safety monitoring.",
    specs: ["ARM Architecture", "CANBUS Protocol", "Cloud-Link Ready"]
  },
  { 
    id: "04", 
    title: "VVVF Drive Cabinet", 
    tag: "Eco-Efficiency",
    image: vvvfDriveImg, 
    desc: "Advanced frequency regulation that delivers a perfect travel curve. Minimizes mechanical wear and cuts peak energy consumption during heavy cycles.",
    specs: ["Regenerative Braking", "Torque Vectoring", "EMI Filtering"]
  }
];

// --- STYLED COMPONENTS ---

const PageWrapper = styled(Box)({
  backgroundColor: "#FFFFFF",
  minHeight: "800px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
});

const DecorativeCircle = styled(Box)({
  position: "absolute",
  right: "-10%",
  top: "10%",
  width: "600px",
  height: "600px",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${alpha(BRAND_BLUE, 0.05)} 0%, transparent 70%)`,
  zIndex: 0,
});

const SideNavItem = styled(Box, { shouldForwardProp: (p) => p !== 'active' })(({ active }) => ({
  padding: "24px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderLeft: `4px solid ${active ? BRAND_BLUE : alpha(NAVY, 0.05)}`,
  backgroundColor: active ? alpha(BRAND_BLUE, 0.02) : "transparent",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(BRAND_BLUE, 0.01),
    borderLeft: `4px solid ${alpha(BRAND_BLUE, 0.3)}`,
  }
}));

const ImageStage = styled(Box)({
  width: "100%",
  height: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginBottom: "40px",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    width: "70%",
    height: "20px",
    background: "rgba(0,0,0,0.05)",
    filter: "blur(15px)",
    borderRadius: "50%",
  }
});

const AdvanceEnginer = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <PageWrapper sx={{ py: { xs: 8, md: 15 } }}>
      <DecorativeCircle />
      
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack 
          direction={{ xs: "column", lg: "row" }} 
          spacing={{ xs: 8, lg: 15 }} 
          alignItems="flex-start"
        >
          
          {/* LEFT CONTENT: CINEMATIC SHOWCASE */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <PrecisionManufacturingIcon sx={{ color: BRAND_BLUE }} />
              <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 900, color: BRAND_BLUE }}>
                Technical Specification
              </Typography>
            </Stack>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ImageStage>
                  <motion.img 
                    src={engineeringData[activeIdx].image} 
                    alt="Hardware"
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    initial={{ scale: 0.8, rotateY: 20 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </ImageStage>

                <Typography variant="h2" sx={{ 
                  fontWeight: 900, 
                  color: NAVY, 
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                  lineHeight: 1,
                  mb: 2
                }}>
                  {engineeringData[activeIdx].title}
                </Typography>

                <Chip 
                  label={engineeringData[activeIdx].tag} 
                  variant="outlined"
                  sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE, borderRadius: "4px", mb: 4, fontWeight: 700 }}
                />

                <Typography sx={{ 
                  color: alpha(NAVY, 0.7), 
                  fontSize: "1.25rem", 
                  lineHeight: 1.8, 
                  maxWidth: "600px",
                  mb: 5
                }}>
                  {engineeringData[activeIdx].desc}
                </Typography>

                <Stack direction="row" spacing={4}>
                  {engineeringData[activeIdx].specs.map((spec, i) => (
                    <Box key={i}>
                      <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 800, textTransform: 'uppercase' }}>
                        Feature {i + 1}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 700, color: NAVY }}>
                        {spec}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* RIGHT SIDEBAR: NAVIGATION CONTROLS */}
          <Box sx={{ 
            width: { xs: "100%", lg: "400px" },
            border: `1px solid ${alpha(NAVY, 0.08)}`,
            borderRadius: "24px",
            bgcolor: alpha("#FFFFFF", 0.8),
            backdropFilter: "blur(10px)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.05)",
            overflow: "hidden"
          }}>
            <Box sx={{ p: 3, borderBottom: `1px solid ${alpha(NAVY, 0.05)}` }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: NAVY }}>
                System Components
              </Typography>
              <Typography variant="body2" sx={{ color: alpha(NAVY, 0.5) }}>
                Select a component to view details
              </Typography>
            </Box>

            <Stack divider={<Box sx={{ height: "1px", bgcolor: alpha(NAVY, 0.05) }} />}>
              {engineeringData.map((item, idx) => (
                <SideNavItem 
                  key={item.id} 
                  active={activeIdx === idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <Box>
                    <Typography variant="caption" sx={{ color: activeIdx === idx ? BRAND_BLUE : alpha(NAVY, 0.4), fontWeight: 900 }}>
                      SYSTEM {item.id}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      fontWeight: 700, 
                      color: activeIdx === idx ? BRAND_BLUE : NAVY,
                      transition: "0.3s"
                    }}>
                      {item.title}
                    </Typography>
                  </Box>
                  
                  <IconButton 
                    size="small" 
                    sx={{ 
                      bgcolor: activeIdx === idx ? BRAND_BLUE : "transparent",
                      color: activeIdx === idx ? "#fff" : alpha(NAVY, 0.2),
                      transition: "0.3s",
                      transform: activeIdx === idx ? "translateX(5px)" : "none"
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
                  </IconButton>
                </SideNavItem>
              ))}
            </Stack>

            <Box sx={{ p: 3, bgcolor: alpha(NAVY, 0.02) }}>
              <Typography variant="caption" sx={{ color: alpha(NAVY, 0.5), fontStyle: "italic" }}>
                * All components are ISO 9001 certified and undergo 48-hour stress testing.
              </Typography>
            </Box>
          </Box>

        </Stack>
      </Container>
    </PageWrapper>
  );
};

export default AdvanceEnginer;