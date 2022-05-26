import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Recipes = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div>
      <div class="container">
        <br></br>
        <div class="row gx-5 fs-3">
          <div class="col-2 border border-danger bg-light">Recipies</div>
          <div class="col-3"></div>
          <div class="col-3 border border-danger bg-light">Nutrition Goals</div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row gx-5">
          <div class="col-4 border border-danger bg-light">
            <div class="input-group bg-white">
              <span class="input-group-text" id="basic-addon1">
                🔎
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search For Recipies"
                aria-label="Search For Recipies"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <br></br>
            <div class="col-8 mx-auto d-block">
              <img
                src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
                class="img-fluid"
              ></img>
            </div>
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
              <li>
                Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Integer sed ligula id quam tristique fringilla ac eget risus.
              </li>
            </ul>
          </div>
          <div class="col-3 border border-danger bg-light">
            <img
              src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
              class="img-fluid position-relative top-50 start-50 translate-middle"
            ></img>
          </div>
        </div>
        <br></br>
        <div class="col-5 border border-danger bg-light">
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
  );
};

Recipes.propTypes = {
  match: PropTypes.object,
};
