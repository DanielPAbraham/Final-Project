import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import logoImageurl from "../../img/logo.jpg";
import Rene from "../../img/Rene.jpg";
import Daniel from "../../img/Daniel.jpg";

export const About = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <Usernav />
      <div className="text-center">
        <div className="">
          <div className="">
            <br></br>
            <br></br>
            <div className="container">
              <div className="row gx-5 fs-2">
                <div className="col"></div>
                <div className="col-2 border position-relative bg-light title">
                  About Us
                </div>
                <div className="col"></div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="container">
              <div className="row gx-5">
                <div className="col"></div>
                <div className="col-11 border  bg-light">
                  Zenith Fitness was developed by a pair of lifelong friends
                  named Daniel Abraham Perez and Rene Gonzalo Infante. We
                  created this site to help people live healthier, longer, and
                  happier lives. Both of us have experience with body
                  transformations and general fitness. Daniel has worked out
                  consistently for many years in order to gain muscle while Rene
                  has experience with weight loss. We hope to help guide people
                  on their health journey, wherever that takes them.
                </div>
                <div className="col"></div>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div class="card cardwidth">
                    <img
                      src={Rene}
                      class="card-img-top imgsize2"
                      alt="..."
                    ></img>
                    <div class="card-body">
                      <h4 class="card-text">Rene Gonzalo Infante</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <img src={logoImageurl} className=" "></img>
                </div>
                <div className="col">
                  <div class="card cardwidth">
                    <img
                      src={Daniel}
                      class="card-img-top imgsize2"
                      alt="..."
                    ></img>
                    <div class="card-body">
                      <h4 class="card-text">Daniel Abraham Perez</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {
  match: PropTypes.object,
};
