import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {
      title: "",
      director: "",
      imageUrl: "",
      duration: "",
      releaseDate: "",
      genres: [],
    },
  },
  reducers: {
    getAllMoviesAction: () => {},
    setAllMoviesAction: (state, { payload }) => {
      state.movies = payload;
    },
    getSingleMovieAction: () => {},
    setSingleMovieTitleAction: (state, { payload }) => {
      state.movie.title = payload;
    },
    setSingleMovieDirectorAction: (state, { payload }) => {
      state.movie.director = payload;
    },
    setSingleMovieImageUrlAction: (state, { payload }) => {
      state.movie.imageUrl = payload;
    },
    setSingleMovieDurationAction: (state, { payload }) => {
      state.movie.duration = payload;
    },
    setSingleMovieReleaseDateAction: (state, { payload }) => {
      state.movie.releaseDate = payload;
    },
    setSingleMovieGenresAction: (state, { payload }) => {
      state.movie.genres = payload;
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
  setSingleMovieTitleAction,
  setSingleMovieDirectorAction,
  setSingleMovieImageUrlAction,
  setSingleMovieDurationAction,
  setSingleMovieReleaseDateAction,
  setSingleMovieGenresAction,
  submitNewMovieAction,
  deleteSingleMovieAction,
  editSingleMovieAction,
} = movies.actions;
export default movies.reducer;
