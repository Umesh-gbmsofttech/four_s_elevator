import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { projectsPortfolio } from "../../content/siteContent";
import { siteMedia } from "../../assets/siteMedia";
import { Reveal, Stagger } from "../../components/motion/Reveal";
import LazyImage from "../../components/LazyImage";

const PortfolioSnapshot = () => {
  return (
    
    <Box sx={{ py: { xs: 9, md: 12 } }}>
      <Container>
        <Reveal>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 6 }}>
            <Box>
              <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
                Featured Projects
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, fontWeight: 900, color: "#102332" }}>
                Successfully Delivered in Pune.
              </Typography>
            </Box>
          </Box>
        </Reveal>

        <Stagger>
          <Grid container spacing={4}>
            {projectsPortfolio.slice(0, 4).map((project) => (
              <Grid key={project.name} size={{ xs: 12, sm: 6, md: 3 }}>
                <Reveal>
                  <Box sx={{ borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", aspectRatio: "4/5", "&:hover img": { transform: "scale(1.08)" } }}>
                    <LazyImage
                      src={siteMedia.projects[project.imageKey]}
                      alt={`${project.name} elevator installation Pune`}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease" }}
                    />
                    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(8,19,29,0.9) 100%)", p: 3, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                      <Typography sx={{ color: "#f5f1ea", fontWeight: 900, fontSize: "1.2rem" }}>{project.name}</Typography>
                      <Typography sx={{ color: "#d6a53a", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase" }}>{project.location}</Typography>
                    </Box>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Stagger>
      </Container>
    </Box>
  );
};

export default PortfolioSnapshot;