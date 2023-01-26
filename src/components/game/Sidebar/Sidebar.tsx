import { toast } from 'react-hot-toast';

import { Player } from 'types/game.type';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setCurrentPlayer, updatePlayerOldPostion } from 'redux/slices/game';

import { ControlPanel } from 'components/game/ControlPanel';
import { Dice } from 'components/game/Dice';
import { Button } from 'components/general/Button';

import * as S from './Sidebar.styles';

export function Sidebar(): React.ReactElement {
  const disptach = useAppDispatch();

  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const players = useAppSelector((state) => state.game.players);

  const endTurn = () => {
    if (currentPlayer?.newPosition === currentPlayer?.oldPosition) {
      toast.error('Player has to make a move');
      return;
    }
    const findPlayerIndex = (player: Player) => player.name === currentPlayer?.name;
    const index = players.findIndex(findPlayerIndex);

    disptach(updatePlayerOldPostion(currentPlayer?.name));

    if (index + 1 === players.length) {
      disptach(setCurrentPlayer(players[0].name));
    }

    disptach(setCurrentPlayer(players[index + 1].name));
  };

  return (
    <S.Container>
      <ControlPanel />

      <Dice />

      <Button motive="white" onClick={() => endTurn()}>
        End turn
      </Button>
    </S.Container>
  );
}
