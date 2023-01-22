export const handleResetForm = (setMovie) => {
  setMovie({
    title: "",
    director: "",
    imageUrl: "",
    duration: "",
    releaseDate: "",
    // genres niz klikom na dugme
    // ne resetuje iz nekog razloga
    genres: [],
  });
};
