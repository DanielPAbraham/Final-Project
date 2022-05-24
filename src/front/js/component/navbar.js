import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = React.useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nav
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <Link to="/about">
                <button class="dropdown-item">About Us</button>
              </Link>
            </li>
            <li>
              <Link to="/Dashboard">
                <button class="dropdown-item">Dashboard</button>
              </Link>
            </li>
            <li>
              <Link to="/Profile">
                <button class="dropdown-item">My Profile</button>
              </Link>
            </li>
            <li>
              <Link to="/Nutrition">
                <button class="dropdown-item">My Nutrition</button>
              </Link>
            </li>
            <li>
              <Link to="/Recipes">
                <button class="dropdown-item">My Recipies</button>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Zenith Fitness</span>
        </Link>
        {store.user ? (
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary">Dashboard</button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            <Link to="/login">
              <button className="btn btn-primary mx-2">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary mx-2">Register</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
