export const screenXs = 320;
export const screenSm = 768;
export const screenMd = 1020;
export const screenLg = 1200;
export const screenLgm = 1440;

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
  signUn: "/signup",
  signIn: "/login",
  passwordReset: "/auth/reset",
  search: "/search",
};
