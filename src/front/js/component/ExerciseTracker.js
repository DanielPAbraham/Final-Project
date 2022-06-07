import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ExerciseTracker = (props) => {
  const { store, actions } = useContext(Context);
  const [dataArray, setDataArray] = useState([]);
  const [entry, setEntry] = useState({
    date: "",
    muscleGroup: "",
    totalWeight: "",
    numberSets: "",
    numberReps: "",
    progress: "",
  });

  const makeEntry = () => {
    let totalReps = parseInt(entry.numberReps) * parseInt(entry.numberSets);
    let loadPerRep = parseInt(entry.totalWeight) / parseInt(totalReps);
    let message = `Your load-per-rep was ${loadPerRep}`;
    entry.progress = message;
    console.log(entry);

    setDataArray([...dataArray, entry]);

    setEntry({
      date: "",
      muscleGroup: "",
      totalWeight: "",
      numberSets: "",
      numberReps: "",
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
          name="muscleGroup"
          className="col"
          value={entry.muscleGroup && entry.muscleGroup}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Exercise"
        />
        <input
          type="text"
          name="totalWeight"
          className="col"
          value={entry.totalWeight}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Total weight"
        />
        <input
          type="text"
          name="numberSets"
          className="col"
          value={entry.numberSets}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Number of sets"
        />
        <input
          type="text"
          name="numberReps"
          className="col"
          value={entry.numberReps}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Number of reps"
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
            <th scope="col">Exercise</th>
            <th scope="col">Total weight</th>
            <th scope="col"># of Sets</th>
            <th scope="col"># of Reps</th>
            <th scope="col">Progress</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((elm, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{elm.date}</th>
                <td>{elm.muscleGroup}</td>
                <td>{elm.totalWeight}</td>
                <td>{elm.numberSets}</td>
                <td>{elm.numberReps}</td>
                <td className="text-success">{elm.progress}</td>
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
