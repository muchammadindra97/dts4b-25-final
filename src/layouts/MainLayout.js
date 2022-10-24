import React, {Fragment} from 'react';
import {Box, Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

function MainLayout() {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Navbar />
        <Outlet />
      </Container>
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </Box>
    </Fragment>
  );
}

export default MainLayout;