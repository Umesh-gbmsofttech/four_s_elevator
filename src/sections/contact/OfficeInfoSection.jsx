import React from "react";
import { Box, Container, Grid, Stack, Typography, alpha } from "@mui/material";
import { AccessTime, Email, LocationOn, Phone } from "@mui/icons-material";
import { companyProfile } from "../../content/siteContent";
import { siteMedia } from "../../assets/siteMedia";
import { Reveal, fadeLeft, fadeRight } from "../../components/motion/Reveal";
import LazyImage from "../../components/LazyImage";

const infoLines = [
  { icon: <LocationOn />, label: "Office Address", value: companyProfile.address },
  { icon: <Phone />, label: "Support Numbers", value: companyProfile.phone.join(" / ") },
  { icon: <Email />, label: "Email Address", value: companyProfile.email },
  { icon: <AccessTime />, label: "Business Hours", value: companyProfile.hours },
];

const OfficeInfoSection = () => (
  <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f5f1ea" }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 6 }} sx={{ alignItems: "stretch" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Reveal variant={fadeLeft}>
            <Box sx={{ p: { xs: 4, md: 6 }, borderRadius: "40px", backgroundColor: "#102332", color: "#f5f1ea", minHeight: "100%", boxShadow: "0 40px 100px rgba(0,0,0,0.2)" }}>
              <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
                Get In Touch
              </Typography>
              <Typography sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 900, lineHeight: 1.08, mb: 5 }}>
                Connect with our technical planning team.
              </Typography>
              <Stack spacing={4}>
                {infoLines.map((item) => (
                  <Box key={item.label} sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
                    <Box sx={{ width: 56, height: 56, borderRadius: "20px", backgroundColor: alpha("#d6a53a", 0.1), color: "#d6a53a", display: "grid", placeItems: "center", flexShrink: 0, border: `1px solid ${alpha("#d6a53a", 0.2)}` }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#d6a53a", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 800 }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ mt: 1, color: alpha("#ffffff", 0.8), lineHeight: 1.7, fontSize: "1.05rem", fontWeight: 600 }}>{item.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Reveal>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Reveal variant={fadeRight}>
            <Box sx={{ borderRadius: "40px", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.1)", height: "100%" }}>
              <LazyImage src={siteMedia.services.amc_service} alt="Four S Elevators maintenance support team in Pune" sx={{ width: "100%", height: "100%", objectFit: "cover", minHeight: { xs: 350, md: 500 } }} />
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default OfficeInfoSection;
