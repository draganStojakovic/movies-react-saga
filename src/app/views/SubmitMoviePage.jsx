import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitNewMovieAction } from "../store/movies/slice";
import { Form } from "../components/Form.component";

export const SubmitMoviePage = () => {
  const FORM_TITLE = "Submit a new movie";
  const BTN = "Submit";
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    imageUrl: "",
    duration: "",
    releaseDate: "",
    genres: [],
  });

  const handleSubmitNewMovie = async (e) => {
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
      dispatch(submitNewMovieAction(movie));
      window.location.replace("/movies");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      formTitle={FORM_TITLE}
      btnText={BTN}
      movie={movie}
      onChange={setMovie}
      handleSubmit={handleSubmitNewMovie}
    />
  );
};
