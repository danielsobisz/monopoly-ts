import * as S from './Center.styles';

export function Center(): React.ReactElement {
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
