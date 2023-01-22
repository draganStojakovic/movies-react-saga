import { Link } from "react-router-dom";

export const MovieDetails = ({
  id,
  title,
  director,
  imageUrl,
  duration,
  releaseDate,
  genres,
}) => {
  return (
    <>
      <Link to={`/movies/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{director}</p>
      <p>{imageUrl}</p>
      <p>{duration}</p>
      <p>{releaseDate}</p>
      <ul>
        {genres && genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
    </>
  );
};
