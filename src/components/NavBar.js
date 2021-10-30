import { NavLink } from "react-router-dom";
import Row from "../styles/Row";

export default function Header() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <h1>Meals</h1>
      </NavLink>
      <Row>
        <NavLink to="/">Back to Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </Row>
    </div>
  );
}
