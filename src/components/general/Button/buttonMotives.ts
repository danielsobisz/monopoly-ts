import { css } from "styled-components";

const motives = {
  m0: null,
  default: css`
    width: 20rem;
    padding: 1rem 2rem;

    font-size: 1.6rem;

    background-color: #c70000;
    color: #ffffff;
    border-radius: 0.3rem;

    text-transform: uppercase;
    text-align: center;

    &:hover {
      background-color: #ffffff;
      color: #c70000;
    }
  `,
};

export type ButtonMotives = keyof typeof motives;

const pickMotive = (motive: ButtonMotives) => motives[motive];

export { pickMotive };
