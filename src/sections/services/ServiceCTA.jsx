import React from "react";
import { Box, Container, Typography, Button, alpha } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Reveal } from "../../components/motion/Reveal";

const ServiceCTA = () => (
  <Box sx={{ py: 12, backgroundColor: "#102332", color: "#f5f1ea", textAlign: "center" }}>
    <Container maxWidth="md">
      <Reveal>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
          Ready to Upgrade Your Building's Mobility?
        </Typography>
        <Typography sx={{ color: alpha("#ffffff", 0.7), mb: 5, fontSize: "1.1rem" }}>
          Our technical team is ready to conduct a site study and provide a customized proposal for your needs.
        </Typography>
        <Button
          component={RouterLink}
          to="/contact"
          variant="contained"
          sx={{
            bgcolor: "#d6a53a",
            color: "#08131d",
            px: 6,
            py: 2,
            borderRadius: "999px",
            fontWeight: 900,
            fontSize: "1rem",
            "&:hover": { bgcolor: "#f0bf55" },
          }}
        >
          Get a Free Quote Now
        </Button>
      </Reveal>
    </Container>
  </Box>
);

export default ServiceCTA;