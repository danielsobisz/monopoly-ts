import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Player } from 'types/game.type';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setPlayers } from 'redux/slices/game';

import { Board } from 'components/game/Board';

import * as S from './Game.styles';

export function GamePage(): React.ReactElement {
  const navigate = useNavigate();
  const disptach = useAppDispatch();
  const { players } = useAppSelector((state) => state.game);

  useEffect(() => {
    // mock
    const mock: Player[] = [
      {
        name: 'test',
        pawn: 'shoe',
        position: 1,
        money: 1500,
      },
      {
        name: 'test2',
        pawn: 'shoe',
        position: 1,
        money: 1500,
      },
    ];
    disptach(setPlayers(mock));
  }, []);

  // useEffect(() => {
  //   if (players.length === 0) {
  //     navigate('/config');
  //   }
  // });

  return (
    <S.Container>
      <Board />
    </S.Container>
  );
}
