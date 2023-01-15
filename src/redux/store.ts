import { configureStore } from "@reduxjs/toolkit";

import { playerSlice } from "redux/slices/player";

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
