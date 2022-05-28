import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { recipe } from "../component/recipeCard";

export const Nutrition = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <Usernav />
      <div className="bg2">
        <div className="container ">
          <div className="row gx-5">
            <div className="col border border-danger bg-light">Dashboard</div>
            <div className="col-1"></div>
            <div className="col border border-danger bg-light">Date/Week</div>
            <div className="col-8"></div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <h1>User XYZ's Nutrition Protocol</h1>
        </div>
        <div>
        <section>
      </section>
        </div>
        <br></br>
        <div className="container">
          <div className="row gx-5">
            <div className="col-4 border border-danger bg-light">
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
                <li>Vestibulum sed dolor sed velit imperdiet blandit.</li>
                <li>
                  Vivamus lobortis ipsum quis augue pretium, non blandit lectus
                  facilisis.
                </li>
              </ul>
            </div>
            <div className="col-2 border border-danger bg-light">
              <img
                src="https://cdn.icon-icons.com/icons2/1339/PNG/512/letterx_87521.png"
                className="img-fluid position-relative top-50 start-50 translate-middle"
              ></img>
            </div>
            <div className="col-2 border border-danger bg-light">
              <br></br>
              <ul>
                <li>
                  Donec vel arcu dictum, fermentum ipsum sed, pellentesque dui
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
          </div>
          <br></br>
          <div className="col-4 border border-danger bg-light">
            <p>Info for every Macro-Nutrient, examples, and common foods</p>
          </div>
          <br></br>
          <div className="col-5 border border-danger bg-light">
            <ul>
              <li>Etiam in eros dapibus, lacinia tellus nec, euismod mi.</li>
              <li>Vivamus congue nulla quis consectetur molestie.</li>
              <li>Duis blandit sem quis orci accumsan pellentesque.</li>
              <li>Ut ut risus sit amet nulla semper tempus.</li>
              <li>In pellentesque tortor a ultricies pulvinar.</li>
              <li>Donec feugiat tellus eu justo venenatis interdum.</li>
              <li>
                Nunc semper enim quis nibh posuere, non ultrices magna
                tincidunt.
              </li>
              <li>
                Sed lacinia felis sed nisl sagittis, eu ornare risus euismod.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Nutrition.propTypes = {
//   match: PropTypes.object,
// };
