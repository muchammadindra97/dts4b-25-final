import React, {Fragment} from 'react';
import {Box, Container, Link, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Navbar />
        <Outlet />
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </Fragment>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default MainLayout;