import { ReactComponent as Hat } from 'assets/hat.svg';
import { ReactComponent as Iron } from 'assets/iron.svg';
import { ReactComponent as Shoe } from 'assets/shoe.svg';
import { ReactComponent as Dog } from 'assets/dog.svg';

interface IProps {
  name: 'hat' | 'iron' | 'shoe' | 'dog';
}

export function Icon(props: IProps) {
  const { name } = props;

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
}
