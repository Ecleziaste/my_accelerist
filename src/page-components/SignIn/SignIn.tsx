import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Form, Field, FormRenderProps } from "react-final-form";
// import { Button, Logo } from "UI";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
// import { PasswordTextField, TextField } from "components";
import AuthLayout from "../../layouts/AuthLayout";
// import { actions, selectors } from "store";

import { composeValidators, isRequired, isEmail } from "../../utils/validators";

import formStyles from "../form.module.scss";
import styles from "./sign-in.module.scss";
import { ROUTE_PATH } from "../../constants";

interface FormValues {
  email: string;
  password: string;
}

const AuthForm = ({ handleSubmit, form }: FormRenderProps<FormValues>) => {
  //   const router = useRouter();
  // const { selectSignInLoadingStatus } = selectors.auth;
  // const signInLoadingStatus = useSelector(selectSignInLoadingStatus);
  //   useEffect(() => {
  //     const initialEmail = document.querySelector<HTMLInputElement>(
  //       `.${styles.emailField} input`
  //     )?.value;
  //     const initialPassword = document.querySelector<HTMLInputElement>(
  //       `.${styles.passwordField} input`
  //     )?.value;
  //     form.change("email", initialEmail || "");
  //     form.change("password", initialPassword);
  //   }, []);
  return (
    <> </>
    //     <form onSubmit={handleSubmit} className={formStyles.form}>
    //       <div className={formStyles.logo}>
    //         <Logo />
    //       </div>
    //       <div className={styles.emailField}>
    //         <Field
    //           name="email"
    //           label="Email"
    //           placeholder="Введите email"
    //           component={TextField}
    //           validate={emailFieldValidator}
    //         />
    //       </div>
    //       <div className={styles.passwordField}>
    //         <Field
    //           autoComplete="none"
    //           name="password"
    //           label="Пароль"
    //           placeholder="Введите пароль"
    //           component={PasswordTextField}
    //           validate={passwordFieldValidator}
    //           labelChildren={
    //             <button
    //               type="button"
    //               className={styles.forgotPasswordButton}
    //               onClick={() => {
    //                 router.push(ROUTE_PATH.passwordReset);
    //               }}
    //             >
    //               Забыли пароль?
    //             </button>
    //           }
    //         />
    //       </div>
    //       <div className={formStyles.button}>
    //         <Button text="Войти" isLoading={signInLoadingStatus === "pending"} />
    //       </div>
    //     </form>
  );
};

const emailFieldValidator = composeValidators(isRequired(), isEmail());
const passwordFieldValidator = isRequired();

const SignIn: NextPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const onSubmit = async ({ email, password }: FormValues) => {
    // try {
    //   const { signIn } = actions.auth;
    //   const actionResult = await dispatch(signIn({ email, password }));
    //   // @ts-ignore
    //   unwrapResult(actionResult);
    //   router.push("/");
    // } catch (error) {
    //   const { showNotification } = actions.app;
    //   dispatch(showNotification({ message: error.message, type: "error" }));
    // }
  };

  return (
    <AuthLayout>
      <Form<FormValues> onSubmit={onSubmit} component={AuthForm} />
    </AuthLayout>
  );
};

export default SignIn;
