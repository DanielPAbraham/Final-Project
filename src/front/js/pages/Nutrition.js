import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nutrition = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

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
      <div class="container">
        <h1>User XYZ's Nutrition Protocol</h1>
      </div>
      <br></br>
      <div class="container">
        <div class="row gx-5">
          <div class="col-4 border border-danger bg-light">
            <br></br>
            <ul>
              <li>
                Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Integer sed ligula id quam tristique fringilla ac eget risus.
              </li>
              <li>Vestibulum sed dolor sed velit imperdiet blandit.</li>
              <li>
                Vivamus lobortis ipsum quis augue pretium, non blandit lectus
                facilisis.
              </li>
            </ul>
          </div>
          <div class="col-2 border border-danger bg-light">
            <img
              src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
              class="img-fluid position-relative top-50 start-50 translate-middle"
            ></img>
          </div>
          <div class="col-2 border border-danger bg-light">
            <br></br>
            <ul>
              <li>
                Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
        <br></br>
        <div class="col-4 border border-danger bg-light">
          <p>Info for every Macro-Nutrient, examples, and common foods</p>
        </div>
        <br></br>
        <div class="col-5 border border-danger bg-light">
          <ul>
            <li>Etiam in eros dapibus, lacinia tellus nec, euismod mi.</li>
            <li>Vivamus congue nulla quis consectetur molestie.</li>
            <li>Duis blandit sem quis orci accumsan pellentesque.</li>
            <li>Ut ut risus sit amet nulla semper tempus.</li>
            <li>In pellentesque tortor a ultricies pulvinar.</li>
            <li>Donec feugiat tellus eu justo venenatis interdum.</li>
            <li>
              Nunc semper enim quis nibh posuere, non ultrices magna tincidunt.
            </li>
            <li>
              Sed lacinia felis sed nisl sagittis, eu ornare risus euismod.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Nutrition.propTypes = {
  match: PropTypes.object,
};
