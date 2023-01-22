import { Dice } from 'components/game/Dice';

import * as S from './ControlPanel.styles';

export function ControlPanel(): React.ReactElement {
  return (
    <S.Container>
      <S.Label>
        Current Player: <S.Info>Daniel</S.Info>
      </S.Label>

      <S.Label>
        Money: <S.Info>300$</S.Info>
      </S.Label>

      <Dice />
    </S.Container>
  );
}
