import styled from 'styled-components';

import { Button } from 'components/general/Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  min-height: 80rem;
  padding: 5rem 0;
`;

const ImageWrapper = styled.div`
  margin: 5rem auto 0 auto;
  width: 70rem;
`;

const StartButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 20rem;

  transform: translate(-50%, -50%);
`;

export { Container, ImageWrapper, StartButton };
