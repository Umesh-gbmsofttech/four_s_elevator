// @ts-nocheck
import React from "react";
import { Box } from "@mui/material";

// Section Components
import ProductHero from "../sections/products/ProductHero";
import ProductShowcase from "../sections/products/ProductShowcase";
import TechnicalBento from "../sections/products/TechnicalBento";

import { productsContent } from "../content/siteContent";

const ProductsPage = () => {
  return (
    <Box 
      component="main" 
      sx={{ 
        backgroundColor: "#FDFCFB", 
        overflowX: "hidden",
        minHeight: "100vh" 
      }}
    >
      {/* Passing the dynamic content from your object to the Hero props */}
      <ProductHero 
        title={productsContent.heroTitle} 
        subtitle={productsContent.heroText} 
      />
      
      <ProductShowcase />
      <TechnicalBento />
    </Box>
  );
};

export default ProductsPage;