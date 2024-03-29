export type CardType = {
  id: string;
  name: string;
  price: number;
  color?: string;
  icon?: string;
  info?: string;
  type: string;
  occupiedBy?: string;
};

export type BoardType = {
  data: {
    rowHorizontalBottom: CardType[];
    rowHorizontalTop: CardType[];
    rowVerticalLeft: CardType[];
    rowVerticalRight: CardType[];
  };
};

export type Direction = 'vertical' | 'horizontal';
export type Place = 'top' | 'right' | 'bottom' | 'left';
