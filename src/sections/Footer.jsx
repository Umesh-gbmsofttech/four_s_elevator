import React from "react";
import { Box, Button, Divider, Grid, Stack, TextField, Typography, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { EmailOutlined, LocationOnOutlined, PhoneOutlined, SendOutlined } from "@mui/icons-material";
import { companyProfile, productsContent } from "../content/siteContent";

const FooterWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "#08131d",
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
  },
}));

const FooterLink = styled(RouterLink)(() => ({
  textDecoration: "none",
  color: alpha("#fff", 0.5),
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: 0.5,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "inline-block",
  "&:hover": {
    color: "#d6a53a",
    transform: "translateX(6px)",
  },
}));

const FooterAction = styled("button")(() => ({
  appearance: "none",
  background: "transparent",
  border: 0,
  padding: 0,
  textDecoration: "none",
  color: alpha("#fff", 0.5),
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: 0.5,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "inline-block",
  cursor: "pointer",
  "&:hover": {
    color: "#d6a53a",
    transform: "translateX(6px)",
  },
}));

const NewsletterField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: alpha("#fff", 0.02),
    color: "#fff",
    borderRadius: "0px",
    fontSize: "0.9rem",
    "& fieldset": { borderColor: alpha("#fff", 0.1) },
    "&:hover fieldset": { borderColor: alpha("#fff", 0.2) },
    "&.Mui-focused fieldset": { borderColor: "#d6a53a" },
  },
  "& .MuiInputBase-input::placeholder": { color: alpha("#fff", 0.3), opacity: 1 },
}));

const Footer = ({ onOpenContactModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrap component="footer">
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: { xs: 3, md: 4 } }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box component="img" src="/four-s-elevators-pune-logo.PNG" alt="Four S Elevators Pune logo" loading="lazy" decoding="async" sx={{ width: 54, height: 54, objectFit: "contain", flexShrink: 0 }} />
              <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -1 }}>
                FOUR S <Box component="span" sx={{ color: "#d6a53a" }}>ELEVATORS</Box>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, color: alpha("#fff", 0.5), lineHeight: 2, maxWidth: 320 }}>
              Pune's trusted elevator partner for 25+ years. Specializing in safe, reliable, and modern vertical mobility solutions for residential, commercial, and healthcare buildings.
            </Typography>
            <Typography variant="caption" sx={{ color: alpha("#fff", 0.3), fontWeight: 700 }}>
              ISO 9001:2015 CERTIFIED
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: "block", color: "#d6a53a", letterSpacing: 3 }}>
              QUICK LINKS
            </Typography>
            <Stack spacing={2}>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: "block", color: "#d6a53a", letterSpacing: 3 }}>
              SOLUTIONS
            </Typography>
            <Stack spacing={2} sx={{ color: alpha("#fff", 0.5), fontSize: "0.85rem", fontWeight: 600 }}>
              {productsContent.categories.slice(0, 5).map((cat) => (
                <Box key={cat.title} sx={{ transition: "0.3s", "&:hover": { color: "#d6a53a", cursor: "pointer" } }}>
                  {cat.title}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3.5 }}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: "block", color: "#d6a53a", letterSpacing: 3 }}>
              CONTACT PUNE
            </Typography>
            <Stack spacing={2.5} sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ color: alpha("#fff", 0.7), display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnOutlined sx={{ fontSize: "1.2rem", color: "#d6a53a" }} /> {companyProfile.address}
              </Typography>
              <Typography variant="body2" component="div" sx={{ color: "#fff", fontWeight: 700, display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <PhoneOutlined sx={{ fontSize: "1.2rem", color: "#d6a53a" }} />
                <Box>
                  {companyProfile.phone.map((phone) => (
                    <Box key={phone} component="span" sx={{ display: "block", mb: 0.5 }}>
                      {phone}
                    </Box>
                  ))}
                </Box>
              </Typography>
              <Typography variant="body2" sx={{ color: alpha("#fff", 0.7), display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailOutlined sx={{ fontSize: "1.2rem", color: "#d6a53a" }} /> {companyProfile.email}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <NewsletterField fullWidth placeholder="Get a Quote" variant="outlined" size="small" />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#d6a53a",
                  color: "#000",
                  minWidth: "54px",
                  borderRadius: "0px",
                  "&:hover": { bgcolor: alpha("#d6a53a", 0.8) },
                }}
              >
                <SendOutlined fontSize="small" />
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, borderColor: alpha("#fff", 0.05) }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: alpha("#fff", 0.3), fontWeight: 600, letterSpacing: 1 }}>
            © {currentYear} FOUR S ELEVATORS.
            <Box component="span" sx={{ ml: 2, color: alpha("#fff", 0.1) }}>|</Box>
            <Box component="span" sx={{ ml: 2, opacity: 0.6 }}>GOVERNMENT APPROVED LIFT MANUFACTURER</Box>
          </Typography>

          <Stack direction="row" spacing={4}>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterAction type="button" onClick={onOpenContactModal}>Support</FooterAction>
          </Stack>
        </Box>
      </Box>
    </FooterWrap>
  );
};

export default Footer;
