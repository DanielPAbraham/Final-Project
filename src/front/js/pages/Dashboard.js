import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  Dashboard.propTypes = {
    match: PropTypes.object,
  };

  return (
    <>
      <Usernav />
      <div className="bg2">
        <div className="text-center">
          <Link to="/myjourney">
            <button className="btn btn-large btn-warning my-5">
              Your Journey
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="row gx-5">
            <div className="col border border-danger bg-light">Dashboard</div>
            <div className="col-1"></div>
            <div className="col border border-danger bg-light">Date/Week</div>
            <div className="col-8"></div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row gx-5">
            <div className="col-4 border border-danger bg-light">
              Up Coming: Workout A<br></br>
              <br></br>
              Squat: 3x5 205
              <br></br>
              Bench 3x5 165
              <br></br>
              Chin-Ups 3x5 35
              <br></br>
              Accessory of Choice YxZ XYZ
            </div>
            <div className="col-1"></div>
            <div className="col-4 border border-danger bg-light">
              Nutrition
              <br></br>
              <ul>
                <li>
                  Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Integer sed ligula id quam tristique fringilla ac eget risus.
                </li>
              </ul>
            </div>
            <div className="col-2 border border-danger bg-light">
              <img
                src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row gx-5">
            <div className="col-7 border border-danger bg-light">
              <br></br>
              <div className="container">
                <div className="row">
                  <div className="col">Progression</div>
                  <div className="col-3"></div>
                  <div className="col border">Squat</div>
                  <div className="col border">Bench</div>
                  <div className="col border">Deadlift</div>
                  <div className="col border">Chin Ups</div>
                </div>
              </div>
              <div className="col-7 border border-danger bg-light"> </div>
            </div>
            <div className="col-1"></div>
            <div className="col-4 border border-danger bg-light">
              Weight Tracking
              <br></br>
              <ul>
                <li>
                  Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Integer sed ligula id quam tristique fringilla ac eget risus.
                </li>
              </ul>
              Dates by Week or Month
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
