import * as S from "./Image.styles";
import { StyledImageProps } from "./Image.styles";

type ImageProps = {
  source: string;
  alt: string;
  className?: string;
} & StyledImageProps;

const defaultProps: Partial<ImageProps> = {
  height: undefined,
  className: undefined,
};

export function Image(props: ImageProps): React.ReactElement {
  const { source, alt, height, className } = { ...defaultProps, ...props };

  return (
    <S.Wrapper className={className} height={height}>
      <S.Image srcSet={source} src={source} alt={alt} />
    </S.Wrapper>
  );
}
