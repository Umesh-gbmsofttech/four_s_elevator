import React from "react";
import { Box, Container, Grid, Typography, alpha } from "@mui/material";
import { homeContent } from "../../content/siteContent";
import { siteMedia } from "../../assets/siteMedia";
import { Reveal, Stagger, fadeLeft, fadeRight } from "../../components/motion/Reveal";
import LazyImage from "../../components/LazyImage";

const DeliveryModel = () => {
  return (
    <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "#fffdfa" }}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal variant={fadeLeft}>
              <Box sx={{ borderRadius: "40px", overflow: "hidden", position: "relative", boxShadow: "0 30px 80px rgba(0,0,0,0.15)" }}>
                <LazyImage
                  src={siteMedia.products.hydraulic }
                  alt="Four S elevator installation excellence"
                  priority
                  sx={{ width: "100%", height: { xs: 400, md: 600 }, objectFit: "cover" }}
                />
                
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
  );
};

export default DeliveryModel;