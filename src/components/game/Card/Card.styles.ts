import styled, { css } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

import { Direction, Place } from 'types/board.type';
import { ColorName } from 'types/general.type';

type StyledContainerProps = {
  place: Place;
  direction: Direction;
  type: string;
};

type StyledSpaceProps = {
  type: string;
};

type StyledBarProps = {
  type: string;
  color: ColorName;
};

const getStylesForPlace = (place: Place) => {
  switch (place) {
    case 'top':
      return css`
        transform: rotate(180deg);
      `;
    case 'right':
      return css`
        transform: translate(-50%, -50%) rotate(270deg);
      `;
    case 'left':
      return css`
        transform: translate(-50%, -50%) rotate(90deg);
      `;
    default:
      return css``;
  }
};

const getStylesForSpace = (type: string) => {
  switch (type) {
    case 'name':
    case 'instructions':
      return css`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      `;
    case 'price':
      return css`
        padding-bottom: 0.5rem;

        font-size: 0.7rem;
        font-weight: 400;
      `;
    default:
      return css``;
  }
};

const getStylesForName = (type: string) => {
  switch (type) {
    case 'property':
      return css`
        padding-bottom: 5rem;
      `;
    case 'utility':
    case 'railroad':
      return css`
        padding-top: 1rem;
      `;
    case 'fee':
      return css`
        padding-top: 1rem;

        font-size: 1.4rem;
      `;
    case 'income-tax':
      return css`
        padding-bottom: 0.5rem;
      `;
    default:
      return css``;
  }
};

const getStylesForBar = (type: string) => {
  switch (type) {
    case 'property':
      return css`
        height: 2.5rem;

        border-bottom: 0.2rem solid ${pickColor('black')};
      `;
    default:
      return css``;
  }
};

const getStylesForDrawing = (type: string) => {
  switch (type) {
    case 'railroad':
      return css`
        margin: 1rem;

        color: ${pickColor('black')};

        font-size: 5rem;
      `;
    case 'utility':
      return css`
        font-size: 7rem;
      `;
    case 'electric-company':
      return css`
        margin: 1rem;

        color: ${pickColor('yellow')};

        font-size: 5rem;
      `;
    case 'waterworks':
      return css`
        margin: 1rem;

        color: ${pickColor('darkBlue')};

        font-size: 5rem;
      `;
    case 'luxury-tax':
      return css`
        font-size: 5rem;
      `;
    case 'chance':
      return css`
        color: ${pickColor('darkBlue')};

        font-size: 9rem;
      `;
    case 'community-chest':
      return css`
        color: ${pickColor('lightBlue')};

        font-size: 5rem;
      `;
    default:
      return css``;
  }
};

const getStylesForInstructions = (type: string) => {
  switch (type) {
    case 'income-tax':
      return css`
        padding: 0.5rem 0;
      `;
    case 'luxury-tax':
      return css`
        padding-bottom: 0.5rem;
      `;
    case 'fee':
      return css`
        font-size: 1rem;
      `;
    case 'community-chest':
      return css`
        font-size: 0.8rem;
      `;
    default:
      return css``;
  }
};

const getStylesForContainerType = (type: string) => {
  switch (type) {
    case 'chance':
      return css`
        justify-content: center;
      `;
    case 'community-chest':
      return css`
        justify-content: space-around;
      `;
    case 'income-tax':
      return css`
        justify-content: center;
        align-items: center;
      `;
    default:
      return css``;
  }
};

const Space = styled.div<StyledSpaceProps>`
  position: relative;

  background: ${pickColor('board')};

  text-align: center;

  ${({ type }) => getStylesForSpace(type)};
`;

const Container = styled.div<StyledContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 12.5rem;
  width: 8rem;

  transform-origin: center;

  ${({ direction }) =>
    direction === 'vertical'
      ? css`
          top: 50%;
          left: 50%;
        `
      : css``};

  ${({ place }) => getStylesForPlace(place)};
  ${({ type }) => getStylesForContainerType(type)};
`;

const Bar = styled.div<StyledBarProps>`
  background-color: ${({ color }) => pickColor(color)};

  ${({ type }) => getStylesForBar(type)};
`;

const Name = styled.div<StyledSpaceProps>`
  position: relative;
  top: 0.5rem;

  ${({ type }) => getStylesForName(type)};
`;

const Price = styled.div`
  padding: 0.5rem 0;

  font-size: 0.7rem;
  font-weight: 400;
`;

const Drawing = styled.i<StyledSpaceProps>`
  ${({ type }) => getStylesForDrawing(type)};
`;

const Instructions = styled.div<StyledSpaceProps>`
  ${({ type }) => getStylesForInstructions(type)};
`;

const Diamond = styled.i`
  display: inline-block;

  margin: 1rem;

  font-size: 4rem;

  transform: rotate(45deg);
`;

export { Space, Container, Bar, Name, Price, Drawing, Instructions, Diamond };
