import styled from "styled-components";
import Image from "next/image";
import AuthHeader from "./AuthHeader";
import { screenMd } from "../../constants";
// import HOME_SRC from "../../../public/home.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const imgUrl = require("../../../public/home.png").default;

  return (
    <Root>
      <AuthHeader />
      <Background $imgUrl={imgUrl}>
        {/* <BackgroundImage src="/public/home.png" layout="fill" /> */}
        <FormContainer>{children}</FormContainer>
      </Background>
    </Root>
  );
};

// const Content = styled.div`
//   background-image: url(${(props) => props.img});
// `;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div<{ $imgUrl: any }>`
  width: 100%;
  display: flex;
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
  color: aliceblue;
  /* z-index: -1; */
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 454px;
  background: #fff;
  border-radius: 6px;
  padding: 40px;
  border: 2px solid tomato;

  @media (min-width: 1023) {
    width: 66%;
  }
`;

export default AuthLayout;
