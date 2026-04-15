import React from "react";
import { Box, Container, Grid, Typography, alpha, Stack } from "@mui/material";
import {
  ShieldOutlined,
  EngineeringOutlined,
  SettingsSuggestOutlined,
  SpeedOutlined
} from "@mui/icons-material";
import { Reveal } from "../../components/motion/Reveal";
import { siteMedia } from "../../assets/siteMedia";

const Intro = () => {
  const cardIcons = [
    <ShieldOutlined sx={{ fontSize: 20 }} />,
    <EngineeringOutlined sx={{ fontSize: 20 }} />,
    <SettingsSuggestOutlined sx={{ fontSize: 20 }} />,
    <SpeedOutlined sx={{ fontSize: 20 }} />
  ];

  const cardContent = [
    {
      title: "Quality Assurance",
      desc: "Our quality assurance design and precision ensures absolute safety."
    },
    {
      title: "Masterful Engineering",
      desc: "Engineering focused on innovation and smooth vertical transitions."
    },
    {
      title: "Dynamic Technology",
      desc: "Smart monitoring and energy efficiency integrated systems."
    },
    {
      title: "Reliable Speed",
      desc: "Reliable speed and service protocols to keep your building moving."
    }
  ];

  // 🔥 Shared Card Style
  const cardStyle = {
    p: 2.5,
    borderRadius: "16px",
    bgcolor: "#fff",
    border: `1px solid ${alpha("#d6a53a", 0.1)}`,
    boxShadow: "0 8px 30px rgba(0,0,0,0.03)",
    maxWidth: { md: "320px" },
    transition: "all 0.35s ease",
    cursor: "pointer",

    "&:hover": {
      border: "1px solid #d6a53a",
      transform: "translateY(-8px)",
      boxShadow: "0 20px 60px rgba(214,165,58,0.25)"
    }
  };

  // 🔥 Icon Style (changes on hover)
  const iconStyle = {
    p: 0.8,
    borderRadius: "8px",
    bgcolor: alpha("#d6a53a", 0.1),
    color: "#d6a53a",
    display: "flex",
    transition: "all 0.3s ease",

    ".MuiBox-root:hover &": {
      bgcolor: "#d6a53a",
      color: "#fff"
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        backgroundColor: "#f9f7f2",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Rings */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 0
        }}
      >
        <Box
          sx={{
            width: { xs: 350, md: 600 },
            height: { xs: 350, md: 600 },
            border: `1px dotted ${alpha("#d6a53a", 0.2)}`,
            borderRadius: "50%",
            position: "absolute"
          }}
        />
        <Box
          sx={{
            width: { xs: 550, md: 900 },
            height: { xs: 550, md: 900 },
            border: `1px dotted ${alpha("#d6a53a", 0.1)}`,
            borderRadius: "50%",
            position: "absolute"
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Reveal>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                color: "#b59461",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
                mb: 1
              }}
            >
              The Four S Philosophy
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", md: "3rem" },
                fontWeight: 800,
                color: "#102332"
              }}
            >
              PRECISION{" "}
              <span
                style={{
                  color: "#d6a53a",
                  fontWeight: 400,
                  fontFamily: "serif",
                  fontStyle: "italic"
                }}
              >
                EXCELLENCE.
              </span>
            </Typography>
          </Box>
        </Reveal>

        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* LEFT CARDS */}
          <Grid item xs={12} md={3.5} order={{ xs: 2, md: 1 }}>
            <Stack spacing={8}>
              {[0, 1].map((index) => (
                <Reveal key={index} variant="fadeRight">
                  <Box sx={{ ...cardStyle, textAlign: { xs: "left", md: "right" }, ml: "auto" }}>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      sx={{ mb: 1.5 }}
                    >
                      <Typography
                        sx={{
                          color: alpha("#102332", 0.1),
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          order: { md: 2 }
                        }}
                      >
                        0{index + 1}
                      </Typography>

                      <Box sx={{ ...iconStyle, order: { md: 1 } }}>
                        {cardIcons[index]}
                      </Box>
                    </Stack>

                    <Typography sx={{ fontWeight: 700, color: "#102332", fontSize: "1rem", mb: 0.5 }}>
                      {cardContent[index].title}
                    </Typography>

                    <Typography sx={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.5 }}>
                      {cardContent[index].desc}
                    </Typography>
                  </Box>
                </Reveal>
              ))}
            </Stack>
          </Grid>

          {/* CENTER IMAGE */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Reveal>
              <Box
                sx={{
                  width: { xs: 260, md: 380 },
                  height: { xs: 320, md: 480 },
                  borderRadius: "90px",
                  overflow: "hidden",
                  border: "10px solid #fff",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.1)",
                  position: "relative"
                }}
              >
                <Box
                  component="img"
                  src={siteMedia.services.installation}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Reveal>
          </Grid>

          {/* RIGHT CARDS */}
          <Grid item xs={12} md={3.5} order={{ xs: 3, md: 3 }}>
            <Stack spacing={8}>
              {[2, 3].map((index) => (
                <Reveal key={index} variant="fadeLeft">
                  <Box sx={cardStyle}>
                    <Stack direction="row" spacing={10} alignItems="center" sx={{ mb: 1.5 }}>
                      <Box sx={iconStyle}>{cardIcons[index]}</Box>

                      <Typography
                        sx={{
                          color: alpha("#102332", 0.1),
                          fontWeight: 700,
                          fontSize: "0.8rem"
                        }}
                      >
                        0{index + 1}
                      </Typography>
                    </Stack>

                    <Typography sx={{ fontWeight: 700, color: "#102332", fontSize: "1rem", mb: 0.5 }}>
                      {cardContent[index].title}
                    </Typography>

                    <Typography sx={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.5 }}>
                      {cardContent[index].desc}
                    </Typography>
                  </Box>
                </Reveal>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;