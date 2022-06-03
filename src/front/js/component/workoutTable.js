import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../../styles/workoutTable.css";

const columns = [
    { field: 'id', headerName: 'Exercise', width: 80 },
    {
        field: 'Sets',
        headerName: 'Sets',
        width: 30,
        editable: false,
    },
    {
        field: 'Reps',
        headerName: 'Reps',
        width: 30,
        editable: false,
    },
    {
        field: 'Weight Used',
        headerName: 'Weight Used',
        type: 'number',
        width: 100,
        editable: false,
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const WorkoutTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
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
}
