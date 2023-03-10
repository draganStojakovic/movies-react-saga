export const Form = ({
  formTitle,
  btnText,
  movie,
  onChange,
  handleSubmit,
  resetForm,
  handleGenres,
  previewData,
  isChecked,
}) => {
  return (
    <>
      <h1>{formTitle}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title:</label>
        <input
          id="Title"
          type="text"
          value={movie.title}
          required
          minLength="2"
          onChange={(e) => onChange({ ...movie, title: e.target.value })}
        />
        <br />
        <label htmlFor="Director">Director:</label>
        <input
          id="Director"
          type="text"
          value={movie.director}
          required
          minLength="2"
          onChange={(e) => onChange({ ...movie, director: e.target.value })}
        />
        <br />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          id="imageUrl"
          type="text"
          required
          minLength="2"
          value={movie.imageUrl}
          onChange={(e) => onChange({ ...movie, imageUrl: e.target.value })}
        />
        <br />
        <label htmlFor="Duration">Duration:</label>
        <input
          id="Duration"
          type="number"
          value={movie.duration}
          onChange={(e) => onChange({ ...movie, duration: e.target.value })}
        />
        <br />
        <label htmlFor="releaseDate">Release Date:</label>
        <input
          id="releaseDate"
          type="date"
          required
          value={movie.releaseDate}
          onChange={(e) => onChange({ ...movie, releaseDate: e.target.value })}
        />
        <br />
        <fieldset>
          <label htmlFor="Action">Action:</label>
          <input
            id="Action"
            type="checkbox"
            name="genres"
            value="Action"
            checked={isChecked(movie, "Action")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
          <label htmlFor="Comedy">Comedy:</label>
          <input
            id="Comedy"
            type="checkbox"
            name="genres"
            value="Comedy"
            checked={isChecked(movie, "Comedy")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
          <label htmlFor="Drama">Drama:</label>
          <input
            id="Drama"
            type="checkbox"
            name="genres"
            value="Drama"
            checked={isChecked(movie, "Drama")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
          <label htmlFor="Horror">Horror:</label>
          <input
            id="Horror"
            type="checkbox"
            name="genres"
            value="Horror"
            checked={isChecked(movie, "Horror")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
          <label htmlFor="Western">Western:</label>
          <input
            id="Western"
            type="checkbox"
            name="genres"
            value="Western"
            checked={isChecked(movie, "Western")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
          <label htmlFor="Thriller">Thriller:</label>
          <input
            id="Thriller"
            type="checkbox"
            name="genres"
            value="Thriller"
            checked={isChecked(movie, "Thriller")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
          <label htmlFor="Animation">Animation:</label>
          <input
            id="Animation"
            type="checkbox"
            name="genres"
            value="Animation"
            checked={isChecked(movie, "Animation")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
          <label htmlFor="Documentary">Documentary:</label>
          <input
            id="Documentary"
            type="checkbox"
            name="genres"
            value="Documentary"
            checked={isChecked(movie, "Documentary")}
            onChange={(e) =>
              handleGenres(e.target.checked, e.target.value, movie, onChange)
            }
          />
          <br />
        </fieldset>
        <br />
        <br />
        <button type="submit">{btnText}</button>
      </form>
      <button onClick={() => resetForm(onChange)}>Reset Form</button>
      <br />
      <button onClick={() => previewData(movie)}>Preview Data</button>
    </>
  );
};
