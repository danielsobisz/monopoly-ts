import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { PlayerType } from 'types/game.type';

import { Headline } from 'components/general/Headline';
import { IconSVG } from 'components/general/IconSVG';
import { Modal } from 'components/general/Modal';

import * as S from './PawnModal.styles';

type PawnModalProps = {
  onClose: () => void;
  activeIndex: number;
  playerInfoSet: Dispatch<SetStateAction<PlayerType[]>>;
  playerInfo: PlayerType[];
};

export function PawnModal(props: PawnModalProps): React.ReactElement {
  const { onClose, activeIndex, playerInfoSet, playerInfo } = props;

  const [selectedIcon, selectedIconSet] = useState<string>('');

  const checkIfPawnIsBusy = (selectedPawn: string) =>
    playerInfo.some((item) => item.pawn === selectedPawn);

  const addIconToPlayer = (icon: string) => {
    if (checkIfPawnIsBusy(icon)) {
      toast.error('sorry, this pawn is occupied.');
      return;
    }

    selectedIconSet(icon);

    playerInfoSet((state) => {
      const arrIndex = state.findIndex(
        (object) => object.index === activeIndex
      );
      if (arrIndex >= 0) {
        state[arrIndex].pawn = icon;
      } else {
        state.push({
          index: activeIndex,
          pawn: icon,
          money: 1500,
          oldPosition: 1,
          newPosition: 1,
          name: '',
        });
      }

      return state;
    });

    onClose();
  };

  const icons = ['dog', 'hat', 'iron', 'shoe'];

  const iconsComponents = icons.map((item) => (
    <button type="button" onClick={() => addIconToPlayer(item)}>
      <IconSVG color={selectedIcon === item ? 'red' : 'black'} name={item} />
    </button>
  ));

  useEffect(() => {
    const currentPlayer = playerInfo.find(
      (object) => object.index === activeIndex
    );

    if (currentPlayer?.pawn) {
      selectedIconSet(currentPlayer.pawn);
    }
  }, [playerInfo]);

  return (
    <Modal onClose={onClose}>
      <S.Container>
        <Headline scale="xl3" textAlign="center">
          Choose your pawn
        </Headline>

        <S.Icons>{iconsComponents}</S.Icons>
      </S.Container>
    </Modal>
  );
}
