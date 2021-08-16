import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi, signInApi, passwordApi } from "./api";
import Router from "next/router";
import { ROUTE_PATH } from "../../constants";

export const setUser = createAction<any>("user/set");

export const signOut = createAsyncThunk("auth/signOut", () => {
  setTimeout(() => {
    Router.push(ROUTE_PATH.signIn);
  });
});

export const signUp = createAsyncThunk<any, SignUpParams>(
  "auth/signUp",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await signUpApi(params);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.errors);
    }
  }
);

export const signIn = createAsyncThunk<any, SignInParams>(
  "auth/signIn",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await signInApi(params);
      console.log(data);

      return { data };
    } catch (e) {
      return rejectWithValue(e.response.data.errors);
    }
  }
);

export const resetPassword = createAsyncThunk<any, string>(
  "auth/resetPassword",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await passwordApi(params);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.errors);
    }
  }
);

export type SignUpParams = { email: string; password: string };
export type SignInParams = { email: string; password: string };
export type ResetPass = { email: string; redirect_url: string };
