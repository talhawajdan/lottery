import { createSlice } from "@reduxjs/toolkit";
import { loginSuccess, registerSuccess } from "./extraReducers";
import { setTokens } from "./reducers";
import { authAPI } from "@/services/auth";
import { TAuthSlice } from "@/types/store";

const initialState: TAuthSlice = {
  authToken: null,
  refreshToken: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens: setTokens,
  },
  extraReducers: (builder) => {
    builder
      //Login Matchers
      .addMatcher(authAPI.endpoints.login.matchFulfilled, loginSuccess)
      //Register Matchers
      .addMatcher(authAPI.endpoints.register.matchFulfilled, registerSuccess);
  },
});

export const { setAuthTokens } = slice.actions;
export default slice.reducer;
