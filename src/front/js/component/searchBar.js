import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SearchBar = ({ data }) => {

  const [ingredient, setIngredient] = useState("");
  const { store, actions } = useContext(Context);

  return (
    <div className="searchBar">
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        onKeyDown={(e) => e.keyCode == 13 && actions.getRecipeData( ingredient )}
      />
    </div>
  );


}

export default SearchBar




