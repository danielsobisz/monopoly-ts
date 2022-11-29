import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Pawn } from "components/Pawn";

type DiceProps = {};

export function Dice(props: DiceProps): React.ReactElement {
  const {} = props;

  const [portalElement, setPortalElement] = useState<React.ReactElement | null>(
    null
  );

  const roll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const card = document.getElementById(randomNumber.toString());

    if (card) {
      const el = ReactDOM.createPortal(<Pawn />, card);

      setPortalElement(el);
    }

    return randomNumber;
  };

  return (
    <>
      <button onClick={() => roll()}>Roll the Dice!</button>

      {portalElement}
    </>
  );
}
