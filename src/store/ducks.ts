import { combineReducers } from "redux";
import { appReducer } from "./app";
import { authReducer } from "./auth";

const reducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export { reducer };
