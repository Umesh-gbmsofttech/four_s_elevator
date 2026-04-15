// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const ORANGE = "#C5A059";

const testimonials = [
  {
    quote:
      "Scalable, robust, and clean code. Their team understands enterprise-level security in a way most firms simply don't.",
    name: "Dev Datta",
    role: "CTO @ LOGIC-S"
  },
  {
    quote:
      "Recently we installed a Four S elevator in our home. Safety and affordability were our priorities, and they delivered both.",
    name: "Abraham Paulson",
    role: "Home Owner"
  },
  {
    quote:
      "Stylish design adds a modern touch to our building. Smooth operation and highly recommended.",
    name: "Nature Amaze",
    role: "Business Owner"
  },
  {
    quote:
      "Lift works smoothly and their service is excellent. Always responsive and helpful.",
    name: "Adithyan S",
    role: "Property Manager"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <Box sx={{ bgcolor: "#f5f7f9", py: { xs: "8vh", md: "12vh" } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1.2fr"
            },
            gap: "4vw",
            alignItems: "center"
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                color: ORANGE,
                fontSize: "0.75rem",
                letterSpacing: 3,
                fontWeight: 700,
                mb: 2
              }}
            >
              REVIEWS
            </Typography>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1
              }}
            >
              Client
            </Typography>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "#b0b7bd",
                lineHeight: 1
              }}
            >
              Insights.
            </Typography>

            {/* CONTROLS */}
            <Stack direction="row" spacing={2} mt={4} alignItems="center">
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  border: `3px solid ${ORANGE}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.2rem"
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Box>

              <IconButton
                onClick={handlePrev}
                sx={{
                  border: "1px solid #ddd",
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: ORANGE,
                    color: "#fff"
                  }
                }}
              >
                <ArrowBack />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  border: "1px solid #ddd",
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: ORANGE,
                    color: "#fff"
                  }
                }}
              >
                <ArrowForward />
              </IconButton>
            </Stack>
          </Box>

          {/* RIGHT */}
          <Box sx={{ position: "relative", minHeight: "200px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  sx={{
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    fontStyle: "italic",
                    color: "#1c2b33",
                    mb: 4
                  }}
                >
                  “{testimonials[index].quote}”
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "16px",
                      bgcolor: ORANGE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800
                    }}
                  >
                    {testimonials[index].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Box>

                  <Box>
                    <Typography fontWeight={700}>
                      {testimonials[index].name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.8rem", color: "#6b7c86" }}
                    >
                      {testimonials[index].role}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;