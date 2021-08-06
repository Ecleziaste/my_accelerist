import { STATUS_UPLOAD_FILE_FIELD } from "../../constants";

export const isRequired =
  (errorMessage = "Required") =>
  (value: string) =>
    value ? undefined : errorMessage;

export const isRequiredTextEditor =
  (errorMessage = "Required") =>
  (value: string) =>
    value && value.match(/<.{1,}>.{1,}<\/.{1,}>/) ? undefined : errorMessage;

export const isRequiredArray =
  (errorMessage = "Required") =>
  (value: string[] | undefined) =>
    value && value.length > 0 ? undefined : errorMessage;

export const onlyNum =
  (errorMessage = "Numbers only") =>
  (value: string) =>
    value.match(/^[0-9]{0,}$/g) ? undefined : errorMessage;

export const isUploadFile =
  (errorMessage = "Wait for file upload") =>
  (value: string) =>
    value !== STATUS_UPLOAD_FILE_FIELD ? undefined : errorMessage;

export const isRequiredLength =
  (length: number) => (value: string[] | undefined) =>
    value && value.length <= length
      ? undefined
      : `Choose up to ${length} points`;

export const isStringRequiredLength =
  (length: number) => (value: string | undefined) =>
    value && value.length >= length ? undefined : "Not enough symbols.";
