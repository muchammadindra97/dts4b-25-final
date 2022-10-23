import React from 'react';
import {Button, Link, Stack, Toolbar, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Navbar() {
  return (
    <Toolbar sx={{ marginBottom: 3, paddingLeft: 0, paddingRight: 0 }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="left"
        noWrap
        sx={{ flex: 1 }}
        fontWeight="bold"
      >
        <Link color="inherit" to="/" component={RouterLink} sx={{textDecoration: 'none'}}>
          React News
        </Link>
      </Typography>
      <Stack spacing={2} direction="row">
        <Button component={RouterLink} variant="outlined" size="small" to="/login">
          Login
        </Button>
        <Button component={RouterLink} variant="contained" size="small" disableElevation to="/registration">
          Sign up
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default Navbar;