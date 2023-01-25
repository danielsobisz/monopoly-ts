import styled, { css } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';
import { mediaHover } from 'themes/mixins/mediaHover';

import { Icon as ReactIcon } from 'components/Icon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  height: 32.5rem;
  width: 27.7rem;
  padding: 5rem;

  background-color: ${pickColor('darkGrey')};
  border-radius: 4rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Icon = styled(ReactIcon)`
  svg {
    height: 4rem;
    width: 4rem;

    color: ${pickColor('whiteOff')};
  }
`;

const IconHand = styled(ReactIcon)`
  svg {
    height: 2.5rem;
    width: 2.5rem;

    color: ${pickColor('whiteOff')};

    transition: 300ms;

    ${mediaHover(css`
      color: ${pickColor('red')};
    `)}
  }
`;

const Text = styled.p`
  color: ${pickColor('whiteOff')};

  font-size: 2rem;
  text-transform: uppercase;
`;

export { Container, Text, Info, Icon, IconHand };
