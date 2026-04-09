import React, { useState } from "react";
import { Alert, Box, Button, CircularProgress, Grid, IconButton, MenuItem, Modal, Snackbar, Stack, TextField, Typography, alpha } from "@mui/material";
import { CloseRounded, CheckCircle, PhoneRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactLead } from "../utils/contactSubmission";
import { companyProfile } from "../content/siteContent";

const StyledContactInput = styled(TextField)(() => ({
  "& .MuiInputLabel-root": {
    color: "#102332",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: "0.74rem",
    letterSpacing: "1.2px",
    opacity: 0.9,
  },
  "& .MuiInput-underline:before": { borderBottomColor: "rgba(16,35,50,0.18)", borderBottomWidth: "2px" },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#102332" },
  "& .MuiInput-underline:after": { borderBottomColor: "#d6a53a", borderBottomWidth: "3px" },
  "& .MuiInputBase-input": { padding: "10px 0", fontSize: "1rem", fontWeight: 600, color: "#102332" },
}));

const initialFormData = {
  name: "",
  email: "",
  contactNumber: "",
  serviceType: "",
  message: "",
};

const serviceOptions = [
  "New Elevator Installation",
  "Modernization / Upgrades",
  "Annual Maintenance Contract (AMC)",
  "Emergency Breakdown Support",
];

const ContactModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await submitContactLead({
        ...formData,
        formType: "lead-popup",
      });
      setFormData(initialFormData);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error!", error);
      window.alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose} closeAfterTransition sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 1.25, sm: 2 } }}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              style={{ outline: "none", width: "100%", maxWidth: 560, maxHeight: "100%" }}
            >
              <Box
                sx={{
                  position: "relative",
                  bgcolor: "#fffdfa",
                  borderRadius: { xs: "24px", md: "28px" },
                  px: { xs: 2.2, sm: 3.25, md: 4 },
                  py: { xs: 2.2, sm: 2.8, md: 3.25 },
                  boxShadow: "0 50px 100px rgba(0,0,0,0.25)",
                  maxHeight: "calc(100vh - 16px)",
                  overflowY: "auto",
                  overflowX: "hidden",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <IconButton
                  onClick={onClose}
                  sx={{
                    position: "sticky",
                    top: 0,
                    ml: "auto",
                    display: "flex",
                    color: "#102332",
                    bgcolor: alpha("#fffdfa", 0.92),
                    zIndex: 2,
                    "&:hover": { bgcolor: alpha("#102332", 0.06) },
                  }}
                >
                  <CloseRounded />
                </IconButton>

                <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 0.75, pr: 5 }}>
                  Elevator Consultation
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: "#102332", mb: 2.25, fontSize: { xs: "1.55rem", sm: "1.9rem" }, lineHeight: 1.15 }}>
                  Start Your Project
                </Typography>
                <Typography sx={{ color: "#5f6d79", mb: 2.5, lineHeight: 1.75, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                  Use the quick-call buttons below or send us your requirement for a callback and quotation.
                </Typography>

                <Box sx={{ mb: 2.75, p: { xs: 1.8, sm: 2.2 }, borderRadius: "20px", backgroundColor: alpha("#102332", 0.04), border: `1px solid ${alpha("#102332", 0.08)}` }}>
                  <Typography sx={{ color: "#102332", fontWeight: 800, mb: 1.4, fontSize: "0.95rem" }}>
                    Direct Contact
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                      gap: 1,
                    }}
                  >
                    {companyProfile.phone.map((phone) => (
                      <Button
                        key={phone}
                        component="a"
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        startIcon={<PhoneRounded />}
                        sx={{
                          justifyContent: "center",
                          minWidth: 0,
                          borderRadius: "999px",
                          px: 1.2,
                          py: 1.05,
                          color: "#102332",
                          backgroundColor: "#fff",
                          border: `1px solid ${alpha("#102332", 0.12)}`,
                          fontWeight: 800,
                          fontSize: { xs: "0.84rem", sm: "0.78rem", md: "0.82rem" },
                          whiteSpace: "nowrap",
                          "&:hover": {
                            backgroundColor: alpha("#d6a53a", 0.14),
                            borderColor: alpha("#d6a53a", 0.5),
                          },
                        }}
                      >
                        {phone}
                      </Button>
                    ))}
                  </Box>
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={{ xs: 2, sm: 2.5 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <StyledContactInput required fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} variant="standard" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <StyledContactInput required fullWidth label="Phone Number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} variant="standard" slotProps={{ htmlInput: { maxLength: 15 } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <StyledContactInput required fullWidth label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" variant="standard" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <StyledContactInput required select fullWidth label="Service Type" name="serviceType" value={formData.serviceType} onChange={handleChange} variant="standard">
                        {serviceOptions.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </StyledContactInput>
                    </Grid>
                    <Grid size={12}>
                      <StyledContactInput required fullWidth label="Message / Site Requirements" name="message" value={formData.message} onChange={handleChange} multiline rows={2.6} variant="standard" />
                    </Grid>
                    <Grid size={12} sx={{ pt: "8px !important" }}>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ alignItems: { sm: "center" } }}>
                        <Button
                          type="submit"
                          disabled={loading}
                          fullWidth
                          sx={{
                            bgcolor: "#102332",
                            color: "#fff",
                            py: 1.4,
                            borderRadius: "999px",
                            fontWeight: 900,
                            "&:hover": { bgcolor: "#d6a53a", color: "#08131d" },
                          }}
                        >
                          {loading ? <CircularProgress size={22} color="inherit" /> : "Submit Inquiry"}
                        </Button>
                        <Button
                          type="button"
                          onClick={onClose}
                          fullWidth
                          sx={{
                            py: 1.4,
                            borderRadius: "999px",
                            color: "#102332",
                            border: `1px solid ${alpha("#102332", 0.14)}`,
                            fontWeight: 800,
                            "&:hover": { backgroundColor: alpha("#102332", 0.04) },
                          }}
                        >
                          Cancel
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>

      <Snackbar open={success} autoHideDuration={3000}>
        <Alert icon={<CheckCircle fontSize="inherit" />} sx={{ bgcolor: "#102332", color: "#fff", borderRadius: "16px", fontWeight: 800, borderLeft: "6px solid #d6a53a" }}>
          Inquiry sent. Our team will contact you shortly.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactModal;
