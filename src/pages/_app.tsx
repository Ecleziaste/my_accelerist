import React from 'react';
import { useDispatch } from 'react-redux';
import ServerCookies from 'cookies';
import NextApp, { AppProps, AppContext } from 'next/app';
import * as api from 'api';
import { actions, wrapper } from 'store';
import { ToastNotification } from 'components';
import { PUSHER_EVENTS } from 'types';

import '../styles/reset.scss';
import '../styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import { getCookie } from 'utils/cookie';
import { COOKIE_KEY, ROUTE_PATH } from '../constants';
import { UIRole } from 'types';
import moment from 'moment';
moment.locale('ru');




function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  
  return (
    <React.Fragment>
      <ToastNotification />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const { Component, ctx } = appContext;
  const appProps = await NextApp.getInitialProps(appContext);

  if (ctx.req) {
    const { dispatch } = ctx.store;

    const uiRole = getCookie(COOKIE_KEY.uiRole, ctx.req) as UIRole | undefined;
    const accessToken = getCookie(COOKIE_KEY.accessToken, ctx.req);

    if (!uiRole && ctx.res?.statusCode !== 301) {
      const serverCookies = new ServerCookies(ctx.req!, ctx.res!);
      serverCookies.set(COOKIE_KEY.uiRole, 'student', { httpOnly: false });
    }

    if (accessToken) {
      dispatch(actions.auth.setAccessToken(accessToken));
      const response = await api.getUser();
      //TODO: change logic initial role
      dispatch(actions.user.initialSetUIRole(uiRole || 'student'));
      const user = response.data;
      dispatch(actions.user.setUser(user));
    }
  }

  return {
    ...appProps,
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default wrapper.withRedux(App);
