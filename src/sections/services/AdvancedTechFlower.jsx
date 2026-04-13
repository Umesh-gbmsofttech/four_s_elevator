import React, { useState } from "react";
import { Box, Typography, alpha, Container, useTheme, useMediaQuery, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import v3fImg from "../../assets/elevator-door-finish-sample-pune-05.png";
import ardImg from "../../assets/woodenlift.avif";
import pmsmImg from "../../assets/automatic-passenger-lift-interior-pune-01.png";
import iotImg from "../../assets/custom-elevator-ceiling-panel-pune-01.png";
import loadImg from "../../assets/hospitallift.webp";

const techData = [
  { id: "01", title: "GOLDEN DESIGNER", desc: "Ornate golden finishes featuring etched patterns and recessed ceiling arrays for an opulent, majestic cabin atmosphere.", image: v3fImg, label: "GOLDEN" },
  { id: "02", title: "WOODEN LUXURY", desc: "Premium natural textures combined with advanced safety systems to blend classic aesthetics with modern reliability.", image: ardImg, label: "WOODEN" },
  { id: "03", title: "ROSE GOLD ELITE", desc: "Exquisite mirror-finish rose gold paneling with intricate floor mandalas, offering the ultimate statement in luxury vertical travel.", image: pmsmImg, label: "ROSE GOLD" },
  { id: "04", title: "SILVER SERIES", desc: "Modern stainless steel finishes with minimalist aesthetic patterns and precision-engineered handrails for a sleek, corporate look.", image: iotImg, label: "SILVER" },
  { id: "05", title: "MEDICAL & STRETCHER", desc: "Spacious MS-8 grade cabins designed specifically for healthcare environments, providing smooth, reliable transport for medical equipment.", image: loadImg, label: "MS" }
];

const AdvancedTechFlower = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const GOLD = "#C5A059";
  const NAVY = "#0F172A";

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#FFFFFF", minHeight: { xs: "auto", md: "750px" }, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `radial-gradient(${NAVY} 1.5px, transparent 1.5px)`, backgroundSize: "45px 45px", zIndex: 0 }} />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", mb: { xs: 4, md: 8 } }}>
          <Typography variant="overline" sx={{ color: GOLD, fontWeight: 700, letterSpacing: 3, display: "block", width: "100%", lineHeight: 1 }}>ELEVATING AESTHETICS</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: NAVY, fontSize: { xs: "1.8rem", md: "3.5rem" }, textTransform: "uppercase", mt: 1, position: "relative", display: "inline-block", "&::after": { content: '""', position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: "80px", height: "4px", bgcolor: GOLD } }}>
            VARIOUS OPTIONS WE OFFER
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", width: "100%", gap: { xs: 4, md: 0 } }}>
          <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 50%" }, height: { xs: 280, sm: 350, md: 600 }, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", transform: { xs: "scale(0.75)", md: "scale(1)" } }}>
            {techData.map((tech, idx) => {
              const angle = (idx * 360) / techData.length;
              const radius = isSmallMobile ? 90 : (isMobile ? 115 : 160); 
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const isActive = activeIdx === idx;
              return (
                <Box key={idx} onClick={() => setActiveIdx(idx)} onMouseEnter={() => !isMobile && setActiveIdx(idx)} component={motion.div} animate={{ scale: isActive ? 1.15 : 1, zIndex: isActive ? 50 : 10, x: x, y: y }} style={{ position: "absolute", cursor: "pointer" }}>
                  <Box sx={{ width: { xs: 140, md: 210 }, height: { xs: 140, md: 210 }, position: "relative", bgcolor: NAVY, border: `2px solid ${isActive ? GOLD : alpha(NAVY, 0.1)}`, borderRadius: "75% 5% 75% 5%", transform: `rotate(${angle + 45}deg)`, transition: "0.5s cubic-bezier(0.4, 0, 0.2, 1)", overflow: "hidden", boxShadow: isActive ? `0 20px 40px ${alpha(NAVY, 0.3)}` : "none" }}>
                    <Box component="img" src={tech.image} sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: `rotate(-${angle + 45}deg) scale(1.6)`, filter: isActive ? "grayscale(0%) brightness(0.9)" : "grayscale(100%) brightness(0.4)", transition: "0.8s ease" }} />
                    <Box sx={{ position: "absolute", inset: 0, background: isActive ? `linear-gradient(to bottom, transparent, ${alpha(NAVY, 0.8)})` : alpha(NAVY, 0.4), zIndex: 1 }} />
                    <Box sx={{ position: "relative", zIndex: 2, height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", transform: `rotate(-${angle + 45}deg)` }}>
                      <Typography sx={{ fontSize: { xs: "0.55rem", md: "0.65rem" }, fontWeight: 900, color: "#FFFFFF", letterSpacing: 1.5, textAlign: "center", px: 1, textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>{tech.label}</Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Box sx={{ width: 60, height: 60, borderRadius: "50%", bgcolor: "#FFF", zIndex: 25, boxShadow: "0 0 20px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography sx={{ color: GOLD, fontWeight: 900, fontSize: "0.8rem" }}>{activeIdx + 1}/{techData.length}</Typography>
            </Box>
          </Box>
          <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 50%" }, pl: { md: 10 }, textAlign: { xs: "center", md: "left" }, zIndex: 10 }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeIdx} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} transition={{ duration: 0.4 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: 2, mb: 2 }}>
                   <Box sx={{ width: 40, height: "1px", bgcolor: GOLD }} />
                   <Typography sx={{ color: GOLD, fontWeight: 800, letterSpacing: 4, fontSize: "0.75rem" }}>FEATURED COLLECTION {techData[activeIdx].id}</Typography>
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 900, color: NAVY, mb: 2, fontSize: { xs: '2rem', md: '4rem' }, lineHeight: 1.1 }}>{techData[activeIdx].title}</Typography>
                <Typography sx={{ color: alpha(NAVY, 0.7), fontSize: { xs: "1rem", md: "1.2rem" }, lineHeight: 1.7, maxWidth: "520px", mb: 4, px: { xs: 2, md: 0 } }}>{techData[activeIdx].desc}</Typography>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: NAVY, color: "#FFF", px: 4, py: 1.5, borderRadius: 0, fontWeight: 700, "&:hover": { bgcolor: GOLD } }}>VIEW TECHNICAL SPECS</Button>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
      </Container>
    </Box>
  ); 
};

export default AdvancedTechFlower;