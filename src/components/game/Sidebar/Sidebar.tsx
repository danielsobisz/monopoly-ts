import { ControlPanel } from 'components/game/ControlPanel';
import { Dice } from 'components/game/Dice';

import * as S from './Sidebar.styles';

export function Sidebar(): React.ReactElement {
  return (
    <S.Container>
      <ControlPanel />

      <Dice />
    </S.Container>
  );
}
