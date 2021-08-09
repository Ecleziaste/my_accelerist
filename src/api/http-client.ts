import axios, {
  CancelToken as AxiosCancelToken,
  AxiosError,
  AxiosRequestConfig,
} from "axios";
// import Router from "next/router";
import { BASE_URL } from "../../src/config";
// import { store, selectors, actions } from "store";

// export type CancelToken = AxiosCancelToken;
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type RequestError<
//   T = { message: string; statusCode: number; error: string }
// > = AxiosError<T>;
// export type RequestConfig = AxiosRequestConfig;

const httpClient = axios.create({
  baseURL: BASE_URL,
  withAuth: true,
});

// httpClient.interceptors.request.use((config) => {
//   if (!config.withAuth) {
//     return config;
//   }

//   const state = store?.getState();
//   const accessToken = state ? selectors.auth.selectAccessToken(state) : null;
//   if (!accessToken) {
//     return config;
//   }

//   const headers = {
//     ...config.headers,
//     Authorization: `Bearer ${accessToken}`,
//   };

//   return { ...config, headers };
// });

// httpClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       if (error.response.status === 401 && !Router.pathname.includes("auth")) {
//         const { signOut } = actions.auth;
//         if (store) {
//           // @ts-ignore
//           store.dispatch(signOut());
//         }
//       } else {
//         throw error;
//       }

//       throw error.response.data;
//     }

//     if (error.data) {
//       throw error.data;
//     }

//     throw error;
//   }
// );

// export const createSourceCancelToken = () => {
//   return axios.CancelToken.source();
// };

export default httpClient;
