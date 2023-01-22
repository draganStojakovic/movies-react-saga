import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectMovies } from "../store/movies/selector";
import { getAllMoviesAction } from "../store/movies/slice";

export const MoviesPage = () => {
  const movies = useSelector(makeSelectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesAction());
  }, []);

  console.log(movies);

  return <h1>MoviesPage</h1>;
};
