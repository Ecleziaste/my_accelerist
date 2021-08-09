// import { getLinkUploadFile, uploadFile } from "../api";
import { v1 } from "uuid";

export const toBase64 = async (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const base64ToFile = async (
  base: string,
  fileName: string
): Promise<File> => {
  const mime = base.match(/:(.*?);/);
  const type = (mime && mime[0].slice(1, mime[0].length - 1)) || "*";

  return fetch(base)
    .then((res) => res.blob())
    .then((blob) => new File([blob], fileName, { type }));
};

export const createAutoCorrectedDateRangePipe = (
  format = "dd.mm.yyyy",
  yearRange = { minYear: 1920, maxYear: 2021 }
) => {
  //@ts-ignore
  const datePipe = createAutoCorrectedDatePipe(format, yearRange);

  return (conformedValue: any) => {
    return datePipe(conformedValue);
  };
};

// export const uploadImageToCloud = async (base: string): Promise<string> => {
//   const newAvatar = await base64ToFile(base, v1());

//   const { data: uploadLink } = await getLinkUploadFile({
//     fileKey: newAvatar.name,
//     contentType: newAvatar.type,
//   });

//   await uploadFile(uploadLink, newAvatar);

//   const parsedAvatarLink = uploadLink.match(/.{0,}[?]/g)[0].replace("?", "");
//   return parsedAvatarLink;
// };
