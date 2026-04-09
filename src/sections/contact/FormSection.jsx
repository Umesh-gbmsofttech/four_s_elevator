import React, { useState } from "react";
import { Alert, Box, Button, CircularProgress, Container, Grid, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Reveal, fadeLeft } from "../../components/motion/Reveal";
import { submitContactLead } from "../../utils/contactSubmission";

const StyledContactInput = styled(TextField)(() => ({
  "& .MuiInputLabel-root": {
    color: "#102332",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: "0.8rem",
    letterSpacing: "1.5px",
    opacity: 0.9,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(16,35,50,0.18)",
    borderBottomWidth: "2px",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#102332" },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#d6a53a",
    borderBottomWidth: "3px",
  },
  "& .MuiInputBase-input": {
    padding: "12px 0",
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "#102332",
  },
}));

const defaultFormData = {
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

const FormSection = () => {
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

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
        formType: "contact",
      });
      setFormData(defaultFormData);
      setOpenPopup(true);
    } catch (error) {
      console.error("Error!", error);
      window.alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#f5f1ea", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal variant={fadeLeft}>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography sx={{ color: "#d6a53a", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", mb: 2 }}>
                Direct Inquiry
              </Typography>
              <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, color: "#102332", lineHeight: 1.08 }}>
                Request a consultation for your next lift project.
              </Typography>
              <Typography sx={{ mt: 3, color: "#5f6d79", lineHeight: 1.9 }}>
                Use this form for new installations, modernization requests, breakdown support, or maintenance planning.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ p: { xs: 3, md: 4 }, borderRadius: "28px", backgroundColor: "#fffdfa", boxShadow: "var(--shadow-xl)" }}>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <StyledContactInput required fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} variant="standard" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <StyledContactInput
                      required
                      fullWidth
                      label="Phone Number"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      variant="standard"
                      slotProps={{ htmlInput: { maxLength: 15 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <StyledContactInput required fullWidth label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" variant="standard" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <StyledContactInput required select fullWidth label="Project Type" name="serviceType" value={formData.serviceType} onChange={handleChange} variant="standard">
                      {serviceOptions.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </StyledContactInput>
                  </Grid>
                  <Grid size={12}>
                    <StyledContactInput required fullWidth label="Site Details / Requirements" name="message" value={formData.message} onChange={handleChange} multiline rows={4} variant="standard" />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      type="submit"
                      disabled={loading}
                      variant="contained"
                      sx={{
                        bgcolor: "#102332",
                        color: "#fff",
                        px: 5,
                        py: 1.5,
                        borderRadius: "999px",
                        fontWeight: 900,
                        letterSpacing: 1.5,
                        "&:hover": { bgcolor: "#d6a53a", color: "#08131d" },
                      }}
                    >
                      {loading ? <CircularProgress size={24} color="inherit" /> : "Submit Inquiry"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Reveal>
      </Container>

      <Snackbar open={openPopup} autoHideDuration={4000} onClose={() => setOpenPopup(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={() => setOpenPopup(false)} severity="success" sx={{ bgcolor: "#102332", color: "#fff", borderRadius: "16px", fontWeight: 800, borderLeft: "6px solid #d6a53a" }}>
          Inquiry sent. Four S will contact you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormSection;
