import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { WorkoutTable } from "../component/workoutTable.js";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  Dashboard.propTypes = {
    match: PropTypes.object,
  };

  return (
    <>
      <Usernav />
      <div className="fullscreen h-100 text-center mt-5 end-0">
        <div className="bg-transparent card">
          <div className="container">
            <br></br>
            <div className="row">
              <div className="col-1 border border-danger bg-light">
                Dashboard
              </div>
              <div className="col-4"></div>
              <div className="col-1 border border-danger bg-light">
                Date/Week
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="container card">
            <div className="row gx-5">
              <WorkoutTable />
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
                    Integer sed ligula id quam tristique fringilla ac eget
                    risus.
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
                    Integer sed ligula id quam tristique fringilla ac eget
                    risus.
                  </li>
                </ul>
                Dates by Week or Month
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
