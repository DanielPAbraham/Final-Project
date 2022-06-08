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
      <div className="container">
        <br></br>
        <br></br>
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <h3 className="user-name">Your Profile:</h3>
                    <div className="user-avatar">
                      <img
                        src="https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg"
                        alt="Maxwell Admin"
                      />
                    </div>
                  </div>
                  <div className="about">
                    <h4>Your Journey:</h4>
                    <h6>Building Muscle</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="mb-2 text-primary">Personal Details:</h4>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="container">
                      <div class="row">
                        <div className="col">
                          <label for="fullName">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Enter full name"
                          />
                        </div>
                        <div className="col">
                          <label for="fullName">Birthday</label>
                          <input
                            type="date"
                            className="form-control"
                            id="fullName"
                            placeholder="Birthday"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <div className="">
                        <div className="form-group">
                          <label for="fullName">Current Weight</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Enter Weight"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div className="">
                        <div className="form-group">
                          <label for="fullName">Current Height</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Current Height"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div className="row gutters">
                        <div className="">
                          <div className="text-right gx-5">
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-secondary "
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-primary "
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <h5>About Me:</h5>
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="7"
                        cols="70"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam tincidunt mi sed placerat dignissim. Donec rhoncus
                        sapien sit amet ultrices commodo. Curabitur quis justo
                        non metus pretium consequat eu nec nisi. Nulla in
                        commodo ligula. Sed consequat bibendum tortor et mollis.
                        Nullam sollicitudin risus in quam tempus suscipit.
                        Phasellus eget facilisis leo. Phasellus eget eros
                        aliquam, porttitor quam in, mattis lectus. Quisque eu
                        erat fermentum elit rutrum convallis quis quis lectus.
                        Donec finibus est ut congue bibendum.
                      </textarea>
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

Profile.propTypes = {
  match: PropTypes.object,
};
