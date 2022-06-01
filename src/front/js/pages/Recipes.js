import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { RecipeCard } from "../component/recipeCard";
import { Form, Placeholder } from "react-bootstrap";
import SearchBar from "material-ui-search-bar";

export const Recipes = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [searchInput, setSearchInput] = useState();

  function SearchBar({ placeholder, data }) {

  }
  return (
    <>
      <Usernav />

      {/* <SearchBar
        value={this.state.value}
        onChange={(newValue) => this.setState({ value: newValue })}
        onRequestSearch={() => doSomethingWith(this.state.value)}
      /> */}

      {/* <div>
        {store.complex.map((item, i) => {
          return <RecipeCard key={i} title={item.title} sourceUrl={item.sourceUrl} image={item.image} />;
        })}
      </div> */}
    </>
  );
};

Recipes.propTypes = {
  match: PropTypes.object,
};
