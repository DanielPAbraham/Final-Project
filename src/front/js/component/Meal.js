import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/Nutrition.css";

export const Meal = ({meal}) => {
    const { store, actions } = React.useContext(Context);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(()=> {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1&includeNutrition=false`
        )
        .then((response)=> response.json())
        .then((data)=> {
            setImageUrl(data.image)
        })
        .catch(()=>{
            console.log("error")
        })
    }, [meal.id])

    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}>Go to Recipe</a>
        </article>
    )
}
