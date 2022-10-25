import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import {newsApi} from "./services/newsApi";
import snackbarReducer from "./stores/snackbarSlice";
import authReducer from "./stores/authSlice";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    snackbar: snackbarReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware)
});

setupListeners(store.dispatch);
