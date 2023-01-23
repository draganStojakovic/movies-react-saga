import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectSingleMovie } from "../store/movies/selector";
import { getSingleMovieAction } from "../store/movies/slice";
import { deleteSingleMovieAction } from "../store/movies/slice";
import { MovieDetails } from "../components/MovieDetails.component";
import { redirectToEdit } from "../utils/redirect";

export const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleMovie = useSelector(makeSelectSingleMovie);

  useEffect(() => {
    dispatch(getSingleMovieAction(id));
  }, [id, dispatch]);

  const handleDeleteMovie = async () => {
    dispatch(deleteSingleMovieAction(id));
    window.location.replace("/movies");
  };
  
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
      deleteMovie={handleDeleteMovie}
      editMovie={redirectToEdit}
    />
  );
};
