import { Switch, Route, Redirect } from "react-router-dom";
import { MoviesPage } from "./views/MoviesPage";
import { SingleMoviePage } from "./views/SingleMoviePage";
import { SubmitMoviePage } from "./views/SubmitMoviePage";

const Router = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/movies" />;
        }}
      />
      <Route exact path="/movies">
        <MoviesPage />
      </Route>
      <Route exact path="/movies/:id">
        <SingleMoviePage />
      </Route>
      <Route path="/submit">
        <SubmitMoviePage />
      </Route>
    </Switch>
  );
};

export default Router;
