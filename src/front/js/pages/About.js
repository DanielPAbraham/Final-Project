import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";

export const About = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <Usernav />
      <div className>
        <br></br>
        <div className="container">
          <div className="row gx-5 fs-2">
            <div className="col-2 border border-danger bg-light">About Us</div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row gx-5">
            <div className="col-12 border border-danger bg-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              suscipit libero, vitae pretium dolor. Fusce a porttitor ligula.
              Phasellus rutrum ex a ex fringilla ornare. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Nam viverra sem et molestie suscipit. Fusce elementum
              diam sit amet facilisis congue. Morbi non orci sed tortor
              imperdiet iaculis et nec purus. Fusce vehicula nunc non odio
              tincidunt, et lacinia arcu vehicula. Suspendisse tincidunt
              lobortis fermentum. Etiam ipsum leo, consectetur at massa at,
              dignissim condimentum dui. Morbi aliquet elementum leo, et auctor
              enim fermentum non. Praesent faucibus nunc vitae odio facilisis
              imperdiet. Ut vel rhoncus erat. Phasellus bibendum orci eget dolor
              lacinia, nec pharetra elit tempus. Phasellus tempor eu urna a
              sollicitudin. Suspendisse in sagittis sem.
            </div>
          </div>
          <br></br>
          <div className="col-12 border border-danger bg-light">
            <p>What we stand for</p>
            <ul>
              <li>Curabitur aliquam sapien vitae bibendum gravida.</li>
              <li>Mauris mollis sapien id risus euismod congue.</li>
              <li>Cras in arcu id risus consequat sodales rhoncus et enim.</li>
              <li>Pellentesque feugiat diam vel nisi porta lacinia.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {
  match: PropTypes.object,
};
