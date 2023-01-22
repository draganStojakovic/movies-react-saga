import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { movieService } from "../../services/movieService";
import { setAllMoviesAction } from "./slice";

function* getMovies() {
  try {
    const response = yield call(movieService.getAllMovies);
    yield put(setAllMoviesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getMoviesSagaWatcher() {
  yield takeEvery("movies/getAllMoviesAction", getMovies);
}

export default function* rootMoviesSaga() {
  yield all([fork(getMoviesSagaWatcher)]);
}
