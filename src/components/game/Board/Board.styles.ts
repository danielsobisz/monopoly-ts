import styled from "styled-components";
import { pickColor } from "themes/helpers/pickColor";

const Table = styled.div`
  display: flex;

  margin: 5rem;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: 12.5rem repeat(9, 8rem) 12.5rem;
  grid-template-rows: 12.5rem repeat(9, 8rem) 12.5rem;
  grid-gap: 0.2rem;

  width: 99.4rem;
  height: 99.4rem;
  margin: 0 auto 5rem 0.5rem;

  background: ${pickColor("black")};
  border: 0.2rem solid ${pickColor("black")};
`;

export { Board, Table };
