import { RootState } from "..";

export const selectNotification = (state: RootState) => state.app.notification;
