import styled from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

const Parking = styled.div`
  grid-column: 1;
  grid-row: 1 / 2;

  background: ${pickColor('board')};

  text-align: center;
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 100%;

  transform-origin: center;
  transform: rotate(135deg);
`;

const Name = styled.p`
  font-size: 1.6rem;
`;

const Drawing = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  color: ${pickColor('red')};

  font-size: 6rem;
`;

export { Parking, Container, Name, Drawing };
