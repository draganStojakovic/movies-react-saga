export const handleResetForm = (setMovie) => {
  setMovie({
    title: "",
    director: "",
    imageUrl: "",
    duration: "",
    releaseDate: "",
    // genres niz klikom na dugme
    // ne resetuje iz nekog razloga
    // tj. ne isprazni ovaj niz ispod
    genres: [],
  });
};

export const handleGenres = (isChecked, value, movie, setMovie) => {
  if (!isChecked) {
    setMovie({
      ...movie,
      genres: [...movie.genres.filter((genre) => genre !== value)],
    });
  } else {
    setMovie({ ...movie, genres: [...movie.genres, value] });
  }
};

export const setIsChecked = (movie, fieldName) => {
  return !!movie.genres?.find((genre) => genre === fieldName);
};


export const handlePreviewData = (movie) => {
  let message;
  for (const key in movie) {
    let item = key + ": " + movie[key] + "\n";
    message += item;
  }
  alert(message);
};