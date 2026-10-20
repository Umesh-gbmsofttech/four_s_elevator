// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  alpha,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { motion } from "framer-motion";
import { keyframes } from "@mui/system";
import { siteMedia } from "../../assets/siteMedia";

const borderGlowPulse = keyframes`
  0% {
    border-color: rgba(214, 165, 58, 0);
    box-shadow: 0 0 0 0 rgba(214, 165, 58, 0);
    opacity: 0;
  }
  15% {
    border-color: #d6a53a;
    box-shadow: 0 0 0 4px #d6a53a, 0 0 35px 8px rgba(214, 165, 58, 0.7);
    opacity: 1;
  }
  35% {
    border-color: #ffe082;
    box-shadow: 0 0 0 5px #d6a53a, 0 0 45px 12px rgba(214, 165, 58, 0.85);
    opacity: 1;
  }
  60% {
    border-color: #d6a53a;
    box-shadow: 0 0 0 4px #d6a53a, 0 0 32px 8px rgba(214, 165, 58, 0.65);
    opacity: 1;
  }
  85% {
    border-color: rgba(214, 165, 58, 0.8);
    box-shadow: 0 0 0 2px rgba(214, 165, 58, 0.4), 0 0 18px 4px rgba(214, 165, 58, 0.35);
    opacity: 0.8;
  }
  100% {
    border-color: rgba(214, 165, 58, 0);
    box-shadow: 0 0 0 0 rgba(214, 165, 58, 0);
    opacity: 0;
  }
`;

const rippleRing = keyframes`
  0% {
    inset: -2px;
    opacity: 0.9;
    border-width: 2px;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    inset: -16px;
    opacity: 0;
    border-width: 4px;
  }
`;

const ProductCard = ({
  item,
  index,
  isHighlighted = false,
  animationTrigger = 0,
  onAnimationComplete,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isHighlighted) {
      const timer = setTimeout(() => {
        if (onAnimationComplete) {
          onAnimationComplete(item.imageKey);
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isHighlighted, animationTrigger, item.imageKey, onAnimationComplete]);

  return (
    <>
      {/* CARD */}
      <Box
        id={item.imageKey}
        data-product-card={item.imageKey}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          p: 1.5,
          borderRadius: "18px",
          bgcolor: "#ffffff",
          border: "2px solid",
          borderColor: isHighlighted ? alpha("#d6a53a", 0.6) : "rgba(16, 35, 50, 0.08)",
          boxShadow: isHighlighted
            ? `0 14px 40px ${alpha("#d6a53a", 0.25)}`
            : `0 8px 25px ${alpha("#000", 0.05)}`,
          transform: isHighlighted ? "translateY(-6px)" : "none",
          scrollMarginTop: { xs: "90px", md: "130px" },
          transition: "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease",
          "&:hover": {
            borderColor: alpha("#d6a53a", 0.4),
            boxShadow: `0 12px 30px ${alpha("#000", 0.08)}`,
          },
        }}
      >
        {/* ANIMATED BORDER GLOW OVERLAY */}
        {isHighlighted && (
          <Box
            key={`border-glow-${animationTrigger}`}
            sx={{
              position: "absolute",
              inset: -2,
              borderRadius: "20px",
              pointerEvents: "none",
              border: "3px solid #d6a53a",
              animation: `${borderGlowPulse} 2.4s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards`,
              zIndex: 3,
            }}
          />
        )}

        {/* ANIMATED BORDER RIPPLE OVERLAY */}
        {isHighlighted && (
          <Box
            key={`border-ripple-${animationTrigger}`}
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              pointerEvents: "none",
              border: "2px solid #d6a53a",
              animation: `${rippleRing} 1.6s ease-out 1 forwards`,
              zIndex: 2,
            }}
          />
        )}
        {/* IMAGE */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            pt: "70%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: `0 8px 25px ${alpha("#000", 0.06)}`,
            bgcolor: "#f9f9f9",
            mb: 2,

            "&:hover .card-image": {
              transform: "scale(1.08)",
            },

            "&:hover .overlay": {
              transform: "translateY(0%)",
              opacity: 1,
            },
          }}
        >
          {/* IMAGE */}
          <Box
            className="card-image"
            component="img"
            src={siteMedia.products[item.imageKey]}
            alt={item.title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
            }}
          />

          {/* OVERLAY */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "80%",
              bgcolor: "rgba(0,0,0,0.75)",
              color: "#fff",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              transform: "translateY(100%)",
              opacity: 0,
              transition: "all 0.4s ease",
            }}
          >
            <Typography sx={{ fontSize: "0.85rem", mb: 1 }}>
              {item.text}
            </Typography>

            <Button
              variant="contained"
              size="small"
              startIcon={<EmailOutlinedIcon />}
              onClick={() => setOpen(true)}
              sx={{
                bgcolor: "#C2B280",
                color: "#fff",
                fontSize: "0.7rem",
                borderRadius: "20px",
                textTransform: "none",
                alignSelf: "flex-start",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#000",
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>

        {/* TITLE */}
        <Box sx={{ textAlign: "center", px: 1 }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#333",
              fontSize: "1rem",
              minHeight: "2.5rem",
            }}
          >
            {item.title}
          </Typography>
        </Box>
      </Box>

      {/* MODAL */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          
          {/* CLOSE BUTTON */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
              zIndex: 10,
              bgcolor: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* CONTENT */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* LEFT IMAGE */}
            <Box
              component="img"
              src={siteMedia.products[item.imageKey]}
              alt={item.title}
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { md: "400px" },
                objectFit: "cover",
              }}
            />

            {/* RIGHT TEXT */}
            <Box sx={{ p: 4 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                {item.title}
              </Typography>

              <Typography sx={{ mb: 2, color: "#555" }}>
                {item.text}
              </Typography>

              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Why choose this lift?
              </Typography>

              <Typography sx={{ fontSize: "0.9rem", color: "#666" }}>
                This elevator is designed for safety, smooth operation,
                and long-term durability. It ensures efficient vertical
                transportation with minimal maintenance, making it ideal
                for both residential and commercial use.
              </Typography>

              
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;