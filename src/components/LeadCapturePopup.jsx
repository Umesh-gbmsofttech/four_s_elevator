import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Modal, Typography, alpha } from "@mui/material";
import { CloseRounded, TrendingUpRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const LeadCapturePopup = ({ onOpenContactModal }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("four_s_popup_seen");
    if (!hasSeenPopup) {
      const timer = window.setTimeout(() => {
        setOpen(true);
      }, 30000);

      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleClose = (permanently = false) => {
    setOpen(false);
    if (permanently) {
      localStorage.setItem("four_s_popup_seen", "true");
    }
  };

  const handleLetsTalk = () => {
    handleClose(true);
    onOpenContactModal?.();
  };

  return (
    <>
      <AnimatePresence>
        <Modal open={open} onClose={() => handleClose()} closeAfterTransition sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} style={{ outline: "none" }}>
            <Box
              sx={{
                position: "relative",
                maxWidth: 480,
                bgcolor: "#102332",
                color: "#f5f1ea",
                borderRadius: "32px",
                p: { xs: 4, md: 5 },
                boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                border: `1px solid ${alpha("#ffffff", 0.1)}`,
                textAlign: "center",
              }}
            >
              <IconButton onClick={() => handleClose(true)} sx={{ position: "absolute", top: 16, right: 16, color: alpha("#ffffff", 0.4) }}>
                <CloseRounded />
              </IconButton>

              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "20px",
                  bgcolor: alpha("#d6a53a", 0.1),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <TrendingUpRounded sx={{ color: "#d6a53a", fontSize: 32 }} />
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.2 }}>
                Looking for the Best Elevator Solution?
              </Typography>
              <Typography sx={{ color: alpha("#ffffff", 0.7), mb: 4, lineHeight: 1.7 }}>
                Get a free consultation and quote for your residential or commercial project from Pune's trusted elevator experts.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button
                  onClick={handleLetsTalk}
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.8,
                    borderRadius: "999px",
                    bgcolor: "#d6a53a",
                    color: "#08131d",
                    fontWeight: 900,
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    "&:hover": { bgcolor: "#f0bf55" },
                  }}
                >
                  LET'S TALK
                </Button>
                <Button onClick={() => handleClose(true)} sx={{ color: alpha("#ffffff", 0.5), fontWeight: 700, fontSize: "0.85rem" }}>
                  No Thanks, just browsing
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Modal>
      </AnimatePresence>

    </>
  );
};

export default LeadCapturePopup;
