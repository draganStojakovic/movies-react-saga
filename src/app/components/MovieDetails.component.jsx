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
      <h3>{title}</h3>
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
