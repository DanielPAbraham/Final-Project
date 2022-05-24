import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron">
      <h1 className="display-4">Zenith Fitness</h1>
      <div>
        Dashboard
      </div>
      <div>
        first and last day of the week (should be next to "Dashboard")
      </div>
      <div>
        Upcoming workout Box with list of exercises for said workout
      </div>
      <div>
        User-specific nutrition w/ Pie graph (Next to Upcoming Workout)
      </div>
      <div>
        Exercise Progression Chart
      </div>
      <div>
        User's Weight Tracking chart (next to Exercise progression chart)
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  match: PropTypes.object,
};
