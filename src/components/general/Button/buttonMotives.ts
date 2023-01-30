import { css } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

const motives = {
  m0: null,
  default: css`
    min-width: 20rem;
    padding: 1rem 2rem;

    background-color: ${pickColor('redSecondary')};
    color: ${pickColor('white')};
    border-radius: 0.6rem;

    text-transform: uppercase;
    text-align: center;

    &:hover {
      background-color: ${pickColor('white')};
      color: ${pickColor('redSecondary')};
    }
  `,
  white: css`
    height: 4rem;
    width: 20rem;
    padding: 1rem 2rem;

    background-color: ${pickColor('whiteOff')};
    border: 0.1rem solid ${pickColor('black')};
    color: ${pickColor('gray')};

    text-align: center;

    &:hover {
      background-color: ${pickColor('gray')};
      border-color: ${pickColor('gray')};
      color: ${pickColor('whiteOff')};
    }
  `,
};

export type ButtonMotives = keyof typeof motives;

const pickMotive = (motive: ButtonMotives) => motives[motive];

export { pickMotive };
