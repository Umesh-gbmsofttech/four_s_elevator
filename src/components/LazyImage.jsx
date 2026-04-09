import React from "react";
import { Box } from "@mui/material";

const LazyImage = ({ src, alt, sx, priority = false, ...props }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    fetchPriority={priority ? "high" : "auto"}
    sx={sx}
    {...props}
  />
);

export default LazyImage;
