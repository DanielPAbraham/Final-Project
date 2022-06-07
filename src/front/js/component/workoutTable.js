import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Context } from "../store/appContext";

export const WorkoutTable = () => {
    const { actions, store } = useContext(Context)

    const columns = [
        { field: 'id', headerName: 'Exercise', width: 300 },
        {
            field: 'Sets',
            headerName: 'Sets',
            width: 50,
            editable: false,
        },
        {
            field: 'Reps',
            headerName: 'Reps',
            width: 100,
            editable: false,
        },
        {
            field: 'WeightUsed',
            headerName: 'Weight Used',
            type: 'number',
            width: 100,
            editable: true,
        },
        {
            field: 'Notes',
            headerName: 'Notes',
            description: 'This column is for writing notes for your workout.',
            sortable: false,
            editable: true,
            width: 200,
            // valueGetter: (params) =>
            //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: "Overhead Press", Reps: "5-8", Sets: "3", WeightUsed: 105, Notes: "" },
        { id: "Chin-Ups (Assisted if needed)", Reps: "5-8", Sets: "2", WeightUsed: 55, Notes: "" },
        { id: "Rope Tricep Pushdowns", Reps: "10-12", Sets: "4", WeightUsed: 35, Notes: "" },
        { id: "Lateral Raises", Reps: "12-15", Sets: "3", WeightUsed: 20, Notes: "" },
        { id: "Hanging Leg Raises", Reps: "8-10", Sets: "3", WeightUsed: "BodyWeight", Notes: "" },
        { id: "Bulgarian Split Squats", Reps: "8-10", Sets: "4", WeightUsed: 45, Notes: "" },
        { id: "Romanian Deadlift", Reps: "10-12", Sets: "4", WeightUsed: 185, Notes: "" },
        { id: "Leg Extensions", Reps: "12-15", Sets: "3", WeightUsed: 85, Notes: "" },
        { id: "Standing Uni-Lateral Calf Raises", Reps: "10-12", Sets: "4", WeightUsed: 45, Notes: "" },
        { id: "Farmers Walks", Reps: "20-30sec", Sets: "3", WeightUsed: 60, Notes: "" },
        { id: "Incline Bench Press", Reps: "5-8", Sets: "3", WeightUsed: 155, Notes: "" },
        { id: "Weighted Dips", Reps: "5-8", Sets: "3", WeightUsed: 80, Notes: "" },
        { id: "Barbell Curls", Reps: "8-10", Sets: "3", WeightUsed: 60, Notes: "" },
        { id: "Hammer Curls", Reps: "10-12", Sets: "3", WeightUsed: 35, Notes: "" },
        { id: "Rope Face-Pulls", Reps: "12-15", Sets: "4", WeightUsed: 85, Notes: "" },
    ];

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};
