import { Link } from "react-router-dom";

import { StyledButtonProps, StyledLabelProps } from "./Button.styles";
import * as S from "./Button.styles";

type ButtonItem = {
  onClick?: () => void;
  asLink?: boolean;
  to?: string;
  type?: "button" | "submit";
  className?: string;
};

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  StyledButtonProps &
  StyledLabelProps &
  ButtonItem;

export function Button(props: ButtonProps): React.ReactElement {
  const {
    onClick = () => null,
    children,
    motive = "default",
    to = "",
    asLink = false,
    className = "",
    disabled = false,
    scale = "s",
    ref, // eslint-disable-line
    ...rest
  } = props;

  return (
    <S.Button
      disabled={disabled}
      className={`${className || ""} ${disabled ? "disabled" : ""}`}
      to={disabled ? undefined : to}
      as={to && asLink ? Link : "button"}
      onClick={onClick}
      {...rest}
      motive={motive}
    >
      <S.Label scale={scale}>{children}</S.Label>
    </S.Button>
  );
}
