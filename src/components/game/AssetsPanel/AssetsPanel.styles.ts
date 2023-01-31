import styled from 'styled-components';

import { Headline } from 'components/general/Headline';

const Container = styled.div`
  width: 120rem;
  min-height: 50rem;
  padding: 4rem;
`;

const Title = styled(Headline)``;

const Assets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  margin-top: 3rem;
`;

export { Container, Title, Assets };
