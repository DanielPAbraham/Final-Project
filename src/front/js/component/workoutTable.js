import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../styles/workoutTable.css";
import { Context } from "../store/appContext";

export const WorkoutTable = () => {
    const { actions, store } = useContext(Context)

    const columns = [
        { field: 'id', headerName: 'Exercise', width: 150 },
        {
            field: 'Sets',
            headerName: 'Sets',
            width: 50,
            editable: false,
        },
        {
            field: 'Reps',
            headerName: 'Reps',
            width: 30,
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
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: `${store.workouts.exercise}`, lastName: "Snow", Sets: "3", WeightUsed: 35 },
        { id: "Bench", lastName: "Lannister", Sets: "3", WeightUsed: 42 },
        { id: "Chin-Ups", lastName: "Lannister", Sets: "3", WeightUsed: 45 },
        { id: "Accesory of Choice", lastName: "Stark", Sets: "x", WeightUsed: 16 },
        { id: 5, lastName: "Targaryen", Sets: "Daenerys", WeightUsed: null },
        { id: 6, lastName: "Melisandre", Sets: null, WeightUsed: 150 },
        { id: 7, lastName: "Clifford", Sets: "Ferrara", WeightUsed: 44 },
        { id: 8, lastName: "Frances", Sets: "Rossini", WeightUsed: 36 },
        { id: 9, lastName: "Roxie", Sets: "Harvey", WeightUsed: 65 },
    ];

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={4}
                rowsPerPageOptions={[4]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};
