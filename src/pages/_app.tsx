import NextApp, { AppProps, AppContext } from "next/app";
import { ResetStyles } from "../styles/ResetStyles";
import { GlobalStyles } from "../styles/GlobalStyles";
import "../styles/fonts.css";

// import * as api from "api";
// import { actions, wrapper } from "store";
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
