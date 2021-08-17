import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, signOut, passwordReset } from "./actions";
import { LoadingStatus } from "../../types";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null as string | null,
    signInLoadingStatus: "idle" as LoadingStatus,
    resetPasswordLoadingStatus: "idle" as LoadingStatus,
  },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.signInLoadingStatus = "pending";
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
      state.signInLoadingStatus = "fulfilled";
    });
    builder.addCase(signIn.rejected, (state) => {
      state.signInLoadingStatus = "rejected";
    });

    builder.addCase(passwordReset.pending, (state) => {
      state.resetPasswordLoadingStatus = "pending";
    });
    builder.addCase(passwordReset.fulfilled, (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
      state.resetPasswordLoadingStatus = "fulfilled";
    });
    builder.addCase(passwordReset.rejected, (state) => {
      state.resetPasswordLoadingStatus = "rejected";
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.accessToken = null;
    });
  },
});

export const { reducer, actions } = authSlice;
