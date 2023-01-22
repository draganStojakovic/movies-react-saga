import { Switch, Route, Redirect } from "react-router-dom";
import { MoviesPage } from "./views/MoviesPage";

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
    </Switch>
  );
};

export default Router;
