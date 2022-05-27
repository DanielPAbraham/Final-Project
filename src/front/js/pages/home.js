import React, { useContext } from "react";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="bg1 fullscreen h-100 text-center mt-5 end-0">
      </div>
    </>
  );
};
