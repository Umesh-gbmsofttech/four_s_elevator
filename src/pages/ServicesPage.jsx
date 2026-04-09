import React from "react";
import { Box, Container, Grid, Typography, alpha, Stack, Button } from "@mui/material";
import { servicesContent } from "../content/siteContent";
import { siteMedia } from "../assets/siteMedia";
import { Reveal, Stagger, fadeLeft, fadeRight } from "../components/motion/Reveal";
import { Link as RouterLink } from "react-router-dom";
import { BuildCircleRounded, SecurityRounded, HistoryRounded, SpeedRounded } from "@mui/icons-material";
import LazyImage from "../components/LazyImage";

const ServicesPage = () => {
  const icons = [<BuildCircleRounded />, <HistoryRounded />, <SecurityRounded />, <SpeedRounded />];
  const serviceImages = [
    siteMedia.services.installation,
    siteMedia.services.modernization,
    siteMedia.services.amc_service,
    siteMedia.services.breakdown_support,
  ];

  return (
    <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
      {/* Header */}
      <Box sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 10, md: 14 }, backgroundColor: "#102332", color: "#f5f1ea" }}>
        <Container>
          <Reveal>
            <Typography sx={{ color: "#d6a53a", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 800, mb: 2 }}>
              Our Capabilities
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.5rem" }, fontWeight: 900, lineHeight: 1.05, maxWidth: 900 }}>
              {servicesContent.heroTitle}
            </Typography>
            <Typography sx={{ mt: 3, color: alpha("#ffffff", 0.74), lineHeight: 1.9, maxWidth: 750, fontSize: "1.15rem" }}>
              {servicesContent.heroText}
            </Typography>
          </Reveal>
        </Container>
      </Box>

      {/* Services List */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container>
          <Stack spacing={12}>
            {servicesContent.items.map((item, idx) => (
              <Reveal key={item.title} variant={idx % 2 === 0 ? fadeLeft : fadeRight}>
                <Grid
                  container
                  spacing={{ xs: 6, md: 10 }}
                  sx={{ alignItems: "center", flexDirection: { xs: "column", md: idx % 2 === 0 ? "row" : "row-reverse" } }}
                >
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ position: "relative" }}>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: -20,
                          bgcolor: "#d6a53a",
                          borderRadius: "40px",
                          opacity: 0.1,
                          zIndex: 0,
                        }}
                      />
                      <LazyImage
                        src={serviceImages[idx]}
                        alt={`${item.title} service Four S Elevators`}
                        sx={{
                          width: "100%",
                          height: { xs: 350, md: 500 },
                          objectFit: "cover",
                          borderRadius: "32px",
                          position: "relative",
                          zIndex: 1,
                          boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ color: "#d6a53a", mb: 2, "& svg": { fontSize: 48 } }}>
                      {icons[idx]}
                    </Box>
                    <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 900, color: "#102332", mb: 3 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#5f6d79", fontSize: "1.15rem", lineHeight: 1.8, mb: 4 }}>
                      {item.text}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="outlined"
                      sx={{
                        borderRadius: "999px",
                        px: 4,
                        py: 1.5,
                        borderColor: "#102332",
                        color: "#102332",
                        fontWeight: 800,
                        "&:hover": { bgcolor: "#102332", color: "#fff" },
                      }}
                    >
                      Inquire About This Service
                    </Button>
                  </Grid>
                </Grid>
              </Reveal>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 12, backgroundColor: "#102332", color: "#f5f1ea", textAlign: "center" }}>
        <Container maxWidth="md">
          <Reveal>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
              Ready to Upgrade Your Building's Mobility?
            </Typography>
            <Typography sx={{ color: alpha("#ffffff", 0.7), mb: 5, fontSize: "1.1rem" }}>
              Our technical team is ready to conduct a site study and provide a customized proposal for your needs.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              sx={{
                bgcolor: "#d6a53a",
                color: "#08131d",
                px: 6,
                py: 2,
                borderRadius: "999px",
                fontWeight: 900,
                fontSize: "1rem",
                "&:hover": { bgcolor: "#f0bf55" },
              }}
            >
              Get a Free Quote Now
            </Button>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;
