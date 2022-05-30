import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Datetime = () => {
    const { store, actions } = React.useContext(Context);
    
var datetime = ()=>
{
    var showdate=new Date();
    var displaytodaysdate=showdate.getData()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();

    return (
        <div>
                <input type="text" value={displaytodaysdate} readOnly="true" />
        </div>
    );
}
}
