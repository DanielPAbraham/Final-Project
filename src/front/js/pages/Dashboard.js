import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  Dashboard.propTypes = {
    match: PropTypes.object,
  };

  useEffect(() => {
    actions.getPrivateData().then((payload) => {
      console.log(payload)
    })
  }, [])

  return (
    <div className="jumbotron">
      <h1 className="display-4">Zenith Fitness</h1>
      <div>

      </div>
    </div>
  );
};
