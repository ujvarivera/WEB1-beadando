import { NavLink } from "react-router-dom";

const selectedStyle = {
  fontWeight: "bold",
  }

export default function Header() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <h1>Meals</h1>
      </NavLink>
        <NavLink to="/" exact activeStyle={selectedStyle}>Back to Home</NavLink>
        <NavLink to="/favourites" exact activeStyle={selectedStyle}>Favourites</NavLink>
    </div>
  );
}
