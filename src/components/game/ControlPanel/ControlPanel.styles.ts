import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.h2`
  color: #ebeae8;

  font-size: 20px;
  text-transform: uppercase;
`;

const Info = styled.span`
  color: #70697a;
`;

export { Container, Label, Info };
