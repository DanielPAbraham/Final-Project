import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  About.propTypes = {
    match: PropTypes.object,
  };

  return (
    <div>
      <p>This is the about us page</p>
    </div>
  );
};
