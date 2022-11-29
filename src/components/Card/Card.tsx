import { CardType } from "types/board.type";

import * as S from "./Card.styles";

type CardProps = CardType;

export function Card(props: CardProps): React.ReactElement {
  const { name, price, color, icon, info, type, id } = props;

  console.log(id);

  // diamond zamiast icony

  return (
    <S.Space className={`space ${type}`} id={id}>
      <div className="container">
        {color ? <div className={`color-bar ${color}`} /> : undefined}

        {icon ? <i className={`drawing fa ${icon}`} /> : undefined}

        <div className="name three-line-name">{name}</div>

        <div className="price">Price ${price}</div>

        {info ? <div className="instructions">{info}</div> : undefined}
      </div>
    </S.Space>
  );
}
