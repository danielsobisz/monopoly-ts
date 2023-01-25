import { createSlice } from '@reduxjs/toolkit';

import { Player } from 'types/game.type';

export type GameState = {
  players: Player[];
};

const initialState: GameState = {
  players: [],
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
            position: action.payload.position,
          };
        }

        return item;
      });
    },
  },
});

export const { setPlayers, setPlayerPostion } = gameSlice.actions;

export default gameSlice.reducer;
