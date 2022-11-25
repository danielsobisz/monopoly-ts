import { CardType } from "types/board.type";

type CardProps = CardType;

export function Card(props: CardProps): React.ReactElement {
  const { name, price, color, icon, info, type } = props;

  // diamond zamiast icony

  return (
    <div className={`space ${type}`}>
      <div className="container">
        {color ? <div className={`color-bar ${color}`} /> : undefined}

        {icon ? <i className={`drawing fa ${icon}`} /> : undefined}

        <div className="name three-line-name">{name}</div>

        <div className="price">Price ${price}</div>

        {info ? <div className="instructions">{info}</div> : undefined}
      </div>
    </div>
  );
}
