import styled from "styled-components";
import { pickColor } from "themes/helpers/pickColor";

const Corner = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 11 / 12;
  grid-template-columns: repeat(10, 1.25rem);
  grid-template-rows: repeat(10, 1.25rem);
  justify-content: center;
  align-items: center;

  background: ${pickColor("board")};

  text-align: center;
`;

const Just = styled.p`
  grid-column: 3;
  grid-row: 4;

  padding-top: 0.5rem;

  transform: rotate(90deg);
`;

const Drawing = styled.div`
  grid-column: 4 / 11;
  grid-row: 1 / 8;

  width: 8.75rem;
  height: 8.75rem;

  background: ${pickColor("orange")};
  border-bottom: 0.2rem solid ${pickColor("black")};
  border-left: 0.2rem solid ${pickColor("black")};
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  width: 100%;

  transform-origin: center;
  transform: rotate(45deg);
`;

const Name = styled.p`
  font-size: 1.4rem;
`;

const Visiting = styled.div`
  grid-column: 6;
  grid-row: 8;

  padding-top: 0.5rem;
`;

const Window = styled.div`
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;

  width: 5.5rem;
  height: 5.5rem;

  background: ${pickColor("board")};
  border: 0.2rem solid ${pickColor("black")};
`;

const Person = styled.i`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-size: 4rem;
`;

const Bar = styled.div`
  height: 5.5rem;
  width: 0.2rem;

  background: ${pickColor("black")};
`;

export {
  Corner,
  Just,
  Drawing,
  Container,
  Name,
  Visiting,
  Window,
  Person,
  Bar,
};
