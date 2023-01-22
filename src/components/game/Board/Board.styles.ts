import styled, { css } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

import { Direction, Place } from 'types/board.type';

export type StyledRowProps = {
  direction: Direction;
  place: Place;
};

const getStylesForDirection = (direction: Direction) => {
  if (direction === 'vertical') {
    return css`
      grid-template-columns: 12.5rem;
      grid-template-rows: repeat(9, 8rem);
    `;
  }

  return css`
    grid-template-columns: repeat(9, 8rem);
    grid-template-rows: 12.5rem;
  `;
};

const getStylesForPlace = (place: Place) => {
  switch (place) {
    case 'top':
      return css`
        grid-column: 2 / 11;
        grid-row: 1;
      `;
    case 'right':
      return css`
        grid-column: 11;
        grid-row: 2 / 11;
      `;
    case 'bottom':
      return css`
        grid-column: 2 / 11;
        grid-row: 11;
      `;
    case 'left':
      return css`
        grid-column: 1;
        grid-row: 2 / 11;
      `;
    default:
      return css``;
  }
};

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

  background: ${pickColor('black')};
  border: 0.2rem solid ${pickColor('black')};
`;

const Row = styled.div<StyledRowProps>`
  display: grid;
  grid-gap: 0.2rem;

  ${({ direction }) => getStylesForDirection(direction)};
  ${({ place }) => getStylesForPlace(place)};
`;

export { Board, Table, Row };
