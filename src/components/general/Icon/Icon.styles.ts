import styled, { css } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';
import { mediaHover } from 'themes/mixins/mediaHover';

import { ColorName } from 'types/general.type';

export type StyledContainerProps = {
  color?: ColorName;
};

const Container = styled.div<StyledContainerProps>`
  svg {
    stroke: ${({ color }) => pickColor(color!)};
    cursor: pointer;
  }

  ${mediaHover(css`
    svg {
      stroke: ${pickColor('red')};
    }
  `)}
`;

export { Container };
