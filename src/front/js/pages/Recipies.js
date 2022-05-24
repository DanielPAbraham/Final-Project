import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Recipies = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  Recipies.propTypes = {
    match: PropTypes.object,
  };
