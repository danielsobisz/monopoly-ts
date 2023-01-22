import styled from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

import { Button } from 'components/general/Button';

const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 9999999999;
`;

const ContainerInner = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${pickColor('white')};
  border-radius: ${({ theme }) => theme.borderRadius.big};
`;

const BoxInner = styled.div`
  position: relative;

  overflow-y: initial !important;
`;

const CloseButton = styled(Button)`
  position: absolute;

  top: 1.3rem;
  right: 1.5rem;

  z-index: 9;
`;

export { Container, CloseButton, Box, BoxInner, ContainerInner };
