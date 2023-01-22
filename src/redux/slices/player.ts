import { createSlice } from '@reduxjs/toolkit';

export interface PlayerState {
  position: number;
}

const initialState: PlayerState = {
  position: 1,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPosition: (state, action) => {
      state.position += action.payload;
    },
  },
});

export const { setPosition } = playerSlice.actions;

export default playerSlice.reducer;
