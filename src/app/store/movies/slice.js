import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getAllMoviesAction: () => {},
    setAllMoviesAction: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { getAllMoviesAction, setAllMoviesAction } = movies.actions;
export default movies.reducer;
