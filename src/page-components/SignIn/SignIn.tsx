import { NextPage } from "next";
import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../layouts/AuthLayout/components/AuthForm";

const SignIn: NextPage = () => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
};

export default SignIn;
