import React, { useState } from "react";
import Image from "next/image";
import { FieldRenderProps } from "react-final-form";
import { EYE_CLOSED_ICON, EYE_OPENED_ICON } from "../../assets/svg";
import { IDefaultInputProps } from "../../types";
import DefaultInput from "../DefaultInput";
import styled from "styled-components";

const PasswordInput: React.FC<
  FieldRenderProps<string, HTMLElement> & IDefaultInputProps
> = ({ renderHidePass = true, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Root>
      <DefaultInput
        {...props}
        type={isPasswordVisible ? "text" : "password"}
        secure={isPasswordVisible}
        renderHidePass={() => {
          return (
            <Button
              onClick={() => setIsPasswordVisible((prevValue) => !prevValue)}
              type="button"
            >
              <Image
                src={isPasswordVisible ? EYE_OPENED_ICON : EYE_CLOSED_ICON}
                alt="eye icon"
              />
            </Button>
          );
        }}
      ></DefaultInput>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Button = styled.button`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 8px 12px;
  background-color: transparent;
  position: absolute;
  right: 0;
`;

export default PasswordInput;
