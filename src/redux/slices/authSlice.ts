// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.user = {};
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

export default authSlice;
