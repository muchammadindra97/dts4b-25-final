import React, {Fragment, useState} from 'react';
import {Avatar, Box, Button, Link, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";

function Login() {
  const [form, setForm] = useState({email: '', password: ''});

  const inputFieldHandler = (event) => {
    const inputTarget = event.target;

    setForm(prevState => {
      const newForm = {...prevState};
      newForm[inputTarget.name] = inputTarget.value;

      return newForm;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form);
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