import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { productsContent } from "../../content/siteContent";
import ProductCard from "./ProductCard";
import { Reveal } from "../../components/motion/Reveal";

const ProductShowcase = () => {
  return (
    <Box sx={{ py: 12, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        {/* HEADING */}
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Reveal>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#1a1a1a",
                mb: 1,
                letterSpacing: "0.5px",
              }}
            >
              Elevators
            </Typography>

            <Box
              sx={{
                width: 50,
                height: 3,
                bgcolor: "#C2B280",
                mx: "auto",
                borderRadius: "2px",
              }}
            />
          </Reveal>
        </Box>

        {/* ✅ FLEX GRID (PERFECT WITH HOVER CARD) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {productsContent.categories.map((item, idx) => (
            <Box
              key={item.title}
              sx={{
                display: "flex",

                width: {
                  xs: "100%",                         // 1 card
                  sm: "calc(50% - 16px)",            // 2 cards
                  md: "calc((100% - 64px) / 3)",     // 🔥 PERFECT 3 cards
                },

                transition: "transform 0.3s ease",

                "&:hover": {
                  transform: "translateY(-6px)", // 🔥 lift effect
                },
              }}
            >
              <ProductCard item={item} index={idx} />
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default ProductShowcase;