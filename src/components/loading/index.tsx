import React from "react";
import { Box, CircularProgress, alpha } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: alpha("#ffff", 0.775),
        zIndex: 99999,
      }}
    >
      <CircularProgress
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </Box>
  );
}

export default Loading;
