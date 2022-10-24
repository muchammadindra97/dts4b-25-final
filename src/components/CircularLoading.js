import React from 'react';
import {Box, CircularProgress} from "@mui/material";

function CircularLoading() {
  return (
    <Box sx={{pt: 5, pb: 5}}>
      <CircularProgress size="5rem" />
    </Box>
  );
}

export default CircularLoading;