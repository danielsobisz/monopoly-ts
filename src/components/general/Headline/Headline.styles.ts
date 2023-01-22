import styled from 'styled-components';

import { ColorName, FontWeightName, TextTransform, TextAlign } from 'types/general.type';

import { getFontScale, FontScale } from 'themes/mixins/getFontScale';

export type TextProps = {
  scale?: FontScale;
  color?: ColorName;
  fontWeight?: FontWeightName;
  textTransform?: TextTransform;
  textAlign?: TextAlign;
};

const Text = styled.p<TextProps>`
  ${({ scale }) => scale && getFontScale(scale)};

  margin: 0;

  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};

  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.fontWeights[fontWeight] : theme.fontWeights.normal};

  text-transform: ${({ theme, textTransform }) =>
    textTransform && textTransform !== 'isFirstLetterUppercase'
      ? theme.textTransforms[textTransform]
      : theme.textTransforms.none};
  text-align: ${({ theme, textAlign }) =>
    textAlign ? theme.textAligns[textAlign] : theme.textAligns.left};
`;

export { Text };
