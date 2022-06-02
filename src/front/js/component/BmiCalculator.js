import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Bmi = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div>
      <input
        type="text"
        className="w-25"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm"
      />
      <input
        type="text"
        className="w-25"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      />
      <button className="btn btn-lg btn-outline-success" onClick={handleBmi}>
        Calculate
      </button>
      <h1>{bmi}</h1>
      <h2>{info}</h2>
    </div>
  );
};
