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
    editSingleMovieAction: () => {},
  },
});

export const {
  getAllMoviesAction,
  setAllMoviesAction,
  getSingleMovieAction,
  setSingleMovieAction,
  submitNewMovieAction,
  deleteSingleMovieAction,
  editSingleMovieAction,
} = movies.actions;
export default movies.reducer;
