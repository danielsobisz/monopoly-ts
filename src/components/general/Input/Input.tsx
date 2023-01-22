import { RegisterType } from "types/general.type";

import * as S from "./Input.styles";

type InputProps = {
  register: RegisterType;
  name: string;
  children?: string;
  className?: string;
};

export function Input(props: InputProps): React.ReactElement {
  const { register, name, children = "", className = "" } = props;

  return (
    <S.Container className={className}>
      {children ? <S.Label>{children}</S.Label> : undefined}

      <S.StyledInput {...register(name)} />
    </S.Container>
  );
}