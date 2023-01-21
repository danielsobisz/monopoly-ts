import { CardType, Direction, Place } from "types/board.type";
import { ColorName } from "types/general.type";

import * as S from "./Card.styles";

type CardProps = CardType & {
  direction: Direction;
  place: Place;
};

export function Card(props: CardProps): React.ReactElement {
  const { name, price, color, icon, info, type, id, direction, place } = props;

  return (
    <S.Space type={type} id={id}>
      <S.Container type={type} direction={direction} place={place}>
        {color ? <S.Bar color={color as ColorName} type={type} /> : undefined}

        {icon ? <S.Drawing type={type} className={`fa ${icon}`} /> : undefined}

        <S.Name type={type}>{name}</S.Name>

        {type === "income-tax" ? (
          <S.Diamond className="fa fa-diamond" />
        ) : undefined}

        {price ? <S.Price>Price ${price}</S.Price> : undefined}

        {info ? (
          <S.Instructions
            type={type}
            dangerouslySetInnerHTML={{ __html: info }}
          />
        ) : undefined}
      </S.Container>
    </S.Space>
  );
}
