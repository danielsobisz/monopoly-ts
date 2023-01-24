import styled from 'styled-components';
import { pickColor } from 'themes/helpers/pickColor';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 120rem;
  height: 80rem;
  padding: 8rem;

  background-color: ${pickColor('backgroundGrey')};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
`;

export { Container, Icons };
