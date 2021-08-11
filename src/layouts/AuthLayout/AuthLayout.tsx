import styled from "styled-components";
import Image from "next/image";
import AuthHeader from "./components/AuthHeader";
import { COLORS, screenMd } from "../../constants";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <Root>
      <AuthHeader />
      <MainContent>
        <FormContainer>{children}</FormContainer>
        <BackgroundImage src="/homedark3x.png" layout="fill" />
      </MainContent>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 73px;
  min-height: calc(100% - 80px);
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 454px;
  background: ${COLORS.white};
  border-radius: 6px;
  padding: 40px;
  z-index: 1;

  @media (min-width: 1023) {
    width: 66%;
  }
`;

export default AuthLayout;
