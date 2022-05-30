import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Usernav } from "../component/Usernav";

export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <Usernav />
      <div className="bg2 fullscreen h-100 text-center mt-5 end-0">
        <div className="bg-transparent card">
          <div className="container">
            <div className="container">
              <h1>My Profile</h1>
            </div>
            <br></br>
            <div className="row gx-5">
              <div className="col-3 ">
                <img
                  src="https://i1.sndcdn.com/avatars-1izkebM3cqeF0hcO-uo8bjQ-t500x500.jpg"
                  className="img-fluid rounded-circle position-relative top-50 start-50 translate-middle"
                ></img>
              </div>
              <div className="col-4 border border-danger bg-light fs-3">
                <br></br>

                <ul>
                  <li>First and Last Name</li>
                  <li>Gender</li>
                  <li>Birthday</li>
                  <li>Units of Measurement</li>
                  <li>Height</li>
                  <li>Weight</li>
                  <li>Email</li>
                </ul>
              </div>

              <div className=" col-4 border border-danger bg-light">
                <br></br>
                <p className="fs-2">About me:</p>
                <div className="form-floating ">
                  <textarea
                    className="form-control aboutme"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.propTypes = {
  match: PropTypes.object,
};
