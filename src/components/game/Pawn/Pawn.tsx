import { IconSVG } from 'components/general/IconSVG';

import * as S from './Pawn.styles';

type PawnProps = {
  name: string;
};

export function Pawn(props: PawnProps): React.ReactElement {
  const { name } = props;

  return (
    <S.Container>
      <IconSVG name={name} />
    </S.Container>
  );
}
