import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { Bmi } from "../component/BmiCalculator";
import { NutrientTracker } from "../component/NutrientTracker";
import { ExerciseTracker } from "../component/ExerciseTracker";
import { WorkoutTable } from "../component/workoutTable";
import { Cal } from "../component/CalorieCalculator";

export const MyJourney = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  return (
    <>
      <Usernav />
      <div className="">
        {!store.user ? (
          <div className="text-center">
            <h3>
              <Link to="/login">
                <button
                  type="text"
                  className="btn btn-lg btn-outline-info my-5"
                >
                  Log In
                </button>
              </Link>
            </h3>
          </div>
        ) : store.user.journey == "Build Muscle" ? (
          <>
            <div className="text-center">
              <h3>{store.user.name}, your journey is: Building Muscle</h3>
              <button
                className="btn btn-lg btn-outline-warning"
                onClick={() => setShow(true)}
              >
                Set Your Journey
              </button>
            </div>
            <div>
              <div className="container">
                <div className="row">
                  <div className="border rounded my-3 py-3">
                    <h3>General info</h3>
                    <br></br>
                    <p className="text-center">
                      {" "}
                      Hello {store.user.name}, this is where you'll find all of
                      your information for your program! On this page you'll
                      have access to personalized advice to fit your goals. Are
                      you ready to get started?
                    </p>
                  </div>
                  <div className="border rounded my-3 py-3">
                    <h3>Nutrition</h3>
                    <br></br>
                    <p className="text-center">
                      {" "}
                      Nutrition is very important for optimal muscle recovery and growth. In order to ensure you are receiving enough calories to
                      promote muscle growth, we suggest eating just 300 calories over your maintainence (a Calorie Calculator is provided below).
                      keeping track of macro-nutrients is important to make sure your body is getting the essential nutrients necessary for
                      maintaining a healthy immune system, mind, and muscle growth. Your target protein count should be 0.7-1 gram of protein
                      per lb of bodyweight. This ensures you are able to recover from your workouts and promote muscle growth. Carbohydrates
                      provide energy and will make up the majority of your caloric needs. Healthy fats are also important, they may
                      not directly help you build muscle but they do help boost
                      your immune system and maintain healthy hormonal
                      functions. This is essential for muscle growth and general
                      good health.
                    </p>
                  </div>
                  <div className="border rounded my-3 py-3">
                    <h3>Exercise Program</h3>
                    <br></br>
                    <p className="text-center">
                      To build muscle optimally, it's best to utilize compound movements that target
                      several muscles at once. Your Workout Plan is designed with key lifts to help you space out your workouts
                      for optimal recovery and for targeting all muscle groups throughout the week. The Muscle Building
                      Program provided to you by Zenith Fitness consists of a 3 day split, which can be completed with a
                      Monday, Wendesday, Friday schedule. By Working out just 3 Days a week, you will be able to maximize your
                      strength gains and allow the body to recover and build muscle on your rest days. The key to buidling more
                      muscle is to practice progressive overload, this is when you progressively become more stronger and add a rep or more weight
                      to exercises you preform. We recommend adding 5lb to your working weight once you are able to complete all the sets for the
                      maximum reps required for an exercise.
                      {" "}
                    </p>
                  </div>
                  <div className="border rounded my-3 py-3">
                    <h4>BMI calculator</h4>
                    <div>
                      <Bmi />
                    </div>
                  </div>
                  <div className="border rounded my-3 py-3">
                    <h4>Calorie Calculator</h4>
                    <div>
                      <Cal />
                    </div>
                  </div>
                  {/* <div className="border rounded my-3 py-3">
                <h4>Exercise tracker</h4>
                <ExerciseTracker />
              </div> */}
                  <div className="border rounded my-3 py-3">
                    <h4>Nutrient tracker</h4>
                    <NutrientTracker />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <br></br>
              <br></br>
              <h3>{store.user.name}, your journey is: Weight Loss</h3>
              <button
                className="btn btn-lg btn-outline-warning"
                onClick={() => setShow(true)}
              >
                Set Your Journey
              </button>
              <br></br>
              <br></br>
            </div>
            <br></br>
            <div>
              Based on your journey, the following tools and information will
              help you achieve your goals:
              <div className="border rounded my-3 py-3">
                <h3 className="text-center">General info</h3>
                <br></br>
                <p className="text-center">
                  {" "}
                  Hello {store.user.name}, this is where you'll find all of your
                  information for your program! On this page you'll have access
                  to personalized advice to fit your goals. Are you ready to get
                  started?
                </p>
              </div>
              <div className="border rounded my-3 py-3">
                <h3 className="text-center">Nutrition</h3>
                <br></br>
                <p>
                  In order to lose weight, the single most important factor is a
                  calorie deficit. I cannot stress this enough. It's the first
                  law of thermodynamics; Energy can neither be created nor be
                  destroyed, it can only be transferred from one form to
                  another. This means that no <u>matter</u> what you will lose
                  weight if you burn more calories than you take in. The
                  difficulty comes from maintaining the dicipline to do so and
                  correctly evaluating how many calories you take in/expend.{" "}
                </p>
              </div>
              <div className="border rounded my-3 py-3">
                <h3 className="text-center">Exercise Program</h3>
                <br></br>
                <p className="text-center">
                  To build lose weight efficiently, the two types of exercise
                  you should focus on are; strength training and cardio. Cardio
                  will help boost you metabolism, keeping you healthy and
                  burning more calories. Strength training helps you build
                  muscle which allows you to burn more calories over time, in
                  turn making you lose more fat.{" "}
                </p>
              </div>
              <div className="border rounded my-3 py-3">
                <h4 className="text-center">BMI calculator</h4>
                <div className="text-center">
                  <Bmi />
                </div>
              </div>
              {/* <div className="border rounded my-3 py-3">
                <h4>Exercise tracker</h4>
                <ExerciseTracker />
              </div> */}
              <div className="border rounded my-3 py-3">
                <h4>Nutrient tracker</h4>
                <NutrientTracker />
              </div>
            </div>
          </>
        )}
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
            placeholder="Age"
            value={journey.age}
            onChange={(e) => setJourney({ ...journey, age: e.target.value })}
          />
          <select className="fadeIn second">
            <option value="-1">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
          <input
            type="text"
            id="weight"
            className="fadeIn third"
            name="weight"
            placeholder="Weight"
            value={journey.weight}
            onChange={(e) => setJourney({ ...journey, weight: e.target.value })}
          />
          <input
            type="text"
            id="height"
            className="fadeIn third"
            name="height"
            placeholder="Height"
            value={journey.height}
            onChange={(e) => setJourney({ ...journey, height: e.target.value })}
          />
          <select className="fadeIn second">
            <option value="-1">Select Path</option>
            <option value="1">Lose Weight/Fat</option>
            <option value="2">Build Muscle</option>
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
