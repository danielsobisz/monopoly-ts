import { useEffect, useState } from "react";

import { BoardType, CardType } from "types/board.type";

import { Card } from "components/Card";

import * as S from "./Board.styles";

type BoardProps = {};

export function Board(props: BoardProps): React.ReactElement {
  const {} = props;

  const [board, boardSet] = useState<BoardType>();

  useEffect(() => {
    fetch("./board.json")
      .then((res) => res.json())
      .then((res) => boardSet(res));
  }, []);

  return (
    <div className="table">
      <div className="board">
        <div className="center">
          <div className="community-chest-deck">
            <h2 className="label">Community Chest</h2>

            <div className="deck" />
          </div>
          <h2 className="title">MONOPOLY</h2>
          <div className="chance-deck">
            <h2 className="label">Chance</h2>
            <div className="deck"></div>
          </div>
        </div>

        <div className="space corner go">
          <div className="container">
            <div className="instructions">
              Collect $200.00 salary as you pass
            </div>
            <div className="go-word">go</div>
          </div>
          <div className="arrow fa fa-long-arrow-left"></div>
        </div>

        <div className="row horizontal-row bottom-row">
          {board?.data.rowHorizontalBottom?.map((item: CardType) => (
            <Card key={item.name} {...item} />
          ))}
        </div>

        <div className="space corner jail">
          <div className="just">Just</div>
          <div className="drawing">
            <div className="container">
              <div className="name">In</div>
              <div className="window">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <i className="person fa fa-frown-o"></i>
              </div>
              <div className="name">Jail</div>
            </div>
          </div>
          <div className="visiting">Visiting</div>
        </div>

        <div className="row vertical-row left-row">
          {board?.data.rowVerticalLeft?.map((item: CardType) => (
            <Card key={item.name} {...item} />
          ))}
        </div>

        <div className="space corner free-parking">
          <div className="container">
            <div className="name">Free</div>
            <i className="drawing fa fa-car"></i>
            <div className="name">Parking</div>
          </div>
        </div>

        <div className="row horizontal-row top-row">
          {board?.data.rowHorizontalTop?.map((item: CardType) => (
            <Card key={item.name} {...item} />
          ))}
        </div>

        <div className="space corner go-to-jail">
          <div className="container">
            <div className="name">Go To</div>
            <i className="drawing fa fa-gavel"></i>
            <div className="name">Jail</div>
          </div>
        </div>

        <div className="row vertical-row right-row">
          {board?.data.rowVerticalRight?.map((item: CardType) => (
            <Card key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
