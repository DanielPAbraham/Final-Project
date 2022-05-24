import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron">
      <h1 className="display-4">Contact Us</h1>
    </div>
  );
};

Contact.propTypes = {
  match: PropTypes.object,
};
