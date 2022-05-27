import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";

export const Recipes = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <Usernav />
      <div>
        <div className="container">
          <br></br>
          <div className="row gx-5 fs-3">
            <div className="col-2 border border-danger bg-light">Recipies</div>
            <div className="col-3"></div>
            <div className="col-3 border border-danger bg-light">
              Nutrition Goals
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row gx-5">
            <div className="col-4 border border-danger bg-light">
              <div className="input-group bg-white">
                <span className="input-group-text" id="basic-addon1">
                  🔎
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search For Recipies"
                  aria-label="Search For Recipies"
                  aria-describedby="basic-addon1"
                ></input>
              </div>
              <br></br>
              <div className="col-8 mx-auto d-block">
                <img
                  src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
                  className="img-fluid"
                ></img>
              </div>
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
            <div className="col-3 border border-danger bg-light">
              <img
                src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
                className="img-fluid position-relative top-50 start-50 translate-middle"
              ></img>
            </div>
          </div>
          <br></br>
          <div className="col-5 border border-danger bg-light">
            <br></br>
            <ul>
              <li>
                Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Integer sed ligula id quam tristique fringilla ac eget risus.
              </li>
              <li>
                Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Integer sed ligula id quam tristique fringilla ac eget risus.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Recipes.propTypes = {
  match: PropTypes.object,
};
