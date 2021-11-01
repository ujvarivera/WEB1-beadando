import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <h1>Meals</h1>
      </NavLink>
        <NavLink to="/">Back to Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
    </div>
  );
}
