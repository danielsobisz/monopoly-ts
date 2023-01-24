import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Player } from 'types/data.type';

import { useAppDispatch } from 'redux/hooks';
import { setPlayers } from 'redux/slices/game';

import { Button } from 'components/general/Button';
import { Input } from 'components/general/Input';
import { TooltipComponent } from 'components/general/Tooltip';

import * as S from './Config.styles';
import { PawnModal } from './components/PawnModal';

export function ConfigPage(): React.ReactElement {
  const { register } = useForm();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [inputsAmount, inputsAmountSet] = useState<number[]>([1, 2]);
  const [isModalOpen, isModalOpenSet] = useState<boolean>(false);
  const [playerInfo, playerInfoSet] = useState<Player[]>([]);
  const [activeIndex, activeIndexSet] = useState<number>(0);

  const isMax = inputsAmount.length === 6;
  const isMin = playerInfo.length >= 2;

  const checkPlayerValidation = () => {
    if (playerInfo.length < 2) {
      return false;
    }

    return playerInfo.every((item) => item.name && item.pawn);
  };

  const playerValidation = checkPlayerValidation();

  const startGame = () => {
    if (!playerValidation) {
      toast.error('Check your player data');
      return;
    }
    console.log(playerInfo);
    dispatch(setPlayers(playerInfo));
    toast.success('lets play!');
    navigate('/game');
  };

  const inputsComponents = inputsAmount.map((index) => {
    const player = playerInfo.find((item) => item.index === index);

    return (
      <S.PlayerData key={index}>
        <S.Inner>
          <Input
            register={register}
            name={`player${index}`}
            onChange={(e) => {
              playerInfoSet((state) => {
                const arrIndex = state.findIndex((object) => object.index === index);

                if (arrIndex >= 0) {
                  state[arrIndex].name = e.target.value;
                } else {
                  state.push({ name: e.target.value, pawn: '', index });
                }

                return state;
              });
            }}
          >
            {`Player #${index}`}
          </Input>

          <S.ButtonPawn
            motive="white"
            onClick={() => {
              isModalOpenSet(true);
              activeIndexSet(index);
            }}
          >
            {player?.pawn.toLocaleUpperCase() || 'Choose your pawn...'}
          </S.ButtonPawn>
        </S.Inner>
      </S.PlayerData>
    );
  });

  const addInput = () => {
    if (inputsAmount.length === 6) {
      toast.error('Maximum amount of players is 6.');
      return;
    }

    inputsAmountSet((state) => [...state, state.length + 1]);
  };

  return (
    <S.Container>
      <S.Title>Let’s start with creating players</S.Title>

      <S.Inputs>
        {inputsComponents}

        <S.ButtonWrapper>
          <TooltipComponent content={isMax ? 'Maximum amount of players is 6.' : ''}>
            <Button type="button" disabled={isMax} scale="lg" onClick={() => addInput()}>
              Add Player
            </Button>
          </TooltipComponent>
        </S.ButtonWrapper>
      </S.Inputs>

      <TooltipComponent content={!isMin ? 'Minimum amount of players is 2.' : ''}>
        <Button
          type="submit"
          scale="xl2"
          onClick={() => startGame()}
          disabled={!isMin && !playerValidation}
        >
          start game
        </Button>
      </TooltipComponent>

      {isModalOpen ? (
        <PawnModal
          activeIndex={activeIndex}
          playerInfoSet={playerInfoSet}
          onClose={() => isModalOpenSet(false)}
        />
      ) : undefined}
    </S.Container>
  );
}
