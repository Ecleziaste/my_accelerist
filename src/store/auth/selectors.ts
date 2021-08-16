import { RootState } from "..";

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const selectSignInLoadingStatus = (state: RootState) => {
  return state.auth.signInLoadingStatus;
};

export const selectResetPasswordLoadingStatus = (state: RootState) => {
  return state.auth.resetPasswordLoadingStatus;
};
