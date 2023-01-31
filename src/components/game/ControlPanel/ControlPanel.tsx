import { useAppSelector } from 'redux/hooks';

import { Headline } from 'components/general/Headline';

import * as S from './ControlPanel.styles';

export function ControlPanel(): React.ReactElement {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  if (!currentPlayer) {
    return <div />;
  }
  const { name, money, assets } = currentPlayer;

  return (
    <S.Container>
      <S.Name>
        <S.Text
          scale="lg"
          color="whiteOff"
          textTransform="uppercase"
          textAlign="center"
        >
          {name}
        </S.Text>
      </S.Name>

      <S.Properties>
        <S.Info>
          <Headline color="whiteOff" scale="s">
            Money
          </Headline>

          <Headline color="whiteOff" scale="lg">
            {money} $
          </Headline>
        </S.Info>

        <S.Info>
          <Headline color="whiteOff" scale="s">
            Assets
          </Headline>

          <Headline color="whiteOff" scale="lg">
            {assets?.length}
          </Headline>
        </S.Info>
      </S.Properties>
    </S.Container>
  );
}
