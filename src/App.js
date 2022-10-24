import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NotFound from "./components/NotFound";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import LockedDisplay from "./components/LockedDisplay";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/detail/:uuid" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/locked" element={<LockedDisplay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
