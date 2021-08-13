import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { LINKEDIN_ICON } from "../../../../assets/svg";
import styled from "styled-components";
import ButtonDefault from "../../../../UI/ButtonDefault";
import { COLORS, ROUTE_PATH } from "../../../../constants";
import DefaultInput from "../../../../components/DefaultInput";
import PasswordInput from "../../../../components/PasswordInput";
import Checkbox from "../../../../UI/Checkbox";
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

interface FormValues {
  email: string;
  password: string;
}
type Props = {
  signup: boolean;
  login: boolean;
};

const AuthForm: React.FC<Props> = ({ signup, login }) => {
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
            <TabsWrap>
              <Link href="/signup" passHref>
                <A $active={signup}>Register</A>
              </Link>
              <Link href="/login" passHref>
                <A $active={login}>Login</A>
              </Link>
            </TabsWrap>

            <FieldWrap>
              <Field
                validate={emailFieldValidator}
                name="email"
                type="email"
                label="Email"
                component={DefaultInput}
                placeholder="Enter email"
              />
            </FieldWrap>

            <FieldWrap>
              <Field
                validate={passwordFieldValidator}
                name="password"
                type="password"
                label="Password"
                component={PasswordInput}
                placeholder="Enter password"
              />
            </FieldWrap>

            {login ? (
              <BottomRow>
                <Field name="remember" label="Remember" component={Checkbox} />
                <Link href="/reset" passHref>
                  <ResetLink>Forgot password?</ResetLink>
                </Link>
              </BottomRow>
            ) : (
              <Agreement>
                I agree that by clicking <Span>“Registration”</Span> I accept
                the&nbsp;
                <Span>Terms Of Service</Span> and <Span>Privacy Policy</Span>
              </Agreement>
            )}

            <ButtonDefault
              type="submit"
              text={login ? "Login" : "Registration"}
            />

            <Text>or continue with</Text>

            <LinkWrap>
              <Image src={LINKEDIN_ICON} alt="LinkedIn icon" />
            </LinkWrap>
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

const TabsWrap = styled.div`
  display: flex;
  text-align: center;
  background: ${COLORS.grey_2};
  border-radius: 6px;
  padding: 3px;
  margin-bottom: 20px;
`;

const FieldWrap = styled.div`
  margin-bottom: 24px;
`;

const A = styled.a<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? COLORS.blue_2 : COLORS.grey_2};
  border-radius: 6px;
  text-align: center;
  flex: 1 1 0%;
  font-size: 12px;
  padding: 9px 0px;
`;

const Agreement = styled.div`
  font-size: 12px;
  text-align: center;
  color: ${COLORS.grey_3};
  margin: 16px 0 16px;
  padding: 0 10px;

  &:nth-child(1) {
    font-weight: 900;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const ResetLink = styled.a`
  font-size: 12px;
  color: ${COLORS.grey_3};
`;

const Span = styled.span`
  color: ${COLORS.black};
  cursor: pointer;
`;

const Text = styled.div`
  margin: 32px 0 24px;
  font-size: 12px;
  color: ${COLORS.grey_3};
  align-self: center;
`;

const LinkWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${COLORS.grey};
  align-self: center;
`;

export default AuthForm;
