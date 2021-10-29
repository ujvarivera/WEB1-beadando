import SearchingMeals from "./components/SearchingMeals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SearchingMeals />
        </Route>
        <Route path="/favourites">
          <div>My favourites: </div>
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}
