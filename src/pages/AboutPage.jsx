import React from "react";
import { Box, Container, Divider, Grid, Typography, alpha } from "@mui/material";
import { VerifiedUserRounded, HandshakeRounded, EngineeringRounded, StarRounded } from "@mui/icons-material";
import { aboutContent, companyProfile } from "../content/siteContent";
import { siteMedia } from "../assets/siteMedia";
import { Reveal, Stagger, fadeLeft, fadeRight } from "../components/motion/Reveal";
import LazyImage from "../components/LazyImage";

const AboutPage = () => {
  const pillarIcons = [<VerifiedUserRounded fontSize="large" />, <EngineeringRounded fontSize="large" />, <HandshakeRounded fontSize="large" />];

  return (
    <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
      <Box sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 8, md: 10 }, backgroundColor: "#102332", color: "#f5f1ea" }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal variant={fadeLeft}>
                <Typography sx={{ color: "#d6a53a", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 800, mb: 2 }}>
                  About Four S
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "4rem" }, fontWeight: 900, lineHeight: 1.05 }}>
                  {aboutContent.heroTitle}
                </Typography>
                <Typography sx={{ mt: 3, color: alpha("#ffffff", 0.74), lineHeight: 1.9, maxWidth: 620, fontSize: "1.1rem" }}>
                  {aboutContent.heroText}
                </Typography>
              </Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal variant={fadeRight}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: -15,
                      border: `2px solid ${alpha("#d6a53a", 0.3)}`,
                      borderRadius: "40px",
                      zIndex: 0,
                    }}
                  />
                  <LazyImage
                    src={siteMedia.projects.konark}
                    alt="Konark Tower elevator project by Four S Elevators in Pune"
                    priority
                    sx={{
                      width: "100%",
                      height: { xs: 350, md: 500 },
                      objectFit: "cover",
                      borderRadius: "32px",
                      position: "relative",
                      zIndex: 1,
                      boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                    }}
                  />
                </Box>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 6, backgroundColor: "#fff", borderBottom: `1px solid ${alpha("#102332", 0.05)}` }}>
        <Container>
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {[
              { label: "Years of Experience", value: companyProfile.stats.years },
              { label: "Projects Completed", value: companyProfile.stats.projects },
              { label: "Quality Certification", value: companyProfile.stats.iso },
            ].map((stat) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, color: "#d6a53a", lineHeight: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ mt: 1, fontWeight: 800, color: "#102332", textTransform: "uppercase", letterSpacing: 1, fontSize: "0.75rem" }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container>
          <Reveal>
            <Typography align="center" sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
              Our Values
            </Typography>
            <Typography align="center" variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, fontWeight: 900, color: "#102332", mb: 8 }}>
              Engineered for Your Confidence.
            </Typography>
          </Reveal>
          <Stagger>
            <Grid container spacing={4}>
              {aboutContent.pillars.map((pillar, idx) => (
                <Grid key={pillar.title} size={{ xs: 12, md: 4 }}>
                  <Reveal>
                    <Box sx={{ p: 5, borderRadius: "32px", backgroundColor: "#fff", border: `1px solid ${alpha("#102332", 0.05)}`, height: "100%", textAlign: "center", boxShadow: "0 15px 40px rgba(0,0,0,0.02)" }}>
                      <Box sx={{ color: "#d6a53a", mb: 3 }}>{pillarIcons[idx]}</Box>
                      <Typography variant="h5" sx={{ color: "#102332", fontWeight: 900, mb: 2.5 }}>
                        {pillar.title}
                      </Typography>
                      <Typography sx={{ color: "#5f6d79", lineHeight: 1.9 }}>{pillar.text}</Typography>
                    </Box>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Stagger>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#102332", color: "#fff", position: "relative", overflow: "hidden" }}>
        <Container maxWidth="md">
          <Reveal>
            <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <StarRounded sx={{ fontSize: 60, color: "#d6a53a", mb: 4 }} />
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, lineHeight: 1.2 }}>
                Our Mission
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "1.8rem" }, fontWeight: 700, color: alpha("#fff", 0.9), fontStyle: "italic", mb: 2 }}>
                "{companyProfile.mission}"
              </Typography>
              <Divider sx={{ width: 80, height: 4, bgcolor: "#d6a53a", mx: "auto", my: 4, borderRadius: 2 }} />
              <Typography sx={{ color: alpha("#fff", 0.6), fontWeight: 800, textTransform: "uppercase", letterSpacing: 2 }}>
                - Four S Elevators Leadership Team
              </Typography>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
