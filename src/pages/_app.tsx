import NextApp, { AppProps, AppContext } from "next/app";
import { ResetStyles } from "../styles/ResetStyles";
import { GlobalStyles } from "../styles/GlobalStyles";
import { wrapper } from "../store";
import * as api from "../api";

import "../styles/fonts.css";

import { ROUTE_PATH } from "../constants";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

// FIXME: getInitialProps are deprecated
// App.getInitialProps = async (appContext: AppContext) => {
//   const { Component, ctx } = appContext;
//   const appProps = await NextApp.getInitialProps(appContext);

//   return {
//     ...appProps,
//     pageProps: {
//       ...(Component.getInitialProps
//         ? await Component.getInitialProps(ctx)
//         : {}),
//     },
//   };
// };

export default wrapper.withRedux(App);
