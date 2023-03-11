/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteTracks: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {

    removeFromFavorite: (state, action) => ({
      ...state,
      favoriteTracks: state.favoriteTracks.filter(
        (track) => track.id !== action.payload.id
      ),
    }),
    addFavoriteTrack: (state, action) => {
      const index = state.favoriteTracks.findIndex(
        (track) => track.id === action.payload.id
      );
      if (index === -1) {
        state.favoriteTracks.push(action.payload);
      } else {
        state.favoriteTracks.splice(index, 1);
      }
    },
  },
});

export const { removeFromFavorite, addFavoriteTrack } = favoriteSlice.actions;

export default favoriteSlice.reducer;



