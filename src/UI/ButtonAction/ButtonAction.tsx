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

const ButtonAction: React.FC<IBasePropsButton> = ({
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

export default ButtonAction;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  width: 100%;
  min-height: 36px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.black};
  background-color: ${COLORS.blue};
  border-radius: 6px;

  &:hover {
    background-color: ${COLORS.blue_5};
  }

  &:focus {
    background-color: ${COLORS.blue_6};
  }

  &:disabled {
    background-color: ${COLORS.blue_7};
    cursor: no-drop;

    ${Text} {
      color: ${COLORS.grey_7};
    }
  }
`;
