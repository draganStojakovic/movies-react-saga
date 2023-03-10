import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectSingleMovie } from "../store/movies/selector";
import { getSingleMovieAction } from "../store/movies/slice";
import { Form } from "../components/Form.component";
import {
  handleResetForm,
  handleGenres,
  setIsChecked,
  handlePreviewData,
} from "../utils/formFunctions";
import { editSingleMovieAction } from "../store/movies/slice";

export const EditMoviePage = () => {
  const FORM_TITLE = "Edit a movie";
  const BTN = "Edit";
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleMovie = useSelector(makeSelectSingleMovie);
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    imageUrl: "",
    duration: "",
    releaseDate: "",
    genres: [],
  });

  const setReduxStateToComponentState = (singleMovie) => {
    if (singleMovie) {
      setMovie({
        title: singleMovie.title,
        director: singleMovie.director,
        imageUrl: singleMovie.imageUrl,
        duration: singleMovie.duration,
        releaseDate: singleMovie.releaseDate,
        genres: singleMovie.genres,
      });
    }
  };

  useEffect(() => {
    dispatch(getSingleMovieAction(id));
  }, [id, dispatch]);

  useEffect(() => {
    setReduxStateToComponentState(singleMovie);
  }, [singleMovie]);

  useEffect(() => {
    setMovie(movie);
  }, [movie]);

  const handleEditMovie = async (e) => {
    e.preventDefault();
    if (
      !movie.title ||
      !movie.director ||
      !movie.imageUrl ||
      !movie.duration ||
      !movie.releaseDate
    ) {
      alert("One or more fields are blank.");
      return;
    }
    try {
      dispatch(editSingleMovieAction({ id: id, data: movie }));
      window.location.replace("/movies");
    } catch (err) {
      console.error(err);
    }
  };

  console.log(movie);

  return (
    <Form
      formTitle={FORM_TITLE}
      btnText={BTN}
      movie={movie}
      onChange={setMovie}
      handleSubmit={handleEditMovie}
      handleGenres={handleGenres}
      resetForm={handleResetForm}
      isChecked={setIsChecked}
      previewData={handlePreviewData}
    />
  );
};
