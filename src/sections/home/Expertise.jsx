import React from "react";
import { Box, Button, Container, Grid, Typography, alpha } from "@mui/material";
import { ApartmentRounded, BusinessRounded, LocalHospitalRounded, PrecisionManufacturingRounded } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { homeContent } from "../../content/siteContent";
import { Reveal, Stagger, fadeLeft } from "../../components/motion/Reveal";

const Expertise = () => {
  return (
    <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "#102332", color: "#f5f1ea" }}>
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
  );
};

export default Expertise;