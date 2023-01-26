import { useAppSelector } from 'redux/hooks';

import { Button } from 'components/general/Button';
import { Tooltip } from 'components/general/Tooltip';

import * as S from './ControlPanel.styles';

export function ControlPanel(): React.ReactElement {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  if (!currentPlayer) {
    return <div />;
  }
  const { name, money, properties } = currentPlayer;

  return (
    <S.Container>
      <S.Info>
        <S.Icon name="FaRegUser" />

        <S.Text>{name}</S.Text>
      </S.Info>

      <S.Info>
        <S.Icon name="FaRegMoneyBillAlt" />

        <S.Text>{money}$</S.Text>
      </S.Info>

      <S.Info>
        <S.Icon name="FaHome" />

        <S.Text>{properties?.length}</S.Text>

        {properties && properties?.length > 0 ? (
          <Tooltip content="Check your properties">
            <Button motive="m0">
              <S.IconHand name="FaRegHandPointRight" />
            </Button>
          </Tooltip>
        ) : undefined}
      </S.Info>
    </S.Container>
  );
}
