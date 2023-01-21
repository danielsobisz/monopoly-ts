import styled from "styled-components";

import { pickColor } from "themes/helpers/pickColor";

const Corner = styled.div`
  position: relative;

  grid-column: 11;
  grid-row: 11 / 12;

  background: ${pickColor("board")};

  text-align: center;
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;
  width: 100%;

  transform-origin: center;
  transform: rotate(315deg);
`;

const Instructions = styled.div`
  padding: 0 3rem;
`;

const Go = styled.h2`
  color: ${pickColor("red")};

  font-size: 6rem;
`;

const Arrow = styled.i`
  position: absolute;
  bottom: -1rem;
  left: 0.5rem;

  color: ${pickColor("red")};

  font-size: 4rem;
`;

export { Corner, Container, Instructions, Go, Arrow };
