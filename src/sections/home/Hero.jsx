import React from "react";
import { Box, Button, Chip, Container, Grid, Stack, Typography, alpha } from "@mui/material";
import { ArrowOutwardRounded, EastRounded } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { homeContent } from "../../content/siteContent";
import { siteMedia } from "../../assets/siteMedia";
import { Reveal, Stagger, fadeLeft, fadeRight } from "../../components/motion/Reveal";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "100svh", md: "98vh" },
        display: "flex",
        alignItems: "center",
        color: "#fff",
        background: "linear-gradient(180deg, #08131d 0%, #102332 100%)",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Box
          component="video"
          src={siteMedia.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(8,19,29,0.3) 0%, rgba(8,19,29,0.7) 60%, #08131d 100%)",
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 14, md: 18 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal variant={fadeLeft}>
              <Chip
                label={homeContent.hero.eyebrow}
                sx={{
                  mb: 3,
                  color: "#f5f1ea",
                  backgroundColor: alpha("#ffffff", 0.08),
                  border: `1px solid ${alpha("#ffffff", 0.12)}`,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              />
              <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.8rem" }, lineHeight: 1.1, fontWeight: 900, maxWidth: 800 }}>
                {homeContent.hero.title}
              </Typography>
              <Typography sx={{ mt: 3, maxWidth: 620, color: alpha("#ffffff", 0.78), fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.8 }}>
                {homeContent.hero.description}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5 }}>
                <Button
                  component={RouterLink}
                  to={homeContent.hero.primaryCta.href}
                  endIcon={<ArrowOutwardRounded />}
                  sx={{
                    px: 3.5,
                    py: 1.8,
                    borderRadius: "999px",
                    backgroundColor: "#d6a53a",
                    color: "#08131d",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    "&:hover": { backgroundColor: "#f0bf55" },
                  }}
                >
                  {homeContent.hero.primaryCta.label}
                </Button>
                <Button
                  component={RouterLink}
                  to={homeContent.hero.secondaryCta.href}
                  endIcon={<EastRounded />}
                  sx={{
                    px: 3,
                    py: 1.8,
                    borderRadius: "999px",
                    color: "#f5f1ea",
                    border: `1px solid ${alpha("#ffffff", 0.18)}`,
                    "&:hover": { backgroundColor: alpha("#ffffff", 0.06) },
                  }}
                >
                  {homeContent.hero.secondaryCta.label}
                </Button>
              </Stack>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal variant={fadeRight}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "32px",
                  backgroundColor: alpha("#ffffff", 0.06),
                  border: `1px solid ${alpha("#ffffff", 0.08)}`,
                  boxShadow: "0 30px 90px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", mb: 2 }}>
                  The Four S Advantage
                </Typography>
                <Stagger>
                  <Stack spacing={2.5}>
                    {homeContent.hero.stats.map((stat) => (
                      <Reveal key={stat.label}>
                        <Box sx={{ py: 2, borderBottom: `1px solid ${alpha("#ffffff", 0.08)}` }}>
                          <Typography sx={{ fontSize: "2.4rem", fontWeight: 900, color: "#d6a53a" }}>{stat.value}</Typography>
                          <Typography sx={{ color: alpha("#ffffff", 0.72), textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.85rem", fontWeight: 700 }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </Reveal>
                    ))}
                  </Stack>
                </Stagger>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;