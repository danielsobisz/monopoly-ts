import { useContext, useEffect } from 'react';

import { PlayerType } from 'types/game.type';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setCurrentPlayer, setPlayers } from 'redux/slices/game';

import { GameContext } from 'contexts';

import { AssetsPanel } from 'components/game/AssetsPanel';
import { Board } from 'components/game/Board';
import { Sidebar } from 'components/game/Sidebar';

import * as S from './Game.styles';

export function GamePage(): React.ReactElement {
  const disptach = useAppDispatch();
  // const navigate = useNavigate();

  const { isAssetsVisible } = useContext(GameContext);

  const { players } = useAppSelector((state) => state.game);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);

  const playersNames = players.map((item) => item.name);

  useEffect(() => {
    if (players.length > 0) return;

    // mock
    const mock: PlayerType[] = [
      {
        index: 1,
        name: 'Daniel',
        pawn: 'shoe',
        oldPosition: 1,
        newPosition: 1,
        money: 1500,
        assets: [
          {
            name: 'baltic avenue',
            price: '50',
            group: 'purple',
            occupiedBy: 'Daniel',
            level: 1,
          },
          {
            name: 'baltic avenue',
            price: '50',
            group: 'purple',
            occupiedBy: 'Daniel',
            level: 1,
          },
          {
            name: 'baltic avenue',
            price: '50',
            group: 'purple',
            occupiedBy: 'Daniel',
            level: 1,
          },
          {
            name: 'baltic avenue',
            price: '50',
            group: 'purple',
            occupiedBy: 'Daniel',
            level: 1,
          },
          {
            name: 'baltic avenue',
            price: '50',
            group: 'purple',
            occupiedBy: 'Daniel',
            level: 1,
          },
        ],
      },
      {
        index: 2,
        name: 'Marysia',
        pawn: 'dog',
        oldPosition: 1,
        newPosition: 1,
        money: 1500,
        assets: [],
      },
    ];
    disptach(setPlayers(mock));
  }, []);

  useEffect(() => {
    if (currentPlayer) return;

    if (playersNames && playersNames.length > 0) {
      disptach(setCurrentPlayer(playersNames[0]));
    }
  }, [players]);

  // useEffect(() => {
  //   if (players.length === 0) {
  //     navigate('/config');
  //   }
  // });

  return (
    <S.Container>
      <Board />

      <Sidebar />

      {isAssetsVisible ? <AssetsPanel /> : undefined}
    </S.Container>
  );
}
