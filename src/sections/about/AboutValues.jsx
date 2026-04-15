// @ts-nocheck
import React from "react";
import { Box, Container, Typography, alpha, Stack } from "@mui/material";
import { aboutContent } from "../../content/siteContent";
import { motion } from "framer-motion";
import { keyframes } from "@mui/system";

const snakeMove = keyframes`
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1000; }
`;

const glowLine = keyframes`
  0% { opacity: 0; transform: scaleX(0); }
  100% { opacity: 1; transform: scaleX(1); }
`;

const AboutValues = () => {
  const gold = "#d6a53a";
  const navy = "#102332";

  return (
    <Box
      component="section"
      sx={{
        py: "clamp(60px, 10vh, 120px)",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f9f9f9 0%, #f3f3f3 100%)",
      }}
    >
      {/* 🔥 BACKGROUND SNAKE LINE (MORE VISIBLE) */}
      <Box
        component="svg"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.35, // 🔥 increased visibility
          zIndex: 0,
        }}
      >
        <path
          d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200"
          fill="none"
          stroke={gold}
          strokeWidth="3" // 🔥 thicker line
          strokeDasharray="12 8"
          style={{
            filter: "drop-shadow(0px 0px 6px rgba(214,165,58,0.6))", // glow
            animation: "snakeMove 18s linear infinite",
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* HEADER */}
        <Stack spacing={4} alignItems="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            sx={{
              color: gold,
              fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Services
          </Typography>

          <Typography
            sx={{
              fontWeight: 900,
              color: navy,
              fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
              textAlign: "center",
            }}
          >
            What We Provide
          </Typography>
        </Stack>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            gap: "clamp(16px, 3vw, 40px)",
          }}
        >
          {aboutContent.pillars.map((item, i) => (
            <Box
              key={i}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              sx={{
                position: "relative",
                p: "clamp(16px, 2vw, 28px)",
                borderRadius: "16px",
                textAlign: "center",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid rgba(255,255,255,0.6)",
                overflow: "hidden",
                transition: "all 0.3s ease",

                "&:hover": {
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                },

                /* 🔥 ACTIVE SNAKE LINE ON HOVER */
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: "3px",
                  width: "100%",
                  background: gold,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  opacity: 0,
                },

                "&:hover::after": {
                  animation: `${glowLine} 0.4s forwards`,
                },
              }}
            >
              {/* NUMBER */}
              <Typography
                sx={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: alpha(gold, 0.2),
                  mb: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>

              {/* TITLE */}
              <Typography
                sx={{
                  fontWeight: 700,
                  color: navy,
                  fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  color: alpha(navy, 0.7),
                  fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
                  lineHeight: 1.6,
                  maxWidth: "260px",
                  mx: "auto",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default AboutValues;