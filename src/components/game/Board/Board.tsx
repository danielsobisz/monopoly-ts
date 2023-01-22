import { useEffect, useState } from 'react';

import { BoardType, CardType, Direction, Place } from 'types/board.type';

import { Card } from 'components/game/Card';
import { Start } from 'components/game/Start';
import { Jail } from 'components/game/Jail';
import { Parking } from 'components/game/Parking';
import { GoToJail } from 'components/game/GoToJail';
import { Center } from 'components/game/Center';
import { ControlPanel } from 'components/game/ControlPanel';

import * as S from './Board.styles';

export function Board(): React.ReactElement {
  const [board, boardSet] = useState<BoardType>();

  const renderCards = (place: Place, direction: Direction, data?: CardType[]) =>
    data?.map((item: CardType) => (
      <Card key={item.name} place={place} direction={direction} {...item} />
    ));

  useEffect(() => {
    fetch('./board.json')
      .then((res) => res.json())
      .then((res) => boardSet(res));
  }, []);

  return (
    <S.Table>
      <S.Board>
        <Center />

        <Start />

        <S.Row direction="horizontal" place="bottom">
          {renderCards('bottom', 'horizontal', board?.data?.rowHorizontalBottom)}
        </S.Row>

        <Jail />

        <S.Row direction="vertical" place="left">
          {renderCards('left', 'vertical', board?.data?.rowVerticalLeft)}
        </S.Row>

        <Parking />

        <S.Row direction="horizontal" place="top">
          {renderCards('top', 'horizontal', board?.data?.rowHorizontalTop)}
        </S.Row>

        <GoToJail />

        <S.Row direction="vertical" place="right">
          {renderCards('right', 'vertical', board?.data?.rowVerticalRight)}
        </S.Row>
      </S.Board>

      <ControlPanel />
    </S.Table>
  );
}
