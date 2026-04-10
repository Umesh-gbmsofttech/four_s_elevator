import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { servicesContent } from "../content/siteContent";
import { siteMedia } from "../assets/siteMedia";
import { BuildCircleRounded, SecurityRounded, HistoryRounded, SpeedRounded } from "@mui/icons-material";

// Local Sub-components
import ServiceHeader from "../sections/services/ServiceHeader";
import ServiceItem from "../sections/services/ServiceItem";
import ServiceCTA from "../sections/services/ServiceCTA";
import AdvancedTechFlower from "../sections/services/AdvancedTechFlower";

const icons = [<BuildCircleRounded />, <HistoryRounded />, <SecurityRounded />, <SpeedRounded />];
const serviceImages = [
  siteMedia.services.installation,
  siteMedia.services.modernization,
  siteMedia.services.amc_service,
  siteMedia.services.breakdown_support,
];

const ServicesPage = () => {
  return (
    <Box component="main" sx={{ backgroundColor: "#f5f1ea", overflowX: "hidden" }}>
      
      <ServiceHeader 
        title={servicesContent.heroTitle} 
        subtitle={servicesContent.heroText} 
      />

      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container>
          <Stack spacing={12}>
            {servicesContent.items.map((item, idx) => (
              <ServiceItem 
                key={item.title}
                item={item}
                icon={icons[idx]}
                image={serviceImages[idx]}
                index={idx}
              />
            ))}
          </Stack>
        </Container>
      </Box>
      <AdvancedTechFlower/>

      <ServiceCTA />
      
    </Box>
  );
};

export default ServicesPage;