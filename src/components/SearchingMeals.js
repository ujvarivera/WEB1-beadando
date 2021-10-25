import axios from "axios";
import React, { useState, useEffect } from "react";
import Meal from "./Meal";

export default function SearchingMeals() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [foodUrl, setFoodUrl] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const download = async () => {
      if (foodUrl !== "") {
        const { data } = await axios.get(foodUrl);
        setFoodData(data.meals);
      }
    };
    download();
    console.log(foodUrl);
  }, [foodUrl]);

  const handleChange = (event) => {
    const newFood = event.target.value;
    setFoodName(newFood);
  };

  const search = (url) => {
    if (foodName !== "") {
      setFoodUrl(url + foodName);
    } else {
      alert("You have to write in something!");
    }
    setFoodName("");
  };

  return (
    <div>
      <h1> Search for a meal: </h1>
      <input value={foodName} onChange={handleChange} />
      <button onClick={() => search(url)}>SEARCH</button>
      {foodData ? (
        foodData.map((meal) => (
          <Meal
            name={meal.strMeal}
            key={meal.idMeal}
            image={meal.strMealThumb}
          />
        ))
      ) : (
        <h2>No meals found! Please try something else.</h2>
      )}
    </div>
  );
}

