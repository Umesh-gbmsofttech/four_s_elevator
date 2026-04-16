import React, { useState } from "react";
import { Box, Typography, alpha, Container, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports (keeping your paths)
import v3fImg from "../../assets/gold-finish-elevator-cabin-pune-01.png";
import ardImg from "../../assets/woodenlift.avif";
import pmsmImg from "../../assets/rose-gold-elevator-cabin-pune-01.png";
import iotImg from "../../assets/ss-cabin-passenger-elevator-pune-01.png";
import loadImg from "../../assets/ms-cabin-elevator-design-pune-01.png";

const techData = [
  {
    id: "01",
    title: "Golden Designer Cabin",
    label: "GOLDEN",
    image: v3fImg,
    summary:
      "Decorative gold-finish cabin styling for projects that want a richer hospitality-led arrival experience.",
    useCase:
      "Hotels, banquet spaces, premium residences, and lobby-forward commercial buildings.",
    compatibility:
      "Pairs best with mirror ceilings, designer COP/LOP panels, and full-vision or center-opening automatic doors.",
    benefits: "Luxury visual impact, warm reflective finish, and a stronger premium identity for the building."
  },
  {
    id: "02",
    title: "Wooden Luxury Cabin",
    label: "WOODEN",
    image: ardImg,
    summary:
      "Wood-finish cabin treatment that softens the elevator interior and complements residential or boutique hospitality architecture.",
    useCase:
      "Private villas, low-rise residences, clubhouses, and boutique hotels that prefer warm interior materials.",
    compatibility:
      "Works well with soft lighting, stainless trims, and manual or automatic residential lift entrances.",
    benefits: "Warm ambience, interior-design flexibility, and a more furniture-like premium look."
  },
  {
    id: "03",
    title: "Rose Gold Elite Cabin",
    label: "ROSE GOLD",
    image: pmsmImg,
    summary:
      "Rose-gold decorative stainless finish created for high-end projects that want a modern luxury statement without losing durability.",
    useCase:
      "Luxury apartments, premium office reception cores, and designer retail environments.",
    compatibility:
      "Ideal with glass entrances, metallic wall trims, and feature ceilings for a coordinated premium palette.",
    benefits: "Contemporary premium appeal, durable decorative finish, and strong visual differentiation."
  },
  {
    id: "04",
    title: "Silver Series SS Cabin",
    label: "SILVER",
    image: iotImg,
    summary:
      "Stainless-steel cabin finish designed for daily-use reliability, easy upkeep, and a clean contemporary engineering look.",
    useCase:
      "Apartments, offices, hospitals, educational buildings, and other medium-to-high traffic properties.",
    compatibility:
      "Compatible with telescopic, center-opening, and full-vision automatic entrance systems.",
    benefits: "Corrosion resistance, easier maintenance, and a finish that ages well in busy environments."
  },
  {
    id: "05",
    title: "MS - Mild Steel Cabin",
    label: "MS",
    image: loadImg,
    summary:
      "Powder-coated mild-steel cabin made for practical, budget-aware installations that still need strong everyday service performance.",
    useCase:
      "Residential buildings, service lifts, utility elevators, and retrofit projects where a robust cost-effective cabin is preferred.",
    compatibility:
      "Suitable for swing-door, telescopic-door, collapsible-door, and standard passenger-lift configurations.",
    benefits: "Economical structure, customizable paint or panel finishes, and dependable durability for regular use."
  }
];

const AdvancedTechFlower = () => {
  const [ activeIdx, setActiveIdx ] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm")); // Extra check for very small screens

  const GOLD = "#C5A059";
  const NAVY = "#0F172A";

  return (
    <Box sx={ {
      py: { xs: 8, md: 10 },
      bgcolor: "#FFFFFF",
      minHeight: { xs: "auto", md: "850px" },
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    } }>

      {/* Background Grid */ }
      <Box sx={ {
        position: "absolute",
        inset: 0,
        opacity: 0.04,
        backgroundImage: `radial-gradient(${NAVY} 1.5px, transparent 1.5px)`,
        backgroundSize: "45px 45px",
        zIndex: 0
      } } />

      <Container maxWidth="xl" sx={ { position: "relative", zIndex: 1 } }>

        <Box
          sx={ {
            width: "100%",
            textAlign: "center",
            mb: { xs: 2, md: 10 },
            pb: { xs: 4, md: 4 } // Added responsive padding bottom here
          } }
        >
          <Typography
            variant="h2"
            sx={ {
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
            } }
          >
          </Typography>
        </Box>
        <Box sx={ {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: "100%",
        } }>

          {/* CONTAINER 1: THE PETAL FLOWERS */ }
          <Box sx={ {
            flex: { xs: "1 1 100%", md: "0 0 50%" },
            height: { xs: 300, sm: 350, md: 650 }, // Tightened height for mobile
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // Reduced scale further for small mobile
            transform: { xs: "scale(0.7)", sm: "scale(0.85)", md: "scale(1)" },
            mb: { xs: 2, md: 0 }
          } }>
            { techData.map((tech, idx) => {
              const angle = (idx * 360) / techData.length;
              // SIGNIFICANT CHANGE: Radius is much smaller on mobile to prevent overlap
              const radius = isSmallMobile ? 90 : (isMobile ? 110 : 150);
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const isActive = activeIdx === idx;

              return (
                <Box
                  key={ idx }
                  onClick={ () => isMobile && setActiveIdx(idx) }
                  onMouseEnter={ () => !isMobile && setActiveIdx(idx) }
                  component={ motion.div }
                  animate={ {
                    scale: isActive ? 1.15 : 1,
                    zIndex: isActive ? 50 : 10,
                    x: x,
                    y: y
                  } }
                  style={ { position: "absolute", cursor: "pointer" } }
                >
                  <Box sx={ {
                    width: { xs: 140, md: 200 },
                    height: { xs: 140, md: 200 },
                    position: "relative",
                    bgcolor: NAVY,
                    border: `2px solid ${isActive ? GOLD : alpha(NAVY, 0.05)}`,
                    borderRadius: "75% 5% 75% 5%",
                    transform: `rotate(${angle + 45}deg)`,
                    transition: "0.5s ease",
                    overflow: "hidden",
                  } }>
                    <Box
                      component="img"
                      src={ tech.image }
                      sx={ {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: `rotate(-${angle + 45}deg) scale(1.6)`,
                        filter: isActive ? "grayscale(0%) brightness(0.9)" : "grayscale(100%) brightness(0.4)",
                        transition: "0.7s ease"
                      } }
                    />
                    <Box sx={ {
                      position: "absolute",
                      inset: 0,
                      background: isActive
                        ? `linear-gradient(to bottom, transparent, ${alpha(NAVY, 0.8)})`
                        : alpha(NAVY, 0.4),
                      zIndex: 1
                    } } />

                    <Box sx={ {
                      position: "relative", zIndex: 2, height: "100%", width: "100%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transform: `rotate(-${angle + 45}deg)`,
                    } }>
                      <Typography sx={ {
                        fontSize: { xs: "0.5rem", md: "0.65rem" },
                        fontWeight: 900,
                        color: "#FFFFFF",
                        letterSpacing: 1.5,
                        textAlign: "center",
                        px: 1,
                        textShadow: "0px 2px 4px rgba(0,0,0,0.5)"
                      } }>
                        { tech.label }
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            }) }

            <Box sx={ {
              width: { xs: 30, md: 60 }, height: { xs: 30, md: 60 },
              borderRadius: "50%", bgcolor: "#FFF",
              zIndex: 25, border: `1px solid ${alpha(GOLD, 0.3)}`,
              display: "flex", alignItems: "center", justifyContent: "center"
            } }>
              <Box sx={ { width: 6, height: 6, borderRadius: "50%", bgcolor: GOLD } } />
            </Box>
          </Box>

          {/* CONTAINER 2: THE CONTENT */ }
          {/* CHANGE: Added mt: 8 on mobile to ensure it clears the petal radius */ }
          <Box sx={ {
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
          } }>
            <AnimatePresence mode="wait">
              <motion.div
                key={ activeIdx }
                initial={ { y: 20, opacity: 0 } }
                animate={ { y: 0, opacity: 1 } }
                exit={ { y: -20, opacity: 0 } }
                transition={ { duration: 0.4 } }
              >
                <Typography sx={ { color: GOLD, fontWeight: 900, letterSpacing: 4, mb: 1, fontSize: "0.7rem" } }>
                  CABIN_FINISH
                </Typography>

                <Typography variant="h2" sx={ {
                  fontWeight: 900,
                  color: NAVY,
                  mb: 1,
                  fontSize: { xs: '1.4rem', md: '3.8rem' },
                  lineHeight: 1.2
                } }>
                  { techData[ activeIdx ].title }
                </Typography>

                <Box sx={ { width: "40px", height: "4px", bgcolor: GOLD, mb: 3, mx: { xs: "auto", md: 0 } } } />

                <Typography sx={ {
                  color: alpha(NAVY, 0.7),
                  fontSize: { xs: "0.9rem", md: "1.15rem" },
                  lineHeight: 1.6,
                  maxWidth: "500px",
                  px: { xs: 2, md: 0 }
                } }>
                  { techData[ activeIdx ].summary }
                </Typography>

                <Box sx={ { mt: 3, display: "grid", gap: 2, maxWidth: "540px", px: { xs: 2, md: 0 } } }>
                  <Box>
                    <Typography sx={ { color: NAVY, fontWeight: 800, mb: 0.5, fontSize: "0.85rem", letterSpacing: 1.2 } }>
                      USE CASE
                    </Typography>
                    <Typography sx={ { color: alpha(NAVY, 0.72), lineHeight: 1.7 } }>
                      { techData[ activeIdx ].useCase }
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={ { color: NAVY, fontWeight: 800, mb: 0.5, fontSize: "0.85rem", letterSpacing: 1.2 } }>
                      COMPATIBILITY
                    </Typography>
                    <Typography sx={ { color: alpha(NAVY, 0.72), lineHeight: 1.7 } }>
                      { techData[ activeIdx ].compatibility }
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={ { color: NAVY, fontWeight: 800, mb: 0.5, fontSize: "0.85rem", letterSpacing: 1.2 } }>
                      BENEFITS
                    </Typography>
                    <Typography sx={ { color: alpha(NAVY, 0.72), lineHeight: 1.7 } }>
                      { techData[ activeIdx ].benefits }
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default AdvancedTechFlower;
