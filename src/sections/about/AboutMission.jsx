import React from "react";
import { Box, Container, Typography, alpha, Stack, Grid } from "@mui/material";
import { companyProfile } from "../../content/siteContent";
import { motion } from "framer-motion";

const AboutMission = () => {
  const goldPrimary = "#fcc419";
  const slateDark = "#0f172a";

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* 1. Structural Accent: The Golden Pillar */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 10, md: 40 },
          top: '10%',
          bottom: '10%',
          width: '1px',
          bgcolor: alpha(goldPrimary, 0.2),
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-2px',
            width: '5px',
            height: '100px',
            bgcolor: goldPrimary
          }
        }}
      />

      {/* 2. Abstract Background Geometry */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(goldPrimary, 0.03)} 0%, transparent 70%)`,
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={8} alignItems="center">
          
          <Grid item xs={12} lg={5}>
            <motion.div {...fadeInUp}>
              <Typography
                sx={{
                  color: goldPrimary,
                  fontWeight: 700,
                  letterSpacing: 10,
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                  mb: 2,
                  display: 'block'
                }}
              >
                Core Foundations
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "3rem", md: "4.2rem" },
                  lineHeight: 1,
                  fontFamily: "'Playfair Display', serif",
                  color: slateDark,
                  mb: 3
                }}
              >
                The Spirit of <br />
                <Box component="span" sx={{ color: goldPrimary, fontStyle: 'italic', fontWeight: 400 }}>
                  Ascension
                </Box>
              </Typography>

              <Box sx={{ width: '80px', height: '4px', bgcolor: goldPrimary, mb: 5 }} />

              {/* ENHANCED INTERACTIVE BUTTON */}
              <Box
                component={motion.button}
                whileHover="hover"
                initial="initial"
                whileTap={{ scale: 0.95 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  p: 0,
                  outline: 'none',
                  position: 'relative',
                }}
              >
                {/* Outer Pulse Effect */}
                <Box
                  component={motion.div}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  sx={{
                    position: 'absolute',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    border: `1px solid ${goldPrimary}`,
                    zIndex: 0
                  }}
                />

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: `1px solid ${alpha(goldPrimary, 0.4)}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    transition: "border-color 0.4s ease",
                  }}
                >
                  {/* Sliding Background Fill */}
                  <Box
                    component={motion.div}
                    variants={{
                      initial: { x: "-100%" },
                      hover: { x: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: goldPrimary,
                      zIndex: -1,
                    }}
                  />

                  {/* Icon Animation */}
                  <Box
                    component={motion.div}
                    variants={{
                      initial: { x: 0 },
                      hover: { x: [0, 20, -20, 0] } // Arrow "pass-through" effect
                    }}
                    transition={{ duration: 0.6, times: [0, 0.4, 0.41, 1] }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 18,
                        height: "2px",
                        bgcolor: goldPrimary,
                        position: "relative",
                        transition: "background-color 0.3s ease",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          right: 0,
                          top: -4,
                          width: 8,
                          height: 8,
                          borderTop: `2px solid ${goldPrimary}`,
                          borderRight: `2px solid ${goldPrimary}`,
                          transform: "rotate(45deg)",
                          transition: "border-color 0.3s ease",
                        },
                        // Target icon colors on parent hover
                        "button:hover &": {
                          bgcolor: "#fff",
                          "&::after": { borderColor: "#fff" }
                        }
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    color: slateDark,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "20px", // Small initial line
                      height: "1px",
                      bgcolor: goldPrimary,
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    },
                    "button:hover &::after": {
                      width: "100%",
                      bgcolor: goldPrimary
                    }
                  }}
                >
                  Our Philosophy
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} lg={7}>
            <Stack spacing={6}>
              {/* Mission */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Box sx={{ position: 'relative', pl: { md: 4 } }}>
                  <Typography
                    sx={{
                      position: 'absolute',
                      left: -20,
                      top: -20,
                      fontSize: '5rem',
                      fontWeight: 900,
                      color: alpha(goldPrimary, 0.05),
                      zIndex: -1,
                    }}
                  >
                    01
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, letterSpacing: 1 }}>
                    MISSION
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "#475569",
                      fontWeight: 300,
                      maxWidth: "500px",
                      borderLeft: `2px solid ${alpha(goldPrimary, 0.1)}`,
                      pl: 3
                    }}
                  >
                    {companyProfile?.mission || "To redefine the standards of vertical transportation through relentless innovation."}
                  </Typography>
                </Box>
              </motion.div>

              {/* Vision */}
              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <Box sx={{ position: 'relative', pl: { md: 4 } }}>
                  <Typography
                    sx={{
                      position: 'absolute',
                      left: -20,
                      top: -20,
                      fontSize: '5rem',
                      fontWeight: 900,
                      color: alpha(goldPrimary, 0.05),
                      zIndex: -1,
                    }}
                  >
                    02
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, letterSpacing: 1 }}>
                    VISION
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "#475569",
                      fontWeight: 300,
                      maxWidth: "500px",
                      borderLeft: `2px solid ${alpha(goldPrimary, 0.1)}`,
                      pl: 3
                    }}
                  >
                    {companyProfile?.vision || "To become the benchmark for smart urban mobility."}
                  </Typography>
                </Box>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Branding Footer */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          p: 4,
          opacity: 0.4,
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Typography sx={{ fontSize: '0.6rem', letterSpacing: 5, textTransform: 'uppercase', fontWeight: 900 }}>
          Four S Elevators • Engineering Excellence
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMission;