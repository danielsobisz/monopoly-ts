import * as S from "./Center.styles";

type CenterProps = {};

export function Center(props: CenterProps): React.ReactElement {
  // const {} = props;

  return (
    <S.Center>
      <S.CommunityChestDeck>
        <S.Label>Community Chest</S.Label>

        <S.Deck />
      </S.CommunityChestDeck>

      <S.Title>MONOPOLY</S.Title>

      <S.ChanceDeck>
        <S.Label>Chance</S.Label>

        <S.Deck />
      </S.ChanceDeck>
    </S.Center>
  );
}
