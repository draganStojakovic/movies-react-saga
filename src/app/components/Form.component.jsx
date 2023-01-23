export const Form = ({
  formTitle,
  btnText,
  movie,
  onChange,
  handleSubmit,
  resetForm,
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
            checked={movie.genre === "Action"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
          <label htmlFor="Comedy">Comedy:</label>
          <input
            id="Comedy"
            type="checkbox"
            name="genres"
            value="Comedy"
            checked={movie.genre === "Comedy"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
          <label htmlFor="Drama">Drama:</label>
          <input
            id="Drama"
            type="checkbox"
            name="genres"
            value="Drama"
            checked={movie.genre === "Drama"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
          <label htmlFor="Horror">Horror:</label>
          <input
            id="Horror"
            type="checkbox"
            name="genres"
            value="Horror"
            checked={movie.genre === "Horror"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
          <label htmlFor="Western">Western:</label>
          <input
            id="Western"
            type="checkbox"
            name="genres"
            value="Western"
            checked={movie.genre === "Western"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
          <label htmlFor="Thriller">Thriller:</label>
          <input
            id="Thriller"
            type="checkbox"
            name="genres"
            value="Thriller"
            checked={movie.genre === "Thriller"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
          <label htmlFor="Animation">Animation:</label>
          <input
            id="Animation"
            type="checkbox"
            name="genres"
            value="Animation"
            checked={movie.genre === "Animation"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
          <label htmlFor="Documentary">Documentary:</label>
          <input
            id="Documentary"
            type="checkbox"
            name="genres"
            value="Documentary"
            checked={movie.genre === "Documentary"}
            onChange={(e) =>
              onChange({ ...movie, genres: [...movie.genres, e.target.value] })
            }
          />
          <br />
        </fieldset>
        <br />
        <br />
        <button type="submit">{btnText}</button>
      </form>
      <button onClick={() => resetForm(onChange)}>Reset Form</button>
    </>
  );
};
