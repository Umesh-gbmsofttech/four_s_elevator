import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Typography, alpha, Stack } from "@mui/material";
import { companyProfile } from "../../content/siteContent";
import { motion, useInView } from "framer-motion";

const RollingNumber = ({ value, suffix, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const end = parseInt(value);
      if (isNaN(end)) return;
      const duration = 1.5; // Slightly faster animation for a snappier feel
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      
      const timer = setTimeout(() => requestAnimationFrame(animate), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <Box ref={ref} sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
      <Typography
        sx={{
          fontSize: { xs: "2.8rem", md: "3.8rem" }, // Reduced slightly for better vertical fit
          fontWeight: 900,
          color: "#102332",
          lineHeight: 0.9,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {isNaN(parseInt(value)) ? value : count}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1.2rem", md: "1.8rem" },
          fontWeight: 800,
          color: "#d6a53a",
          ml: 0.5,
          lineHeight: 1
        }}
      >
        {suffix}
      </Typography>
    </Box>
  );
};

const AboutStats = () => {
  const gold = "#d6a53a";
  const navy = "#102332";

  const stats = [
    { label: "Years of Excellence", value: companyProfile.stats.years, suffix: "+" },
    { label: "Precision Units", value: companyProfile.stats.projects, suffix: "+" },
    { label: "Safety Rating", value: "100", suffix: "%" },
    { label: "Global Quality", value: "ISO", suffix: "9001" }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 }, // Tightened vertical padding
        bgcolor: "#ffffff",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* TOP ACCENT LINE (TIGHTENED) */}
        <Box
          component={motion.div}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "85%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          sx={{
            height: "1px",
            background: `linear-gradient(90deg, transparent 0%, ${alpha(gold, 0.4)} 50%, transparent 100%)`,
            mx: "auto",
            mb: { xs: 4, md: 5 } // Reduced from 12
          }}
        />

        <Grid 
          container 
          spacing={{ xs: 4, md: 17}} 
          justifyContent="center" 
          alignItems="center"
        >
          {stats.map((s, i) => (
            <Grid 
              item 
              xs={12} sm={6} md={3} 
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Stack 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                alignItems="center" 
                spacing={1.5} // Tighter spacing between elements
                sx={{ 
                  textAlign: "center",
                  width: "100%",
                  maxWidth: 220 
                }}
              >
                <RollingNumber value={s.value} suffix={s.suffix} delay={i * 0.05} />

                <Stack alignItems="center" spacing={1}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem", // Slightly smaller for precision
                      fontWeight: 800,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      color: alpha(navy, 0.6),
                      lineHeight: 1.2
                    }}
                  >
                    {s.label}
                  </Typography>
                  
                  <Box
                    component={motion.div}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                    sx={{
                      width: "35px", // Shorter accent line
                      height: "2px",
                      bgcolor: gold,
                      borderRadius: "10px",
                      transformOrigin: "center"
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* BOTTOM ACCENT LINE (TIGHTENED) */}
        <Box
          component={motion.div}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "85%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
          sx={{
            height: "1px",
            background: `linear-gradient(90deg, transparent 0%, ${alpha(navy, 0.1)} 50%, transparent 100%)`,
            mx: "auto",
            mt: { xs: 4, md: 5 } // Reduced from 12
          }}
        />
      </Container>
    </Box>
  );
};

export default AboutStats;