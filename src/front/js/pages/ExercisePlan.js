import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Usernav } from "../component/Usernav";
import { WorkoutTable } from "../component/workoutTable";

export const ExercisePlan = (props) => {
    const { store, actions } = useContext(Context);



    return (
        <>
        <Usernav />
        <WorkoutTable />
        </>


)



}