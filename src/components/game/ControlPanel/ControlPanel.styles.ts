import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.h2`
  color: #ebeae8;

  font-size: 2rem;
  text-transform: uppercase;
`;

const Info = styled.span`
  color: #70697a;
`;

export { Container, Label, Info };
