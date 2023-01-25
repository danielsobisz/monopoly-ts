import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setPlayerPostion } from 'redux/slices/game';

import { Pawn } from 'components/game/Pawn';

import * as S from './Dice.styles';

const useDice = () => {
  const dispatch = useAppDispatch();

  const dice = useRef<any>();

  const [isRolled, isRolledSet] = useState<boolean>();
  const [portalElement, setPortalElement] = useState<React.ReactElement | null>(null);

  const { players } = useAppSelector((state) => state.game);
  const player = players.find((item) => item.name === 'test');

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

    let addedPosition = Number(player?.position) + randomNumber;

    dice.current.dataset.roll = randomNumber;

    isRolledSet(!isRolled);

    setTimeout(() => {
      if (addedPosition >= 40) {
        const endPosition = 40 - Number(player?.position);
        const leftMoves = randomNumber - endPosition;
        addedPosition = 1 + leftMoves;
      }

      dispatch(
        setPlayerPostion({
          name: 'test',
          position: addedPosition,
        })
      );

      const card = document.getElementById(addedPosition.toString());

      if (card) {
        const el = ReactDOM.createPortal(<Pawn name={player?.pawn!} />, card);

        setPortalElement(el);
      }
    }, 1250);

    return randomNumber;
  };

  useEffect(() => {
    const start = document.getElementById('1');

    if (start) {
      const el = ReactDOM.createPortal(
        <Pawn name={player?.pawn!} />,
        document.getElementById('1')!
      );
      setPortalElement(el);
    }
  }, []);

  return {
    portalElement,
    dieSides,
    roll,
    isRolled,
    dice,
  };
};

export { useDice };
