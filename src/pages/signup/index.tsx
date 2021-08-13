import { NextPage } from "next";
import AuthLayout from "../../layouts/AuthLayout";
import AuthForm from "../../layouts/AuthLayout/components/AuthForm";

const SignUp: NextPage = () => {
  return (
    <AuthLayout>
      <AuthForm signup={true} login={false} />
    </AuthLayout>
  );
};

export default SignUp;
