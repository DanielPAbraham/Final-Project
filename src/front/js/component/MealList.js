import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Meal } from "../component/Meal";
import "../../styles/Nutrition.css";

export const MealList = ({ mealData }) => {
  const { store, actions } = React.useContext(Context);
  const nutrients = mealData.nutrients;
  console.log(mealData);

  return (
    <div className="container ">
      <div className="row">
        <main>
          <div className="container ">
            <div className="row">
              <div className="col-1"></div>
              <div>
                <section className="nutrients cent">
                  <h1>Macros</h1>
                  <ul className="cent">
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
                  </ul>
                </section>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          <br></br>
          <div>
            <section className="meals col-12 cent">
              {mealData.meals.map((meal) => {
                return <Meal key={meal.id} meal={meal} />;
              })}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

MealList.propTypes = {};
