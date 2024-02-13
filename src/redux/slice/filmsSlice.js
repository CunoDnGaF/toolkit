import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const filmsSlice = createSlice({
  name: 'favoriteFilms',
  initialState,
  reducers: {
    addFilm(state, action) {
      state.push(action.payload);
    },
    deleteFilm(state, action) {
      const index = state.findIndex(el => el.imdbId === action.payload)
      state.splice(index, 1);
    }
  }
})

export const {addFilm, deleteFilm} = filmsSlice.actions;
export default filmsSlice.reducer;