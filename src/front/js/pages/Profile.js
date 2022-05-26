import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div class="container">
      <div class="container">
        <h1>My Profile</h1>
      </div>
      <br></br>
      <div class="row gx-5">
        <div class="col-3 ">
          <img
            src="https://i1.sndcdn.com/avatars-1izkebM3cqeF0hcO-uo8bjQ-t500x500.jpg"
            class="img-fluid rounded-circle position-relative top-50 start-50 translate-middle"
          ></img>
        </div>
        <div class="col-4 border border-danger bg-light fs-3">
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

        <div class=" col-4 border border-danger bg-light">
          <br></br>
          <p class="fs-2">About me:</p>
          <div class="form-floating ">
            <textarea
              class="form-control aboutme"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  match: PropTypes.object,
};
