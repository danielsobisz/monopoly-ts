import { Button } from 'components/general/Button';
import { Tooltip } from 'components/general/Tooltip';

import * as S from './ControlPanel.styles';

export function ControlPanel(): React.ReactElement {
  return (
    <S.Container>
      <S.Info>
        <S.Icon name="FaRegUser" />

        <S.Text>Daniel</S.Text>
      </S.Info>

      <S.Info>
        <S.Icon name="FaRegMoneyBillAlt" />

        <S.Text>4800$</S.Text>
      </S.Info>

      <S.Info>
        <S.Icon name="FaHome" />

        <S.Text>11</S.Text>

        <Tooltip content="Check your properties">
          <Button motive="m0">
            <S.IconHand name="FaRegHandPointRight" />
          </Button>
        </Tooltip>
      </S.Info>
    </S.Container>
  );
}
