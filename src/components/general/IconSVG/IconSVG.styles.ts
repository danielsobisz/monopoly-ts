import styled from 'styled-components';

import { ColorName } from 'types/general.type';

import { pickColor } from 'themes/helpers/pickColor';

export type StyledContainerProps = {
  color?: ColorName;
};

const Container = styled.div<StyledContainerProps>`
  svg {
    stroke: ${({ color }) => pickColor(color!)};
    cursor: pointer;
  }
`;

export { Container };
