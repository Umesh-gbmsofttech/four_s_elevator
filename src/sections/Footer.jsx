import React from "react";
import { Box, Typography, Divider, Grid, Stack, alpha, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { 
  LocationOnOutlined,
  SendOutlined,
  PhoneOutlined,
  EmailOutlined
} from "@mui/icons-material";

// --- STYLED COMPONENTS ---

const FooterWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "#001e29", // Professional Brand Dark Blue
  color: "#fff",
  padding: theme.spacing(12, 0, 6),
  position: "relative",
  overflow: "hidden",
  borderTop: `1px solid ${alpha("#fff", 0.05)}`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "10%",
    width: "80%",
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${alpha("#fff", 0.1)}, transparent)`,
  }
}));

const FooterLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: alpha("#fff", 0.5),
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: 0.5,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "inline-block",
  "&:hover": {
    color: "#fcc419", // Corporate Yellow
    transform: "translateX(6px)",
  },
}));

const NewsletterField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: alpha("#fff", 0.02),
    color: "#fff",
    borderRadius: "0px",
    fontSize: "0.9rem",
    "& fieldset": { borderColor: alpha("#fff", 0.1) },
    "&:hover fieldset": { borderColor: alpha("#fff", 0.2) },
    "&.Mui-focused fieldset": { borderColor: "#fcc419" },
  },
  "& .MuiInputBase-input::placeholder": { color: alpha("#fff", 0.3), opacity: 1 },
}));

// --- MAIN COMPONENT ---

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrap component="footer">
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: { xs: 3, md: 4 } }}>
        <Grid container spacing={8}>
          
          {/* Column 1: Brand Identity */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, letterSpacing: -1 }}>
              FOUR S <Box component="span" sx={{ color: "#fcc419" }}>ELEVATORS</Box>
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: alpha("#fff", 0.5), lineHeight: 2, maxWidth: 320 }}>
              Redefining vertical transportation in Pune with safety and innovation for over 16 years. 
              Engineering excellence tailored for modern infrastructure.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: 'block', color: '#fcc419', letterSpacing: 3 }}>
              QUICK LINKS
            </Typography>
            <Stack spacing={2}>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
            </Stack>
          </Grid>

          {/* Column 3: Elevator Services */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: 'block', color: '#fcc419', letterSpacing: 3 }}>
              SERVICES
            </Typography>
            <Stack spacing={2} sx={{ color: alpha("#fff", 0.5), fontSize: "0.85rem", fontWeight: 600 }}>
              <Box sx={{ transition: '0.3s', '&:hover': { color: '#fff' } }}>Home Elevators</Box>
              <Box sx={{ transition: '0.3s', '&:hover': { color: '#fff' } }}>Passenger Elevators</Box>
              <Box sx={{ transition: '0.3s', '&:hover': { color: '#fff' } }}>Capsule Elevators</Box>
              <Box sx={{ transition: '0.3s', '&:hover': { color: '#fff' } }}>Maintenance</Box>
            </Stack>
          </Grid>

          {/* Column 4: Contact & Newsletter */}
          <Grid item xs={12} md={3.5}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: 'block', color: '#fcc419', letterSpacing: 3 }}>
              CONTACT US
            </Typography>
            <Stack spacing={2} sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ color: alpha("#fff", 0.7), display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocationOnOutlined sx={{ fontSize: '1.1rem' }} /> Pune
              </Typography>
              <Typography variant="body2" sx={{ color: "#fcc419", fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneOutlined sx={{ fontSize: '1.1rem' }} /> +91 7592056788
              </Typography>
              <Typography variant="body2" sx={{ color: alpha("#fff", 0.7), display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailOutlined sx={{ fontSize: '1.1rem' }} /> info@fours.in
              </Typography>
            </Stack>

            {/* Newsletter Integration */}
            <Stack direction="row" spacing={1}>
              <NewsletterField 
                fullWidth 
                placeholder="Updates" 
                variant="outlined"
                size="small"
              />
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: "#fcc419", 
                  color: "#000",
                  minWidth: "54px",
                  borderRadius: "0px",
                  "&:hover": { bgcolor: alpha("#fcc419", 0.8) }
                }}
              >
                <SendOutlined fontSize="small" />
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, borderColor: alpha("#fff", 0.05) }} />

        {/* Bottom Bar */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 3
        }}>
          <Typography variant="caption" sx={{ color: alpha("#fff", 0.3), fontWeight: 600, letterSpacing: 1 }}>
            © {currentYear} FOUR S ELEVATORS. BUILT BY MITHUN.
            <Box component="span" sx={{ ml: 2, color: alpha("#fff", 0.1) }}>|</Box>
            <Box component="span" sx={{ ml: 2, opacity: 0.6 }}>ENGINEERED WITH REACT</Box>
          </Typography>
          
          <Stack direction="row" spacing={4}>
            <FooterLink to="/privacy" sx={{ fontSize: '0.7rem', opacity: 0.5 }}>PRIVACY</FooterLink>
            <FooterLink to="/terms" sx={{ fontSize: '0.7rem', opacity: 0.5 }}>TERMS</FooterLink>
          </Stack>
        </Box>
      </Box>
    </FooterWrap>
  );
};

export default Footer;