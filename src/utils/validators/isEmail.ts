import { isEmail as validateEmail } from "class-validator";

export const isEmail =
  (errorMessage = "Incorrect email format") =>
  (value: string) => {
    if (!value) {
      return errorMessage;
    }

    return validateEmail(value) ? undefined : errorMessage;
  };
