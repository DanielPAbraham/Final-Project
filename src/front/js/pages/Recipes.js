import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { RecipeCard } from "../component/recipeCard";
import SearchBar from "../component/searchBar";


export const Recipes = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [searchInput, setSearchInput] = useState();

  return (
    <>
      <Usernav />
      <SearchBar />
      <br></br>
      <div className="row">
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
