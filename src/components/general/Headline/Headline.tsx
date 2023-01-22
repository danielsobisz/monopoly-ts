import { capitalizeFirstLetter } from 'themes/helpers/capitalizeFirstLetter';

import * as S from './Headline.styles';
import { TextProps } from './Headline.styles';

export type HeadlineProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span';
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
} & TextProps;

export function Headline(props: HeadlineProps): React.ReactElement {
  const {
    children,
    tag = 'p',
    scale = ['base', 's'],
    className = '',
    color = 'black',
    fontWeight = 'normal',
    textTransform = 'none',
    textAlign = 'left',
    htmlFor = '',
  } = props;

  return (
    <S.Text
      textAlign={textAlign}
      className={className}
      fontWeight={fontWeight}
      color={color}
      scale={scale}
      as={tag}
      textTransform={textTransform}
      htmlFor={htmlFor}
    >
      {textTransform === 'isFirstLetterUppercase' && children
        ? capitalizeFirstLetter(children.toString())
        : children}
    </S.Text>
  );
}
