import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitNewMovieAction } from "../store/movies/slice";
import { Form } from "../components/Form.component";

export const SubmitMoviePage = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    imageUrl: "",
    duration: 0,
    releaseDate: 0,
    genres: [],
  });

  const handleSubmitNewMovie = (e) => {
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
      window.location.replace(`/movies/${movie.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return <Form />;
};
