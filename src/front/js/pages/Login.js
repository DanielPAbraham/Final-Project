import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [userEmail, setUserEmail] = useState("");

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
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
          />
          <input
            type="button"
            onClick={() => {
              if (actions.login(userEmail)) props.history.push("/dashboard");
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

Login.propTypes = {
  match: PropTypes.object,
};
