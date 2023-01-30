import styled, { css } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';
import { mediaHover } from 'themes/mixins/mediaHover';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 120rem;
  height: 60rem;
  padding: 8rem;

  background-color: ${pickColor('backgroundGrey')};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  margin-top: 10rem;

  ${mediaHover(css`
    svg {
      stroke: ${pickColor('red')};
    }
  `)}
`;

export { Container, Icons };
