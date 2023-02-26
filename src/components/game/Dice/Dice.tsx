import React from 'react';

import { Button } from 'components/general/Button';

import { useDice } from './Dice.hooks';
import * as S from './Dice.styles';

export function Dice(): React.ReactElement {
  const { dice, dieSides, isRolled, portalElements, roll } = useDice();

  return (
    <>
      <S.Dice>
        <S.DieList
          ref={dice}
          className={isRolled ? 'odd-roll' : 'even-roll'}
          data-roll="1"
          id="die-1"
        >
          {dieSides}
        </S.DieList>
      </S.Dice>

      <Button motive="white" onClick={() => roll()}>
        Roll the dice
      </Button>

      {portalElements.map((item) => (
        <React.Fragment key={item.name}>{item.portal}</React.Fragment>
      ))}
    </>
  );
}
