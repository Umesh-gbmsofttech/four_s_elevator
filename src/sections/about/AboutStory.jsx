import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  alpha,
  Stack,
} from "@mui/material";
import { siteMedia } from "../../assets/siteMedia";
import { Reveal } from "../../components/motion/Reveal";
import { motion } from "framer-motion";

const AboutStory = () => {
  const gold = "#d6a53a";
  const navy = "#102332";

  // ✅ Get images safely
  const images = Object.values(siteMedia?.designs || {}).filter(Boolean);

  const [index, setIndex] = useState(0);

  // 🔁 Slideshow (10 sec)
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images]);

  // ✅ Always have fallback
  const currentImage =
    images[index] || siteMedia?.designs?.gold_cabin || "";

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          
          {/* LEFT: IMAGE (FIXED SIZE + SLIDESHOW) */}
          <Grid item xs={12} md={6}>
            <Reveal>
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  position: "relative",
                  width: "100%",
                  maxWidth: 520,
                  mx: "auto",

                  // 🔥 CONSISTENT SIZE FIX
                  aspectRatio: "4 / 3",
                  height: { xs: 320, md: 420 }, // fallback support

                  bgcolor: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt="design"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 🔥 ensures uniform fill
                  }}
                />
              </Box>
            </Reveal>
          </Grid>

          {/* RIGHT: CONTENT (UNCHANGED) */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3} sx={{ maxWidth: 520 }}>

              <Reveal>
                <Typography
                  sx={{
                    display: "inline-block",
                    bgcolor: alpha(gold, 0.15),
                    color: gold,
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  About Us
                </Typography>
              </Reveal>

              <Reveal delay={0.1}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: navy,
                    fontSize: { xs: "1.8rem", md: "2.3rem" },
                  }}
                >
                  Engineering Excellence for Modern Vertical Mobility
                </Typography>
              </Reveal>

              <Reveal delay={0.2}>
                <Typography sx={{ color: alpha(navy, 0.7), lineHeight: 1.8 }}>
                  Four S Elevator delivers advanced lift solutions designed for
                  safety, performance, and long-term reliability.
                </Typography>
              </Reveal>

              <Reveal delay={0.25}>
                <Typography sx={{ color: alpha(navy, 0.7), lineHeight: 1.8 }}>
                  From installation to maintenance, our focus is on precision,
                  efficiency, and seamless vertical transportation experiences.
                </Typography>
              </Reveal>

              {/* BUTTON */}
              <Reveal delay={0.3}>
                <Box sx={{ position: "relative", width: "fit-content" }}>
                  <Box
                    component={motion.button}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(252, 196, 25, 0)",
                        "0px 0px 15px rgba(252, 196, 25, 0.5)",
                        "0px 0px 0px rgba(252, 196, 25, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    sx={{
                      bgcolor: "#fcc419",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      px: 5,
                      py: 1.6,
                      borderRadius: "8px",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        bgcolor: "#e96f00",
                      },
                    }}
                  >
                    {/* Shimmer */}
                    <Box
                      component={motion.span}
                      animate={{ left: ["-100%", "200%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "linear",
                      }}
                      sx={{
                        position: "absolute",
                        top: 0,
                        width: "30%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        transform: "skewX(-20deg)",
                      }}
                    />

                    Learn More

                    <Box component={motion.span} sx={{ display: "flex" }}>
                      <svg width="18" height="14" viewBox="0 0 18 14">
                        <path
                          d="M1 7H17M17 7L11 1M17 7L11 13"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Reveal>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default AboutStory;