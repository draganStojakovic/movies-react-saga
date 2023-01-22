import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectMovies } from "../store/movies/selector";
import { getAllMoviesAction } from "../store/movies/slice";
import { MovieDetails } from "../components/MovieDetails.component";

export const MoviesPage = () => {
  const movies = useSelector(makeSelectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesAction());
  }, [dispatch]);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieDetails
            id={movie.id}
            title={movie.title}
            director={movie.director}
            imageUrl={movie.imageUrl}
            duration={movie.duration}
            releaseDate={movie.releaseDate}
            genres={movie.genres}
          />
        </li>
      ))}
    </ul>
  );
};
