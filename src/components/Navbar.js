import React, {useState} from 'react';
import {Button, Link, Stack, Toolbar, Typography} from "@mui/material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from 'firebase/auth';
import {auth} from "../configs/firebase";
import {show as showSnackbar} from "../stores/snackbarSlice";
import {logout as doLogout} from "../stores/authSlice";

function Navbar() {
  const authState = useSelector((state) => state.auth);

  return (
    <Toolbar sx={{ marginBottom: 3}} disableGutters>
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
      {
        authState.isLogin
        ? <AuthActionLogout email={authState.user.email} />
        : <AuthActionLogin />
      }
    </Toolbar>
  );
}

function AuthActionLogin() {
  return (
    <Stack spacing={2} direction="row">
      <Button component={RouterLink} variant="outlined" size="small" to="/login">
        Login
      </Button>
      <Button component={RouterLink} variant="contained" size="small" disableElevation to="/registration">
        Sign up
      </Button>
    </Stack>
  );
}

function AuthActionLogout({email}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutClickHandler = async () => {
    try {
      setIsProcessing(true);
      await signOut(auth);
      dispatch(doLogout());
      setIsProcessing(false);
      dispatch(showSnackbar({
        title: 'Success',
        severity: 'success',
        message: 'Logout success!'
      }));
      navigate("/login");
    } catch (e) {
      setIsProcessing(false);
      dispatch(showSnackbar({
        title: 'Error',
        severity: 'error',
        message: `${e.message}`
      }));
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <Typography component="p" variant="subtitle1">
        {email}
      </Typography>
      <Button
        disabled={isProcessing}
        variant="contained"
        size="small"
        disableElevation
        onClick={logoutClickHandler}
      >
        Logout
      </Button>
    </Stack>
  );
}

export default Navbar;