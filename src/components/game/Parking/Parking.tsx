import * as S from './Parking.styles';

export function Parking(): React.ReactElement {
  return (
    <S.Parking id="21">
      <S.Container>
        <S.Name>Free</S.Name>

        <S.Drawing className="fa fa-car" />

        <S.Name>Parking</S.Name>
      </S.Container>
    </S.Parking>
  );
}
