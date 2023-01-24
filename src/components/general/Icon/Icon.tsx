import { ReactComponent as Hat } from 'assets/hat.svg';
import { ReactComponent as Iron } from 'assets/iron.svg';
import { ReactComponent as Shoe } from 'assets/shoe.svg';
import { ReactComponent as Dog } from 'assets/dog.svg';

import * as S from './Icon.styles';
import { StyledContainerProps } from './Icon.styles';

type IconProps = {
  name: string;
} & StyledContainerProps;

export function Icon(props: IconProps) {
  const { name, color = 'black' } = props;

  const pickIcon = () => {
    switch (name) {
      case 'hat':
        return <Hat />;
      case 'dog':
        return <Dog />;
      case 'iron':
        return <Iron />;
      case 'shoe':
        return <Shoe />;
      default:
        return <span>no icon</span>;
    }
  };

  return <S.Container color={color}>{pickIcon()}</S.Container>;
}
