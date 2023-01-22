import { useRef } from 'react';
import { useClickAway, useLockBodyScroll } from 'react-use';

import { Portal } from '../Portal';

import * as S from './Modal.styles';

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export function Modal(props: ModalProps): React.ReactElement {
  const { children, onClose } = props;

  const ref = useRef(null);

  useClickAway(ref, onClose!);
  useLockBodyScroll(true);

  return (
    <Portal>
      <S.Container>
        <S.Box ref={ref}>
          <S.BoxInner>
            {onClose ? (
              <S.CloseButton motive="m0" onClick={onClose}>
                X
              </S.CloseButton>
            ) : undefined}

            {children}
          </S.BoxInner>
        </S.Box>
      </S.Container>
    </Portal>
  );
}
