import React from 'react';
import {Box, Container, Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          404
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          The page you are looking for is not found!
        </Typography>
        <Typography align="center" variant="body2" color="text.secondary" sx={{ mt: 5 }}>
          <Link to="/" component={RouterLink}>
            &gt; Back to Home
          </Link>
        </Typography>
        <Container />
      </Container>
    </Box>
  );
}

export default NotFound;