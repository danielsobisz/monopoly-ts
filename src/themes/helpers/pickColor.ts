import { css, DefaultTheme } from 'styled-components';

import { ColorName } from 'types/general.type';

const pickColor = (color: ColorName) => css`
  ${({ theme }: { theme: DefaultTheme }) => theme.colors[color]}
`;

export { pickColor };
