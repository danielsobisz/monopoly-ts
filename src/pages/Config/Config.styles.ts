import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 5rem 0;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  color: #ffffff;

  font-size: 3.2rem;
`;

export { Container, Title };
