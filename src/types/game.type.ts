export type Property = {
  name: string;
  group: string;
  price: string;
  occupiedBy: string;
};

export type PlayerType = {
  name: string;
  pawn: string;
  oldPosition: number;
  newPosition: number;
  money: number;
  properties?: Property[];
  index: number;
};
