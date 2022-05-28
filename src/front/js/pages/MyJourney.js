import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";

export const MyJourney = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <Usernav />
      <div className="bg2">
        <button className="btn btn-large btn-outline-primary">
          Set Your Journey
        </button>
        <div>
          Journey sections:
          <div className="border rounded my-3 py-3">General info</div>
          <div className="border rounded my-3 py-3">Nutrition</div>
          <div className="border rounded my-3 py-3">Exercise program</div>
          <div className="border rounded my-3 py-3">Cardio tracker</div>
          <div className="border rounded my-3 py-3">Calorie tracker</div>
        </div>
      </div>
    </>
  );
};

MyJourney.propTypes = {
  match: PropTypes.object,
};
