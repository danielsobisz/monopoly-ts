import { Button } from 'components/general/Button';
import { Tooltip } from 'components/general/Tooltip';

import { useConfig } from './Config.hooks';
import * as S from './Config.styles';
import { PawnModal } from './components/PawnModal';

export function ConfigPage(): React.ReactElement {
  const {
    isModalOpen,
    isModalOpenSet,
    activeIndex,
    isMax,
    isMin,
    startGame,
    playerInfo,
    playerInfoSet,
    playerValidation,
    inputsComponents,
    addInput,
  } = useConfig();

  return (
    <S.Container>
      <S.Title>Let’s start with creating players</S.Title>

      <S.Inputs>
        {inputsComponents}

        <S.ButtonWrapper>
          <Tooltip content={isMax ? 'Maximum amount of players is 6.' : ''}>
            <Button
              type="button"
              disabled={isMax}
              scale="lg"
              onClick={() => addInput()}
            >
              Add Player
            </Button>
          </Tooltip>
        </S.ButtonWrapper>
      </S.Inputs>

      <Tooltip content={!isMin ? 'Minimum amount of players is 2.' : ''}>
        <Button
          type="submit"
          scale="xl2"
          onClick={() => startGame()}
          disabled={!isMin && !playerValidation}
        >
          start game
        </Button>
      </Tooltip>

      {isModalOpen ? (
        <PawnModal
          activeIndex={activeIndex}
          playerInfoSet={playerInfoSet}
          playerInfo={playerInfo}
          onClose={() => isModalOpenSet(false)}
        />
      ) : undefined}
    </S.Container>
  );
}
