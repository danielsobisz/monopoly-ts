import styled from 'styled-components';

import { pickColor } from 'themes/helpers/pickColor';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 5rem 0;

  background-color: ${pickColor('blackTransparent')};
`;

export { Container };
