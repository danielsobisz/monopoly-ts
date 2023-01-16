import { useEffect, useState } from "react";

import { BoardType, CardType } from "types/board.type";

import { Card } from "components/game/Card";
import { Start } from "components/game/Start";
import { Jail } from "components/game/Jail";
import { Parking } from "components/game/Parking";
import { GoToJail } from "components/game/GoToJail";
import { Center } from "components/game/Center";
import { ControlPanel } from "components/game/ControlPanel";

import * as S from "./Board.styles";

export function Board(): React.ReactElement {
  const [board, boardSet] = useState<BoardType>();

  const renderCards = (data?: CardType[]) =>
    data?.map((item: CardType) => <Card key={item.name} {...item} />);

  useEffect(() => {
    fetch("./board.json")
      .then((res) => res.json())
      .then((res) => boardSet(res));
  }, []);

  return (
    <S.Table>
      <S.Board>
        <Center />

        <Start />

        <div className="row horizontal-row bottom-row">
          {renderCards(board?.data?.rowHorizontalBottom)}
        </div>

        <Jail />

        <div className="row vertical-row left-row">
          {renderCards(board?.data?.rowVerticalLeft)}
        </div>

        <Parking />

        <div className="row horizontal-row top-row">
          {renderCards(board?.data?.rowHorizontalTop)}
        </div>

        <GoToJail />

        <div className="row vertical-row right-row">
          {renderCards(board?.data?.rowVerticalRight)}
        </div>
      </S.Board>

      <ControlPanel />
    </S.Table>
  );
}
