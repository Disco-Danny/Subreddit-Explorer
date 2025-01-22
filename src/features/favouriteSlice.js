import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.length < 20) {
        const updatedState = [...state, action.payload];
        localStorage.setItem('favorites', JSON.stringify(updatedState));
        return updatedState;
      }
    },
    removeFavorite: (state, action) => {
      const updatedState = state.filter(sub => sub.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
