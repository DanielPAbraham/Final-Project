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
      console.log(payload);
    });
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row gx-5">
          <div class="col border border-danger bg-light">Dashboard</div>
          <div class="col-1"></div>
          <div class="col border border-danger bg-light">Date/Week</div>
          <div class="col-8"></div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="container">
        <div class="row gx-5">
          <div class="col-4 border border-danger bg-light">
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
          <div class="col-1"></div>
          <div class="col-4 border border-danger bg-light">
            Nutrition
            <br></br>
            <ul>
              <li>
                Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Integer sed ligula id quam tristique fringilla ac eget risus.
              </li>
            </ul>
          </div>
          <div class="col-2 border border-danger bg-light">
            <img
              src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
              class="img-fluid"
            ></img>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="container">
        <div class="row gx-5">
          <div class="col-7 border border-danger bg-light">
            <br></br>
            <div class="container">
              <div class="row">
                <div class="col">Progression</div>
                <div class="col-3"></div>
                <div class="col border">Squat</div>
                <div class="col border">Bench</div>
                <div class="col border">Deadlift</div>
                <div class="col border">Chin Ups</div>
              </div>
            </div>
            <div class="col-7 border border-danger bg-light"> </div>
          </div>
          <div class="col-1"></div>
          <div class="col-4 border border-danger bg-light">
            Weight Tracking
            <br></br>
            <ul>
              <li>
                Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Integer sed ligula id quam tristique fringilla ac eget risus.
              </li>
            </ul>
            Dates by Week or Month
          </div>
        </div>
      </div>
    </div>
  );
};
