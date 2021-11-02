import Meal from "./Meal";
import { useContext } from "react";
import { Context } from "../context/FavouritesContext";

export default function Favourites() {
  const { favourites, reset } = useContext(Context);

  return (
    <div className="favourites">
      <h1 className="favourites-text">Your favourites:</h1>
      <button className="reset" onClick={reset}>
        Unlike all of my favourites
      </button>
      {favourites ? (
        favourites.map((meal) => (
          <Meal
            name={meal.strMeal}
            key={meal.idMeal}
            image={meal.strMealThumb}
            data={meal}
          />
        ))
      ) : (
        <h1> You don't have favourites yet. </h1>
      )}
    </div>
  );
}
