const MIN_LENGTH = 6;

const lengthErrorMessage = `Minimum password length is ${MIN_LENGTH} symbols`;

export const isValidLength = (password: string) => {
  const len = password.length;
  if (len < 6) {
    return lengthErrorMessage;
  }

  return undefined;
};
