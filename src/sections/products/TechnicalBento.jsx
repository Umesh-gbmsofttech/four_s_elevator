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
      subtitle: "SYSTEMS",
      items: [
        {
          name: "SS Cabin",
          detail: "Stainless Steel",
          img: siteMedia.designs?.ss_cabin,
          description:
            "Durable stainless steel cabin with corrosion resistance and premium finish.",
          why: "Ideal for long-term residential and commercial usage."
        },
        {
          name: "MS Cabin",
          detail: "Powder Coated",
          img: siteMedia.designs?.ms_cabin,
          description:
            "Strong mild steel cabin with powder coating for durability and protection.",
          why: "Best suited for budget-friendly installations."
        },
        {
          name: "Premium Cabin",
          detail: "Gold Finish",
          img: siteMedia.designs?.gold_cabin,
          description:
            "Luxury gold finish cabin designed for elegance and high-end environments.",
          why: "Used in hotels, malls, and premium buildings."
        },
        {
          name: "Glass Cabin",
          detail: "Panoramic",
          img: siteMedia.products?.panoramic,
          description:
            "Panoramic glass cabin offering modern design with full visibility and aesthetics.",
          why: "Perfect for showrooms and premium architectural spaces."
        }
      ],
      metrics: { label: "ACOUSTIC", value: "45dB" }
    },

    entrance: {
      title: "Entrance Systems",
      subtitle: "SYSTEMS",
      items: [
        {
          name: "Glass Door",
          detail: "Modern",
          img: siteMedia.doors?.full_vision_glass,
          description:
            "Full glass automatic door with smooth operation and premium modern appearance.",
          why: "Enhances visibility and modern aesthetics."
        },
        {
          name: "IFG Door",
          detail: "Secure",
          img: siteMedia.doors?.ifg_door,
          description:
            "Fire-rated IFG door ensuring safety compliance and high structural strength.",
          why: "Ideal for safety-critical environments."
        },
        {
          name: "Telescopic Door",
          detail: "Fast",
          img: siteMedia.doors?.telescopic,
          description:
            "Fast sliding telescopic door designed for heavy traffic and smooth operation.",
          why: "Perfect for commercial high-usage areas."
        },
        {
          name: "Swing Door",
          detail: "Classic",
          img: siteMedia.doors?.swing_door,
          description:
            "Manual swing door with simple operation and reliable long-term usage.",
          why: "Best for small and cost-effective setups."
        }
      ],
      metrics: { label: "CYCLE", value: "2.5M" }
    }
  };

  const current = activeTab === 0 ? systems.cabin : systems.entrance;
  const activeItem =
    current?.items?.[hoveredIndex] || current?.items?.[0] || {};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: "clamp(3rem, 6vh, 6rem)",
        bgcolor: "#F8F9FA",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: "clamp(1rem, 5vw, 6rem)"
        }}
      >

        {/* HEADER */}
        <Stack
          spacing="clamp(1rem, 2vh, 2rem)"
          alignItems="center"
          textAlign="center"
          sx={{ mb: "clamp(2rem, 5vh, 4rem)" }}
        >
          <Box>
            <Typography sx={{ color: "#C5A059", fontWeight: 900 }}>
              {current.subtitle}
            </Typography>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2.8rem)"
              }}
            >
              {current.title}
            </Typography>
          </Box>

          <Tabs
            value={activeTab}
            onChange={(e, v) => {
              setActiveTab(v);
              setHoveredIndex(0);
            }}
            centered
          >
            <Tab label="CABINS" />
            <Tab label="ENTRANCES" />
          </Tabs>
        </Stack>

        {/* MAIN GRID */}
        <Grid container spacing={15} alignItems="stretch">

          {/* LEFT */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              {current.items.map((item, idx) => (
                <ButtonBase
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setHoveredIndex(idx)}
                  sx={{
                    p: 2,
                    borderRadius: "1rem",
                    border:
                      hoveredIndex === idx
                        ? "2px solid #C5A059"
                        : "1px solid #ddd",
                    bgcolor: "#fff",
                    justifyContent: "flex-start"
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={item.img}
                      sx={{ width: 55, height: 55 }}
                    />
                    <Box>
                      <Typography fontWeight={700}>
                        {item.name}
                      </Typography>
                      <Typography fontSize="0.8rem">
                        {item.detail}
                      </Typography>
                    </Box>
                  </Stack>
                </ButtonBase>
              ))}
            </Stack>
          </Grid>

          {/* CENTER */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: "100%",
                minHeight: "420px",
                bgcolor: "#fff",
                borderRadius: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                border: "1px solid #eee"
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: 2,
                  bgcolor: alpha("#C5A059", 0.4),
                  animation: `${scanLine} 4s infinite`
                }}
              />

              <Fade in key={hoveredIndex}>
                <Box
                  component="img"
                  src={activeItem.img}
                  sx={{
                    width: "80%",
                    maxWidth: 320,
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
                  borderRadius: "1rem"
                }}
              >
                <PrecisionManufacturingIcon />
                <Typography mt={1} fontWeight={700}>
                  {activeItem.name}
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 3,
                  bgcolor: "#fff",
                  borderRadius: "1rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #eee"
                }}
              >
                <Typography fontWeight={700}>Description</Typography>
                <Typography sx={{ mt: 1 }}>
                  {activeItem.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography fontWeight={700}>Why Use This?</Typography>
                <Typography sx={{ mt: 1 }}>
                  {activeItem.why}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography>
                  {current.metrics.label}: {current.metrics.value}
                </Typography>

                <Button
                  fullWidth
                  startIcon={<EmailOutlinedIcon />}
                  sx={{
                    mt: "auto",
                    bgcolor: "#C5A059",
                    color: "#fff",
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