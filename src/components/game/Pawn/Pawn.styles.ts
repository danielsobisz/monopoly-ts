import styled from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

const Container = styled.div`
  position: absolute;
  bottom: 4.8rem;
  right: 4.8rem;

  z-index: 9;

  width: 2.4rem;
  height: 2.4rem;

  svg {
    width: 4.8rem;
    height: 4.8rem;

    fill: ${pickColor('darkBlue')};
  }
`;

export { Container };
