import NextApp, { AppProps, AppContext } from "next/app";
// import * as api from "api";
// import { actions, wrapper } from "store";

import "../styles/reset.css";
import "../styles/global.css";
import { ROUTE_PATH } from "../constants";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const { Component, ctx } = appContext;
  const appProps = await NextApp.getInitialProps(appContext);

  return {
    ...appProps,
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default App;
