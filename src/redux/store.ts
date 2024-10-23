// store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export interface IReducers {
  auth: {
    loading: boolean;
    user: any;
  };
}

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
