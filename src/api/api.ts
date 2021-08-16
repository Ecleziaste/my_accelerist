// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { http } from "../services/http";
import { IUserResponse } from "../types";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

// export const getLinkUploadFile = (values: {
//   fileKey: string;
//   contentType: string;
// }) => {
//   const url = "/sign-url";
//   return httpClient.post(url, values);
// };

// export const uploadFile = (
//   url: string,
//   values: any,
//   callback?: (...arg: any) => any
// ) => {
//   const file = new Blob([values], { type: values.type });
//   return httpClient.put(url, file, {
//     headers: {
//       "Content-Type": values.type,
//       "Access-Control-Allow-Origin": "*",
//       Accept: "*/*",
//     },
//     onUploadProgress: (progressEvent) => {
//       const percent = Math.round((progressEvent.loaded * 100) / values.size);
//       callback && callback(percent > 100 ? 100 : percent);
//     },
//   });
// };
