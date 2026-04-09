import React from "react";
import { Box, Button, Chip, Container, Grid, Stack, Typography, alpha } from "@mui/material";
import { ArrowOutwardRounded, EastRounded, DoneAllRounded, ApartmentRounded, BusinessRounded, LocalHospitalRounded, PrecisionManufacturingRounded } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { homeContent, projectsPortfolio } from "../content/siteContent";
import { siteMedia } from "../assets/siteMedia";
import { Reveal, Stagger, fadeLeft, fadeRight } from "../components/motion/Reveal";
import LazyImage from "../components/LazyImage";

const sectionSx = {
  py: { xs: 9, md: 12 },
};

const HomePage = () => {
  return (
    <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
      {/* Hero Section */}
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

      {/* Intro Section */}
      <Box sx={sectionSx}>
        <Container>
          <Reveal>
            <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
              Why Four S Elevators
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, fontWeight: 900, maxWidth: 860, color: "#102332", lineHeight: 1.1 }}>
              {homeContent.intro.title}
            </Typography>
            <Typography sx={{ mt: 3, color: "#5f6d79", fontSize: { xs: "1.1rem", md: "1.15rem" }, maxWidth: 820, lineHeight: 1.9 }}>
              {homeContent.intro.text}
            </Typography>
          </Reveal>

          <Grid container spacing={3} sx={{ mt: 6 }}>
            {homeContent.advantages.map((item) => (
              <Grid key={item} size={{ xs: 12, md: 6 }}>
                <Reveal>
                  <Box sx={{ p: 3.5, display: "flex", gap: 2, alignItems: "flex-start", borderRadius: "24px", backgroundColor: "#fffdfa", border: `1px solid ${alpha("#102332", 0.05)}`, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                    <DoneAllRounded sx={{ color: "#d6a53a", mt: 0.5 }} />
                    <Typography sx={{ fontWeight: 700, color: "#102332", fontSize: "1.05rem", lineHeight: 1.6 }}>{item}</Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sectors Section */}
      <Box sx={{ ...sectionSx, backgroundColor: "#102332", color: "#f5f1ea" }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 6 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal variant={fadeLeft}>
                <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
                  Our Expertise
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, fontWeight: 900, lineHeight: 1.1 }}>
                  Solutions for Every Building Type.
                </Typography>
                <Typography sx={{ mt: 3, color: alpha("#ffffff", 0.72), lineHeight: 1.9, fontSize: "1.1rem" }}>
                  We understand that movement needs vary. That's why we customize every installation to match your project's traffic and aesthetic requirements.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/products"
                  sx={{ mt: 4, color: "#d6a53a", fontWeight: 800, letterSpacing: "0.1em", "&:hover": { color: "#f5f1ea" } }}
                >
                  View All Products →
                </Button>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stagger>
                <Grid container spacing={3}>
                  {homeContent.sectors.map((sector, idx) => (
                    <Grid key={sector.title} size={{ xs: 12, sm: 6 }}>
                      <Reveal>
                        <Box sx={{ p: 3.5, borderRadius: "28px", backgroundColor: alpha("#ffffff", 0.04), border: `1px solid ${alpha("#ffffff", 0.08)}`, transition: "0.3s", "&:hover": { backgroundColor: alpha("#ffffff", 0.08) } }}>
                          <Box sx={{ mb: 2, color: "#d6a53a" }}>
                            {idx === 0 && <ApartmentRounded fontSize="large" />}
                            {idx === 1 && <BusinessRounded fontSize="large" />}
                            {idx === 2 && <LocalHospitalRounded fontSize="large" />}
                            {idx === 3 && <PrecisionManufacturingRounded fontSize="large" />}
                          </Box>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 800, mb: 1.5 }}>{sector.title}</Typography>
                          <Typography sx={{ color: alpha("#ffffff", 0.68), lineHeight: 1.7 }}>{sector.text}</Typography>
                        </Box>
                      </Reveal>
                    </Grid>
                  ))}
                </Grid>
              </Stagger>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Portfolio Snapshot */}
      <Box sx={sectionSx}>
        <Container>
          <Reveal>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 6 }}>
              <Box>
                <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
                  Featured Projects
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, fontWeight: 900, color: "#102332" }}>
                  Successfully Delivered in Pune.
                </Typography>
              </Box>
            </Box>
          </Reveal>

          <Stagger>
            <Grid container spacing={4}>
              {projectsPortfolio.slice(0, 4).map((project) => (
                <Grid key={project.name} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Reveal>
                    <Box sx={{ borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", aspectRatio: "4/5", "&:hover img": { transform: "scale(1.08)" } }}>
                      <LazyImage
                        src={siteMedia.projects[project.imageKey]}
                        alt={`${project.name} elevator installation Pune`}
                        sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease" }}
                      />
                      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(8,19,29,0.9) 100%)", p: 3, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                        <Typography sx={{ color: "#f5f1ea", fontWeight: 900, fontSize: "1.2rem" }}>{project.name}</Typography>
                        <Typography sx={{ color: "#d6a53a", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase" }}>{project.location}</Typography>
                      </Box>
                    </Box>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ ...sectionSx, backgroundColor: "#fffdfa" }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal variant={fadeLeft}>
                <Box sx={{ borderRadius: "40px", overflow: "hidden", position: "relative", boxShadow: "0 30px 80px rgba(0,0,0,0.15)" }}>
                  <LazyImage
                    src={siteMedia.services.installation}
                    alt="Four S elevator installation excellence"
                    priority
                    sx={{ width: "100%", height: { xs: 400, md: 600 }, objectFit: "cover" }}
                  />
                  <Box sx={{ position: "absolute", bottom: 40, left: 40, right: 40, p: 3, borderRadius: "24px", backgroundColor: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)" }}>
                    <Typography sx={{ color: "#102332", fontWeight: 900, fontSize: "1.1rem" }}>ISO 9001:2015 Certified</Typography>
                    <Typography sx={{ color: "#5f6d79", fontSize: "0.9rem" }}>Quality Management System Approved</Typography>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal variant={fadeRight}>
                <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
                  Delivery Model
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, lineHeight: 1.1, color: "#102332", mb: 4 }}>
                  Seamless Journey from Concept to Commissioning.
                </Typography>
              </Reveal>
              <Stagger>
                <Grid container spacing={3}>
                  {homeContent.process.map((item) => (
                    <Grid key={item.step} size={{ xs: 12, sm: 6 }}>
                      <Reveal>
                        <Box sx={{ p: 3.5, minHeight: "100%", borderRadius: "28px", backgroundColor: "#fff", border: `1px solid ${alpha("#102332", 0.06)}`, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                          <Typography sx={{ color: "#d6a53a", fontWeight: 900, mb: 1, fontSize: "1.2rem" }}>{item.step}</Typography>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 800, color: "#102332", mb: 1.5 }}>{item.title}</Typography>
                          <Typography sx={{ color: "#5f6d79", lineHeight: 1.8 }}>{item.text}</Typography>
                        </Box>
                      </Reveal>
                    </Grid>
                  ))}
                </Grid>
              </Stagger>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
