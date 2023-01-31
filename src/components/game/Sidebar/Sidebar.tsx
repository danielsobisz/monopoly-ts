import { useContext } from 'react';
import { toast } from 'react-hot-toast';

import { PlayerType } from 'types/game.type';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setCurrentPlayer, updatePlayerOldPostion } from 'redux/slices/game';

import { GameContext } from 'contexts';

import endTurnAudio from 'assets/sounds/end-turn.mp3';

import { ControlPanel } from 'components/game/ControlPanel';
import { Dice } from 'components/game/Dice';
import { Button } from 'components/general/Button';

import * as S from './Sidebar.styles';

export function Sidebar(): React.ReactElement {
  const disptach = useAppDispatch();

  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const players = useAppSelector((state) => state.game.players);

  const { isAssetsVisibleSet } = useContext(GameContext);

  const endTurn = () => {
    if (currentPlayer?.newPosition === currentPlayer?.oldPosition) {
      toast.error('Player has to make a move');
      return;
    }
    const findPlayerIndex = (player: PlayerType) =>
      player.name === currentPlayer?.name;
    const index = players.findIndex(findPlayerIndex);

    disptach(updatePlayerOldPostion(currentPlayer?.name));

    if (index + 1 === players.length) {
      disptach(setCurrentPlayer(players[0].name));
    }

    disptach(setCurrentPlayer(players[index + 1].name));

    const sound = new Audio(endTurnAudio);
    sound.play();
  };

  return (
    <S.Container>
      <ControlPanel />

      <Dice />

      <Button motive="white" onClick={() => isAssetsVisibleSet(true)}>
        Check your assets
      </Button>

      <Button motive="white" onClick={() => endTurn()}>
        End turn
      </Button>
    </S.Container>
  );
}
