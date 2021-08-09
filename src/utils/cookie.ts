import { IncomingMessage } from "http";

// resource for handling cookies taken from here:
// https://github.com/carlos-peru/next-with-api/blob/master/lib/session.js

import cookie from "js-cookie";

export const setCookie = (key: string, value: string) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};

export const removeCookie = (key: string) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: string, req?: IncomingMessage) => {
  return !req ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
};

const getCookieFromServer = (key: string, req: IncomingMessage) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    // TODO: add type for c
    .find((c: any) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
