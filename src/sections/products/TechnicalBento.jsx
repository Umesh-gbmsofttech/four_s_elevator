// @ts-nocheck
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  alpha,
  Stack,
  Divider,
  ButtonBase,
  Grid,
  Tab,
  Tabs,
  Fade,
  Button
} from "@mui/material";
import { siteMedia } from "../../assets/siteMedia";
import { keyframes } from "@mui/system";

import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const scanLine = keyframes`
  0% { top: 0%; opacity: 0; }
  50% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const TechnicalBento = () => {
  const [ activeTab, setActiveTab ] = useState(0);
  const [ hoveredIndex, setHoveredIndex ] = useState(0);

  const systems = {
    cabin: {
      title: "Cabin Architecture",
      subtitle: "SYSTEMS",
      items: [
        {
          name: "SS Cabin",
          detail: "Stainless Steel",
          img: siteMedia.designs?.ss_cabin,
          description:
            "Brushed stainless-steel cabin built for high-touch environments where hygiene, corrosion resistance, and long-term finish retention matter.",
          useCase:
            "Passenger lifts in apartments, offices, hospitals, and commercial buildings with frequent daily cycles.",
          compatibility:
            "Pairs well with automatic center-opening, telescopic, and glass entrance systems.",
          benefits: [
            "Easy to clean and maintain",
            "Strong resistance to scratches, moisture, and wear",
            "Professional finish that fits premium and utility projects"
          ]
        },
        {
          name: "MS Cabin",
          detail: "Powder Coated",
          img: siteMedia.designs?.ms_cabin,
          description:
            "Mild-steel cabin with powder-coated panels designed for dependable service performance, easier customization, and a practical project budget.",
          useCase:
            "Residential buildings, staff lifts, service elevators, and projects that need durable finishes without the premium cost of decorative stainless steel.",
          compatibility:
            "Compatible with manual swing doors, telescopic doors, collapsible entrances, and standard passenger lift configurations.",
          benefits: [
            "Economical without compromising structural strength",
            "Accepts custom color coats and laminate-style interior treatments",
            "Useful for retrofit and standard-capacity installations"
          ]
        },
        {
          name: "Premium Cabin",
          detail: "Gold Finish",
          img: siteMedia.designs?.gold_cabin,
          description:
            "Decorative metallic cabin finish created for hospitality-grade interiors where visual impact and luxury detailing are a key design requirement.",
          useCase:
            "Hotels, premium residences, wedding venues, flagship retail, and upscale commercial lobbies.",
          compatibility:
            "Best matched with full-vision glass, designer stainless doors, and mirror or textured ceiling panels.",
          benefits: [
            "Elevates the perceived value of the space",
            "Works well with warm lighting and reflective trims",
            "Creates a strong premium-first brand impression"
          ]
        },
        {
          name: "Glass Cabin",
          detail: "Panoramic",
          img: siteMedia.products?.panoramic,
          description:
            "Panoramic glass cabin engineered for visibility, natural light, and architectural impact while keeping the lift visually open.",
          useCase:
            "Showrooms, malls, atriums, villas, and facade-facing installations where the elevator is part of the visual experience.",
          compatibility:
            "Typically paired with automatic glass doors and premium controller packages for smooth presentation-focused operation.",
          benefits: [
            "Maximizes openness and exterior views",
            "Adds architectural value to signature spaces",
            "Supports contemporary facade-driven design language"
          ]
        }
      ],
      metrics: { label: "ACOUSTIC", value: "45dB" }
    },

    entrance: {
      title: "Entrance Systems",
      subtitle: "SYSTEMS",
      items: [
        {
          name: "Glass Door",
          detail: "Modern",
          img: siteMedia.products?.commercial,
          description:
            "Full-vision glass landing door that keeps the lobby visually open while maintaining a refined automatic entrance experience.",
          useCase:
            "Premium residential towers, showrooms, offices, and panoramic lift applications where visibility matters.",
          compatibility:
            "Best suited for automatic passenger and panoramic elevators with contemporary lobby finishes.",
          benefits: [
            "Improves visibility and perceived openness",
            "Strengthens premium lobby aesthetics",
            "Works especially well with glass and stainless cabins"
          ]
        },
        {
          name: "IFG Door",
          detail: "Secure",
          img: siteMedia.doors?.ifg_door,
          description:
            "Reinforced IFG entrance door focused on safe, dependable landing protection, rigid construction, and strong day-to-day service life.",
          useCase:
            "Residential and commercial projects that prioritize secure landings, robust operation, and safety-led hardware selection.",
          compatibility:
            "Suitable for standard passenger elevators and projects needing durable steel entrance assemblies.",
          benefits: [
            "Higher perceived security at each landing",
            "Built for repeated use and structural stability",
            "A strong fit where dependable entrance hardware is the priority"
          ]
        },
        {
          name: "Telescopic Door",
          detail: "Fast",
          img: siteMedia.doors?.telescopic,
          description:
            "Multi-panel telescopic door optimized for faster automatic opening in layouts where clear opening and shaft efficiency both matter.",
          useCase:
            "Commercial lifts, apartments, offices, and sites with narrow entrance planning but regular passenger movement.",
          compatibility:
            "Excellent for automatic elevators with compact shaft constraints and medium-to-high traffic usage.",
          benefits: [
            "Efficient use of opening width in tighter layouts",
            "Smooth automatic operation for everyday traffic",
            "Common choice for modern commercial lift entrances"
          ]
        },
        {
          name: "Swing Door",
          detail: "Classic",
          img: siteMedia.doors?.swing_door,
          description:
            "Classic hinged swing door designed for simple manual access, low-complexity maintenance, and reliable use in compact lift projects.",
          useCase:
            "Bungalows, low-rise residential buildings, service lifts, and cost-sensitive installations.",
          compatibility:
            "Works with manual and semi-automatic elevator setups where straightforward mechanics are preferred.",
          benefits: [
            "Simple hardware and easier maintenance routines",
            "Good option for smaller residential projects",
            "Cost-effective choice for practical installations"
          ]
        }
      ],
      metrics: { label: "CYCLE", value: "2.5M" }
    }
  };

  const current = activeTab === 0 ? systems.cabin : systems.entrance;
  const activeItem =
    current?.items?.[ hoveredIndex ] || current?.items?.[ 0 ] || {};
  const isCabinTab = activeTab === 0;

  return (
    <Box
      sx={ {
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        bgcolor: "#F8F9FA",
        display: "flex",
        alignItems: "center"
      } }
    >
      <Container maxWidth="xl" sx={ { px: { xs: 2, md: 6 } } }>

        {/* HEADER */ }
        <Stack
          spacing={ 2 }
          sx={ { alignItems: "center", textAlign: "center", mb: 4 } }
        >
          <Typography sx={ { color: "#C5A059", fontWeight: 900 } }>
            { current.subtitle }
          </Typography>

          <Typography
            sx={ {
              fontWeight: 900,
              fontSize: { xs: "1.5rem", md: "2.5rem" }
            } }
          >
            { current.title }
          </Typography>

          <Tabs
            value={ activeTab }
            onChange={ (e, v) => {
              setActiveTab(v);
              setHoveredIndex(0);
            } }
            centered
          >
            <Tab label="CABINS" />
            <Tab label="ENTRANCES" />
          </Tabs>
        </Stack>

        {/* MAIN GRID */ }
        <Grid container spacing={ { xs: 3, sm: 4, md: 6 } } sx={ { alignItems: "stretch" } }>

          {/* LEFT */ }
          <Grid size={ { xs: 12, sm: 6, md: 3 } } sx={ { display: "flex" } }>
            <Stack spacing={ 2 } sx={ { width: "100%", height: "100%" } }>
              { current.items.map((item, idx) => (
                <ButtonBase
                  key={ idx }
                  onMouseEnter={ () => setHoveredIndex(idx) }
                  onClick={ () => setHoveredIndex(idx) }
                  sx={ {
                    p: 2,
                    minHeight: 92,
                    borderRadius: "1rem",
                    border:
                      hoveredIndex === idx
                        ? "2px solid #C5A059"
                        : "1px solid #ddd",
                    bgcolor: "#fff",
                    justifyContent: "flex-start"
                  } }
                >
                  <Stack direction="row" spacing={ 2 } sx={ { alignItems: "center" } }>
                    <Box
                      component="img"
                      src={ item.img }
                      alt={ `${item.name} ${item.detail}` }
                      sx={ {
                        width: 56,
                        height: 56,
                        objectFit: "cover",
                        borderRadius: "0.85rem",
                        border: "1px solid rgba(15, 23, 42, 0.08)"
                      } }
                    />
                    <Box>
                      <Typography sx={ { fontWeight: 700 } }>
                        { item.name }
                      </Typography>
                      <Typography sx={ { fontSize: "0.75rem", color: "text.secondary" } }>
                        { item.detail }
                      </Typography>
                    </Box>
                  </Stack>
                </ButtonBase>
              )) }
            </Stack>
          </Grid>

          {/* CENTER */ }
          <Grid size={ { xs: 12, sm: 6, md: 5 } } sx={ { display: "flex" } }>
            <Box
              sx={ {
                width: "100%",
                height: "100%",
                minHeight: { xs: 360, md: 520 },
                bgcolor: "#fff",
                borderRadius: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                border: "1px solid #eee",
                overflow: "hidden",
                p: { xs: 0.75, md: 1 }
              } }
            >
              <Box
                sx={ {
                  position: "absolute",
                  width: "100%",
                  height: 2,
                  bgcolor: alpha("#C5A059", 0.4),
                  animation: `${scanLine} 4s infinite`
                } }
              />

              <Fade in key={ hoveredIndex }>
                <Box
                  component="img"
                  src={ activeItem.img }
                  alt={ `${activeItem.name || current.title} preview` }
                  sx={ {
                    width: "100%",
                    height: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    transform: isCabinTab ? "scale(1.14)" : "scale(1.02)",
                    transformOrigin: "center center"
                  } }
                />
              </Fade>
            </Box>
          </Grid>

          {/* RIGHT */ }
          <Grid size={ { xs: 12, md: 4 } } sx={ { display: "flex" } }>
            <Stack spacing={ 2 } sx={ { width: "100%", height: "100%", minHeight: { md: 520 } } }>

              <Box
                sx={ {
                  p: 2.5,
                  bgcolor: "#C5A059",
                  color: "#fff",
                  borderRadius: "1rem"
                } }
              >
                <PrecisionManufacturingIcon />
                <Typography sx={ { mt: 1, fontWeight: 700 } }>
                  { activeItem.name }
                </Typography>
                <Typography sx={ { mt: 0.5, color: alpha("#fff", 0.8), fontSize: "0.85rem" } }>
                  { activeItem.detail }
                </Typography>
              </Box>

              <Box
                sx={ {
                  p: 2.5,
                  bgcolor: "#fff",
                  borderRadius: "1rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid #eee"
                } }
              >
                <Box>
                  <Typography sx={ { fontWeight: 700 } }>Description</Typography>
                  <Typography sx={ { mt: 1, fontSize: "0.95rem" } }>
                    { activeItem.description }
                  </Typography>

                  <Divider sx={ { my: 2 } } />

                  <Typography sx={ { fontWeight: 700 } }>Best Use Case</Typography>
                  <Typography sx={ { mt: 1, fontSize: "0.95rem" } }>
                    { activeItem.useCase }
                  </Typography>

                  <Divider sx={ { my: 2 } } />

                  <Typography sx={ { fontWeight: 700 } }>Compatibility</Typography>
                  <Typography sx={ { mt: 1, fontSize: "0.95rem" } }>
                    { activeItem.compatibility }
                  </Typography>

                  <Divider sx={ { my: 2 } } />

                  <Stack spacing={ 1.1 } sx={ { mb: 2 } }>
                    { (activeItem.benefits || []).map((benefit) => (
                      <Stack key={ benefit } direction="row" spacing={ 1.2 } sx={ { alignItems: "flex-start" } }>
                        <CheckCircleOutlinedIcon sx={ { color: "#C5A059", fontSize: 18, mt: "2px" } } />
                        <Typography sx={ { fontSize: "0.92rem" } }>{ benefit }</Typography>
                      </Stack>
                    )) }
                  </Stack>

                  <Typography sx={ { color: "text.secondary" } }>
                    { current.metrics.label }: { current.metrics.value }
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  startIcon={ <EmailOutlinedIcon /> }
                  sx={ {
                    mt: 2,
                    bgcolor: "#C5A059",
                    color: "#fff",
                    borderRadius: "30px",
                    "&:hover": { bgcolor: "#000" }
                  } }
                >
                  Enquire Now
                </Button>
              </Box>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalBento;
