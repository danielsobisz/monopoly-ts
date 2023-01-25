import styled, { keyframes } from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

import { Button } from 'components/general/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  height: 100vh;
  min-height: 80rem;
  padding: 5rem 0;

  background-color: ${pickColor('blackTransparent')};
`;

const Title = styled.h2`
  margin: 5rem 0;

  color: ${pickColor('white')};

  font-size: 3.2rem;
`;

const Inputs = styled.div`
  display: grid;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: auto;
`;

const slideIn = keyframes`
 0% { transform: translateY(-4rem) }
 30% { transform: translateY(-3rem) }
 40% { transform: translateY(-2rem) }
 100% {transform: translateY(0) }
`;

const Inner = styled.div`
  display: flex;
  gap: 2rem;
`;

const PlayerData = styled.div`
  overflow: hidden;

  &:not(:first-of-type) {
    ${Inner} {
      transform: translateY(-5rem);

      animation: ${slideIn} 400ms linear forwards;
    }
  }

  ${Inner}
`;

const ButtonWrapper = styled.div`
  justify-self: flex-end;
`;

const ButtonPawn = styled(Button)`
  width: 22rem;
`;

export { Container, Title, Inputs, ButtonWrapper, PlayerData, Inner, ButtonPawn };
