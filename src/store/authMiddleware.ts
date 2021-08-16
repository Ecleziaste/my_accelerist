import { AnyAction, Dispatch } from "redux";
import { REHYDRATE } from "redux-persist";
import { http } from "../services/http";
import { signUp, signIn } from "../store/auth/actions";

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    if (action.type === signUp.fulfilled.type) {
      action.payload?.accessToken &&
        http.setAuthorizationHeader(action.payload.accessToken);
    }
    if (action.type === signIn.fulfilled.type) {
      action.payload?.accessToken &&
        http.setAuthorizationHeader(action.payload.accessToken);
    }
    if (action.type === REHYDRATE) {
      action.payload?.accessToken &&
        http.setAuthorizationHeader(action.payload.accessToken);
    }

    return next(action);
  };
