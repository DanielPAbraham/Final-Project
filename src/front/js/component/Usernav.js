import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Usernav = () => {
  const { store, actions } = React.useContext(Context);

  return (
    <nav className="navbar  navcolor">
      <div className="container">
        <div className="dropdown col-3">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <Link to="/myjourney">
                <button className="dropdown-item">My Journey</button>
              </Link>
            </li>
            {/* <li>
              <Link to="/Dashboard">
                <button className="dropdown-item">Dashboard</button>
              </Link>
            </li> */}
            <li>
              <Link to="/Profile">
                <button className="dropdown-item">My Profile</button>
              </Link>
            </li>
            <li>
              <Link to="/ExercisePlan">
                <button className="dropdown-item">Workout Plan</button>
              </Link>
            </li>
            <li>
              <Link to="/Nutrition">
                <button className="dropdown-item">Meal Planner</button>
              </Link>
            </li>
            <li>
              <Link to="/Recipes">
                <button className="dropdown-item">Recipe Search</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="dropdown-item">About Us</button>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <span className="navbar-brand mb-0 h1 justify-content-center fs-3">
            Zenith Fitness
          </span>
        </Link>
        <div className="col-3"></div>
      </div>
    </nav>
  );
};
