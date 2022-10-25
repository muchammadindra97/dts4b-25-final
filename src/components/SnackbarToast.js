import React from 'react';
import {Alert, AlertTitle, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {close as closeSnackbar} from "../stores/snackbarSlice";

function SnackbarToast() {
  const isSnackbarOpen = useSelector((state) => state.snackbar.isOpen);
  const snackbarData = useSelector((state) => {
    return {
      severity: state.snackbar.severity,
      title: state.snackbar.title,
      message: state.snackbar.message,
    };
  });
  const dispatch = useDispatch();

  const closeSnackbarHandler = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={isSnackbarOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={closeSnackbarHandler}
    >
      <Alert onClose={closeSnackbarHandler} severity={snackbarData.severity} sx={{ width: '100%' }}>
        {snackbarData.title && <AlertTitle>{snackbarData.title}</AlertTitle>}
        {snackbarData.message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarToast;