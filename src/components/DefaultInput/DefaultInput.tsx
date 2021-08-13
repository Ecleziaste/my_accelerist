import { FieldRenderProps } from "react-final-form";
import { IDefaultInputProps } from "../../types";
import { COLORS } from "../../constants";

import styled from "styled-components";

const DefaultInput: React.FC<
  FieldRenderProps<string, HTMLElement> & IDefaultInputProps
> = ({
  placeholder,
  input,
  meta,
  value,
  label,
  disabled,
  renderHidePass,
  id,
  ...props
}) => {
  return (
    <Root>
      {label && <Label htmlFor={id}>{label}</Label>}

      <InputWrapper>
        <Input
          $isError={meta.error && meta.touched}
          {...input}
          {...props}
          autocomplete="off"
          disabled={disabled}
          id={id}
          value={value}
          placeholder={placeholder}
        />

        {renderHidePass?.()}
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
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
  color: ${COLORS.grey_3};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input<{ $isError: any }>`
  display: flex;
  flex: 1;
  max-width: 100%;
  min-height: 46px;
  background: ${(props) => (props.$isError ? COLORS.red_2 : COLORS.white)};
  border: 1px solid ${(props) => (props.$isError ? COLORS.red : COLORS.grey_4)};
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: ${COLORS.black};
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
`;

const ValidationText = styled.div`
  display: flex;
  color: ${COLORS.red};
  font-size: 12px;
  margin-bottom: 2px;
`;

export default DefaultInput;
