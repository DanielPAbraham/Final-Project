import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { RecipeCard } from "../component/recipeCard";
import { Form, Placeholder } from "react-bootstrap";
import AutoComplete from "../component/autoComplete";
import { autoCompleteData } from "../component/data";


export const Recipes = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [searchInput, setSearchInput] = useState();

  // useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1&&titleMatch=`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImageUrl(data.image)

  //     })
  //     .catch(() => {
  //       console.log("error")
  //     })
  //   console.log(data)
  // }, [])

  return (
    <>
      <Usernav />
      <AutoComplete />

      <div>
        {store.complex.map((item, i) => {
          return <RecipeCard key={i} title={item.title} sourceUrl={item.sourceUrl} image={item.image} />;
        })}
      </div>
    </>
  );
};

Recipes.propTypes = {
  match: PropTypes.object,
};
