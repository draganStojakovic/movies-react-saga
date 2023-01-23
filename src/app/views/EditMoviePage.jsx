import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectSingleMovie } from "../store/movies/selector";
import { getSingleMovieAction } from "../store/movies/slice";
import { Form } from "../components/Form.component";
import { handleResetForm } from "../utils/formFunctions";
import { editSingleMovieAction } from "../store/movies/slice";

export const EditMoviePage = () => {
  const FORM_TITLE = "Edit a movie";
  const BTN = "Edit";
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleMovie = useSelector(makeSelectSingleMovie);
  // probao sam da pocetno stanje budu one vrednosti koje dodju iz selektora
  // ali nikakve vajde ni od toga
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    imageUrl: "",
    duration: "",
    releaseDate: "",
    genres: [],
  });

  const setReduxStateToComponentState = async () => {
    if (singleMovie) {
      setMovie({
        ...movie, title: singleMovie.title,
        ...movie, director: singleMovie.director,
        ...movie, imageUrl: singleMovie.imageUrl,
        ...movie, duration: singleMovie.duration,
        ...movie, releaseDate: singleMovie.releaseDate,
        ...movie, genres: singleMovie.genres,
      });
    }
  };

  useEffect(() => {
    dispatch(getSingleMovieAction(id));
    setReduxStateToComponentState();
  }, [id, dispatch]);

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
      // window.location.replace("/movies");
    } catch (err) {
      console.error(err);
    }
  };

  console.log(movie); // nista nije nasetovano

  // probao sam da koristim direkto redux state u formi ali
  // onda UI ne azurira vrednosti u polju, ali u konzoli vidim
  // da se vrednosti menjaju. Cak sam pokusao da initialState: movie {},
  // razdvojim na pojedinacne podatke, i stavio 6 settera i koristio te setere u formi,
  // ali uzalud, jer ni tad ne azurira UI.
  return (
    <Form
      formTitle={FORM_TITLE}
      btnText={BTN}
      movie={movie}
      onChange={setMovie}
      handleSubmit={handleEditMovie}
      resetForm={handleResetForm}
    />
  );
};
