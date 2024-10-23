// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuthenticationAction,
  loginAction,
  logoutAction,
} from "../action/auth.action";

const initialState = {
  loading: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
        state.user = {};
      })
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.loading = false;
        state.user = {};
      })
      .addCase(logoutAction.rejected, (state) => {
        state.loading = false;
        state.user = {};
      })
      .addCase(checkAuthenticationAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthenticationAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(checkAuthenticationAction.rejected, (state) => {
        state.loading = false;
        state.user = {};
      });
  },
});

export default authSlice;
