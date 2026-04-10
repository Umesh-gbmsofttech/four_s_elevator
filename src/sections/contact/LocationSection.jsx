import React from "react";
import { Box, Button, Chip, Container, Stack, Typography, alpha } from "@mui/material";
import { CallRounded, DirectionsRounded, PlaceRounded } from "@mui/icons-material";
import { Reveal } from "../../components/motion/Reveal";
import { companyProfile } from "../../content/siteContent";

const googleMapsUrl =
  "https://www.google.com/maps/place/Four+S+Elevator/@18.6092779,73.7707101,17z";

const LocationSection = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fffdfa" }}>
    <Container maxWidth="lg">
      <Reveal>
        <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
          Coverage Area
        </Typography>
        <Typography sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 900, color: "#102332", lineHeight: 1.08, mb: 3 }}>
          Based in Pune, ready for site discussions across the region.
        </Typography>
      </Reveal>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "28px",
          boxShadow: "var(--shadow-xl)",
          border: `1px solid ${alpha("#102332", 0.08)}`,
          background:
            "radial-gradient(circle at 15% 20%, rgba(214,165,58,0.18), transparent 22%), radial-gradient(circle at 85% 25%, rgba(16,35,50,0.08), transparent 24%), linear-gradient(110deg, #102332 0%, #173349 48%, #f6f0e5 58%, #fffdfa 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: { xs: -30, md: 30 },
            top: { xs: -10, md: 30 },
            width: { xs: 180, md: 260 },
            height: { xs: 180, md: 260 },
            borderRadius: "50%",
            border: `2px dashed ${alpha("#d6a53a", 0.35)}`,
            opacity: 0.45,
          }}
        />

        <Box sx={{ position: "absolute", left: { xs: 30, md: "56%" }, top: { xs: 260, md: 72 }, width: 18, height: 18, borderRadius: "50%", bgcolor: "#d6a53a", boxShadow: `0 0 0 10px ${alpha("#d6a53a", 0.18)}` }} />

        <Box sx={{ p: { xs: 4, md: 6 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: 4, alignItems: "center" }}>
          <Box sx={{ color: "#f5f1ea" }}>
            <Chip
              icon={<PlaceRounded sx={{ color: "#d6a53a !important" }} />}
              label="Thergaon, Pune"
              sx={{
                mb: 3,
                color: "#f5f1ea",
                bgcolor: alpha("#ffffff", 0.08),
                border: `1px solid ${alpha("#ffffff", 0.1)}`,
                "& .MuiChip-label": { fontWeight: 700 },
              }}
            />

            <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, fontWeight: 900, lineHeight: 1.12, mb: 2.5 }}>
              Visit Four S Elevators at our Pune office.
            </Typography>
            <Typography sx={{ color: alpha("#ffffff", 0.74), lineHeight: 1.9, maxWidth: 520, mb: 4 }}>
              Google blocks normal Maps share links inside iframes, so this section now uses a faster and more reliable location card. Tap below for live directions to our office.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                component="a"
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                startIcon={<DirectionsRounded />}
                sx={{
                  alignSelf: "flex-start",
                  borderRadius: "999px",
                  px: 3,
                  py: 1.5,
                  bgcolor: "#d6a53a",
                  color: "#08131d",
                  fontWeight: 900,
                  "&:hover": { bgcolor: "#f0bf55" },
                }}
              >
                Open in Google Maps
              </Button>

              <Button
                component="a"
                href="tel:+918975011818"
                variant="outlined"
                startIcon={<CallRounded />}
                sx={{
                  alignSelf: "flex-start",
                  borderRadius: "999px",
                  px: 3,
                  py: 1.5,
                  borderColor: alpha("#ffffff", 0.22),
                  color: "#f5f1ea",
                  "&:hover": { borderColor: "#f5f1ea", backgroundColor: alpha("#ffffff", 0.06) },
                }}
              >
                Call Our Team
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "24px",
              bgcolor: alpha("#ffffff", 0.9),
              backdropFilter: "blur(10px)",
              boxShadow: "0 24px 60px rgba(8,19,29,0.18)",
            }}
          >
            <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", mb: 2 }}>
              Office Details
            </Typography>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 900, color: "#102332", mb: 1.5 }}>
              {companyProfile.name}
            </Typography>
            <Typography sx={{ color: "#4e5e6a", lineHeight: 1.8, mb: 3 }}>
              {companyProfile.address}
            </Typography>

            <Stack spacing={1.75}>
              {companyProfile.phone.map((phone) => (
                <Typography key={phone} component="a" href={`tel:${phone.replace(/\s+/g, "")}`} sx={{ color: "#102332", fontWeight: 700, textDecoration: "none" }}>
                  {phone}
                </Typography>
              ))}
              <Typography component="a" href={`mailto:${companyProfile.email}`} sx={{ color: "#4e5e6a", textDecoration: "none", fontWeight: 600 }}>
                {companyProfile.email}
              </Typography>
              <Typography sx={{ color: "#4e5e6a", fontWeight: 600 }}>{companyProfile.hours}</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default LocationSection;
