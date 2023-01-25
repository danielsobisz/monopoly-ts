import { Dispatch, SetStateAction, useState } from 'react';

import { Player } from 'types/data.type';

import { Button } from 'components/general/Button';
import { Headline } from 'components/general/Headline';
import { IconSVG } from 'components/general/IconSVG';
import { Modal } from 'components/general/Modal';

import * as S from './PawnModal.styles';

type PawnModalProps = {
  onClose: () => void;
  activeIndex: number;
  playerInfoSet: Dispatch<SetStateAction<Player[]>>;
};

export function PawnModal(props: PawnModalProps): React.ReactElement {
  const { onClose, activeIndex, playerInfoSet } = props;

  const [selectedIcon, selectedIconSet] = useState<string>('');

  const addIconToPlayer = () => {
    playerInfoSet((state) => {
      const arrIndex = state.findIndex((object) => object.index === activeIndex);
      if (arrIndex >= 0) {
        state[arrIndex].pawn = selectedIcon;
      } else {
        state.push({ index: activeIndex, pawn: selectedIcon });
      }

      return state;
    });

    onClose();
  };

  const icons = ['dog', 'hat', 'iron', 'shoe'];

  const iconsComponents = icons.map((item) => (
    <button type="button" onClick={() => selectedIconSet(item)}>
      <IconSVG color={selectedIcon === item ? 'red' : 'black'} name={item} />
    </button>
  ));

  return (
    <Modal onClose={onClose}>
      <S.Container>
        <Headline scale="xl3" textAlign="center">
          Choose your pawn
        </Headline>

        <S.Icons>{iconsComponents}</S.Icons>

        <Button onClick={() => addIconToPlayer()}>Accept</Button>
      </S.Container>
    </Modal>
  );
}
