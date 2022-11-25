export type BoardType = {
  data: {
    rowHorizontalBottom: CardType[];
    rowHorizontalTop: CardType[];
    rowVerticalLeft: CardType[];
    rowVerticalRight: CardType[];
  };
};

export type CardType = {
  name: string;
  price: number;
  color?: string;
  icon?: string;
  info?: string;
  type: string;
};
