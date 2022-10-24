import React from 'react';
import {Box, Button, Container, Link, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import Copyright from "./Copyright";

function LockedDisplay() {
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
          Content Locked!
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          You must log in to access the content.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button component={RouterLink} variant="outlined" to="/login">
            Login
          </Button>
          <Button component={RouterLink} variant="contained" disableElevation to="/registration">
            Sign up
          </Button>
        </Stack>
        <Typography align="center" variant="body2" color="text.secondary" sx={{ mt: 5 }}>
          <Link to="/" component={RouterLink}>
            &gt; Back to Home
          </Link>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default LockedDisplay;