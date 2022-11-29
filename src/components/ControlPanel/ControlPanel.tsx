import { Dice } from "components/Dice";

import * as S from "./ControlPanel.styles";

type ControlPanelProps = {};

export function ControlPanel(props: ControlPanelProps): React.ReactElement {
  const {} = props;

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
