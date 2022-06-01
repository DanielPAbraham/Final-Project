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
      <div className="">
        <div className="text-center">
          <h3>
            {store.user.name}, your journey is: {store.user.journey}
          </h3>
          <button
            className="btn btn-large btn-outline-primary"
            onClick={() => setShow(true)}
          >
            Set Your Journey
          </button>
        </div>
        <div>
          Based on your journey, the following information will help you achieve
          your goals:
          <div className="border rounded my-3 py-3">General info</div>
          <div className="border rounded my-3 py-3">Nutrition</div>
          <div className="border rounded my-3 py-3">Exercise program</div>
          <div className="border rounded my-3 py-3">Cardio tracker</div>
          <div className="border rounded my-3 py-3">Calorie tracker</div>
        </div>
      </div>
      <Modal show={show} close={() => setShow(false)} />
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
    age: "",
    gender: "",
    weight: "",
    height: "",
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
            style={{ height: "100px", width: "auto" }}
          />
        </div>
        <form>
          <input
            type="text"
            id="age"
            className="fadeIn second"
            name="age"
            placeholder="age"
            value={journey.age}
            onChange={(e) => setJourney({ ...journey, age: e.target.value })}
          />
          <select className="fadeIn second">
            <option value="-1">select gender</option>
            <option value="1">male</option>
            <option value="2">female</option>
          </select>
          <input
            type="text"
            id="weight"
            className="fadeIn third"
            name="weight"
            placeholder="weight"
            value={journey.weight}
            onChange={(e) => setJourney({ ...journey, weight: e.target.value })}
          />
          <input
            type="text"
            id="height"
            className="fadeIn third"
            name="height"
            placeholder="height"
            value={journey.height}
            onChange={(e) => setJourney({ ...journey, height: e.target.value })}
          />
          <select className="fadeIn second">
            <option value="-1">select path</option>
            <option value="1">lose weight/fat</option>
            <option value="2">increase muscle mass</option>
          </select>
          <input
            type="button"
            onClick={() => {
              if (actions.addJourney(journey)) props.history.push("/myjourney");
            }}
            className="fadeIn fourth"
            value="Set Journey"
          />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#" onClick={props.close}>
            Close
          </a>
        </div>
      </div>
    </div>
  );
};
