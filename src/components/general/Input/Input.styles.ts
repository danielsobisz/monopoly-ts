import styled from "styled-components";
import { pickColor } from "themes/helpers/pickColor";

const Container = styled.div``;

const Label = styled.label`
  margin-right: 2.5rem;

  color: ${pickColor("white")};

  font-size: 1.6rem;
  font-weight: 400;
`;

const StyledInput = styled.input`
  width: 33.5rem;
  height: 4rem;
  padding: 1rem;

  background-color: ${pickColor("whiteOff")};
  border: 0.1rem solid ${pickColor("black")};
`;

export { Container, Label, StyledInput };
