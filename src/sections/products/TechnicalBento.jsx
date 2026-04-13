// @ts-nocheck
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  alpha,
  Stack,
  Divider,
  ButtonBase,
  Grid,
  Tab,
  Tabs,
  Fade,
  Button
} from "@mui/material";
import { siteMedia } from "../../assets/siteMedia";
import { keyframes } from "@mui/system";

// Icons
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const scanLine = keyframes`
  0% { top: 0%; opacity: 0; }
  50% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const TechnicalBento = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const systems = {
    cabin: {
      title: "Cabin Architecture",
      subtitle: "SYSTEMS // C-01",
      items: [
        {
          name: "SS Cabin",
          detail: "Stainless Steel 304",
          img: siteMedia.designs.ss_cabin,
          description:
            "Durable stainless steel cabin with corrosion resistance and premium modern look.",
          why: "Perfect for long-term use in residential and commercial spaces."
        },
        {
          name: "MS Cabin",
          detail: "Powder Coated",
          img: siteMedia.designs.ms_cabin,
          description:
            "Affordable mild steel cabin offering strong structure and durable coating protection.",
          why: "Best for budget-friendly installations."
        },
        {
          name: "Premium Cabin",
          detail: "Gold Finish",
          img: siteMedia.designs.gold_cabin,
          description:
            "Luxury cabin with gold designer finish offering premium elegance and durability .",
          why: "Used in malls, hotels and premium buildings."
        },
        {
          name: "Glass Cabin",
          detail: "Panoramic",
          img: siteMedia.products.panoramic,
          description:
            "Full glass panoramic lift designed with modern architecture style and elegance .",
          why: "Best for showrooms and high-end spaces."
        }
      ],
      metrics: { label: "ACOUSTIC", value: "45dB" }
    },

    entrance: {
      title: "Entrance Systems",
      subtitle: "SYSTEMS // E-01",
      items: [
        {
          name: "Glass Door",
          detail: "Modern",
          img: siteMedia.doors.full_vision_glass,
          description:
            "Stylish full glass door with smooth automatic operation and modern design.",
          why: "Best for premium look and visibility."
        },
        {
          name: "IFG Door",
          detail: "Secure",
          img: siteMedia.doors.ifg_door,
          description: "Fire-rated strong door designed for enhanced safety compliance and durability.",
          why: "Used in high-safety environments."
        },
        {
          name: "Telescopic Door",
          detail: "Fast",
          img: siteMedia.doors.telescopic,
          description:
            "Fast sliding telescopic door designed for heavy traffic and smooth operation.",
          why: "Ideal for commercial buildings."
        },
        {
          name: "Swing Door",
          detail: "Classic",
          img: siteMedia.doors.swing_door,
          description: "Manual swing door designed for simple operations and reliable daily usage.",
          why: "Best for small and low-cost setups."
        }
      ],
      metrics: { label: "CYCLE", value: "2.5M" }
    }
  };

  const current = activeTab === 0 ? systems.cabin : systems.entrance;
  const activeItem = current.items[hoveredIndex] || current.items[0];

  return (
    <Box sx={{ py: 8, bgcolor: "#F8F9FA" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>

        {/* HEADER */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 6 }}
        >
          <Box>
            <Typography sx={{ color: "#C5A059", fontWeight: 900 }}>
              {current.subtitle}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900 }}>
              {current.title}
            </Typography>
          </Box>

          <Tabs
            value={activeTab}
            onChange={(e, v) => {
              setActiveTab(v);
              setHoveredIndex(0);
            }}
          >
            <Tab label="CABINS" />
            <Tab label="ENTRANCES" />
          </Tabs>
        </Stack>

        <Grid container spacing={3} alignItems="stretch">

          {/* LEFT */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              {current.items.map((item, idx) => (
                <ButtonBase
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border:
                      hoveredIndex === idx
                        ? "2px solid #C5A059"
                        : "1px solid #ddd",
                    bgcolor: "#fff",
                    height: 80,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={item.img}
                      sx={{ width: 60, height: 60, objectFit: "contain" }}
                    />
                    <Box>
                      <Typography fontWeight={700}>{item.name}</Typography>
                      <Typography fontSize="0.8rem" color="text.secondary">
                        {item.detail}
                      </Typography>
                    </Box>
                  </Stack>
                </ButtonBase>
              ))}
            </Stack>
          </Grid>

          {/* CENTER IMAGE - FIXED WITHOUT WRAPPER */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: 500,
                borderRadius: 3,
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                border: "1px solid #eee"
              }}
            >
              {/* SCAN LINE */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 2,
                  bgcolor: alpha("#C5A059", 0.4),
                  animation: `${scanLine} 4s linear infinite`
                }}
              />

              <Fade in key={hoveredIndex}>
                <Box
                  component="img"
                  src={activeItem.img}
                  alt={activeItem.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    maxWidth: 420,
                    maxHeight: 420,
                    objectFit: "contain"
                  }}
                />
              </Fade>
            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2} height="100%">

              <Box
                sx={{
                  p: 3,
                  bgcolor: "#C5A059",
                  color: "#fff",
                  borderRadius: 2
                }}
              >
                <PrecisionManufacturingIcon />
                <Typography fontWeight={700} mt={1}>
                  {activeItem.name}
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 3,
                  bgcolor: "#fff",
                  borderRadius: 2,
                  border: "1px solid #eee",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography fontWeight={700}>Description</Typography>
                <Typography fontSize="0.85rem" mt={1}>
                  {activeItem.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography fontWeight={700}>Why Use This?</Typography>
                <Typography fontSize="0.85rem" mt={1}>
                  {activeItem.why}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography fontSize="0.85rem">
                  {current.metrics.label}: {current.metrics.value}
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<EmailOutlinedIcon />}
                  sx={{
                    mt: "auto",
                    bgcolor: "#C5A059",
                    borderRadius: "30px",
                    "&:hover": { bgcolor: "#000" }
                  }}
                >
                  Enquire Now
                </Button>
              </Box>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalBento;