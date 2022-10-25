import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NotFound from "./components/NotFound";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import SnackbarToast from "./components/SnackbarToast";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import PrivateRoute from "./components/PrivateRoute";
import {useDispatch} from "react-redux";
import {LOCALSTORAGE_KEY_AUTH} from "./utils/constant";
import {login as setLogin} from "./stores/authSlice";

const theme = createTheme();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authDataString = localStorage.getItem(LOCALSTORAGE_KEY_AUTH);
    if (authDataString !== null) {
      const authData = JSON.parse(authDataString);
      dispatch(setLogin({user: authData.user}));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<PublicOnlyRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/detail/:uuid" element={<Detail />} />
          </Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SnackbarToast />
    </ThemeProvider>
  );
}

export default App;
