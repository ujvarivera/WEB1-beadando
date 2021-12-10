import SearchingMeals from "./components/SearchingMeals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";
import FavouritesContext from "./context/FavouritesContext";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <FavouritesContext>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SearchingMeals />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </FavouritesContext>
    </ErrorBoundary>
  );
}
