import styled from "styled-components";
import { COLORS } from "../../constants";

interface IBasePropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  text: string;
  width?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const ButtonDefault: React.FC<IBasePropsButton> = ({
  text,
  onClick,
  type = "button",
  width,
  disabled = false,
  isLoading,
}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonDefault;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  width: 100%;
  min-height: 46px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  background-color: ${COLORS.blue};
  border-radius: 6px;

  &:hover {
    background-color: ${COLORS.blue_hover};
  }

  &:focus {
    background-color: ${COLORS.blue_focus};
  }

  &:disabled {
    background-color: ${COLORS.blue_disabled};
    color: ${COLORS.blue};

    ${Text} {
      opacity: 0.3;
    }
  }
`;
