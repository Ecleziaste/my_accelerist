import styled from "styled-components";
import { screenMd } from "../../constants";
// TODO: прокинуть пропсами в стулед

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Root>
      <Background />
      <FormContainer>{children}</FormContainer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url("../../assets/images/home.jpg");
  background-size: cover;
  position: absolute;
  z-index: 1;

  @media (min-width: 1023) {
    position: relative;
    width: 44%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 16px;
  background: transparent;
  position: relative;
  z-index: 2;

  border: 1px solid tomato;

  @media (min-width: 1023) {
    width: 66%;
  }
`;

export default AuthLayout;
