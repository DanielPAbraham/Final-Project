import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cal = () => {
    const [cal, setCal] = useState();
    const [info, setInfo] = useState();
    // const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const handleCal = () => {
        //   [Number(weight) * 15
        let val = (
            (Number(weight)) * 15
        ).toFixed(1);

        setCal(val);
        setInfo("Your Maintenance Calories (Add 300 to Promote Muscle Growth)")
    };

    return (
        <div>
            <input
                type="text"
                className="w-25"
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Your weight in lbs"
            />
            <button className="btn btn-lg btn-outline-info" onClick={handleCal}>
                Calculate
            </button>
            <h1>{cal}</h1>
            <h2>{info}</h2>
        </div>
    );
};
