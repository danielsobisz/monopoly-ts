import { Headline } from 'components/general/Headline';
import { Modal } from 'components/general/Modal';
import { Icon } from 'components/general/Icon';

import * as S from './PawnModal.styles';

type PawnModalProps = {
  onClose: () => void;
};

export function PawnModal(props: PawnModalProps): React.ReactElement {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <S.Container>
        <Headline scale="xl3" textAlign="center">
          Choose your pawn
        </Headline>

        {/* <Icon name="dog" /> */}
      </S.Container>
    </Modal>
  );
}
