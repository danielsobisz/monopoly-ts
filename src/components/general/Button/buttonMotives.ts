import { css } from "styled-components";
import { pickColor } from "themes/helpers/pickColor";

const motives = {
  m0: null,
  default: css`
    width: 20rem;
    padding: 1rem 2rem;

    background-color: ${pickColor("redSecondary")};
    color: ${pickColor("white")};
    border-radius: 0.3rem;

    font-size: 1.6rem;

    text-transform: uppercase;
    text-align: center;

    &:hover {
      background-color: ${pickColor("white")};
      color: ${pickColor("redSecondary")};
    }
  `,
};

export type ButtonMotives = keyof typeof motives;

const pickMotive = (motive: ButtonMotives) => motives[motive];

export { pickMotive };
