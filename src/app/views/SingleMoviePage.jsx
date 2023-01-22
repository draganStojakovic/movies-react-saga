import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectSingleMovie } from "../store/movies/selector";
import { getSingleMovieAction } from "../store/movies/slice";
import { MovieDetails } from "../components/MovieDetails.component";

export const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleMovie = useSelector(makeSelectSingleMovie);

  useEffect(() => {
    dispatch(getSingleMovieAction(id));
  }, [id, dispatch]);

  return (
    <MovieDetails
      id={singleMovie.id}
      title={singleMovie.title}
      director={singleMovie.director}
      imageUrl={singleMovie.imageUrl}
      duration={singleMovie.duration}
      releaseDate={singleMovie.releaseDate}
      genres={singleMovie.genres}
      linkHeading={false}
    />
  );
};
