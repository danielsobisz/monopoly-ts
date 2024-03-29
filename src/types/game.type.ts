export type Asset = {
  name: string;
  color: string;
  price: string;
  occupiedBy: string;
  level: number;
};

export type PlayerType = {
  name: string;
  pawn: string;
  oldPosition: number;
  newPosition: number;
  money: number;
  assets?: Asset[];
  index: number;
};
