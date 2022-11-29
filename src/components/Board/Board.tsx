import { useEffect, useState } from "react";

import { BoardType, CardType } from "types/board.type";

import { Card } from "components/Card";
import { Start } from "components/Start";
import { Jail } from "components/Jail";
import { Parking } from "components/Parking";
import { GoToJail } from "components/GoToJail";
import { Center } from "components/Center";
import { ControlPanel } from "components/ControlPanel";

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
    <div className="table">
      <div className="board">
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
      </div>

      <ControlPanel />
    </div>
  );
}
