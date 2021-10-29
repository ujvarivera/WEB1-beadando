import React, { useState } from "react";
import Meal from "./Meal";
import Input from "./Input";
import useAxios from "../hooks/useAxios";
import Loaded from "./Loaded";
import HomePage from "./HomePage";

export default function SearchingMeals() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [foodName, setFoodName] = useState("");
  const [foodUrl, setFoodUrl] = useState("");

  const { data: foodData, loaded } = useAxios(foodUrl);

  const handleChange = (event) => {
    setFoodName(event.target.value);
  };

  const search = (url) => {
    if (foodName !== "") {
      setFoodUrl(url + foodName);
    } else {
      alert("You have to write in something!");
    }
    setFoodName("");
  };

  if (!loaded) {
    return <Loaded />;
  }

  const isMealSearched = () => {
    if (foodUrl === "") {
      return <HomePage />;
    }
  };

  return (
    <div className="home">
      <Input
        foodName={foodName}
        handleChange={handleChange}
        search={search}
        url={url}
      />
      {isMealSearched()}
      {foodData.meals ? (
        foodData.meals.map((meal) => (
          <Meal
            name={meal.strMeal}
            key={meal.idMeal}
            image={meal.strMealThumb}
            data={meal}
          />
        ))
      ) : (
        <h1> Couldn't find anything. Please write in something else! </h1>
      )}
    </div>
  );
}