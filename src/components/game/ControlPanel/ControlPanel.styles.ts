import styled from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

import { Headline } from 'components/general/Headline';

const Container = styled.div``;

const Name = styled.div`
  width: 28rem;
  padding: 2rem 0;

  background-color: ${pickColor('navy')};
`;

const Text = styled(Headline)``;

const Info = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.2rem;
`;

const Properties = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;

  gap: 3rem;
  margin-top: 2rem;
`;

export { Container, Text, Info, Name, Properties };
