import { createSlice } from '@reduxjs/toolkit';

import { Player } from 'types/game.type';

export type GameState = {
  players: Player[];
  currentPlayer?: Player;
};

const initialState: GameState = {
  players: [],
  currentPlayer: undefined,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    setPlayerPostion: (state, action) => {
      state.players = state.players.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            newPosition: action.payload.position,
          };
        }

        return item;
      });

      if (state.currentPlayer) {
        state.currentPlayer = {
          ...state.currentPlayer,
          newPosition: action.payload.position,
        };
      }
    },
    updatePlayerOldPostion: (state, action) => {
      state.players = state.players.map((item) => {
        if (item.name === action.payload) {
          return {
            ...item,
            oldPosition: item.newPosition,
          };
        }

        return item;
      });

      if (state.currentPlayer) {
        state.currentPlayer = {
          ...state.currentPlayer,
          oldPosition: state.currentPlayer?.newPosition,
        };
      }
    },
    setCurrentPlayer: (state, action) => {
      const player = state.players.find((item) => item.name === action.payload);

      state.currentPlayer = player;
    },
  },
});

export const {
  setPlayers,
  setPlayerPostion,
  setCurrentPlayer,
  updatePlayerOldPostion,
} = gameSlice.actions;

export default gameSlice.reducer;
