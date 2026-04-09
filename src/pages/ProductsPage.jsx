import React from "react";
import { Box, Container, Grid, Typography, alpha, Chip, Stack } from "@mui/material";
import { productsContent } from "../content/siteContent";
import { siteMedia } from "../assets/siteMedia";
import { Reveal, Stagger } from "../components/motion/Reveal";
import LazyImage from "../components/LazyImage";

const ProductsPage = () => (
  <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
    {/* Header Section */}
    <Box sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 10, md: 14 }, backgroundColor: "#102332", color: "#f5f1ea" }}>
      <Container>
        <Reveal>
          <Typography sx={{ color: "#d6a53a", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 800, mb: 2 }}>
            The Full Range
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.5rem" }, fontWeight: 900, lineHeight: 1.05, maxWidth: 900 }}>
            {productsContent.heroTitle}
          </Typography>
          <Typography sx={{ mt: 3, color: alpha("#ffffff", 0.74), lineHeight: 1.9, maxWidth: 750, fontSize: "1.15rem" }}>
            {productsContent.heroText}
          </Typography>
        </Reveal>
      </Container>
    </Box>

    {/* Products Grid */}
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Stagger>
          <Grid container spacing={4}>
            {productsContent.categories.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Reveal>
                  <Box
                    sx={{
                      borderRadius: "32px",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
                      height: "100%",
                      transition: "0.4s",
                      border: `1px solid ${alpha("#102332", 0.05)}`,
                      "&:hover": { transform: "translateY(-10px)", boxShadow: "0 30px 80px rgba(0,0,0,0.08)" },
                    }}
                  >
                    <Box sx={{ position: "relative", height: 280, overflow: "hidden" }}>
                      <LazyImage
                        src={siteMedia.products[item.imageKey]}
                        alt={`${item.title} Pune installation`}
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <Box sx={{ position: "absolute", top: 20, right: 20 }}>
                        <Chip
                          label="Customizable"
                          size="small"
                          sx={{ bgcolor: "rgba(255,255,255,0.9)", fontWeight: 800, color: "#102332", backdropFilter: "blur(4px)" }}
                        />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4 }}>
                      <Typography variant="h4" sx={{ fontSize: "1.5rem", fontWeight: 900, color: "#102332", mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "#5f6d79", lineHeight: 1.8 }}>{item.text}</Typography>
                    </Box>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Stagger>
      </Container>
    </Box>

    {/* Features/Options Section */}
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#fff" }}>
      <Container>
        <Reveal>
          <Typography align="center" sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
            Customization Options
          </Typography>
          <Typography align="center" variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, fontWeight: 900, color: "#102332", mb: 8 }}>
            Tailored to Your Building's Identity.
          </Typography>
        </Reveal>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal>
              <Box sx={{ p: 4, borderRadius: "28px", bgcolor: "#f9f6f1", height: "100%" }}>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, color: "#102332" }}>Cabin Types</Typography>
                <Stack spacing={1.5}>
                  {productsContent.features.cabins.map((cabin) => (
                    <Box key={cabin} sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#d6a53a" }} />
                      <Typography sx={{ fontWeight: 700, color: "#5f6d79" }}>{cabin}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal>
              <Box sx={{ p: 4, borderRadius: "28px", bgcolor: "#f9f6f1", height: "100%" }}>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, color: "#102332" }}>Door Variations</Typography>
                <Stack spacing={1.5}>
                  {productsContent.features.doors.map((door) => (
                    <Box key={door} sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#d6a53a" }} />
                      <Typography sx={{ fontWeight: 700, color: "#5f6d79" }}>{door}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal>
              <Box sx={{ p: 4, borderRadius: "28px", bgcolor: "#f9f6f1", height: "100%" }}>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, color: "#102332" }}>Lift Operations</Typography>
                <Stack spacing={1.5}>
                  {productsContent.features.operations.map((op) => (
                    <Box key={op} sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#d6a53a" }} />
                      <Typography sx={{ fontWeight: 700, color: "#5f6d79" }}>{op}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
);

export default ProductsPage;
