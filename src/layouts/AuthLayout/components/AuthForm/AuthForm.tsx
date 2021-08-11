import { useRouter } from "next/router";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import ButtonDefault from "../../../../UI/ButtonDefault";
import { Form, Field, FormRenderProps } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
//TODO: appDispatch
import { unwrapResult } from "@reduxjs/toolkit";
import {
  composeValidators,
  isValidLength,
  isRequired,
  isEmail,
} from "../../../../utils/validators";
import { COLORS, ROUTE_PATH } from "../../../../constants";
import DefaultInput from "../../../../components/DefaultInput";
// import { actions, selectors } from "store";

interface FormValues {
  email: string;
  password: string;
}

const AuthForm = () => {
  const emailFieldValidator = composeValidators(isRequired(), isEmail());
  const passwordFieldValidator = composeValidators(isRequired(), isValidLength);
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

  const router = useRouter();

  // const dispatch = useDispatch();
  const handleSubmit = ({ email, password }: FormValues) => {
    console.log(email, password);
  };
  const onSubmit = async ({ email, password }: FormValues) => {
    console.log(email, password);

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
    <Root>
      <Title>Welcome to Accelerist</Title>
      <Form<FormValues>
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <FormInner onSubmit={handleSubmit}>
            <Field
              validate={emailFieldValidator}
              name="email"
              type="email"
              label="Email"
              component={DefaultInput}
              placeholder="Enter email"
            />

            <Field
              validate={passwordFieldValidator}
              name="password"
              type="password"
              label="Password"
              component={DefaultInput}
              placeholder="Enter password"
              renderHidePass={true}
            />

            <Agreement>
              I agree that by clicking <Span>“Registration”</Span> I accept
              the&nbsp;
              <Span>Terms Of Service</Span> and <Span>Privacy Policy</Span>
            </Agreement>

            <ButtonDefault
              //   onClick={() => onSubmit}
              // FIXME: use handleSubmit ?
              type="submit"
              text="Registration"
            />

            <Text>or continue with</Text>

            <LinkWrap>{/* <ReactSVG /> */}</LinkWrap>
            {/* <Link href="#"></Link> */}
          </FormInner>
        )}
      />
    </Root>

    //         <Field
    //
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
  );
};

const Root = styled.div`
  width: 100%;
  max-width: 454px;
  max-height: 100%;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 36px;
  text-align: center;
`;

const FormInner = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
`;

const Agreement = styled.div`
  font-size: 12px;
  text-align: center;
  color: ${COLORS.grey_text};
  margin: 16px 0 16px;
`;

const Span = styled.span`
  color: ${COLORS.black};
  cursor: pointer;
`;

const Text = styled.div`
  margin: 32px 0 34px;
  font-size: 12px;
  color: ${COLORS.grey_text};
  align-self: center;
`;

const LinkWrap = styled.div`
  width: 24px;
  height: 24px;
  align-self: center;
`;

export default AuthForm;
