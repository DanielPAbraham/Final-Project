import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = React.useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">fITmE</span>
        </Link>
        {store.user ? (
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary">Dashboard</button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary mx-2">Login</button>
            </Link>
            <Link to="/demo">
              <button className="btn btn-primary mx-2">Register</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
