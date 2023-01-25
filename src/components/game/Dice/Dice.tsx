import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setPlayerPostion } from 'redux/slices/game';

import { Pawn } from 'components/game/Pawn';

type DiceProps = {};

export function Dice(props: DiceProps): React.ReactElement {
  const dispatch = useAppDispatch();

  // const {} = props;

  const { players } = useAppSelector((state) => state.game);

  const [portalElement, setPortalElement] = useState<React.ReactElement | null>(null);

  const roll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const player = players.find((item) => item.name === 'test');

    let addedPosition = Number(player?.position) + randomNumber;

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
      const el = ReactDOM.createPortal(<Pawn />, card);

      setPortalElement(el);
    }

    return randomNumber;
  };

  useEffect(() => {
    const start = document.getElementById('1');

    if (start) {
      const el = ReactDOM.createPortal(<Pawn />, document.getElementById('1')!);
      setPortalElement(el);
    }
  }, []);

  return (
    <>
      <button type="button" onClick={() => roll()}>
        Roll the Dice!
      </button>

      {portalElement}
    </>
  );
}
