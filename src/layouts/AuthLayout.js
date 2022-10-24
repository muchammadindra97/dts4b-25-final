import React from 'react';
import {
  Box,
  Container,
  Link,
  Typography
} from "@mui/material";
import {Outlet, Link as RouterLink} from "react-router-dom";
import Copyright from "../components/Copyright";

function AuthLayout() {
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="body2" color="text.secondary" sx={{ mt: 5 }}>
        <Link to="/" component={RouterLink}>
          &gt; Back to Home
        </Link>
      </Typography>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Outlet />
      </Box>
      <Copyright />
    </Container>
  );
}

export default AuthLayout;