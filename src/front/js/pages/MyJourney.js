import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";

export const MyJourney = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  return (
    <>
      <Usernav />
      <div className="bg2">
        <div className="text-center">
          <button
            className="btn btn-large btn-outline-primary"
            onClick={() => setShow(true)}
          >
            Set Your Journey
          </button>
        </div>
        <div>
          Journey sections:
          <div className="border rounded my-3 py-3">General info</div>
          <div className="border rounded my-3 py-3">Nutrition</div>
          <div className="border rounded my-3 py-3">Exercise program</div>
          <div className="border rounded my-3 py-3">Cardio tracker</div>
          <div className="border rounded my-3 py-3">Calorie tracker</div>
        </div>
      </div>
      <Modal show={show} />
    </>
  );
};

MyJourney.propTypes = {
  match: PropTypes.object,
};

const Modal = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [journey, setJourney] = useState({
    age: 0,
    gender: "",
    weight: 0,
    height: 0,
    path: "",
  });

  return (
    <div
      className="wrapper fadeInDown modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: props.show ? "flex" : "none" }}
    >
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
            id="userIcon"
            alt="User Icon"
          />
        </div>
        <form>
          <input
            type="number"
            id="age"
            className="fadeIn second"
            name="age"
            placeholder="age"
            value={journey.age}
            onChange={(e) => setJourney({ ...journey, age: e.target.value })}
          />
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <input
            type="number"
            id="weight"
            className="fadeIn third"
            name="weight"
            placeholder="weight"
            value={journey.weight}
            onChange={(e) => setJourney({ ...journey, weight: e.target.value })}
          />
          <input
            type="number"
            id="height"
            className="fadeIn third"
            name="height"
            placeholder="height"
            value={journey.height}
            onChange={(e) => setJourney({ ...journey, height: e.target.value })}
          />
          <input
            type="button"
            onClick={() => {
              if (actions.addJourney(journey)) props.history.push("/myjourney");
            }}
            className="fadeIn fourth"
            value="Start Journey"
          />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Reset
          </a>
        </div>
      </div>
    </div>
  );
};
