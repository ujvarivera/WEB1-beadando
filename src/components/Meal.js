import { useContext } from "react";
import { Context } from "../context/FavouritesContext";

export default function Meal({ image, name, data }) {
  const { favourites, setFavourites } = useContext(Context);

  function like(data) {
    if (!favourites.includes(data)) {
      setFavourites([...favourites, data]);
      //localStorage.clear();
      //localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  }

  function unlike(data) {
    const filtered = favourites.filter((fav) => fav !== data);
    setFavourites(filtered);
    //localStorage.clear();
    //localStorage.setItem("favourites", JSON.stringify(favourites));
  }

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>
        <a href={data.strYoutube}>You can watch a video how to make it</a>
      </h2>
      {favourites.includes(data) ? (
        <button onClick={() => unlike(data)}>Unlike</button>
      ) : (
        <button onClick={() => like(data)}>Like</button>
      )}
    </div>
  );
}
