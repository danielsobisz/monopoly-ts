import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setPosition } from 'redux/slices/player';

import { Pawn } from 'components/game/Pawn';

type DiceProps = {};

export function Dice(props: DiceProps): React.ReactElement {
  const dispatch = useAppDispatch();

  // const {} = props;

  const position = useAppSelector((state) => state.player.position);

  const [portalElement, setPortalElement] = useState<React.ReactElement | null>(null);

  const roll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    dispatch(setPosition(position + 1));

    const card = document.getElementById(`${position + 1}`);

    // console.log(position + randomNumber.toString());

    if (card) {
      const el = ReactDOM.createPortal(<Pawn />, card);

      setPortalElement(el);
    }

    return randomNumber;
  };

  return (
    <>
      <button type="button" onClick={() => roll()}>
        Roll the Dice!
      </button>

      {portalElement}
    </>
  );
}
