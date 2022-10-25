import { createSlice } from '@reduxjs/toolkit';
import {LOCALSTORAGE_KEY_AUTH} from "../utils/constant";

const initialState = {
  user: null,
  isLogin: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLogin = true;
      localStorage.setItem(LOCALSTORAGE_KEY_AUTH, JSON.stringify(state));
    },
    logout: (state) => {
      state.user = initialState.user;
      state.isLogin = initialState.isLogin;
      localStorage.removeItem('reactNewsAuth');
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;