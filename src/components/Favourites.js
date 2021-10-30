import Meal from "./Meal";
import { useContext } from "react";
import { Context } from "../context/FavouritesContext";

export default function Favourites() {
  const { favourites } = useContext(Context);
  //const favourites = JSON.parse(localStorage.getItem("favourites"));

  return (
    <div>
      <h1>Your favourites:</h1>
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
