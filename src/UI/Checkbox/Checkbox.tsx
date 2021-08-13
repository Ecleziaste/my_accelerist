import { useState } from "react";
import { FieldRenderProps } from "react-final-form";
import { IDefaultInputProps } from "../../types";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { v4 } from "uuid";
import { CHECK_ICON } from "../../assets/svg";
import Image from "next/image";

const Checkbox: React.FC<
  FieldRenderProps<string, HTMLElement> & IDefaultInputProps
> = ({ label, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
  const id = v4();

  return (
    <Root>
      <Label htmlFor={id}>
        <CheckboxContainer>
          <HiddenCheckbox
            onChange={(e) => setIsChecked(e.target.checked)}
            {...props}
            id={id}
            checked={isChecked}
          />
          <StyledCheckbox $checked={isChecked}>
            <Icon src={CHECK_ICON} alt="check icon" />
          </StyledCheckbox>
        </CheckboxContainer>
        <Span>{label}</Span>
      </Label>
    </Root>
  );
};

export default Checkbox;

const Root = styled.div``;

const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${COLORS.black};
  cursor: pointer;
  font-size: 12px;
`;

const CheckboxContainer = styled.div`
  display: flex;
`;

const Span = styled.span`
  margin-left: 10px;
`;

const Icon = styled(Image)``;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ $checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 0;
  border-radius: 3px;
  border: 1px solid ${COLORS.grey_6};
  background: ${(props) => (props.$checked ? COLORS.blue_2 : COLORS.white)};

  ${Icon} {
    visibility: ${(props) => (props.$checked ? "visible" : "hidden")};
  }
`;
