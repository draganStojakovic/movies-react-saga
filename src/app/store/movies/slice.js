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
    submitNewMovieAction: () => {},
    deleteSingleMovieAction: () => {},
  },
});

export const {
  getAllMoviesAction,
  setAllMoviesAction,
  getSingleMovieAction,
  setSingleMovieAction,
  submitNewMovieAction,
  deleteSingleMovieAction,
} = movies.actions;
export default movies.reducer;
