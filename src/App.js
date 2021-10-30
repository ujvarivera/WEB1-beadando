import SearchingMeals from "./components/SearchingMeals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";
import FavouritesContext from "./context/FavouritesContext";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FavouritesContext>
            <SearchingMeals />
          </FavouritesContext>
        </Route>
        <Route path="/favourites">
          <FavouritesContext>
            <Favourites />
          </FavouritesContext>
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </ErrorBoundary>
  );
}
