import { KeyboardEvent } from "react";

export function submitAferEnterPressOnSafari(
  { key }: KeyboardEvent<HTMLInputElement>,
  submitForm: () => void
) {
  const isSafari =
    /Safari/.test(window.navigator.userAgent) &&
    /Apple Computer/.test(window.navigator.vendor);

  if (isSafari && key === "Enter") {
    submitForm();
  }
}
