import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SearchBar = ({ data }) => {
  const { store, actions } = useContext(Context);
  const [ingredient, setIngredient] = useState("");
  const [searchBy, setSearchBy] = useState("nutrients");
  const [carbs, setCarbs] = useState("");
  const [proteins, setProteins] = useState("");

  return (
    <div className="searchBar container">
      <h3>Search recipes by:</h3>
      <input
        type="button"
        className="btn btn-lg btn-outline-info"
        value="Ingredients"
        onClick={() => setSearchBy("ingredients")}
      />
      <input
        type="button"
        className="btn btn-lg btn-outline-info"
        value="Nutrients"
        onClick={() => setSearchBy("nutrients")}
      />
      {searchBy == "ingredients" ? (
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyDown={(e) =>
            e.keyCode == 13 && actions.getRecipeData(ingredient)
          }
        />
      ) : (
        <div>
          <h5>Select nutrients</h5>
          <div className="d-flex mx-5">
            <div className="mb-3">
              <label className="">Maximum carbs in grams</label>
              <input
                type="text"
                className=""
                value={carbs}
                style={{
                  width: "50px",
                  height: "40px",
                  padding: "15px 10px",
                }}
                onChange={(e) => setCarbs(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="">Minimum proteins in grams</label>
              <input
                type="text"
                className=""
                value={proteins}
                style={{ width: "50px", height: "40px", padding: "10px 10px" }}
                onChange={(e) => setProteins(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="">Minimum fiber in grams</label>
              <input
                type="text"
                className=""
                style={{ width: "50px", height: "40px", padding: "15px 10px" }}
              />
            </div>
            <div className="mb-3">
              <label className="">Minimum calories in grams</label>
              <input
                type="text"
                className=""
                style={{ width: "50px", height: "40px", padding: "15px 10px" }}
              />
            </div>
            <div className="mb-3">
              <label className="">Maximum calories in grams</label>
              <input
                type="text"
                className=""
                style={{ width: "50px", height: "40px", padding: "15px 10px" }}
              />
            </div>
          </div>
          <input
            type="button"
            className="btn btn-lg btn-outline-info"
            value="Find recipes"
            onClick={() => actions.findByNutrients(carbs, proteins)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
