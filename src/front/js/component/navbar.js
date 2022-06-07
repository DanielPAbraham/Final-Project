import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = React.useContext(Context);

  return (
    <nav className="navbar  navcolor">
      <div className="container">
        <div className="col-3"></div>
        <Link to="/">
          <span className="navbar-brand embold mb-0 h1 justify-content-center fs-3">
            Zenith Fitness
          </span>
        </Link>
        {store.user ? (
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary">Dashboard</button>
            </Link>
          </div>
        ) : (
          <div className="col-3 ml-auto"></div>
        )}
      </div>
    </nav>
  );
};
