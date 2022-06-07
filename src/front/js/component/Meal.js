import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/Nutrition.css";
import { Card } from "react-bootstrap";

export const Meal = ({ meal }) => {
  const { store, actions } = React.useContext(Context);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <div className="card cardwith">
      <img src={imageUrl} className="card-img-top" alt="recipe"></img>
      <div className="card-body">
        <h5 className="card-title">{meal.title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Preparation time: {meal.readyInMinutes} minutes
        </li>
        <li className="list-group-item">Number of servings: {meal.servings}</li>
      </ul>
      <div className="card-body">
        <a href={meal.sourceUrl} className="card-link">
          Go to Recipe
        </a>
      </div>
    </div>
  );
};

// <div className="card" style="width: 18rem;">
//     <img className="card-img-top" src={imageUrl} alt="recipe"></img>
//         <div className="card-body">
//             <h5 className="card-title">{meal.title}</h5>
//             <p className="card-text">Preparation time: {meal.readyInMinutes} minutes</p>
//             <p className="card-text">Number of servings: {meal.servings}</p>
//             <a href={meal.sourceUrl} className="btn btn-primary">Go to Recipe</a>
//         </div>
// </div>
