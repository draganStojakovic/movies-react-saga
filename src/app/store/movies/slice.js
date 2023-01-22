import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
  },
  reducers: {
    getAllMoviesAction: () => {},
    setAllMoviesAction: (state, { payload }) => {
      state.movies = payload;
    },
    getSingleMovieAction: () => {},
    setSingleMovieAction: (state, { payload }) => {
      state.movie = payload;
    },
  },
});

export const {
  getAllMoviesAction,
  setAllMoviesAction,
  getSingleMovieAction,
  setSingleMovieAction,
} = movies.actions;
export default movies.reducer;
