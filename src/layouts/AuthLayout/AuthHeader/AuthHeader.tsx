import styled from "styled-components";
import { COLORS } from "../../../constants";
import Image from "next/image";
import LOGO_ICON from "../../../assets/svg/logoAuth.svg";

const AuthHeader = () => {
  return (
    <Root>
      <Image src={LOGO_ICON} alt="accelerist logo" />
      <Text>accelerist</Text>
    </Root>
  );
};

export default AuthHeader;

const Root = styled.header`
  display: flex;
  background-color: ${COLORS.black};
  width: 100%;
  min-height: 80px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  @font-face {
    font-family: "Gotham Rounded Medium";
    src: url("../../../assets/fonts/Gotham/Gotham Rounded Medium.woff");
  }

  max-width: 149px;
  min-height: 26px;

  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #fff;
`;
