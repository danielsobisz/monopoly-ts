import styled from 'styled-components';
import { pickColor } from 'themes/helpers/pickColor';

const Container = styled.div`
  width: 120rem;
  height: 80rem;
  padding: 8rem;

  background-color: ${pickColor('backgroundGrey')};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export { Container };
