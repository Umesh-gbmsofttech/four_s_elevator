import React from "react";
import { Box } from "@mui/material";

// Import Section Components
import Hero from "../sections/home/Hero";
import Intro from "../sections/home//Intro";
import Expertise from "../sections/home/Expertise";
import PortfolioSnapshot from "../sections/home/PortfolioSnapshot";
import DeliveryModel from "../sections/home/DeliveryModel";

const HomePage = () => {
  return (
    <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
      <Hero />
      <Intro />
      <Expertise />
      <PortfolioSnapshot />
      <DeliveryModel />
    </Box>
  );
};

export default HomePage;