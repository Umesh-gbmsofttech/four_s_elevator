import React, { useState, useEffect, useCallback } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { productsContent } from "../../content/siteContent";
import ProductCard from "./ProductCard";
import { Reveal } from "../../components/motion/Reveal";

const matchesCategory = (category, target) => {
  if (!target) return false;
  const cleanTarget = target.toLowerCase().replace(/^#/, "").trim();
  const catKey = (category.imageKey || "").toLowerCase();
  const catTitleSlug = (category.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const catTitleClean = (category.title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const targetClean = cleanTarget.replace(/[^a-z0-9]/g, "");

  return (
    catKey === cleanTarget ||
    catTitleSlug === cleanTarget ||
    catTitleClean === targetClean ||
    catTitleClean.includes(targetClean) ||
    targetClean.includes(catKey)
  );
};

const ProductShowcase = () => {
  const location = useLocation();
  const [highlightedKey, setHighlightedKey] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(0);

  const highlightProduct = useCallback((targetKey) => {
    if (!targetKey) return;
    const found = productsContent.categories.find((c) => matchesCategory(c, targetKey));
    if (found) {
      const key = found.imageKey;
      setHighlightedKey(key);
      setAnimationTrigger((prev) => prev + 1);

      // Smoothly scroll to the target card with a slight delay for lazy rendering
      setTimeout(() => {
        const el = document.getElementById(key) || document.getElementById(`product-${key}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
    }
  }, []);

  // Handle URL change (query param, hash, or router state)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target =
      params.get("product") ||
      params.get("highlight") ||
      (location.hash ? location.hash.replace("#", "") : null) ||
      location.state?.product;

    if (target) {
      const timer = setTimeout(() => {
        highlightProduct(target);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [location.search, location.hash, location.state, highlightProduct]);

  // Listen to custom event for in-page navigation from footer
  useEffect(() => {
    const handleCustomHighlight = (e) => {
      if (e.detail) {
        highlightProduct(e.detail);
      }
    };

    window.addEventListener("highlight-product", handleCustomHighlight);
    return () => window.removeEventListener("highlight-product", handleCustomHighlight);
  }, [highlightProduct]);

  const handleAnimationComplete = useCallback((key) => {
    setHighlightedKey((current) => (current === key ? null : current));
  }, []);

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
              <ProductCard
                item={item}
                index={idx}
                isHighlighted={highlightedKey === item.imageKey}
                animationTrigger={animationTrigger}
                onAnimationComplete={handleAnimationComplete}
              />
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default ProductShowcase;