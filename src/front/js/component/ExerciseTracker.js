import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ExerciseTracker = (props) => {
  const { store, actions } = useContext(Context);
  const [dataArray, setDataArray] = useState([]);
  const [entry, setEntry] = useState({
    date: "",
    proteins: 0,
    carbs: 0,
    fats: 0,
    calories: 0,
    progress: "",
  });

  const makeEntry = () => {
    entry.calories = entry.proteins * 4 + entry.carbs * 4 + entry.fats * 9;
    let message = "";
    if (entry.proteins < 100) message += "not enough proteins; ";
    if (entry.carbs < 150) message += "not enough carbs; ";
    if (entry.fats > 100) message += "too much fats; ";
    if (message == "") message = "On track";
    entry.progress = message;
    console.log(entry);
    setDataArray([...dataArray, entry]);
    setEntry({
      date: "",
      proteins: 0,
      carbs: 0,
      fats: 0,
      calories: 0,
      progress: "",
    });
  };

  return (
    <div>
      <div className="row">
        <input
          type="text"
          name="date"
          className="col"
          value={entry.date}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Date"
        />
        <input
          type="text"
          name="proteins"
          className="col"
          value={entry.proteins ? entry.proteins : "Proteins in grams"}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Proteins in grams"
        />
        <input
          type="text"
          name="carbs"
          className="col"
          value={entry.carbs > 0 ? entry.carbs : "Carbs in grams"}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Carbs in grams"
        />
        <input
          type="text"
          name="fats"
          className="col"
          value={entry.fats > 0 ? entry.fats : "Fats in grams"}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Fats in grams"
        />
        <div className="col">
          <button
            className="btn btn-lg btn-outline-info"
            onClick={() => makeEntry()}
          >
            Enter
          </button>
        </div>
      </div>
      <table className="table table-hover">
        <thead className="">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Protein (grams)</th>
            <th scope="col">Carbs (grams)</th>
            <th scope="col">Fats (grams)</th>
            <th scope="col">Calories</th>
            <th scope="col">Progress</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((elm, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{elm.date}</th>
                <td>{elm.proteins}</td>
                <td>{elm.carbs}</td>
                <td>{elm.fats}</td>
                <td>{elm.calories}</td>
                <td
                  className={
                    elm.progress != "On track"
                      ? "text-danger border border-danger border-3"
                      : "text-success"
                  }
                >
                  {elm.progress}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

ExerciseTracker.propTypes = {
  match: PropTypes.object,
};
