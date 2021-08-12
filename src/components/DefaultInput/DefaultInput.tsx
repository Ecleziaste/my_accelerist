import React, { useState } from "react";
import Image from "next/image";
import { FieldRenderProps } from "react-final-form";
import { COLORS } from "../../constants";
import { EyeClosedIcon, EyeOpenedIcon } from "../../assets/svg";

import styled from "styled-components";

type Props = {
  placeholder: string;
  input: any;
  value: string;
  label?: string;
  disabled?: boolean;
  id?: string;
  renderHidePass?: boolean;
};

const DefaultInput: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  input,
  meta,
  value,
  label,
  disabled,
  id,
  renderHidePass = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Root>
      {label && <Label htmlFor={id}>{label}</Label>}

      <InputWrapper>
        <Input
          {...input}
          inputType={isPasswordVisible ? "text" : "password"}
          autoComplete="off"
          disabled={disabled}
          id={id}
          value={value || undefined}
          placeholder={placeholder}
          secureTextEntry={isPasswordVisible}
        />
        {renderHidePass && (
          <Button
            onClick={() => setIsPasswordVisible((prevValue) => !prevValue)}
            type="button"
          >
            <Image
              src={isPasswordVisible ? EyeOpenedIcon : EyeClosedIcon}
              alt="eye icon"
            />
          </Button>
        )}
      </InputWrapper>

      {(meta.error || meta.submitError) && meta.touched && (
        <ValidationText>{meta.error || meta.submitError}</ValidationText>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
  color: ${COLORS.grey_text};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  min-height: 46px;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${COLORS.white};
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: ${COLORS.black};
  border: 1px solid ${COLORS.grey_4};
  caret-color: ${COLORS.blue};

  &:focus {
    background-color: ${COLORS.white};
    border-color: ${COLORS.blue};
  }

  &:disabled {
    background-color: ${COLORS.grey};
    border: none;

    &::placeholder {
      color: ${COLORS.grey_6};
    }
  }

  &:invalid {
    border-color: ${COLORS.red};
    background-color: ${COLORS.red_2};
  }
`;

const Button = styled.button`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 8px 12px;
  background-color: transparent;
`;

// const SVG = styled(ReactSVG)`
//   width: 24px;
//   height: 24px;
// `;

const ValidationText = styled.div`
  display: flex;
  color: ${COLORS.red};
  font-size: 12px;
  margin-bottom: 2px;
`;

export default DefaultInput;
