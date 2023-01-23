import { Link } from "react-router-dom";

export const MovieDetails = ({
  id,
  title,
  director,
  imageUrl,
  duration,
  releaseDate,
  genres,
  linkHeading,
  deleteMovie,
  editMovie,
}) => {
  return (
    <>
      {linkHeading ? (
        <Link to={`/movies/${id}`}>
          <h3>{title}</h3>
        </Link>
      ) : (
        <h3>{title}</h3>
      )}
      <p>{director}</p>
      <p>{imageUrl}</p>
      <p>{duration}</p>
      <p>{releaseDate}</p>
      <ul>
        {genres && genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
      {linkHeading || (
        <p>
          <button onClick={() => deleteMovie(id)}>Delete Movie</button>
        </p>
      )}
      <p>
        <button onClick={() => editMovie(id)}>Edit Movie</button>
      </p>
    </>
  );
};
