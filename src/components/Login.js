import React, {Fragment, useState} from 'react';
import {Avatar, Box, Button, Link, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../configs/firebase";
import {show as showSnackbar} from "../stores/snackbarSlice";
import {login as setLogin} from "../stores/authSlice";

const initialForm = {email: '', password: ''};

function Login() {
  const [form, setForm] = useState(initialForm);
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputFieldHandler = (event) => {
    const inputTarget = event.target;

    setForm(prevState => {
      const newForm = {...prevState};
      newForm[inputTarget.name] = inputTarget.value;

      return newForm;
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if(event.target.reportValidity() === false) return;

    setIsProcessing(true);

    try {
      const result = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = result.user.toJSON();
      dispatch(setLogin({user}));
      setForm(initialForm);
      dispatch(showSnackbar({
        title: 'Success',
        severity: 'success',
        message: 'Login success!'
      }));
      navigate('/');
    } catch (e) {
      dispatch(showSnackbar({
        title: 'Error',
        severity: 'error',
        message: `${e.message}`
      }));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Fragment>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={formSubmitHandler}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          type="email"
          onChange={inputFieldHandler}
          value={form.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={inputFieldHandler}
          value={form.password}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isProcessing}
        >
          Sign In
        </Button>
        <div>
          <Link to="/registration" variant="body2" component={RouterLink}>
            {"Don't have an account? Sign Up"}
          </Link>
        </div>
      </Box>
    </Fragment>
  );
}

export default Login;