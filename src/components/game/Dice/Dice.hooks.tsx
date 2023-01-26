import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setPlayerPostion } from 'redux/slices/game';

import { Pawn } from 'components/game/Pawn';

import * as S from './Dice.styles';

type PlayerPortal = {
  name: string;
  portal: React.ReactElement | null;
};

const useDice = () => {
  const dispatch = useAppDispatch();

  const dice = useRef<any>();

  const [isRolled, isRolledSet] = useState<boolean>();
  const [portalElements, setPortalElements] = useState<PlayerPortal[]>([]);

  const players = useAppSelector((state) => state.game.players);
  const player = useAppSelector((state) => state.game.currentPlayer);

  const generateDieSide = (amount: number) => (
    <S.DieItem data-side={`${amount}`}>
      {Array.from(Array(amount).keys()).map(() => (
        <S.Dot className="dot" />
      ))}
    </S.DieItem>
  );

  const dieSides = Array.from(Array(6).keys()).map((item) => generateDieSide(item + 1));

  const roll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    let addedPosition = Number(player?.oldPosition) + randomNumber;

    dice.current.dataset.roll = randomNumber;

    isRolledSet(!isRolled);

    setTimeout(() => {
      if (addedPosition >= 40) {
        const endPosition = 40 - Number(player?.oldPosition);
        const leftMoves = randomNumber - endPosition;
        addedPosition = 1 + leftMoves;
      }

      dispatch(
        setPlayerPostion({
          name: player?.name,
          position: addedPosition,
        })
      );

      const card = document.getElementById(addedPosition.toString());

      if (card) {
        const el = ReactDOM.createPortal(<Pawn name={player?.pawn!} />, card);

        setPortalElements((state) => {
          const stateInstance = state.map((item) =>
            item.name === player?.name ? { name: player.name, portal: el } : item
          ); // eslint-disable-line

          return stateInstance;
        });
      }
    }, 1250);

    return randomNumber;
  };

  useEffect(() => {
    if (portalElements.length > 0) return;

    const start = document.getElementById('1');

    if (start && players) {
      players.forEach((item) => {
        const el = ReactDOM.createPortal(
          <Pawn name={item.pawn} />,
          document.getElementById('1')!
        );
        setPortalElements((state) => [...state, { name: item.name, portal: el }]);
      });
    }
  }, [players]);

  return {
    portalElements,
    dieSides,
    roll,
    isRolled,
    dice,
  };
};

export { useDice };
