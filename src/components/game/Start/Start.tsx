import * as S from './Start.styles';

export function Start(): React.ReactElement {
  return (
    <S.Corner id="1">
      <S.Container>
        <S.Instructions>Collect $200.00 salary as you pass</S.Instructions>

        <S.Go>go</S.Go>
      </S.Container>

      <S.Arrow className="arrow fa fa-long-arrow-left" />
    </S.Corner>
  );
}
