export const screenXs = 320;
export const screenSm = 768;
export const screenMd = 1020;
export const screenLg = 1200;
export const screenLgm = 1440;

export const API_URL = "https://accelerist.herokuapp.com/api/";

export const COLORS = {
  black: "#122434",
  blue: "#2BAEE0",
  blue_hover: "#51C2EE",
  blue_focus: "#1DA7DC",
  blue_disabled: "#CEEDF9",
  blue_2: "#CAF0FF",
  blue_3: "#CEEDF9",
  // blue_3 same as disabled
  blue_4: "#D4F3FF",
  grey: "#F8F8F8",
  grey_2: "#F2F2F2",
  grey_3: "#737373",
  grey_4: "#E8E8E8",
  grey_5: "#F4F4F4",
  grey_6: "#BFBFBF",
  grey_text: "#737373",
  red: "#F05658",
  red_2: "#FFFAFA",
  purple: "#681B51",
  white: "#FFF",
};

export const STATUS_UPLOAD_FILE_FIELD = "UPLOAD";

export const getFileType = (url: string) => {
  const images = [".png", ".jpg", ".jpeg", ".gif"];
  const video = [".mp4", ".avi", ".mov"];
  const expansionFile = url.slice(url.lastIndexOf("."), url.length);
  if (images.indexOf(expansionFile) >= 0) {
    return "image";
  }
  if (video.indexOf(expansionFile) >= 0) {
    return "video";
  }
  return "file";
};

export const DEFAULT_AVATAR =
  "https://izumator.storage.yandexcloud.net/22/image/49fd7e30-44d3-11eb-898e-b11009511b85";

export const ROUTE_PATH = {
  signUp: "/signup",
  signIn: "/login",
  passwordReset: "/reset",
  search: "/search",
};
