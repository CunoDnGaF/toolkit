import { apiSlice } from "./slice/apiSlice";
import filmsSlice from "./slice/filmsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    favoriteFilms: filmsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;