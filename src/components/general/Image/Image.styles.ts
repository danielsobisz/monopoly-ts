import styled from 'styled-components';

export type StyledImageProps = {
  height?: string;
};

const Wrapper = styled.figure<StyledImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  margin: 0;
  width: 100%;
  height: ${({ height }) => height || '100%'};
`;

const Image = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 50% 0;
`;

export { Wrapper, Image };
