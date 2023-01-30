import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { PlayerType } from 'types/game.type';

import { useAppDispatch } from 'redux/hooks';
import { setPlayers } from 'redux/slices/game';

import { Input } from 'components/general/Input';

import * as S from './Config.styles';

const useConfig = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { register } = useForm();

  const [inputsAmount, inputsAmountSet] = useState<number[]>([1, 2]);
  const [isModalOpen, isModalOpenSet] = useState<boolean>(false);
  const [playerInfo, playerInfoSet] = useState<PlayerType[]>([]);
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

  const setPlayerName = (index: number, value: string) => {
    const isUserExist = playerInfo.some((item) => item.name === value);

    if (isUserExist) {
      toast.error('Name is taken. Please select something different.');
      return;
    }

    playerInfoSet((state) => {
      const arrIndex = state.findIndex((object) => object.index === index);

      if (arrIndex >= 0) {
        state[arrIndex].name = value;
      } else {
        state.push({
          name: value,
          pawn: '',
          index,
          oldPosition: 1,
          newPosition: 1,
          money: 1500,
        });
      }

      return state;
    });
  };

  const startGame = () => {
    if (!playerValidation) {
      toast.error('Check your player data');
      return;
    }

    const playerInfoExpanded = playerInfo.map((item) => ({
      ...item,
      position: 0,
      money: 1500,
    }));

    dispatch(setPlayers(playerInfoExpanded));
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
            onBlur={(e) => {
              setPlayerName(index, e.target.value);
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

  return {
    register,
    inputsAmountSet,
    isModalOpen,
    isModalOpenSet,
    activeIndex,
    activeIndexSet,
    isMax,
    isMin,
    setPlayerName,
    startGame,
    inputsAmount,
    playerInfo,
    playerInfoSet,
    playerValidation,
    inputsComponents,
    addInput,
  };
};

export { useConfig };
