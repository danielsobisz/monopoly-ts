import styled from "styled-components";

import { pickColor } from "themes/helpers/pickColor";

const Center = styled.div`
  display: grid;
  grid-column: 2 / 11;
  grid-row: 2 / 11;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  justify-items: center;
  align-items: center;

  background: ${pickColor("board")};
`;

const Title = styled.h2`
  grid-column: 1 / 9;
  grid-row: 4;

  font-size: 9rem;
  font-weight: 400;
  letter-spacing: 1.2rem;
`;

const CommunityChestDeck = styled.div`
  grid-column: 2 / 4;
  grid-row: 2 / 4;

  margin-bottom: 6rem;
  margin-right: 6rem;

  transform: rotate(135deg);
`;

const ChanceDeck = styled.div`
  grid-column: 5 / 7;
  grid-row: 5 / 7;

  margin-top: 6rem;
  margin-left: 6rem;

  transform: rotate(315deg);
`;

const Label = styled.h2`
  padding-bottom: 1rem;

  text-align: center;
  font-weight: 500;
  letter-spacing: 0.3rem;
`;

const Deck = styled.div`
  width: 16rem;
  height: 12rem;

  border: 0.2rem dashed ${pickColor("black")};
`;

export { Center, Title, CommunityChestDeck, Label, Deck, ChanceDeck };
