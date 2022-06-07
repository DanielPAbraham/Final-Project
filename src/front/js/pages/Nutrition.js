import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { MealList } from "../component/MealList";
import "../../styles/Nutrition.css";

export const Nutrition = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [mealData, setMealData] = useState();
  const [calories, setCalories] = useState(2000);
  const [diet, setDiet] = useState("*");

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function onDietChange(e) {
    setDiet(e.target.name);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1&timeFrame=day&&targetCalories=${calories}&&diet=${diet}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
        console.log(diet);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <>
      <Usernav />
      <form onSubmit={getMealData}>
        <section className="controls">
          <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          ></input>
          <div className="dropdown col-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter recipes
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item">
                  Vegetarian{" "}
                  <input
                    name="vegetarian"
                    type="radio"
                    onChange={(e) => {
                      onDietChange(e);
                    }}
                  ></input>
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Vegan{" "}
                  <input
                    name="vegan"
                    type="radio"
                    onChange={(e) => {
                      onDietChange(e);
                    }}
                  ></input>
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Gluten Free{" "}
                  <input
                    name="glutenFree"
                    type="radio"
                    onChange={(e) => {
                      onDietChange(e);
                    }}
                  ></input>
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Dairy Free{" "}
                  <input
                    name="dairyFree"
                    type="radio"
                    onChange={(e) => {
                      onDietChange(e);
                    }}
                  ></input>
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Very Healthy{" "}
                  <input
                    name="veryHealthy"
                    type="radio"
                    onChange={(e) => {
                      onDietChange(e);
                    }}
                  ></input>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </form>
      <div>
        <div class="container">
          <div class="row">
            <button
              className="btn btn-lg btn-outline-info  mx-2 btn-info col-4 tc1 position-absolute top-50 start-50 translate-middle"
              onClick={getMealData}
            >
              Get Daily Meal Plan
            </button>
          </div>
        </div>
      </div>
      {mealData && <MealList mealData={mealData} />}
    </>
  );
};
