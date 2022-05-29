import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { MealList } from "../component/MealList"
import "../../styles/Nutrition.css";

export const Nutrition = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value)
  };
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1&timeFrame=day&targetCalories=${calories}`
      )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      })
  };

  return (
    <>
      <Usernav />
      <section className="controls">
        <input type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange}></input>
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </>
  );
};

