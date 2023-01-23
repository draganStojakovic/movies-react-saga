import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { movieService } from "../../services/movieService";
import { setAllMoviesAction } from "./slice";
import { setSingleMovieAction } from "./slice";

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

function* getSingleMovie({ payload }) {
  try {
    const response = yield call(movieService.show, payload);
    yield put(setSingleMovieAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getSingleMovieSagaWatcher() {
  yield takeEvery("movies/getSingleMovieAction", getSingleMovie);
}

function* submitNewMovie({ payload }) {
  try {
    yield call(movieService.add, payload.id, payload.data);
  } catch (err) {
    console.error(err);
  }
}

function* getSubmitMovieSagaWatcher() {
  yield takeEvery("movies/submitNewMovieAction", submitNewMovie);
}

function* deleteSingleMovie({ payload }) {
  try {
    yield call(movieService.destroy, payload);
  } catch (err) {
    console.error(err);
  }
}

function* getDeleteSingleMovieSagaWatcher() {
  yield takeEvery("movies/deleteSingleMovieAction", deleteSingleMovie);
}

function* editSingleMovie({ payload }) {
  try {
    console.log("saga", payload.id, payload.data);
    // yield call(movieService.update, payload.id, payload.data);
  } catch (err) {
    console.error(err);
  }
}

function* getEditSingleMovieSagaWatcher() {
  yield takeEvery("movies/editSingleMovieAction", editSingleMovie);
}

export default function* rootMoviesSaga() {
  yield all([
    fork(getMoviesSagaWatcher),
    fork(getSingleMovieSagaWatcher),
    fork(getSubmitMovieSagaWatcher),
    fork(getDeleteSingleMovieSagaWatcher),
    fork(getEditSingleMovieSagaWatcher),
  ]);
}
