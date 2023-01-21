import * as S from "./Jail.styles";

export function Jail(): React.ReactElement {
  return (
    <S.Corner>
      <S.Just>Just</S.Just>

      <S.Drawing>
        <S.Container>
          <S.Name>In</S.Name>

          <S.Window>
            <S.Bar />

            <S.Bar />

            <S.Bar />

            <S.Person className="fa fa-frown-o"></S.Person>
          </S.Window>

          <S.Name>Jail</S.Name>
        </S.Container>
      </S.Drawing>

      <S.Visiting>Visiting</S.Visiting>
    </S.Corner>
  );
}
