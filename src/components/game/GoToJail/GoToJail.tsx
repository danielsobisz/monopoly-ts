import * as S from './GoToJail.styles';

export function GoToJail(): React.ReactElement {
  return (
    <S.Corner id="31">
      <S.Container>
        <S.Name>Go To</S.Name>

        <S.Drawing className="fa fa-gavel" />

        <S.Name>Jail</S.Name>
      </S.Container>
    </S.Corner>
  );
}
