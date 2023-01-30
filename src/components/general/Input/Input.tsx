import { ChangeEventHandler } from 'react';

import { RegisterType } from 'types/general.type';

import * as S from './Input.styles';

type InputProps = {
  register: RegisterType;
  name: string;
  children?: string;
  className?: string;
  onBlur: ChangeEventHandler<HTMLInputElement>;
};

export function Input(props: InputProps): React.ReactElement {
  const { register, name, onBlur, children = '', className = '' } = props;

  return (
    <S.Container className={className}>
      {children ? <S.Label>{children}</S.Label> : undefined}

      <S.StyledInput {...register(name)} onBlur={onBlur} />
    </S.Container>
  );
}
