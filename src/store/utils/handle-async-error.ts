import { Dispatch } from "@reduxjs/toolkit";
import { RequestError } from "../../services/http";
import { actions as appActions } from "../ducks/app";

const handleAsyncError = (err: RequestError, dispatch: Dispatch): never => {
  if (err.response) {
    const errorData = err.response.data;
    dispatch(
      appActions.showNotification({
        message: `Something went wrong ${errorData.message}`,
        type: "error",
      })
    );
    throw new Error(errorData.message || errorData.error);
  }
  throw err;
};

export default handleAsyncError;
