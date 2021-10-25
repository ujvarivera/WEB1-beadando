import axios from "axios";
import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import loading from "../assets/loading.gif";
import SearchingMeals from "./SearchingMeals";

export default function HomePage() {
  const [mealData, setMealData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const char = "b";
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + char;

  useEffect(() => {
    const download = async () => {
      const { data } = await axios.get(URL);
      setMealData(data.meals);
      setLoaded(true);
    };

    download();
  }, [URL]);

  if (!loaded) {
    return <img src={loading} alt="loading..." />;
  }

  return (
    <div className="Home">
      {mealData.map((meal) => (
        <Meal name={meal.strMeal} key={meal.idMeal} image={meal.strMealThumb} />
      ))}
    </div>
  );
}
