import React, {Fragment, useState} from 'react';
import {Avatar, Box, Button, Link, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../configs/firebase";
import {useDispatch} from "react-redux";
import {show as showSnackbar} from "../stores/snackbarSlice";
import {login as setLogin} from "../stores/authSlice";

const initialForm = {email: '', password: ''};

function Registration() {
  const [form, setForm] = useState(initialForm);
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();

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
      const result = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = result.user.toJSON();
      dispatch(setLogin({user}));
      setForm(initialForm);
      dispatch(showSnackbar({
        title: 'Success',
        severity: 'success',
        message: 'Registration complete!'
      }));
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
        Sign up
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
          autoComplete="new-password"
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
          Sign Up
        </Button>
        <div>
          <Link to="/login" variant="body2" component={RouterLink}>
            Already have an account? Sign in
          </Link>
        </div>
      </Box>
    </Fragment>
  );
}

export default Registration;