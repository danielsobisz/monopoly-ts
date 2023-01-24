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
  },
});

export const { setPlayers } = gameSlice.actions;

export default gameSlice.reducer;
