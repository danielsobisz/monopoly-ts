import styled from "styled-components";

import { pickColor } from "themes/helpers/pickColor";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  padding: 5rem 0;

  background-color: ${pickColor("blackTransparent")};
`;

const Title = styled.h2`
  color: ${pickColor("white")};

  font-size: 3.2rem;
`;

export { Container, Title };
