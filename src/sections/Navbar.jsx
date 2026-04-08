import React, { useState } from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import {
  LanguageOutlined,
  KeyboardArrowDownOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const routeConfig = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/products", name: "Products" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const GlassBar = styled(AppBar)(() => ({
  backgroundColor: alpha("#ffffff", 0.9),
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  backdropFilter: "blur(20px)",
  borderBottom: `1px solid ${alpha("#000000", 0.08)}`,
  color: "#1a1a1a",
}));

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: active ? "#fcc419" : "#5f6368",
  fontWeight: 700,
  fontSize: "0.85rem",
  lineHeight: 1.75,
  padding: theme.spacing(1, 2.5),
  borderRadius: theme.shape.borderRadius,
  textDecoration: "none",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#000000",
  },
}));

export const Navbar = () => {
  const location = useLocation();
  const [langAnchor, setLangAnchor] = useState(null);
  const [mobileNavAnchor, setMobileNavAnchor] = useState(null);
  const [language, setLanguage] = useState("English (US)");

  const handleLangOpen = (event) => setLangAnchor(event.currentTarget);
  const handleMobileNavOpen = (event) => setMobileNavAnchor(event.currentTarget);
  const handleMobileNavClose = () => setMobileNavAnchor(null);
  
  const handleLangClose = (label) => {
    if (typeof label === "string") setLanguage(label);
    setLangAnchor(null);
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GlassBar position="fixed" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1.5, sm: 2, md: 3 },
          }}
        >
          {/* LEFT: Navigation Links (Replaces Logo Space) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, flex: 1 }}>
            {routeConfig.map((route) => (
              <NavLink key={route.path} to={route.path} active={location.pathname === route.path}>
                {route.name}
              </NavLink>
            ))}
          </Box>

          {/* RIGHT: Language & Mobile Toggle */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              onClick={handleMobileNavOpen}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#1a1a1a",
                border: `1px solid ${alpha("#000000", 0.08)}`,
                borderRadius: "10px",
                bgcolor: alpha("#ffffff", 0.9),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Button
              variant="text"
              startIcon={<LanguageOutlined sx={{ fontSize: 18 }} />}
              endIcon={<KeyboardArrowDownOutlined sx={{ fontSize: 16 }} />}
              onClick={handleLangOpen}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                color: "#1a1a1a",
                borderRadius: "8px",
                px: 2,
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              {language}
            </Button>

            {/* Mobile Nav Menu */}
            <Menu
              anchorEl={mobileNavAnchor}
              open={Boolean(mobileNavAnchor)}
              onClose={handleMobileNavClose}
              PaperProps={{
                sx: { mt: 1, minWidth: 220, borderRadius: "14px" },
              }}
            >
              {routeConfig.map((route) => (
                <MenuItem
                  key={route.path}
                  component={Link}
                  to={route.path}
                  onClick={handleMobileNavClose}
                  selected={location.pathname === route.path}
                  sx={{
                    py: 1.5,
                    fontWeight: 700,
                    color: location.pathname === route.path ? "#fcc419" : "#1a1a1a",
                  }}
                >
                  {route.name}
                </MenuItem>
              ))}
            </Menu>

            {/* Language Menu */}
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
              PaperProps={{
                sx: { mt: 1, borderRadius: "12px" },
              }}
            >
              {["English (US)", "Malayalam", "Hindi"].map((lang) => (
                <MenuItem key={lang} onClick={() => handleLangClose(lang)} sx={{ fontWeight: 600 }}>
                  {lang}
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