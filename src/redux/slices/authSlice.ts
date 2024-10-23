// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuthenticationAction,
  loginAction,
} from "../actions/auth.action.ts";

const initialState = {
  user: {},
  loading: false,
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
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
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
