import { configureStore } from "@reduxjs/toolkit";
import {
  MakeStore,
  createWrapper,
  HYDRATE as NEXT_REDUX_WRAPPER_HYDRATE_ACTION,
} from "next-redux-wrapper";
import { reducer } from "./ducks";
import { signOut } from "./auth/actions";
// import { useDispatch } from "react-redux";

export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => {
//   return useDispatch<AppDispatch>();
// };

export const rootReducer = (state: any, action: any) => {
  let nextState = state;

  if (action.type === signOut.fulfilled.type) {
    // How to reset store https://twitter.com/dan_abramov/status/703035591831773184
    nextState = undefined;
  }

  if (action.type === NEXT_REDUX_WRAPPER_HYDRATE_ACTION) {
    const serverState = action.payload as RootState;

    nextState = {
      ...state,
      ...serverState,
      auth: {
        ...state.auth,
        ...serverState.auth,
        accessToken: state.auth.accessToken || serverState.auth.accessToken,
      },
    };
  }

  return reducer(nextState, action);
};

export let store: Store | undefined;
// https://github.com/kirill-konshin/next-redux-wrapper
const makeStore: MakeStore<RootState> = () => {
  store = configureStore({
    // @ts-ignore
    reducer: rootReducer,
    devTools: true,
  });
  return store;
};

export type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<RootState>(makeStore, { debug: false });
