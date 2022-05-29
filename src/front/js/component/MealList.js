import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Meal } from "../component/Meal"
import "../../styles/Nutrition.css";

export const MealList = ({ mealData }) => {
    const { store, actions } = React.useContext(Context);
    const nutrients = mealData.nutrients;
    console.log(mealData);

    return (
        <main>
            <section className="nutrients">
                <h1>Macros</h1>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
                </ul>
            </section>

            <section className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </section>
        </main>
    )
}

MealList.propTypes = {

};