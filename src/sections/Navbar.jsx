import React, { useState } from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { ArrowOutwardRounded, Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { companyProfile } from "../content/siteContent";
import logo from "../assets/4slogo.png"; 

const routeConfig = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/products", name: "Products" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const GlassBar = styled(AppBar)(() => ({
  backgroundColor: alpha("#08131d", 0.72),
  boxShadow: "0 18px 45px rgba(8,19,29,0.18)",
  backdropFilter: "blur(18px)",
  borderBottom: `1px solid ${alpha("#ffffff", 0.08)}`,
  color: "#f5f1ea",
}));

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: active ? "#d6a53a" : alpha("#f5f1ea", 0.78),
  fontWeight: 700,
  fontSize: "0.92rem",
  lineHeight: 1.75,
  padding: theme.spacing(1, 2),
  borderRadius: "999px",
  textDecoration: "none",
  transition: "all 0.25s ease",
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.06),
    color: "#ffffff",
  },
}));

export const Navbar = ({ onOpenContactModal }) => {
  const location = useLocation();
  const [mobileNavAnchor, setMobileNavAnchor] = useState(null);

  return (
    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <GlassBar position="fixed" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1.5, sm: 2.5, md: 4 },
            minHeight: { xs: 72, md: 82 },
            gap: 2,
          }}
        >
          <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none", minWidth: 0 }}>
            <Box
              component="img"
              src={logo}
              alt="Four S Elevators"
              sx={{
                height: { xs: 45, md: 55 },
                width: "auto",
                objectFit: "contain",
                /* DIRECTIONS:
                   1. Use 'screen' if your logo has a black background.
                   2. Use 'multiply' if your logo has a white background.
                */
                mixBlendMode: "screen", 
                filter: "contrast(1.1) brightness(1.1)", 
              }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, flex: 1, justifyContent: "center" }}>
            {routeConfig.map((route) => (
              <NavLink key={route.path} to={route.path} active={location.pathname === route.path}>
                {route.name}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={(event) => setMobileNavAnchor(event.currentTarget)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#f5f1ea",
                border: `1px solid ${alpha("#ffffff", 0.12)}`,
                borderRadius: "12px",
                bgcolor: alpha("#ffffff", 0.04),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Button
              onClick={onOpenContactModal}
              endIcon={<ArrowOutwardRounded sx={{ fontSize: 18 }} />}
              sx={{
                textTransform: "uppercase",
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: "#08131d",
                backgroundColor: "#d6a53a",
                borderRadius: "999px",
                px: 2.4,
                py: 1.15,
                display: { xs: "none", sm: "inline-flex" },
                "&:hover": { backgroundColor: "#f0bf55" },
              }}
            >
              Talk to Four S
            </Button>

            <Menu
              anchorEl={mobileNavAnchor}
              open={Boolean(mobileNavAnchor)}
              onClose={() => setMobileNavAnchor(null)}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    minWidth: 240,
                    borderRadius: "18px",
                    backgroundColor: "#102332",
                    color: "#f5f1ea",
                    border: `1px solid ${alpha("#ffffff", 0.08)}`,
                    boxShadow: "0 28px 70px rgba(0,0,0,0.4)",
                  },
                },
              }}
            >
              <MenuItem disabled sx={{ opacity: 1, py: 1.5, color: "#f5f1ea" }}>
                <Box>
                  <Typography sx={{ fontWeight: 800 }}>{companyProfile.name}</Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: alpha("#ffffff", 0.72) }}>
                    {companyProfile.label}
                  </Typography>
                </Box>
              </MenuItem>
              {routeConfig.map((route) => (
                <MenuItem
                  key={route.path}
                  component={Link}
                  to={route.path}
                  onClick={() => setMobileNavAnchor(null)}
                  selected={location.pathname === route.path}
                  sx={{
                    py: 1.5,
                    fontWeight: 700,
                    color: location.pathname === route.path ? "#d6a53a" : "#f5f1ea",
                    "&.Mui-selected": {
                      backgroundColor: alpha("#d6a53a", 0.12),
                      color: "#d6a53a",
                    },
                    "&:hover": { backgroundColor: alpha("#ffffff", 0.08) },
                  }}
                >
                  {route.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </GlassBar>
      <Toolbar />
    </motion.div>
  );
};