import { createSlice } from '@reduxjs/toolkit';

import { CardType } from 'types/board.type';
import { PlayerType } from 'types/game.type';

export type GameState = {
  players: PlayerType[];
  currentPlayer?: PlayerType;
  cards: CardType[];
  currentCard?: CardType;
};

const initialState: GameState = {
  players: [],
  currentPlayer: undefined,
  cards: [],
  currentCard: undefined,
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
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },
    buyProperty: (state, action) => {
      if (state.currentPlayer) {
        state.currentPlayer = {
          ...state.currentPlayer,
          money: state.currentPlayer.money - action.payload.price,
          assets: state.currentPlayer.assets
            ? [...state.currentPlayer.assets, action.payload]
            : [action.payload],
        };

        state.cards = state.cards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              occupiedBy: state.currentPlayer?.name,
            };
          }

          return item;
        });
      }
    },
  },
});

export const {
  setPlayers,
  setPlayerPostion,
  setCurrentPlayer,
  updatePlayerOldPostion,
  setCards,
  setCurrentCard,
  buyProperty,
} = gameSlice.actions;

export default gameSlice.reducer;
