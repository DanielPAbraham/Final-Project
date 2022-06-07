import React, { useContext } from "react";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="card bg-dark text-white h-100 w-100">
        <img
          src="https://phantom-marca.unidadeditorial.es/746e69f29df0fa7da1f9df1cffc2af10/crop/0x20/1499x861/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/12/16419960151339.jpg"
          className="card-img"
          alt="..."
        ></img>
        <div className="card-img-overlay ">
          {store.user ? (
            <div className="ml-auto">
              <Link to="/demo">
                <button className="btn btn-primary">Dashboard</button>
              </Link>
            </div>
          ) : (
            <div className="position-absolute top-50 start-50 translate-middle card w-25 bg-transparent">
              <Link to="/login">
                <button className="btn btn-lg btn-outline-info mx-2 btn-info w-100 h-50 tc1">
                  Login
                </button>
              </Link>
              <br></br>
              <Link to="/register">
                <button className="btn btn-lg btn-outline-info  mx-2 btn-info w-100 h-50 tc1">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
