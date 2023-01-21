import styled from "styled-components";
import { pickColor } from "themes/helpers/pickColor";

const Corner = styled.div`
  grid-column: 11;
  grid-row: 1 / 1;

  background: ${pickColor("board")};

  text-align: center;
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 100%;

  transform: rotate(225deg);
  transform-origin: center;
`;

const Name = styled.div`
  padding: 0;

  font-size: 1.6rem;
`;

const Drawing = styled.i`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  color: ${pickColor("brown")};

  font-size: 6rem;
`;

export { Corner, Container, Name, Drawing };
