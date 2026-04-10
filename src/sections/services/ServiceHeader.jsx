import React from "react";
import { Box, Container, Typography, alpha } from "@mui/material";
import { Reveal } from "../../components/motion/Reveal";

const ServiceHeader = ({ title, subtitle }) => (
  <Box sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 10, md: 14 }, backgroundColor: "#102332", color: "#f5f1ea" }}>
    <Container>
      <Reveal>
        <Typography sx={{ color: "#d6a53a", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 800, mb: 2 }}>
          Our Capabilities
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.5rem" }, fontWeight: 900, lineHeight: 1.05, maxWidth: 900 }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 3, color: alpha("#ffffff", 0.74), lineHeight: 1.9, maxWidth: 750, fontSize: "1.15rem" }}>
          {subtitle}
        </Typography>
      </Reveal>
    </Container>
  </Box>
);

export default ServiceHeader;