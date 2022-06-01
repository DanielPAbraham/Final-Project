import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [user, setUser] = useState("");

  return (
    <div className="wrapper fadeInDown align-middle">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
            id="userIcon"
            alt="User Icon"
            style={{ height: "100px", width: "auto" }}
          />
        </div>
        <form>
          <input
            type="text"
            id="register"
            className="fadeIn second"
            name="register"
            placeholder="register"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="register"
            placeholder="password"
          />
          <input
            type="button"
            onClick={() => {
              if (actions.register(user)) props.history.push("/login");
            }}
            className="fadeIn fourth"
            value="Log In"
          />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  match: PropTypes.object,
};
