import { NavLink } from "react-router-dom";
import Navigation from "../styles/Navigation";
import Row from "../styles/Row";

export default function Header() {
  return (
    <Navigation>
      <NavLink to="/">
        <h1>Meals</h1>
      </NavLink>
      <Row>
        <NavLink to="/">Back to Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </Row>
    </Navigation>
  );
}
