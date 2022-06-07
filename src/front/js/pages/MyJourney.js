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
              <div class="container">
                <div class="row">
                  <div className="border rounded my-3 py-3">
                    <strong>General info</strong>
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
                    <strong>Nutrition</strong>
                    <br></br>
                    <p className="text-center">
                      {" "}
                      The key to building muscle is to eat more calories than you burn on a daily basis.
                      Typically, a 300 calorie surplus above your maintenece calories is all you'll need to help
                      promote muscle gains. That being said, it is also important to include a lot of protein in your diet;
                      0.7-1 grams per lb of bodyweight is all you need to help maximize muscle growth.
                      Carbohydrates are important
                      for providing the body with the energy needed to power
                      through workouts, and will make up the majority of your
                      caloric intake. Healthy fats are also important, they may
                      not directly help you build muscle but they do help boost
                      your immune system and maintain healthy hormonal
                      functions. This is essential for mouscle growth and general health.
                    </p>
                  </div>
                  <div className="border rounded my-3 py-3">
                    <strong>Exercise Program</strong>
                    <br></br>
                    <p className="text-center">
                      {" "}
                      The most effective way to build muscle is to progressively become stronger on key lifts. This is accomplished through
                      Progressive Overload. Progressive Overload is the backbone of your
                      workout plan. This is when you progressively add weight to any exercise you do overtime. Once you are
                      able to complete an exercise for the sets and reps that it calls for with a certain weight, it is then time to add more weight
                      and continue your routine until its then time, again, to add more weight. With this approach to becoming strongewr, you are
                      enabling your body to become stronger and pack on more muscle overtime. A good means of progression is to add 5lb to your lift
                      once you are able to complete all the required sets and reps. By adding just 5lb of weight to your lifts overtime, you
                      are ensuring that you have less chance for injury and allow your body to adapt to the heavier weight.
                      Compound movements workout multiple muscles at once and allow you to lift more weight and progress
                      faster than isolation exrcises that target single muscles. These compound movments will be the key lifts of your 3 day split workout routine.
                      Working out 3 days a week, focusing on becoming stronger, and having ample rest allows your body to recover from workouts
                      and build up muscle more efficiently.
                      {/* To build muscle efficiently, it is better to work out
                      multiple muscles at once. While bicept curls and the like
                      should have their place in your routine, they should not
                      be it's backbone. Exercises that work out multiple muscle
                      groups are not only a more efficient use of your time,
                      they also allow you to lift more weight at a time which is
                      essential to building muscle. A great example would be the
                      bench press (there's a reason why it's a staple in many
                      athlete's regimes), the bench press helps strengthen most
                      of your upper body at once, including the tricept, bicept,
                      and pectorals. A common issue that arises when trying to
                      build muscle is stagnation. To avoid plateauing it is
                      imperitive that you progressively increase the weight that
                      you work out with. Another commonly neglected but very
                      important practice, is giving your muscles time to rest.
                      Without rest, you sharply increase your chance of injury
                      and prevent muscle growth.{" "} */}
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
                    <Cal />
                  </div>
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
              <h3>{store.user.name}, your journey is: Weight Loss</h3>
              <button
                className="btn btn-lg btn-outline-warning"
                onClick={() => setShow(true)}
              >
                Set Your Journey
              </button>
            </div>
            <div>
              Based on your journey, the following tools and information will
              help you achieve your goals:
              <div className="border rounded my-3 py-3">
                <strong>General info</strong>
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
                <strong>Nutrition</strong>
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
                <strong>Exercise Program</strong>
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
                <h4>BMI calculator</h4>
                <div>
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
