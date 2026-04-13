import React from "react";
import { Box, Container, Typography, alpha, Stack } from "@mui/material";
import { aboutContent } from "../../content/siteContent";
import { motion } from "framer-motion";

const AboutValues = () => {
  const gold = "#d6a53a";
  const navy = "#102332";

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 }, // 🔥 REDUCED FROM 22 to 10 for tighter fit
        background: "linear-gradient(180deg, #f9f9f9 0%, #f3f3f3 100%)",
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Stack spacing={4} alignItems="center" mb={{ xs: 4, md: 6 }}> {/* 🔥 TIGHTER HEADER SPACING */}
          <Typography
            sx={{
              color: gold,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: 3,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Services
          </Typography>

          <Typography
            sx={{
              fontWeight: 900,
              color: navy,
              fontSize: { xs: "1.8rem", md: "2.6rem" }, // 🔥 SLIGHTLY SMALLER HEADLINE
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            What We Provide
          </Typography>

          <Box
            sx={{
              width: 40,
              height: 3,
              textAlign: "center",
              borderRadius: 2,
              mt: 1.5,
            }}
          />
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
            gap: { xs: 3, md: 5 }, // 🔥 REDUCED GAP BETWEEN CARDS
          }}
        >
          {aboutContent.pillars.map((item, i) => (
            <Box
              key={i}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              sx={{
                position: "relative",
                p: { xs: 3, md: 4 }, // 🔥 TIGHTER CARD INTERNAL PADDING
                borderRadius: "16px",
                textAlign: "center",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                border: "1px solid rgba(255,255,255,0.6)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "3px",
                  bgcolor: gold,
                  borderRadius: "0 0 4px 4px",
                },
              }}
            >
              {/* NUMBER */}
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: alpha(gold, 0.15),
                  mb: 1,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>

              {/* TITLE */}
              <Typography
                sx={{
                  fontWeight: 700,
                  color: navy,
                  fontSize: "1.1rem",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  color: alpha(navy, 0.7),
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  maxWidth: "240px",
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