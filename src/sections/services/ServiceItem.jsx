import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Reveal, fadeLeft, fadeRight } from "../../components/motion/Reveal";
import LazyImage from "../../components/LazyImage";

const ServiceItem = ({ item, icon, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <Reveal variant={isEven ? fadeLeft : fadeRight}>
      <Grid
        container
        spacing={{ xs: 6, md: 10 }}
        sx={{ 
          alignItems: "center", 
          flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" } 
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", inset: -20, bgcolor: "#d6a53a", borderRadius: "40px", opacity: 0.1, zIndex: 0 }} />
            <LazyImage
              src={image}
              alt={`${item.title} service`}
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
            {icon}
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
  );
};

export default ServiceItem;