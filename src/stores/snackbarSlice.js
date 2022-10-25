import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  severity: 'success',
  title: null,
  message: 'message'
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    show: (state, action = null) => {
      state.isOpen = true;

      const severity = action !== null ? action.payload.severity : initialState.severity;
      const title = action !== null ? action.payload.title : initialState.title;
      const message = action !== null ? action.payload.message : initialState.message;

      state.severity = severity;
      state.title = title;
      state.message = message;
    },
    close: (state) => {
      state.isOpen = initialState.isOpen;
    }
  }
});

// Action creators are generated for each case reducer function
export const { show, close } = snackbarSlice.actions;

export default snackbarSlice.reducer;