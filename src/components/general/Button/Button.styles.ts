import styled from 'styled-components';
import { pickColor } from 'themes/helpers/pickColor';

import { FontScale, getFontScale } from 'themes/mixins/getFontScale';

import { pickMotive, ButtonMotives } from './buttonMotives';

export type StyledButtonProps = {
  motive?: ButtonMotives;
};

export type StyledLabelProps = {
  scale?: FontScale;
};

const Button = styled.button<StyledButtonProps>`
  margin: 0;
  padding: 0;

  background-color: transparent;
  color: inherit;
  border: none;

  text-decoration: none;

  cursor: pointer;

  transition-property: color, background-color;
  transition: 200ms ease-in;

  ${({ motive }) => motive && pickMotive(motive)};

  &.disabled {
    background-color: ${pickColor('disabled')};
    color: ${pickColor('black')};
    border: none;

    cursor: not-allowed;
  }
`;

const Label = styled.p<StyledLabelProps>`
  ${({ scale }) => scale && getFontScale(scale)};
`;

export { Button, Label };
