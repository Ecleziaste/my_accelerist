import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeOptions as NotificationType } from "react-toastify";

interface Notification {
  message: string;
  type?: NotificationType;
}

const appSlice = createSlice({
  name: "app",
  initialState: {
    notification: {
      message: "",
    } as Notification,
  },
  reducers: {
    showNotification(state, action: PayloadAction<Notification>) {
      state.notification = action.payload;
    },
  },
});

export const { reducer, actions } = appSlice;
