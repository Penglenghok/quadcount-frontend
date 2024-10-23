import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpRequest } from "../../config/axios.ts";
import { jwtDecode } from "jwt-decode";

export type CredentitalType = {
  email: string;
  password: string;
};

export const loginAction = createAsyncThunk(
  "login",
  async (credentials: CredentitalType) => {
    const response = await httpRequest.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data.user;
  }
);

export const checkAuthenticationAction = createAsyncThunk(
  "check_auth",
  async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedJWT: any = jwtDecode(token);
      const currentDate = Date.now() / 1000;
      if (decodedJWT?.exp < currentDate) {
        localStorage.removeItem("token");
        return {};
      } else {
        const sub: any = decodedJWT.sub?.split(",");
        const user = {
          id: sub[0],
          email: sub[1],
        };
        return user;
      }
    }
    return {};
  }
);
